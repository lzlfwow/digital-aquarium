/* The simulation is independent of rendering and audio, for reproducible checks. */
(function (root) {
  'use strict';
  const CONFIG = Object.freeze({
    feedCooldown: 1.8, maxFood: 12, foodPerFeed: 4, foodLifetime: 18,
    stillDelay: 3, observeCooldown: 14, observeDuration: 5.5,
    cruiseSpeed: .018, feedingSpeed: .045, observationSpeed: .026,
    surfaceTop: .12, surfaceBottom: .28,
  });
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  class Aquarium {
    constructor(random = Math.random) {
      this.random = random;
      this.time = 0;
      this.lastFeed = -10;
      this.nextObservation = 3;
      this.food = [];
      this.ripples = [];
      this.eaten = 0;
      this.pointer = { x: .5, y: .5, inside: false, still: 0 };
      this.fish = [
        { x: .65, y: .44, size: 1.14, palette: 'pearl', heading: -.18 },
        { x: .48, y: .62, size: .9, palette: 'gold', heading: 2.9 },
        { x: .78, y: .59, size: .72, palette: 'blue', heading: 3.4 },
      ].map((f, id) => ({ ...f, id, state: 'cruise', phase: id * 2.3,
        target: { x: id === 0 ? .82 : .28, y: f.y - .07 },
        speed: 0, stateUntil: 0, targetUntil: 12 + id * 4,
      }));
    }
    syncFish(records) {
      const previous = new Map(this.fish.map(f => [f.id, f]));
      this.fish = records.map((record, i) => {
        const f = previous.get(record.id) || {
          id: record.id, x: record.x, y: record.y, heading: i % 2 ? 2.9 : -.18,
          state: 'cruise', phase: Number(record.id.slice(1)) * 2.3,
          target: { x: .2 + this.random() * .6, y: record.y },
          speed: 0, stateUntil: 0, targetUntil: this.time + 8,
        };
        f.species = record.species; f.age = record.age;
        f.size = .38 + .62 * Math.min(1, record.age / 600);
        return f;
      });
      const ids = new Set(this.fish.map(f => f.id));
      for (const food of this.food) if (!ids.has(food.claimedBy)) food.claimedBy = null;
    }
    movePointer(x, y) {
      const p = this.pointer;
      if (!p.inside || Math.hypot(x-p.x, y-p.y) > .004) p.still = 0;
      p.x = x; p.y = y; p.inside = true;
    }
    leavePointer() { this.pointer.inside = false; this.pointer.still = 0; }
    feed(x, y = .19, z = 0) {
      if (y < CONFIG.surfaceTop || y > CONFIG.surfaceBottom ||
          this.time-this.lastFeed < CONFIG.feedCooldown ||
          this.food.length + CONFIG.foodPerFeed > CONFIG.maxFood) return false;
      x = clamp(x, .12, .88);
      z = clamp(z, -(this.foodDepth ?? 1.1), this.foodDepth ?? 1.1);
      this.lastFeed = this.time;
      for (let i=0; i<CONFIG.foodPerFeed; i++) {
        this.food.push({ x: x+(this.random()-.5)*.034, y: y+(this.random()-.5)*.012,
          z, age: 0, phase: this.random()*6.28, claimedBy: null });
      }
      this.ripples.push({ x, y, z, age: 0 });
      return true;
    }
    update(delta) {
      const dt = clamp(delta, 0, .05);
      this.time += dt;
      const p = this.pointer;
      if (p.inside) p.still += dt;
      for (const food of this.food) {
        food.age += dt;
        food.y += dt*.016;
        food.x += Math.sin(this.time*.55+food.phase)*dt*.002;
      }
      this.food = this.food.filter(f => f.age < CONFIG.foodLifetime && f.y < .85);
      this.ripples.forEach(r => r.age += dt);
      this.ripples = this.ripples.filter(r => r.age < 3.5);
      if (p.inside && p.still >= CONFIG.stillDelay && this.time >= this.nextObservation) {
        this.nextObservation = this.time + 2.5;
        const candidate = this.fish.filter(f => f.state === 'cruise' && distance(f,p)<.34)
          .sort((a,b)=>distance(a,p)-distance(b,p))[0];
        if (candidate && this.random() < .48 && !this.fish.some(f => f.state==='observe')) {
          candidate.state = 'observe';
          candidate.stateUntil = this.time + CONFIG.observeDuration;
          candidate.target = { x: clamp(p.x + (candidate.x < p.x ? -.045 : .045),.12,.88),
            y: clamp(p.y,.26,.77) };
          this.nextObservation = this.time + CONFIG.observeCooldown;
        }
      }
      for (const f of this.fish) {
        let meal = this.food.find(food => food.claimedBy === f.id);
        if (!meal) {
          meal = this.food.filter(food => food.claimedBy === null && food.age > .65 &&
            distance(f,food)<.46).sort((a,b)=>distance(f,a)-distance(f,b))[0];
          if (meal) meal.claimedBy = f.id;
        }
        if (meal) { f.state='feed'; f.target=meal; }
        else if (f.state==='feed' || (f.state==='observe' &&
          (this.time>f.stateUntil || !p.inside || p.still<1))) {
          f.state='cruise'; f.targetUntil=0;
        }
        if (f.state==='cruise' && (distance(f,f.target)<.045 || this.time>f.targetUntil)) {
          f.target = { x: .14+this.random()*.72, y: .32+this.random()*.43 };
          f.targetUntil = this.time+7+this.random()*12;
        }
        const dx=f.target.x-f.x, dy=f.target.y-f.y;
        const d=Math.hypot(dx,dy);
        const desired=Math.atan2(dy*.72,dx);
        const angle=Math.atan2(Math.sin(desired-f.heading), Math.cos(desired-f.heading));
        f.heading += clamp(angle, -dt*.65, dt*.65);
        const base=f.state==='feed' ? CONFIG.feedingSpeed :
          f.state==='observe' ? CONFIG.observationSpeed : CONFIG.cruiseSpeed;
        const speed=base*clamp(d/.065,.08,1)*(1-.55*Math.abs(angle)/Math.PI);
        f.speed += (speed-f.speed)*Math.min(1,dt*1.4);
        f.x=clamp(f.x+Math.cos(f.heading)*f.speed*dt,.09,.91);
        f.y=clamp(f.y+Math.sin(f.heading)*f.speed*dt/ .72,.15,.81);
        if (meal && d<.019) {
          this.food.splice(this.food.indexOf(meal),1);
          this.eaten++; f.state='cruise'; f.targetUntil=0;
        }
      }
    }
  }
  root.Stillwater = { Aquarium, CONFIG };
  if (typeof module !== 'undefined') module.exports = root.Stillwater;
})(typeof window !== 'undefined' ? window : globalThis);
