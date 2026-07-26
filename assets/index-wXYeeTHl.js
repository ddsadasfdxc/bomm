(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="166",gf=0,Dc=1,vf=2,Mh=1,xf=2,Hn=3,_i=0,Ge=1,An=2,ui=0,yr=1,Wn=2,Ic=3,Uc=4,Mf=5,Ni=100,yf=101,Sf=102,Ef=103,Tf=104,bf=200,wf=201,Af=202,Cf=203,ko=204,Ho=205,Rf=206,Pf=207,Lf=208,Df=209,If=210,Uf=211,Nf=212,Of=213,Ff=214,Bf=0,zf=1,kf=2,da=3,Hf=4,Vf=5,Gf=6,Wf=7,Na=0,Xf=1,qf=2,hi=0,Yf=1,$f=2,Kf=3,jf=4,Zf=5,Jf=6,Qf=7,yh=300,Ar=301,Cr=302,Vo=303,Go=304,Oa=306,Wo=1e3,Bi=1001,Xo=1002,un=1003,tp=1004,ws=1005,gn=1006,$a=1007,zi=1008,Kn=1009,Sh=1010,Eh=1011,ss=1012,Wl=1013,Xi=1014,Xn=1015,_s=1016,Xl=1017,ql=1018,Rr=1020,Th=35902,bh=1021,wh=1022,xn=1023,Ah=1024,Ch=1025,Sr=1026,Pr=1027,Rh=1028,Yl=1029,Ph=1030,$l=1031,Kl=1033,na=33776,ia=33777,ra=33778,sa=33779,qo=35840,Yo=35841,$o=35842,Ko=35843,jo=36196,Zo=37492,Jo=37496,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,hl=37820,dl=37821,aa=36492,fl=36494,pl=36495,Lh=36283,ml=36284,_l=36285,gl=36286,ep=3200,np=3201,jl=0,ip=1,ai="",En="srgb",Mi="srgb-linear",Zl="display-p3",Fa="display-p3-linear",fa="linear",te="srgb",pa="rec709",ma="p3",Ki=7680,Nc=519,rp=512,sp=513,ap=514,Dh=515,op=516,lp=517,cp=518,up=519,vl=35044,Oc="300 es",qn=2e3,_a=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,xl=180/Math.PI;function di(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[r&255]+Re[r>>8&255]+Re[r>>16&255]+Re[r>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ze(r,t,e){return Math.max(t,Math.min(e,r))}function hp(r,t){return(r%t+t)%t}function ja(r,t,e){return(1-e)*r+e*t}function Cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],m=n[2],_=n[5],g=n[8],h=i[0],f=i[3],d=i[6],M=i[1],x=i[4],v=i[7],A=i[2],C=i[5],b=i[8];return s[0]=a*h+o*M+l*A,s[3]=a*f+o*x+l*C,s[6]=a*d+o*v+l*b,s[1]=c*h+u*M+p*A,s[4]=c*f+u*x+p*C,s[7]=c*d+u*v+p*b,s[2]=m*h+_*M+g*A,s[5]=m*f+_*x+g*C,s[8]=m*d+_*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,m=o*l-u*s,_=c*s-a*l,g=e*p+n*m+i*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return t[0]=p*h,t[1]=(i*c-u*n)*h,t[2]=(o*n-i*a)*h,t[3]=m*h,t[4]=(u*e-i*l)*h,t[5]=(i*s-o*e)*h,t[6]=_*h,t[7]=(n*l-c*e)*h,t[8]=(a*e-n*s)*h,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ot;function Ih(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dp(){const r=ga("canvas");return r.style.display="block",r}const Fc={};function Jl(r){r in Fc||(Fc[r]=!0,console.warn(r))}function fp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Bc=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),As={[Mi]:{transfer:fa,primaries:pa,toReference:r=>r,fromReference:r=>r},[En]:{transfer:te,primaries:pa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fa]:{transfer:fa,primaries:ma,toReference:r=>r.applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc)},[Zl]:{transfer:te,primaries:ma,toReference:r=>r.convertSRGBToLinear().applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc).convertLinearToSRGB()}},pp=new Set([Mi,Fa]),Kt={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!pp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=As[t].toReference,i=As[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return As[r].primaries},getTransfer:function(r){return r===ai?fa:As[r].transfer}};function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ja(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ji;class mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=ga("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Er(e[n]/255)*255):e[n]=Er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _p=0;class Uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qa(i[a].image)):s.push(Qa(i[a]))}else s=Qa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class Fe extends Fr{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Bi,i=Bi,s=gn,a=zi,o=xn,l=Kn,c=Fe.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=di(),this.name="",this.source=new Uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=yh;Fe.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],p=l[8],m=l[1],_=l[5],g=l[9],h=l[2],f=l[6],d=l[10];if(Math.abs(u-m)<.01&&Math.abs(p-h)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+m)<.1&&Math.abs(p+h)<.1&&Math.abs(g+f)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(_+1)/2,A=(d+1)/2,C=(u+m)/4,b=(p+h)/4,R=(g+f)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((f-g)*(f-g)+(p-h)*(p-h)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(p-h)/M,this.z=(m-u)/M,this.w=Math.acos((c+_+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vp extends Fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends vp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],p=n[i+3];const m=s[a+0],_=s[a+1],g=s[a+2],h=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=m,t[e+1]=_,t[e+2]=g,t[e+3]=h;return}if(p!==h||l!==m||c!==_||u!==g){let f=1-o;const d=l*m+c*_+u*g+p*h,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,d*M);f=Math.sin(f*C)/A,o=Math.sin(o*C)/A}const v=o*M;if(l=l*f+m*v,c=c*f+_*v,u=u*f+g*v,p=p*f+h*v,f===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=A,c*=A,u*=A,p*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],p=s[a],m=s[a+1],_=s[a+2],g=s[a+3];return t[e]=o*g+u*p+l*_-c*m,t[e+1]=l*g+u*m+c*p-o*_,t[e+2]=c*g+u*_+o*m-l*p,t[e+3]=u*g-o*p-l*m-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),p=o(s/2),m=l(n/2),_=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=m*u*p+c*_*g,this._y=c*_*p-m*u*g,this._z=c*u*g+m*_*p,this._w=c*u*p-m*_*g;break;case"YXZ":this._x=m*u*p+c*_*g,this._y=c*_*p-m*u*g,this._z=c*u*g-m*_*p,this._w=c*u*p+m*_*g;break;case"ZXY":this._x=m*u*p-c*_*g,this._y=c*_*p+m*u*g,this._z=c*u*g+m*_*p,this._w=c*u*p-m*_*g;break;case"ZYX":this._x=m*u*p-c*_*g,this._y=c*_*p+m*u*g,this._z=c*u*g-m*_*p,this._w=c*u*p+m*_*g;break;case"YZX":this._x=m*u*p+c*_*g,this._y=c*_*p+m*u*g,this._z=c*u*g-m*_*p,this._w=c*u*p-m*_*g;break;case"XZY":this._x=m*u*p-c*_*g,this._y=c*_*p-m*u*g,this._z=c*u*g+m*_*p,this._w=c*u*p+m*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],m=n+o+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-i)*_}else if(n>o&&n>p){const _=2*Math.sqrt(1+n-o-p);this._w=(u-l)/_,this._x=.25*_,this._y=(i+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-n-p);this._w=(s-c)/_,this._x=(i+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+p-n-o);this._w=(a-i)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*i+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),p=2*(s*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-s*p,this.z=i+l*p+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new F,kc=new gs;class vs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Rs.subVectors(this.max,kr),Zi.subVectors(t.a,kr),Ji.subVectors(t.b,kr),Qi.subVectors(t.c,kr),ti.subVectors(Ji,Zi),ei.subVectors(Qi,Ji),Ei.subVectors(Zi,Qi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ei.z,Ei.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ei.z,0,-Ei.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ei.y,Ei.x,0];return!eo(e,Zi,Ji,Qi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Zi,Ji,Qi,Rs))?!1:(Ps.crossVectors(ti,ei),e=[Ps.x,Ps.y,Ps.z],eo(e,Zi,Ji,Qi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,Cs=new vs,Zi=new F,Ji=new F,Qi=new F,ti=new F,ei=new F,Ei=new F,kr=new F,Rs=new F,Ps=new F,Ti=new F;function eo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ti.fromArray(r,s);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Mp=new vs,Hr=new F,no=new F;class xs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(no)),this.expandByPoint(Hr.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new F,io=new F,Ls=new F,ni=new F,ro=new F,Ds=new F,so=new F;class Ql{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(io);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=ni.dot(this.direction),l=-ni.dot(Ls),c=ni.lengthSq(),u=Math.abs(1-a*a);let p,m,_,g;if(u>0)if(p=a*l-o,m=a*o-l,g=s*u,p>=0)if(m>=-g)if(m<=g){const h=1/u;p*=h,m*=h,_=p*(p+a*m+2*o)+m*(a*p+m+2*l)+c}else m=s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;else m<=-g?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+c):m<=g?(p=0,m=Math.min(Math.max(-s,-l),s),_=m*(m+2*l)+c):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+m*(m+2*l)+c);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(io).addScaledVector(Ls,m),_}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,i=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,i=(t.min.x-m.x)*c),u>=0?(s=(t.min.y-m.y)*u,a=(t.max.y-m.y)*u):(s=(t.max.y-m.y)*u,a=(t.min.y-m.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(o=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(o=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){ro.subVectors(e,t),Ds.subVectors(n,t),so.crossVectors(ro,Ds);let a=this.direction.dot(so),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(Ds.crossVectors(ni,Ds));if(l<0)return null;const c=o*this.direction.dot(ro.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(so);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,l,c,u,p,m,_,g,h,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,p,m,_,g,h,f)}set(t,e,n,i,s,a,o,l,c,u,p,m,_,g,h,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=m,d[3]=_,d[7]=g,d[11]=h,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/tr.setFromMatrixColumn(t,0).length(),s=1/tr.setFromMatrixColumn(t,1).length(),a=1/tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=a*u,_=a*p,g=o*u,h=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=_+g*c,e[5]=m-h*c,e[9]=-o*l,e[2]=h-m*c,e[6]=g+_*c,e[10]=a*l}else if(t.order==="YXZ"){const m=l*u,_=l*p,g=c*u,h=c*p;e[0]=m+h*o,e[4]=g*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=_*o-g,e[6]=h+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*u,_=l*p,g=c*u,h=c*p;e[0]=m-h*o,e[4]=-a*p,e[8]=g+_*o,e[1]=_+g*o,e[5]=a*u,e[9]=h-m*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*u,_=a*p,g=o*u,h=o*p;e[0]=l*u,e[4]=g*c-_,e[8]=m*c+h,e[1]=l*p,e[5]=h*c+m,e[9]=_*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,_=a*c,g=o*l,h=o*c;e[0]=l*u,e[4]=h-m*p,e[8]=g*p+_,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=_*p+g,e[10]=m-h*p}else if(t.order==="XZY"){const m=a*l,_=a*c,g=o*l,h=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=m*p+h,e[5]=a*u,e[9]=_*p-g,e[2]=g*p-_,e[6]=o*u,e[10]=h*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,Sp)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ii.crossVectors(n,Ze),ii.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ii.crossVectors(n,Ze)),ii.normalize(),Is.crossVectors(Ze,ii),i[0]=ii.x,i[4]=Is.x,i[8]=Ze.x,i[1]=ii.y,i[5]=Is.y,i[9]=Ze.y,i[2]=ii.z,i[6]=Is.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],m=n[9],_=n[13],g=n[2],h=n[6],f=n[10],d=n[14],M=n[3],x=n[7],v=n[11],A=n[15],C=i[0],b=i[4],R=i[8],y=i[12],S=i[1],E=i[5],N=i[9],O=i[13],W=i[2],V=i[6],X=i[10],Y=i[14],G=i[3],st=i[7],lt=i[11],ct=i[15];return s[0]=a*C+o*S+l*W+c*G,s[4]=a*b+o*E+l*V+c*st,s[8]=a*R+o*N+l*X+c*lt,s[12]=a*y+o*O+l*Y+c*ct,s[1]=u*C+p*S+m*W+_*G,s[5]=u*b+p*E+m*V+_*st,s[9]=u*R+p*N+m*X+_*lt,s[13]=u*y+p*O+m*Y+_*ct,s[2]=g*C+h*S+f*W+d*G,s[6]=g*b+h*E+f*V+d*st,s[10]=g*R+h*N+f*X+d*lt,s[14]=g*y+h*O+f*Y+d*ct,s[3]=M*C+x*S+v*W+A*G,s[7]=M*b+x*E+v*V+A*st,s[11]=M*R+x*N+v*X+A*lt,s[15]=M*y+x*O+v*Y+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],m=t[10],_=t[14],g=t[3],h=t[7],f=t[11],d=t[15];return g*(+s*l*p-i*c*p-s*o*m+n*c*m+i*o*_-n*l*_)+h*(+e*l*_-e*c*m+s*a*m-i*a*_+i*c*u-s*l*u)+f*(+e*c*p-e*o*_-s*a*p+n*a*_+s*o*u-n*c*u)+d*(-i*o*u-e*l*p+e*o*m+i*a*p-n*a*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],m=t[10],_=t[11],g=t[12],h=t[13],f=t[14],d=t[15],M=p*f*c-h*m*c+h*l*_-o*f*_-p*l*d+o*m*d,x=g*m*c-u*f*c-g*l*_+a*f*_+u*l*d-a*m*d,v=u*h*c-g*p*c+g*o*_-a*h*_-u*o*d+a*p*d,A=g*p*l-u*h*l-g*o*m+a*h*m+u*o*f-a*p*f,C=e*M+n*x+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=M*b,t[1]=(h*m*s-p*f*s-h*i*_+n*f*_+p*i*d-n*m*d)*b,t[2]=(o*f*s-h*l*s+h*i*c-n*f*c-o*i*d+n*l*d)*b,t[3]=(p*l*s-o*m*s-p*i*c+n*m*c+o*i*_-n*l*_)*b,t[4]=x*b,t[5]=(u*f*s-g*m*s+g*i*_-e*f*_-u*i*d+e*m*d)*b,t[6]=(g*l*s-a*f*s-g*i*c+e*f*c+a*i*d-e*l*d)*b,t[7]=(a*m*s-u*l*s+u*i*c-e*m*c-a*i*_+e*l*_)*b,t[8]=v*b,t[9]=(g*p*s-u*h*s-g*n*_+e*h*_+u*n*d-e*p*d)*b,t[10]=(a*h*s-g*o*s+g*n*c-e*h*c-a*n*d+e*o*d)*b,t[11]=(u*o*s-a*p*s-u*n*c+e*p*c+a*n*_-e*o*_)*b,t[12]=A*b,t[13]=(u*h*i-g*p*i+g*n*m-e*h*m-u*n*f+e*p*f)*b,t[14]=(g*o*i-a*h*i-g*n*l+e*h*l+a*n*f-e*o*f)*b,t[15]=(a*p*i-u*o*i+u*n*l-e*p*l-a*n*m+e*o*m)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,p=o+o,m=s*c,_=s*u,g=s*p,h=a*u,f=a*p,d=o*p,M=l*c,x=l*u,v=l*p,A=n.x,C=n.y,b=n.z;return i[0]=(1-(h+d))*A,i[1]=(_+v)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(_-v)*C,i[5]=(1-(m+d))*C,i[6]=(f+M)*C,i[7]=0,i[8]=(g+x)*b,i[9]=(f-M)*b,i[10]=(1-(m+h))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=tr.set(i[0],i[1],i[2]).length();const a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const c=1/s,u=1/a,p=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,e.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=qn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),p=(e+t)/(e-t),m=(n+i)/(n-i);let _,g;if(o===qn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===_a)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=qn){const l=this.elements,c=1/(e-t),u=1/(n-i),p=1/(a-s),m=(e+t)*c,_=(n+i)*u;let g,h;if(o===qn)g=(a+s)*p,h=-2*p;else if(o===_a)g=s*p,h=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=h,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const tr=new F,mn=new ne,yp=new F(0,0,0),Sp=new F(1,1,1),ii=new F,Is=new F,Ze=new F,Hc=new ne,Vc=new gs;class yn{constructor(t=0,e=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],p=i[2],m=i[6],_=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ep=0;const Gc=new F,er=new gs,Bn=new ne,Us=new F,Vr=new F,Tp=new F,bp=new gs,Wc=new F(1,0,0),Xc=new F(0,1,0),qc=new F(0,0,1),Yc={type:"added"},wp={type:"removed"},nr={type:"childadded",child:null},ao={type:"childremoved",child:null};class Ae extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new F,e=new yn,n=new gs,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ot}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Vr,Us,this.up):Bn.lookAt(Us,Vr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),er.setFromRotationMatrix(Bn),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wp),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),m=a(t.skeletons),_=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new F(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,zn=new F,oo=new F,kn=new F,ir=new F,rr=new F,$c=new F,lo=new F,co=new F,uo=new F;class vn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_n.subVectors(i,e),zn.subVectors(n,e),oo.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(zn),l=_n.dot(oo),c=zn.dot(zn),u=zn.dot(oo),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,_=(c*l-o*u)*m,g=(a*u-o*l)*m;return s.set(1-_-g,g,_)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),zn.subVectors(t,e),_n.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),_n.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ir.subVectors(i,n),rr.subVectors(s,n),lo.subVectors(t,n);const l=ir.dot(lo),c=rr.dot(lo);if(l<=0&&c<=0)return e.copy(n);co.subVectors(t,i);const u=ir.dot(co),p=rr.dot(co);if(u>=0&&p<=u)return e.copy(i);const m=l*p-u*c;if(m<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ir,a);uo.subVectors(t,s);const _=ir.dot(uo),g=rr.dot(uo);if(g>=0&&_<=g)return e.copy(s);const h=_*c-l*g;if(h<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(rr,o);const f=u*g-_*p;if(f<=0&&p-u>=0&&_-g>=0)return $c.subVectors(s,i),o=(p-u)/(p-u+(_-g)),e.copy(i).addScaledVector($c,o);const d=1/(f+h+m);return a=h*d,o=m*d,e.copy(n).addScaledVector(ir,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function ho(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=hp(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ho(a,s,t+1/3),this.g=ho(a,s,t),this.b=ho(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Kt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(ze(Pe.r*255,0,255))*65536+Math.round(ze(Pe.g*255,0,255))*256+Math.round(ze(Pe.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,s=Pe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=En){Kt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Ns);const n=ja(ri.h,Ns.h,e),i=ja(ri.s,Ns.s,e),s=ja(ri.l,Ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new At;At.NAMES=Fh;let Ap=0;class Jn extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=di(),this.name="",this.type="Material",this.blending=yr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class tc extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new F,Os=new It;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}}class Bh extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Mn extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cp=0;const ln=new ne,fo=new Ae,sr=new F,Je=new vs,Gr=new vs,Se=new F;class Ie extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?zh:Bh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Je.min,Gr.min),Je.expandByPoint(Se),Se.addVectors(Je.max,Gr.max),Je.expandByPoint(Se)):(Je.expandByPoint(Gr.min),Je.expandByPoint(Gr.max))}Je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(t,c),Se.add(sr)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new F,l[R]=new F;const c=new F,u=new F,p=new F,m=new It,_=new It,g=new It,h=new F,f=new F;function d(R,y,S){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,S),m.fromBufferAttribute(s,R),_.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),p.sub(c),_.sub(m),g.sub(m);const E=1/(_.x*g.y-g.x*_.y);isFinite(E)&&(h.copy(u).multiplyScalar(g.y).addScaledVector(p,-_.y).multiplyScalar(E),f.copy(p).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(E),o[R].add(h),o[y].add(h),o[S].add(h),l[R].add(f),l[y].add(f),l[S].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){const S=M[R],E=S.start,N=S.count;for(let O=E,W=E+N;O<W;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new F,v=new F,A=new F,C=new F;function b(R){A.fromBufferAttribute(i,R),C.copy(A);const y=o[R];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(C,y);const E=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,y=M.length;R<y;++R){const S=M[R],E=S.start,N=S.count;for(let O=E,W=E+N;O<W;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,p=new F;if(t)for(let m=0,_=t.count;m<_;m+=3){const g=t.getX(m+0),h=t.getX(m+1),f=t.getX(m+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,h),a.fromBufferAttribute(e,f),u.subVectors(a,s),p.subVectors(i,s),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,_=e.count;m<_;m+=3)i.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),u.subVectors(a,s),p.subVectors(i,s),u.cross(p),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,m=new c.constructor(l.length*u);let _=0,g=0;for(let h=0,f=l.length;h<f;h++){o.isInterleavedBufferAttribute?_=l[h]*o.data.stride+o.offset:_=l[h]*u;for(let d=0;d<u;d++)m[g++]=c[_++]}return new Ee(m,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const m=c[u],_=t(m,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,m=c.length;p<m;p++){const _=c[p];u.push(_.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],p=s[c];for(let m=0,_=p.length;m<_;m++)u.push(p[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new ne,bi=new Ql,Fs=new xs,jc=new F,ar=new F,or=new F,lr=new F,po=new F,Bs=new F,zs=new It,ks=new It,Hs=new It,Zc=new F,Jc=new F,Qc=new F,Vs=new F,Gs=new F;class Ve extends Ae{constructor(t=new Ie,e=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(po.fromBufferAttribute(p,t),a?Bs.addScaledVector(po,u):Bs.addScaledVector(po.sub(e),u))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Fs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Fs,jc)===null||bi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Kc.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,m=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,h=m.length;g<h;g++){const f=m[g],d=a[f.materialIndex],M=Math.max(f.start,_.start),x=Math.min(o.count,Math.min(f.start+f.count,_.start+_.count));for(let v=M,A=x;v<A;v+=3){const C=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);i=Ws(this,d,t,n,c,u,p,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),h=Math.min(o.count,_.start+_.count);for(let f=g,d=h;f<d;f+=3){const M=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);i=Ws(this,a,t,n,c,u,p,M,x,v),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,h=m.length;g<h;g++){const f=m[g],d=a[f.materialIndex],M=Math.max(f.start,_.start),x=Math.min(l.count,Math.min(f.start+f.count,_.start+_.count));for(let v=M,A=x;v<A;v+=3){const C=v,b=v+1,R=v+2;i=Ws(this,d,t,n,c,u,p,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let f=g,d=h;f<d;f+=3){const M=f,x=f+1,v=f+2;i=Ws(this,a,t,n,c,u,p,M,x,v),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Rp(r,t,e,n,i,s,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===_i,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:r}}function Ws(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ar),r.getVertexPosition(l,or),r.getVertexPosition(c,lr);const u=Rp(r,t,e,n,ar,or,lr,Vs);if(u){i&&(zs.fromBufferAttribute(i,o),ks.fromBufferAttribute(i,l),Hs.fromBufferAttribute(i,c),u.uv=vn.getInterpolation(Vs,ar,or,lr,zs,ks,Hs,new It)),s&&(zs.fromBufferAttribute(s,o),ks.fromBufferAttribute(s,l),Hs.fromBufferAttribute(s,c),u.uv1=vn.getInterpolation(Vs,ar,or,lr,zs,ks,Hs,new It)),a&&(Zc.fromBufferAttribute(a,o),Jc.fromBufferAttribute(a,l),Qc.fromBufferAttribute(a,c),u.normal=vn.getInterpolation(Vs,ar,or,lr,Zc,Jc,Qc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new F,materialIndex:0};vn.getNormal(ar,or,lr,p.normal),u.face=p}return u}class Ms extends Ie{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let m=0,_=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(p,2));function g(h,f,d,M,x,v,A,C,b,R,y){const S=v/b,E=A/R,N=v/2,O=A/2,W=C/2,V=b+1,X=R+1;let Y=0,G=0;const st=new F;for(let lt=0;lt<X;lt++){const ct=lt*E-O;for(let Pt=0;Pt<V;Pt++){const mt=Pt*S-N;st[h]=mt*M,st[f]=ct*x,st[d]=W,c.push(st.x,st.y,st.z),st[h]=0,st[f]=0,st[d]=C>0?1:-1,u.push(st.x,st.y,st.z),p.push(Pt/b),p.push(1-lt/R),Y+=1}}for(let lt=0;lt<R;lt++)for(let ct=0;ct<b;ct++){const Pt=m+ct+V*lt,mt=m+ct+V*(lt+1),q=m+(ct+1)+V*(lt+1),Z=m+(ct+1)+V*lt;l.push(Pt,mt,Z),l.push(mt,q,Z),G+=6}o.addGroup(_,G,y),_+=G,m+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const n=Lr(r[e]);for(const i in n)t[i]=n[i]}return t}function Pp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function kh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Lp={clone:Lr,merge:Oe};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new F,tu=new It,eu=new It;class ke extends Hh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cr=-90,ur=1;class Up extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(cr,ur,t,e);i.layers=this.layers,this.add(i);const s=new ke(cr,ur,t,e);s.layers=this.layers,this.add(s);const a=new ke(cr,ur,t,e);a.layers=this.layers,this.add(a);const o=new ke(cr,ur,t,e);o.layers=this.layers,this.add(o);const l=new ke(cr,ur,t,e);l.layers=this.layers,this.add(l);const c=new ke(cr,ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=h,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(p,m,_),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vh extends Fe{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ar,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ms(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ui});s.uniforms.tEquirect.value=e;const a=new Ve(i,s),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=gn),new Up(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const mo=new F,Op=new F,Fp=new Ot;class Di{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=mo.subVectors(n,e).cross(Op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fp.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new xs,Xs=new F;class ec{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],p=i[6],m=i[7],_=i[8],g=i[9],h=i[10],f=i[11],d=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,m-c,f-_,v-d).normalize(),n[1].setComponents(l+s,m+c,f+_,v+d).normalize(),n[2].setComponents(l+a,m+u,f+g,v+M).normalize(),n[3].setComponents(l-a,m-u,f-g,v-M).normalize(),n[4].setComponents(l-o,m-p,f-h,v-x).normalize(),e===qn)n[5].setComponents(l+o,m+p,f+h,v+x).normalize();else if(e===_a)n[5].setComponents(o,p,h,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bp(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,p=c.byteLength,m=r.createBuffer();r.bindBuffer(l,m),r.bufferData(l,c,u),o.onUploadCallback();let _;if(c instanceof Float32Array)_=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=r.SHORT;else if(c instanceof Uint32Array)_=r.UNSIGNED_INT;else if(c instanceof Int32Array)_=r.INT;else if(c instanceof Int8Array)_=r.BYTE;else if(c instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l._updateRange,m=l.updateRanges;if(r.bindBuffer(c,o),p.count===-1&&m.length===0&&r.bufferSubData(c,0,u),m.length!==0){for(let _=0,g=m.length;_<g;_++){const h=m[_];r.bufferSubData(c,h.start*u.BYTES_PER_ELEMENT,u,h.start,h.count)}l.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class ys extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,p=t/o,m=e/l,_=[],g=[],h=[],f=[];for(let d=0;d<u;d++){const M=d*m-a;for(let x=0;x<c;x++){const v=x*p-s;g.push(v,-M,0),h.push(0,0,1),f.push(x/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const x=M+c*d,v=M+c*(d+1),A=M+1+c*(d+1),C=M+1+c*d;_.push(x,v,C),_.push(v,A,C)}this.setIndex(_),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.widthSegments,t.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,E_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,q_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
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
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ug=`#define TOON
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
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,gg=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:zp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Vp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:$p,begin_vertex:Kp,beginnormal_vertex:jp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:am,color_vertex:om,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:um,displacementmap_pars_vertex:hm,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:_m,envmap_fragment:gm,envmap_common_pars_fragment:vm,envmap_pars_fragment:xm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:ym,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:bm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Am,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Rm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Im,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Om,lights_physical_pars_fragment:Fm,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:km,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:$m,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t_,morphtarget_vertex:e_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:r_,normal_pars_vertex:s_,normal_vertex:a_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:h_,opaque_fragment:d_,packing:f_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:__,dithering_pars_fragment:g_,roughnessmap_fragment:v_,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:y_,shadowmap_vertex:S_,shadowmask_pars_fragment:E_,skinbase_vertex:T_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:A_,specularmap_fragment:C_,specularmap_pars_fragment:R_,tonemapping_fragment:P_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:I_,uv_pars_fragment:U_,uv_pars_vertex:N_,uv_vertex:O_,worldpos_vertex:F_,background_vert:B_,background_frag:z_,backgroundCube_vert:k_,backgroundCube_frag:H_,cube_vert:V_,cube_frag:G_,depth_vert:W_,depth_frag:X_,distanceRGBA_vert:q_,distanceRGBA_frag:Y_,equirect_vert:$_,equirect_frag:K_,linedashed_vert:j_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:Q_,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:ug,meshtoon_frag:hg,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:_g,sprite_frag:gg},rt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},wn={basic:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new At(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Oe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Oe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new At(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Oe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Oe([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Oe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Oe([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Oe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Oe([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Oe([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Oe([rt.lights,rt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};wn.physical={uniforms:Oe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const qs={r:0,b:0,g:0},Ai=new yn,vg=new ne;function xg(r,t,e,n,i,s,a){const o=new At(0);let l=s===!0?0:1,c,u,p=null,m=0,_=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function h(M){let x=!1;const v=g(M);v===null?d(o,l):v&&v.isColor&&(d(v,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Oa)?(u===void 0&&(u=new Ve(new Ms(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Lr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ai)),u.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,(p!==v||m!==v.version||_!==r.toneMapping)&&(u.material.needsUpdate=!0,p=v,m=v.version,_=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ve(new ys(2,2),new In({name:"BackgroundMaterial",uniforms:Lr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||m!==v.version||_!==r.toneMapping)&&(c.material.needsUpdate=!0,p=v,m=v.version,_=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(qs,kh(r)),n.buffers.color.setClear(qs.r,qs.g,qs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:h,addToRenderList:f}}function Mg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function o(S,E,N,O,W){let V=!1;const X=p(O,N,E);s!==X&&(s=X,c(s.object)),V=_(S,O,N,W),V&&g(S,O,N,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(S,E,N,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function p(S,E,N){const O=N.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let V=W[E.id];V===void 0&&(V={},W[E.id]=V);let X=V[O];return X===void 0&&(X=m(l()),V[O]=X),X}function m(S){const E=[],N=[],O=[];for(let W=0;W<e;W++)E[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function _(S,E,N,O){const W=s.attributes,V=E.attributes;let X=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){const lt=W[G];let ct=V[G];if(ct===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),lt===void 0||lt.attribute!==ct||ct&&lt.data!==ct.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function g(S,E,N,O){const W={},V=E.attributes;let X=0;const Y=N.getAttributes();for(const G in Y)if(Y[G].location>=0){let lt=V[G];lt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));const ct={};ct.attribute=lt,lt&&lt.data&&(ct.data=lt.data),W[G]=ct,X++}s.attributes=W,s.attributesNum=X,s.index=O}function h(){const S=s.newAttributes;for(let E=0,N=S.length;E<N;E++)S[E]=0}function f(S){d(S,0)}function d(S,E){const N=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;N[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),W[S]!==E&&(r.vertexAttribDivisor(S,E),W[S]=E)}function M(){const S=s.newAttributes,E=s.enabledAttributes;for(let N=0,O=E.length;N<O;N++)E[N]!==S[N]&&(r.disableVertexAttribArray(N),E[N]=0)}function x(S,E,N,O,W,V,X){X===!0?r.vertexAttribIPointer(S,E,N,W,V):r.vertexAttribPointer(S,E,N,O,W,V)}function v(S,E,N,O){h();const W=O.attributes,V=N.getAttributes(),X=E.defaultAttributeValues;for(const Y in V){const G=V[Y];if(G.location>=0){let st=W[Y];if(st===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const lt=st.normalized,ct=st.itemSize,Pt=t.get(st);if(Pt===void 0)continue;const mt=Pt.buffer,q=Pt.type,Z=Pt.bytesPerElement,dt=q===r.INT||q===r.UNSIGNED_INT||st.gpuType===Wl;if(st.isInterleavedBufferAttribute){const ut=st.data,Rt=ut.stride,Et=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)d(G.location+Ft,ut.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)f(G.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Ft=0;Ft<G.locationSize;Ft++)x(G.location+Ft,ct/G.locationSize,q,lt,Rt*Z,(Et+ct/G.locationSize*Ft)*Z,dt)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)d(G.location+ut,st.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<G.locationSize;ut++)f(G.location+ut);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ut=0;ut<G.locationSize;ut++)x(G.location+ut,ct/G.locationSize,q,lt,ct*Z,ct/G.locationSize*ut*Z,dt)}}else if(X!==void 0){const lt=X[Y];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(G.location,lt);break;case 3:r.vertexAttrib3fv(G.location,lt);break;case 4:r.vertexAttrib4fv(G.location,lt);break;default:r.vertexAttrib1fv(G.location,lt)}}}}M()}function A(){R();for(const S in n){const E=n[S];for(const N in E){const O=E[N];for(const W in O)u(O[W].object),delete O[W];delete E[N]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const E=n[S.id];for(const N in E){const O=E[N];for(const W in O)u(O[W].object),delete O[W];delete E[N]}delete n[S.id]}function b(S){for(const E in n){const N=n[E];if(N[S.id]===void 0)continue;const O=N[S.id];for(const W in O)u(O[W].object),delete O[W];delete N[S.id]}}function R(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:h,enableAttribute:f,disableUnusedAttributes:M}}function yg(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,p){p!==0&&(r.drawArraysInstanced(n,c,u,p),e.update(u,n,p))}function o(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];e.update(_,n,1)}function l(c,u,p,m){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<c.length;g++)a(c[g],u[g],m[g]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,m,0,p);let g=0;for(let h=0;h<p;h++)g+=u[h];for(let h=0;h<m.length;h++)e.update(g,n,m[h])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==xn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Kn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!b)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),h=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:v,maxSamples:A}}function Eg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Di,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||n!==0||i;return i=m,n=p.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=u(p,m,0)},this.setState=function(p,m,_){const g=p.clippingPlanes,h=p.clipIntersection,f=p.clipShadows,d=r.get(p);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const M=s?0:n,x=M*4;let v=d.clippingState||null;l.value=v,v=u(g,m,x,_);for(let A=0;A!==x;++A)v[A]=e[A];d.clippingState=v,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,m,_,g){const h=p!==null?p.length:0;let f=null;if(h!==0){if(f=l.value,g!==!0||f===null){const d=_+h*4,M=m.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,v=_;x!==h;++x,v+=4)a.copy(p[x]).applyMatrix4(M,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=h,t.numIntersection=0,f}}function Tg(r){let t=new WeakMap;function e(a,o){return o===Vo?a.mapping=Ar:o===Go&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vo||o===Go)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Np(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bg extends Hh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gr=4,nu=[.125,.215,.35,.446,.526,.582],Oi=20,_o=new bg,iu=new At;let go=null,vo=0,xo=0,Mo=!1;const Ii=(1+Math.sqrt(5))/2,hr=1/Ii,ru=[new F(-Ii,hr,0),new F(Ii,hr,0),new F(-hr,0,Ii),new F(hr,0,Ii),new F(0,Ii,-hr),new F(0,Ii,hr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,vo,xo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:_s,format:xn,colorSpace:Mi,depthBuffer:!1},i=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Ag(s,t,e)}return i}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,i){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(iu),u.toneMapping=hi,u.autoClear=!1;const _=new tc({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Ve(new Ms,_);let h=!1;const f=t.background;f?f.isColor&&(_.color.copy(f),t.background=null,h=!0):(_.color.copy(iu),h=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ys(i,M*x,d>2?x:0,x,x),u.setRenderTarget(i),h&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ar||t.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ru[(i-s-1)%ru.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Ve(this._lodPlanes[i],c),m=c.uniforms,_=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Oi-1),h=s/g,f=isFinite(s)?1+Math.floor(u*h):Oi;f>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Oi}`);const d=[];let M=0;for(let b=0;b<Oi;++b){const R=b/h,y=Math.exp(-R*R/2);d.push(y),b===0?M+=y:b<f&&(M+=2*y)}for(let b=0;b<d.length;b++)d[b]=d[b]/M;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=d,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:x}=this;m.dTheta.value=g,m.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-gr?i-x+gr:0),C=4*(this._cubeSize-v);Ys(e,A,C,3*v,2*v),l.setRenderTarget(e),l.render(p,_o)}}function wg(r){const t=[],e=[],n=[];let i=r;const s=r-gr+1+nu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gr?l=nu[a-r+gr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,p=1+c,m=[u,u,p,u,p,p,u,u,p,p,u,p],_=6,g=6,h=3,f=2,d=1,M=new Float32Array(h*g*_),x=new Float32Array(f*g*_),v=new Float32Array(d*g*_);for(let C=0;C<_;C++){const b=C%3*2/3-1,R=C>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(y,h*g*C),x.set(m,f*g*C);const S=[C,C,C,C,C,C];v.set(S,d*g*C)}const A=new Ie;A.setAttribute("position",new Ee(M,h)),A.setAttribute("uv",new Ee(x,f)),A.setAttribute("faceIndex",new Ee(v,d)),t.push(A),i>gr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(r,t,e){const n=new qi(r,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ag(r,t,e){const n=new Float32Array(Oi),i=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ou(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lu(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vo||l===Go,u=l===Ar||l===Cr;if(c||u){let p=t.get(o);const m=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new su(r)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const _=o.image;return c&&_&&_.height>0||u&&_&&i(_)?(e===null&&(e=new su(r)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Jl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pg(r,t,e,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const h=m.morphAttributes[g];for(let f=0,d=h.length;f<d;f++)t.remove(h[f])}m.removeEventListener("dispose",a),delete i[m.id];const _=s.get(m);_&&(t.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)t.update(m[g],r.ARRAY_BUFFER);const _=p.morphAttributes;for(const g in _){const h=_[g];for(let f=0,d=h.length;f<d;f++)t.update(h[f],r.ARRAY_BUFFER)}}function c(p){const m=[],_=p.index,g=p.attributes.position;let h=0;if(_!==null){const M=_.array;h=_.version;for(let x=0,v=M.length;x<v;x+=3){const A=M[x+0],C=M[x+1],b=M[x+2];m.push(A,C,C,b,b,A)}}else if(g!==void 0){const M=g.array;h=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const A=x+0,C=x+1,b=x+2;m.push(A,C,C,b,b,A)}}else return;const f=new(Ih(m)?zh:Bh)(m,1);f.version=h;const d=s.get(p);d&&t.remove(d),s.set(p,f)}function u(p){const m=s.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function Lg(r,t,e){let n;function i(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,_){r.drawElements(n,_,s,m*a),e.update(_,n,1)}function c(m,_,g){g!==0&&(r.drawElementsInstanced(n,_,s,m*a,g),e.update(_,n,g))}function u(m,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,g);let f=0;for(let d=0;d<g;d++)f+=_[d];e.update(f,n,1)}function p(m,_,g,h){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<m.length;d++)c(m[d]/a,_[d],h[d]);else{f.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,h,0,g);let d=0;for(let M=0;M<g;M++)d+=_[M];for(let M=0;M<h.length;M++)e.update(d,n,h[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function Dg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ig(r,t,e){const n=new WeakMap,i=new ee;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let m=n.get(o);if(m===void 0||m.count!==p){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var _=S;m!==void 0&&m.texture.dispose();const g=o.morphAttributes.position!==void 0,h=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),h===!0&&(v=2),f===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*C*4*p),R=new Nh(b,A,C,p);R.type=Xn,R.needsUpdate=!0;const y=v*4;for(let E=0;E<p;E++){const N=d[E],O=M[E],W=x[E],V=A*C*4*E;for(let X=0;X<N.count;X++){const Y=X*y;g===!0&&(i.fromBufferAttribute(N,X),b[V+Y+0]=i.x,b[V+Y+1]=i.y,b[V+Y+2]=i.z,b[V+Y+3]=0),h===!0&&(i.fromBufferAttribute(O,X),b[V+Y+4]=i.x,b[V+Y+5]=i.y,b[V+Y+6]=i.z,b[V+Y+7]=0),f===!0&&(i.fromBufferAttribute(W,X),b[V+Y+8]=i.x,b[V+Y+9]=i.y,b[V+Y+10]=i.z,b[V+Y+11]=W.itemSize===4?i.w:1)}}m={count:p,texture:R,size:new It(A,C)},n.set(o,m),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const h=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",h),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function Ug(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);if(i.get(p)!==c&&(t.update(p),i.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==c&&(m.update(),i.set(m,c))}return p}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Wh extends Fe{constructor(t,e,n,i,s,a,o,l,c,u=Sr){if(u!==Sr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=Xi),n===void 0&&u===Pr&&(n=Rr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xh=new Fe,cu=new Wh(1,1),qh=new Nh,Yh=new xp,$h=new Vh,uu=[],hu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Br(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ba(r,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ng(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function Fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function Bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function zg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;pu.set(n),r.uniformMatrix2fv(this.addr,!1,pu),ye(e,n)}}function kg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;fu.set(n),r.uniformMatrix3fv(this.addr,!1,fu),ye(e,n)}}function Hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;du.set(n),r.uniformMatrix4fv(this.addr,!1,du),ye(e,n)}}function Vg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function Wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function Xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function qg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function Kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function jg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cu.compareFunction=Dh,s=cu):s=Xh,e.setTexture2D(t||s,i)}function Zg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yh,i)}function Jg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$h,i)}function Qg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qh,i)}function t0(r){switch(r){case 5126:return Ng;case 35664:return Og;case 35665:return Fg;case 35666:return Bg;case 35674:return zg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return $g;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function e0(r,t){r.uniform1fv(this.addr,t)}function n0(r,t){const e=Br(t,this.size,2);r.uniform2fv(this.addr,e)}function i0(r,t){const e=Br(t,this.size,3);r.uniform3fv(this.addr,e)}function r0(r,t){const e=Br(t,this.size,4);r.uniform4fv(this.addr,e)}function s0(r,t){const e=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function a0(r,t){const e=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function o0(r,t){const e=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function l0(r,t){r.uniform1iv(this.addr,t)}function c0(r,t){r.uniform2iv(this.addr,t)}function u0(r,t){r.uniform3iv(this.addr,t)}function h0(r,t){r.uniform4iv(this.addr,t)}function d0(r,t){r.uniform1uiv(this.addr,t)}function f0(r,t){r.uniform2uiv(this.addr,t)}function p0(r,t){r.uniform3uiv(this.addr,t)}function m0(r,t){r.uniform4uiv(this.addr,t)}function _0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Xh,s[a])}function g0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Yh,s[a])}function v0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||$h,s[a])}function x0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||qh,s[a])}function M0(r){switch(r){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}class y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M0(e.type)}}class E0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function mu(r,t){r.seq.push(t),r.map[t.id]=t}function T0(r,t,e){const n=r.name,i=n.length;for(yo.lastIndex=0;;){const s=yo.exec(n),a=yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mu(e,c===void 0?new y0(o,r,t):new S0(o,r,t));break}else{let p=e.map[o];p===void 0&&(p=new E0(o),mu(e,p)),e=p}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);T0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _u(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const b0=37297;let w0=0;function A0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function C0(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let n;switch(t===e?n="":t===ma&&e===pa?n="LinearDisplayP3ToLinearSRGB":t===pa&&e===ma&&(n="LinearSRGBToLinearDisplayP3"),r){case Mi:case Fa:return[n,"LinearTransferOETF"];case En:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function gu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+A0(r.getShaderSource(t),a)}else return i}function R0(r,t){const e=C0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P0(r,t){let e;switch(t){case Yf:e="Linear";break;case $f:e="Reinhard";break;case Kf:e="OptimizedCineon";break;case jf:e="ACESFilmic";break;case Jf:e="AgX";break;case Qf:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function L0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function D0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function jr(r){return r!==""}function vu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(r){return r.replace(U0,O0)}const N0=new Map;function O0(r,t){let e=Nt[t];if(e===void 0){const n=N0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(r){return r.replace(F0,B0)}function B0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===xf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ar:case Cr:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Na:t="ENVMAP_BLENDING_MULTIPLY";break;case Xf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function G0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=z0(e),c=k0(e),u=H0(e),p=V0(e),m=G0(e),_=L0(e),g=D0(s),h=i.createProgram();let f,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),d.length>0&&(d+=`
`)):(f=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),d=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==hi?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),a=Ml(a),a=vu(a,e),a=xu(a,e),o=Ml(o),o=vu(o,e),o=xu(o,e),a=Mu(a),o=Mu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=M+f+a,v=M+d+o,A=_u(i,i.VERTEX_SHADER,x),C=_u(i,i.FRAGMENT_SHADER,v);i.attachShader(h,A),i.attachShader(h,C),e.index0AttributeName!==void 0?i.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h);function b(E){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(h).trim(),O=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(C).trim();let V=!0,X=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,h,A,C);else{const Y=gu(i,A,"vertex"),G=gu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+Y+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(X=!1);X&&(E.diagnostics={runnable:V,programLog:N,vertexShader:{log:O,prefix:f},fragmentShader:{log:W,prefix:d}})}i.deleteShader(A),i.deleteShader(C),R=new oa(i,h),y=I0(i,h)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(h,b0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=A,this.fragmentShader=C,this}let X0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y0(t),e.set(t,n)),n}}class Y0{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}}function $0(r,t,e,n,i,s,a){const o=new Oh,l=new q0,c=new Set,u=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,S,E,N,O){const W=N.fog,V=O.geometry,X=y.isMeshStandardMaterial?N.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),G=Y&&Y.mapping===Oa?Y.image.height:null,st=g[y.type];y.precision!==null&&(_=i.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=lt!==void 0?lt.length:0;let Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let mt,q,Z,dt;if(st){const Wt=wn[st];mt=Wt.vertexShader,q=Wt.fragmentShader}else mt=y.vertexShader,q=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),dt=l.getFragmentShaderID(y);const ut=r.getRenderTarget(),Rt=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,Ft=!!y.map,ie=!!y.matcap,D=!!Y,re=!!y.aoMap,Gt=!!y.lightMap,$t=!!y.bumpMap,vt=!!y.normalMap,he=!!y.displacementMap,St=!!y.emissiveMap,Lt=!!y.metalnessMap,P=!!y.roughnessMap,T=y.anisotropy>0,H=y.clearcoat>0,J=y.dispersion>0,Q=y.iridescence>0,j=y.sheen>0,Mt=y.transmission>0,at=T&&!!y.anisotropyMap,ft=H&&!!y.clearcoatMap,Ut=H&&!!y.clearcoatNormalMap,tt=H&&!!y.clearcoatRoughnessMap,ht=Q&&!!y.iridescenceMap,kt=Q&&!!y.iridescenceThicknessMap,Ct=j&&!!y.sheenColorMap,pt=j&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,Bt=!!y.specularColorMap,oe=!!y.specularIntensityMap,I=Mt&&!!y.transmissionMap,et=Mt&&!!y.thicknessMap,$=!!y.gradientMap,K=!!y.alphaMap,it=y.alphaTest>0,Tt=!!y.alphaHash,Ht=!!y.extensions;let _e=hi;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(_e=r.toneMapping);const be={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:mt,fragmentShader:q,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:ie,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:G,aoMap:re,lightMap:Gt,bumpMap:$t,normalMap:vt,displacementMap:m&&he,emissiveMap:St,normalMapObjectSpace:vt&&y.normalMapType===ip,normalMapTangentSpace:vt&&y.normalMapType===jl,metalnessMap:Lt,roughnessMap:P,anisotropy:T,anisotropyMap:at,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:Ut,clearcoatRoughnessMap:tt,dispersion:J,iridescence:Q,iridescenceMap:ht,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:Dt,specularColorMap:Bt,specularIntensityMap:oe,transmission:Mt,transmissionMap:I,thicknessMap:et,gradientMap:$,opaque:y.transparent===!1&&y.blending===yr&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:it,alphaHash:Tt,combine:y.combine,mapUv:Ft&&h(y.map.channel),aoMapUv:re&&h(y.aoMap.channel),lightMapUv:Gt&&h(y.lightMap.channel),bumpMapUv:$t&&h(y.bumpMap.channel),normalMapUv:vt&&h(y.normalMap.channel),displacementMapUv:he&&h(y.displacementMap.channel),emissiveMapUv:St&&h(y.emissiveMap.channel),metalnessMapUv:Lt&&h(y.metalnessMap.channel),roughnessMapUv:P&&h(y.roughnessMap.channel),anisotropyMapUv:at&&h(y.anisotropyMap.channel),clearcoatMapUv:ft&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&h(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&h(y.sheenRoughnessMap.channel),specularMapUv:Dt&&h(y.specularMap.channel),specularColorMapUv:Bt&&h(y.specularColorMap.channel),specularIntensityMapUv:oe&&h(y.specularIntensityMap.channel),transmissionMapUv:I&&h(y.transmissionMap.channel),thicknessMapUv:et&&h(y.thicknessMap.channel),alphaMapUv:K&&h(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(vt||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ft||K),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const E in y.defines)S.push(E),S.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(M(S,y),x(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),y.push(o.mask)}function v(y){const S=g[y.type];let E;if(S){const N=wn[S];E=Lp.clone(N.uniforms)}else E=y.uniforms;return E}function A(y,S){let E;for(let N=0,O=u.length;N<O;N++){const W=u[N];if(W.cacheKey===S){E=W,++E.usedTimes;break}}return E===void 0&&(E=new W0(r,S,y,s),u.push(E)),E}function C(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function K0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function j0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Su(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Eu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(p,m,_,g,h,f){let d=r[t];return d===void 0?(d={id:p.id,object:p,geometry:m,material:_,groupOrder:g,renderOrder:p.renderOrder,z:h,group:f},r[t]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=_,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=h,d.group=f),t++,d}function o(p,m,_,g,h,f){const d=a(p,m,_,g,h,f);_.transmission>0?n.push(d):_.transparent===!0?i.push(d):e.push(d)}function l(p,m,_,g,h,f){const d=a(p,m,_,g,h,f);_.transmission>0?n.unshift(d):_.transparent===!0?i.unshift(d):e.unshift(d)}function c(p,m){e.length>1&&e.sort(p||j0),n.length>1&&n.sort(m||Su),i.length>1&&i.sort(m||Su)}function u(){for(let p=t,m=r.length;p<m;p++){const _=r[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Z0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Eu,r.set(n,[a])):i>=s.length?(a=new Eu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function J0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new At};break;case"SpotLight":e={position:new F,direction:new F,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Q0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let tv=0;function ev(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nv(r){const t=new J0,e=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new ne,a=new ne;function o(c){let u=0,p=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let _=0,g=0,h=0,f=0,d=0,M=0,x=0,v=0,A=0,C=0,b=0;c.sort(ev);for(let y=0,S=c.length;y<S;y++){const E=c[y],N=E.color,O=E.intensity,W=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=N.r*O,p+=N.g*O,m+=N.b*O;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],O);b++}else if(E.isDirectionalLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=V,n.directionalShadowMatrix[_]=E.shadow.matrix,M++}n.directional[_]=X,_++}else if(E.isSpotLight){const X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(N).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[h]=X;const Y=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,Y.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[h]=Y.matrix,E.castShadow){const G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[h]=G,n.spotShadowMap[h]=V,v++}h++}else if(E.isRectAreaLight){const X=t.get(E);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=X,f++}else if(E.isPointLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){const Y=E.shadow,G=e.get(E);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=X,g++}else if(E.isHemisphereLight){const X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(O),X.groundColor.copy(E.groundColor).multiplyScalar(O),n.hemi[d]=X,d++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=m;const R=n.hash;(R.directionalLength!==_||R.pointLength!==g||R.spotLength!==h||R.rectAreaLength!==f||R.hemiLength!==d||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==b)&&(n.directional.length=_,n.spot.length=h,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,R.directionalLength=_,R.pointLength=g,R.spotLength=h,R.rectAreaLength=f,R.hemiLength=d,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=b,n.version=tv++)}function l(c,u){let p=0,m=0,_=0,g=0,h=0;const f=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const x=c[d];if(x.isDirectionalLight){const v=n.directional[p];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),p++}else if(x.isSpotLight){const v=n.spot[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),_++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const v=n.hemi[h];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),h++}}}return{setup:o,setupView:l,state:n}}function Tu(r){const t=new nv(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function iv(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Tu(r),t.set(i,[o])):s>=a.length?(o=new Tu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class rv extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sv extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lv(r,t,e){let n=new ec;const i=new It,s=new It,a=new ee,o=new rv({depthPacking:np}),l=new sv,c={},u=e.maxTextureSize,p={[_i]:Ge,[Ge]:_i,[An]:An},m=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:av,fragmentShader:ov}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Ve(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let d=this.type;this.render=function(C,b,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=d!==Hn&&this.type===Hn,W=d===Hn&&this.type!==Hn;for(let V=0,X=C.length;V<X;V++){const Y=C[V],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||O===!0||W===!0){const ct=this.type!==Hn?{minFilter:un,magFilter:un}:{};G.map!==null&&G.map.dispose(),G.map=new qi(i.x,i.y,ct),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const lt=G.getViewportCount();for(let ct=0;ct<lt;ct++){const Pt=G.getViewport(ct);a.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),N.viewport(a),G.updateMatrices(Y,ct),n=G.getFrustum(),v(b,R,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&M(G,R),G.needsUpdate=!1}d=this.type,f.needsUpdate=!1,r.setRenderTarget(y,S,E)};function M(C,b){const R=t.update(h);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(i.x,i.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(b,null,R,m,h,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(b,null,R,_,h,null)}function x(C,b,R,y){let S=null;const E=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=R.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=S.uuid,O=b.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let V=W[O];V===void 0&&(V=S.clone(),W[O]=V,b.addEventListener("dispose",A)),S=V}if(S.visible=b.visible,S.wireframe=b.wireframe,y===Hn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=r.properties.get(S);N.light=R}return S}function v(C,b,R,y,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const O=t.update(C),W=C.material;if(Array.isArray(W)){const V=O.groups;for(let X=0,Y=V.length;X<Y;X++){const G=V[X],st=W[G.materialIndex];if(st&&st.visible){const lt=x(C,st,y,S);C.onBeforeShadow(r,C,b,R,O,lt,G),r.renderBufferDirect(R,null,O,lt,C,G),C.onAfterShadow(r,C,b,R,O,lt,G)}}}else if(W.visible){const V=x(C,W,y,S);C.onBeforeShadow(r,C,b,R,O,V,null),r.renderBufferDirect(R,null,O,V,C,null),C.onAfterShadow(r,C,b,R,O,V,null)}}const N=C.children;for(let O=0,W=N.length;O<W;O++)v(N[O],b,R,y,S)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function cv(r){function t(){let I=!1;const et=new ee;let $=null;const K=new ee(0,0,0,0);return{setMask:function(it){$!==it&&!I&&(r.colorMask(it,it,it,it),$=it)},setLocked:function(it){I=it},setClear:function(it,Tt,Ht,_e,be){be===!0&&(it*=_e,Tt*=_e,Ht*=_e),et.set(it,Tt,Ht,_e),K.equals(et)===!1&&(r.clearColor(it,Tt,Ht,_e),K.copy(et))},reset:function(){I=!1,$=null,K.set(-1,0,0,0)}}}function e(){let I=!1,et=null,$=null,K=null;return{setTest:function(it){it?dt(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(it){et!==it&&!I&&(r.depthMask(it),et=it)},setFunc:function(it){if($!==it){switch(it){case Bf:r.depthFunc(r.NEVER);break;case zf:r.depthFunc(r.ALWAYS);break;case kf:r.depthFunc(r.LESS);break;case da:r.depthFunc(r.LEQUAL);break;case Hf:r.depthFunc(r.EQUAL);break;case Vf:r.depthFunc(r.GEQUAL);break;case Gf:r.depthFunc(r.GREATER);break;case Wf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=it}},setLocked:function(it){I=it},setClear:function(it){K!==it&&(r.clearDepth(it),K=it)},reset:function(){I=!1,et=null,$=null,K=null}}}function n(){let I=!1,et=null,$=null,K=null,it=null,Tt=null,Ht=null,_e=null,be=null;return{setTest:function(Wt){I||(Wt?dt(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(Wt){et!==Wt&&!I&&(r.stencilMask(Wt),et=Wt)},setFunc:function(Wt,Nn,Sn){($!==Wt||K!==Nn||it!==Sn)&&(r.stencilFunc(Wt,Nn,Sn),$=Wt,K=Nn,it=Sn)},setOp:function(Wt,Nn,Sn){(Tt!==Wt||Ht!==Nn||_e!==Sn)&&(r.stencilOp(Wt,Nn,Sn),Tt=Wt,Ht=Nn,_e=Sn)},setLocked:function(Wt){I=Wt},setClear:function(Wt){be!==Wt&&(r.clearStencil(Wt),be=Wt)},reset:function(){I=!1,et=null,$=null,K=null,it=null,Tt=null,Ht=null,_e=null,be=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,m=[],_=null,g=!1,h=null,f=null,d=null,M=null,x=null,v=null,A=null,C=new At(0,0,0),b=0,R=!1,y=null,S=null,E=null,N=null,O=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=X>=2);let G=null,st={};const lt=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Pt=new ee().fromArray(lt),mt=new ee().fromArray(ct);function q(I,et,$,K){const it=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(I,Tt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<$;Ht++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,it):r.texImage2D(et+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,it);return Tt}const Z={};Z[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(r.DEPTH_TEST),s.setFunc(da),$t(!1),vt(Dc),dt(r.CULL_FACE),re(ui);function dt(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function ut(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function Rt(I,et){return u[I]!==et?(r.bindFramebuffer(I,et),u[I]=et,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=et),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=et),!0):!1}function Et(I,et){let $=m,K=!1;if(I){$=p.get(et),$===void 0&&($=[],p.set(et,$));const it=I.textures;if($.length!==it.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,Ht=it.length;Tt<Ht;Tt++)$[Tt]=r.COLOR_ATTACHMENT0+Tt;$.length=it.length,K=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,K=!0);K&&r.drawBuffers($)}function Ft(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const ie={[Ni]:r.FUNC_ADD,[yf]:r.FUNC_SUBTRACT,[Sf]:r.FUNC_REVERSE_SUBTRACT};ie[Ef]=r.MIN,ie[Tf]=r.MAX;const D={[bf]:r.ZERO,[wf]:r.ONE,[Af]:r.SRC_COLOR,[ko]:r.SRC_ALPHA,[If]:r.SRC_ALPHA_SATURATE,[Lf]:r.DST_COLOR,[Rf]:r.DST_ALPHA,[Cf]:r.ONE_MINUS_SRC_COLOR,[Ho]:r.ONE_MINUS_SRC_ALPHA,[Df]:r.ONE_MINUS_DST_COLOR,[Pf]:r.ONE_MINUS_DST_ALPHA,[Uf]:r.CONSTANT_COLOR,[Nf]:r.ONE_MINUS_CONSTANT_COLOR,[Of]:r.CONSTANT_ALPHA,[Ff]:r.ONE_MINUS_CONSTANT_ALPHA};function re(I,et,$,K,it,Tt,Ht,_e,be,Wt){if(I===ui){g===!0&&(ut(r.BLEND),g=!1);return}if(g===!1&&(dt(r.BLEND),g=!0),I!==Mf){if(I!==h||Wt!==R){if((f!==Ni||x!==Ni)&&(r.blendEquation(r.FUNC_ADD),f=Ni,x=Ni),Wt)switch(I){case yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,M=null,v=null,A=null,C.set(0,0,0),b=0,h=I,R=Wt}return}it=it||et,Tt=Tt||$,Ht=Ht||K,(et!==f||it!==x)&&(r.blendEquationSeparate(ie[et],ie[it]),f=et,x=it),($!==d||K!==M||Tt!==v||Ht!==A)&&(r.blendFuncSeparate(D[$],D[K],D[Tt],D[Ht]),d=$,M=K,v=Tt,A=Ht),(_e.equals(C)===!1||be!==b)&&(r.blendColor(_e.r,_e.g,_e.b,be),C.copy(_e),b=be),h=I,R=!1}function Gt(I,et){I.side===An?ut(r.CULL_FACE):dt(r.CULL_FACE);let $=I.side===Ge;et&&($=!$),$t($),I.blending===yr&&I.transparent===!1?re(ui):re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),St(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),y=I)}function vt(I){I!==gf?(dt(r.CULL_FACE),I!==S&&(I===Dc?r.cullFace(r.BACK):I===vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),S=I}function he(I){I!==E&&(V&&r.lineWidth(I),E=I)}function St(I,et,$){I?(dt(r.POLYGON_OFFSET_FILL),(N!==et||O!==$)&&(r.polygonOffset(et,$),N=et,O=$)):ut(r.POLYGON_OFFSET_FILL)}function Lt(I){I?dt(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function P(I){I===void 0&&(I=r.TEXTURE0+W-1),G!==I&&(r.activeTexture(I),G=I)}function T(I,et,$){$===void 0&&(G===null?$=r.TEXTURE0+W-1:$=G);let K=st[$];K===void 0&&(K={type:void 0,texture:void 0},st[$]=K),(K.type!==I||K.texture!==et)&&(G!==$&&(r.activeTexture($),G=$),r.bindTexture(I,et||Z[I]),K.type=I,K.texture=et)}function H(){const I=st[G];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){Pt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Pt.copy(I))}function pt(I){mt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),mt.copy(I))}function Dt(I,et){let $=l.get(et);$===void 0&&($=new WeakMap,l.set(et,$));let K=$.get(I);K===void 0&&(K=r.getUniformBlockIndex(et,I.name),$.set(I,K))}function Bt(I,et){const K=l.get(et).get(I);o.get(et)!==K&&(r.uniformBlockBinding(et,K,I.__bindingPointIndex),o.set(et,K))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,st={},u={},p=new WeakMap,m=[],_=null,g=!1,h=null,f=null,d=null,M=null,x=null,v=null,A=null,C=new At(0,0,0),b=0,R=!1,y=null,S=null,E=null,N=null,O=null,Pt.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:dt,disable:ut,bindFramebuffer:Rt,drawBuffers:Et,useProgram:Ft,setBlending:re,setMaterial:Gt,setFlipSided:$t,setCullFace:vt,setLineWidth:he,setPolygonOffset:St,setScissorTest:Lt,activeTexture:P,bindTexture:T,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ht,texImage3D:kt,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:Ut,texStorage3D:tt,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ct,viewport:pt,reset:oe}}function bu(r,t,e,n){const i=uv(n);switch(e){case bh:return r*t;case Ah:return r*t;case Ch:return r*t*2;case Rh:return r*t/i.components*i.byteLength;case Yl:return r*t/i.components*i.byteLength;case Ph:return r*t*2/i.components*i.byteLength;case $l:return r*t*2/i.components*i.byteLength;case wh:return r*t*3/i.components*i.byteLength;case xn:return r*t*4/i.components*i.byteLength;case Kl:return r*t*4/i.components*i.byteLength;case na:case ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ra:case sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Ko:return Math.max(r,16)*Math.max(t,8)/4;case qo:case $o:return Math.max(r,8)*Math.max(t,8)/2;case jo:case Zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case aa:case fl:case pl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Lh:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _l:case gl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uv(r){switch(r){case Kn:case Sh:return{byteLength:1,components:1};case ss:case Eh:case _s:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Xi:case Wl:case Xn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function hv(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return _?new OffscreenCanvas(P,T):ga("canvas")}function h(P,T,H){let J=1;const Q=Lt(P);if((Q.width>H||Q.height>H)&&(J=H/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(J*Q.width),Mt=Math.floor(J*Q.height);p===void 0&&(p=g(j,Mt));const at=T?g(j,Mt):p;return at.width=j,at.height=Mt,at.getContext("2d").drawImage(P,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Mt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==un&&P.minFilter!==gn}function d(P){r.generateMipmap(P)}function M(P,T,H,J,Q=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=T;if(T===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),T===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),T===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),T===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),T===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),T===r.RGBA){const Mt=Q?fa:Kt.getTransfer(J);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=Mt===te?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(P,T){let H;return P?T===null||T===Xi||T===Rr?H=r.DEPTH24_STENCIL8:T===Xn?H=r.DEPTH32F_STENCIL8:T===ss&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xi||T===Rr?H=r.DEPTH_COMPONENT24:T===Xn?H=r.DEPTH_COMPONENT32F:T===ss&&(H=r.DEPTH_COMPONENT16),H}function v(P,T){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),b(T),T.isVideoTexture&&u.delete(T)}function C(P){const T=P.target;T.removeEventListener("dispose",C),y(T)}function b(P){const T=n.get(P);if(T.__webglInit===void 0)return;const H=P.source,J=m.get(H);if(J){const Q=J[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(J).length===0&&m.delete(H)}n.remove(P)}function R(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const H=P.source,J=m.get(H);delete J[T.__cacheKey],a.memory.textures--}function y(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let Q=0;Q<T.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=P.textures;for(let J=0,Q=H.length;J<Q;J++){const j=n.get(H[J]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(P)}let S=0;function E(){S=0}function N(){const P=S;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),S+=1,P}function O(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function W(P,T){const H=n.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,P,T);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+T)}function V(P,T){const H=n.get(P);if(P.version>0&&H.__version!==P.version){mt(H,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+T)}function X(P,T){const H=n.get(P);if(P.version>0&&H.__version!==P.version){mt(H,P,T);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+T)}function Y(P,T){const H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+T)}const G={[Wo]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Xo]:r.MIRRORED_REPEAT},st={[un]:r.NEAREST,[tp]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[$a]:r.LINEAR_MIPMAP_NEAREST,[zi]:r.LINEAR_MIPMAP_LINEAR},lt={[rp]:r.NEVER,[up]:r.ALWAYS,[sp]:r.LESS,[Dh]:r.LEQUAL,[ap]:r.EQUAL,[cp]:r.GEQUAL,[op]:r.GREATER,[lp]:r.NOTEQUAL};function ct(P,T){if(T.type===Xn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===gn||T.magFilter===$a||T.magFilter===ws||T.magFilter===zi||T.minFilter===gn||T.minFilter===$a||T.minFilter===ws||T.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,G[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,G[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,G[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,st[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,st[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===un||T.minFilter!==ws&&T.minFilter!==zi||T.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pt(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const J=T.source;let Q=m.get(J);Q===void 0&&(Q={},m.set(J,Q));const j=O(T);if(j!==P.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[j].usedTimes++;const Mt=Q[P.__cacheKey];Mt!==void 0&&(Q[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(T)),P.__cacheKey=j,P.__webglTexture=Q[j].texture}return H}function mt(P,T,H){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const Q=Pt(P,T),j=T.source;e.bindTexture(J,P.__webglTexture,r.TEXTURE0+H);const Mt=n.get(j);if(j.version!==Mt.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);const at=Kt.getPrimaries(Kt.workingColorSpace),ft=T.colorSpace===ai?null:Kt.getPrimaries(T.colorSpace),Ut=T.colorSpace===ai||at===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let tt=h(T.image,!1,i.maxTextureSize);tt=St(T,tt);const ht=s.convert(T.format,T.colorSpace),kt=s.convert(T.type);let Ct=M(T.internalFormat,ht,kt,T.colorSpace,T.isVideoTexture);ct(J,T);let pt;const Dt=T.mipmaps,Bt=T.isVideoTexture!==!0,oe=Mt.__version===void 0||Q===!0,I=j.dataReady,et=v(T,tt);if(T.isDepthTexture)Ct=x(T.format===Pr,T.type),oe&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Ct,tt.width,tt.height,0,ht,kt,null));else if(T.isDataTexture)if(Dt.length>0){Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,et,Ct,Dt[0].width,Dt[0].height);for(let $=0,K=Dt.length;$<K;$++)pt=Dt[$],Bt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ht,kt,pt.data):e.texImage2D(r.TEXTURE_2D,$,Ct,pt.width,pt.height,0,ht,kt,pt.data);T.generateMipmaps=!1}else Bt?(oe&&e.texStorage2D(r.TEXTURE_2D,et,Ct,tt.width,tt.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,ht,kt,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Ct,tt.width,tt.height,0,ht,kt,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Bt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Ct,Dt[0].width,Dt[0].height,tt.depth);for(let $=0,K=Dt.length;$<K;$++)if(pt=Dt[$],T.format!==xn)if(ht!==null)if(Bt){if(I)if(T.layerUpdates.size>0){const it=bu(pt.width,pt.height,T.format,T.type);for(const Tt of T.layerUpdates){const Ht=pt.data.subarray(Tt*it/pt.data.BYTES_PER_ELEMENT,(Tt+1)*it/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Tt,pt.width,pt.height,1,ht,Ht,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,tt.depth,ht,pt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ct,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,tt.depth,ht,kt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ct,pt.width,pt.height,tt.depth,0,ht,kt,pt.data)}else{Bt&&oe&&e.texStorage2D(r.TEXTURE_2D,et,Ct,Dt[0].width,Dt[0].height);for(let $=0,K=Dt.length;$<K;$++)pt=Dt[$],T.format!==xn?ht!==null?Bt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ht,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ht,kt,pt.data):e.texImage2D(r.TEXTURE_2D,$,Ct,pt.width,pt.height,0,ht,kt,pt.data)}else if(T.isDataArrayTexture)if(Bt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Ct,tt.width,tt.height,tt.depth),I)if(T.layerUpdates.size>0){const $=bu(tt.width,tt.height,T.format,T.type);for(const K of T.layerUpdates){const it=tt.data.subarray(K*$/tt.data.BYTES_PER_ELEMENT,(K+1)*$/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ht,kt,it)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,kt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,ht,kt,tt.data);else if(T.isData3DTexture)Bt?(oe&&e.texStorage3D(r.TEXTURE_3D,et,Ct,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,kt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,ht,kt,tt.data);else if(T.isFramebufferTexture){if(oe)if(Bt)e.texStorage2D(r.TEXTURE_2D,et,Ct,tt.width,tt.height);else{let $=tt.width,K=tt.height;for(let it=0;it<et;it++)e.texImage2D(r.TEXTURE_2D,it,Ct,$,K,0,ht,kt,null),$>>=1,K>>=1}}else if(Dt.length>0){if(Bt&&oe){const $=Lt(Dt[0]);e.texStorage2D(r.TEXTURE_2D,et,Ct,$.width,$.height)}for(let $=0,K=Dt.length;$<K;$++)pt=Dt[$],Bt?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ht,kt,pt):e.texImage2D(r.TEXTURE_2D,$,Ct,ht,kt,pt);T.generateMipmaps=!1}else if(Bt){if(oe){const $=Lt(tt);e.texStorage2D(r.TEXTURE_2D,et,Ct,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,kt,tt)}else e.texImage2D(r.TEXTURE_2D,0,Ct,ht,kt,tt);f(T)&&d(J),Mt.__version=j.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function q(P,T,H){if(T.image.length!==6)return;const J=Pt(P,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const j=n.get(Q);if(Q.version!==j.__version||J===!0){e.activeTexture(r.TEXTURE0+H);const Mt=Kt.getPrimaries(Kt.workingColorSpace),at=T.colorSpace===ai?null:Kt.getPrimaries(T.colorSpace),ft=T.colorSpace===ai||Mt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ut=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!Ut&&!tt?ht[K]=h(T.image[K],!0,i.maxCubemapSize):ht[K]=tt?T.image[K].image:T.image[K],ht[K]=St(T,ht[K]);const kt=ht[0],Ct=s.convert(T.format,T.colorSpace),pt=s.convert(T.type),Dt=M(T.internalFormat,Ct,pt,T.colorSpace),Bt=T.isVideoTexture!==!0,oe=j.__version===void 0||J===!0,I=Q.dataReady;let et=v(T,kt);ct(r.TEXTURE_CUBE_MAP,T);let $;if(Ut){Bt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Dt,kt.width,kt.height);for(let K=0;K<6;K++){$=ht[K].mipmaps;for(let it=0;it<$.length;it++){const Tt=$[it];T.format!==xn?Ct!==null?Bt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Tt.width,Tt.height,Ct,pt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Dt,Tt.width,Tt.height,0,Ct,pt,Tt.data)}}}else{if($=T.mipmaps,Bt&&oe){$.length>0&&et++;const K=Lt(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Dt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Bt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Ct,pt,ht[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,ht[K].width,ht[K].height,0,Ct,pt,ht[K].data);for(let it=0;it<$.length;it++){const Ht=$[it].image[K].image;Bt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Ht.width,Ht.height,Ct,pt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Dt,Ht.width,Ht.height,0,Ct,pt,Ht.data)}}else{Bt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,pt,ht[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,Ct,pt,ht[K]);for(let it=0;it<$.length;it++){const Tt=$[it];Bt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Ct,pt,Tt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Dt,Ct,pt,Tt.image[K])}}}f(T)&&d(r.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Z(P,T,H,J,Q,j){const Mt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),ft=M(H.internalFormat,Mt,at,H.colorSpace);if(!n.get(T).__hasExternalTextures){const tt=Math.max(1,T.width>>j),ht=Math.max(1,T.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,ft,tt,ht,T.depth,0,Mt,at,null):e.texImage2D(Q,j,ft,tt,ht,0,Mt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),vt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,n.get(H).__webglTexture,0,$t(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,n.get(H).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(P,T,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const J=T.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=x(T.stencilBuffer,Q),Mt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=$t(T);vt(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,j,T.width,T.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,j,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,P)}else{const J=T.textures;for(let Q=0;Q<J.length;Q++){const j=J[Q],Mt=s.convert(j.format,j.colorSpace),at=s.convert(j.type),ft=M(j.internalFormat,Mt,at,j.colorSpace),Ut=$t(T);H&&vt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,ft,T.width,T.height):vt(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ft,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const J=n.get(T.depthTexture).__webglTexture,Q=$t(T);if(T.depthTexture.format===Sr)vt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(T.depthTexture.format===Pr)vt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const T=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ut(T.__webglFramebuffer,P)}else if(H){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=r.createRenderbuffer(),dt(T.__webglDepthbuffer[J],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),dt(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(P,T,H){const J=n.get(P);T!==void 0&&Z(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Rt(P)}function Ft(P){const T=P.texture,H=n.get(P),J=n.get(T);P.addEventListener("dispose",C);const Q=P.textures,j=P.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let ft=0;ft<T.mipmaps.length;ft++)H.__webglFramebuffer[at][ft]=r.createFramebuffer()}else H.__webglFramebuffer[at]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)H.__webglFramebuffer[at]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let at=0,ft=Q.length;at<ft;at++){const Ut=n.get(Q[at]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&vt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const ft=Q[at];H.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Ut=s.convert(ft.format,ft.colorSpace),tt=s.convert(ft.type),ht=M(ft.internalFormat,Ut,tt,ft.colorSpace,P.isXRRenderTarget===!0),kt=$t(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,ht,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,H.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ct(r.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Z(H.__webglFramebuffer[at][ft],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else Z(H.__webglFramebuffer[at],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(T)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ft=Q.length;at<ft;at++){const Ut=Q[at],tt=n.get(Ut);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),ct(r.TEXTURE_2D,Ut),Z(H.__webglFramebuffer,P,Ut,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),f(Ut)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),ct(at,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Z(H.__webglFramebuffer[ft],P,T,r.COLOR_ATTACHMENT0,at,ft);else Z(H.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,at,0);f(T)&&d(at),e.unbindTexture()}P.depthBuffer&&Rt(P)}function ie(P){const T=P.textures;for(let H=0,J=T.length;H<J;H++){const Q=T[H];if(f(Q)){const j=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Mt=n.get(Q).__webglTexture;e.bindTexture(j,Mt),d(j),e.unbindTexture()}}}const D=[],re=[];function Gt(P){if(P.samples>0){if(vt(P)===!1){const T=P.textures,H=P.width,J=P.height;let Q=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(P),at=T.length>1;if(at)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Ut=n.get(T[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,Q,r.NEAREST),l===!0&&(D.length=0,re.length=0,D.push(r.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(j),re.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Ut=n.get(T[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function $t(P){return Math.min(i.maxSamples,P.samples)}function vt(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function he(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function St(P,T){const H=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Mi&&H!==ai&&(Kt.getTransfer(H)===te?(J!==xn||Q!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Et,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=vt}function dv(r,t){function e(n,i=ai){let s;const a=Kt.getTransfer(i);if(n===Kn)return r.UNSIGNED_BYTE;if(n===Xl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return r.BYTE;if(n===Eh)return r.SHORT;if(n===ss)return r.UNSIGNED_SHORT;if(n===Wl)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===_s)return r.HALF_FLOAT;if(n===bh)return r.ALPHA;if(n===wh)return r.RGB;if(n===xn)return r.RGBA;if(n===Ah)return r.LUMINANCE;if(n===Ch)return r.LUMINANCE_ALPHA;if(n===Sr)return r.DEPTH_COMPONENT;if(n===Pr)return r.DEPTH_STENCIL;if(n===Rh)return r.RED;if(n===Yl)return r.RED_INTEGER;if(n===Ph)return r.RG;if(n===$l)return r.RG_INTEGER;if(n===Kl)return r.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===$o||n===Ko)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Zo||n===Jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jo||n===Zo)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===fl||n===pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===ml||n===_l||n===gl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class fv extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const h of t.hand.values()){const f=e.getJointPose(h,n),d=this._getHandJoint(c,h);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=u.position.distanceTo(p.position),_=.02,g=.005;c.inputState.pinching&&m>_+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=_-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:mv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vv extends Fr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,m=null,_=null,g=null;const h=new gv,f=e.getContextAttributes();let d=null,M=null;const x=[],v=[],A=new It;let C=null;const b=new ke;b.layers.enable(1),b.viewport=new ee;const R=new ke;R.layers.enable(2),R.viewport=new ee;const y=[b,R],S=new fv;S.layers.enable(1),S.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=x[q];return Z===void 0&&(Z=new So,x[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=x[q];return Z===void 0&&(Z=new So,x[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=x[q];return Z===void 0&&(Z=new So,x[q]=Z),Z.getHandSpace()};function O(q){const Z=v.indexOf(q.inputSource);if(Z===-1)return;const dt=x[Z];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||a),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let q=0;q<x.length;q++){const Z=v[q];Z!==null&&(v[q]=null,x[q].disconnect(Z))}E=null,N=null,h.reset(),t.setRenderTarget(d),_=null,m=null,p=null,i=null,M=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),M=new qi(_.framebufferWidth,_.framebufferHeight,{format:xn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,dt=null,ut=null;f.depth&&(ut=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=f.stencil?Pr:Sr,dt=f.stencil?Rr:Xi);const Rt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};p=new XRWebGLBinding(i,e),m=p.createProjectionLayer(Rt),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new qi(m.textureWidth,m.textureHeight,{format:xn,type:Kn,depthTexture:new Wh(m.textureWidth,m.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function V(q){for(let Z=0;Z<q.removed.length;Z++){const dt=q.removed[Z],ut=v.indexOf(dt);ut>=0&&(v[ut]=null,x[ut].disconnect(dt))}for(let Z=0;Z<q.added.length;Z++){const dt=q.added[Z];let ut=v.indexOf(dt);if(ut===-1){for(let Et=0;Et<x.length;Et++)if(Et>=v.length){v.push(dt),ut=Et;break}else if(v[Et]===null){v[Et]=dt,ut=Et;break}if(ut===-1)break}const Rt=x[ut];Rt&&Rt.connect(dt)}}const X=new F,Y=new F;function G(q,Z,dt){X.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const ut=X.distanceTo(Y),Rt=Z.projectionMatrix.elements,Et=dt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),ie=Rt[14]/(Rt[10]+1),D=(Rt[9]+1)/Rt[5],re=(Rt[9]-1)/Rt[5],Gt=(Rt[8]-1)/Rt[0],$t=(Et[8]+1)/Et[0],vt=Ft*Gt,he=Ft*$t,St=ut/(-Gt+$t),Lt=St*-Gt;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=Ft+St,T=ie+St,H=vt-Lt,J=he+(ut-Lt),Q=D*ie/T*P,j=re*ie/T*P;q.projectionMatrix.makePerspective(H,J,Q,j,P,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function st(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;h.texture!==null&&(q.near=h.depthNear,q.far=h.depthFar),S.near=R.near=b.near=q.near,S.far=R.far=b.far=q.far,(E!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,N=S.far,b.near=E,b.far=N,R.near=E,R.far=N,b.updateProjectionMatrix(),R.updateProjectionMatrix(),q.updateProjectionMatrix());const Z=q.parent,dt=S.cameras;st(S,Z);for(let ut=0;ut<dt.length;ut++)st(dt[ut],Z);dt.length===2?G(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),lt(q,S,Z)};function lt(q,Z,dt){dt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(S)};let ct=null;function Pt(q,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const dt=u.views;_!==null&&(t.setRenderTargetFramebuffer(M,_.framebuffer),t.setRenderTarget(M));let ut=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,ut=!0);for(let Et=0;Et<dt.length;Et++){const Ft=dt[Et];let ie=null;if(_!==null)ie=_.getViewport(Ft);else{const re=p.getViewSubImage(m,Ft);ie=re.viewport,Et===0&&(t.setRenderTargetTextures(M,re.colorTexture,m.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(M))}let D=y[Et];D===void 0&&(D=new ke,D.layers.enable(Et),D.viewport=new ee,y[Et]=D),D.matrix.fromArray(Ft.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ft.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ie.x,ie.y,ie.width,ie.height),Et===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ut===!0&&S.cameras.push(D)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Et=p.getDepthInformation(dt[0]);Et&&Et.isValid&&Et.texture&&h.init(t,Et,i.renderState)}}for(let dt=0;dt<x.length;dt++){const ut=v[dt],Rt=x[dt];ut!==null&&Rt!==void 0&&Rt.update(ut,Z,c||a)}ct&&ct(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const mt=new Gh;mt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const Ci=new yn,xv=new ne;function Mv(r,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,kh(r)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,M,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),p(f,d)):d.isMeshPhongMaterial?(s(f,d),u(f,d)):d.isMeshStandardMaterial?(s(f,d),m(f,d),d.isMeshPhysicalMaterial&&_(f,d,v)):d.isMeshMatcapMaterial?(s(f,d),g(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),h(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,M,x):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ge&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ge&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const M=t.get(d),x=M.envMap,v=M.envMapRotation;x&&(f.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),f.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Ci)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,M,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*M,f.scale.value=x*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function m(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function _(f,d,M){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function h(f,d){const M=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",f));const A=x.program;n.updateUBOMapping(M,A);const C=t.render.frame;s[M.id]!==C&&(m(M),s[M.id]=C)}function u(M){const x=p();M.__bindingPointIndex=x;const v=r.createBuffer(),A=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const x=i[M.id],v=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,b=v.length;C<b;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,S=R.length;y<S;y++){const E=R[y];if(_(E,C,y,A)===!0){const N=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let V=0;V<O.length;V++){const X=O[V],Y=h(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,N+W,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(M,x,v,A){const C=M.value,b=x+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(M){const x=M.uniforms;let v=0;const A=16;for(let b=0,R=x.length;b<R;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,E=y.length;S<E;S++){const N=y[S],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,V=O.length;W<V;W++){const X=O[W],Y=h(X),G=v%A;G!==0&&A-G<Y.boundary&&(v+=A-G),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const C=v%A;return C>0&&(v+=A-C),M.__size=v,M.__cache={},this}function h(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){const x=M.target;x.removeEventListener("dispose",f);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Kh{constructor(t={}){const{canvas:e=dp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let h=null,f=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=hi,this.toneMappingExposure=1;const x=this;let v=!1,A=0,C=0,b=null,R=-1,y=null;const S=new ee,E=new ee;let N=null;const O=new At(0);let W=0,V=e.width,X=e.height,Y=1,G=null,st=null;const lt=new ee(0,0,V,X),ct=new ee(0,0,V,X);let Pt=!1;const mt=new ec;let q=!1,Z=!1;const dt=new ne,ut=new F,Rt=new ee,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ie(){return b===null?Y:1}let D=n;function re(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){const U="webgl2";if(D=re(U,w),D===null)throw re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,$t,vt,he,St,Lt,P,T,H,J,Q,j,Mt,at,ft,Ut,tt,ht,kt,Ct,pt,Dt,Bt,oe;function I(){Gt=new Rg(D),Gt.init(),Dt=new dv(D,Gt),$t=new Sg(D,Gt,t,Dt),vt=new cv(D),he=new Dg(D),St=new K0,Lt=new hv(D,Gt,vt,St,$t,Dt,he),P=new Tg(x),T=new Cg(x),H=new Bp(D),Bt=new Mg(D,H),J=new Pg(D,H,he,Bt),Q=new Ug(D,J,H,he),kt=new Ig(D,$t,Lt),Ut=new Eg(St),j=new $0(x,P,T,Gt,$t,Bt,Ut),Mt=new Mv(x,St),at=new Z0,ft=new iv(Gt),ht=new xg(x,P,T,vt,Q,m,l),tt=new lv(x,Q,$t),oe=new yv(D,he,$t,vt),Ct=new yg(D,Gt,he),pt=new Lg(D,Gt,he),he.programs=j.programs,x.capabilities=$t,x.extensions=Gt,x.properties=St,x.renderLists=at,x.shadowMap=tt,x.state=vt,x.info=he}I();const et=new vv(x,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(V,X,!1))},this.getSize=function(w){return w.set(V,X)},this.setSize=function(w,U,z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,X=U,e.width=Math.floor(w*Y),e.height=Math.floor(U*Y),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(V*Y,X*Y).floor()},this.setDrawingBufferSize=function(w,U,z){V=w,X=U,Y=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,U,z,k){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,U,z,k),vt.viewport(S.copy(lt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,U,z,k){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,U,z,k),vt.scissor(E.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(w){vt.setScissorTest(Pt=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(w=!0,U=!0,z=!0){let k=0;if(w){let B=!1;if(b!==null){const nt=b.texture.format;B=nt===Kl||nt===$l||nt===Yl}if(B){const nt=b.texture.type,ot=nt===Kn||nt===Xi||nt===ss||nt===Rr||nt===Xl||nt===ql,_t=ht.getClearColor(),gt=ht.getClearAlpha(),bt=_t.r,wt=_t.g,yt=_t.b;ot?(_[0]=bt,_[1]=wt,_[2]=yt,_[3]=gt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=bt,g[1]=wt,g[2]=yt,g[3]=gt,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",it,!1),at.dispose(),ft.dispose(),St.dispose(),P.dispose(),T.dispose(),Q.dispose(),Bt.dispose(),oe.dispose(),j.dispose(),et.dispose(),et.removeEventListener("sessionstart",Sn),et.removeEventListener("sessionend",bc),Si.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=he.autoReset,U=tt.enabled,z=tt.autoUpdate,k=tt.needsUpdate,B=tt.type;I(),he.autoReset=w,tt.enabled=U,tt.autoUpdate=z,tt.needsUpdate=k,tt.type=B}function it(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){const U=w.target;U.removeEventListener("dispose",Tt),Ht(U)}function Ht(w){_e(w),St.remove(w)}function _e(w){const U=St.get(w).programs;U!==void 0&&(U.forEach(function(z){j.releaseProgram(z)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,k,B,nt){U===null&&(U=Et);const ot=B.isMesh&&B.matrixWorld.determinant()<0,_t=ff(w,U,z,k,B);vt.setMaterial(k,ot);let gt=z.index,bt=1;if(k.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;bt=2}const wt=z.drawRange,yt=z.attributes.position;let Xt=wt.start*bt,de=(wt.start+wt.count)*bt;nt!==null&&(Xt=Math.max(Xt,nt.start*bt),de=Math.min(de,(nt.start+nt.count)*bt)),gt!==null?(Xt=Math.max(Xt,0),de=Math.min(de,gt.count)):yt!=null&&(Xt=Math.max(Xt,0),de=Math.min(de,yt.count));const fe=de-Xt;if(fe<0||fe===1/0)return;Bt.setup(B,k,_t,z,gt);let Ke,qt=Ct;if(gt!==null&&(Ke=H.get(gt),qt=pt,qt.setIndex(Ke)),B.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*ie()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(B.isLine){let xt=k.linewidth;xt===void 0&&(xt=1),vt.setLineWidth(xt*ie()),B.isLineSegments?qt.setMode(D.LINES):B.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else B.isPoints?qt.setMode(D.POINTS):B.isSprite&&qt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)qt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))qt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const xt=B._multiDrawStarts,we=B._multiDrawCounts,Yt=B._multiDrawCount,fn=gt?H.get(gt).bytesPerElement:1,$i=St.get(k).currentProgram.getUniforms();for(let je=0;je<Yt;je++)$i.setValue(D,"_gl_DrawID",je),qt.render(xt[je]/fn,we[je])}else if(B.isInstancedMesh)qt.renderInstances(Xt,fe,B.count);else if(z.isInstancedBufferGeometry){const xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,xt);qt.renderInstances(Xt,fe,we)}else qt.render(Xt,fe)};function be(w,U,z){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,bs(w,U,z),w.side=_i,w.needsUpdate=!0,bs(w,U,z),w.side=An):bs(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),f=ft.get(z),f.init(U),M.push(f),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==z&&w.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const k=new Set;return w.traverse(function(B){const nt=B.material;if(nt)if(Array.isArray(nt))for(let ot=0;ot<nt.length;ot++){const _t=nt[ot];be(_t,z,B),k.add(_t)}else be(nt,z,B),k.add(nt)}),M.pop(),f=null,k},this.compileAsync=function(w,U,z=null){const k=this.compile(w,U,z);return new Promise(B=>{function nt(){if(k.forEach(function(ot){St.get(ot).currentProgram.isReady()&&k.delete(ot)}),k.size===0){B(w);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Wt=null;function Nn(w){Wt&&Wt(w)}function Sn(){Si.stop()}function bc(){Si.start()}const Si=new Gh;Si.setAnimationLoop(Nn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){Wt=w,et.setAnimationLoop(w),w===null?Si.stop():Si.start()},et.addEventListener("sessionstart",Sn),et.addEventListener("sessionend",bc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,b),f=ft.get(w,M.length),f.init(U),M.push(f),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),mt.setFromProjectionMatrix(dt),Z=this.localClippingEnabled,q=Ut.init(this.clippingPlanes,Z),h=at.get(w,d.length),h.init(),d.push(h),et.enabled===!0&&et.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Wa(nt,U,-1/0,x.sortObjects)}Wa(w,U,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(G,st),Ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ft&&ht.addToRenderList(h,w),this.info.render.frame++,q===!0&&Ut.beginShadows();const z=f.state.shadowsArray;tt.render(z,w,U),q===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=h.opaque,B=h.transmissive;if(f.setupLights(),U.isArrayCamera){const nt=U.cameras;if(B.length>0)for(let ot=0,_t=nt.length;ot<_t;ot++){const gt=nt[ot];Ac(k,B,w,gt)}Ft&&ht.render(w);for(let ot=0,_t=nt.length;ot<_t;ot++){const gt=nt[ot];wc(h,w,gt,gt.viewport)}}else B.length>0&&Ac(k,B,w,U),Ft&&ht.render(w),wc(h,w,U);b!==null&&(Lt.updateMultisampleRenderTarget(b),Lt.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,U),Bt.resetDefaultState(),R=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],q===!0&&Ut.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Wa(w,U,z,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){k&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const ot=Q.update(w),_t=w.material;_t.visible&&h.push(w,ot,_t,z,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){const ot=Q.update(w),_t=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Rt.copy(ot.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(_t)){const gt=ot.groups;for(let bt=0,wt=gt.length;bt<wt;bt++){const yt=gt[bt],Xt=_t[yt.materialIndex];Xt&&Xt.visible&&h.push(w,ot,Xt,z,Rt.z,yt)}}else _t.visible&&h.push(w,ot,_t,z,Rt.z,null)}}const nt=w.children;for(let ot=0,_t=nt.length;ot<_t;ot++)Wa(nt[ot],U,z,k)}function wc(w,U,z,k){const B=w.opaque,nt=w.transmissive,ot=w.transparent;f.setupLightsView(z),q===!0&&Ut.setGlobalState(x.clippingPlanes,z),k&&vt.viewport(S.copy(k)),B.length>0&&Ts(B,U,z),nt.length>0&&Ts(nt,U,z),ot.length>0&&Ts(ot,U,z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ac(w,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new qi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?_s:Kn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[k.id],ot=k.viewport||S;nt.setSize(ot.z,ot.w);const _t=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Ft?ht.render(z):x.clear();const gt=x.toneMapping;x.toneMapping=hi;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),q===!0&&Ut.setGlobalState(x.clippingPlanes,k),Ts(w,z,k),Lt.updateMultisampleRenderTarget(nt),Lt.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,Xt=U.length;yt<Xt;yt++){const de=U[yt],fe=de.object,Ke=de.geometry,qt=de.material,xt=de.group;if(qt.side===An&&fe.layers.test(k.layers)){const we=qt.side;qt.side=Ge,qt.needsUpdate=!0,Cc(fe,z,k,Ke,qt,xt),qt.side=we,qt.needsUpdate=!0,wt=!0}}wt===!0&&(Lt.updateMultisampleRenderTarget(nt),Lt.updateRenderTargetMipmap(nt))}x.setRenderTarget(_t),x.setClearColor(O,W),bt!==void 0&&(k.viewport=bt),x.toneMapping=gt}function Ts(w,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let B=0,nt=w.length;B<nt;B++){const ot=w[B],_t=ot.object,gt=ot.geometry,bt=k===null?ot.material:k,wt=ot.group;_t.layers.test(z.layers)&&Cc(_t,U,z,gt,bt,wt)}}function Cc(w,U,z,k,B,nt){w.onBeforeRender(x,U,z,k,B,nt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,x.renderBufferDirect(z,U,k,B,w,nt),B.side=_i,B.needsUpdate=!0,x.renderBufferDirect(z,U,k,B,w,nt),B.side=An):x.renderBufferDirect(z,U,k,B,w,nt),w.onAfterRender(x,U,z,k,B,nt)}function bs(w,U,z){U.isScene!==!0&&(U=Et);const k=St.get(w),B=f.state.lights,nt=f.state.shadowsArray,ot=B.state.version,_t=j.getParameters(w,B.state,nt,U,z),gt=j.getProgramCacheKey(_t);let bt=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?T:P).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,bt===void 0&&(w.addEventListener("dispose",Tt),bt=new Map,k.programs=bt);let wt=bt.get(gt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===ot)return Pc(w,_t),wt}else _t.uniforms=j.getUniforms(w),w.onBeforeCompile(_t,x),wt=j.acquireProgram(_t,gt),bt.set(gt,wt),k.uniforms=_t.uniforms;const yt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=Ut.uniform),Pc(w,_t),k.needsLights=mf(w),k.lightsStateVersion=ot,k.needsLights&&(yt.ambientLightColor.value=B.state.ambient,yt.lightProbe.value=B.state.probe,yt.directionalLights.value=B.state.directional,yt.directionalLightShadows.value=B.state.directionalShadow,yt.spotLights.value=B.state.spot,yt.spotLightShadows.value=B.state.spotShadow,yt.rectAreaLights.value=B.state.rectArea,yt.ltc_1.value=B.state.rectAreaLTC1,yt.ltc_2.value=B.state.rectAreaLTC2,yt.pointLights.value=B.state.point,yt.pointLightShadows.value=B.state.pointShadow,yt.hemisphereLights.value=B.state.hemi,yt.directionalShadowMap.value=B.state.directionalShadowMap,yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,yt.spotShadowMap.value=B.state.spotShadowMap,yt.spotLightMatrix.value=B.state.spotLightMatrix,yt.spotLightMap.value=B.state.spotLightMap,yt.pointShadowMap.value=B.state.pointShadowMap,yt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function Rc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=oa.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Pc(w,U){const z=St.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ff(w,U,z,k,B){U.isScene!==!0&&(U=Et),Lt.resetTextureUnits();const nt=U.fog,ot=k.isMeshStandardMaterial?U.environment:null,_t=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mi,gt=(k.isMeshStandardMaterial?T:P).get(k.envMap||ot),bt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,wt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,de=!!z.morphAttributes.color;let fe=hi;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ke=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qt=Ke!==void 0?Ke.length:0,xt=St.get(k),we=f.state.lights;if(q===!0&&(Z===!0||w!==y)){const on=w===y&&k.id===R;Ut.setState(k,w,on)}let Yt=!1;k.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==we.state.version||xt.outputColorSpace!==_t||B.isBatchedMesh&&xt.batching===!1||!B.isBatchedMesh&&xt.batching===!0||B.isBatchedMesh&&xt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&xt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&xt.instancing===!1||!B.isInstancedMesh&&xt.instancing===!0||B.isSkinnedMesh&&xt.skinning===!1||!B.isSkinnedMesh&&xt.skinning===!0||B.isInstancedMesh&&xt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&xt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&xt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&xt.instancingMorph===!1&&B.morphTexture!==null||xt.envMap!==gt||k.fog===!0&&xt.fog!==nt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Ut.numPlanes||xt.numIntersection!==Ut.numIntersection)||xt.vertexAlphas!==bt||xt.vertexTangents!==wt||xt.morphTargets!==yt||xt.morphNormals!==Xt||xt.morphColors!==de||xt.toneMapping!==fe||xt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,xt.__version=k.version);let fn=xt.currentProgram;Yt===!0&&(fn=bs(k,U,B));let $i=!1,je=!1,Xa=!1;const ge=fn.getUniforms(),Qn=xt.uniforms;if(vt.useProgram(fn.program)&&($i=!0,je=!0,Xa=!0),k.id!==R&&(R=k.id,je=!0),$i||y!==w){ge.setValue(D,"projectionMatrix",w.projectionMatrix),ge.setValue(D,"viewMatrix",w.matrixWorldInverse);const on=ge.map.cameraPosition;on!==void 0&&on.setValue(D,ut.setFromMatrixPosition(w.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,je=!0,Xa=!0)}if(B.isSkinnedMesh){ge.setOptional(D,B,"bindMatrix"),ge.setOptional(D,B,"bindMatrixInverse");const on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ge.setValue(D,"boneTexture",on.boneTexture,Lt))}B.isBatchedMesh&&(ge.setOptional(D,B,"batchingTexture"),ge.setValue(D,"batchingTexture",B._matricesTexture,Lt),ge.setOptional(D,B,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",B._indirectTexture,Lt),ge.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",B._colorsTexture,Lt));const qa=z.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&kt.update(B,z,fn),(je||xt.receiveShadow!==B.receiveShadow)&&(xt.receiveShadow=B.receiveShadow,ge.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qn.envMap.value=gt,Qn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Qn.envMapIntensity.value=U.environmentIntensity),je&&(ge.setValue(D,"toneMappingExposure",x.toneMappingExposure),xt.needsLights&&pf(Qn,Xa),nt&&k.fog===!0&&Mt.refreshFogUniforms(Qn,nt),Mt.refreshMaterialUniforms(Qn,k,Y,X,f.state.transmissionRenderTarget[w.id]),oa.upload(D,Rc(xt),Qn,Lt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(oa.upload(D,Rc(xt),Qn,Lt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(D,"center",B.center),ge.setValue(D,"modelViewMatrix",B.modelViewMatrix),ge.setValue(D,"normalMatrix",B.normalMatrix),ge.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const on=k.uniformsGroups;for(let Ya=0,_f=on.length;Ya<_f;Ya++){const Lc=on[Ya];oe.update(Lc,fn),oe.bind(Lc,fn)}}return fn}function pf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function mf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,U,z){St.get(w.texture).__webglTexture=U,St.get(w.depthTexture).__webglTexture=z;const k=St.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=St.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){b=w,A=U,C=z;let k=!0,B=null,nt=!1,ot=!1;if(w){const gt=St.get(w);gt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):gt.__webglFramebuffer===void 0?Lt.setupRenderTarget(w):gt.__hasExternalTextures&&Lt.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);const bt=w.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ot=!0);const wt=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?B=wt[U][z]:B=wt[U],nt=!0):w.samples>0&&Lt.useMultisampledRTT(w)===!1?B=St.get(w).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[z]:B=wt,S.copy(w.viewport),E.copy(w.scissor),N=w.scissorTest}else S.copy(lt).multiplyScalar(Y).floor(),E.copy(ct).multiplyScalar(Y).floor(),N=Pt;if(vt.bindFramebuffer(D.FRAMEBUFFER,B)&&k&&vt.drawBuffers(w,B),vt.viewport(S),vt.scissor(E),vt.setScissorTest(N),nt){const gt=St.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,z)}else if(ot){const gt=St.get(w.texture),bt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,bt)}R=-1},this.readRenderTargetPixels=function(w,U,z,k,B,nt,ot){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){vt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const gt=w.texture,bt=gt.format,wt=gt.type;if(!$t.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&z>=0&&z<=w.height-B&&D.readPixels(U,z,k,B,Dt.convert(bt),Dt.convert(wt),nt)}finally{const gt=b!==null?St.get(b).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,k,B,nt,ot){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){vt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const gt=w.texture,bt=gt.format,wt=gt.type;if(!$t.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&z>=0&&z<=w.height-B){const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(U,z,k,B,Dt.convert(bt),Dt.convert(wt),0),D.flush();const Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await fp(D,Xt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt)}finally{D.deleteBuffer(yt),D.deleteSync(Xt)}return nt}}finally{const gt=b!==null?St.get(b).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-z),B=Math.floor(w.image.width*k),nt=Math.floor(w.image.height*k),ot=U!==null?U.x:0,_t=U!==null?U.y:0;Lt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ot,_t,B,nt),vt.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,k=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],B=arguments[3]||0,z=null);let nt,ot,_t,gt,bt,wt;z!==null?(nt=z.max.x-z.min.x,ot=z.max.y-z.min.y,_t=z.min.x,gt=z.min.y):(nt=w.image.width,ot=w.image.height,_t=0,gt=0),k!==null?(bt=k.x,wt=k.y):(bt=0,wt=0);const yt=Dt.convert(U.format),Xt=Dt.convert(U.type);Lt.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const de=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ke=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),xt=D.getParameter(D.UNPACK_SKIP_IMAGES),we=w.isCompressedTexture?w.mipmaps[B]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,gt),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,bt,wt,nt,ot,yt,Xt,we.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,bt,wt,we.width,we.height,yt,we.data):D.texSubImage2D(D.TEXTURE_2D,B,bt,wt,nt,ot,yt,Xt,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,de),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xt),B===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,k=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],B=arguments[4]||0);let nt,ot,_t,gt,bt,wt,yt,Xt,de;const fe=w.isCompressedTexture?w.mipmaps[B]:w.image;z!==null?(nt=z.max.x-z.min.x,ot=z.max.y-z.min.y,_t=z.max.z-z.min.z,gt=z.min.x,bt=z.min.y,wt=z.min.z):(nt=fe.width,ot=fe.height,_t=fe.depth,gt=0,bt=0,wt=0),k!==null?(yt=k.x,Xt=k.y,de=k.z):(yt=0,Xt=0,de=0);const Ke=Dt.convert(U.format),qt=Dt.convert(U.type);let xt;if(U.isData3DTexture)Lt.setTexture3D(U,0),xt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Lt.setTexture2DArray(U,0),xt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),Yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),$i=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gt),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wt),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(xt,B,yt,Xt,de,nt,ot,_t,Ke,qt,fe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(xt,B,yt,Xt,de,nt,ot,_t,Ke,fe.data):D.texSubImage3D(xt,B,yt,Xt,de,nt,ot,_t,Ke,qt,fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$i),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),B===0&&U.generateMipmaps&&D.generateMipmap(xt),vt.unbindTexture()},this.initRenderTarget=function(w){St.get(w).__webglFramebuffer===void 0&&Lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Lt.setTextureCube(w,0):w.isData3DTexture?Lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Lt.setTexture2DArray(w,0):Lt.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,vt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zl?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Fa?"display-p3":"srgb"}}class ic{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jh extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new F;class va{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class as extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let dr;const Wr=new F,fr=new F,pr=new F,mr=new It,Xr=new It,Zh=new ne,$s=new F,qr=new F,Ks=new F,wu=new It,Eo=new It,Au=new It;class xa extends Ae{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sv(e,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new va(n,3,0,!1)),dr.setAttribute("uv",new va(n,2,3,!1))}this.geometry=dr,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;js($s.set(-.5,-.5,0),pr,a,fr,i,s),js(qr.set(.5,-.5,0),pr,a,fr,i,s),js(Ks.set(.5,.5,0),pr,a,fr,i,s),wu.set(0,0),Eo.set(1,0),Au.set(1,1);let o=t.ray.intersectTriangle($s,qr,Ks,!1,Wr);if(o===null&&(js(qr.set(-.5,.5,0),pr,a,fr,i,s),Eo.set(0,1),o=t.ray.intersectTriangle($s,Ks,qr,!1,Wr),o===null))return;const l=t.ray.origin.distanceTo(Wr);l<t.near||l>t.far||e.push({distance:l,point:Wr.clone(),uv:vn.getInterpolation(Wr,$s,qr,Ks,wu,Eo,Au,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(r,t,e,n,i,s){mr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Xr.x=s*mr.x-i*mr.y,Xr.y=i*mr.x+s*mr.y):Xr.copy(mr),r.copy(t),r.x+=Xr.x,r.y+=Xr.y,r.applyMatrix4(Zh)}class Jh extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ma=new F,ya=new F,Cu=new ne,Yr=new Ql,Zs=new xs,To=new F,Ru=new F;class Ev extends Ae{constructor(t=new Ie,e=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ma.fromBufferAttribute(e,i-1),ya.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ma.distanceTo(ya);t.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;Cu.copy(i).invert(),Yr.copy(t.ray).applyMatrix4(Cu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,m=n.attributes.position;if(u!==null){const _=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let h=_,f=g-1;h<f;h+=c){const d=u.getX(h),M=u.getX(h+1),x=Js(this,t,Yr,l,d,M);x&&e.push(x)}if(this.isLineLoop){const h=u.getX(g-1),f=u.getX(_),d=Js(this,t,Yr,l,h,f);d&&e.push(d)}}else{const _=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let h=_,f=g-1;h<f;h+=c){const d=Js(this,t,Yr,l,h,h+1);d&&e.push(d)}if(this.isLineLoop){const h=Js(this,t,Yr,l,g-1,_);h&&e.push(h)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Js(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Ma.fromBufferAttribute(a,i),ya.fromBufferAttribute(a,s),e.distanceSqToSegment(Ma,ya,To,Ru)>n)return;To.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(To);if(!(l<t.near||l>t.far))return{distance:l,point:Ru.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Sa extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pu=new ne,yl=new Ql,Qs=new xs,ta=new F;class Ea extends Ae{constructor(t=new Ie,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,t.ray.intersectsSphere(Qs)===!1)return;Pu.copy(i).invert(),yl.copy(t.ray).applyMatrix4(Pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=m,h=_;g<h;g++){const f=c.getX(g);ta.fromBufferAttribute(p,f),Lu(ta,f,l,i,t,e,this)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=m,h=_;g<h;g++)ta.fromBufferAttribute(p,g),Lu(ta,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lu(r,t,e,n,i,s,a){const o=yl.distanceSqToPoint(r);if(o<e){const l=new F;yl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class zr extends Fe{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends Ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],p=new F,m=new F,_=[],g=[],h=[],f=[];for(let d=0;d<=n;d++){const M=[],x=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const C=A/e;p.x=-t*Math.cos(i+C*s)*Math.sin(a+x*o),p.y=t*Math.cos(a+x*o),p.z=t*Math.sin(i+C*s)*Math.sin(a+x*o),g.push(p.x,p.y,p.z),m.copy(p).normalize(),h.push(m.x,m.y,m.z),f.push(C+v,1-x),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const x=u[d][M+1],v=u[d][M],A=u[d+1][M],C=u[d+1][M+1];(d!==0||a>0)&&_.push(x,v,C),(d!==n-1||l<Math.PI)&&_.push(v,A,C)}this.setIndex(_),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Du extends Jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tv extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qh extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const bo=new ne,Iu=new F,Uu=new F;class bv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new ne,$r=new F,wo=new F;class wv extends bv{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),n.position.copy($r),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),i.makeTranslation(-$r.x,-$r.y,-$r.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class Av extends Qh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cv extends Qh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ou(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);class Rv{constructor(t){this.container=t,this.scene=new jh,this.camera=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=50,this.renderer=new Kh({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.particles=this.createParticles(),this.scene.add(this.particles),this.clock=new rc,this.resizeHandler=this.onResize.bind(this),window.addEventListener("resize",this.resizeHandler)}createParticles(){const t=window.innerWidth<768?800:2500,e=new Ie,n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<t;o++)n[o*3]=(Math.random()-.5)*120,n[o*3+1]=(Math.random()-.5)*80,n[o*3+2]=(Math.random()-.5)*40,i[o]=Math.random()*1.5+.5,s[o]=Math.random();e.setAttribute("position",new Ee(n,3)),e.setAttribute("size",new Ee(i,1)),e.setAttribute("opacity",new Ee(s,1));const a=new In({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new At(16117990)}},vertexShader:`
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        uniform float uTime;
        void main() {
          vOpacity = opacity;
          vec3 pos = position;
          pos.x += sin(uTime * 0.3 + position.y * 0.1) * 1.5;
          pos.y += cos(uTime * 0.2 + position.x * 0.1) * 1.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (120.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vOpacity;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * vOpacity * 0.35;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});return new Ea(e,a)}animate(){this.particles.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.renderer.render(this.scene,this.camera)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}destroy(){window.removeEventListener("resize",this.resizeHandler),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class Pv{constructor(t,e={}){this.scene=t,this.count=e.count||6,this.planes=[],this.createClouds()}createClouds(){const t=new ys(120,40,32,16),e=new In({transparent:!0,side:An,depthWrite:!1,uniforms:{uColor:{value:new At(5995126)},uOpacity:{value:.08}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float noise = sin(vUv.x * 10.0) * sin(vUv.y * 8.0) * 0.5 + 0.5;
          float alpha = smoothstep(0.4, 0.6, noise) * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});for(let n=0;n<this.count;n++){const i=new Ve(t,e.clone());i.position.set((Math.random()-.5)*40,(Math.random()-.5)*30-10,-20-n*8),i.rotation.x=-Math.PI/6,i.material.uniforms.uOpacity.value=.04+Math.random()*.06,this.scene.add(i),this.planes.push({mesh:i,speed:.2+Math.random()*.4})}}update(t,e){this.planes.forEach((n,i)=>{n.mesh.position.x+=Math.sin(t*.1+i)*.01,n.mesh.position.y=n.mesh.position.y+e*n.speed*.05})}}class Lv{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.resize(),this.particles=[],this.mouse={x:-1e3,y:-1e3},this.lastMouse={x:-1e3,y:-1e3},this.isActive=!0,this.onMove=e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY},window.addEventListener("mousemove",this.onMove),window.addEventListener("resize",()=>this.resize()),this.animate()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}spawnParticle(t,e){this.particles.push({x:t,y:e,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5-.3,life:1,size:Math.random()*3+1})}animate(){if(!this.isActive)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.mouse.x-this.lastMouse.x,e=this.mouse.y-this.lastMouse.y,n=Math.sqrt(t*t+e*e);if(n>5){const i=Math.min(n/5,5);for(let s=0;s<i;s++){const a=s/i;this.spawnParticle(this.lastMouse.x+t*a+(Math.random()-.5)*8,this.lastMouse.y+e*a+(Math.random()-.5)*8)}this.lastMouse.x=this.mouse.x,this.lastMouse.y=this.mouse.y}this.particles=this.particles.filter(i=>{if(i.x+=i.vx,i.y+=i.vy,i.life-=.015,i.size*=.98,i.life<=0)return!1;this.ctx.beginPath();const s=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);return s.addColorStop(0,`rgba(91, 122, 118, ${i.life*.4})`),s.addColorStop(1,"rgba(91, 122, 118, 0)"),this.ctx.fillStyle=s,this.ctx.arc(i.x,i.y,i.size,0,Math.PI*2),this.ctx.fill(),!0}),requestAnimationFrame(()=>this.animate())}destroy(){this.isActive=!1,window.removeEventListener("mousemove",this.onMove)}}const Dv="https://api.yppp.net/pc.php",Iv="https://api.yppp.net/pe.php";function Uv(r){if(!r)return;const e=`${/Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent)?Iv:Dv}?_=${Date.now()}`,n=new Image;n.src=e,n.onload=()=>{r.style.backgroundImage=`url(${e})`,r.classList.add("loaded")},n.onerror=()=>{console.warn("Background image load failed:",e),r.classList.add("fallback")}}function Vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function td(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},sc,Ce,ae,hn=1e8,Qt=1/hn,Sl=Math.PI*2,Nv=Sl/4,Ov=0,ed=Math.sqrt,Fv=Math.cos,Bv=Math.sin,Te=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},jn=function(t){return typeof t=="number"},ac=function(t){return typeof t>"u"},Un=function(t){return typeof t=="object"},We=function(t){return t!==!1},oc=function(){return typeof window<"u"},ea=function(t){return pe(t)||Te(t)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,zv=/random\([^)]+\)/g,kv=/,\s*/g,Fu=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ao=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,Hv=/[^,'"\[\]\s]+/gi,Vv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ce,Tn,El,lc,sn={},Ta={},sd,ad=function(t){return(Ta=Dr(t,sn))&&$e},cc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ls=function(t,e){return!e&&console.warn(t)},od=function(t,e){return t&&(sn[t]=e)&&Ta&&(Ta[t]=e)||sn},cs=function(){return 0},Gv={suppressEvents:!0,isStart:!0,kill:!1},la={suppressEvents:!0,kill:!1},Wv={suppressEvents:!0},uc={},fi=[],Tl={},ld,Qe={},Co={},Bu=30,ca=[],hc="",dc=function(t){var e=t[0],n,i;if(Un(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ca.length;i--&&!ca[i].targetTest(e););n=ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Pd(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||dc(dn(t))[0]._gsap},cd=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():ac(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},le=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Xv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ba=function(){var t=fi.length,e=fi.slice(0),n,i;for(Tl={},fi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fc=function(t){return!!(t._initted||t._startAt||t.add)},ud=function(t,e,n,i){fi.length&&!Ce&&ba(),t.render(e,n,!!(Ce&&e<0&&fc(t))),fi.length&&!Ce&&ba()},hd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Hv).length<2?e:Te(t)?t.trim():t},dd=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},qv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Dr=function(t,e){for(var n in e)t[n]=e[n];return t},zu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Un(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ts=function(t){var e=t.parent||ce,n=t.keyframes?qv(De(t.keyframes)):an;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Yv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},fd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},za=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},gi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},$v=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bl=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(la):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Kv=function r(t){return!t||t._ts&&r(t.parent)},ku=function(t){return t._repeat?Ir(t._tTime,t=t.duration()+t._rDelay)*t:0},Ir=function(t,e){var n=Math.floor(t=le(t/e));return t&&n===t?n-1:n},Aa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ka=function(t){return t._end=le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Qt)||0))},Ha=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ka(t),n._dirty||Vi(n,t)),t},pd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Aa(t.rawTime(),e),(!e._dur||Ss(0,e.totalDuration(),n)-e._tTime>Qt)&&e.render(n,!0)),Vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Qt}},Pn=function(t,e,n,i){return e.parent&&gi(e),e._start=le((jn(n)?n:n||t!==ce?cn(t,n,e):t._time)+e._delay),e._end=le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),fd(t,e,"_first","_last",t._sort?"_start":0),wl(e)||(t._recent=e),i||pd(t,e),t._ts<0&&Ha(t,t._tTime),t},md=function(t,e){return(sn.ScrollTrigger||cc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},_d=function(t,e,n,i,s){if(mc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ld!==tn.frame)return fi.push(t),t._lazy=[s,i],1},jv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},wl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&jv(t)&&!(!t._initted&&wl(t))||(t._ts<0||t._dp._ts<0)&&!wl(t))?0:1,o=t._rDelay,l=0,c,u,p;if(o&&t._repeat&&(l=Ss(0,t._tDur,e),u=Ir(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ir(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===Qt||!e&&t._zTime){if(!t._initted&&_d(t,e,i,n,l))return;for(p=t._zTime,t._zTime=e||(n?Qt:0),n||(n=e&&!p),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&bl(t,e,n,!0),t._onUpdate&&!n&&en(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&en(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&gi(t,1),!n&&!Ce&&(en(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Jv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ur=function(t,e,n,i){var s=t._repeat,a=le(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:le(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ha(t,t._tTime=t._tDur*o),t.parent&&ka(t),n||Vi(t.parent,t),t},Hu=function(t){return t instanceof He?Vi(t):Ur(t,t._dur)},Qv={_start:0,endTime:cs,totalDuration:cs},cn=function r(t,e,n){var i=t.labels,s=t._recent||Qv,a=t.duration()>=hn?s.endTime(!1):t._dur,o,l,c;return Te(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(De(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},es=function(t,e,n){var i=jn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=We(l.vars.inherit)&&l.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new xe(e[0],a,e[s+1])},yi=function(t,e){return t||t===0?e(t):e},Ss=function(t,e,n){return n<t?t:n>e?e:n},Le=function(t,e){return!Te(t)||!(e=Vv.exec(t))?"":e[1]},tx=function(t,e,n){return yi(n,function(i){return Ss(t,e,i)})},Al=[].slice,gd=function(t,e){return t&&Un(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Un(t[0]))&&!t.nodeType&&t!==Tn},ex=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Te(i)&&!e||gd(i,1)?(s=n).push.apply(s,dn(i)):n.push(i)})||n},dn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Te(t)&&!n&&(El||!Nr())?Al.call((e||lc).querySelectorAll(t),0):De(t)?ex(t,n):gd(t)?Al.call(t,0):t?[t]:[]},Cl=function(t){return t=dn(t)[0]||ls("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?ls("Invalid scope")||lc.createElement("div"):t)}},vd=function(t){return t.sort(function(){return .5-Math.random()})},xd=function(t){if(pe(t))return t;var e=Un(t)?t:{each:t},n=Gi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,p=i;return Te(i)?u=p={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],p=i[1]),function(m,_,g){var h=(g||e).length,f=a[h],d,M,x,v,A,C,b,R,y;if(!f){if(y=e.grid==="auto"?0:(e.grid||[1,hn])[1],!y){for(b=-hn;b<(b=g[y++].getBoundingClientRect().left)&&y<h;);y<h&&y--}for(f=a[h]=[],d=l?Math.min(y,h)*u-.5:i%y,M=y===hn?0:l?h*p/y-.5:i/y|0,b=0,R=hn,C=0;C<h;C++)x=C%y-d,v=M-(C/y|0),f[C]=A=c?Math.abs(c==="y"?v:x):ed(x*x+v*v),A>b&&(b=A),A<R&&(R=A);i==="random"&&vd(f),f.max=b-R,f.min=R,f.v=h=(parseFloat(e.amount)||parseFloat(e.each)*(y>h?h-1:c?c==="y"?h/y:y:Math.max(y,h/y))||0)*(i==="edges"?-1:1),f.b=h<0?s-h:s,f.u=Le(e.amount||e.each)||0,n=n&&h<0?px(n):n}return h=(f[m]-f.min)/f.max||0,le(f.b+(n?n(h):h)*f.v)+f.u}},Rl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(jn(n)?0:Le(n))}},Md=function(t,e){var n=De(t),i,s;return!n&&Un(t)&&(i=n=t.radius||hn,t.values?(t=dn(t.values),(s=!jn(t[0]))&&(i*=i)):t=Rl(t.increment)),yi(e,n?pe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=hn,u=0,p=t.length,m,_;p--;)s?(m=t[p].x-o,_=t[p].y-l,m=m*m+_*_):m=Math.abs(t[p]-o),m<c&&(c=m,u=p);return u=!i||c<=i?t[u]:a,s||u===a||jn(a)?u:u+Le(a)}:Rl(t))},yd=function(t,e,n,i){return yi(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},nx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},ix=function(t,e){return function(n){return t(parseFloat(n))+(e||Le(n))}},rx=function(t,e,n){return Ed(t,e,0,1,n)},Sd=function(t,e,n){return yi(n,function(i){return t[~~e(i)]})},sx=function r(t,e,n){var i=e-t;return De(t)?Sd(t,r(0,t.length),e):yi(n,function(s){return(i+(s-t)%i)%i+t})},ax=function r(t,e,n){var i=e-t,s=i*2;return De(t)?Sd(t,r(0,t.length-1),e):yi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},us=function(t){return t.replace(zv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(kv);return yd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ed=function(t,e,n,i,s){var a=e-t,o=i-n;return yi(s,function(l){return n+((l-t)/a*o||0)})},ox=function r(t,e,n,i){var s=isNaN(t+e)?0:function(_){return(1-_)*t+_*e};if(!s){var a=Te(t),o={},l,c,u,p,m;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(u=[],p=t.length,m=p-2,c=1;c<p;c++)u.push(r(t[c-1],t[c]));p--,s=function(g){g*=p;var h=Math.min(m,~~g);return u[h](g-h)},n=e}else i||(t=Dr(De(t)?[]:{},t));if(!u){for(l in e)pc.call(o,t,l,"get",e[l]);s=function(g){return vc(g,o)||(a?t.p:t)}}}return yi(n,s)},Vu=function(t,e,n){var i=t.labels,s=hn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},en=function(t,e,n){var i=t.vars,s=i[e],a=ae,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&fi.length&&ba(),o&&(ae=o),u=l?s.apply(c,l):s.call(c),ae=a,u},Zr=function(t){return gi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&en(t,"onInterrupt"),t},Mr,Td=[],bd=function(t){if(t)if(t=!t.name&&t.default||t,oc()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:cs,render:vc,add:pc,kill:Tx,modifier:Ex,rawVars:0},a={targetTest:0,get:0,getSetter:gc,aliases:{},register:0};if(Nr(),t!==i){if(Qe[e])return;an(i,an(wa(t,s),a)),Dr(i.prototype,Dr(s,wa(t,a))),Qe[i.prop=e]=i,t.targetTest&&(ca.push(i),uc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}od(e,i),t.register&&t.register($e,i,qe)}else Td.push(t)},Jt=255,Jr={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Ro=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Jt+.5|0},wd=function(t,e,n){var i=t?jn(t)?[t>>16,t>>8&Jt,t&Jt]:0:Jr.black,s,a,o,l,c,u,p,m,_,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jr[t])i=Jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Jt,i&Jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Jt,t&Jt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Fu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ro(l+1/3,s,a),i[1]=Ro(l,s,a),i[2]=Ro(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(id),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fu)||Jr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Jt,a=i[1]/Jt,o=i[2]/Jt,p=Math.max(s,a,o),m=Math.min(s,a,o),u=(p+m)/2,p===m?l=c=0:(_=p-m,c=u>.5?_/(2-p-m):_/(p+m),l=p===s?(a-o)/_+(a<o?6:0):p===a?(o-s)/_+2:(s-a)/_+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(t){var e=[],n=[],i=-1;return t.split(pi).forEach(function(s){var a=s.match(xr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Gu=function(t,e,n){var i="",s=(t+i).match(pi),a=e?"hsla(":"rgba(",o=0,l,c,u,p;if(!s)return t;if(s=s.map(function(m){return(m=wd(m,e,1))&&a+(e?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(u=Ad(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(pi,"1").split(xr),p=c.length-1;o<p;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pi),p=c.length-1;o<p;o++)i+=c[o]+s[o];return i+c[p]},pi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),lx=/hsl[a]?\(/,Cd=function(t){var e=t.join(" "),n;if(pi.lastIndex=0,pi.test(e))return n=lx.test(e),t[1]=Gu(t[1],n),t[0]=Gu(t[0],n,Ad(t[1])),!0},hs,tn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,p,m,_,g=function h(f){var d=r()-i,M=f===!0,x,v,A,C;if((d>t||d<0)&&(n+=d-e),i+=d,A=i-n,x=A-a,(x>0||M)&&(C=++p.frame,m=A-p.time*1e3,p.time=A=A/1e3,a+=x+(x>=s?4:s-x),v=1),M||(l=c(h)),v)for(_=0;_<o.length;_++)o[_](A,m,C,f)};return p={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return m/(1e3/(f||60))},wake:function(){sd&&(!El&&oc()&&(Tn=El=window,lc=Tn.document||{},sn.gsap=$e,(Tn.gsapVersions||(Tn.gsapVersions=[])).push($e.version),ad(Ta||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),Td.forEach(bd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&p.sleep(),c=u||function(f){return setTimeout(f,a-p.time*1e3+1|0)},hs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),hs=0,c=cs},lagSmoothing:function(f,d){t=f||1/0,e=Math.min(d||33,t)},fps:function(f){s=1e3/(f||240),a=p.time*1e3+s},add:function(f,d,M){var x=d?function(v,A,C,b){f(v,A,C,b),p.remove(x)}:f;return p.remove(f),o[M?"unshift":"push"](x),Nr(),x},remove:function(f,d){~(d=o.indexOf(f))&&o.splice(d,1)&&_>=d&&_--},_listeners:o},p}(),Nr=function(){return!hs&&tn.wake()},zt={},cx=/^[\d.\-M][\d.\-,\s]/,ux=/["']/g,hx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(ux,"").trim():+c,i=l.substr(o+1).trim();return e},dx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},fx=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[hx(e[1])]:dx(t).split(",").map(hd)):zt._CE&&cx.test(t)?zt._CE("",t):n},px=function(t){return function(e){return 1-t(1-e)}},Gi=function(t,e){return t&&(pe(t)?t:zt[t]||fx(t))||e},Yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){zt[o]=sn[o]=s,zt[a=o.toLowerCase()]=n;for(var l in s)zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[o+"."+l]=s[l]}),s},Rd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Po=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Sl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Bv((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Rd(o);return s=Sl/s,l.config=function(c,u){return r(t,c,u)},l},Lo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Rd(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Yi("Elastic",Po("in"),Po("out"),Po());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Yi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yi("Circ",function(r){return-(ed(1-r*r)-1)});Yi("Sine",function(r){return r===1?1:-Fv(r*Nv)+1});Yi("Back",Lo("in"),Lo("out"),Lo());zt.SteppedEase=zt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Qt;return function(o){return((i*Ss(0,a,o)|0)+s)*n}}};os.ease=zt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return hc+=r+","+r+"Params,"});var Pd=function(t,e){this.id=Ov++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:cd,this.set=e?e.getSetter:gc},ds=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ur(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),hs||tn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Nr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ha(this,n),!s._dp||s.parent||pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Qt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ud(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ku(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ku(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ir(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Aa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qt?0:this._rts,this.totalTime(Ss(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ka(this),$v(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Aa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Wv);var i=Ce;return Ce=n,fc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-Qt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Qt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pe(n)?n:dd,l=function(){var u=i.then;i.then=null,s&&s(),pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Zr(this)},r}();an(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var He=function(r){td(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=We(n.sortChildren),ce&&Pn(n.parent||ce,Vn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&md(Vn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return es(0,arguments,this),this},e.from=function(i,s,a){return es(1,arguments,this),this},e.fromTo=function(i,s,a,o){return es(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ts(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,cn(this,a),1),this},e.call=function(i,s,a){return Pn(this,xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xe(i,a,cn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ts(a).immediateRender=We(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,p){return o.startAt=a,ts(o).immediateRender=We(o.immediateRender),this.staggerTo(i,s,o,l,c,u,p)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:le(i),p=this._zTime<0!=i<0&&(this._initted||!c),m,_,g,h,f,d,M,x,v,A,C,b;if(this!==ce&&u>l&&i>=0&&(u=l),u!==this._tTime||a||p){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),m=u,v=this._start,x=this._ts,d=!x,p&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,s,a);if(m=le(u%f),u===l?(h=this._repeat,m=c):(A=le(u/f),h=~~A,h&&h===A&&(m=c,h--),m>c&&(m=c)),A=Ir(this._tTime,f),!o&&this._tTime&&A!==h&&this._tTime-A*f-this._dur<=0&&(A=h),C&&h&1&&(m=c-m,b=1),h!==A&&!this._lock){var R=C&&A&1,y=R===(C&&h&1);if(h<A&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(b?0:le(h*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=h),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Jv(this,le(o),le(m)),M&&(u-=m-(m=M._start))),this._tTime=u,this._time=m,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(en(this,"onStart"),this._tTime!==u))return this;if(m>=o&&i>=0)for(_=this._first;_;){if(g=_._next,(_._act||m>=_._start)&&_._ts&&M!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,s,a),m!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=-Qt);break}}_=g}else{_=this._last;for(var S=i<0?i:m;_;){if(g=_._prev,(_._act||S<=_._end)&&_._ts&&M!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(S-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(S-_._start)*_._ts,s,a||Ce&&fc(_)),m!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=S?-Qt:Qt);break}}_=g}}if(M&&!s&&(this.pause(),M.render(m>=o?0:-Qt)._zTime=m>=o?1:-1,this._ts))return this._start=v,ka(this),this.render(i,s,a);this._onUpdate&&!s&&en(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(jn(s)||(s=cn(this,s,i)),!(i instanceof ds)){if(De(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Te(i))return this.addLabel(i,s);if(pe(i))i=xe.delayedCall(0,i);else return this}return this!==i?Pn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Te(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&za(this,i),i===this._recent&&(this._recent=this._last),Vi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=xe.delayedCall(0,s||cs,a);return o.data="isPause",this._hasPause=1,Pn(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&gi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)oi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=dn(i),l=this._first,c=jn(s),u;l;)l instanceof xe?Xv(l._targets,o)&&(c?(!oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),l=s,c=l.startAt,u=l.onStart,p=l.onStartParams,m=l.immediateRender,_,g=xe.to(a,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Qt,onStart:function(){if(a.pause(),!_){var f=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==f&&Ur(g,f,0,1).render(g._time,!0,!0),_=1}u&&u.apply(g,p||[])}},s));return m?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,an({startAt:{time:cn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vu(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vu(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Qt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=le(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Vi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=hn,c,u,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(p=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ur(a,a===ce&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ce._ts&&(ud(ce,Aa(i,ce)),ld=tn.frame),tn.frame>=Bu){Bu+=rn.autoSleep||120;var s=ce._first;if((!s||!s._ts)&&rn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},t}(ds);an(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var mx=function(t,e,n,i,s,a,o){var l=new qe(this._pt,t,e,0,1,Od,null,s),c=0,u=0,p,m,_,g,h,f,d,M;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=us(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),m=n.match(Ao)||[];p=Ao.exec(i);)g=p[0],h=i.substring(c,p.index),_?_=(_+1)%5:h.substr(-5)==="rgba("&&(_=1),g!==m[u++]&&(f=parseFloat(m[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:f,c:g.charAt(1)==="="?Tr(f,g)-f:parseFloat(g)-f,m:_&&_<4?Math.round:0},c=Ao.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(rd.test(i)||d)&&(l.e=0),this._pt=l,l},pc=function(t,e,n,i,s,a,o,l,c,u){pe(i)&&(i=i(s||0,t,a));var p=t[e],m=n!=="get"?n:pe(p)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():p,_=pe(p)?c?Mx:Ud:_c,g;if(Te(i)&&(~i.indexOf("random(")&&(i=us(i)),i.charAt(1)==="="&&(g=Tr(m,i)+(Le(m)||0),(g||g===0)&&(i=g))),!u||m!==i||Pl)return!isNaN(m*i)&&i!==""?(g=new qe(this._pt,t,e,+m||0,i-(m||0),typeof p=="boolean"?Sx:Nd,0,_),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!p&&!(e in t)&&cc(e,i),mx.call(this,t,e,m,i,_,l||rn.stringFilter,c))},_x=function(t,e,n,i,s){if(pe(t)&&(t=ns(t,s,e,n,i)),!Un(t)||t.style&&t.nodeType||De(t)||nd(t))return Te(t)?ns(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ns(t[o],s,e,n,i);return a},Ld=function(t,e,n,i,s,a){var o,l,c,u;if(Qe[t]&&(o=new Qe[t]).init(s,o.rawVars?e[t]:_x(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Mr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},oi,Pl,mc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,p=i.yoyoEase,m=i.keyframes,_=i.autoRevert,g=t._dur,h=t._startAt,f=t._targets,d=t.parent,M=d&&d.data==="nested"?d.vars.targets:f,x=t._overwrite==="auto"&&!sc,v=t.timeline,A=i.easeReverse||p,C,b,R,y,S,E,N,O,W,V,X,Y,G;if(v&&(!m||!s)&&(s="none"),t._ease=Gi(s,os.ease),t._rEase=A&&(Gi(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||m&&!i.stagger){if(O=f[0]?Hi(f[0]).harness:0,Y=O&&i[O.prop],C=wa(i,uc),h&&(h._zTime<0&&h.progress(1),e<0&&u&&o&&!_?h.render(-1,!0):h.revert(u&&g?la:Gv),h._lazy=0),a){if(gi(t._startAt=xe.set(f,an({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!h&&We(l),startAt:null,delay:0,onUpdate:c&&function(){return en(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!_)&&t._startAt.revert(la),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!h){if(e&&(o=!1),R=an({overwrite:!1,data:"isFromStart",lazy:o&&!h&&We(l),immediateRender:o,stagger:0,parent:d},C),Y&&(R[O.prop]=Y),gi(t._startAt=xe.set(f,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(la):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Qt,Qt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&We(l)||l&&!g,b=0;b<f.length;b++){if(S=f[b],N=S._gsap||dc(f)[b]._gsap,t._ptLookup[b]=V={},Tl[N.id]&&fi.length&&ba(),X=M===f?b:M.indexOf(S),O&&(W=new O).init(S,Y||C,t,X,M)!==!1&&(t._pt=y=new qe(t._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(st){V[st]=y}),W.priority&&(E=1)),!O||Y)for(R in C)Qe[R]&&(W=Ld(R,C,t,X,S,M))?W.priority&&(E=1):V[R]=y=pc.call(t,S,R,"get",C[R],X,M,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),x&&t._pt&&(oi=t,ce.killTweensOf(S,V,t.globalTime(e)),G=!t.parent,oi=0),t._pt&&l&&(Tl[N.id]=1)}E&&Fd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,m&&e<=0&&v.render(hn,!0,!0)},gx=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,p,m,_;if(!c)for(c=t._ptCache[e]=[],m=t._ptLookup,_=t._targets.length;_--;){if(u=m[_][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Pl=1,t.vars[e]="+=0",mc(t,o),Pl=0,l?ls(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(_=c.length;_--;)p=c[_],u=p._pt||p,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,p.e&&(p.e=me(n)+Le(p.e)),p.b&&(p.b=u.s+Le(p.b))},vx=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Dr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},xx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ns=function(t,e,n,i,s){return pe(t)?t.call(e,n,i,s):Te(t)&&~t.indexOf("random(")?us(t):t},Dd=hc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Id={};Xe(Dd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Id[r]=1});var xe=function(r){td(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ts(i))||this;var l=o.vars,c=l.duration,u=l.delay,p=l.immediateRender,m=l.stagger,_=l.overwrite,g=l.keyframes,h=l.defaults,f=l.scrollTrigger,d=i.parent||ce,M=(De(n)||nd(n)?jn(n[0]):"length"in i)?[n]:dn(n),x,v,A,C,b,R,y,S;if(o._targets=M.length?dc(M):ls("GSAP target "+n+" not found. https://gsap.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=_,g||m||ea(c)||ea(u)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(x=o.timeline=new He({data:"nested",defaults:h||{},targets:d&&d.data==="nested"?d.vars.targets:M}),x.kill(),x.parent=x._dp=Vn(o),x._start=0,m||ea(c)||ea(u)){if(C=M.length,y=m&&xd(m),Un(m))for(b in m)~Dd.indexOf(b)&&(S||(S={}),S[b]=m[b]);for(v=0;v<C;v++)A=wa(i,Id),A.stagger=0,E&&(A.easeReverse=E),S&&Dr(A,S),R=M[v],A.duration=+ns(c,Vn(o),v,R,M),A.delay=(+ns(u,Vn(o),v,R,M)||0)-o._delay,!m&&C===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(R,A,y?y(v,R,M):0),x._ease=zt.none;x.duration()?c=u=0:o.timeline=0}else if(g){ts(an(x.vars.defaults,{ease:"none"})),x._ease=Gi(g.ease||i.ease||"none");var N=0,O,W,V;if(De(g))g.forEach(function(X){return x.to(M,X,">")}),x.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||xx(b,g[b],A,g.easeEach);for(b in A)for(O=A[b].sort(function(X,Y){return X.t-Y.t}),N=0,v=0;v<O.length;v++)W=O[v],V={ease:W.e,duration:(W.t-(v?O[v-1].t:0))/100*c},V[b]=W.v,x.to(M,V,N),N+=V.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return _===!0&&!sc&&(oi=Vn(o),ce.killTweensOf(M),oi=0),Pn(d,Vn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(p||!c&&!g&&o._start===le(d._time)&&We(p)&&Kv(Vn(o))&&d.data!=="nested")&&(o._tTime=-Qt,o.render(Math.max(0,-u)||0)),f&&md(Vn(o),f),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,p=i>l-Qt&&!u?l:i<Qt?0:i,m,_,g,h,f,d,M,x;if(!c)Zv(this,i,s,a);else if(p!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(m=p,x=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,s,a);if(m=le(p%h),p===l?(g=this._repeat,m=c):(f=le(p/h),g=~~f,g&&g===f?(m=c,g--):m>c&&(m=c)),d=this._yoyo&&g&1,d&&(m=c-m),f=Ir(this._tTime,h),m===o&&!a&&this._initted&&g===f)return this._tTime=p,this;g!==f&&this.vars.repeatRefresh&&!d&&!this._lock&&m!==h&&this._initted&&(this._lock=a=1,this.render(le(h*g),!0).invalidate()._lock=0)}if(!this._initted){if(_d(this,u?i:m,a,s,p))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==f))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=m<o;if(v!==this._inv){var A=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(m/c);if(this._from&&(this.ratio=M=1-M),this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&p&&!s&&!f&&(en(this,"onStart"),this._tTime!==p))return this;for(_=this._pt;_;)_.r(M,_.d),_=_._next;x&&x.render(i<0?i:x._dur*x._ease(m/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bl(this,i,s,a),en(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&bl(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&gi(this,1),!s&&!(u&&!o)&&(p||o||d)&&(en(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){hs||tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mc(this,c),u=this._ease(c/this._dur),gx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Ha(this,0),this.parent||fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,oi&&oi.vars.overwrite!==!0)._first||Zr(this),this.parent&&a!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?dn(i):o,c=this._ptLookup,u=this._pt,p,m,_,g,h,f,d;if((!s||s==="all")&&Yv(o,l))return s==="all"&&(this._pt=0),Zr(this);for(p=this._op=this._op||[],s!=="all"&&(Te(s)&&(h={},Xe(s,function(M){return h[M]=1}),s=h),s=vx(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){m=c[d],s==="all"?(p[d]=s,g=m,_={}):(_=p[d]=p[d]||{},g=s);for(h in g)f=m&&m[h],f&&((!("kill"in f.d)||f.d.kill(h)===!0)&&za(this,f,"_pt"),delete m[h]),_!=="all"&&(_[h]=1)}return this._initted&&!this._pt&&u&&Zr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return es(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return es(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ce.killTweensOf(i,s,a)},t}(ds);an(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){xe[r]=function(){var t=new He,e=Al.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var _c=function(t,e,n){return t[e]=n},Ud=function(t,e,n){return t[e](n)},Mx=function(t,e,n,i){return t[e](i.fp,n)},yx=function(t,e,n){return t.setAttribute(e,n)},gc=function(t,e){return pe(t[e])?Ud:ac(t[e])&&t.setAttribute?yx:_c},Nd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Od=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},vc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ex=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Tx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?za(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Nd,this.d=l||this,this.set=c||_c,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bx,this.m=n,this.mt=s,this.tween=i},r}();Xe(hc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return uc[r]=1});sn.TweenMax=sn.TweenLite=xe;sn.TimelineLite=sn.TimelineMax=He;ce=new He({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Cd;var Wi=[],ua={},wx=[],Wu=0,Ax=0,Do=function(t){return(ua[t]||wx).map(function(e){return e()})},Ll=function(){var t=Date.now(),e=[];t-Wu>2&&(Do("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Tn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Do("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wu=t,Do("matchMedia"))},Bd=function(){function r(e,n){this.selector=n&&Cl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ax++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var a=this,o=function(){var c=ae,u=a.selector,p;return c&&c!==a&&c.data.push(a),s&&(a.selector=Cl(s)),ae=a,p=i.apply(a,arguments),pe(p)&&a._r.push(p),ae=c,a.selector=u,a.isReverted=!1,p};return a.last=o,n===pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof He?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wi.length;a--;)Wi[a].id===this.id&&Wi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Cx=function(){function r(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Un(n)||(n={matches:n});var a=new Bd(0,s||this.scope),o=a.conditions={},l,c,u;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Tn.matchMedia(n[c]),l&&(Wi.indexOf(a)<0&&Wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ll):l.addEventListener("change",Ll)));return u&&i(a,function(p){return a.add(null,p)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ca={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bd(i)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){Te(t)&&(t=dn(t)[0]);var s=Hi(t||{}).get,a=n?dd:hd;return n==="native"&&(n=""),t&&(e?a((Qe[e]&&Qe[e].get||s)(t,e,n,i)):function(o,l,c){return a((Qe[o]&&Qe[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var i=t.map(function(u){return $e.quickSetter(u,e,n)}),s=i.length;return function(u){for(var p=s;p--;)i[p](u)}}t=t[0]||{};var a=Qe[e],o=Hi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var p=new a;Mr._pt=0,p.init(t,n?u+n:u,Mr,0,[t]),p.render(1,p),Mr._pt&&vc(1,Mr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=$e.to(t,an((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gi(t.ease,os.ease)),zu(os,t||{})},config:function(t){return zu(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qe[o]&&!sn[o]&&ls(e+" effect requires "+o+" plugin.")}),Co[e]=function(o,l,c){return n(dn(o),an(l||{},s),c)},a&&(He.prototype[e]=function(o,l,c){return this.add(Co[e](o,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Gi(e)},parseEase:function(t,e){return arguments.length?Gi(t,e):zt},getById:function(t){return ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new He(t),i,s;for(n.smoothChildTiming=We(t.smoothChildTiming),ce.remove(n),n._dp=0,n._time=n._tTime=ce._time,i=ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&Pn(n,i,i._start-i._delay),i=s;return Pn(ce,n,0),n},context:function(t,e){return t?new Bd(t,e):ae},matchMedia:function(t){return new Cx(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ll()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:sx,wrapYoyo:ax,distribute:xd,random:yd,snap:Md,normalize:rx,getUnit:Le,clamp:tx,splitColor:wd,toArray:dn,selector:Cl,mapRange:Ed,pipe:nx,unitize:ix,interpolate:ox,shuffle:vd},install:ad,effects:Co,ticker:tn,updateRoot:He.updateRoot,plugins:Qe,globalTimeline:ce,core:{PropTween:qe,globals:od,Tween:xe,Timeline:He,Animation:ds,getCache:Hi,_removeLinkedListItem:za,reverting:function(){return Ce},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return sc=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ca[r]=xe[r]});tn.add(He.updateRoot);Mr=Ca.to({},{duration:0});var Rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Px=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Rx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Io=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Te(s)&&(l={},Xe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Px(o,s)}}}},$e=Ca.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Io("roundProps",Rl),Io("modifiers"),Io("snap",Md))||Ca;xe.version=He.version=$e.version="3.15.0";sd=1;oc()&&Nr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xu,li,br,xc,ki,qu,Mc,Lx=function(){return typeof window<"u"},Zn={},Ui=180/Math.PI,wr=Math.PI/180,_r=Math.atan2,Yu=1e8,yc=/([A-Z])/g,Dx=/(left|right|width|margin|padding|x)/i,Ix=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ux=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ox=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Fx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},kd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Bx=function(t,e,n){return t.style[e]=n},zx=function(t,e,n){return t.style.setProperty(e,n)},kx=function(t,e,n){return t._gsap[e]=n},Hx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Vx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Gx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ue="transform",Ye=ue+"Origin",Wx=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Zn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Gn(i,o)}):this.tfm[t]=a.x?a[t]:Gn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Ln.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},Hd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Xx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(yc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Mc(),(!s||!s.isStart)&&!n[ue]&&(Hd(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Vd=function(t,e){var n={target:t,props:[],revert:Xx,save:Wx};return t._gsap||$e.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Gd,Il=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n&&n.style?n:li.createElement(t)},nn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(yc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Or(e)||e,1)||""},$u="O,Moz,ms,Ms,Webkit".split(","),Or=function(t,e,n){var i=e||ki,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!($u[a]+t in s););return a<0?null:(a===3?"ms":a>=0?$u[a]:"")+t},Ul=function(){Lx()&&window.document&&(Xu=window,li=Xu.document,br=li.documentElement,ki=Il("div")||{style:{}},Il("div"),ue=Or(ue),Ye=ue+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gd=!!Or("perspective"),Mc=$e.core.reverting,xc=1)},Ku=function(t){var e=t.ownerSVGElement,n=Il("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),br.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),br.removeChild(n),s},ju=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wd=function(t){var e,n;try{e=t.getBBox()}catch{e=Ku(t),n=1}return e&&(e.width||e.height)||n||(e=Ku(t)),e&&!e.width&&!e.x&&!e.y?{x:+ju(t,["x","cx","x1"])||0,y:+ju(t,["y","cy","y1"])||0,width:0,height:0}:e},Xd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wd(t))},vi=function(t,e){if(e){var n=t.style,i;e in Zn&&e!==Ye&&(e=ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(yc,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?kd:zd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Zu={deg:1,rad:1,turn:1},qx={grid:1,flex:1},xi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,l=Dx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),p=100,m=i==="px",_=i==="%",g,h,f,d;if(i===a||!s||Zu[i]||Zu[a])return s;if(a!=="px"&&!m&&(s=r(t,e,n,"px")),d=t.getCTM&&Xd(t),(_||a==="%")&&(Zn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],me(_?s/g*p:s/100*g);if(o[l?"width":"height"]=p+(m?a:i),h=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===li||!h.appendChild)&&(h=li.body),f=h._gsap,f&&_&&f.width&&l&&f.time===tn.time&&!f.uncache)return me(s/f.width*p);if(_&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=p+i,g=t[u],M?t.style[e]=M:vi(t,e)}else(_||a==="%")&&!qx[nn(h,"display")]&&(o.position=nn(t,"position")),h===t&&(o.position="static"),h.appendChild(ki),g=ki[u],h.removeChild(ki),o.position="absolute";return l&&_&&(f=Hi(h),f.time=tn.time,f.width=h[u]),me(m?g*s/p:g&&s?p/g*s:0)},Gn=function(t,e,n,i){var s;return xc||Ul(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),Zn[e]&&e!=="transform"?(s=ps(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Pa(nn(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ra[e]&&Ra[e](t,e,n)||nn(t,e)||cd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xi(t,e,s,n)+n:s},Yx=function(t,e,n,i){if(!n||n==="none"){var s=Or(e,t,1),a=s&&nn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=nn(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,Od),l=0,c=0,u,p,m,_,g,h,f,d,M,x,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=nn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(h=t.style[e],t.style[e]=i,i=nn(t,e)||i,h?t.style[e]=h:vi(t,e)),u=[n,i],Cd(u),n=u[0],i=u[1],m=n.match(xr)||[],A=i.match(xr)||[],A.length){for(;p=xr.exec(i);)f=p[0],M=i.substring(l,p.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),f!==(h=m[c++]||"")&&(_=parseFloat(h)||0,v=h.substr((_+"").length),f.charAt(1)==="="&&(f=Tr(_,f)+v),d=parseFloat(f),x=f.substr((d+"").length),l=xr.lastIndex-x.length,x||(x=x||rn.units[e]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(_=xi(t,e,h,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:_,c:d-_,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?kd:zd;return rd.test(i)&&(o.e=0),this._pt=o,o},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$x=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ju[n]||n,e[1]=Ju[i]||i,e.join(" ")},Kx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Zn[o]&&(l=1,o=o==="transformOrigin"?Ye:ue),vi(n,o);l&&(vi(n,ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ps(n,1),a.uncache=1,Hd(i)))}},Ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,Kx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},fs=[1,0,0,1,0,0],qd={},Yd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qu=function(t){var e=nn(t,ue);return Yd(e)?fs:e.substr(7).match(id).map(me)},Sc=function(t,e){var n=t._gsap||Hi(t),i=t.style,s=Qu(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fs:s):(s===fs&&!t.offsetParent&&t!==br&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,br.appendChild(t)),s=Qu(t),l?i.display=l:vi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):br.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nl=function(t,e,n,i,s,a){var o=t._gsap,l=s||Sc(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,p=o.xOffset||0,m=o.yOffset||0,_=l[0],g=l[1],h=l[2],f=l[3],d=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,b,R,y;n?l!==fs&&(b=_*f-g*h)&&(R=v*(f/b)+A*(-h/b)+(h*M-f*d)/b,y=v*(-g/b)+A*(_/b)-(_*M-g*d)/b,v=R,A=y):(C=Wd(t),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&o.smooth?(d=v-c,M=A-u,o.xOffset=p+(d*_+M*h)-d,o.yOffset=m+(d*g+M*f)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(ci(a,o,"xOrigin",c,v),ci(a,o,"yOrigin",u,A),ci(a,o,"xOffset",p,o.xOffset),ci(a,o,"yOffset",m,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ps=function(t,e){var n=t._gsap||new Pd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=nn(t,Ye)||"0",u,p,m,_,g,h,f,d,M,x,v,A,C,b,R,y,S,E,N,O,W,V,X,Y,G,st,lt,ct,Pt,mt,q,Z;return u=p=m=h=f=d=M=x=v=0,_=g=1,n.svg=!!(t.getCTM&&Xd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),i.scale=i.rotate=i.translate="none"),b=Sc(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Nl(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==fs&&(E=b[0],N=b[1],O=b[2],W=b[3],u=V=b[4],p=X=b[5],b.length===6?(_=Math.sqrt(E*E+N*N),g=Math.sqrt(W*W+O*O),h=E||N?_r(N,E)*Ui:0,M=O||W?_r(O,W)*Ui+h:0,M&&(g*=Math.abs(Math.cos(M*wr))),n.svg&&(u-=A-(A*E+C*O),p-=C-(A*N+C*W))):(Z=b[6],mt=b[7],lt=b[8],ct=b[9],Pt=b[10],q=b[11],u=b[12],p=b[13],m=b[14],R=_r(Z,Pt),f=R*Ui,R&&(y=Math.cos(-R),S=Math.sin(-R),Y=V*y+lt*S,G=X*y+ct*S,st=Z*y+Pt*S,lt=V*-S+lt*y,ct=X*-S+ct*y,Pt=Z*-S+Pt*y,q=mt*-S+q*y,V=Y,X=G,Z=st),R=_r(-O,Pt),d=R*Ui,R&&(y=Math.cos(-R),S=Math.sin(-R),Y=E*y-lt*S,G=N*y-ct*S,st=O*y-Pt*S,q=W*S+q*y,E=Y,N=G,O=st),R=_r(N,E),h=R*Ui,R&&(y=Math.cos(R),S=Math.sin(R),Y=E*y+N*S,G=V*y+X*S,N=N*y-E*S,X=X*y-V*S,E=Y,V=G),f&&Math.abs(f)+Math.abs(h)>359.9&&(f=h=0,d=180-d),_=me(Math.sqrt(E*E+N*N+O*O)),g=me(Math.sqrt(X*X+Z*Z)),R=_r(V,X),M=Math.abs(R)>2e-4?R*Ui:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Yd(nn(t,ue)),Y&&t.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(_*=-1,M+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-p)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=m+a,n.scaleX=me(_),n.scaleY=me(g),n.rotation=me(h)+o,n.rotationX=me(f)+o,n.rotationY=me(d)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=Pa(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?Zx:Gd?$d:jx,n.uncache=0,n},Pa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Uo=function(t,e,n){var i=Le(e);return me(parseFloat(e)+parseFloat(xi(t,"x",n+"px",i)))+i},jx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$d(t,e)},Ri="0deg",Kr="0px",Pi=") ",$d=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,p=n.rotationX,m=n.skewX,_=n.skewY,g=n.scaleX,h=n.scaleY,f=n.transformPerspective,d=n.force3D,M=n.target,x=n.zOrigin,v="",A=d==="auto"&&t&&t!==1||d===!0;if(x&&(p!==Ri||u!==Ri)){var C=parseFloat(u)*wr,b=Math.sin(C),R=Math.cos(C),y;C=parseFloat(p)*wr,y=Math.cos(C),a=Uo(M,a,b*y*-x),o=Uo(M,o,-Math.sin(C)*-x),l=Uo(M,l,R*y*-x+x)}f!==Kr&&(v+="perspective("+f+Pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==Kr||o!==Kr||l!==Kr)&&(v+=l!==Kr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pi),c!==Ri&&(v+="rotate("+c+Pi),u!==Ri&&(v+="rotateY("+u+Pi),p!==Ri&&(v+="rotateX("+p+Pi),(m!==Ri||_!==Ri)&&(v+="skew("+m+", "+_+Pi),(g!==1||h!==1)&&(v+="scale("+g+", "+h+Pi),M.style[ue]=v||"translate(0, 0)"},Zx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,p=n.scaleX,m=n.scaleY,_=n.target,g=n.xOrigin,h=n.yOrigin,f=n.xOffset,d=n.yOffset,M=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,C,b,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wr,c*=wr,A=Math.cos(l)*p,C=Math.sin(l)*p,b=Math.sin(l-c)*-m,R=Math.cos(l-c)*m,c&&(u*=wr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,C*=y)),A=me(A),C=me(C),b=me(b),R=me(R)):(A=p,R=m,C=b=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=xi(_,"x",a,"px"),v=xi(_,"y",o,"px")),(g||h||f||d)&&(x=me(x+g-(g*A+h*b)+f),v=me(v+h-(g*C+h*R)+d)),(i||s)&&(y=_.getBBox(),x=me(x+i/100*y.width),v=me(v+s/100*y.height)),y="matrix("+A+","+C+","+b+","+R+","+x+","+v+")",_.setAttribute("transform",y),M&&(_.style[ue]=y)},Jx=function(t,e,n,i,s){var a=360,o=Te(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ui:1),c=l-i,u=i+c+"deg",p,m;return o&&(p=s.split("_")[1],p==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),p==="cw"&&c<0?c=(c+a*Yu)%a-~~(c/a)*a:p==="ccw"&&c>0&&(c=(c-a*Yu)%a-~~(c/a)*a)),t._pt=m=new qe(t._pt,e,n,i,c,Ux),m.e=u,m.u="deg",t._props.push(n),m},th=function(t,e){for(var n in e)t[n]=e[n];return t},Qx=function(t,e,n){var i=th({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,p,m,_,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ue]=e,o=ps(n,1),vi(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],a[ue]=e,o=ps(n,1),a[ue]=c);for(l in Zn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(_=Le(c),g=Le(u),p=_!==g?xi(n,l,c,g):parseFloat(c),m=parseFloat(u),t._pt=new qe(t._pt,o,l,p,m-p,Dl),t._pt.u=g||0,t._props.push(l));th(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ra[t>1?"border"+r:r]=function(o,l,c,u,p){var m,_;if(arguments.length<4)return m=a.map(function(g){return Gn(o,g,c)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(u+"").split(" "),_={},a.forEach(function(g,h){return _[g]=m[h]=m[h]||m[(h-1)/2|0]}),o.init(l,_,p)}});var Kd={name:"css",register:Ul,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,p,m,_,g,h,f,d,M,x,v,A,C,b,R,y;xc||Ul(),this.styles=this.styles||Vd(t),R=this.styles.props,this.tween=n;for(h in e)if(h!=="autoRound"&&(u=e[h],!(Qe[h]&&Ld(h,e,n,i,t,s)))){if(_=typeof u,g=Ra[h],_==="function"&&(u=u.call(n,i,t,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=us(u)),g)g(this,t,h,u,n)&&(b=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(h)+"").trim(),u+="",pi.lastIndex=0,pi.test(c)||(f=Le(c),d=Le(u),d?f!==d&&(c=xi(t,h,c,d)+d):f&&(u+=f)),this.add(o,"setProperty",c,u,i,s,0,0,h),a.push(h),R.push(h,0,o[h]);else if(_!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,t,s):l[h],Te(c)&&~c.indexOf("random(")&&(c=us(c)),Le(c+"")||c==="auto"||(c+=rn.units[h]||Le(Gn(t,h))||""),(c+"").charAt(1)==="="&&(c=Gn(t,h))):c=Gn(t,h),m=parseFloat(c),M=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),p=parseFloat(u),h in Ln&&(h==="autoAlpha"&&(m===1&&Gn(t,"visibility")==="hidden"&&p&&(m=0),R.push("visibility",0,o.visibility),ci(this,o,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),h!=="scale"&&h!=="transform"&&(h=Ln[h],~h.indexOf(",")&&(h=h.split(",")[0]))),x=h in Zn,x){if(this.styles.save(h),y=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=nn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=u,u=nn(t,"perspective"),S?t.style.perspective=S:vi(t,"perspective")}p=parseFloat(u)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ps(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new qe(this._pt,o,ue,0,1,A.renderTransform,A,0,-1),v.dep=1),h==="scale")this._pt=new qe(this._pt,A,"scaleY",A.scaleY,(M?Tr(A.scaleY,M+p):p)-A.scaleY||0,Dl),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){R.push(Ye,0,o[Ye]),u=$x(u),A.svg?Nl(t,u,0,C,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==A.zOrigin&&ci(this,A,"zOrigin",A.zOrigin,d),ci(this,o,h,Pa(c),Pa(u)));continue}else if(h==="svgOrigin"){Nl(t,u,1,C,0,this);continue}else if(h in qd){Jx(this,A,h,m,M?Tr(m,M+u):u);continue}else if(h==="smoothOrigin"){ci(this,A,"smooth",A.smooth,u);continue}else if(h==="force3D"){A[h]=u;continue}else if(h==="transform"){Qx(this,u,t);continue}}else h in o||(h=Or(h)||h);if(x||(p||p===0)&&(m||m===0)&&!Ix.test(u)&&h in o)f=(c+"").substr((m+"").length),p||(p=0),d=Le(u)||(h in rn.units?rn.units[h]:f),f!==d&&(m=xi(t,h,c,d)),this._pt=new qe(this._pt,x?A:o,h,m,(M?Tr(m,M+p):p)-m,!x&&(d==="px"||h==="zIndex")&&e.autoRound!==!1?Fx:Dl),this._pt.u=d||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=Ox):f!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Nx);else if(h in o)Yx.call(this,t,h,c,M?M+u:u);else if(h in t)this.add(t,h,c||t[h],M?M+u:u,i,s);else if(h!=="parseTransform"){cc(h,u);continue}x||(h in o?R.push(h,0,o[h]):typeof t[h]=="function"?R.push(h,2,t[h]()):R.push(h,1,c||t[h])),a.push(h)}}b&&Fd(this)},render:function(t,e){if(e.tween._time||!Mc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Gn,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in Zn&&e!==Ye&&(t._gsap.x||Gn(t,"x"))?n&&qu===n?e==="scale"?Hx:kx:(qu=n||{})&&(e==="scale"?Vx:Gx):t.style&&!ac(t.style[e])?Bx:~e.indexOf("-")?zx:gc(t,e)},core:{_removeProperty:vi,_getMatrix:Sc}};$e.utils.checkPrefix=Or;$e.core.getStyleSaver=Vd;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){Zn[s]=1});Xe(t,function(s){rn.units[s]="deg",qd[s]=1}),Ln[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");Ln[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rn.units[r]="px"});$e.registerPlugin(Kd);var jd=$e.registerPlugin(Kd)||$e;jd.core.Tween;function tM(r){const t=document.querySelectorAll(".intro-title .brush-text"),e=document.querySelector(".intro-subtitle"),n=document.querySelector(".intro-quote"),i=document.querySelector(".intro-desc");t.forEach(a=>{const o=a.getComputedTextLength();a.style.strokeDasharray=o,a.style.strokeDashoffset=o,a.style.fill="transparent"}),jd.timeline({delay:.8}).to(t,{strokeDashoffset:0,fill:"#f5f0e6",duration:2.5,stagger:.4,ease:"power2.inOut"}).to(e,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=1").to(n,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=0.6").to(i,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=0.6")}async function eM(){const r=await fetch("/data/content.json");if(!r.ok)throw new Error(`Failed to load content: ${r.status}`);return r.json()}function Ec(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function eh(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768}const Ol="https://ncm-api-ochre.vercel.app",nh="12675557343";let Be=[],Dn=-1,jt=null,mi=!1,Fi=!1,La=!1,Yn,Va,$n,Zd,Tc,Jd,Qd,tf,Fl,ef,nf,rf,sf,Bl,Da,Ia;function nM(){iM(),rM()}function iM(){const r=document.createElement("div");r.className="music-widget",r.innerHTML=`
    <div class="music-panel" id="musicPanel">
      <div class="music-panel-inner">
        <div class="music-header">
          <img class="music-cover" id="musicCover" src="" alt="cover">
          <div class="music-header-info">
            <div class="music-playlist-name" id="playlistName">加载中…</div>
            <div class="music-song-count" id="songCount"></div>
          </div>
        </div>
        <div class="music-list-container">
          <div class="music-list" id="musicList"></div>
        </div>
        <div class="music-player-bar" id="playerBar">
          <div class="music-track-info">
            <div class="music-track-name" id="trackInfo">—</div>
            <div class="music-track-artist" id="trackArtist"></div>
          </div>
          <div class="music-progress">
            <span class="music-time" id="timeCurrent">0:00</span>
            <div class="music-progress-bar" id="progressBar">
              <div class="music-progress-fill" id="progressFill"></div>
            </div>
            <span class="music-time" id="timeTotal">0:00</span>
          </div>
          <div class="music-controls">
            <button class="mc-btn" id="prevBtn" title="上一首">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button class="mc-btn mc-play" id="playBtn" title="播放">
              <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            </button>
            <button class="mc-btn" id="nextBtn" title="下一首">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 6h2v12h-2zm-10 6l8.5 6V6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="music-btn" id="musicBtn" title="音乐播放器">
      <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
    </button>`,document.body.appendChild(r),Yn=document.getElementById("musicBtn"),Va=document.getElementById("musicPanel"),$n=document.getElementById("musicList"),Zd=document.getElementById("playerBar"),Tc=document.getElementById("playBtn"),Jd=document.getElementById("prevBtn"),Qd=document.getElementById("nextBtn"),tf=document.getElementById("progressFill"),Fl=document.getElementById("progressBar"),ef=document.getElementById("timeCurrent"),nf=document.getElementById("timeTotal"),rf=document.getElementById("playlistName"),sf=document.getElementById("songCount"),Bl=document.getElementById("musicCover"),Da=document.getElementById("trackInfo"),Ia=document.getElementById("trackArtist")}function rM(){sM(),Yn.addEventListener("click",r=>{if(La){La=!1;return}r.stopPropagation(),aM()}),document.addEventListener("click",r=>{!Va.contains(r.target)&&r.target!==Yn&&!Yn.contains(r.target)&&oM()}),Tc.addEventListener("click",r=>{r.stopPropagation(),ih()}),Jd.addEventListener("click",r=>{r.stopPropagation(),hM()}),Qd.addEventListener("click",r=>{r.stopPropagation(),lf()}),Fl.addEventListener("click",r=>{if(!jt||!jt.duration)return;const t=Fl.getBoundingClientRect(),e=Math.max(0,Math.min(1,(r.clientX-t.left)/t.width));jt.currentTime=e*jt.duration}),document.addEventListener("keydown",r=>{r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||r.key===" "&&Fi&&(r.preventDefault(),ih())})}function sM(){const r=Yn.closest(".music-widget");if(!r)return;const t="wenruo_music_pos";let e=!1,n=0,i=0,s=0,a=0,o=!1;const l=4;function c(h){const f=h.touches&&h.touches[0]?h.touches[0]:h;return{x:f.clientX,y:f.clientY}}function u(h){e=!0,o=!1;const f=c(h);n=f.x,i=f.y;const d=r.getBoundingClientRect();s=d.left,a=d.top,r.classList.add("dragging"),r.style.transition="none",document.body.style.userSelect="none"}function p(h){if(!e)return;const f=c(h),d=f.x-n,M=f.y-i;(Math.abs(d)>l||Math.abs(M)>l)&&(o=!0,La=!0);const x=r.getBoundingClientRect(),v=window.innerWidth,A=window.innerHeight;let C=s+d,b=a+M;C=Math.max(0,Math.min(C,v-x.width)),b=Math.max(0,Math.min(b,A-x.height)),r.style.right="auto",r.style.bottom="auto",r.style.left=C+"px",r.style.top=b+"px"}function m(){e&&(e=!1,r.classList.remove("dragging"),r.style.transition="",document.body.style.userSelect="",_(),o&&setTimeout(()=>{La=!1},50))}function _(){try{const h=r.getBoundingClientRect();localStorage.setItem(t,JSON.stringify({left:h.left,top:h.top}))}catch{}}function g(){try{const h=localStorage.getItem(t);if(!h)return;const f=JSON.parse(h),d=window.innerWidth,M=window.innerHeight,x=r.getBoundingClientRect();let v=f.left,A=f.top;v=Math.max(0,Math.min(v,d-x.width)),A=Math.max(0,Math.min(A,M-x.height)),r.style.right="auto",r.style.bottom="auto",r.style.left=v+"px",r.style.top=A+"px"}catch{}}Yn.addEventListener("mousedown",u),Yn.addEventListener("touchstart",u,{passive:!0}),window.addEventListener("mousemove",p),window.addEventListener("touchmove",p,{passive:!0}),window.addEventListener("mouseup",m),window.addEventListener("touchend",m),window.addEventListener("resize",()=>{const h=r.getBoundingClientRect(),f=window.innerWidth,d=window.innerHeight;let M=h.left,x=h.top;M=Math.max(0,Math.min(M,f-h.width)),x=Math.max(0,Math.min(x,d-h.height)),r.style.left=M+"px",r.style.top=x+"px"}),g()}function aM(){Fi=!Fi,Va.classList.toggle("show",Fi),Yn.classList.toggle("active",Fi),Fi&&Be.length===0&&af()}function oM(){Fi=!1,Va.classList.remove("show"),Yn.classList.remove("active")}async function af(){var r;$n.innerHTML='<div class="music-loading"><div class="ink-spinner"></div><span>墨滴晕开中…</span></div>';try{const[t,e]=await Promise.all([fetch(`${Ol}/playlist/detail?id=${nh}`),fetch(`${Ol}/playlist/track/all?id=${nh}`)]);if(!t.ok)throw new Error(`HTTP ${t.status}`);if(!e.ok)throw new Error(`HTTP ${e.status}`);const n=await t.json(),i=await e.json();if(n.code!==200||!n.playlist){const a=n.message||n.msg||"API error";throw new Error(a)}const s=n.playlist;rf.textContent=s.name||"未知歌单",sf.textContent=`${s.trackCount||0} 首`,s.coverImgUrl&&(Bl.src=s.coverImgUrl+"?param=100y100",Bl.style.display=""),Be=i.songs||i.data||s.tracks||[],cM(),of()}catch(t){$n.innerHTML=`<div class="music-error">✦ ${t.message}，点击重试</div>`,(r=$n.querySelector(".music-error"))==null||r.addEventListener("click",af)}}async function lM(r){var n,i;const e=await(await fetch(`${Ol}/song/url/v1?id=${r}`)).json();if(e.code===200&&((i=(n=e.data)==null?void 0:n[0])!=null&&i.url))return e.data[0].url;throw new Error("URL not available")}function cM(){$n.innerHTML=Be.map((r,t)=>{const e=r.ar?r.ar.map(i=>i.name).join(" / "):"",n=zl((r.dt||0)/1e3);return`
      <div class="music-list-item${t===Dn?" active":""}" data-index="${t}">
        <span class="music-item-num">${t+1}</span>
        <div class="music-item-info">
          <div class="music-item-name">${sh(r.name||"未知")}</div>
          <div class="music-item-artist">${sh(e)}</div>
        </div>
        <span class="music-item-dur">${n}</span>
      </div>`}).join(""),$n.querySelectorAll(".music-list-item").forEach(r=>{r.addEventListener("click",()=>{const t=parseInt(r.dataset.index);Be[t]&&Ga(t)})})}function ha(){$n.querySelectorAll(".music-list-item").forEach((t,e)=>{t.classList.toggle("active",e===Dn);const n=t.querySelector(".music-item-num");e===Dn&&mi?n.innerHTML='<span class="music-eq"><span></span><span></span><span></span></span>':n.textContent=e+1}),Tc.innerHTML=mi?'<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>':'<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>',of()}function of(){if(Zd.style.display=Be.length>0?"":"none",Dn>=0&&Be[Dn]){const r=Be[Dn];Da.textContent=r.name||"—",Ia.textContent=r.ar?r.ar.map(t=>t.name).join(" / "):""}else Da.textContent="—",Ia.textContent=""}function uM(r){Da.textContent=r.name||"—",Ia.textContent=r.ar?r.ar.map(t=>t.name).join(" / "):""}async function Ga(r){if(r<0||r>=Be.length)return;jt&&(jt.pause(),jt.src=""),Dn=r,mi=!1,ha();const t=Be[r];uM(t);const e=$n.querySelector(`[data-index="${r}"]`);e&&e.classList.add("loading");let n;try{n=await lM(t.id)}catch{e&&e.classList.remove("loading"),rh();return}e&&e.classList.remove("loading"),jt=new Audio(n),jt.addEventListener("canplay",()=>{mi=!0,jt.play().catch(()=>{}),ha()}),jt.addEventListener("ended",()=>lf()),jt.addEventListener("timeupdate",()=>{if(jt&&jt.duration){const i=jt.currentTime/jt.duration*100;tf.style.width=i+"%",ef.textContent=zl(jt.currentTime)}}),jt.addEventListener("loadedmetadata",()=>{nf.textContent=zl(jt.duration)}),jt.addEventListener("error",()=>{mi=!1,ha(),rh()}),jt.load()}function ih(){if(!jt&&Be.length>0){Ga(0);return}jt&&(mi?(jt.pause(),mi=!1):(jt.play().catch(()=>{}),mi=!0),ha())}function lf(){Be.length!==0&&Ga((Dn+1)%Be.length)}function hM(){if(Be.length!==0){if(jt&&jt.currentTime>2){jt.currentTime=0;return}Ga((Dn-1+Be.length)%Be.length)}}function rh(){const r=$n.querySelector(`[data-index="${Dn}"]`);r&&(r.classList.add("unavailable"),setTimeout(()=>r.classList.remove("unavailable"),2e3))}function zl(r){if(!r||isNaN(r))return"0:00";const t=Math.floor(r/60),e=Math.floor(r%60);return`${t}:${e<10?"0":""}${e}`}function sh(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}let is=[];function dM(){const r=document.getElementById("notesGrid");r&&fM().then(()=>pM(r))}async function fM(){try{is=(await(await fetch("/data/content.json")).json()).notes||[]}catch{is=[]}}function pM(r){r.innerHTML=is.length===0?'<div class="note-empty">暂无笔记</div>':is.map(t=>{var e;return`
      <div class="note-card" data-note="${t.id}">
        <div class="note-card-icon">${t.icon||"📝"}</div>
        <h3>${Ua(t.title)}</h3>
        <p>${Ua((t.content||"").slice(0,80))}${((e=t.content)==null?void 0:e.length)>80?"…":""}</p>
        <div class="note-card-date">${t.date||""}</div>
        <div class="note-card-brush"></div>
      </div>`}).join(""),r.querySelectorAll(".note-card").forEach(t=>{t.addEventListener("click",()=>{const e=is.find(n=>n.id===t.dataset.note);e&&mM(e)})})}function mM(r){const t=document.createElement("div");t.className="note-overlay",t.innerHTML=`
    <div class="note-modal">
      <button class="note-modal-close">&times;</button>
      <div class="note-modal-title">${r.icon||"📝"} ${Ua(r.title)}</div>
      <div class="note-modal-meta">${r.date||""}</div>
      <div class="note-modal-body">${_M(r.content)}</div>
    </div>`,document.body.appendChild(t);const e=()=>t.remove();t.querySelector(".note-modal-close").addEventListener("click",e),t.addEventListener("click",n=>{n.target===t&&e()})}function _M(r){return Ua(r).split(`
`).filter(t=>t.trim()).map(t=>`<p>${t}</p>`).join("")}function Ua(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const ms="https://next-app-one-navy.vercel.app";function gM(){const r=document.getElementById("messageBoard");r&&kl(r)}function vM(){return`<div class="msg-skeleton">
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item" style="width:80%"></div>
  </div>`}async function kl(r){r.innerHTML=vM();try{const n=(await(await fetch(`${ms}/api/messages`)).json()).messages||[];r.innerHTML=`
      <form class="msg-form" id="msgForm">
        <input type="text" id="msgName" placeholder="你的名字" maxlength="30" required>
        <textarea id="msgText" placeholder="想说点什么…" maxlength="500" rows="3" required></textarea>
        <button type="submit" class="msg-submit">留言</button>
      </form>
      <div class="msg-list">
        ${n.length===0?'<div class="msg-empty">还没有留言，说点什么吧。</div>':""}
        ${n.map(i=>`
          <div class="msg-item">
            <div class="msg-meta">
              <span class="msg-name">${ah(i.name)}</span>
              <span class="msg-time">${SM(i.time)}</span>
            </div>
            <div class="msg-content">${ah(i.message)}</div>
          </div>`).join("")}
      </div>`,r.querySelector("#msgForm").addEventListener("submit",async i=>{i.preventDefault();const s=r.querySelector("#msgName").value.trim(),a=r.querySelector("#msgText").value.trim();if(!s||!a)return;const o=r.querySelector(".msg-submit");o.disabled=!0,o.textContent="发送中…";try{const l=await fetch(`${ms}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,message:a})});if(!l.ok)throw new Error(`HTTP ${l.status}`);kl(r)}catch{o.textContent="发送失败，重试",o.disabled=!1}})}catch{r.innerHTML='<div class="msg-error">加载失败，点击重试</div>',r.querySelector(".msg-error").addEventListener("click",()=>kl(r))}}function xM(){const r=document.getElementById("contactForm");r&&r.addEventListener("submit",async t=>{t.preventDefault();const e=r.querySelector(".contact-submit"),n=e.textContent;e.disabled=!0,e.textContent="发送中…";try{await fetch(`${ms}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.querySelector("#contactName").value,email:r.querySelector("#contactEmail").value,subject:r.querySelector("#contactSubject").value,message:r.querySelector("#contactMessage").value})}),e.textContent="已发送，感谢！",r.reset(),setTimeout(()=>{e.textContent=n,e.disabled=!1},3e3)}catch{e.textContent="发送失败，重试",e.disabled=!1}})}function MM(){fetch(`${ms}/api/stats`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"visit"})}).catch(()=>{})}async function yM(r){if(r)try{const e=await(await fetch(`${ms}/api/stats`)).json();r.innerHTML=`
      <div class="stat-item"><span class="stat-num">${e.pv}</span><span class="stat-label">浏览量</span></div>
      <div class="stat-item"><span class="stat-num">${e.uv}</span><span class="stat-label">访客</span></div>
      <div class="stat-item"><span class="stat-num">${e.plays}</span><span class="stat-label">播放</span></div>`}catch{r.innerHTML='<div class="stat-item">统计加载失败</div>'}}function SM(r){const t=new Date(r),n=new Date-t;return n<6e4?"刚刚":n<36e5?`${Math.floor(n/6e4)} 分钟前`:n<864e5?`${Math.floor(n/36e5)} 小时前`:t.toLocaleDateString("zh-CN")}function ah(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const No={},cf=(No==null?void 0:No.VITE_CHAT_API_BASE)||"https://hanbaoyu.ggff.net/v1",uf="cat-15e82e21a1292280105c3020f5dd0468884261de7144dedd",hf="wenruo_chat",oh=.7,Hl=2048,lh="",ch=!0,EM="你是温若，一位清冷淡雅的剑修。请用简短、优美、古风的方式回答。";function TM(){const r=document.getElementById("page-chat");if(!r)return;const t=document.getElementById("chatModelBtn"),e=document.getElementById("chatModelText"),n=document.getElementById("chatModelMenu"),i=document.getElementById("chatModelOverlay"),s=document.getElementById("chatModelList"),a=document.getElementById("chatModelClose"),o=document.getElementById("chatSettings"),l=document.getElementById("chatSettingsPanel"),c=document.getElementById("chatSettingsOverlay"),u=document.getElementById("chatSettingsClose"),p=document.getElementById("chatMessages"),m=document.getElementById("chatInput"),_=document.getElementById("chatSend"),g=document.getElementById("chatTemp"),h=document.getElementById("chatTempVal"),f=document.getElementById("chatMaxTokens"),d=document.getElementById("chatOcMode"),M=document.getElementById("chatClear"),x=document.getElementById("chatClearHeader"),v=document.getElementById("chatExport"),A=document.getElementById("chatWelcomePanel"),C=document.getElementById("chatWelcomeOverlay"),b=document.getElementById("chatWelcomeClose");if(!t||!n||!s||!p||!m)return;const R=IM();let y=[],S=null,E=null;uh(p,R.messages),st(R.temperature),g.value=Math.round(R.temperature*10),f.value=R.maxTokens,d&&(d.checked=R.ocMode),bM().then(mt=>{y=mt,wM(s,e,y,R.model,q=>{R.model=q,Li(R),O()})}).catch(()=>{e.textContent="模型加载失败"});function N(){n&&i&&(n.classList.add("open"),i.classList.add("open"))}function O(){n&&i&&(n.classList.remove("open"),i.classList.remove("open"))}t.addEventListener("click",mt=>{mt.preventDefault(),mt.stopPropagation(),n.classList.contains("open")?O():(V(),N())}),i&&(i.addEventListener("click",O),i.addEventListener("touchstart",O,{passive:!0})),a&&a.addEventListener("click",O);function W(){l&&c&&(l.classList.add("open"),c.classList.add("open"))}function V(){l&&c&&(l.classList.remove("open"),c.classList.remove("open"))}o.addEventListener("click",mt=>{mt.preventDefault(),mt.stopPropagation(),l.classList.contains("open")?V():(O(),W())}),c&&(c.addEventListener("click",V),c.addEventListener("touchstart",V,{passive:!0})),u&&u.addEventListener("click",V),document.addEventListener("keydown",mt=>{mt.key==="Escape"&&(O(),V())}),new MutationObserver(()=>{r.classList.contains("active")||(O(),V())}).observe(r,{attributes:!0,attributeFilter:["class"]}),g.addEventListener("input",()=>{const mt=parseInt(g.value,10)/10;R.temperature=mt,st(mt),Li(R)}),f.addEventListener("change",()=>{R.maxTokens=parseInt(f.value,10)||Hl,Li(R)}),d&&d.addEventListener("change",()=>{R.ocMode=d.checked,Li(R)});function Y(){confirm("确定要清空当前对话吗？")&&(R.messages=[],Li(R),uh(p,R.messages))}M&&M.addEventListener("click",()=>{Y(),V()}),x&&x.addEventListener("click",mt=>{mt.preventDefault(),mt.stopPropagation(),Y()}),v&&v.addEventListener("click",mt=>{mt.preventDefault(),mt.stopPropagation(),PM(R.messages)}),m.addEventListener("keydown",mt=>{mt.key==="Enter"&&(mt.preventDefault(),G())}),m.addEventListener("focus",()=>{setTimeout(()=>m.scrollIntoView({behavior:"smooth",block:"nearest"}),100)}),_.addEventListener("click",mt=>{mt.preventDefault(),mt.stopPropagation(),G()}),UM(m);async function G(){var dt,ut,Rt;const mt=m.value.trim();if(!mt)return;const q=R.model;if(!q){LM(p,"请先选择模型");return}if(S)return;const Z={role:"user",content:mt};R.messages.push(Z),df(p,Z),m.value="",m.style.height="auto",Li(R),S=new AbortController,E="msg-"+Date.now(),DM(p,E);try{const Et=await fetch(`${cf}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${uf}`},body:JSON.stringify({model:q,messages:RM(R.messages,R.ocMode),temperature:R.temperature,max_tokens:R.maxTokens,stream:!0}),signal:S.signal});if(!Et.ok){const re=await Et.text();throw new Error(`API ${Et.status}: ${re}`)}const Ft=Et.body.getReader(),ie=new TextDecoder("utf-8");let D="";for(;;){const{done:re,value:Gt}=await Ft.read();if(re)break;const vt=ie.decode(Gt,{stream:!0}).split(`
`);for(const he of vt){const St=he.trim();if(!(!St||St==="data: [DONE]")&&St.startsWith("data:"))try{const P=((Rt=(ut=(dt=JSON.parse(St.slice(5)).choices)==null?void 0:dt[0])==null?void 0:ut.delta)==null?void 0:Rt.content)||"";P&&(D+=P,hh(E,D))}catch{}}}R.messages.push({role:"assistant",content:D}),Li(R),Fo(E,D)}catch(Et){Et.name==="AbortError"?Fo(E,"已取消"):(hh(E,`请求失败：${Et.message}`),Fo(E,`请求失败：${Et.message}`))}finally{S=null,E=null}}function st(mt){h.textContent=mt.toFixed(1)}function lt(){localStorage.getItem("wenruo_chat_welcome")!=="1"&&A&&C&&(A.classList.add("open"),C.classList.add("open"))}function ct(){A&&C&&(A.classList.remove("open"),C.classList.remove("open"));try{localStorage.setItem("wenruo_chat_welcome","1")}catch{}}b&&b.addEventListener("click",ct),C&&C.addEventListener("click",ct),new MutationObserver(()=>{r.classList.contains("active")?lt():ct()}).observe(r,{attributes:!0,attributeFilter:["class"]}),r.classList.contains("active")&&lt()}async function bM(){const r=await fetch(`${cf}/models`,{headers:{Authorization:`Bearer ${uf}`}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const e=((await r.json()).data||[]).map(n=>({id:n.id,name:n.id}));return e.sort((n,i)=>n.name.localeCompare(i.name)),e}function wM(r,t,e,n,i){if(!r)return;if(r.innerHTML="",e.length===0){t.textContent="无可用模型";return}const s=n||e[0].id,a=e.find(o=>o.id===s)||e[0];t.textContent=Oo(a.name),e.forEach(o=>{const l=AM(o.id),c=l?CM(l):"",u=document.createElement("button");u.className="chat-model-item",u.type="button",o.id===s&&u.classList.add("active"),u.innerHTML=`
      <div class="chat-model-item-main">
        ${c}
        <span class="chat-model-name">${Vl(Oo(o.name))}</span>
      </div>
      <span class="chat-model-id">${Vl(o.id)}</span>`,u.addEventListener("click",()=>{r.querySelectorAll(".chat-model-item").forEach(p=>p.classList.remove("active")),u.classList.add("active"),t.textContent=Oo(o.name),i(o.id)}),r.appendChild(u)})}function AM(r){const t=r.toLowerCase();return t.includes("deepseek")?"deepseek":t.includes("claude")||t.includes("anthropic")?"anthropic":t.includes("gpt")||t.includes("openai")||t.includes("o1-")||t.includes("o3-")?"chatgpt":t.includes("gemini")||t.includes("google")?"gemini":null}function CM(r){return{deepseek:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4D6BFA" d="M21.2 11c-.5-1.8-2.2-3.2-4.2-3.4-.4 0-.8-.3-1-.7-.2-.4-.1-.9.3-1.2.3-.3.9-.4 1.3-.2.3.2.6.5.7.8 0 .1.1.1.2.1.1 0 .2-.1.2-.2 0-.1-.1-.2-.2-.3-.5-.4-1.2-.4-1.8-.2-.8.3-1.4 1-1.5 1.8-.1.5 0 1.1.4 1.5.3.3.8.5 1.2.6.5.2 1.1.3 1.7.5.7.3 1.3.8 1.6 1.5.3.7.2 1.5-.2 2.1-.4.7-1.1 1.2-1.9 1.3-.7.1-1.5 0-2.1-.4-.6-.4-1.1-1-1.2-1.7-.1-.5 0-1 .3-1.3.3-.4.8-.5 1.2-.5.2 0 .5 0 .7.1.1 0 .2 0 .2-.1 0-.1 0-.2-.1-.2-.1-.1-.3-.2-.4-.2-.7-.2-1.5 0-2 .6-.5.6-.7 1.4-.5 2.1.2.9.8 1.7 1.6 2.1.8.4 1.8.5 2.7.2.9-.3 1.7-1.1 2-2 .3-.8.1-1.7-.4-2.4zM12 2.5c-4.4 0-8 3.4-8 7.8 0 4 2.9 7.3 6.8 8 .5.1 1.1 0 1.6-.3.4-.3.8-.7.9-1.2.1-.5 0-1-.4-1.3-.3-.3-.9-.5-1.3-.3-.4.1-.8.5-.9.8-.1.4-.1.8.2 1 .2.2.5.3.7.3.1 0 .3.2.2.4 0 .1-.1.3-.3.3-.3.2-.7.2-1.1.1-3-1-5.2-3.7-5.2-7 0-3.6 2.9-6.5 6.5-6.5 3.1 0 5.7 2.1 6.4 5 .1.4.5.7.9.8.4.1.9 0 1.2-.3.3-.3.4-.8.2-1.2C19.2 4.8 15.9 2.5 12 2.5z"/></svg>',anthropic:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M12 2L4 20h2.5l2-5h7l2 5H20L12 2zm1.5 11h-3l1.5-3.8 1.5 3.8z"/></svg>',chatgpt:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#10A37F" d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.2L17.5 7 12 9.8 6.5 7 12 4.2zM6 8.5l5 2.8v5.4l-5-2.5V8.5zm7 8.2v-5.4l5-2.8v5.7l-5 2.5z"/></svg>',gemini:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M12 1l2.5 7.5L12 12l-2.5-3.5L12 1z"/><path fill="#EA4335" d="M23 12l-7.5 2.5L12 12l3.5-2.5L23 12z"/><path fill="#FBBC05" d="M12 23l-2.5-7.5L12 12l2.5 3.5L12 23z"/><path fill="#34A853" d="M1 12l7.5-2.5L12 12l-3.5 2.5L1 12z"/></svg>'}[r]||""}function Oo(r){if(!r)return"";const t=18;return r.length>t?r.slice(0,t)+"…":r}function RM(r,t){const n=r.slice(-20).map(i=>({role:i.role,content:i.content}));return t?[{role:"system",content:EM},...n]:n}function PM(r){if(!r||r.length===0){alert("当前没有对话记录可导出");return}const t=r.map(s=>`${s.role==="user"?"你":"温若"}：${s.content}`).join(`

`),e=new Blob([t],{type:"text/plain;charset=utf-8"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`灵犀对话-${new Date().toISOString().slice(0,10)}.txt`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}function uh(r,t){if(r.innerHTML="",t.length===0){r.innerHTML=`
      <div class="chat-empty">
        <div class="chat-empty-title">✦ 灵犀初启</div>
        <div class="chat-empty-sub">温若在此，想问什么？</div>
      </div>`;return}t.forEach(e=>df(r,e)),Es(r)}function df(r,t){const e=r.querySelector(".chat-empty");e&&e.remove();const n=document.createElement("div");n.className=`chat-message chat-message-${t.role}`,n.innerHTML=`
    <div class="chat-avatar">${t.role==="user"?"客":"若"}</div>
    <div class="chat-bubble"><div class="chat-text">${Vl(t.content)}</div></div>`,r.appendChild(n),Es(r)}function LM(r,t){const e=document.createElement("div");e.className="chat-system",e.textContent=t,r.appendChild(e),Es(r)}function DM(r,t){const e=r.querySelector(".chat-empty");e&&e.remove();const n=document.createElement("div");n.className="chat-message chat-message-assistant streaming",n.id=t,n.innerHTML=`
    <div class="chat-avatar">若</div>
    <div class="chat-bubble"><div class="chat-text"></div><span class="chat-cursor"></span></div>`,r.appendChild(n),Es(r)}function hh(r,t){const e=document.getElementById(r);if(!e)return;const n=e.querySelector(".chat-text");n&&(n.textContent=t);const i=document.getElementById("chatMessages");Es(i)}function Fo(r,t){const e=document.getElementById(r);if(!e)return;e.classList.remove("streaming");const n=e.querySelector(".chat-cursor");n&&n.remove();const i=e.querySelector(".chat-text");i&&(i.textContent=t)}function Es(r){r&&(r.scrollTop=r.scrollHeight)}function IM(){try{const r=localStorage.getItem(hf),t=r?JSON.parse(r):{};return{messages:Array.isArray(t.messages)?t.messages:[],model:t.model||lh,temperature:typeof t.temperature=="number"?t.temperature:oh,maxTokens:t.maxTokens||Hl,ocMode:typeof t.ocMode=="boolean"?t.ocMode:ch}}catch{return{messages:[],model:lh,temperature:oh,maxTokens:Hl,ocMode:ch}}}function Li(r){try{localStorage.setItem(hf,JSON.stringify(r))}catch{}}function Vl(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}function UM(r){!r||r.tagName!=="TEXTAREA"||r.addEventListener("input",()=>{r.style.height="auto",r.style.height=Math.min(r.scrollHeight,160)+"px"})}async function NM(){const r=document.getElementById("pathTimeline");if(r)try{const n=((await(await fetch("/data/content.json?v="+Date.now())).json()).chronicle||[]).slice().reverse();r.innerHTML=n.length===0?'<div class="path-item">暂无记录</div>':n.map(i=>`
        <div class="path-item">
          <div class="path-year">${Bo(i.year||"")}</div>
          <div class="path-title">${Bo(i.title||"")}</div>
          <div class="path-desc">${Bo(i.desc||"")}</div>
        </div>
      `).join("")}catch{r.innerHTML='<div class="path-item">剑谱加载失败</div>'}}function Bo(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const dh=[{name:"上签 · 破云",text:"剑出鞘时云自开，今日所困，明日皆成踏脚石。"},{name:"上签 · 听松",text:"松下听风，不争而胜。慢下来，答案自己会走过来。"},{name:"中签 · 渡溪",text:"溪水虽浅，湿鞋难免。小心细节，便可稳渡。"},{name:"中签 · 磨刀",text:"工欲善其事，先磨三日刀。眼下蛰伏，是在攒锋。"},{name:"上签 · 拾叶",text:"落叶非无情物，化作春泥更护花。放下即是得到。"},{name:"下签 · 雾岭",text:"岭上雾重，宜守不宜进。今日多思少动，养精蓄锐。"},{name:"上签 · 惊鸿",text:"惊鸿一瞥，机遇转瞬即逝。看到就出手，别犹豫。"},{name:"中签 · 归舟",text:"行到水穷处，坐看云起时。此路不通时，换个码头。"},{name:"上签 · 藏锋",text:"大巧若拙，大辩若讷。真正的高手，从不亮剑两次。"},{name:"下签 · 逆水",text:"逆水行舟，不进则退。今日宜复盘旧账，清理负累。"}];function OM(){const r=document.getElementById("fortuneBox");if(!r)return;const t=document.getElementById("fortuneBtn"),e=document.getElementById("fortuneResult");let n=!1;t.addEventListener("click",()=>{n||(n=!0,t.disabled=!0,e.classList.remove("show"),r.classList.add("shaking"),setTimeout(()=>{r.classList.remove("shaking");const i=dh[Math.floor(Math.random()*dh.length)];e.innerHTML='<span class="fortune-name">'+i.name+"</span>"+i.text,e.classList.add("show"),t.disabled=!1,n=!1},1600))})}let bn=null;function FM(){const r=document.querySelector("[data-cosmos]");r&&r.addEventListener("click",BM)}function BM(){try{bn||(bn=YM())}catch(r){console.warn("Cosmos unavailable:",r);return}bn.overlay.classList.add("open"),bn.ui.classList.remove("faded"),document.body.style.overflow="hidden",bn.running=!0,bn.clock.getDelta(),requestAnimationFrame(bn.loop)}function fh(){bn&&(bn.overlay.classList.remove("open"),document.body.style.overflow="",bn.running=!1)}function rs(r,t){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),s=i.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return s.addColorStop(0,r),s.addColorStop(.3,r.replace("1)","0.55)")),s.addColorStop(.65,t.replace("0.6)","0.18)")),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),new zr(n)}function zM(){const r=new Rn,t=18e3,e=4,n=.9,i=13,s=new Float32Array(t*3),a=new Float32Array(t*3),o=new At(1,.78,.52),l=new At(.82,.86,1),c=new At(.45,.62,1);for(let v=0;v<t;v++){const A=Math.pow(Math.random(),1.6)*i+n,C=v%e/e*Math.PI*2,b=A*.55,R=(1.1-A/i)*.6+.12,y=(Math.random()-.5)*R*A*.35,S=(Math.random()-.5)*R*A*.35,E=(Math.random()-.5)*R*(1-A/i)*1.4;s[v*3]=Math.cos(C+b)*A+y,s[v*3+1]=E,s[v*3+2]=Math.sin(C+b)*A+S;const N=A/i,O=new At;N<.35?O.lerpColors(o,l,N/.35):O.lerpColors(l,c,(N-.35)/.65);const W=.85+Math.random()*.3;a[v*3]=Math.min(1,O.r*W),a[v*3+1]=Math.min(1,O.g*W),a[v*3+2]=Math.min(1,O.b*W)}const u=new Ie;u.setAttribute("position",new Ee(s,3)),u.setAttribute("color",new Ee(a,3));const p=rs("rgba(255,250,240,1)","rgba(160,180,255,0.6)"),m=new Sa({size:.16,map:p,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Wn,sizeAttenuation:!0});r.add(new Ea(u,m));const _=600,g=new Float32Array(_*3);for(let v=0;v<_;v++){const A=Math.pow(Math.random(),1.4)*i+n,C=Math.random()*Math.PI*2+A*.55;g[v*3]=Math.cos(C)*A+(Math.random()-.5),g[v*3+1]=(Math.random()-.5)*.8,g[v*3+2]=Math.sin(C)*A+(Math.random()-.5)}const h=new Ie;h.setAttribute("position",new Ee(g,3));const f=new Sa({size:.42,map:p,color:16773853,transparent:!0,opacity:.85,depthWrite:!1,blending:Wn});r.add(new Ea(h,f));const d=new xa(new as({map:rs("rgba(255,214,160,1)","rgba(255,150,90,0.6)"),transparent:!0,opacity:.9,depthWrite:!1,blending:Wn}));d.scale.set(7,7,1),r.add(d);const M=["rgba(140,120,255,0.6)","rgba(90,160,255,0.6)","rgba(200,110,220,0.6)","rgba(90,220,220,0.6)","rgba(255,140,160,0.6)"],x=[];for(let v=0;v<5;v++){const A=new xa(new as({map:rs("rgba(255,255,255,0.35)",M[v]),transparent:!0,opacity:.12,depthWrite:!1,blending:Wn,color:new At(M[v].replace(/[\d.]+\)/,"1)"))})),C=Math.random()*Math.PI*2,b=6+Math.random()*10;A.position.set(Math.cos(C)*b,(Math.random()-.5)*4,Math.sin(C)*b);const R=14+Math.random()*16;A.scale.set(R,R,1),r.add(A),x.push(A)}return{group:r,nebulas:x,brightMat:f}}function kM(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,256*.08,256/2,256/2,256/2);n.addColorStop(0,"#fffbe8"),n.addColorStop(.25,"#ffe9a8"),n.addColorStop(.5,"#ffbe5a"),n.addColorStop(.78,"#f07d2e"),n.addColorStop(1,"#8a2f08"),e.fillStyle=n,e.fillRect(0,0,256,256);for(let i=0;i<900;i++){const s=Math.random()*Math.PI*2,a=Math.pow(Math.random(),.6)*256*.48,o=256/2+Math.cos(s)*a,l=256/2+Math.sin(s)*a,c=1+Math.random()*3.2,u=Math.random()>.5;e.beginPath(),e.fillStyle=u?"rgba(255,244,200,0.16)":"rgba(160,60,10,0.14)",e.arc(o,l,c,0,Math.PI*2),e.fill()}return new zr(t)}function HM(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255,236,180,0.85)"),n.addColorStop(.22,"rgba(255,190,110,0.42)"),n.addColorStop(.5,"rgba(255,140,60,0.14)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.globalCompositeOperation="lighter";for(let i=0;i<14;i++){const s=i/14*Math.PI*2+Math.random()*.3,a=256*(.32+Math.random()*.16),o=256/2+Math.cos(s)*256*.14,l=256/2+Math.sin(s)*256*.14,c=256/2+Math.cos(s)*a,u=256/2+Math.sin(s)*a,p=e.createLinearGradient(o,l,c,u);p.addColorStop(0,"rgba(255,210,140,0.28)"),p.addColorStop(1,"rgba(255,140,60,0)"),e.strokeStyle=p,e.lineWidth=2.5+Math.random()*3.5,e.beginPath(),e.moveTo(o,l),e.lineTo(c,u),e.stroke()}return new zr(t)}function VM(){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#16324e"),i.addColorStop(.5,"#0d3d63"),i.addColorStop(1,"#122c46"),n.fillStyle=i,n.fillRect(0,0,512,256),[[.16,.32,.16],[.34,.58,.11],[.52,.26,.14],[.66,.48,.12],[.82,.3,.1],[.44,.74,.09],[.12,.68,.08]].forEach(([o,l,c])=>{for(let u=0;u<26;u++){const p=Math.random()*Math.PI*2,m=Math.pow(Math.random(),.7)*c*512,_=(o*512+Math.cos(p)*m+512)%512,g=Math.min(250,Math.max(6,l*256+Math.sin(p)*m*.6)),h=4+Math.random()*14,f=n.createRadialGradient(_,g,0,_,g,h),d=Math.random(),M=d>.72?"rgba(196,168,120,":d>.3?"rgba(84,128,72,":"rgba(60,102,60,";f.addColorStop(0,M+"0.95)"),f.addColorStop(1,M+"0)"),n.fillStyle=f,n.beginPath(),n.arc(_,g,h,0,Math.PI*2),n.fill()}});const a=n.createLinearGradient(0,0,0,256);return a.addColorStop(0,"rgba(235,244,250,0.95)"),a.addColorStop(.09,"rgba(235,244,250,0)"),a.addColorStop(.91,"rgba(235,244,250,0)"),a.addColorStop(1,"rgba(235,244,250,0.95)"),n.fillStyle=a,n.fillRect(0,0,512,256),new zr(e)}function GM(){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");n.clearRect(0,0,512,256);for(let i=0;i<90;i++){const s=Math.random()*512,a=256*.12+Math.random()*256*.76,o=20+Math.random()*70,l=6+Math.random()*16,c=n.createRadialGradient(s,a,0,s,a,o);c.addColorStop(0,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=c,n.save(),n.translate(s,a),n.scale(1,l/o),n.beginPath(),n.arc(0,0,o,0,Math.PI*2),n.fill(),n.restore()}return new zr(e)}function WM(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,256*.05,256/2,256/2,256/2);n.addColorStop(0,"#d9d4cd"),n.addColorStop(.7,"#b3ada5"),n.addColorStop(1,"#7d7873"),e.fillStyle=n,e.fillRect(0,0,256,256);for(let i=0;i<120;i++){const s=Math.random()*Math.PI*2,a=Math.pow(Math.random(),.5)*256*.46,o=256/2+Math.cos(s)*a,l=256/2+Math.sin(s)*a,c=1.5+Math.random()*7;e.beginPath(),e.fillStyle="rgba(70,66,62,0.35)",e.arc(o,l,c,0,Math.PI*2),e.fill(),e.beginPath(),e.fillStyle="rgba(230,226,220,0.28)",e.arc(o-c*.25,l-c*.25,c*.55,0,Math.PI*2),e.fill()}return new zr(t)}function XM(){const r=new Rn;r.position.set(4.6,.55,0);const e=new Rn;r.add(e);const n=.6,i=new Ve(new vr(n,48,32),new tc({map:kM()}));e.add(i);const s=new xa(new as({map:HM(),transparent:!0,opacity:.95,depthWrite:!1,blending:Wn}));s.scale.set(4.4,4.4,1),e.add(s);const a=new Av(16770744,90,30,1.6);e.add(a);const o=new Rn;e.add(o);const l=new Rn;l.position.set(1.75,0,0),o.add(l);const c=.22,u=new Ve(new vr(c,48,32),new Du({map:VM(),specular:new At(2771558),shininess:14}));u.rotation.z=.41,l.add(u);const p=new Ve(new vr(c*1.035,48,32),new Tv({map:GM(),transparent:!0,opacity:.55,depthWrite:!1}));p.rotation.z=.41,l.add(p);const m=new xa(new as({map:rs("rgba(120,180,255,0.55)","rgba(60,120,255,0.35)"),transparent:!0,opacity:.5,depthWrite:!1,blending:Wn}));m.scale.set(c*3.4,c*3.4,1),l.add(m);const _=new Rn;l.add(_);const g=new Ve(new vr(.062,32,24),new Du({map:WM(),shininess:4}));g.position.set(.48,0,0),_.add(g);const h=[];for(let M=0;M<=128;M++){const x=M/128*Math.PI*2;h.push(new F(Math.cos(x)*1.75,0,Math.sin(x)*1.75))}const f=new Ev(new Ie().setFromPoints(h),new Jh({color:8952251,transparent:!0,opacity:.28}));e.add(f);const d=new Cv(3359829,1.6);return e.add(d),{sys:r,sun:i,corona:s,sunLight:a,earthOrbit:o,earthPivot:l,earth:u,clouds:p,moonPivot:_,moon:g}}function qM(){const t=new Float32Array(7500);for(let i=0;i<2500;i++){const s=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=55+Math.random()*70;t[i*3]=o*Math.sin(a)*Math.cos(s),t[i*3+1]=o*Math.cos(a),t[i*3+2]=o*Math.sin(a)*Math.sin(s)}const e=new Ie;e.setAttribute("position",new Ee(t,3));const n=new Sa({size:.55,map:rs("rgba(255,255,255,1)","rgba(200,210,255,0.6)"),color:14542079,transparent:!0,opacity:.7,depthWrite:!1,blending:Wn});return new Ea(e,n)}function YM(){const r=document.createElement("div");r.className="cosmos-overlay",r.innerHTML='<canvas class="cosmos-canvas"></canvas><div class="cosmos-ui"><h2 class="cosmos-title">大千世界</h2><p class="cosmos-sub">三千世界，不过一瞬光影</p><p class="cosmos-hint">拖动环视 · 双指近观 · Esc 归来</p><button class="cosmos-close" type="button">归 来</button></div>',document.body.appendChild(r);const t=r.querySelector("canvas"),e=r.querySelector(".cosmos-ui"),n=new Kh({canvas:t,antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(197644,1);const i=new jh;i.fog=new ic(197644,.012);const s=new ke(60,window.innerWidth/window.innerHeight,.1,400),{group:a,nebulas:o,brightMat:l}=zM();i.add(a),i.add(qM());const c=XM();i.add(c.sys);const u={overlay:r,ui:e,renderer:n,scene:i,camera:s,running:!1,clock:new rc,baseAngle:0,rot:{x:0,y:0},cur:{dist:19},tgt:{rx:.18,ry:0,dist:19},dragging:!1,px:0,py:0,pointers:new Map,pinchDist:0,elapsed:0,reduced:Ec(),loop:null};u.loop=()=>{if(!u.running)return;const h=Math.min(u.clock.getDelta(),.05);u.elapsed+=h,!u.dragging&&!u.reduced&&(u.baseAngle+=h*.045),u.rot.x+=(u.tgt.rx-u.rot.x)*.055,u.rot.y+=(u.tgt.ry-u.rot.y)*.055,u.cur.dist+=(u.tgt.dist-u.cur.dist)*.07;const f=u.rot.x+.34,d=u.baseAngle+u.rot.y;if(s.position.set(Math.cos(d)*u.cur.dist*Math.cos(f),Math.sin(f)*u.cur.dist+1.6,Math.sin(d)*u.cur.dist*Math.cos(f)),s.lookAt(0,.4,0),!u.reduced){a.rotation.y+=h*.02,o.forEach((x,v)=>{x.material.rotation+=h*.02*(v%2?1:-1)}),l.opacity=.7+Math.sin(u.elapsed*2.1)*.25,c.sys.rotation.y+=h*.02,c.sun.rotation.y+=h*.06,c.corona.material.rotation+=h*.05;const M=1+Math.sin(u.elapsed*1.6)*.05;c.corona.scale.set(4.4*M,4.4*M,1),c.sunLight.intensity=90+Math.sin(u.elapsed*1.6)*12,c.earthOrbit.rotation.y+=h*.22,c.earth.rotation.y+=h*.9,c.clouds.rotation.y+=h*1.05,c.moonPivot.rotation.y+=h*.55,c.moon.rotation.y+=h*.55}n.render(i,s),requestAnimationFrame(u.loop)};const p=2.2,m=32,_=()=>{const h=Array.from(u.pointers.values());if(h.length<2)return 0;const f=h[0].x-h[1].x,d=h[0].y-h[1].y;return Math.hypot(f,d)};t.addEventListener("pointerdown",h=>{try{t.setPointerCapture(h.pointerId)}catch{}u.pointers.set(h.pointerId,{x:h.clientX,y:h.clientY}),u.pointers.size===1?(u.dragging=!0,u.px=h.clientX,u.py=h.clientY):u.pointers.size===2&&(u.dragging=!1,u.pinchDist=_()),e.classList.add("faded")}),t.addEventListener("pointermove",h=>{if(u.pointers.has(h.pointerId)){if(u.pointers.set(h.pointerId,{x:h.clientX,y:h.clientY}),u.pointers.size===2){const f=_();if(u.pinchDist>0&&f>0){const d=f/u.pinchDist;u.tgt.dist=Math.max(p,Math.min(m,u.tgt.dist/d))}u.pinchDist=f;return}u.dragging&&(u.tgt.ry+=(h.clientX-u.px)*.0042,u.tgt.rx=Math.max(-.85,Math.min(.85,u.tgt.rx+(h.clientY-u.py)*.0026)),u.px=h.clientX,u.py=h.clientY)}});const g=h=>{if(u.pointers.delete(h.pointerId),u.pointers.size===1){const f=Array.from(u.pointers.values())[0];u.dragging=!0,u.px=f.x,u.py=f.y,u.pinchDist=0}else u.pointers.size===0&&(u.dragging=!1,u.pinchDist=0)};return t.addEventListener("pointerup",g),t.addEventListener("pointercancel",g),t.addEventListener("wheel",h=>{h.preventDefault(),u.tgt.dist=Math.max(p,Math.min(m,u.tgt.dist+h.deltaY*.02)),e.classList.add("faded")},{passive:!1}),r.querySelector(".cosmos-close").addEventListener("click",fh),window.addEventListener("keydown",h=>{h.key==="Escape"&&fh()}),window.addEventListener("resize",()=>{u.overlay.classList.contains("open")&&(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight))}),window.__cosmosState=u,u}const ph="swordfly-best";let se=null,L=null;const Qr=(r,t,e)=>Math.max(t,Math.min(e,r)),zo=(r,t,e)=>r+(t-r)*e,Vt=(r,t)=>r+Math.random()*(t-r),mh=[523.25,587.33,659.25,783.99,880,1046.5,1174.7,1318.5],_h=[{top:[53,64,110],mid:[141,107,158],hor:[240,168,104],sun:[255,217,160],sunY:.3,star:0},{top:[61,107,158],mid:[123,163,200],hor:[207,228,240],sun:[255,244,214],sunY:.2,star:0},{top:[43,48,87],mid:[158,95,122],hor:[232,133,90],sun:[255,179,107],sunY:.44,star:.15},{top:[10,14,36],mid:[28,42,74],hor:[58,74,110],sun:[232,236,244],sunY:.26,star:1}];function gh(r){const t=Math.floor(r)%4,e=(t+1)%4,n=r-Math.floor(r),i=_h[t],s=_h[e],a=(o,l)=>o.map((c,u)=>Math.round(zo(c,l[u],n)));return{top:a(i.top,s.top),mid:a(i.mid,s.mid),hor:a(i.hor,s.hor),sun:a(i.sun,s.sun),sunY:zo(i.sunY,s.sunY,n),star:zo(i.star,s.star,n)}}function vh(r){return r<500?"炼气":r<1200?"筑基":r<2500?"金丹":r<4e3?"元婴":"化神"}const Ne={ctx:null,windGain:null,windSrc:null,muted:!1,init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext);const r=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,r,this.ctx.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<r;s++)n=n*.97+(Math.random()*2-1)*.03,e[s]=n*2.4;this.windSrc=this.ctx.createBufferSource(),this.windSrc.buffer=t,this.windSrc.loop=!0;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=420,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windSrc.connect(i),i.connect(this.windGain),this.windGain.connect(this.ctx.destination),this.windSrc.start()}catch{}},setWind(r){this.windGain&&!this.muted&&this.windGain.gain.setTargetAtTime(r,this.ctx.currentTime,.3)},pluck(r){if(!this.ctx||this.muted)return;const t=mh[Qr(r,0,mh.length-1)],e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=t,i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.18,e+.015),i.gain.exponentialRampToValueAtTime(1e-4,e+.5),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.55)},thunder(){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime,t=this.ctx.sampleRate*.5,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let o=0;o<t;o++)n[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.2);const i=this.ctx.createBufferSource();i.buffer=e;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=180;const a=this.ctx.createGain();a.gain.value=.32,i.connect(s),s.connect(a),a.connect(this.ctx.destination),i.start(r)},thud(){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime,t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,r),t.frequency.exponentialRampToValueAtTime(40,r+.4),e.gain.setValueAtTime(.3,r),e.gain.exponentialRampToValueAtTime(1e-4,r+.45),t.connect(e),e.connect(this.ctx.destination),t.start(r),t.stop(r+.5)}};function xh(r){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,r.replace("A","0.9")),i.addColorStop(.4,r.replace("A","0.35")),i.addColorStop(1,r.replace("A","0")),n.fillStyle=i,n.fillRect(0,0,64,64),e}function $M(){const r=document.createElement("div");return r.className="sf-overlay",r.innerHTML='<canvas class="sf-canvas"></canvas><div class="sf-hud" style="display:none"><div class="sf-hud-left"><span id="sf-dist">0</span> 丈</div><div class="sf-hud-mid" id="sf-realm">炼气</div><div class="sf-hud-right">◈ <span id="sf-stones">0</span></div></div><button class="sf-icon-btn sf-mute" title="音效开关">🔊</button><button class="sf-icon-btn sf-close">归 来</button><div class="sf-panel sf-menu"><h2 class="sf-title">御剑千山</h2><p class="sf-sub">剑气凌霄 · 一瞬千山</p><p class="sf-tips">按住屏幕 御剑升腾<br>松开手指 收剑下落</p><p class="sf-tips2">避浮峰 · 防雷劫 · 尽揽灵石</p><button class="sf-btn" id="sf-start" type="button">启 程</button><div class="sf-best" id="sf-best-menu"></div></div><div class="sf-panel sf-over" style="display:none"><h3 class="sf-over-title">坠 剑</h3><div class="sf-over-line" id="sf-over-stats"></div><div class="sf-over-total" id="sf-over-total"></div><div class="sf-over-realm" id="sf-over-realm"></div><div class="sf-best" id="sf-best-over"></div><button class="sf-btn" id="sf-retry" type="button">再 战</button></div>',document.body.appendChild(r),r}function KM(){const r=document.querySelector("[data-swordfly]");if(!r)return;r.addEventListener("click",()=>{se||(se=$M(),t()),s()});function t(){const h=se.querySelector(".sf-canvas"),f=h.getContext("2d");L={canvas:h,ctx:f,W:0,H:0,mode:"menu",running:!1,raf:0,last:0,t:0,elapsed:0,speed:260,worldX:0,dist:0,stones:0,streak:0,streakT:0,player:{x:0,y:0,vy:0},holding:!1,invuln:0,overAt:0,spires:[],clouds:[],gems:[],parts:[],winds:[],spawnT:1.2,stars:[],ambiClouds:[],reduced:Ec(),goldGlow:xh("rgba(255,200,110,A)"),jadeGlow:xh("rgba(120,232,205,A)"),sky:gh(2),hudDist:se.querySelector("#sf-dist"),hudStones:se.querySelector("#sf-stones"),hudRealm:se.querySelector("#sf-realm"),hud:se.querySelector(".sf-hud"),menu:se.querySelector(".sf-menu"),over:se.querySelector(".sf-over"),best:parseInt(localStorage.getItem(ph)||"0",10),_d:-1,_s:-1,_r:""},L.player.x=0;for(let M=0;M<160;M++)L.stars.push({fx:Math.random(),fy:Math.random()*.55,s:Vt(.6,1.8),p:Math.random()*7});for(let M=0;M<8;M++)L.ambiClouds.push({fx:Math.random()*1.6,fy:Vt(.08,.6),sc:Vt(.5,1.4),f:Vt(.1,.3),a:Vt(.1,.22)});const d=M=>{M.preventDefault(),e()};h.addEventListener("pointerdown",d),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),window.addEventListener("keydown",M=>{M.code==="Space"&&!M.repeat&&se.classList.contains("open")&&(M.preventDefault(),e()),M.key==="Escape"&&se.classList.contains("open")&&a()}),window.addEventListener("keyup",M=>{M.code==="Space"&&n()}),se.querySelector("#sf-start").addEventListener("click",()=>{Ne.init(),o()}),se.querySelector("#sf-retry").addEventListener("click",()=>{Ne.init(),o()}),se.querySelector(".sf-close").addEventListener("click",a),se.querySelector(".sf-mute").addEventListener("click",M=>{Ne.muted=!Ne.muted,M.target.textContent=Ne.muted?"🔇":"🔊",Ne.muted&&Ne.setWind(0)}),window.addEventListener("resize",()=>{se.classList.contains("open")&&i()})}function e(){if(!(!L||!L.running)){if(L.mode==="menu"){Ne.init(),o();return}if(L.mode==="over"){L.t-L.overAt>.9&&o();return}L.holding=!0}}function n(){L&&(L.holding=!1)}function i(){const h=se.getBoundingClientRect();L.W=h.width,L.H=h.height;const f=Math.min(window.devicePixelRatio||1,2);L.canvas.width=Math.round(h.width*f),L.canvas.height=Math.round(h.height*f),L.ctx.setTransform(f,0,0,f,0,0),L.player.x=Math.round(L.W*.28),L.mode==="menu"&&(L.player.y=L.H*.45)}function s(){se.classList.add("open"),document.body.style.overflow="hidden",i(),L.mode="menu",L.menu.style.display="",L.over.style.display="none",L.hud.style.display="none",se.querySelector("#sf-best-menu").textContent=L.best>0?"最远纪录 "+L.best+" 分":"御剑之道，始于足下",L.running=!0,L.last=performance.now(),cancelAnimationFrame(L.raf),L.raf=requestAnimationFrame(g)}function a(){se.classList.remove("open"),document.body.style.overflow="",L.running=!1,L.holding=!1,cancelAnimationFrame(L.raf),Ne.setWind(0)}function o(){L.mode="playing",L.menu.style.display="none",L.over.style.display="none",L.hud.style.display="",L.t=0,L.elapsed=0,L.dist=0,L.stones=0,L.streak=0,L.streakT=0,L.speed=240,L.spawnT=1.6,L.invuln=1.5,L.player.y=L.H*.45,L.player.vy=0,L.spires.length=0,L.clouds.length=0,L.gems.length=0,L.parts.length=0,L._d=-1,L._s=-1,L._r=""}function l(h){if(L.invuln>0)return;L.mode="over",L.overAt=L.t,L.holding=!1,Ne.thud(),Ne.setWind(.02);const f=L.reduced?14:34;for(let M=0;M<f;M++){const x=Math.random()*Math.PI*2,v=Vt(40,320);L.parts.push({type:"ink",x:L.player.x,y:L.player.y,vx:Math.cos(x)*v,vy:Math.sin(x)*v-60,life:0,max:Vt(.5,1.1),size:Vt(3,11)})}const d=Math.floor(L.dist)+L.stones*25;d>L.best&&(L.best=d,localStorage.setItem(ph,String(d))),se.querySelector("#sf-over-stats").textContent="行程 "+Math.floor(L.dist)+" 丈 · 灵石 "+L.stones+" 枚",se.querySelector("#sf-over-total").textContent="总分 "+d,se.querySelector("#sf-over-realm").textContent="此行境界 · "+vh(L.dist),se.querySelector("#sf-best-over").textContent="最远纪录 "+L.best+" 分",setTimeout(()=>{L.mode==="over"&&(L.hud.style.display="none",L.over.style.display="")},650)}function c(){const h=Math.random();if(h<.48){const f=Qr(260-L.elapsed*.6,195,260),d=Vt(L.H*.25,L.H*.68),M=Vt(54,78),x=L.W+60;if(L.spires.push({x,w:M,topH:d-f/2,botY:d+f/2,seed:Math.random()*10}),Math.random()<.7){const v=3+Math.floor(Math.random()*3);for(let A=0;A<v;A++)L.gems.push({x:x+M/2+(A-(v-1)/2)*30,y:d,ph:Math.random()*7})}}else if(h<.78){const f=6+Math.floor(Math.random()*4),d=Vt(L.H*.2,L.H*.7),M=Vt(30,70),x=L.W+60;for(let v=0;v<f;v++)L.gems.push({x:x+v*34,y:d+Math.sin(v/f*Math.PI)*M*(Math.random()<.5?1:-1),ph:Math.random()*7})}else L.elapsed>14&&L.clouds.push({x:L.W+90,y:Vt(L.H*.16,L.H*.5),rx:Vt(46,64),ry:Vt(22,30),state:"drift",t:0,cool:Vt(.8,1.6),seed:Math.random()*10})}function u(h){L.elapsed+=h,L.speed=Math.min(600,240+L.elapsed*6);const f=L.speed*h;L.worldX+=f,L.dist+=f/40,L.invuln>0&&(L.invuln-=h),L.streakT>0&&(L.streakT-=h,L.streakT<=0&&(L.streak=0));const d=L.player;if(d.vy+=(L.holding?-2350:1500)*h,d.vy*=1-.55*h,d.vy=Qr(d.vy,-500,640),d.y+=d.vy*h,d.y<34&&(d.y=34,d.vy=Math.max(d.vy,60)),d.y>L.H*.9){l();return}if(!L.reduced)for(let v=0;v<2;v++)L.parts.push({type:"trail",x:d.x-26+Vt(-3,3),y:d.y+10+Vt(-3,3),vx:-L.speed*.25+Vt(-15,15),vy:Vt(-18,18),life:0,max:Vt(.25,.5),size:Vt(6,13)});!L.reduced&&Math.random()<L.speed/620*.5&&L.winds.push({x:L.W+40,y:Vt(30,L.H*.88),len:Vt(40,120),a:Vt(.05,.16)}),L.spawnT-=h,L.spawnT<=0&&(c(),L.spawnT=Qr(Vt(1.4,1.9)-L.elapsed*.005,1,1.9));for(const v of L.spires)v.x-=f;L.spires=L.spires.filter(v=>v.x+v.w>-60);for(const v of L.clouds)v.x-=f,v.t+=h,v.state==="drift"&&v.t>v.cool?(v.state="charge",v.t=0):v.state==="charge"&&v.t>1.05?(v.state="bolt",v.t=0,Ne.thunder()):v.state==="bolt"&&v.t>.16&&(v.state="drift",v.t=0,v.cool=Vt(1.2,2.2));L.clouds=L.clouds.filter(v=>v.x+v.rx>-80);for(const v of L.gems)v.x-=f;L.gems=L.gems.filter(v=>v.x>-40&&!v.dead);for(const v of L.winds)v.x-=L.speed*1.9*h;L.winds=L.winds.filter(v=>v.x+v.len>-20);for(const v of L.parts)v.life+=h,v.x+=v.vx*h,v.y+=v.vy*h,v.type==="ink"&&(v.vy+=500*h);if(L.parts=L.parts.filter(v=>v.life<v.max),L.invuln<=0){const v=d.x,A=d.y,C=9;for(const b of L.spires)if(v+C>b.x&&v-C<b.x+b.w&&(A-C<b.topH||A+C>b.botY)){l();return}for(const b of L.clouds){const R=(v-b.x)/b.rx,y=(A-b.y)/b.ry;if(R*R+y*y<.7){l();return}if(b.state==="bolt"){const S=b.x+Math.sin(b.seed*40)*12,E=b.y+b.ry*.7,N=E+280;if(A>E&&A<N&&Math.abs(v-S)<15){l();return}}}}for(const v of L.gems){const A=v.x-d.x,C=v.y-d.y;if(A*A+C*C<28*28){v.dead=!0,L.stones++,L.streak=Math.min(L.streak+1,8),L.streakT=2.4,Ne.pluck(L.streak-1);for(let b=0;b<(L.reduced?4:10);b++){const R=Math.random()*Math.PI*2,y=Vt(30,140);L.parts.push({type:"jade",x:v.x,y:v.y,vx:Math.cos(R)*y,vy:Math.sin(R)*y,life:0,max:Vt(.3,.6),size:Vt(4,9)})}}}const M=Math.floor(L.dist);M!==L._d&&(L._d=M,L.hudDist.textContent=M),L.stones!==L._s&&(L._s=L.stones,L.hudStones.textContent=L.stones);const x=vh(L.dist);x!==L._r&&(L._r=x,L.hudRealm.textContent=x),Ne.setWind(.04+L.speed/620*.1)}function p(h,f,d,M,x){const v=L.ctx;v.beginPath(),v.moveTo(-20,L.H+20);for(let A=-20;A<=L.W+20;A+=16){const C=A+h,b=Math.sin(C*.0021+x)*.55+Math.sin(C*.0058+x*1.9)*.3+Math.sin(C*.016+x*3.1)*.15;v.lineTo(A,f-(b*.5+.5)*d)}v.lineTo(L.W+20,L.H+20),v.closePath(),v.fillStyle=M,v.fill()}function m(){const h=L.ctx,f=L.player,d=L.t;if(L.mode==="over")return;const M=L.invuln>0&&Math.floor(L.t*12)%2===0;h.save(),h.translate(f.x,f.y),h.rotate(Qr(f.vy*55e-5,-.32,.42)+(L.mode==="menu"?Math.sin(d*1.4)*.05:0)),M&&(h.globalAlpha=.35);const x=Math.sin(d*13)*(L.holding?3.2:1.6);h.globalCompositeOperation="lighter",h.drawImage(L.goldGlow,-64,-8,52,26),h.globalCompositeOperation="source-over",h.beginPath(),h.moveTo(-34,9),h.quadraticCurveTo(0,4,36,9),h.quadraticCurveTo(0,14,-34,9),h.closePath(),h.fillStyle="#0d1124",h.fill(),h.strokeStyle="rgba(255,205,130,0.65)",h.lineWidth=1.1,h.stroke(),h.fillStyle="#0d1124",h.beginPath(),h.moveTo(-1,-14),h.quadraticCurveTo(6,-12,7,-2),h.quadraticCurveTo(8,4,4,8),h.quadraticCurveTo(-2,9,-8,8),h.quadraticCurveTo(-13-x,5,-11-x*1.4,-2),h.quadraticCurveTo(-9,-10,-1,-14),h.closePath(),h.fill(),h.beginPath(),h.moveTo(-4,-8),h.quadraticCurveTo(-14-x*2,-6,-20-x*2.6,-1),h.quadraticCurveTo(-14-x*2,-2,-6,-3),h.closePath(),h.fill(),h.beginPath(),h.arc(2,-18,4.2,0,Math.PI*2),h.fill(),h.beginPath(),h.arc(2,-23,1.6,0,Math.PI*2),h.fill(),h.strokeStyle="rgba(255,205,130,0.4)",h.lineWidth=.8,h.beginPath(),h.arc(2,-18,4.2,-.9,.9),h.stroke(),h.restore()}function _(){const h=L.ctx,f=L.W,d=L.H,M=L.dist/1600%4,x=gh(M+2);L.sky=x;const v=h.createLinearGradient(0,0,0,d);if(v.addColorStop(0,`rgb(${x.top})`),v.addColorStop(.55,`rgb(${x.mid})`),v.addColorStop(1,`rgb(${x.hor})`),h.fillStyle=v,h.fillRect(0,0,f,d),x.star>.02){h.save();for(const E of L.stars){const N=.5+Math.sin(L.t*2+E.p)*.5;h.globalAlpha=x.star*N*.8,h.fillStyle="#e8ecf8",h.fillRect(E.fx*f,E.fy*d,E.s,E.s)}h.restore()}const A=f*.72,C=d*x.sunY,b=h.createRadialGradient(A,C,0,A,C,130);b.addColorStop(0,`rgba(${x.sun},0.95)`),b.addColorStop(.25,`rgba(${x.sun},0.5)`),b.addColorStop(1,`rgba(${x.sun},0)`),h.fillStyle=b,h.fillRect(A-130,C-130,260,260),h.beginPath(),h.arc(A,C,26,0,Math.PI*2),h.fillStyle=`rgba(${x.sun},0.95)`,h.fill(),p(L.worldX*.06,d*.62,d*.16,`rgba(${x.top},0.55)`,3.7),p(L.worldX*.14,d*.72,d*.2,"rgba(26,32,60,0.55)",8.2),p(L.worldX*.3,d*.84,d*.24,"rgba(15,19,40,0.9)",5.1);for(const E of L.ambiClouds){const N=((E.fx*(f+400)-L.worldX*E.f)%(f+400)+f+400)%(f+400)-200,O=E.fy*d;h.save(),h.globalAlpha=E.a,h.fillStyle="#eef2fa",h.beginPath(),h.ellipse(N,O,60*E.sc,14*E.sc,0,0,Math.PI*2),h.ellipse(N+30*E.sc,O-8*E.sc,34*E.sc,12*E.sc,0,0,Math.PI*2),h.fill(),h.restore()}h.save(),h.strokeStyle="#ffffff",h.lineWidth=1;for(const E of L.winds)h.globalAlpha=E.a,h.beginPath(),h.moveTo(E.x,E.y),h.lineTo(E.x+E.len,E.y),h.stroke();h.restore();for(const E of L.gems){const N=1+Math.sin(L.t*4+E.ph)*.15;h.drawImage(L.jadeGlow,E.x-22*N,E.y-22*N,44*N,44*N),h.save(),h.translate(E.x,E.y),h.rotate(L.t*1.6+E.ph),h.beginPath(),h.moveTo(0,-7),h.lineTo(5,0),h.lineTo(0,7),h.lineTo(-5,0),h.closePath(),h.fillStyle="#8ef0d8",h.fill(),h.strokeStyle="rgba(255,255,255,0.7)",h.lineWidth=.8,h.stroke(),h.restore()}for(const E of L.spires)h.fillStyle="#0c1024",h.beginPath(),h.moveTo(E.x,-4),h.lineTo(E.x+E.w,-4),h.lineTo(E.x+E.w*.72,E.topH*.62),h.lineTo(E.x+E.w*.52,E.topH),h.lineTo(E.x+E.w*.3,E.topH*.58),h.closePath(),h.fill(),h.beginPath(),h.moveTo(E.x,d+4),h.lineTo(E.x+E.w,d+4),h.lineTo(E.x+E.w*.7,E.botY+(d-E.botY)*.4),h.lineTo(E.x+E.w*.5,E.botY),h.lineTo(E.x+E.w*.28,E.botY+(d-E.botY)*.42),h.closePath(),h.fill(),h.strokeStyle="rgba(255,205,130,0.35)",h.lineWidth=1,h.beginPath(),h.moveTo(E.x+E.w*.3,E.topH*.58),h.lineTo(E.x+E.w*.52,E.topH),h.lineTo(E.x+E.w*.72,E.topH*.62),h.stroke(),h.beginPath(),h.moveTo(E.x+E.w*.28,E.botY+(d-E.botY)*.42),h.lineTo(E.x+E.w*.5,E.botY),h.lineTo(E.x+E.w*.7,E.botY+(d-E.botY)*.4),h.stroke();for(const E of L.clouds){const N=E.state==="charge"?E.t/1.05:E.state==="bolt"?1:0;if(h.save(),h.fillStyle=`rgba(${Math.round(30+N*40)},${Math.round(28+N*20)},${Math.round(52+N*60)},0.92)`,h.beginPath(),h.ellipse(E.x,E.y,E.rx,E.ry,0,0,Math.PI*2),h.ellipse(E.x-E.rx*.5,E.y+4,E.rx*.55,E.ry*.8,0,0,Math.PI*2),h.ellipse(E.x+E.rx*.5,E.y+4,E.rx*.55,E.ry*.8,0,0,Math.PI*2),h.fill(),N>0&&(h.globalAlpha=N*(.5+Math.sin(L.t*18)*.3),h.strokeStyle="#b8a8ff",h.lineWidth=1.6,h.beginPath(),h.ellipse(E.x,E.y,E.rx*.9,E.ry*.85,0,0,Math.PI*2),h.stroke(),h.globalAlpha=1),E.state==="bolt"){const O=E.x+Math.sin(E.seed*40)*12;let W=O,V=E.y+E.ry*.7;for(h.strokeStyle="#e8e0ff",h.lineWidth=2.6,h.shadowColor="#a890ff",h.shadowBlur=12,h.beginPath(),h.moveTo(W,V);V<E.y+E.ry*.7+280;)V+=22,W=O+Vt(-14,14),h.lineTo(W,V);h.stroke(),h.shadowBlur=0}h.restore()}for(const E of L.parts){const N=1-E.life/E.max;E.type==="trail"?(h.globalCompositeOperation="lighter",h.globalAlpha=N*.8,h.drawImage(L.goldGlow,E.x-E.size*N,E.y-E.size*N,E.size*2*N,E.size*2*N),h.globalCompositeOperation="source-over"):E.type==="jade"?(h.globalCompositeOperation="lighter",h.globalAlpha=N,h.drawImage(L.jadeGlow,E.x-E.size*N,E.y-E.size*N,E.size*2*N,E.size*2*N),h.globalCompositeOperation="source-over"):(h.globalAlpha=N*.85,h.fillStyle="#0d1124",h.beginPath(),h.arc(E.x,E.y,E.size*(.5+N*.5),0,Math.PI*2),h.fill()),h.globalAlpha=1}m();const R=d*.9;h.save();const y=h.createLinearGradient(0,R,0,d);y.addColorStop(0,`rgba(${x.hor},0)`),y.addColorStop(.45,`rgba(${x.hor},0.55)`),y.addColorStop(1,`rgba(${x.mid},0.85)`),h.fillStyle=y,h.fillRect(0,R,f,d-R),h.fillStyle="rgba(238,242,250,0.5)";for(let E=0;E<7;E++){const N=((E*.17*(f+300)-L.worldX*.5)%(f+300)+f+300)%(f+300)-150;h.beginPath(),h.ellipse(N,R+8+Math.sin(L.t*1.2+E)*3,90,16,0,0,Math.PI*2),h.fill()}h.restore();const S=h.createRadialGradient(f/2,d/2,d*.36,f/2,d/2,d*.85);S.addColorStop(0,"rgba(6,8,18,0)"),S.addColorStop(1,"rgba(6,8,18,0.42)"),h.fillStyle=S,h.fillRect(0,0,f,d)}function g(h){if(!L.running)return;const f=Math.min((h-L.last)/1e3,.033);if(L.last=h,L.t+=f,L.mode==="playing")u(f);else{L.worldX+=30*f,L.mode==="menu"&&(L.dist=(L.dist+12*f)%6400,L.player.y=L.H*.45+Math.sin(L.t*1.6)*14,L.player.vy=Math.cos(L.t*1.6)*40,!L.reduced&&Math.random()<.3&&L.parts.push({type:"trail",x:L.player.x-26,y:L.player.y+10,vx:-20,vy:Vt(-10,10),life:0,max:.5,size:Vt(6,11)}));for(const d of L.parts)d.life+=f,d.x+=d.vx*f,d.y+=d.vy*f,d.type==="ink"&&(d.vy+=500*f);L.parts=L.parts.filter(d=>d.life<d.max)}_(),L.raf=requestAnimationFrame(g)}window.__swordfly={get G(){return L},startRun:()=>{L&&(Ne.init(),o())}}}function jM(){const r=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=window.innerWidth<=768;return t||e&&n}function ZM(){const r=document.createElement("div");return r.className="mc-overlay",r.innerHTML=`
    <div class="mc-device-select" id="mc-device-select">
      <div class="mc-device-title">选择你的设备</div>
      <div class="mc-device-sub">方寸之间，重构大千</div>
      <div class="mc-device-grid">
        <button class="mc-device-btn" data-device="desktop">
          <div class="mc-device-icon">🖥️</div>
          <div class="mc-device-name">桌面模式</div>
          <div class="mc-device-desc">键鼠精准操控 · 3D 沉浸体验</div>
        </button>
        <button class="mc-device-btn" data-device="mobile">
          <div class="mc-device-icon">📱</div>
          <div class="mc-device-name">移动端模式</div>
          <div class="mc-device-desc">触屏优化 · 虚拟摇杆 · 快捷栏</div>
        </button>
      </div>
      <div class="mc-device-hint">移动端将自动切换至 2D 大荒史诗</div>
    </div>
    <div class="mc-container" id="mc-container" style="display:none">
      <div class="mc-header">
        <div class="mc-tabs">
          <button class="mc-tab-btn active" data-mode="3d">三千世界 (3D)</button>
          <button class="mc-tab-btn" data-mode="2d">大荒史诗 (2D)</button>
        </div>
        <div class="mc-controls">
          <button class="mc-ctrl-btn mc-fullscreen-btn" title="全屏独立体验">全屏</button>
          <button class="mc-ctrl-btn mc-close-btn">归 来</button>
        </div>
      </div>
      <div class="mc-body">
        <div class="mc-loader">探索方块世界中...</div>
        <iframe id="mc-frame" src="https://minecraft.kelvinzhang.ca" allow="autoplay; fullscreen; keyboard" allowfullscreen></iframe>
      </div>
      <div class="mc-footer">
        <div class="mc-tips" id="mc-tips-content">
          W/A/S/D 行走 · 空格跳跃 · 鼠标移动视角 | 左键破坏 · 右键放置 · 数字键切换方块
        </div>
      </div>
    </div>
  `,document.body.appendChild(r),r}function JM(){const r=document.querySelector("[data-minecraft]");if(!r)return;let t=null,e=null,n=null,i=null,s="desktop";function a(l){s=l;const c=l==="mobile";n.style.display="flex",i.style.display="none",n.classList.toggle("mc-mobile",c),n.classList.toggle("mc-desktop",!c);const u=n.querySelectorAll(".mc-tab-btn"),p=n.querySelector('[data-mode="3d"]'),m=n.querySelector('[data-mode="2d"]');c?(p.style.display="none",u.forEach(g=>g.classList.remove("active")),m.classList.add("active"),e.src="https://turbowarp.org/662310182/embed",n.querySelector("#mc-tips-content").textContent="触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角"):(p.style.display="",u.forEach(g=>g.classList.remove("active")),p.classList.add("active"),e.src="https://minecraft.kelvinzhang.ca",n.querySelector("#mc-tips-content").textContent="W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质");const _=n.querySelector(".mc-loader");_.style.display="flex",e.onload=()=>{_.style.display="none"}}function o(){if(t){if(t.classList.remove("open"),document.body.style.overflow="",document.fullscreenElement)try{document.exitFullscreen()}catch{}n.style.display="none",i.style.display="flex",i.querySelectorAll(".mc-device-btn").forEach(l=>l.classList.remove("selected")),e&&(e.src="about:blank")}}r.addEventListener("click",()=>{if(!t){t=ZM(),e=t.querySelector("#mc-frame"),n=t.querySelector("#mc-container"),i=t.querySelector("#mc-device-select"),i.querySelectorAll(".mc-device-btn").forEach(p=>{p.addEventListener("click",()=>{i.querySelectorAll(".mc-device-btn").forEach(m=>m.classList.remove("selected")),p.classList.add("selected"),setTimeout(()=>a(p.dataset.device),300)})});const u=n.querySelectorAll(".mc-tab-btn");u.forEach(p=>{p.addEventListener("click",()=>{if(p.classList.contains("active")||s==="mobile"&&p.dataset.mode==="3d")return;u.forEach(g=>g.classList.remove("active")),p.classList.add("active");const m=p.dataset.mode,_=n.querySelector(".mc-loader");_.style.display="flex",m==="3d"?(e.src="https://minecraft.kelvinzhang.ca",n.querySelector("#mc-tips-content").textContent="W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质"):(e.src="https://turbowarp.org/662310182/embed",n.querySelector("#mc-tips-content").textContent=s==="mobile"?"触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角":"W/A/S/D/方向键移动 · 鼠标点击挖掘/放置 · 1-9 工具切换 · E 打开背包"),e.onload=()=>{_.style.display="none"}})}),n.querySelector(".mc-close-btn").addEventListener("click",o),n.querySelector(".mc-fullscreen-btn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch(p=>console.error("Fullscreen failed:",p))})}const l=jM(),c=i.querySelector(`[data-device="${l?"mobile":"desktop"}"]`);c&&c.classList.add("recommended"),n.style.display="none",i.style.display="flex",e.src="about:blank",t.classList.add("open"),document.body.style.overflow="hidden"}),window.addEventListener("keydown",l=>{l.key==="Escape"&&t&&t.classList.contains("open")&&o()})}function QM(){if("IntersectionObserver"in window){const r=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("is-visible")})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".section-card, .note-card, .path-item, .explore-header").forEach(t=>{t.classList.add("reveal"),r.observe(t)})}}function ty(){window.matchMedia("(pointer: coarse)").matches||document.querySelectorAll(".tilt-card, .section-card, .note-card, .path-item").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,s=n/e.width-.5,a=i/e.height-.5;r.style.transform=`perspective(1000px) rotateY(${s*6}deg) rotateX(${-a*6}deg) translateZ(6px)`}),r.addEventListener("mouseleave",()=>{r.style.transform=""})})}function ey(){const r=document.createElement("div");r.className="scroll-ink",r.setAttribute("aria-hidden","true"),document.body.appendChild(r),window.addEventListener("scroll",()=>{const t=document.documentElement,e=t.scrollTop||document.body.scrollTop,n=t.scrollHeight-t.clientHeight;r.style.width=(n?e/n*100:0)+"%"},{passive:!0})}function ny(){const r=document.getElementById("inkLoader");r&&(document.readyState==="complete"?setTimeout(()=>r.classList.add("loaded"),600):window.addEventListener("load",()=>{setTimeout(()=>r.classList.add("loaded"),300)}))}async function iy(){Uv(document.getElementById("bg-image"));const r=await eM(),t=document.querySelector(".intro-quote");t&&r.quotes&&r.quotes.length?(t.textContent=r.quotes[0].text,ry(t,r.quotes)):t&&(t.textContent=r.intro.quote,sy(t,r.intro.quote)),document.querySelector(".intro-subtitle").textContent=r.intro.subtitle,document.querySelector(".intro-desc").textContent=r.intro.desc,document.title=r.site.title;const e=document.getElementById("webgl-bg"),n=document.getElementById("cursor-aura");let i=null,s=null,a=null,o=null;if(!Ec())try{i=new Rv(e),s=new Pv(i.scene,{count:eh()?3:6}),eh()||(a=new Lv(n));const l=new rc,c=()=>{const u=l.getElapsedTime(),p=window.scrollY/(document.body.scrollHeight-window.innerHeight);i.animate(),s&&s.update(u,p),o=requestAnimationFrame(c)};c()}catch(l){console.warn("WebGL effects unavailable, falling back to static content:",l),e.style.background="radial-gradient(ellipse at center, #1a1f18 0%, #0c0f0a 100%)"}return tM(r.intro),nM(),ay(),dM(),gM(),xM(),TM(),NM(),OM(),FM(),KM(),JM(),oy(),QM(),ty(),ey(),ny(),MM(),yM(document.getElementById("statsBar")),()=>{o&&cancelAnimationFrame(o),i&&i.destroy(),a&&a.destroy()}}function ry(r,t){let e=0;setInterval(()=>{e=(e+1)%t.length,r.style.opacity="0",setTimeout(()=>{r.textContent=t[e].text||t[e],r.style.opacity="1"},500)},6e3)}async function sy(r,t){try{const e=await fetch("https://v1.hitokoto.cn");if(!e.ok)throw new Error("Hitokoto API error");const n=await e.json();n&&n.hitokoto&&(r.textContent=n.hitokoto)}catch(e){console.warn("Hitokoto load failed:",e),r.textContent=t}}function ay(){const r=document.querySelectorAll(".ios-nav-tab"),t=document.querySelectorAll(".page"),e=document.querySelector(".ios-nav-inner");if(r.forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.page;r.forEach(s=>s.classList.remove("active")),n.classList.add("active"),t.forEach(s=>{s.classList.toggle("active",s.id===`page-${i}`)}),window.scrollTo({top:0,behavior:"smooth"})})}),e){const n=()=>{e.classList.toggle("scrolled",window.scrollY>10)};window.addEventListener("scroll",n,{passive:!0}),n()}}function oy(){document.querySelectorAll(".note-card").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect();r.style.setProperty("--mx",(t.clientX-e.left)/e.width*100+"%"),r.style.setProperty("--my",(t.clientY-e.top)/e.height*100+"%")})})}iy().catch(r=>{console.error("Failed to initialize app:",r)});
//# sourceMappingURL=index-wXYeeTHl.js.map
