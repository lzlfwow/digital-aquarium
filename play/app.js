(() => {
  'use strict';
  const { Aquarium, CONFIG } = window.Stillwater;
  const model = new Aquarium();
  const { GardenStorage, TANKS } = window.StillwaterGarden;
  let localStore;
  try { localStore=window.StillwaterNative?.storage || window.localStorage; } catch { localStore={getItem(){throw new Error('Storage unavailable');}}; }
  const storage=new GardenStorage(localStore),garden=storage.load();
  model.syncFish(garden.active);
  let economyLast=performance.now(),saveElapsed=0,uiElapsed=0;
  const canvas = document.querySelector('#water');
  let ambientTime=0, lastTime=0, running=true, frameId;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const status=document.querySelector('#status');
  let scene;
  try{scene=new AquariumScene(canvas);}
  catch(error){
    const message=document.querySelector('#render-error');
    message.hidden=false;
    message.textContent='无法开启 3D 画面。请开启浏览器硬件加速，或换用支持 WebGL 2 的浏览器。';
    console.error(error);
    return;
  }
  function showSaveState(){
    const warning=document.querySelector('#save-warning');const error=storage.error||window.StillwaterNative?.status.saveError||'';warning.hidden=!error;warning.textContent=error;
  }
  function capturePositions(){
    for(const f of model.fish){const record=garden.state.fish.find(r=>r.id===f.id);if(record){record.x=f.x;record.y=f.y;}}
  }
  let syncedRevision=-1;
  function synchronize(){
    model.syncFish(garden.active);
    const scale=TANKS[garden.state.tank].scale;
    const oldDepth=model.foodDepth??1.28;
    model.foodDepth=1.28*scale[2];
    if(oldDepth!==model.foodDepth){
      for(const item of [...model.food,...model.ripples])item.z*=model.foodDepth/oldDepth;
    }
    scene.setTank(garden.state.tank,scale);
    if(syncedRevision!==garden.revision){scene.syncDecor(garden.state.decor);syncedRevision=garden.revision;}
  }
  function save(){capturePositions();const ok=storage.save(garden);showSaveState();saveElapsed=0;return ok;}
  function commit(){synchronize();save();window.StillwaterNative?.changed();}
  const gardenUI=new GardenUI(garden,scene,commit);
  synchronize();showSaveState();
  function advanceEconomy(seconds){
    capturePositions();const revision=garden.revision;garden.tick(seconds);synchronize();
    if(garden.events.length){gardenUI.notify(garden.events.splice(0).join(' '));}
    saveElapsed+=seconds;uiElapsed+=seconds;
    if(garden.revision!==revision||saveElapsed>=5)save();
    if(garden.revision!==revision)window.StillwaterNative?.changed();
    if(uiElapsed>=.5||garden.revision!==revision){gardenUI.refresh();uiElapsed=0;}
  }
  function coordinates(event){return scene.local(event.clientX,event.clientY);}
  function resize(){
    scene.resize();scene.render(model,ambientTime,reducedMotion);
    const surface=scene.surfaceScreen(.5);
    document.querySelector('.waterline-label').style.top=`${surface.y-22}px`;
    document.querySelector('.waterline-label').style.left=`${surface.x}px`;
  }
  let press=null,multiGesture=false;const activePointers=new Set();
  canvas.addEventListener('pointermove',e=>{
    if(multiGesture)return;
    if(gardenUI.editing){model.leavePointer();gardenUI.pointerMove(e);return;}
    if(press&&Math.hypot(e.clientX-press.x,e.clientY-press.y)>5)press.dragged=true;
    const p=coordinates(e);
    if(p.inside&&!press)model.movePointer(p.x,p.y);else model.leavePointer();
    canvas.style.cursor=press?'grabbing':scene.feedPoint(e.clientX,e.clientY)?'pointer':'grab';
  });
  canvas.addEventListener('pointerleave',()=>model.leavePointer());
  function feed(x,y,z=0) {
    if(gardenUI.editing)return;
    if(model.feed(x,y,z)){
      status.textContent='一小撮食物落入水中。';
      sound.drop();
    }
  }
  canvas.addEventListener('pointerdown',e=>{
    activePointers.add(e.pointerId);
    if(activePointers.size>1){multiGesture=true;press=null;gardenUI.dragging=false;return;}
    if(gardenUI.editing){gardenUI.pointerDown(e);return;}
    if(e.button!==0)return;
    press={x:e.clientX,y:e.clientY,dragged:false};
    model.leavePointer();
  });
  canvas.addEventListener('pointerup',e=>{
    activePointers.delete(e.pointerId);
    if(multiGesture){if(!activePointers.size)multiGesture=false;press=null;return;}
    if(gardenUI.editing){gardenUI.pointerUp(e);press=null;return;}
    if(press&&!press.dragged&&e.button===0){
      const p=scene.feedPoint(e.clientX,e.clientY);if(p)feed(p.x,p.y,p.z);
    }
    press=null;
  });
  canvas.addEventListener('pointercancel',e=>{activePointers.delete(e.pointerId);if(!activePointers.size)multiGesture=false;press=null;gardenUI.dragging=false;});
  canvas.addEventListener('contextmenu',e=>e.preventDefault());
  if(matchMedia('(pointer: coarse)').matches){
    document.querySelector('.view-controls > span').textContent='单指环看 · 双指缩放';
    canvas.setAttribute('aria-label','水族箱：轻点水面投食，单指拖动环看，双指缩放。');
  }
  const qualitySelect=document.querySelector('#quality-select');qualitySelect.value=scene.quality.mode;
  qualitySelect.addEventListener('change',()=>{scene.setQuality(qualitySelect.value);status.textContent='画质已调整，养鱼进度不会改变。';});
  document.querySelector('#view-reset').addEventListener('click',()=>scene.reset());
  canvas.addEventListener('keydown',e=>{
    if(e.key.toLowerCase()==='f'&&!e.repeat){e.preventDefault();feed(.5,.2);}
  });
  const help=document.querySelector('#help'),helpToggle=document.querySelector('#help-toggle');
  helpToggle.addEventListener('click',()=>{
    help.hidden=!help.hidden;helpToggle.setAttribute('aria-expanded',String(!help.hidden));
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){help.hidden=true;helpToggle.setAttribute('aria-expanded','false');}
  });
  document.addEventListener('pointerdown',e=>{
    if(!help.hidden&&!help.contains(e.target)&&!helpToggle.contains(e.target)){
      help.hidden=true;helpToggle.setAttribute('aria-expanded','false');
    }
  });
  const sound=new AquariumMusic();
  const soundToggle=document.querySelector('#sound-toggle');
  soundToggle.addEventListener('click',async()=>{
    soundToggle.disabled=true;
    try{
      const enabled=await sound.toggle();
      soundToggle.setAttribute('aria-pressed',String(enabled));
      soundToggle.setAttribute('aria-label',enabled?'关闭音乐':'开启音乐');
      document.querySelector('#sound-label').textContent=enabled?'晴光轻奏':'开启音乐';
      status.textContent=enabled?'舒缓音乐已开启。':'音乐已关闭。';
    }catch{status.textContent='暂时无法播放音乐，请再点一次试试。';}
    finally{soundToggle.disabled=false;}
  });
  window.addEventListener('music-error',()=>{
    soundToggle.setAttribute('aria-pressed','false');soundToggle.setAttribute('aria-label','开启音乐');
    document.querySelector('#sound-label').textContent='开启音乐';
    gardenUI.notify('音乐暂时无法播放，可以稍后再试。');
  });
  document.querySelector('#volume').addEventListener('input',e=>sound.setVolume(Number(e.target.value)/100));
  function frame(now) {
    if(!running)return;
    frameId=requestAnimationFrame(frame);
    if(!scene.shouldRender(now))return;
    scene.observeFrame(now);
    if(now-economyLast>=100){advanceEconomy(Math.max(0,(now-economyLast)/1000));economyLast=now;}
    const dt=lastTime?Math.min((now-lastTime)/1000,.25):0;lastTime=now;
    for(let remaining=dt;remaining>0;remaining-=.05)model.update(Math.min(.05,remaining));
    ambientTime+=dt*(reducedMotion?.4:1);
    scene.render(model,ambientTime,reducedMotion);
  }
  let nativeActive=true;
  function updateActivity(){
    const next=nativeActive&&!document.hidden;
    if(next===running)return;
    if(running)advanceEconomy(Math.max(0,(performance.now()-economyLast)/1000));
    economyLast=performance.now();running=next;lastTime=0;
    if(!running){
      cancelAnimationFrame(frameId);activePointers.clear();multiGesture=false;press=null;gardenUI.dragging=false;model.leavePointer();save();sound.pause();
    }else{scene.resume();sound.resume();frameId=requestAnimationFrame(frame);}
  }
  document.addEventListener('visibilitychange',updateActivity);
  window.addEventListener('stillwater-native-status',showSaveState);
  function replaceSave(next){
    garden.state=next;garden.reconcilePairs();garden.events=[];garden.revision++;
    storage.blocked=false;storage.error='';
    gardenUI.finish();gardenUI.close();model.fish=[];model.food=[];model.ripples=[];
    synchronize();showSaveState();gardenUI.refresh(true);
    economyLast=performance.now();saveElapsed=0;
    window.StillwaterNative?.changed();
  }
  window.addEventListener('stillwater-before-update',e=>{e.detail.ok=save();});
  window.addEventListener('stillwater-export',e=>{capturePositions();e.detail.save=garden.serialize();});
  window.addEventListener('stillwater-import',e=>{
    try {
      const next=window.StillwaterGarden.Garden.validate(e.detail.save);
      // Write first, so an unavailable store never replaces the current in-memory aquarium.
      localStore.setItem(window.StillwaterGarden.SAVE_KEY,JSON.stringify(next));
      replaceSave(next);e.detail.ok=true;
    } catch {e.detail.ok=false;}
  });
  window.addEventListener('pagehide',()=>{save();sound.pause();});
  resize();
  window.addEventListener('resize',resize);
  frameId=requestAnimationFrame(frame);
  window.StillwaterNative?.attach({
    save,
    exportSave:()=>{capturePositions();return garden.serialize();},
    replaceSave,
    setActive:active=>{nativeActive=active;updateActivity();},
    captureWidget:()=>{if(!running||storage.blocked)throw new Error('Aquarium is paused or save is unreadable');scene.render(model,ambientTime,reducedMotion);return scene.widgetSnapshots();},
  });
  // Explicit diagnostics and injected active clock for reproducible economy checks.
  if(new URLSearchParams(location.search).has('debug')){
    window.stillwaterDebug={
      advance:seconds=>{advanceEconomy(seconds);gardenUI.refresh(true);},
      floorScreen:(x,z)=>scene.floorScreen(x,z),
      screen:(x,y)=>scene.screen(x,y),
      surfaceScreen:(x,z)=>scene.surfaceScreen(x,z),
      snapshot:()=>JSON.parse(JSON.stringify({time:model.time,fish:model.fish,
        garden:garden.serialize(),editing:gardenUI.editing,draft:gardenUI.draft,saveError:storage.error,food:model.food,eaten:model.eaten,pointer:model.pointer,audioOn:sound.on,
        music:sound.stats(),audioState:sound.context?.state,audioVolume:sound.volume,scene:scene.stats()})),
    };
  }
})();
