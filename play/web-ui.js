// Browser-only shell. Native bridge and iOS resources remain unchanged.
(() => {
  const $=id=>document.getElementById(id), panel=$('portable-panel'), note=$('portable-note');
  $('offline-status').textContent='网页版试玩 · 进度保存在当前浏览器';
  $('offline-status').nextElementSibling.textContent='首次加载需要联网。此试玩不保证离线可用；关闭页面后成长暂停。';
  $('install-help').textContent='iOS 桌面小组件仍在开发中，网页版不包含原生小组件。微信等内置浏览器出现兼容问题时，请在菜单中选择用系统浏览器打开。';
  ['install-app','check-offline','update-app'].forEach(id=>$(id).hidden=true);
  $('portable-toggle').onclick=()=>panel.showModal();
  $('portable-close').onclick=()=>panel.close();
  function currentSave(){const detail={};window.dispatchEvent(new CustomEvent('stillwater-export',{detail}));if(!detail.save)throw Error('鱼缸尚未加载完成');return detail.save;}
  $('export-save').onclick=()=>{try{const blob=new Blob([JSON.stringify(currentSave(),null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='stillwater-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);note.textContent='已导出，请妥善保存这份鱼缸备份。';}catch(e){note.textContent=e.message;}};
  $('import-save').onclick=()=>$('save-file').click();
  $('save-file').onchange=async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;try{if(file.size>2*1024*1024)throw Error('文件过大');const save=window.StillwaterGarden.Garden.validate(JSON.parse(await file.text()));if(!confirm(`导入 ${save.fish.length} 尾鱼、${save.coins} 微光币？将替换当前鱼缸，建议先导出备份。`))return;const detail={save,ok:false};window.dispatchEvent(new CustomEvent('stillwater-import',{detail}));if(!detail.ok)throw Error('写入失败');note.textContent='已导入鱼缸。';}catch{note.textContent='无法导入，原有进度没有改变。请检查文件格式与浏览器存储权限。';}};
  const share=document.createElement('button');share.textContent='分享试玩';share.type='button';$('export-save').parentElement.append(share);
  share.onclick=async()=>{const url=new URL('../',location.href).href;try{if(navigator.share)await navigator.share({title:'一缸微光 · 网页试玩',text:'给忙碌留一小缸晴光。网页版暂不含 iOS 小组件。',url});else{await navigator.clipboard.writeText(url);note.textContent='试玩链接已复制。';}}catch(e){if(e.name!=='AbortError')note.textContent='试玩链接：'+url;}};
})();
