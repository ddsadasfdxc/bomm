(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="166",gf=0,Dc=1,vf=2,yd=1,xf=2,Hn=3,_i=0,Ve=1,An=2,ui=0,Mr=1,Wn=2,Ic=3,Uc=4,yf=5,Ni=100,Mf=101,Sf=102,Ef=103,Tf=104,bf=200,wf=201,Af=202,Cf=203,ko=204,Ho=205,Rf=206,Pf=207,Lf=208,Df=209,If=210,Uf=211,Nf=212,Of=213,Ff=214,Bf=0,zf=1,kf=2,ha=3,Hf=4,Gf=5,Vf=6,Wf=7,Na=0,Xf=1,qf=2,di=0,Yf=1,$f=2,jf=3,Kf=4,Zf=5,Jf=6,Qf=7,Md=300,Ar=301,Cr=302,Go=303,Vo=304,Oa=306,Wo=1e3,Bi=1001,Xo=1002,un=1003,tp=1004,ws=1005,gn=1006,$a=1007,zi=1008,jn=1009,Sd=1010,Ed=1011,ss=1012,Wl=1013,Xi=1014,Xn=1015,_s=1016,Xl=1017,ql=1018,Rr=1020,Td=35902,bd=1021,wd=1022,xn=1023,Ad=1024,Cd=1025,Sr=1026,Pr=1027,Rd=1028,Yl=1029,Pd=1030,$l=1031,jl=1033,na=33776,ia=33777,ra=33778,sa=33779,qo=35840,Yo=35841,$o=35842,jo=35843,Ko=36196,Zo=37492,Jo=37496,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,dl=37820,hl=37821,aa=36492,fl=36494,pl=36495,Ld=36283,ml=36284,_l=36285,gl=36286,ep=3200,np=3201,Kl=0,ip=1,ai="",En="srgb",yi="srgb-linear",Zl="display-p3",Fa="display-p3-linear",fa="linear",ne="srgb",pa="rec709",ma="p3",ji=7680,Nc=519,rp=512,sp=513,ap=514,Dd=515,op=516,lp=517,cp=518,up=519,vl=35044,Oc="300 es",qn=2e3,_a=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ja=Math.PI/180,xl=180/Math.PI;function hi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[r&255]+Re[r>>8&255]+Re[r>>16&255]+Re[r>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ze(r,t,e){return Math.max(t,Math.min(e,r))}function dp(r,t){return(r%t+t)%t}function Ka(r,t,e){return(1-e)*r+e*t}function Cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],_=n[5],g=n[8],d=i[0],m=i[3],f=i[6],y=i[1],x=i[4],v=i[7],A=i[2],C=i[5],b=i[8];return s[0]=a*d+o*y+c*A,s[3]=a*m+o*x+c*C,s[6]=a*f+o*v+c*b,s[1]=l*d+u*y+h*A,s[4]=l*m+u*x+h*C,s[7]=l*f+u*v+h*b,s[2]=p*d+_*y+g*A,s[5]=p*m+_*x+g*C,s[8]=p*f+_*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,p=o*c-u*s,_=l*s-a*c,g=e*h+n*p+i*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*l-u*n)*d,t[2]=(o*n-i*a)*d,t[3]=p*d,t[4]=(u*e-i*c)*d,t[5]=(i*s-o*e)*d,t[6]=_*d,t[7]=(n*c-l*e)*d,t[8]=(a*e-n*s)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ft;function Id(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hp(){const r=ga("canvas");return r.style.display="block",r}const Fc={};function Jl(r){r in Fc||(Fc[r]=!0,console.warn(r))}function fp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Bc=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),As={[yi]:{transfer:fa,primaries:pa,toReference:r=>r,fromReference:r=>r},[En]:{transfer:ne,primaries:pa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fa]:{transfer:fa,primaries:ma,toReference:r=>r.applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc)},[Zl]:{transfer:ne,primaries:ma,toReference:r=>r.convertSRGBToLinear().applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc).convertLinearToSRGB()}},pp=new Set([yi,Fa]),Zt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!pp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=As[t].toReference,i=As[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return As[r].primaries},getTransfer:function(r){return r===ai?fa:As[r].transfer}};function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ja(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=ga("canvas")),Ki.width=t.width,Ki.height=t.height;const n=Ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Er(e[n]/255)*255):e[n]=Er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _p=0;class Ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qa(i[a].image)):s.push(Qa(i[a]))}else s=Qa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class Fe extends Fr{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Bi,i=Bi,s=gn,a=zi,o=xn,c=jn,l=Fe.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=hi(),this.name="",this.source=new Ud(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Md;Fe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],h=c[8],p=c[1],_=c[5],g=c[9],d=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(l+_+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(_+1)/2,A=(f+1)/2,C=(u+p)/4,b=(h+d)/4,R=(g+m)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=b/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-d)/y,this.z=(p-u)/y,this.w=Math.acos((l+_+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vp extends Fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ud(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends vp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nd extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const p=s[a+0],_=s[a+1],g=s[a+2],d=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=_,t[e+2]=g,t[e+3]=d;return}if(h!==d||c!==p||l!==_||u!==g){let m=1-o;const f=c*p+l*_+u*g+h*d,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,f*y);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const v=o*y;if(c=c*m+p*v,l=l*m+_*v,u=u*m+g*v,h=h*m+d*v,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],p=s[a+1],_=s[a+2],g=s[a+3];return t[e]=o*g+u*h+c*_-l*p,t[e+1]=c*g+u*p+l*h-o*_,t[e+2]=l*g+u*_+o*p-c*h,t[e+3]=u*g-o*h-c*p-l*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),p=c(n/2),_=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=p*u*h+l*_*g,this._y=l*_*h-p*u*g,this._z=l*u*g+p*_*h,this._w=l*u*h-p*_*g;break;case"YXZ":this._x=p*u*h+l*_*g,this._y=l*_*h-p*u*g,this._z=l*u*g-p*_*h,this._w=l*u*h+p*_*g;break;case"ZXY":this._x=p*u*h-l*_*g,this._y=l*_*h+p*u*g,this._z=l*u*g+p*_*h,this._w=l*u*h-p*_*g;break;case"ZYX":this._x=p*u*h-l*_*g,this._y=l*_*h+p*u*g,this._z=l*u*g-p*_*h,this._w=l*u*h+p*_*g;break;case"YZX":this._x=p*u*h+l*_*g,this._y=l*_*h+p*u*g,this._z=l*u*g-p*_*h,this._w=l*u*h-p*_*g;break;case"XZY":this._x=p*u*h-l*_*g,this._y=l*_*h-p*u*g,this._z=l*u*g+p*_*h,this._w=l*u*h+p*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],p=n+o+h;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-c)*_,this._y=(s-l)*_,this._z=(a-i)*_}else if(n>o&&n>h){const _=2*Math.sqrt(1+n-o-h);this._w=(u-c)/_,this._x=.25*_,this._y=(i+a)/_,this._z=(s+l)/_}else if(o>h){const _=2*Math.sqrt(1+o-n-h);this._w=(s-l)/_,this._x=(i+a)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+h-n-o);this._w=(a-i)/_,this._x=(s+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*i+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new F,kc=new gs;class vs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Rs.subVectors(this.max,kr),Zi.subVectors(t.a,kr),Ji.subVectors(t.b,kr),Qi.subVectors(t.c,kr),ti.subVectors(Ji,Zi),ei.subVectors(Qi,Ji),Ei.subVectors(Zi,Qi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ei.z,Ei.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ei.z,0,-Ei.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ei.y,Ei.x,0];return!eo(e,Zi,Ji,Qi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Zi,Ji,Qi,Rs))?!1:(Ps.crossVectors(ti,ei),e=[Ps.x,Ps.y,Ps.z],eo(e,Zi,Ji,Qi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,Cs=new vs,Zi=new F,Ji=new F,Qi=new F,ti=new F,ei=new F,Ei=new F,kr=new F,Rs=new F,Ps=new F,Ti=new F;function eo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ti.fromArray(r,s);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const yp=new vs,Hr=new F,no=new F;class xs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(no)),this.expandByPoint(Hr.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new F,io=new F,Ls=new F,ni=new F,ro=new F,Ds=new F,so=new F;class Ql{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(io);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=ni.dot(this.direction),c=-ni.dot(Ls),l=ni.lengthSq(),u=Math.abs(1-a*a);let h,p,_,g;if(u>0)if(h=a*c-o,p=a*o-c,g=s*u,h>=0)if(p>=-g)if(p<=g){const d=1/u;h*=d,p*=d,_=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+l;else p<=-g?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+l):p<=g?(h=0,p=Math.min(Math.max(-s,-c),s),_=p*(p+2*c)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),_=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(io).addScaledVector(Ls,p),_}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),u>=0?(s=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-p.z)*h,c=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,c=(t.min.z-p.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){ro.subVectors(e,t),Ds.subVectors(n,t),so.crossVectors(ro,Ds);let a=this.direction.dot(so),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const c=o*this.direction.dot(Ds.crossVectors(ni,Ds));if(c<0)return null;const l=o*this.direction.dot(ro.cross(ni));if(l<0||c+l>a)return null;const u=-o*ni.dot(so);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,i,s,a,o,c,l,u,h,p,_,g,d,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,u,h,p,_,g,d,m)}set(t,e,n,i,s,a,o,c,l,u,h,p,_,g,d,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=_,f[7]=g,f[11]=d,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/tr.setFromMatrixColumn(t,0).length(),s=1/tr.setFromMatrixColumn(t,1).length(),a=1/tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=a*u,_=a*h,g=o*u,d=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=_+g*l,e[5]=p-d*l,e[9]=-o*c,e[2]=d-p*l,e[6]=g+_*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*u,_=c*h,g=l*u,d=l*h;e[0]=p+d*o,e[4]=g*o-_,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=_*o-g,e[6]=d+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*u,_=c*h,g=l*u,d=l*h;e[0]=p-d*o,e[4]=-a*h,e[8]=g+_*o,e[1]=_+g*o,e[5]=a*u,e[9]=d-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*u,_=a*h,g=o*u,d=o*h;e[0]=c*u,e[4]=g*l-_,e[8]=p*l+d,e[1]=c*h,e[5]=d*l+p,e[9]=_*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,_=a*l,g=o*c,d=o*l;e[0]=c*u,e[4]=d-p*h,e[8]=g*h+_,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=_*h+g,e[10]=p-d*h}else if(t.order==="XZY"){const p=a*c,_=a*l,g=o*c,d=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=p*h+d,e[5]=a*u,e[9]=_*h-g,e[2]=g*h-_,e[6]=o*u,e[10]=d*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ii.crossVectors(n,Ze),ii.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ii.crossVectors(n,Ze)),ii.normalize(),Is.crossVectors(Ze,ii),i[0]=ii.x,i[4]=Is.x,i[8]=Ze.x,i[1]=ii.y,i[5]=Is.y,i[9]=Ze.y,i[2]=ii.z,i[6]=Is.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],_=n[13],g=n[2],d=n[6],m=n[10],f=n[14],y=n[3],x=n[7],v=n[11],A=n[15],C=i[0],b=i[4],R=i[8],M=i[12],S=i[1],E=i[5],I=i[9],N=i[13],$=i[2],X=i[6],W=i[10],j=i[14],q=i[3],ut=i[7],k=i[11],tt=i[15];return s[0]=a*C+o*S+c*$+l*q,s[4]=a*b+o*E+c*X+l*ut,s[8]=a*R+o*I+c*W+l*k,s[12]=a*M+o*N+c*j+l*tt,s[1]=u*C+h*S+p*$+_*q,s[5]=u*b+h*E+p*X+_*ut,s[9]=u*R+h*I+p*W+_*k,s[13]=u*M+h*N+p*j+_*tt,s[2]=g*C+d*S+m*$+f*q,s[6]=g*b+d*E+m*X+f*ut,s[10]=g*R+d*I+m*W+f*k,s[14]=g*M+d*N+m*j+f*tt,s[3]=y*C+x*S+v*$+A*q,s[7]=y*b+x*E+v*X+A*ut,s[11]=y*R+x*I+v*W+A*k,s[15]=y*M+x*N+v*j+A*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],p=t[10],_=t[14],g=t[3],d=t[7],m=t[11],f=t[15];return g*(+s*c*h-i*l*h-s*o*p+n*l*p+i*o*_-n*c*_)+d*(+e*c*_-e*l*p+s*a*p-i*a*_+i*l*u-s*c*u)+m*(+e*l*h-e*o*_-s*a*h+n*a*_+s*o*u-n*l*u)+f*(-i*o*u-e*c*h+e*o*p+i*a*h-n*a*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],p=t[10],_=t[11],g=t[12],d=t[13],m=t[14],f=t[15],y=h*m*l-d*p*l+d*c*_-o*m*_-h*c*f+o*p*f,x=g*p*l-u*m*l-g*c*_+a*m*_+u*c*f-a*p*f,v=u*d*l-g*h*l+g*o*_-a*d*_-u*o*f+a*h*f,A=g*h*c-u*d*c-g*o*p+a*d*p+u*o*m-a*h*m,C=e*y+n*x+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=y*b,t[1]=(d*p*s-h*m*s-d*i*_+n*m*_+h*i*f-n*p*f)*b,t[2]=(o*m*s-d*c*s+d*i*l-n*m*l-o*i*f+n*c*f)*b,t[3]=(h*c*s-o*p*s-h*i*l+n*p*l+o*i*_-n*c*_)*b,t[4]=x*b,t[5]=(u*m*s-g*p*s+g*i*_-e*m*_-u*i*f+e*p*f)*b,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*f-e*c*f)*b,t[7]=(a*p*s-u*c*s+u*i*l-e*p*l-a*i*_+e*c*_)*b,t[8]=v*b,t[9]=(g*h*s-u*d*s-g*n*_+e*d*_+u*n*f-e*h*f)*b,t[10]=(a*d*s-g*o*s+g*n*l-e*d*l-a*n*f+e*o*f)*b,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*_-e*o*_)*b,t[12]=A*b,t[13]=(u*d*i-g*h*i+g*n*p-e*d*p-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*d*i-g*n*c+e*d*c+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*c-e*h*c-a*n*p+e*o*p)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,p=s*l,_=s*u,g=s*h,d=a*u,m=a*h,f=o*h,y=c*l,x=c*u,v=c*h,A=n.x,C=n.y,b=n.z;return i[0]=(1-(d+f))*A,i[1]=(_+v)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(_-v)*C,i[5]=(1-(p+f))*C,i[6]=(m+y)*C,i[7]=0,i[8]=(g+x)*b,i[9]=(m-y)*b,i[10]=(1-(p+d))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=tr.set(i[0],i[1],i[2]).length();const a=tr.set(i[4],i[5],i[6]).length(),o=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const l=1/s,u=1/a,h=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=qn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),p=(n+i)/(n-i);let _,g;if(o===qn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===_a)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=qn){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(a-s),p=(e+t)*l,_=(n+i)*u;let g,d;if(o===qn)g=(a+s)*h,d=-2*h;else if(o===_a)g=s*h,d=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=d,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const tr=new F,mn=new re,Mp=new F(0,0,0),Sp=new F(1,1,1),ii=new F,Is=new F,Ze=new F,Hc=new re,Gc=new gs;class Mn{constructor(t=0,e=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],p=i[6],_=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ep=0;const Vc=new F,er=new gs,Bn=new re,Us=new F,Gr=new F,Tp=new F,bp=new gs,Wc=new F(1,0,0),Xc=new F(0,1,0),qc=new F(0,0,1),Yc={type:"added"},wp={type:"removed"},nr={type:"childadded",child:null},ao={type:"childremoved",child:null};class Ae extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new F,e=new Mn,n=new gs,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Gr,Us,this.up):Bn.lookAt(Us,Gr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),er.setFromRotationMatrix(Bn),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wp),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),_=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new F(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,zn=new F,oo=new F,kn=new F,ir=new F,rr=new F,$c=new F,lo=new F,co=new F,uo=new F;class vn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_n.subVectors(i,e),zn.subVectors(n,e),oo.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(zn),c=_n.dot(oo),l=zn.dot(zn),u=zn.dot(oo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,_=(l*c-o*u)*p,g=(a*u-o*c)*p;return s.set(1-_-g,g,_)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),zn.subVectors(t,e),_n.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),_n.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ir.subVectors(i,n),rr.subVectors(s,n),lo.subVectors(t,n);const c=ir.dot(lo),l=rr.dot(lo);if(c<=0&&l<=0)return e.copy(n);co.subVectors(t,i);const u=ir.dot(co),h=rr.dot(co);if(u>=0&&h<=u)return e.copy(i);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ir,a);uo.subVectors(t,s);const _=ir.dot(uo),g=rr.dot(uo);if(g>=0&&_<=g)return e.copy(s);const d=_*l-c*g;if(d<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(rr,o);const m=u*g-_*h;if(m<=0&&h-u>=0&&_-g>=0)return $c.subVectors(s,i),o=(h-u)/(h-u+(_-g)),e.copy(i).addScaledVector($c,o);const f=1/(m+d+p);return a=d*f,o=p*f,e.copy(n).addScaledVector(ir,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function ho(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=dp(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ho(a,s,t+1/3),this.g=ho(a,s,t),this.b=ho(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Zt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(ze(Pe.r*255,0,255))*65536+Math.round(ze(Pe.g*255,0,255))*256+Math.round(ze(Pe.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,s=Pe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=En){Zt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Ns);const n=Ka(ri.h,Ns.h,e),i=Ka(ri.s,Ns.s,e),s=Ka(ri.l,Ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Pt;Pt.NAMES=Fd;let Ap=0;class Jn extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Mr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class tc extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new F,Os=new Ut;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}}class Bd extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zd extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class yn extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cp=0;const ln=new re,fo=new Ae,sr=new F,Je=new vs,Vr=new vs,Se=new F;class Ie extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?zd:Bd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Je.min,Vr.min),Je.expandByPoint(Se),Se.addVectors(Je.max,Vr.max),Je.expandByPoint(Se)):(Je.expandByPoint(Vr.min),Je.expandByPoint(Vr.max))}Je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Se.fromBufferAttribute(o,l),c&&(sr.fromBufferAttribute(t,l),Se.add(sr)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new F,c[R]=new F;const l=new F,u=new F,h=new F,p=new Ut,_=new Ut,g=new Ut,d=new F,m=new F;function f(R,M,S){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),_.sub(p),g.sub(p);const E=1/(_.x*g.y-g.x*_.y);isFinite(E)&&(d.copy(u).multiplyScalar(g.y).addScaledVector(h,-_.y).multiplyScalar(E),m.copy(h).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(E),o[R].add(d),o[M].add(d),o[S].add(d),c[R].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,M=y.length;R<M;++R){const S=y[R],E=S.start,I=S.count;for(let N=E,$=E+I;N<$;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new F,v=new F,A=new F,C=new F;function b(R){A.fromBufferAttribute(i,R),C.copy(A);const M=o[R];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(C,M);const E=v.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,M=y.length;R<M;++R){const S=y[R],E=S.start,I=S.count;for(let N=E,$=E+I;N<$;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const i=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let p=0,_=t.count;p<_;p+=3){const g=t.getX(p+0),d=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,_=e.count;p<_;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let _=0,g=0;for(let d=0,m=c.length;d<m;d++){o.isInterleavedBufferAttribute?_=c[d]*o.data.stride+o.offset:_=c[d]*u;for(let f=0;f<u;f++)p[g++]=l[_++]}return new Ee(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],_=t(p,n);c.push(_)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const _=l[h];u.push(_.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,_=h.length;p<_;p++)u.push(h[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new re,bi=new Ql,Fs=new xs,Kc=new F,ar=new F,or=new F,lr=new F,po=new F,Bs=new F,zs=new Ut,ks=new Ut,Hs=new Ut,Zc=new F,Jc=new F,Qc=new F,Gs=new F,Vs=new F;class Ge extends Ae{constructor(t=new Ie,e=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(po.fromBufferAttribute(h,t),a?Bs.addScaledVector(po,u):Bs.addScaledVector(po.sub(e),u))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Fs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Fs,Kc)===null||bi.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&(jc.copy(s).invert(),bi.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,d=p.length;g<d;g++){const m=p[g],f=a[m.materialIndex],y=Math.max(m.start,_.start),x=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let v=y,A=x;v<A;v+=3){const C=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);i=Ws(this,f,t,n,l,u,h,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),d=Math.min(o.count,_.start+_.count);for(let m=g,f=d;m<f;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Ws(this,a,t,n,l,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,d=p.length;g<d;g++){const m=p[g],f=a[m.materialIndex],y=Math.max(m.start,_.start),x=Math.min(c.count,Math.min(m.start+m.count,_.start+_.count));for(let v=y,A=x;v<A;v+=3){const C=v,b=v+1,R=v+2;i=Ws(this,f,t,n,l,u,h,C,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),d=Math.min(c.count,_.start+_.count);for(let m=g,f=d;m<f;m+=3){const y=m,x=m+1,v=m+2;i=Ws(this,a,t,n,l,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Rp(r,t,e,n,i,s,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===_i,o),c===null)return null;Vs.copy(o),Vs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Vs);return l<e.near||l>e.far?null:{distance:l,point:Vs.clone(),object:r}}function Ws(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,ar),r.getVertexPosition(c,or),r.getVertexPosition(l,lr);const u=Rp(r,t,e,n,ar,or,lr,Gs);if(u){i&&(zs.fromBufferAttribute(i,o),ks.fromBufferAttribute(i,c),Hs.fromBufferAttribute(i,l),u.uv=vn.getInterpolation(Gs,ar,or,lr,zs,ks,Hs,new Ut)),s&&(zs.fromBufferAttribute(s,o),ks.fromBufferAttribute(s,c),Hs.fromBufferAttribute(s,l),u.uv1=vn.getInterpolation(Gs,ar,or,lr,zs,ks,Hs,new Ut)),a&&(Zc.fromBufferAttribute(a,o),Jc.fromBufferAttribute(a,c),Qc.fromBufferAttribute(a,l),u.normal=vn.getInterpolation(Gs,ar,or,lr,Zc,Jc,Qc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};vn.getNormal(ar,or,lr,h.normal),u.face=h}return u}class ys extends Ie{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,_=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new yn(l,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(h,2));function g(d,m,f,y,x,v,A,C,b,R,M){const S=v/b,E=A/R,I=v/2,N=A/2,$=C/2,X=b+1,W=R+1;let j=0,q=0;const ut=new F;for(let k=0;k<W;k++){const tt=k*E-N;for(let Z=0;Z<X;Z++){const rt=Z*S-I;ut[d]=rt*y,ut[m]=tt*x,ut[f]=$,l.push(ut.x,ut.y,ut.z),ut[d]=0,ut[m]=0,ut[f]=C>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Z/b),h.push(1-k/R),j+=1}}for(let k=0;k<R;k++)for(let tt=0;tt<b;tt++){const Z=p+tt+X*k,rt=p+tt+X*(k+1),z=p+(tt+1)+X*(k+1),K=p+(tt+1)+X*k;c.push(Z,rt,K),c.push(rt,z,K),q+=6}o.addGroup(_,q,M),_+=q,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const n=Lr(r[e]);for(const i in n)t[i]=n[i]}return t}function Pp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function kd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Lp={clone:Lr,merge:Oe};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hd extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new F,tu=new Ut,eu=new Ut;class ke extends Hd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ja*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cr=-90,ur=1;class Up extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(cr,ur,t,e);i.layers=this.layers,this.add(i);const s=new ke(cr,ur,t,e);s.layers=this.layers,this.add(s);const a=new ke(cr,ur,t,e);a.layers=this.layers,this.add(a);const o=new ke(cr,ur,t,e);o.layers=this.layers,this.add(o);const c=new ke(cr,ur,t,e);c.layers=this.layers,this.add(c);const l=new ke(cr,ur,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,p,_),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gd extends Fe{constructor(t,e,n,i,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ar,super(t,e,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ys(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ui});s.uniforms.tEquirect.value=e;const a=new Ge(i,s),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=gn),new Up(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const mo=new F,Op=new F,Fp=new Ft;class Di{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=mo.subVectors(n,e).cross(Op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fp.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new xs,Xs=new F;class ec{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],p=i[7],_=i[8],g=i[9],d=i[10],m=i[11],f=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-s,p-l,m-_,v-f).normalize(),n[1].setComponents(c+s,p+l,m+_,v+f).normalize(),n[2].setComponents(c+a,p+u,m+g,v+y).normalize(),n[3].setComponents(c-a,p-u,m-g,v-y).normalize(),n[4].setComponents(c-o,p-h,m-d,v-x).normalize(),e===qn)n[5].setComponents(c+o,p+h,m+d,v+x).normalize();else if(e===_a)n[5].setComponents(o,h,d,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bp(r){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,l,u),o.onUploadCallback();let _;if(l instanceof Float32Array)_=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=r.SHORT;else if(l instanceof Uint32Array)_=r.UNSIGNED_INT;else if(l instanceof Int32Array)_=r.INT;else if(l instanceof Int8Array)_=r.BYTE;else if(l instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c._updateRange,p=c.updateRanges;if(r.bindBuffer(l,o),h.count===-1&&p.length===0&&r.bufferSubData(l,0,u),p.length!==0){for(let _=0,g=p.length;_<g;_++){const d=p[_];r.bufferSubData(l,d.start*u.BYTES_PER_ELEMENT,u,d.start,d.count)}c.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class Ms extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=t/o,p=e/c,_=[],g=[],d=[],m=[];for(let f=0;f<u;f++){const y=f*p-a;for(let x=0;x<l;x++){const v=x*h-s;g.push(v,-y,0),d.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const x=y+l*f,v=y+l*(f+1),A=y+1+l*(f+1),C=y+1+l*f;_.push(x,v,C),_.push(v,A,C)}this.setIndex(_),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(d,3)),this.setAttribute("uv",new yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
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
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
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
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
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
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,dg=`#define TOON
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
}`,hg=`uniform float size;
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
}`,Ot={alphahash_fragment:zp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:$p,begin_vertex:jp,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:am,color_vertex:om,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:hm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:_m,envmap_fragment:gm,envmap_common_pars_fragment:vm,envmap_pars_fragment:xm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Lm,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:bm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Am,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Rm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Im,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Om,lights_physical_pars_fragment:Fm,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:km,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:$m,metalnessmap_fragment:jm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t_,morphtarget_vertex:e_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:r_,normal_pars_vertex:s_,normal_vertex:a_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:h_,packing:f_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:__,dithering_pars_fragment:g_,roughnessmap_fragment:v_,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:M_,shadowmap_vertex:S_,shadowmask_pars_fragment:E_,skinbase_vertex:T_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:A_,specularmap_fragment:C_,specularmap_pars_fragment:R_,tonemapping_fragment:P_,tonemapping_pars_fragment:L_,transmission_fragment:D_,transmission_pars_fragment:I_,uv_pars_fragment:U_,uv_pars_vertex:N_,uv_vertex:O_,worldpos_vertex:F_,background_vert:B_,background_frag:z_,backgroundCube_vert:k_,backgroundCube_frag:H_,cube_vert:G_,cube_frag:V_,depth_vert:W_,depth_frag:X_,distanceRGBA_vert:q_,distanceRGBA_frag:Y_,equirect_vert:$_,equirect_frag:j_,linedashed_vert:K_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:Q_,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:ug,meshtoon_frag:dg,points_vert:hg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:_g,sprite_frag:gg},ft={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},wn={basic:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([ft.points,ft.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([ft.common,ft.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([ft.sprite,ft.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Oe([ft.common,ft.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Oe([ft.lights,ft.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};wn.physical={uniforms:Oe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const qs={r:0,b:0,g:0},Ai=new Mn,vg=new re;function xg(r,t,e,n,i,s,a){const o=new Pt(0);let c=s===!0?0:1,l,u,h=null,p=0,_=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function d(y){let x=!1;const v=g(y);v===null?f(o,c):v&&v.isColor&&(f(v,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Oa)?(u===void 0&&(u=new Ge(new ys(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Lr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ai)),u.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,(h!==v||p!==v.version||_!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,_=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ge(new Ms(2,2),new In({name:"BackgroundMaterial",uniforms:Lr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||_!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,_=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(qs,kd(r)),n.buffers.color.setClear(qs.r,qs.g,qs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:d,addToRenderList:m}}function yg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,a=!1;function o(S,E,I,N,$){let X=!1;const W=h(N,I,E);s!==W&&(s=W,l(s.object)),X=_(S,N,I,$),X&&g(S,N,I,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(S,E,I,N),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,E,I){const N=I.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let X=$[E.id];X===void 0&&(X={},$[E.id]=X);let W=X[N];return W===void 0&&(W=p(c()),X[N]=W),W}function p(S){const E=[],I=[],N=[];for(let $=0;$<e;$++)E[$]=0,I[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:N,object:S,attributes:{},index:null}}function _(S,E,I,N){const $=s.attributes,X=E.attributes;let W=0;const j=I.getAttributes();for(const q in j)if(j[q].location>=0){const k=$[q];let tt=X[q];if(tt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),k===void 0||k.attribute!==tt||tt&&k.data!==tt.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function g(S,E,I,N){const $={},X=E.attributes;let W=0;const j=I.getAttributes();for(const q in j)if(j[q].location>=0){let k=X[q];k===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(k=S.instanceColor));const tt={};tt.attribute=k,k&&k.data&&(tt.data=k.data),$[q]=tt,W++}s.attributes=$,s.attributesNum=W,s.index=N}function d(){const S=s.newAttributes;for(let E=0,I=S.length;E<I;E++)S[E]=0}function m(S){f(S,0)}function f(S,E){const I=s.newAttributes,N=s.enabledAttributes,$=s.attributeDivisors;I[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),$[S]!==E&&(r.vertexAttribDivisor(S,E),$[S]=E)}function y(){const S=s.newAttributes,E=s.enabledAttributes;for(let I=0,N=E.length;I<N;I++)E[I]!==S[I]&&(r.disableVertexAttribArray(I),E[I]=0)}function x(S,E,I,N,$,X,W){W===!0?r.vertexAttribIPointer(S,E,I,$,X):r.vertexAttribPointer(S,E,I,N,$,X)}function v(S,E,I,N){d();const $=N.attributes,X=I.getAttributes(),W=E.defaultAttributeValues;for(const j in X){const q=X[j];if(q.location>=0){let ut=$[j];if(ut===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){const k=ut.normalized,tt=ut.itemSize,Z=t.get(ut);if(Z===void 0)continue;const rt=Z.buffer,z=Z.type,K=Z.bytesPerElement,ct=z===r.INT||z===r.UNSIGNED_INT||ut.gpuType===Wl;if(ut.isInterleavedBufferAttribute){const dt=ut.data,H=dt.stride,ht=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<q.locationSize;_t++)f(q.location+_t,dt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let _t=0;_t<q.locationSize;_t++)x(q.location+_t,tt/q.locationSize,z,k,H*K,(ht+tt/q.locationSize*_t)*K,ct)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)f(q.location+dt,ut.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let dt=0;dt<q.locationSize;dt++)x(q.location+dt,tt/q.locationSize,z,k,tt*K,tt/q.locationSize*dt*K,ct)}}else if(W!==void 0){const k=W[j];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(q.location,k);break;case 3:r.vertexAttrib3fv(q.location,k);break;case 4:r.vertexAttrib4fv(q.location,k);break;default:r.vertexAttrib1fv(q.location,k)}}}}y()}function A(){R();for(const S in n){const E=n[S];for(const I in E){const N=E[I];for(const $ in N)u(N[$].object),delete N[$];delete E[I]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const E=n[S.id];for(const I in E){const N=E[I];for(const $ in N)u(N[$].object),delete N[$];delete E[I]}delete n[S.id]}function b(S){for(const E in n){const I=n[E];if(I[S.id]===void 0)continue;const N=I[S.id];for(const $ in N)u(N[$].object),delete N[$];delete I[S.id]}}function R(){M(),a=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:d,enableAttribute:m,disableUnusedAttributes:y}}function Mg(r,t,e){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];e.update(_,n,1)}function c(l,u,h,p){if(h===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<l.length;g++)a(l[g],u[g],p[g]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let g=0;for(let d=0;d<h;d++)g+=u[d];for(let d=0;d<p.length;d++)e.update(g,n,p[d])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==xn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!b)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:v,maxSamples:A}}function Eg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Di,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const _=h.length!==0||p||n!==0||i;return i=p,n=h.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,_){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:n,x=y*4;let v=f.clippingState||null;c.value=v,v=u(g,p,x,_);for(let A=0;A!==x;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,_,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=c.value,g!==!0||m===null){const f=_+d*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=_;x!==d;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,m}}function Tg(r){let t=new WeakMap;function e(a,o){return o===Go?a.mapping=Ar:o===Vo&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Go||o===Vo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Np(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bg extends Hd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gr=4,nu=[.125,.215,.35,.446,.526,.582],Oi=20,_o=new bg,iu=new Pt;let go=null,vo=0,xo=0,yo=!1;const Ii=(1+Math.sqrt(5))/2,dr=1/Ii,ru=[new F(-Ii,dr,0),new F(Ii,dr,0),new F(-dr,0,Ii),new F(dr,0,Ii),new F(0,Ii,-dr),new F(0,Ii,dr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,vo,xo),this._renderer.xr.enabled=yo,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:_s,format:xn,colorSpace:yi,depthBuffer:!1},i=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Ag(s,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,i){const o=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(iu),u.toneMapping=di,u.autoClear=!1;const _=new tc({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Ge(new ys,_);let d=!1;const m=t.background;m?m.isColor&&(_.color.copy(m),t.background=null,d=!0):(_.color.copy(iu),d=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;Ys(i,y*x,f>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ar||t.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ru[(i-s-1)%ru.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ge(this._lodPlanes[i],l),p=l.uniforms,_=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Oi-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let y=0;for(let b=0;b<Oi;++b){const R=b/d,M=Math.exp(-R*R/2);f.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-gr?i-x+gr:0),C=4*(this._cubeSize-v);Ys(e,A,C,3*v,2*v),c.setRenderTarget(e),c.render(h,_o)}}function wg(r){const t=[],e=[],n=[];let i=r;const s=r-gr+1+nu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-gr?c=nu[a-r+gr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],_=6,g=6,d=3,m=2,f=1,y=new Float32Array(d*g*_),x=new Float32Array(m*g*_),v=new Float32Array(f*g*_);for(let C=0;C<_;C++){const b=C%3*2/3-1,R=C>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];y.set(M,d*g*C),x.set(p,m*g*C);const S=[C,C,C,C,C,C];v.set(S,f*g*C)}const A=new Ie;A.setAttribute("position",new Ee(y,d)),A.setAttribute("uv",new Ee(x,m)),A.setAttribute("faceIndex",new Ee(v,f)),t.push(A),i>gr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(r,t,e){const n=new qi(r,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ag(r,t,e){const n=new Float32Array(Oi),i=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

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
	`}function Cg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Go||c===Vo,u=c===Ar||c===Cr;if(l||u){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new su(r)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const _=o.image;return l&&_&&_.height>0||u&&_&&i(_)?(e===null&&(e=new su(r)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Jl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pg(r,t,e,n){const i={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const d=p.morphAttributes[g];for(let m=0,f=d.length;m<f;m++)t.remove(d[m])}p.removeEventListener("dispose",a),delete i[p.id];const _=s.get(p);_&&(t.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(h){const p=h.attributes;for(const g in p)t.update(p[g],r.ARRAY_BUFFER);const _=h.morphAttributes;for(const g in _){const d=_[g];for(let m=0,f=d.length;m<f;m++)t.update(d[m],r.ARRAY_BUFFER)}}function l(h){const p=[],_=h.index,g=h.attributes.position;let d=0;if(_!==null){const y=_.array;d=_.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],C=y[x+1],b=y[x+2];p.push(A,C,C,b,b,A)}}else if(g!==void 0){const y=g.array;d=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,C=x+1,b=x+2;p.push(A,C,C,b,b,A)}}else return;const m=new(Id(p)?zd:Bd)(p,1);m.version=d;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const _=h.index;_!==null&&p.version<_.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Lg(r,t,e){let n;function i(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,_){r.drawElements(n,_,s,p*a),e.update(_,n,1)}function l(p,_,g){g!==0&&(r.drawElementsInstanced(n,_,s,p*a,g),e.update(_,n,g))}function u(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=_[f];e.update(m,n,1)}function h(p,_,g,d){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/a,_[f],d[f]);else{m.multiDrawElementsInstancedWEBGL(n,_,0,s,p,0,d,0,g);let f=0;for(let y=0;y<g;y++)f+=_[y];for(let y=0;y<d.length;y++)e.update(f,n,d[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ig(r,t,e){const n=new WeakMap,i=new ie;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var _=S;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),d===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*C*4*h),R=new Nd(b,A,C,h);R.type=Xn,R.needsUpdate=!0;const M=v*4;for(let E=0;E<h;E++){const I=f[E],N=y[E],$=x[E],X=A*C*4*E;for(let W=0;W<I.count;W++){const j=W*M;g===!0&&(i.fromBufferAttribute(I,W),b[X+j+0]=i.x,b[X+j+1]=i.y,b[X+j+2]=i.z,b[X+j+3]=0),d===!0&&(i.fromBufferAttribute(N,W),b[X+j+4]=i.x,b[X+j+5]=i.y,b[X+j+6]=i.z,b[X+j+7]=0),m===!0&&(i.fromBufferAttribute($,W),b[X+j+8]=i.x,b[X+j+9]=i.y,b[X+j+10]=i.z,b[X+j+11]=$.itemSize===4?i.w:1)}}p={count:h,texture:R,size:new Ut(A,C)},n.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const d=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",d),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function Ug(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Wd extends Fe{constructor(t,e,n,i,s,a,o,c,l,u=Sr){if(u!==Sr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=Xi),n===void 0&&u===Pr&&(n=Rr),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xd=new Fe,cu=new Wd(1,1),qd=new Nd,Yd=new xp,$d=new Gd,uu=[],du=[],hu=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Br(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ba(r,t){let e=du[t];e===void 0&&(e=new Int32Array(t),du[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ng(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function Fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function Bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function zg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;pu.set(n),r.uniformMatrix2fv(this.addr,!1,pu),Me(e,n)}}function kg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;fu.set(n),r.uniformMatrix3fv(this.addr,!1,fu),Me(e,n)}}function Hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;hu.set(n),r.uniformMatrix4fv(this.addr,!1,hu),Me(e,n)}}function Gg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function Wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function Xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function qg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function $g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function Kg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cu.compareFunction=Dd,s=cu):s=Xd,e.setTexture2D(t||s,i)}function Zg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yd,i)}function Jg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$d,i)}function Qg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qd,i)}function t0(r){switch(r){case 5126:return Ng;case 35664:return Og;case 35665:return Fg;case 35666:return Bg;case 35674:return zg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return $g;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function e0(r,t){r.uniform1fv(this.addr,t)}function n0(r,t){const e=Br(t,this.size,2);r.uniform2fv(this.addr,e)}function i0(r,t){const e=Br(t,this.size,3);r.uniform3fv(this.addr,e)}function r0(r,t){const e=Br(t,this.size,4);r.uniform4fv(this.addr,e)}function s0(r,t){const e=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function a0(r,t){const e=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function o0(r,t){const e=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function l0(r,t){r.uniform1iv(this.addr,t)}function c0(r,t){r.uniform2iv(this.addr,t)}function u0(r,t){r.uniform3iv(this.addr,t)}function d0(r,t){r.uniform4iv(this.addr,t)}function h0(r,t){r.uniform1uiv(this.addr,t)}function f0(r,t){r.uniform2uiv(this.addr,t)}function p0(r,t){r.uniform3uiv(this.addr,t)}function m0(r,t){r.uniform4uiv(this.addr,t)}function _0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Xd,s[a])}function g0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Yd,s[a])}function v0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||$d,s[a])}function x0(r,t,e){const n=this.cache,i=t.length,s=Ba(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||qd,s[a])}function y0(r){switch(r){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return h0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}}class E0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function mu(r,t){r.seq.push(t),r.map[t.id]=t}function T0(r,t,e){const n=r.name,i=n.length;for(Mo.lastIndex=0;;){const s=Mo.exec(n),a=Mo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){mu(e,l===void 0?new M0(o,r,t):new S0(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new E0(o),mu(e,h)),e=h}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);T0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _u(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const b0=37297;let w0=0;function A0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function C0(r){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(r);let n;switch(t===e?n="":t===ma&&e===pa?n="LinearDisplayP3ToLinearSRGB":t===pa&&e===ma&&(n="LinearSRGBToLinearDisplayP3"),r){case yi:case Fa:return[n,"LinearTransferOETF"];case En:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function gu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+A0(r.getShaderSource(t),a)}else return i}function R0(r,t){const e=C0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P0(r,t){let e;switch(t){case Yf:e="Linear";break;case $f:e="Reinhard";break;case jf:e="OptimizedCineon";break;case Kf:e="ACESFilmic";break;case Jf:e="AgX";break;case Qf:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function L0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function D0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Kr(r){return r!==""}function vu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(r){return r.replace(U0,O0)}const N0=new Map;function O0(r,t){let e=Ot[t];if(e===void 0){const n=N0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(r){return r.replace(F0,B0)}function B0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function z0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===xf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ar:case Cr:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function G0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Na:t="ENVMAP_BLENDING_MULTIPLY";break;case Xf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function V0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=z0(e),l=k0(e),u=H0(e),h=G0(e),p=V0(e),_=L0(e),g=D0(s),d=i.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ot.tonemapping_pars_fragment:"",e.toneMapping!==di?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=yl(a),a=vu(a,e),a=xu(a,e),o=yl(o),o=vu(o,e),o=xu(o,e),a=yu(a),o=yu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+a,v=y+f+o,A=_u(i,i.VERTEX_SHADER,x),C=_u(i,i.FRAGMENT_SHADER,v);i.attachShader(d,A),i.attachShader(d,C),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d);function b(E){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(d).trim(),N=i.getShaderInfoLog(A).trim(),$=i.getShaderInfoLog(C).trim();let X=!0,W=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,d,A,C);else{const j=gu(i,A,"vertex"),q=gu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+j+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||$==="")&&(W=!1);W&&(E.diagnostics={runnable:X,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(A),i.deleteShader(C),R=new oa(i,d),M=I0(i,d)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(d,b0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=C,this}let X0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y0(t),e.set(t,n)),n}}class Y0{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}}function $0(r,t,e,n,i,s,a){const o=new Od,c=new q0,l=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,E,I,N){const $=I.fog,X=N.geometry,W=M.isMeshStandardMaterial?I.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),q=j&&j.mapping===Oa?j.image.height:null,ut=g[M.type];M.precision!==null&&(_=i.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const k=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=k!==void 0?k.length:0;let Z=0;X.morphAttributes.position!==void 0&&(Z=1),X.morphAttributes.normal!==void 0&&(Z=2),X.morphAttributes.color!==void 0&&(Z=3);let rt,z,K,ct;if(ut){const qt=wn[ut];rt=qt.vertexShader,z=qt.fragmentShader}else rt=M.vertexShader,z=M.fragmentShader,c.update(M),K=c.getVertexShaderID(M),ct=c.getFragmentShaderID(M);const dt=r.getRenderTarget(),H=N.isInstancedMesh===!0,ht=N.isBatchedMesh===!0,_t=!!M.map,zt=!!M.matcap,D=!!j,Kt=!!M.aoMap,Bt=!!M.lightMap,Xt=!!M.bumpMap,St=!!M.normalMap,se=!!M.displacementMap,Tt=!!M.emissiveMap,Dt=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,Y=M.clearcoat>0,nt=M.dispersion>0,it=M.iridescence>0,et=M.sheen>0,bt=M.transmission>0,pt=T&&!!M.anisotropyMap,vt=Y&&!!M.clearcoatMap,Nt=Y&&!!M.clearcoatNormalMap,st=Y&&!!M.clearcoatRoughnessMap,gt=it&&!!M.iridescenceMap,Gt=it&&!!M.iridescenceThicknessMap,Lt=et&&!!M.sheenColorMap,xt=et&&!!M.sheenRoughnessMap,It=!!M.specularMap,kt=!!M.specularColorMap,le=!!M.specularIntensityMap,U=bt&&!!M.transmissionMap,at=bt&&!!M.thicknessMap,J=!!M.gradientMap,Q=!!M.alphaMap,lt=M.alphaTest>0,At=!!M.alphaHash,Vt=!!M.extensions;let _e=di;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(_e=r.toneMapping);const be={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:z,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ht,batchingColor:ht&&N._colorsTexture!==null,instancing:H,instancingColor:H&&N.instanceColor!==null,instancingMorph:H&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:yi,alphaToCoverage:!!M.alphaToCoverage,map:_t,matcap:zt,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:q,aoMap:Kt,lightMap:Bt,bumpMap:Xt,normalMap:St,displacementMap:p&&se,emissiveMap:Tt,normalMapObjectSpace:St&&M.normalMapType===ip,normalMapTangentSpace:St&&M.normalMapType===Kl,metalnessMap:Dt,roughnessMap:P,anisotropy:T,anisotropyMap:pt,clearcoat:Y,clearcoatMap:vt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:st,dispersion:nt,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Gt,sheen:et,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:It,specularColorMap:kt,specularIntensityMap:le,transmission:bt,transmissionMap:U,thicknessMap:at,gradientMap:J,opaque:M.transparent===!1&&M.blending===Mr&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:lt,alphaHash:At,combine:M.combine,mapUv:_t&&d(M.map.channel),aoMapUv:Kt&&d(M.aoMap.channel),lightMapUv:Bt&&d(M.lightMap.channel),bumpMapUv:Xt&&d(M.bumpMap.channel),normalMapUv:St&&d(M.normalMap.channel),displacementMapUv:se&&d(M.displacementMap.channel),emissiveMapUv:Tt&&d(M.emissiveMap.channel),metalnessMapUv:Dt&&d(M.metalnessMap.channel),roughnessMapUv:P&&d(M.roughnessMap.channel),anisotropyMapUv:pt&&d(M.anisotropyMap.channel),clearcoatMapUv:vt&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&d(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&d(M.sheenRoughnessMap.channel),specularMapUv:It&&d(M.specularMap.channel),specularColorMapUv:kt&&d(M.specularColorMap.channel),specularIntensityMapUv:le&&d(M.specularIntensityMap.channel),transmissionMapUv:U&&d(M.transmissionMap.channel),thicknessMapUv:at&&d(M.thicknessMap.channel),alphaMapUv:Q&&d(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(_t||Q),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:_t&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),M.push(o.mask)}function v(M){const S=g[M.type];let E;if(S){const I=wn[S];E=Lp.clone(I.uniforms)}else E=M.uniforms;return E}function A(M,S){let E;for(let I=0,N=u.length;I<N;I++){const $=u[I];if($.cacheKey===S){E=$,++E.usedTimes;break}}return E===void 0&&(E=new W0(r,S,M,s),u.push(E)),E}function C(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function b(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function j0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function K0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Su(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Eu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,p,_,g,d,m){let f=r[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:_,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},r[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=_,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=d,f.group=m),t++,f}function o(h,p,_,g,d,m){const f=a(h,p,_,g,d,m);_.transmission>0?n.push(f):_.transparent===!0?i.push(f):e.push(f)}function c(h,p,_,g,d,m){const f=a(h,p,_,g,d,m);_.transmission>0?n.unshift(f):_.transparent===!0?i.unshift(f):e.unshift(f)}function l(h,p){e.length>1&&e.sort(h||K0),n.length>1&&n.sort(p||Su),i.length>1&&i.sort(p||Su)}function u(){for(let h=t,p=r.length;h<p;h++){const _=r[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function Z0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Eu,r.set(n,[a])):i>=s.length?(a=new Eu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function J0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Pt};break;case"SpotLight":e={position:new F,direction:new F,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Q0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let tv=0;function ev(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nv(r){const t=new J0,e=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,s=new re,a=new re;function o(l){let u=0,h=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let _=0,g=0,d=0,m=0,f=0,y=0,x=0,v=0,A=0,C=0,b=0;l.sort(ev);for(let M=0,S=l.length;M<S;M++){const E=l[M],I=E.color,N=E.intensity,$=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*N,h+=I.g*N,p+=I.b*N;else if(E.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(E.sh.coefficients[W],N);b++}else if(E.isDirectionalLight){const W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const j=E.shadow,q=e.get(E);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[_]=q,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=E.shadow.matrix,y++}n.directional[_]=W,_++}else if(E.isSpotLight){const W=t.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(I).multiplyScalar(N),W.distance=$,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,n.spot[d]=W;const j=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,j.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[d]=j.matrix,E.castShadow){const q=e.get(E);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[d]=q,n.spotShadowMap[d]=X,v++}d++}else if(E.isRectAreaLight){const W=t.get(E);W.color.copy(I).multiplyScalar(N),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=W,m++}else if(E.isPointLight){const W=t.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const j=E.shadow,q=e.get(E);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=W,g++}else if(E.isHemisphereLight){const W=t.get(E);W.skyColor.copy(E.color).multiplyScalar(N),W.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[f]=W,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==_||R.pointLength!==g||R.spotLength!==d||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==b)&&(n.directional.length=_,n.spot.length=d,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,R.directionalLength=_,R.pointLength=g,R.spotLength=d,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=b,n.version=tv++)}function c(l,u){let h=0,p=0,_=0,g=0,d=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const v=n.hemi[d];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),d++}}}return{setup:o,setupView:c,state:n}}function Tu(r){const t=new nv(r),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function iv(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Tu(r),t.set(i,[o])):s>=a.length?(o=new Tu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class rv extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sv extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const av=`void main() {
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
}`;function lv(r,t,e){let n=new ec;const i=new Ut,s=new Ut,a=new ie,o=new rv({depthPacking:np}),c=new sv,l={},u=e.maxTextureSize,h={[_i]:Ve,[Ve]:_i,[An]:An},p=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:av,fragmentShader:ov}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ge(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let f=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ui),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==Hn&&this.type===Hn,$=f===Hn&&this.type!==Hn;for(let X=0,W=C.length;X<W;X++){const j=C[X],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ut=q.getFrameExtents();if(i.multiply(ut),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ut.x),i.x=s.x*ut.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ut.y),i.y=s.y*ut.y,q.mapSize.y=s.y)),q.map===null||N===!0||$===!0){const tt=this.type!==Hn?{minFilter:un,magFilter:un}:{};q.map!==null&&q.map.dispose(),q.map=new qi(i.x,i.y,tt),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const k=q.getViewportCount();for(let tt=0;tt<k;tt++){const Z=q.getViewport(tt);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(a),q.updateMatrices(j,tt),n=q.getFrustum(),v(b,R,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&y(q,R),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,E)};function y(C,b){const R=t.update(d);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(b,null,R,p,d,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(b,null,R,_,d,null)}function x(C,b,R,M){let S=null;const E=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=R.isPointLight===!0?c:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=S.uuid,N=b.uuid;let $=l[I];$===void 0&&($={},l[I]=$);let X=$[N];X===void 0&&(X=S.clone(),$[N]=X,b.addEventListener("dispose",A)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Hn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=r.properties.get(S);I.light=R}return S}function v(C,b,R,M,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const N=t.update(C),$=C.material;if(Array.isArray($)){const X=N.groups;for(let W=0,j=X.length;W<j;W++){const q=X[W],ut=$[q.materialIndex];if(ut&&ut.visible){const k=x(C,ut,M,S);C.onBeforeShadow(r,C,b,R,N,k,q),r.renderBufferDirect(R,null,N,k,C,q),C.onAfterShadow(r,C,b,R,N,k,q)}}}else if($.visible){const X=x(C,$,M,S);C.onBeforeShadow(r,C,b,R,N,X,null),r.renderBufferDirect(R,null,N,X,C,null),C.onAfterShadow(r,C,b,R,N,X,null)}}const I=C.children;for(let N=0,$=I.length;N<$;N++)v(I[N],b,R,M,S)}function A(C){C.target.removeEventListener("dispose",A);for(const R in l){const M=l[R],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function cv(r){function t(){let U=!1;const at=new ie;let J=null;const Q=new ie(0,0,0,0);return{setMask:function(lt){J!==lt&&!U&&(r.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){U=lt},setClear:function(lt,At,Vt,_e,be){be===!0&&(lt*=_e,At*=_e,Vt*=_e),at.set(lt,At,Vt,_e),Q.equals(at)===!1&&(r.clearColor(lt,At,Vt,_e),Q.copy(at))},reset:function(){U=!1,J=null,Q.set(-1,0,0,0)}}}function e(){let U=!1,at=null,J=null,Q=null;return{setTest:function(lt){lt?ct(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(lt){at!==lt&&!U&&(r.depthMask(lt),at=lt)},setFunc:function(lt){if(J!==lt){switch(lt){case Bf:r.depthFunc(r.NEVER);break;case zf:r.depthFunc(r.ALWAYS);break;case kf:r.depthFunc(r.LESS);break;case ha:r.depthFunc(r.LEQUAL);break;case Hf:r.depthFunc(r.EQUAL);break;case Gf:r.depthFunc(r.GEQUAL);break;case Vf:r.depthFunc(r.GREATER);break;case Wf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=lt}},setLocked:function(lt){U=lt},setClear:function(lt){Q!==lt&&(r.clearDepth(lt),Q=lt)},reset:function(){U=!1,at=null,J=null,Q=null}}}function n(){let U=!1,at=null,J=null,Q=null,lt=null,At=null,Vt=null,_e=null,be=null;return{setTest:function(qt){U||(qt?ct(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(qt){at!==qt&&!U&&(r.stencilMask(qt),at=qt)},setFunc:function(qt,Nn,Sn){(J!==qt||Q!==Nn||lt!==Sn)&&(r.stencilFunc(qt,Nn,Sn),J=qt,Q=Nn,lt=Sn)},setOp:function(qt,Nn,Sn){(At!==qt||Vt!==Nn||_e!==Sn)&&(r.stencilOp(qt,Nn,Sn),At=qt,Vt=Nn,_e=Sn)},setLocked:function(qt){U=qt},setClear:function(qt){be!==qt&&(r.clearStencil(qt),be=qt)},reset:function(){U=!1,at=null,J=null,Q=null,lt=null,At=null,Vt=null,_e=null,be=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,p=[],_=null,g=!1,d=null,m=null,f=null,y=null,x=null,v=null,A=null,C=new Pt(0,0,0),b=0,R=!1,M=null,S=null,E=null,I=null,N=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=W>=2);let q=null,ut={};const k=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),Z=new ie().fromArray(k),rt=new ie().fromArray(tt);function z(U,at,J,Q){const lt=new Uint8Array(4),At=r.createTexture();r.bindTexture(U,At),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<J;Vt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(at,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(at+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return At}const K={};K[r.TEXTURE_2D]=z(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ct(r.DEPTH_TEST),s.setFunc(ha),Xt(!1),St(Dc),ct(r.CULL_FACE),Kt(ui);function ct(U){l[U]!==!0&&(r.enable(U),l[U]=!0)}function dt(U){l[U]!==!1&&(r.disable(U),l[U]=!1)}function H(U,at){return u[U]!==at?(r.bindFramebuffer(U,at),u[U]=at,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=at),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=at),!0):!1}function ht(U,at){let J=p,Q=!1;if(U){J=h.get(at),J===void 0&&(J=[],h.set(at,J));const lt=U.textures;if(J.length!==lt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let At=0,Vt=lt.length;At<Vt;At++)J[At]=r.COLOR_ATTACHMENT0+At;J.length=lt.length,Q=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,Q=!0);Q&&r.drawBuffers(J)}function _t(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const zt={[Ni]:r.FUNC_ADD,[Mf]:r.FUNC_SUBTRACT,[Sf]:r.FUNC_REVERSE_SUBTRACT};zt[Ef]=r.MIN,zt[Tf]=r.MAX;const D={[bf]:r.ZERO,[wf]:r.ONE,[Af]:r.SRC_COLOR,[ko]:r.SRC_ALPHA,[If]:r.SRC_ALPHA_SATURATE,[Lf]:r.DST_COLOR,[Rf]:r.DST_ALPHA,[Cf]:r.ONE_MINUS_SRC_COLOR,[Ho]:r.ONE_MINUS_SRC_ALPHA,[Df]:r.ONE_MINUS_DST_COLOR,[Pf]:r.ONE_MINUS_DST_ALPHA,[Uf]:r.CONSTANT_COLOR,[Nf]:r.ONE_MINUS_CONSTANT_COLOR,[Of]:r.CONSTANT_ALPHA,[Ff]:r.ONE_MINUS_CONSTANT_ALPHA};function Kt(U,at,J,Q,lt,At,Vt,_e,be,qt){if(U===ui){g===!0&&(dt(r.BLEND),g=!1);return}if(g===!1&&(ct(r.BLEND),g=!0),U!==yf){if(U!==d||qt!==R){if((m!==Ni||x!==Ni)&&(r.blendEquation(r.FUNC_ADD),m=Ni,x=Ni),qt)switch(U){case Mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,y=null,v=null,A=null,C.set(0,0,0),b=0,d=U,R=qt}return}lt=lt||at,At=At||J,Vt=Vt||Q,(at!==m||lt!==x)&&(r.blendEquationSeparate(zt[at],zt[lt]),m=at,x=lt),(J!==f||Q!==y||At!==v||Vt!==A)&&(r.blendFuncSeparate(D[J],D[Q],D[At],D[Vt]),f=J,y=Q,v=At,A=Vt),(_e.equals(C)===!1||be!==b)&&(r.blendColor(_e.r,_e.g,_e.b,be),C.copy(_e),b=be),d=U,R=!1}function Bt(U,at){U.side===An?dt(r.CULL_FACE):ct(r.CULL_FACE);let J=U.side===Ve;at&&(J=!J),Xt(J),U.blending===Mr&&U.transparent===!1?Kt(ui):Kt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function St(U){U!==gf?(ct(r.CULL_FACE),U!==S&&(U===Dc?r.cullFace(r.BACK):U===vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),S=U}function se(U){U!==E&&(X&&r.lineWidth(U),E=U)}function Tt(U,at,J){U?(ct(r.POLYGON_OFFSET_FILL),(I!==at||N!==J)&&(r.polygonOffset(at,J),I=at,N=J)):dt(r.POLYGON_OFFSET_FILL)}function Dt(U){U?ct(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function P(U){U===void 0&&(U=r.TEXTURE0+$-1),q!==U&&(r.activeTexture(U),q=U)}function T(U,at,J){J===void 0&&(q===null?J=r.TEXTURE0+$-1:J=q);let Q=ut[J];Q===void 0&&(Q={type:void 0,texture:void 0},ut[J]=Q),(Q.type!==U||Q.texture!==at)&&(q!==J&&(r.activeTexture(J),q=J),r.bindTexture(U,at||K[U]),Q.type=U,Q.texture=at)}function Y(){const U=ut[q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Z.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function xt(U){rt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function It(U,at){let J=c.get(at);J===void 0&&(J=new WeakMap,c.set(at,J));let Q=J.get(U);Q===void 0&&(Q=r.getUniformBlockIndex(at,U.name),J.set(U,Q))}function kt(U,at){const Q=c.get(at).get(U);o.get(at)!==Q&&(r.uniformBlockBinding(at,Q,U.__bindingPointIndex),o.set(at,Q))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},q=null,ut={},u={},h=new WeakMap,p=[],_=null,g=!1,d=null,m=null,f=null,y=null,x=null,v=null,A=null,C=new Pt(0,0,0),b=0,R=!1,M=null,S=null,E=null,I=null,N=null,Z.set(0,0,r.canvas.width,r.canvas.height),rt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ct,disable:dt,bindFramebuffer:H,drawBuffers:ht,useProgram:_t,setBlending:Kt,setMaterial:Bt,setFlipSided:Xt,setCullFace:St,setLineWidth:se,setPolygonOffset:Tt,setScissorTest:Dt,activeTexture:P,bindTexture:T,unbindTexture:Y,compressedTexImage2D:nt,compressedTexImage3D:it,texImage2D:gt,texImage3D:Gt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:Nt,texStorage3D:st,texSubImage2D:et,texSubImage3D:bt,compressedTexSubImage2D:pt,compressedTexSubImage3D:vt,scissor:Lt,viewport:xt,reset:le}}function bu(r,t,e,n){const i=uv(n);switch(e){case bd:return r*t;case Ad:return r*t;case Cd:return r*t*2;case Rd:return r*t/i.components*i.byteLength;case Yl:return r*t/i.components*i.byteLength;case Pd:return r*t*2/i.components*i.byteLength;case $l:return r*t*2/i.components*i.byteLength;case wd:return r*t*3/i.components*i.byteLength;case xn:return r*t*4/i.components*i.byteLength;case jl:return r*t*4/i.components*i.byteLength;case na:case ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ra:case sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yo:case jo:return Math.max(r,16)*Math.max(t,8)/4;case qo:case $o:return Math.max(r,8)*Math.max(t,8)/2;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case aa:case fl:case pl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ld:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _l:case gl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uv(r){switch(r){case jn:case Sd:return{byteLength:1,components:1};case ss:case Ed:case _s:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Xi:case Wl:case Xn:return{byteLength:4,components:1};case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function dv(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return _?new OffscreenCanvas(P,T):ga("canvas")}function d(P,T,Y){let nt=1;const it=Dt(P);if((it.width>Y||it.height>Y)&&(nt=Y/Math.max(it.width,it.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(nt*it.width),bt=Math.floor(nt*it.height);h===void 0&&(h=g(et,bt));const pt=T?g(et,bt):h;return pt.width=et,pt.height=bt,pt.getContext("2d").drawImage(P,0,0,et,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+bt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==un&&P.minFilter!==gn}function f(P){r.generateMipmap(P)}function y(P,T,Y,nt,it=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=T;if(T===r.RED&&(Y===r.FLOAT&&(et=r.R32F),Y===r.HALF_FLOAT&&(et=r.R16F),Y===r.UNSIGNED_BYTE&&(et=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(et=r.R8UI),Y===r.UNSIGNED_SHORT&&(et=r.R16UI),Y===r.UNSIGNED_INT&&(et=r.R32UI),Y===r.BYTE&&(et=r.R8I),Y===r.SHORT&&(et=r.R16I),Y===r.INT&&(et=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(et=r.RG32F),Y===r.HALF_FLOAT&&(et=r.RG16F),Y===r.UNSIGNED_BYTE&&(et=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(et=r.RG8UI),Y===r.UNSIGNED_SHORT&&(et=r.RG16UI),Y===r.UNSIGNED_INT&&(et=r.RG32UI),Y===r.BYTE&&(et=r.RG8I),Y===r.SHORT&&(et=r.RG16I),Y===r.INT&&(et=r.RG32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),T===r.RGBA){const bt=it?fa:Zt.getTransfer(nt);Y===r.FLOAT&&(et=r.RGBA32F),Y===r.HALF_FLOAT&&(et=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(et=bt===ne?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,T){let Y;return P?T===null||T===Xi||T===Rr?Y=r.DEPTH24_STENCIL8:T===Xn?Y=r.DEPTH32F_STENCIL8:T===ss&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xi||T===Rr?Y=r.DEPTH_COMPONENT24:T===Xn?Y=r.DEPTH_COMPONENT32F:T===ss&&(Y=r.DEPTH_COMPONENT16),Y}function v(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),b(T),T.isVideoTexture&&u.delete(T)}function C(P){const T=P.target;T.removeEventListener("dispose",C),M(T)}function b(P){const T=n.get(P);if(T.__webglInit===void 0)return;const Y=P.source,nt=p.get(Y);if(nt){const it=nt[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(P),Object.keys(nt).length===0&&p.delete(Y)}n.remove(P)}function R(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const Y=P.source,nt=p.get(Y);delete nt[T.__cacheKey],a.memory.textures--}function M(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let it=0;it<T.__webglFramebuffer[nt].length;it++)r.deleteFramebuffer(T.__webglFramebuffer[nt][it]);else r.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)r.deleteFramebuffer(T.__webglFramebuffer[nt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=P.textures;for(let nt=0,it=Y.length;nt<it;nt++){const et=n.get(Y[nt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(Y[nt])}n.remove(P)}let S=0;function E(){S=0}function I(){const P=S;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),S+=1,P}function N(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function $(P,T){const Y=n.get(P);if(P.isVideoTexture&&se(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Y,P,T);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function X(P,T){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){rt(Y,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function W(P,T){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){rt(Y,P,T);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function j(P,T){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){z(Y,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const q={[Wo]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Xo]:r.MIRRORED_REPEAT},ut={[un]:r.NEAREST,[tp]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[$a]:r.LINEAR_MIPMAP_NEAREST,[zi]:r.LINEAR_MIPMAP_LINEAR},k={[rp]:r.NEVER,[up]:r.ALWAYS,[sp]:r.LESS,[Dd]:r.LEQUAL,[ap]:r.EQUAL,[cp]:r.GEQUAL,[op]:r.GREATER,[lp]:r.NOTEQUAL};function tt(P,T){if(T.type===Xn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===gn||T.magFilter===$a||T.magFilter===ws||T.magFilter===zi||T.minFilter===gn||T.minFilter===$a||T.minFilter===ws||T.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,q[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,q[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,q[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ut[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ut[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===un||T.minFilter!==ws&&T.minFilter!==zi||T.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Z(P,T){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const nt=T.source;let it=p.get(nt);it===void 0&&(it={},p.set(nt,it));const et=N(T);if(et!==P.__cacheKey){it[et]===void 0&&(it[et]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),it[et].usedTimes++;const bt=it[P.__cacheKey];bt!==void 0&&(it[P.__cacheKey].usedTimes--,bt.usedTimes===0&&R(T)),P.__cacheKey=et,P.__webglTexture=it[et].texture}return Y}function rt(P,T,Y){let nt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=r.TEXTURE_3D);const it=Z(P,T),et=T.source;e.bindTexture(nt,P.__webglTexture,r.TEXTURE0+Y);const bt=n.get(et);if(et.version!==bt.__version||it===!0){e.activeTexture(r.TEXTURE0+Y);const pt=Zt.getPrimaries(Zt.workingColorSpace),vt=T.colorSpace===ai?null:Zt.getPrimaries(T.colorSpace),Nt=T.colorSpace===ai||pt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let st=d(T.image,!1,i.maxTextureSize);st=Tt(T,st);const gt=s.convert(T.format,T.colorSpace),Gt=s.convert(T.type);let Lt=y(T.internalFormat,gt,Gt,T.colorSpace,T.isVideoTexture);tt(nt,T);let xt;const It=T.mipmaps,kt=T.isVideoTexture!==!0,le=bt.__version===void 0||it===!0,U=et.dataReady,at=v(T,st);if(T.isDepthTexture)Lt=x(T.format===Pr,T.type),le&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Lt,st.width,st.height,0,gt,Gt,null));else if(T.isDataTexture)if(It.length>0){kt&&le&&e.texStorage2D(r.TEXTURE_2D,at,Lt,It[0].width,It[0].height);for(let J=0,Q=It.length;J<Q;J++)xt=It[J],kt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,xt.width,xt.height,gt,Gt,xt.data):e.texImage2D(r.TEXTURE_2D,J,Lt,xt.width,xt.height,0,gt,Gt,xt.data);T.generateMipmaps=!1}else kt?(le&&e.texStorage2D(r.TEXTURE_2D,at,Lt,st.width,st.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,gt,Gt,st.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,st.width,st.height,0,gt,Gt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){kt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Lt,It[0].width,It[0].height,st.depth);for(let J=0,Q=It.length;J<Q;J++)if(xt=It[J],T.format!==xn)if(gt!==null)if(kt){if(U)if(T.layerUpdates.size>0){const lt=bu(xt.width,xt.height,T.format,T.type);for(const At of T.layerUpdates){const Vt=xt.data.subarray(At*lt/xt.data.BYTES_PER_ELEMENT,(At+1)*lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,At,xt.width,xt.height,1,gt,Vt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,xt.width,xt.height,st.depth,gt,xt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Lt,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,xt.width,xt.height,st.depth,gt,Gt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Lt,xt.width,xt.height,st.depth,0,gt,Gt,xt.data)}else{kt&&le&&e.texStorage2D(r.TEXTURE_2D,at,Lt,It[0].width,It[0].height);for(let J=0,Q=It.length;J<Q;J++)xt=It[J],T.format!==xn?gt!==null?kt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,xt.width,xt.height,gt,Gt,xt.data):e.texImage2D(r.TEXTURE_2D,J,Lt,xt.width,xt.height,0,gt,Gt,xt.data)}else if(T.isDataArrayTexture)if(kt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Lt,st.width,st.height,st.depth),U)if(T.layerUpdates.size>0){const J=bu(st.width,st.height,T.format,T.type);for(const Q of T.layerUpdates){const lt=st.data.subarray(Q*J/st.data.BYTES_PER_ELEMENT,(Q+1)*J/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,gt,Gt,lt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Gt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,gt,Gt,st.data);else if(T.isData3DTexture)kt?(le&&e.texStorage3D(r.TEXTURE_3D,at,Lt,st.width,st.height,st.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Gt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,gt,Gt,st.data);else if(T.isFramebufferTexture){if(le)if(kt)e.texStorage2D(r.TEXTURE_2D,at,Lt,st.width,st.height);else{let J=st.width,Q=st.height;for(let lt=0;lt<at;lt++)e.texImage2D(r.TEXTURE_2D,lt,Lt,J,Q,0,gt,Gt,null),J>>=1,Q>>=1}}else if(It.length>0){if(kt&&le){const J=Dt(It[0]);e.texStorage2D(r.TEXTURE_2D,at,Lt,J.width,J.height)}for(let J=0,Q=It.length;J<Q;J++)xt=It[J],kt?U&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,gt,Gt,xt):e.texImage2D(r.TEXTURE_2D,J,Lt,gt,Gt,xt);T.generateMipmaps=!1}else if(kt){if(le){const J=Dt(st);e.texStorage2D(r.TEXTURE_2D,at,Lt,J.width,J.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Gt,st)}else e.texImage2D(r.TEXTURE_2D,0,Lt,gt,Gt,st);m(T)&&f(nt),bt.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function z(P,T,Y){if(T.image.length!==6)return;const nt=Z(P,T),it=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const et=n.get(it);if(it.version!==et.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y);const bt=Zt.getPrimaries(Zt.workingColorSpace),pt=T.colorSpace===ai?null:Zt.getPrimaries(T.colorSpace),vt=T.colorSpace===ai||bt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Nt=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!Nt&&!st?gt[Q]=d(T.image[Q],!0,i.maxCubemapSize):gt[Q]=st?T.image[Q].image:T.image[Q],gt[Q]=Tt(T,gt[Q]);const Gt=gt[0],Lt=s.convert(T.format,T.colorSpace),xt=s.convert(T.type),It=y(T.internalFormat,Lt,xt,T.colorSpace),kt=T.isVideoTexture!==!0,le=et.__version===void 0||nt===!0,U=it.dataReady;let at=v(T,Gt);tt(r.TEXTURE_CUBE_MAP,T);let J;if(Nt){kt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,at,It,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){J=gt[Q].mipmaps;for(let lt=0;lt<J.length;lt++){const At=J[lt];T.format!==xn?Lt!==null?kt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt,0,0,At.width,At.height,Lt,At.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt,It,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt,0,0,At.width,At.height,Lt,xt,At.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt,It,At.width,At.height,0,Lt,xt,At.data)}}}else{if(J=T.mipmaps,kt&&le){J.length>0&&at++;const Q=Dt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,at,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,Lt,xt,gt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,gt[Q].width,gt[Q].height,0,Lt,xt,gt[Q].data);for(let lt=0;lt<J.length;lt++){const Vt=J[lt].image[Q].image;kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt+1,0,0,Vt.width,Vt.height,Lt,xt,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt+1,It,Vt.width,Vt.height,0,Lt,xt,Vt.data)}}else{kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,xt,gt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,Lt,xt,gt[Q]);for(let lt=0;lt<J.length;lt++){const At=J[lt];kt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt+1,0,0,Lt,xt,At.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt+1,It,Lt,xt,At.image[Q])}}}m(T)&&f(r.TEXTURE_CUBE_MAP),et.__version=it.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function K(P,T,Y,nt,it,et){const bt=s.convert(Y.format,Y.colorSpace),pt=s.convert(Y.type),vt=y(Y.internalFormat,bt,pt,Y.colorSpace);if(!n.get(T).__hasExternalTextures){const st=Math.max(1,T.width>>et),gt=Math.max(1,T.height>>et);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,et,vt,st,gt,T.depth,0,bt,pt,null):e.texImage2D(it,et,vt,st,gt,0,bt,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),St(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,it,n.get(Y).__webglTexture,0,Xt(T)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,it,n.get(Y).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(P,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const nt=T.depthTexture,it=nt&&nt.isDepthTexture?nt.type:null,et=x(T.stencilBuffer,it),bt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=Xt(T);St(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,et,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,et,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,et,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,P)}else{const nt=T.textures;for(let it=0;it<nt.length;it++){const et=nt[it],bt=s.convert(et.format,et.colorSpace),pt=s.convert(et.type),vt=y(et.internalFormat,bt,pt,et.colorSpace),Nt=Xt(T);Y&&St(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,vt,T.width,T.height):St(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,vt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,vt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const nt=n.get(T.depthTexture).__webglTexture,it=Xt(T);if(T.depthTexture.format===Sr)St(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(T.depthTexture.format===Pr)St(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function H(P){const T=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");dt(T.__webglFramebuffer,P)}else if(Y){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]=r.createRenderbuffer(),ct(T.__webglDepthbuffer[nt],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),ct(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(P,T,Y){const nt=n.get(P);T!==void 0&&K(nt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&H(P)}function _t(P){const T=P.texture,Y=n.get(P),nt=n.get(T);P.addEventListener("dispose",C);const it=P.textures,et=P.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=T.version,a.memory.textures++),et){Y.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[pt]=[];for(let vt=0;vt<T.mipmaps.length;vt++)Y.__webglFramebuffer[pt][vt]=r.createFramebuffer()}else Y.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)Y.__webglFramebuffer[pt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(bt)for(let pt=0,vt=it.length;pt<vt;pt++){const Nt=n.get(it[pt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&St(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const vt=it[pt];Y.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[pt]);const Nt=s.convert(vt.format,vt.colorSpace),st=s.convert(vt.type),gt=y(vt.internalFormat,Nt,st,vt.colorSpace,P.isXRRenderTarget===!0),Gt=Xt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,gt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)K(Y.__webglFramebuffer[pt][vt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else K(Y.__webglFramebuffer[pt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let pt=0,vt=it.length;pt<vt;pt++){const Nt=it[pt],st=n.get(Nt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),tt(r.TEXTURE_2D,Nt),K(Y.__webglFramebuffer,P,Nt,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),m(Nt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,nt.__webglTexture),tt(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)K(Y.__webglFramebuffer[vt],P,T,r.COLOR_ATTACHMENT0,pt,vt);else K(Y.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,pt,0);m(T)&&f(pt),e.unbindTexture()}P.depthBuffer&&H(P)}function zt(P){const T=P.textures;for(let Y=0,nt=T.length;Y<nt;Y++){const it=T[Y];if(m(it)){const et=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,bt=n.get(it).__webglTexture;e.bindTexture(et,bt),f(et),e.unbindTexture()}}}const D=[],Kt=[];function Bt(P){if(P.samples>0){if(St(P)===!1){const T=P.textures,Y=P.width,nt=P.height;let it=r.COLOR_BUFFER_BIT;const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(P),pt=T.length>1;if(pt)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Nt=n.get(T[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,it,r.NEAREST),c===!0&&(D.length=0,Kt.length=0,D.push(r.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(et),Kt.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const Nt=n.get(T[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Nt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Xt(P){return Math.min(i.maxSamples,P.samples)}function St(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Tt(P,T){const Y=P.colorSpace,nt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==yi&&Y!==ai&&(Zt.getTransfer(Y)===ne?(nt!==xn||it!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=ht,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=K,this.useMultisampledRTT=St}function hv(r,t){function e(n,i=ai){let s;const a=Zt.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===Xl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return r.BYTE;if(n===Ed)return r.SHORT;if(n===ss)return r.UNSIGNED_SHORT;if(n===Wl)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===_s)return r.HALF_FLOAT;if(n===bd)return r.ALPHA;if(n===wd)return r.RGB;if(n===xn)return r.RGBA;if(n===Ad)return r.LUMINANCE;if(n===Cd)return r.LUMINANCE_ALPHA;if(n===Sr)return r.DEPTH_COMPONENT;if(n===Pr)return r.DEPTH_STENCIL;if(n===Rd)return r.RED;if(n===Yl)return r.RED_INTEGER;if(n===Pd)return r.RG;if(n===$l)return r.RG_INTEGER;if(n===jl)return r.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===$o||n===jo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Zo||n===Jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ko||n===Zo)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===dl||n===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===fl||n===pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ld||n===ml||n===_l||n===gl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class fv extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const d of t.hand.values()){const m=e.getJointPose(d,n),f=this._getHandJoint(l,d);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),_=.02,g=.005;l.inputState.pinching&&p>_+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=_-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mv=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:mv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vv extends Fr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,_=null,g=null;const d=new gv,m=e.getContextAttributes();let f=null,y=null;const x=[],v=[],A=new Ut;let C=null;const b=new ke;b.layers.enable(1),b.viewport=new ie;const R=new ke;R.layers.enable(2),R.viewport=new ie;const M=[b,R],S=new fv;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=x[z];return K===void 0&&(K=new So,x[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=x[z];return K===void 0&&(K=new So,x[z]=K),K.getGripSpace()},this.getHand=function(z){let K=x[z];return K===void 0&&(K=new So,x[z]=K),K.getHandSpace()};function N(z){const K=v.indexOf(z.inputSource);if(K===-1)return;const ct=x[K];ct!==void 0&&(ct.update(z.inputSource,z.frame,l||a),ct.dispatchEvent({type:z.type,data:z.inputSource}))}function $(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",X);for(let z=0;z<x.length;z++){const K=v[z];K!==null&&(v[z]=null,x[z].disconnect(K))}E=null,I=null,d.reset(),t.setRenderTarget(f),_=null,p=null,h=null,i=null,y=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",$),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),y=new qi(_.framebufferWidth,_.framebufferHeight,{format:xn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ct=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Pr:Sr,ct=m.stencil?Rr:Xi);const H={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};h=new XRWebGLBinding(i,e),p=h.createProjectionLayer(H),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new qi(p.textureWidth,p.textureHeight,{format:xn,type:jn,depthTexture:new Wd(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function X(z){for(let K=0;K<z.removed.length;K++){const ct=z.removed[K],dt=v.indexOf(ct);dt>=0&&(v[dt]=null,x[dt].disconnect(ct))}for(let K=0;K<z.added.length;K++){const ct=z.added[K];let dt=v.indexOf(ct);if(dt===-1){for(let ht=0;ht<x.length;ht++)if(ht>=v.length){v.push(ct),dt=ht;break}else if(v[ht]===null){v[ht]=ct,dt=ht;break}if(dt===-1)break}const H=x[dt];H&&H.connect(ct)}}const W=new F,j=new F;function q(z,K,ct){W.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ct.matrixWorld);const dt=W.distanceTo(j),H=K.projectionMatrix.elements,ht=ct.projectionMatrix.elements,_t=H[14]/(H[10]-1),zt=H[14]/(H[10]+1),D=(H[9]+1)/H[5],Kt=(H[9]-1)/H[5],Bt=(H[8]-1)/H[0],Xt=(ht[8]+1)/ht[0],St=_t*Bt,se=_t*Xt,Tt=dt/(-Bt+Xt),Dt=Tt*-Bt;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Dt),z.translateZ(Tt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const P=_t+Tt,T=zt+Tt,Y=St-Dt,nt=se+(dt-Dt),it=D*zt/T*P,et=Kt*zt/T*P;z.projectionMatrix.makePerspective(Y,nt,it,et,P,T),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function ut(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;d.texture!==null&&(z.near=d.depthNear,z.far=d.depthFar),S.near=R.near=b.near=z.near,S.far=R.far=b.far=z.far,(E!==S.near||I!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far,b.near=E,b.far=I,R.near=E,R.far=I,b.updateProjectionMatrix(),R.updateProjectionMatrix(),z.updateProjectionMatrix());const K=z.parent,ct=S.cameras;ut(S,K);for(let dt=0;dt<ct.length;dt++)ut(ct[dt],K);ct.length===2?q(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),k(z,S,K)};function k(z,K,ct){ct===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ct.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xl*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(S)};let tt=null;function Z(z,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const ct=u.views;_!==null&&(t.setRenderTargetFramebuffer(y,_.framebuffer),t.setRenderTarget(y));let dt=!1;ct.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let ht=0;ht<ct.length;ht++){const _t=ct[ht];let zt=null;if(_!==null)zt=_.getViewport(_t);else{const Kt=h.getViewSubImage(p,_t);zt=Kt.viewport,ht===0&&(t.setRenderTargetTextures(y,Kt.colorTexture,p.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(y))}let D=M[ht];D===void 0&&(D=new ke,D.layers.enable(ht),D.viewport=new ie,M[ht]=D),D.matrix.fromArray(_t.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(_t.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(zt.x,zt.y,zt.width,zt.height),ht===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(D)}const H=i.enabledFeatures;if(H&&H.includes("depth-sensing")){const ht=h.getDepthInformation(ct[0]);ht&&ht.isValid&&ht.texture&&d.init(t,ht,i.renderState)}}for(let ct=0;ct<x.length;ct++){const dt=v[ct],H=x[ct];dt!==null&&H!==void 0&&H.update(dt,K,l||a)}tt&&tt(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const rt=new Vd;rt.setAnimationLoop(Z),this.setAnimationLoop=function(z){tt=z},this.dispose=function(){}}}const Ci=new Mn,xv=new re;function yv(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kd(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&_(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),d(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function _(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function d(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(y,A);const C=t.render.frame;s[y.id]!==C&&(p(y),s[y.id]=C)}function u(y){const x=h();y.__bindingPointIndex=x;const v=r.createBuffer(),A=y.__size,C=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=i[y.id],v=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,b=v.length;C<b;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,S=R.length;M<S;M++){const E=R[M];if(_(E,C,M,A)===!0){const I=E.__offset,N=Array.isArray(E.value)?E.value:[E.value];let $=0;for(let X=0;X<N.length;X++){const W=N[X],j=d(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,I+$,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(y,x,v,A){const C=y.value,b=x+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(y){const x=y.uniforms;let v=0;const A=16;for(let b=0,R=x.length;b<R;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,E=M.length;S<E;S++){const I=M[S],N=Array.isArray(I.value)?I.value:[I.value];for(let $=0,X=N.length;$<X;$++){const W=N[$],j=d(W),q=v%A;q!==0&&A-q<j.boundary&&(v+=A-q),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=j.storage}}}const C=v%A;return C>0&&(v+=A-C),y.__size=v,y.__cache={},this}function d(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}class jd{constructor(t={}){const{canvas:e=hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let d=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let v=!1,A=0,C=0,b=null,R=-1,M=null;const S=new ie,E=new ie;let I=null;const N=new Pt(0);let $=0,X=e.width,W=e.height,j=1,q=null,ut=null;const k=new ie(0,0,X,W),tt=new ie(0,0,X,W);let Z=!1;const rt=new ec;let z=!1,K=!1;const ct=new re,dt=new F,H=new ie,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function zt(){return b===null?j:1}let D=n;function Kt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){const O="webgl2";if(D=Kt(O,w),D===null)throw Kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,Xt,St,se,Tt,Dt,P,T,Y,nt,it,et,bt,pt,vt,Nt,st,gt,Gt,Lt,xt,It,kt,le;function U(){Bt=new Rg(D),Bt.init(),It=new hv(D,Bt),Xt=new Sg(D,Bt,t,It),St=new cv(D),se=new Dg(D),Tt=new j0,Dt=new dv(D,Bt,St,Tt,Xt,It,se),P=new Tg(x),T=new Cg(x),Y=new Bp(D),kt=new yg(D,Y),nt=new Pg(D,Y,se,kt),it=new Ug(D,nt,Y,se),Gt=new Ig(D,Xt,Dt),Nt=new Eg(Tt),et=new $0(x,P,T,Bt,Xt,kt,Nt),bt=new yv(x,Tt),pt=new Z0,vt=new iv(Bt),gt=new xg(x,P,T,St,it,p,c),st=new lv(x,it,Xt),le=new Mv(D,se,Xt,St),Lt=new Mg(D,Bt,se),xt=new Lg(D,Bt,se),se.programs=et.programs,x.capabilities=Xt,x.extensions=Bt,x.properties=Tt,x.renderLists=pt,x.shadowMap=st,x.state=St,x.info=se}U();const at=new vv(x,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(X,W,!1))},this.getSize=function(w){return w.set(X,W)},this.setSize=function(w,O,G=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,W=O,e.width=Math.floor(w*j),e.height=Math.floor(O*j),G===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*j,W*j).floor()},this.setDrawingBufferSize=function(w,O,G){X=w,W=O,j=G,e.width=Math.floor(w*G),e.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,O,G,V){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,O,G,V),St.viewport(S.copy(k).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,O,G,V){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,O,G,V),St.scissor(E.copy(tt).multiplyScalar(j).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){St.setScissorTest(Z=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(w=!0,O=!0,G=!0){let V=0;if(w){let B=!1;if(b!==null){const ot=b.texture.format;B=ot===jl||ot===$l||ot===Yl}if(B){const ot=b.texture.type,mt=ot===jn||ot===Xi||ot===ss||ot===Rr||ot===Xl||ot===ql,yt=gt.getClearColor(),Mt=gt.getClearAlpha(),Ct=yt.r,Rt=yt.g,wt=yt.b;mt?(_[0]=Ct,_[1]=Rt,_[2]=wt,_[3]=Mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Ct,g[1]=Rt,g[2]=wt,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),vt.dispose(),Tt.dispose(),P.dispose(),T.dispose(),it.dispose(),kt.dispose(),le.dispose(),et.dispose(),at.dispose(),at.removeEventListener("sessionstart",Sn),at.removeEventListener("sessionend",bc),Si.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=se.autoReset,O=st.enabled,G=st.autoUpdate,V=st.needsUpdate,B=st.type;U(),se.autoReset=w,st.enabled=O,st.autoUpdate=G,st.needsUpdate=V,st.type=B}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){const O=w.target;O.removeEventListener("dispose",At),Vt(O)}function Vt(w){_e(w),Tt.remove(w)}function _e(w){const O=Tt.get(w).programs;O!==void 0&&(O.forEach(function(G){et.releaseProgram(G)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,V,B,ot){O===null&&(O=ht);const mt=B.isMesh&&B.matrixWorld.determinant()<0,yt=ff(w,O,G,V,B);St.setMaterial(V,mt);let Mt=G.index,Ct=1;if(V.wireframe===!0){if(Mt=nt.getWireframeAttribute(G),Mt===void 0)return;Ct=2}const Rt=G.drawRange,wt=G.attributes.position;let Yt=Rt.start*Ct,he=(Rt.start+Rt.count)*Ct;ot!==null&&(Yt=Math.max(Yt,ot.start*Ct),he=Math.min(he,(ot.start+ot.count)*Ct)),Mt!==null?(Yt=Math.max(Yt,0),he=Math.min(he,Mt.count)):wt!=null&&(Yt=Math.max(Yt,0),he=Math.min(he,wt.count));const fe=he-Yt;if(fe<0||fe===1/0)return;kt.setup(B,V,yt,G,Mt);let je,$t=Lt;if(Mt!==null&&(je=Y.get(Mt),$t=xt,$t.setIndex(je)),B.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*zt()),$t.setMode(D.LINES)):$t.setMode(D.TRIANGLES);else if(B.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*zt()),B.isLineSegments?$t.setMode(D.LINES):B.isLineLoop?$t.setMode(D.LINE_LOOP):$t.setMode(D.LINE_STRIP)}else B.isPoints?$t.setMode(D.POINTS):B.isSprite&&$t.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)$t.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,we=B._multiDrawCounts,jt=B._multiDrawCount,fn=Mt?Y.get(Mt).bytesPerElement:1,$i=Tt.get(V).currentProgram.getUniforms();for(let Ke=0;Ke<jt;Ke++)$i.setValue(D,"_gl_DrawID",Ke),$t.render(Et[Ke]/fn,we[Ke])}else if(B.isInstancedMesh)$t.renderInstances(Yt,fe,B.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,we=Math.min(G.instanceCount,Et);$t.renderInstances(Yt,fe,we)}else $t.render(Yt,fe)};function be(w,O,G){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,bs(w,O,G),w.side=_i,w.needsUpdate=!0,bs(w,O,G),w.side=An):bs(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),m=vt.get(G),m.init(O),y.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const V=new Set;return w.traverse(function(B){const ot=B.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const yt=ot[mt];be(yt,G,B),V.add(yt)}else be(ot,G,B),V.add(ot)}),y.pop(),m=null,V},this.compileAsync=function(w,O,G=null){const V=this.compile(w,O,G);return new Promise(B=>{function ot(){if(V.forEach(function(mt){Tt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){B(w);return}setTimeout(ot,10)}Bt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let qt=null;function Nn(w){qt&&qt(w)}function Sn(){Si.stop()}function bc(){Si.start()}const Si=new Vd;Si.setAnimationLoop(Nn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){qt=w,at.setAnimationLoop(w),w===null?Si.stop():Si.start()},at.addEventListener("sessionstart",Sn),at.addEventListener("sessionend",bc),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,b),m=vt.get(w,y.length),m.init(O),y.push(m),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),rt.setFromProjectionMatrix(ct),K=this.localClippingEnabled,z=Nt.init(this.clippingPlanes,K),d=pt.get(w,f.length),d.init(),f.push(d),at.enabled===!0&&at.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Wa(ot,O,-1/0,x.sortObjects)}Wa(w,O,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(q,ut),_t=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,_t&&gt.addToRenderList(d,w),this.info.render.frame++,z===!0&&Nt.beginShadows();const G=m.state.shadowsArray;st.render(G,w,O),z===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,B=d.transmissive;if(m.setupLights(),O.isArrayCamera){const ot=O.cameras;if(B.length>0)for(let mt=0,yt=ot.length;mt<yt;mt++){const Mt=ot[mt];Ac(V,B,w,Mt)}_t&&gt.render(w);for(let mt=0,yt=ot.length;mt<yt;mt++){const Mt=ot[mt];wc(d,w,Mt,Mt.viewport)}}else B.length>0&&Ac(V,B,w,O),_t&&gt.render(w),wc(d,w,O);b!==null&&(Dt.updateMultisampleRenderTarget(b),Dt.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,O),kt.resetDefaultState(),R=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],z===!0&&Nt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Wa(w,O,G,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){V&&H.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const mt=it.update(w),yt=w.material;yt.visible&&d.push(w,mt,yt,G,H.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){const mt=it.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),H.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),H.copy(mt.boundingSphere.center)),H.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(yt)){const Mt=mt.groups;for(let Ct=0,Rt=Mt.length;Ct<Rt;Ct++){const wt=Mt[Ct],Yt=yt[wt.materialIndex];Yt&&Yt.visible&&d.push(w,mt,Yt,G,H.z,wt)}}else yt.visible&&d.push(w,mt,yt,G,H.z,null)}}const ot=w.children;for(let mt=0,yt=ot.length;mt<yt;mt++)Wa(ot[mt],O,G,V)}function wc(w,O,G,V){const B=w.opaque,ot=w.transmissive,mt=w.transparent;m.setupLightsView(G),z===!0&&Nt.setGlobalState(x.clippingPlanes,G),V&&St.viewport(S.copy(V)),B.length>0&&Ts(B,O,G),ot.length>0&&Ts(ot,O,G),mt.length>0&&Ts(mt,O,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ac(w,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new qi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?_s:jn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ot=m.state.transmissionRenderTarget[V.id],mt=V.viewport||S;ot.setSize(mt.z,mt.w);const yt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(N),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),_t?gt.render(G):x.clear();const Mt=x.toneMapping;x.toneMapping=di;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),z===!0&&Nt.setGlobalState(x.clippingPlanes,V),Ts(w,G,V),Dt.updateMultisampleRenderTarget(ot),Dt.updateRenderTargetMipmap(ot),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let wt=0,Yt=O.length;wt<Yt;wt++){const he=O[wt],fe=he.object,je=he.geometry,$t=he.material,Et=he.group;if($t.side===An&&fe.layers.test(V.layers)){const we=$t.side;$t.side=Ve,$t.needsUpdate=!0,Cc(fe,G,V,je,$t,Et),$t.side=we,$t.needsUpdate=!0,Rt=!0}}Rt===!0&&(Dt.updateMultisampleRenderTarget(ot),Dt.updateRenderTargetMipmap(ot))}x.setRenderTarget(yt),x.setClearColor(N,$),Ct!==void 0&&(V.viewport=Ct),x.toneMapping=Mt}function Ts(w,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ot=w.length;B<ot;B++){const mt=w[B],yt=mt.object,Mt=mt.geometry,Ct=V===null?mt.material:V,Rt=mt.group;yt.layers.test(G.layers)&&Cc(yt,O,G,Mt,Ct,Rt)}}function Cc(w,O,G,V,B,ot){w.onBeforeRender(x,O,G,V,B,ot),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,x.renderBufferDirect(G,O,V,B,w,ot),B.side=_i,B.needsUpdate=!0,x.renderBufferDirect(G,O,V,B,w,ot),B.side=An):x.renderBufferDirect(G,O,V,B,w,ot),w.onAfterRender(x,O,G,V,B,ot)}function bs(w,O,G){O.isScene!==!0&&(O=ht);const V=Tt.get(w),B=m.state.lights,ot=m.state.shadowsArray,mt=B.state.version,yt=et.getParameters(w,B.state,ot,O,G),Mt=et.getProgramCacheKey(yt);let Ct=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?T:P).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",At),Ct=new Map,V.programs=Ct);let Rt=Ct.get(Mt);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===mt)return Pc(w,yt),Rt}else yt.uniforms=et.getUniforms(w),w.onBeforeCompile(yt,x),Rt=et.acquireProgram(yt,Mt),Ct.set(Mt,Rt),V.uniforms=yt.uniforms;const wt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=Nt.uniform),Pc(w,yt),V.needsLights=mf(w),V.lightsStateVersion=mt,V.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Rc(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=oa.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Pc(w,O){const G=Tt.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function ff(w,O,G,V,B){O.isScene!==!0&&(O=ht),Dt.resetTextureUnits();const ot=O.fog,mt=V.isMeshStandardMaterial?O.environment:null,yt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yi,Mt=(V.isMeshStandardMaterial?T:P).get(V.envMap||mt),Ct=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Rt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let fe=di;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=x.toneMapping);const je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=je!==void 0?je.length:0,Et=Tt.get(V),we=m.state.lights;if(z===!0&&(K===!0||w!==M)){const on=w===M&&V.id===R;Nt.setState(V,w,on)}let jt=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==we.state.version||Et.outputColorSpace!==yt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==Mt||V.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Nt.numPlanes||Et.numIntersection!==Nt.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Rt||Et.morphTargets!==wt||Et.morphNormals!==Yt||Et.morphColors!==he||Et.toneMapping!==fe||Et.morphTargetsCount!==$t)&&(jt=!0):(jt=!0,Et.__version=V.version);let fn=Et.currentProgram;jt===!0&&(fn=bs(V,O,B));let $i=!1,Ke=!1,Xa=!1;const ge=fn.getUniforms(),Qn=Et.uniforms;if(St.useProgram(fn.program)&&($i=!0,Ke=!0,Xa=!0),V.id!==R&&(R=V.id,Ke=!0),$i||M!==w){ge.setValue(D,"projectionMatrix",w.projectionMatrix),ge.setValue(D,"viewMatrix",w.matrixWorldInverse);const on=ge.map.cameraPosition;on!==void 0&&on.setValue(D,dt.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ke=!0,Xa=!0)}if(B.isSkinnedMesh){ge.setOptional(D,B,"bindMatrix"),ge.setOptional(D,B,"bindMatrixInverse");const on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ge.setValue(D,"boneTexture",on.boneTexture,Dt))}B.isBatchedMesh&&(ge.setOptional(D,B,"batchingTexture"),ge.setValue(D,"batchingTexture",B._matricesTexture,Dt),ge.setOptional(D,B,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",B._indirectTexture,Dt),ge.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",B._colorsTexture,Dt));const qa=G.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Gt.update(B,G,fn),(Ke||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,ge.setValue(D,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qn.envMap.value=Mt,Qn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Qn.envMapIntensity.value=O.environmentIntensity),Ke&&(ge.setValue(D,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&pf(Qn,Xa),ot&&V.fog===!0&&bt.refreshFogUniforms(Qn,ot),bt.refreshMaterialUniforms(Qn,V,j,W,m.state.transmissionRenderTarget[w.id]),oa.upload(D,Rc(Et),Qn,Dt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(oa.upload(D,Rc(Et),Qn,Dt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(D,"center",B.center),ge.setValue(D,"modelViewMatrix",B.modelViewMatrix),ge.setValue(D,"normalMatrix",B.normalMatrix),ge.setValue(D,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let Ya=0,_f=on.length;Ya<_f;Ya++){const Lc=on[Ya];le.update(Lc,fn),le.bind(Lc,fn)}}return fn}function pf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function mf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,G){Tt.get(w.texture).__webglTexture=O,Tt.get(w.depthTexture).__webglTexture=G;const V=Tt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const G=Tt.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){b=w,A=O,C=G;let V=!0,B=null,ot=!1,mt=!1;if(w){const Mt=Tt.get(w);Mt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(D.FRAMEBUFFER,null),V=!1):Mt.__webglFramebuffer===void 0?Dt.setupRenderTarget(w):Mt.__hasExternalTextures&&Dt.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(mt=!0);const Rt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[O])?B=Rt[O][G]:B=Rt[O],ot=!0):w.samples>0&&Dt.useMultisampledRTT(w)===!1?B=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[G]:B=Rt,S.copy(w.viewport),E.copy(w.scissor),I=w.scissorTest}else S.copy(k).multiplyScalar(j).floor(),E.copy(tt).multiplyScalar(j).floor(),I=Z;if(St.bindFramebuffer(D.FRAMEBUFFER,B)&&V&&St.drawBuffers(w,B),St.viewport(S),St.scissor(E),St.setScissorTest(I),ot){const Mt=Tt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,G)}else if(mt){const Mt=Tt.get(w.texture),Ct=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Ct)}R=-1},this.readRenderTargetPixels=function(w,O,G,V,B,ot,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){St.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Mt=w.texture,Ct=Mt.format,Rt=Mt.type;if(!Xt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&G>=0&&G<=w.height-B&&D.readPixels(O,G,V,B,It.convert(Ct),It.convert(Rt),ot)}finally{const Mt=b!==null?Tt.get(b).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,V,B,ot,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){St.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Mt=w.texture,Ct=Mt.format,Rt=Mt.type;if(!Xt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-V&&G>=0&&G<=w.height-B){const wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(O,G,V,B,It.convert(Ct),It.convert(Rt),0),D.flush();const Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await fp(D,Yt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot)}finally{D.deleteBuffer(wt),D.deleteSync(Yt)}return ot}}finally{const Mt=b!==null?Tt.get(b).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),B=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),mt=O!==null?O.x:0,yt=O!==null?O.y:0;Dt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,mt,yt,B,ot),St.unbindTexture()},this.copyTextureToTexture=function(w,O,G=null,V=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,G=null);let ot,mt,yt,Mt,Ct,Rt;G!==null?(ot=G.max.x-G.min.x,mt=G.max.y-G.min.y,yt=G.min.x,Mt=G.min.y):(ot=w.image.width,mt=w.image.height,yt=0,Mt=0),V!==null?(Ct=V.x,Rt=V.y):(Ct=0,Rt=0);const wt=It.convert(O.format),Yt=It.convert(O.type);Dt.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const he=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),je=D.getParameter(D.UNPACK_SKIP_PIXELS),$t=D.getParameter(D.UNPACK_SKIP_ROWS),Et=D.getParameter(D.UNPACK_SKIP_IMAGES),we=w.isCompressedTexture?w.mipmaps[B]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ct,Rt,ot,mt,wt,Yt,we.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ct,Rt,we.width,we.height,wt,we.data):D.texSubImage2D(D.TEXTURE_2D,B,Ct,Rt,ot,mt,wt,Yt,we),D.pixelStorei(D.UNPACK_ROW_LENGTH,he),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,V=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let ot,mt,yt,Mt,Ct,Rt,wt,Yt,he;const fe=w.isCompressedTexture?w.mipmaps[B]:w.image;G!==null?(ot=G.max.x-G.min.x,mt=G.max.y-G.min.y,yt=G.max.z-G.min.z,Mt=G.min.x,Ct=G.min.y,Rt=G.min.z):(ot=fe.width,mt=fe.height,yt=fe.depth,Mt=0,Ct=0,Rt=0),V!==null?(wt=V.x,Yt=V.y,he=V.z):(wt=0,Yt=0,he=0);const je=It.convert(O.format),$t=It.convert(O.type);let Et;if(O.isData3DTexture)Dt.setTexture3D(O,0),Et=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Dt.setTexture2DArray(O,0),Et=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const we=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),$i=D.getParameter(D.UNPACK_SKIP_ROWS),Ke=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Et,B,wt,Yt,he,ot,mt,yt,je,$t,fe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,B,wt,Yt,he,ot,mt,yt,je,fe.data):D.texSubImage3D(Et,B,wt,Yt,he,ot,mt,yt,je,$t,fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$i),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke),B===0&&O.generateMipmaps&&D.generateMipmap(Et),St.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&Dt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Dt.setTextureCube(w,0):w.isData3DTexture?Dt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Dt.setTexture2DArray(w,0):Dt.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,St.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Fa?"display-p3":"srgb"}}class ic{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kd extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Jl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new F;class va{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class as extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hr;const Wr=new F,fr=new F,pr=new F,mr=new Ut,Xr=new Ut,Zd=new re,$s=new F,qr=new F,js=new F,wu=new Ut,Eo=new Ut,Au=new Ut;class xa extends Ae{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sv(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new va(n,3,0,!1)),hr.setAttribute("uv",new va(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Zd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ks($s.set(-.5,-.5,0),pr,a,fr,i,s),Ks(qr.set(.5,-.5,0),pr,a,fr,i,s),Ks(js.set(.5,.5,0),pr,a,fr,i,s),wu.set(0,0),Eo.set(1,0),Au.set(1,1);let o=t.ray.intersectTriangle($s,qr,js,!1,Wr);if(o===null&&(Ks(qr.set(-.5,.5,0),pr,a,fr,i,s),Eo.set(0,1),o=t.ray.intersectTriangle($s,js,qr,!1,Wr),o===null))return;const c=t.ray.origin.distanceTo(Wr);c<t.near||c>t.far||e.push({distance:c,point:Wr.clone(),uv:vn.getInterpolation(Wr,$s,qr,js,wu,Eo,Au,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ks(r,t,e,n,i,s){mr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Xr.x=s*mr.x-i*mr.y,Xr.y=i*mr.x+s*mr.y):Xr.copy(mr),r.copy(t),r.x+=Xr.x,r.y+=Xr.y,r.applyMatrix4(Zd)}class Jd extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new F,Ma=new F,Cu=new re,Yr=new Ql,Zs=new xs,To=new F,Ru=new F;class Ev extends Ae{constructor(t=new Ie,e=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ya.fromBufferAttribute(e,i-1),Ma.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Ma);t.setAttribute("lineDistance",new yn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;Cu.copy(i).invert(),Yr.copy(t.ray).applyMatrix4(Cu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const _=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let d=_,m=g-1;d<m;d+=l){const f=u.getX(d),y=u.getX(d+1),x=Js(this,t,Yr,c,f,y);x&&e.push(x)}if(this.isLineLoop){const d=u.getX(g-1),m=u.getX(_),f=Js(this,t,Yr,c,d,m);f&&e.push(f)}}else{const _=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let d=_,m=g-1;d<m;d+=l){const f=Js(this,t,Yr,c,d,d+1);f&&e.push(f)}if(this.isLineLoop){const d=Js(this,t,Yr,c,g-1,_);d&&e.push(d)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Js(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Ma.fromBufferAttribute(a,s),e.distanceSqToSegment(ya,Ma,To,Ru)>n)return;To.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(To);if(!(c<t.near||c>t.far))return{distance:c,point:Ru.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Sa extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pu=new re,Ml=new Ql,Qs=new xs,ta=new F;class Ea extends Ae{constructor(t=new Ie,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,t.ray.intersectsSphere(Qs)===!1)return;Pu.copy(i).invert(),Ml.copy(t.ray).applyMatrix4(Pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let g=p,d=_;g<d;g++){const m=l.getX(g);ta.fromBufferAttribute(h,m),Lu(ta,m,c,i,t,e,this)}}else{const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,d=_;g<d;g++)ta.fromBufferAttribute(h,g),Lu(ta,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lu(r,t,e,n,i,s,a){const o=Ml.distanceSqToPoint(r);if(o<e){const c=new F;Ml.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class zr extends Fe{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends Ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new F,p=new F,_=[],g=[],d=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const C=A/e;h.x=-t*Math.cos(i+C*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+C*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),d.push(p.x,p.y,p.z),m.push(C+v,1-x),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=u[f][y+1],v=u[f][y],A=u[f+1][y],C=u[f+1][y+1];(f!==0||a>0)&&_.push(x,v,C),(f!==n-1||c<Math.PI)&&_.push(v,A,C)}this.setIndex(_),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(d,3)),this.setAttribute("uv",new yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Du extends Jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tv extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qd extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const bo=new re,Iu=new F,Uu=new F;class bv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new re,$r=new F,wo=new F;class wv extends bv{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),n.position.copy($r),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),i.makeTranslation(-$r.x,-$r.y,-$r.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class Av extends Qd{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cv extends Qd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ou(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);class Rv{constructor(t){this.container=t,this.scene=new Kd,this.camera=new ke(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=50,this.renderer=new jd({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.particles=this.createParticles(),this.scene.add(this.particles),this.clock=new rc,this.resizeHandler=this.onResize.bind(this),window.addEventListener("resize",this.resizeHandler)}createParticles(){const t=window.innerWidth<768?800:2500,e=new Ie,n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<t;o++)n[o*3]=(Math.random()-.5)*120,n[o*3+1]=(Math.random()-.5)*80,n[o*3+2]=(Math.random()-.5)*40,i[o]=Math.random()*1.5+.5,s[o]=Math.random();e.setAttribute("position",new Ee(n,3)),e.setAttribute("size",new Ee(i,1)),e.setAttribute("opacity",new Ee(s,1));const a=new In({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new Pt(16117990)}},vertexShader:`
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
      `});return new Ea(e,a)}animate(){this.particles.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.renderer.render(this.scene,this.camera)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}destroy(){window.removeEventListener("resize",this.resizeHandler),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class Pv{constructor(t,e={}){this.scene=t,this.count=e.count||6,this.planes=[],this.createClouds()}createClouds(){const t=new Ms(120,40,32,16),e=new In({transparent:!0,side:An,depthWrite:!1,uniforms:{uColor:{value:new Pt(5995126)},uOpacity:{value:.08}},vertexShader:`
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
      `});for(let n=0;n<this.count;n++){const i=new Ge(t,e.clone());i.position.set((Math.random()-.5)*40,(Math.random()-.5)*30-10,-20-n*8),i.rotation.x=-Math.PI/6,i.material.uniforms.uOpacity.value=.04+Math.random()*.06,this.scene.add(i),this.planes.push({mesh:i,speed:.2+Math.random()*.4})}}update(t,e){this.planes.forEach((n,i)=>{n.mesh.position.x+=Math.sin(t*.1+i)*.01,n.mesh.position.y=n.mesh.position.y+e*n.speed*.05})}}class Lv{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.resize(),this.particles=[],this.mouse={x:-1e3,y:-1e3},this.lastMouse={x:-1e3,y:-1e3},this.isActive=!0,this.onMove=e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY},window.addEventListener("mousemove",this.onMove),window.addEventListener("resize",()=>this.resize()),this.animate()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}spawnParticle(t,e){this.particles.push({x:t,y:e,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5-.3,life:1,size:Math.random()*3+1})}animate(){if(!this.isActive)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.mouse.x-this.lastMouse.x,e=this.mouse.y-this.lastMouse.y,n=Math.sqrt(t*t+e*e);if(n>5){const i=Math.min(n/5,5);for(let s=0;s<i;s++){const a=s/i;this.spawnParticle(this.lastMouse.x+t*a+(Math.random()-.5)*8,this.lastMouse.y+e*a+(Math.random()-.5)*8)}this.lastMouse.x=this.mouse.x,this.lastMouse.y=this.mouse.y}this.particles=this.particles.filter(i=>{if(i.x+=i.vx,i.y+=i.vy,i.life-=.015,i.size*=.98,i.life<=0)return!1;this.ctx.beginPath();const s=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);return s.addColorStop(0,`rgba(91, 122, 118, ${i.life*.4})`),s.addColorStop(1,"rgba(91, 122, 118, 0)"),this.ctx.fillStyle=s,this.ctx.arc(i.x,i.y,i.size,0,Math.PI*2),this.ctx.fill(),!0}),requestAnimationFrame(()=>this.animate())}destroy(){this.isActive=!1,window.removeEventListener("mousemove",this.onMove)}}const Dv="https://api.yppp.net/pc.php",Iv="https://api.yppp.net/pe.php";function Uv(r){if(!r)return;const e=`${/Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent)?Iv:Dv}?_=${Date.now()}`,n=new Image;n.src=e,n.onload=()=>{r.style.backgroundImage=`url(${e})`,r.classList.add("loaded")},n.onerror=()=>{console.warn("Background image load failed:",e),r.classList.add("fallback")}}function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function th(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},sc,Ce,oe,dn=1e8,ee=1/dn,Sl=Math.PI*2,Nv=Sl/4,Ov=0,eh=Math.sqrt,Fv=Math.cos,Bv=Math.sin,Te=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},Kn=function(t){return typeof t=="number"},ac=function(t){return typeof t>"u"},Un=function(t){return typeof t=="object"},We=function(t){return t!==!1},oc=function(){return typeof window<"u"},ea=function(t){return pe(t)||Te(t)},nh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,zv=/random\([^)]+\)/g,kv=/,\s*/g,Fu=/(?:-?\.?\d|\.)+/gi,ih=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ao=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rh=/[+-]=-?[.\d]+/,Hv=/[^,'"\[\]\s]+/gi,Gv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Tn,El,lc,sn={},Ta={},sh,ah=function(t){return(Ta=Dr(t,sn))&&$e},cc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ls=function(t,e){return!e&&console.warn(t)},oh=function(t,e){return t&&(sn[t]=e)&&Ta&&(Ta[t]=e)||sn},cs=function(){return 0},Vv={suppressEvents:!0,isStart:!0,kill:!1},la={suppressEvents:!0,kill:!1},Wv={suppressEvents:!0},uc={},fi=[],Tl={},lh,Qe={},Co={},Bu=30,ca=[],dc="",hc=function(t){var e=t[0],n,i;if(Un(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ca.length;i--&&!ca[i].targetTest(e););n=ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ph(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||hc(hn(t))[0]._gsap},ch=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():ac(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Xv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ba=function(){var t=fi.length,e=fi.slice(0),n,i;for(Tl={},fi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fc=function(t){return!!(t._initted||t._startAt||t.add)},uh=function(t,e,n,i){fi.length&&!Ce&&ba(),t.render(e,n,!!(Ce&&e<0&&fc(t))),fi.length&&!Ce&&ba()},dh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Hv).length<2?e:Te(t)?t.trim():t},hh=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},qv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Dr=function(t,e){for(var n in e)t[n]=e[n];return t},zu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Un(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ts=function(t){var e=t.parent||ue,n=t.keyframes?qv(De(t.keyframes)):an;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Yv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},fh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},za=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},gi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Gi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},$v=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bl=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(la):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},jv=function r(t){return!t||t._ts&&r(t.parent)},ku=function(t){return t._repeat?Ir(t._tTime,t=t.duration()+t._rDelay)*t:0},Ir=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},Aa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ka=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},Ha=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ka(t),n._dirty||Gi(n,t)),t},ph=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Aa(t.rawTime(),e),(!e._dur||Ss(0,e.totalDuration(),n)-e._tTime>ee)&&e.render(n,!0)),Gi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ee}},Pn=function(t,e,n,i){return e.parent&&gi(e),e._start=ce((Kn(n)?n:n||t!==ue?cn(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),fh(t,e,"_first","_last",t._sort?"_start":0),wl(e)||(t._recent=e),i||ph(t,e),t._ts<0&&Ha(t,t._tTime),t},mh=function(t,e){return(sn.ScrollTrigger||cc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},_h=function(t,e,n,i,s){if(mc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&lh!==tn.frame)return fi.push(t),t._lazy=[s,i],1},Kv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},wl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Kv(t)&&!(!t._initted&&wl(t))||(t._ts<0||t._dp._ts<0)&&!wl(t))?0:1,o=t._rDelay,c=0,l,u,h;if(o&&t._repeat&&(c=Ss(0,t._tDur,e),u=Ir(c,o),t._yoyo&&u&1&&(a=1-a),u!==Ir(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===ee||!e&&t._zTime){if(!t._initted&&_h(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?ee:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&bl(t,e,n,!0),t._onUpdate&&!n&&en(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&en(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&gi(t,1),!n&&!Ce&&(en(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Jv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ur=function(t,e,n,i){var s=t._repeat,a=ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ha(t,t._tTime=t._tDur*o),t.parent&&ka(t),n||Gi(t.parent,t),t},Hu=function(t){return t instanceof He?Gi(t):Ur(t,t._dur)},Qv={_start:0,endTime:cs,totalDuration:cs},cn=function r(t,e,n){var i=t.labels,s=t._recent||Qv,a=t.duration()>=dn?s.endTime(!1):t._dur,o,c,l;return Te(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(De(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},es=function(t,e,n){var i=Kn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=We(c.vars.inherit)&&c.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new xe(e[0],a,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},Ss=function(t,e,n){return n<t?t:n>e?e:n},Le=function(t,e){return!Te(t)||!(e=Gv.exec(t))?"":e[1]},tx=function(t,e,n){return Mi(n,function(i){return Ss(t,e,i)})},Al=[].slice,gh=function(t,e){return t&&Un(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Un(t[0]))&&!t.nodeType&&t!==Tn},ex=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Te(i)&&!e||gh(i,1)?(s=n).push.apply(s,hn(i)):n.push(i)})||n},hn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Te(t)&&!n&&(El||!Nr())?Al.call((e||lc).querySelectorAll(t),0):De(t)?ex(t,n):gh(t)?Al.call(t,0):t?[t]:[]},Cl=function(t){return t=hn(t)[0]||ls("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return hn(e,n.querySelectorAll?n:n===t?ls("Invalid scope")||lc.createElement("div"):t)}},vh=function(t){return t.sort(function(){return .5-Math.random()})},xh=function(t){if(pe(t))return t;var e=Un(t)?t:{each:t},n=Vi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,u=i,h=i;return Te(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(p,_,g){var d=(g||e).length,m=a[d],f,y,x,v,A,C,b,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,dn])[1],!M){for(b=-dn;b<(b=g[M++].getBoundingClientRect().left)&&M<d;);M<d&&M--}for(m=a[d]=[],f=c?Math.min(M,d)*u-.5:i%M,y=M===dn?0:c?d*h/M-.5:i/M|0,b=0,R=dn,C=0;C<d;C++)x=C%M-f,v=y-(C/M|0),m[C]=A=l?Math.abs(l==="y"?v:x):eh(x*x+v*v),A>b&&(b=A),A<R&&(R=A);i==="random"&&vh(m),m.max=b-R,m.min=R,m.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(M>d?d-1:l?l==="y"?d/M:M:Math.max(M,d/M))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Le(e.amount||e.each)||0,n=n&&d<0?px(n):n}return d=(m[p]-m.min)/m.max||0,ce(m.b+(n?n(d):d)*m.v)+m.u}},Rl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Kn(n)?0:Le(n))}},yh=function(t,e){var n=De(t),i,s;return!n&&Un(t)&&(i=n=t.radius||dn,t.values?(t=hn(t.values),(s=!Kn(t[0]))&&(i*=i)):t=Rl(t.increment)),Mi(e,n?pe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=dn,u=0,h=t.length,p,_;h--;)s?(p=t[h].x-o,_=t[h].y-c,p=p*p+_*_):p=Math.abs(t[h]-o),p<l&&(l=p,u=h);return u=!i||l<=i?t[u]:a,s||u===a||Kn(a)?u:u+Le(a)}:Rl(t))},Mh=function(t,e,n,i){return Mi(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},nx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},ix=function(t,e){return function(n){return t(parseFloat(n))+(e||Le(n))}},rx=function(t,e,n){return Eh(t,e,0,1,n)},Sh=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},sx=function r(t,e,n){var i=e-t;return De(t)?Sh(t,r(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},ax=function r(t,e,n){var i=e-t,s=i*2;return De(t)?Sh(t,r(0,t.length-1),e):Mi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},us=function(t){return t.replace(zv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(kv);return Mh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Eh=function(t,e,n,i,s){var a=e-t,o=i-n;return Mi(s,function(c){return n+((c-t)/a*o||0)})},ox=function r(t,e,n,i){var s=isNaN(t+e)?0:function(_){return(1-_)*t+_*e};if(!s){var a=Te(t),o={},c,l,u,h,p;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(u=[],h=t.length,p=h-2,l=1;l<h;l++)u.push(r(t[l-1],t[l]));h--,s=function(g){g*=h;var d=Math.min(p,~~g);return u[d](g-d)},n=e}else i||(t=Dr(De(t)?[]:{},t));if(!u){for(c in e)pc.call(o,t,c,"get",e[c]);s=function(g){return vc(g,o)||(a?t.p:t)}}}return Mi(n,s)},Gu=function(t,e,n){var i=t.labels,s=dn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},en=function(t,e,n){var i=t.vars,s=i[e],a=oe,o=t._ctx,c,l,u;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&fi.length&&ba(),o&&(oe=o),u=c?s.apply(l,c):s.call(l),oe=a,u},Zr=function(t){return gi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&en(t,"onInterrupt"),t},yr,Th=[],bh=function(t){if(t)if(t=!t.name&&t.default||t,oc()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:cs,render:vc,add:pc,kill:Tx,modifier:Ex,rawVars:0},a={targetTest:0,get:0,getSetter:gc,aliases:{},register:0};if(Nr(),t!==i){if(Qe[e])return;an(i,an(wa(t,s),a)),Dr(i.prototype,Dr(s,wa(t,a))),Qe[i.prop=e]=i,t.targetTest&&(ca.push(i),uc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}oh(e,i),t.register&&t.register($e,i,qe)}else Th.push(t)},te=255,Jr={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},Ro=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*te+.5|0},wh=function(t,e,n){var i=t?Kn(t)?[t>>16,t>>8&te,t&te]:0:Jr.black,s,a,o,c,l,u,h,p,_,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jr[t])i=Jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&te,i&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Fu),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ro(c+1/3,s,a),i[1]=Ro(c,s,a),i[2]=Ro(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ih),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fu)||Jr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/te,a=i[1]/te,o=i[2]/te,h=Math.max(s,a,o),p=Math.min(s,a,o),u=(h+p)/2,h===p?c=l=0:(_=h-p,l=u>.5?_/(2-h-p):_/(h+p),c=h===s?(a-o)/_+(a<o?6:0):h===a?(o-s)/_+2:(s-a)/_+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ah=function(t){var e=[],n=[],i=-1;return t.split(pi).forEach(function(s){var a=s.match(xr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Vu=function(t,e,n){var i="",s=(t+i).match(pi),a=e?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return t;if(s=s.map(function(p){return(p=wh(p,e,1))&&a+(e?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(u=Ah(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(pi,"1").split(xr),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=t.split(pi),h=l.length-1;o<h;o++)i+=l[o]+s[o];return i+l[h]},pi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),lx=/hsl[a]?\(/,Ch=function(t){var e=t.join(" "),n;if(pi.lastIndex=0,pi.test(e))return n=lx.test(e),t[1]=Vu(t[1],n),t[0]=Vu(t[0],n,Ah(t[1])),!0},ds,tn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,h,p,_,g=function d(m){var f=r()-i,y=m===!0,x,v,A,C;if((f>t||f<0)&&(n+=f-e),i+=f,A=i-n,x=A-a,(x>0||y)&&(C=++h.frame,p=A-h.time*1e3,h.time=A=A/1e3,a+=x+(x>=s?4:s-x),v=1),y||(c=l(d)),v)for(_=0;_<o.length;_++)o[_](A,p,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){sh&&(!El&&oc()&&(Tn=El=window,lc=Tn.document||{},sn.gsap=$e,(Tn.gsapVersions||(Tn.gsapVersions=[])).push($e.version),ah(Ta||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),Th.forEach(bh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ds=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),ds=0,l=cs},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,f,y){var x=f?function(v,A,C,b){m(v,A,C,b),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),Nr(),x},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&_>=f&&_--},_listeners:o},h}(),Nr=function(){return!ds&&tn.wake()},Ht={},cx=/^[\d.\-M][\d.\-,\s]/,ux=/["']/g,dx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(ux,"").trim():+l,i=c.substr(o+1).trim();return e},hx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},fx=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[dx(e[1])]:hx(t).split(",").map(dh)):Ht._CE&&cx.test(t)?Ht._CE("",t):n},px=function(t){return function(e){return 1-t(1-e)}},Vi=function(t,e){return t&&(pe(t)?t:Ht[t]||fx(t))||e},Yi=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Ht[o]=sn[o]=s,Ht[a=o.toLowerCase()]=n;for(var c in s)Ht[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ht[o+"."+c]=s[c]}),s},Rh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Po=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Sl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Bv((u-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:Rh(o);return s=Sl/s,c.config=function(l,u){return r(t,l,u)},c},Lo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Rh(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;Yi("Elastic",Po("in"),Po("out"),Po());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Yi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yi("Circ",function(r){return-(eh(1-r*r)-1)});Yi("Sine",function(r){return r===1?1:-Fv(r*Nv)+1});Yi("Back",Lo("in"),Lo("out"),Lo());Ht.SteppedEase=Ht.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ee;return function(o){return((i*Ss(0,a,o)|0)+s)*n}}};os.ease=Ht["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dc+=r+","+r+"Params,"});var Ph=function(t,e){this.id=Ov++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ch,this.set=e?e.getSetter:gc},hs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ur(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),ds||tn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Nr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ha(this,n),!s._dp||s.parent||ph(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),uh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ku(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ku(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ir(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Aa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ee?0:this._rts,this.totalTime(Ss(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ka(this),$v(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Aa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Wv);var i=Ce;return Ce=n,fc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pe(n)?n:hh,c=function(){var u=i.then;i.then=null,s&&s(),pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Zr(this)},r}();an(hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var He=function(r){th(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=We(n.sortChildren),ue&&Pn(n.parent||ue,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&mh(Gn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return es(0,arguments,this),this},e.from=function(i,s,a){return es(1,arguments,this),this},e.fromTo=function(i,s,a,o){return es(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ts(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,cn(this,a),1),this},e.call=function(i,s,a){return Pn(this,xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new xe(i,a,cn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,ts(a).immediateRender=We(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},e.staggerFromTo=function(i,s,a,o,c,l,u,h){return o.startAt=a,ts(o).immediateRender=We(o.immediateRender),this.staggerTo(i,s,o,c,l,u,h)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ce(i),h=this._zTime<0!=i<0&&(this._initted||!l),p,_,g,d,m,f,y,x,v,A,C,b;if(this!==ue&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),p=u,v=this._start,x=this._ts,f=!x,h&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(p=ce(u%m),u===c?(d=this._repeat,p=l):(A=ce(u/m),d=~~A,d&&d===A&&(p=l,d--),p>l&&(p=l)),A=Ir(this._tTime,m),!o&&this._tTime&&A!==d&&this._tTime-A*m-this._dur<=0&&(A=d),C&&d&1&&(p=l-p,b=1),d!==A&&!this._lock){var R=C&&A&1,M=R===(C&&d&1);if(d<A&&(R=!R),o=R?0:u%l?l:u,this._lock=1,this.render(o||(b?0:ce(d*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=d),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Jv(this,ce(o),ce(p)),y&&(u-=p-(p=y._start))),this._tTime=u,this._time=p,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!A&&(en(this,"onStart"),this._tTime!==u))return this;if(p>=o&&i>=0)for(_=this._first;_;){if(g=_._next,(_._act||p>=_._start)&&_._ts&&y!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(p-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(p-_._start)*_._ts,s,a),p!==this._time||!this._ts&&!f){y=0,g&&(u+=this._zTime=-ee);break}}_=g}else{_=this._last;for(var S=i<0?i:p;_;){if(g=_._prev,(_._act||S<=_._end)&&_._ts&&y!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(S-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(S-_._start)*_._ts,s,a||Ce&&fc(_)),p!==this._time||!this._ts&&!f){y=0,g&&(u+=this._zTime=S?-ee:ee);break}}_=g}}if(y&&!s&&(this.pause(),y.render(p>=o?0:-ee)._zTime=p>=o?1:-1,this._ts))return this._start=v,ka(this),this.render(i,s,a);this._onUpdate&&!s&&en(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(en(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Kn(s)||(s=cn(this,s,i)),!(i instanceof hs)){if(De(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Te(i))return this.addLabel(i,s);if(pe(i))i=xe.delayedCall(0,i);else return this}return this!==i?Pn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof xe?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Te(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&za(this,i),i===this._recent&&(this._recent=this._last),Gi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=xe.delayedCall(0,s||cs,a);return o.data="isPause",this._hasPause=1,Pn(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&gi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)oi!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=hn(i),c=this._first,l=Kn(s),u;c;)c instanceof xe?Xv(c._targets,o)&&(l?(!oi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,p=c.immediateRender,_,g=xe.to(a,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ee,onStart:function(){if(a.pause(),!_){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Ur(g,m,0,1).render(g._time,!0,!0),_=1}u&&u.apply(g,h||[])}},s));return p?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,an({startAt:{time:cn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gu(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gu(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Gi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=dn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ce(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Ur(a,a===ue&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ue._ts&&(uh(ue,Aa(i,ue)),lh=tn.frame),tn.frame>=Bu){Bu+=rn.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&rn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},t}(hs);an(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var mx=function(t,e,n,i,s,a,o){var c=new qe(this._pt,t,e,0,1,Oh,null,s),l=0,u=0,h,p,_,g,d,m,f,y;for(c.b=n,c.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=us(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),p=n.match(Ao)||[];h=Ao.exec(i);)g=h[0],d=i.substring(l,h.index),_?_=(_+1)%5:d.substr(-5)==="rgba("&&(_=1),g!==p[u++]&&(m=parseFloat(p[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Tr(m,g)-m:parseFloat(g)-m,m:_&&_<4?Math.round:0},l=Ao.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(rh.test(i)||f)&&(c.e=0),this._pt=c,c},pc=function(t,e,n,i,s,a,o,c,l,u){pe(i)&&(i=i(s||0,t,a));var h=t[e],p=n!=="get"?n:pe(h)?l?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,_=pe(h)?l?yx:Uh:_c,g;if(Te(i)&&(~i.indexOf("random(")&&(i=us(i)),i.charAt(1)==="="&&(g=Tr(p,i)+(Le(p)||0),(g||g===0)&&(i=g))),!u||p!==i||Pl)return!isNaN(p*i)&&i!==""?(g=new qe(this._pt,t,e,+p||0,i-(p||0),typeof h=="boolean"?Sx:Nh,0,_),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&cc(e,i),mx.call(this,t,e,p,i,_,c||rn.stringFilter,l))},_x=function(t,e,n,i,s){if(pe(t)&&(t=ns(t,s,e,n,i)),!Un(t)||t.style&&t.nodeType||De(t)||nh(t))return Te(t)?ns(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ns(t[o],s,e,n,i);return a},Lh=function(t,e,n,i,s,a){var o,c,l,u;if(Qe[t]&&(o=new Qe[t]).init(s,o.rawVars?e[t]:_x(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==yr))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},oi,Pl,mc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,p=i.keyframes,_=i.autoRevert,g=t._dur,d=t._startAt,m=t._targets,f=t.parent,y=f&&f.data==="nested"?f.vars.targets:m,x=t._overwrite==="auto"&&!sc,v=t.timeline,A=i.easeReverse||h,C,b,R,M,S,E,I,N,$,X,W,j,q;if(v&&(!p||!s)&&(s="none"),t._ease=Vi(s,os.ease),t._rEase=A&&(Vi(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||p&&!i.stagger){if(N=m[0]?Hi(m[0]).harness:0,j=N&&i[N.prop],C=wa(i,uc),d&&(d._zTime<0&&d.progress(1),e<0&&u&&o&&!_?d.render(-1,!0):d.revert(u&&g?la:Vv),d._lazy=0),a){if(gi(t._startAt=xe.set(m,an({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!d&&We(c),startAt:null,delay:0,onUpdate:l&&function(){return en(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!_)&&t._startAt.revert(la),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!d){if(e&&(o=!1),R=an({overwrite:!1,data:"isFromStart",lazy:o&&!d&&We(c),immediateRender:o,stagger:0,parent:f},C),j&&(R[N.prop]=j),gi(t._startAt=xe.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(la):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ee,ee);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&We(c)||c&&!g,b=0;b<m.length;b++){if(S=m[b],I=S._gsap||hc(m)[b]._gsap,t._ptLookup[b]=X={},Tl[I.id]&&fi.length&&ba(),W=y===m?b:y.indexOf(S),N&&($=new N).init(S,j||C,t,W,y)!==!1&&(t._pt=M=new qe(t._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(ut){X[ut]=M}),$.priority&&(E=1)),!N||j)for(R in C)Qe[R]&&($=Lh(R,C,t,W,S,y))?$.priority&&(E=1):X[R]=M=pc.call(t,S,R,"get",C[R],W,y,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),x&&t._pt&&(oi=t,ue.killTweensOf(S,X,t.globalTime(e)),q=!t.parent,oi=0),t._pt&&c&&(Tl[I.id]=1)}E&&Fh(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!q,p&&e<=0&&v.render(dn,!0,!0)},gx=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,p,_;if(!l)for(l=t._ptCache[e]=[],p=t._ptLookup,_=t._targets.length;_--;){if(u=p[_][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Pl=1,t.vars[e]="+=0",mc(t,o),Pl=0,c?ls(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(_=l.length;_--;)h=l[_],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=me(n)+Le(h.e)),h.b&&(h.b=u.s+Le(h.b))},vx=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Dr({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},xx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ns=function(t,e,n,i,s){return pe(t)?t.call(e,n,i,s):Te(t)&&~t.indexOf("random(")?us(t):t},Dh=dc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ih={};Xe(Dh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ih[r]=1});var xe=function(r){th(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ts(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,p=c.stagger,_=c.overwrite,g=c.keyframes,d=c.defaults,m=c.scrollTrigger,f=i.parent||ue,y=(De(n)||nh(n)?Kn(n[0]):"length"in i)?[n]:hn(n),x,v,A,C,b,R,M,S;if(o._targets=y.length?hc(y):ls("GSAP target "+n+" not found. https://gsap.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=_,g||p||ea(l)||ea(u)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(x=o.timeline=new He({data:"nested",defaults:d||{},targets:f&&f.data==="nested"?f.vars.targets:y}),x.kill(),x.parent=x._dp=Gn(o),x._start=0,p||ea(l)||ea(u)){if(C=y.length,M=p&&xh(p),Un(p))for(b in p)~Dh.indexOf(b)&&(S||(S={}),S[b]=p[b]);for(v=0;v<C;v++)A=wa(i,Ih),A.stagger=0,E&&(A.easeReverse=E),S&&Dr(A,S),R=y[v],A.duration=+ns(l,Gn(o),v,R,y),A.delay=(+ns(u,Gn(o),v,R,y)||0)-o._delay,!p&&C===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(R,A,M?M(v,R,y):0),x._ease=Ht.none;x.duration()?l=u=0:o.timeline=0}else if(g){ts(an(x.vars.defaults,{ease:"none"})),x._ease=Vi(g.ease||i.ease||"none");var I=0,N,$,X;if(De(g))g.forEach(function(W){return x.to(y,W,">")}),x.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||xx(b,g[b],A,g.easeEach);for(b in A)for(N=A[b].sort(function(W,j){return W.t-j.t}),I=0,v=0;v<N.length;v++)$=N[v],X={ease:$.e,duration:($.t-(v?N[v-1].t:0))/100*l},X[b]=$.v,x.to(y,X,I),I+=X.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||o.duration(l=x.duration())}else o.timeline=0;return _===!0&&!sc&&(oi=Gn(o),ue.killTweensOf(y),oi=0),Pn(f,Gn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===ce(f._time)&&We(h)&&jv(Gn(o))&&f.data!=="nested")&&(o._tTime=-ee,o.render(Math.max(0,-u)||0)),m&&mh(Gn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ee&&!u?c:i<ee?0:i,p,_,g,d,m,f,y,x;if(!l)Zv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=h,x=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,a);if(p=ce(h%d),h===c?(g=this._repeat,p=l):(m=ce(h/d),g=~~m,g&&g===m?(p=l,g--):p>l&&(p=l)),f=this._yoyo&&g&1,f&&(p=l-p),m=Ir(this._tTime,d),p===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&p!==d&&this._initted&&(this._lock=a=1,this.render(ce(d*g),!0).invalidate()._lock=0)}if(!this._initted){if(_h(this,u?i:p,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=p<o;if(v!==this._inv){var A=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((p-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(p/l);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(en(this,"onStart"),this._tTime!==h))return this;for(_=this._pt;_;)_.r(y,_.d),_=_._next;x&&x.render(i<0?i:x._dur*x._ease(p/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bl(this,i,s,a),en(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bl(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&gi(this,1),!s&&!(u&&!o)&&(h||o||f)&&(en(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){ds||tn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mc(this,l),u=this._ease(l/this._dur),gx(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(Ha(this,0),this.parent||fh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,oi&&oi.vars.overwrite!==!0)._first||Zr(this),this.parent&&a!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?hn(i):o,l=this._ptLookup,u=this._pt,h,p,_,g,d,m,f;if((!s||s==="all")&&Yv(o,c))return s==="all"&&(this._pt=0),Zr(this);for(h=this._op=this._op||[],s!=="all"&&(Te(s)&&(d={},Xe(s,function(y){return d[y]=1}),s=d),s=vx(o,s)),f=o.length;f--;)if(~c.indexOf(o[f])){p=l[f],s==="all"?(h[f]=s,g=p,_={}):(_=h[f]=h[f]||{},g=s);for(d in g)m=p&&p[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&za(this,m,"_pt"),delete p[d]),_!=="all"&&(_[d]=1)}return this._initted&&!this._pt&&u&&Zr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return es(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return es(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ue.killTweensOf(i,s,a)},t}(hs);an(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){xe[r]=function(){var t=new He,e=Al.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var _c=function(t,e,n){return t[e]=n},Uh=function(t,e,n){return t[e](n)},yx=function(t,e,n,i){return t[e](i.fp,n)},Mx=function(t,e,n){return t.setAttribute(e,n)},gc=function(t,e){return pe(t[e])?Uh:ac(t[e])&&t.setAttribute?Mx:_c},Nh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Oh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},vc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ex=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Tx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?za(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=function(){function r(e,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Nh,this.d=c||this,this.set=l||_c,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bx,this.m=n,this.mt=s,this.tween=i},r}();Xe(dc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return uc[r]=1});sn.TweenMax=sn.TweenLite=xe;sn.TimelineLite=sn.TimelineMax=He;ue=new He({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Ch;var Wi=[],ua={},wx=[],Wu=0,Ax=0,Do=function(t){return(ua[t]||wx).map(function(e){return e()})},Ll=function(){var t=Date.now(),e=[];t-Wu>2&&(Do("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Tn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Do("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wu=t,Do("matchMedia"))},Bh=function(){function r(e,n){this.selector=n&&Cl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ax++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var a=this,o=function(){var l=oe,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=Cl(s)),oe=a,h=i.apply(a,arguments),pe(h)&&a._r.push(h),oe=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===pe?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof He?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof xe)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wi.length;a--;)Wi[a].id===this.id&&Wi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Cx=function(){function r(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Un(n)||(n={matches:n});var a=new Bh(0,s||this.scope),o=a.conditions={},c,l,u;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Tn.matchMedia(n[l]),c&&(Wi.indexOf(a)<0&&Wi.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Ll):c.addEventListener("change",Ll)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ca={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bh(i)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){Te(t)&&(t=hn(t)[0]);var s=Hi(t||{}).get,a=n?hh:dh;return n==="native"&&(n=""),t&&(e?a((Qe[e]&&Qe[e].get||s)(t,e,n,i)):function(o,c,l){return a((Qe[o]&&Qe[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=hn(t),t.length>1){var i=t.map(function(u){return $e.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Qe[e],o=Hi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(u){var h=new a;yr._pt=0,h.init(t,n?u+n:u,yr,0,[t]),h.render(1,h),yr._pt&&vc(1,yr)}:o.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=$e.to(t,an((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(e,c,l,u)};return a.tween=s,a},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,os.ease)),zu(os,t||{})},config:function(t){return zu(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qe[o]&&!sn[o]&&ls(e+" effect requires "+o+" plugin.")}),Co[e]=function(o,c,l){return n(hn(o),an(c||{},s),l)},a&&(He.prototype[e]=function(o,c,l){return this.add(Co[e](o,Un(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ht[t]=Vi(e)},parseEase:function(t,e){return arguments.length?Vi(t,e):Ht},getById:function(t){return ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new He(t),i,s;for(n.smoothChildTiming=We(t.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,i=ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&Pn(n,i,i._start-i._delay),i=s;return Pn(ue,n,0),n},context:function(t,e){return t?new Bh(t,e):oe},matchMedia:function(t){return new Cx(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ll()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:sx,wrapYoyo:ax,distribute:xh,random:Mh,snap:yh,normalize:rx,getUnit:Le,clamp:tx,splitColor:wh,toArray:hn,selector:Cl,mapRange:Eh,pipe:nx,unitize:ix,interpolate:ox,shuffle:vh},install:ah,effects:Co,ticker:tn,updateRoot:He.updateRoot,plugins:Qe,globalTimeline:ue,core:{PropTween:qe,globals:oh,Tween:xe,Timeline:He,Animation:hs,getCache:Hi,_removeLinkedListItem:za,reverting:function(){return Ce},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return sc=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ca[r]=xe[r]});tn.add(He.updateRoot);yr=Ca.to({},{duration:0});var Rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Px=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Rx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Io=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Te(s)&&(c={},Xe(s,function(u){return c[u]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}Px(o,s)}}}},$e=Ca.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Io("roundProps",Rl),Io("modifiers"),Io("snap",yh))||Ca;xe.version=He.version=$e.version="3.15.0";sh=1;oc()&&Nr();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xu,li,br,xc,ki,qu,yc,Lx=function(){return typeof window<"u"},Zn={},Ui=180/Math.PI,wr=Math.PI/180,_r=Math.atan2,Yu=1e8,Mc=/([A-Z])/g,Dx=/(left|right|width|margin|padding|x)/i,Ix=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ux=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ox=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Fx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},kh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Bx=function(t,e,n){return t.style[e]=n},zx=function(t,e,n){return t.style.setProperty(e,n)},kx=function(t,e,n){return t._gsap[e]=n},Hx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Gx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Vx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},de="transform",Ye=de+"Origin",Wx=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Zn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Vn(i,o)}):this.tfm[t]=a.x?a[t]:Vn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Ln.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(de)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=de}(s||e)&&this.props.push(t,e,s[t])},Hh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Xx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Mc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=yc(),(!s||!s.isStart)&&!n[de]&&(Hh(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gh=function(t,e){var n={target:t,props:[],revert:Xx,save:Wx};return t._gsap||$e.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Vh,Il=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n&&n.style?n:li.createElement(t)},nn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Mc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Or(e)||e,1)||""},$u="O,Moz,ms,Ms,Webkit".split(","),Or=function(t,e,n){var i=e||ki,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!($u[a]+t in s););return a<0?null:(a===3?"ms":a>=0?$u[a]:"")+t},Ul=function(){Lx()&&window.document&&(Xu=window,li=Xu.document,br=li.documentElement,ki=Il("div")||{style:{}},Il("div"),de=Or(de),Ye=de+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vh=!!Or("perspective"),yc=$e.core.reverting,xc=1)},ju=function(t){var e=t.ownerSVGElement,n=Il("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),br.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),br.removeChild(n),s},Ku=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Wh=function(t){var e,n;try{e=t.getBBox()}catch{e=ju(t),n=1}return e&&(e.width||e.height)||n||(e=ju(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ku(t,["x","cx","x1"])||0,y:+Ku(t,["y","cy","y1"])||0,width:0,height:0}:e},Xh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Wh(t))},vi=function(t,e){if(e){var n=t.style,i;e in Zn&&e!==Ye&&(e=de),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Mc,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?kh:zh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Zu={deg:1,rad:1,turn:1},qx={grid:1,flex:1},xi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,c=Dx.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,p=i==="px",_=i==="%",g,d,m,f;if(i===a||!s||Zu[i]||Zu[a])return s;if(a!=="px"&&!p&&(s=r(t,e,n,"px")),f=t.getCTM&&Xh(t),(_||a==="%")&&(Zn[e]||~e.indexOf("adius")))return g=f?t.getBBox()[c?"width":"height"]:t[u],me(_?s/g*h:s/100*g);if(o[c?"width":"height"]=h+(p?a:i),d=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,f&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===li||!d.appendChild)&&(d=li.body),m=d._gsap,m&&_&&m.width&&c&&m.time===tn.time&&!m.uncache)return me(s/m.width*h);if(_&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,g=t[u],y?t.style[e]=y:vi(t,e)}else(_||a==="%")&&!qx[nn(d,"display")]&&(o.position=nn(t,"position")),d===t&&(o.position="static"),d.appendChild(ki),g=ki[u],d.removeChild(ki),o.position="absolute";return c&&_&&(m=Hi(d),m.time=tn.time,m.width=d[u]),me(p?g*s/h:g&&s?h/g*s:0)},Vn=function(t,e,n,i){var s;return xc||Ul(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),Zn[e]&&e!=="transform"?(s=ps(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Pa(nn(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ra[e]&&Ra[e](t,e,n)||nn(t,e)||ch(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xi(t,e,s,n)+n:s},Yx=function(t,e,n,i){if(!n||n==="none"){var s=Or(e,t,1),a=s&&nn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=nn(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,Oh),c=0,l=0,u,h,p,_,g,d,m,f,y,x,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=nn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(d=t.style[e],t.style[e]=i,i=nn(t,e)||i,d?t.style[e]=d:vi(t,e)),u=[n,i],Ch(u),n=u[0],i=u[1],p=n.match(xr)||[],A=i.match(xr)||[],A.length){for(;h=xr.exec(i);)m=h[0],y=i.substring(c,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(d=p[l++]||"")&&(_=parseFloat(d)||0,v=d.substr((_+"").length),m.charAt(1)==="="&&(m=Tr(_,m)+v),f=parseFloat(m),x=m.substr((f+"").length),c=xr.lastIndex-x.length,x||(x=x||rn.units[e]||v,c===i.length&&(i+=x,o.e+=x)),v!==x&&(_=xi(t,e,d,x)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:_,c:f-_,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?kh:zh;return rh.test(i)&&(o.e=0),this._pt=o,o},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$x=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ju[n]||n,e[1]=Ju[i]||i,e.join(" ")},jx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Zn[o]&&(c=1,o=o==="transformOrigin"?Ye:de),vi(n,o);c&&(vi(n,de),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ps(n,1),a.uncache=1,Hh(i)))}},Ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,jx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},fs=[1,0,0,1,0,0],qh={},Yh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qu=function(t){var e=nn(t,de);return Yh(e)?fs:e.substr(7).match(ih).map(me)},Sc=function(t,e){var n=t._gsap||Hi(t),i=t.style,s=Qu(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?fs:s):(s===fs&&!t.offsetParent&&t!==br&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,br.appendChild(t)),s=Qu(t),c?i.display=c:vi(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):br.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nl=function(t,e,n,i,s,a){var o=t._gsap,c=s||Sc(t,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,p=o.yOffset||0,_=c[0],g=c[1],d=c[2],m=c[3],f=c[4],y=c[5],x=e.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,b,R,M;n?c!==fs&&(b=_*m-g*d)&&(R=v*(m/b)+A*(-d/b)+(d*y-m*f)/b,M=v*(-g/b)+A*(_/b)-(_*y-g*f)/b,v=R,A=M):(C=Wh(t),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&o.smooth?(f=v-l,y=A-u,o.xOffset=h+(f*_+y*d)-f,o.yOffset=p+(f*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(ci(a,o,"xOrigin",l,v),ci(a,o,"yOrigin",u,A),ci(a,o,"xOffset",h,o.xOffset),ci(a,o,"yOffset",p,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ps=function(t,e){var n=t._gsap||new Ph(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=nn(t,Ye)||"0",u,h,p,_,g,d,m,f,y,x,v,A,C,b,R,M,S,E,I,N,$,X,W,j,q,ut,k,tt,Z,rt,z,K;return u=h=p=d=m=f=y=x=v=0,_=g=1,n.svg=!!(t.getCTM&&Xh(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[de]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[de]!=="none"?c[de]:"")),i.scale=i.rotate=i.translate="none"),b=Sc(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Nl(t,j||l,!!j||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==fs&&(E=b[0],I=b[1],N=b[2],$=b[3],u=X=b[4],h=W=b[5],b.length===6?(_=Math.sqrt(E*E+I*I),g=Math.sqrt($*$+N*N),d=E||I?_r(I,E)*Ui:0,y=N||$?_r(N,$)*Ui+d:0,y&&(g*=Math.abs(Math.cos(y*wr))),n.svg&&(u-=A-(A*E+C*N),h-=C-(A*I+C*$))):(K=b[6],rt=b[7],k=b[8],tt=b[9],Z=b[10],z=b[11],u=b[12],h=b[13],p=b[14],R=_r(K,Z),m=R*Ui,R&&(M=Math.cos(-R),S=Math.sin(-R),j=X*M+k*S,q=W*M+tt*S,ut=K*M+Z*S,k=X*-S+k*M,tt=W*-S+tt*M,Z=K*-S+Z*M,z=rt*-S+z*M,X=j,W=q,K=ut),R=_r(-N,Z),f=R*Ui,R&&(M=Math.cos(-R),S=Math.sin(-R),j=E*M-k*S,q=I*M-tt*S,ut=N*M-Z*S,z=$*S+z*M,E=j,I=q,N=ut),R=_r(I,E),d=R*Ui,R&&(M=Math.cos(R),S=Math.sin(R),j=E*M+I*S,q=X*M+W*S,I=I*M-E*S,W=W*M-X*S,E=j,X=q),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,f=180-f),_=me(Math.sqrt(E*E+I*I+N*N)),g=me(Math.sqrt(W*W+K*K)),R=_r(X,W),y=Math.abs(R)>2e-4?R*Ui:0,v=z?1/(z<0?-z:z):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Yh(nn(t,de)),j&&t.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(_*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=p+a,n.scaleX=me(_),n.scaleY=me(g),n.rotation=me(d)+o,n.rotationX=me(m)+o,n.rotationY=me(f)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=Pa(l)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?Zx:Vh?$h:Kx,n.uncache=0,n},Pa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Uo=function(t,e,n){var i=Le(e);return me(parseFloat(e)+parseFloat(xi(t,"x",n+"px",i)))+i},Kx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$h(t,e)},Ri="0deg",jr="0px",Pi=") ",$h=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,p=n.skewX,_=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,f=n.force3D,y=n.target,x=n.zOrigin,v="",A=f==="auto"&&t&&t!==1||f===!0;if(x&&(h!==Ri||u!==Ri)){var C=parseFloat(u)*wr,b=Math.sin(C),R=Math.cos(C),M;C=parseFloat(h)*wr,M=Math.cos(C),a=Uo(y,a,b*M*-x),o=Uo(y,o,-Math.sin(C)*-x),c=Uo(y,c,R*M*-x+x)}m!==jr&&(v+="perspective("+m+Pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||a!==jr||o!==jr||c!==jr)&&(v+=c!==jr||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Pi),l!==Ri&&(v+="rotate("+l+Pi),u!==Ri&&(v+="rotateY("+u+Pi),h!==Ri&&(v+="rotateX("+h+Pi),(p!==Ri||_!==Ri)&&(v+="skew("+p+", "+_+Pi),(g!==1||d!==1)&&(v+="scale("+g+", "+d+Pi),y.style[de]=v||"translate(0, 0)"},Zx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,p=n.scaleY,_=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,f=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),A,C,b,R,M;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=wr,l*=wr,A=Math.cos(c)*h,C=Math.sin(c)*h,b=Math.sin(c-l)*-p,R=Math.cos(c-l)*p,l&&(u*=wr,M=Math.tan(l-u),M=Math.sqrt(1+M*M),b*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,C*=M)),A=me(A),C=me(C),b=me(b),R=me(R)):(A=h,R=p,C=b=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=xi(_,"x",a,"px"),v=xi(_,"y",o,"px")),(g||d||m||f)&&(x=me(x+g-(g*A+d*b)+m),v=me(v+d-(g*C+d*R)+f)),(i||s)&&(M=_.getBBox(),x=me(x+i/100*M.width),v=me(v+s/100*M.height)),M="matrix("+A+","+C+","+b+","+R+","+x+","+v+")",_.setAttribute("transform",M),y&&(_.style[de]=M)},Jx=function(t,e,n,i,s){var a=360,o=Te(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ui:1),l=c-i,u=i+l+"deg",h,p;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Yu)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Yu)%a-~~(l/a)*a)),t._pt=p=new qe(t._pt,e,n,i,l,Ux),p.e=u,p.u="deg",t._props.push(n),p},td=function(t,e){for(var n in e)t[n]=e[n];return t},Qx=function(t,e,n){var i=td({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,p,_,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[de]=e,o=ps(n,1),vi(n,de),n.setAttribute("transform",l)):(l=getComputedStyle(n)[de],a[de]=e,o=ps(n,1),a[de]=l);for(c in Zn)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(_=Le(l),g=Le(u),h=_!==g?xi(n,c,l,g):parseFloat(l),p=parseFloat(u),t._pt=new qe(t._pt,o,c,h,p-h,Dl),t._pt.u=g||0,t._props.push(c));td(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ra[t>1?"border"+r:r]=function(o,c,l,u,h){var p,_;if(arguments.length<4)return p=a.map(function(g){return Vn(o,g,l)}),_=p.join(" "),_.split(p[0]).length===5?p[0]:_;p=(u+"").split(" "),_={},a.forEach(function(g,d){return _[g]=p[d]=p[d]||p[(d-1)/2|0]}),o.init(c,_,h)}});var jh={name:"css",register:Ul,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,u,h,p,_,g,d,m,f,y,x,v,A,C,b,R,M;xc||Ul(),this.styles=this.styles||Gh(t),R=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Qe[d]&&Lh(d,e,n,i,t,s)))){if(_=typeof u,g=Ra[d],_==="function"&&(u=u.call(n,i,t,s),_=typeof u),_==="string"&&~u.indexOf("random(")&&(u=us(u)),g)g(this,t,d,u,n)&&(b=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",pi.lastIndex=0,pi.test(l)||(m=Le(l),f=Le(u),f?m!==f&&(l=xi(t,d,l,f)+f):m&&(u+=m)),this.add(o,"setProperty",l,u,i,s,0,0,d),a.push(d),R.push(d,0,o[d]);else if(_!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,t,s):c[d],Te(l)&&~l.indexOf("random(")&&(l=us(l)),Le(l+"")||l==="auto"||(l+=rn.units[d]||Le(Vn(t,d))||""),(l+"").charAt(1)==="="&&(l=Vn(t,d))):l=Vn(t,d),p=parseFloat(l),y=_==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),d in Ln&&(d==="autoAlpha"&&(p===1&&Vn(t,"visibility")==="hidden"&&h&&(p=0),R.push("visibility",0,o.visibility),ci(this,o,"visibility",p?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ln[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Zn,x){if(this.styles.save(d),M=u,_==="string"&&u.substring(0,6)==="var(--"){if(u=nn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=u,u=nn(t,"perspective"),S?t.style.perspective=S:vi(t,"perspective")}h=parseFloat(u)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ps(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new qe(this._pt,o,de,0,1,A.renderTransform,A,0,-1),v.dep=1),d==="scale")this._pt=new qe(this._pt,A,"scaleY",A.scaleY,(y?Tr(A.scaleY,y+h):h)-A.scaleY||0,Dl),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){R.push(Ye,0,o[Ye]),u=$x(u),A.svg?Nl(t,u,0,C,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==A.zOrigin&&ci(this,A,"zOrigin",A.zOrigin,f),ci(this,o,d,Pa(l),Pa(u)));continue}else if(d==="svgOrigin"){Nl(t,u,1,C,0,this);continue}else if(d in qh){Jx(this,A,d,p,y?Tr(p,y+u):u);continue}else if(d==="smoothOrigin"){ci(this,A,"smooth",A.smooth,u);continue}else if(d==="force3D"){A[d]=u;continue}else if(d==="transform"){Qx(this,u,t);continue}}else d in o||(d=Or(d)||d);if(x||(h||h===0)&&(p||p===0)&&!Ix.test(u)&&d in o)m=(l+"").substr((p+"").length),h||(h=0),f=Le(u)||(d in rn.units?rn.units[d]:m),m!==f&&(p=xi(t,d,l,f)),this._pt=new qe(this._pt,x?A:o,d,p,(y?Tr(p,y+h):h)-p,!x&&(f==="px"||d==="zIndex")&&e.autoRound!==!1?Fx:Dl),this._pt.u=f||0,x&&M!==u?(this._pt.b=l,this._pt.e=M,this._pt.r=Ox):m!==f&&f!=="%"&&(this._pt.b=l,this._pt.r=Nx);else if(d in o)Yx.call(this,t,d,l,y?y+u:u);else if(d in t)this.add(t,d,l||t[d],y?y+u:u,i,s);else if(d!=="parseTransform"){cc(d,u);continue}x||(d in o?R.push(d,0,o[d]):typeof t[d]=="function"?R.push(d,2,t[d]()):R.push(d,1,l||t[d])),a.push(d)}}b&&Fh(this)},render:function(t,e){if(e.tween._time||!yc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in Zn&&e!==Ye&&(t._gsap.x||Vn(t,"x"))?n&&qu===n?e==="scale"?Hx:kx:(qu=n||{})&&(e==="scale"?Gx:Vx):t.style&&!ac(t.style[e])?Bx:~e.indexOf("-")?zx:gc(t,e)},core:{_removeProperty:vi,_getMatrix:Sc}};$e.utils.checkPrefix=Or;$e.core.getStyleSaver=Gh;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){Zn[s]=1});Xe(t,function(s){rn.units[s]="deg",qh[s]=1}),Ln[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");Ln[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rn.units[r]="px"});$e.registerPlugin(jh);var Kh=$e.registerPlugin(jh)||$e;Kh.core.Tween;function ty(r){const t=document.querySelectorAll(".intro-title .brush-text"),e=document.querySelector(".intro-subtitle"),n=document.querySelector(".intro-quote"),i=document.querySelector(".intro-desc");t.forEach(a=>{const o=a.getComputedTextLength();a.style.strokeDasharray=o,a.style.strokeDashoffset=o,a.style.fill="transparent"}),Kh.timeline({delay:.8}).to(t,{strokeDashoffset:0,fill:"#f5f0e6",duration:2.5,stagger:.4,ease:"power2.inOut"}).to(e,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=1").to(n,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=0.6").to(i,{opacity:1,y:0,duration:1,ease:"power2.out"},"-=0.6")}async function ey(){const r=await fetch("/data/content.json");if(!r.ok)throw new Error(`Failed to load content: ${r.status}`);return r.json()}function Ec(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ed(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768}const Ol="https://ncm-api-ochre.vercel.app",nd="12675557343";let Be=[],Dn=-1,Jt=null,mi=!1,Fi=!1,La=!1,Yn,Ga,$n,Zh,Tc,Jh,Qh,tf,Fl,ef,nf,rf,sf,Bl,Da,Ia;function ny(){iy(),ry()}function iy(){const r=document.createElement("div");r.className="music-widget",r.innerHTML=`
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
    </button>`,document.body.appendChild(r),Yn=document.getElementById("musicBtn"),Ga=document.getElementById("musicPanel"),$n=document.getElementById("musicList"),Zh=document.getElementById("playerBar"),Tc=document.getElementById("playBtn"),Jh=document.getElementById("prevBtn"),Qh=document.getElementById("nextBtn"),tf=document.getElementById("progressFill"),Fl=document.getElementById("progressBar"),ef=document.getElementById("timeCurrent"),nf=document.getElementById("timeTotal"),rf=document.getElementById("playlistName"),sf=document.getElementById("songCount"),Bl=document.getElementById("musicCover"),Da=document.getElementById("trackInfo"),Ia=document.getElementById("trackArtist")}function ry(){sy(),Yn.addEventListener("click",r=>{if(La){La=!1;return}r.stopPropagation(),ay()}),document.addEventListener("click",r=>{!Ga.contains(r.target)&&r.target!==Yn&&!Yn.contains(r.target)&&oy()}),Tc.addEventListener("click",r=>{r.stopPropagation(),id()}),Jh.addEventListener("click",r=>{r.stopPropagation(),dy()}),Qh.addEventListener("click",r=>{r.stopPropagation(),lf()}),Fl.addEventListener("click",r=>{if(!Jt||!Jt.duration)return;const t=Fl.getBoundingClientRect(),e=Math.max(0,Math.min(1,(r.clientX-t.left)/t.width));Jt.currentTime=e*Jt.duration}),document.addEventListener("keydown",r=>{r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||r.key===" "&&Fi&&(r.preventDefault(),id())})}function sy(){const r=Yn.closest(".music-widget");if(!r)return;const t="wenruo_music_pos";let e=!1,n=0,i=0,s=0,a=0,o=!1;const c=4;function l(d){const m=d.touches&&d.touches[0]?d.touches[0]:d;return{x:m.clientX,y:m.clientY}}function u(d){e=!0,o=!1;const m=l(d);n=m.x,i=m.y;const f=r.getBoundingClientRect();s=f.left,a=f.top,r.classList.add("dragging"),r.style.transition="none",document.body.style.userSelect="none"}function h(d){if(!e)return;const m=l(d),f=m.x-n,y=m.y-i;(Math.abs(f)>c||Math.abs(y)>c)&&(o=!0,La=!0);const x=r.getBoundingClientRect(),v=window.innerWidth,A=window.innerHeight;let C=s+f,b=a+y;C=Math.max(0,Math.min(C,v-x.width)),b=Math.max(0,Math.min(b,A-x.height)),r.style.right="auto",r.style.bottom="auto",r.style.left=C+"px",r.style.top=b+"px"}function p(){e&&(e=!1,r.classList.remove("dragging"),r.style.transition="",document.body.style.userSelect="",_(),o&&setTimeout(()=>{La=!1},50))}function _(){try{const d=r.getBoundingClientRect();localStorage.setItem(t,JSON.stringify({left:d.left,top:d.top}))}catch{}}function g(){try{const d=localStorage.getItem(t);if(!d)return;const m=JSON.parse(d),f=window.innerWidth,y=window.innerHeight,x=r.getBoundingClientRect();let v=m.left,A=m.top;v=Math.max(0,Math.min(v,f-x.width)),A=Math.max(0,Math.min(A,y-x.height)),r.style.right="auto",r.style.bottom="auto",r.style.left=v+"px",r.style.top=A+"px"}catch{}}Yn.addEventListener("mousedown",u),Yn.addEventListener("touchstart",u,{passive:!0}),window.addEventListener("mousemove",h),window.addEventListener("touchmove",h,{passive:!0}),window.addEventListener("mouseup",p),window.addEventListener("touchend",p),window.addEventListener("resize",()=>{const d=r.getBoundingClientRect(),m=window.innerWidth,f=window.innerHeight;let y=d.left,x=d.top;y=Math.max(0,Math.min(y,m-d.width)),x=Math.max(0,Math.min(x,f-d.height)),r.style.left=y+"px",r.style.top=x+"px"}),g()}function ay(){Fi=!Fi,Ga.classList.toggle("show",Fi),Yn.classList.toggle("active",Fi),Fi&&Be.length===0&&af()}function oy(){Fi=!1,Ga.classList.remove("show"),Yn.classList.remove("active")}async function af(){var r;$n.innerHTML='<div class="music-loading"><div class="ink-spinner"></div><span>墨滴晕开中…</span></div>';try{const[t,e]=await Promise.all([fetch(`${Ol}/playlist/detail?id=${nd}`),fetch(`${Ol}/playlist/track/all?id=${nd}`)]);if(!t.ok)throw new Error(`HTTP ${t.status}`);if(!e.ok)throw new Error(`HTTP ${e.status}`);const n=await t.json(),i=await e.json();if(n.code!==200||!n.playlist){const a=n.message||n.msg||"API error";throw new Error(a)}const s=n.playlist;rf.textContent=s.name||"未知歌单",sf.textContent=`${s.trackCount||0} 首`,s.coverImgUrl&&(Bl.src=s.coverImgUrl+"?param=100y100",Bl.style.display=""),Be=i.songs||i.data||s.tracks||[],cy(),of()}catch(t){$n.innerHTML=`<div class="music-error">✦ ${t.message}，点击重试</div>`,(r=$n.querySelector(".music-error"))==null||r.addEventListener("click",af)}}async function ly(r){var n,i;const e=await(await fetch(`${Ol}/song/url/v1?id=${r}`)).json();if(e.code===200&&((i=(n=e.data)==null?void 0:n[0])!=null&&i.url))return e.data[0].url;throw new Error("URL not available")}function cy(){$n.innerHTML=Be.map((r,t)=>{const e=r.ar?r.ar.map(i=>i.name).join(" / "):"",n=zl((r.dt||0)/1e3);return`
      <div class="music-list-item${t===Dn?" active":""}" data-index="${t}">
        <span class="music-item-num">${t+1}</span>
        <div class="music-item-info">
          <div class="music-item-name">${sd(r.name||"未知")}</div>
          <div class="music-item-artist">${sd(e)}</div>
        </div>
        <span class="music-item-dur">${n}</span>
      </div>`}).join(""),$n.querySelectorAll(".music-list-item").forEach(r=>{r.addEventListener("click",()=>{const t=parseInt(r.dataset.index);Be[t]&&Va(t)})})}function da(){$n.querySelectorAll(".music-list-item").forEach((t,e)=>{t.classList.toggle("active",e===Dn);const n=t.querySelector(".music-item-num");e===Dn&&mi?n.innerHTML='<span class="music-eq"><span></span><span></span><span></span></span>':n.textContent=e+1}),Tc.innerHTML=mi?'<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>':'<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>',of()}function of(){if(Zh.style.display=Be.length>0?"":"none",Dn>=0&&Be[Dn]){const r=Be[Dn];Da.textContent=r.name||"—",Ia.textContent=r.ar?r.ar.map(t=>t.name).join(" / "):""}else Da.textContent="—",Ia.textContent=""}function uy(r){Da.textContent=r.name||"—",Ia.textContent=r.ar?r.ar.map(t=>t.name).join(" / "):""}async function Va(r){if(r<0||r>=Be.length)return;Jt&&(Jt.pause(),Jt.src=""),Dn=r,mi=!1,da();const t=Be[r];uy(t);const e=$n.querySelector(`[data-index="${r}"]`);e&&e.classList.add("loading");let n;try{n=await ly(t.id)}catch{e&&e.classList.remove("loading"),rd();return}e&&e.classList.remove("loading"),Jt=new Audio(n),Jt.addEventListener("canplay",()=>{mi=!0,Jt.play().catch(()=>{}),da()}),Jt.addEventListener("ended",()=>lf()),Jt.addEventListener("timeupdate",()=>{if(Jt&&Jt.duration){const i=Jt.currentTime/Jt.duration*100;tf.style.width=i+"%",ef.textContent=zl(Jt.currentTime)}}),Jt.addEventListener("loadedmetadata",()=>{nf.textContent=zl(Jt.duration)}),Jt.addEventListener("error",()=>{mi=!1,da(),rd()}),Jt.load()}function id(){if(!Jt&&Be.length>0){Va(0);return}Jt&&(mi?(Jt.pause(),mi=!1):(Jt.play().catch(()=>{}),mi=!0),da())}function lf(){Be.length!==0&&Va((Dn+1)%Be.length)}function dy(){if(Be.length!==0){if(Jt&&Jt.currentTime>2){Jt.currentTime=0;return}Va((Dn-1+Be.length)%Be.length)}}function rd(){const r=$n.querySelector(`[data-index="${Dn}"]`);r&&(r.classList.add("unavailable"),setTimeout(()=>r.classList.remove("unavailable"),2e3))}function zl(r){if(!r||isNaN(r))return"0:00";const t=Math.floor(r/60),e=Math.floor(r%60);return`${t}:${e<10?"0":""}${e}`}function sd(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}let is=[];function hy(){const r=document.getElementById("notesGrid");r&&fy().then(()=>py(r))}async function fy(){try{is=(await(await fetch("/data/content.json")).json()).notes||[]}catch{is=[]}}function py(r){r.innerHTML=is.length===0?'<div class="note-empty">暂无笔记</div>':is.map(t=>{var e;return`
      <div class="note-card" data-note="${t.id}">
        <div class="note-card-icon">${t.icon||"📝"}</div>
        <h3>${Ua(t.title)}</h3>
        <p>${Ua((t.content||"").slice(0,80))}${((e=t.content)==null?void 0:e.length)>80?"…":""}</p>
        <div class="note-card-date">${t.date||""}</div>
        <div class="note-card-brush"></div>
      </div>`}).join(""),r.querySelectorAll(".note-card").forEach(t=>{t.addEventListener("click",()=>{const e=is.find(n=>n.id===t.dataset.note);e&&my(e)})})}function my(r){const t=document.createElement("div");t.className="note-overlay",t.innerHTML=`
    <div class="note-modal">
      <button class="note-modal-close">&times;</button>
      <div class="note-modal-title">${r.icon||"📝"} ${Ua(r.title)}</div>
      <div class="note-modal-meta">${r.date||""}</div>
      <div class="note-modal-body">${_y(r.content)}</div>
    </div>`,document.body.appendChild(t);const e=()=>t.remove();t.querySelector(".note-modal-close").addEventListener("click",e),t.addEventListener("click",n=>{n.target===t&&e()})}function _y(r){return Ua(r).split(`
`).filter(t=>t.trim()).map(t=>`<p>${t}</p>`).join("")}function Ua(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const ms="https://next-app-one-navy.vercel.app";function gy(){const r=document.getElementById("messageBoard");r&&kl(r)}function vy(){return`<div class="msg-skeleton">
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item" style="width:80%"></div>
  </div>`}async function kl(r){r.innerHTML=vy();try{const n=(await(await fetch(`${ms}/api/messages`)).json()).messages||[];r.innerHTML=`
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
              <span class="msg-name">${ad(i.name)}</span>
              <span class="msg-time">${Sy(i.time)}</span>
            </div>
            <div class="msg-content">${ad(i.message)}</div>
          </div>`).join("")}
      </div>`,r.querySelector("#msgForm").addEventListener("submit",async i=>{i.preventDefault();const s=r.querySelector("#msgName").value.trim(),a=r.querySelector("#msgText").value.trim();if(!s||!a)return;const o=r.querySelector(".msg-submit");o.disabled=!0,o.textContent="发送中…";try{const c=await fetch(`${ms}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,message:a})});if(!c.ok)throw new Error(`HTTP ${c.status}`);kl(r)}catch{o.textContent="发送失败，重试",o.disabled=!1}})}catch{r.innerHTML='<div class="msg-error">加载失败，点击重试</div>',r.querySelector(".msg-error").addEventListener("click",()=>kl(r))}}function xy(){const r=document.getElementById("contactForm");r&&r.addEventListener("submit",async t=>{t.preventDefault();const e=r.querySelector(".contact-submit"),n=e.textContent;e.disabled=!0,e.textContent="发送中…";try{await fetch(`${ms}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.querySelector("#contactName").value,email:r.querySelector("#contactEmail").value,subject:r.querySelector("#contactSubject").value,message:r.querySelector("#contactMessage").value})}),e.textContent="已发送，感谢！",r.reset(),setTimeout(()=>{e.textContent=n,e.disabled=!1},3e3)}catch{e.textContent="发送失败，重试",e.disabled=!1}})}function yy(){fetch(`${ms}/api/stats`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"visit"})}).catch(()=>{})}async function My(r){if(r)try{const e=await(await fetch(`${ms}/api/stats`)).json();r.innerHTML=`
      <div class="stat-item"><span class="stat-num">${e.pv}</span><span class="stat-label">浏览量</span></div>
      <div class="stat-item"><span class="stat-num">${e.uv}</span><span class="stat-label">访客</span></div>
      <div class="stat-item"><span class="stat-num">${e.plays}</span><span class="stat-label">播放</span></div>`}catch{r.innerHTML='<div class="stat-item">统计加载失败</div>'}}function Sy(r){const t=new Date(r),n=new Date-t;return n<6e4?"刚刚":n<36e5?`${Math.floor(n/6e4)} 分钟前`:n<864e5?`${Math.floor(n/36e5)} 小时前`:t.toLocaleDateString("zh-CN")}function ad(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const No={},cf=(No==null?void 0:No.VITE_CHAT_API_BASE)||"https://hanbaoyu.ggff.net/v1",uf="cat-15e82e21a1292280105c3020f5dd0468884261de7144dedd",df="wenruo_chat",od=.7,Hl=2048,ld="",cd=!0,Ey="你是温若，一位清冷淡雅的剑修。请用简短、优美、古风的方式回答。";function Ty(){const r=document.getElementById("page-chat");if(!r)return;const t=document.getElementById("chatModelBtn"),e=document.getElementById("chatModelText"),n=document.getElementById("chatModelMenu"),i=document.getElementById("chatModelOverlay"),s=document.getElementById("chatModelList"),a=document.getElementById("chatModelClose"),o=document.getElementById("chatSettings"),c=document.getElementById("chatSettingsPanel"),l=document.getElementById("chatSettingsOverlay"),u=document.getElementById("chatSettingsClose"),h=document.getElementById("chatMessages"),p=document.getElementById("chatInput"),_=document.getElementById("chatSend"),g=document.getElementById("chatTemp"),d=document.getElementById("chatTempVal"),m=document.getElementById("chatMaxTokens"),f=document.getElementById("chatOcMode"),y=document.getElementById("chatClear"),x=document.getElementById("chatClearHeader"),v=document.getElementById("chatExport"),A=document.getElementById("chatWelcomePanel"),C=document.getElementById("chatWelcomeOverlay"),b=document.getElementById("chatWelcomeClose");if(!t||!n||!s||!h||!p)return;const R=Iy();let M=[],S=null,E=null;ud(h,R.messages),ut(R.temperature),g.value=Math.round(R.temperature*10),m.value=R.maxTokens,f&&(f.checked=R.ocMode),by().then(rt=>{M=rt,wy(s,e,M,R.model,z=>{R.model=z,Li(R),N()})}).catch(()=>{e.textContent="模型加载失败"});function I(){n&&i&&(n.classList.add("open"),i.classList.add("open"))}function N(){n&&i&&(n.classList.remove("open"),i.classList.remove("open"))}t.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),n.classList.contains("open")?N():(X(),I())}),i&&(i.addEventListener("click",N),i.addEventListener("touchstart",N,{passive:!0})),a&&a.addEventListener("click",N);function $(){c&&l&&(c.classList.add("open"),l.classList.add("open"))}function X(){c&&l&&(c.classList.remove("open"),l.classList.remove("open"))}o.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),c.classList.contains("open")?X():(N(),$())}),l&&(l.addEventListener("click",X),l.addEventListener("touchstart",X,{passive:!0})),u&&u.addEventListener("click",X),document.addEventListener("keydown",rt=>{rt.key==="Escape"&&(N(),X())}),new MutationObserver(()=>{r.classList.contains("active")||(N(),X())}).observe(r,{attributes:!0,attributeFilter:["class"]}),g.addEventListener("input",()=>{const rt=parseInt(g.value,10)/10;R.temperature=rt,ut(rt),Li(R)}),m.addEventListener("change",()=>{R.maxTokens=parseInt(m.value,10)||Hl,Li(R)}),f&&f.addEventListener("change",()=>{R.ocMode=f.checked,Li(R)});function j(){confirm("确定要清空当前对话吗？")&&(R.messages=[],Li(R),ud(h,R.messages))}y&&y.addEventListener("click",()=>{j(),X()}),x&&x.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),j()}),v&&v.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),Py(R.messages)}),p.addEventListener("keydown",rt=>{rt.key==="Enter"&&(rt.preventDefault(),q())}),p.addEventListener("focus",()=>{setTimeout(()=>p.scrollIntoView({behavior:"smooth",block:"nearest"}),100)}),_.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),q()}),Uy(p);async function q(){var ct,dt,H;const rt=p.value.trim();if(!rt)return;const z=R.model;if(!z){Ly(h,"请先选择模型");return}if(S)return;const K={role:"user",content:rt};R.messages.push(K),hf(h,K),p.value="",p.style.height="auto",Li(R),S=new AbortController,E="msg-"+Date.now(),Dy(h,E);try{const ht=await fetch(`${cf}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${uf}`},body:JSON.stringify({model:z,messages:Ry(R.messages,R.ocMode),temperature:R.temperature,max_tokens:R.maxTokens,stream:!0}),signal:S.signal});if(!ht.ok){const Kt=await ht.text();throw new Error(`API ${ht.status}: ${Kt}`)}const _t=ht.body.getReader(),zt=new TextDecoder("utf-8");let D="";for(;;){const{done:Kt,value:Bt}=await _t.read();if(Kt)break;const St=zt.decode(Bt,{stream:!0}).split(`
`);for(const se of St){const Tt=se.trim();if(!(!Tt||Tt==="data: [DONE]")&&Tt.startsWith("data:"))try{const P=((H=(dt=(ct=JSON.parse(Tt.slice(5)).choices)==null?void 0:ct[0])==null?void 0:dt.delta)==null?void 0:H.content)||"";P&&(D+=P,dd(E,D))}catch{}}}R.messages.push({role:"assistant",content:D}),Li(R),Fo(E,D)}catch(ht){ht.name==="AbortError"?Fo(E,"已取消"):(dd(E,`请求失败：${ht.message}`),Fo(E,`请求失败：${ht.message}`))}finally{S=null,E=null}}function ut(rt){d.textContent=rt.toFixed(1)}function k(){localStorage.getItem("wenruo_chat_welcome")!=="1"&&A&&C&&(A.classList.add("open"),C.classList.add("open"))}function tt(){A&&C&&(A.classList.remove("open"),C.classList.remove("open"));try{localStorage.setItem("wenruo_chat_welcome","1")}catch{}}b&&b.addEventListener("click",tt),C&&C.addEventListener("click",tt),new MutationObserver(()=>{r.classList.contains("active")?k():tt()}).observe(r,{attributes:!0,attributeFilter:["class"]}),r.classList.contains("active")&&k()}async function by(){const r=await fetch(`${cf}/models`,{headers:{Authorization:`Bearer ${uf}`}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const e=((await r.json()).data||[]).map(n=>({id:n.id,name:n.id}));return e.sort((n,i)=>n.name.localeCompare(i.name)),e}function wy(r,t,e,n,i){if(!r)return;if(r.innerHTML="",e.length===0){t.textContent="无可用模型";return}const s=n||e[0].id,a=e.find(o=>o.id===s)||e[0];t.textContent=Oo(a.name),e.forEach(o=>{const c=Ay(o.id),l=c?Cy(c):"",u=document.createElement("button");u.className="chat-model-item",u.type="button",o.id===s&&u.classList.add("active"),u.innerHTML=`
      <div class="chat-model-item-main">
        ${l}
        <span class="chat-model-name">${Gl(Oo(o.name))}</span>
      </div>
      <span class="chat-model-id">${Gl(o.id)}</span>`,u.addEventListener("click",()=>{r.querySelectorAll(".chat-model-item").forEach(h=>h.classList.remove("active")),u.classList.add("active"),t.textContent=Oo(o.name),i(o.id)}),r.appendChild(u)})}function Ay(r){const t=r.toLowerCase();return t.includes("deepseek")?"deepseek":t.includes("claude")||t.includes("anthropic")?"anthropic":t.includes("gpt")||t.includes("openai")||t.includes("o1-")||t.includes("o3-")?"chatgpt":t.includes("gemini")||t.includes("google")?"gemini":null}function Cy(r){return{deepseek:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4D6BFA" d="M21.2 11c-.5-1.8-2.2-3.2-4.2-3.4-.4 0-.8-.3-1-.7-.2-.4-.1-.9.3-1.2.3-.3.9-.4 1.3-.2.3.2.6.5.7.8 0 .1.1.1.2.1.1 0 .2-.1.2-.2 0-.1-.1-.2-.2-.3-.5-.4-1.2-.4-1.8-.2-.8.3-1.4 1-1.5 1.8-.1.5 0 1.1.4 1.5.3.3.8.5 1.2.6.5.2 1.1.3 1.7.5.7.3 1.3.8 1.6 1.5.3.7.2 1.5-.2 2.1-.4.7-1.1 1.2-1.9 1.3-.7.1-1.5 0-2.1-.4-.6-.4-1.1-1-1.2-1.7-.1-.5 0-1 .3-1.3.3-.4.8-.5 1.2-.5.2 0 .5 0 .7.1.1 0 .2 0 .2-.1 0-.1 0-.2-.1-.2-.1-.1-.3-.2-.4-.2-.7-.2-1.5 0-2 .6-.5.6-.7 1.4-.5 2.1.2.9.8 1.7 1.6 2.1.8.4 1.8.5 2.7.2.9-.3 1.7-1.1 2-2 .3-.8.1-1.7-.4-2.4zM12 2.5c-4.4 0-8 3.4-8 7.8 0 4 2.9 7.3 6.8 8 .5.1 1.1 0 1.6-.3.4-.3.8-.7.9-1.2.1-.5 0-1-.4-1.3-.3-.3-.9-.5-1.3-.3-.4.1-.8.5-.9.8-.1.4-.1.8.2 1 .2.2.5.3.7.3.1 0 .3.2.2.4 0 .1-.1.3-.3.3-.3.2-.7.2-1.1.1-3-1-5.2-3.7-5.2-7 0-3.6 2.9-6.5 6.5-6.5 3.1 0 5.7 2.1 6.4 5 .1.4.5.7.9.8.4.1.9 0 1.2-.3.3-.3.4-.8.2-1.2C19.2 4.8 15.9 2.5 12 2.5z"/></svg>',anthropic:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M12 2L4 20h2.5l2-5h7l2 5H20L12 2zm1.5 11h-3l1.5-3.8 1.5 3.8z"/></svg>',chatgpt:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#10A37F" d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.2L17.5 7 12 9.8 6.5 7 12 4.2zM6 8.5l5 2.8v5.4l-5-2.5V8.5zm7 8.2v-5.4l5-2.8v5.7l-5 2.5z"/></svg>',gemini:'<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M12 1l2.5 7.5L12 12l-2.5-3.5L12 1z"/><path fill="#EA4335" d="M23 12l-7.5 2.5L12 12l3.5-2.5L23 12z"/><path fill="#FBBC05" d="M12 23l-2.5-7.5L12 12l2.5 3.5L12 23z"/><path fill="#34A853" d="M1 12l7.5-2.5L12 12l-3.5 2.5L1 12z"/></svg>'}[r]||""}function Oo(r){if(!r)return"";const t=18;return r.length>t?r.slice(0,t)+"…":r}function Ry(r,t){const n=r.slice(-20).map(i=>({role:i.role,content:i.content}));return t?[{role:"system",content:Ey},...n]:n}function Py(r){if(!r||r.length===0){alert("当前没有对话记录可导出");return}const t=r.map(s=>`${s.role==="user"?"你":"温若"}：${s.content}`).join(`

`),e=new Blob([t],{type:"text/plain;charset=utf-8"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`灵犀对话-${new Date().toISOString().slice(0,10)}.txt`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}function ud(r,t){if(r.innerHTML="",t.length===0){r.innerHTML=`
      <div class="chat-empty">
        <div class="chat-empty-title">✦ 灵犀初启</div>
        <div class="chat-empty-sub">温若在此，想问什么？</div>
      </div>`;return}t.forEach(e=>hf(r,e)),Es(r)}function hf(r,t){const e=r.querySelector(".chat-empty");e&&e.remove();const n=document.createElement("div");n.className=`chat-message chat-message-${t.role}`,n.innerHTML=`
    <div class="chat-avatar">${t.role==="user"?"客":"若"}</div>
    <div class="chat-bubble"><div class="chat-text">${Gl(t.content)}</div></div>`,r.appendChild(n),Es(r)}function Ly(r,t){const e=document.createElement("div");e.className="chat-system",e.textContent=t,r.appendChild(e),Es(r)}function Dy(r,t){const e=r.querySelector(".chat-empty");e&&e.remove();const n=document.createElement("div");n.className="chat-message chat-message-assistant streaming",n.id=t,n.innerHTML=`
    <div class="chat-avatar">若</div>
    <div class="chat-bubble"><div class="chat-text"></div><span class="chat-cursor"></span></div>`,r.appendChild(n),Es(r)}function dd(r,t){const e=document.getElementById(r);if(!e)return;const n=e.querySelector(".chat-text");n&&(n.textContent=t);const i=document.getElementById("chatMessages");Es(i)}function Fo(r,t){const e=document.getElementById(r);if(!e)return;e.classList.remove("streaming");const n=e.querySelector(".chat-cursor");n&&n.remove();const i=e.querySelector(".chat-text");i&&(i.textContent=t)}function Es(r){r&&(r.scrollTop=r.scrollHeight)}function Iy(){try{const r=localStorage.getItem(df),t=r?JSON.parse(r):{};return{messages:Array.isArray(t.messages)?t.messages:[],model:t.model||ld,temperature:typeof t.temperature=="number"?t.temperature:od,maxTokens:t.maxTokens||Hl,ocMode:typeof t.ocMode=="boolean"?t.ocMode:cd}}catch{return{messages:[],model:ld,temperature:od,maxTokens:Hl,ocMode:cd}}}function Li(r){try{localStorage.setItem(df,JSON.stringify(r))}catch{}}function Gl(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}function Uy(r){!r||r.tagName!=="TEXTAREA"||r.addEventListener("input",()=>{r.style.height="auto",r.style.height=Math.min(r.scrollHeight,160)+"px"})}async function Ny(){const r=document.getElementById("pathTimeline");if(r)try{const n=((await(await fetch("/data/content.json?v="+Date.now())).json()).chronicle||[]).slice().reverse();r.innerHTML=n.length===0?'<div class="path-item">暂无记录</div>':n.map(i=>`
        <div class="path-item">
          <div class="path-year">${Bo(i.year||"")}</div>
          <div class="path-title">${Bo(i.title||"")}</div>
          <div class="path-desc">${Bo(i.desc||"")}</div>
        </div>
      `).join("")}catch{r.innerHTML='<div class="path-item">剑谱加载失败</div>'}}function Bo(r){const t=document.createElement("div");return t.textContent=r,t.innerHTML}const hd=[{name:"上签 · 破云",text:"剑出鞘时云自开，今日所困，明日皆成踏脚石。"},{name:"上签 · 听松",text:"松下听风，不争而胜。慢下来，答案自己会走过来。"},{name:"中签 · 渡溪",text:"溪水虽浅，湿鞋难免。小心细节，便可稳渡。"},{name:"中签 · 磨刀",text:"工欲善其事，先磨三日刀。眼下蛰伏，是在攒锋。"},{name:"上签 · 拾叶",text:"落叶非无情物，化作春泥更护花。放下即是得到。"},{name:"下签 · 雾岭",text:"岭上雾重，宜守不宜进。今日多思少动，养精蓄锐。"},{name:"上签 · 惊鸿",text:"惊鸿一瞥，机遇转瞬即逝。看到就出手，别犹豫。"},{name:"中签 · 归舟",text:"行到水穷处，坐看云起时。此路不通时，换个码头。"},{name:"上签 · 藏锋",text:"大巧若拙，大辩若讷。真正的高手，从不亮剑两次。"},{name:"下签 · 逆水",text:"逆水行舟，不进则退。今日宜复盘旧账，清理负累。"}];function Oy(){const r=document.getElementById("fortuneBox");if(!r)return;const t=document.getElementById("fortuneBtn"),e=document.getElementById("fortuneResult");let n=!1;t.addEventListener("click",()=>{n||(n=!0,t.disabled=!0,e.classList.remove("show"),r.classList.add("shaking"),setTimeout(()=>{r.classList.remove("shaking");const i=hd[Math.floor(Math.random()*hd.length)];e.innerHTML='<span class="fortune-name">'+i.name+"</span>"+i.text,e.classList.add("show"),t.disabled=!1,n=!1},1600))})}let bn=null;function Fy(){const r=document.querySelector("[data-cosmos]");r&&r.addEventListener("click",By)}function By(){try{bn||(bn=Yy())}catch(r){console.warn("Cosmos unavailable:",r);return}bn.overlay.classList.add("open"),bn.ui.classList.remove("faded"),document.body.style.overflow="hidden",bn.running=!0,bn.clock.getDelta(),requestAnimationFrame(bn.loop)}function fd(){bn&&(bn.overlay.classList.remove("open"),document.body.style.overflow="",bn.running=!1)}function rs(r,t){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),s=i.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return s.addColorStop(0,r),s.addColorStop(.3,r.replace("1)","0.55)")),s.addColorStop(.65,t.replace("0.6)","0.18)")),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),new zr(n)}function zy(){const r=new Rn,t=18e3,e=4,n=.9,i=13,s=new Float32Array(t*3),a=new Float32Array(t*3),o=new Pt(1,.78,.52),c=new Pt(.82,.86,1),l=new Pt(.45,.62,1);for(let v=0;v<t;v++){const A=Math.pow(Math.random(),1.6)*i+n,C=v%e/e*Math.PI*2,b=A*.55,R=(1.1-A/i)*.6+.12,M=(Math.random()-.5)*R*A*.35,S=(Math.random()-.5)*R*A*.35,E=(Math.random()-.5)*R*(1-A/i)*1.4;s[v*3]=Math.cos(C+b)*A+M,s[v*3+1]=E,s[v*3+2]=Math.sin(C+b)*A+S;const I=A/i,N=new Pt;I<.35?N.lerpColors(o,c,I/.35):N.lerpColors(c,l,(I-.35)/.65);const $=.85+Math.random()*.3;a[v*3]=Math.min(1,N.r*$),a[v*3+1]=Math.min(1,N.g*$),a[v*3+2]=Math.min(1,N.b*$)}const u=new Ie;u.setAttribute("position",new Ee(s,3)),u.setAttribute("color",new Ee(a,3));const h=rs("rgba(255,250,240,1)","rgba(160,180,255,0.6)"),p=new Sa({size:.16,map:h,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Wn,sizeAttenuation:!0});r.add(new Ea(u,p));const _=600,g=new Float32Array(_*3);for(let v=0;v<_;v++){const A=Math.pow(Math.random(),1.4)*i+n,C=Math.random()*Math.PI*2+A*.55;g[v*3]=Math.cos(C)*A+(Math.random()-.5),g[v*3+1]=(Math.random()-.5)*.8,g[v*3+2]=Math.sin(C)*A+(Math.random()-.5)}const d=new Ie;d.setAttribute("position",new Ee(g,3));const m=new Sa({size:.42,map:h,color:16773853,transparent:!0,opacity:.85,depthWrite:!1,blending:Wn});r.add(new Ea(d,m));const f=new xa(new as({map:rs("rgba(255,214,160,1)","rgba(255,150,90,0.6)"),transparent:!0,opacity:.9,depthWrite:!1,blending:Wn}));f.scale.set(7,7,1),r.add(f);const y=["rgba(140,120,255,0.6)","rgba(90,160,255,0.6)","rgba(200,110,220,0.6)","rgba(90,220,220,0.6)","rgba(255,140,160,0.6)"],x=[];for(let v=0;v<5;v++){const A=new xa(new as({map:rs("rgba(255,255,255,0.35)",y[v]),transparent:!0,opacity:.12,depthWrite:!1,blending:Wn,color:new Pt(y[v].replace(/[\d.]+\)/,"1)"))})),C=Math.random()*Math.PI*2,b=6+Math.random()*10;A.position.set(Math.cos(C)*b,(Math.random()-.5)*4,Math.sin(C)*b);const R=14+Math.random()*16;A.scale.set(R,R,1),r.add(A),x.push(A)}return{group:r,nebulas:x,brightMat:m}}function ky(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,256*.08,256/2,256/2,256/2);n.addColorStop(0,"#fffbe8"),n.addColorStop(.25,"#ffe9a8"),n.addColorStop(.5,"#ffbe5a"),n.addColorStop(.78,"#f07d2e"),n.addColorStop(1,"#8a2f08"),e.fillStyle=n,e.fillRect(0,0,256,256);for(let i=0;i<900;i++){const s=Math.random()*Math.PI*2,a=Math.pow(Math.random(),.6)*256*.48,o=256/2+Math.cos(s)*a,c=256/2+Math.sin(s)*a,l=1+Math.random()*3.2,u=Math.random()>.5;e.beginPath(),e.fillStyle=u?"rgba(255,244,200,0.16)":"rgba(160,60,10,0.14)",e.arc(o,c,l,0,Math.PI*2),e.fill()}return new zr(t)}function Hy(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255,236,180,0.85)"),n.addColorStop(.22,"rgba(255,190,110,0.42)"),n.addColorStop(.5,"rgba(255,140,60,0.14)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.globalCompositeOperation="lighter";for(let i=0;i<14;i++){const s=i/14*Math.PI*2+Math.random()*.3,a=256*(.32+Math.random()*.16),o=256/2+Math.cos(s)*256*.14,c=256/2+Math.sin(s)*256*.14,l=256/2+Math.cos(s)*a,u=256/2+Math.sin(s)*a,h=e.createLinearGradient(o,c,l,u);h.addColorStop(0,"rgba(255,210,140,0.28)"),h.addColorStop(1,"rgba(255,140,60,0)"),e.strokeStyle=h,e.lineWidth=2.5+Math.random()*3.5,e.beginPath(),e.moveTo(o,c),e.lineTo(l,u),e.stroke()}return new zr(t)}function Gy(){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#16324e"),i.addColorStop(.5,"#0d3d63"),i.addColorStop(1,"#122c46"),n.fillStyle=i,n.fillRect(0,0,512,256),[[.16,.32,.16],[.34,.58,.11],[.52,.26,.14],[.66,.48,.12],[.82,.3,.1],[.44,.74,.09],[.12,.68,.08]].forEach(([o,c,l])=>{for(let u=0;u<26;u++){const h=Math.random()*Math.PI*2,p=Math.pow(Math.random(),.7)*l*512,_=(o*512+Math.cos(h)*p+512)%512,g=Math.min(250,Math.max(6,c*256+Math.sin(h)*p*.6)),d=4+Math.random()*14,m=n.createRadialGradient(_,g,0,_,g,d),f=Math.random(),y=f>.72?"rgba(196,168,120,":f>.3?"rgba(84,128,72,":"rgba(60,102,60,";m.addColorStop(0,y+"0.95)"),m.addColorStop(1,y+"0)"),n.fillStyle=m,n.beginPath(),n.arc(_,g,d,0,Math.PI*2),n.fill()}});const a=n.createLinearGradient(0,0,0,256);return a.addColorStop(0,"rgba(235,244,250,0.95)"),a.addColorStop(.09,"rgba(235,244,250,0)"),a.addColorStop(.91,"rgba(235,244,250,0)"),a.addColorStop(1,"rgba(235,244,250,0.95)"),n.fillStyle=a,n.fillRect(0,0,512,256),new zr(e)}function Vy(){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");n.clearRect(0,0,512,256);for(let i=0;i<90;i++){const s=Math.random()*512,a=256*.12+Math.random()*256*.76,o=20+Math.random()*70,c=6+Math.random()*16,l=n.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(255,255,255,0.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.save(),n.translate(s,a),n.scale(1,c/o),n.beginPath(),n.arc(0,0,o,0,Math.PI*2),n.fill(),n.restore()}return new zr(e)}function Wy(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,256*.05,256/2,256/2,256/2);n.addColorStop(0,"#d9d4cd"),n.addColorStop(.7,"#b3ada5"),n.addColorStop(1,"#7d7873"),e.fillStyle=n,e.fillRect(0,0,256,256);for(let i=0;i<120;i++){const s=Math.random()*Math.PI*2,a=Math.pow(Math.random(),.5)*256*.46,o=256/2+Math.cos(s)*a,c=256/2+Math.sin(s)*a,l=1.5+Math.random()*7;e.beginPath(),e.fillStyle="rgba(70,66,62,0.35)",e.arc(o,c,l,0,Math.PI*2),e.fill(),e.beginPath(),e.fillStyle="rgba(230,226,220,0.28)",e.arc(o-l*.25,c-l*.25,l*.55,0,Math.PI*2),e.fill()}return new zr(t)}function Xy(){const r=new Rn;r.position.set(4.6,.55,0);const e=new Rn;r.add(e);const n=.6,i=new Ge(new vr(n,48,32),new tc({map:ky()}));e.add(i);const s=new xa(new as({map:Hy(),transparent:!0,opacity:.95,depthWrite:!1,blending:Wn}));s.scale.set(4.4,4.4,1),e.add(s);const a=new Av(16770744,90,30,1.6);e.add(a);const o=new Rn;e.add(o);const c=new Rn;c.position.set(1.75,0,0),o.add(c);const l=.22,u=new Ge(new vr(l,48,32),new Du({map:Gy(),specular:new Pt(2771558),shininess:14}));u.rotation.z=.41,c.add(u);const h=new Ge(new vr(l*1.035,48,32),new Tv({map:Vy(),transparent:!0,opacity:.55,depthWrite:!1}));h.rotation.z=.41,c.add(h);const p=new xa(new as({map:rs("rgba(120,180,255,0.55)","rgba(60,120,255,0.35)"),transparent:!0,opacity:.5,depthWrite:!1,blending:Wn}));p.scale.set(l*3.4,l*3.4,1),c.add(p);const _=new Rn;c.add(_);const g=new Ge(new vr(.062,32,24),new Du({map:Wy(),shininess:4}));g.position.set(.48,0,0),_.add(g);const d=[];for(let y=0;y<=128;y++){const x=y/128*Math.PI*2;d.push(new F(Math.cos(x)*1.75,0,Math.sin(x)*1.75))}const m=new Ev(new Ie().setFromPoints(d),new Jd({color:8952251,transparent:!0,opacity:.28}));e.add(m);const f=new Cv(3359829,1.6);return e.add(f),{sys:r,sun:i,corona:s,sunLight:a,earthOrbit:o,earthPivot:c,earth:u,clouds:h,moonPivot:_,moon:g}}function qy(){const t=new Float32Array(7500);for(let i=0;i<2500;i++){const s=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=55+Math.random()*70;t[i*3]=o*Math.sin(a)*Math.cos(s),t[i*3+1]=o*Math.cos(a),t[i*3+2]=o*Math.sin(a)*Math.sin(s)}const e=new Ie;e.setAttribute("position",new Ee(t,3));const n=new Sa({size:.55,map:rs("rgba(255,255,255,1)","rgba(200,210,255,0.6)"),color:14542079,transparent:!0,opacity:.7,depthWrite:!1,blending:Wn});return new Ea(e,n)}function Yy(){const r=document.createElement("div");r.className="cosmos-overlay",r.innerHTML='<canvas class="cosmos-canvas"></canvas><div class="cosmos-ui"><h2 class="cosmos-title">大千世界</h2><p class="cosmos-sub">三千世界，不过一瞬光影</p><p class="cosmos-hint">拖动环视 · 双指近观 · Esc 归来</p><button class="cosmos-close" type="button">归 来</button></div>',document.body.appendChild(r);const t=r.querySelector("canvas"),e=r.querySelector(".cosmos-ui"),n=new jd({canvas:t,antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(197644,1);const i=new Kd;i.fog=new ic(197644,.012);const s=new ke(60,window.innerWidth/window.innerHeight,.1,400),{group:a,nebulas:o,brightMat:c}=zy();i.add(a),i.add(qy());const l=Xy();i.add(l.sys);const u={overlay:r,ui:e,renderer:n,scene:i,camera:s,running:!1,clock:new rc,baseAngle:0,rot:{x:0,y:0},cur:{dist:19},tgt:{rx:.18,ry:0,dist:19},dragging:!1,px:0,py:0,pointers:new Map,pinchDist:0,elapsed:0,reduced:Ec(),loop:null};u.loop=()=>{if(!u.running)return;const d=Math.min(u.clock.getDelta(),.05);u.elapsed+=d,!u.dragging&&!u.reduced&&(u.baseAngle+=d*.045),u.rot.x+=(u.tgt.rx-u.rot.x)*.055,u.rot.y+=(u.tgt.ry-u.rot.y)*.055,u.cur.dist+=(u.tgt.dist-u.cur.dist)*.07;const m=u.rot.x+.34,f=u.baseAngle+u.rot.y;if(s.position.set(Math.cos(f)*u.cur.dist*Math.cos(m),Math.sin(m)*u.cur.dist+1.6,Math.sin(f)*u.cur.dist*Math.cos(m)),s.lookAt(0,.4,0),!u.reduced){a.rotation.y+=d*.02,o.forEach((x,v)=>{x.material.rotation+=d*.02*(v%2?1:-1)}),c.opacity=.7+Math.sin(u.elapsed*2.1)*.25,l.sys.rotation.y+=d*.02,l.sun.rotation.y+=d*.06,l.corona.material.rotation+=d*.05;const y=1+Math.sin(u.elapsed*1.6)*.05;l.corona.scale.set(4.4*y,4.4*y,1),l.sunLight.intensity=90+Math.sin(u.elapsed*1.6)*12,l.earthOrbit.rotation.y+=d*.22,l.earth.rotation.y+=d*.9,l.clouds.rotation.y+=d*1.05,l.moonPivot.rotation.y+=d*.55,l.moon.rotation.y+=d*.55}n.render(i,s),requestAnimationFrame(u.loop)};const h=2.2,p=32,_=()=>{const d=Array.from(u.pointers.values());if(d.length<2)return 0;const m=d[0].x-d[1].x,f=d[0].y-d[1].y;return Math.hypot(m,f)};t.addEventListener("pointerdown",d=>{try{t.setPointerCapture(d.pointerId)}catch{}u.pointers.set(d.pointerId,{x:d.clientX,y:d.clientY}),u.pointers.size===1?(u.dragging=!0,u.px=d.clientX,u.py=d.clientY):u.pointers.size===2&&(u.dragging=!1,u.pinchDist=_()),e.classList.add("faded")}),t.addEventListener("pointermove",d=>{if(u.pointers.has(d.pointerId)){if(u.pointers.set(d.pointerId,{x:d.clientX,y:d.clientY}),u.pointers.size===2){const m=_();if(u.pinchDist>0&&m>0){const f=m/u.pinchDist;u.tgt.dist=Math.max(h,Math.min(p,u.tgt.dist/f))}u.pinchDist=m;return}u.dragging&&(u.tgt.ry+=(d.clientX-u.px)*.0042,u.tgt.rx=Math.max(-.85,Math.min(.85,u.tgt.rx+(d.clientY-u.py)*.0026)),u.px=d.clientX,u.py=d.clientY)}});const g=d=>{if(u.pointers.delete(d.pointerId),u.pointers.size===1){const m=Array.from(u.pointers.values())[0];u.dragging=!0,u.px=m.x,u.py=m.y,u.pinchDist=0}else u.pointers.size===0&&(u.dragging=!1,u.pinchDist=0)};return t.addEventListener("pointerup",g),t.addEventListener("pointercancel",g),t.addEventListener("wheel",d=>{d.preventDefault(),u.tgt.dist=Math.max(h,Math.min(p,u.tgt.dist+d.deltaY*.02)),e.classList.add("faded")},{passive:!1}),r.querySelector(".cosmos-close").addEventListener("click",fd),window.addEventListener("keydown",d=>{d.key==="Escape"&&fd()}),window.addEventListener("resize",()=>{u.overlay.classList.contains("open")&&(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight))}),window.__cosmosState=u,u}const pd="swordfly-best";let ae=null,L=null;const Qr=(r,t,e)=>Math.max(t,Math.min(e,r)),zo=(r,t,e)=>r+(t-r)*e,Wt=(r,t)=>r+Math.random()*(t-r),md=[523.25,587.33,659.25,783.99,880,1046.5,1174.7,1318.5],_d=[{top:[53,64,110],mid:[141,107,158],hor:[240,168,104],sun:[255,217,160],sunY:.3,star:0},{top:[61,107,158],mid:[123,163,200],hor:[207,228,240],sun:[255,244,214],sunY:.2,star:0},{top:[43,48,87],mid:[158,95,122],hor:[232,133,90],sun:[255,179,107],sunY:.44,star:.15},{top:[10,14,36],mid:[28,42,74],hor:[58,74,110],sun:[232,236,244],sunY:.26,star:1}];function gd(r){const t=Math.floor(r)%4,e=(t+1)%4,n=r-Math.floor(r),i=_d[t],s=_d[e],a=(o,c)=>o.map((l,u)=>Math.round(zo(l,c[u],n)));return{top:a(i.top,s.top),mid:a(i.mid,s.mid),hor:a(i.hor,s.hor),sun:a(i.sun,s.sun),sunY:zo(i.sunY,s.sunY,n),star:zo(i.star,s.star,n)}}function vd(r){return r<500?"炼气":r<1200?"筑基":r<2500?"金丹":r<4e3?"元婴":"化神"}const Ne={ctx:null,windGain:null,windSrc:null,muted:!1,init(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext);const r=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,r,this.ctx.sampleRate),e=t.getChannelData(0);let n=0;for(let s=0;s<r;s++)n=n*.97+(Math.random()*2-1)*.03,e[s]=n*2.4;this.windSrc=this.ctx.createBufferSource(),this.windSrc.buffer=t,this.windSrc.loop=!0;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=420,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windSrc.connect(i),i.connect(this.windGain),this.windGain.connect(this.ctx.destination),this.windSrc.start()}catch{}},setWind(r){this.windGain&&!this.muted&&this.windGain.gain.setTargetAtTime(r,this.ctx.currentTime,.3)},pluck(r){if(!this.ctx||this.muted)return;const t=md[Qr(r,0,md.length-1)],e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=t,i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.18,e+.015),i.gain.exponentialRampToValueAtTime(1e-4,e+.5),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.55)},thunder(){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime,t=this.ctx.sampleRate*.5,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let o=0;o<t;o++)n[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.2);const i=this.ctx.createBufferSource();i.buffer=e;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=180;const a=this.ctx.createGain();a.gain.value=.32,i.connect(s),s.connect(a),a.connect(this.ctx.destination),i.start(r)},thud(){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime,t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,r),t.frequency.exponentialRampToValueAtTime(40,r+.4),e.gain.setValueAtTime(.3,r),e.gain.exponentialRampToValueAtTime(1e-4,r+.45),t.connect(e),e.connect(this.ctx.destination),t.start(r),t.stop(r+.5)}};function xd(r){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,r.replace("A","0.9")),i.addColorStop(.4,r.replace("A","0.35")),i.addColorStop(1,r.replace("A","0")),n.fillStyle=i,n.fillRect(0,0,64,64),e}function $y(){const r=document.createElement("div");return r.className="sf-overlay",r.innerHTML='<canvas class="sf-canvas"></canvas><div class="sf-hud" style="display:none"><div class="sf-hud-left"><span id="sf-dist">0</span> 丈</div><div class="sf-hud-mid" id="sf-realm">炼气</div><div class="sf-hud-right">◈ <span id="sf-stones">0</span></div></div><button class="sf-icon-btn sf-mute" title="音效开关">🔊</button><button class="sf-icon-btn sf-close">归 来</button><div class="sf-panel sf-menu"><h2 class="sf-title">御剑千山</h2><p class="sf-sub">剑气凌霄 · 一瞬千山</p><p class="sf-tips">按住屏幕 御剑升腾<br>松开手指 收剑下落</p><p class="sf-tips2">避浮峰 · 防雷劫 · 尽揽灵石</p><button class="sf-btn" id="sf-start" type="button">启 程</button><div class="sf-best" id="sf-best-menu"></div></div><div class="sf-panel sf-over" style="display:none"><h3 class="sf-over-title">坠 剑</h3><div class="sf-over-line" id="sf-over-stats"></div><div class="sf-over-total" id="sf-over-total"></div><div class="sf-over-realm" id="sf-over-realm"></div><div class="sf-best" id="sf-best-over"></div><button class="sf-btn" id="sf-retry" type="button">再 战</button></div>',document.body.appendChild(r),r}function jy(){const r=document.querySelector("[data-swordfly]");if(!r)return;r.addEventListener("click",()=>{ae||(ae=$y(),t()),s()});function t(){const d=ae.querySelector(".sf-canvas"),m=d.getContext("2d");L={canvas:d,ctx:m,W:0,H:0,mode:"menu",running:!1,raf:0,last:0,t:0,elapsed:0,speed:260,worldX:0,dist:0,stones:0,streak:0,streakT:0,player:{x:0,y:0,vy:0},holding:!1,invuln:0,overAt:0,spires:[],clouds:[],gems:[],parts:[],winds:[],spawnT:1.2,stars:[],ambiClouds:[],reduced:Ec(),goldGlow:xd("rgba(255,200,110,A)"),jadeGlow:xd("rgba(120,232,205,A)"),sky:gd(2),hudDist:ae.querySelector("#sf-dist"),hudStones:ae.querySelector("#sf-stones"),hudRealm:ae.querySelector("#sf-realm"),hud:ae.querySelector(".sf-hud"),menu:ae.querySelector(".sf-menu"),over:ae.querySelector(".sf-over"),best:parseInt(localStorage.getItem(pd)||"0",10),_d:-1,_s:-1,_r:""},L.player.x=0;for(let y=0;y<160;y++)L.stars.push({fx:Math.random(),fy:Math.random()*.55,s:Wt(.6,1.8),p:Math.random()*7});for(let y=0;y<8;y++)L.ambiClouds.push({fx:Math.random()*1.6,fy:Wt(.08,.6),sc:Wt(.5,1.4),f:Wt(.1,.3),a:Wt(.1,.22)});const f=y=>{y.preventDefault(),e()};d.addEventListener("pointerdown",f),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),window.addEventListener("keydown",y=>{y.code==="Space"&&!y.repeat&&ae.classList.contains("open")&&(y.preventDefault(),e()),y.key==="Escape"&&ae.classList.contains("open")&&a()}),window.addEventListener("keyup",y=>{y.code==="Space"&&n()}),ae.querySelector("#sf-start").addEventListener("click",()=>{Ne.init(),o()}),ae.querySelector("#sf-retry").addEventListener("click",()=>{Ne.init(),o()}),ae.querySelector(".sf-close").addEventListener("click",a),ae.querySelector(".sf-mute").addEventListener("click",y=>{Ne.muted=!Ne.muted,y.target.textContent=Ne.muted?"🔇":"🔊",Ne.muted&&Ne.setWind(0)}),window.addEventListener("resize",()=>{ae.classList.contains("open")&&i()})}function e(){if(!(!L||!L.running)){if(L.mode==="menu"){Ne.init(),o();return}if(L.mode==="over"){L.t-L.overAt>.9&&o();return}L.holding=!0}}function n(){L&&(L.holding=!1)}function i(){const d=ae.getBoundingClientRect();L.W=d.width,L.H=d.height;const m=Math.min(window.devicePixelRatio||1,2);L.canvas.width=Math.round(d.width*m),L.canvas.height=Math.round(d.height*m),L.ctx.setTransform(m,0,0,m,0,0),L.player.x=Math.round(L.W*.28),L.mode==="menu"&&(L.player.y=L.H*.45)}function s(){ae.classList.add("open"),document.body.style.overflow="hidden",i(),L.mode="menu",L.menu.style.display="",L.over.style.display="none",L.hud.style.display="none",ae.querySelector("#sf-best-menu").textContent=L.best>0?"最远纪录 "+L.best+" 分":"御剑之道，始于足下",L.running=!0,L.last=performance.now(),cancelAnimationFrame(L.raf),L.raf=requestAnimationFrame(g)}function a(){ae.classList.remove("open"),document.body.style.overflow="",L.running=!1,L.holding=!1,cancelAnimationFrame(L.raf),Ne.setWind(0)}function o(){L.mode="playing",L.menu.style.display="none",L.over.style.display="none",L.hud.style.display="",L.t=0,L.elapsed=0,L.dist=0,L.stones=0,L.streak=0,L.streakT=0,L.speed=240,L.spawnT=1.6,L.invuln=1.5,L.player.y=L.H*.45,L.player.vy=0,L.spires.length=0,L.clouds.length=0,L.gems.length=0,L.parts.length=0,L._d=-1,L._s=-1,L._r=""}function c(d){if(L.invuln>0)return;L.mode="over",L.overAt=L.t,L.holding=!1,Ne.thud(),Ne.setWind(.02);const m=L.reduced?14:34;for(let y=0;y<m;y++){const x=Math.random()*Math.PI*2,v=Wt(40,320);L.parts.push({type:"ink",x:L.player.x,y:L.player.y,vx:Math.cos(x)*v,vy:Math.sin(x)*v-60,life:0,max:Wt(.5,1.1),size:Wt(3,11)})}const f=Math.floor(L.dist)+L.stones*25;f>L.best&&(L.best=f,localStorage.setItem(pd,String(f))),ae.querySelector("#sf-over-stats").textContent="行程 "+Math.floor(L.dist)+" 丈 · 灵石 "+L.stones+" 枚",ae.querySelector("#sf-over-total").textContent="总分 "+f,ae.querySelector("#sf-over-realm").textContent="此行境界 · "+vd(L.dist),ae.querySelector("#sf-best-over").textContent="最远纪录 "+L.best+" 分",setTimeout(()=>{L.mode==="over"&&(L.hud.style.display="none",L.over.style.display="")},650)}function l(){const d=Math.random();if(d<.48){const m=Qr(260-L.elapsed*.6,195,260),f=Wt(L.H*.25,L.H*.68),y=Wt(54,78),x=L.W+60;if(L.spires.push({x,w:y,topH:f-m/2,botY:f+m/2,seed:Math.random()*10}),Math.random()<.7){const v=3+Math.floor(Math.random()*3);for(let A=0;A<v;A++)L.gems.push({x:x+y/2+(A-(v-1)/2)*30,y:f,ph:Math.random()*7})}}else if(d<.78){const m=6+Math.floor(Math.random()*4),f=Wt(L.H*.2,L.H*.7),y=Wt(30,70),x=L.W+60;for(let v=0;v<m;v++)L.gems.push({x:x+v*34,y:f+Math.sin(v/m*Math.PI)*y*(Math.random()<.5?1:-1),ph:Math.random()*7})}else L.elapsed>14&&L.clouds.push({x:L.W+90,y:Wt(L.H*.16,L.H*.5),rx:Wt(46,64),ry:Wt(22,30),state:"drift",t:0,cool:Wt(.8,1.6),seed:Math.random()*10})}function u(d){L.elapsed+=d,L.speed=Math.min(600,240+L.elapsed*6);const m=L.speed*d;L.worldX+=m,L.dist+=m/40,L.invuln>0&&(L.invuln-=d),L.streakT>0&&(L.streakT-=d,L.streakT<=0&&(L.streak=0));const f=L.player;if(f.vy+=(L.holding?-2350:1500)*d,f.vy*=1-.55*d,f.vy=Qr(f.vy,-500,640),f.y+=f.vy*d,f.y<34&&(f.y=34,f.vy=Math.max(f.vy,60)),f.y>L.H*.9){c();return}if(!L.reduced)for(let v=0;v<2;v++)L.parts.push({type:"trail",x:f.x-26+Wt(-3,3),y:f.y+10+Wt(-3,3),vx:-L.speed*.25+Wt(-15,15),vy:Wt(-18,18),life:0,max:Wt(.25,.5),size:Wt(6,13)});!L.reduced&&Math.random()<L.speed/620*.5&&L.winds.push({x:L.W+40,y:Wt(30,L.H*.88),len:Wt(40,120),a:Wt(.05,.16)}),L.spawnT-=d,L.spawnT<=0&&(l(),L.spawnT=Qr(Wt(1.4,1.9)-L.elapsed*.005,1,1.9));for(const v of L.spires)v.x-=m;L.spires=L.spires.filter(v=>v.x+v.w>-60);for(const v of L.clouds)v.x-=m,v.t+=d,v.state==="drift"&&v.t>v.cool?(v.state="charge",v.t=0):v.state==="charge"&&v.t>1.05?(v.state="bolt",v.t=0,Ne.thunder()):v.state==="bolt"&&v.t>.16&&(v.state="drift",v.t=0,v.cool=Wt(1.2,2.2));L.clouds=L.clouds.filter(v=>v.x+v.rx>-80);for(const v of L.gems)v.x-=m;L.gems=L.gems.filter(v=>v.x>-40&&!v.dead);for(const v of L.winds)v.x-=L.speed*1.9*d;L.winds=L.winds.filter(v=>v.x+v.len>-20);for(const v of L.parts)v.life+=d,v.x+=v.vx*d,v.y+=v.vy*d,v.type==="ink"&&(v.vy+=500*d);if(L.parts=L.parts.filter(v=>v.life<v.max),L.invuln<=0){const v=f.x,A=f.y,C=9;for(const b of L.spires)if(v+C>b.x&&v-C<b.x+b.w&&(A-C<b.topH||A+C>b.botY)){c();return}for(const b of L.clouds){const R=(v-b.x)/b.rx,M=(A-b.y)/b.ry;if(R*R+M*M<.7){c();return}if(b.state==="bolt"){const S=b.x+Math.sin(b.seed*40)*12,E=b.y+b.ry*.7,I=E+280;if(A>E&&A<I&&Math.abs(v-S)<15){c();return}}}}for(const v of L.gems){const A=v.x-f.x,C=v.y-f.y;if(A*A+C*C<28*28){v.dead=!0,L.stones++,L.streak=Math.min(L.streak+1,8),L.streakT=2.4,Ne.pluck(L.streak-1);for(let b=0;b<(L.reduced?4:10);b++){const R=Math.random()*Math.PI*2,M=Wt(30,140);L.parts.push({type:"jade",x:v.x,y:v.y,vx:Math.cos(R)*M,vy:Math.sin(R)*M,life:0,max:Wt(.3,.6),size:Wt(4,9)})}}}const y=Math.floor(L.dist);y!==L._d&&(L._d=y,L.hudDist.textContent=y),L.stones!==L._s&&(L._s=L.stones,L.hudStones.textContent=L.stones);const x=vd(L.dist);x!==L._r&&(L._r=x,L.hudRealm.textContent=x),Ne.setWind(.04+L.speed/620*.1)}function h(d,m,f,y,x){const v=L.ctx;v.beginPath(),v.moveTo(-20,L.H+20);for(let A=-20;A<=L.W+20;A+=16){const C=A+d,b=Math.sin(C*.0021+x)*.55+Math.sin(C*.0058+x*1.9)*.3+Math.sin(C*.016+x*3.1)*.15;v.lineTo(A,m-(b*.5+.5)*f)}v.lineTo(L.W+20,L.H+20),v.closePath(),v.fillStyle=y,v.fill()}function p(){const d=L.ctx,m=L.player,f=L.t;if(L.mode==="over")return;const y=L.invuln>0&&Math.floor(L.t*12)%2===0;d.save(),d.translate(m.x,m.y),d.rotate(Qr(m.vy*55e-5,-.32,.42)+(L.mode==="menu"?Math.sin(f*1.4)*.05:0)),y&&(d.globalAlpha=.35);const x=Math.sin(f*13)*(L.holding?3.2:1.6);d.globalCompositeOperation="lighter",d.drawImage(L.goldGlow,-64,-8,52,26),d.globalCompositeOperation="source-over",d.beginPath(),d.moveTo(-34,9),d.quadraticCurveTo(0,4,36,9),d.quadraticCurveTo(0,14,-34,9),d.closePath(),d.fillStyle="#0d1124",d.fill(),d.strokeStyle="rgba(255,205,130,0.65)",d.lineWidth=1.1,d.stroke(),d.fillStyle="#0d1124",d.beginPath(),d.moveTo(-1,-14),d.quadraticCurveTo(6,-12,7,-2),d.quadraticCurveTo(8,4,4,8),d.quadraticCurveTo(-2,9,-8,8),d.quadraticCurveTo(-13-x,5,-11-x*1.4,-2),d.quadraticCurveTo(-9,-10,-1,-14),d.closePath(),d.fill(),d.beginPath(),d.moveTo(-4,-8),d.quadraticCurveTo(-14-x*2,-6,-20-x*2.6,-1),d.quadraticCurveTo(-14-x*2,-2,-6,-3),d.closePath(),d.fill(),d.beginPath(),d.arc(2,-18,4.2,0,Math.PI*2),d.fill(),d.beginPath(),d.arc(2,-23,1.6,0,Math.PI*2),d.fill(),d.strokeStyle="rgba(255,205,130,0.4)",d.lineWidth=.8,d.beginPath(),d.arc(2,-18,4.2,-.9,.9),d.stroke(),d.restore()}function _(){const d=L.ctx,m=L.W,f=L.H,y=L.dist/1600%4,x=gd(y+2);L.sky=x;const v=d.createLinearGradient(0,0,0,f);if(v.addColorStop(0,`rgb(${x.top})`),v.addColorStop(.55,`rgb(${x.mid})`),v.addColorStop(1,`rgb(${x.hor})`),d.fillStyle=v,d.fillRect(0,0,m,f),x.star>.02){d.save();for(const E of L.stars){const I=.5+Math.sin(L.t*2+E.p)*.5;d.globalAlpha=x.star*I*.8,d.fillStyle="#e8ecf8",d.fillRect(E.fx*m,E.fy*f,E.s,E.s)}d.restore()}const A=m*.72,C=f*x.sunY,b=d.createRadialGradient(A,C,0,A,C,130);b.addColorStop(0,`rgba(${x.sun},0.95)`),b.addColorStop(.25,`rgba(${x.sun},0.5)`),b.addColorStop(1,`rgba(${x.sun},0)`),d.fillStyle=b,d.fillRect(A-130,C-130,260,260),d.beginPath(),d.arc(A,C,26,0,Math.PI*2),d.fillStyle=`rgba(${x.sun},0.95)`,d.fill(),h(L.worldX*.06,f*.62,f*.16,`rgba(${x.top},0.55)`,3.7),h(L.worldX*.14,f*.72,f*.2,"rgba(26,32,60,0.55)",8.2),h(L.worldX*.3,f*.84,f*.24,"rgba(15,19,40,0.9)",5.1);for(const E of L.ambiClouds){const I=((E.fx*(m+400)-L.worldX*E.f)%(m+400)+m+400)%(m+400)-200,N=E.fy*f;d.save(),d.globalAlpha=E.a,d.fillStyle="#eef2fa",d.beginPath(),d.ellipse(I,N,60*E.sc,14*E.sc,0,0,Math.PI*2),d.ellipse(I+30*E.sc,N-8*E.sc,34*E.sc,12*E.sc,0,0,Math.PI*2),d.fill(),d.restore()}d.save(),d.strokeStyle="#ffffff",d.lineWidth=1;for(const E of L.winds)d.globalAlpha=E.a,d.beginPath(),d.moveTo(E.x,E.y),d.lineTo(E.x+E.len,E.y),d.stroke();d.restore();for(const E of L.gems){const I=1+Math.sin(L.t*4+E.ph)*.15;d.drawImage(L.jadeGlow,E.x-22*I,E.y-22*I,44*I,44*I),d.save(),d.translate(E.x,E.y),d.rotate(L.t*1.6+E.ph),d.beginPath(),d.moveTo(0,-7),d.lineTo(5,0),d.lineTo(0,7),d.lineTo(-5,0),d.closePath(),d.fillStyle="#8ef0d8",d.fill(),d.strokeStyle="rgba(255,255,255,0.7)",d.lineWidth=.8,d.stroke(),d.restore()}for(const E of L.spires)d.fillStyle="#0c1024",d.beginPath(),d.moveTo(E.x,-4),d.lineTo(E.x+E.w,-4),d.lineTo(E.x+E.w*.72,E.topH*.62),d.lineTo(E.x+E.w*.52,E.topH),d.lineTo(E.x+E.w*.3,E.topH*.58),d.closePath(),d.fill(),d.beginPath(),d.moveTo(E.x,f+4),d.lineTo(E.x+E.w,f+4),d.lineTo(E.x+E.w*.7,E.botY+(f-E.botY)*.4),d.lineTo(E.x+E.w*.5,E.botY),d.lineTo(E.x+E.w*.28,E.botY+(f-E.botY)*.42),d.closePath(),d.fill(),d.strokeStyle="rgba(255,205,130,0.35)",d.lineWidth=1,d.beginPath(),d.moveTo(E.x+E.w*.3,E.topH*.58),d.lineTo(E.x+E.w*.52,E.topH),d.lineTo(E.x+E.w*.72,E.topH*.62),d.stroke(),d.beginPath(),d.moveTo(E.x+E.w*.28,E.botY+(f-E.botY)*.42),d.lineTo(E.x+E.w*.5,E.botY),d.lineTo(E.x+E.w*.7,E.botY+(f-E.botY)*.4),d.stroke();for(const E of L.clouds){const I=E.state==="charge"?E.t/1.05:E.state==="bolt"?1:0;if(d.save(),d.fillStyle=`rgba(${Math.round(30+I*40)},${Math.round(28+I*20)},${Math.round(52+I*60)},0.92)`,d.beginPath(),d.ellipse(E.x,E.y,E.rx,E.ry,0,0,Math.PI*2),d.ellipse(E.x-E.rx*.5,E.y+4,E.rx*.55,E.ry*.8,0,0,Math.PI*2),d.ellipse(E.x+E.rx*.5,E.y+4,E.rx*.55,E.ry*.8,0,0,Math.PI*2),d.fill(),I>0&&(d.globalAlpha=I*(.5+Math.sin(L.t*18)*.3),d.strokeStyle="#b8a8ff",d.lineWidth=1.6,d.beginPath(),d.ellipse(E.x,E.y,E.rx*.9,E.ry*.85,0,0,Math.PI*2),d.stroke(),d.globalAlpha=1),E.state==="bolt"){const N=E.x+Math.sin(E.seed*40)*12;let $=N,X=E.y+E.ry*.7;for(d.strokeStyle="#e8e0ff",d.lineWidth=2.6,d.shadowColor="#a890ff",d.shadowBlur=12,d.beginPath(),d.moveTo($,X);X<E.y+E.ry*.7+280;)X+=22,$=N+Wt(-14,14),d.lineTo($,X);d.stroke(),d.shadowBlur=0}d.restore()}for(const E of L.parts){const I=1-E.life/E.max;E.type==="trail"?(d.globalCompositeOperation="lighter",d.globalAlpha=I*.8,d.drawImage(L.goldGlow,E.x-E.size*I,E.y-E.size*I,E.size*2*I,E.size*2*I),d.globalCompositeOperation="source-over"):E.type==="jade"?(d.globalCompositeOperation="lighter",d.globalAlpha=I,d.drawImage(L.jadeGlow,E.x-E.size*I,E.y-E.size*I,E.size*2*I,E.size*2*I),d.globalCompositeOperation="source-over"):(d.globalAlpha=I*.85,d.fillStyle="#0d1124",d.beginPath(),d.arc(E.x,E.y,E.size*(.5+I*.5),0,Math.PI*2),d.fill()),d.globalAlpha=1}p();const R=f*.9;d.save();const M=d.createLinearGradient(0,R,0,f);M.addColorStop(0,`rgba(${x.hor},0)`),M.addColorStop(.45,`rgba(${x.hor},0.55)`),M.addColorStop(1,`rgba(${x.mid},0.85)`),d.fillStyle=M,d.fillRect(0,R,m,f-R),d.fillStyle="rgba(238,242,250,0.5)";for(let E=0;E<7;E++){const I=((E*.17*(m+300)-L.worldX*.5)%(m+300)+m+300)%(m+300)-150;d.beginPath(),d.ellipse(I,R+8+Math.sin(L.t*1.2+E)*3,90,16,0,0,Math.PI*2),d.fill()}d.restore();const S=d.createRadialGradient(m/2,f/2,f*.36,m/2,f/2,f*.85);S.addColorStop(0,"rgba(6,8,18,0)"),S.addColorStop(1,"rgba(6,8,18,0.42)"),d.fillStyle=S,d.fillRect(0,0,m,f)}function g(d){if(!L.running)return;const m=Math.min((d-L.last)/1e3,.033);if(L.last=d,L.t+=m,L.mode==="playing")u(m);else{L.worldX+=30*m,L.mode==="menu"&&(L.dist=(L.dist+12*m)%6400,L.player.y=L.H*.45+Math.sin(L.t*1.6)*14,L.player.vy=Math.cos(L.t*1.6)*40,!L.reduced&&Math.random()<.3&&L.parts.push({type:"trail",x:L.player.x-26,y:L.player.y+10,vx:-20,vy:Wt(-10,10),life:0,max:.5,size:Wt(6,11)}));for(const f of L.parts)f.life+=m,f.x+=f.vx*m,f.y+=f.vy*m,f.type==="ink"&&(f.vy+=500*m);L.parts=L.parts.filter(f=>f.life<f.max)}_(),L.raf=requestAnimationFrame(g)}window.__swordfly={get G(){return L},startRun:()=>{L&&(Ne.init(),o())}}}(function(){const r=(h,p,_)=>Math.max(p,Math.min(_,h)),t=(h,p)=>h+Math.random()*(p-h),e={ctx:null,master:null,windGain:null,windSrc:null,init(){if(this.ctx)return;this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.25,this.master.connect(this.ctx.destination);const h=this.ctx.createBuffer(1,this.ctx.sampleRate*4,this.ctx.sampleRate),p=h.getChannelData(0);for(let g=0;g<p.length;g++)p[g]=(Math.random()*2-1)*.15;this.windSrc=this.ctx.createBufferSource(),this.windSrc.buffer=h,this.windSrc.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.value=600,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windSrc.connect(_),_.connect(this.windGain),this.windGain.connect(this.master),this.windSrc.start()},setWind(h){this.windGain&&this.windGain.gain.setTargetAtTime(h,this.ctx.currentTime,.3)},jump(){if(!this.ctx)return;const h=this.ctx.createOscillator(),p=this.ctx.createGain();h.type="sine",h.frequency.setValueAtTime(300,this.ctx.currentTime),h.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.15),p.gain.setValueAtTime(.12,this.ctx.currentTime),p.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),h.connect(p),p.connect(this.master),h.start(),h.stop(this.ctx.currentTime+.2)},slide(){if(!this.ctx)return;const h=this.ctx.createOscillator(),p=this.ctx.createGain();h.type="sawtooth",h.frequency.setValueAtTime(200,this.ctx.currentTime),h.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.25),p.gain.setValueAtTime(.06,this.ctx.currentTime),p.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),h.connect(p),p.connect(this.master),h.start(),h.stop(this.ctx.currentTime+.3)},collect(h){if(!this.ctx)return;const _=[523,587,659,784,880,1047,1175,1319][r(h,0,7)],g=this.ctx.createOscillator(),d=this.ctx.createGain();g.type="triangle",g.frequency.value=_,d.gain.setValueAtTime(.1,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),g.connect(d),d.connect(this.master),g.start(),g.stop(this.ctx.currentTime+.3)},thud(){if(!this.ctx)return;const h=this.ctx.createOscillator(),p=this.ctx.createGain();h.type="sine",h.frequency.setValueAtTime(150,this.ctx.currentTime),h.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.3),p.gain.setValueAtTime(.2,this.ctx.currentTime),p.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),h.connect(p),p.connect(this.master),h.start(),h.stop(this.ctx.currentTime+.4)}},n={},i="assets/runner/",s={bunny_stand:"char/bunny_stand.png",bunny_walk1:"char/bunny_walk1.png",bunny_walk2:"char/bunny_walk2.png",bunny_jump:"char/bunny_jump.png",bunny_hurt:"char/bunny_hurt.png",bunny_ready:"char/bunny_ready.png",bg1:"bg/layer1.png",bg2:"bg/layer2.png",bg3:"bg/layer3.png",bg4:"bg/layer4.png",ground:"env/ground_grass.png",ground_small:"env/ground_grass_small.png",grass1:"env/grass1.png",grass2:"env/grass2.png",cactus:"env/cactus.png",cloud:"env/cloud.png",spikeMan_stand:"enemy/spikeMan_stand.png",spikeMan_walk1:"enemy/spikeMan_walk1.png",spikeMan_walk2:"enemy/spikeMan_walk2.png",flyMan:"enemy/flyMan_fly.png",spikeBall:"enemy/spikeBall1.png",wingMan1:"enemy/wingMan1.png",wingMan2:"enemy/wingMan2.png"};let a=0,o=Object.keys(s).length;function c(h){for(const[p,_]of Object.entries(s)){const g=new Image;g.onload=()=>{a++,a===o&&h()},g.onerror=()=>{a++,a===o&&h()},g.src=i+_,n[p]=g}}let l=null;function u(){const h=document.querySelector("[data-runner]");if(!h)return;const p=document.createElement("div");p.className="runner-overlay",p.innerHTML=`
      <div class="runner-container">
        <canvas class="runner-canvas"></canvas>
        <div class="runner-hud" style="display:none">
          <div class="runner-hud-left">
            <span class="runner-dist">0</span><span class="runner-unit">丈</span>
            <span class="runner-realm">凡躯</span>
          </div>
          <div class="runner-hud-right">
            <span class="runner-coin-icon">◈</span>
            <span class="runner-coins">0</span>
          </div>
        </div>
        <div class="runner-menu">
          <h2>灵兔跃千山</h2>
          <p class="runner-sub">青草碧连天 · 一跃千山远</p>
          <p class="runner-desc">点按跳跃 · 长按高跃 · 下滑滑铲<br>避尖刺 · 躲飞敌 · 尽收灵石</p>
          <button class="runner-btn" id="rn-start">启 程</button>
          <p class="runner-best" id="rn-best-menu">跃兔之道，始于足下</p>
        </div>
        <div class="runner-over" style="display:none">
          <h3>坠 崖</h3>
          <p id="rn-over-stats">行程 0 丈 · 灵石 0 枚</p>
          <p class="runner-total" id="rn-over-total">总分 0</p>
          <p id="rn-over-realm">此行境界 · 凡躯</p>
          <p class="runner-best" id="rn-best-over">最远纪录 0 分</p>
          <button class="runner-btn" id="rn-retry">再 战</button>
        </div>
        <button class="runner-sound-btn" title="音效">🔊</button>
        <button class="runner-close-btn">归 来</button>
      </div>`,document.body.appendChild(p);const _=p.querySelector(".runner-canvas"),g=_.getContext("2d"),d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;l={canvas:_,ctx:g,W:0,H:0,mode:"menu",running:!1,raf:null,last:0,t:0,elapsed:0,speed:220,worldX:0,dist:0,coins:0,streak:0,streakT:0,player:{x:0,y:0,vy:0,w:40,h:50,grounded:!0,sliding:!1,slideT:0,jumpHeld:!1,coyote:0,jumpBuf:0},holding:!1,slideHeld:!1,invuln:0,overAt:0,obstacles:[],coinsArr:[],parts:[],platforms:[],bgClouds:[],spawnT:1.5,groundY:0,reduced:d,animT:0,hudDist:p.querySelector(".runner-dist"),hudCoins:p.querySelector(".runner-coins"),hudRealm:p.querySelector(".runner-realm"),hud:p.querySelector(".runner-hud"),menu:p.querySelector(".runner-menu"),over:p.querySelector(".runner-over"),best:parseInt(localStorage.getItem("runner_best")||"0"),_d:-1,_s:-1,_r:""};for(let k=0;k<6;k++)l.bgClouds.push({fx:Math.random()*1.5,fy:t(.05,.35),sc:t(.4,1),sp:t(.008,.02)});function m(){const k=_.parentElement.getBoundingClientRect();l.W=k.width,l.H=k.height;const tt=Math.min(window.devicePixelRatio||1,2);_.width=Math.round(k.width*tt),_.height=Math.round(k.height*tt),g.setTransform(tt,0,0,tt,0,0),l.groundY=l.H*.82,l.player.x=l.W*.22,l.mode==="menu"&&(l.player.y=l.groundY)}function f(k){return k<40?"凡躯":k<100?"矫健":k<200?"疾风":k<350?"闪电":k<550?"幻影":"神行"}p.querySelector("#rn-start").addEventListener("click",()=>{e.init(),I()}),p.querySelector("#rn-retry").addEventListener("click",()=>{e.init(),I()}),p.querySelector(".runner-close-btn").addEventListener("click",E);const y=p.querySelector(".runner-sound-btn");let x=!1;y.addEventListener("click",()=>{x=!x,e.master&&(e.master.gain.value=x?0:.25),y.textContent=x?"🔇":"🔊"});function v(k){if(k.preventDefault(),l.mode==="menu"){e.init(),I();return}if(l.mode==="over"){l.t-l.overAt>.9&&I();return}l.holding=!0,l.player.jumpHeld=!0}function A(){l.holding=!1,l.player.jumpHeld=!1}function C(k){k.preventDefault(),l.mode==="playing"&&(l.slideHeld=!0,l.player.grounded&&!l.player.sliding&&(l.player.sliding=!0,l.player.slideT=.5,e.slide()))}function b(){l.slideHeld=!1}_.addEventListener("pointerdown",v),_.addEventListener("pointerup",A),_.addEventListener("pointercancel",A);let R=0;_.addEventListener("touchstart",k=>{R=k.touches[0].clientY},{passive:!0}),_.addEventListener("touchmove",k=>{k.touches[0].clientY-R>40&&(C(k),b())},{passive:!0});const M={};document.addEventListener("keydown",k=>{p.classList.contains("open")&&((k.code==="Space"||k.code==="ArrowUp")&&(k.preventDefault(),M.jump||(M.jump=!0,v(k))),k.code==="ArrowDown"&&(k.preventDefault(),C(k)))}),document.addEventListener("keyup",k=>{(k.code==="Space"||k.code==="ArrowUp")&&(M.jump=!1,A()),k.code==="ArrowDown"&&b()}),h.addEventListener("click",S),window.addEventListener("resize",()=>{p.classList.contains("open")&&m()});function S(){p.classList.add("open"),document.body.style.overflow="hidden",m(),l.mode="menu",l.menu.style.display="",l.over.style.display="none",l.hud.style.display="none",p.querySelector("#rn-best-menu").textContent=l.best>0?"最远纪录 "+l.best+" 分":"跃兔之道，始于足下",l.running=!0,l.last=performance.now(),cancelAnimationFrame(l.raf),l.raf=requestAnimationFrame(ut)}function E(){p.classList.remove("open"),document.body.style.overflow="",l.running=!1,l.holding=!1,cancelAnimationFrame(l.raf),e.setWind(0)}function I(){l.mode="playing",l.menu.style.display="none",l.over.style.display="none",l.hud.style.display="",l.t=0,l.elapsed=0,l.dist=0,l.coins=0,l.streak=0,l.streakT=0,l.speed=220,l.spawnT=1.8,l.invuln=1.5,l.player.y=l.groundY,l.player.vy=0,l.player.grounded=!0,l.player.sliding=!1,l.player.slideT=0,l.obstacles.length=0,l.coinsArr.length=0,l.parts.length=0,l._d=-1,l._s=-1,l._r="",e.setWind(.04)}function N(k){if(l.invuln>0)return;l.mode="over",l.overAt=l.t,l.holding=!1,e.thud(),e.setWind(.02);const tt=l.reduced?12:28;for(let rt=0;rt<tt;rt++){const z=Math.random()*Math.PI*2,K=t(30,200);l.parts.push({type:"dust",x:l.player.x,y:l.player.y-l.player.h/2,vx:Math.cos(z)*K,vy:Math.sin(z)*K-40,life:0,max:t(.4,.9),size:t(3,8)})}const Z=Math.floor(l.dist)+l.coins*20;Z>l.best&&(l.best=Z,localStorage.setItem("runner_best",String(Z))),p.querySelector("#rn-over-stats").textContent="行程 "+Math.floor(l.dist)+" 丈 · 灵石 "+l.coins+" 枚",p.querySelector("#rn-over-total").textContent="总分 "+Z,p.querySelector("#rn-over-realm").textContent="此行境界 · "+f(l.dist),p.querySelector("#rn-best-over").textContent="最远纪录 "+l.best+" 分",setTimeout(()=>{l.mode==="over"&&(l.hud.style.display="none",l.over.style.display="")},650)}function $(){const k=Math.random(),tt=l.groundY;if(k<.35){if(l.obstacles.push({type:"spikeMan",x:l.W+60,y:tt,w:36,h:40,animT:0,frames:["spikeMan_walk1","spikeMan_walk2"]}),Math.random()<.6){const z=3+Math.floor(Math.random()*3);for(let K=0;K<z;K++)l.coinsArr.push({x:l.W+60+36/2+(K-(z-1)/2)*36,y:tt-t(50,90),ph:Math.random()*7})}}else if(k<.55){const z=tt-t(30,70);if(l.obstacles.push({type:"flyMan",x:l.W+60,y:z,w:40,h:36,animT:0,frames:["flyMan"]}),Math.random()<.5){const K=4+Math.floor(Math.random()*3);for(let ct=0;ct<K;ct++)l.coinsArr.push({x:l.W+60+ct*32,y:z-t(20,50)+Math.sin(ct*.8)*25,ph:Math.random()*7})}}else if(k<.72)l.obstacles.push({type:"spikeBall",x:l.W+60,y:tt,w:34,h:34,animT:0,rotSpd:t(3,6)});else if(k<.85){const z=tt-t(50,80);l.obstacles.push({type:"wingMan",x:l.W+60,y:z,w:38,h:30,animT:0,frames:["wingMan1","wingMan2"]})}else{const Z=5+Math.floor(Math.random()*4),rt=tt-t(40,100);for(let z=0;z<Z;z++)l.coinsArr.push({x:l.W+60+z*34,y:rt+Math.sin(z/Z*Math.PI*2)*30,ph:Math.random()*7})}}function X(k){l.elapsed+=k,l.speed=Math.min(580,220+l.elapsed*5.5);const tt=l.speed*k;l.worldX+=tt,l.dist+=tt/40,l.animT+=k,l.invuln>0&&(l.invuln-=k),l.streakT>0&&(l.streakT-=k,l.streakT<=0&&(l.streak=0));const Z=l.player,rt=1800,z=-720,K=l.groundY;if(Z.grounded?Z.coyote=.12:Z.coyote-=k,l.holding&&Z.jumpHeld?Z.jumpBuf=.12:Z.jumpBuf-=k,Z.sliding&&(Z.slideT-=k,Z.slideT<=0&&(Z.sliding=!1)),Z.jumpBuf>0&&Z.coyote>0&&(Z.vy=z*(l.holding?1:.6),Z.grounded=!1,Z.coyote=0,Z.jumpBuf=0,e.jump(),!l.reduced))for(let H=0;H<6;H++)l.parts.push({type:"dust",x:Z.x+t(-10,10),y:K,vx:t(-40,40),vy:t(-30,-5),life:0,max:t(.3,.6),size:t(3,7)});if(!Z.grounded&&l.holding&&Z.vy<0&&(Z.vy-=800*k),Z.vy+=rt*k,Z.vy=r(Z.vy,-800,900),Z.y+=Z.vy*k,Z.y>=K){if(!Z.grounded&&Z.vy>200&&!l.reduced)for(let H=0;H<4;H++)l.parts.push({type:"dust",x:Z.x+t(-8,8),y:K,vx:t(-30,30),vy:t(-15,-3),life:0,max:t(.2,.4),size:t(2,5)});Z.y=K,Z.vy=0,Z.grounded=!0}l.spawnT-=k,l.spawnT<=0&&($(),l.spawnT=r(t(1.5,2.2)-l.elapsed*.004,1,2.2));for(const H of l.obstacles)H.x-=tt*(H.type==="flyMan"?1.3:H.type==="wingMan"?1.15:1),H.animT=(H.animT||0)+k;l.obstacles=l.obstacles.filter(H=>H.x+H.w>-80);for(const H of l.coinsArr)H.x-=tt;l.coinsArr=l.coinsArr.filter(H=>H.x>-40&&!H.dead);for(const H of l.parts)H.life+=k,H.x+=H.vx*k,H.y+=H.vy*k,H.type==="dust"&&(H.vy+=300*k);if(l.parts=l.parts.filter(H=>H.life<H.max),l.invuln<=0){const H=Z.sliding?32:28,ht=Z.sliding?24:42,_t=Z.x-H/2,zt=Z.x+H/2,D=Z.y-ht,Kt=Z.y;for(const Bt of l.obstacles){const Xt=Bt.x,St=Bt.x+Bt.w,se=Bt.y-Bt.h,Tt=Bt.y;if(zt>Xt+4&&_t<St-4&&Kt>se+4&&D<Tt-4){N(Bt.type);return}}}for(const H of l.coinsArr){const ht=H.x-Z.x,_t=H.y-(Z.y-25);if(ht*ht+_t*_t<30*30&&(H.dead=!0,l.coins++,l.streak=Math.min(l.streak+1,8),l.streakT=2.2,e.collect(l.streak-1),!l.reduced))for(let zt=0;zt<6;zt++){const D=Math.random()*Math.PI*2,Kt=t(20,80);l.parts.push({type:"spark",x:H.x,y:H.y,vx:Math.cos(D)*Kt,vy:Math.sin(D)*Kt,life:0,max:t(.2,.5),size:t(3,6)})}}const ct=Math.floor(l.dist);ct!==l._d&&(l._d=ct,l.hudDist.textContent=ct),l.coins!==l._s&&(l._s=l.coins,l.hudCoins.textContent=l.coins);const dt=f(l.dist);dt!==l._r&&(l._r=dt,l.hudRealm.textContent=dt),e.setWind(.03+l.speed/580*.08)}function W(k,tt,Z,rt,z){k.complete&&k.naturalWidth>0&&g.drawImage(k,tt,Z,rt,z)}function j(k,tt,Z,rt){if(!k.complete||k.naturalWidth===0)return;const z=(rt||l.H)/k.naturalHeight,K=k.naturalWidth*z,ct=-(l.worldX*tt)%K;for(let dt=ct-K;dt<l.W+K;dt+=K)g.drawImage(k,dt,0,K,rt||l.H)}function q(){const k=l.player;g.clearRect(0,0,l.W,l.H);const tt=g.createLinearGradient(0,0,0,l.H);tt.addColorStop(0,"#87CEEB"),tt.addColorStop(.5,"#B8E0F0"),tt.addColorStop(1,"#E8F5E0"),g.fillStyle=tt,g.fillRect(0,0,l.W,l.H),j(n.bg1,.05,0,l.H),j(n.bg2,.12,0,l.H),j(n.bg3,.25,0,l.H),j(n.bg4,.45,0,l.H);for(const H of l.bgClouds){H.fx-=H.sp*.016,H.fx<-.3&&(H.fx=1.3);const ht=80*H.sc,_t=40*H.sc;g.globalAlpha=.5*H.sc,W(n.cloud,H.fx*l.W,H.fy*l.H,ht,_t),g.globalAlpha=1}const Z=48,rt=n.ground.complete&&n.ground.naturalWidth>0?n.ground.naturalWidth/n.ground.naturalHeight*Z:64,z=-l.worldX%rt;for(let H=z-rt;H<l.W+rt;H+=rt)W(n.ground,H,l.groundY,rt,Z);g.fillStyle="#5B8C3E",g.fillRect(0,l.groundY+Z,l.W,l.H-l.groundY-Z);const K=180,ct=-l.worldX%K;for(let H=ct-K;H<l.W+K;H+=K){const ht=Math.floor((H+l.worldX)/K),_t=ht%2===0?n.grass1:n.grass2,zt=20+ht%3*5;W(_t,H+ht%5*20,l.groundY-zt+4,24,zt)}for(const H of l.coinsArr){const ht=Math.sin(l.t*3+H.ph)*4,_t=20;g.save(),g.translate(H.x,H.y+ht),g.rotate(Math.sin(l.t*2+H.ph)*.2);const zt=g.createRadialGradient(0,0,2,0,0,_t);zt.addColorStop(0,"rgba(120,220,255,0.9)"),zt.addColorStop(.5,"rgba(60,180,240,0.5)"),zt.addColorStop(1,"rgba(30,140,220,0)"),g.fillStyle=zt,g.fillRect(-_t,-_t,_t*2,_t*2),g.beginPath(),g.moveTo(0,-_t*.6),g.lineTo(_t*.35,0),g.lineTo(0,_t*.6),g.lineTo(-_t*.35,0),g.closePath(),g.fillStyle="#40C8FF",g.fill(),g.strokeStyle="#80E0FF",g.lineWidth=1,g.stroke(),g.restore()}for(const H of l.obstacles){let ht;if(H.type==="spikeMan"){const _t=Math.floor(H.animT*6)%2;ht=n[H.frames[_t]]}else if(H.type==="flyMan")ht=n.flyMan;else if(H.type==="spikeBall"){ht=n.spikeBall,g.save(),g.translate(H.x+H.w/2,H.y-H.h/2),g.rotate(H.animT*H.rotSpd),W(ht,-H.w/2,-H.h/2,H.w,H.h),g.restore();continue}else if(H.type==="wingMan"){const _t=Math.floor(H.animT*8)%2;ht=n[H.frames[_t]]}ht&&W(ht,H.x,H.y-H.h,H.w,H.h)}for(const H of l.parts){const ht=1-H.life/H.max;g.globalAlpha=ht*.6,H.type==="dust"?(g.fillStyle="#B8A080",g.beginPath(),g.arc(H.x,H.y,H.size,0,Math.PI*2),g.fill()):H.type==="spark"&&(g.fillStyle="#60D0FF",g.beginPath(),g.arc(H.x,H.y,H.size,0,Math.PI*2),g.fill()),g.globalAlpha=1}if(!(l.invuln>0&&Math.floor(l.t*12)%2===0)||l.mode!=="playing"){let H;const ht=k.sliding?28:50,_t=k.sliding?44:40;l.mode==="over"?H=n.bunny_hurt:k.grounded?k.sliding?H=n.bunny_ready:H=Math.floor(l.animT*10)%2===0?n.bunny_walk1:n.bunny_walk2:H=n.bunny_jump,g.save(),k.sliding?(g.translate(k.x,k.y),g.scale(1,.6),W(H,-_t/2,-ht,_t,ht)):W(H,k.x-_t/2,k.y-ht,_t,ht),g.restore()}l.mode==="menu"&&(g.globalAlpha=.03,g.fillStyle="#FFF",g.fillRect(0,0,l.W,l.H),g.globalAlpha=1)}function ut(k){if(!l.running)return;const tt=Math.min((k-l.last)/1e3,.033);if(l.last=k,l.t+=tt,l.mode==="playing")X(tt);else{l.worldX+=25*tt,l.mode==="menu"&&(l.dist=(l.dist+10*tt)%6400);for(const Z of l.parts)Z.life+=tt,Z.x+=Z.vx*tt,Z.y+=Z.vy*tt,Z.type==="dust"&&(Z.vy+=300*tt);l.parts=l.parts.filter(Z=>Z.life<Z.max)}q(),l.raf=requestAnimationFrame(ut)}window.__runner={get G(){return l},startRun:()=>{l&&(e.init(),I())}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>c(u)):c(u)})();function Ky(){const r=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=window.innerWidth<=768;return t||e&&n}function Zy(){const r=document.createElement("div");return r.className="mc-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r),r}function Jy(){const r=document.querySelector("[data-minecraft]");if(!r)return;let t=null,e=null,n=null,i=null,s="desktop";function a(c){s=c;const l=c==="mobile";n.style.display="flex",i.style.display="none",n.classList.toggle("mc-mobile",l),n.classList.toggle("mc-desktop",!l);const u=n.querySelectorAll(".mc-tab-btn"),h=n.querySelector('[data-mode="3d"]'),p=n.querySelector('[data-mode="2d"]');l?(h.style.display="none",u.forEach(g=>g.classList.remove("active")),p.classList.add("active"),e.src="https://turbowarp.org/662310182/embed",n.querySelector("#mc-tips-content").textContent="触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角"):(h.style.display="",u.forEach(g=>g.classList.remove("active")),h.classList.add("active"),e.src="https://minecraft.kelvinzhang.ca",n.querySelector("#mc-tips-content").textContent="W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质");const _=n.querySelector(".mc-loader");_.style.display="flex",e.onload=()=>{_.style.display="none"}}function o(){if(t){if(t.classList.remove("open"),document.body.style.overflow="",document.fullscreenElement)try{document.exitFullscreen()}catch{}n.style.display="none",i.style.display="flex",i.querySelectorAll(".mc-device-btn").forEach(c=>c.classList.remove("selected")),e&&(e.src="about:blank")}}r.addEventListener("click",()=>{if(!t){t=Zy(),e=t.querySelector("#mc-frame"),n=t.querySelector("#mc-container"),i=t.querySelector("#mc-device-select"),i.querySelectorAll(".mc-device-btn").forEach(h=>{h.addEventListener("click",()=>{i.querySelectorAll(".mc-device-btn").forEach(p=>p.classList.remove("selected")),h.classList.add("selected"),setTimeout(()=>a(h.dataset.device),300)})});const u=n.querySelectorAll(".mc-tab-btn");u.forEach(h=>{h.addEventListener("click",()=>{if(h.classList.contains("active")||s==="mobile"&&h.dataset.mode==="3d")return;u.forEach(g=>g.classList.remove("active")),h.classList.add("active");const p=h.dataset.mode,_=n.querySelector(".mc-loader");_.style.display="flex",p==="3d"?(e.src="https://minecraft.kelvinzhang.ca",n.querySelector("#mc-tips-content").textContent="W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质"):(e.src="https://turbowarp.org/662310182/embed",n.querySelector("#mc-tips-content").textContent=s==="mobile"?"触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角":"W/A/S/D/方向键移动 · 鼠标点击挖掘/放置 · 1-9 工具切换 · E 打开背包"),e.onload=()=>{_.style.display="none"}})}),n.querySelector(".mc-close-btn").addEventListener("click",o),n.querySelector(".mc-fullscreen-btn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch(h=>console.error("Fullscreen failed:",h))})}const c=Ky(),l=i.querySelector(`[data-device="${c?"mobile":"desktop"}"]`);l&&l.classList.add("recommended"),n.style.display="none",i.style.display="flex",e.src="about:blank",t.classList.add("open"),document.body.style.overflow="hidden"}),window.addEventListener("keydown",c=>{c.key==="Escape"&&t&&t.classList.contains("open")&&o()})}function Qy(){if("IntersectionObserver"in window){const r=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("is-visible")})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".section-card, .note-card, .path-item, .explore-header").forEach(t=>{t.classList.add("reveal"),r.observe(t)})}}function tM(){window.matchMedia("(pointer: coarse)").matches||document.querySelectorAll(".tilt-card, .section-card, .note-card, .path-item").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,s=n/e.width-.5,a=i/e.height-.5;r.style.transform=`perspective(1000px) rotateY(${s*6}deg) rotateX(${-a*6}deg) translateZ(6px)`}),r.addEventListener("mouseleave",()=>{r.style.transform=""})})}function eM(){const r=document.createElement("div");r.className="scroll-ink",r.setAttribute("aria-hidden","true"),document.body.appendChild(r),window.addEventListener("scroll",()=>{const t=document.documentElement,e=t.scrollTop||document.body.scrollTop,n=t.scrollHeight-t.clientHeight;r.style.width=(n?e/n*100:0)+"%"},{passive:!0})}function nM(){const r=document.getElementById("inkLoader");r&&(document.readyState==="complete"?setTimeout(()=>r.classList.add("loaded"),600):window.addEventListener("load",()=>{setTimeout(()=>r.classList.add("loaded"),300)}))}async function iM(){Uv(document.getElementById("bg-image"));const r=await ey(),t=document.getElementById("hitokotoQuote");t&&rM(t,r.intro.quote||"清风不识字，何故乱翻书。"),document.querySelector(".intro-subtitle").textContent=r.intro.subtitle,document.querySelector(".intro-desc").textContent=r.intro.desc,document.title=r.site.title;const e=document.getElementById("webgl-bg"),n=document.getElementById("cursor-aura");let i=null,s=null,a=null,o=null;if(!Ec())try{i=new Rv(e),s=new Pv(i.scene,{count:ed()?3:6}),ed()||(a=new Lv(n));const c=new rc,l=()=>{const u=c.getElapsedTime(),h=window.scrollY/(document.body.scrollHeight-window.innerHeight);i.animate(),s&&s.update(u,h),o=requestAnimationFrame(l)};l()}catch(c){console.warn("WebGL effects unavailable, falling back to static content:",c),e.style.background="radial-gradient(ellipse at center, #1a1f18 0%, #0c0f0a 100%)"}return ty(r.intro),ny(),sM(),hy(),gy(),xy(),Ty(),Ny(),Oy(),Fy(),jy(),Jy(),aM(),oM(),lM(),Qy(),tM(),eM(),nM(),yy(),My(document.getElementById("statsBar")),()=>{o&&cancelAnimationFrame(o),i&&i.destroy(),a&&a.destroy()}}async function rM(r,t){try{const e=await fetch("https://v1.hitokoto.cn");if(!e.ok)throw new Error("Hitokoto API error");const n=await e.json();n&&n.hitokoto&&(r.textContent=n.hitokoto)}catch(e){console.warn("Hitokoto load failed:",e),r.textContent=t}}function sM(){const r=document.querySelectorAll(".ios-nav-tab");document.querySelectorAll(".page");const t=document.getElementById("iosNavTrack");function e(i){if(!t||!i)return;const a=i.parentElement.getBoundingClientRect(),o=i.getBoundingClientRect(),c=o.left-a.left-4;t.style.width=o.width+"px",t.style.transform=`translateX(${c}px)`,t.style.opacity="0.9"}r.forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.page,a=document.getElementById(`page-${s}`),o=document.querySelector(".page.active");!a||a===o||(r.forEach(c=>c.classList.remove("active")),i.classList.add("active"),e(i),o?(o.classList.add("leaving"),o.addEventListener("animationend",function c(){o.removeEventListener("animationend",c),o.classList.remove("active","leaving"),a.classList.add("active"),window.scrollTo({top:0,behavior:"smooth"})},{once:!0})):(a.classList.add("active"),window.scrollTo({top:0,behavior:"smooth"})))})});const n=document.querySelector(".ios-nav-tab.active");requestAnimationFrame(()=>e(n)),window.addEventListener("resize",()=>{e(document.querySelector(".ios-nav-tab.active"))},{passive:!0})}function aM(){document.querySelectorAll(".note-card").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect();r.style.setProperty("--mx",(t.clientX-e.left)/e.width*100+"%"),r.style.setProperty("--my",(t.clientY-e.top)/e.height*100+"%")})})}function oM(){const r=document.querySelectorAll(".code-quote-card");if(!r.length)return;const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("in-view"),t.unobserve(n.target))})},{threshold:.2,rootMargin:"0px 0px -10% 0px"});r.forEach(e=>t.observe(e))}function lM(){const r=document.querySelector(".pricing-card"),t=document.querySelector(".pricing-stage");!r||!t||window.matchMedia("(pointer: coarse)").matches||(t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=(n.clientX-i.left)/i.width-.5,a=(n.clientY-i.top)/i.height-.5;r.style.transform=`rotateY(${s*12}deg) rotateX(${-a*12}deg)`}),t.addEventListener("mouseleave",()=>{r.style.transform=""}))}iM().catch(r=>{console.error("Failed to initialize app:",r)});
//# sourceMappingURL=index-CMonJoYm.js.map
