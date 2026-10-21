(() => {
  const bridge=window.StillwaterNative;if(!bridge)return;
  const panel=document.querySelector('#portable-panel'),note=document.querySelector('#portable-note');
  const toggle=document.querySelector('#portable-toggle');toggle.textContent='随身鱼缸';
  document.querySelector('#portable-title').textContent='桌面上的一缸光';
  document.querySelector('#offline-status').textContent='已装入本机 · 断网也能相伴';
  document.querySelector('#install-help').textContent='回到 iPhone 桌面，长按空白处，添加“一缸微光”小组件。它会展示最近保存的鱼缸画面，点击即可回来看看小鱼。';
  document.querySelector('#install-app').hidden=true;
  document.querySelector('#check-offline').hidden=true;
  document.querySelector('#update-app').hidden=true;
  document.querySelector('#portable-panel h3').nextElementSibling.textContent='进度保存在这台设备。可从网页导出存档后在此导入；卸载 App 前请导出备份。';
  toggle.addEventListener('click',()=>panel.showModal());
  document.querySelector('#portable-close').addEventListener('click',()=>panel.close());
  document.querySelector('#export-save').addEventListener('click',()=>bridge.action('export').catch(()=>{note.textContent='暂时无法导出，请稍后再试。';}));
  document.querySelector('#import-save').addEventListener('click',()=>bridge.action('import').catch(()=>{note.textContent='暂时无法打开文件，请稍后再试。';}));
  const update=()=>{
    const s=bridge.status;
    note.textContent=s.saveError||s.snapshotError||(s.pending?'正在保存…':'小组件由系统安排刷新。关闭 App 后，小鱼暂停成长。');
  };
  window.addEventListener('stillwater-native-status',update);update();
})();
