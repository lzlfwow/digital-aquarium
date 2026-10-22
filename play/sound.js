/* A streamed original ambient cue; audio keeps time independently of drawing FPS. */
(() => {
  class AquariumMusic {
    constructor(){this.context=null;this.on=false;this.volume=.35;this.pauseTimer=null;this.audio=null;}
    init(){
      if(this.context)return;
      const Context=window.AudioContext||window.webkitAudioContext;
      if(!Context)throw new Error('Audio unavailable');
      this.context=new Context({latencyHint:'playback'});
      this.master=this.context.createGain();this.master.gain.value=0;this.master.connect(this.context.destination);
      this.audio=new Audio();this.audio.preload='none';this.audio.loop=true;this.audio.src='./assets/after-rain.mp3';
      this.source=this.context.createMediaElementSource(this.audio);this.source.connect(this.master);
      this.audio.addEventListener('error',()=>{
        this.on=false;this.pause();window.dispatchEvent(new CustomEvent('music-error'));
      });
    }
    gain(){
      if(!this.context)return;
      const g=this.master.gain,t=this.context.currentTime;
      g.cancelScheduledValues(t);g.setTargetAtTime(this.on?this.volume*.85:0,t,.25);
    }
    async toggle(){
      this.init();clearTimeout(this.pauseTimer);
      if(this.on){
        this.on=false;this.gain();this.pauseTimer=setTimeout(()=>{if(!this.on)this.pause();},1000);return false;
      }
      try{
        // Both calls originate in the user gesture, including on mobile Safari.
        await Promise.all([this.context.resume(),this.audio.play()]);
        this.on=true;this.gain();if(document.hidden)this.pause();return true;
      }catch(error){this.on=false;this.pause();throw error;}
    }
    setVolume(v){this.volume=Math.max(0,Math.min(1,v));this.gain();}
    pause(){
      clearTimeout(this.pauseTimer);this.audio?.pause();
      if(this.context)this.context.suspend().catch(()=>{});
    }
    async resume(){
      if(!this.on||!this.audio)return;
      try{await Promise.all([this.context.resume(),this.audio.play()]);this.gain();}
      catch{this.on=false;this.pause();window.dispatchEvent(new CustomEvent('music-error'));}
    }
    drop(){
      if(!this.on||this.context?.state!=='running')return;
      // A quiet, pitched response that belongs to the music; no sweeping bubble beep.
      const ac=this.context,t=ac.currentTime,osc=ac.createOscillator(),gain=ac.createGain();
      osc.frequency.value=523.251;osc.type='sine';gain.gain.setValueAtTime(0,t);
      gain.gain.linearRampToValueAtTime(.018,t+.035);gain.gain.exponentialRampToValueAtTime(.0001,t+1.2);
      osc.connect(gain);gain.connect(this.master);osc.start(t);osc.stop(t+1.3);
      osc.onended=()=>{osc.disconnect();gain.disconnect();};
    }
    stats(){return{on:this.on,state:this.context?.state,volume:this.volume,playing:this.audio?!this.audio.paused:false,time:this.audio?.currentTime||0,duration:this.audio?.duration||0,loop:this.audio?.loop||false};}
  }
  window.AquariumMusic=AquariumMusic;
})();
