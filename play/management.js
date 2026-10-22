/* Deterministic, renderer-independent aquarium economy. All times are active seconds. */
(function (root) {
  'use strict';
  const SPECIES = Object.freeze({
    qing: { name: '青背鱼', price: 60, sell: 20, variant: 1, note: '青绿背脊 · 修长鱼身' },
    silver: { name: '银鳍鱼', price: 100, sell: 35, variant: 0, note: '银白侧腹 · 宽展短鳍' },
    gold: { name: '金背鱼', price: 180, sell: 60, variant: 2, note: '暖金背脊 · 圆润鱼身' },
  });
  const TANKS = Object.freeze({
    basic: { name: '晴间玻璃缸', price: 0, capacity: 6, scale: [1, 1, 1], note: '初见的晴光，小小的陪伴' },
    wide: { name: '横景宽缸', price: 200, capacity: 12, scale: [1.22, 1, 1.18], note: '舒展横向水景，多一些游动空间' },
    tall: { name: '高景鱼缸', price: 500, capacity: 16, scale: [1, 1.25, 1.1], note: '更深的水色，更丰富的层次' },
  });
  const DECOR = Object.freeze({
    grass: { name: '矮草', price: 30, category: 'plants', radius: .29, note: '贴近底砂的一小簇绿意' },
    ribbon: { name: '长叶水草', price: 60, category: 'plants', radius: .35, note: '随水流轻轻摇曳' },
    fern: { name: '蕨类', price: 90, category: 'plants', radius: .4, note: '舒展的层叠叶片' },
    stones: { name: '卵石组', price: 40, category: 'accessories', radius: .48, note: '青灰石面，接住水底光纹' },
    wood: { name: '沉木', price: 80, category: 'accessories', radius: .65, note: '温润木色与自然枝杈' },
    cave: { name: '石洞', price: 120, category: 'accessories', radius: .65, note: '给水下留一个安静角落' },
  });
  const RULES = Object.freeze({ firstBirth: 30, birth: 180, mature: 600, litter: 2, maxDecor: 12 });
  const SAVE_KEY = 'stillwater.garden.v1';
  const clone = x => JSON.parse(JSON.stringify(x));
  const finite = x => typeof x === 'number' && Number.isFinite(x);
  const owns = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  class Garden {
    constructor(saved) {
      this.state = saved ? Garden.validate(saved) : {
        version: 1, coins: 0, nextId: 7, elapsed: 0, tank: 'basic', tanks: ['basic'], firstBorn: false,
        fish: [
          { id: 'f1', species: 'qing', age: 600, location: 'tank', x: .37, y: .47 },
          { id: 'f2', species: 'qing', age: 600, location: 'tank', x: .64, y: .59 },
        ], pairs: [],
        decor: [
          { id: 'd3', kind: 'ribbon', placed: true, x: .13, z: .18, rotation: -.3 },
          { id: 'd4', kind: 'ribbon', placed: true, x: .87, z: .18, rotation: .5 },
          { id: 'd5', kind: 'stones', placed: true, x: .23, z: .57, rotation: .2 },
          { id: 'd6', kind: 'grass', placed: true, x: .78, z: .65, rotation: 1 },
        ],
      };
      this.events = []; this.revision = 0; this.reconcilePairs();
    }
    static validate(input) {
      const s = clone(input);
      const fail = () => { throw new Error('存档格式无法读取，旧存档已保留。'); };
      if (!s || s.version !== 1 || !Number.isSafeInteger(s.coins) || s.coins < 0 ||
          !Number.isSafeInteger(s.nextId) || s.nextId < 1 || !finite(s.elapsed) || s.elapsed < 0 ||
          !owns(TANKS, s.tank) || !Array.isArray(s.tanks) || !s.tanks.includes(s.tank) ||
          s.tanks.some(k => !owns(TANKS, k)) || !s.tanks.includes('basic') ||
          typeof s.firstBorn !== 'boolean' || !Array.isArray(s.fish) || !Array.isArray(s.decor) || !Array.isArray(s.pairs)) fail();
      const ids = new Set();
      for (const f of s.fish) {
        if (!/^f\d+$/.test(f.id) || ids.has(f.id) || !owns(SPECIES, f.species) || !finite(f.age) || f.age < 0 ||
            !['tank', 'album'].includes(f.location) || !finite(f.x) || f.x < 0 || f.x > 1 || !finite(f.y) || f.y < 0 || f.y > 1) fail();
        ids.add(f.id);
      }
      for (const d of s.decor) {
        if (!/^d\d+$/.test(d.id) || ids.has(d.id) || !owns(DECOR, d.kind) || typeof d.placed !== 'boolean' ||
            !finite(d.x) || !finite(d.z) || !finite(d.rotation) || d.x < 0 || d.x > 1 || d.z < 0 || d.z > 1) fail();
        ids.add(d.id);
      }
      if ([...ids].some(id => Number(id.slice(1)) >= s.nextId) ||
          s.fish.filter(f => f.location === 'tank').length > TANKS[s.tank].capacity ||
          s.decor.filter(d => d.placed).length > RULES.maxDecor) fail();
      const paired = new Set();
      for (const p of s.pairs) {
        if (!Array.isArray(p.ids) || p.ids.length !== 2 || !finite(p.progress) || p.progress < 0 || ![30,180].includes(p.duration)) fail();
        const fs = p.ids.map(id => s.fish.find(f => f.id === id));
        if (fs.some(f => !f || f.location !== 'tank' || f.age < RULES.mature) || fs[0].species !== fs[1].species || p.ids.some(id => paired.has(id)) || p.ids[0] === p.ids[1] || p.progress > p.duration) fail();
        if (p.duration === 30 && (s.firstBorn || !p.ids.includes('f1') || !p.ids.includes('f2'))) fail();
        p.ids.forEach(id => paired.add(id));
      }
      return s;
    }
    get active() { return this.state.fish.filter(f => f.location === 'tank'); }
    get capacity() { return TANKS[this.state.tank].capacity; }
    get free() { return this.capacity - this.active.length; }
    result(ok, message, extra = {}) { return { ok, message, ...extra }; }
    changed(message, extra) { this.revision++; return this.result(true, message, extra); }
    reconcilePairs() {
      const adults = this.active.filter(f => f.age >= RULES.mature), used = new Set();
      this.state.pairs = this.state.pairs.filter(p => {
        const keep = p.ids.every(id => adults.some(f => f.id === id));
        if (keep) p.ids.forEach(id => used.add(id));
        return keep;
      });
      for (const species of Object.keys(SPECIES)) {
        const available = adults.filter(f => f.species === species && !used.has(f.id));
        for (let i = 0; i + 1 < available.length; i += 2) {
          const ids = [available[i].id, available[i+1].id];
          this.state.pairs.push({ ids, progress: 0, duration: !this.state.firstBorn && ids.includes('f1') && ids.includes('f2') ? 30 : 180 });
        }
      }
    }
    // Event-sized slices ensure identical results at 15 FPS, 60 FPS or injected test clocks.
    tick(seconds) {
      if (!finite(seconds) || seconds <= 0) return;
      this.releaseBirths();
      let remaining = seconds;
      while (remaining > 1e-8) {
        this.reconcilePairs();
        let step = remaining;
        for (const f of this.active) if (f.age < RULES.mature) step = Math.min(step, RULES.mature - f.age);
        for (const p of this.state.pairs) if (p.progress < p.duration) step = Math.min(step, p.duration - p.progress);
        for (const f of this.active) f.age = Math.min(RULES.mature, f.age + step);
        for (const p of this.state.pairs) p.progress = Math.min(p.duration, p.progress + step);
        this.state.elapsed += step; remaining -= step;
        this.releaseBirths();
      }
      this.reconcilePairs();
    }
    releaseBirths() {
        for (const p of this.state.pairs) {
          if (p.progress + 1e-8 < p.duration || this.free < RULES.litter) continue;
          const parent = this.state.fish.find(f => f.id === p.ids[0]);
          for (let i = 0; i < RULES.litter; i++) this.state.fish.push({
            id: `f${this.state.nextId++}`, species: parent.species, age: 0, location: 'tank',
            x: Math.min(.85, Math.max(.15, parent.x + (i ? .035 : -.035))), y: Math.min(.75, parent.y + .04),
          });
          if (p.duration === 30) this.state.firstBorn = true;
          p.progress = 0; p.duration = RULES.birth; this.revision++;
          this.events.push(`两条${SPECIES[parent.species].name}宝宝出生了。可以留下陪伴，也可以在鱼册里出售。`);
        }
    }
    buy(category, key) {
      const catalog = category === 'fish' ? SPECIES : category === 'tanks' ? TANKS : category === 'decor' ? DECOR : null;
      if (!catalog || !owns(catalog, key)) return this.result(false, '没有这件商品。');
      const item = catalog[key], s = this.state;
      if (category === 'tanks' && s.tanks.includes(key)) return this.result(false, '这个鱼缸已经拥有。');
      if (s.coins < item.price) return this.result(false, '微光币还不够，可以出售小鱼慢慢攒。');
      s.coins -= item.price;
      if (category === 'fish') {
        const candidates = [.24,.5,.76].flatMap(x => [.36,.65].map(y => ({x,y})));
        const clearance = p => Math.min(2, ...this.active.map(f => Math.hypot(p.x-f.x, p.y-f.y)));
        const spot = candidates.sort((a,b) => clearance(b)-clearance(a))[0];
        const f = { id: `f${s.nextId++}`, species: key, age: 600, location: this.free ? 'tank' : 'album', ...spot };
        s.fish.push(f); this.reconcilePairs();
        return this.changed(`${item.name}已来到${f.location === 'tank' ? '鱼缸' : '鱼册'}。`, { id: f.id });
      }
      if (category === 'tanks') { s.tanks.push(key); return this.changed(`已拥有${item.name}，随时可以换上。`); }
      const d = { id: `d${s.nextId++}`, kind: key, placed: false, x: .5, z: .5, rotation: 0 };
      s.decor.push(d); return this.changed(`${item.name}已收入布置箱。`, { id: d.id });
    }
    sell(id) {
      const f = this.state.fish.find(f => f.id === id);
      if (!f) return this.result(false, '这条小鱼已经离开了。');
      if (f.age >= RULES.mature) return this.result(false, '成鱼留下陪伴；只出售幼鱼。');
      this.state.fish.splice(this.state.fish.indexOf(f), 1); this.state.coins += SPECIES[f.species].sell;
      this.reconcilePairs(); return this.changed(`小鱼游向新家，获得 ${SPECIES[f.species].sell} 微光币。`);
    }
    moveFish(id) {
      const f = this.state.fish.find(f => f.id === id);
      if (!f) return this.result(false, '没有找到这条鱼。');
      if (f.location === 'album' && this.free < 1) return this.result(false, '鱼缸满了，先留一个位置。');
      f.location = f.location === 'tank' ? 'album' : 'tank'; this.reconcilePairs();
      return this.changed(f.location === 'tank' ? '它又游回了水里。' : '已收入鱼册，成长和繁殖暂时停下。');
    }
    equip(key) {
      if (!this.state.tanks.includes(key)) return this.result(false, '还没有拥有这个鱼缸。');
      if (this.active.length > TANKS[key].capacity) return this.result(false, '鱼的数量超过容量，请先将一些鱼收入鱼册。');
      this.state.tank = key;
      const placed = this.state.decor.filter(d => d.placed);
      for (const d of placed) d.placed = false;
      let returned = 0;
      for (const d of placed) { if (this.canPlace(d.id, d.x, d.z).ok) d.placed = true; else returned++; }
      return this.changed(`已换上${TANKS[key].name}。${returned ? `${returned} 件布置因空间不足收回布置箱。` : ''}`);
    }
    canPlace(id, x, z) {
      const d = this.state.decor.find(d => d.id === id);
      if (!d) return this.result(false, '布置箱里没有这件物品。');
      const [sx,,sz] = TANKS[this.state.tank].scale, w = 6.72*sx, depth = 2.72*sz, radius = DECOR[d.kind].radius;
      if (!finite(x) || !finite(z) || Math.min(x,1-x)*w < radius || Math.min(z,1-z)*depth < radius)
        return this.result(false, '请放在缸内，给边缘留一点空间。');
      const others = this.state.decor.filter(o => o.placed && o.id !== id);
      if (others.length >= RULES.maxDecor) return this.result(false, '最多摆放 12 件，可以先收回一些。');
      if (others.some(o => Math.hypot((x-o.x)*w, (z-o.z)*depth) < radius + DECOR[o.kind].radius))
        return this.result(false, '这里有些拥挤，挪开一点再放下。');
      return this.result(true, '可以放在这里。');
    }
    place(id, x, z, rotation) {
      const check = this.canPlace(id, x, z);
      if (!check.ok) return check;
      if (!finite(rotation)) return this.result(false, '角度无效。');
      Object.assign(this.state.decor.find(d => d.id === id), { placed: true, x, z, rotation });
      return this.changed('布置已放好。');
    }
    retrieve(id) {
      const d = this.state.decor.find(d => d.id === id);
      if (!d) return this.result(false, '没有找到这件布置。');
      d.placed = false; return this.changed('已收回布置箱。');
    }
    serialize() { return clone(this.state); }
  }
  class GardenStorage {
    constructor(storage) { this.storage = storage; this.error = ''; this.blocked = false; }
    load() {
      try { const raw = this.storage.getItem(SAVE_KEY); return new Garden(raw ? JSON.parse(raw) : undefined); }
      catch { this.error = '存档暂时无法读取。旧档已保留，本次体验不会覆盖它。'; this.blocked = true; return new Garden(); }
    }
    save(garden) {
      if (this.blocked) return false;
      try { this.storage.setItem(SAVE_KEY, JSON.stringify(garden.serialize())); this.error = ''; return true; }
      catch { this.error = '存档未能写入浏览器，刷新可能丢失本次进度。请允许本地存储并留出空间。'; return false; }
    }
  }
  root.StillwaterGarden = { Garden, GardenStorage, SPECIES, TANKS, DECOR, RULES, SAVE_KEY };
  if (typeof module !== 'undefined') module.exports = root.StillwaterGarden;
})(typeof window !== 'undefined' ? window : globalThis);
