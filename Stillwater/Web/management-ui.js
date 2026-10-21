/* Quiet side panels and explicit placement previews; no simulation rules here. */
(() => {
  'use strict';
  const { SPECIES, TANKS, DECOR, RULES } = window.StillwaterGarden;
  const $ = id => document.getElementById(id);
  const time = seconds => { const n = Math.max(0, Math.ceil(seconds)); return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`; };
  const button = (action,id,label,disabled=false) => `<button type="button" data-action="${action}" data-id="${id}" ${disabled?'disabled':''}>${label}</button>`;
  function art(type,key){
    const frame=content=>`<svg viewBox="0 0 120 80" aria-hidden="true">${content}</svg>`;
    if(type==='fish'){
      const colors={qing:['#4b7a7f','#adcac1'],silver:['#88a4ab','#e5eee7'],gold:['#aa8850','#e2c794']}[key];
      const h=key==='gold'?17:key==='silver'?14:11;
      return frame(`<path d="M33 40 16 25 21 40 16 55Z" fill="${colors[0]}" opacity=".7"/><ellipse cx="63" cy="40" rx="34" ry="${h}" fill="${colors[1]}"/><path d="M30 40Q60 ${40-h*2} 96 40Q63 ${40-h} 30 40" fill="${colors[0]}"/><path d="M51 29 59 17 75 29M53 46 45 58 66 48" fill="${colors[0]}" opacity=".65"/><circle cx="85" cy="37" r="1.6" fill="#304c50"/>`);
    }
    if(type==='tanks'){
      const x=key==='wide'?9:22,y=key==='tall'?7:18,w=key==='wide'?102:76,h=key==='tall'?64:50;
      return frame(`<path d="M${x} ${y}h${w}v${h}H${x}Z" fill="#c6ded8" fill-opacity=".5" stroke="#8ba9a6"/><path d="M${x} ${y+10}h${w}v${h-10}H${x}Z" fill="#7faba5" fill-opacity=".18"/><path d="M${x} ${y+h-5}h${w}" stroke="#b3bca5" stroke-width="8"/><path d="M${x} ${y}l9-6h${w-18}l9 6" fill="none" stroke="#aec2bb"/>`);
    }
    if(['grass','ribbon','fern'].includes(key))return frame(`<path d="M60 66Q30 42 43 ${key==='ribbon'?8:25}Q64 31 60 66M59 66Q56 30 75 14Q78 41 59 66M58 66Q32 57 28 39Q55 42 58 66M61 66Q88 39 94 33Q89 61 61 66" fill="${key==='fern'?'#62866e':'#7b9c78'}"/>`);
    if(key==='stones')return frame('<path d="M17 61Q13 44 33 39Q47 37 50 62M41 63Q31 22 61 22Q86 22 85 63M78 63Q74 40 94 42Q111 46 103 63" fill="#94a69a" stroke="#b3c0b2"/>');
    if(key==='wood')return frame('<path d="M20 58 97 35M51 48 39 23M73 42 88 18" stroke="#8e8165" stroke-width="13" stroke-linecap="round"/>');
    return frame('<path d="M23 65V44a37 37 0 0 1 74 0v21H77V44a17 17 0 0 0-34 0v21Z" fill="#8e9f92"/>');
  }
  class GardenUI {
    constructor(garden, scene, commit) {
      this.garden=garden;this.scene=scene;this.commit=commit;this.panel=null;this.category='fish';this.editing=false;this.draft=null;this.signature='';
      document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>this.open(b.dataset.panel)));
      $('panel-close').addEventListener('click',()=>this.close());
      $('shop-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){this.category=b.dataset.category;this.refresh(true);$('panel-content').scrollTop=0;}});
      $('panel-content').addEventListener('click',e=>this.action(e));
      $('rotate-decor').addEventListener('click',()=>this.rotate());
      $('place-decor').addEventListener('click',()=>this.place());
      $('cancel-decor').addEventListener('click',()=>this.cancel());
      $('retrieve-decor').addEventListener('click',()=>{if(this.draft){this.run(this.garden.retrieve(this.draft.id));this.cancel();}});
      $('finish-decor').addEventListener('click',()=>this.finish());
      document.addEventListener('keydown',e=>{
        if(e.key==='Escape'){if(this.draft)this.cancel();else if(this.editing)this.finish();else this.close();}
        if(!this.editing||!this.draft||e.target.matches('input,textarea'))return;
        if(e.key.toLowerCase()==='r'){e.preventDefault();this.rotate();}
        if(e.key==='Enter'&&e.target===scene.canvas){e.preventDefault();this.place();}
        const delta={ArrowLeft:[-.02,0],ArrowRight:[.02,0],ArrowUp:[0,-.04],ArrowDown:[0,.04]}[e.key];
        if(delta){e.preventDefault();this.draft.x+=delta[0];this.draft.z+=delta[1];this.preview();}
      });
      this.refresh(true);
    }
    notify(message){$('garden-toast').textContent=message;$('garden-toast').hidden=false;clearTimeout(this.toastTimer);this.toastTimer=setTimeout(()=>$('garden-toast').hidden=true,5500);}
    run(result){this.notify(result.message);if(result.ok)this.commit();this.refresh(true);return result;}
    open(panel){
      if(this.editing)this.finish();
      this.panel=panel;this.returnFocus=document.activeElement;$('garden-panel').hidden=false;
      this.refresh(true);$('panel-content').scrollTop=0;$('panel-close').focus();
    }
    close(){this.panel=null;$('garden-panel').hidden=true;this.returnFocus?.focus();}
    start(id){
      const d=this.garden.state.decor.find(d=>d.id===id);if(!d)return;
      this.editing=true;this.scene.setEditing(true);this.draft={...d};this.close();
      $('edit-bar').hidden=false;this.scene.canvas.focus();this.preview();
    }
    preview(){
      if(!this.draft)return;
      const check=this.garden.canPlace(this.draft.id,this.draft.x,this.draft.z);
      this.scene.previewDecor(this.draft,check.ok);
      const existing=this.scene.decorMeshes.get(this.draft.id);if(existing)existing.visible=false;
      $('edit-title').textContent=DECOR[this.draft.kind].name;
      $('edit-hint').textContent=check.ok?'点击底砂放下 · R 旋转 · 右键环看':check.message;
      $('place-decor').disabled=!check.ok;
      for(const id of ['rotate-decor','cancel-decor','retrieve-decor'])$(id).disabled=false;
    }
    rotate(){if(this.draft){this.draft.rotation+=Math.PI/6;this.preview();}}
    place(){
      if(!this.draft)return;
      const d=this.draft,result=this.run(this.garden.place(d.id,d.x,d.z,d.rotation));
      if(result.ok)this.cancel();
    }
    cancel(){
      if(this.draft){const old=this.scene.decorMeshes.get(this.draft.id);if(old)old.visible=true;}
      this.draft=null;this.scene.previewDecor(null);$('edit-title').textContent='布置鱼缸';
      $('edit-hint').textContent='点击已有布置来移动 · 右键环看 · 双指环看缩放';
      for(const id of ['rotate-decor','place-decor','cancel-decor','retrieve-decor'])$(id).disabled=true;
    }
    finish(){this.cancel();this.editing=false;this.scene.setEditing(false);$('edit-bar').hidden=true;}
    pointerDown(e){
      if(!this.editing||e.button!==0)return;
      if(!this.draft){const id=this.scene.pickDecor(e.clientX,e.clientY);if(id){this.start(id);this.justSelected=true;this.selectionStart={x:e.clientX,y:e.clientY};}}
      this.dragging=!!this.draft;
    }
    pointerMove(e){
      if(!this.editing||!this.draft||e.buttons===2)return;
      if(this.justSelected&&this.selectionStart&&Math.hypot(e.clientX-this.selectionStart.x,e.clientY-this.selectionStart.y)>5)this.justSelected=false;
      const p=this.scene.floorPoint(e.clientX,e.clientY);
      if(p){Object.assign(this.draft,p);this.preview();}
    }
    pointerUp(e){
      if(!this.editing||e.button!==0)return;
      if(this.justSelected){this.justSelected=false;this.dragging=false;return;}
      if(this.dragging){this.pointerMove(e);this.place();}this.dragging=false;
    }
    action(e){
      const b=e.target.closest('[data-action]');if(!b||b.disabled)return;
      const {action,id}=b.dataset;
      if(action.startsWith('buy-')&&performance.now()-(this.lastPurchase??-1000)<400)return;
      if(action.startsWith('buy-'))this.lastPurchase=performance.now();
      b.disabled=true;
      let result;
      if(action==='buy-fish')result=this.garden.buy('fish',id);
      if(action==='buy-tank')result=this.garden.buy('tanks',id);
      if(action==='buy-decor')result=this.garden.buy('decor',id);
      if(action==='sell')result=this.garden.sell(id);
      if(action==='move')result=this.garden.moveFish(id);
      if(action==='equip')result=this.garden.equip(id);
      if(action==='retrieve')result=this.garden.retrieve(id);
      if(action==='place'){this.start(id);return;}
      if(action==='edit'){this.close();this.editing=true;this.scene.setEditing(true);$('edit-bar').hidden=false;this.cancel();this.scene.canvas.focus();return;}
      if(result){this.run(result);if(action==='buy-decor'&&result.ok)this.start(result.id);}
    }
    refresh(force=false){
      const s=this.garden.state;
      $('coins').textContent=s.coins;$('capacity').textContent=`${this.garden.active.length} / ${this.garden.capacity} 尾`;
      const pair=s.pairs.slice().sort((a,b)=>(a.duration-a.progress)-(b.duration-b.progress))[0];
      $('nursery-note').textContent=pair?(pair.progress>=pair.duration?'小鱼即将出生 · 请留出 2 个空位':`${s.firstBorn?'下一窝小鱼':'初见的小鱼'} · ${time(pair.duration-pair.progress)}`):'同种成鱼相伴两条，就会迎来小鱼';
      const signature=JSON.stringify([this.panel,this.category,s.coins,s.tank,s.tanks,s.decor,s.fish.map(f=>[f.id,f.species,f.age>=600,f.location]),s.pairs.map(p=>p.ids)]);
      if(this.panel&&(force||signature!==this.signature)){
        const focused=document.activeElement?.dataset;
        this.signature=signature;
        $('panel-title').textContent={shop:'水边商店',fish:'相伴鱼册',decor:'布置一缸晴光'}[this.panel];
        $('panel-copy').textContent={shop:'小鱼游向新家，换来这一缸新的可能。',fish:'同种成鱼两条自动配对。幼鱼 10 分钟长大；鱼册中暂停成长。',decor:'水草与配件只为好看，不影响繁殖。最多摆放 12 件。'}[this.panel];
        $('shop-tabs').hidden=this.panel!=='shop';
        $('shop-tabs').innerHTML=Object.entries({fish:'鱼',tanks:'鱼缸',plants:'水草',accessories:'配件'}).map(([id,label])=>`<button type="button" data-category="${id}" aria-pressed="${id===this.category}">${label}</button>`).join('');
        $('panel-content').innerHTML=this.panel==='shop'?this.shop():this.panel==='fish'?this.fish():this.decor();
        if(focused?.action){const replacement=[...$('panel-content').querySelectorAll('[data-action]')].find(b=>b.dataset.action===focused.action&&b.dataset.id===focused.id);replacement?.focus({preventScroll:true});}
      }
      document.querySelectorAll('[data-age]').forEach(el=>{const f=s.fish.find(f=>f.id===el.dataset.age);if(f)el.textContent=f.age>=600?'成鱼':`幼鱼 · ${time(600-f.age)} 后长大${f.location==='album'?'（暂停）':''}`;});
      document.querySelectorAll('[data-pair]').forEach(el=>{const p=s.pairs.find(p=>p.ids.includes(el.dataset.pair));el.textContent=p?(p.progress>=p.duration?'待产 · 需要 2 个空位':`相伴中 · ${time(p.duration-p.progress)} 后迎来小鱼`):'等待同种成鱼相伴';});
    }
    card(type,key,name,note,detail,actions){return `<article class="item-card"><div class="item-art ${type}">${art(type,key)}</div><div class="item-description"><h3>${name}</h3><p>${note}</p><small>${detail}</small></div><div class="item-actions">${actions}</div></article>`;}
    shop(){
      const s=this.garden.state;
      if(this.category==='fish')return `<p class="section-note">购入的都是成鱼 · 两条同种鱼才会繁殖</p>`+Object.entries(SPECIES).map(([id,f])=>this.card('fish',id,f.name,f.note,`幼鱼可售 ${f.sell} 币 · 购入后放入${this.garden.free?'鱼缸':'鱼册（鱼缸已满）'}`,button('buy-fish',id,`购入 · ${f.price} 币`,s.coins<f.price))).join('');
      if(this.category==='tanks')return Object.entries(TANKS).map(([id,t])=>this.card('tanks',id,t.name,t.note,`${t.capacity} 尾容量 · 永久拥有，免费切换`,s.tanks.includes(id)?button('equip',id,s.tank===id?'使用中':this.garden.active.length>t.capacity?'容量不足':'换上',s.tank===id||this.garden.active.length>t.capacity):button('buy-tank',id,`购入 · ${t.price} 币`,s.coins<t.price))).join('');
      return `<p class="section-note">购买后进入摆放预览，取消会保留在布置箱。</p>`+Object.entries(DECOR).filter(([,d])=>d.category===this.category).map(([id,d])=>this.card('decor',id,d.name,d.note,'随心摆放 · 随时收回',button('buy-decor',id,`购入 · ${d.price} 币`,s.coins<d.price))).join('');
    }
    fish(){
      const fs=this.garden.state.fish;
      return ['tank','album'].map(location=>`<h3 class="section-title">${location==='tank'?'缸里的陪伴':'暂住鱼册'} <span>${fs.filter(f=>f.location===location).length}</span></h3>`+(fs.filter(f=>f.location===location).map(f=>{
        const adult=f.age>=RULES.mature;
        return this.card('fish',f.species,`${SPECIES[f.species].name} <span class="fish-number">${f.id.slice(1).padStart(2,'0')}</span>`,`<span data-age="${f.id}"></span>`,adult&&location==='tank'?`<span data-pair="${f.id}"></span>`:location==='album'?'留在鱼册时不成长、不繁殖':'留下成长，或送往新家',button('move',f.id,location==='tank'?'收入鱼册':'放回鱼缸',location==='album'&&!this.garden.free)+(adult?'':button('sell',f.id,`出售 · ${SPECIES[f.species].sell} 币`)));
      }).join('')||'<p class="empty-note">这里还没有鱼，慢慢来。</p>')).join('');
    }
    decor(){
      return `<div class="section-note">${this.garden.state.decor.filter(d=>d.placed).length} / 12 件已摆放 ${button('edit','all','进入布置')}</div>`+this.garden.state.decor.map(d=>this.card('decor',d.kind,DECOR[d.kind].name,d.placed?'正在鱼缸里':'在布置箱里',d.placed?'可以移动、旋转或收回':'选择一处底砂，放下它',button('place',d.id,d.placed?'移动':'摆放')+(d.placed?button('retrieve',d.id,'收回'):''))).join('');
    }
  }
  window.GardenUI=GardenUI;
})();
