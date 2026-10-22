(()=>{var Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fu=0,ml=1,mu=2,Ir=1,gu=2,ia=3,rr=0,At=1,pt=2,vi=0,sa=1,ua=2,gl=3,vl=4,vu=5,Rr=100,_u=101,xu=102,Su=103,yu=104,Mu=200,bu=201,Tu=202,Eu=203,Bh=204,zh=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Lu=211,Du=212,Iu=213,Nu=214,Tn=0,En=1,wn=2,da=3,An=4,Rn=5,Cn=6,Pn=7,xo=0,Uu=1,Ou=2,Xt=0,So=1,yo=2,Mo=3,Ma=4,bo=5,To=6,Eo=7,Hh=300,ar=301,Or=302,na=303,Bs=304,Cs=306,Ln=1e3,Ci=1001,Dn=1002,Ct=1003,Fu=1004,Na=1005,Nt=1006,zs=1007,tr=1008,Qt=1009,Vh=1010,kh=1011,pa=1012,wo=1013,_i=1014,li=1015,jt=1016,Ao=1017,Ro=1018,fa=1020,Gh=35902,Wh=35899,Xh=1021,jh=1022,hi=1023,Di=1026,ir=1027,Co=1028,Po=1029,sr=1030,Lo=1031,Do=1033,us=33776,ds=33777,ps=33778,fs=33779,In=35840,Nn=35841,Un=35842,On=35843,Fn=36196,Bn=37492,zn=37496,Hn=37488,Vn=37489,xs=37490,kn=37491,Gn=37808,Wn=37809,Xn=37810,jn=37811,qn=37812,Yn=37813,Kn=37814,Jn=37815,Zn=37816,Qn=37817,$n=37818,eo=37819,to=37820,io=37821,ro=36492,ao=36494,so=36495,no=36283,oo=36284,Ss=36285,lo=36286,ys=2300,ho=2301,Hs=2302,_l=2303,xl=2400,Sl=2401,yl=2402,Bu=3200,Ms=0,zu=1,Vi="",Gt="srgb",bs="srgb-linear",Ts="linear",qe="srgb",Vs=7680,Hu=519,Vu=512,ku=513,Gu=514,Io=515,Wu=516,Xu=517,No=518,ju=519,qu=35044,Ml="300 es",gi=2e3,ma=2001;function Yu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ku(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Es(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ju(){let e=Es("canvas");return e.style.display="block",e}var bl={},Fr=null;function Tl(...e){let t="THREE."+e.shift();Fr?Fr("log",t,...e):console.log(t,...e)}function qh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ae(...e){e=qh(e);let t="THREE."+e.shift();if(Fr)Fr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Le(...e){e=qh(e);let t="THREE."+e.shift();if(Fr)Fr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Nr(...e){let t=e.join(" ");t in bl||(bl[t]=!0,Ae(...e))}function Zu(e,t,i){return new Promise(function(r,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var Qu={[Tn]:En,[wn]:Cn,[An]:Pn,[da]:Rn,[En]:Tn,[Cn]:wn,[Pn]:An,[Rn]:da},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=1234567,oa=Math.PI/180,ga=180/Math.PI;function lr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+"-"+Dt[t&255]+Dt[t>>8&255]+"-"+Dt[t>>16&15|64]+Dt[t>>24&255]+"-"+Dt[i&63|128]+Dt[i>>8&255]+"-"+Dt[i>>16&255]+Dt[i>>24&255]+Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]).toLowerCase()}function Fe(e,t,i){return Math.max(t,Math.min(i,e))}function Uo(e,t){return(e%t+t)%t}function $u(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function ed(e,t,i){return e!==t?(i-e)/(t-e):0}function la(e,t,i){return(1-i)*e+i*t}function td(e,t,i,r){return la(e,t,1-Math.exp(-i*r))}function id(e,t=1){return t-Math.abs(Uo(e,t*2)-t)}function rd(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ad(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function sd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function nd(e,t){return e+Math.random()*(t-e)}function od(e){return e*(.5-Math.random())}function ld(e){e!==void 0&&(El=e);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(e){return e*oa}function cd(e){return e*ga}function ud(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function dd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function pd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function fd(e,t,i,r,a){let s=Math.cos,n=Math.sin,o=s(i/2),l=n(i/2),h=s((t+r)/2),c=n((t+r)/2),d=s((t-r)/2),u=n((t-r)/2),p=s((r-t)/2),g=n((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*g,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*g,o*h);break;case"ZYZ":e.set(l*g,l*p,o*c,o*h);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Cr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ba={DEG2RAD:oa,RAD2DEG:ga,generateUUID:lr,clamp:Fe,euclideanModulo:Uo,mapLinear:$u,inverseLerp:ed,lerp:la,damp:td,pingpong:id,smoothstep:rd,smootherstep:ad,randInt:sd,randFloat:nd,randFloatSpread:od,seededRandom:ld,degToRad:hd,radToDeg:cd,isPowerOfTwo:ud,ceilPowerOfTwo:dd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:fd,normalize:Ft,denormalize:Cr},re=class Yh{static{Yh.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),s=this.x-t.x,n=this.y-t.y;return this.x=s*r-n*a+t.x,this.y=s*a+n*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=a[s+0],u=a[s+1],p=a[s+2],g=a[s+3];if(c!==g||o!==d||l!==u||h!==p){let _=o*d+l*u+h*p+c*g;_<0&&(d=-d,u=-u,p=-p,g=-g,_=-_);let m=1-n;if(_<.9995){let f=Math.acos(_),M=Math.sin(f);m=Math.sin(m*f)/M,n=Math.sin(n*f)/M,o=o*m+d*n,l=l*m+u*n,h=h*m+p*n,c=c*m+g*n}else{o=o*m+d*n,l=l*m+u*n,h=h*m+p*n,c=c*m+g*n;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],d=a[s+1],u=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-n*u,e[t+2]=l*p+h*u+n*d-o*c,e[t+3]=h*p-n*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+n+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(a-l)*u,this._z=(s-r)*u}else if(i>n&&i>c){let u=2*Math.sqrt(1+i-n-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+s)/u,this._z=(a+l)/u}else if(n>c){let u=2*Math.sqrt(1+n-i-c);this._w=(a-l)/u,this._x=(r+s)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-n);this._w=(s-r)/u,this._x=(a+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=this.dot(e);n<0&&(i=-i,r=-r,a=-a,s=-s,n=-n);let o=1-t;if(n<.9995){let l=Math.acos(n),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class Kh{static{Kh.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(wl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[3]*r+s[6]*a,this.y=s[1]*i+s[4]*r+s[7]*a,this.z=s[2]*i+s[5]*r+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=t.elements,n=1/(s[3]*i+s[7]*r+s[11]*a+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*a+s[12])*n,this.y=(s[1]*i+s[5]*r+s[9]*a+s[13])*n,this.z=(s[2]*i+s[6]*r+s[10]*a+s[14])*n,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,s=t.x,n=t.y,o=t.z,l=t.w,h=2*(n*a-o*r),c=2*(o*i-s*a),d=2*(s*r-n*i);return this.x=i+l*h+n*d-o*c,this.y=r+l*c+o*h-s*d,this.z=a+l*d+s*c-n*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a,this.y=s[1]*i+s[5]*r+s[9]*a,this.z=s[2]*i+s[6]*r+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,s=t.z,n=i.x,o=i.y,l=i.z;return this.x=a*l-s*o,this.y=s*n-r*l,this.z=r*o-a*n,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ks=new C,wl=new Pt,Ue=class Jh{static{Jh.prototype.isMatrix3=!0}constructor(t,i,r,a,s,n,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h)}set(t,i,r,a,s,n,o,l,h){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=n,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],g=r[8],_=a[0],m=a[3],f=a[6],M=a[1],w=a[4],x=a[7],E=a[2],A=a[5],R=a[8];return s[0]=n*_+o*M+l*E,s[3]=n*m+o*w+l*A,s[6]=n*f+o*x+l*R,s[1]=h*_+c*M+d*E,s[4]=h*m+c*w+d*A,s[7]=h*f+c*x+d*R,s[2]=u*_+p*M+g*E,s[5]=u*m+p*w+g*A,s[8]=u*f+p*x+g*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return i*n*c-i*o*h-r*s*c+r*o*l+a*s*h-a*n*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*n-o*h,u=o*l-c*s,p=h*s-n*l,g=i*d+r*u+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(a*h-c*r)*_,t[2]=(o*r-a*n)*_,t[3]=u*_,t[4]=(c*i-a*l)*_,t[5]=(a*s-o*i)*_,t[6]=p*_,t[7]=(r*l-h*i)*_,t[8]=(n*i-r*s)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,s,n,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*n+h*o)+n+t,-a*h,a*l,-a*(-h*n+l*o)+o+i,0,0,1),this}scale(t,i){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gs.makeScale(t,i)),this}rotate(t){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gs.makeRotation(-t)),this}translate(t,i){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gs.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gs=new Ue,Al=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){let e={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(a,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===qe&&(a.r=Li(a.r),a.g=Li(a.g),a.b=Li(a.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===qe&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vi?Ts:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,n){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[bs]:{primaries:t,whitePoint:r,transfer:Ts,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),e}var Ve=md();function Li(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ur(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var pr,gd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=Es("canvas")),pr.width=e.width,pr.height=e.height;let r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Li(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vd=0,Oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,n=r.length;s<n;s++)r[s].isDataTexture?a.push(Ws(r[s].image)):a.push(Ws(r[s]))}else a=Ws(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ws(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?gd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var _d=0,Xs=new C,ri=class ms extends ki{constructor(t=ms.DEFAULT_IMAGE,i=ms.DEFAULT_MAPPING,r=Ci,a=Ci,s=Nt,n=tr,o=hi,l=Qt,h=ms.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=lr(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=s,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ae(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ln:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Dn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ln:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Dn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=Hh;ri.DEFAULT_ANISOTROPY=1;var gt=class Zh{static{Zh.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,s=this.w,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a+n[12]*s,this.y=n[1]*i+n[5]*r+n[9]*a+n[13]*s,this.z=n[2]*i+n[6]*r+n[10]*a+n[14]*s,this.w=n[3]*i+n[7]*r+n[11]*a+n[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,s,n=t.elements,o=n[0],l=n[4],h=n[8],c=n[1],d=n[5],u=n[9],p=n[2],g=n[6],_=n[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,M=(d+1)/2,w=(_+1)/2,x=(l+c)/4,E=(h+p)/4,A=(u+g)/4;return f>M&&f>w?f<.01?(r=0,a=.707106781,s=.707106781):(r=Math.sqrt(f),a=x/r,s=E/r):M>w?M<.01?(r=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),r=x/a,s=A/a):w<.01?(r=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),r=E/s,a=A/s),this.set(r,a,s,i),this}let m=Math.sqrt((g-u)*(g-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xd=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new ri(r),s=i.count;for(let n=0;n<s;n++)this.textures[n]=a.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Oo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends xd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qh=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Sd=class extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},it=class co{static{co.prototype.isMatrix4=!0}constructor(t,i,r,a,s,n,o,l,h,c,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,s,n,o,l,h,c,d,u,p,g,_,m)}set(t,i,r,a,s,n,o,l,h,c,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=s,f[5]=n,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new co().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/fr.setFromMatrixColumn(t,0).length(),s=1/fr.setFromMatrixColumn(t,1).length(),n=1/fr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*n,i[9]=r[9]*n,i[10]=r[10]*n,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,s=t.z,n=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=n*c,p=n*d,g=o*c,_=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=u-_*h,i[9]=-o*l,i[2]=_-u*h,i[6]=g+p*h,i[10]=n*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,g=h*c,_=h*d;i[0]=u+_*o,i[4]=g*o-p,i[8]=n*h,i[1]=n*d,i[5]=n*c,i[9]=-o,i[2]=p*o-g,i[6]=_+u*o,i[10]=n*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,g=h*c,_=h*d;i[0]=u-_*o,i[4]=-n*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=n*c,i[9]=_-u*o,i[2]=-n*h,i[6]=o,i[10]=n*l}else if(t.order==="ZYX"){let u=n*c,p=n*d,g=o*c,_=o*d;i[0]=l*c,i[4]=g*h-p,i[8]=u*h+_,i[1]=l*d,i[5]=_*h+u,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=n*l}else if(t.order==="YZX"){let u=n*l,p=n*h,g=o*l,_=o*h;i[0]=l*c,i[4]=_-u*d,i[8]=g*d+p,i[1]=d,i[5]=n*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+g,i[10]=u-_*d}else if(t.order==="XZY"){let u=n*l,p=n*h,g=o*l,_=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+_,i[5]=n*c,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*c,i[10]=_*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Md)}lookAt(t,i,r){let a=this.elements;return Yt.subVectors(t,i),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Oi.crossVectors(r,Yt),Oi.lengthSq()===0&&(Math.abs(r.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Oi.crossVectors(r,Yt)),Oi.normalize(),Ua.crossVectors(Yt,Oi),a[0]=Oi.x,a[4]=Ua.x,a[8]=Yt.x,a[1]=Oi.y,a[5]=Ua.y,a[9]=Yt.y,a[2]=Oi.z,a[6]=Ua.z,a[10]=Yt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,s=this.elements,n=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],g=r[2],_=r[6],m=r[10],f=r[14],M=r[3],w=r[7],x=r[11],E=r[15],A=a[0],R=a[4],v=a[8],b=a[12],L=a[1],P=a[5],D=a[9],j=a[13],I=a[2],H=a[6],Y=a[10],k=a[14],se=a[3],X=a[7],K=a[11],Q=a[15];return s[0]=n*A+o*L+l*I+h*se,s[4]=n*R+o*P+l*H+h*X,s[8]=n*v+o*D+l*Y+h*K,s[12]=n*b+o*j+l*k+h*Q,s[1]=c*A+d*L+u*I+p*se,s[5]=c*R+d*P+u*H+p*X,s[9]=c*v+d*D+u*Y+p*K,s[13]=c*b+d*j+u*k+p*Q,s[2]=g*A+_*L+m*I+f*se,s[6]=g*R+_*P+m*H+f*X,s[10]=g*v+_*D+m*Y+f*K,s[14]=g*b+_*j+m*k+f*Q,s[3]=M*A+w*L+x*I+E*se,s[7]=M*R+w*P+x*H+E*X,s[11]=M*v+w*D+x*Y+E*K,s[15]=M*b+w*j+x*k+E*Q,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[12],n=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],M=l*p-h*u,w=o*p-h*d,x=o*u-l*d,E=n*p-h*c,A=n*u-l*c,R=n*d-o*c;return i*(_*M-m*w+f*x)-r*(g*M-m*E+f*A)+a*(g*w-_*E+f*R)-s*(g*x-_*A+m*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return i*(n*c-o*h)-r*(s*c-o*l)+a*(s*h-n*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],s=t[3],n=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=i*o-r*n,w=i*l-a*n,x=i*h-s*n,E=r*l-a*o,A=r*h-s*o,R=a*h-s*l,v=c*_-d*g,b=c*m-u*g,L=c*f-p*g,P=d*m-u*_,D=d*f-p*_,j=u*f-p*m,I=M*j-w*D+x*P+E*L-A*b+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*j-l*D+h*P)*H,t[1]=(a*D-r*j-s*P)*H,t[2]=(_*R-m*A+f*E)*H,t[3]=(u*A-d*R-p*E)*H,t[4]=(l*L-n*j-h*b)*H,t[5]=(i*j-a*L+s*b)*H,t[6]=(m*x-g*R-f*w)*H,t[7]=(c*R-u*x+p*w)*H,t[8]=(n*D-o*L+h*v)*H,t[9]=(r*L-i*D-s*v)*H,t[10]=(g*A-_*x+f*M)*H,t[11]=(d*x-c*A-p*M)*H,t[12]=(o*b-n*P-l*v)*H,t[13]=(i*P-r*b+a*v)*H,t[14]=(_*w-g*E-m*M)*H,t[15]=(c*E-d*w+u*M)*H,this}scale(t){let i=this.elements,r=t.x,a=t.y,s=t.z;return i[0]*=r,i[4]*=a,i[8]*=s,i[1]*=r,i[5]*=a,i[9]*=s,i[2]*=r,i[6]*=a,i[10]*=s,i[3]*=r,i[7]*=a,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),s=1-r,n=t.x,o=t.y,l=t.z,h=s*n,c=s*o;return this.set(h*n+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*n,0,h*l-a*o,c*l+a*n,s*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,s,n){return this.set(1,r,s,0,t,1,n,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,s=i._x,n=i._y,o=i._z,l=i._w,h=s+s,c=n+n,d=o+o,u=s*h,p=s*c,g=s*d,_=n*c,m=n*d,f=o*d,M=l*h,w=l*c,x=l*d,E=r.x,A=r.y,R=r.z;return a[0]=(1-(_+f))*E,a[1]=(p+x)*E,a[2]=(g-w)*E,a[3]=0,a[4]=(p-x)*A,a[5]=(1-(u+f))*A,a[6]=(m+M)*A,a[7]=0,a[8]=(g+w)*R,a[9]=(m-M)*R,a[10]=(1-(u+_))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return r.set(1,1,1),i.identity(),this;let n=fr.set(a[0],a[1],a[2]).length(),o=fr.set(a[4],a[5],a[6]).length(),l=fr.set(a[8],a[9],a[10]).length();s<0&&(n=-n),si.copy(this);let h=1/n,c=1/o,d=1/l;return si.elements[0]*=h,si.elements[1]*=h,si.elements[2]*=h,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,i.setFromRotationMatrix(si),r.x=n,r.y=o,r.z=l,this}makePerspective(t,i,r,a,s,n,o=gi,l=!1){let h=this.elements,c=2*s/(i-t),d=2*s/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),g,_;if(l)g=s/(n-s),_=n*s/(n-s);else if(o===gi)g=-(n+s)/(n-s),_=-2*n*s/(n-s);else if(o===ma)g=-n/(n-s),_=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,s,n,o=gi,l=!1){let h=this.elements,c=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),g,_;if(l)g=1/(n-s),_=n/(n-s);else if(o===gi)g=-2/(n-s),_=-(n+s)/(n-s);else if(o===ma)g=-1/(n-s),_=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},fr=new C,si=new it,yd=new C(0,0,0),Md=new C(1,1,1),Oi=new C,Ua=new C,Yt=new C,Cl=new it,Pl=new Pt,nr=class $h{constructor(t=0,i=0,r=0,a=$h.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,s=a[0],n=a[4],o=a[8],l=a[1],h=a[5],c=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nr.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,Ll=new C,mr=new Pt,bi=new it,Oa=new C,Xr=new C,Td=new C,Ed=new Pt,Dl=new C(1,0,0),Il=new C(0,1,0),Nl=new C(0,0,1),Ul={type:"added"},wd={type:"removed"},gr={type:"childadded",child:null},js={type:"childremoved",child:null},Rt=class gs extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gs.DEFAULT_UP.clone();let t=new C,i=new nr,r=new Pt,a=new C(1,1,1);function s(){r.setFromEuler(i,!1)}function n(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new it},normalMatrix:{value:new Ue}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=gs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,i){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Oa.copy(t):Oa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Xr,Oa,this.up):bi.lookAt(Oa,Xr,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),mr.setFromRotationMatrix(bi),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),gr.child=t,this.dispatchEvent(gr),gr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wd),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let s=0,n=a.length;s<n;s++)a[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*a,s[13]+=r-s[1]*i-s[5]*r-s[9]*a,s[14]+=a-s[2]*i-s[6]*r-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let s=this.children;for(let n=0,o=s.length;n<o;n++)s[n].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),d=n(t.shapes),u=n(t.skeletons),p=n(t.animations),g=n(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ad={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Ad)))}return n!==null&&(n.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Ys(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ve.workingColorSpace){if(e=Uo(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ys(s,a,e+1/3),this.g=Ys(s,a,e),this.b=Ys(s,a,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function i(a){a!==void 0&&parseFloat(a)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],n=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=ec[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ve.workingToColorSpace(It.copy(this),e),Math.round(Fe(It.r*255,0,255))*65536+Math.round(Fe(It.g*255,0,255))*256+Math.round(Fe(It.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,a=It.b,s=Math.max(i,r,a),n=Math.min(i,r,a),o,l,h=(n+s)/2;if(n===s)o=0,l=0;else{let c=s-n;switch(l=h<=.5?c/(s+n):c/(2-s-n),s){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Gt){Ve.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Fa);let i=la(Fi.h,Fa.h,t),r=la(Fi.s,Fa.s,t),a=la(Fi.l,Fa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new xe;xe.NAMES=ec;var tc=class ic{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=i}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ta=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new C,Ti=new C,Ks=new C,Ei=new C,vr=new C,_r=new C,Ol=new C,Js=new C,Zs=new C,Qs=new C,$s=new gt,en=new gt,tn=new gt,jr=class Pr{constructor(t=new C,i=new C,r=new C){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ni.subVectors(t,i),a.cross(ni);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,i,r,a,s){ni.subVectors(a,i),Ti.subVectors(r,i),Ks.subVectors(t,i);let n=ni.dot(ni),o=ni.dot(Ti),l=ni.dot(Ks),h=Ti.dot(Ti),c=Ti.dot(Ks),d=n*h-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,g=(n*c-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,i,r,a,s,n,o,l){return this.getBarycoord(t,i,r,a,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(n,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,i,r,a,s,n){return $s.setScalar(0),en.setScalar(0),tn.setScalar(0),$s.fromBufferAttribute(t,i),en.fromBufferAttribute(t,r),tn.fromBufferAttribute(t,a),n.setScalar(0),n.addScaledVector($s,s.x),n.addScaledVector(en,s.y),n.addScaledVector(tn,s.z),n}static isFrontFacing(t,i,r,a){return ni.subVectors(r,i),Ti.subVectors(t,i),ni.cross(Ti).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ni.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,s){return Pr.getInterpolation(t,this.a,this.b,this.c,i,r,a,s)}containsPoint(t){return Pr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,s=this.c,n,o;vr.subVectors(a,r),_r.subVectors(s,r),Js.subVectors(t,r);let l=vr.dot(Js),h=_r.dot(Js);if(l<=0&&h<=0)return i.copy(r);Zs.subVectors(t,a);let c=vr.dot(Zs),d=_r.dot(Zs);if(c>=0&&d<=c)return i.copy(a);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(r).addScaledVector(vr,n);Qs.subVectors(t,s);let p=vr.dot(Qs),g=_r.dot(Qs);if(g>=0&&p<=g)return i.copy(s);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(_r,o);let m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Ol.subVectors(s,a),o=(d-c)/(d-c+(p-g)),i.copy(a).addScaledVector(Ol,o);let f=1/(m+_+u);return n=_*f,o=u*f,i.copy(r).addScaledVector(vr,n).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hr=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,n=a.count;s<n;s++)e.isMesh===!0?e.getVertexPosition(s,oi):oi.fromBufferAttribute(a,s),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),za.subVectors(this.max,qr),xr.subVectors(e.a,qr),Sr.subVectors(e.b,qr),yr.subVectors(e.c,qr),Bi.subVectors(Sr,xr),zi.subVectors(yr,Sr),Ji.subVectors(xr,yr);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-Ji.z,Ji.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,Ji.z,0,-Ji.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-Ji.y,Ji.x,0];return!rn(t,xr,Sr,yr,za)||(t=[1,0,0,0,1,0,0,0,1],!rn(t,xr,Sr,yr,za))?!1:(Ha.crossVectors(Bi,zi),t=[Ha.x,Ha.y,Ha.z],rn(t,xr,Sr,yr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new C,new C,new C,new C,new C,new C,new C,new C],oi=new C,Ba=new hr,xr=new C,Sr=new C,yr=new C,Bi=new C,zi=new C,Ji=new C,qr=new C,za=new C,Ha=new C,Zi=new C;function rn(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){Zi.fromArray(e,s);let o=a.x*Math.abs(Zi.x)+a.y*Math.abs(Zi.y)+a.z*Math.abs(Zi.z),l=t.dot(Zi),h=i.dot(Zi),c=r.dot(Zi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var _t=new C,Va=new re,Rd=0,ci=class extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},rc=class extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ac=class extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}},De=class extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cd=new hr,Yr=new C,an=new C,cr=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(an.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(an)),this.expandByPoint(Yr.copy(e.center).sub(an))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pd=0,ti=new it,sn=new Rt,Mr=new C,Kt=new hr,Kr=new hr,wt=new C,Ke=class sc extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?ac:rc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new Ue().getNormalMatrix(t);r.applyNormalMatrix(s),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,i,r){return ti.makeTranslation(t,i,r),this.applyMatrix4(ti),this}scale(t,i,r){return ti.makeScale(t,i,r),this.applyMatrix4(ti),this}lookAt(t){return sn.lookAt(t),sn.updateMatrix(),this.applyMatrix4(sn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,s=t.length;a<s;a++){let n=t[a];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new De(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let s=t[a];i.setXYZ(a,s.x,s.y,s.z||0)}t.length>i.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let s=i[r];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let r=this.boundingSphere.center;if(Kt.setFromBufferAttribute(t),i)for(let s=0,n=i.length;s<n;s++){let o=i[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Kt.min,Kr.min),Kt.expandByPoint(wt),wt.addVectors(Kt.max,Kr.max),Kt.expandByPoint(wt)):(Kt.expandByPoint(Kr.min),Kt.expandByPoint(Kr.max))}Kt.getCenter(r);let a=0;for(let s=0,n=t.count;s<n;s++)wt.fromBufferAttribute(t,s),a=Math.max(a,r.distanceToSquared(wt));if(i)for(let s=0,n=i.length;s<n;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)wt.fromBufferAttribute(o,h),l&&(Mr.fromBufferAttribute(t,h),wt.add(Mr)),a=Math.max(a,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,s=i.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==r.count)&&(n=new ci(new Float32Array(4*r.count),4),this.setAttribute("tangent",n));let o=[],l=[];for(let v=0;v<r.count;v++)o[v]=new C,l[v]=new C;let h=new C,c=new C,d=new C,u=new re,p=new re,g=new re,_=new C,m=new C;function f(v,b,L){h.fromBufferAttribute(r,v),c.fromBufferAttribute(r,b),d.fromBufferAttribute(r,L),u.fromBufferAttribute(s,v),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),c.sub(h),d.sub(h),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),o[v].add(_),o[b].add(_),o[L].add(_),l[v].add(m),l[b].add(m),l[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,b=M.length;v<b;++v){let L=M[v],P=L.start,D=L.count;for(let j=P,I=P+D;j<I;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let w=new C,x=new C,E=new C,A=new C;function R(v){E.fromBufferAttribute(a,v),A.copy(E);let b=o[v];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(A,b);let L=x.dot(l[v])<0?-1:1;n.setXYZW(v,w.x,w.y,w.z,L)}for(let v=0,b=M.length;v<b;++v){let L=M[v],P=L.start,D=L.count;for(let j=P,I=P+D;j<I;j+=3)R(t.getX(j+0)),R(t.getX(j+1)),R(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new C,s=new C,n=new C,o=new C,l=new C,h=new C,c=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,g),s.fromBufferAttribute(i,_),n.fromBufferAttribute(i,m),c.subVectors(n,s),d.subVectors(a,s),c.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),n.fromBufferAttribute(i,u+2),c.subVectors(n,s),d.subVectors(a,s),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wt.fromBufferAttribute(t,i),wt.normalize(),t.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let f=0;f<c;f++)u[g++]=h[p++]}return new ci(u,c,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new sc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(a[l]=c,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let s=t.morphAttributes;for(let h in s){let c=[],d=s[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let d=n[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=new C,Ld=new C,Dd=new Ue,Jt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=nn.subVectors(i,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(nn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dd.getNormalMatrix(e),r=this.coplanarPoint(nn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Id=0,Gi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=sa,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let n in a){let o=a[n];delete o.metadata,s.push(o)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Jt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=new C,on=new C,ka=new C,Ga=new C,Ea=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){on.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(on);let a=e.distanceTo(t)*.5,s=-this.direction.dot(ka),n=Ga.dot(this.direction),o=-Ga.dot(ka),l=Ga.lengthSq(),h=Math.abs(1-s*s),c,d,u,p;if(h>0)if(c=s*o-n,d=s*n-o,p=a*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+s*d+2*n)+d*(s*c+d+2*o)+l}else d=a,c=Math.max(0,-(s*d+n)),u=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(s*d+n)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-s*a+n)),d=c>0?-a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(c=Math.max(0,-(s*a+n)),d=c>0?a:Math.min(Math.max(-a,-o),a),u=-c*c+d*(d+2*o)+l);else d=s>0?-a:a,c=Math.max(0,-(s*d+n)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(on).addScaledVector(ka,d),u}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(n=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||n>r)||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,a){let s=this.origin,n=this.direction,o=n.x,l=n.y,h=n.z,c=e.x-s.x,d=e.y-s.y,u=e.z-s.z,p=t.x-s.x,g=t.y-s.y,_=t.z-s.z,m=i.x-s.x,f=i.y-s.y,M=i.z-s.z,w=Math.abs(o),x=Math.abs(l),E=Math.abs(h),A,R,v,b,L,P,D,j,I,H,Y,k;if(w>=x&&w>=E?(v=o,P=c,I=p,k=m,o>=0?(A=l,R=h,b=d,L=u,D=g,j=_,H=f,Y=M):(A=h,R=l,b=u,L=d,D=_,j=g,H=M,Y=f)):x>=E?(v=l,P=d,I=g,k=f,l>=0?(A=h,R=o,b=u,L=c,D=_,j=p,H=M,Y=m):(A=o,R=h,b=c,L=u,D=p,j=_,H=m,Y=M)):(v=h,P=u,I=_,k=M,h>=0?(A=o,R=l,b=c,L=d,D=p,j=g,H=m,Y=f):(A=l,R=o,b=d,L=c,D=g,j=p,H=f,Y=m)),v===0)return null;let se=A/v,X=R/v,K=1/v,Q=b-se*P,Be=L-X*P,Te=D-se*I,st=j-X*I,Oe=H-se*k,q=Y-X*k,ie=Oe*st-q*Te,oe=Q*q-Be*Oe,we=Te*Be-st*Q;if(r){if(ie<0||oe<0||we<0)return null}else if((ie<0||oe<0||we<0)&&(ie>0||oe>0||we>0))return null;let Pe=ie+oe+we;if(Pe===0)return null;let fe=K*(ie*P+oe*I+we*k);return(Pe>0?fe<0:fe>0)?null:this.at(fe/Pe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wi=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fl=new it,Qi=new Ea,Wa=new cr,Bl=new C,Xa=new C,ja=new C,qa=new C,ln=new C,Ya=new C,zl=new C,Ka=new C,ot=class extends Rt{constructor(e=new Ke,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){Ya.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=n[o],c=a[o];h!==0&&(ln.fromBufferAttribute(c,e),s?Ya.addScaledVector(ln,h):Ya.addScaledVector(ln.sub(t),h))}t.add(Ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(a),Qi.copy(e.ray).recast(e.near),!(Wa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Wa,Bl)===null||Qi.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Fl.copy(a).invert(),Qi.copy(e.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,d=a.groups,u=a.drawRange;if(n!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let _=d[p],m=s[_.materialIndex],f=Math.max(_.start,u.start),M=Math.min(n.count,Math.min(_.start+_.count,u.start+u.count));for(let w=f,x=M;w<x;w+=3){let E=n.getX(w),A=n.getX(w+1),R=n.getX(w+2);r=Ja(this,m,e,i,l,h,c,E,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(n.count,u.start+u.count);for(let _=p,m=g;_<m;_+=3){let f=n.getX(_),M=n.getX(_+1),w=n.getX(_+2);r=Ja(this,s,e,i,l,h,c,f,M,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let _=d[p],m=s[_.materialIndex],f=Math.max(_.start,u.start),M=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let w=f,x=M;w<x;w+=3){let E=w,A=w+1,R=w+2;r=Ja(this,m,e,i,l,h,c,E,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let _=p,m=g;_<m;_+=3){let f=_,M=_+1,w=_+2;r=Ja(this,s,e,i,l,h,c,f,M,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function Nd(e,t,i,r,a,s,n,o){let l;if(t.side===At?l=r.intersectTriangle(n,s,a,!0,o):l=r.intersectTriangle(a,s,n,t.side===rr,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Ka);return h<i.near||h>i.far?null:{distance:h,point:Ka.clone(),object:e}}function Ja(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,Xa),e.getVertexPosition(l,ja),e.getVertexPosition(h,qa);let c=Nd(e,t,i,r,Xa,ja,qa,zl);if(c){let d=new C;jr.getBarycoord(zl,Xa,ja,qa,d),a&&(c.uv=jr.getInterpolatedAttribute(a,o,l,h,d,new re)),s&&(c.uv1=jr.getInterpolatedAttribute(s,o,l,h,d,new re)),n&&(c.normal=jr.getInterpolatedAttribute(n,o,l,h,d,new C),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new C,materialIndex:0};jr.getNormal(Xa,ja,qa,u.normal),c.face=u,c.barycoord=d}return c}var nc=class extends ri{constructor(e=null,t=1,i=1,r,a,s,n,o,l=Ct,h=Ct,c,d){super(null,s,n,o,l,h,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hl=class extends ci{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new it,Vl=new it,Za=[],kl=new hr,Ud=new it,Jr=new ot,Zr=new cr,Bo=class extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ud)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),kl.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(kl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),Zr.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let n=0;n<i.length;n++)i[n]=r[s+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,br),Vl.multiplyMatrices(i,br),Jr.matrixWorld=Vl,Jr.raycast(e,Za);for(let s=0,n=Za.length;s<n;s++){let o=Za[s];o.instanceId=a,o.object=this,t.push(o)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(r*this.count),r,this.count,Co,li));let a=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let n=this.geometry.morphTargetsRelative?1:1-s,o=r*e;return a[o]=n,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new cr,Od=new re(.5,.5),Qa=new C,zo=class{constructor(e=new Jt,t=new Jt,i=new Jt,r=new Jt,a=new Jt,s=new Jt){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){let r=this.planes,a=e.elements,s=a[0],n=a[1],o=a[2],l=a[3],h=a[4],c=a[5],d=a[6],u=a[7],p=a[8],g=a[9],_=a[10],m=a[11],f=a[12],M=a[13],w=a[14],x=a[15];if(r[0].setComponents(l-s,u-h,m-p,x-f).normalize(),r[1].setComponents(l+s,u+h,m+p,x+f).normalize(),r[2].setComponents(l+n,u+c,m+g,x+M).normalize(),r[3].setComponents(l-n,u-c,m-g,x-M).normalize(),i)r[4].setComponents(o,d,_,w).normalize(),r[5].setComponents(l-o,u-d,m-_,x-w).normalize();else if(r[4].setComponents(l-o,u-d,m-_,x-w).normalize(),t===gi)r[5].setComponents(l+o,u+d,m+_,x+w).normalize();else if(t===ma)r[5].setComponents(o,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Od.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xi=class extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ws=new C,As=new C,Gl=new it,Qr=new Ea,$a=new cr,hn=new C,Wl=new C,Ho=class extends Rt{constructor(e=new Ke,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ws.fromBufferAttribute(t,r-1),As.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ws.distanceTo(As);e.setAttribute("lineDistance",new De(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(r),$a.radius+=a,e.ray.intersectsSphere($a)===!1)return;Gl.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(Gl);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,g=u-1;p<g;p+=l){let _=h.getX(p),m=h.getX(p+1),f=es(this,e,Qr,o,_,m,p);f&&t.push(f)}if(this.isLineLoop){let p=h.getX(u-1),g=h.getX(d),_=es(this,e,Qr,o,p,g,u-1);_&&t.push(_)}}else{let d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,g=u-1;p<g;p+=l){let _=es(this,e,Qr,o,p,p+1,p);_&&t.push(_)}if(this.isLineLoop){let p=es(this,e,Qr,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function es(e,t,i,r,a,s,n){let o=e.geometry.attributes.position;if(ws.fromBufferAttribute(o,a),As.fromBufferAttribute(o,s),i.distanceSqToSegment(ws,As,hn,Wl)>r)return;hn.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(hn);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(e.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:e}}var Xl=new C,jl=new C,Hr=class extends Ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Xl.fromBufferAttribute(t,r),jl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xl.distanceTo(jl);e.setAttribute("lineDistance",new De(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vo=class extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ql=new it,uo=new Ea,ts=new cr,is=new C,oc=class extends Rt{constructor(e=new Ke,t=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=a,e.ray.intersectsSphere(ts)===!1)return;ql.copy(r).invert(),uo.copy(e.ray).applyMatrix4(ql);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let u=c,p=d;u<p;u++){let g=l.getX(u);is.fromBufferAttribute(h,g),Yl(is,g,o,r,e,t,this)}}else{let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let u=c,p=d;u<p;u++)is.fromBufferAttribute(h,u),Yl(is,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Yl(e,t,i,r,a,s,n){let o=uo.distanceSqToPoint(e);if(o<i){let l=new C;uo.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:n})}}var lc=class extends ri{constructor(e=[],t=ar,i,r,a,s,n,o,l,h){super(e,t,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hc=class extends ri{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},va=class extends ri{constructor(e,t,i=_i,r,a,s,n=Ct,o=Ct,l,h=Di,c=1){if(h!==Di&&h!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fd=class extends va{constructor(e,t=_i,i=ar,r,a,s=Ct,n=Ct,o,l=Di){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,r,a,s,n,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},cc=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class uc extends Ke{constructor(t=1,i=1,r=1,a=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:s,depthSegments:n};let o=this;a=Math.floor(a),s=Math.floor(s),n=Math.floor(n);let l=[],h=[],c=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,t,n,s,0),g("z","y","x",1,-1,r,i,-t,n,s,1),g("x","z","y",1,1,t,r,i,a,n,2),g("x","z","y",1,-1,t,r,-i,a,n,3),g("x","y","z",1,-1,t,i,r,a,s,4),g("x","y","z",-1,-1,t,i,-r,a,s,5),this.setIndex(l),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(d,2));function g(_,m,f,M,w,x,E,A,R,v,b){let L=x/R,P=E/v,D=x/2,j=E/2,I=A/2,H=R+1,Y=v+1,k=0,se=0,X=new C;for(let K=0;K<Y;K++){let Q=K*P-j;for(let Be=0;Be<H;Be++){let Te=Be*L-D;X[_]=Te*M,X[m]=Q*w,X[f]=I,h.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[f]=A>0?1:-1,c.push(X.x,X.y,X.z),d.push(Be/R),d.push(1-K/v),k+=1}}for(let K=0;K<v;K++)for(let Q=0;Q<R;Q++){let Be=u+Q+H*K,Te=u+Q+H*(K+1),st=u+(Q+1)+H*(K+1),Oe=u+(Q+1)+H*K;l.push(Be,Te,Oe),l.push(Te,st,Oe),se+=6}o.addGroup(p,se,b),p+=se,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ko=class dc extends Ke{constructor(t=1,i=1,r=1,a=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),s=Math.floor(s);let c=[],d=[],u=[],p=[],g=0,_=[],m=r/2,f=0;M(),n===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(p,2));function M(){let x=new C,E=new C,A=0,R=(i-t)/r;for(let v=0;v<=s;v++){let b=[],L=v/s,P=L*(i-t)+t;for(let D=0;D<=a;D++){let j=D/a,I=j*l+o,H=Math.sin(I),Y=Math.cos(I);E.x=P*H,E.y=-L*r+m,E.z=P*Y,d.push(E.x,E.y,E.z),x.set(H,R,Y).normalize(),u.push(x.x,x.y,x.z),p.push(j,1-L),b.push(g++)}_.push(b)}for(let v=0;v<a;v++)for(let b=0;b<s;b++){let L=_[b][v],P=_[b+1][v],D=_[b+1][v+1],j=_[b][v+1];(t>0||b!==0)&&(c.push(L,P,j),A+=3),(i>0||b!==s-1)&&(c.push(P,D,j),A+=3)}h.addGroup(f,A,0),f+=A}function w(x){let E=g,A=new re,R=new C,v=0,b=x===!0?t:i,L=x===!0?1:-1;for(let D=1;D<=a;D++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),g++;let P=g;for(let D=0;D<=a;D++){let j=D/a*l+o,I=Math.cos(j),H=Math.sin(j);R.x=b*H,R.y=m*L,R.z=b*I,d.push(R.x,R.y,R.z),u.push(0,L,0),A.x=I*.5+.5,A.y=H*.5*L+.5,p.push(A.x,A.y),g++}for(let D=0;D<a;D++){let j=E+D,I=P+D;x===!0?c.push(I,I+1,j):c.push(I+1,I,j),v+=3}h.addGroup(f,v,x===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bd=class pc extends Ke{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let s=[],n=[];o(a),h(r),c(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(n,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new C,x=new C,E=new C;for(let A=0;A<i.length;A+=3)p(i[A+0],w),p(i[A+1],x),p(i[A+2],E),l(w,x,E,M)}function l(M,w,x,E){let A=E+1,R=[];for(let v=0;v<=A;v++){R[v]=[];let b=M.clone().lerp(x,v/A),L=w.clone().lerp(x,v/A),P=A-v;for(let D=0;D<=P;D++)D===0&&v===A?R[v][D]=b:R[v][D]=b.clone().lerp(L,D/P)}for(let v=0;v<A;v++)for(let b=0;b<2*(A-v)-1;b++){let L=Math.floor(b/2);b%2===0?(u(R[v][L+1]),u(R[v+1][L]),u(R[v][L])):(u(R[v][L+1]),u(R[v+1][L+1]),u(R[v+1][L]))}}function h(M){let w=new C;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(M),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function c(){let M=new C;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];let x=m(M)/2/Math.PI+.5,E=f(M)/Math.PI+.5;n.push(x,1-E)}g(),d()}function d(){for(let M=0;M<n.length;M+=6){let w=n[M+0],x=n[M+2],E=n[M+4],A=Math.max(w,x,E),R=Math.min(w,x,E);A>.9&&R<.1&&(w<.2&&(n[M+0]+=1),x<.2&&(n[M+2]+=1),E<.2&&(n[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function p(M,w){let x=M*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function g(){let M=new C,w=new C,x=new C,E=new C,A=new re,R=new re,v=new re;for(let b=0,L=0;b<s.length;b+=9,L+=6){M.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(n[L+0],n[L+1]),R.set(n[L+2],n[L+3]),v.set(n[L+4],n[L+5]),E.copy(M).add(w).add(x).divideScalar(3);let P=m(E);_(A,L+0,M,P),_(R,L+2,w,P),_(v,L+4,x,P)}}function _(M,w,x,E){E<0&&M.x===1&&(n[w]=M.x-1),x.x===0&&x.z===0&&(n[w]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.vertices,t.indices,t.radius,t.detail)}},xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let n=0,o=a-1,l;for(;n<=o;)if(r=Math.floor(n+(o-n)/2),l=i[r]-s,l<0)n=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(a-1);let h=i[r],c=i[r+1]-h,d=(s-h)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new re:new C);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],a=[],s=[],n=new C,o=new it;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new C)}a[0]=new C,s[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),s[u]=s[u-1].clone(),n.crossVectors(r[u-1],r[u]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(Fe(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(n,p))}s[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(Fe(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Go=class extends xi{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new re){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zd=class extends Go{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Wo(){let e=0,t=0,i=0,r=0;function a(s,n,o,l){e=s,t=o,i=-3*s+3*n-2*o-l,r=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,h){a(n,o,h*(o-s),h*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,h,c,d){let u=(n-s)/h-(o-s)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+d)+(l-o)/d;u*=c,p*=c,a(n,o,u,p)},calc:function(s){let n=s*s,o=n*s;return e+t*s+i*n+r*o}}}var Kl=new C,Jl=new C,cn=new Wo,un=new Wo,dn=new Wo,Hd=class extends xi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,n=Math.floor(s),o=s-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/a)+1)*a:o===0&&n===a-1&&(n=a-2,o=1);let l,h;this.closed||n>0?l=r[(n-1)%a]:(Jl.subVectors(r[0],r[1]).add(r[0]),l=Jl);let c=r[n%a],d=r[(n+1)%a];if(this.closed||n+2<a?h=r[(n+2)%a]:(Kl.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Kl),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),cn.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,g,_),un.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,g,_),dn.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,g,_)}else this.curveType==="catmullrom"&&(cn.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),un.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),dn.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(cn.calc(o),un.calc(o),dn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zl(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+s+n)*l+(-3*i+3*r-2*s-n)*o+s*e+i}function Vd(e,t){let i=1-e;return i*i*t}function kd(e,t){return 2*(1-e)*e*t}function Gd(e,t){return e*e*t}function ha(e,t,i,r){return Vd(e,t)+kd(e,i)+Gd(e,r)}function Wd(e,t){let i=1-e;return i*i*i*t}function Xd(e,t){let i=1-e;return 3*i*i*e*t}function jd(e,t){return 3*(1-e)*e*e*t}function qd(e,t){return e*e*e*t}function ca(e,t,i,r,a){return Wd(e,t)+Xd(e,i)+jd(e,r)+qd(e,a)}var fc=class extends xi{constructor(e=new re,t=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new re){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(ca(e,r.x,a.x,s.x,n.x),ca(e,r.y,a.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yd=class extends xi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,s=this.v2,n=this.v3;return i.set(ca(e,r.x,a.x,s.x,n.x),ca(e,r.y,a.y,s.y,n.y),ca(e,r.z,a.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends xi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kd=class extends xi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends xi{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jd=class extends xi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y),ha(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),n=a-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(Zl(n,o.x,l.x,h.x,c.x),Zl(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new re().fromArray(r))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:zd,CatmullRomCurve3:Hd,CubicBezierCurve:fc,CubicBezierCurve3:Yd,EllipseCurve:Go,LineCurve:mc,LineCurve3:Kd,QuadraticBezierCurve:gc,QuadraticBezierCurve3:Jd,SplineCurve:vc}),Zd=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,n=this.curves[a],o=n.getLength(),l=o===0?0:1-s/o;return n.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ql[r.type]().fromJSON(r))}return this}},$l=class extends Zd{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new mc(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new gc(this.currentPoint.clone(),new re(e,t),new re(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new fc(this.currentPoint.clone(),new re(e,t),new re(i,r),new re(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new vc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new Go(e,t,i,r,a,s,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xo=class extends $l{constructor(e){super(e),this.uuid=lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new $l().fromJSON(r))}return this}};function Qd(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,s=_c(e,0,a,i,!0),n=[];if(!s||s.next===s.prev)return n;let o,l,h;if(r&&(s=rp(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],g=e[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return _a(s,n,i,o,l,h,0),n}function _c(e,t,i,r,a){let s;if(a===fp(e,t,i,r)>0)for(let n=t;n<i;n+=r)s=eh(n/r|0,e[n],e[n+1],s);else for(let n=i-r;n>=t;n-=r)s=eh(n/r|0,e[n],e[n+1],s);return s&&Br(s,s.next)&&(Sa(s),s=s.next),s}function or(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Br(i,i.next)||ht(i.prev,i,i.next)===0)){if(Sa(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function _a(e,t,i,r,a,s,n){if(!e)return;!n&&s&&lp(e,r,a,s);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(s?ep(e,r,a,s):$d(e)){t.push(l.i,e.i,h.i),Sa(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=tp(or(e),t),_a(e,t,i,r,a,s,2)):n===2&&ip(e,t,i,r,a,s):_a(or(e),t,i,r,a,s,1);break}}}function $d(e){let t=e.prev,i=e,r=e.next;if(ht(t,i,r)>=0)return!1;let a=t.x,s=i.x,n=r.x,o=t.y,l=i.y,h=r.y,c=Math.min(a,s,n),d=Math.min(o,l,h),u=Math.max(a,s,n),p=Math.max(o,l,h),g=r.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&ra(a,o,s,l,n,h,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ep(e,t,i,r){let a=e.prev,s=e,n=e.next;if(ht(a,s,n)>=0)return!1;let o=a.x,l=s.x,h=n.x,c=a.y,d=s.y,u=n.y,p=Math.min(o,l,h),g=Math.min(c,d,u),_=Math.max(o,l,h),m=Math.max(c,d,u),f=po(p,g,t,i,r),M=po(_,m,t,i,r),w=e.prevZ,x=e.nextZ;for(;w&&w.z>=f&&x&&x.z<=M;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==a&&w!==n&&ra(o,c,l,d,h,u,w.x,w.y)&&ht(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==a&&x!==n&&ra(o,c,l,d,h,u,x.x,x.y)&&ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==a&&w!==n&&ra(o,c,l,d,h,u,w.x,w.y)&&ht(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==a&&x!==n&&ra(o,c,l,d,h,u,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tp(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Br(r,a)&&Sc(r,i,i.next,a)&&xa(r,a)&&xa(a,r)&&(t.push(r.i,i.i,a.i),Sa(i),Sa(i.next),i=e=a),i=i.next}while(i!==e);return or(i)}function ip(e,t,i,r,a,s){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&up(n,o)){let l=yc(n,o);n=or(n,n.next),l=or(l,l.next),_a(n,t,i,r,a,s,0),_a(l,t,i,r,a,s,0);return}o=o.next}n=n.next}while(n!==e)}function rp(e,t,i,r){let a=[];for(let s=0,n=t.length;s<n;s++){let o=t[s]*r,l=s<n-1?t[s+1]*r:e.length,h=_c(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(cp(h))}a.sort(ap);for(let s=0;s<a.length;s++)i=sp(a[s],i);return i}function ap(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function sp(e,t){let i=np(e,t);if(!i)return t;let r=yc(i,e);return or(r,r.next),or(i,i.next)}function np(e,t){let i=t,r=e.x,a=e.y,s=-1/0,n;if(Br(e,i))return i;do{if(Br(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>s&&(s=d,n=i.x<i.next.x?i:i.next,d===r))return n}i=i.next}while(i!==t);if(!n)return null;let o=n,l=n.x,h=n.y,c=1/0;i=n;do{if(r>=i.x&&i.x>=l&&r!==i.x&&xc(a<h?r:s,a,l,h,a<h?s:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);xa(i,e)&&(d<c||d===c&&(i.x>n.x||i.x===n.x&&op(n,i)))&&(n=i,c=d)}i=i.next}while(i!==o);return n}function op(e,t){return ht(e.prev,e,t.prev)<0&&ht(t.next,e,e.next)<0}function lp(e,t,i,r){let a=e;do a.z===0&&(a.z=po(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,hp(a)}function hp(e){let t,i=1;do{let r=e,a;e=null;let s=null;for(t=0;r;){t++;let n=r,o=0;for(let h=0;h<i&&(o++,n=n.nextZ,!!n);h++);let l=i;for(;o>0||l>0&&n;)o!==0&&(l===0||!n||r.z<=n.z)?(a=r,r=r.nextZ,o--):(a=n,n=n.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;r=n}s.nextZ=null,i*=2}while(t>1);return e}function po(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function cp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function xc(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function ra(e,t,i,r,a,s,n,o){return!(e===n&&t===o)&&xc(e,t,i,r,a,s,n,o)}function up(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!dp(e,t)&&(xa(e,t)&&xa(t,e)&&pp(e,t)&&(ht(e.prev,e,t.prev)||ht(e,t.prev,t))||Br(e,t)&&ht(e.prev,e,e.next)>0&&ht(t.prev,t,t.next)>0)}function ht(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Br(e,t){return e.x===t.x&&e.y===t.y}function Sc(e,t,i,r){let a=as(ht(e,t,i)),s=as(ht(e,t,r)),n=as(ht(i,r,e)),o=as(ht(i,r,t));return!!(a!==s&&n!==o||a===0&&rs(e,i,t)||s===0&&rs(e,r,t)||n===0&&rs(i,e,r)||o===0&&rs(i,t,r))}function rs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function as(e){return e>0?1:e<0?-1:0}function dp(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Sc(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function xa(e,t){return ht(e.prev,e,e.next)<0?ht(e,t,e.next)>=0&&ht(e,e.prev,t)>=0:ht(e,t,e.prev)<0||ht(e,e.next,t)<0}function pp(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function yc(e,t){let i=fo(e.i,e.x,e.y),r=fo(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function eh(e,t,i,r){let a=fo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Sa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function fo(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fp(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}var mp=class{static triangulate(e,t,i=2){return Qd(e,t,i)}},pn=class Mc{static area(t){let i=t.length,r=0;for(let a=i-1,s=0;s<i;a=s++)r+=t[a].x*t[s].y-t[s].x*t[a].y;return r*.5}static isClockWise(t){return Mc.area(t)<0}static triangulateShape(t,i){let r=[],a=[],s=[];th(t),ih(r,t);let n=t.length;i.forEach(th);for(let l=0;l<i.length;l++)a.push(n),n+=i[l].length,ih(r,i[l]);let o=mp.triangulate(r,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function th(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ih(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var jo=class bc extends Bd{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new bc(t.radius,t.detail)}},ai=class Tc extends Ke{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let s=t/2,n=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,d=t/o,u=i/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){let M=f*u-n;for(let w=0;w<h;w++){let x=w*d-s;g.push(x,-M,0),_.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let w=M+h*f,x=M+h*(f+1),E=M+1+h*(f+1),A=M+1+h*f;p.push(w,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.width,t.height,t.widthSegments,t.heightSegments)}},qo=class Ec extends Ke{constructor(t=.5,i=1,r=32,a=1,s=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:s,thetaLength:n},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/a,p=new C,g=new re;for(let _=0;_<=a;_++){for(let m=0;m<=r;m++){let f=s+m/r*n;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}d+=u}for(let _=0;_<a;_++){let m=_*(r+1);for(let f=0;f<r;f++){let M=f+m,w=M,x=M+r+1,E=M+r+2,A=M+1;o.push(w,x,A),o.push(x,E,A)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wc=class Ac extends Ke{constructor(t=new Xo([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],s=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(n,2));function h(c){let d=a.length/3,u=c.extractPoints(i),p=u.shape,g=u.holes;pn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];pn.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=pn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];a.push(M.x,M.y,0),s.push(0,0,1),n.push(M.x,M.y)}for(let m=0,f=_.length;m<f;m++){let M=_[m],w=M[0]+d,x=M[1]+d,E=M[2]+d;r.push(w,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return gp(i,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let n=i[t.shapes[a]];r.push(n)}return new Ac(r,t.curveSegments)}};function gp(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var $t=class Rc extends Ke{constructor(t=1,i=32,r=16,a=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:s,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(n+o,Math.PI),h=0,c=[],d=new C,u=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=r;f++){let M=[],w=f/r,x=n+w*o,E=t*Math.cos(x),A=Math.sqrt(t*t-E*E),R=0;f===0&&n===0?R=.5/i:f===r&&l===Math.PI&&(R=-.5/i);for(let v=0;v<=i;v++){let b=v/i,L=a+b*s;d.x=-A*Math.cos(L),d.y=E,d.z=A*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+R,1-w),M.push(h++)}c.push(M)}for(let f=0;f<r;f++)for(let M=0;M<i;M++){let w=c[f][M+1],x=c[f][M],E=c[f+1][M],A=c[f+1][M+1];(f!==0||n>0)&&p.push(w,x,A),(f!==r-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Cc=class Pc extends Ke{constructor(t=1,i=.4,r=12,a=48,s=Math.PI*2,n=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:s,thetaStart:n,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=new C,p=new C,g=new C;for(let _=0;_<=r;_++){let m=n+_/r*o;for(let f=0;f<=a;f++){let M=f/a*s;p.x=(t+i*Math.cos(m))*Math.cos(M),p.y=(t+i*Math.cos(m))*Math.sin(M),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),c.push(g.x,g.y,g.z),d.push(f/a),d.push(_/r)}}for(let _=1;_<=r;_++)for(let m=1;m<=a;m++){let f=(a+1)*_+m-1,M=(a+1)*(_-1)+m-1,w=(a+1)*(_-1)+m,x=(a+1)*_+m;l.push(f,M,x),l.push(M,w,x)}this.setIndex(l),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function zr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(rh(a))a.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(rh(a[0])){let s=[];for(let n=0,o=a.length;n<o;n++)s[n]=a[n].clone();t[i][r]=s}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Bt(e){let t={};for(let i=0;i<e.length;i++){let r=zr(e[i]);for(let a in r)t[a]=r[a]}return t}function rh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function vp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Lc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var ya={clone:zr,merge:Bt},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new re().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new it().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dc=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ps=class extends Ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ic=class extends Gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sp=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yp=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function fn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var wa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mp=class extends wa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(n===void 0)switch(this.getSettings_().endingStart){case Sl:a=e,n=2*t-i;break;case yl:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Sl:s=e,o=2*i-t;break;case yl:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),g=p*p,_=g*p,m=-d*_+2*d*g-d*p,f=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*p+1,M=(-1-u)*_+(1.5+u)*g+.5*p,w=u*_-u*g;for(let x=0;x!==n;++x)a[x]=m*s[h+x]+f*s[l+x]+M*s[o+x]+w*s[c+x];return a}},bp=class extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let d=0;d!==n;++d)a[d]=s[l+d]*c+s[o+d]*h;return a}},Tp=class extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ep=class extends wa{interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(r-t),g=1-p;for(let _=0;_!==n;++_)a[_]=s[l+_]*g+s[o+_]*p;return a}let d=n*2,u=e-1;for(let p=0;p!==n;++p){let g=s[l+p],_=s[o+p],m=u*d+p*2,f=c[m],M=c[m+1],w=e*d+p*2,x=h[w],E=h[w+1],A=Ap(i,t,f,x,r);a[p]=Nc(A,g,M,E,_)}return a}};function Nc(e,t,i,r,a){let s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*r+e*e*e*a}function wp(e,t,i,r,a){let s=1-e;return 3*s*s*(i-t)+6*s*e*(r-i)+3*e*e*(a-r)}function Ap(e,t,i,r,a){let s=(e-t)/(a-t);for(let n=0;n<8;n++){let o=Nc(s,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=wp(s,t,i,r,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Si=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),fn(e.settings)&&(i.settings={inTangents:Tr(e.settings.inTangents,Array),outTangents:Tr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ep(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Hs:t=this.InterpolantFactoryMethodSmooth;break;case _l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Hs;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;fn(this.settings)&&(ah(this.settings.inTangents,e),ah(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let n=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*n,s*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let n=0;n!==a;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,n,o,s),e=!1;break}s=o}if(r!==void 0&&Ku(r))for(let n=0,o=r.length;n!==o;++n){let l=r[n];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Hs,a=e.length-1,s=1;for(let n=1;n<a;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(r)o=!0;else{let c=n*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let g=t[c+p];if(g!==t[d+p]||g!==t[u+p]){o=!0;break}}}if(o){if(n!==s){e[s]=e[n];let c=n*i,d=s*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++s}}if(a>0){e[s]=e[a];for(let n=a*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[n+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,fn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ah(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=ho;var Aa=class extends Si{constructor(e,t,i){super(e,t,i)}};Aa.prototype.ValueTypeName="bool";Aa.prototype.ValueBufferType=Array;Aa.prototype.DefaultInterpolation=ys;Aa.prototype.InterpolantFactoryMethodLinear=void 0;Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Rp=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};Rp.prototype.ValueTypeName="color";var Cp=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};Cp.prototype.ValueTypeName="number";var Pp=class extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let h=l+n;l!==h;l+=4)Pt.slerpFlat(a,0,s,l-n,s,l,o);return a}},Uc=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}};Uc.prototype.ValueTypeName="quaternion";Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Si{constructor(e,t,i){super(e,t,i)}};Ra.prototype.ValueTypeName="string";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=ys;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Lp=class extends Si{constructor(e,t,i,r){super(e,t,i,r)}};Lp.prototype.ValueTypeName="vector";var Dp=class{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){n++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,n),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,n),s===n&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new Dp,Np=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Np.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oc=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fc=class extends Oc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mn=new it,sh=new C,nh=new C,Up=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){mn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(mn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,s=r?r.z/a.x:1,n=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===ma||e.reversedDepth?t.set(.5*s,0,0,.5*s+o,0,.5*n,0,.5*n+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+o,0,.5*n,0,.5*n+l,0,0,.5,.5,0,0,0,1),t.multiply(mn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ss=new C,ns=new Pt,pi=new C,Bc=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ss,ns,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,ns,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ss,ns,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,ns,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new C,oh=new re,lh=new re,Zt=class extends Bc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,oh,lh),t.subVectors(lh,oh)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let n=this.filmOffset;n!==0&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=class extends Bc{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Op=class extends Up{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yo=class extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Er=-90,wr=1,Ca=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Er,wr,e,t);r.layers=this.layers,this.add(r);let a=new Zt(Er,wr,e,t);a.layers=this.layers,this.add(a);let s=new Zt(Er,wr,e,t);s.layers=this.layers,this.add(s);let n=new Zt(Er,wr,e,t);n.layers=this.layers,this.add(n);let o=new Zt(Er,wr,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Er,wr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let l of t)this.remove(l);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Fp=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Bp=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zp(){this._document.hidden===!1&&this.reset()}var Ko="\\[\\]\\.:\\/",Hp=new RegExp("["+Ko+"]","g"),Jo="[^"+Ko+"]",Vp="[^"+Ko.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",Jo),Gp=/(WCOD+)?/.source.replace("WCOD",Vp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),jp=new RegExp("^"+kp+Gp+Wp+Xp+"$"),qp=["material","materials","bones","map"],Yp=class{constructor(e,t,i){let r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class Lr{constructor(t,i,r){this.path=i,this.parsedPath=r||Lr.parseTrackName(i),this.node=Lr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Lr.Composite(t,i,r):new Lr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let i=jp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=r.nodeName.substring(a+1);qp.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let n=0;n<s.length;n++){let o=s[n];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,s=r.length;a!==s;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,s=i.propertyIndex;if(t||(t=Lr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[a];if(n===void 0){let h=i.nodeName;Le("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Yp;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1),hh=new it,zc=class{constructor(e,t,i=0,r=1/0){this.ray=new Ea(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,i=[]){return mo(e,this,i,t),i.sort(ch),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)mo(e[r],this,i,t);return i.sort(ch),i}};function ch(e,t){return e.distance-t.distance}function mo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let s=e.children;for(let n=0,o=s.length;n<o;n++)mo(s[n],t,i,!0)}}var uh=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},M_=class Hc{static{Hc.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let s=this.elements;return s[0]=t,s[2]=i,s[1]=r,s[3]=a,this}},Kp=class extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function dh(e,t,i,r){let a=Jp(r);switch(i){case Xh:return e*t;case Co:return e*t/a.components*a.byteLength;case Po:return e*t/a.components*a.byteLength;case sr:return e*t*2/a.components*a.byteLength;case Lo:return e*t*2/a.components*a.byteLength;case jh:return e*t*3/a.components*a.byteLength;case hi:return e*t*4/a.components*a.byteLength;case Do:return e*t*4/a.components*a.byteLength;case us:case ds:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ps:case fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nn:case On:return Math.max(e,16)*Math.max(t,8)/4;case In:case Un:return Math.max(e,8)*Math.max(t,8)/2;case Fn:case Bn:case Hn:case Vn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zn:case xs:case kn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Xn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case qn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Yn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Jn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Zn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Qn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case $n:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ro:case ao:case so:return Math.ceil(e/4)*Math.ceil(t/4)*16;case no:case oo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ss:case lo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Jp(e){switch(e){case Qt:case Vh:return{byteLength:1,components:1};case pa:case kh:case jt:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case _i:case wo:case li:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vc(){let e=null,t=!1,i=null,r=null;function a(s,n){r=e.requestAnimationFrame(a),i(s,n)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Zp(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];e.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:s,update:n}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Qp,alphahash_pars_fragment:$p,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:sf,aomap_pars_fragment:nf,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:hf,beginnormal_vertex:cf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:Sf,color_vertex:yf,common:Mf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:Df,envmap_pars_fragment:If,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Of,fog_pars_vertex:Ff,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Vf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:jf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Jf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Qf,lights_fragment_maps:$f,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:sm,map_fragment:nm,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:pm,morphnormal_vertex:fm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:vm,normal_fragment_maps:_m,normal_pars_fragment:xm,normal_pars_vertex:Sm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:wm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Om,shadowmap_vertex:Fm,shadowmask_pars_fragment:Bm,skinbase_vertex:zm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:km,specularmap_fragment:Gm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:jm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:Km,uv_pars_vertex:Jm,uv_vertex:Zm,worldpos_vertex:Qm,background_vert:$m,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ig,cube_vert:rg,cube_frag:ag,depth_vert:sg,depth_frag:ng,distance_vert:og,distance_frag:lg,equirect_vert:hg,equirect_frag:cg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:pg,meshbasic_frag:fg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:vg,meshmatcap_frag:_g,meshnormal_vert:xg,meshnormal_frag:Sg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:Tg,meshtoon_vert:Eg,meshtoon_frag:wg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Lg,sprite_frag:Dg},he={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},mi={basic:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new xe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Bt([he.common,he.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Bt([he.lights,he.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};mi.physical={uniforms:Bt([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var os={r:0,b:0,g:0},Ig=new it,kc=new Ue;kc.set(-1,0,0,0,1,0,0,0,1);function Ng(e,t,i,r,a,s){let n=new xe(0),o=a===!0?0:1,l,h,c=null,d=0,u=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let x=M.backgroundBlurriness>0;w=t.get(w,x)}return w}function g(M){let w=!1,x=p(M);x===null?m(n,o):x&&x.isColor&&(m(x,1),w=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(M,w){let x=p(w);x&&(x.isCubeTexture||x.mapping===Cs)?(h===void 0&&(h=new ot(new ji(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:zr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kc),h.material.toneMapped=Ve.getTransfer(x.colorSpace)!==qe,(c!==x||d!==x.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,u=e.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ot(new ai(2,2),new ct({name:"BackgroundMaterial",uniforms:zr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(x.colorSpace)!==qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(os,Lc(e)),i.buffers.color.setClear(os.r,os.g,os.b,w,s)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return n},setClearColor:function(M,w=1){n.set(M),o=w,m(n,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(n,o)},render:g,addToRenderList:_,dispose:f}}function Ug(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),s=a,n=!1;function o(P,D,j,I,H){let Y=!1,k=d(P,I,j,D);s!==k&&(s=k,h(s.object)),Y=p(P,I,j,H),Y&&g(P,I,j,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(Y||n)&&(n=!1,x(P,D,j,I),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function h(P){return e.bindVertexArray(P)}function c(P){return e.deleteVertexArray(P)}function d(P,D,j,I){let H=I.wireframe===!0,Y=r[D.id];Y===void 0&&(Y={},r[D.id]=Y);let k=P.isInstancedMesh===!0?P.id:0,se=Y[k];se===void 0&&(se={},Y[k]=se);let X=se[j.id];X===void 0&&(X={},se[j.id]=X);let K=X[H];return K===void 0&&(K=u(l()),X[H]=K),K}function u(P){let D=[],j=[],I=[];for(let H=0;H<i;H++)D[H]=0,j[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:I,object:P,attributes:{},index:null}}function p(P,D,j,I){let H=s.attributes,Y=D.attributes,k=0,se=j.getAttributes();for(let X in se)if(se[X].location>=0){let K=H[X],Q=Y[X];if(Q===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(P,D,j,I){let H={},Y=D.attributes,k=0,se=j.getAttributes();for(let X in se)if(se[X].location>=0){let K=Y[X];K===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),H[X]=Q,k++}s.attributes=H,s.attributesNum=k,s.index=I}function _(){let P=s.newAttributes;for(let D=0,j=P.length;D<j;D++)P[D]=0}function m(P){f(P,0)}function f(P,D){let j=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;j[P]=1,I[P]===0&&(e.enableVertexAttribArray(P),I[P]=1),H[P]!==D&&(e.vertexAttribDivisor(P,D),H[P]=D)}function M(){let P=s.newAttributes,D=s.enabledAttributes;for(let j=0,I=D.length;j<I;j++)D[j]!==P[j]&&(e.disableVertexAttribArray(j),D[j]=0)}function w(P,D,j,I,H,Y,k){k===!0?e.vertexAttribIPointer(P,D,j,H,Y):e.vertexAttribPointer(P,D,j,I,H,Y)}function x(P,D,j,I){_();let H=I.attributes,Y=j.getAttributes(),k=D.defaultAttributeValues;for(let se in Y){let X=Y[se];if(X.location>=0){let K=H[se];if(K===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let Q=K.normalized,Be=K.itemSize,Te=t.get(K);if(Te===void 0)continue;let st=Te.buffer,Oe=Te.type,q=Te.bytesPerElement,ie=Oe===e.INT||Oe===e.UNSIGNED_INT||K.gpuType===wo;if(K.isInterleavedBufferAttribute){let oe=K.data,we=oe.stride,Pe=K.offset;if(oe.isInstancedInterleavedBuffer){for(let fe=0;fe<X.locationSize;fe++)f(X.location+fe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe);e.bindBuffer(e.ARRAY_BUFFER,st);for(let fe=0;fe<X.locationSize;fe++)w(X.location+fe,Be/X.locationSize,Oe,Q,we*q,(Pe+Be/X.locationSize*fe)*q,ie)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)f(X.location+oe,K.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);e.bindBuffer(e.ARRAY_BUFFER,st);for(let oe=0;oe<X.locationSize;oe++)w(X.location+oe,Be/X.locationSize,Oe,Q,Be*q,Be/X.locationSize*oe*q,ie)}}else if(k!==void 0){let Q=k[se];if(Q!==void 0)switch(Q.length){case 2:e.vertexAttrib2fv(X.location,Q);break;case 3:e.vertexAttrib3fv(X.location,Q);break;case 4:e.vertexAttrib4fv(X.location,Q);break;default:e.vertexAttrib1fv(X.location,Q)}}}}M()}function E(){b();for(let P in r){let D=r[P];for(let j in D){let I=D[j];for(let H in I){let Y=I[H];for(let k in Y)c(Y[k].object),delete Y[k];delete I[H]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let D=r[P.id];for(let j in D){let I=D[j];for(let H in I){let Y=I[H];for(let k in Y)c(Y[k].object),delete Y[k];delete I[H]}}delete r[P.id]}function R(P){for(let D in r){let j=r[D];for(let I in j){let H=j[I];if(H[P.id]===void 0)continue;let Y=H[P.id];for(let k in Y)c(Y[k].object),delete Y[k];delete H[P.id]}}}function v(P){for(let D in r){let j=r[D],I=P.isInstancedMesh===!0?P.id:0,H=j[I];if(H!==void 0){for(let Y in H){let k=H[Y];for(let se in k)c(k[se].object),delete k[se];delete H[Y]}delete j[I],Object.keys(j).length===0&&delete r[D]}}}function b(){L(),n=!0,s!==a&&(s=a,h(s.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Og(e,t,i){let r;function a(l){r=l}function s(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function n(l,h,c){c!==0&&(e.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=a,this.render=s,this.renderInstances=n,this.renderMultiDraw=o}function Fg(e,t,i,r){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function n(R){return!(R!==hi&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===jt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qt&&R!==li&&!v&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Ae("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:A}}function Bg(e){let t=this,i=null,r=0,a=!1,s=!1,n=new Jt,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||g===null||g.length===0||s&&!m)s?c(null):h();else{let M=s?0:r,w=M*4,x=f.clippingState||null;l.value=x,x=c(g,u,w,p);for(let E=0;E!==w;++E)x[E]=i[E];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,x=p;w!==_;++w,x+=4)n.copy(d[w]).applyMatrix4(M,o),n.normal.toArray(m,x),m[x+3]=n.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Dr=4,zg=6,Hg=20,Vg=256,$r=new Ls,ph=new xe,gn=null,vn=0,_n=0,xn=!1,kg=new C,er=new C,Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:s=256,position:n=kg}=a;gn=this._renderer.getRenderTarget(),vn=this._renderer.getActiveCubeFace(),_n=this._renderer.getActiveMipmapLevel(),xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,n),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gn,vn,_n),this._renderer.xr.enabled=xn,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gn=this._renderer.getRenderTarget(),vn=this._renderer.getActiveCubeFace(),_n=this._renderer.getActiveMipmapLevel(),xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:jt,format:hi,colorSpace:bs,depthBuffer:!1},r=fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gg(a)),this._blurMaterial=Xg(a,e,t),this._ggxMaterial=Wg(a,e,t)}return r}_compileMaterial(e){let t=new ot(new Ke,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,i,r,a){let s=new Zt(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(ph),l.toneMapping=Xt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new ji,new Wi({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(ph),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,n[_],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+o[_],a.y,a.z)):m===1?(s.up.set(0,0,n[_]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+o[_],a.z)):(s.up.set(0,n[_],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+o[_]));let f=this._cubeSize;Ar(r,m*f,_>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}l.toneMapping=c,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ar||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;let n=a.uniforms;n.envMap.value=e;let o=this._cubeSize;Ar(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,$r)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,n=this._lodMeshes[i];n.material=s;let o=s.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,g=this._sizeLods[i],_=3*g*(i>p-Dr?i-p+Dr:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,Ar(a,_,m,3*g,2*g),r.setRenderTarget(a),r.render(n,$r),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,Ar(e,_,m,3*g,2*g),r.setRenderTarget(e),r.render(n,$r)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,s),this._blurPass(a,e,i,i,s)}_blurPass(e,t,i,r,a){let s=this._renderer,n=this._blurMaterial,o=this._lodMeshes[r];o.material=n;let l=n.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-Dr?r-this._lodMax+Dr:0),d=4*(this._cubeSize-h);Ar(t,c,d,3*h,2*h),s.setRenderTarget(t),s.render(o,$r)}};function Gg(e){let t=[],i=[],r=e,a=e-Dr+1+zg;for(let s=0;s<a;s++){let n=Math.pow(2,r);t.push(n);let o=1/(n-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,w=f>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(x,p*u*f);for(let E=0;E<u;E++){let A=c[E*2]*2-1,R=c[E*2+1]*2-1;f===0?er.set(1,R,A):f===1?er.set(-A,1,-R):f===2?er.set(-A,R,1):f===3?er.set(-1,R,-A):f===4?er.set(-A,-1,R):er.set(A,R,-1),er.toArray(_,(f*u+E)*p)}}let m=new Ke;m.setAttribute("position",new ci(g,p)),m.setAttribute("outputDirection",new ci(_,p)),i.push(new ot(m,null)),r>Dr&&r--}return{lodMeshes:i,sizeLods:t}}function fh(e,t,i){let r=new zt(e,t,i);return r.texture.mapping=Cs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ar(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Wg(e,t,i){return new ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Xg(e,t,i){return new ct({name:"SphericalGaussianBlur",defines:{SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mh(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function gh(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ds(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vr=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ji(5,5,5),a=new ct({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:vi});a.uniforms.tEquirect.value=t;let s=new ot(r,a),n=t.minFilter;return t.minFilter===tr&&(t.minFilter=Nt),new Ca(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}};function jg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?n(u):s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===na||p===Bs)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Vr(g.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function n(u){if(u&&u.isTexture){let p=u.mapping,g=p===na||p===Bs,_=p===ar||p===Or;if(g||_){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Rs(e)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(r===null&&(r=new Rs(e)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===na?u.mapping=ar:p===Bs&&(u.mapping=Or),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function qg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Nr("WebGLRenderer: "+r+" extension not supported."),a}}}function Yg(e,t,i,r){let a={},s=new WeakMap;function n(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",n),delete a[u.id];let p=s.get(u);p&&(t.remove(p),s.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",n),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let M=p.array;_=p.version;for(let w=0,x=M.length;w<x;w+=3){let E=M[w+0],A=M[w+1],R=M[w+2];u.push(E,A,A,R,R,E)}}else{let M=g.array;_=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){let E=w+0,A=w+1,R=w+2;u.push(E,A,A,R,R,E)}}let m=new(g.count>=65535?ac:rc)(u,1);m.version=_;let f=s.get(d);f&&t.remove(f),s.set(d,m)}function c(d){let u=s.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Kg(e,t,i){let r;function a(d){r=d}let s,n;function o(d){s=d.type,n=d.bytesPerElement}function l(d,u){e.drawElements(r,u,s,d*n),i.update(u,r,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,s,d*n,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,s,d,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Jg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",n);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Zg(e,t,i){let r=new WeakMap,a=new gt;function s(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){v.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=o.attributes.position.count*x,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let R=new Float32Array(E*A*4*d),v=new Qh(R,E,A,d);v.type=li,v.needsUpdate=!0;let b=x*4;for(let L=0;L<d;L++){let P=f[L],D=M[L],j=w[L],I=E*A*4*L;for(let H=0;H<P.count;H++){let Y=H*b;g===!0&&(a.fromBufferAttribute(P,H),R[I+Y+0]=a.x,R[I+Y+1]=a.y,R[I+Y+2]=a.z,R[I+Y+3]=0),_===!0&&(a.fromBufferAttribute(D,H),R[I+Y+4]=a.x,R[I+Y+5]=a.y,R[I+Y+6]=a.z,R[I+Y+7]=0),m===!0&&(a.fromBufferAttribute(j,H),R[I+Y+8]=a.x,R[I+Y+9]=a.y,R[I+Y+10]=a.z,R[I+Y+11]=j.itemSize===4?a.w:1)}}u={count:d,texture:v,size:new re(E,A)},r.set(o,u),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Qg(e,t,i,r,a){let s=new WeakMap;function n(h){let c=a.render.frame,d=h.geometry,u=t.get(h,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:n,dispose:o}}var $g={[So]:"LINEAR_TONE_MAPPING",[yo]:"REINHARD_TONE_MAPPING",[Mo]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[To]:"AGX_TONE_MAPPING",[Eo]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};function ev(e,t,i,r,a,s){let n=new zt(t,i,{type:e,depthBuffer:a,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Ke;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let c=new Dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ot(h,c),u=new Ls(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,M=[],w=!1;this.setSize=function(x,E){n.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let A=0;A<M.length;A++){let R=M[A];R.setSize&&R.setSize(x,E)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;let E=n.width,A=n.height;M.length>0&&o===null&&(o=new zt(E,A,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new zt(E,A,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let v=M[R];v.setSize&&v.setSize(E,A)}},this.begin=function(x,E){if(_||x.toneMapping===Xt&&M.length===0)return!1;if(f=E,E!==null){let A=E.width,R=E.height;(n.width!==A||n.height!==R)&&this.setSize(A,R)}return w===!1&&x.setRenderTarget(n),m=x.toneMapping,x.toneMapping=Xt,!0},this.hasRenderPass=function(){return w},this.end=function(x,E){x.toneMapping=m,_=!0;let A=n,R=o;for(let v=0;v<M.length;v++){let b=M[v];b.enabled!==!1&&(b.render(x,R,A,E),b.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,c.defines={},Ve.getTransfer(p)===qe&&(c.defines.SRGB_TRANSFER="");let v=$g[g];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(f),x.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){n.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var Gc=new ri,go=new va(1,1),Wc=new Qh,Xc=new Sd,jc=new lc,vh=[],_h=[],xh=new Float32Array(16),Sh=new Float32Array(9),yh=new Float32Array(4);function kr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=vh[a];if(s===void 0&&(s=new Float32Array(a),vh[a]=s),t!==0){r.toArray(s,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(s,o)}return s}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Et(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Is(e,t){let i=_h[t];i===void 0&&(i=new Int32Array(t),_h[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function tv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function iv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),Et(i,t)}}function rv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),Et(i,t)}}function av(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),Et(i,t)}}function sv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;yh.set(r),e.uniformMatrix2fv(this.addr,!1,yh),Et(i,r)}}function nv(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;Sh.set(r),e.uniformMatrix3fv(this.addr,!1,Sh),Et(i,r)}}function ov(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;xh.set(r),e.uniformMatrix4fv(this.addr,!1,xh),Et(i,r)}}function lv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function hv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),Et(i,t)}}function cv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),Et(i,t)}}function uv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),Et(i,t)}}function dv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function pv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),Et(i,t)}}function fv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),Et(i,t)}}function mv(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),Et(i,t)}}function gv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(go.compareFunction=i.isReversedDepthBuffer()?No:Io,s=go):s=Gc,i.setTexture2D(t||s,a)}function vv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Xc,a)}function _v(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||jc,a)}function xv(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Wc,a)}function Sv(e){switch(e){case 5126:return tv;case 35664:return iv;case 35665:return rv;case 35666:return av;case 35674:return sv;case 35675:return nv;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return pv;case 36295:return fv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}function yv(e,t){e.uniform1fv(this.addr,t)}function Mv(e,t){let i=kr(t,this.size,2);e.uniform2fv(this.addr,i)}function bv(e,t){let i=kr(t,this.size,3);e.uniform3fv(this.addr,i)}function Tv(e,t){let i=kr(t,this.size,4);e.uniform4fv(this.addr,i)}function Ev(e,t){let i=kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function wv(e,t){let i=kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Av(e,t){let i=kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Rv(e,t){e.uniform1iv(this.addr,t)}function Cv(e,t){e.uniform2iv(this.addr,t)}function Pv(e,t){e.uniform3iv(this.addr,t)}function Lv(e,t){e.uniform4iv(this.addr,t)}function Dv(e,t){e.uniform1uiv(this.addr,t)}function Iv(e,t){e.uniform2uiv(this.addr,t)}function Nv(e,t){e.uniform3uiv(this.addr,t)}function Uv(e,t){e.uniform4uiv(this.addr,t)}function Ov(e,t,i){let r=this.cache,a=t.length,s=Is(i,a);Tt(r,s)||(e.uniform1iv(this.addr,s),Et(r,s));let n;this.type===e.SAMPLER_2D_SHADOW?n=go:n=Gc;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||n,s[o])}function Fv(e,t,i){let r=this.cache,a=t.length,s=Is(i,a);Tt(r,s)||(e.uniform1iv(this.addr,s),Et(r,s));for(let n=0;n!==a;++n)i.setTexture3D(t[n]||Xc,s[n])}function Bv(e,t,i){let r=this.cache,a=t.length,s=Is(i,a);Tt(r,s)||(e.uniform1iv(this.addr,s),Et(r,s));for(let n=0;n!==a;++n)i.setTextureCube(t[n]||jc,s[n])}function zv(e,t,i){let r=this.cache,a=t.length,s=Is(i,a);Tt(r,s)||(e.uniform1iv(this.addr,s),Et(r,s));for(let n=0;n!==a;++n)i.setTexture2DArray(t[n]||Wc,s[n])}function Hv(e){switch(e){case 5126:return yv;case 35664:return Mv;case 35665:return bv;case 35666:return Tv;case 35674:return Ev;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Iv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}var Vv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}},kv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},Gv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let n=r[a];n.setValue(e,t[n.id],i)}}},Sn=/(\w+)(\])?(\[|\.)?/g;function Mh(e,t){e.seq.push(t),e.map[t.id]=t}function Wv(e,t,i){let r=e.name,a=r.length;for(Sn.lastIndex=0;;){let s=Sn.exec(r),n=Sn.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===a){Mh(i,h===void 0?new Vv(o,e,t):new kv(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Gv(o),Mh(i,c)),i=c}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let n=e.getActiveUniform(t,s),o=e.getUniformLocation(t,n.name);Wv(n,o,this)}let r=[],a=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let n=t[a],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function bh(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Xv=37297,jv=0;function qv(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let n=a;n<s;n++){let o=n+1;r.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return r.join(`
`)}var Th=new Ue;function Yv(e){Ve._getMatrix(Th,Ve.workingColorSpace,e);let t=`mat3( ${Th.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(e)){case Ts:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Eh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let n=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+qv(e.getShaderSource(t),n)}else return a}function Kv(e,t){let i=Yv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Jv={[So]:"Linear",[yo]:"Reinhard",[Mo]:"Cineon",[Ma]:"ACESFilmic",[To]:"AgX",[Eo]:"Neutral",[bo]:"Custom"};function Zv(e,t){let i=Jv[t];return i===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var ls=new C;function Qv(){Ve.getLuminanceCoefficients(ls);let e=ls.x.toFixed(4),t=ls.y.toFixed(4),i=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function e0(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function t0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let s=e.getActiveAttrib(t,a),n=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[n]={type:s.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function aa(e){return e!==""}function wh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(e){return e.replace(i0,a0)}var r0=new Map;function a0(e,t){let i=ze[t];if(i===void 0){let r=r0.get(t);if(r!==void 0)i=ze[r],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vo(i)}var s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(e){return e.replace(s0,n0)}function n0(e,t,i,r){let a="";for(let s=parseInt(t);s<parseInt(i);s++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Ch(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var o0={[Ir]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function l0(e){return o0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var h0={[ar]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE_UV"};function c0(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":h0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var u0={[Or]:"ENVMAP_MODE_REFRACTION"};function d0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":u0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var p0={[xo]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function f0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":p0[e.combine]||"ENVMAP_BLENDING_NONE"}function m0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function g0(e,t,i,r){let a=e.getContext(),s=i.defines,n=i.vertexShader,o=i.fragmentShader,l=l0(i),h=c0(i),c=d0(i),d=f0(i),u=m0(i),p=$v(i),g=e0(s),_=a.createProgram(),m,f,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(aa).join(`
`),f.length>0&&(f+=`
`)):(m=[Ch(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),f=[Ch(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xt?"#define TONE_MAPPING":"",i.toneMapping!==Xt?ze.tonemapping_pars_fragment:"",i.toneMapping!==Xt?Zv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Kv("linearToOutputTexel",i.outputColorSpace),Qv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(aa).join(`
`)),n=vo(n),n=wh(n,i),n=Ah(n,i),o=vo(o),o=wh(o,i),o=Ah(o,i),n=Rh(n),o=Rh(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=M+m+n,x=M+f+o,E=bh(a,a.VERTEX_SHADER,w),A=bh(a,a.FRAGMENT_SHADER,x);a.attachShader(_,E),a.attachShader(_,A),i.index0AttributeName!==void 0?a.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function R(P){if(e.debug.checkShaderErrors){let D=a.getProgramInfoLog(_)||"",j=a.getShaderInfoLog(E)||"",I=a.getShaderInfoLog(A)||"",H=D.trim(),Y=j.trim(),k=I.trim(),se=!0,X=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(se=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,E,A);else{let K=Eh(a,E,"vertex"),Q=Eh(a,A,"fragment");Le("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+K+`
`+Q)}else H!==""?Ae("WebGLProgram: Program Info Log:",H):(Y===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:se,programLog:H,vertexShader:{log:Y,prefix:m},fragmentShader:{log:k,prefix:f}})}a.deleteShader(E),a.deleteShader(A),v=new vs(a,_),b=t0(a,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(_,Xv)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}var v0=0,_0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new x0(e),t.set(e,i)),i}},x0=class{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}};function S0(e){return e===sr||e===xs||e===Ss}function y0(e,t,i,r,a,s){let n=new Fo,o=new _0,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,L,P,D,j){let I=P.fog,H=D.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=t.get(v.envMap||Y,k),X=se&&se.mapping===Cs?se.image.height:null,K=p[v.type];v.precision!==null&&(u=r.getMaxPrecision(v.precision),u!==v.precision&&Ae("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Be=Q!==void 0?Q.length:0,Te=0;H.morphAttributes.position!==void 0&&(Te=1),H.morphAttributes.normal!==void 0&&(Te=2),H.morphAttributes.color!==void 0&&(Te=3);let st,Oe,q,ie;if(K){let Mt=mi[K];st=Mt.vertexShader,Oe=Mt.fragmentShader}else{st=v.vertexShader,Oe=v.fragmentShader;let Mt=o.getVertexShaderStage(v),je=o.getFragmentShaderStage(v);o.update(v,Mt,je),q=Mt.id,ie=je.id}let oe=e.getRenderTarget(),we=e.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,fe=D.isBatchedMesh===!0,Je=!!v.map,Ge=!!v.matcap,Ne=!!se,ft=!!v.aoMap,Ut=!!v.lightMap,qt=!!v.bumpMap&&v.wireframe===!1,nt=!!v.normalMap,Ht=!!v.displacementMap,St=!!v.emissiveMap,yt=!!v.metalnessMap,O=!!v.roughnessMap,Vt=v.anisotropy>0,We=v.clearcoat>0,lt=v.dispersion>0,T=v.retroreflectivity>0,S=v.iridescence>0,N=v.sheen>0,G=v.transmission>0,Z=Vt&&!!v.anisotropyMap,le=We&&!!v.clearcoatMap,ue=We&&!!v.clearcoatNormalMap,B=We&&!!v.clearcoatRoughnessMap,ae=S&&!!v.iridescenceMap,ce=S&&!!v.iridescenceThicknessMap,_e=N&&!!v.sheenColorMap,te=N&&!!v.sheenRoughnessMap,be=!!v.specularMap,Ee=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Xe=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,J=!!v.gradientMap,$=!!v.alphaMap,me=v.alphaTest>0,Se=!!v.alphaHash,ee=!!v.extensions,pe=Xt;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pe=e.toneMapping);let Ce={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:st,fragmentShader:Oe,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:fe,batchingColor:fe&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Ge,envMap:Ne,envMapMode:Ne&&se.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:Ut,bumpMap:qt,normalMap:nt,displacementMap:Ht,emissiveMap:St,normalMapObjectSpace:nt&&v.normalMapType===zu,normalMapTangentSpace:nt&&v.normalMapType===Ms,packedNormalMap:nt&&v.normalMapType===Ms&&S0(v.normalMap.format),metalnessMap:yt,roughnessMap:O,anisotropy:Vt,anisotropyMap:Z,clearcoat:We,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:B,dispersion:lt,retroreflection:T,iridescence:S,iridescenceMap:ae,iridescenceThicknessMap:ce,sheen:N,sheenColorMap:_e,sheenRoughnessMap:te,specularMap:be,specularColorMap:Ee,specularIntensityMap:Ie,transmission:G,transmissionMap:Xe,thicknessMap:F,gradientMap:J,opaque:v.transparent===!1&&v.blending===sa&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:me,alphaHash:Se,combine:v.combine,mapUv:Je&&g(v.map.channel),aoMapUv:ft&&g(v.aoMap.channel),lightMapUv:Ut&&g(v.lightMap.channel),bumpMapUv:qt&&g(v.bumpMap.channel),normalMapUv:nt&&g(v.normalMap.channel),displacementMapUv:Ht&&g(v.displacementMap.channel),emissiveMapUv:St&&g(v.emissiveMap.channel),metalnessMapUv:yt&&g(v.metalnessMap.channel),roughnessMapUv:O&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:le&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:te&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:Ee&&g(v.specularColorMap.channel),specularIntensityMapUv:Ie&&g(v.specularIntensityMap.channel),transmissionMapUv:Xe&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:$&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(nt||Vt),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Je||$),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:pe,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&Ve.getTransfer(v.map.colorSpace)===qe,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(v.emissiveMap.colorSpace)===qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pt,flipSided:v.side===At,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ee&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&v.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(f(b,v),M(b,v),b.push(e.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){n.disableAll(),b.instancing&&n.enable(0),b.instancingColor&&n.enable(1),b.instancingMorph&&n.enable(2),b.matcap&&n.enable(3),b.envMap&&n.enable(4),b.normalMapObjectSpace&&n.enable(5),b.normalMapTangentSpace&&n.enable(6),b.clearcoat&&n.enable(7),b.iridescence&&n.enable(8),b.alphaTest&&n.enable(9),b.vertexColors&&n.enable(10),b.vertexAlphas&&n.enable(11),b.vertexUv1s&&n.enable(12),b.vertexUv2s&&n.enable(13),b.vertexUv3s&&n.enable(14),b.vertexTangents&&n.enable(15),b.anisotropy&&n.enable(16),b.alphaHash&&n.enable(17),b.batching&&n.enable(18),b.dispersion&&n.enable(19),b.retroreflection&&n.enable(24),b.batchingColor&&n.enable(20),b.gradientMap&&n.enable(21),b.packedNormalMap&&n.enable(22),b.vertexNormals&&n.enable(23),v.push(n.mask),n.disableAll(),b.fog&&n.enable(0),b.useFog&&n.enable(1),b.flatShading&&n.enable(2),b.logarithmicDepthBuffer&&n.enable(3),b.reversedDepthBuffer&&n.enable(4),b.skinning&&n.enable(5),b.morphTargets&&n.enable(6),b.morphNormals&&n.enable(7),b.morphColors&&n.enable(8),b.premultipliedAlpha&&n.enable(9),b.shadowMapEnabled&&n.enable(10),b.doubleSided&&n.enable(11),b.flipSided&&n.enable(12),b.useDepthPacking&&n.enable(13),b.dithering&&n.enable(14),b.transmission&&n.enable(15),b.sheen&&n.enable(16),b.opaque&&n.enable(17),b.pointsUvs&&n.enable(18),b.decodeVideoTexture&&n.enable(19),b.decodeVideoTextureEmissive&&n.enable(20),b.alphaToCoverage&&n.enable(21),b.numLightProbeGrids>0&&n.enable(22),b.hasPositionAttribute&&n.enable(23),v.push(n.mask)}function w(v){let b=p[v.type],L;if(b){let P=mi[b];L=ya.clone(P.uniforms)}else L=v.uniforms;return L}function x(v,b){let L=c.get(b);return L!==void 0?++L.usedTimes:(L=new g0(e,b,v,a),h.push(L),c.set(b,L)),L}function E(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:R}}function M0(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function r(n){e.delete(n)}function a(n,o,l){e.get(n)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:s}}function b0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ph(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Lh(){let e=[],t=0,i=[],r=[],a=[];function s(){t=0,i.length=0,r.length=0,a.length=0}function n(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,m,f){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:n(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},e[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=n(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=f),t++,M}function l(u,p,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);let w=o(u,p,g,_,m,f);g.transmission>0?r.push(w):g.transparent===!0?a.push(w):i.push(w)}function h(u,p,g,_,m,f){let M=o(u,p,g,_,m,f);g.transmission>0?r.unshift(M):g.transparent===!0?a.unshift(M):i.unshift(M)}function c(u,p){i.length>1&&i.sort(u||b0),r.length>1&&r.sort(p||Ph),a.length>1&&a.sort(p||Ph)}function d(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:s,push:l,unshift:h,finish:d,sort:c}}function T0(){let e=new WeakMap;function t(r,a){let s=e.get(r),n;return s===void 0?(n=new Lh,e.set(r,[n])):a>=s.length?(n=new Lh,s.push(n)):n=s[a],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function E0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new xe};break;case"SpotLight":i={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function w0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var A0=0;function R0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function C0(e){let t=new E0,i=w0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let a=new C,s=new it,n=new it;function o(h){let c=0,d=0,u=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,w=0,x=0,E=0,A=0,R=0,v=0,b=0,L=0;h.sort(R0);for(let D=0,j=h.length;D<j;D++){let I=h[D],H=I.color,Y=I.intensity,k=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===sr?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=H.r*Y,d+=H.g*Y,u+=H.b*Y;else if(I.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(I.sh.coefficients[X],Y);L++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Q=i.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[g]=Q,r.sunShadowMap[g]=se;let Be=K.getViewportCount();for(let Te=0;Te<Be;Te++)r.sunShadowMatrix[_+Te]=K.getMatrix(Te),r.sunShadowCascade[_+Te]=K._cascadeData[Te];_+=Be,g++}r.sun[p]=X,p++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Q=i.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.directionalShadow[m]=Q,r.directionalShadowMap[m]=se,r.directionalShadowMatrix[m]=I.shadow.matrix,E++}r.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=k,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,r.spot[M]=X;let K=I.shadow;if(I.map&&(r.spotLightMap[v]=I.map,v++,K.updateMatrices(I),I.castShadow&&b++),r.spotLightMatrix[M]=K.matrix,I.castShadow){let Q=i.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.spotShadow[M]=Q,r.spotShadowMap[M]=se,R++}M++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),r.rectArea[w]=X,w++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let K=I.shadow,Q=i.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,r.pointShadow[f]=Q,r.pointShadowMap[f]=se,r.pointShadowMatrix[f]=I.shadow.matrix,A++}r.point[f]=X,f++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(Y),X.groundColor.copy(I.groundColor).multiplyScalar(Y),r.hemi[x]=X,x++}}w>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==M||P.rectAreaLength!==w||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==A||P.numSpotShadows!==R||P.numSpotMaps!==v||P.numLightProbes!==L)&&(r.sun.length=p,r.directional.length=m,r.spot.length=M,r.rectArea.length=w,r.point.length=f,r.hemi.length=x,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=_,r.sunShadowCascade.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.directionalShadowMatrix.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+v-b,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=L,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=M,P.rectAreaLength=w,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=A,P.numSpotShadows=R,P.numSpotMaps=v,P.numLightProbes=L,r.version=A0++)}function l(h,c){let d=0,u=0,p=0,g=0,_=0,m=0,f=c.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){let x=h[M];if(x.isSunLight){let E=r.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let E=r.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),u++}else if(x.isSpotLight){let E=r.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let E=r.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),n.identity(),s.copy(x.matrixWorld),s.premultiply(f),n.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(n),E.halfHeight.applyMatrix4(n),_++}else if(x.isPointLight){let E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Dh(e){let t=new C0(e),i=[],r=[],a=[];function s(u){d.camera=u,i.length=0,r.length=0,a.length=0}function n(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:h,setupLightsView:c,pushLight:n,pushShadow:o,pushLightProbeGrid:l}}function P0(e){let t=new WeakMap;function i(a,s=0){let n=t.get(a),o;return n===void 0?(o=new Dh(e),t.set(a,[o])):s>=n.length?(o=new Dh(e),n.push(o)):o=n[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],N0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ih=new it,ea=new C,yn=new C;function U0(e,t,i){let r=new zo,a=new re,s=new re,n=new gt,o=new Sp,l=new yp,h={},c=i.maxTextureSize,d={[rr]:At,[At]:rr,[pt]:pt},u=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ot(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let f=this.type;this.render=function(A,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===gu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ir);let b=e.getRenderTarget(),L=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),D=e.state;D.setBlending(vi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let j=f!==this.type;j&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=A.length;I<H;I++){let Y=A[I],k=Y.shadow;if(k===void 0){Ae("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let se=k.getFrameExtents();a.multiply(se),s.copy(k.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(s.x=Math.floor(c/se.x),a.x=s.x*se.x,k.mapSize.x=s.x),a.y>c&&(s.y=Math.floor(c/se.y),a.y=s.y*se.y,k.mapSize.y=s.y));let X=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ia){if(Y.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new zt(a.x,a.y,{format:sr,type:jt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new va(a.x,a.y,li),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Di,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct}else Y.isPointLight?(k.map=new Vr(a.x),k.map.depthTexture=new Fd(a.x,_i)):(k.map=new zt(a.x,a.y),k.map.depthTexture=new va(a.x,a.y,_i)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Di,this.type===Ir?(k.map.depthTexture.compareFunction=X?No:Io,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let K=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,v);for(let Q=0;Q<K;Q++){let Be=k.getCamera(Q);if(Y.isPointLight){let Te=k.camera,st=k.matrix,Oe=Y.distance||Te.far;Oe!==Te.far&&(Te.far=Oe,Te.updateProjectionMatrix()),ea.setFromMatrixPosition(Y.matrixWorld),Te.position.copy(ea),yn.copy(Te.position),yn.add(I0[Q]),Te.up.copy(N0[Q]),Te.lookAt(yn),Te.updateMatrixWorld(),st.makeTranslation(-ea.x,-ea.y,-ea.z),Ih.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ih,Te.coordinateSystem,Te.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,Q),e.clear();else{Q===0&&(e.setRenderTarget(k.map),e.clear());let Te=k.getViewport(Q);n.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),D.viewport(n)}r=k.getFrustum(Q),x(R,v,Be,Y,this.type)}k.isPointLightShadow!==!0&&this.type===ia&&M(k,v),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,L,P)};function M(A,R){let v=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new zt(a.x,a.y,{format:sr,type:jt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,v,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,v,p,_,null)}function w(A,R,v,b){let L=null,P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)L=P;else if(L=v.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=L.uuid,j=R.uuid,I=h[D];I===void 0&&(I={},h[D]=I);let H=I[j];H===void 0&&(H=L.clone(),I[j]=H,R.addEventListener("dispose",E)),L=H}if(L.visible=R.visible,L.wireframe=R.wireframe,b===ia?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:d[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=e.properties.get(L);D.light=v}return L}function x(A,R,v,b,L){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ia)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let D=t.update(A),j=A.material;if(Array.isArray(j)){let I=D.groups;for(let H=0,Y=I.length;H<Y;H++){let k=I[H],se=j[k.materialIndex];if(se&&se.visible){let X=w(A,se,b,L);A.onBeforeShadow(e,A,R,v,D,X,k),e.renderBufferDirect(v,null,D,X,A,k),A.onAfterShadow(e,A,R,v,D,X,k)}}}else if(j.visible){let I=w(A,j,b,L);A.onBeforeShadow(e,A,R,v,D,I,null),e.renderBufferDirect(v,null,D,I,A,null),A.onAfterShadow(e,A,R,v,D,I,null)}}let P=A.children;for(let D=0,j=P.length;D<j;D++)x(P[D],R,v,b,L)}function E(A){A.target.removeEventListener("dispose",E);for(let R in h){let v=h[R],b=A.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function O0(e,t){function i(){let F=!1,J=new gt,$=null,me=new gt(0,0,0,0);return{setMask:function(Se){$!==Se&&!F&&(e.colorMask(Se,Se,Se,Se),$=Se)},setLocked:function(Se){F=Se},setClear:function(Se,ee,pe,Ce,Mt){Mt===!0&&(Se*=Ce,ee*=Ce,pe*=Ce),J.set(Se,ee,pe,Ce),me.equals(J)===!1&&(e.clearColor(Se,ee,pe,Ce),me.copy(J))},reset:function(){F=!1,$=null,me.set(-1,0,0,0)}}}function r(){let F=!1,J=!1,$=null,me=null,Se=null;return{setReversed:function(ee){if(J!==ee){let pe=t.get("EXT_clip_control");ee?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),J=ee;let Ce=Se;Se=null,this.setClear(Ce)}},getReversed:function(){return J},setTest:function(ee){ee?oe(e.DEPTH_TEST):we(e.DEPTH_TEST)},setMask:function(ee){$!==ee&&!F&&(e.depthMask(ee),$=ee)},setFunc:function(ee){if(J&&(ee=Qu[ee]),me!==ee){switch(ee){case Tn:e.depthFunc(e.NEVER);break;case En:e.depthFunc(e.ALWAYS);break;case wn:e.depthFunc(e.LESS);break;case da:e.depthFunc(e.LEQUAL);break;case An:e.depthFunc(e.EQUAL);break;case Rn:e.depthFunc(e.GEQUAL);break;case Cn:e.depthFunc(e.GREATER);break;case Pn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=ee}},setLocked:function(ee){F=ee},setClear:function(ee){Se!==ee&&(Se=ee,J&&(ee=1-ee),e.clearDepth(ee))},reset:function(){F=!1,$=null,me=null,Se=null,J=!1}}}function a(){let F=!1,J=null,$=null,me=null,Se=null,ee=null,pe=null,Ce=null,Mt=null;return{setTest:function(je){F||(je?oe(e.STENCIL_TEST):we(e.STENCIL_TEST))},setMask:function(je){J!==je&&!F&&(e.stencilMask(je),J=je)},setFunc:function(je,ui,Mi){($!==je||me!==ui||Se!==Mi)&&(e.stencilFunc(je,ui,Mi),$=je,me=ui,Se=Mi)},setOp:function(je,ui,Mi){(ee!==je||pe!==ui||Ce!==Mi)&&(e.stencilOp(je,ui,Mi),ee=je,pe=ui,Ce=Mi)},setLocked:function(je){F=je},setClear:function(je){Mt!==je&&(e.clearStencil(je),Mt=je)},reset:function(){F=!1,J=null,$=null,me=null,Se=null,ee=null,pe=null,Ce=null,Mt=null}}}let s=new i,n=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,w=null,x=null,E=null,A=null,R=null,v=new xe(0,0,0),b=0,L=!1,P=null,D=null,j=null,I=null,H=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,se=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=se>=2);let K=null,Q={},Be=e.getParameter(e.SCISSOR_BOX),Te=e.getParameter(e.VIEWPORT),st=new gt().fromArray(Be),Oe=new gt().fromArray(Te);function q(F,J,$,me){let Se=new Uint8Array(4),ee=e.createTexture();e.bindTexture(F,ee),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<$;pe++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,Se):e.texImage2D(J+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Se);return ee}let ie={};ie[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),oe(e.DEPTH_TEST),n.setFunc(da),qt(!1),nt(ml),oe(e.CULL_FACE),ft(vi);function oe(F){c[F]!==!0&&(e.enable(F),c[F]=!0)}function we(F){c[F]!==!1&&(e.disable(F),c[F]=!1)}function Pe(F,J){return u[F]!==J?(e.bindFramebuffer(F,J),u[F]=J,F===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=J),F===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=J),!0):!1}function fe(F,J){let $=g,me=!1;if(F){$=p.get(J),$===void 0&&($=[],p.set(J,$));let Se=F.textures;if($.length!==Se.length||$[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,pe=Se.length;ee<pe;ee++)$[ee]=e.COLOR_ATTACHMENT0+ee;$.length=Se.length,me=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,me=!0);me&&e.drawBuffers($)}function Je(F){return _!==F?(e.useProgram(F),_=F,!0):!1}let Ge={[Rr]:e.FUNC_ADD,[_u]:e.FUNC_SUBTRACT,[xu]:e.FUNC_REVERSE_SUBTRACT};Ge[Su]=e.MIN,Ge[yu]=e.MAX;let Ne={[Mu]:e.ZERO,[bu]:e.ONE,[Tu]:e.SRC_COLOR,[Bh]:e.SRC_ALPHA,[Pu]:e.SRC_ALPHA_SATURATE,[Ru]:e.DST_COLOR,[wu]:e.DST_ALPHA,[Eu]:e.ONE_MINUS_SRC_COLOR,[zh]:e.ONE_MINUS_SRC_ALPHA,[Cu]:e.ONE_MINUS_DST_COLOR,[Au]:e.ONE_MINUS_DST_ALPHA,[Lu]:e.CONSTANT_COLOR,[Du]:e.ONE_MINUS_CONSTANT_COLOR,[Iu]:e.CONSTANT_ALPHA,[Nu]:e.ONE_MINUS_CONSTANT_ALPHA};function ft(F,J,$,me,Se,ee,pe,Ce,Mt,je){if(F===vi){m===!0&&(we(e.BLEND),m=!1);return}if(m===!1&&(oe(e.BLEND),m=!0),F!==vu){if(F!==f||je!==L){if((M!==Rr||E!==Rr)&&(e.blendEquation(e.FUNC_ADD),M=Rr,E=Rr),je)switch(F){case sa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ua:e.blendFunc(e.ONE,e.ONE);break;case gl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case vl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Le("WebGLState: Invalid blending: ",F);break}else switch(F){case sa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ua:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case gl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",F);break}w=null,x=null,A=null,R=null,v.set(0,0,0),b=0,f=F,L=je}return}Se=Se||J,ee=ee||$,pe=pe||me,(J!==M||Se!==E)&&(e.blendEquationSeparate(Ge[J],Ge[Se]),M=J,E=Se),($!==w||me!==x||ee!==A||pe!==R)&&(e.blendFuncSeparate(Ne[$],Ne[me],Ne[ee],Ne[pe]),w=$,x=me,A=ee,R=pe),(Ce.equals(v)===!1||Mt!==b)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Mt),v.copy(Ce),b=Mt),f=F,L=!1}function Ut(F,J){F.side===pt?we(e.CULL_FACE):oe(e.CULL_FACE);let $=F.side===At;J&&($=!$),qt($),F.blending===sa&&F.transparent===!1?ft(vi):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),n.setFunc(F.depthFunc),n.setTest(F.depthTest),n.setMask(F.depthWrite),s.setMask(F.colorWrite);let me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),St(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function qt(F){P!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),P=F)}function nt(F){F!==fu?(oe(e.CULL_FACE),F!==D&&(F===ml?e.cullFace(e.BACK):F===mu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):we(e.CULL_FACE),D=F}function Ht(F){F!==j&&(k&&e.lineWidth(F),j=F)}function St(F,J,$){F?(oe(e.POLYGON_OFFSET_FILL),(I!==J||H!==$)&&(I=J,H=$,n.getReversed()&&(J=-J),e.polygonOffset(J,$))):we(e.POLYGON_OFFSET_FILL)}function yt(F){F?oe(e.SCISSOR_TEST):we(e.SCISSOR_TEST)}function O(F){F===void 0&&(F=e.TEXTURE0+Y-1),K!==F&&(e.activeTexture(F),K=F)}function Vt(F,J,$){$===void 0&&(K===null?$=e.TEXTURE0+Y-1:$=K);let me=Q[$];me===void 0&&(me={type:void 0,texture:void 0},Q[$]=me),(me.type!==F||me.texture!==J)&&(K!==$&&(e.activeTexture($),K=$),e.bindTexture(F,J||ie[F]),me.type=F,me.texture=J)}function We(){let F=Q[K];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function lt(){try{e.compressedTexImage2D(...arguments)}catch(F){Le("WebGLState:",F)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(F){Le("WebGLState:",F)}}function S(){try{e.texSubImage2D(...arguments)}catch(F){Le("WebGLState:",F)}}function N(){try{e.texSubImage3D(...arguments)}catch(F){Le("WebGLState:",F)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Le("WebGLState:",F)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Le("WebGLState:",F)}}function le(){try{e.texStorage2D(...arguments)}catch(F){Le("WebGLState:",F)}}function ue(){try{e.texStorage3D(...arguments)}catch(F){Le("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Le("WebGLState:",F)}}function ae(){try{e.texImage3D(...arguments)}catch(F){Le("WebGLState:",F)}}function ce(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function _e(F,J){d[F]!==J&&(e.pixelStorei(F,J),d[F]=J)}function te(F){st.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),st.copy(F))}function be(F){Oe.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function Ee(F,J){let $=h.get(J);$===void 0&&($=new WeakMap,h.set(J,$));let me=$.get(F);me===void 0&&(me=e.getUniformBlockIndex(J,F.name),$.set(F,me))}function Ie(F,J){let $=h.get(J).get(F);l.get(J)!==$&&(e.uniformBlockBinding(J,$,F.__bindingPointIndex),l.set(J,$))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},K=null,Q={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,w=null,x=null,E=null,A=null,R=null,v=new xe(0,0,0),b=0,L=!1,P=null,D=null,j=null,I=null,H=null,st.set(0,0,e.canvas.width,e.canvas.height),Oe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:oe,disable:we,bindFramebuffer:Pe,drawBuffers:fe,useProgram:Je,setBlending:ft,setMaterial:Ut,setFlipSided:qt,setCullFace:nt,setLineWidth:Ht,setPolygonOffset:St,setScissorTest:yt,activeTexture:O,bindTexture:Vt,unbindTexture:We,compressedTexImage2D:lt,compressedTexImage3D:T,texImage2D:B,texImage3D:ae,pixelStorei:_e,getParameter:ce,updateUBOMapping:Ee,uniformBlockBinding:Ie,texStorage2D:le,texStorage3D:ue,texSubImage2D:S,texSubImage3D:N,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:te,viewport:be,reset:Xe}}function F0(e,t,i,r,a,s,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new re,c=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return g?new OffscreenCanvas(T,S):Es("canvas")}function m(T,S,N){let G=1,Z=lt(T);if((Z.width>N||Z.height>N)&&(G=N/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let le=Math.floor(G*Z.width),ue=Math.floor(G*Z.height);u===void 0&&(u=_(le,ue));let B=S?_(le,ue):u;return B.width=le,B.height=ue,B.getContext("2d").drawImage(T,0,0,le,ue),Ae("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+ue+")."),B}else return"data"in T&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps}function M(T){e.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(T,S,N,G,Z,le=!1){if(T!==null){if(e[T]!==void 0)return e[T];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;G&&(ue=t.get("EXT_texture_norm16"),ue||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=S;if(S===e.RED&&(N===e.FLOAT&&(B=e.R32F),N===e.HALF_FLOAT&&(B=e.R16F),N===e.UNSIGNED_BYTE&&(B=e.R8),N===e.UNSIGNED_SHORT&&ue&&(B=ue.R16_EXT),N===e.SHORT&&ue&&(B=ue.R16_SNORM_EXT)),S===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.R8UI),N===e.UNSIGNED_SHORT&&(B=e.R16UI),N===e.UNSIGNED_INT&&(B=e.R32UI),N===e.BYTE&&(B=e.R8I),N===e.SHORT&&(B=e.R16I),N===e.INT&&(B=e.R32I)),S===e.RG&&(N===e.FLOAT&&(B=e.RG32F),N===e.HALF_FLOAT&&(B=e.RG16F),N===e.UNSIGNED_BYTE&&(B=e.RG8),N===e.UNSIGNED_SHORT&&ue&&(B=ue.RG16_EXT),N===e.SHORT&&ue&&(B=ue.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RG8UI),N===e.UNSIGNED_SHORT&&(B=e.RG16UI),N===e.UNSIGNED_INT&&(B=e.RG32UI),N===e.BYTE&&(B=e.RG8I),N===e.SHORT&&(B=e.RG16I),N===e.INT&&(B=e.RG32I)),S===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RGB8UI),N===e.UNSIGNED_SHORT&&(B=e.RGB16UI),N===e.UNSIGNED_INT&&(B=e.RGB32UI),N===e.BYTE&&(B=e.RGB8I),N===e.SHORT&&(B=e.RGB16I),N===e.INT&&(B=e.RGB32I)),S===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),N===e.UNSIGNED_INT&&(B=e.RGBA32UI),N===e.BYTE&&(B=e.RGBA8I),N===e.SHORT&&(B=e.RGBA16I),N===e.INT&&(B=e.RGBA32I)),S===e.RGB&&(N===e.UNSIGNED_SHORT&&ue&&(B=ue.RGB16_EXT),N===e.SHORT&&ue&&(B=ue.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),S===e.RGBA){let ae=le?Ts:Ve.getTransfer(Z);N===e.FLOAT&&(B=e.RGBA32F),N===e.HALF_FLOAT&&(B=e.RGBA16F),N===e.UNSIGNED_BYTE&&(B=ae===qe?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&ue&&(B=ue.RGBA16_EXT),N===e.SHORT&&ue&&(B=ue.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function E(T,S){let N;return T?S===null||S===_i||S===fa?N=e.DEPTH24_STENCIL8:S===li?N=e.DEPTH32F_STENCIL8:S===pa&&(N=e.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===fa?N=e.DEPTH_COMPONENT24:S===li?N=e.DEPTH_COMPONENT32F:S===pa&&(N=e.DEPTH_COMPONENT16),N}function A(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){let S=T.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&c.delete(S),S.isHTMLTexture&&d.delete(S)}function v(T){let S=T.target;S.removeEventListener("dispose",v),P(S)}function b(T){let S=r.get(T);if(S.__webglInit===void 0)return;let N=T.source,G=p.get(N);if(G){let Z=G[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(T),Object.keys(G).length===0&&p.delete(N)}r.remove(T)}function L(T){let S=r.get(T);e.deleteTexture(S.__webglTexture);let N=T.source,G=p.get(N);delete G[S.__cacheKey],n.memory.textures--}function P(T){let S=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let Z=0;Z<S.__webglFramebuffer[G].length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[G][Z]);else e.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)e.deleteFramebuffer(S.__webglFramebuffer[G]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let N=T.textures;for(let G=0,Z=N.length;G<Z;G++){let le=r.get(N[G]);le.__webglTexture&&(e.deleteTexture(le.__webglTexture),n.memory.textures--),r.remove(N[G])}r.remove(T)}let D=0;function j(){D=0}function I(){return D}function H(T){D=T}function Y(){let T=D;return T>=a.maxTextures&&Ae("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),D+=1,T}function k(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function se(T,S){let N=r.get(T);if(T.isVideoTexture&&Vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let G=T.image;if(G===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{we(N,T,S);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+S)}function X(T,S){let N=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){we(N,T,S);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+S)}function K(T,S){let N=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){we(N,T,S);return}i.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+S)}function Q(T,S){let N=r.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Pe(N,T,S);return}i.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+S)}let Be={[Ln]:e.REPEAT,[Ci]:e.CLAMP_TO_EDGE,[Dn]:e.MIRRORED_REPEAT},Te={[Ct]:e.NEAREST,[Fu]:e.NEAREST_MIPMAP_NEAREST,[Na]:e.NEAREST_MIPMAP_LINEAR,[Nt]:e.LINEAR,[zs]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},st={[Vu]:e.NEVER,[ju]:e.ALWAYS,[ku]:e.LESS,[Io]:e.LEQUAL,[Gu]:e.EQUAL,[No]:e.GEQUAL,[Wu]:e.GREATER,[Xu]:e.NOTEQUAL};function Oe(T,S){if(S.type===li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Nt||S.magFilter===zs||S.magFilter===Na||S.magFilter===tr||S.minFilter===Nt||S.minFilter===zs||S.minFilter===Na||S.minFilter===tr)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Be[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Be[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Be[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Te[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ct||S.minFilter!==Na&&S.minFilter!==tr||S.type===li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function q(T,S){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));let G=S.source,Z=p.get(G);Z===void 0&&(Z={},p.set(G,Z));let le=k(S);if(le!==T.__cacheKey){Z[le]===void 0&&(Z[le]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,N=!0),Z[le].usedTimes++;let ue=Z[T.__cacheKey];ue!==void 0&&(Z[T.__cacheKey].usedTimes--,ue.usedTimes===0&&L(S)),T.__cacheKey=le,T.__webglTexture=Z[le].texture}return N}function ie(T,S,N){return Math.floor(Math.floor(T/N)/S)}function oe(T,S,N,G){let Z=T.updateRanges;if(Z.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,N,G,S.data);else{Z.sort((ce,_e)=>ce.start-_e.start);let le=0;for(let ce=1;ce<Z.length;ce++){let _e=Z[le],te=Z[ce],be=_e.start+_e.count,Ee=ie(te.start,S.width,4),Ie=ie(_e.start,S.width,4);te.start<=be+1&&Ee===Ie&&ie(te.start+te.count-1,S.width,4)===Ee?_e.count=Math.max(_e.count,te.start+te.count-_e.start):(++le,Z[le]=te)}Z.length=le+1;let ue=i.getParameter(e.UNPACK_ROW_LENGTH),B=i.getParameter(e.UNPACK_SKIP_PIXELS),ae=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let ce=0,_e=Z.length;ce<_e;ce++){let te=Z[ce],be=Math.floor(te.start/4),Ee=Math.ceil(te.count/4),Ie=be%S.width,Xe=Math.floor(be/S.width),F=Ee;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(e.UNPACK_SKIP_ROWS,Xe),i.texSubImage2D(e.TEXTURE_2D,0,Ie,Xe,F,1,N,G,S.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ue),i.pixelStorei(e.UNPACK_SKIP_PIXELS,B),i.pixelStorei(e.UNPACK_SKIP_ROWS,ae)}}function we(T,S,N){let G=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=e.TEXTURE_3D);let Z=q(T,S),le=S.source;i.bindTexture(G,T.__webglTexture,e.TEXTURE0+N);let ue=r.get(le);if(le.version!==ue.__version||Z===!0){if(i.activeTexture(e.TEXTURE0+N),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let J=Ve.getPrimaries(Ve.workingColorSpace),$=S.colorSpace===Vi?null:Ve.getPrimaries(S.colorSpace),me=S.colorSpace===Vi||J===$?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let B=m(S.image,!1,a.maxTextureSize);B=We(S,B);let ae=s.convert(S.format,S.colorSpace),ce=s.convert(S.type),_e=x(S.internalFormat,ae,ce,S.normalized,S.colorSpace,S.isVideoTexture);Oe(G,S);let te,be=S.mipmaps,Ee=S.isVideoTexture!==!0,Ie=ue.__version===void 0||Z===!0,Xe=le.dataReady,F=A(S,B);if(S.isDepthTexture)_e=E(S.format===ir,S.type),Ie&&(Ee?i.texStorage2D(e.TEXTURE_2D,1,_e,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,_e,B.width,B.height,0,ae,ce,null));else if(S.isDataTexture)if(be.length>0){Ee&&Ie&&i.texStorage2D(e.TEXTURE_2D,F,_e,be[0].width,be[0].height);for(let J=0,$=be.length;J<$;J++)te=be[J],Ee?Xe&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,te.width,te.height,ae,ce,te.data):i.texImage2D(e.TEXTURE_2D,J,_e,te.width,te.height,0,ae,ce,te.data);S.generateMipmaps=!1}else Ee?(Ie&&i.texStorage2D(e.TEXTURE_2D,F,_e,B.width,B.height),Xe&&oe(S,B,ae,ce)):i.texImage2D(e.TEXTURE_2D,0,_e,B.width,B.height,0,ae,ce,B.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ee&&Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,_e,be[0].width,be[0].height,B.depth);for(let J=0,$=be.length;J<$;J++)if(te=be[J],S.format!==hi)if(ae!==null)if(Ee){if(Xe)if(S.layerUpdates.size>0){let me=dh(te.width,te.height,S.format,S.type);for(let Se of S.layerUpdates){let ee=te.data.subarray(Se*me/te.data.BYTES_PER_ELEMENT,(Se+1)*me/te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Se,te.width,te.height,1,ae,ee)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,B.depth,ae,te.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,_e,te.width,te.height,B.depth,0,te.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Xe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,te.width,te.height,B.depth,ae,ce,te.data):i.texImage3D(e.TEXTURE_2D_ARRAY,J,_e,te.width,te.height,B.depth,0,ae,ce,te.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ee&&Ie&&i.texStorage2D(e.TEXTURE_2D,F,_e,be[0].width,be[0].height);for(let J=0,$=be.length;J<$;J++)te=be[J],S.format!==hi?ae!==null?Ee?Xe&&i.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,te.width,te.height,ae,te.data):i.compressedTexImage2D(e.TEXTURE_2D,J,_e,te.width,te.height,0,te.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Xe&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,te.width,te.height,ae,ce,te.data):i.texImage2D(e.TEXTURE_2D,J,_e,te.width,te.height,0,ae,ce,te.data)}else if(S.isDataArrayTexture)if(Ee){if(Ie&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,_e,B.width,B.height,B.depth),Xe)if(S.layerUpdates.size>0){let J=dh(B.width,B.height,S.format,S.type);for(let $ of S.layerUpdates){let me=B.data.subarray($*J/B.data.BYTES_PER_ELEMENT,($+1)*J/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,B.width,B.height,1,ae,ce,me)}S.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ae,ce,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,B.width,B.height,B.depth,0,ae,ce,B.data);else if(S.isData3DTexture)Ee?(Ie&&i.texStorage3D(e.TEXTURE_3D,F,_e,B.width,B.height,B.depth),Xe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ae,ce,B.data)):i.texImage3D(e.TEXTURE_3D,0,_e,B.width,B.height,B.depth,0,ae,ce,B.data);else if(S.isFramebufferTexture){if(Ie)if(Ee)i.texStorage2D(e.TEXTURE_2D,F,_e,B.width,B.height);else{let J=B.width,$=B.height;for(let me=0;me<F;me++)i.texImage2D(e.TEXTURE_2D,me,_e,J,$,0,ae,ce,null),J>>=1,$>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),B.parentNode!==J){J.appendChild(B),d.add(S),J.onpaint=$=>{let me=$.changedElements;for(let Se of d)me.includes(Se.image)&&(Se.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{let $=e.RGBA,me=e.RGBA,Se=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,$,me,Se,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ee&&Ie){let J=lt(be[0]);i.texStorage2D(e.TEXTURE_2D,F,_e,J.width,J.height)}for(let J=0,$=be.length;J<$;J++)te=be[J],Ee?Xe&&i.texSubImage2D(e.TEXTURE_2D,J,0,0,ae,ce,te):i.texImage2D(e.TEXTURE_2D,J,_e,ae,ce,te);S.generateMipmaps=!1}else if(Ee){if(Ie){let J=lt(B);i.texStorage2D(e.TEXTURE_2D,F,_e,J.width,J.height)}Xe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,ce,B)}else i.texImage2D(e.TEXTURE_2D,0,_e,ae,ce,B);f(S)&&M(G),ue.__version=le.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Pe(T,S,N){if(S.image.length!==6)return;let G=q(T,S),Z=S.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+N);let le=r.get(Z);if(Z.version!==le.__version||G===!0){i.activeTexture(e.TEXTURE0+N);let ue=Ve.getPrimaries(Ve.workingColorSpace),B=S.colorSpace===Vi?null:Ve.getPrimaries(S.colorSpace),ae=S.colorSpace===Vi||ue===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ce=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,te=[];for(let ee=0;ee<6;ee++)!ce&&!_e?te[ee]=m(S.image[ee],!0,a.maxCubemapSize):te[ee]=_e?S.image[ee].image:S.image[ee],te[ee]=We(S,te[ee]);let be=te[0],Ee=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type),Xe=x(S.internalFormat,Ee,Ie,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,J=le.__version===void 0||G===!0,$=Z.dataReady,me=A(S,be);Oe(e.TEXTURE_CUBE_MAP,S);let Se;if(ce){F&&J&&i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Xe,be.width,be.height);for(let ee=0;ee<6;ee++){Se=te[ee].mipmaps;for(let pe=0;pe<Se.length;pe++){let Ce=Se[pe];S.format!==hi?Ee!==null?F?$&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ce.width,Ce.height,Ee,Ce.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Xe,Ce.width,Ce.height,0,Ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ce.width,Ce.height,Ee,Ie,Ce.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Xe,Ce.width,Ce.height,0,Ee,Ie,Ce.data)}}}else{if(Se=S.mipmaps,F&&J){Se.length>0&&me++;let ee=lt(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(_e){F?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,te[ee].width,te[ee].height,Ee,Ie,te[ee].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,te[ee].width,te[ee].height,0,Ee,Ie,te[ee].data);for(let pe=0;pe<Se.length;pe++){let Ce=Se[pe].image[ee].image;F?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ce.width,Ce.height,Ee,Ie,Ce.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Xe,Ce.width,Ce.height,0,Ee,Ie,Ce.data)}}else{F?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee,Ie,te[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ee,Ie,te[ee]);for(let pe=0;pe<Se.length;pe++){let Ce=Se[pe];F?$&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ee,Ie,Ce.image[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Xe,Ee,Ie,Ce.image[ee])}}}f(S)&&M(e.TEXTURE_CUBE_MAP),le.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function fe(T,S,N,G,Z,le){let ue=s.convert(N.format,N.colorSpace),B=s.convert(N.type),ae=x(N.internalFormat,ue,B,N.normalized,N.colorSpace),ce=r.get(S),_e=r.get(N);if(_e.__renderTarget=S,!ce.__hasExternalTextures){let te=Math.max(1,S.width>>le),be=Math.max(1,S.height>>le);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?i.texImage3D(Z,le,ae,te,be,S.depth,0,ue,B,null):i.texImage2D(Z,le,ae,te,be,0,ue,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),O(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Z,_e.__webglTexture,0,yt(S)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Z,_e.__webglTexture,le),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(T,S,N){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){let G=S.depthTexture,Z=G&&G.isDepthTexture?G.type:null,le=E(S.stencilBuffer,Z),ue=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;O(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt(S),le,S.width,S.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,yt(S),le,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,le,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,T)}else{let G=S.textures;for(let Z=0;Z<G.length;Z++){let le=G[Z],ue=s.convert(le.format,le.colorSpace),B=s.convert(le.type),ae=x(le.internalFormat,ue,B,le.normalized,le.colorSpace);O(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt(S),ae,S.width,S.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,yt(S),ae,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ae,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ge(T,S,N){let G=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=r.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,S.depthTexture);let ce=s.convert(S.depthTexture.format),_e=s.convert(S.depthTexture.type),te;S.depthTexture.format===Di?te=e.DEPTH_COMPONENT24:S.depthTexture.format===ir&&(te=e.DEPTH24_STENCIL8);for(let be=0;be<6;be++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,te,S.width,S.height,0,ce,_e,null)}}else se(S.depthTexture,0);let le=Z.__webglTexture,ue=yt(S),B=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,ae=S.depthTexture.format===ir?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)O(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,B,le,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,ae,B,le,0);else if(S.depthTexture.format===ir)O(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,B,le,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,ae,B,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(T){let S=r.get(T),N=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=G}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)Ge(S.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?Ge(S.__webglFramebuffer[0],T,0):Ge(S.__webglFramebuffer,T,0)}else if(N){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=e.createRenderbuffer(),Je(S.__webglDepthbuffer[G],T,!1);else{let Z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,le),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,le)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Je(S.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,le),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,le)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(T,S,N){let G=r.get(T);S!==void 0&&fe(G.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Ne(T)}function Ut(T){let S=T.texture,N=r.get(T),G=r.get(S);T.addEventListener("dispose",v);let Z=T.textures,le=T.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=S.version,n.memory.textures++),le){N.__webglFramebuffer=[];for(let B=0;B<6;B++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[B]=[];for(let ae=0;ae<S.mipmaps.length;ae++)N.__webglFramebuffer[B][ae]=e.createFramebuffer()}else N.__webglFramebuffer[B]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let B=0;B<S.mipmaps.length;B++)N.__webglFramebuffer[B]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(ue)for(let B=0,ae=Z.length;B<ae;B++){let ce=r.get(Z[B]);ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture(),n.memory.textures++)}if(T.samples>0&&O(T)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let B=0;B<Z.length;B++){let ae=Z[B];N.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[B]);let ce=s.convert(ae.format,ae.colorSpace),_e=s.convert(ae.type),te=x(ae.internalFormat,ce,_e,ae.normalized,ae.colorSpace,T.isXRRenderTarget===!0),be=yt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,be,te,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,N.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Je(N.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(le){i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,S);for(let B=0;B<6;B++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)fe(N.__webglFramebuffer[B][ae],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae);else fe(N.__webglFramebuffer[B],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);f(S)&&M(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ue){for(let B=0,ae=Z.length;B<ae;B++){let ce=Z[B],_e=r.get(ce),te=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(te,_e.__webglTexture),Oe(te,ce),fe(N.__webglFramebuffer,T,ce,e.COLOR_ATTACHMENT0+B,te,0),f(ce)&&M(te)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(B=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,G.__webglTexture),Oe(B,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)fe(N.__webglFramebuffer[ae],T,S,e.COLOR_ATTACHMENT0,B,ae);else fe(N.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,B,0);f(S)&&M(B),i.unbindTexture()}T.depthBuffer&&Ne(T)}function qt(T){let S=T.textures;for(let N=0,G=S.length;N<G;N++){let Z=S[N];if(f(Z)){let le=w(T),ue=r.get(Z).__webglTexture;i.bindTexture(le,ue),M(le),i.unbindTexture()}}}let nt=[],Ht=[];function St(T){if(T.samples>0){if(O(T)===!1){let S=T.textures,N=T.width,G=T.height,Z=e.COLOR_BUFFER_BIT,le=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=r.get(T),B=S.length>1;if(B)for(let ce=0;ce<S.length;ce++)i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ae=T.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let _e=r.get(S[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,N,G,0,0,N,G,Z,e.NEAREST),l===!0&&(nt.length=0,Ht.length=0,nt.push(e.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(nt.push(le),Ht.push(le),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,nt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let ce=0;ce<S.length;ce++){i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let _e=r.get(S[ce]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,_e,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function yt(T){return Math.min(a.maxSamples,T.samples)}function O(T){let S=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(T){let S=n.render.frame;c.get(T)!==S&&(c.set(T,S),T.update())}function We(T,S){let N=T.colorSpace,G=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==bs&&N!==Vi&&(Ve.getTransfer(N)===qe?(G!==hi||Z!==Qt)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",N)),S}function lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=ft,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function B0(e,t){function i(r,a=Vi){let s,n=Ve.getTransfer(a);if(r===Qt)return e.UNSIGNED_BYTE;if(r===Ao)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ro)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Gh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Wh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Vh)return e.BYTE;if(r===kh)return e.SHORT;if(r===pa)return e.UNSIGNED_SHORT;if(r===wo)return e.INT;if(r===_i)return e.UNSIGNED_INT;if(r===li)return e.FLOAT;if(r===jt)return e.HALF_FLOAT;if(r===Xh)return e.ALPHA;if(r===jh)return e.RGB;if(r===hi)return e.RGBA;if(r===Di)return e.DEPTH_COMPONENT;if(r===ir)return e.DEPTH_STENCIL;if(r===Co)return e.RED;if(r===Po)return e.RED_INTEGER;if(r===sr)return e.RG;if(r===Lo)return e.RG_INTEGER;if(r===Do)return e.RGBA_INTEGER;if(r===us||r===ds||r===ps||r===fs)if(n===qe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===In||r===Nn||r===Un||r===On)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===In)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Un)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===On)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fn||r===Bn||r===zn||r===Hn||r===Vn||r===xs||r===kn)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Fn||r===Bn)return n===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===zn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hn)return s.COMPRESSED_R11_EAC;if(r===Vn)return s.COMPRESSED_SIGNED_R11_EAC;if(r===xs)return s.COMPRESSED_RG11_EAC;if(r===kn)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Gn||r===Wn||r===Xn||r===jn||r===qn||r===Yn||r===Kn||r===Jn||r===Zn||r===Qn||r===$n||r===eo||r===to||r===io)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Gn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qn)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$n)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eo)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===to)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return n===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ro||r===ao||r===so)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===ro)return n===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===so)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===no||r===oo||r===Ss||r===lo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===no)return s.COMPRESSED_RED_RGTC1_EXT;if(r===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ss)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,V0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new cc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ct({vertexShader:z0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},k0=class extends ki{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",_=new V0,m={},f=t.getContextAttributes(),M=null,w=null,x=[],E=[],A=new re,R=null,v=null,b=new Zt;b.viewport=new gt;let L=new Zt;L.viewport=new gt;let P=[b,L],D=new Fp,j=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new qs,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new qs,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new qs,x[q]=ie),ie.getHandSpace()};function H(q){let ie=E.indexOf(q.inputSource);if(ie===-1)return;let oe=x[ie];oe!==void 0&&(oe.update(q.inputSource,q.frame,l||s),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",k);for(let q=0;q<x.length;q++){let ie=E[q];ie!==null&&(E[q]=null,x[q].disconnect(ie))}j=null,I=null,_.reset();for(let q in m)delete m[q];if(e.setRenderTarget(M),u=null,d=null,c=null,r=null,w=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),v!==null){let q=v.camera;q.fov=v.fov,q.zoom=v.zoom,q.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){n=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,oe=null,we=null;f.depth&&(we=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=f.stencil?ir:Di,oe=f.stencil?fa:_i);let Pe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new zt(d.textureWidth,d.textureHeight,{format:hi,type:Qt,depthTexture:new va(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new zt(u.framebufferWidth,u.framebufferHeight,{format:hi,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(q){for(let ie=0;ie<q.removed.length;ie++){let oe=q.removed[ie],we=E.indexOf(oe);we>=0&&(E[we]=null,x[we].disconnect(oe))}for(let ie=0;ie<q.added.length;ie++){let oe=q.added[ie],we=E.indexOf(oe);if(we===-1){for(let fe=0;fe<x.length;fe++)if(fe>=E.length){E.push(oe),we=fe;break}else if(E[fe]===null){E[fe]=oe,we=fe;break}if(we===-1)break}let Pe=x[we];Pe&&Pe.connect(oe)}}let se=new C,X=new C;function K(q,ie,oe){se.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);let we=se.distanceTo(X),Pe=ie.projectionMatrix.elements,fe=oe.projectionMatrix.elements,Je=Pe[14]/(Pe[10]-1),Ge=Pe[14]/(Pe[10]+1),Ne=(Pe[9]+1)/Pe[5],ft=(Pe[9]-1)/Pe[5],Ut=(Pe[8]-1)/Pe[0],qt=(fe[8]+1)/fe[0],nt=Je*Ut,Ht=Je*qt,St=we/(-Ut+qt),yt=St*-Ut;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let O=Je+St,Vt=Ge+St,We=nt-yt,lt=Ht+(we-yt),T=Ne*Ge/Vt*O,S=ft*Ge/Vt*O;q.projectionMatrix.makePerspective(We,lt,T,S,O,Vt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,oe=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),D.near=L.near=b.near=ie,D.far=L.far=b.far=oe,(j!==D.near||I!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),j=D.near,I=D.far),D.layers.mask=q.layers.mask|6,b.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let we=q.parent,Pe=D.cameras;Q(D,we);for(let fe=0;fe<Pe.length;fe++)Q(Pe[fe],we);Pe.length===2?K(D,b,L):D.projectionMatrix.copy(b.projectionMatrix),v===null&&q.isPerspectiveCamera&&(v={camera:q,fov:q.fov,zoom:q.zoom}),Be(q,D,we)};function Be(q,ie,oe){oe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ga*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let Te=null;function st(q,ie){if(h=ie.getViewerPose(l||s),p=ie,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let we=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let fe=0;fe<oe.length;fe++){let Je=oe[fe],Ge=null;if(u!==null)Ge=u.getViewport(Je);else{let ft=c.getViewSubImage(d,Je);Ge=ft.viewport,fe===0&&(e.setRenderTargetTextures(w,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(w))}let Ne=P[fe];Ne===void 0&&(Ne=new Zt,Ne.layers.enable(fe),Ne.viewport=new gt,P[fe]=Ne),Ne.matrix.fromArray(Je.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Je.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),fe===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(Ne)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=i.getBinding();let fe=c.getDepthInformation(oe[0]);fe&&fe.isValid&&fe.texture&&_.init(fe,r.renderState)}if(Pe&&Pe.includes("camera-access")&&g){e.state.unbindTexture(),c=i.getBinding();for(let fe=0;fe<oe.length;fe++){let Je=oe[fe].camera;if(Je){let Ge=m[Je];Ge||(Ge=new cc,m[Je]=Ge);let Ne=c.getCameraImage(Je);Ge.sourceTexture=Ne}}}}for(let oe=0;oe<x.length;oe++){let we=E[oe],Pe=x[oe];we!==null&&Pe!==void 0&&Pe.update(we,ie,l||s)}Te&&Te(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Oe=new Vc;Oe.setAnimationLoop(st),this.setAnimationLoop=function(q){Te=q},this.dispose=function(){}}},G0=new it,qc=new Ue;qc.set(-1,0,0,0,1,0,0,0,1);function W0(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Lc(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,M,w,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(n(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,w):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===At&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===At&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function n(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===At&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function X0(e,t,i,r){let a={},s={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let A=E.program;r.uniformBlockBinding(x,A)}function h(x,E){let A=a[x.id];A===void 0&&(m(x),A=c(x),a[x.id]=A,x.addEventListener("dispose",M));let R=E.program;r.updateUBOMapping(x,R);let v=t.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function c(x){let E=d();x.__bindingPointIndex=E;let A=e.createBuffer(),R=x.__size,v=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function d(){for(let x=0;x<o;x++)if(n.indexOf(x)===-1)return n.push(x),x;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let E=a[x.id],A=x.uniforms,R=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let v=0,b=A.length;v<b;v++){let L=A[v];if(Array.isArray(L))for(let P=0,D=L.length;P<D;P++)p(L[P],v,P,R);else p(L,v,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(x,E,A,R){if(_(x,E,A,R)===!0){let v=x.__offset,b=x.value;if(Array.isArray(b)){let L=0;for(let P=0;P<b.length;P++){let D=b[P],j=f(D);g(D,x.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,x.__data)}}function g(x,E,A){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,A)}function _(x,E,A,R){let v=x.value,b=E+"_"+A;if(R[b]===void 0)return typeof v=="number"||typeof v=="boolean"?R[b]=v:ArrayBuffer.isView(v)?R[b]=v.slice():R[b]=v.clone(),!0;{let L=R[b];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(x){let E=x.uniforms,A=0,R=16;for(let b=0,L=E.length;b<L;b++){let P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,j=P.length;D<j;D++){let I=P[D],H=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,k=H.length;Y<k;Y++){let se=H[Y],X=f(se),K=A%R,Q=K%X.boundary,Be=K+Q;A+=Q,Be!==0&&R-Be<X.storage&&(A+=R-Be),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=X.storage}}}let v=A%R;return v>0&&(A+=R-v),x.__size=A,x.__cache={},this}function f(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),E}function M(x){let E=x.target;E.removeEventListener("dispose",M);let A=n.indexOf(E.__bindingPointIndex);n.splice(A,1),e.deleteBuffer(a[E.id]),delete a[E.id],delete s[E.id]}function w(){for(let x in a)e.deleteBuffer(a[x]);n=[],a={},s={}}return{bind:l,update:h,dispose:w}}var j0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function q0(){return fi===null&&(fi=new nc(j0,16,16,sr,jt),fi.name="DFG_LUT",fi.minFilter=Nt,fi.magFilter=Nt,fi.wrapS=Ci,fi.wrapT=Ci,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Yc=class{constructor(e={}){let{canvas:t=Ju(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Qt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let g=u,_=new Set([Do,Lo,Po]),m=new Set([Qt,_i,pa,fa,Ao,Ro]),f=new Uint32Array(4),M=new Int32Array(4),w=new C,x=null,E=null,A=[],R=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,L=!1,P=null,D=null,j=null,I=null;this._outputColorSpace=Gt;let H=0,Y=0,k=null,se=-1,X=null,K=new gt,Q=new gt,Be=null,Te=new xe(0),st=0,Oe=t.width,q=t.height,ie=1,oe=null,we=null,Pe=new gt(0,0,Oe,q),fe=new gt(0,0,Oe,q),Je=!1,Ge=new zo,Ne=!1,ft=!1,Ut=new it,qt=new C,nt=new gt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function yt(){return k===null?ie:1}let O=i;function Vt(y,U){return t.getContext(y,U)}let We,lt,T,S,N,G,Z,le,ue,B,ae,ce,_e,te,be,Ee,Ie,Xe,F,J,$,me,Se;try{let y={alpha:!0,depth:r,stencil:a,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",je,!1),O===null){let U="webgl2";if(O=Vt(U,y),O===null)throw Vt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(y){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Le("WebGLRenderer: "+y.message),y}function ee(){We=new qg(O),We.init(),$=new B0(O,We),lt=new Fg(O,We,e,$),T=new O0(O,We),lt.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),D=O.createFramebuffer(),j=O.createFramebuffer(),I=O.createFramebuffer(),S=new Jg(O),N=new M0,G=new F0(O,We,T,N,lt,$,S),Z=new jg(b),le=new Zp(O),me=new Ug(O,le),ue=new Yg(O,le,S,me),B=new Qg(O,ue,le,me,S),Xe=new Zg(O,lt,G),be=new Bg(N),ae=new y0(b,Z,We,lt,me,be),ce=new W0(b,N),_e=new T0,te=new P0(We),Ie=new Ng(b,Z,T,B,p,o),Ee=new U0(b,B,lt),Se=new X0(O,S,lt,T),F=new Og(O,We,S),J=new Kg(O,We,S),S.programs=ae.programs,b.capabilities=lt,b.extensions=We,b.properties=N,b.renderLists=_e,b.shadowMap=Ee,b.state=T,b.info=S}g!==Qt&&(v=new ev(g,t.width,t.height,n,r,a));let pe=new k0(b,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=We.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=We.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(Oe,q,!1))},this.getSize=function(y){return y.set(Oe,q)},this.setSize=function(y,U,W=!0){if(pe.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=y,q=U,t.width=Math.floor(y*ie),t.height=Math.floor(U*ie),W===!0&&(t.style.width=y+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Oe*ie,q*ie).floor()},this.setDrawingBufferSize=function(y,U,W){Oe=y,q=U,ie=W,t.width=Math.floor(y*W),t.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(g===Qt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(K)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,U,W,V){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,U,W,V),T.viewport(K.copy(Pe).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,U,W,V){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,U,W,V),T.scissor(Q.copy(fe).multiplyScalar(ie).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){T.setScissorTest(Je=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){we=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,W=!0){let V=0;if(y){let z=!1;if(k!==null){let ne=k.texture.format;z=_.has(ne)}if(z){let ne=k.texture.type,de=m.has(ne),ge=Ie.getClearColor(),ve=Ie.getClearAlpha(),Re=ge.r,He=ge.g,ke=ge.b;de?(f[0]=Re,f[1]=He,f[2]=ke,f[3]=ve,O.clearBufferuiv(O.COLOR,0,f)):(M[0]=Re,M[1]=He,M[2]=ke,M[3]=ve,O.clearBufferiv(O.COLOR,0,M))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Ie.dispose(),_e.dispose(),te.dispose(),N.dispose(),Z.dispose(),B.dispose(),me.dispose(),Se.dispose(),ae.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",nl),pe.removeEventListener("sessionend",ol),Yi.stop()};function Ce(y){y.preventDefault(),Tl("WebGLRenderer: Context Lost."),L=!0}function Mt(){Tl("WebGLRenderer: Context Restored."),L=!1;let y=S.autoReset,U=Ee.enabled,W=Ee.autoUpdate,V=Ee.needsUpdate,z=Ee.type;ee(),S.autoReset=y,Ee.enabled=U,Ee.autoUpdate=W,Ee.needsUpdate=V,Ee.type=z}function je(y){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ui(y){let U=y.target;U.removeEventListener("dispose",ui),Mi(U)}function Mi(y){lu(y),N.remove(y)}function lu(y){let U=N.get(y).programs;U!==void 0&&(U.forEach(function(W){ae.releaseProgram(W)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,V,z,ne){U===null&&(U=Ht);let de=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=uu(y,U,W,V,z);T.setMaterial(V,de);let ve=W.index,Re=1;if(V.wireframe===!0){if(ve=ue.getWireframeAttribute(W),ve===void 0)return;Re=2}let He=W.drawRange,ke=W.attributes.position,Me=He.start*Re,Ze=(He.start+He.count)*Re;ne!==null&&(Me=Math.max(Me,ne.start*Re),Ze=Math.min(Ze,(ne.start+ne.count)*Re)),ve!==null?(Me=Math.max(Me,0),Ze=Math.min(Ze,ve.count)):ke!=null&&(Me=Math.max(Me,0),Ze=Math.min(Ze,ke.count));let vt=Ze-Me;if(vt<0||vt===1/0)return;me.setup(z,V,ge,W,ve);let rt,at=F;if(ve!==null&&(rt=le.get(ve),at=J,at.setIndex(rt)),z.isMesh)V.wireframe===!0?(T.setLineWidth(V.wireframeLinewidth*yt()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(z.isLine){let ut=V.linewidth;ut===void 0&&(ut=1),T.setLineWidth(ut*yt()),z.isLineSegments?at.setMode(O.LINES):z.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else z.isPoints?at.setMode(O.POINTS):z.isSprite&&at.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(We.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ut=z._multiDrawStarts,ye=z._multiDrawCounts,Ot=z._multiDrawCount,Ki=ve?le.get(ve).bytesPerElement:1,ei=N.get(V).currentProgram.getUniforms();for(let di=0;di<Ot;di++)ei.setValue(O,"_gl_DrawID",di),at.render(ut[di]/Ki,ye[di])}else if(z.isInstancedMesh)at.renderInstances(Me,vt,z.count);else if(W.isInstancedBufferGeometry){let ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,ut);at.renderInstances(Me,vt,ye)}else at.render(Me,vt)};function sl(y,U,W,V){P!==null&&y.isNodeMaterial&&P.setObject(V,y),Ne===!0&&be.setState(y,W,!1),y.transparent===!0&&y.side===pt&&y.forceSinglePass===!1?(y.side=At,y.needsUpdate=!0,Ia(y,U,V),y.side=rr,y.needsUpdate=!0,Ia(y,U,V),y.side=pt):Ia(y,U,V)}this.compile=function(y,U,W=null){W===null&&(W=y),P!==null&&P.renderStart(y,U,W),E=te.get(W),E.init(U),R.push(E),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==W&&y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),ft=this.localClippingEnabled,Ne=be.init(this.clippingPlanes,ft),Ne===!0&&be.setGlobalState(this.clippingPlanes,U),P!==null&&Ee.render(E.state.shadowsArray,W,U);let V=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ne=z.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){let ge=ne[de];sl(ge,W,U,z),V.add(ge)}else sl(ne,W,U,z),V.add(ne)}),E=R.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(y,U,W=null){let V=this.compile(y,U,W);return new Promise(z=>{function ne(){if(V.forEach(function(de){let ge=N.get(de).currentProgram;(ge===void 0||ge.isReady())&&V.delete(de)}),V.size===0){z(y);return}setTimeout(ne,10)}We.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Os=null;function hu(y){Os&&Os(y)}function nl(){Yi.stop()}function ol(){Yi.start()}let Yi=new Vc;Yi.setAnimationLoop(hu),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(y){Os=y,pe.setAnimationLoop(y),y===null?Yi.stop():Yi.start()},pe.addEventListener("sessionstart",nl),pe.addEventListener("sessionend",ol),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(y,U);let W=pe.enabled===!0&&pe.isPresenting===!0,V=v!==null&&(k===null||W)&&v.begin(b,k);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,k),E=te.get(y,R.length),E.init(U),E.state.textureUnits=G.getTextureUnits(),R.push(E),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(Ut,gi,U.reversedDepth),ft=this.localClippingEnabled,Ne=be.init(this.clippingPlanes,ft),x=_e.get(y,A.length),x.init(),A.push(x),pe.enabled===!0&&pe.isPresenting===!0){let ne=b.xr.getDepthSensingMesh();ne!==null&&Fs(ne,U,-1/0,b.sortObjects)}Fs(y,U,0,b.sortObjects),x.finish(),P!==null&&P.updateLights(E.state.lightsArray),b.sortObjects===!0&&x.sort(oe,we),St=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,St&&Ie.addToRenderList(x,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&be.beginShadows();let z=E.state.shadowsArray;if(Ee.render(z,y,U),Ne===!0&&be.endShadows(),(V&&v.hasRenderPass())===!1){let ne=x.opaque,de=x.transmissive;if(E.setupLights(),U.isArrayCamera){let ge=U.cameras;if(de.length>0)for(let ve=0,Re=ge.length;ve<Re;ve++){let He=ge[ve];hl(ne,de,y,He)}St&&Ie.render(y);for(let ve=0,Re=ge.length;ve<Re;ve++){let He=ge[ve];ll(x,y,He,He.viewport)}}else de.length>0&&hl(ne,de,y,U),St&&Ie.render(y),ll(x,y,U)}k!==null&&Y===0&&(G.updateMultisampleRenderTarget(k),G.updateRenderTargetMipmap(k)),V&&v.end(b),y.isScene===!0&&y.onAfterRender(b,y,U),me.resetDefaultState(),se=-1,X=null,R.pop(),R.length>0?(E=R[R.length-1],G.setTextureUnits(E.state.textureUnits),Ne===!0&&be.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?x=A[A.length-1]:x=null,P!==null&&P.renderEnd()};function Fs(y,U,W,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ge)){V&&nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ut);let ne=B.update(y),de=y.material;de.visible&&x.push(y,ne,de,W,nt.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ge))){let ne=B.update(y),de=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),nt.copy(y.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),nt.copy(ne.boundingSphere.center)),nt.applyMatrix4(y.matrixWorld).applyMatrix4(Ut)),Array.isArray(de)){let ge=ne.groups;for(let ve=0,Re=ge.length;ve<Re;ve++){let He=ge[ve],ke=de[He.materialIndex];ke&&ke.visible&&x.push(y,ne,ke,W,nt.z,He,U)}}else de.visible&&x.push(y,ne,de,W,nt.z,null,U)}}let z=y.children;for(let ne=0,de=z.length;ne<de;ne++)Fs(z[ne],U,W,V)}function ll(y,U,W,V){let{opaque:z,transmissive:ne,transparent:de}=y;E.setupLightsView(W),Ne===!0&&be.setGlobalState(b.clippingPlanes,W),V&&T.viewport(K.copy(V)),z.length>0&&Da(z,U,W),ne.length>0&&Da(ne,U,W),de.length>0&&Da(de,U,W),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hl(y,U,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let ke=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new zt(1,1,{generateMipmaps:!0,type:ke?jt:Qt,minFilter:tr,samples:Math.max(4,lt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let z=E.state.transmissionRenderTarget[V.id],ne=V.viewport||K;z.setSize(ne.z*b.transmissionResolutionScale,ne.w*b.transmissionResolutionScale);let de=b.getRenderTarget(),ge=b.getActiveCubeFace(),ve=b.getActiveMipmapLevel();b.setRenderTarget(z),b.getClearColor(Te),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),St&&Ie.render(W);let Re=b.toneMapping;b.toneMapping=Xt;let He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Ne===!0&&be.setGlobalState(b.clippingPlanes,V),Da(y,W,V),G.updateMultisampleRenderTarget(z),G.updateRenderTargetMipmap(z),We.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Me=0,Ze=U.length;Me<Ze;Me++){let vt=U[Me],{object:rt,geometry:at,material:ut,group:ye}=vt;if(ut.side===pt&&rt.layers.test(V.layers)){let Ot=ut.side;ut.side=At,ut.needsUpdate=!0,cl(rt,W,V,at,ut,ye),ut.side=Ot,ut.needsUpdate=!0,ke=!0}}ke===!0&&(G.updateMultisampleRenderTarget(z),G.updateRenderTargetMipmap(z))}b.setRenderTarget(de,ge,ve),b.setClearColor(Te,st),He!==void 0&&(V.viewport=He),b.toneMapping=Re}function Da(y,U,W){let V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ne=y.length;z<ne;z++){let de=y[z],{object:ge,geometry:ve,group:Re}=de,He=de.material;He.allowOverride===!0&&V!==null&&(He=V),ge.layers.test(W.layers)&&cl(ge,U,W,ve,He,Re)}}function cl(y,U,W,V,z,ne){P!==null&&z.isNodeMaterial&&P.setObject(y,z),y.onBeforeRender(b,U,W,V,z,ne),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(b,U,W,V,y,ne),z.transparent===!0&&z.side===pt&&z.forceSinglePass===!1?(z.side=At,z.needsUpdate=!0,b.renderBufferDirect(W,U,V,z,y,ne),z.side=rr,z.needsUpdate=!0,b.renderBufferDirect(W,U,V,z,y,ne),z.side=pt):b.renderBufferDirect(W,U,V,z,y,ne),y.onAfterRender(b,U,W,V,z,ne)}function Ia(y,U,W){U.isScene!==!0&&(U=Ht);let V=N.get(y),z=E.state.lights,ne=E.state.shadowsArray,de=z.state.version,ge=ae.getParameters(y,z.state,ne,U,W,E.state.lightProbeGridArray),ve=ae.getProgramCacheKey(ge),Re=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=Z.get(y.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",ui),Re=new Map,V.programs=Re);let ke=Re.get(ve);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===de)return dl(y,ge),ke}else ge.uniforms=ae.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,W,ge),y.onBeforeCompile(ge,b),ke=ae.acquireProgram(ge,ve),Re.set(ve,ke),V.uniforms=ge.uniforms;let Me=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=be.uniform),dl(y,ge),V.needsLights=pu(y),V.lightsStateVersion=de,V.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ke,V.uniformsList=null,ke}function ul(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=vs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function dl(y,U){let W=N.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function cu(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;w.setFromMatrixPosition(U.matrixWorld);for(let W=0,V=y.length;W<V;W++){let z=y[W];if(z.texture!==null&&z.boundingBox.containsPoint(w))return z}return null}function uu(y,U,W,V,z){U.isScene!==!0&&(U=Ht),G.resetTextureUnits();let ne=U.fog,de=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,ge=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ve.workingColorSpace,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=Z.get(V.envMap||de,ve),He=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,rt=Xt;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(rt=b.toneMapping);let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=at!==void 0?at.length:0,ye=N.get(V),Ot=E.state.lights;if(Ne===!0&&(ft===!0||y!==X)){let $e=y===X&&V.id===se;be.setState(V,y,$e)}let Ki=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ot.state.version||ye.outputColorSpace!==ge||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Re||V.fog===!0&&ye.fog!==ne||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==be.numPlanes||ye.numIntersection!==be.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==ke||ye.morphTargets!==Me||ye.morphNormals!==Ze||ye.morphColors!==vt||ye.toneMapping!==rt||ye.morphTargetsCount!==ut||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ki=!0):(Ki=!0,ye.__version=V.version);let ei=ye.currentProgram;Ki===!0&&(ei=Ia(V,U,z),P&&V.isNodeMaterial&&P.onUpdateProgram(V,ei,ye));let di=!1,Ni=!1,ur=!1,Qe=ei.getUniforms(),mt=ye.uniforms;if(T.useProgram(ei.program)&&(di=!0,Ni=!0,ur=!0),V.id!==se&&(se=V.id,Ni=!0),ye.needsLights){let $e=cu(E.state.lightProbeGridArray,z);ye.lightProbeGrid!==$e&&(ye.lightProbeGrid=$e,Ni=!0)}if(di||X!==y){T.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Qe.setValue(O,"projectionMatrix",y.projectionMatrix),Qe.setValue(O,"viewMatrix",y.matrixWorldInverse);let $e=Qe.map.cameraPosition;$e!==void 0&&$e.setValue(O,qt.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&Qe.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Qe.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,Ni=!0,ur=!0)}if(ye.needsLights&&(Ot.state.sunShadowMap.length>0&&Qe.setValue(O,"sunShadowMap",Ot.state.sunShadowMap,G),Ot.state.directionalShadowMap.length>0&&Qe.setValue(O,"directionalShadowMap",Ot.state.directionalShadowMap,G),Ot.state.spotShadowMap.length>0&&Qe.setValue(O,"spotShadowMap",Ot.state.spotShadowMap,G),Ot.state.pointShadowMap.length>0&&Qe.setValue(O,"pointShadowMap",Ot.state.pointShadowMap,G)),z.isSkinnedMesh){Qe.setOptional(O,z,"bindMatrix"),Qe.setOptional(O,z,"bindMatrixInverse");let $e=z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Qe.setValue(O,"boneTexture",$e.boneTexture,G))}z.isBatchedMesh&&(Qe.setOptional(O,z,"batchingTexture"),Qe.setValue(O,"batchingTexture",z._matricesTexture,G),Qe.setOptional(O,z,"batchingIdTexture"),Qe.setValue(O,"batchingIdTexture",z._indirectTexture,G),Qe.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(O,"batchingColorTexture",z._colorsTexture,G));let Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Xe.update(z,W,ei),(Ni||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,Qe.setValue(O,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(mt.envMapIntensity.value=U.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=q0()),Ni){if(Qe.setValue(O,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&du(mt,ur),ne&&V.fog===!0&&ce.refreshFogUniforms(mt,ne),ce.refreshMaterialUniforms(mt,V,ie,q,E.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.lightProbeGrid){let $e=ye.lightProbeGrid;mt.probesSH.value=$e.texture,mt.probesMin.value.copy($e.boundingBox.min),mt.probesMax.value.copy($e.boundingBox.max),mt.probesResolution.value.copy($e.resolution)}vs.upload(O,ul(ye),mt,G)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(O,ul(ye),mt,G),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Qe.setValue(O,"center",z.center),Qe.setValue(O,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(O,"normalMatrix",z.normalMatrix),Qe.setValue(O,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){let $e=V.uniformsGroups;for(let Wr=0,dr=$e.length;Wr<dr;Wr++){let fl=$e[Wr];Se.update(fl,ei),Se.bind(fl,ei)}}return ei}function du(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function pu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,U,W){let V=N.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),N.get(y.texture).__webglTexture=U,N.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let W=N.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,W=0){k=y,H=U,Y=W;let V=null,z=!1,ne=!1;if(y){let de=N.get(y);if(de.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),K.copy(y.viewport),Q.copy(y.scissor),Be=y.scissorTest,T.viewport(K),T.scissor(Q),T.setScissorTest(Be),se=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(y);else if(de.__hasExternalTextures)G.rebindTextures(y,N.get(y.texture).__webglTexture,N.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Re=y.depthTexture;if(de.__boundDepthTexture!==Re){if(Re!==null&&N.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(y)}}let ge=y.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ne=!0);let ve=N.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ve[U])?V=ve[U][W]:V=ve[U],z=!0):y.samples>0&&G.useMultisampledRTT(y)===!1?V=N.get(y).__webglMultisampledFramebuffer:Array.isArray(ve)?V=ve[W]:V=ve,K.copy(y.viewport),Q.copy(y.scissor),Be=y.scissorTest}else K.copy(Pe).multiplyScalar(ie).floor(),Q.copy(fe).multiplyScalar(ie).floor(),Be=Je;if(W!==0&&(V=D),T.bindFramebuffer(O.FRAMEBUFFER,V)&&T.drawBuffers(y,V),T.viewport(K),T.scissor(Q),T.setScissorTest(Be),z){let de=N.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,W)}else if(ne){let de=U;for(let ge=0;ge<y.textures.length;ge++){let ve=N.get(y.textures[ge]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ge,ve.__webglTexture,W,de)}}else if(y!==null&&W!==0){let de=N.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,W)}se=-1};function pl(y){let U=N.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=lt.textureFormatReadable(y.format),U.__typeReadable=lt.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,W,V,z,ne,de,ge=0){if(!(y&&y.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){T.bindFramebuffer(O.FRAMEBUFFER,ve);try{let Re=y.textures[ge],He=Re.format,ke=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Me=pl(Re);if(Me.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&W>=0&&W<=y.height-z&&O.readPixels(U,W,V,z,$.convert(He),$.convert(ke),ne)}finally{let Re=k!==null?N.get(k).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,V,z,ne,de,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve)if(U>=0&&U<=y.width-V&&W>=0&&W<=y.height-z){T.bindFramebuffer(O.FRAMEBUFFER,ve);let Re=y.textures[ge],He=Re.format,ke=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Me=pl(Re);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,ne.byteLength,O.STREAM_READ),O.readPixels(U,W,V,z,$.convert(He),$.convert(ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let vt=k!==null?N.get(k).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,vt);let rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zu(O,rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ne),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ze),O.deleteSync(rt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,W=0){let V=Math.pow(2,-W),z=Math.floor(y.image.width*V),ne=Math.floor(y.image.height*V),de=U!==null?U.x:0,ge=U!==null?U.y:0;G.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,de,ge,z,ne),T.unbindTexture()},this.copyTextureToTexture=function(y,U,W=null,V=null,z=0,ne=0){let de,ge,ve,Re,He,ke,Me,Ze,vt,rt=y.isCompressedTexture?y.mipmaps[ne]:y.image;if(W!==null)de=W.max.x-W.min.x,ge=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,He=W.min.y,ke=W.isBox3?W.min.z:0;else{let mt=Math.pow(2,-z);de=Math.floor(rt.width*mt),ge=Math.floor(rt.height*mt),y.isDataArrayTexture?ve=rt.depth:y.isData3DTexture?ve=Math.floor(rt.depth*mt):ve=1,Re=0,He=0,ke=0}V!==null?(Me=V.x,Ze=V.y,vt=V.z):(Me=0,Ze=0,vt=0);let at=$.convert(U.format),ut=$.convert(U.type),ye;U.isData3DTexture?(G.setTexture3D(U,0),ye=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(G.setTexture2DArray(U,0),ye=O.TEXTURE_2D_ARRAY):(G.setTexture2D(U,0),ye=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Ot=T.getParameter(O.UNPACK_ROW_LENGTH),Ki=T.getParameter(O.UNPACK_IMAGE_HEIGHT),ei=T.getParameter(O.UNPACK_SKIP_PIXELS),di=T.getParameter(O.UNPACK_SKIP_ROWS),Ni=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(O.UNPACK_SKIP_ROWS,He),T.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);let ur=y.isDataArrayTexture||y.isData3DTexture,Qe=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let mt=N.get(y),Ui=N.get(U),$e=N.get(mt.__renderTarget),Wr=N.get(Ui.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,$e.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let dr=0;dr<ve;dr++)ur&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,N.get(y).__webglTexture,z,ke+dr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,N.get(U).__webglTexture,ne,vt+dr)),O.blitFramebuffer(Re,He,de,ge,Me,Ze,de,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||N.has(y)){let mt=N.get(y),Ui=N.get(U);T.bindFramebuffer(O.READ_FRAMEBUFFER,j),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,I);for(let $e=0;$e<ve;$e++)ur?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mt.__webglTexture,z,ke+$e):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,z),Qe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ui.__webglTexture,ne,vt+$e):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ui.__webglTexture,ne),z!==0?O.blitFramebuffer(Re,He,de,ge,Me,Ze,de,ge,O.COLOR_BUFFER_BIT,O.NEAREST):Qe?O.copyTexSubImage3D(ye,ne,Me,Ze,vt+$e,Re,He,de,ge):O.copyTexSubImage2D(ye,ne,Me,Ze,Re,He,de,ge);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qe?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(ye,ne,Me,Ze,vt,de,ge,ve,at,ut,rt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(ye,ne,Me,Ze,vt,de,ge,ve,at,rt.data):O.texSubImage3D(ye,ne,Me,Ze,vt,de,ge,ve,at,ut,rt):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ne,Me,Ze,de,ge,at,ut,rt.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ne,Me,Ze,rt.width,rt.height,at,rt.data):O.texSubImage2D(O.TEXTURE_2D,ne,Me,Ze,de,ge,at,ut,rt);T.pixelStorei(O.UNPACK_ROW_LENGTH,Ot),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ki),T.pixelStorei(O.UNPACK_SKIP_PIXELS,ei),T.pixelStorei(O.UNPACK_SKIP_ROWS,di),T.pixelStorei(O.UNPACK_SKIP_IMAGES,Ni),ne===0&&U.generateMipmaps&&O.generateMipmap(ye),T.unbindTexture()},this.initRenderTarget=function(y){N.get(y).__webglFramebuffer===void 0&&G.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?G.setTextureCube(y,0):y.isData3DTexture?G.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?G.setTexture2DArray(y,0):G.setTexture2D(y,0),T.unbindTexture()},this.resetState=function(){H=0,Y=0,k=null,T.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}},Nh={type:"change"},Zo={type:"start"},Kc={type:"end"},hs=new Ea,Uh=new Jt,Y0=Math.cos(70*ba.DEG2RAD),bt=new C,kt=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mn=1e-6,Jc=class extends Kp{constructor(e,t=null){super(e,t),this.state=Ye.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Pt,this._lastTargetPosition=new C,this._quat=new Pt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new C,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new C,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J0.bind(this),this._onPointerDown=K0.bind(this),this._onPointerUp=Z0.bind(this),this._onContextMenu=a_.bind(this),this._onMouseWheel=e_.bind(this),this._onKeyDown=t_.bind(this),this._onTouchStart=i_.bind(this),this._onTouchMove=r_.bind(this),this._onMouseDown=Q0.bind(this),this._onMouseMove=$0.bind(this),this._interceptControlDown=s_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nh),this.update(),this.state=Ye.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let n=bt.length();s=this._clampDistance(n*this._scale);let o=n-s;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let n=new C(this._mouse.x,this._mouse.y,0);n.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(n),this.object.updateMatrixWorld(),s=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(hs.origin.copy(this.object.position),hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hs.direction))<Y0?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),hs.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Mn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mn||this._lastTargetPosition.distanceToSquared(this.target)>Mn?(this.dispatchEvent(Nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;bt.copy(r).sub(this.target);let a=bt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,s=i.width,n=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(s,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function K0(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function J0(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Z0(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kc),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Q0(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ye.DOLLY;break;case Pi.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ye.ROTATE}break;case Pi.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Zo)}function $0(e){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function e_(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(e.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Kc))}function t_(e){this.enabled!==!1&&this._handleKeyDown(e)}function i_(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ye.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ye.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Zo)}function r_(e){switch(this._trackPointer(e),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ye.NONE}}function a_(e){this.enabled!==!1&&e.preventDefault()}function s_(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ta=new C;function ii(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;ta.copy(t),ta[r]=0,ta.normalize();let h=.5*n/(n+o),c=1-ta.angleTo(e)/l;return Math.sign(ta[i])===1?c*h:o/(n+o)+h+h*(1-c)}var Qo=class Zc extends ji{constructor(t=1,i=1,r=1,a=2,s=.1){let n=a*2+1;if(s=Math.min(t/2,i/2,r/2,s),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:r,segments:a,radius:s},n===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,h=new C,c=new C(t,i,r).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new C,m=.5/n;for(let f=0,M=0;f<d.length;f+=3,M+=2)switch(l.fromArray(d,f),h.copy(l),h.x-=Math.sign(h.x)*m,h.y-=Math.sign(h.y)*m,h.z-=Math.sign(h.z)*m,h.normalize(),d[f+0]=c.x*Math.sign(l.x)+h.x*s,d[f+1]=c.y*Math.sign(l.y)+h.y*s,d[f+2]=c.z*Math.sign(l.z)+h.z*s,u[f+0]=h.x,u[f+1]=h.y,u[f+2]=h.z,Math.floor(f/g)){case 0:_.set(1,0,0),p[M+0]=ii(_,h,"z","y",s,r),p[M+1]=1-ii(_,h,"y","z",s,i);break;case 1:_.set(-1,0,0),p[M+0]=1-ii(_,h,"z","y",s,r),p[M+1]=1-ii(_,h,"y","z",s,i);break;case 2:_.set(0,1,0),p[M+0]=1-ii(_,h,"x","z",s,t),p[M+1]=ii(_,h,"z","x",s,r);break;case 3:_.set(0,-1,0),p[M+0]=1-ii(_,h,"x","z",s,t),p[M+1]=1-ii(_,h,"z","x",s,r);break;case 4:_.set(0,0,1),p[M+0]=1-ii(_,h,"x","y",s,t),p[M+1]=1-ii(_,h,"y","x",s,i);break;case 5:_.set(0,0,-1),p[M+0]=ii(_,h,"x","y",s,t),p[M+1]=1-ii(_,h,"y","x",s,i);break}}static fromJSON(t){return new Zc(t.width,t.height,t.depth,t.segments,t.radius)}},_s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Gr=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},o_=new Ls(-1,1,1,-1,0,1),l_=class extends Ke{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},h_=new l_,$o=class{constructor(e){this._mesh=new ot(h_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},c_=class extends Gr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ya.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $o(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Oh=class extends Gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,n;this.inverse?(s=0,n=1):(s=1,n=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(n),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},u_=class extends Gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Qc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c_(_s),this.copyPass.material.blending=vi,this.timer=new Bp}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,a=this.passes.length;r<a;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let n=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}Oh!==void 0&&(s instanceof Oh?i=!0:s instanceof u_&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},$c=class extends Gr{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}},d_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ns=class _o extends Gr{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new re(t.x,t.y):new re(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(s,n,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new zt(s,n,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new zt(s,n,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),n=Math.round(n/2)}let o=d_;this.highPassUniforms=ya.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new re(1/s,1/n),s=Math.round(s/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ya.clone(_s.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,premultipliedAlpha:!0,blending:ua,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new Wi,this._fsQuad=new $o(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(r,a),this.renderTargetsVertical[s].setSize(r,a),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let n=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=n}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let n=0;n<t;n++)i.push(.39894*Math.exp(-.5*n*n/(r*r))/r);let a=[],s=[];for(let n=1;n<t;n+=2){let o=i[n],l=n+1<t?i[n+1]:0,h=o+l;a.push((n*o+(n+1)*l)/h),s.push(h)}return new ct({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ct({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ns.BlurDirectionX=new re(1,0);Ns.BlurDirectionY=new re(0,1);function el(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),s={},n={},o=e[0].morphTargetsRelative,l=new Ke,h=0;for(let c=0;c<e.length;++c){let d=e[c],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(i){let c=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+c);c+=e[u].attributes.position.count}l.setIndex(d)}for(let c in s){let d=Fh(s[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in n){let d=n[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let p=[];for(let _=0;_<n[c].length;++_)p.push(n[c][_][u]);let g=Fh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}}return l}function Fh(e){let t,i,r,a=-1,s=0;for(let h=0;h<e.length;++h){let c=e[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=c.normalized),r!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}let n=new t(s),o=new ci(n,i,r),l=0;for(let h=0;h<e.length;++h){let c=e[h];if(c.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=c.count;u<p;u++)for(let g=0;g<i;g++){let _=c.getComponent(u,g);o.setComponent(u+d,g,_)}}else n.set(c.array,l);l+=c.count*i}return a!==void 0&&(o.gpuType=a),o}var bn=Object.freeze({low:{label:"\u8F7B\u7701",fps:30,ratio:.85,pixels:5e5,shadows:!1,bloom:!1},medium:{label:"\u5747\u8861",fps:30,ratio:1.15,pixels:11e5,shadows:!0,bloom:!1},high:{label:"\u7EC6\u817B",fps:60,ratio:1.5,pixels:24e5,shadows:!0,bloom:!0}}),eu=class{constructor({software:e=!1,mobile:t=!1,cores:i=8,memory:r=8,mode:a="auto"}={}){this.initial=e||t||i<=4||r<=4?"low":"medium",this.mode=Object.hasOwn(bn,a)?a:"auto",this.level=this.mode==="auto"?this.initial:this.mode,this.scale=1,this.resetSamples(),this.lastFrame=0,this.nextFrame=0,this.fps=0}get profile(){return bn[this.level]}resetSamples(){this.samples=[],this.warmup=2,this.windowTime=0}setMode(e){this.mode=Object.hasOwn(bn,e)?e:"auto",this.level=this.mode==="auto"?this.initial:this.mode,this.scale=1,this.resetSamples(),this.lastFrame=0,this.nextFrame=0}pixelRatio(e,t,i=1){return Math.max(.35,Math.min(i,this.profile.ratio,Math.sqrt(this.profile.pixels/Math.max(1,e*t)))*this.scale)}due(e){if(e+.6<this.nextFrame)return!1;let t=1e3/this.profile.fps;return this.nextFrame=e+t-Math.min(t,Math.max(0,e-this.nextFrame)%t),!0}observe(e){let t=this.lastFrame?(e-this.lastFrame)/1e3:0;if(this.lastFrame=e,t<=0||t>1)return this.resetSamples(),!1;if(this.warmup>0)return this.warmup-=t,!1;if(this.samples.push(t),this.windowTime+=t,this.windowTime<3)return!1;let i=this.samples.slice().sort((a,s)=>a-s),r=i[Math.floor(i.length/2)];if(this.fps=Math.round(1/r),this.samples=[],this.windowTime=0,this.mode!=="auto"||r<=1/24)return!1;if(this.level==="medium")this.level="low";else if(this.scale>.65)this.scale=Math.max(.65,this.scale-.15);else return!1;return this.warmup=2,!0}},cs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},tu=class extends Gr{constructor(){super(),this.isOutputPass=!0,this.uniforms=ya.clone(cs.uniforms),this.material=new Dc({name:cs.name,uniforms:this.uniforms,vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader}),this._fsQuad=new $o(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ve.getTransfer(this._outputColorSpace)===qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===So?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===To?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var et={width:6.8,depth:2.8,bottom:-1.42,top:2.05,water:1.83},tl=new C(0,1,0),CS=new C(1,0,0),p_=ba.clamp,il=419;function xt(){return il=il*16807%2147483647,(il-1)/2147483646}function Lt(e,t=.7,i={}){return new Ii({color:e,roughness:t,...i})}function tt(e,t,i=0,r=0,a=0){let s=new ot(e,t);return s.position.set(i,r,a),s.castShadow=!0,s.receiveShadow=!0,s}function rl(e,t,i=1){return new Ho(new Ke().setFromPoints(e.map(r=>new C(...r))),new Xi({color:t,transparent:i<1,opacity:i}))}var iu=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.;float a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+7.;a*=.5;}return v;}
`,f_=class{constructor(e){this.canvas=e,this.time={value:0},this.delta=0,this.last=0,this.renderedFrames=0,this.frameIntervals=[],this.lastRenderStart=0,this.scene=new Ta,this.scene.fog=new tc("#b6d5df",.013),this.renderer=new Yc({canvas:e,antialias:!0,alpha:!1,powerPreference:"low-power"});let t=this.renderer.getContext(),i=t.getExtension("WEBGL_debug_renderer_info"),r=i?t.getParameter(i.UNMASKED_RENDERER_WEBGL):"";this.software=/swiftshader|llvmpipe|software/i.test(r);let a="auto";try{a=localStorage.getItem("stillwater.quality")||"auto"}catch{}this.quality=new eu({software:this.software,mobile:matchMedia("(pointer: coarse)").matches||innerWidth<700,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,mode:new URLSearchParams(location.search).get("quality")||a}),this.lowQuality=this.quality.level==="low",this.renderer.shadowMap.enabled=this.quality.profile.shadows,this.renderer.shadowMap.type=Ir,this.renderer.info.autoReset=!1,this.renderer.toneMapping=Ma,this.renderer.toneMappingExposure=.88,this.camera=new Zt(34,1,.1,180),this.camera.position.set(3.1,2.5,10.8),this.controls=new Jc(this.camera,e),this.controls.target.set(0,.05,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.055,this.controls.enablePan=!1,this.controls.rotateSpeed=.42,this.controls.zoomSpeed=.45,this.controls.minAzimuthAngle=-.68,this.controls.maxAzimuthAngle=.68,this.controls.minPolarAngle=.91,this.controls.maxPolarAngle=1.51,this.controls.minDistance=9.5,this.controls.maxDistance=17,this.controls.update(),this.controls.saveState(),this.raycaster=new zc,this.pointer=new re,this.frontPlane=new Jt(new C(0,0,1),-.3),this.surfacePlane=new Jt(tl,-et.water),this.hit=new C,this.materialVariants=new Map,this.leaves=[],this.fish=new Map,this.fishTemplates=new Map,this.decorTemplates=new Map,this.decorMeshes=new Map,this.tankScale=new C(1,1,1),this.tankKey="basic",this.foodMeshes=[],this.rippleMeshes=[],this.bubbles=[],this.createEnvironment();let s=new Set(this.scene.children);this.createTank(),this.createGarden(),this.createWater(),this.habitat=new Wt;for(let n of[...this.scene.children])s.has(n)||this.habitat.add(n);this.scene.add(this.habitat),this.createParticles(),this.applyQuality(),e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.lost=!0,this.showError("\u753B\u9762\u6682\u65F6\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002")}),this.resize()}applyQuality(){if(this.lowQuality=this.quality.level==="low",this.renderer.shadowMap.enabled=this.quality.profile.shadows,this.renderer.shadowMap.needsUpdate=!0,this.composer){for(let e of this.composer.passes)e.dispose?.();this.composer.dispose(),this.composer=null}this.quality.profile.bloom&&(this.composer=new Qc(this.renderer),this.composer.renderTarget1.samples=2,this.composer.renderTarget2.samples=2,this.composer.addPass(new $c(this.scene,this.camera)),this.composer.addPass(new Ns(new re(800,600),.16,.55,1.1)),this.composer.addPass(new tu)),this.bubbleMesh&&(this.bubbleMesh.visible=!this.lowQuality),document.documentElement.dataset.quality=this.quality.level,this.prepareObject(this.scene),this.resize()}prepareObject(e){e.traverse(t=>{if(!t.material||Array.isArray(t.material))return;let i=t.material.userData.originalMaterial||t.material;if(i.forceSinglePass=!0,this.lowQuality&&i.isMeshStandardMaterial){if(!this.materialVariants.has(i)){let r=new Ic({color:i.color,vertexColors:i.vertexColors,transparent:i.transparent,opacity:i.opacity,side:i.side,depthWrite:i.depthWrite,map:i.map,emissive:i.emissive});r.onBeforeCompile=i.onBeforeCompile,r.customProgramCacheKey=()=>`light-${i.customProgramCacheKey()}`,r.forceSinglePass=!0,r.userData.originalMaterial=i,this.materialVariants.set(i,r)}t.material=this.materialVariants.get(i)}else t.material=i})}setQuality(e){this.quality.setMode(e);try{localStorage.setItem("stillwater.quality",this.quality.mode)}catch{}this.applyQuality()}shouldRender(e){return this.quality.due(e)}observeFrame(e){this.quality.observe(e)&&this.applyQuality()}resume(){this.lastRenderStart=0,this.frameIntervals=[],this.quality.lastFrame=0,this.quality.nextFrame=0,this.quality.resetSamples()}showError(e){let t=document.querySelector("#render-error");t&&(t.hidden=!1,t.textContent=e)}createSkyTarget(){let e=new ot(new $t(75,32,16),new ct({side:At,depthWrite:!1,uniforms:{uTime:this.time},vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDir;uniform float uTime;${iu}
      void main(){vec3 d=normalize(vDir);float height=smoothstep(-.15,.75,d.y);
        vec3 color=mix(vec3(.12,.40,.58),vec3(.03,.16,.35),height);
        vec2 p=vec2(d.x/max(.22,d.y+.32),d.z/max(.22,d.y+.32))*2.;
        float n=fbm(p+vec2(uTime*.003,0.));
        float cloud=smoothstep(.40,.67,n)*smoothstep(-.35,.18,d.y);
        color=mix(color,vec3(.98,.98,.93),cloud*.92);
        float sun=pow(max(0.,dot(d,normalize(vec3(-.5,.7,.4)))),90.);
        color+=vec3(1.,.88,.60)*sun*.5;
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));e.renderOrder=-20;let t=new Ta;t.add(e),this.skyTarget=new Vr(256);let i=new Ca(.1,100,this.skyTarget),r=this.renderer.toneMapping;return this.renderer.toneMapping=Xt,i.update(this.renderer,t),this.renderer.toneMapping=r,e.geometry.dispose(),e.material.dispose(),this.skyTarget}createEnvironment(){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#5e9dbb"),i.addColorStop(.47,"#b6d8e5"),i.addColorStop(.53,"#f5f1dd"),i.addColorStop(1,"#7f9a9b"),t.fillStyle=i,t.fillRect(0,0,1024,512),t.fillStyle="#fff9df",t.fillRect(150,70,120,140),t.fillStyle="#edfaff",t.fillRect(750,150,80,140);let r=new hc(e);r.mapping=na,r.colorSpace=Gt;let a=new Rs(this.renderer);this.envTarget=a.fromEquirectangular(r),this.scene.environment=this.envTarget.texture,this.scene.environmentIntensity=.55,a.dispose(),r.dispose(),this.skyTarget=this.createSkyTarget(),this.scene.background=this.skyTarget.texture,this.scene.add(new Fc("#d9f3ff","#728375",1.15));let s=new Yo("#fff1cf",2.8);s.position.set(-5,8,5),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.left=-9,s.shadow.camera.right=9,s.shadow.camera.top=8,s.shadow.camera.bottom=-8,s.shadow.camera.near=.1,s.shadow.camera.far=30,s.shadow.normalBias=.025,s.shadow.bias=-15e-5,s.shadow.radius=3,this.scene.add(s),this.sun=s;let n=new Yo("#85c9f2",.9);n.position.set(3,4,-4),this.scene.add(n);let o=tt(new ai(80,14),Lt("#a8bdb8",.72),0,-1.95,3);o.rotation.x=-Math.PI/2,o.castShadow=!1,this.scene.add(o);let l=tt(new Qo(8.5,.36,4.1,4,.12),Lt("#d5d4c5",.54),0,-1.68,.15);this.scene.add(l),this.shelf=l;let h=tt(new Qo(8.15,.11,3.85,3,.06),Lt("#839a96",.65),0,-1.89,.15);this.scene.add(h),this.underside=h;let c=Lt("#e4e9df",.8);for(let _ of[-11,-7.7,7.7,11]){let m=tt(new ji(.15,13,.18),c,_,3,-6);this.scene.add(m)}let d=tt(new ji(23,.12,.25),c,0,3.8,-6);this.scene.add(d);let u=new Xi({color:"#e5f6fa",transparent:!0,opacity:.18}),p=[];for(let _=0;_<65;_++){let m=(xt()-.5)*20,f=xt()*10;p.push(m,f,-5.96,m+.01,f-.05-xt()*.2,-5.96)}let g=new Ke;g.setAttribute("position",new De(p,3)),this.scene.add(new Hr(g,u))}createTank(){let e=et.width,t=et.depth,i=et.top-et.bottom,r=(et.top+et.bottom)/2,a=new Ps({color:"#c9ece9",roughness:.08,metalness:.08,transparent:!0,opacity:.085,clearcoat:1,clearcoatRoughness:.09,envMapIntensity:.7,depthWrite:!1,side:pt}),s=tt(new ai(e,i),a,0,r,t/2);s.castShadow=!1,s.receiveShadow=!1,this.scene.add(s);for(let h of[-1,1]){let c=tt(new ai(t,i),a,h*e/2,r,0);c.rotation.y=Math.PI/2,c.castShadow=!1,c.receiveShadow=!1,this.scene.add(c)}let n=tt(new ai(e,i),new Ps({color:"#bce3e0",transparent:!0,opacity:.045,roughness:.12,side:pt,depthWrite:!1}),0,r,-t/2);n.castShadow=!1,this.scene.add(n);let o=Lt("#c1e3db",.19,{transparent:!0,opacity:.6,metalness:.12});for(let h of[-e/2,e/2])for(let c of[-t/2,t/2]){let d=tt(new ko(.014,.014,i,8),o,h,r,c);d.castShadow=!1,this.scene.add(d)}for(let h of[et.bottom,et.top]){let c=[[-e/2,h,-t/2],[e/2,h,-t/2],[e/2,h,t/2],[-e/2,h,t/2],[-e/2,h,-t/2]];this.scene.add(rl(c,"#e8fff6",.82));let d=c.map(u=>[u[0]*.995,u[1]-.025,u[2]*.99]);this.scene.add(rl(d,"#699b96",.4))}let l=new Wi({color:"#f2ffff",transparent:!0,opacity:.18,depthWrite:!1});for(let h of[-3.19,3.19]){let c=tt(new ai(.035,i*.74),l,h,r+.12,t/2+.004);c.castShadow=!1,this.scene.add(c)}}createGarden(){let e=new ai(6.72,2.72,32,14);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let l=0;l<t.count;l++){let h=t.getX(l),c=t.getZ(l);t.setY(l,.07*Math.sin(h*1.5+c)+.04*Math.cos(h*2-c*3))}e.computeVertexNormals();let i=Lt("#d7dcc8",.93);i.onBeforeCompile=l=>{l.uniforms.uTime=this.time,l.vertexShader=`varying vec3 vSand;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSand=position;`),l.fragmentShader=`varying vec3 vSand;uniform float uTime;
`+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float a=sin(vSand.x*7.+sin(vSand.z*9.+uTime*.4)*1.7+uTime*.3);
        float b=sin(vSand.z*8.+sin(vSand.x*6.-uTime*.3)*1.8);
        float caustic=pow(max(0.,1.-abs(a+b)*.5),12.);
        float grain=fract(sin(dot(vSand.xz,vec2(127.1,311.7)))*43758.5453);
        diffuseColor.rgb*=.93+grain*.08;diffuseColor.rgb+=vec3(.13,.18,.15)*caustic;`)};let r=tt(e,i,0,-1.26,0);r.castShadow=!1,this.scene.add(r);let a=tt(new ji(6.72,.18,2.72),Lt("#bbc4b4",1),0,-1.38,0);this.scene.add(a);let s=new jo(1,1),n=new Bo(s,Lt("#b5c3b2",.94),130),o=new Rt;for(let l=0;l<130;l++)o.position.set((xt()-.5)*6.45,-1.18+xt()*.02,(xt()-.5)*2.55),o.scale.setScalar(.018+xt()*.035),o.scale.y*=.5,o.rotation.set(xt()*3,xt()*3,0),o.updateMatrix(),n.setMatrixAt(l,o.matrix);n.receiveShadow=!0,this.scene.add(n)}createWater(){let e=new ot(new ai(6.7,2.7,30,14),new ct({transparent:!0,depthWrite:!1,side:pt,uniforms:{uTime:this.time},vertexShader:`uniform float uTime;varying vec3 vWorld;varying vec2 vUv;
      void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*3.+uTime*.7)*.012+sin(p.y*5.-uTime*.5)*.009;
      vWorld=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);}`,fragmentShader:`uniform float uTime;varying vec3 vWorld;varying vec2 vUv;${iu}
      void main(){vec3 n=normalize(cross(dFdx(vWorld),dFdy(vWorld)));vec3 view=normalize(cameraPosition-vWorld);float fres=pow(1.-abs(dot(n,view)),3.);
      float a=sin(vUv.x*56.+sin(vUv.y*32.+uTime*.5)*2.+uTime*.4);
      float b=sin(vUv.y*43.+sin(vUv.x*32.-uTime*.4));float shine=pow(max(0.,1.-abs(a+b)*.5),16.);
      vec3 color=mix(vec3(.35,.69,.76),vec3(.89,.98,.98),shine*.75+fres*.3);
      gl_FragColor=vec4(color,.10+fres*.24+shine*.15);}`}));e.rotation.x=-Math.PI/2,e.position.y=et.water,e.renderOrder=5,this.scene.add(e),this.scene.add(rl([[-3.35,et.water,1.36],[3.35,et.water,1.36]],"#dafff1",.65));for(let i=0;i<3;i++){let r=new ot(new ai(.7+i*.2,3.1),new ct({transparent:!0,depthWrite:!1,side:pt,blending:ua,uniforms:{uTime:this.time},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uTime;void main(){float edge=pow(sin(vUv.x*3.14159),3.);float a=edge*vUv.y*.035;gl_FragColor=vec4(.8,.95,.83,a);}"}));r.position.set(-1.6+i*.9,.28,-.7),r.rotation.z=-.28,this.scene.add(r)}let t=new ot(new ai(6.5,2.65),new ct({transparent:!0,side:pt,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){vec3 color=mix(vec3(.11,.32,.36),vec3(.4,.7,.76),vUv.y);gl_FragColor=vec4(color,.12+(1.-vUv.y)*.22);}"}));t.position.set(0,.25,-1.32),t.rotation.x=0,t.scale.y=1.16,this.scene.add(t)}createFish(e){let t=new Wt,i=[],r=[],a=[],s=24,n=16,o=new xe(["#e1ece7","#a9c4c0","#ddc58d"][e]),l=new xe(["#829da4","#456f79","#9f7942"][e]),h=new xe(["#d4e5e4","#6e9d9b","#c69d57"][e]);for(let L=0;L<=s;L++){let P=L/s,D=(P-.5)*1.12,j=Math.pow(Math.sin(Math.PI*P),.8)*(.48+.52*P);for(let I=0;I<=n;I++){let H=I/n*Math.PI*2,Y=Math.sin(H),k=Math.cos(H);i.push(D*[1.05,1.12,.9][e],Y*[.205,.17,.25][e]*j,k*[.135,.12,.16][e]*j);let se=o.clone().lerp(l,Math.max(0,Y)*.78);if(e===0){let X=Math.sin(D*15+k*3)+Math.cos(D*7-Y*4);se.lerp(h,ba.smoothstep(X,.45,1.3)*Math.max(0,Y*.6+.4)*.8)}if(e===2&&se.lerp(h,Math.max(0,Y)*.35),r.push(se.r,se.g,se.b),L<s&&I<n){let X=L*(n+1)+I;a.push(X,X+n+1,X+1,X+1,X+n+1,X+n+2)}}}let c=new Ke;c.setAttribute("position",new De(i,3)),c.setAttribute("color",new De(r,3)),c.setIndex(a),c.computeVertexNormals();let d=new Ii({vertexColors:!0,roughness:.4,metalness:.06,side:pt});d.onBeforeCompile=L=>{L.uniforms.uTime=this.time,L.vertexShader=`uniform float uTime;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=sin(uTime*2.6+position.x*4.+${(e*2.3).toFixed(1)})*pow(max(0.,.25-position.x),2.)*.045;`)},d.customProgramCacheKey=()=>`fish-body-${e}`;let u=tt(c,d);u.castShadow=!1,t.add(u);let p=new Wt;p.name="tail",p.position.x=-.5,t.add(p);let g=Lt(["#c4bb90","#8fb8b4","#d1c49a"][e],.55,{side:pt,transparent:!1,opacity:1});function _(L){let P=new Xo;P.moveTo(L[0][0],L[0][1]);for(let D=1;D<L.length;D++)P.lineTo(L[D][0],L[D][1]);return P.closePath(),tt(new wc(P),g)}let m=_([[0,.035],[-.29,.19],[-.21,0],[-.29,-.19],[0,-.035]]);p.add(m);let f=[];for(let L=-3;L<=3;L++)f.push(0,0,.002,-.25,L*.052,.002);let M=new Ke;M.setAttribute("position",new De(f,3)),p.add(new Hr(M,new Xi({color:"#d8d7b5",transparent:!0,opacity:.3})));let w=_([[-.25,.13],[-.16,e===0?.36:.29],[.16,.19],[.25,.13]]);t.add(w);let x=[];for(let L of[-1,1]){let P=_([[0,0],[-.2,-.11],[-.12,-.025]]);P.position.set(.1,-.045,L*.095),P.rotation.x=L*.8,P.name=L<0?"fin-left":"fin-right",t.add(P),x.push(P);let D=tt(new $t(.024,12,10),Lt("#a9ac80",.3),.382,.036,L*.079);D.scale.z=.42,D.castShadow=!1,t.add(D);let j=tt(new $t(.015,12,10),Lt("#172c30",.16),.388,.037,L*.089);j.scale.z=.5,j.castShadow=!1,t.add(j);let I=tt(new $t(.004,8,6),new Wi({color:"#ecf8e9"}),.392,.043,L*.095);t.add(I)}let E=tt(new $t(.012,8,6),Lt("#788b79",.75),.55,-.015,0);E.scale.set(.35,.45,1),t.add(E);let A=t.children.filter(L=>L.isMesh&&!x.includes(L)),R=A.map(L=>{L.updateMatrix();let P=L.geometry.index?L.geometry.toNonIndexed():L.geometry.clone();if(P.applyMatrix4(L.matrix),!P.attributes.color){let D=[],j=L.material.color;for(let I=0;I<P.attributes.position.count;I++)D.push(j.r,j.g,j.b);P.setAttribute("color",new De(D,3))}for(let D of Object.keys(P.attributes))["position","normal","color"].includes(D)||P.deleteAttribute(D);return P}),v=el(R);R.forEach(L=>L.dispose());let b=new Set;for(let L of A)t.remove(L),L.geometry.dispose(),L.material!==d&&L.material!==g&&b.add(L.material);return b.forEach(L=>L.dispose()),t.add(tt(v,d)),t.scale.setScalar(1),t.traverse(L=>{L.isMesh&&(L.castShadow=!1,L.receiveShadow=!1)}),{group:t,tailPivot:p,fins:x,z:(e-1)*.5,lastPosition:null,quaternion:new Pt}}setTank(e,t){if(this.tankKey===e)return;this.tankKey=e,this.tankScale.fromArray(t),this.habitat.scale.copy(this.tankScale),this.habitat.position.y=et.bottom*(1-t[1]),this.surfacePlane.constant=-this.waterY,this.shelf.scale.set(t[0],1,t[2]),this.underside.scale.set(t[0],1,t[2]),this.dust.scale.copy(this.tankScale),this.dust.position.y=et.bottom*(1-t[1]),this.controls.target.set(0,.05+(t[1]-1)*1.5,0);let i=Math.max(t[0],t[1]);this.controls.minDistance=9.5*i,this.controls.maxDistance=17*i,this.controls.position0.set(3.1*i,2.5*i,10.8*i),this.controls.target0.copy(this.controls.target),this.controls.reset(),this.renderer.shadowMap.needsUpdate=!0}setEditing(e){this.editing=e,this.controls.mouseButtons.LEFT=e?null:Pi.ROTATE,this.controls.mouseButtons.RIGHT=e?Pi.ROTATE:null,this.controls.touches.ONE=e?null:Ri.ROTATE,this.controls.touches.TWO=Ri.DOLLY_ROTATE}floorPoint(e,t){this.setRay(e,t);let i=et.bottom+.21*this.tankScale.y;return this.raycaster.ray.intersectPlane(new Jt(tl,-i),this.hit)?{x:this.hit.x/(6.72*this.tankScale.x)+.5,z:this.hit.z/(2.72*this.tankScale.z)+.5}:null}floorScreen(e,t){let i=new C((e-.5)*6.72*this.tankScale.x,et.bottom+.21*this.tankScale.y,(t-.5)*2.72*this.tankScale.z).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(i.x+1)*r.width/2,y:r.top+(1-i.y)*r.height/2}}pickDecor(e,t){this.setRay(e,t);for(let i of this.raycaster.intersectObjects([...this.decorMeshes.values()],!0)){let r=i.object;for(;r;){if(r.userData.decorId)return r.userData.decorId;r=r.parent}}return null}decorTemplate(e){if(this.decorTemplates.has(e))return this.decorTemplates.get(e);let t=new Wt;if(["grass","ribbon","fern"].includes(e)){let i=e==="ribbon",r=e==="fern",a=i?1.55:r?.85:.46,s=Lt(i?"#548469":r?"#4e8066":"#7a985f",.8,{side:pt});s.onBeforeCompile=n=>{n.uniforms.uTime=this.time,n.vertexShader=`uniform float uTime;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(uTime*.6+position.y*2.+modelMatrix[3].x)*position.y*position.y*.035;`)},s.customProgramCacheKey=()=>"decor-leaf";for(let n=0;n<(r?7:11);n++){let o=a*(.6+xt()*.4),l=(xt()-.5)*.6,h=[],c=[];for(let p=0;p<=12;p++){let g=p/12,_=Math.sin(g*Math.PI)*(r?.11:.065)*(r?.55+.45*Math.cos(g*32):1);if(h.push(l*g*g-_,o*g,0,l*g*g+_,o*g,0),p<12){let m=p*2;c.push(m,m+1,m+2,m+1,m+3,m+2)}}let d=new Ke;d.setAttribute("position",new De(h,3)),d.setIndex(c),d.computeVertexNormals();let u=tt(d,s,(xt()-.5)*.24,0,(xt()-.5)*.24);u.rotation.y=n*2.4,u.castShadow=!1,t.add(u)}}else if(e==="stones"){let i=Lt("#81968b",.9),r=new jo(1,2);for(let a=0;a<3;a++){let s=tt(r,i,(a-1)*.23,.15,a===1?-.1:.05);s.scale.set(.23,.21+(a===1?.12:0),.24),s.rotation.y=a,t.add(s)}}else if(e==="wood"){let i=Lt("#786b52",.95),r=new ko(.13,.19,1.1,9),a=tt(r,i,0,.24,0);a.rotation.z=1.32,t.add(a);for(let s of[-1,1]){let n=tt(r,i,s*.23,.43,0);n.scale.set(.5,.55,.5),n.rotation.z=s*.6,t.add(n)}}else{let i=tt(new Cc(.4,.19,10,20,Math.PI),Lt("#7f9189",.9),0,.16,0);i.scale.z=1.7,t.add(i)}if(["grass","ribbon","fern"].includes(e)){let i=[...t.children],r=i.map(n=>(n.updateMatrix(),n.geometry.clone().applyMatrix4(n.matrix))),a=el(r);r.forEach(n=>n.dispose());for(let n of i)t.remove(n),n.geometry.dispose();let s=tt(a,i[0].material);s.castShadow=!1,t.add(s)}return this.decorTemplates.set(e,t),t}syncDecor(e){let t=new Set(e.filter(r=>r.placed).map(r=>r.id)),i=!1;for(let[r,a]of this.decorMeshes)t.has(r)||(this.scene.remove(a),this.decorMeshes.delete(r),i=!0);for(let r of e.filter(a=>a.placed)){let a=this.decorMeshes.get(r.id);a||(a=this.decorTemplate(r.kind).clone(!0),a.userData.decorId=r.id,this.prepareObject(a),this.scene.add(a),this.decorMeshes.set(r.id,a),i=!0);let s=(r.x-.5)*6.72*this.tankScale.x,n=et.bottom+.23*this.tankScale.y,o=(r.z-.5)*2.72*this.tankScale.z;(a.position.x!==s||a.position.y!==n||a.position.z!==o||a.rotation.y!==r.rotation)&&(i=!0),a.position.set(s,n,o),a.rotation.y=r.rotation}i&&(this.renderer.shadowMap.needsUpdate=!0)}previewDecor(e,t){if(!e){this.preview&&this.scene.remove(this.preview),this.preview=null,this.previewKind=null,this.previewRing&&(this.previewRing.visible=!1);return}this.previewKind!==e.kind&&(this.preview&&this.scene.remove(this.preview),this.preview=this.decorTemplate(e.kind).clone(!0),this.previewKind=e.kind,this.prepareObject(this.preview),this.scene.add(this.preview)),this.preview.position.set((e.x-.5)*6.72*this.tankScale.x,et.bottom+.25*this.tankScale.y,(e.z-.5)*2.72*this.tankScale.z),this.preview.rotation.y=e.rotation,this.previewRing||(this.previewRing=tt(new qo(.94,1,48),new Wi({color:"#598777",side:pt,transparent:!0,opacity:.8,depthWrite:!1})),this.previewRing.rotation.x=-Math.PI/2,this.previewRing.castShadow=!1,this.scene.add(this.previewRing)),this.previewRing.visible=!0,this.previewRing.position.copy(this.preview.position),this.previewRing.position.y+=.07,this.previewRing.scale.setScalar(window.StillwaterGarden.DECOR[e.kind].radius),this.previewRing.material.color.set(t?"#5f9d84":"#b86c57")}createParticles(){let e=new Ps({color:"#e1f6ec",roughness:.12,transparent:!0,opacity:.28,metalness:.15,depthWrite:!1}),t=new $t(1,10,8);this.bubbleMesh=new Bo(t,e,15),this.bubbleMesh.frustumCulled=!1,this.scene.add(this.bubbleMesh);for(let a=0;a<15;a++){let s=new Rt;s.castShadow=!1,s.scale.setScalar(.013+xt()*.018),this.bubbles.push({mesh:s,x:2.4+xt()*.35,phase:xt()*6.28,start:xt()*3})}let i=[];for(let a=0;a<65;a++)i.push((xt()-.5)*6.2,-1+xt()*2.7,(xt()-.5)*2.3);let r=new Ke;r.setAttribute("position",new De(i,3)),this.dust=new oc(r,new Vo({color:"#ecf4d5",size:.012,transparent:!0,opacity:.38,depthWrite:!1})),this.scene.add(this.dust);for(let a=0;a<12;a++){let s=tt(new $t(.025,10,8),Lt("#b29361",.8));s.visible=!1,s.castShadow=!1,this.foodMeshes.push(s),this.scene.add(s)}for(let a=0;a<12;a++){let s=tt(new qo(.97,1,64),new Wi({color:"#ebfff6",transparent:!0,opacity:0,side:pt,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.visible=!1,s.castShadow=!1,this.rippleMeshes.push(s),this.scene.add(s)}}get waterY(){return et.bottom+(et.water-et.bottom)*this.tankScale.y}world(e,t,i=0){return new C((e-.5)*6.15*this.tankScale.x,this.waterY-(t-.12)/.88*3.02*this.tankScale.y,i)}screen(e,t){let i=this.world(e,t,.3).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(i.x+1)*r.width/2,y:r.top+(1-i.y)*r.height/2}}surfaceScreen(e=.5,t=0){let i=new C((e-.5)*6.15*this.tankScale.x,this.waterY,t).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(i.x+1)*r.width/2,y:r.top+(1-i.y)*r.height/2}}setRay(e,t){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera)}local(e,t){if(this.setRay(e,t),!this.raycaster.ray.intersectPlane(this.frontPlane,this.hit))return{inside:!1,x:0,y:0};let i=this.hit.x/(6.15*this.tankScale.x)+.5,r=.12+(this.waterY-this.hit.y)/(3.02*this.tankScale.y)*.88;return{x:i,y:r,inside:i>.02&&i<.98&&r>=.12&&r<.96}}feedPoint(e,t){return this.setRay(e,t),!this.raycaster.ray.intersectPlane(this.surfacePlane,this.hit)||Math.abs(this.hit.x)>3.15*this.tankScale.x||Math.abs(this.hit.z)>1.28*this.tankScale.z?null:{x:p_(this.hit.x/(6.15*this.tankScale.x)+.5,.12,.88),y:.145,z:this.hit.z}}resize(){let e=this.canvas.getBoundingClientRect();this.camera.aspect=e.width/e.height,this.camera.fov=e.width<700?Math.min(70,34*700/e.width):34,this.camera.updateProjectionMatrix();let t=this.quality.pixelRatio(e.width,e.height,devicePixelRatio||1);this.renderer.setPixelRatio(t),this.renderer.setSize(e.width,e.height,!1),this.composer&&(this.composer.setPixelRatio(t),this.composer.setSize(e.width,e.height))}reset(){this.controls.reset()}render(e,t,i){if(this.lost)return;let r=performance.now();this.lastRenderStart&&this.frameIntervals.push(r-this.lastRenderStart),this.frameIntervals.length>90&&this.frameIntervals.shift(),this.lastRenderStart=r,this.renderedFrames++,this.delta=Math.max(0,Math.min(.25,t-this.last)),this.last=t,this.time.value=t,this.controls.update(this.delta);let a=new Set(e.fish.map(n=>n.id));for(let[n,o]of this.fish)a.has(n)||(this.scene.remove(o.group),this.fish.delete(n));for(let n of e.fish){if(!this.fish.has(n.id)){let g={silver:0,qing:1,gold:2}[n.species]??1;this.fishTemplates.has(g)||this.fishTemplates.set(g,this.createFish(g).group);let _=this.fishTemplates.get(g).clone(!0);this.prepareObject(_),this.scene.add(_),this.fish.set(n.id,{group:_,tailPivot:_.getObjectByName("tail"),fins:[_.getObjectByName("fin-left"),_.getObjectByName("fin-right")],z:0,quaternion:new Pt})}let o=e.food.find(g=>g.claimedBy===n.id),l=this.fish.get(n.id),h=o?o.z:Math.sin(t*.13+n.phase)*.68*this.tankScale.z;l.z+=(h-l.z)*Math.min(1,this.delta*(o?1.6:.7));let c=this.world(n.x,n.y,l.z);l.group.position.copy(c),l.group.scale.setScalar(n.size??1);let d=new C(Math.cos(n.heading),-Math.sin(n.heading)*.5,Math.cos(t*.13+n.phase)*.1);d.normalize();let u=Math.atan2(-d.z,d.x),p=Math.atan2(d.y,Math.hypot(d.x,d.z));l.quaternion.setFromAxisAngle(tl,u).multiply(new Pt().setFromAxisAngle(new C(0,0,1),p)),l.initialized?l.group.quaternion.slerp(l.quaternion,Math.min(1,this.delta*2.8)):(l.group.quaternion.copy(l.quaternion),l.initialized=!0),l.tailPivot.rotation.y=Math.sin(t*(2.1+n.speed*28)+n.phase)*.27,l.fins.forEach((g,_)=>g.rotation.x=(_?1:-1)*(.8+Math.sin(t*2+n.phase)*.18))}this.foodMeshes.forEach((n,o)=>{let l=e.food[o];n.visible=!!l,l&&n.position.copy(this.world(l.x,l.y,l.z))});let s=0;for(let n of e.ripples)for(let o=0;o<3;o++){let l=this.rippleMeshes[s++];if(!l)break;let h=n.age-o*.23;l.visible=h>=0&&h<3.1,l.visible&&(l.position.set((n.x-.5)*6.15*this.tankScale.x,this.waterY+.025,n.z),l.scale.setScalar(.08+h*.25),l.material.opacity=Math.max(0,.3-h*.1))}for(let n=s;n<this.rippleMeshes.length;n++)this.rippleMeshes[n].visible=!1;for(let[n,o]of this.bubbles.entries())o.mesh.position.set((o.x+Math.sin(t*.7+o.phase)*.045)*this.tankScale.x,et.bottom+(.32+(o.start+t*.12)%2.86)*this.tankScale.y,-.65*this.tankScale.z),o.mesh.updateMatrix(),this.bubbleMesh.setMatrixAt(n,o.mesh.matrix);this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.dust.rotation.y=Math.sin(t*.035)*.03,this.renderer.info.reset(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.autoUpdate=!1}widgetSnapshots(){if(this.lost)throw new Error("WebGL context unavailable");let e=this.renderer,t=e.getSize(new re),i=e.getPixelRatio(),r=new Map([...this.decorMeshes.values(),this.preview,this.previewRing].filter(Boolean).map(c=>[c,c.visible])),a=this.camera.clone();a.fov=34;let s=new C(0,et.bottom+(et.top-et.bottom)*this.tankScale.y/2,0),n=new C(.17,.16,1).normalize();a.position.copy(s).add(n),a.lookAt(s),a.updateMatrixWorld();let o=new C().setFromMatrixColumn(a.matrixWorld,0),l=new C().setFromMatrixColumn(a.matrixWorld,1),h=[];for(let c of[-3.65,3.65])for(let d of[-.18,et.top-et.bottom+.18])for(let u of[-1.6,1.6])h.push(new C(c*this.tankScale.x,et.bottom+d*this.tankScale.y,u*this.tankScale.z).sub(s));try{for(let d of this.decorMeshes.values())d.visible=!0;this.preview&&(this.preview.visible=!1),this.previewRing&&(this.previewRing.visible=!1),e.setPixelRatio(1);let c={};for(let[d,u,p]of[["small",512,512],["medium",1024,512]]){a.aspect=u/p;let g=Math.tan(ba.degToRad(a.fov/2)),_=Math.max(...h.map(m=>m.dot(n)+Math.max(Math.abs(m.dot(o))/(g*a.aspect),Math.abs(m.dot(l))/g)))*1.12;a.position.copy(s).addScaledVector(n,_),a.lookAt(s),a.updateProjectionMatrix(),e.setSize(u,p,!1),e.render(this.scene,a),c[d]=this.canvas.toDataURL("image/jpeg",.88)}return c}finally{for(let[c,d]of r)c.visible=d;e.setPixelRatio(i),e.setSize(t.x,t.y,!1),this.composer?this.composer.render():e.render(this.scene,this.camera)}}stats(){return{renderer:"WebGL / Three.js",softwareAdapter:this.software,lowQuality:this.lowQuality,renderedFrames:this.renderedFrames,medianFrameMs:this.frameIntervals.length?[...this.frameIntervals].sort((e,t)=>e-t)[Math.floor(this.frameIntervals.length/2)]:0,quality:this.quality.level,qualityMode:this.quality.mode,adaptiveScale:this.quality.scale,targetFps:this.quality.profile.fps,measuredFps:this.quality.fps,pixelRatio:this.renderer.getPixelRatio(),buffer:[this.canvas.width,this.canvas.height],bloom:!!this.composer,shadows:this.renderer.shadowMap.enabled,triangles:this.renderer.info.render.triangles,textures:this.renderer.info.memory.textures,revision:"186",fishMeshes:this.fish.size,decorMeshes:this.decorMeshes.size,tank:this.tankKey,geometries:this.renderer.info.memory.geometries,drawCalls:this.renderer.info.render.calls,camera:this.camera.position.toArray(),contextLost:!!this.lost}}},ru=f_;var qi={qing:{name:"\u9752\u9CC9",latin:"Oryzias latipes",note:"\u9488\u68AD\u957F\u8EAB \xB7 \u5E73\u7F13\u80CC\u7EBF \xB7 \u5C0F\u5706\u6247\u5C3E",color:"#748e80",accent:"#d2d5ba",length:1.18,height:.085,width:.06,tail:.22,tailHeight:.13,fork:.04,speed:1,price:60,dorsal:"rear"},silver:{name:"\u6591\u9A6C\u9C7C",latin:"Danio rerio",note:"\u9971\u6EE1\u7EBA\u9524 \xB7 \u7A84\u5C3E\u67C4 \xB7 \u7D27\u51D1\u53C9\u5C3E",color:"#b7bba6",accent:"#657c83",length:1,height:.145,width:.083,tail:.25,tailHeight:.18,fork:.32,speed:1.1,price:100,dorsal:"short"},gold:{name:"\u91D1\u4E1D\u9C7C",latin:"Tanichthys albonubes \xB7 \u91D1\u8272\u578B",note:"\u8F7B\u5DE7\u77ED\u68AD \xB7 \u633A\u7ACB\u5C0F\u80CC\u9CCD \xB7 \u6DF1\u53C9\u5C3E",color:"#b6a16d",accent:"#a87962",length:.85,height:.118,width:.069,tail:.24,tailHeight:.17,fork:.38,speed:1.04,price:180,dorsal:"pennant"},guppy:{name:"\u5B54\u96C0\u9C7C",latin:"Poecilia reticulata \xB7 \u96C4\u9C7C",note:"\u5C0F\u8EAB\u5BBD\u5C3E \xB7 \u540E\u63A0\u80CC\u9CCD \xB7 \u67D4\u8584\u88D9\u6446",color:"#9ba58d",accent:"#8e9eaa",length:.65,height:.095,width:.06,tail:.43,tailHeight:.31,fork:.02,speed:1.07,price:140,dorsal:"veil"},angel:{name:"\u795E\u4ED9\u9C7C",latin:"Pterophyllum scalare",note:"\u4FA7\u6241\u9AD8\u8EAB \xB7 \u4E0A\u4E0B\u5E06\u9CCD \xB7 \u4E24\u6839\u7EC6\u4E1D",color:"#c0bda9",accent:"#788580",length:.73,height:.3,width:.055,tail:.22,tailHeight:.19,fork:.07,speed:.9,price:220,dorsal:"sail"},fancy:{name:"\u5F57\u661F\u91D1\u9C7C",latin:"Carassius auratus \xB7 \u5F57\u661F\u578B",note:"\u539A\u5B9E\u524D\u8EAB \xB7 \u8FDE\u7EED\u6536\u8170 \xB7 \u98D8\u9038\u957F\u53C9\u5C3E",color:"#bc8953",accent:"#d1a674",length:.99,height:.185,width:.115,tail:.49,tailHeight:.285,fork:.52,speed:.95,price:200,dorsal:"goldfish"}},m_=(e,t=0,i=1)=>Math.max(t,Math.min(i,e)),yi=(e,t,i)=>{let r=m_((i-e)/(t-e));return r*r*(3-2*r)},au={qing:{a:1.02,b:.72,peduncle:.13,belly:.94},silver:{a:1.25,b:.8,peduncle:.12,belly:.88},gold:{a:1.5,b:.92,peduncle:.1,belly:.84},guppy:{a:1.25,b:.56,peduncle:.15,belly:.79},angel:{a:.96,b:1.04,peduncle:.1,belly:.95},fancy:{a:1.7,b:.85,peduncle:.13,belly:.91}};function al(e,t){let{a:i,b:r,peduncle:a}=au[t],s=i/(i+r);return a*Math.pow(1-e,3)+Math.pow(e,i)*Math.pow(Math.max(0,1-e),r)/(Math.pow(s,i)*Math.pow(1-s,r))}function su(e,t){return t==="qing"?-.012*Math.sin(e*Math.PI)+.012*yi(.7,1,e):t==="gold"?.009*Math.sin(e*Math.PI):t==="fancy"?.014*Math.sin(e*Math.PI):0}function g_(e,t,i){let r=qi[e],a=new xe(r.color),s=new xe("#deddd0");if(a.lerp(new xe(e==="fancy"?"#9b6b42":"#506c66"),yi(.06,.95,i)*.65),a.lerp(s,yi(.05,.95,-i)*.83),e==="silver"){let n=yi(.38,.75,Math.cos(i*18+.2))*yi(.1,.23,t)*(1-yi(.87,1,t))*(1-yi(.78,.97,Math.abs(i)));a.lerp(new xe("#4f6874"),n*.72)}if(e==="gold"){let n=Math.exp(-Math.pow((i-.08)/.095,2))*yi(.05,.2,t)*(1-yi(.86,1,t));a.lerp(new xe("#ede3ad"),n*.65);let o=Math.exp(-Math.pow((i+.09)/.075,2));a.lerp(new xe("#7c805d"),o*.24)}if(e==="angel"){let n=0;for(let o of[.26,.52,.84])n=Math.max(n,Math.exp(-Math.pow((t-o)/.039,4)));a.lerp(new xe("#4a5858"),n*.69)}if(e==="guppy"){let n=[[.25,.23,.07,.22,"#a47d50"],[.42,-.12,.055,.23,"#5f7a87"],[.57,.18,.05,.19,"#b58b5b"]];for(let[o,l,h,c,d]of n){let u=Math.exp(-(((t-o)/h)**2+((i-l)/c)**2));a.lerp(new xe(d),u*.82)}}return a}function v_(e){let t=qi[e],i=[],r=[],a=[],s=88,n=40;for(let l=0;l<=s;l++){let h=l/s,c=al(h,e),d=(h-.5)*t.length;for(let u=0;u<=n;u++){let p=u/n*Math.PI*2,g=Math.cos(p),_=g>0?1:au[e].belly;i.push(d,su(h,e)+g*t.height*c*_,Math.sin(p)*t.width*c);let m=g_(e,h,g);if(r.push(m.r,m.g,m.b),l<s&&u<n){let f=l*(n+1)+u,M=f+n+1;a.push(f,f+1,M,f+1,M+1,M)}}}let o=new Ke;return o.setAttribute("position",new De(i,3)),o.setAttribute("color",new De(r,3)),o.setIndex(a),o.computeVertexNormals(),o}function Pa(e,t,i,{opacity:r=.57,rays:a=10,pattern:s=!1}={}){let n=new Wt,o=[],l=[],h=[],c=[],d=6,u=new xe(i),p=new xe("#dfded0");t.forEach((M,w)=>{for(let x=0;x<=d;x++){let E=x/d;o.push(e[0]+(M[0]-e[0])*E,e[1]+(M[1]-e[1])*E,e[2]+(M[2]-e[2])*E+Math.sin(E*Math.PI)*.006);let A=u.clone().lerp(p,E*.24);if(s){let R=Math.pow(Math.max(0,Math.sin(w*1.7+E*9)),6)*yi(.25,.7,E);A.lerp(new xe(w%3?"#667d89":"#b38c63"),R*.65)}if(l.push(A.r,A.g,A.b),h.push(r*(.87-.35*E)),w<t.length-1&&x<d){let R=w*(d+1)+x,v=R+d+1;c.push(R,v,R+1,R+1,v,v+1)}}});let g=new Ke;g.setAttribute("position",new De(o,3)),g.setAttribute("color",new De(l,3)),g.setAttribute("finAlpha",new De(h,1)),g.setIndex(c),g.computeVertexNormals();let _=new Ii({vertexColors:!0,roughness:.61,metalness:0,side:pt,transparent:!0,depthWrite:!1});_.onBeforeCompile=M=>{M.vertexShader=`attribute float finAlpha; varying float vFinAlpha;
`+M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFinAlpha=finAlpha;`),M.fragmentShader=`varying float vFinAlpha;
`+M.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vFinAlpha;`)},_.customProgramCacheKey=()=>"natural-fin-alpha-v2",n.add(new ot(g,_));let m=[];for(let M=0;M<a;M++){let w=t[Math.round(M/(a-1)*(t.length-1))];m.push(...e,...w)}let f=new Ke;return f.setAttribute("position",new De(m,3)),n.add(new Hr(f,new Xi({color:i,transparent:!0,opacity:.17,depthWrite:!1}))),n}function Us(e,t=24){let i=[];for(let r=0;r<=t;r++){let a=r/t*(e.length-1),s=Math.min(e.length-2,Math.floor(a)),n=a-s,o=e[Math.max(0,s-1)],l=e[s],h=e[s+1],c=e[Math.min(e.length-1,s+2)];i.push(l.map((d,u)=>.5*(2*l[u]+(-o[u]+h[u])*n+(2*o[u]-5*l[u]+4*h[u]-c[u])*n*n+(-o[u]+3*l[u]-3*h[u]+c[u])*n*n*n)))}return i}function __(e,t){let i=qi[e],r=e==="angel"?.88:.87,a=al(r,e),s=i.height*a*.22+su(r,e),n=i.width*a*.975,o=new Wt,l=e==="angel"?.016:.014,h=new ot(new $t(l,16,10),new Ii({color:e==="angel"?"#ab906e":"#afaa83",roughness:.42}));h.scale.z=.35,h.position.set((r-.5)*i.length,s,t*n),o.add(h);let c=new ot(new $t(l*.62,16,10),new Ii({color:"#233c3d",roughness:.25}));return c.scale.z=.3,c.position.copy(h.position),c.position.z+=t*.004,o.add(c),o}function x_(e,t){let i=qi[e],r=[],a=.77,s=al(a,e);for(let o=0;o<14;o++)for(let l of[o,o+1]){let h=-.85+l/14*1.7,c=Math.sin(h)*i.height*s*.72;r.push((a-.5)*i.length-.022*Math.cos(h),c,t*(Math.cos(h*.75)*i.width*s+.001))}let n=new Ke;return n.setAttribute("position",new De(r,3)),new Hr(n,new Xi({color:"#526d64",transparent:!0,opacity:.2,depthWrite:!1}))}function nu(e){qi[e]||(e="qing");let t=qi[e],i=new Wt,r=new ot(v_(e),new Ii({vertexColors:!0,roughness:.57,metalness:.025}));i.add(r);let a=new Wt;a.name="tail",a.position.x=-t.length*.5,i.add(a);let s=[];for(let h=0;h<=32;h++){let c=h/16-1,d=e==="qing"?1-.22*c*c:e==="guppy"?1-.13*c*c:1,u=e==="fancy"?.045*Math.sin(c*Math.PI):0;s.push([-t.tail*(1-t.fork*Math.pow(1-Math.abs(c),.85))*d,c*t.tailHeight+u,.007*Math.sin(c*5)])}a.add(Pa([.015,0,0],s,t.accent,{opacity:e==="fancy"?.68:e==="guppy"?.72:.59,rays:13,pattern:e==="guppy"}));let n,o;if(t.dorsal==="sail")n=[[.17,.23,0],[.05,.43,0],[-.12,.65,0],[-.25,.46,0],[-.32,.16,0]],o=[[.15,-.2,0],[0,-.38,0],[-.18,-.57,0],[-.29,-.35,0],[-.32,-.13,0]];else if(t.dorsal==="rear")n=[[-.11,.06,0],[-.19,.135,0],[-.28,.12,0],[-.37,.035,0]],o=[[.02,-.08,0],[-.18,-.15,0],[-.36,-.05,0]];else if(t.dorsal==="pennant")n=[[.1,.1,0],[.03,.255,0],[-.11,.22,0],[-.2,.06,0]],o=[[-.04,-.09,0],[-.12,-.19,0],[-.24,-.05,0]];else if(t.dorsal==="veil")n=[[.07,.09,0],[-.09,.19,0],[-.31,.13,0],[-.27,.05,0]],o=[[.04,-.08,0],[-.1,-.15,0],[-.17,-.065,0]];else{let h=e==="fancy"?.27:.2;n=[[.15,t.height*.8,0],[.06,h,0],[-.13,h*.85,0],[-.26,t.height*.5,0]],o=[[-.07,-t.height*.8,0],[-.2,-t.height*1.55,0],[-.3,-t.height*.4,0]]}i.add(Pa([-.07,t.height*.6,0],Us(n),t.accent,{opacity:.48,rays:11})),i.add(Pa([-.08,-t.height*.55,0],Us(o),t.accent,{opacity:.46,rays:9}));let l=[];for(let h of[-1,1]){let c=Pa([0,0,0],Us([[-.04,-.03,h*.015],[-.19,-.12,h*.025],[-.15,-.16,h*.02],[-.04,-.08,0]],16),t.accent,{opacity:.37,rays:6});if(c.position.set(t.length*.18,-t.height*.18,h*t.width*.87),c.name=h<0?"fin-left":"fin-right",i.add(c),l.push(c),i.add(__(e,h),x_(e,h)),e==="angel"){let d=Pa([.1,-.16,h*.035],Us([[.06,-.28,h*.04],[-.03,-.48,h*.055],[-.1,-.59,h*.06]],20),"#c4bda2",{opacity:.61,rays:3});i.add(d)}}return i.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),{group:i,tailPivot:a,fins:l,z:0,quaternion:new Pt,reviewSpecies:e}}var S_=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.;float a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+7.;a*=.5;}return v;}
`;function ou(e){let t=new ct({side:At,depthWrite:!1,vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDir;${S_}
  void main(){
    vec3 d=normalize(vDir);float height=smoothstep(-.15,.75,d.y);
    vec3 color=mix(vec3(.12,.40,.58),vec3(.03,.16,.35),height);
    vec2 p=vec2(d.x/max(.22,d.y+.32),d.z/max(.22,d.y+.32))*2.;
    float n=fbm(p);
    float micro=(noise(p*17.8)-.5)*.018+(noise(p*36.1)-.5)*.007;
    float cloud=smoothstep(.40,.67,n+micro)*smoothstep(-.35,.18,d.y);
    // Subtle cool underside and warm rim within the existing white cloud palette.
    float shade=smoothstep(.45,.64,n)*.035;
    vec3 white=vec3(.98,.98,.93)-vec3(.75,.40,.05)*shade;
    color=mix(color,white,cloud*.92);
    float sun=pow(max(0.,dot(d,normalize(vec3(-.5,.7,.4)))),90.);
    color+=vec3(1.,.88,.60)*sun*.5;
    gl_FragColor=vec4(color,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`}),i=new Ta,r=new ot(new $t(75,48,24),t);i.add(r);let a=new Vr(matchMedia("(pointer: coarse)").matches||innerWidth<700?256:1024),s=new Ca(.1,100,a),n=e.toneMapping;e.toneMapping=Xt;try{s.update(e,i)}finally{e.toneMapping=n,r.geometry.dispose(),t.dispose()}return a}var La=class extends ru{createSkyTarget(){return ou(this.renderer)}render(t,i,r){if(!this.lost){for(let a of t.fish){let s=Object.hasOwn(qi,a.species)?a.species:"qing",n=this.fish.get(a.id);if(n?.artSpecies===s)continue;n&&(this.scene.remove(n.group),this.fish.delete(a.id)),this.fishTemplates.has(s)||this.fishTemplates.set(s,nu(s).group);let o=this.fishTemplates.get(s).clone(!0);this.prepareObject(o),this.scene.add(o),this.fish.set(a.id,{group:o,tailPivot:o.getObjectByName("tail"),fins:[o.getObjectByName("fin-left"),o.getObjectByName("fin-right")],z:0,quaternion:new Pt,artSpecies:s})}super.render(t,i,r)}}stats(){return{...super.stats(),artRevision:"natural-04",fishSpecies:[...this.fish.values()].map(t=>t.artSpecies)}}};window.AquariumScene=La;})();
