/* Bundled only by ios:prepare. The website has no native bridge or native storage. */
(() => {
  'use strict';
  const handler=window.webkit?.messageHandlers?.stillwater;
  const bootstrap=window.__stillwaterBootstrap;
  if(!handler||!bootstrap)return;
  const {Garden,SAVE_KEY}=window.StillwaterGarden;
  let raw=bootstrap.save ?? null, readError=bootstrap.loadError||'', api;
  let queue=Promise.resolve(), pending=0, saveError='', snapshotError='';
  let active=true, importing=false, dirty=true, timer=null, lastCapture=-Infinity;
  function signal(){window.dispatchEvent(new CustomEvent('stillwater-native-status',{detail:{pending,saveError,snapshotError}}));}
  // One queue for game writes, imported saves and snapshots; a rejected write doesn't poison later retries.
  function send(type,data={}) {
    const operation=queue.then(()=>handler.postMessage({type,...data}));
    queue=operation.catch(()=>{});return operation;
  }
  function persist(save) {
    pending++;signal();
    return send('save',{save}).then(()=>{saveError='';},error=>{saveError='存档未能写入本机，请先导出备份。';throw error;}).finally(()=>{pending--;signal();});
  }
  const storage={
    getItem(key){if(readError)throw new Error(readError);return key===SAVE_KEY?raw:null;},
    setItem(key,value){
      if(key!==SAVE_KEY)return;
      const save=Garden.validate(JSON.parse(value));raw=JSON.stringify(save);
      persist(save).catch(()=>{});
    },
  };
  function schedule() {
    if(timer||!active||document.hidden||!api||importing||!dirty)return;
    timer=setTimeout(async()=>{
      timer=null;if(!active||document.hidden||importing)return;
      dirty=false;lastCapture=performance.now();
      try {
        const save=api.exportSave();
        const images=api.captureWidget();
        await send('snapshot',{save,images});snapshotError='';
      } catch {snapshotError='小组件画面暂未更新，将保留上次画面。';dirty=true;}
      signal();if(dirty)schedule();
    },Math.max(200,10000-(performance.now()-lastCapture)));
  }
  function setActive(value) {
    active=!!value;
    api?.setActive(active&&!importing);
    if(!active){clearTimeout(timer);timer=null;}else{dirty=true;schedule();}
  }
  const bridge=window.StillwaterNative={
    storage,
    attach(value){api=value;api.setActive(active);api.save();dirty=true;schedule();send('ready').catch(()=>{});},
    changed(){dirty=true;schedule();},
    setActive,
    inspectImport(text){const save=Garden.validate(JSON.parse(text));return {fish:save.fish.length,coins:save.coins};},
    async importSave(text){
      if(!api||importing)throw new Error('鱼缸尚未准备好');
      const save=Garden.validate(JSON.parse(text));
      importing=true;api.setActive(false);clearTimeout(timer);timer=null;
      try {
        // Pausing may enqueue one final save of the old aquarium. persist follows it in the same queue.
        await persist(save);
        raw=JSON.stringify(save);readError='';api.replaceSave(save);dirty=true;
        return true;
      } finally {importing=false;api.setActive(active);schedule();}
    },
    exportSave(){if(!api)throw new Error('鱼缸尚未准备好');return JSON.stringify(api.exportSave(),null,2);},
    action(type){return send(type);},
    flush(){api?.save();return queue;},
    get status(){return {pending,saveError,snapshotError};},
  };
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){clearTimeout(timer);timer=null;}else{dirty=true;schedule();}
  });
})();
