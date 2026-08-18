(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="170",di={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,vo=1,pc=2,Aa=1,Ca=2,cn=3,fn=0,De=1,ln=2,An=0,ui=1,xs=2,xo=3,Mo=4,mc=5,On=100,gc=101,_c=102,vc=103,xc=104,Mc=200,yc=201,Ec=202,Sc=203,ar=204,cr=205,wc=206,bc=207,Tc=208,Ac=209,Cc=210,Rc=211,Pc=212,Lc=213,Dc=214,lr=0,hr=1,dr=2,mi=3,ur=4,fr=5,pr=6,mr=7,Ra=0,Ic=1,Bc=2,Cn=0,Uc=1,Nc=2,Fc=3,Pa=4,kc=5,Oc=6,zc=7,La=300,gi=301,_i=302,gr=303,_r=304,ws=306,Fi=1e3,Gn=1001,vr=1002,$e=1003,Gc=1004,Vi=1005,ze=1006,Rs=1007,Hn=1008,pn=1009,Da=1010,Ia=1011,ki=1012,Yr=1013,Vn=1014,hn=1015,Oi=1016,$r=1017,Jr=1018,vi=1020,Ba=35902,Ua=1021,Na=1022,Ye=1023,Fa=1024,ka=1025,fi=1026,xi=1027,Oa=1028,Kr=1029,za=1030,Zr=1031,Qr=1033,fs=33776,ps=33777,ms=33778,gs=33779,xr=35840,Mr=35841,yr=35842,Er=35843,Sr=36196,wr=37492,br=37496,Tr=37808,Ar=37809,Cr=37810,Rr=37811,Pr=37812,Lr=37813,Dr=37814,Ir=37815,Br=37816,Ur=37817,Nr=37818,Fr=37819,kr=37820,Or=37821,_s=36492,zr=36494,Gr=36495,Ga=36283,Hr=36284,Vr=36285,Wr=36286,Hc=3200,Vc=3201,Ha=0,Wc=1,bn="",Oe="srgb",Ei="srgb-linear",bs="linear",se="srgb",Yn=7680,yo=519,Xc=512,qc=513,jc=514,Va=515,Yc=516,$c=517,Jc=518,Kc=519,Eo=35044,So="300 es",dn=2e3,Ms=2001;class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wo=1234567;const Ui=Math.PI/180,Mi=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function to(i,t){return(i%t+t)%t}function Zc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qc(i,t,e){return i!==t?(e-i)/(t-i):0}function Ni(i,t,e){return(1-e)*i+e*t}function tl(i,t,e,n){return Ni(i,t,1-Math.exp(-e*n))}function el(i,t=1){return t-Math.abs(to(i,t*2)-t)}function nl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function il(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rl(i,t){return i+Math.random()*(t-i)}function ol(i){return i*(.5-Math.random())}function al(i){i!==void 0&&(wo=i);let t=wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cl(i){return i*Ui}function ll(i){return i*Mi}function hl(i){return(i&i-1)===0&&i!==0}function dl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fl(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*d,c*u,a*h);break;case"YZY":i.set(c*u,a*l,c*d,a*h);break;case"ZXZ":i.set(c*d,c*u,a*l,a*h);break;case"XZX":i.set(a*l,c*g,c*p,a*h);break;case"YXY":i.set(c*p,a*l,c*g,a*h);break;case"ZYZ":i.set(c*g,c*p,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wa={DEG2RAD:Ui,RAD2DEG:Mi,generateUUID:Si,clamp:Me,euclideanModulo:to,mapLinear:Zc,inverseLerp:Qc,lerp:Ni,damp:tl,pingpong:el,smoothstep:nl,smootherstep:il,randInt:sl,randFloat:rl,randFloatSpread:ol,seededRandom:al,degToRad:cl,radToDeg:ll,isPowerOfTwo:hl,ceilPowerOfTwo:dl,floorPowerOfTwo:ul,setQuaternionFromProperEuler:fl,normalize:be,denormalize:ci};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,c,h){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],b=s[4],y=s[7],B=s[2],T=s[5],A=s[8];return r[0]=o*_+a*w+c*B,r[3]=o*m+a*b+c*T,r[6]=o*f+a*y+c*A,r[1]=h*_+l*w+d*B,r[4]=h*m+l*b+d*T,r[7]=h*f+l*y+d*A,r[2]=u*_+p*w+g*B,r[5]=u*m+p*b+g*T,r[8]=u*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],d=l*o-a*h,u=a*c-l*r,p=h*r-o*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-l*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(l*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Ht;function Xa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pl(){const i=ys("canvas");return i.style.display="block",i}const bo={};function Ii(i){i in bo||(bo[i]=!0,console.warn(i))}function ml(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _l(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=un(i.r),i.g=un(i.g),i.b=un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?bs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const To=[.64,.33,.3,.6,.15,.06],Ao=[.2126,.7152,.0722],Co=[.3127,.329],Ro=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ei]:{primaries:To,whitePoint:Co,transfer:bs,toXYZ:Ro,fromXYZ:Po,luminanceCoefficients:Ao,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:To,whitePoint:Co,transfer:se,toXYZ:Ro,fromXYZ:Po,luminanceCoefficients:Ao,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let $n;class vl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=ys("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xl=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ls(s[o].image)):r.push(Ls(s[o]))}else r=Ls(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ml=0;class Ae extends qn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Gn,s=Gn,r=ze,o=Hn,a=Ye,c=pn,h=Ae.DEFAULT_ANISOTROPY,l=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=Si(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==La)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=La;Ae.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,y=(p+1)/2,B=(f+1)/2,T=(l+u)/4,A=(d+_)/4,R=(g+m)/4;return b>y&&b>B?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=A/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=R/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=A/r,s=R/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-l)*(u-l));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-l)/w,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yl extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ja extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class El extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],d=n[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||h!==p||l!==g){let m=1-a;const f=c*u+h*p+l*g+d*_,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const B=Math.sqrt(b),T=Math.atan2(B,f*w);m=Math.sin(m*T)/B,a=Math.sin(a*T)/B}const y=a*w;if(c=c*m+u*y,h=h*m+p*y,l=l*m+g*y,d=d*m+_*y,m===1-a){const B=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=B,h*=B,l*=B,d*=B}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+l*d+c*p-h*u,t[e+1]=c*g+l*u+h*d-a*p,t[e+2]=h*g+l*p+a*u-c*d,t[e+3]=l*g-a*d-c*u-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*l*d+h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d-u*p*g;break;case"YXZ":this._x=u*l*d+h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d+u*p*g;break;case"ZXY":this._x=u*l*d-h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d-u*p*g;break;case"ZYX":this._x=u*l*d-h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d+u*p*g;break;case"YZX":this._x=u*l*d+h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d-u*p*g;break;case"XZY":this._x=u*l*d-h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(l-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),d=Math.sin((1-e)*l)/h,u=Math.sin(e*l)/h;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),l=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*h+o*d-a*l,this.y=n+c*l+a*h-r*d,this.z=s+c*d+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new D,Lo=new Xn;class zi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),Xi.subVectors(this.max,Ci),Jn.subVectors(t.a,Ci),Kn.subVectors(t.b,Ci),Zn.subVectors(t.c,Ci),_n.subVectors(Kn,Jn),vn.subVectors(Zn,Kn),Ln.subVectors(Jn,Zn);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!Is(e,Jn,Kn,Zn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,Jn,Kn,Zn,Xi))?!1:(qi.crossVectors(_n,vn),e=[qi.x,qi.y,qi.z],Is(e,Jn,Kn,Zn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new D,new D,new D,new D,new D,new D,new D,new D],We=new D,Wi=new zi,Jn=new D,Kn=new D,Zn=new D,_n=new D,vn=new D,Ln=new D,Ci=new D,Xi=new D,qi=new D,Dn=new D;function Is(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Dn.fromArray(i,r);const a=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=t.dot(Dn),h=e.dot(Dn),l=n.dot(Dn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const Sl=new zi,Ri=new D,Bs=new D;class Ts{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ri,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Bs)),this.expandByPoint(Ri.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new D,Us=new D,ji=new D,xn=new D,Ns=new D,Yi=new D,Fs=new D;class eo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Us.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Us);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=xn.dot(this.direction),c=-xn.dot(ji),h=xn.lengthSq(),l=Math.abs(1-o*o);let d,u,p,g;if(l>0)if(d=o*c-a,u=o*a-c,g=r*l,d>=0)if(u>=-g)if(u<=g){const _=1/l;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+h}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+h;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Us).addScaledVector(ji,u),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,o=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,o=(t.min.y-u.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){Ns.subVectors(e,t),Yi.subVectors(n,t),Fs.crossVectors(Ns,Yi);let o=this.direction.dot(Fs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);const c=a*this.direction.dot(Yi.crossVectors(xn,Yi));if(c<0)return null;const h=a*this.direction.dot(Ns.cross(xn));if(h<0||c+h>o)return null;const l=-a*xn.dot(Fs);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,o,a,c,h,l,d,u,p,g,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,l,d,u,p,g,_,m)}set(t,e,n,s,r,o,a,c,h,l,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),o=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*l,p=o*d,g=a*l,_=a*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=p+g*h,e[5]=u-_*h,e[9]=-a*c,e[2]=_-u*h,e[6]=g+p*h,e[10]=o*c}else if(t.order==="YXZ"){const u=c*l,p=c*d,g=h*l,_=h*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*h,e[1]=o*d,e[5]=o*l,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*l,p=c*d,g=h*l,_=h*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*l,e[9]=_-u*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*l,p=o*d,g=a*l,_=a*d;e[0]=c*l,e[4]=g*h-p,e[8]=u*h+_,e[1]=c*d,e[5]=_*h+u,e[9]=p*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*h,g=a*c,_=a*h;e[0]=c*l,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,p=o*h,g=a*c,_=a*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+_,e[5]=o*l,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*l,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wl,t,bl)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Mn.crossVectors(n,Be),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Mn.crossVectors(n,Be)),Mn.normalize(),$i.crossVectors(Be,Mn),s[0]=Mn.x,s[4]=$i.x,s[8]=Be.x,s[1]=Mn.y,s[5]=$i.y,s[9]=Be.y,s[2]=Mn.z,s[6]=$i.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],b=n[7],y=n[11],B=n[15],T=s[0],A=s[4],R=s[8],E=s[12],M=s[1],P=s[5],O=s[9],z=s[13],H=s[2],$=s[6],X=s[10],Q=s[14],G=s[3],et=s[7],st=s[11],dt=s[15];return r[0]=o*T+a*M+c*H+h*G,r[4]=o*A+a*P+c*$+h*et,r[8]=o*R+a*O+c*X+h*st,r[12]=o*E+a*z+c*Q+h*dt,r[1]=l*T+d*M+u*H+p*G,r[5]=l*A+d*P+u*$+p*et,r[9]=l*R+d*O+u*X+p*st,r[13]=l*E+d*z+u*Q+p*dt,r[2]=g*T+_*M+m*H+f*G,r[6]=g*A+_*P+m*$+f*et,r[10]=g*R+_*O+m*X+f*st,r[14]=g*E+_*z+m*Q+f*dt,r[3]=w*T+b*M+y*H+B*G,r[7]=w*A+b*P+y*$+B*et,r[11]=w*R+b*O+y*X+B*st,r[15]=w*E+b*z+y*Q+B*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-s*h*d-r*a*u+n*h*u+s*a*p-n*c*p)+_*(+e*c*p-e*h*u+r*o*u-s*o*p+s*h*l-r*c*l)+m*(+e*h*d-e*a*p-r*o*d+n*o*p+r*a*l-n*h*l)+f*(-s*a*l-e*c*d+e*a*u+s*o*d-n*o*u+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],w=d*m*h-_*u*h+_*c*p-a*m*p-d*c*f+a*u*f,b=g*u*h-l*m*h-g*c*p+o*m*p+l*c*f-o*u*f,y=l*_*h-g*d*h+g*a*p-o*_*p-l*a*f+o*d*f,B=g*d*c-l*_*c-g*a*u+o*_*u+l*a*m-o*d*m,T=e*w+n*b+s*y+r*B;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=w*A,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*A,t[2]=(a*m*r-_*c*r+_*s*h-n*m*h-a*s*f+n*c*f)*A,t[3]=(d*c*r-a*u*r-d*s*h+n*u*h+a*s*p-n*c*p)*A,t[4]=b*A,t[5]=(l*m*r-g*u*r+g*s*p-e*m*p-l*s*f+e*u*f)*A,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*f-e*c*f)*A,t[7]=(o*u*r-l*c*r+l*s*h-e*u*h-o*s*p+e*c*p)*A,t[8]=y*A,t[9]=(g*d*r-l*_*r-g*n*p+e*_*p+l*n*f-e*d*f)*A,t[10]=(o*_*r-g*a*r+g*n*h-e*_*h-o*n*f+e*a*f)*A,t[11]=(l*a*r-o*d*r-l*n*h+e*d*h+o*n*p-e*a*p)*A,t[12]=B*A,t[13]=(l*_*s-g*d*s+g*n*u-e*_*u-l*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-l*a*s+l*n*c-e*d*c-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,d=a+a,u=r*h,p=r*l,g=r*d,_=o*l,m=o*d,f=a*d,w=c*h,b=c*l,y=c*d,B=n.x,T=n.y,A=n.z;return s[0]=(1-(_+f))*B,s[1]=(p+y)*B,s[2]=(g-b)*B,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+b)*A,s[9]=(m-w)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const o=Qn.set(s[4],s[5],s[6]).length(),a=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const h=1/r,l=1/o,d=1/a;return Xe.elements[0]*=h,Xe.elements[1]*=h,Xe.elements[2]*=h,Xe.elements[4]*=l,Xe.elements[5]*=l,Xe.elements[6]*=l,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=dn){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(a===dn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ms)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=dn){const c=this.elements,h=1/(e-t),l=1/(n-s),d=1/(o-r),u=(e+t)*h,p=(n+s)*l;let g,_;if(a===dn)g=(o+r)*d,_=-2*d;else if(a===Ms)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new D,Xe=new Zt,wl=new D(0,0,0),bl=new D(1,1,1),Mn=new D,$i=new D,Be=new D,Do=new Zt,Io=new Xn;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tl=0;const Bo=new D,ti=new Xn,rn=new Zt,Ji=new D,Pi=new D,Al=new D,Cl=new Xn,Uo=new D(1,0,0),No=new D(0,1,0),Fo=new D(0,0,1),ko={type:"added"},Rl={type:"removed"},ei={type:"childadded",child:null},ks={type:"childremoved",child:null};class ye extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new D,e=new Qe,n=new Xn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Bo.copy(t).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Pi,Ji,this.up):rn.lookAt(Ji,Pi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rl),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,Al),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Cl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new D(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new D,on=new D,Os=new D,an=new D,ni=new D,ii=new D,Oo=new D,zs=new D,Gs=new D,Hs=new D,Vs=new oe,Ws=new oe,Xs=new oe;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),on.subVectors(n,e),Os.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(on),c=qe.dot(Os),h=on.dot(on),l=on.dot(Os),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(h*c-a*l)*u,g=(o*l-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Vs.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,n),Xs.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vs,r.x),o.addScaledVector(Ws,r.y),o.addScaledVector(Xs,r.z),o}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),on.subVectors(t,e),qe.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),qe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ni.subVectors(s,n),ii.subVectors(r,n),zs.subVectors(t,n);const c=ni.dot(zs),h=ii.dot(zs);if(c<=0&&h<=0)return e.copy(n);Gs.subVectors(t,s);const l=ni.dot(Gs),d=ii.dot(Gs);if(l>=0&&d<=l)return e.copy(s);const u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(ni,o);Hs.subVectors(t,r);const p=ni.dot(Hs),g=ii.dot(Hs);if(g>=0&&p<=g)return e.copy(r);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(ii,a);const m=l*g-p*d;if(m<=0&&d-l>=0&&p-g>=0)return Oo.subVectors(r,s),a=(d-l)/(d-l+(p-g)),e.copy(s).addScaledVector(Oo,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=to(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qs(o,r,t+1/3),this.g=qs(o,r,t),this.b=qs(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Jt.fromWorkingColorSpace(we.copy(this),t),Math.round(Me(we.r*255,0,255))*65536+Math.round(Me(we.g*255,0,255))*256+Math.round(Me(we.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,h;const l=(a+o)/2;if(a===o)c=0,h=0;else{const d=o-a;switch(h=l<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Oe){Jt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(Ki);const n=Ni(yn.h,Ki.h,e),s=Ni(yn.s,Ki.s,e),r=Ni(yn.l,Ki.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Xt;Xt.NAMES=$a;let Pl=0;class wi extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Si(),this.name="",this.blending=ui,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=cr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ar&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yt extends wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,Zi=new Nt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eo&&(t.usage=this.usage),t}}class Ja extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ka extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ll=0;const ke=new Zt,js=new ye,si=new D,Ue=new zi,Li=new zi,xe=new D;class Ce extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xa(t)?Ka:Ja)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ue.min,Li.min),Ue.expandByPoint(xe),xe.addVectors(Ue.max,Li.max),Ue.expandByPoint(xe)):(Ue.expandByPoint(Li.min),Ue.expandByPoint(Li.max))}Ue.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)xe.fromBufferAttribute(a,h),c&&(si.fromBufferAttribute(t,h),xe.add(si)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const h=new D,l=new D,d=new D,u=new Nt,p=new Nt,g=new Nt,_=new D,m=new D;function f(R,E,M){h.fromBufferAttribute(n,R),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),l.sub(h),d.sub(h),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(P),a[R].add(_),a[E].add(_),a[M].add(_),c[R].add(m),c[E].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,E=w.length;R<E;++R){const M=w[R],P=M.start,O=M.count;for(let z=P,H=P+O;z<H;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new D,y=new D,B=new D,T=new D;function A(R){B.fromBufferAttribute(s,R),T.copy(B);const E=a[R];b.copy(E),b.sub(B.multiplyScalar(B.dot(E))).normalize(),y.crossVectors(T,E);const P=y.dot(c[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,P)}for(let R=0,E=w.length;R<E;++R){const M=w[R],P=M.start,O=M.count;for(let z=P,H=P+O;z<H;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,h=new D,l=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),l.subVectors(o,r),d.subVectors(s,r),l.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),l.subVectors(o,r),d.subVectors(s,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const h=a.array,l=a.itemSize,d=a.normalized,u=new h.constructor(c.length*l);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*l;for(let f=0;f<l;f++)u[g++]=h[p++]}return new Ge(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=t(c,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let l=0,d=h.length;l<d;l++){const u=h[l],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){const p=h[d];l.push(p.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],d=r[h];for(let u=0,p=d.length;u<p;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,l=o.length;h<l;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new Zt,In=new eo,Qi=new Ts,Go=new D,ts=new D,es=new D,ns=new D,Ys=new D,is=new D,Ho=new D,ss=new D;class C extends ye{constructor(t=new Ce,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){is.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=a[c],d=r[c];l!==0&&(Ys.fromBufferAttribute(d,t),o?is.addScaledVector(Ys,l):is.addScaledVector(Ys.sub(e),l))}e.add(is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(Qi.containsPoint(In.origin)===!1&&(In.intersectSphere(Qi,Go)===null||In.origin.distanceToSquared(Go)>(t.far-t.near)**2))&&(zo.copy(r).invert(),In.copy(t.ray).applyMatrix4(zo),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,B=b;y<B;y+=3){const T=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);s=rs(this,f,t,n,h,l,d,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=rs(this,o,t,n,h,l,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,B=b;y<B;y+=3){const T=y,A=y+1,R=y+2;s=rs(this,f,t,n,h,l,d,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,b=m+1,y=m+2;s=rs(this,o,t,n,h,l,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Dl(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===fn,a),c===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ss);return h<e.near||h>e.far?null:{distance:h,point:ss.clone(),object:i}}function rs(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,ts),i.getVertexPosition(c,es),i.getVertexPosition(h,ns);const l=Dl(i,t,e,n,ts,es,ns,Ho);if(l){const d=new D;je.getBarycoord(Ho,ts,es,ns,d),s&&(l.uv=je.getInterpolatedAttribute(s,a,c,h,d,new Nt)),r&&(l.uv1=je.getInterpolatedAttribute(r,a,c,h,d,new Nt)),o&&(l.normal=je.getInterpolatedAttribute(o,a,c,h,d,new D),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:c,c:h,normal:new D,materialIndex:0};je.getNormal(ts,es,ns,u.normal),l.face=u,l.barycoord=d}return l}class q extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],l=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(d,2));function g(_,m,f,w,b,y,B,T,A,R,E){const M=y/A,P=B/R,O=y/2,z=B/2,H=T/2,$=A+1,X=R+1;let Q=0,G=0;const et=new D;for(let st=0;st<X;st++){const dt=st*P-z;for(let Rt=0;Rt<$;Rt++){const Ot=Rt*M-O;et[_]=Ot*w,et[m]=dt*b,et[f]=H,h.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[f]=T>0?1:-1,l.push(et.x,et.y,et.z),d.push(Rt/A),d.push(1-st/R),Q+=1}}for(let st=0;st<R;st++)for(let dt=0;dt<A;dt++){const Rt=u+dt+$*st,Ot=u+dt+$*(st+1),Y=u+(dt+1)+$*(st+1),j=u+(dt+1)+$*st;c.push(Rt,Ot,j),c.push(Ot,Y,j),G+=6}a.addGroup(p,G,E),p+=G,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=yi(i[e]);for(const s in n)t[s]=n[s]}return t}function Il(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Za(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Bl={clone:yi,merge:Te};var Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Il(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qa extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new D,Vo=new Nt,Wo=new Nt;class Le extends Qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Wo),e.subVectors(Wo,Vo)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,oi=1;class Fl extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(ri,oi,t,e);s.layers=this.layers,this.add(s);const r=new Le(ri,oi,t,e);r.layers=this.layers,this.add(r);const o=new Le(ri,oi,t,e);o.layers=this.layers,this.add(o);const a=new Le(ri,oi,t,e);a.layers=this.layers,this.add(a);const c=new Le(ri,oi,t,e);c.layers=this.layers,this.add(c);const h=new Le(ri,oi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const h of e)this.remove(h);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tc extends Ae{constructor(t,e,n,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new q(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:An});r.uniforms.tEquirect.value=e;const o=new C(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=ze),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const $s=new D,Ol=new D,zl=new Ht;class wn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$s.subVectors(n,e).cross(Ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zl.getNormalMatrix(t),s=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Ts,os=new D;class no{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],w=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-r,u-h,m-p,y-f).normalize(),n[1].setComponents(c+r,u+h,m+p,y+f).normalize(),n[2].setComponents(c+o,u+l,m+g,y+w).normalize(),n[3].setComponents(c-o,u-l,m-g,y-w).normalize(),n[4].setComponents(c-a,u-d,m-_,y-b).normalize(),e===dn)n[5].setComponents(c+a,u+d,m+_,y+b).normalize();else if(e===Ms)n[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(os.x=s.normal.x>0?t.max.x:t.min.x,os.y=s.normal.y>0?t.max.y:t.min.y,os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gl(i){const t=new WeakMap;function e(a,c){const h=a.array,l=a.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,h,l),a.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,h){const l=c.array,d=c.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,l);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}class ge extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,d=t/a,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<l;f++){const w=f*u-o;for(let b=0;b<h;b++){const y=b*d-r;g.push(y,-w,0),_.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const b=w+h*f,y=w+h*(f+1),B=w+1+h*(f+1),T=w+1+h*f;p.push(b,y,T),p.push(y,B,T)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vl=`#ifdef USE_ALPHAHASH
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
#endif`,Wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ql=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yl=`#ifdef USE_AOMAP
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
#endif`,$l=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jl=`#ifdef USE_BATCHING
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
#endif`,Kl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eh=`#ifdef USE_IRIDESCENCE
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
#endif`,nh=`#ifdef USE_BUMPMAP
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
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dh=`#define PI 3.141592653589793
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
} // validated`,uh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fh=`vec3 transformedNormal = objectNormal;
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
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rh=`#ifdef USE_GRADIENTMAP
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
}`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
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
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
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
#endif`,zh=`struct PhysicalMaterial {
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
}`,Gh=`
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
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,Yd=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$d=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
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
}`,tu=`uniform vec3 diffuse;
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
}`,eu=`#include <common>
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
}`,nu=`uniform vec3 diffuse;
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
}`,iu=`#define LAMBERT
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
}`,su=`#define LAMBERT
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
}`,ru=`#define MATCAP
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
}`,ou=`#define MATCAP
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
}`,au=`#define NORMAL
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
}`,cu=`#define NORMAL
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
}`,lu=`#define PHONG
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
}`,hu=`#define PHONG
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
}`,du=`#define STANDARD
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
}`,uu=`#define STANDARD
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
}`,fu=`#define TOON
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
}`,pu=`#define TOON
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
}`,mu=`uniform float size;
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
}`,gu=`uniform vec3 diffuse;
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
}`,_u=`#include <common>
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
}`,vu=`uniform vec3 color;
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
}`,xu=`uniform float rotation;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Hl,alphahash_pars_fragment:Vl,alphamap_fragment:Wl,alphamap_pars_fragment:Xl,alphatest_fragment:ql,alphatest_pars_fragment:jl,aomap_fragment:Yl,aomap_pars_fragment:$l,batching_pars_vertex:Jl,batching_vertex:Kl,begin_vertex:Zl,beginnormal_vertex:Ql,bsdfs:th,iridescence_fragment:eh,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:oh,color_fragment:ah,color_pars_fragment:ch,color_pars_vertex:lh,color_vertex:hh,common:dh,cube_uv_reflection_fragment:uh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:vh,colorspace_pars_fragment:xh,envmap_fragment:Mh,envmap_common_pars_fragment:yh,envmap_pars_fragment:Eh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Bh,envmap_vertex:wh,fog_vertex:bh,fog_pars_vertex:Th,fog_fragment:Ah,fog_pars_fragment:Ch,gradientmap_pars_fragment:Rh,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Ih,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:kh,lights_physical_fragment:Oh,lights_physical_pars_fragment:zh,lights_fragment_begin:Gh,lights_fragment_maps:Hh,lights_fragment_end:Vh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:jh,map_fragment:Yh,map_pars_fragment:$h,map_particle_fragment:Jh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Qh,morphinstance_vertex:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:od,normal_pars_fragment:ad,normal_pars_vertex:cd,normal_vertex:ld,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:xd,dithering_pars_fragment:Md,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:wd,shadowmap_vertex:bd,shadowmask_pars_fragment:Td,skinbase_vertex:Ad,skinning_pars_vertex:Cd,skinning_vertex:Rd,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Id,tonemapping_pars_fragment:Bd,transmission_fragment:Ud,transmission_pars_fragment:Nd,uv_pars_fragment:Fd,uv_pars_vertex:kd,uv_vertex:Od,worldpos_vertex:zd,background_vert:Gd,background_frag:Hd,backgroundCube_vert:Vd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:jd,depth_frag:Yd,distanceRGBA_vert:$d,distanceRGBA_frag:Jd,equirect_vert:Kd,equirect_frag:Zd,linedashed_vert:Qd,linedashed_frag:tu,meshbasic_vert:eu,meshbasic_frag:nu,meshlambert_vert:iu,meshlambert_frag:su,meshmatcap_vert:ru,meshmatcap_frag:ou,meshnormal_vert:au,meshnormal_frag:cu,meshphong_vert:lu,meshphong_frag:hu,meshphysical_vert:du,meshphysical_frag:uu,meshtoon_vert:fu,meshtoon_frag:pu,points_vert:mu,points_frag:gu,shadow_vert:_u,shadow_frag:vu,sprite_vert:xu,sprite_frag:Mu},ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Ze={basic:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Te([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Te([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Te([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Te([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Te([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Te([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Te([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Te([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Te([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Te([ht.lights,ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Ze.physical={uniforms:Te([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const as={r:0,b:0,g:0},Un=new Qe,yu=new Zt;function Eu(i,t,e,n,s,r,o){const a=new Xt(0);let c=r===!0?0:1,h,l,d=null,u=0,p=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function _(w){let b=!1;const y=g(w);y===null?f(a,c):y&&y.isColor&&(f(y,1),b=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===ws)?(l===void 0&&(l=new C(new q(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:yi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(B,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Un.copy(b.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yu.makeRotationFromEuler(Un)),l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==se,(d!==y||u!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new C(new ge(2,2),new Rn({name:"BackgroundMaterial",uniforms:yi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,b){w.getRGB(as,Za(i)),n.buffers.color.setClear(as.r,as.g,as.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:_,addToRenderList:m}}function Su(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(M,P,O,z,H){let $=!1;const X=d(z,O,P);r!==X&&(r=X,h(r.object)),$=p(M,z,O,H),$&&g(M,z,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(M,P,O,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function l(M){return i.deleteVertexArray(M)}function d(M,P,O){const z=O.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let $=H[P.id];$===void 0&&($={},H[P.id]=$);let X=$[z];return X===void 0&&(X=u(c()),$[z]=X),X}function u(M){const P=[],O=[],z=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,P,O,z){const H=r.attributes,$=P.attributes;let X=0;const Q=O.getAttributes();for(const G in Q)if(Q[G].location>=0){const st=H[G];let dt=$[G];if(dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,P,O,z){const H={},$=P.attributes;let X=0;const Q=O.getAttributes();for(const G in Q)if(Q[G].location>=0){let st=$[G];st===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),H[G]=dt,X++}r.attributes=H,r.attributesNum=X,r.index=z}function _(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const O=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;O[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),H[M]!==P&&(i.vertexAttribDivisor(M,P),H[M]=P)}function w(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==M[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function b(M,P,O,z,H,$,X){X===!0?i.vertexAttribIPointer(M,P,O,H,$):i.vertexAttribPointer(M,P,O,z,H,$)}function y(M,P,O,z){_();const H=z.attributes,$=O.getAttributes(),X=P.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let et=H[Q];if(et===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const st=et.normalized,dt=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;const Ot=Rt.buffer,Y=Rt.type,j=Rt.bytesPerElement,rt=Y===i.INT||Y===i.UNSIGNED_INT||et.gpuType===Yr;if(et.isInterleavedBufferAttribute){const tt=et.data,ut=tt.stride,Et=et.offset;if(tt.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)f(G.location+It,tt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let It=0;It<G.locationSize;It++)m(G.location+It);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let It=0;It<G.locationSize;It++)b(G.location+It,dt/G.locationSize,Y,st,ut*j,(Et+dt/G.locationSize*It)*j,rt)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)f(G.location+tt,et.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<G.locationSize;tt++)m(G.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let tt=0;tt<G.locationSize;tt++)b(G.location+tt,dt/G.locationSize,Y,st,dt*j,dt/G.locationSize*tt*j,rt)}}else if(X!==void 0){const st=X[Q];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(G.location,st);break;case 3:i.vertexAttrib3fv(G.location,st);break;case 4:i.vertexAttrib4fv(G.location,st);break;default:i.vertexAttrib1fv(G.location,st)}}}}w()}function B(){R();for(const M in n){const P=n[M];for(const O in P){const z=P[O];for(const H in z)l(z[H].object),delete z[H];delete P[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const z=P[O];for(const H in z)l(z[H].object),delete z[H];delete P[O]}delete n[M.id]}function A(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const z=O[M.id];for(const H in z)l(z[H].object),delete z[H];delete O[M.id]}}function R(){E(),o=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function wu(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,d){d!==0&&(i.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function a(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let p=0;for(let g=0;g<d;g++)p+=l[g];e.update(p,n,1)}function c(h,l,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)o(h[g],l[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,l,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=l[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ye&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:B,maxSamples:T}}function Tu(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{const w=r?0:n,b=w*4;let y=f.clippingState||null;c.value=y,y=l(g,u,b,p);for(let B=0;B!==b;++B)y[B]=e[B];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==_;++b,y+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Au(i){let t=new WeakMap;function e(o,a){return a===gr?o.mapping=gi:a===_r&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gr||a===_r)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new kl(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cu extends Qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hi=4,Xo=[.125,.215,.35,.446,.526,.582],zn=20,Js=new Cu,qo=new Xt;let Ks=null,Zs=0,Qs=0,tr=!1;const kn=(1+Math.sqrt(5))/2,ai=1/kn,jo=[new D(-kn,ai,0),new D(kn,ai,0),new D(-ai,0,kn),new D(ai,0,kn),new D(0,kn,-ai),new D(0,kn,ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Zs,Qs),this._renderer.xr.enabled=tr,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Oi,format:Ye,colorSpace:Ei,depthBuffer:!1},s=$o(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ru(r)),this._blurMaterial=Pu(r,t,e)}return s}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,s){const a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(qo),l.toneMapping=Cn,l.autoClear=!1;const p=new Yt({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new C(new q,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(qo),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(h[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,h[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,h[f]));const b=this._cubeSize;cs(s,w*b,f>2?b:0,b,b),l.setRenderTarget(s),_&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===gi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new C(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jo[(s-r-1)%jo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new C(this._lodPlanes[s],h),u=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zn-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):zn;m>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const f=[];let w=0;for(let A=0;A<zn;++A){const R=A/_,E=Math.exp(-R*R/2);f.push(E),A===0?w+=E:A<m&&(w+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const y=this._sizeLods[s],B=3*y*(s>b-hi?s-b+hi:0),T=4*(this._cubeSize-y);cs(e,B,T,3*y,2*y),c.setRenderTarget(e),c.render(d,Js)}}function Ru(i){const t=[],e=[],n=[];let s=i;const r=i-hi+1+Xo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hi?c=Xo[o-i+hi-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,R=T>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];w.set(E,_*g*T),b.set(u,m*g*T);const M=[T,T,T,T,T,T];y.set(M,f*g*T)}const B=new Ce;B.setAttribute("position",new Ge(w,_)),B.setAttribute("uv",new Ge(b,m)),B.setAttribute("faceIndex",new Ge(y,f)),t.push(B),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $o(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pu(i,t,e){const n=new Float32Array(zn),s=new D(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Jo(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ko(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Lu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===gr||c===_r,l=c===gi||c===_i;if(h||l){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Yo(i)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return h&&p&&p.height>0||l&&p&&s(p)?(e===null&&(e=new Yo(i)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Du(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Iu(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let b=0,y=w.length;b<y;b+=3){const B=w[b+0],T=w[b+1],A=w[b+2];u.push(B,T,T,A,A,B)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const B=b+0,T=b+1,A=b+2;u.push(B,T,T,A,A,B)}}else return;const m=new(Xa(u)?Ka:Ja)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function l(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:l}}function Bu(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function h(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function l(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)h(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function Uu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nu(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,c){const h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let B=a.attributes.position.count*y,T=1;B>t.maxTextureSize&&(T=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const A=new Float32Array(B*T*4*d),R=new ja(A,B,T,d);R.type=hn,R.needsUpdate=!0;const E=y*4;for(let P=0;P<d;P++){const O=f[P],z=w[P],H=b[P],$=B*T*4*P;for(let X=0;X<O.count;X++){const Q=X*E;g===!0&&(s.fromBufferAttribute(O,X),A[$+Q+0]=s.x,A[$+Q+1]=s.y,A[$+Q+2]=s.z,A[$+Q+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[$+Q+4]=s.x,A[$+Q+5]=s.y,A[$+Q+6]=s.z,A[$+Q+7]=0),m===!0&&(s.fromBufferAttribute(H,X),A[$+Q+8]=s.x,A[$+Q+9]=s.y,A[$+Q+10]=s.z,A[$+Q+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Nt(B,T)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fu(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,d=t.get(c,l);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function o(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class nc extends Ae{constructor(t,e,n,s,r,o,a,c,h,l=fi){if(l!==fi&&l!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===fi&&(n=Vn),n===void 0&&l===xi&&(n=vi),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ic=new Ae,Zo=new nc(1,1),sc=new ja,rc=new El,oc=new tc,Qo=[],ta=[],ea=new Float32Array(16),na=new Float32Array(9),ia=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qo[s];if(r===void 0&&(r=new Float32Array(s),Qo[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=ta[t];e===void 0&&(e=new Int32Array(t),ta[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ku(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Hu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ia.set(n),i.uniformMatrix2fv(this.addr,!1,ia),ve(e,n)}}function Vu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;na.set(n),i.uniformMatrix3fv(this.addr,!1,na),ve(e,n)}}function Wu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ea.set(n),i.uniformMatrix4fv(this.addr,!1,ea),ve(e,n)}}function Xu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function $u(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=Va,r=Zo):r=ic,e.setTexture2D(t||r,s)}function tf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rc,s)}function ef(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oc,s)}function nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sc,s)}function sf(i){switch(i){case 5126:return ku;case 35664:return Ou;case 35665:return zu;case 35666:return Gu;case 35674:return Hu;case 35675:return Vu;case 35676:return Wu;case 5124:case 35670:return Xu;case 35667:case 35671:return qu;case 35668:case 35672:return ju;case 35669:case 35673:return Yu;case 5125:return $u;case 36294:return Ju;case 36295:return Ku;case 36296:return Zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(i,t){i.uniform1fv(this.addr,t)}function of(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function af(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function cf(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function lf(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hf(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function df(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uf(i,t){i.uniform1iv(this.addr,t)}function ff(i,t){i.uniform2iv(this.addr,t)}function pf(i,t){i.uniform3iv(this.addr,t)}function mf(i,t){i.uniform4iv(this.addr,t)}function gf(i,t){i.uniform1uiv(this.addr,t)}function _f(i,t){i.uniform2uiv(this.addr,t)}function vf(i,t){i.uniform3uiv(this.addr,t)}function xf(i,t){i.uniform4uiv(this.addr,t)}function Mf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ic,r[o])}function yf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rc,r[o])}function Ef(i,t,e){const n=this.cache,s=t.length,r=As(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||oc,r[o])}function Sf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sc,r[o])}function wf(i){switch(i){case 5126:return rf;case 35664:return of;case 35665:return af;case 35666:return cf;case 35674:return lf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return uf;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Sf}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sf(e.type)}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wf(e.type)}}class Af{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const er=/(\w+)(\])?(\[|\.)?/g;function sa(i,t){i.seq.push(t),i.map[t.id]=t}function Cf(i,t,e){const n=i.name,s=n.length;for(er.lastIndex=0;;){const r=er.exec(n),o=er.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){sa(e,h===void 0?new bf(a,i,t):new Tf(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Af(a),sa(e,d)),e=d}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Cf(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ra(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rf=37297;let Pf=0;function Lf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oa=new Ht;function Df(i){Jt._getMatrix(oa,Jt.workingColorSpace,i);const t=`mat3( ${oa.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function aa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lf(i.getShaderSource(t),o)}else return s}function If(i,t){const e=Df(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bf(i,t){let e;switch(t){case Uc:e="Linear";break;case Nc:e="Reinhard";break;case Fc:e="Cineon";break;case Pa:e="ACESFilmic";break;case Oc:e="AgX";break;case zc:e="Neutral";break;case kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ls=new D;function Uf(){Jt.getLuminanceCoefficients(ls);const i=ls.x.toFixed(4),t=ls.y.toFixed(4),e=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function Ff(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bi(i){return i!==""}function ca(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function la(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(i){return i.replace(Of,Gf)}const zf=new Map;function Gf(i,t){let e=Wt[t];if(e===void 0){const n=zf.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xr(e)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ha(i){return i.replace(Hf,Vf)}function Vf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function da(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ra:t="ENVMAP_BLENDING_MULTIPLY";break;case Ic:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $f(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Wf(e),h=Xf(e),l=qf(e),d=jf(e),u=Yf(e),p=Nf(e),g=Ff(r),_=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),f.length>0&&(f+=`
`)):(m=[da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),f=[da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,If("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),o=Xr(o),o=ca(o,e),o=la(o,e),a=Xr(a),a=ca(a,e),a=la(a,e),o=ha(o),a=ha(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=w+m+o,y=w+f+a,B=ra(s,s.VERTEX_SHADER,b),T=ra(s,s.FRAGMENT_SHADER,y);s.attachShader(_,B),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(B).trim(),H=s.getShaderInfoLog(T).trim();let $=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,T);else{const Q=aa(s,B,"vertex"),G=aa(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||H==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(B),s.deleteShader(T),R=new vs(s,_),E=kf(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Rf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=T,this}let Jf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zf(t),e.set(t,n)),n}}class Zf{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function Qf(i,t,e,n,s,r,o){const a=new Ya,c=new Kf,h=new Set,l=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,O,z){const H=O.fog,$=z.geometry,X=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),G=Q&&Q.mapping===ws?Q.image.height:null,et=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=st!==void 0?st.length:0;let Rt=0;$.morphAttributes.position!==void 0&&(Rt=1),$.morphAttributes.normal!==void 0&&(Rt=2),$.morphAttributes.color!==void 0&&(Rt=3);let Ot,Y,j,rt;if(et){const ie=Ze[et];Ot=ie.vertexShader,Y=ie.fragmentShader}else Ot=E.vertexShader,Y=E.fragmentShader,c.update(E),j=c.getVertexShaderID(E),rt=c.getFragmentShaderID(E);const tt=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Et=z.isInstancedMesh===!0,It=z.isBatchedMesh===!0,Lt=!!E.map,Pt=!!E.matcap,qt=!!Q,I=!!E.aoMap,Qt=!!E.lightMap,St=!!E.bumpMap,Ut=!!E.normalMap,yt=!!E.displacementMap,te=!!E.emissiveMap,L=!!E.metalnessMap,x=!!E.roughnessMap,v=E.anisotropy>0,N=E.clearcoat>0,K=E.dispersion>0,nt=E.iridescence>0,Z=E.sheen>0,xt=E.transmission>0,ct=v&&!!E.anisotropyMap,pt=N&&!!E.clearcoatMap,jt=N&&!!E.clearcoatNormalMap,ot=N&&!!E.clearcoatRoughnessMap,vt=nt&&!!E.iridescenceMap,Dt=nt&&!!E.iridescenceThicknessMap,Ft=Z&&!!E.sheenColorMap,Mt=Z&&!!E.sheenRoughnessMap,$t=!!E.specularMap,Vt=!!E.specularColorMap,ae=!!E.specularIntensityMap,U=xt&&!!E.transmissionMap,ft=xt&&!!E.thicknessMap,J=!!E.gradientMap,it=!!E.alphaMap,_t=E.alphaTest>0,mt=!!E.alphaHash,zt=!!E.extensions;let de=Cn;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(de=i.toneMapping);const Ee={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:Ot,fragmentShader:Y,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:It,batchingColor:It&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ei,alphaToCoverage:!!E.alphaToCoverage,map:Lt,matcap:Pt,envMap:qt,envMapMode:qt&&Q.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Qt,bumpMap:St,normalMap:Ut,displacementMap:u&&yt,emissiveMap:te,normalMapObjectSpace:Ut&&E.normalMapType===Wc,normalMapTangentSpace:Ut&&E.normalMapType===Ha,metalnessMap:L,roughnessMap:x,anisotropy:v,anisotropyMap:ct,clearcoat:N,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ot,dispersion:K,iridescence:nt,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:$t,specularColorMap:Vt,specularIntensityMap:ae,transmission:xt,transmissionMap:U,thicknessMap:ft,gradientMap:J,opaque:E.transparent===!1&&E.blending===ui&&E.alphaToCoverage===!1,alphaMap:it,alphaTest:_t,alphaHash:mt,combine:E.combine,mapUv:Lt&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Qt&&_(E.lightMap.channel),bumpMapUv:St&&_(E.bumpMap.channel),normalMapUv:Ut&&_(E.normalMap.channel),displacementMapUv:yt&&_(E.displacementMap.channel),emissiveMapUv:te&&_(E.emissiveMap.channel),metalnessMapUv:L&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:pt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(E.sheenRoughnessMap.channel),specularMapUv:$t&&_(E.specularMap.channel),specularColorMapUv:Vt&&_(E.specularColorMap.channel),specularIntensityMapUv:ae&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ft&&_(E.thicknessMap.channel),alphaMapUv:it&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ut||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Lt||it),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ut,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Lt&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:te&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===De,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=h.has(1),Ee.vertexUv2s=h.has(2),Ee.vertexUv3s=h.has(3),h.clear(),Ee}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(w(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=g[E.type];let P;if(M){const O=Ze[M];P=Bl.clone(O.uniforms)}else P=E.uniforms;return P}function B(E,M){let P;for(let O=0,z=l.length;O<z;O++){const H=l[O];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new $f(i,M,E,r),l.push(P)),P}function T(E){if(--E.usedTimes===0){const M=l.indexOf(E);l[M]=l[l.length-1],l.pop(),E.destroy()}}function A(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:B,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:R}}function tp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ep(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ua(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,u){e.length>1&&e.sort(d||ep),n.length>1&&n.sort(u||ua),s.length>1&&s.sort(u||ua)}function l(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function np(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new fa,i.set(n,[o])):s>=r.length?(o=new fa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function sp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rp=0;function op(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ap(i){const t=new ip,e=sp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,r=new Zt,o=new Zt;function a(h){let l=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,b=0,y=0,B=0,T=0,A=0;h.sort(op);for(let E=0,M=h.length;E<M;E++){const P=h[E],O=P.color,z=P.intensity,H=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=O.r*z,d+=O.g*z,u+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Q=P.shadow;if(P.map&&(n.spotLightMap[B]=P.map,B++,Q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,y++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,G=e.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==w||R.numPointShadows!==b||R.numSpotShadows!==y||R.numSpotMaps!==B||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+B-T,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=w,R.numPointShadows=b,R.numSpotShadows=y,R.numSpotMaps=B,R.numLightProbes=A,n.version=rp++)}function c(h,l){let d=0,u=0,p=0,g=0,_=0;const m=l.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){const b=h[f];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function pa(i){const t=new ap(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pa(i),t.set(s,[a])):r>=o.length?(a=new pa(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class lp extends wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hp extends wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,up=`uniform sampler2D shadow_pass;
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
}`;function fp(i,t,e){let n=new no;const s=new Nt,r=new Nt,o=new oe,a=new lp({depthPacking:Vc}),c=new hp,h={},l=e.maxTextureSize,d={[fn]:De,[De]:fn,[ln]:ln},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:dp,fragmentShader:up}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new C(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let f=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(An),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==cn&&this.type===cn,H=f===cn&&this.type!==cn;for(let $=0,X=T.length;$<X;$++){const Q=T[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const et=G.getFrameExtents();if(s.multiply(et),r.copy(G.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/et.y),s.y=r.y*et.y,G.mapSize.y=r.y)),G.map===null||z===!0||H===!0){const dt=this.type!==cn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new Wn(s.x,s.y,dt),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const st=G.getViewportCount();for(let dt=0;dt<st;dt++){const Rt=G.getViewport(dt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),O.viewport(o),G.updateMatrices(Q,dt),n=G.getFrustum(),y(A,R,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===cn&&w(G,R),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function w(T,A){const R=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,R,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,R,p,_,null)}function b(T,A,R,E){let M=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,z=A.uuid;let H=h[O];H===void 0&&(H={},h[O]=H);let $=H[z];$===void 0&&($=M.clone(),H[z]=$,A.addEventListener("dispose",B)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,E===cn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=R}return M}function y(T,A,R,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===cn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const z=t.update(T),H=T.material;if(Array.isArray(H)){const $=z.groups;for(let X=0,Q=$.length;X<Q;X++){const G=$[X],et=H[G.materialIndex];if(et&&et.visible){const st=b(T,et,E,M);T.onBeforeShadow(i,T,A,R,z,st,G),i.renderBufferDirect(R,null,z,st,T,G),T.onAfterShadow(i,T,A,R,z,st,G)}}}else if(H.visible){const $=b(T,H,E,M);T.onBeforeShadow(i,T,A,R,z,$,null),i.renderBufferDirect(R,null,z,$,T,null),T.onAfterShadow(i,T,A,R,z,$,null)}}const O=T.children;for(let z=0,H=O.length;z<H;z++)y(O[z],A,R,E,M)}function B(T){T.target.removeEventListener("dispose",B);for(const R in h){const E=h[R],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const pp={[lr]:hr,[dr]:pr,[ur]:mr,[mi]:fr,[hr]:lr,[pr]:dr,[mr]:ur,[fr]:mi};function mp(i,t){function e(){let U=!1;const ft=new oe;let J=null;const it=new oe(0,0,0,0);return{setMask:function(_t){J!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){U=_t},setClear:function(_t,mt,zt,de,Ee){Ee===!0&&(_t*=de,mt*=de,zt*=de),ft.set(_t,mt,zt,de),it.equals(ft)===!1&&(i.clearColor(_t,mt,zt,de),it.copy(ft))},reset:function(){U=!1,J=null,it.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,J=null,it=null,_t=null;return{setReversed:function(mt){if(ft!==mt){const zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const de=_t;_t=null,this.setClear(de)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?tt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(mt){J!==mt&&!U&&(i.depthMask(mt),J=mt)},setFunc:function(mt){if(ft&&(mt=pp[mt]),it!==mt){switch(mt){case lr:i.depthFunc(i.NEVER);break;case hr:i.depthFunc(i.ALWAYS);break;case dr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case ur:i.depthFunc(i.EQUAL);break;case fr:i.depthFunc(i.GEQUAL);break;case pr:i.depthFunc(i.GREATER);break;case mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=mt}},setLocked:function(mt){U=mt},setClear:function(mt){_t!==mt&&(ft&&(mt=1-mt),i.clearDepth(mt),_t=mt)},reset:function(){U=!1,J=null,it=null,_t=null,ft=!1}}}function s(){let U=!1,ft=null,J=null,it=null,_t=null,mt=null,zt=null,de=null,Ee=null;return{setTest:function(ie){U||(ie?tt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!U&&(i.stencilMask(ie),ft=ie)},setFunc:function(ie,He,tn){(J!==ie||it!==He||_t!==tn)&&(i.stencilFunc(ie,He,tn),J=ie,it=He,_t=tn)},setOp:function(ie,He,tn){(mt!==ie||zt!==He||de!==tn)&&(i.stencilOp(ie,He,tn),mt=ie,zt=He,de=tn)},setLocked:function(ie){U=ie},setClear:function(ie){Ee!==ie&&(i.clearStencil(ie),Ee=ie)},reset:function(){U=!1,ft=null,J=null,it=null,_t=null,mt=null,zt=null,de=null,Ee=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap;let l={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,y=null,B=null,T=null,A=new Xt(0,0,0),R=0,E=!1,M=null,P=null,O=null,z=null,H=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Q>=2);let et=null,st={};const dt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Ot=new oe().fromArray(dt),Y=new oe().fromArray(Rt);function j(U,ft,J,it){const _t=new Uint8Array(4),mt=i.createTexture();i.bindTexture(U,mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<J;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ft+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return mt}const rt={};rt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(mi),St(!1),Ut(vo),tt(i.CULL_FACE),I(An);function tt(U){l[U]!==!0&&(i.enable(U),l[U]=!0)}function ut(U){l[U]!==!1&&(i.disable(U),l[U]=!1)}function Et(U,ft){return d[U]!==ft?(i.bindFramebuffer(U,ft),d[U]=ft,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function It(U,ft){let J=p,it=!1;if(U){J=u.get(ft),J===void 0&&(J=[],u.set(ft,J));const _t=U.textures;if(J.length!==_t.length||J[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,zt=_t.length;mt<zt;mt++)J[mt]=i.COLOR_ATTACHMENT0+mt;J.length=_t.length,it=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,it=!0);it&&i.drawBuffers(J)}function Lt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Pt={[On]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};Pt[vc]=i.MIN,Pt[xc]=i.MAX;const qt={[Mc]:i.ZERO,[yc]:i.ONE,[Ec]:i.SRC_COLOR,[ar]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[wc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Pc]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Dc]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ft,J,it,_t,mt,zt,de,Ee,ie){if(U===An){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),U!==mc){if(U!==m||ie!==E){if((f!==On||y!==On)&&(i.blendEquation(i.FUNC_ADD),f=On,y=On),ie)switch(U){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,B=null,T=null,A.set(0,0,0),R=0,m=U,E=ie}return}_t=_t||ft,mt=mt||J,zt=zt||it,(ft!==f||_t!==y)&&(i.blendEquationSeparate(Pt[ft],Pt[_t]),f=ft,y=_t),(J!==w||it!==b||mt!==B||zt!==T)&&(i.blendFuncSeparate(qt[J],qt[it],qt[mt],qt[zt]),w=J,b=it,B=mt,T=zt),(de.equals(A)===!1||Ee!==R)&&(i.blendColor(de.r,de.g,de.b,Ee),A.copy(de),R=Ee),m=U,E=!1}function Qt(U,ft){U.side===ln?ut(i.CULL_FACE):tt(i.CULL_FACE);let J=U.side===De;ft&&(J=!J),St(J),U.blending===ui&&U.transparent===!1?I(An):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const it=U.stencilWrite;a.setTest(it),it&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Ut(U){U!==fc?(tt(i.CULL_FACE),U!==P&&(U===vo?i.cullFace(i.BACK):U===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),P=U}function yt(U){U!==O&&(X&&i.lineWidth(U),O=U)}function te(U,ft,J){U?(tt(i.POLYGON_OFFSET_FILL),(z!==ft||H!==J)&&(i.polygonOffset(ft,J),z=ft,H=J)):ut(i.POLYGON_OFFSET_FILL)}function L(U){U?tt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function x(U){U===void 0&&(U=i.TEXTURE0+$-1),et!==U&&(i.activeTexture(U),et=U)}function v(U,ft,J){J===void 0&&(et===null?J=i.TEXTURE0+$-1:J=et);let it=st[J];it===void 0&&(it={type:void 0,texture:void 0},st[J]=it),(it.type!==U||it.texture!==ft)&&(et!==J&&(i.activeTexture(J),et=J),i.bindTexture(U,ft||rt[U]),it.type=U,it.texture=ft)}function N(){const U=st[et];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function Mt(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function $t(U,ft){let J=h.get(ft);J===void 0&&(J=new WeakMap,h.set(ft,J));let it=J.get(U);it===void 0&&(it=i.getUniformBlockIndex(ft,U.name),J.set(U,it))}function Vt(U,ft){const it=h.get(ft).get(U);c.get(ft)!==it&&(i.uniformBlockBinding(ft,it,U.__bindingPointIndex),c.set(ft,it))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},et=null,st={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,b=null,y=null,B=null,T=null,A=new Xt(0,0,0),R=0,E=!1,M=null,P=null,O=null,z=null,H=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ut,bindFramebuffer:Et,drawBuffers:It,useProgram:Lt,setBlending:I,setMaterial:Qt,setFlipSided:St,setCullFace:Ut,setLineWidth:yt,setPolygonOffset:te,setScissorTest:L,activeTexture:x,bindTexture:v,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:vt,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:jt,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Ft,viewport:Mt,reset:ae}}function ma(i,t,e,n){const s=gp(n);switch(e){case Ua:return i*t;case Fa:return i*t;case ka:return i*t*2;case Oa:return i*t/s.components*s.byteLength;case Kr:return i*t/s.components*s.byteLength;case za:return i*t*2/s.components*s.byteLength;case Zr:return i*t*2/s.components*s.byteLength;case Na:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Qr:return i*t*4/s.components*s.byteLength;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mr:case Er:return Math.max(i,16)*Math.max(t,8)/4;case xr:case yr:return Math.max(i,8)*Math.max(t,8)/2;case Sr:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Or:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _s:case zr:case Gr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Hr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vr:case Wr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gp(i){switch(i){case pn:case Da:return{byteLength:1,components:1};case ki:case Ia:case Oi:return{byteLength:2,components:1};case $r:case Jr:return{byteLength:2,components:4};case Vn:case Yr:case hn:return{byteLength:4,components:1};case Ba:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _p(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,l=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):ys("canvas")}function _(x,v,N){let K=1;const nt=L(x);if((nt.width>N||nt.height>N)&&(K=N/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Z=Math.floor(K*nt.width),xt=Math.floor(K*nt.height);d===void 0&&(d=g(Z,xt));const ct=v?g(Z,xt):d;return ct.width=Z,ct.height=xt,ct.getContext("2d").drawImage(x,0,0,Z,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+xt+")."),ct}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){i.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(x,v,N,K,nt=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Z=v;if(v===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),v===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RG8UI),N===i.UNSIGNED_SHORT&&(Z=i.RG16UI),N===i.UNSIGNED_INT&&(Z=i.RG32UI),N===i.BYTE&&(Z=i.RG8I),N===i.SHORT&&(Z=i.RG16I),N===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),N===i.UNSIGNED_INT&&(Z=i.RGB32UI),N===i.BYTE&&(Z=i.RGB8I),N===i.SHORT&&(Z=i.RGB16I),N===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),N===i.UNSIGNED_INT&&(Z=i.RGBA32UI),N===i.BYTE&&(Z=i.RGBA8I),N===i.SHORT&&(Z=i.RGBA16I),N===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){const xt=nt?bs:Jt.getTransfer(K);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=xt===se?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(x,v){let N;return x?v===null||v===Vn||v===vi?N=i.DEPTH24_STENCIL8:v===hn?N=i.DEPTH32F_STENCIL8:v===ki&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vn||v===vi?N=i.DEPTH_COMPONENT24:v===hn?N=i.DEPTH_COMPONENT32F:v===ki&&(N=i.DEPTH_COMPONENT16),N}function B(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==$e&&x.minFilter!==ze?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function T(x){const v=x.target;v.removeEventListener("dispose",T),R(v),v.isVideoTexture&&l.delete(v)}function A(x){const v=x.target;v.removeEventListener("dispose",A),M(v)}function R(x){const v=n.get(x);if(v.__webglInit===void 0)return;const N=x.source,K=u.get(N);if(K){const nt=K[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(x),Object.keys(K).length===0&&u.delete(N)}n.remove(x)}function E(x){const v=n.get(x);i.deleteTexture(v.__webglTexture);const N=x.source,K=u.get(N);delete K[v.__cacheKey],o.memory.textures--}function M(x){const v=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let nt=0;nt<v.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=x.textures;for(let K=0,nt=N.length;K<nt;K++){const Z=n.get(N[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(N[K])}n.remove(x)}let P=0;function O(){P=0}function z(){const x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function H(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function $(x,v){const N=n.get(x);if(x.isVideoTexture&&yt(x),x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){const K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,x,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function X(x,v){const N=n.get(x);if(x.version>0&&N.__version!==x.version){Y(N,x,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function Q(x,v){const N=n.get(x);if(x.version>0&&N.__version!==x.version){Y(N,x,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function G(x,v){const N=n.get(x);if(x.version>0&&N.__version!==x.version){j(N,x,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const et={[Fi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},st={[$e]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},dt={[Xc]:i.NEVER,[Kc]:i.ALWAYS,[qc]:i.LESS,[Va]:i.LEQUAL,[jc]:i.EQUAL,[Jc]:i.GEQUAL,[Yc]:i.GREATER,[$c]:i.NOTEQUAL};function Rt(x,v){if(v.type===hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ze||v.magFilter===Rs||v.magFilter===Vi||v.magFilter===Hn||v.minFilter===ze||v.minFilter===Rs||v.minFilter===Vi||v.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,et[v.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,et[v.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,et[v.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,st[v.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==Vi&&v.minFilter!==Hn||v.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ot(x,v){let N=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",T));const K=v.source;let nt=u.get(K);nt===void 0&&(nt={},u.set(K,nt));const Z=H(v);if(Z!==x.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),nt[Z].usedTimes++;const xt=nt[x.__cacheKey];xt!==void 0&&(nt[x.__cacheKey].usedTimes--,xt.usedTimes===0&&E(v)),x.__cacheKey=Z,x.__webglTexture=nt[Z].texture}return N}function Y(x,v,N){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const nt=Ot(x,v),Z=v.source;e.bindTexture(K,x.__webglTexture,i.TEXTURE0+N);const xt=n.get(Z);if(Z.version!==xt.__version||nt===!0){e.activeTexture(i.TEXTURE0+N);const ct=Jt.getPrimaries(Jt.workingColorSpace),pt=v.colorSpace===bn?null:Jt.getPrimaries(v.colorSpace),jt=v.colorSpace===bn||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ot=_(v.image,!1,s.maxTextureSize);ot=te(v,ot);const vt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type);let Ft=b(v.internalFormat,vt,Dt,v.colorSpace,v.isVideoTexture);Rt(K,v);let Mt;const $t=v.mipmaps,Vt=v.isVideoTexture!==!0,ae=xt.__version===void 0||nt===!0,U=Z.dataReady,ft=B(v,ot);if(v.isDepthTexture)Ft=y(v.format===xi,v.type),ae&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ot.width,ot.height,0,vt,Dt,null));else if(v.isDataTexture)if($t.length>0){Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,$t[0].width,$t[0].height);for(let J=0,it=$t.length;J<it;J++)Mt=$t[J],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Mt.width,Mt.height,vt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,J,Ft,Mt.width,Mt.height,0,vt,Dt,Mt.data);v.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,vt,Dt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ot.width,ot.height,0,vt,Dt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,$t[0].width,$t[0].height,ot.depth);for(let J=0,it=$t.length;J<it;J++)if(Mt=$t[J],v.format!==Ye)if(vt!==null)if(Vt){if(U)if(v.layerUpdates.size>0){const _t=ma(Mt.width,Mt.height,v.format,v.type);for(const mt of v.layerUpdates){const zt=Mt.data.subarray(mt*_t/Mt.data.BYTES_PER_ELEMENT,(mt+1)*_t/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,mt,Mt.width,Mt.height,1,vt,zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,ot.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ft,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,ot.depth,vt,Dt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ft,Mt.width,Mt.height,ot.depth,0,vt,Dt,Mt.data)}else{Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,$t[0].width,$t[0].height);for(let J=0,it=$t.length;J<it;J++)Mt=$t[J],v.format!==Ye?vt!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Mt.width,Mt.height,vt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,J,Ft,Mt.width,Mt.height,0,vt,Dt,Mt.data)}else if(v.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,ot.width,ot.height,ot.depth),U)if(v.layerUpdates.size>0){const J=ma(ot.width,ot.height,v.format,v.type);for(const it of v.layerUpdates){const _t=ot.data.subarray(it*J/ot.data.BYTES_PER_ELEMENT,(it+1)*J/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ot.width,ot.height,1,vt,Dt,_t)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Dt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ot.width,ot.height,ot.depth,0,vt,Dt,ot.data);else if(v.isData3DTexture)Vt?(ae&&e.texStorage3D(i.TEXTURE_3D,ft,Ft,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ot.width,ot.height,ot.depth,0,vt,Dt,ot.data);else if(v.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(i.TEXTURE_2D,ft,Ft,ot.width,ot.height);else{let J=ot.width,it=ot.height;for(let _t=0;_t<ft;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ft,J,it,0,vt,Dt,null),J>>=1,it>>=1}}else if($t.length>0){if(Vt&&ae){const J=L($t[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ft,J.width,J.height)}for(let J=0,it=$t.length;J<it;J++)Mt=$t[J],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,vt,Dt,Mt):e.texImage2D(i.TEXTURE_2D,J,Ft,vt,Dt,Mt);v.generateMipmaps=!1}else if(Vt){if(ae){const J=L(ot);e.texStorage2D(i.TEXTURE_2D,ft,Ft,J.width,J.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Dt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ft,vt,Dt,ot);m(v)&&f(K),xt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function j(x,v,N){if(v.image.length!==6)return;const K=Ot(x,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+N);const Z=n.get(nt);if(nt.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+N);const xt=Jt.getPrimaries(Jt.workingColorSpace),ct=v.colorSpace===bn?null:Jt.getPrimaries(v.colorSpace),pt=v.colorSpace===bn||xt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!jt&&!ot?vt[it]=_(v.image[it],!0,s.maxCubemapSize):vt[it]=ot?v.image[it].image:v.image[it],vt[it]=te(v,vt[it]);const Dt=vt[0],Ft=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),$t=b(v.internalFormat,Ft,Mt,v.colorSpace),Vt=v.isVideoTexture!==!0,ae=Z.__version===void 0||K===!0,U=nt.dataReady;let ft=B(v,Dt);Rt(i.TEXTURE_CUBE_MAP,v);let J;if(jt){Vt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,Dt.width,Dt.height);for(let it=0;it<6;it++){J=vt[it].mipmaps;for(let _t=0;_t<J.length;_t++){const mt=J[_t];v.format!==Ye?Ft!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,mt.width,mt.height,Ft,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,$t,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,mt.width,mt.height,Ft,Mt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,$t,mt.width,mt.height,0,Ft,Mt,mt.data)}}}else{if(J=v.mipmaps,Vt&&ae){J.length>0&&ft++;const it=L(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,it.width,it.height)}for(let it=0;it<6;it++)if(ot){Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,Ft,Mt,vt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,vt[it].width,vt[it].height,0,Ft,Mt,vt[it].data);for(let _t=0;_t<J.length;_t++){const zt=J[_t].image[it].image;Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,zt.width,zt.height,Ft,Mt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,$t,zt.width,zt.height,0,Ft,Mt,zt.data)}}else{Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Mt,vt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,Ft,Mt,vt[it]);for(let _t=0;_t<J.length;_t++){const mt=J[_t];Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Ft,Mt,mt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,$t,Ft,Mt,mt.image[it])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function rt(x,v,N,K,nt,Z){const xt=r.convert(N.format,N.colorSpace),ct=r.convert(N.type),pt=b(N.internalFormat,xt,ct,N.colorSpace),jt=n.get(v),ot=n.get(N);if(ot.__renderTarget=v,!jt.__hasExternalTextures){const vt=Math.max(1,v.width>>Z),Dt=Math.max(1,v.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,pt,vt,Dt,v.depth,0,xt,ct,null):e.texImage2D(nt,Z,pt,vt,Dt,0,xt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),Ut(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,ot.__webglTexture,0,St(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,ot.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(x,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,x),v.depthBuffer){const K=v.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Z=y(v.stencilBuffer,nt),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=St(v);Ut(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,x)}else{const K=v.textures;for(let nt=0;nt<K.length;nt++){const Z=K[nt],xt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),pt=b(Z.internalFormat,xt,ct,Z.colorSpace),jt=St(v);N&&Ut(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,pt,v.width,v.height):Ut(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const nt=K.__webglTexture,Z=St(v);if(v.depthTexture.format===fi)Ut(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(v.depthTexture.format===xi)Ut(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Et(x){const v=n.get(x),N=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const K=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=K}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ut(v.__webglFramebuffer,x)}else if(N){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),tt(v.__webglDepthbuffer[K],x,!1);else{const nt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),tt(v.__webglDepthbuffer,x,!1);else{const K=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(x,v,N){const K=n.get(x);v!==void 0&&rt(K.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Et(x)}function Lt(x){const v=x.texture,N=n.get(x),K=n.get(v);x.addEventListener("dispose",A);const nt=x.textures,Z=x.isWebGLCubeRenderTarget===!0,xt=nt.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)N.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else N.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)N.__webglFramebuffer[ct]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ct=0,pt=nt.length;ct<pt;ct++){const jt=n.get(nt[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&Ut(x)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<nt.length;ct++){const pt=nt[ct];N.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const jt=r.convert(pt.format,pt.colorSpace),ot=r.convert(pt.type),vt=b(pt.internalFormat,jt,ot,pt.colorSpace,x.isXRRenderTarget===!0),Dt=St(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(N.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)rt(N.__webglFramebuffer[ct][pt],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else rt(N.__webglFramebuffer[ct],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,pt=nt.length;ct<pt;ct++){const jt=nt[ct],ot=n.get(jt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Rt(i.TEXTURE_2D,jt),rt(N.__webglFramebuffer,x,jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ct=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Rt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)rt(N.__webglFramebuffer[pt],x,v,i.COLOR_ATTACHMENT0,ct,pt);else rt(N.__webglFramebuffer,x,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}x.depthBuffer&&Et(x)}function Pt(x){const v=x.textures;for(let N=0,K=v.length;N<K;N++){const nt=v[N];if(m(nt)){const Z=w(x),xt=n.get(nt).__webglTexture;e.bindTexture(Z,xt),f(Z),e.unbindTexture()}}}const qt=[],I=[];function Qt(x){if(x.samples>0){if(Ut(x)===!1){const v=x.textures,N=x.width,K=x.height;let nt=i.COLOR_BUFFER_BIT;const Z=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(x),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const jt=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,N,K,0,0,N,K,nt,i.NEAREST),c===!0&&(qt.length=0,I.length=0,qt.push(i.COLOR_ATTACHMENT0+pt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(qt.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const jt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const v=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function St(x){return Math.min(s.maxSamples,x.samples)}function Ut(x){const v=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(x){const v=o.render.frame;l.get(x)!==v&&(l.set(x,v),x.update())}function te(x,v){const N=x.colorSpace,K=x.format,nt=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||N!==Ei&&N!==bn&&(Jt.getTransfer(N)===se?(K!==Ye||nt!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function L(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(h.width=x.naturalWidth||x.width,h.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(h.width=x.displayWidth,h.height=x.displayHeight):(h.width=x.width,h.height=x.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Ut}function vp(i,t){function e(n,s=bn){let r;const o=Jt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===$r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ba)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Da)return i.BYTE;if(n===Ia)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===Ua)return i.ALPHA;if(n===Na)return i.RGB;if(n===Ye)return i.RGBA;if(n===Fa)return i.LUMINANCE;if(n===ka)return i.LUMINANCE_ALPHA;if(n===fi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===Oa)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===za)return i.RG;if(n===Zr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===fs||n===ps||n===ms||n===gs)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xr||n===Mr||n===yr||n===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===wr||n===br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sr||n===wr)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===br)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tr||n===Ar||n===Cr||n===Rr||n===Pr||n===Lr||n===Dr||n===Ir||n===Br||n===Ur||n===Nr||n===Fr||n===kr||n===Or)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ur)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Or)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===zr||n===Gr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_s)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Hr||n===Vr||n===Wr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class xp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),p=.02,g=.005;h.inputState.pinching&&u>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ep=`
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

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:yp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wp extends qn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,d=null,u=null,p=null,g=null;const _=new Sp,m=e.getContextAttributes();let f=null,w=null;const b=[],y=[],B=new Nt;let T=null;const A=new Le;A.viewport=new oe;const R=new Le;R.viewport=new oe;const E=[A,R],M=new xp;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=b[Y];return j===void 0&&(j=new nr,b[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=b[Y];return j===void 0&&(j=new nr,b[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=b[Y];return j===void 0&&(j=new nr,b[Y]=j),j.getHandSpace()};function z(Y){const j=y.indexOf(Y.inputSource);if(j===-1)return;const rt=b[j];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,h||o),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const j=y[Y];j!==null&&(y[Y]=null,b[Y].disconnect(j))}P=null,O=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,w=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Wn(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,rt=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?xi:fi,rt=m.stencil?vi:Vn);const ut={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Wn(u.textureWidth,u.textureHeight,{format:Ye,type:pn,depthTexture:new nc(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let j=0;j<Y.removed.length;j++){const rt=Y.removed[j],tt=y.indexOf(rt);tt>=0&&(y[tt]=null,b[tt].disconnect(rt))}for(let j=0;j<Y.added.length;j++){const rt=Y.added[j];let tt=y.indexOf(rt);if(tt===-1){for(let Et=0;Et<b.length;Et++)if(Et>=y.length){y.push(rt),tt=Et;break}else if(y[Et]===null){y[Et]=rt,tt=Et;break}if(tt===-1)break}const ut=b[tt];ut&&ut.connect(rt)}}const X=new D,Q=new D;function G(Y,j,rt){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(rt.matrixWorld);const tt=X.distanceTo(Q),ut=j.projectionMatrix.elements,Et=rt.projectionMatrix.elements,It=ut[14]/(ut[10]-1),Lt=ut[14]/(ut[10]+1),Pt=(ut[9]+1)/ut[5],qt=(ut[9]-1)/ut[5],I=(ut[8]-1)/ut[0],Qt=(Et[8]+1)/Et[0],St=It*I,Ut=It*Qt,yt=tt/(-I+Qt),te=yt*-I;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(te),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ut[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=It+yt,x=Lt+yt,v=St-te,N=Ut+(tt-te),K=Pt*Lt/x*L,nt=qt*Lt/x*L;Y.projectionMatrix.makePerspective(v,N,K,nt,L,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,rt=Y.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),M.near=R.near=A.near=j,M.far=R.far=A.far=rt,(P!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const tt=Y.parent,ut=M.cameras;et(M,tt);for(let Et=0;Et<ut.length;Et++)et(ut[Et],tt);ut.length===2?G(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),st(Y,M,tt)};function st(Y,j,rt){rt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let dt=null;function Rt(Y,j){if(l=j.getViewerPose(h||o),g=j,l!==null){const rt=l.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let tt=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let Et=0;Et<rt.length;Et++){const It=rt[Et];let Lt=null;if(p!==null)Lt=p.getViewport(It);else{const qt=d.getViewSubImage(u,It);Lt=qt.viewport,Et===0&&(t.setRenderTargetTextures(w,qt.colorTexture,u.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(w))}let Pt=E[Et];Pt===void 0&&(Pt=new Le,Pt.layers.enable(Et),Pt.viewport=new oe,E[Et]=Pt),Pt.matrix.fromArray(It.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(It.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Et===0&&(M.matrix.copy(Pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(Pt)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const Et=d.getDepthInformation(rt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let rt=0;rt<b.length;rt++){const tt=y[rt],ut=b[rt];tt!==null&&ut!==void 0&&ut.update(tt,j,h||o)}dt&&dt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ot=new ec;Ot.setAnimationLoop(Rt),this.setAnimationLoop=function(Y){dt=Y},this.dispose=function(){}}}const Nn=new Qe,bp=new Zt;function Tp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Za(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),l(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,b):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,Nn.copy(y),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Nn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ap(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function h(w,b){let y=s[w.id];y===void 0&&(g(w),y=l(w),s[w.id]=y,w.addEventListener("dispose",m));const B=b.program;n.updateUBOMapping(w,B);const T=t.render.frame;r[w.id]!==T&&(u(w),r[w.id]=T)}function l(w){const b=d();w.__bindingPointIndex=b;const y=i.createBuffer(),B=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=s[w.id],y=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,A=y.length;T<A;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=R.length;E<M;E++){const P=R[E];if(p(P,T,E,B)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let $=0;$<z.length;$++){const X=z[$],Q=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,b,y,B){const T=w.value,A=b+"_"+y;if(B[A]===void 0)return typeof T=="number"||typeof T=="boolean"?B[A]=T:B[A]=T.clone(),!0;{const R=B[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return B[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(w){const b=w.uniforms;let y=0;const B=16;for(let A=0,R=b.length;A<R;A++){const E=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,P=E.length;M<P;M++){const O=E[M],z=Array.isArray(O.value)?O.value:[O.value];for(let H=0,$=z.length;H<$;H++){const X=z[H],Q=_(X),G=y%B,et=G%Q.boundary,st=G+et;y+=et,st!==0&&B-st<Q.storage&&(y+=B-st),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Q.storage}}}const T=y%B;return T>0&&(y+=B-T),w.__size=y,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:h,dispose:f}}class Cp{constructor(t={}){const{canvas:e=pl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Cn,this.toneMappingExposure=1;const y=this;let B=!1,T=0,A=0,R=null,E=-1,M=null;const P=new oe,O=new oe;let z=null;const H=new Xt(0);let $=0,X=e.width,Q=e.height,G=1,et=null,st=null;const dt=new oe(0,0,X,Q),Rt=new oe(0,0,X,Q);let Ot=!1;const Y=new no;let j=!1,rt=!1;const tt=new Zt,ut=new Zt,Et=new D,It=new oe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function qt(){return R===null?G:1}let I=n;function Qt(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jr}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),I===null){const F="webgl2";if(I=Qt(F,S),I===null)throw Qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let St,Ut,yt,te,L,x,v,N,K,nt,Z,xt,ct,pt,jt,ot,vt,Dt,Ft,Mt,$t,Vt,ae,U;function ft(){St=new Du(I),St.init(),Vt=new vp(I,St),Ut=new bu(I,St,t,Vt),yt=new mp(I,St),Ut.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),te=new Uu(I),L=new tp,x=new _p(I,St,yt,L,Ut,Vt,te),v=new Au(y),N=new Lu(y),K=new Gl(I),ae=new Su(I,K),nt=new Iu(I,K,te,ae),Z=new Fu(I,nt,K,te),Ft=new Nu(I,Ut,x),ot=new Tu(L),xt=new Qf(y,v,N,St,Ut,ae,ot),ct=new Tp(y,L),pt=new np,jt=new cp(St),Dt=new Eu(y,v,N,yt,Z,p,c),vt=new fp(y,Z,Ut),U=new Ap(I,te,Ut,yt),Mt=new wu(I,St,te),$t=new Bu(I,St,te),te.programs=xt.programs,y.capabilities=Ut,y.extensions=St,y.properties=L,y.renderLists=pt,y.shadowMap=vt,y.state=yt,y.info=te}ft();const J=new wp(y,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=St.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=St.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(X,Q,!1))},this.getSize=function(S){return S.set(X,Q)},this.setSize=function(S,F,V=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,Q=F,e.width=Math.floor(S*G),e.height=Math.floor(F*G),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(X*G,Q*G).floor()},this.setDrawingBufferSize=function(S,F,V){X=S,Q=F,G=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,F,V,W){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,F,V,W),yt.viewport(P.copy(dt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Rt)},this.setScissor=function(S,F,V,W){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,F,V,W),yt.scissor(O.copy(Rt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(S){yt.setScissorTest(Ot=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(S=!0,F=!0,V=!0){let W=0;if(S){let k=!1;if(R!==null){const at=R.texture.format;k=at===Qr||at===Zr||at===Kr}if(k){const at=R.texture.type,gt=at===pn||at===Vn||at===ki||at===vi||at===$r||at===Jr,wt=Dt.getClearColor(),bt=Dt.getClearAlpha(),kt=wt.r,Gt=wt.g,Tt=wt.b;gt?(g[0]=kt,g[1]=Gt,g[2]=Tt,g[3]=bt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Tt,_[3]=bt,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),pt.dispose(),jt.dispose(),L.dispose(),v.dispose(),N.dispose(),Z.dispose(),ae.dispose(),U.dispose(),xt.dispose(),J.dispose(),J.removeEventListener("sessionstart",lo),J.removeEventListener("sessionend",ho),Pn.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const S=te.autoReset,F=vt.enabled,V=vt.autoUpdate,W=vt.needsUpdate,k=vt.type;ft(),te.autoReset=S,vt.enabled=F,vt.autoUpdate=V,vt.needsUpdate=W,vt.type=k}function mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){const F=S.target;F.removeEventListener("dispose",zt),de(F)}function de(S){Ee(S),L.remove(S)}function Ee(S){const F=L.get(S).programs;F!==void 0&&(F.forEach(function(V){xt.releaseProgram(V)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,W,k,at){F===null&&(F=Lt);const gt=k.isMesh&&k.matrixWorld.determinant()<0,wt=hc(S,F,V,W,k);yt.setMaterial(W,gt);let bt=V.index,kt=1;if(W.wireframe===!0){if(bt=nt.getWireframeAttribute(V),bt===void 0)return;kt=2}const Gt=V.drawRange,Tt=V.attributes.position;let Kt=Gt.start*kt,ce=(Gt.start+Gt.count)*kt;at!==null&&(Kt=Math.max(Kt,at.start*kt),ce=Math.min(ce,(at.start+at.count)*kt)),bt!==null?(Kt=Math.max(Kt,0),ce=Math.min(ce,bt.count)):Tt!=null&&(Kt=Math.max(Kt,0),ce=Math.min(ce,Tt.count));const le=ce-Kt;if(le<0||le===1/0)return;ae.setup(k,W,wt,V,bt);let Re,ee=Mt;if(bt!==null&&(Re=K.get(bt),ee=$t,ee.setIndex(Re)),k.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*qt()),ee.setMode(I.LINES)):ee.setMode(I.TRIANGLES);else if(k.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),yt.setLineWidth(Ct*qt()),k.isLineSegments?ee.setMode(I.LINES):k.isLineLoop?ee.setMode(I.LINE_LOOP):ee.setMode(I.LINE_STRIP)}else k.isPoints?ee.setMode(I.POINTS):k.isSprite&&ee.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ee.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ct=k._multiDrawStarts,en=k._multiDrawCounts,ne=k._multiDrawCount,Ve=bt?K.get(bt).bytesPerElement:1,jn=L.get(W).currentProgram.getUniforms();for(let Ie=0;Ie<ne;Ie++)jn.setValue(I,"_gl_DrawID",Ie),ee.render(Ct[Ie]/Ve,en[Ie])}else if(k.isInstancedMesh)ee.renderInstances(Kt,le,k.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,en=Math.min(V.instanceCount,Ct);ee.renderInstances(Kt,le,en)}else ee.render(Kt,le)};function ie(S,F,V){S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=De,S.needsUpdate=!0,Hi(S,F,V),S.side=fn,S.needsUpdate=!0,Hi(S,F,V),S.side=ln):Hi(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),f=jt.get(V),f.init(F),b.push(f),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),S!==V&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const W=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const wt=at[gt];ie(wt,V,k),W.add(wt)}else ie(at,V,k),W.add(at)}),b.pop(),f=null,W},this.compileAsync=function(S,F,V=null){const W=this.compile(S,F,V);return new Promise(k=>{function at(){if(W.forEach(function(gt){L.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){k(S);return}setTimeout(at,10)}St.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let He=null;function tn(S){He&&He(S)}function lo(){Pn.stop()}function ho(){Pn.start()}const Pn=new ec;Pn.setAnimationLoop(tn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){He=S,J.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},J.addEventListener("sessionstart",lo),J.addEventListener("sessionend",ho),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,R),f=jt.get(S,b.length),f.init(F),b.push(f),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(ut),rt=this.localClippingEnabled,j=ot.init(this.clippingPlanes,rt),m=pt.get(S,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&Cs(at,F,-1/0,y.sortObjects)}Cs(S,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,st),Pt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Pt&&Dt.addToRenderList(m,S),this.info.render.frame++,j===!0&&ot.beginShadows();const V=f.state.shadowsArray;vt.render(V,S,F),j===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(f.setupLights(),F.isArrayCamera){const at=F.cameras;if(k.length>0)for(let gt=0,wt=at.length;gt<wt;gt++){const bt=at[gt];fo(W,k,S,bt)}Pt&&Dt.render(S);for(let gt=0,wt=at.length;gt<wt;gt++){const bt=at[gt];uo(m,S,bt,bt.viewport)}}else k.length>0&&fo(W,k,S,F),Pt&&Dt.render(S),uo(m,S,F);R!==null&&(x.updateMultisampleRenderTarget(R),x.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,F),ae.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],j===!0&&ot.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Cs(S,F,V,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){W&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);const gt=Z.update(S),wt=S.material;wt.visible&&m.push(S,gt,wt,V,It.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const gt=Z.update(S),wt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),It.copy(gt.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){const bt=gt.groups;for(let kt=0,Gt=bt.length;kt<Gt;kt++){const Tt=bt[kt],Kt=wt[Tt.materialIndex];Kt&&Kt.visible&&m.push(S,gt,Kt,V,It.z,Tt)}}else wt.visible&&m.push(S,gt,wt,V,It.z,null)}}const at=S.children;for(let gt=0,wt=at.length;gt<wt;gt++)Cs(at[gt],F,V,W)}function uo(S,F,V,W){const k=S.opaque,at=S.transmissive,gt=S.transparent;f.setupLightsView(V),j===!0&&ot.setGlobalState(y.clippingPlanes,V),W&&yt.viewport(P.copy(W)),k.length>0&&Gi(k,F,V),at.length>0&&Gi(at,F,V),gt.length>0&&Gi(gt,F,V),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function fo(S,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Wn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Oi:pn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const at=f.state.transmissionRenderTarget[W.id],gt=W.viewport||P;at.setSize(gt.z,gt.w);const wt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(H),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Pt&&Dt.render(V);const bt=y.toneMapping;y.toneMapping=Cn;const kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),j===!0&&ot.setGlobalState(y.clippingPlanes,W),Gi(S,V,W),x.updateMultisampleRenderTarget(at),x.updateRenderTargetMipmap(at),St.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Tt=0,Kt=F.length;Tt<Kt;Tt++){const ce=F[Tt],le=ce.object,Re=ce.geometry,ee=ce.material,Ct=ce.group;if(ee.side===ln&&le.layers.test(W.layers)){const en=ee.side;ee.side=De,ee.needsUpdate=!0,po(le,V,W,Re,ee,Ct),ee.side=en,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(x.updateMultisampleRenderTarget(at),x.updateRenderTargetMipmap(at))}y.setRenderTarget(wt),y.setClearColor(H,$),kt!==void 0&&(W.viewport=kt),y.toneMapping=bt}function Gi(S,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,at=S.length;k<at;k++){const gt=S[k],wt=gt.object,bt=gt.geometry,kt=W===null?gt.material:W,Gt=gt.group;wt.layers.test(V.layers)&&po(wt,F,V,bt,kt,Gt)}}function po(S,F,V,W,k,at){S.onBeforeRender(y,F,V,W,k,at),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,F,V,W,S,at),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=De,k.needsUpdate=!0,y.renderBufferDirect(V,F,W,k,S,at),k.side=fn,k.needsUpdate=!0,y.renderBufferDirect(V,F,W,k,S,at),k.side=ln):y.renderBufferDirect(V,F,W,k,S,at),S.onAfterRender(y,F,V,W,k,at)}function Hi(S,F,V){F.isScene!==!0&&(F=Lt);const W=L.get(S),k=f.state.lights,at=f.state.shadowsArray,gt=k.state.version,wt=xt.getParameters(S,k.state,at,F,V),bt=xt.getProgramCacheKey(wt);let kt=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,kt===void 0&&(S.addEventListener("dispose",zt),kt=new Map,W.programs=kt);let Gt=kt.get(bt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===gt)return go(S,wt),Gt}else wt.uniforms=xt.getUniforms(S),S.onBeforeCompile(wt,y),Gt=xt.acquireProgram(wt,bt),kt.set(bt,Gt),W.uniforms=wt.uniforms;const Tt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=ot.uniform),go(S,wt),W.needsLights=uc(S),W.lightsStateVersion=gt,W.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function mo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=vs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function go(S,F){const V=L.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function hc(S,F,V,W,k){F.isScene!==!0&&(F=Lt),x.resetTextureUnits();const at=F.fog,gt=W.isMeshStandardMaterial?F.environment:null,wt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ei,bt=(W.isMeshStandardMaterial?N:v).get(W.envMap||gt),kt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color;let le=Cn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=y.toneMapping);const Re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=Re!==void 0?Re.length:0,Ct=L.get(W),en=f.state.lights;if(j===!0&&(rt===!0||S!==M)){const Fe=S===M&&W.id===E;ot.setState(W,S,Fe)}let ne=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==en.state.version||Ct.outputColorSpace!==wt||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==bt||W.fog===!0&&Ct.fog!==at||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==kt||Ct.vertexTangents!==Gt||Ct.morphTargets!==Tt||Ct.morphNormals!==Kt||Ct.morphColors!==ce||Ct.toneMapping!==le||Ct.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Ct.__version=W.version);let Ve=Ct.currentProgram;ne===!0&&(Ve=Hi(W,F,k));let jn=!1,Ie=!1,Ti=!1;const he=Ve.getUniforms(),Je=Ct.uniforms;if(yt.useProgram(Ve.program)&&(jn=!0,Ie=!0,Ti=!0),W.id!==E&&(E=W.id,Ie=!0),jn||M!==S){yt.buffers.depth.getReversed()?(tt.copy(S.projectionMatrix),gl(tt),_l(tt),he.setValue(I,"projectionMatrix",tt)):he.setValue(I,"projectionMatrix",S.projectionMatrix),he.setValue(I,"viewMatrix",S.matrixWorldInverse);const mn=he.map.cameraPosition;mn!==void 0&&mn.setValue(I,Et.setFromMatrixPosition(S.matrixWorld)),Ut.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&he.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ie=!0,Ti=!0)}if(k.isSkinnedMesh){he.setOptional(I,k,"bindMatrix"),he.setOptional(I,k,"bindMatrixInverse");const Fe=k.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),he.setValue(I,"boneTexture",Fe.boneTexture,x))}k.isBatchedMesh&&(he.setOptional(I,k,"batchingTexture"),he.setValue(I,"batchingTexture",k._matricesTexture,x),he.setOptional(I,k,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",k._indirectTexture,x),he.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",k._colorsTexture,x));const Ai=V.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Ft.update(k,V,Ve),(Ie||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,he.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Je.envMap.value=bt,Je.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Ie&&(he.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&dc(Je,Ti),at&&W.fog===!0&&ct.refreshFogUniforms(Je,at),ct.refreshMaterialUniforms(Je,W,G,Q,f.state.transmissionRenderTarget[S.id]),vs.upload(I,mo(Ct),Je,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vs.upload(I,mo(Ct),Je,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&he.setValue(I,"center",k.center),he.setValue(I,"modelViewMatrix",k.modelViewMatrix),he.setValue(I,"normalMatrix",k.normalMatrix),he.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fe=W.uniformsGroups;for(let mn=0,gn=Fe.length;mn<gn;mn++){const _o=Fe[mn];U.update(_o,Ve),U.bind(_o,Ve)}}return Ve}function dc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function uc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,F,V){L.get(S.texture).__webglTexture=F,L.get(S.depthTexture).__webglTexture=V;const W=L.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const V=L.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,V=0){R=S,T=F,A=V;let W=!0,k=null,at=!1,gt=!1;if(S){const bt=L.get(S);if(bt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(bt.__hasExternalTextures)x.rebindTextures(S,L.get(S.texture).__webglTexture,L.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Tt=S.depthTexture;if(bt.__boundDepthTexture!==Tt){if(Tt!==null&&L.has(Tt)&&(S.width!==Tt.image.width||S.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);const Gt=L.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?k=Gt[F][V]:k=Gt[F],at=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?k=L.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[V]:k=Gt,P.copy(S.viewport),O.copy(S.scissor),z=S.scissorTest}else P.copy(dt).multiplyScalar(G).floor(),O.copy(Rt).multiplyScalar(G).floor(),z=Ot;if(yt.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&yt.drawBuffers(S,k),yt.viewport(P),yt.scissor(O),yt.setScissorTest(z),at){const bt=L.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,V)}else if(gt){const bt=L.get(S.texture),kt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,V||0,kt)}E=-1},this.readRenderTargetPixels=function(S,F,V,W,k,at,gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){yt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const bt=S.texture,kt=bt.format,Gt=bt.type;if(!Ut.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&V>=0&&V<=S.height-k&&I.readPixels(F,V,W,k,Vt.convert(kt),Vt.convert(Gt),at)}finally{const bt=R!==null?L.get(R).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,W,k,at,gt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){const bt=S.texture,kt=bt.format,Gt=bt.type;if(!Ut.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&V>=0&&V<=S.height-k){yt.bindFramebuffer(I.FRAMEBUFFER,wt);const Tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(F,V,W,k,Vt.convert(kt),Vt.convert(Gt),0);const Kt=R!==null?L.get(R).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Kt);const ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ml(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Tt),I.deleteSync(ce),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,V=0){S.isTexture!==!0&&(Ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-V),k=Math.floor(S.image.width*W),at=Math.floor(S.image.height*W),gt=F!==null?F.x:0,wt=F!==null?F.y:0;x.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,gt,wt,k,at),yt.unbindTexture()},this.copyTextureToTexture=function(S,F,V=null,W=null,k=0){S.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let at,gt,wt,bt,kt,Gt,Tt,Kt,ce;const le=S.isCompressedTexture?S.mipmaps[k]:S.image;V!==null?(at=V.max.x-V.min.x,gt=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,kt=V.min.y,Gt=V.isBox3?V.min.z:0):(at=le.width,gt=le.height,wt=le.depth||1,bt=0,kt=0,Gt=0),W!==null?(Tt=W.x,Kt=W.y,ce=W.z):(Tt=0,Kt=0,ce=0);const Re=Vt.convert(F.format),ee=Vt.convert(F.type);let Ct;F.isData3DTexture?(x.setTexture3D(F,0),Ct=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),Ct=I.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),Ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const en=I.getParameter(I.UNPACK_ROW_LENGTH),ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ve=I.getParameter(I.UNPACK_SKIP_PIXELS),jn=I.getParameter(I.UNPACK_SKIP_ROWS),Ie=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt);const Ti=S.isDataArrayTexture||S.isData3DTexture,he=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Je=L.get(S),Ai=L.get(F),Fe=L.get(Je.__renderTarget),mn=L.get(Ai.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Fe.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let gn=0;gn<wt;gn++)Ti&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(S).__webglTexture,k,Gt+gn),S.isDepthTexture?(he&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(F).__webglTexture,k,ce+gn),I.blitFramebuffer(bt,kt,at,gt,Tt,Kt,at,gt,I.DEPTH_BUFFER_BIT,I.NEAREST)):he?I.copyTexSubImage3D(Ct,k,Tt,Kt,ce+gn,bt,kt,at,gt):I.copyTexSubImage2D(Ct,k,Tt,Kt,ce+gn,bt,kt,at,gt);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ct,k,Tt,Kt,ce,at,gt,wt,Re,ee,le.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ct,k,Tt,Kt,ce,at,gt,wt,Re,le.data):I.texSubImage3D(Ct,k,Tt,Kt,ce,at,gt,wt,Re,ee,le):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Tt,Kt,at,gt,Re,ee,le.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Tt,Kt,le.width,le.height,Re,le.data):I.texSubImage2D(I.TEXTURE_2D,k,Tt,Kt,at,gt,Re,ee,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,en),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,jn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie),k===0&&F.generateMipmaps&&I.generateMipmap(Ct),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,F,V=null,W=null,k=0){return S.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],k=arguments[4]||0),Ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,V,W,k)},this.initRenderTarget=function(S){L.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,yt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class so{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rp extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ac extends wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ga=new Zt,qr=new eo,hs=new Ts,ds=new D;class Pp extends ye{constructor(t=new Ce,e=new ac){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;ga.copy(s).invert(),qr.copy(t.ray).applyMatrix4(ga);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=h.getX(g);ds.fromBufferAttribute(d,m),_a(ds,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)ds.fromBufferAttribute(d,g),_a(ds,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _a(i,t,e,n,s,r,o){const a=qr.distanceSqToPoint(i);if(a<e){const c=new D;qr.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ke extends Ae{constructor(t,e,n,s,r,o,a,c,h){super(t,e,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],h=new D,l=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[u]/t+1)/2,l.y=(o[u+1]/t+1)/2,c.push(l.x,l.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bt extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(p,2));function w(){const y=new D,B=new D;let T=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const E=[],M=R/r,P=M*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,H=z*c+a,$=Math.sin(H),X=Math.cos(H);B.x=P*$,B.y=-M*n+m,B.z=P*X,d.push(B.x,B.y,B.z),y.set($,A,X).normalize(),u.push(y.x,y.y,y.z),p.push(z,1-M),E.push(g++)}_.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const M=_[E][R],P=_[E+1][R],O=_[E+1][R+1],z=_[E][R+1];(t>0||E!==0)&&(l.push(M,P,z),T+=3),(e>0||E!==r-1)&&(l.push(P,O,z),T+=3)}h.addGroup(f,T,0),f+=T}function b(y){const B=g,T=new Nt,A=new D;let R=0;const E=y===!0?t:e,M=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const H=O/s*c+a,$=Math.cos(H),X=Math.sin(H);A.x=E*X,A.y=m*M,A.z=E*$,d.push(A.x,A.y,A.z),u.push(0,M,0),T.x=$*.5+.5,T.y=X*.5*M+.5,p.push(T.x,T.y),g++}for(let O=0;O<s;O++){const z=B+O,H=P+O;y===!0?l.push(H,H+1,z):l.push(H+1,H,z),R+=3}h.addGroup(f,R,y===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Bt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Es(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],h=[],l=[];let d=t;const u=(e-t)/s,p=new D,g=new Nt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,l.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const w=f+m,b=w,y=w+n+1,B=w+n+2,T=w+1;a.push(b,y,T),a.push(y,B,T)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ue extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const l=[],d=new D,u=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],b=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){const T=B/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+y,1-b),w.push(h++)}l.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const b=l[f][w+1],y=l[f][w],B=l[f+1][w],T=l[f+1][w+1];(f!==0||o>0)&&p.push(b,y,T),(f!==n-1||c<Math.PI)&&p.push(y,B,T)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ne extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],h=[],l=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),u.subVectors(d,l).normalize(),c.push(u.x,u.y,u.z),h.push(g/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,w=(s+1)*p+g;o.push(_,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lt extends wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ss extends lt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ao extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ir=new Zt,va=new D,xa=new D;class cc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;va.setFromMatrixPosition(t.matrixWorld),e.position.copy(va),xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xa),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lp extends cc{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Mi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ma extends ao{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ya=new Zt,Di=new D,sr=new D;class Dp extends cc{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),s.makeTranslation(-Di.x,-Di.y,-Di.z),ya.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya)}}class Sn extends ao{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ip extends ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ea{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bp extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);const Sa={type:"change"},co={type:"start"},lc={type:"end"},us=new eo,wa=new wn,Up=Math.cos(70*Wa.DEG2RAD),me=new D,Pe=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rr=1e-6;class Np extends Bp{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Xn,this._lastTargetPosition=new D,this._quat=new Xn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ea,this._sphericalDelta=new Ea,this._scale=1,this._panOffset=new D,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new D,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kp.bind(this),this._onPointerDown=Fp.bind(this),this._onPointerUp=Op.bind(this),this._onContextMenu=qp.bind(this),this._onMouseWheel=Hp.bind(this),this._onKeyDown=Vp.bind(this),this._onTouchStart=Wp.bind(this),this._onTouchMove=Xp.bind(this),this._onMouseDown=zp.bind(this),this._onMouseMove=Gp.bind(this),this._interceptControlDown=jp.bind(this),this._interceptControlUp=Yp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sa),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new D(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(us.origin.copy(this.object.position),us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(us.direction))<Up?this.object.lookAt(this.target):(wa.setFromNormalAndCoplanarPoint(this.object.up,this.target),us.intersectPlane(wa,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rr||this._lastTargetPosition.distanceToSquared(this.target)>rr?(this.dispatchEvent(Sa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;me.copy(s).sub(this.target);let r=me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function kp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Op(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lc),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(co)}function Gp(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hp(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(co),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lc))}function Vp(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Wp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(co)}function Xp(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function qp(i){this.enabled!==!1&&i.preventDefault()}function jp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ce;let h=0;for(let l=0;l<i.length;++l){const d=i[l];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,p,l),h+=p}}if(e){let l=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+l);l+=i[u].attributes.position.count}c.setIndex(d)}for(const l in r){const d=ba(r[l]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,d)}for(const l in o){const d=o[l][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[l].length;++_)p.push(o[l][_][u]);const g=ba(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function ba(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const o=new t(r),a=new Ge(o,e,n);let c=0;for(let h=0;h<i.length;++h){const l=i[h];if(l.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=l.count;u<p;u++)for(let g=0;g<e;g++){const _=l.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}class $p{constructor(t){this.scene=t,this.group=new At,this.neonElements=[],this.cityBuildings=[],this.vipLights=[],this.wallWashNeonMats=[],this.columnLedMats=[],this.billboardNeonMats=[],this.skywayTrails=[],this.artLightboxMats=[],this.stageCanvas=null,this.stageTexture=null,this.stageCtx=null,this.stagePhase=0,this.init(),this.scene.add(this.group)}init(){this.createFloor(),this.createWalls(),this.createCeilingTrusses(),this.createWindowAndSkyline(),this.createAcousticPanels(),this.createNeonSigns(),this.createClubArtAndPosters(),this.createVIPLounge(),this.createStageScreen()}createFloor(){const t=new ge(26,24),e=new lt({color:658194,roughness:.12,metalness:.88}),n=new C(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n);const s=new Yt({color:61695,transparent:!0,opacity:.45});this.wallWashNeonMats.push(s);const r=new C(new ge(16,.05),s);r.rotation.x=-Math.PI/2,r.position.set(0,.006,-1.2),this.group.add(r);const o=new oo(4.2,4.26,64),a=new C(o,s);a.rotation.x=-Math.PI/2,a.position.set(0,.006,3.5),this.group.add(a);const c=new C(new ge(.04,14),s);c.rotation.x=-Math.PI/2,c.position.set(-5.8,.006,4);const h=new C(new ge(.04,14),s);h.rotation.x=-Math.PI/2,h.position.set(5.8,.006,4),this.group.add(c,h)}createWalls(){const t=new lt({color:1184541,roughness:.75,metalness:.25}),e=new C(new q(7,9,.4),t);e.position.set(-8.5,4.5,-9.8),e.receiveShadow=!0,this.group.add(e);const n=new C(new q(7,9,.4),t);n.position.set(8.5,4.5,-9.8),n.receiveShadow=!0,this.group.add(n);const s=new C(new q(24,1.8,.4),t);s.position.set(0,8.1,-9.8),this.group.add(s);const r=new C(new q(24,1.2,.4),t);r.position.set(0,.6,-9.8),this.group.add(r);const o=new C(new q(.4,9,24),t);o.position.set(-12,4.5,2),o.receiveShadow=!0,this.group.add(o);const a=new C(new q(.4,9,24),t);a.position.set(12,4.5,2),a.receiveShadow=!0,this.group.add(a);const c=new lt({color:526608,roughness:.85,metalness:.2}),h=new C(new q(26,.4,24),c);h.position.set(0,9,2),this.group.add(h);const l=[{x:-11.7,z:-1.5},{x:-11.7,z:6.5},{x:11.7,z:-1.5},{x:11.7,z:6.5}],d=new lt({color:1447972,roughness:.6,metalness:.4}),u=new Yt({color:61695});this.columnLedMats.push(u),l.forEach(y=>{const B=new C(new q(.8,9,1.2),d);B.position.set(y.x,4.5,y.z),B.castShadow=!0,B.receiveShadow=!0,this.group.add(B);const T=y.x<0?y.x+.38:y.x-.38,A=new C(new q(.04,8.8,.08),u);A.position.set(T,4.5,y.z),this.group.add(A)});const p=new Yt({color:16711807,transparent:!0,opacity:.8});this.wallWashNeonMats.push(p);const g=new C(new q(.06,.06,23.6),p);g.position.set(-11.75,.04,2);const _=new C(new q(.06,.06,23.6),p);_.position.set(11.75,.04,2);const m=new C(new q(23.6,.06,.06),p);m.position.set(0,.04,-9.75),this.group.add(g,_,m);const f=new C(new q(.06,.06,23.6),p);f.position.set(-11.75,8.75,2);const w=new C(new q(.06,.06,23.6),p);w.position.set(11.75,8.75,2);const b=new C(new q(23.6,.06,.06),p);b.position.set(0,8.75,-9.75),this.group.add(f,w,b)}createCeilingTrusses(){const t=new lt({color:2369336,metalness:.95,roughness:.2}),e=[],n=(h,l,d,u,p)=>{const g=Math.hypot(u-h,p-d),_=Math.atan2(u-h,p-d),m=.03,f=new Bt(m,m,g,8),w=f.clone();w.rotateX(Math.PI/2),w.rotateY(_),w.translate((h+u)/2,l+.18,(d+p)/2),e.push(w);const b=f.clone();b.rotateX(Math.PI/2),b.rotateY(_),b.translate((h+u)/2-.15*Math.cos(_),l-.12,(d+p)/2+.15*Math.sin(_)),e.push(b);const y=f.clone();y.rotateX(Math.PI/2),y.rotateY(_),y.translate((h+u)/2+.15*Math.cos(_),l-.12,(d+p)/2-.15*Math.sin(_)),e.push(y),f.dispose()};n(-5.5,8.25,-9.2,-5.5,11),n(5.5,8.25,-9.2,5.5,11),n(-11.5,8.25,-2,11.5,-2),n(-11.5,8.25,4.5,11.5,4.5),n(-11.5,8.25,9.8,11.5,9.8);const s=Tn(e);e.forEach(h=>h.dispose());const r=new C(s,t);r.castShadow=!0,this.group.add(r);const o=new lt({color:1118746,metalness:.9,roughness:.3}),a=new Yt({color:61695});this.wallWashNeonMats.push(a),[{x:-4,z:-2,rotX:Math.PI/4,rotY:Math.PI/6},{x:4,z:-2,rotX:Math.PI/4,rotY:-Math.PI/6},{x:-3,z:4.5,rotX:Math.PI/6,rotY:Math.PI/4},{x:3,z:4.5,rotX:Math.PI/6,rotY:-Math.PI/4},{x:0,z:4.5,rotX:0,rotY:0}].forEach(h=>{const l=new At;l.position.set(h.x,8,h.z),l.rotation.set(h.rotX,h.rotY,0);const d=new C(new Bt(.14,.18,.45,16),o);d.rotation.x=Math.PI/2,l.add(d);const u=new C(new ro(.13,16),a);u.position.z=.23,l.add(u),this.group.add(l)})}createWindowAndSkyline(){const t=new At;t.position.set(0,0,-14);const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#03040a"),s.addColorStop(.4,"#0e081e"),s.addColorStop(.75,"#1e0836"),s.addColorStop(.92,"#ff0055"),s.addColorStop(1,"#ffaa00"),n.fillStyle=s,n.fillRect(0,0,1024,512),n.fillStyle="rgba(0, 240, 255, 0.12)",n.beginPath(),n.arc(512,450,280,0,Math.PI*2),n.fill();const r=new Ke(e),o=new C(new ge(54,26),new Yt({map:r}));o.position.set(0,7.5,-4.5),t.add(o);const a=document.createElement("canvas");a.width=512,a.height=512;const c=a.getContext("2d");c.fillStyle="#06070d",c.fillRect(0,0,512,512);const h=["#00f0ff","#ff007f","#ffd700","#00ff88","#ffffff","#ff6600"];for(let R=12;R<500;R+=20)for(let E=12;E<500;E+=16)Math.random()<.42&&(c.fillStyle=h[Math.floor(Math.random()*h.length)],c.shadowColor=c.fillStyle,c.shadowBlur=6,c.fillRect(E,R,8,12));const l=new Ke(a);l.wrapS=Fi,l.wrapT=Fi,l.repeat.set(1.5,3);const d=new lt({color:1119007,map:l,roughness:.3,metalness:.7,emissive:1119007,emissiveIntensity:.6}),u=[61695,16711807,16764928,65416,16777215],p=[];for(let R=0;R<55;R++){const E=.9+Math.random()*1.8,M=4.5+Math.random()*9.5,P=.9+Math.random()*1.8,O=-22+R*.8+(Math.random()-.5)*.4,z=(Math.random()-.5)*4,H=new q(E,M,P);H.applyMatrix4(new Zt().makeTranslation(O,M/2-1,z)),p.push(H);const $=new ue(.08,8,8),X=u[Math.floor(Math.random()*u.length)],Q=new Yt({color:X}),G=new C($,Q);G.position.set(O,M-.9,z),t.add(G),this.cityBuildings.push(G)}const g=Tn(p);p.forEach(R=>R.dispose()),t.add(new C(g,d));const _=(R,E,M,P,O)=>{const z=document.createElement("canvas");z.width=512,z.height=128;const H=z.getContext("2d");H.fillStyle="#060812",H.fillRect(0,0,512,128),H.font="900 48px Orbitron, sans-serif",H.fillStyle=O,H.shadowColor=O,H.shadowBlur=20,H.textAlign="center",H.textBaseline="middle",H.fillText(R,256,64);const $=new Ke(z),X=new C(new ge(3.6,.9),new Yt({map:$,transparent:!0,opacity:.9}));X.position.set(E,M,P),t.add(X)};_("⚡ JMF 24/7 ⚡",-6,9.5,-2,"#00f0ff"),_("● CYBER RADIO ●",5.5,10.2,-1.5,"#ff007f"),_("NEO TOKYO",0,11.5,-3,"#00ff88");const m=new Yt({color:61695,transparent:!0,opacity:.8}),f=new Yt({color:16711765,transparent:!0,opacity:.8});for(let R=0;R<6;R++){const E=new C(new Bt(.04,.04,3.2,8),R%2===0?m:f);E.rotation.z=Math.PI/2;const M=3.5+R*1.1,P=-18+R*6;E.position.set(P,M,-1+R%3*.8),t.add(E),this.skywayTrails.push({mesh:E,speed:.08+R%3*.04,dir:R%2===0?1:-1})}const w=new lt({color:1710886,metalness:.9,roughness:.2}),b=[-4.5,-1.5,1.5,4.5].map(R=>{const E=new q(.14,7,.2);return E.applyMatrix4(new Zt().makeTranslation(R,4.7,-9.8)),E}),y=new q(12,.14,.2);y.applyMatrix4(new Zt().makeTranslation(0,5,-9.8)),b.push(y);const B=Tn(b);b.forEach(R=>R.dispose()),this.group.add(new C(B,w));const T=new Ss({color:1122867,transparent:!0,opacity:.25,roughness:.1,metalness:.1,transmission:.6,ior:1.5}),A=new C(new ge(12,7),T);A.position.set(0,4.7,-9.75),this.group.add(A),this.group.add(t)}createClubArtAndPosters(){const t=(e,n,s,r,o,a,c,h)=>{const l=document.createElement("canvas");l.width=512,l.height=768;const d=l.getContext("2d"),u=d.createLinearGradient(0,0,512,768);u.addColorStop(0,"#06070e"),u.addColorStop(1,"#12081f"),d.fillStyle=u,d.fillRect(0,0,512,768),d.strokeStyle=c,d.lineWidth=4,d.shadowColor=c,d.shadowBlur=15,d.beginPath(),d.arc(256,340,160,0,Math.PI*2),d.stroke(),d.strokeStyle=h,d.lineWidth=2,d.beginPath();for(let w=0;w<12;w++)d.moveTo(96,440+w*16),d.lineTo(416,440+w*16);d.stroke(),d.font="900 36px Orbitron, sans-serif",d.fillStyle="#ffffff",d.textAlign="center",d.fillText(e,256,120),d.font='700 20px "Space Grotesk", sans-serif',d.fillStyle=c,d.fillText(n,256,170),d.font="800 16px Orbitron, sans-serif",d.fillStyle=h,d.fillText("JMF 24/7 SOUND SYSTEM",256,710);const p=new Ke(l),g=new lt({map:p,emissive:1118498,emissiveIntensity:.6,roughness:.2,metalness:.8});this.artLightboxMats.push(g);const _=new C(new ge(2,3),g);_.position.set(s,r,o),_.rotation.y=a,this.group.add(_);const m=new Yt({color:c});this.wallWashNeonMats.push(m);const f=new C(new q(2.08,3.08,.06),new lt({color:395020}));f.position.set(s+(a>0?-.04:.04),r,o),f.rotation.y=a,this.group.add(f)};t("UNDERGROUND","LIVE ELECTRONIC SETS",-11.72,4.8,-4.5,Math.PI/2,"#00f0ff","#ff007f"),t("ACID MATRIX","ANALOG MODULAR SYNTH",-11.72,4.8,1.2,Math.PI/2,"#00ff88","#ffd700"),t("CYBER SESSIONS","TOKYO NIGHTS & BASS",11.72,4.8,-4.5,-Math.PI/2,"#ff007f","#00f0ff"),t("DEEP SUB","PRO HARDWARE BROADCAST",11.72,4.8,1.2,-Math.PI/2,"#9d4edd","#00f0ff")}createAcousticPanels(){const t=new lt({color:1579044,roughness:.95,metalness:.05}),e=(n,s)=>{const r=new At;for(let o=0;o<3;o++)for(let a=0;a<6;a++){const c=new C(new q(.9,.9,.12),t);c.position.set((a-2.5)*1.2,3+o*1.2,0),c.rotation.z=(o+a)%2===0?0:Math.PI/4,r.add(c)}r.position.set(n,0,1),r.rotation.y=s,this.group.add(r)};e(-11.75,Math.PI/2),e(11.75,-Math.PI/2)}createNeonSigns(){const t=new C(new q(5.2,1.4,.1),new lt({color:328968,roughness:.5}));t.position.set(0,8,-9.5),this.group.add(t);const e=new Yt({color:16711748}),n=new C(new q(5,.05,.04),e);n.position.set(0,8.6,-9.42);const s=new C(new q(5,.05,.04),e);s.position.set(0,7.4,-9.42),this.group.add(n,s);const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle="#050508",o.fillRect(0,0,1024,256),o.font="900 80px Orbitron, sans-serif",o.fillStyle="#00f0ff",o.shadowColor="#00f0ff",o.shadowBlur=24,o.textAlign="center",o.textBaseline="middle",o.fillText("JMF RADIO",512,90),o.font="800 36px Orbitron, sans-serif",o.fillStyle="#ff0044",o.shadowColor="#ff0044",o.shadowBlur=18,o.fillText("● 24/7 LIVE ON AIR ●",512,180);const a=new Ke(r),c=new Yt({map:a,transparent:!0}),h=new C(new ge(4.8,1.15),c);h.position.set(0,8,-9.42),this.group.add(h);const l=new Yt({color:61695}),d=[];for(let p=0;p<9;p++){const g=.6+Math.sin(p*.7)*.9,_=new q(.08,g,.05);_.applyMatrix4(new Zt().makeTranslation(-11.7,6,-3+p*.45)),d.push(_)}const u=Tn(d);d.forEach(p=>p.dispose()),this.group.add(new C(u,l)),this.neonElements.push(l)}createVIPLounge(){const t=new At;t.position.set(-7.5,0,3.5),t.rotation.y=Math.PI/2;const e=new lt({color:1446431,roughness:.5,metalness:.2}),n=new lt({color:10309341,roughness:.6}),s=new C(new q(4.2,.45,1.1),e);s.position.set(0,.225,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new C(new q(4.2,.9,.35),e);r.position.set(0,.8,-.4),t.add(r);const o=new C(new q(.35,.7,1.1),e);o.position.set(-2,.6,0),t.add(o);for(let b=0;b<4;b++){const y=new C(new q(.5,.45,.18),n);y.position.set(-1.4+b*.9,.55,-.25),y.rotation.x=-Math.PI/16,t.add(y)}const a=new C(new q(3,.45,1.1),e);a.position.set(0,.225,2.4),a.castShadow=!0,t.add(a);const c=new C(new q(3,.9,.35),e);c.position.set(0,.8,2.8),t.add(c);const h=new Ss({color:1118498,transparent:!0,opacity:.6,roughness:.1,metalness:.3,transmission:.7}),l=new C(new q(2.4,.05,1),h);l.position.set(0,.45,1.2),t.add(l);const d=new C(new q(2.2,.4,.8),new lt({color:658194,roughness:.3,metalness:.8}));d.position.set(0,.2,1.2),t.add(d);const u=new Bt(.08,.1,.2,16),p=new lt({color:16711807,emissive:16711807,emissiveIntensity:.8,roughness:.1}),g=new C(u,p);g.position.set(0,.58,1.2),t.add(g),this.vipLights.push(p);const _=document.createElement("canvas");_.width=512,_.height=128;const m=_.getContext("2d");m.fillStyle="#05060a",m.fillRect(0,0,512,128),m.font="900 48px Orbitron, sans-serif",m.fillStyle="#ffd000",m.shadowColor="#ffd000",m.shadowBlur=16,m.textAlign="center",m.textBaseline="middle",m.fillText("VIP LOUNGE",256,64);const f=new Ke(_),w=new C(new ge(2.4,.6),new Yt({map:f}));w.position.set(0,3.2,-.6),t.add(w),this.group.add(t)}createStageScreen(){const t=new At;t.position.set(0,0,11.2),this.stageCanvas=document.createElement("canvas"),this.stageCanvas.width=1024,this.stageCanvas.height=512,this.stageCtx=this.stageCanvas.getContext("2d"),this.stageTexture=new Ke(this.stageCanvas),this.stageTexture.minFilter=ze,this.stageTexture.magFilter=ze;const e=new ge(10.5,5.2),n=new Yt({map:this.stageTexture,side:fn}),s=new C(e,n);s.position.set(0,4.4,-.1),s.rotation.y=Math.PI,t.add(s);const r=new lt({color:460815,metalness:.9,roughness:.2}),o=new C(new q(11,.2,.3),r);o.position.set(0,7.1,0);const a=new C(new q(11,.3,.3),r);a.position.set(0,1.7,0);const c=new C(new q(.3,5.6,.3),r);c.position.set(-5.35,4.4,0);const h=new C(new q(.3,5.6,.3),r);h.position.set(5.35,4.4,0),t.add(o,a,c,h);const l=new Yt({color:61695}),d=new C(new q(10.7,.04,.04),l);d.position.set(0,7,-.15),t.add(d);const u=new C(new q(12,.5,2.5),new lt({color:855576,metalness:.7,roughness:.3}));u.position.set(0,.25,-1),t.add(u);const p=(g,_,m)=>{const f=document.createElement("canvas");f.width=512,f.height=128;const w=f.getContext("2d");w.fillStyle="#05060d",w.fillRect(0,0,512,128),w.font="900 44px Orbitron, sans-serif",w.fillStyle=m,w.shadowColor=m,w.shadowBlur=18,w.textAlign="center",w.textBaseline="middle",w.fillText(g,256,64);const b=new Ke(f),y=new C(new ge(3.6,.9),new Yt({map:b}));y.position.set(_,6.2,3.5),y.rotation.y=_<0?Math.PI/2:-Math.PI/2,this.group.add(y)};p("VIP LOUNGE",-11.75,"#ff007f"),p("COCKTAIL BAR",11.75,"#00f0ff"),this.group.add(t),this.drawInitialStageScreen()}setTrackInfo(t,e,n,s){this.currentTrack=t,this.nextTrack=e,this.elapsedTime=n||0,this.duration=s||180}drawInitialStageScreen(){if(!this.stageCtx)return;const t=this.stageCtx;t.fillStyle="#05060c",t.fillRect(0,0,1024,512),t.font="900 76px Orbitron, sans-serif",t.fillStyle="#ffffff",t.shadowColor="#00f0ff",t.shadowBlur=24,t.textAlign="center",t.textBaseline="middle",t.fillText("JMF RADIO",512,180),t.font='700 22px "Space Grotesk", sans-serif',t.fillStyle="#00f0ff",t.shadowColor="#00f0ff",t.shadowBlur=12,t.fillText("● 24/7 PRO VIRTUAL DJ ● ON AIR ●",512,240),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}updateStageScreen(t,e){var H,$,X,Q;if(!this.stageCtx)return;const n=this.stageCtx,s=1024,r=512,o=performance.now();this.vjMode===void 0&&(this.vjMode=0,this.lastVJSwitch=o,this.spectrumPeaks=new Float32Array(48),this.scrollTickerX=0,this.radialAngle=0),(o-this.lastVJSwitch>18e3||t.bass>.88&&Math.random()<.03&&o-this.lastVJSwitch>5e3)&&(this.vjMode=(this.vjMode+1)%5,this.lastVJSwitch=o);const a=e?"#"+e.primary.toString(16).padStart(6,"0"):"#00f0ff",c=e?"#"+e.secondary.toString(16).padStart(6,"0"):"#ff007f",h=e?"#"+e.accent.toString(16).padStart(6,"0"):"#9d4edd";n.fillStyle="rgba(5, 6, 14, 0.28)",n.fillRect(0,0,s,r);const l=t.bass||0,d=t.beat||0,u=t.treble||0,p=t.rawArray||[],g=o*.002;if(this.vjMode===0){n.lineWidth=3+l*4;for(let G=0;G<4;G++){n.beginPath(),n.strokeStyle=G%2===0?a:c,n.shadowColor=n.strokeStyle,n.shadowBlur=14+l*16;for(let et=0;et<s;et+=16){const st=p[et/s*32|0]||0,dt=r/2+Math.sin(et*.015+g*2+G)*(40+l*70)+st/255*50;et===0?n.moveTo(et,dt):n.lineTo(et,dt)}n.stroke()}}else if(this.vjMode===1){const et=(s-120)/40;for(let st=0;st<40;st++){const Rt=(p[st%p.length]||0)/255*260*(1+l*.5);this.spectrumPeaks[st]=Math.max(Rt,(this.spectrumPeaks[st]||0)*.92);const Ot=60+st*et,Y=r-60-this.spectrumPeaks[st],j=n.createLinearGradient(0,Y,0,r-60);j.addColorStop(0,c),j.addColorStop(.5,a),j.addColorStop(1,"rgba(0, 240, 255, 0.1)"),n.fillStyle=j,n.shadowColor=a,n.shadowBlur=10,n.fillRect(Ot+2,Y,et-4,this.spectrumPeaks[st])}}else if(this.vjMode===2){n.strokeStyle=a,n.shadowColor=a,n.shadowBlur=12,n.lineWidth=1.5;const G=r*.45;for(let et=-s;et<s*2;et+=64)n.beginPath(),n.moveTo(s/2,G),n.lineTo(et+Math.sin(g)*40,r),n.stroke();for(let et=G;et<r;et+=24+l*12)n.beginPath(),n.moveTo(0,et),n.lineTo(s,et),n.stroke()}else if(this.vjMode===3){this.radialAngle+=.02+l*.04;const G=s/2,et=r/2;for(let st=0;st<5;st++){const dt=(st*50+g*80%250)*(1+l*.3);n.beginPath(),n.arc(G,et,dt,0,Math.PI*2),n.strokeStyle=st%2===0?a:c,n.shadowColor=n.strokeStyle,n.shadowBlur=16,n.lineWidth=2+d*4,n.stroke()}}else{n.lineWidth=3,n.strokeStyle=h,n.shadowColor=h,n.shadowBlur=20,n.beginPath();for(let G=0;G<Math.PI*2;G+=.05){const et=s/2+Math.sin(G*3+g*3)*(180+l*60),st=r/2+Math.cos(G*2+g*2)*(120+u*50);G===0?n.moveTo(et,st):n.lineTo(et,st)}n.closePath(),n.stroke()}n.fillStyle="rgba(5, 6, 12, 0.75)",n.fillRect(0,0,s,52),n.fillStyle="#ff0055",n.shadowColor="#ff0055",n.shadowBlur=12,n.beginPath(),n.arc(32,26,7+d*3,0,Math.PI*2),n.fill(),n.font="800 14px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowBlur=0,n.textAlign="left",n.textBaseline="middle",n.fillText("ON AIR  |  JMF RADIO 24/7",52,26);const _=(H=this.currentTrack)==null?void 0:H.genre,m=_?(_.name||"ALL STYLES").replace(/^[\p{Emoji}\p{Extended_Pictographic}\uFE0F\s]+/u,"").trim():"ALL STYLES",f=(_==null?void 0:_.color)||"#00f0ff";n.font="900 13px Orbitron, sans-serif";const w=n.measureText(m).width+24,b=512-w/2;n.fillStyle="rgba(0, 0, 0, 0.6)",n.strokeStyle=f,n.lineWidth=1.5,n.shadowColor=f,n.shadowBlur=10,n.beginPath(),n.roundRect(b,12,w,28,14),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.textAlign="center",n.fillText(m,512,26);const y=(($=this.currentTrack)==null?void 0:$.bpm)||128,B=Math.floor(this.elapsedTime/60),T=Math.floor(this.elapsedTime%60).toString().padStart(2,"0"),A=Math.floor(this.duration/60),R=Math.floor(this.duration%60).toString().padStart(2,"0");n.font="700 13px Orbitron, sans-serif",n.fillStyle="#00f0ff",n.shadowColor="#00f0ff",n.shadowBlur=8,n.textAlign="right",n.fillText(`BPM: ${y}  |  ${B}:${T} / ${A}:${R}`,s-24,26);const E=(X=this.currentTrack)!=null&&X.artist?this.currentTrack.artist.toUpperCase():"JMF RESIDENT DJ",M=(Q=this.currentTrack)!=null&&Q.title?this.currentTrack.title.toUpperCase():"LIVE AUDIO BROADCAST";n.save(),n.translate(512,135);const P=1+(t.bass||0)*.08;n.scale(P,P),n.font="900 42px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowColor=(t.bass||0)>.65?c:h,n.shadowBlur=20+(t.bass||0)*20,n.textAlign="center",n.textBaseline="middle",n.fillText(E.length>28?E.substring(0,26)+"...":E,0,0),n.restore(),n.save(),n.font='700 26px "Space Grotesk", sans-serif',n.fillStyle=h,n.shadowColor=h,n.shadowBlur=14,n.textAlign="center",n.textBaseline="middle";const O=n.measureText(M).width;O>800?(this.scrollTickerX=(this.scrollTickerX-1.2)%(O+200),n.fillText(M,512+this.scrollTickerX,195),n.fillText(M,512+this.scrollTickerX+O+200,195)):n.fillText(M,512,195),n.restore();const z=["CYBER WAVES","SPECTRUM PEAKS","HYPERSPACE GRID","RADIAL ORBIT","VECTOR SCOPE"];n.font="700 11px Orbitron, sans-serif",n.fillStyle="rgba(148, 163, 184, 0.4)",n.shadowBlur=0,n.textAlign="left",n.fillText(`[ VJ: ${z[this.vjMode]} ]`,24,r-18),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}update(t,e){const n=performance.now()*.002,s=t?t.bass:0,r=t?t.beat:0;for(let o=0;o<this.cityBuildings.length;o++)this.cityBuildings[o].scale.setScalar(.8+.4*Math.sin(n*2+o));for(let o of this.skywayTrails)o.mesh.position.x+=o.speed*o.dir,o.dir>0&&o.mesh.position.x>22?o.mesh.position.x=-22:o.dir<0&&o.mesh.position.x<-22&&(o.mesh.position.x=22);if(e){for(let o of this.vipLights)o.emissive.setHex(e.accent||16711807),o.emissiveIntensity=.5+s*1.5;for(let o of this.columnLedMats)o.color.setHex(e.primary||61695);for(let o of this.wallWashNeonMats)o.opacity=.45+s*.45+r*.2,o.color&&e.primary&&o.color.setHex(e.primary);for(let o of this.artLightboxMats)o.emissiveIntensity=.4+s*.6+r*.4}this.updateStageScreen(t,e)}}class Jp{constructor(t){this.scene=t,this.group=new At,this.speakers=[],this.subCones=[],this.tweeters=[],this.eqLedBars=[],this.hornMaterials=[],this.init(),this.scene.add(this.group)}init(){this.createSpeakerTower(-3.4,0,-2.6,Math.PI/8),this.createSpeakerTower(3.4,0,-2.6,-Math.PI/8),this.createSubBassBin(-4.8,0,.2,Math.PI/6),this.createSubBassBin(4.8,0,.2,-Math.PI/6)}createSpeakerTower(t,e,n,s){const r=new At;r.position.set(t,e,n),r.rotation.y=s;const o=new lt({color:789780,roughness:.35,metalness:.5}),a=new C(new q(1.3,3.6,1.1),o);a.position.y=1.8,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const c=new lt({color:1447972,roughness:.2,metalness:.7}),h=new C(new q(1.16,3.48,.08),c);h.position.set(0,1.8,.55),r.add(h);const l=this.createWooferCone(0,.95,.59,.44);r.add(l.group),this.subCones.push(l);const d=this.createWooferCone(0,2.05,.59,.38);r.add(d.group),this.subCones.push(d);const u=new lt({color:10309341,emissive:10309341,emissiveIntensity:.4,roughness:.15,metalness:.85});this.hornMaterials.push(u);const p=new Es(.34,.45,16,1,!0),g=new C(p,u);g.rotation.x=-Math.PI/2,g.position.set(0,3,.62),r.add(g);const _=new Bt(.12,.08,.2,16),m=new lt({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1,metalness:.9}),f=new C(_,m);f.rotation.x=Math.PI/2,f.position.set(0,3,.68),r.add(f),this.tweeters.push(f);const w=new Yt({color:61695});for(let B=0;B<12;B++){const T=new C(new q(.04,.08,.02),w.clone());T.position.set(.61,.8+B*.18,.52),r.add(T),this.eqLedBars.push(T)}const b=new Yt({color:61695}),y=new C(new q(.02,.35,.7),b);y.position.set(.66,3.2,0),r.add(y),this.group.add(r),this.speakers.push(r)}createSubBassBin(t,e,n,s){const r=new At;r.position.set(t,e,n),r.rotation.y=s;const o=new lt({color:658192,roughness:.4,metalness:.4}),a=new C(new q(1.6,.9,1.2),o);a.position.y=.45,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const c=this.createWooferCone(-.42,.45,.61,.34),h=this.createWooferCone(.42,.45,.61,.34);r.add(c.group,h.group),this.subCones.push(c,h);const l=new Bt(.12,.12,.15,16),d=new lt({color:61695,emissive:61695,emissiveIntensity:.3}),u=new C(l,d);u.rotation.x=Math.PI/2,u.position.set(0,.45,.6),r.add(u),this.group.add(r)}createWooferCone(t,e,n,s){const r=new At;r.position.set(t,e,n);const o=new Ne(s,.035,16,32),a=new lt({color:1118485,roughness:.9}),c=new C(o,a);r.add(c);const h=new Es(s,.14,32,1,!0),l=new lt({color:2237488,roughness:.3,metalness:.4}),d=new C(h,l);d.rotation.x=-Math.PI/2,r.add(d);const u=new ue(s*.38,16,16),p=new lt({color:658192,roughness:.2,metalness:.8}),g=new C(u,p);return g.scale.z=.5,r.add(g),{group:r,coneMesh:d,cap:g,baseRadius:s}}update(t,e){const n=t?t.bass:0,s=t?t.beat:0,r=t?t.treble:0,o=t&&t.rawArray?t.rawArray:[],a=1+n*.45+s*.6,c=n*.09+s*.14;for(let l of this.subCones)l.group.scale.set(a,a,1+n*.9),l.cap.position.z=c;const h=.4+r*3;for(let l of this.tweeters)l.material.emissiveIntensity=Math.min(3.5,h),e&&e.primary&&l.material.emissive.setHex(e.primary);for(let l of this.hornMaterials)l.emissiveIntensity=.3+n*.8+s*.5,e&&e.accent&&l.emissive.setHex(e.accent);for(let l=0;l<this.eqLedBars.length;l++){const d=this.eqLedBars[l],u=l%12,p=o[u*2]||0;u/12<=p*1.3?u>9?d.material.color.setHex(16711748):u>6?d.material.color.setHex(16755200):d.material.color.setHex(e?e.primary:61695):d.material.color.setHex(1381920)}}}class Kp{constructor(t){this.scene=t,this.group=new At,this.turntables=[],this.mixerKnobs=[],this.vuLeds=[],this.djMesh=null,this.djHead=null,this.djLeftArm=null,this.djRightArm=null,this.djTorso=null,this.laptopCanvas=null,this.laptopTexture=null,this.laptopCtx=null,this.init(),this.scene.add(this.group)}init(){this.createDJBooth(),this.createTurntablesAndMixer(),this.createLaptop(),this.createDJAvatar()}createDJBooth(){const t=new lt({color:1316127,roughness:.3,metalness:.7}),e=new q(3.6,.12,1.4),n=new C(e,t);n.position.set(0,1.05,0),n.receiveShadow=!0,n.castShadow=!0,this.group.add(n);const s=new Yt({color:61695}),r=new C(new q(3.62,.04,.04),s);r.position.set(0,1.05,.7),this.group.add(r);const o=new lt({color:657935,metalness:.9,roughness:.2}),c=[[-1.6,-.5],[-1.6,.5],[1.6,-.5],[1.6,.5]].map(([u,p])=>{const g=new Bt(.05,.05,1.05,12);return g.applyMatrix4(new Zt().makeTranslation(u,.525,p)),g}),h=Tn(c);c.forEach(u=>u.dispose());const l=new C(h,o);l.castShadow=!0,this.group.add(l);const d=new C(new q(3.4,.9,.04),new lt({color:855574,roughness:.5}));d.position.set(0,.525,.65),this.group.add(d)}createTurntablesAndMixer(){const t=new lt({color:1842473,roughness:.3,metalness:.6}),e=_=>{const m=new At;m.position.set(_,1.12,0);const f=new C(new q(.9,.06,.9),t);m.add(f);const w=new At;w.position.set(0,.04,0);const b=new Bt(.36,.36,.02,32),y=new lt({color:526348,roughness:.2,metalness:.8}),B=new C(b,y);w.add(B);const T=new Bt(.12,.12,.025,32),A=new lt({color:_<0?61695:16711807,emissive:_<0?61695:16711807,emissiveIntensity:.4}),R=new C(T,A);w.add(R),m.add(w);const E=new lt({color:13421772,metalness:.9,roughness:.1}),M=new C(new Bt(.04,.04,.04,16),E);M.position.set(.34,.06,-.32),m.add(M);const P=new C(new Bt(.012,.012,.42,8),E);P.rotation.z=Math.PI/2,P.rotation.y=-Math.PI/4,P.position.set(.2,.08,-.18),m.add(P);const O=new C(new Bt(.03,.03,.02,16),new Yt({color:65416}));O.position.set(-.32,.04,.32),m.add(O),this.group.add(m),this.turntables.push({group:m,vinyl:w})};e(-1),e(1);const n=new At;n.position.set(0,1.12,0);const s=new C(new q(.8,.06,.9),new lt({color:1381920,roughness:.4,metalness:.5}));n.add(s),this.xFader=new C(new q(.06,.03,.04),new lt({color:16777215,roughness:.2})),this.xFader.position.set(0,.04,.28),n.add(this.xFader);const r=new Bt(.02,.022,.03,12),o=new lt({color:3355978,roughness:.3,metalness:.6}),a=[];for(let _ of[-.18,.18])for(let m=0;m<4;m++){const f=r.clone();f.applyMatrix4(new Zt().makeTranslation(_,.045,-.28+m*.12)),a.push(f)}const c=Tn(a);a.forEach(_=>_.dispose()),r.dispose();const h=new C(c,o);n.add(h),this.mixerKnobsMesh=h;const l=new q(.03,.015,.015),d=new Yt({color:1122833}),u=[];for(let _ of[-.05,.05])for(let m=0;m<8;m++){const f=l.clone();f.applyMatrix4(new Zt().makeTranslation(_,.035,-.25+m*.05)),u.push(f)}const p=Tn(u);u.forEach(_=>_.dispose()),l.dispose();const g=new C(p,d);n.add(g),this.vuLedsMesh=g,this.group.add(n)}createLaptop(){const t=new At;t.position.set(1.45,1.25,-.3),t.rotation.y=-Math.PI/6;const e=new lt({color:2236979,metalness:.8}),n=new C(new Bt(.02,.02,.3,16),e);n.position.y=-.1,t.add(n);const s=new lt({color:3355972,metalness:.7,roughness:.3}),r=new C(new q(.55,.02,.38),s);t.add(r),this.laptopCanvas=document.createElement("canvas"),this.laptopCanvas.width=512,this.laptopCanvas.height=256,this.laptopCtx=this.laptopCanvas.getContext("2d"),this.laptopTexture=new Ke(this.laptopCanvas);const o=new Yt({map:this.laptopTexture}),a=new C(new q(.55,.35,.02),s);a.position.set(0,.17,-.18),a.rotation.x=-Math.PI/10,t.add(a);const c=new C(new ge(.52,.32),o);c.position.set(0,.17,-.168),c.rotation.x=-Math.PI/10,t.add(c),this.group.add(t)}createDJAvatar(){const t=new At;t.position.set(0,0,-.4);const e=new lt({color:1579304,roughness:.65,metalness:.2}),n=new lt({color:789782,roughness:.75,metalness:.2}),s=new lt({color:14659984,roughness:.5}),r=new lt({color:61695,emissive:61695,emissiveIntensity:.7,metalness:.8}),o=new lt({color:1316128,roughness:.4,metalness:.6}),a=new Yt({color:61695}),c=new At;c.position.set(0,.9,0);const h=new C(new q(.5,.22,.32),n);h.position.y=-.06,c.add(h);const l=new C(new q(.52,.05,.34),a);l.position.y=.02,c.add(l);const d=te=>{const L=te?-1:1,x=new At;x.position.set(L*.16,-.12,0);const v=new C(new Bt(.09,.08,.38,14),n);v.position.y=-.18,x.add(v);const N=new C(new q(.04,.12,.1),n);N.position.set(L*.09,-.18,0),x.add(N);const K=new At;K.position.set(0,-.38,0);const nt=new C(new ue(.075,12,12),n);K.add(nt);const Z=new C(new Bt(.075,.065,.34,14),n);Z.position.y=-.16,K.add(Z);const xt=new At;xt.position.set(0,-.34,0);const ct=new C(new q(.14,.12,.25),o);ct.position.set(0,.06,.04);const pt=new C(new q(.15,.035,.27),a);return pt.position.set(0,.018,.04),xt.add(ct,pt),K.add(xt),x.add(K),c.add(x),{hip:x,knee:K}};this.djLegL=d(!0),this.djLegR=d(!1),t.add(c),this.djTorso=new At,this.djTorso.position.set(0,.9,0);const u=new C(new q(.68,.78,.44),e);u.position.y=.4,u.castShadow=!0,this.djTorso.add(u);const p=new C(new q(.48,.22,.06),e);p.position.set(0,.26,.23),this.djTorso.add(p);const g=new C(new Ne(.22,.06,12,24),e);g.position.set(0,.76,-.04),g.rotation.x=Math.PI/4,this.djTorso.add(g);const _=new C(new ge(.3,.2),new Yt({color:61695,transparent:!0,opacity:.9}));_.position.set(0,.52,.23),this.djTorso.add(_),this.djHead=new At,this.djHead.position.set(0,.82,0);const m=new C(new Bt(.08,.09,.16,16),s);m.position.y=.06,this.djHead.add(m);const f=new C(new q(.34,.32,.32),s);f.position.y=.26;const w=new C(new q(.28,.16,.26),s);w.position.set(0,.14,.04);const b=new C(new q(.05,.07,.06),s);b.position.set(0,.24,.18),this.djHead.add(f,w,b);const y=new lt({color:61695,roughness:.4}),B=new C(new ue(.21,16,16,0,Math.PI*2,0,Math.PI/2),y);B.position.y=.41;const T=new C(new q(.26,.03,.22),y);T.position.set(0,.41,-.23),T.rotation.x=-Math.PI/16,this.djHead.add(B,T);const A=new C(new Ne(.25,.025,16,32,Math.PI),r);A.position.set(0,.4,0),A.rotation.z=Math.PI,this.djHead.add(A);const R=new C(new Bt(.085,.085,.05,16),r);R.rotation.z=Math.PI/2,R.position.set(-.21,.26,0);const E=new C(new Bt(.085,.085,.05,16),r);E.rotation.z=Math.PI/2,E.position.set(.21,.26,0),this.djHead.add(R,E);const M=new At;M.position.set(0,.27,.19);const P=new lt({color:61695,emissive:61695,emissiveIntensity:.9,roughness:.1,metalness:.9,transparent:!0,opacity:.92}),O=new C(new q(.34,.09,.03),P);M.add(O);const z=new lt({color:526608,roughness:.2,metalness:.95}),H=new C(new q(.36,.025,.04),z);H.position.set(0,.05,0);const $=new C(new q(.02,.02,.2),z);$.position.set(-.18,.02,-.09);const X=new C(new q(.02,.02,.2),z);X.position.set(.18,.02,-.09),M.add(H,$,X),this.djHead.add(M),this.djTorso.add(this.djHead);const Q=new lt({color:1118744,roughness:.3,metalness:.8});this.djLeftArm=new At,this.djLeftArm.position.set(-.34,.65,0);const G=new C(new ue(.085,14,14),e);this.djLeftArm.add(G);const et=new Bt(.075,.065,.32,14);et.translate(0,-.16,0);const st=new C(et,e);st.rotation.set(.65,0,.45),this.djLeftArm.add(st),this.djLeftElbow=new At,this.djLeftElbow.position.set(-.14,-.25,.18);const dt=new C(new ue(.06,12,12),s);this.djLeftElbow.add(dt);const Rt=new Bt(.06,.05,.32,14);Rt.translate(0,-.16,0);const Ot=new C(Rt,s);Ot.rotation.set(.75,0,.2),this.djLeftElbow.add(Ot);const Y=new C(new Ne(.055,.015,8,16),new Yt({color:61695}));Y.position.set(-.06,-.27,.23),Y.rotation.x=Math.PI/3,this.djLeftElbow.add(Y);const j=new At;j.position.set(-.08,-.29,.26);const rt=new C(new q(.11,.035,.12),Q);rt.rotation.set(.1,.3,0);const tt=new C(new q(.03,.025,.05),Q);tt.position.set(.055,-.01,.02);const ut=new C(new q(.09,.025,.05),Q);ut.position.set(0,-.005,.07),j.add(rt,tt,ut),this.djLeftElbow.add(j),this.djLeftArm.add(this.djLeftElbow),this.djTorso.add(this.djLeftArm),this.djRightArm=new At,this.djRightArm.position.set(.34,.65,0);const Et=new C(new ue(.085,14,14),e);this.djRightArm.add(Et);const It=new Bt(.075,.065,.32,14);It.translate(0,-.16,0);const Lt=new C(It,e);Lt.rotation.set(.65,0,-.4),this.djRightArm.add(Lt),this.djRightElbow=new At,this.djRightElbow.position.set(.12,-.25,.18);const Pt=new C(new ue(.06,12,12),s);this.djRightElbow.add(Pt);const qt=new Bt(.06,.05,.32,14);qt.translate(0,-.16,0);const I=new C(qt,s);I.rotation.set(.75,0,-.25),this.djRightElbow.add(I);const Qt=new C(new Ne(.055,.015,8,16),new Yt({color:16711807}));Qt.position.set(.06,-.27,.23),Qt.rotation.x=Math.PI/3,this.djRightElbow.add(Qt);const St=new At;St.position.set(.07,-.29,.26);const Ut=new C(new q(.1,.04,.1),Q);Ut.rotation.set(.1,-.2,0);const yt=new C(new q(.08,.03,.06),Q);yt.position.set(0,-.015,.06),St.add(Ut,yt),this.djRightElbow.add(St),this.djRightArm.add(this.djRightElbow),this.djTorso.add(this.djRightArm),t.add(this.djTorso),this.djMesh=t,this.group.add(t)}update(t,e,n){const s=performance.now()*.001,r=t?t.bass:0,o=t?t.beat:0,a=t&&t.rawArray?t.rawArray:[];if(e&&this.turntables.length>0&&this.turntables.forEach(c=>{c.mesh?c.mesh.rotation.y+=.04:c.vinyl&&(c.vinyl.rotation.y+=.04)}),this.xFader&&t&&t.crossfadeProgress!==void 0){const c=(t.crossfadeProgress-.5)*.3;this.xFader.position.x=Wa.lerp(this.xFader.position.x,c,.1)}if(this.djHead){const c=e?5:1.5,h=e?.08+r*.12+o*.15:.02;this.djHead.position.y=.82-Math.abs(Math.sin(s*c))*h,this.djHead.rotation.x=Math.sin(s*c)*(.08+r*.15),this.djHead.rotation.y=Math.sin(s*1.5)*.1}if(this.djTorso){const c=e?2.5:.8;this.djTorso.rotation.z=Math.sin(s*c)*(.03+r*.06),this.djTorso.position.y=.9+Math.cos(s*c*2)*(.01+r*.03)}if(this.djLeftArm&&e){const c=Math.sin(s*7.5);this.djLeftArm.rotation.z=Math.sin(s*2.5)*.06,this.djLeftArm.rotation.x=Math.sin(s*3.5)*.05,this.djLeftElbow&&(this.djLeftElbow.rotation.z=c*.12,this.djLeftElbow.position.z=.18+c*.04)}if(this.djRightArm&&e)if(t&&t.isCrossfading){const c=(t.crossfadeProgress||.5)-.5;this.djRightArm.rotation.y=-.15+c*.3,this.djRightArm.rotation.x=Math.sin(s*6)*.08}else this.djRightArm.rotation.x=Math.sin(s*3)*(.08+r*.1),this.djRightArm.rotation.y=Math.cos(s*2.2)*.1,this.djRightElbow&&(this.djRightElbow.rotation.x=Math.sin(s*4)*.1);for(let c=0;c<this.vuLeds.length;c++){const h=this.vuLeds[c],l=c%8/8,d=a[c*2]||0;e&&l<=d*1.4?l>.7?h.material.color.setHex(16711748):l>.5?h.material.color.setHex(16763904):h.material.color.setHex(65416):h.material.color.setHex(660490)}this.laptopCtx&&this.drawLaptopScreen(t,e)}drawLaptopScreen(t,e){const n=this.laptopCtx,s=this.laptopCanvas.width,r=this.laptopCanvas.height;n.fillStyle="#0e101a",n.fillRect(0,0,s,r),n.strokeStyle="rgba(255, 255, 255, 0.06)",n.lineWidth=1;for(let h=0;h<r;h+=32)n.beginPath(),n.moveTo(0,h),n.lineTo(s,h),n.stroke();const o=t.rawArray||[],a=s/32;for(let h=0;h<32;h++){const d=(e?o[h]||0:.05+.05*Math.sin(h*.5+performance.now()*.003))*(r*.7),u=n.createLinearGradient(0,r-d,0,r);u.addColorStop(0,"#00f0ff"),u.addColorStop(.6,"#9d4edd"),u.addColorStop(1,"#ff007f"),n.fillStyle=u,n.fillRect(h*a+2,r-d-20,a-4,d)}n.font="bold 18px sans-serif",n.fillStyle=t.isCrossfading?"#ff007f":"#00f0ff";const c=t.isCrossfading?`MIXING: DECK ${t.activeDeck} ➔ DECK ${t.activeDeck==="A"?"B":"A"} (${Math.round(t.crossfadeProgress*100)}%)`:`DECK ${t.activeDeck||"A"} ACTIVE // ON AIR`;n.fillText(c,16,30),n.font="14px monospace",n.fillStyle="#8a8d9b",n.fillText(`BPM: 128.0   VOL: ${Math.round(t.volume*100)}%   EQ: BASS SWAP ON`,16,52),this.laptopTexture.needsUpdate=!0}}const or={cyber:{name:"Cyberpunk Neon",primary:61695,secondary:16711807,accent:10309341,ambient:1316136,spotlight:61695},sunset:{name:"Sunset Lo-Fi",primary:16739125,secondary:16237983,accent:15672124,ambient:2364698,spotlight:16753920},matrix:{name:"Emerald Matrix",primary:65416,secondary:47957,accent:8978176,ambient:662034,spotlight:65416},acid:{name:"Electric Blue",primary:3835647,secondary:8599788,accent:16711790,ambient:1053734,spotlight:3835647}};class Zp{constructor(t){this.scene=t,this.group=new At,this.currentTheme=or.cyber,this.ambientLight=null,this.djSpotlight=null,this.danceFloorSpot=null,this.barLight=null,this.vipLight=null,this.leftFillPoint=null,this.rightFillPoint=null,this.strobeLight=null,this.particles=null,this.intensityMultiplier=1,this.strobeEnabled=!0,this.lasersEnabled=!0,this.fogEnabled=!0,this.laserSpeed=1,this.init(),this.scene.add(this.group)}init(){this.ambientLight=new Ip(this.currentTheme.ambient,1.4),this.group.add(this.ambientLight),this.djSpotlight=new Ma(this.currentTheme.spotlight,6,16,Math.PI/4,.4,1.5),this.djSpotlight.position.set(0,8.5,1.2),this.djSpotlight.target.position.set(0,1,0),this.djSpotlight.castShadow=!0,this.djSpotlight.shadow.mapSize.width=1024,this.djSpotlight.shadow.mapSize.height=1024,this.djSpotlight.shadow.camera.near=1,this.djSpotlight.shadow.camera.far=18,this.group.add(this.djSpotlight),this.group.add(this.djSpotlight.target),this.danceFloorSpot=new Ma(this.currentTheme.secondary,5,16,Math.PI/3,.5,1.2),this.danceFloorSpot.position.set(0,8.5,4.5),this.danceFloorSpot.target.position.set(0,0,4.5),this.group.add(this.danceFloorSpot),this.group.add(this.danceFloorSpot.target),this.barLight=new Sn(this.currentTheme.secondary,3.5,10,2),this.barLight.position.set(6.8,4,3.5),this.group.add(this.barLight),this.vipLight=new Sn(this.currentTheme.accent,3,10,2),this.vipLight.position.set(-7.5,3.8,3.5),this.group.add(this.vipLight),this.leftFillPoint=new Sn(this.currentTheme.primary,3,12,2),this.leftFillPoint.position.set(-4.5,3.5,-2),this.group.add(this.leftFillPoint),this.rightFillPoint=new Sn(this.currentTheme.secondary,3,12,2),this.rightFillPoint.position.set(4.5,3.5,-2),this.group.add(this.rightFillPoint),this.wallWashLeft=new Sn(this.currentTheme.primary,4,16,2),this.wallWashLeft.position.set(-11,5,2),this.group.add(this.wallWashLeft),this.wallWashRight=new Sn(this.currentTheme.secondary,4,16,2),this.wallWashRight.position.set(11,5,2),this.group.add(this.wallWashRight),this.wallWashBack=new Sn(this.currentTheme.accent,4.5,14,2),this.wallWashBack.position.set(0,6.5,-9),this.group.add(this.wallWashBack),this.strobeLight=new Sn(16777215,0,18,2),this.strobeLight.position.set(0,7.5,4),this.group.add(this.strobeLight),this.laserBeams=[],this.createLaserBeams(),this.createAtmosphereParticles()}createLaserBeams(){this.laserGroup=new At,this.laserGroup.position.set(0,7.5,-2);const t=[61695,16711807,65416,10309341,16711765,61695],e=new Yt({color:61695,transparent:!0,opacity:.65,blending:xs}),n=new Bt(.015,.06,18,8);n.translate(0,9,0),n.rotateX(Math.PI/2);for(let s=0;s<6;s++){const r=e.clone();r.color.setHex(t[s%t.length]);const o=new C(n,r);o.position.set((s-2.5)*1.4,0,0),this.laserBeams.push(o),this.laserGroup.add(o)}this.group.add(this.laserGroup)}setIntensityMultiplier(t){this.intensityMultiplier=Math.max(.1,Math.min(3,t))}setLaserSpeed(t){this.laserSpeed=Math.max(.2,Math.min(4,t))}setStrobeEnabled(t){this.strobeEnabled=t}setLasersEnabled(t){this.lasersEnabled=t,this.laserGroup&&(this.laserGroup.visible=t)}setFogEnabled(t){this.fogEnabled=t,this.particles&&(this.particles.visible=t)}createAtmosphereParticles(){const e=new Ce,n=new Float32Array(450*3);for(let r=0;r<450;r++)n[r*3]=(Math.random()-.5)*20,n[r*3+1]=Math.random()*8,n[r*3+2]=(Math.random()-.5)*20;e.setAttribute("position",new Ge(n,3));const s=new ac({color:61695,size:.05,transparent:!0,opacity:.5,blending:xs});this.particles=new Pp(e,s),this.group.add(this.particles)}setTheme(t){or[t]&&(this.currentTheme=or[t],this.ambientLight&&this.ambientLight.color.setHex(this.currentTheme.ambient),this.djSpotlight&&this.djSpotlight.color.setHex(this.currentTheme.spotlight),this.danceFloorSpot&&this.danceFloorSpot.color.setHex(this.currentTheme.secondary),this.barLight&&this.barLight.color.setHex(this.currentTheme.secondary),this.vipLight&&this.vipLight.color.setHex(this.currentTheme.accent),this.leftFillPoint&&this.leftFillPoint.color.setHex(this.currentTheme.primary),this.rightFillPoint&&this.rightFillPoint.color.setHex(this.currentTheme.secondary),this.wallWashLeft&&this.wallWashLeft.color.setHex(this.currentTheme.primary),this.wallWashRight&&this.wallWashRight.color.setHex(this.currentTheme.secondary),this.wallWashBack&&this.wallWashBack.color.setHex(this.currentTheme.accent),this.particles&&this.particles.material.color.setHex(this.currentTheme.primary))}update(t){const e=t.bass,n=t.beat,s=t.treble,r=performance.now()*.001*this.laserSpeed,o=this.intensityMultiplier;if(this.djSpotlight&&(this.djSpotlight.intensity=(4+e*6+n*4)*o),this.danceFloorSpot&&this.lasersEnabled&&(this.danceFloorSpot.intensity=(3+e*5+n*5)*o,this.danceFloorSpot.position.x=Math.sin(r*1.5)*2.5),this.laserBeams&&this.lasersEnabled){const a=.35+e*.25;for(let c=0;c<this.laserBeams.length;c++){const h=this.laserBeams[c],l=(c-2.5)*a,d=Math.sin(r*2.2+c*.6)*.28;h.rotation.x=Math.PI/4+Math.sin(r*1.8)*.22+d,h.rotation.y=l+Math.cos(r*1.2+c*.4)*.15,h.material.opacity=(.35+e*.45+n*.3)*o}}if(this.leftFillPoint&&(this.leftFillPoint.intensity=(2+e*4)*o),this.rightFillPoint&&(this.rightFillPoint.intensity=(2+s*4)*o),this.wallWashLeft&&(this.wallWashLeft.intensity=(3+e*3.5)*o),this.wallWashRight&&(this.wallWashRight.intensity=(3+s*3.5)*o),this.wallWashBack&&(this.wallWashBack.intensity=(3.5+n*4)*o),this.barLight&&(this.barLight.intensity=(2.5+e*2)*o),this.vipLight&&(this.vipLight.intensity=(2+n*2)*o),this.strobeLight&&(this.strobeEnabled&&n>.8&&e>.55?this.strobeLight.intensity=9*o:this.strobeLight.intensity*=.7),this.particles&&this.fogEnabled){const a=this.particles.geometry.attributes.position.array;for(let c=0;c<a.length;c+=3)a[c+1]+=.003+e*.008,a[c+1]>8&&(a[c+1]=.2);this.particles.geometry.attributes.position.needsUpdate=!0}}}class Qp{constructor(t){this.scene=t,this.group=new At,this.tiles=[],this.dancers=[],this.init(),this.scene.add(this.group)}init(){this.createLEDFloor(),this.createDancers()}createLEDFloor(){const o=new q(.95,.04,.95);for(let _=0;_<6;_++)for(let m=0;m<6;m++){const f=new lt({color:1118490,emissive:61695,emissiveIntensity:.2,roughness:.2,metalness:.8}),w=new C(o,f);w.position.set(-2.525+m*(.95+.05),.02,2.4+_*(.95+.05)),w.receiveShadow=!0,this.group.add(w),this.tiles.push({mesh:w,row:_,col:m})}const a=new Yt({color:16711807}),c=.06,h=6*(.95+.05)+.1,l=6*(.95+.05)+.1,d=new C(new q(h,.06,c),a);d.position.set(0,.03,2.4-.95/2-.05);const u=new C(new q(h,.06,c),a);u.position.set(0,.03,2.4+l-.95/2-.05);const p=new C(new q(c,.06,l),a);p.position.set(-2.525-.95/2,.03,2.4+l/2-.95/2);const g=new C(new q(c,.06,l),a);g.position.set(2.525+.95/2,.03,2.4+l/2-.95/2),this.group.add(d,u,p,g)}createDancers(){const t=[{x:-1.8,z:3.2,style:0,speed:1},{x:-.6,z:3,style:1,speed:1.2},{x:.7,z:3.1,style:2,speed:.9},{x:1.9,z:3.3,style:3,speed:1.1},{x:-2.2,z:4.5,style:1,speed:1.15},{x:-1,z:4.4,style:3,speed:.95},{x:.2,z:4.6,style:0,speed:1.05},{x:1.4,z:4.3,style:2,speed:1.25},{x:2.3,z:4.7,style:1,speed:1},{x:-1.5,z:5.8,style:2,speed:1.1},{x:0,z:6,style:0,speed:.9},{x:1.6,z:5.9,style:3,speed:1.15}],e=[16711765,61695,16766720,10309341,65416,16737792,16711850,3835647],n=[14659984,9262372,13010498,14724201,15843965];t.forEach((s,r)=>{const o=e[r%e.length],a=n[r%n.length],c=this.buildFullDancer(s.x,s.z,o,a,s.style,s.speed,r);this.dancers.push(c),this.group.add(c.group)})}buildFullDancer(t,e,n,s,r,o,a){const c=new At;c.position.set(t,0,e),c.rotation.y=Math.PI+(Math.random()-.5)*1.1;const h=new lt({color:n,roughness:.45,metalness:.3}),l=new lt({color:789782,roughness:.7,metalness:.2}),d=new lt({color:s,roughness:.5}),u=new Yt({color:n}),p=new lt({color:1579300,roughness:.4,metalness:.6}),g=new lt({color:329226,roughness:.15,metalness:.95,emissive:1049880,emissiveIntensity:.3}),_=new lt({color:1118746,roughness:.3,metalness:.9}),m=new At;m.position.set(0,.88,0);const f=new C(new q(.44,.2,.26),l);f.position.y=-.05,m.add(f);const w=new C(new q(.46,.05,.28),u);w.position.y=.02,m.add(w);const b=j=>{const rt=j?-1:1,tt=new At;tt.position.set(rt*.14,-.1,0);const ut=new C(new ue(.08,12,12),l);tt.add(ut);const Et=new Bt(.08,.065,.36,14);Et.translate(0,-.18,0);const It=new C(Et,l);It.castShadow=!0,tt.add(It);const Lt=new At;Lt.position.set(0,-.36,0);const Pt=new C(new ue(.065,12,12),l);Lt.add(Pt);const qt=new Bt(.065,.055,.34,14);qt.translate(0,-.17,0);const I=new C(qt,l);I.castShadow=!0,Lt.add(I);const Qt=new At;Qt.position.set(0,-.34,0);const St=new C(new q(.12,.09,.22),p);St.position.set(0,.045,.04),St.castShadow=!0;const Ut=new C(new q(.13,.03,.24),u);Ut.position.set(0,.015,.04);const yt=new C(new ue(.06,12,8),p);return yt.scale.set(1,.7,1.2),yt.position.set(0,.04,.12),Qt.add(St,Ut,yt),Lt.add(Qt),tt.add(Lt),m.add(tt),{hip:tt,knee:Lt,foot:Qt}},y=b(!0),B=b(!1);c.add(m);const T=new At;T.position.set(0,.88,0);const A=new C(new q(.42,.25,.24),h);A.position.y=.12,T.add(A);const R=new C(new q(.52,.42,.3),h);R.position.y=.42,R.castShadow=!0,T.add(R);const E=new q(.54,.04,.32),M=new C(E,l);M.position.y=.42,M.rotation.z=Math.PI/6,T.add(M);const P=new C(new Ne(.14,.018,8,16),u);P.position.set(0,.58,.08),P.rotation.x=Math.PI/3,T.add(P);const O=new At;O.position.set(0,.7,0);const z=new C(new q(.28,.28,.26),d);z.position.y=.18;const H=new C(new q(.24,.14,.22),d);H.position.set(0,.07,.02);const $=new C(new q(.04,.06,.05),d);$.position.set(0,.16,.15);const X=new C(new q(.03,.07,.04),d);X.position.set(-.15,.18,0);const Q=new C(new q(.03,.07,.04),d);Q.position.set(.15,.18,0),O.add(z,H,$,X,Q);const G=new lt({color:1118486,roughness:.85}),et=a%6;if(et===0){const j=new C(new ue(.16,12,12),G);j.position.set(0,.26,-.02),O.add(j);for(let rt=0;rt<6;rt++){const tt=new C(new Bt(.025,.02,.28,8),rt%2===0?u:G);tt.position.set((rt-2.5)*.05,.2-rt*.02,-.12),tt.rotation.x=-Math.PI/6,O.add(tt)}}else if(et===1){const j=new C(new q(.3,.12,.28),G);j.position.set(0,.34,0);const rt=new C(new q(.26,.04,.24),u);rt.position.set(0,.39,0),O.add(j,rt)}else if(et===2){const j=new C(new ue(.08,12,12),G);j.position.set(-.13,.38,-.04);const rt=new C(new Ne(.07,.015,8,16),u);rt.position.set(-.13,.38,-.04);const tt=new C(new ue(.08,12,12),G);tt.position.set(.13,.38,-.04);const ut=new C(new Ne(.07,.015,8,16),u);ut.position.set(.13,.38,-.04),O.add(j,rt,tt,ut)}else if(et===3){const j=new C(new q(.32,.22,.3),G);j.position.set(.04,.26,-.02),O.add(j)}else if(et===4){const j=new C(new q(.08,.18,.32),u);j.position.set(0,.36,0),O.add(j)}else{const j=new C(new Bt(.16,.17,.22,16),h);j.position.set(0,.32,-.02),j.rotation.x=-Math.PI/16,O.add(j)}const st=new At;st.position.set(0,.18,.15);const dt=a%4;if(dt===0){const j=new C(new q(.09,.045,.02),g);j.position.x=-.055;const rt=new C(new q(.09,.045,.02),g);rt.position.x=.055;const tt=new C(new q(.24,.015,.03),_);tt.position.y=.025;const ut=new C(new q(.015,.015,.16),_);ut.position.set(-.13,.015,-.07);const Et=new C(new q(.015,.015,.16),_);Et.position.set(.13,.015,-.07),st.add(j,rt,tt,ut,Et)}else if(dt===1){const j=new C(new q(.27,.075,.025),u),rt=new C(new q(.28,.018,.035),_);rt.position.y=.04;const tt=new C(new q(.015,.015,.16),_);tt.position.set(-.14,.02,-.07);const ut=new C(new q(.015,.015,.16),_);ut.position.set(.14,.02,-.07),st.add(j,rt,tt,ut)}else if(dt===2){const j=new C(new q(.085,.065,.02),g);j.position.x=-.055;const rt=new C(new q(.085,.065,.02),g);rt.position.x=.055;const tt=new C(new q(.23,.02,.03),_);tt.position.y=.035;const ut=new C(new q(.015,.015,.16),_);ut.position.set(-.125,.02,-.07);const Et=new C(new q(.015,.015,.16),_);Et.position.set(.125,.02,-.07),st.add(j,rt,tt,ut,Et)}else{const j=new C(new Bt(.13,.13,.055,16,1,!0,0,Math.PI),u);j.rotation.x=Math.PI/2,j.rotation.z=Math.PI/2,j.scale.set(.9,1.1,.5);const rt=new C(new q(.26,.018,.03),_);rt.position.y=.03,st.add(j,rt)}O.add(st),T.add(O);const Rt=j=>{const rt=j?-1:1,tt=new At;tt.position.set(rt*.29,.58,0);const ut=new C(new ue(.075,12,12),h);tt.add(ut);const Et=new Bt(.065,.055,.28,12);Et.translate(0,-.14,0);const It=new C(Et,h);tt.add(It);const Lt=new At;Lt.position.set(0,-.28,0);const Pt=new C(new ue(.055,12,12),d);Lt.add(Pt);const qt=new Bt(.052,.042,.26,12);qt.translate(0,-.13,0);const I=new C(qt,d);Lt.add(I);const Qt=new C(new Ne(.05,.015,8,16),u);Qt.position.set(0,-.24,0),Qt.rotation.x=Math.PI/2,Lt.add(Qt);const St=new At;St.position.set(0,-.27,0);const Ut=new C(new q(.08,.09,.035),d);Ut.position.set(0,-.04,0);const yt=new C(new q(.025,.04,.025),d);return yt.position.set(rt*-.045,-.02,.01),St.add(Ut,yt),Lt.add(St),tt.add(Lt),T.add(tt),{arm:tt,elbow:Lt}},Ot=Rt(!0),Y=Rt(!1);return c.add(T),{group:c,pelvis:m,torso:T,head:O,legL:y,legR:B,armL:Ot.arm,elbowL:Ot.elbow,armR:Y.arm,elbowR:Y.elbow,style:r,speed:o,seed:a,baseY:0}}update(t,e,n){const s=performance.now()*.001,r=t?t.bass:0,o=t?t.beat:0,a=t&&t.rawArray?t.rawArray:[];for(let c=0;c<this.tiles.length;c++){const h=this.tiles[c],l=a[(h.row*5+h.col)%a.length]||0,d=Math.sin(s*3+h.row*.8+h.col*.8),u=e?Math.min(2.5,.2+r*1.8+l*1.5+d*.4):.15+.1*d;h.mesh.material.emissiveIntensity=u,n&&((h.row+h.col)%2===0?h.mesh.material.emissive.setHex(n.primary):h.mesh.material.emissive.setHex(n.secondary))}for(let c of this.dancers){const h=(e?4.5:1.2)*c.speed,l=s*h+c.seed,d=e?.08+r*.16+o*.2:.02,u=Math.abs(Math.sin(l))*d;c.group.position.y=u;const p=(1-Math.abs(Math.sin(l)))*(.2+r*.4);switch(c.legL.knee.rotation.x=Math.max(0,p+Math.sin(l)*.15),c.legR.knee.rotation.x=Math.max(0,p-Math.sin(l)*.15),c.legL.hip.rotation.x=Math.sin(l)*(.15+r*.2),c.legR.hip.rotation.x=-Math.sin(l)*(.15+r*.2),c.legL.hip.rotation.z=-.06,c.legR.hip.rotation.z=.06,c.head.rotation.x=Math.sin(l*2)*(.15+r*.2),c.head.rotation.y=Math.cos(l*.8)*.2,c.torso.rotation.z=Math.sin(l)*(.08+r*.12),c.torso.rotation.y=Math.cos(l*.5)*.15,c.pelvis.rotation.y=Math.sin(l*.5)*.12,c.style){case 0:c.armL.rotation.x=-Math.PI/1.35+Math.sin(l*2)*.35,c.armR.rotation.x=-Math.PI/1.35+Math.cos(l*2)*.35,c.armL.rotation.z=-.35+Math.sin(l)*.2,c.armR.rotation.z=.35-Math.sin(l)*.2,c.elbowL.rotation.x=.6+Math.sin(l*2)*.3,c.elbowR.rotation.x=.6+Math.cos(l*2)*.3;break;case 1:c.armL.rotation.x=.2+Math.sin(l)*.6,c.armR.rotation.x=.2-Math.sin(l)*.6,c.armL.rotation.y=.3+Math.cos(l*.2),c.armR.rotation.y=-.3-Math.cos(l*.2),c.elbowL.rotation.x=1.1+Math.cos(l*2)*.25,c.elbowR.rotation.x=1.1+Math.sin(l*2)*.25;break;case 2:c.armL.rotation.z=-.7+Math.sin(l)*.35,c.armR.rotation.x=-Math.PI/2.2+Math.sin(l*2)*.3,c.armR.rotation.y=-.3,c.elbowL.rotation.x=.4+Math.sin(l)*.3,c.elbowR.rotation.x=.5+Math.cos(l*2)*.2,c.group.rotation.y+=Math.sin(l*.5)*.004;break;case 3:c.armL.rotation.x=-.35+Math.cos(l*2)*.45,c.armR.rotation.x=-.35+Math.sin(l*2)*.45,c.armL.rotation.z=-.25,c.armR.rotation.z=.25,c.elbowL.rotation.x=.9+Math.sin(l*2)*.3,c.elbowR.rotation.x=.9+Math.cos(l*2)*.3,c.group.position.x+=Math.sin(l*.5)*.002;break}}}}class tm{constructor(t){this.scene=t,this.group=new At,this.bartender=null,this.bottles=[],this.barLights=[],this.shaker=null,this.init(),this.scene.add(this.group)}init(){this.group.position.set(6.8,0,3.5),this.group.rotation.y=-Math.PI/2,this.createBarCounter(),this.createBackShelvesAndBottles(),this.createBarStools(),this.createBartender()}createBarCounter(){const t=new lt({color:1184542,roughness:.2,metalness:.8}),e=new q(5.2,.12,.8),n=new C(e,t);n.position.set(0,1.15,0),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const s=new Yt({color:61695}),r=new C(new q(5.22,.04,.04),s);r.position.set(0,1.1,.4),this.group.add(r),this.barLights.push(s);const o=new lt({color:723986,roughness:.8,metalness:.1}),a=new C(new q(5,1.05,.6),o);a.position.set(0,.55,0),a.castShadow=!0,this.group.add(a);const c=new lt({color:14540253,metalness:.95,roughness:.1}),h=new C(new Bt(.025,.025,5,16),c);h.rotation.z=Math.PI/2,h.position.set(0,.2,.45),this.group.add(h);const l=new Ss({color:16777215,transparent:!0,opacity:.5,roughness:.1,metalness:.1,transmission:.8,ior:1.5});for(let d=0;d<4;d++){const u=new C(new Bt(.04,.03,.12,16),l);u.position.set(-1.8+d*1.2,1.25,.1),this.group.add(u)}}createBackShelvesAndBottles(){const t=new C(new q(5,3.2,.2),new lt({color:526608,roughness:.9}));t.position.set(0,2,-1.2),this.group.add(t);const e=new Ss({color:61695,transparent:!0,opacity:.4,roughness:.1,metalness:.2,transmission:.6}),n=[16711765,61695,16766720,65416,10309341,16746496,3835647,16711850],s={};n.forEach(l=>{s[l]=[]});for(let l=0;l<3;l++){const d=1.2+l*.7,u=new C(new q(4.8,.04,.35),e);u.position.set(0,d,-1.05),this.group.add(u);const p=new C(new q(4.8,.02,.02),new Yt({color:l%2===0?61695:16711807}));p.position.set(0,d-.03,-1),this.group.add(p),this.barLights.push(p.material);for(let g=0;g<14;g++){const _=n[(l*5+g)%n.length],m=new Bt(.035,.035,.25,8);m.applyMatrix4(new Zt().makeTranslation(-2.1+g*.32,d+.14,-1.05)),s[_].push(m)}}n.forEach(l=>{const d=s[l];if(!d.length)return;const u=Tn(d);d.forEach(_=>_.dispose());const p=new lt({color:l,emissive:l,emissiveIntensity:.4,roughness:.1,metalness:.6,transparent:!0,opacity:.85}),g=new C(u,p);this.group.add(g),this.bottles.push(g)});const r=document.createElement("canvas");r.width=512,r.height=128;const o=r.getContext("2d");o.fillStyle="#05060a",o.fillRect(0,0,512,128),o.font="900 48px Orbitron, sans-serif",o.fillStyle="#ff007f",o.shadowColor="#ff007f",o.shadowBlur=16,o.textAlign="center",o.textBaseline="middle",o.fillText("🍸 JMF BAR 🍸",256,64);const a=new Ke(r),c=new Yt({map:a}),h=new C(new ge(2.4,.6),c);h.position.set(0,3.4,-1.08),this.group.add(h)}createBarStools(){new lt({color:1579304,roughness:.4,metalness:.5});const t=new lt({color:15658734,metalness:.95,roughness:.1}),e=new lt({color:16711765,roughness:.6});for(let n=0;n<4;n++){const s=new At,r=-1.6+n*1.1;s.position.set(r,0,.85);const o=new C(new Bt(.2,.22,.03,24),t);o.position.y=.015,s.add(o);const a=new C(new Bt(.025,.025,.75,16),t);a.position.y=.4,s.add(a);const c=new C(new Ne(.12,.015,8,24),t);c.rotation.x=Math.PI/2,c.position.y=.25,s.add(c);const h=new C(new Bt(.22,.22,.08,24),e);h.position.y=.78,h.castShadow=!0,s.add(h),this.group.add(s)}}createBartender(){const t=new At;t.position.set(0,0,-.6);const e=new lt({color:1118488,roughness:.6}),n=new lt({color:15724527,roughness:.5}),s=new lt({color:16711765}),r=new lt({color:14065016,roughness:.5}),o=new lt({color:657936,roughness:.8}),a=new lt({color:13421772,metalness:.95,roughness:.1}),c=new lt({color:460554,roughness:.2,metalness:.8}),h=new lt({color:16766720,roughness:.2,metalness:.9}),l=Et=>{const It=Et?-1:1,Lt=new At;Lt.position.set(It*.14,.9,0);const Pt=new C(new Bt(.08,.07,.4,14),o);Pt.position.y=-.2,Lt.add(Pt);const qt=new C(new Bt(.07,.06,.38,14),o);qt.position.y=-.56,Lt.add(qt);const I=new C(new q(.12,.08,.22),c);return I.position.set(0,-.76,.04),Lt.add(I),Lt};t.add(l(!0),l(!1));const d=new At;d.position.set(0,.9,0);const u=new C(new q(.56,.74,.32),n);u.position.y=.37,d.add(u);const p=new C(new q(.58,.7,.33),e);p.position.y=.35,d.add(p);const g=new C(new Ne(.1,.01,8,16,Math.PI),h);g.position.set(.1,.22,.18),g.rotation.z=-Math.PI/6,d.add(g);const _=new C(new q(.22,.08,.2),n);_.position.set(0,.72,.05);const m=new C(new q(.14,.06,.04),s);m.position.set(0,.7,.18),d.add(_,m);const f=new At;f.position.set(0,.78,0);const w=new C(new q(.28,.28,.26),r);w.position.y=.18;const b=new C(new q(.24,.14,.22),r);b.position.set(0,.08,.02);const y=new C(new q(.04,.06,.05),r);y.position.set(0,.16,.14),f.add(w,b,y);const B=new C(new q(.31,.14,.3),new lt({color:1576968,roughness:.7}));B.position.set(0,.33,-.01),f.add(B);const T=new At;T.position.set(0,.2,.16);const A=new lt({color:328968,roughness:.1,metalness:.95,emissive:1705253,emissiveIntensity:.4}),R=new lt({color:16766720,roughness:.2,metalness:.9}),E=new C(new q(.1,.07,.02),A);E.position.x=-.065;const M=new C(new q(.1,.07,.02),A);M.position.x=.065,T.add(E,M);const P=new C(new q(.26,.02,.03),R);P.position.y=.035;const O=new C(new q(.015,.015,.18),R);O.position.set(-.14,.02,-.08);const z=new C(new q(.015,.015,.18),R);z.position.set(.14,.02,-.08),T.add(P,O,z),f.add(T),d.add(f);const H=new At;H.position.set(-.3,.62,0);const $=new C(new ue(.075,12,12),n);H.add($);const X=new C(new Bt(.065,.055,.28,12),n);X.position.set(.08,-.12,.1),X.rotation.set(Math.PI/4,0,-Math.PI/6),H.add(X);const Q=new C(new ue(.055,12,12),r);Q.position.set(.14,-.22,.18),H.add(Q);const G=new C(new Bt(.05,.042,.25,12),r);G.position.set(.2,-.16,.26),G.rotation.set(-Math.PI/4,0,-Math.PI/4),H.add(G);const et=new C(new q(.07,.06,.08),r);et.position.set(.24,-.12,.32),H.add(et),d.add(H);const st=new At;st.position.set(.3,.62,0);const dt=new C(new ue(.075,12,12),n);st.add(dt);const Rt=new C(new Bt(.065,.055,.28,12),n);Rt.position.set(-.08,-.12,.1),Rt.rotation.set(Math.PI/4,0,Math.PI/6),st.add(Rt);const Ot=new C(new ue(.055,12,12),r);Ot.position.set(-.14,-.22,.18),st.add(Ot);const Y=new C(new Bt(.05,.042,.25,12),r);Y.position.set(-.2,-.16,.26),Y.rotation.set(-Math.PI/4,0,Math.PI/4),st.add(Y);const j=new C(new q(.07,.06,.08),r);j.position.set(-.24,-.1,.32),st.add(j),d.add(st);const rt=new At;rt.position.set(0,.52,.32);const tt=new C(new Bt(.06,.045,.24,16),a),ut=new C(new Bt(.04,.06,.08,16),a);ut.position.y=.14,rt.add(tt,ut),rt.rotation.z=Math.PI/8,d.add(rt),t.add(d),this.group.add(t),this.bartender={group:t,torso:d,head:f,shaker:rt,armL:H,armR:st}}update(t,e,n){const s=performance.now()*.001,r=t.bass,o=t.beat;if(this.bartender){const c=e?8:2,h=e?.08+r*.12:.02;this.bartender.shaker.position.y=.52+Math.sin(s*c)*h,this.bartender.shaker.rotation.z=Math.PI/8+Math.cos(s*c)*.3,this.bartender.armL.position.y=.6+Math.sin(s*c)*(h*.5),this.bartender.armR.position.y=.6+Math.sin(s*c)*(h*.5),this.bartender.head.rotation.x=Math.sin(s*4)*(.08+r*.1),this.bartender.torso.rotation.y=Math.sin(s*1.5)*.15}const a=.3+(e?r*1.2+o*.8:.1);for(let c of this.bottles)c.material.emissiveIntensity=a;if(n)for(let c of this.barLights)c.color.setHex(n.secondary||16711807)}}const Fn={pov:{position:new D(0,1.38,-.65),target:new D(0,1.15,6)},booth:{position:new D(0,1.8,2.6),target:new D(0,1.4,0)},dance:{position:new D(0,2.8,8.6),target:new D(0,1.1,4)},bar:{position:new D(4,2.3,5.2),target:new D(6.8,1.4,3.5)},lounge:{position:new D(-4.2,2.3,5.2),target:new D(-7.5,1.2,3.5)},decks:{position:new D(0,2.6,1),target:new D(0,1.1,-.2)},room:{position:new D(7.5,4.8,9.5),target:new D(0,1.5,2.5)},cinematic:{position:new D(-6.5,3.2,7.5),target:new D(0,1.4,2)}};class em{constructor(t){this.container=t,this.width=t.clientWidth||window.innerWidth||1280,this.height=t.clientHeight||window.innerHeight||720,this.scene=new Rp,this.scene.background=new Xt(460555),this.scene.fog=new so(460555,.035),this.camera=new Le(50,this.width/this.height,.1,80),this.camera.position.copy(Fn.booth.position),this.renderer=new Cp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=Pa,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ca,this.container.appendChild(this.renderer.domElement),this.controls=new Np(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=1.5,this.controls.maxDistance=16,this.controls.target.copy(Fn.booth.target),this.room=new $p(this.scene),this.soundSystem=new Jp(this.scene),this.dj=new Kp(this.scene),this.danceFloor=new Qp(this.scene),this.barArea=new tm(this.scene),this.lighting=new Zp(this.scene),this.activePreset="booth",this.targetCamPos=new D().copy(Fn.booth.position),this.targetCamLook=new D().copy(Fn.booth.target),this.isTransitioningCam=!1,this.isCinematicOrbit=!1,this.cinematicAngle=0,window.addEventListener("resize",()=>this.onResize())}setCameraPreset(t){Fn[t]&&(this.activePreset=t,this.dj&&this.dj.djTorso&&(this.dj.djTorso.visible=t!=="pov"),t==="cinematic"?this.isCinematicOrbit=!0:(this.isCinematicOrbit=!1,this.targetCamPos.copy(Fn[t].position),this.targetCamLook.copy(Fn[t].target),this.isTransitioningCam=!0))}setTheme(t){this.lighting.setTheme(t)}onResize(){this.width=this.container.clientWidth||window.innerWidth,this.height=this.container.clientHeight||window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setTrackInfo(t,e,n,s){this.room&&this.room.setTrackInfo&&this.room.setTrackInfo(t,e,n,s)}update(t,e){const n=t||{bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126};if(this.isCinematicOrbit){this.cinematicAngle+=.0025;const s=8.5,r=3.5+Math.sin(this.cinematicAngle*1.2)*.8;this.camera.position.x=Math.cos(this.cinematicAngle)*s,this.camera.position.z=2.5+Math.sin(this.cinematicAngle)*s,this.camera.position.y=r,this.controls.target.set(0,1.3,2.5)}else this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.07),this.controls.target.lerp(this.targetCamLook,.07),this.camera.position.distanceTo(this.targetCamPos)<.02&&(this.isTransitioningCam=!1));this.controls.update(),this.room.update(n,this.lighting.currentTheme),this.soundSystem.update(n,this.lighting.currentTheme),this.dj.update(n,e,this.lighting.currentTheme),this.danceFloor.update(n,e,this.lighting.currentTheme),this.barArea.update(n,e,this.lighting.currentTheme),this.lighting.update(n),this.renderer.render(this.scene,this.camera)}}class nm{constructor(t,e){this.onTrackChange=t,this.onTransition=e,this.audioA=new Audio,this.audioB=new Audio,this.audioA.crossOrigin="anonymous",this.audioB.crossOrigin="anonymous",this.activeDeck="A",this.mixMode="dj",this.crossfadeDuration=8,this.isCrossfading=!1,this.crossfadeProgress=0,this.crossfadeStartTime=0,this.audioContext=null,this.analyser=null,this.masterGain=null,this.chGainA=null,this.xFaderGainA=null,this.eqLowA=null,this.eqMidA=null,this.eqHighA=null,this.filterSweepA=null,this.chGainB=null,this.xFaderGainB=null,this.eqLowB=null,this.eqMidB=null,this.eqHighB=null,this.filterSweepB=null,this.deckStates={A:{isPlaying:!1,cueTime:0,pitch:1,bpm:128,detectedBpm:128,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0},B:{isPlaying:!1,cueTime:0,pitch:1,bpm:126,detectedBpm:126,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0}},this.fxStates={A:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4},B:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4}},this.isPlaying=!1,this.isMuted=!1,this.volume=.8,this.currentTrack=null,this.nextTrack=null,this.elapsedTime=0,this.duration=180,this.queue=[],this.history=[],this.totalTracks=0,this.dataArray=null,this.freqData=null,this.lastBeatTime=0,this.beatIntervals=[],this.bpmCache=new Map,this.analysis={bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126},this.prevBass=0,this.isTransitionTriggered=!1,this.autoDjEnabled=!0,this.hotCues={A:[null,null,null,null],B:[null,null,null,null]},this.setupAudioListeners()}async initAudioContext(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t,this.masterGain=this.audioContext.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.audioContext.currentTime),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.82;const e=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(e),this.freqData=new Uint8Array(e),this.masterGain.connect(this.analyser),this.analyser.connect(this.audioContext.destination);const n=this.audioContext.createMediaElementSource(this.audioA);this.eqLowA=this.audioContext.createBiquadFilter(),this.eqLowA.type="lowshelf",this.eqLowA.frequency.value=120,this.eqLowA.gain.value=0,this.eqMidA=this.audioContext.createBiquadFilter(),this.eqMidA.type="peaking",this.eqMidA.frequency.value=1e3,this.eqMidA.Q.value=1,this.eqMidA.gain.value=0,this.eqHighA=this.audioContext.createBiquadFilter(),this.eqHighA.type="highshelf",this.eqHighA.frequency.value=8e3,this.eqHighA.gain.value=0,this.filterSweepA=this.audioContext.createBiquadFilter(),this.filterSweepA.type="lowpass",this.filterSweepA.frequency.value=22e3,this.fxFilterA=this.audioContext.createBiquadFilter(),this.fxFilterA.type="lowpass",this.fxFilterA.frequency.value=14e3,this.fxFilterA.Q.value=1.5,this.fxDelayA=this.audioContext.createDelay(2),this.fxDelayA.delayTime.value=.375,this.fxFeedbackA=this.audioContext.createGain(),this.fxFeedbackA.gain.value=.42,this.fxDryA=this.audioContext.createGain(),this.fxDryA.gain.value=1,this.fxWetA=this.audioContext.createGain(),this.fxWetA.gain.value=0,this.chGainA=this.audioContext.createGain(),this.chGainA.gain.value=1,this.xFaderGainA=this.audioContext.createGain(),this.xFaderGainA.gain.value=1,n.connect(this.eqLowA),this.eqLowA.connect(this.eqMidA),this.eqMidA.connect(this.eqHighA),this.eqHighA.connect(this.filterSweepA),this.filterSweepA.connect(this.fxDryA),this.fxDryA.connect(this.chGainA),this.filterSweepA.connect(this.fxFilterA),this.fxFilterA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxFeedbackA),this.fxFeedbackA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxWetA),this.fxWetA.connect(this.chGainA),this.chGainA.connect(this.xFaderGainA),this.xFaderGainA.connect(this.masterGain);const s=this.audioContext.createMediaElementSource(this.audioB);this.eqLowB=this.audioContext.createBiquadFilter(),this.eqLowB.type="lowshelf",this.eqLowB.frequency.value=120,this.eqLowB.gain.value=0,this.eqMidB=this.audioContext.createBiquadFilter(),this.eqMidB.type="peaking",this.eqMidB.frequency.value=1e3,this.eqMidB.Q.value=1,this.eqMidB.gain.value=0,this.eqHighB=this.audioContext.createBiquadFilter(),this.eqHighB.type="highshelf",this.eqHighB.frequency.value=8e3,this.eqHighB.gain.value=0,this.filterSweepB=this.audioContext.createBiquadFilter(),this.filterSweepB.type="lowpass",this.filterSweepB.frequency.value=22e3,this.fxFilterB=this.audioContext.createBiquadFilter(),this.fxFilterB.type="lowpass",this.fxFilterB.frequency.value=14e3,this.fxFilterB.Q.value=1.5,this.fxDelayB=this.audioContext.createDelay(2),this.fxDelayB.delayTime.value=.375,this.fxFeedbackB=this.audioContext.createGain(),this.fxFeedbackB.gain.value=.42,this.fxDryB=this.audioContext.createGain(),this.fxDryB.gain.value=1,this.fxWetB=this.audioContext.createGain(),this.fxWetB.gain.value=0,this.chGainB=this.audioContext.createGain(),this.chGainB.gain.value=1,this.xFaderGainB=this.audioContext.createGain(),this.xFaderGainB.gain.value=0,s.connect(this.eqLowB),this.eqLowB.connect(this.eqMidB),this.eqMidB.connect(this.eqHighB),this.eqHighB.connect(this.filterSweepB),this.filterSweepB.connect(this.fxDryB),this.fxDryB.connect(this.chGainB),this.filterSweepB.connect(this.fxFilterB),this.fxFilterB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxFeedbackB),this.fxFeedbackB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxWetB),this.fxWetB.connect(this.chGainB),this.chGainB.connect(this.xFaderGainB),this.xFaderGainB.connect(this.masterGain)}setupAudioListeners(){const t=e=>{!this.isCrossfading&&this.activeDeck===e&&this.skipNext()};this.audioA.addEventListener("ended",()=>t("A")),this.audioB.addEventListener("ended",()=>t("B")),this.audioA.addEventListener("error",e=>console.warn("Deck A audio error:",e)),this.audioB.addEventListener("error",e=>console.warn("Deck B audio error:",e))}async analyzeTrackBpm(t,e){if(!t)return;if(t.bpm&&t.bpm>=60&&t.bpm<=200)return this.deckStates[e].bpm=t.bpm,this.deckStates[e].detectedBpm=t.bpm,t.bpm;if(this.bpmCache.has(t.id)){const r=this.bpmCache.get(t.id);return this.deckStates[e].bpm=r,this.deckStates[e].detectedBpm=r,r}try{if(!this.audioContext)return;const o=await(await fetch(`/api/stream/${t.id}`,{headers:{Range:"bytes=0-350000"}})).arrayBuffer(),a=await this.audioContext.decodeAudioData(o),c=a.getChannelData(0),h=a.sampleRate,l=4,d=new Float32Array(Math.floor(c.length/l));for(let _=0;_<d.length;_++)d[_]=c[_*l];const u=[],p=.35,g=Math.floor(h/l*.3);for(let _=1;_<d.length-1;_++)d[_]>p&&d[_]>d[_-1]&&d[_]>d[_+1]&&(u.length===0||_-u[u.length-1]>g)&&u.push(_);if(u.length>=6){const _=[];for(let m=1;m<u.length;m++){let w=60/((u[m]-u[m-1])/(h/l));for(;w<90;)w*=2;for(;w>180;)w/=2;w>=90&&w<=180&&_.push(Math.round(w*2)/2)}if(_.length>0){_.sort((f,w)=>f-w);const m=_[Math.floor(_.length/2)];return this.deckStates[e].bpm=m,this.deckStates[e].detectedBpm=m,this.bpmCache.set(t.id,m),m}}}catch{}let n=0;for(let r=0;r<(t.title||"").length;r++)n=(n<<5)-n+t.title.charCodeAt(r),n|=0;const s=120+Math.abs(n)%18*1;return this.deckStates[e].bpm=s,this.deckStates[e].detectedBpm=s,this.bpmCache.set(t.id,s),s}async start(){try{await this.initAudioContext(),this.audioContext&&this.audioContext.state==="suspended"&&await this.audioContext.resume()}catch(t){console.warn("AudioContext initialization note:",t)}await this.fetchInitialData()}async fetchInitialData(){try{const e=await(await fetch("/api/track")).json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck("A",this.currentTrack,e.serverProgress||0),this.analyzeTrackBpm(this.currentTrack,"A"),this.nextTrack&&(this.loadDeck("B",this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,"B")),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error fetching initial track data:",t)}}loadDeck(t,e,n=0,s=!0){if(!e)return;const r=t==="A"?this.audioA:this.audioB;r.src=`/api/stream/${e.id}`,r.currentTime=n,r.playbackRate=this.deckStates[t].pitch,this.analyzeTrackBpm(e,t),s?r.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(o=>{console.warn(`Deck ${t} autoplay prevented:`,o)}):this.deckStates[t].isPlaying=!1}setEQ(t,e,n){if(!this.audioContext)return;const s=this.audioContext.currentTime;let r=null;t==="A"?e==="low"?r=this.eqLowA:e==="mid"?r=this.eqMidA:e==="high"&&(r=this.eqHighA):e==="low"?r=this.eqLowB:e==="mid"?r=this.eqMidB:e==="high"&&(r=this.eqHighB),r&&r.gain.setTargetAtTime(n,s,.05)}setEQPreset(t){this.currentEQPreset=t;const e={flat:{low:0,mid:0,high:0},bass:{low:6,mid:0,high:1},club:{low:4,mid:-1,high:3},vocal:{low:-2,mid:4,high:2},electronic:{low:5,mid:-2,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}setFilterSweep(t,e){if(!this.audioContext)return;const n=t==="A"?this.filterSweepA:this.filterSweepB;if(!n)return;const s=this.audioContext.currentTime;if(e<.48){n.type="lowpass";const r=200+Math.pow(e/.5,2)*21800;n.frequency.setTargetAtTime(r,s,.05)}else if(e>.52){n.type="highpass";const r=20+Math.pow((e-.5)/.5,2)*8e3;n.frequency.setTargetAtTime(r,s,.05)}else n.type="lowpass",n.frequency.setTargetAtTime(22e3,s,.05)}setChannelGain(t,e){if(!this.audioContext)return;const n=t==="A"?this.chGainA:this.chGainB;n&&n.gain.setValueAtTime(Math.max(0,Math.min(1.5,e)),this.audioContext.currentTime)}setFXType(t,e){if(!this.fxStates[t]||(this.fxStates[t].type=e,!this.audioContext))return;const n=this.audioContext.currentTime,s=t==="A"?this.fxDelayA:this.fxDelayB,r=t==="A"?this.fxFeedbackA:this.fxFeedbackB,o=t==="A"?this.fxFilterA:this.fxFilterB;!s||!r||!o||(e==="echo"?(s.delayTime.setTargetAtTime(.375,n,.05),r.gain.setTargetAtTime(.45,n,.05),o.frequency.setTargetAtTime(12e3,n,.05),o.type="lowpass"):e==="flanger"?(s.delayTime.setTargetAtTime(.006,n,.05),r.gain.setTargetAtTime(.65,n,.05),o.frequency.setTargetAtTime(18e3,n,.05),o.type="allpass"):e==="reverb"?(s.delayTime.setTargetAtTime(.09,n,.05),r.gain.setTargetAtTime(.7,n,.05),o.frequency.setTargetAtTime(8e3,n,.05),o.type="lowpass"):e==="filter"&&(s.delayTime.setTargetAtTime(.001,n,.05),r.gain.setTargetAtTime(0,n,.05),o.frequency.setTargetAtTime(1e4,n,.05),o.type="lowpass"))}setFXToggle(t,e){this.fxStates[t]&&(this.fxStates[t].enabled=e,this.updateFXDryWet(t))}setFXParam(t,e,n){if(!this.audioContext||!this.fxStates[t])return;const s=this.audioContext.currentTime,r=this.fxStates[t];r[e]=n;const o=t==="A"?this.fxDelayA:this.fxDelayB,a=t==="A"?this.fxFeedbackA:this.fxFeedbackB,c=t==="A"?this.fxFilterA:this.fxFilterB;if(e==="lpf"&&c){const h=200+Math.pow(n,2)*19800;if(c.frequency.setTargetAtTime(h,s,.05),r.type==="echo"&&o){const l=.1+n*.7;o.delayTime.setTargetAtTime(l,s,.05)}}else if(e==="res"&&c&&a){const h=.5+n*12;c.Q.setTargetAtTime(h,s,.05);const l=Math.min(.85,n*.85);a.gain.setTargetAtTime(l,s,.05)}else e==="drywet"&&this.updateFXDryWet(t)}updateFXDryWet(t){if(!this.audioContext||!this.fxStates[t])return;const e=this.audioContext.currentTime,n=this.fxStates[t],s=t==="A"?this.fxDryA:this.fxDryB,r=t==="A"?this.fxWetA:this.fxWetB;if(!(!s||!r))if(!n.enabled)s.gain.setTargetAtTime(1,e,.05),r.gain.setTargetAtTime(0,e,.05);else{const o=n.drywet!==void 0?n.drywet:.4;s.gain.setTargetAtTime(Math.max(.2,1-o*.6),e,.05),r.gain.setTargetAtTime(o,e,.05)}}setCrossfader(t){if(this.crossfadeProgress=Math.max(0,Math.min(1,t)),!this.audioContext||!this.xFaderGainA||!this.xFaderGainB)return;const e=Math.cos(this.crossfadeProgress*.5*Math.PI),n=Math.sin(this.crossfadeProgress*.5*Math.PI);this.xFaderGainA.gain.setValueAtTime(e,this.audioContext.currentTime),this.xFaderGainB.gain.setValueAtTime(n,this.audioContext.currentTime)}cueDeck(t){const e=t==="A"?this.audioA:this.audioB;e&&(e.paused?this.deckStates[t].cueTime=e.currentTime||0:(e.pause(),e.currentTime=this.deckStates[t].cueTime||0,this.deckStates[t].isPlaying=!1))}togglePlayDeck(t){const e=t==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),e.paused?(e.play(),this.deckStates[t].isPlaying=!0,this.isPlaying=!0):(e.pause(),this.deckStates[t].isPlaying=!1),this.deckStates[t].isPlaying}setPitch(t,e){const n=1+e/100,s=t==="A"?this.audioA:this.audioB;s.playbackRate=Math.max(.5,Math.min(2,n)),this.deckStates[t].pitch=n}setEQPreset(t){const e={flat:{low:0,mid:0,high:0},bass:{low:5.5,mid:0,high:2},club:{low:4.5,mid:-2,high:3.5},vocal:{low:-3,mid:4,high:2},electronic:{low:5,mid:1,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}toggleAutoDj(){return this.autoDjEnabled=!this.autoDjEnabled,this.autoDjEnabled}triggerHotCue(t,e,n=!1){const s=t==="A"?this.audioA:this.audioB;if(!s)return null;const r=this.hotCues[t][e];return r===null||n?(this.hotCues[t][e]=s.currentTime||0,{action:"set",time:this.hotCues[t][e]}):(s.currentTime=r,s.paused&&s.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(()=>{}),{action:"jump",time:r})}toggleLoop(t,e){const n=t==="A"?this.audioA:this.audioB,s=this.deckStates[t];if(s.loopActive&&s.loopBeats===e)return s.loopActive=!1,!1;s.loopActive=!0,s.loopBeats=e,s.loopStart=n.currentTime;const r=60/(s.detectedBpm||128);return s.loopEnd=s.loopStart+e*r,!0}getAuthHeaders(){const t=localStorage.getItem("jmf_dj_key")||(typeof window<"u"?new URLSearchParams(window.location.search).get("dj_key"):null),e={"Content-Type":"application/json"};return t&&(e["x-dj-key"]=t),e}async triggerDJCrossfade(){if(this.isCrossfading)return;const t=this.activeDeck==="A"?"B":"A";if(!this.nextTrack)try{const e=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.track&&(this.nextTrack=n.track,this.queue=n.queue||[],this.totalTracks=n.totalTracks||0)}catch(e){console.warn("Error fetching next track for crossfade:",e)}this.nextTrack&&(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.loadDeck(t,this.nextTrack,0,!0),this.analyzeTrackBpm(this.nextTrack,t),this.onTransition&&this.onTransition(!0,this.activeDeck,t,this.nextTrack))}async crossfadeToDeck(t,e=5){if(this.isCrossfading||this.activeDeck===t)return;const n=t,s=t==="A"?"B":"A",r=n==="A"?this.audioA:this.audioB;if(r.paused||r.currentTime===0){const o=n==="A"?this.currentTrack:this.nextTrack||this.queue[0];o&&(this.loadDeck(n,o,0,!0),this.analyzeTrackBpm(o,n))}if(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.crossfadeDuration=e,this.onTransition){const o=n==="A"?this.currentTrack:this.nextTrack;this.onTransition(!0,s,n,o)}}setMixMode(t){this.mixMode=t,this.crossfadeDuration=t==="dj"?8:3}async setGenre(t){this.activeGenre=t;try{const e=await fetch("/api/genre/select",{method:"POST",headers:this.getAuthHeaders(),body:JSON.stringify({genre:t})});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.currentTrack&&(this.nextTrack=n.currentTrack,this.mixMode==="radio"?this.loadDeck(this.activeDeck,n.currentTrack,0,!0):this.triggerDJCrossfade()),await this.fetchStatus()}catch(e){console.warn("Error setting genre:",e)}}async fetchStatus(){try{const e=await(await fetch("/api/track")).json();e&&e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.warn("Error fetching status:",t)}}async fetchGenres(){try{return await(await fetch("/api/genres")).json()}catch{return{genres:[],activeGenre:"all"}}}togglePlay(){const t=this.activeDeck==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),t.paused?(t.play(),this.isPlaying=!0,this.deckStates[this.activeDeck].isPlaying=!0):(t.pause(),this.isPlaying=!1,this.deckStates[this.activeDeck].isPlaying=!1),this.isPlaying}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.audioContext&&this.masterGain.gain.setValueAtTime(this.isMuted?0:this.volume,this.audioContext.currentTime)}toggleMute(){return this.isMuted=!this.isMuted,this.setVolume(this.volume),this.isMuted}async skipNext(){try{const t=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();if(e.track){this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck);const n=this.activeDeck==="A"?"B":"A";this.nextTrack&&(this.loadDeck(n,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,n)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks)}}catch(t){console.error("Error skipping next track:",t)}}async skipPrev(){try{const t=await fetch("/api/prev",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error skipping prev track:",t)}}getActiveAudio(){return this.activeDeck==="A"?this.audioA:this.audioB}getAudioAnalysis(){if(!this.analyser||!this.isPlaying)return null;const t=this.deckStates[this.activeDeck];if(t.loopActive&&t.loopEnd>t.loopStart){const p=this.getActiveAudio();p.currentTime>=t.loopEnd&&(p.currentTime=t.loopStart)}const e=this.activeDeck==="A"?this.audioA:this.audioB;e.currentTime&&(this.elapsedTime=e.currentTime,e.duration&&!isNaN(e.duration)&&(this.duration=e.duration));const n=this.duration-this.elapsedTime;if(this.autoDjEnabled&&this.mixMode==="dj"&&n<=this.crossfadeDuration&&!this.isTransitionTriggered&&this.elapsedTime>5&&(this.isTransitionTriggered=!0,this.triggerDJCrossfade()),this.isCrossfading&&this.audioContext){const g=(performance.now()-this.crossfadeStartTime)/1e3,_=Math.min(1,g/this.crossfadeDuration);if(this.activeDeck==="A"?(this.setCrossfader(_),this.setFilterSweep("A",.5-.4*_),this.setFilterSweep("B",.1+.4*_)):(this.setCrossfader(1-_),this.setFilterSweep("B",.5-.4*_),this.setFilterSweep("A",.1+.4*_)),_>=1){this.isCrossfading=!1;const m=this.activeDeck,f=this.activeDeck==="A"?"B":"A",w=m==="A"?this.audioA:this.audioB;w.pause(),w.currentTime=0,this.deckStates[m].isPlaying=!1,this.activeDeck=f,this.currentTrack=this.nextTrack,this.isTransitionTriggered=!1,this.setFilterSweep("A",.5),this.setFilterSweep("B",.5),fetch("/api/next",{method:"POST"}).then(b=>b.json()).then(b=>{b.track&&(this.nextTrack=b.track,this.queue=b.queue||[],this.totalTracks=b.totalTracks||0,this.loadDeck(m,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,m),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,null,null,null))}).catch(b=>console.warn("Error preloading upcoming track on standby deck:",b)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,this.activeDeck,this.activeDeck,null)}}this.analyser.getByteFrequencyData(this.freqData),this.analyser.getByteTimeDomainData(this.dataArray);const s=this.freqData.length;let r=0;for(let p=1;p<=10;p++)r+=this.freqData[p];const o=r/2550;this.analysis.bass=o;let a=0;for(let p=11;p<=60;p++)a+=this.freqData[p];this.analysis.mids=a/12750;let c=0;for(let p=61;p<=180;p++)c+=this.freqData[p];this.analysis.treble=c/30600;let h=0;for(let p=0;p<s;p++)h+=this.freqData[p];this.analysis.volume=h/(s*255);const l=o-this.prevBass,d=performance.now()/1e3;if(l>.16&&o>.38){if(this.analysis.beat=1,this.lastBeatTime>0){const p=d-this.lastBeatTime;if(p>=.33&&p<=1.05){this.beatIntervals.push(p),this.beatIntervals.length>12&&this.beatIntervals.shift();const g=[...this.beatIntervals].sort((w,b)=>w-b),m=60/g[Math.floor(g.length/2)],f=this.deckStates[this.activeDeck].detectedBpm;this.deckStates[this.activeDeck].detectedBpm=f*.88+m*.12}}this.lastBeatTime=d}else this.analysis.beat*=.88;this.prevBass=o,this.analysis.rawArray=[];const u=Math.floor(s/32);for(let p=0;p<32;p++)this.analysis.rawArray.push(this.freqData[p*u]/255);return this.analysis.activeDeck=this.activeDeck,this.analysis.crossfadeProgress=this.crossfadeProgress,this.analysis.isCrossfading=this.isCrossfading,this.analysis.deckALevel=this.activeDeck==="A"?this.analysis.volume*1.4:this.isCrossfading?(1-this.crossfadeProgress)*this.analysis.volume:.02,this.analysis.deckBLevel=this.activeDeck==="B"?this.analysis.volume*1.4:this.isCrossfading?this.crossfadeProgress*this.analysis.volume:.02,this.analysis.bpmA=(this.deckStates.A.detectedBpm||128)*this.deckStates.A.pitch,this.analysis.bpmB=(this.deckStates.B.detectedBpm||126)*this.deckStates.B.pitch,this.analysis}update(){return this.getAudioAnalysis()}}class im{constructor(t,e,n,s,r,o,a){this.audioEngine=t,this.deckAWaveWrap=e,this.deckBWaveWrap=n,this.deckACanvas=s,this.deckBCanvas=r,this.radioWaveformCanvas=o,this.radioWaveformWrap=a,this.waveformProfileA=this.generateWaveformProfile("seed-a"),this.waveformProfileB=this.generateWaveformProfile("seed-b"),this.initWaveformSeeking()}generateWaveformProfile(t){let e=0;for(let o=0;o<t.length;o++)e=(e<<5)-e+t.charCodeAt(o),e|=0;const n=o=>{const a=Math.sin(e+o*12.9898)*43758.5453;return a-Math.floor(a)},s=[],r=120;for(let o=0;o<r;o++){const a=o/r;let c=.5;a<.12?c=.3+.35*(a/.12):a<.35?c=.75+.2*Math.sin(a*40):a<.45?c=.35+.15*Math.sin(a*20):a<.75?c=.88+.12*Math.sin(a*50):a<.85?c=.45+.2*Math.sin(a*30):c=.7*(1-(a-.85)/.15);const h=n(o),d=o%4===0||o%6===0?.25*h:.12*h,u=Math.max(.18,Math.min(1,c+d));s.push(u)}return s}drawWaveform(t,e,n,s,r){if(!t)return;const o=t.getContext("2d"),a=t.width,c=t.height,h=c/2;o.clearRect(0,0,a,c);const l=e.length,d=a/l,u=n*a,p=r?r.bass*4:0;for(let g=0;g<l;g++){const _=g*d,m=_<=u,w=Math.abs(_-u)<16&&m?p:0,b=e[g]*(c*.84)+w,y=Math.max(3,Math.min(c-2,b)),B=h-y/2;if(m)if(s==="A"){const T=o.createLinearGradient(0,B,0,B+y);T.addColorStop(0,"#ffffff"),T.addColorStop(.3,"#00f0ff"),T.addColorStop(.7,"#7928ca"),T.addColorStop(1,"#00f0ff"),o.fillStyle=T}else{const T=o.createLinearGradient(0,B,0,B+y);T.addColorStop(0,"#ffffff"),T.addColorStop(.3,"#ff007f"),T.addColorStop(.7,"#ffd000"),T.addColorStop(1,"#ff007f"),o.fillStyle=T}else o.fillStyle="rgba(90, 105, 140, 0.32)";o.fillRect(_+.5,B,Math.max(1.8,d-1),y)}o.fillStyle="#ffffff",o.shadowColor=s==="A"?"#00f0ff":"#ff007f",o.shadowBlur=8,o.fillRect(u-1,0,2,c),o.shadowBlur=0}initWaveformSeeking(){const t=(e,n)=>{e&&e.addEventListener("click",s=>{const r=e.getBoundingClientRect(),o=Math.max(0,Math.min(1,(s.clientX-r.left)/r.width)),a=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;a&&a.duration&&(a.currentTime=o*a.duration)})};t(this.deckAWaveWrap,"A"),t(this.deckBWaveWrap,"B")}}class sm{constructor(t,e,n,s,r,o,a,c,h,l,d,u,p,g,_,m,f){this.audioEngine=t,this.deckAJog=e,this.deckBJog=n,this.deckAJogBpm=s,this.deckBJogBpm=r,this.deckAJogPitch=o,this.deckBJogPitch=a,this.deckAPitch=c,this.deckBPitch=h,this.deckAPitchVal=l,this.deckBPitchVal=d,this.deckAPitchReset=u,this.deckBPitchReset=p,this.deckATempoPlus=g,this.deckATempoMinus=_,this.deckBTempoPlus=m,this.deckBTempoMinus=f,this.jogAngleA=0,this.jogAngleB=0,this.initJogWheelMouseControl(),this.initRotaryKnobs()}getJogAngleA(){return this.jogAngleA}getJogAngleB(){return this.jogAngleB}updateJogAngles(t,e,n){var s,r;if(e){const o=this.audioEngine.activeDeck,a=o==="A"||this.audioEngine.isCrossfading||((s=n==null?void 0:n.A)==null?void 0:s.isPlaying),c=o==="B"||this.audioEngine.isCrossfading||((r=n==null?void 0:n.B)==null?void 0:r.isPlaying);a&&(this.jogAngleA+=2.2,this.deckAJog&&(this.deckAJog.style.transform=`rotate(${this.jogAngleA}deg)`)),c&&(this.jogAngleB+=2.2,this.deckBJog&&(this.deckBJog.style.transform=`rotate(${this.jogAngleB}deg)`))}}initJogWheelMouseControl(){const t=(e,n)=>{if(!e)return;let s=!1,r=0,o=!1;const a=()=>{const u=e.getBoundingClientRect();return{x:u.left+u.width/2,y:u.top+u.height/2}},c=u=>{const p=a(),g=u.clientX!==void 0?u.clientX:u.touches&&u.touches[0]?u.touches[0].clientX:0,_=u.clientY!==void 0?u.clientY:u.touches&&u.touches[0]?u.touches[0].clientY:0;return Math.atan2(_-p.y,g-p.x)},h=u=>{u.preventDefault(),s=!0,r=c(u),e.classList.add("is-scratching");const p=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;o=p&&!p.paused,o&&p.pause(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d)},l=u=>{if(!s)return;u.preventDefault&&u.preventDefault();const p=c(u);let g=p-r;g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),r=p;const _=g*(180/Math.PI);n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;if(m&&m.duration){const f=g/(2*Math.PI)*1.8;m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+f))}},d=()=>{if(s){s=!1,e.classList.remove("is-scratching"),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d);const u=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;o&&u&&u.play().catch(p=>console.warn("Resume error after jog scratch:",p))}};e.addEventListener("mousedown",h),e.addEventListener("touchstart",h,{passive:!1}),e.addEventListener("wheel",u=>{u.preventDefault();const p=u.deltaY<0?1:-1,g=p*.35,_=p*12;n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;m&&m.duration&&(m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+g)))})};t(this.deckAJog,"A"),t(this.deckBJog,"B")}initRotaryKnobs(){document.querySelectorAll(".rotary-knob-component").forEach(e=>{const n=e.getAttribute("data-param"),s=parseFloat(e.getAttribute("data-min")),r=parseFloat(e.getAttribute("data-max")),o=parseFloat(e.getAttribute("data-default"));let a=parseFloat(e.getAttribute("data-val"));const c=e.querySelector(".knob-cap"),h=f=>{const b=-135+(f-s)/(r-s)*270;c&&(c.style.transform=`rotate(${b}deg)`),e.setAttribute("data-val",f)},l=f=>{if(this.audioEngine)switch(n){case"trim-A":this.audioEngine.setChannelGain("A",f);break;case"eq-A-high":this.audioEngine.setEQ("A","high",f);break;case"eq-A-mid":this.audioEngine.setEQ("A","mid",f);break;case"eq-A-low":this.audioEngine.setEQ("A","low",f);break;case"filter-A":this.audioEngine.setFilterSweep("A",f);break;case"fx-a-lpf":this.audioEngine.setFXParam("A","lpf",f);break;case"fx-a-res":this.audioEngine.setFXParam("A","res",f);break;case"fx-a-drywet":this.audioEngine.setFXParam("A","drywet",f);break;case"trim-B":this.audioEngine.setChannelGain("B",f);break;case"eq-B-high":this.audioEngine.setEQ("B","high",f);break;case"eq-B-mid":this.audioEngine.setEQ("B","mid",f);break;case"eq-B-low":this.audioEngine.setEQ("B","low",f);break;case"filter-B":this.audioEngine.setFilterSweep("B",f);break;case"fx-b-lpf":this.audioEngine.setFXParam("B","lpf",f);break;case"fx-b-res":this.audioEngine.setFXParam("B","res",f);break;case"fx-b-drywet":this.audioEngine.setFXParam("B","drywet",f);break;case"master-vol":this.audioEngine.setVolume(f);break;case"hp-vol":this.audioEngine.setVolume(f);break}};h(a);let d=!1,u=0,p=a;const g=f=>{d=!0,u=f.clientY||f.touches&&f.touches[0].clientY,p=a,e.classList.add("is-dragging"),window.addEventListener("mousemove",_),window.addEventListener("mouseup",m),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",m)},_=f=>{if(!d)return;f.preventDefault&&f.preventDefault();const w=f.clientY||f.touches&&f.touches[0].clientY,b=u-w,B=(r-s)/140;a=Math.max(s,Math.min(r,p+b*B)),h(a),l(a)},m=()=>{d&&(d=!1,e.classList.remove("is-dragging"),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",m),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",m))};e.addEventListener("mousedown",g),e.addEventListener("touchstart",g,{passive:!1}),e.addEventListener("wheel",f=>{f.preventDefault();const w=f.deltaY<0?1:-1,b=(r-s)/30;a=Math.max(s,Math.min(r,a+w*b)),h(a),l(a)}),e.addEventListener("dblclick",()=>{a=o,h(a),l(a)})})}}class rm{constructor(t,e){this.audioEngine=t,this.djScene=e,this.camButtons=document.querySelectorAll(".cam-btn"),this.genreModal=document.getElementById("genre-modal"),this.lightingModal=document.getElementById("lighting-modal"),this.queueDrawer=document.getElementById("queue-drawer"),this.setMode=n=>{if(n==="dj"){const s=document.getElementById("btn-mode-dj");s&&s.click()}else{const s=document.getElementById("btn-mode-radio");s&&s.click()}},this.currentTrack=null,this.initMobileMenu()}initMobileMenu(){this.btnMobileMenu=document.getElementById("btn-mobile-menu"),this.btnMobileMenuClose=document.getElementById("btn-mobile-menu-close"),this.mobileMenuDrawer=document.getElementById("mobile-menu-drawer"),this.mobileMenuBackdrop=document.getElementById("mobile-menu-backdrop");const t=()=>{if(this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.remove("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.remove("hidden"),this.currentTrack){const T=document.getElementById("m-menu-track-title"),A=document.getElementById("m-menu-track-artist");if(T&&(T.textContent=this.currentTrack.title||"Unknown Track"),A){const R=this.currentTrack.genre?` • ${this.currentTrack.genre.name}`:"";A.textContent=(this.currentTrack.artist||"JMF Live Station")+R}}},e=()=>{this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.add("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.add("hidden")};this.btnMobileMenu&&this.btnMobileMenu.addEventListener("click",t),this.btnMobileMenuClose&&this.btnMobileMenuClose.addEventListener("click",e),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.addEventListener("click",e),window.addEventListener("keydown",T=>{T.key==="Escape"&&e()});const n=document.getElementById("m-btn-mode-dj"),s=document.getElementById("m-btn-mode-radio");n&&n.addEventListener("click",()=>{this.setMode("dj")}),s&&s.addEventListener("click",()=>{this.setMode("radio")});const r=document.querySelectorAll(".m-cam-item");r.forEach(T=>{T.addEventListener("click",()=>{const A=T.getAttribute("data-cam");r.forEach(R=>R.classList.remove("active")),T.classList.add("active"),this.camButtons.forEach(R=>{R.getAttribute("data-cam")===A?R.classList.add("active"):R.classList.remove("active")}),this.djScene.setCameraPreset(A)})});const o=document.getElementById("m-btn-open-all-genres");o&&o.addEventListener("click",()=>{e(),this.genreModal&&this.genreModal.classList.remove("hidden")});const a=document.getElementById("m-btn-open-lighting-modal");a&&a.addEventListener("click",()=>{e(),this.lightingModal&&this.lightingModal.classList.remove("hidden")});const c=document.querySelectorAll(".m-theme-pill");c.forEach(T=>{T.addEventListener("click",()=>{c.forEach(E=>E.classList.remove("active")),T.classList.add("active");const A=T.getAttribute("data-theme");document.querySelectorAll(".l-theme-btn").forEach(E=>{E.getAttribute("data-theme")===A?E.classList.add("active"):E.classList.remove("active")}),this.djScene.setTheme(A)})});const h=document.getElementById("m-toggle-strobe"),l=document.getElementById("m-toggle-lasers"),d=document.getElementById("m-toggle-fog"),u=document.getElementById("toggle-strobe"),p=document.getElementById("toggle-lasers"),g=document.getElementById("toggle-fog");h&&h.addEventListener("change",T=>{u&&(u.checked=T.target.checked),this.djScene.lighting.setStrobeEnabled(T.target.checked)}),l&&l.addEventListener("change",T=>{p&&(p.checked=T.target.checked),this.djScene.lighting.setLasersEnabled(T.target.checked)}),d&&d.addEventListener("change",T=>{g&&(g.checked=T.target.checked),this.djScene.lighting.setFogEnabled(T.target.checked)});const _=document.getElementById("m-slider-light-intensity"),m=document.getElementById("m-val-light-intensity"),f=document.getElementById("slider-light-intensity"),w=document.getElementById("val-light-intensity");_&&m&&_.addEventListener("input",T=>{const A=parseFloat(T.target.value),R=`${Math.round(A*100)}%`;m.textContent=R,f&&(f.value=A),w&&(w.textContent=R),this.djScene.lighting.setIntensityMultiplier(A)});const b=document.getElementById("m-radio-eq-preset");b&&b.addEventListener("change",T=>{const A=T.target.value;this.radioEqPreset&&(this.radioEqPreset.value=A),this.audioEngine.setEQPreset(A)});const y=document.getElementById("m-btn-open-queue");y&&y.addEventListener("click",()=>{e(),this.queueDrawer&&this.queueDrawer.classList.remove("hidden")});const B=document.getElementById("m-btn-fullscreen");B&&B.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})})}}class om{constructor(t,e){this.audioEngine=t,this.djScene=e,this.overlay=document.getElementById("start-overlay"),this.btnStart=document.getElementById("btn-start-stream"),this.waveIndicator=document.getElementById("wave-indicator"),this.queueDrawer=document.getElementById("queue-drawer"),this.btnQueueToggle=document.getElementById("btn-queue-toggle"),this.queueCloseBtn=document.getElementById("queue-close-btn"),this.queueList=document.getElementById("queue-list"),this.btnModeDj=document.getElementById("btn-mode-dj"),this.btnModeRadio=document.getElementById("btn-mode-radio"),this.transitionBanner=document.getElementById("transition-banner"),this.transitionText=document.getElementById("transition-text"),this.camButtons=document.querySelectorAll(".cam-btn"),this.deckAUnit=document.getElementById("deck-a-unit"),this.deckATitle=document.getElementById("deck-a-title"),this.deckAArtist=document.getElementById("deck-a-artist"),this.deckAState=document.getElementById("deck-a-state"),this.deckABpm=document.getElementById("deck-a-bpm"),this.deckAPitchVal=document.getElementById("deck-a-pitch-val"),this.deckAPitch=document.getElementById("deck-a-pitch"),this.deckAPitchReset=document.getElementById("deck-a-pitch-reset"),this.deckATempoPlus=document.getElementById("deck-a-tempo-plus"),this.deckATempoMinus=document.getElementById("deck-a-tempo-minus"),this.deckACanvas=document.getElementById("deck-a-canvas"),this.deckAWaveWrap=document.getElementById("deck-a-waveform-wrap"),this.deckATimeCur=document.getElementById("deck-a-time-cur"),this.deckATimeRem=document.getElementById("deck-a-time-rem"),this.deckAJog=document.getElementById("deck-a-jog"),this.deckAJogBpm=document.getElementById("deck-a-jog-bpm"),this.deckAJogPitch=document.getElementById("deck-a-jog-pitch"),this.deckACue=document.getElementById("deck-a-cue"),this.deckAPlay=document.getElementById("deck-a-play"),this.deckASync=document.getElementById("deck-a-sync"),this.deckALoop4=document.getElementById("deck-a-loop-4"),this.deckALoop8=document.getElementById("deck-a-loop-8"),this.deckAFxToggle=document.getElementById("deck-a-fx-toggle"),this.deckBUnit=document.getElementById("deck-b-unit"),this.deckBTitle=document.getElementById("deck-b-title"),this.deckBArtist=document.getElementById("deck-b-artist"),this.deckBState=document.getElementById("deck-b-state"),this.deckBBpm=document.getElementById("deck-b-bpm"),this.deckBPitchVal=document.getElementById("deck-b-pitch-val"),this.deckBPitch=document.getElementById("deck-b-pitch"),this.deckBPitchReset=document.getElementById("deck-b-pitch-reset"),this.deckBTempoPlus=document.getElementById("deck-b-tempo-plus"),this.deckBTempoMinus=document.getElementById("deck-b-tempo-minus"),this.deckBCanvas=document.getElementById("deck-b-canvas"),this.deckBWaveWrap=document.getElementById("deck-b-waveform-wrap"),this.deckBTimeCur=document.getElementById("deck-b-time-cur"),this.deckBTimeRem=document.getElementById("deck-b-time-rem"),this.deckBJog=document.getElementById("deck-b-jog"),this.deckBJogBpm=document.getElementById("deck-b-jog-bpm"),this.deckBJogPitch=document.getElementById("deck-b-jog-pitch"),this.deckBCue=document.getElementById("deck-b-cue"),this.deckBPlay=document.getElementById("deck-b-play"),this.deckBSync=document.getElementById("deck-b-sync"),this.deckBLoop4=document.getElementById("deck-b-loop-4"),this.deckBLoop8=document.getElementById("deck-b-loop-8"),this.deckBFxToggle=document.getElementById("deck-b-fx-toggle"),this.faderCh1=document.getElementById("fader-ch1"),this.vuMeterCh1Leds=document.querySelectorAll("#vu-meter-ch1 .led"),this.faderCh2=document.getElementById("fader-ch2"),this.vuMeterCh2Leds=document.querySelectorAll("#vu-meter-ch2 .led"),this.masterVuL=document.querySelectorAll("#master-vu-l .led"),this.masterVuR=document.querySelectorAll("#master-vu-r .led"),this.btnMixNow=document.getElementById("btn-mix-now"),this.btnPrev=document.getElementById("btn-prev"),this.btnNext=document.getElementById("btn-next"),this.btnMixerPlay=document.getElementById("btn-mixer-play"),this.btnMute=document.getElementById("btn-mute"),this.iconVol=document.getElementById("icon-vol"),this.iconMute=document.getElementById("icon-mute"),this.btnFullscreen=document.getElementById("btn-fullscreen"),this.crossfaderTrack=document.getElementById("crossfader-track"),this.crossfaderCap=document.getElementById("crossfader-cap"),this.btnAutoDj=document.getElementById("btn-auto-dj"),this.btnRecord=document.getElementById("btn-record"),this.btnSplit=document.getElementById("btn-split"),this.horizVuBars=document.querySelectorAll(".horiz-vu-bar"),this.radioModeConsole=document.getElementById("radio-mode-console"),this.djStation=document.querySelector(".hardware-dj-station"),this.mobileDeckTabs=document.getElementById("mobile-deck-tabs"),this.bottomUtilityBar=document.querySelector(".bottom-utility-bar"),this.radioTrackTitle=document.getElementById("radio-track-title"),this.radioTrackArtist=document.getElementById("radio-track-artist"),this.btnRadioPrev=document.getElementById("btn-radio-prev"),this.btnRadioPlay=document.getElementById("btn-radio-play"),this.btnRadioNext=document.getElementById("btn-radio-next"),this.radioWaveformCanvas=document.getElementById("radio-waveform-canvas"),this.radioWaveformWrap=document.getElementById("radio-waveform-wrap"),this.radioTimeCur=document.getElementById("radio-time-cur"),this.radioTimeTotal=document.getElementById("radio-time-total"),this.radioEqPreset=document.getElementById("radio-eq-preset"),this.btnRadioEqToggle=document.getElementById("btn-radio-eq-toggle"),this.radioHpSegs=document.querySelectorAll("#radio-hp-meter .r-seg"),this.radioMasterVuLSegs=document.querySelectorAll(".r-row-l .r-seg"),this.radioMasterVuRSegs=document.querySelectorAll(".r-row-r .r-seg"),this.waveform=new im(t,this.deckAWaveWrap,this.deckBWaveWrap,this.deckACanvas,this.deckBCanvas,this.radioWaveformCanvas,this.radioWaveformWrap),this.jogWheel=new sm(t,this.deckAJog,this.deckBJog,this.deckAJogBpm,this.deckBJogBpm,this.deckAJogPitch,this.deckBJogPitch,this.deckAPitch,this.deckBPitch,this.deckAPitchVal,this.deckBPitchVal,this.deckAPitchReset,this.deckBPitchReset,this.deckATempoPlus,this.deckATempoMinus,this.deckBTempoPlus,this.deckBTempoMinus),this.mobileMenu=new rm(t,e),this.initHardwareEvents(),this.initGenreControls()}initHardwareEvents(){const t=async L=>{L&&(L.preventDefault(),L.stopPropagation()),this.overlay&&(this.overlay.classList.add("hidden"),this.overlay.style.display="none");try{await this.audioEngine.start()}catch(x){console.warn("Audio start error:",x)}this.updatePlayState(!0)};this.btnStart&&(this.btnStart.addEventListener("click",t),this.btnStart.addEventListener("touchend",t)),this.overlay&&this.overlay.addEventListener("click",L=>{L.target===this.overlay&&t(L)}),this.deckAPlay&&this.deckAPlay.addEventListener("click",()=>{const L=this.audioEngine.togglePlayDeck("A");this.deckAPlay.classList.toggle("active-play",L),this.updatePlayState(L)}),this.deckACue&&this.deckACue.addEventListener("click",()=>{this.audioEngine.cueDeck("A"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckAPitch&&this.deckAPitch.addEventListener("input",L=>{const x=parseFloat(L.target.value);this.audioEngine.setPitch("A",x);const v=`${x>=0?"+":""}${x.toFixed(1)}%`;this.deckAPitchVal&&(this.deckAPitchVal.textContent=v),this.deckAJogPitch&&(this.deckAJogPitch.textContent=v)}),this.deckAPitchReset&&this.deckAPitchReset.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=0),this.audioEngine.setPitch("A",0),this.deckAPitchVal&&(this.deckAPitchVal.textContent="+0.0%"),this.deckAJogPitch&&(this.deckAJogPitch.textContent="0.0%")}),this.deckATempoPlus&&this.deckATempoPlus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.min(8,parseFloat(this.deckAPitch.value)+.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckATempoMinus&&this.deckATempoMinus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.max(-8,parseFloat(this.deckAPitch.value)-.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckALoop4&&this.deckALoop4.addEventListener("click",()=>{const L=this.audioEngine.toggleLoop("A",4);this.deckALoop4.classList.toggle("active",L),this.deckALoop8&&this.deckALoop8.classList.remove("active")}),this.deckALoop8&&this.deckALoop8.addEventListener("click",()=>{const L=this.audioEngine.toggleLoop("A",8);this.deckALoop8.classList.toggle("active",L),this.deckALoop4&&this.deckALoop4.classList.remove("active")});const e=document.getElementById("deck-a-fx-type");e&&e.addEventListener("change",L=>this.audioEngine.setFXType("A",L.target.value)),this.deckAFxToggle&&this.deckAFxToggle.addEventListener("click",()=>{const L=!this.deckAFxToggle.classList.contains("active");this.deckAFxToggle.classList.toggle("active",L),this.audioEngine.setFXToggle("A",L)}),this.deckBPlay&&this.deckBPlay.addEventListener("click",()=>{const L=this.audioEngine.togglePlayDeck("B");this.deckBPlay.classList.toggle("active-play",L),this.updatePlayState(L)}),this.deckBCue&&this.deckBCue.addEventListener("click",()=>{this.audioEngine.cueDeck("B"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckBPitch&&this.deckBPitch.addEventListener("input",L=>{const x=parseFloat(L.target.value);this.audioEngine.setPitch("B",x);const v=`${x>=0?"+":""}${x.toFixed(1)}%`;this.deckBPitchVal&&(this.deckBPitchVal.textContent=v),this.deckBJogPitch&&(this.deckBJogPitch.textContent=v)}),this.deckBPitchReset&&this.deckBPitchReset.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=0),this.audioEngine.setPitch("B",0),this.deckBPitchVal&&(this.deckBPitchVal.textContent="+0.0%"),this.deckBJogPitch&&(this.deckBJogPitch.textContent="0.0%")}),this.deckBTempoPlus&&this.deckBTempoPlus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.min(8,parseFloat(this.deckBPitch.value)+.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBTempoMinus&&this.deckBTempoMinus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.max(-8,parseFloat(this.deckBPitch.value)-.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBLoop4&&this.deckBLoop4.addEventListener("click",()=>{const L=this.audioEngine.toggleLoop("B",4);this.deckBLoop4.classList.toggle("active",L),this.deckBLoop8&&this.deckBLoop8.classList.remove("active")}),this.deckBLoop8&&this.deckBLoop8.addEventListener("click",()=>{const L=this.audioEngine.toggleLoop("B",8);this.deckBLoop8.classList.toggle("active",L),this.deckBLoop4&&this.deckBLoop4.classList.remove("active")});const n=document.getElementById("deck-b-fx-type");n&&n.addEventListener("change",L=>this.audioEngine.setFXType("B",L.target.value)),this.deckBFxToggle&&this.deckBFxToggle.addEventListener("click",()=>{const L=!this.deckBFxToggle.classList.contains("active");this.deckBFxToggle.classList.toggle("active",L),this.audioEngine.setFXToggle("B",L)}),this.faderCh1&&this.faderCh1.addEventListener("input",L=>this.audioEngine.setChannelGain("A",parseFloat(L.target.value))),this.faderCh2&&this.faderCh2.addEventListener("input",L=>this.audioEngine.setChannelGain("B",parseFloat(L.target.value))),this.btnMixNow&&this.btnMixNow.addEventListener("click",()=>this.audioEngine.triggerDJCrossfade()),this.btnNext&&this.btnNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.btnPrev&&this.btnPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnMixerPlay&&this.btnMixerPlay.addEventListener("click",()=>{const L=this.audioEngine.togglePlay();this.updatePlayState(L)}),this.btnMute&&this.btnMute.addEventListener("click",()=>{const L=this.audioEngine.toggleMute();this.updateVolumeIcons(L)}),this.btnFullscreen&&this.btnFullscreen.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})});const s=document.getElementById("btn-cf-ch1"),r=document.getElementById("btn-cf-ch2");s&&s.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("A",5)}),r&&r.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("B",5)}),this.crossfaderTrack&&this.crossfaderTrack.addEventListener("click",L=>{const x=this.crossfaderTrack.getBoundingClientRect(),v=L.clientX-x.left,N=Math.max(0,Math.min(1,v/x.width));N<.35?this.audioEngine.crossfadeToDeck("A",4):N>.65?this.audioEngine.crossfadeToDeck("B",4):this.audioEngine.setCrossfader(N)}),this.setMode=L=>{const x=document.getElementById("m-btn-mode-dj"),v=document.getElementById("m-btn-mode-radio");L==="radio"?(this.audioEngine.setMixMode("radio"),this.btnModeRadio&&this.btnModeRadio.classList.add("active"),this.btnModeDj&&this.btnModeDj.classList.remove("active"),v&&v.classList.add("active"),x&&x.classList.remove("active"),document.body.classList.add("mode-radio"),document.body.classList.remove("mode-dj"),this.djStation&&this.djStation.classList.add("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display="none"),this.bottomUtilityBar&&this.bottomUtilityBar.classList.add("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.remove("hidden"),this.transitionBanner&&this.transitionBanner.classList.add("hidden")):(this.audioEngine.setMixMode("dj"),this.btnModeDj&&this.btnModeDj.classList.add("active"),this.btnModeRadio&&this.btnModeRadio.classList.remove("active"),x&&x.classList.add("active"),v&&v.classList.remove("active"),document.body.classList.add("mode-dj"),document.body.classList.remove("mode-radio"),this.djStation&&this.djStation.classList.remove("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display=""),this.bottomUtilityBar&&this.bottomUtilityBar.classList.remove("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.add("hidden"))},window.innerWidth<=820||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.setMode("radio"):this.setMode("dj"),this.btnModeDj&&this.btnModeRadio&&(this.btnModeDj.addEventListener("click",()=>this.setMode("dj")),this.btnModeRadio.addEventListener("click",()=>this.setMode("radio"))),this.btnRadioPlay&&this.btnRadioPlay.addEventListener("click",()=>{const L=this.audioEngine.togglePlay();this.updatePlayState(L)}),this.btnRadioPrev&&this.btnRadioPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnRadioNext&&this.btnRadioNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.radioEqPreset&&this.radioEqPreset.addEventListener("change",L=>{this.audioEngine.setEQPreset(L.target.value)}),this.btnRadioEqToggle&&this.radioEqPreset&&this.btnRadioEqToggle.addEventListener("click",()=>{const L=["flat","bass","club","vocal","electronic"],v=(L.indexOf(this.radioEqPreset.value)+1)%L.length;this.radioEqPreset.value=L[v],this.audioEngine.setEQPreset(L[v])}),this.radioWaveformWrap&&this.radioWaveformWrap.addEventListener("click",L=>{const x=this.radioWaveformWrap.getBoundingClientRect(),v=Math.max(0,Math.min(1,(L.clientX-x.left)/x.width)),N=this.audioEngine.getActiveAudio();N&&N.duration&&(N.currentTime=v*N.duration)}),this.camButtons.forEach(L=>{L.addEventListener("click",()=>{this.camButtons.forEach(x=>x.classList.remove("active")),L.classList.add("active"),this.djScene.setCameraPreset(L.getAttribute("data-cam"))})}),this.btnQueueToggle&&this.queueDrawer&&this.btnQueueToggle.addEventListener("click",()=>this.queueDrawer.classList.toggle("hidden")),this.queueCloseBtn&&this.queueDrawer&&this.queueCloseBtn.addEventListener("click",()=>this.queueDrawer.classList.add("hidden")),this.lightingModal=document.getElementById("lighting-modal"),this.btnLightsToggle=document.getElementById("btn-lights-toggle"),this.btnLightsClose=document.getElementById("btn-lights-close"),this.btnSettingsOpen=document.getElementById("btn-settings-open"),this.btnRadioSettings=document.getElementById("btn-radio-settings");const a=()=>{this.lightingModal&&this.lightingModal.classList.remove("hidden")},c=()=>{this.lightingModal&&this.lightingModal.classList.add("hidden")};this.btnLightsToggle&&this.btnLightsToggle.addEventListener("click",a),this.btnSettingsOpen&&this.btnSettingsOpen.addEventListener("click",a),this.btnRadioSettings&&this.btnRadioSettings.addEventListener("click",a),this.btnLightsClose&&this.btnLightsClose.addEventListener("click",c),this.lightingModal&&this.lightingModal.addEventListener("click",L=>{L.target===this.lightingModal&&c()});const h=document.querySelectorAll(".l-theme-btn");h.forEach(L=>{L.addEventListener("click",()=>{h.forEach(v=>v.classList.remove("active")),L.classList.add("active");const x=L.getAttribute("data-theme");this.djScene.setTheme(x)})});const l=document.getElementById("toggle-strobe");l&&l.addEventListener("change",L=>{this.djScene.lighting.setStrobeEnabled(L.target.checked)});const d=document.getElementById("toggle-lasers");d&&d.addEventListener("change",L=>{this.djScene.lighting.setLasersEnabled(L.target.checked)});const u=document.getElementById("toggle-fog");u&&u.addEventListener("change",L=>{this.djScene.lighting.setFogEnabled(L.target.checked)});const p=document.getElementById("slider-light-intensity"),g=document.getElementById("val-light-intensity");p&&g&&p.addEventListener("input",L=>{const x=parseFloat(L.target.value);g.textContent=`${Math.round(x*100)}%`,this.djScene.lighting.setIntensityMultiplier(x)});const _=document.getElementById("slider-laser-speed"),m=document.getElementById("val-laser-speed");_&&m&&_.addEventListener("input",L=>{const x=parseFloat(L.target.value);m.textContent=`${x.toFixed(1)}x`,this.djScene.lighting.setLaserSpeed(x)});const f=document.querySelectorAll(".m-tab-btn"),w=document.getElementById("deck-a-unit"),b=document.getElementById("djm-mixer"),y=document.getElementById("deck-b-unit");f.forEach(L=>{L.addEventListener("click",()=>{f.forEach(v=>v.className="m-tab-btn");const x=L.getAttribute("data-tab");x==="deck-a"?(L.classList.add("active-tab-a"),w&&w.classList.add("m-active-panel"),b&&b.classList.remove("m-active-panel"),y&&y.classList.remove("m-active-panel")):x==="mixer"?(L.classList.add("active-tab-mixer"),w&&w.classList.remove("m-active-panel"),b&&b.classList.add("m-active-panel"),y&&y.classList.remove("m-active-panel")):x==="deck-b"&&(L.classList.add("active-tab-b"),w&&w.classList.remove("m-active-panel"),b&&b.classList.remove("m-active-panel"),y&&y.classList.add("m-active-panel"))})});for(let L=1;L<=4;L++){const x=document.getElementById(`deck-a-pad-${L}`);x&&x.addEventListener("click",N=>{this.audioEngine.triggerHotCue("A",L-1,N.shiftKey)&&(x.classList.add("active"),x.style.transform="scale(0.92)",setTimeout(()=>{x.style.transform=""},120))});const v=document.getElementById(`deck-b-pad-${L}`);v&&v.addEventListener("click",N=>{this.audioEngine.triggerHotCue("B",L-1,N.shiftKey)&&(v.classList.add("active"),v.style.transform="scale(0.92)",setTimeout(()=>{v.style.transform=""},120))})}const B=document.getElementById("btn-auto-dj");B&&B.addEventListener("click",()=>{const L=this.audioEngine.toggleAutoDj();B.classList.toggle("active",L)}),window.addEventListener("keydown",L=>{var x;if(!["INPUT","TEXTAREA","SELECT"].includes((x=document.activeElement)==null?void 0:x.tagName)){if(L.code==="Space"){L.preventDefault();const v=this.audioEngine.togglePlay();this.updatePlayState(v)}else if(L.code==="Escape"){this.queueDrawer&&this.queueDrawer.classList.add("hidden"),this.lightingModal&&this.lightingModal.classList.add("hidden");const v=document.getElementById("genre-modal");v&&v.classList.add("hidden");const N=document.getElementById("dj-auth-modal");N&&N.classList.add("hidden");const K=document.getElementById("about-modal");K&&K.classList.add("hidden");const nt=document.getElementById("mobile-menu-drawer"),Z=document.getElementById("mobile-menu-backdrop");nt&&nt.classList.add("hidden"),Z&&Z.classList.add("hidden")}}});const T=document.getElementById("dj-auth-modal"),A=document.getElementById("btn-dj-auth-close"),R=document.getElementById("btn-dj-enjoy"),E=document.getElementById("input-dj-key"),M=document.getElementById("btn-submit-dj-key"),P=document.getElementById("dj-auth-error"),O=document.getElementById("btn-dj-lang-ru"),z=document.getElementById("btn-dj-lang-en"),H={ru:{title:"JMF RESIDENT DJ BOOTH",heading:"ДОСТУП К ПУЛЬТУ ОГРАНИЧЕН",desc:"Сейчас за пультом играют резиденты <strong>JMF Radio</strong>.<br><br>Чтобы встать за вертушки, управлять треками эфира или заказать свой сет — обратитесь к <strong>администратору клуба</strong> за персональным DJ-ключом.",label:"ЕСТЬ DJ-КЛЮЧ ДОСТУПА?",placeholder:"Введите ключ...",submit:"Встать за пульт",enjoy:"Наслаждаться музыкой и атмосферой",success:"DJ-ключ сохранён! Пробуем войти за пульт..."},en:{title:"JMF RESIDENT DJ BOOTH",heading:"DJ BOOTH ACCESS RESTRICTED",desc:"Resident DJs are currently performing live on <strong>JMF Radio</strong>.<br><br>To take over the decks, control the broadcast, or request a set — please contact the <strong>club administrator</strong> for a personal DJ access key.",label:"HAVE A DJ ACCESS KEY?",placeholder:"Enter access key...",submit:"Take the Decks",enjoy:"Enjoy the music & club vibes",success:"DJ Key saved! Taking over the decks..."}};let $=localStorage.getItem("jmf_ui_lang")||"en";const X=L=>{$=L,localStorage.setItem("jmf_ui_lang",L);const x=H[L]||H.en,v=document.getElementById("dj-auth-title"),N=document.getElementById("dj-auth-heading"),K=document.getElementById("dj-auth-desc"),nt=document.getElementById("dj-auth-label"),Z=document.getElementById("dj-auth-enjoy-text");v&&(v.textContent=x.title),N&&(N.textContent=x.heading),K&&(K.innerHTML=x.desc),nt&&(nt.textContent=x.label),E&&(E.placeholder=x.placeholder),M&&(M.textContent=x.submit),Z&&(Z.textContent=x.enjoy),O&&O.classList.toggle("active",L==="ru"),z&&z.classList.toggle("active",L==="en")};if(O&&O.addEventListener("click",()=>X("ru")),z&&z.addEventListener("click",()=>X("en")),X($),this.showDjAuthModal=()=>{T&&(X($),T.classList.remove("hidden"),P&&P.classList.add("hidden"),E&&(E.value="",E.focus()))},A&&T&&A.addEventListener("click",()=>T.classList.add("hidden")),R&&T&&R.addEventListener("click",()=>T.classList.add("hidden")),M&&E){const L=async()=>{const x=E.value.trim();if(!x)return;localStorage.setItem("jmf_dj_key",x);const v=H[$]||H.ru;P&&(P.classList.remove("hidden"),P.style.color="#00ff88",P.textContent=v.success),setTimeout(()=>{T&&T.classList.add("hidden"),this.audioEngine.skipNext()},600)};M.addEventListener("click",L),E.addEventListener("keydown",x=>{x.key==="Enter"&&L()})}this.audioEngine.onAuthRequired=()=>{this.showDjAuthModal()};const Q=document.getElementById("about-modal"),G=document.getElementById("btn-about-toggle"),et=document.getElementById("m-btn-about-open"),st=document.getElementById("btn-about-close"),dt=document.getElementById("btn-about-lang-ru"),Rt=document.getElementById("btn-about-lang-en"),Ot={ru:{title:"О ПРОЕКТЕ JMF RADIO",tagline:"Интерактивная 3D киберпанк-станция нового поколения и платформа онлайн-вещания на базе Web Audio API.",storyHeading:"ИСТОРИЯ И КОНЦЕПЦИЯ",storyText:"JMF Radio зародилось как ранний аудио-эксперимент на GitHub и выросло в атмосферный 3D киберпанк-клуб. Объединяя процедурный мир на Three.js, реалистичную эмуляцию диджейских дек Pioneer CDJ-3000 / микшера DJM-900 и интеллектуальный AutoDJ-движок с DSP-фильтрами в реальном времени, JMF Radio обеспечивает непрерывный электронный эфир 24/7 прямо в браузере.",creatorHeading:"АВТОР И МУЗЫКАЛЬНЫЕ РЕСУРСЫ",scDesc:"Оригинальные треки, живые сеты и миксы",bcDesc:"Дискография, релизы и Lossless аудио",ghEarlyDesc:"Истоки проекта и ранние архивы на GitHub",ghStationDesc:"Исходный код 3D радио и дорожная карта",techHeading:"КЛЮЧЕВЫЕ ТЕХНОЛОГИИ",legalHeading:"ПРАВОВАЯ ИНФОРМАЦИЯ И DMCA",legalText:"JMF Radio — некоммерческий экспериментальный веб-арт проект, созданный в образовательных, культурных и промо-целях.<br><br>Все права на музыкальные произведения, ремиксы и фонограммы принадлежат их законным авторам, исполнителям и лейблам. JMF Radio не продает треки и не взимает плату за прослушивание.<br><br><strong>Правообладателям и авторам:</strong> Если вы являетесь автором или правообладателем и хотите удалить свой трек из ротации, либо хотите отправить свои оригинальные треки для ротации в эфире — свяжитесь с нами через GitHub или контакты администратора."},en:{title:"ABOUT JMF RADIO",tagline:"Next-generation interactive 3D cyberpunk nightclub & real-time Web Audio broadcasting platform.",storyHeading:"HISTORY & CONCEPT",storyText:"JMF Radio began as an early experimental audio project on GitHub and has evolved into an immersive cyberpunk nightclub experience. Combining a procedural 3D world built with Three.js, realistic Pioneer CDJ-3000/DJM-900 hardware emulation, and an intelligent AutoDJ engine with real-time DSP filters, JMF Radio delivers continuous 24/7 electronic music streaming directly in your web browser.",creatorHeading:"CREATOR & MUSIC CHANNELS",scDesc:"Original tracks, live sets & mixes",bcDesc:"Discography, releases & lossless audio",ghEarlyDesc:"Original roots & GitHub archives",ghStationDesc:"Full 3D station source code & roadmap",techHeading:"🛠️ CORE TECHNOLOGIES",legalHeading:"⚖️ LEGAL DISCLAIMER & DMCA NOTICE",legalText:"JMF Radio is an experimental, non-commercial web audio art & cultural project created for educational, developmental, and promotional purposes.<br><br>All musical works, remixes, and sound recordings remain the intellectual property of their respective artists, composers, and record labels. JMF Radio does not sell audio files or charge listeners for streaming.<br><br><strong>For Artists & Copyright Holders:</strong> If you are a copyright owner and wish to have your music removed from the rotation, or if you would like to submit your original tracks for 24/7 broadcast promotion, please reach out via GitHub or contact the administrator."}},Y=L=>{const x=Ot[L]||Ot.en,v=document.getElementById("about-modal-title"),N=document.getElementById("about-tagline"),K=document.getElementById("about-story-heading"),nt=document.getElementById("about-story-text"),Z=document.getElementById("about-creator-heading"),xt=document.getElementById("about-sc-desc"),ct=document.getElementById("about-bc-desc"),pt=document.getElementById("about-gh-early-desc"),jt=document.getElementById("about-gh-station-desc"),ot=document.getElementById("about-tech-heading"),vt=document.getElementById("about-legal-heading"),Dt=document.getElementById("about-legal-text");v&&(v.textContent=x.title),N&&(N.textContent=x.tagline),K&&(K.textContent=x.storyHeading),nt&&(nt.textContent=x.storyText),Z&&(Z.textContent=x.creatorHeading),xt&&(xt.textContent=x.scDesc),ct&&(ct.textContent=x.bcDesc),pt&&(pt.textContent=x.ghEarlyDesc),jt&&(jt.textContent=x.ghStationDesc),ot&&(ot.textContent=x.techHeading),vt&&(vt.textContent=x.legalHeading),Dt&&(Dt.innerHTML=x.legalText),dt&&dt.classList.toggle("active",L==="ru"),Rt&&Rt.classList.toggle("active",L==="en")};dt&&dt.addEventListener("click",()=>Y("ru")),Rt&&Rt.addEventListener("click",()=>Y("en"));const j=()=>{Q&&(Y($),Q.classList.remove("hidden"))};G&&G.addEventListener("click",j),et&&et.addEventListener("click",()=>{const L=document.getElementById("mobile-menu-drawer"),x=document.getElementById("mobile-menu-backdrop");L&&L.classList.add("hidden"),x&&x.classList.add("hidden"),j()}),st&&Q&&st.addEventListener("click",()=>Q.classList.add("hidden"));const rt=document.getElementById("btn-radio-eq-toggle"),tt=document.getElementById("radio-eq-popover"),ut=document.getElementById("radio-eq-val"),Et=document.querySelectorAll("#radio-eq-popover .popover-opt"),It=document.querySelectorAll("#m-eq-chips-group .m-genre-chip"),Lt=document.getElementById("btn-deck-a-fx-toggle"),Pt=document.getElementById("deck-a-fx-popover"),qt=document.getElementById("deck-a-fx-val"),I=document.querySelectorAll("#deck-a-fx-popover .popover-opt"),Qt=document.getElementById("btn-deck-b-fx-toggle"),St=document.getElementById("deck-b-fx-popover"),Ut=document.getElementById("deck-b-fx-val"),yt=document.querySelectorAll("#deck-b-fx-popover .popover-opt"),te=L=>{this.audioEngine.setEQPreset(L);const x={flat:"FLAT",bass:"BASS BOOST",club:"CLUB PUNCH",vocal:"VOCAL",electronic:"ELECTRONIC"};ut&&(ut.textContent=`EQ: ${x[L]||L.toUpperCase()}`),Et.forEach(v=>{v.classList.toggle("active",v.getAttribute("data-eq")===L)}),It.forEach(v=>{v.classList.toggle("active",v.getAttribute("data-eq")===L)})};rt&&tt&&(rt.addEventListener("click",L=>{L.stopPropagation();const x=tt.classList.contains("hidden");Pt&&Pt.classList.add("hidden"),St&&St.classList.add("hidden"),tt.classList.toggle("hidden",!x)}),Et.forEach(L=>{L.addEventListener("click",x=>{x.stopPropagation();const v=L.getAttribute("data-eq");te(v),tt.classList.add("hidden")})})),It.forEach(L=>{L.addEventListener("click",()=>{const x=L.getAttribute("data-eq");te(x)})}),Lt&&Pt&&(Lt.addEventListener("click",L=>{L.stopPropagation();const x=Pt.classList.contains("hidden");tt&&tt.classList.add("hidden"),St&&St.classList.add("hidden"),Pt.classList.toggle("hidden",!x)}),I.forEach(L=>{L.addEventListener("click",x=>{x.stopPropagation();const v=L.getAttribute("data-fx");this.audioEngine.setFXType("A",v),qt&&(qt.textContent=v.toUpperCase()),I.forEach(N=>N.classList.toggle("active",N===L)),Pt.classList.add("hidden")})})),Qt&&St&&(Qt.addEventListener("click",L=>{L.stopPropagation();const x=St.classList.contains("hidden");tt&&tt.classList.add("hidden"),Pt&&Pt.classList.add("hidden"),St.classList.toggle("hidden",!x)}),yt.forEach(L=>{L.addEventListener("click",x=>{x.stopPropagation();const v=L.getAttribute("data-fx");this.audioEngine.setFXType("B",v),Ut&&(Ut.textContent=v.toUpperCase()),yt.forEach(N=>N.classList.toggle("active",N===L)),St.classList.add("hidden")})})),document.addEventListener("click",L=>{tt&&!tt.contains(L.target)&&!(rt!=null&&rt.contains(L.target))&&tt.classList.add("hidden"),Pt&&!Pt.contains(L.target)&&!(Lt!=null&&Lt.contains(L.target))&&Pt.classList.add("hidden"),St&&!St.contains(L.target)&&!(Qt!=null&&Qt.contains(L.target))&&St.classList.add("hidden")})}updatePlayState(t){t?(this.waveIndicator&&this.waveIndicator.classList.add("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.add("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>')):(this.waveIndicator&&this.waveIndicator.classList.remove("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.remove("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>'))}updateVolumeIcons(t){t?(this.iconVol&&this.iconVol.classList.add("hidden"),this.iconMute&&this.iconMute.classList.remove("hidden")):(this.iconVol&&this.iconVol.classList.remove("hidden"),this.iconMute&&this.iconMute.classList.add("hidden"))}formatTime(t){if(isNaN(t)||t<0)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}async initGenreControls(){this.btnGenresToggle=document.getElementById("btn-genres-toggle"),this.btnCenterGenres=document.getElementById("m-btn-center-genres"),this.genreModal=document.getElementById("genre-modal"),this.btnGenresClose=document.getElementById("btn-genres-close"),this.headerGenreIcon=document.getElementById("header-genre-icon"),this.headerGenreLabel=document.getElementById("header-genre-label"),this.mHeaderGenreLabel=document.getElementById("m-header-genre-label"),this.genreModalGrid=document.getElementById("genre-modal-grid"),this.queueGenreFilter=document.getElementById("queue-genre-filter");const t=o=>{switch(o){case"all":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';case"techno":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';case"house":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';case"bass":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/></svg>';case"lofi":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';case"electro":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';default:return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'}},e=o=>o?o.replace(/^[\p{Emoji}\p{Extended_Pictographic}\uFE0F\s]+/u,"").trim():"ALL STYLES",n=()=>{this.genreModal&&this.genreModal.classList.remove("hidden")},s=()=>{this.genreModal&&this.genreModal.classList.add("hidden")};this.btnGenresToggle&&this.btnGenresToggle.addEventListener("click",n),this.btnCenterGenres&&this.btnCenterGenres.addEventListener("click",n),this.btnGenresClose&&this.btnGenresClose.addEventListener("click",s),this.genreModal&&this.genreModal.addEventListener("click",o=>{o.target===this.genreModal&&s()});const r=o=>{if(o){const a=t(o.id),c=e(o.name);this.headerGenreIcon&&(this.headerGenreIcon.innerHTML=a),this.headerGenreLabel&&(this.headerGenreLabel.textContent=c),this.mHeaderGenreLabel&&(this.mHeaderGenreLabel.innerHTML=`${a} <span>${c}</span>`)}};try{const{genres:o,activeGenre:a}=await this.audioEngine.fetchGenres();this.activeGenre=a||"all";const c=()=>{this.genreModalGrid&&o&&(this.genreModalGrid.innerHTML=o.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="genre-card-btn ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}">
                <div class="genre-card-header">
                  <span class="genre-card-icon">${u}</span>
                  <span class="genre-card-count">${l.count} tracks</span>
                </div>
                <div class="genre-card-name" style="color: ${l.color};">${d}</div>
              </button>
            `}).join(""),this.genreModalGrid.querySelectorAll(".genre-card-btn").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=o.find(p=>p.id===d);r(u),c(),s(),await this.audioEngine.setGenre(d)})})),this.queueGenreFilter&&o&&(this.queueGenreFilter.innerHTML=o.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="q-filter-pill ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}" style="--pill-color: ${l.color}">
                <span class="q-filter-inner">${u} <span>${d.split(" ")[0]||"ALL"}</span></span>
                <span class="pill-badge">${l.count}</span>
              </button>
            `}).join(""),this.queueGenreFilter.querySelectorAll(".q-filter-pill").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=o.find(p=>p.id===d);r(u),c(),await this.audioEngine.setGenre(d)})}));const h=document.getElementById("m-genre-chips");h&&o&&(h.innerHTML=o.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="m-genre-chip ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}">
                <span class="m-genre-chip-icon">${u}</span>
                <span class="m-genre-chip-name" style="color: ${l.color};">${d}</span>
              </button>
            `}).join(""),h.querySelectorAll(".m-genre-chip").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=o.find(p=>p.id===d);r(u),c(),await this.audioEngine.setGenre(d)})}))};c()}catch(o){console.warn("Error loading genres:",o)}}onTrackChanged(t,e,n){this.updateTrackInfo(t,this.audioEngine.nextTrack,e)}updateTrackInfo(t,e,n){if(!t)return;this.currentTrack=t,this.mobileMenu&&(this.mobileMenu.currentTrack=t);const s=this.audioEngine.activeDeck,r=document.getElementById("m-menu-track-title"),o=document.getElementById("m-menu-track-artist");if(r&&(r.textContent=t.title||"Unknown Track"),o){const a=t.genre?` • ${t.genre.name}`:"";o.textContent=(t.artist||"JMF Live Station")+a}if(this.radioTrackTitle&&(this.radioTrackTitle.textContent=t.title||"Unknown Track"),this.radioTrackArtist){const a=t.genre?` [${t.genre.name.split(" ")[0]}]`:"";this.radioTrackArtist.textContent=(t.artist||"JMF Radio 24/7")+a}s==="A"?(this.deckATitle&&(this.deckATitle.textContent=t.title||"Unknown Track"),this.deckAArtist&&(this.deckAArtist.textContent=t.artist||"JMF Radio"),this.deckAState&&(this.deckAState.textContent="ON AIR"),this.deckAPlay&&this.deckAPlay.classList.add("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(t.title+(t.id||"a")),e&&(this.deckBTitle&&(this.deckBTitle.textContent=e.title||"Upcoming Track"),this.deckBArtist&&(this.deckBArtist.textContent=e.artist||"Next on Deck"),this.deckBState&&(this.deckBState.textContent="CUE / NEXT"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(e.title+(e.id||"b")))):(this.deckBTitle&&(this.deckBTitle.textContent=t.title||"Unknown Track"),this.deckBArtist&&(this.deckBArtist.textContent=t.artist||"JMF Radio"),this.deckBState&&(this.deckBState.textContent="ON AIR"),this.deckBPlay&&this.deckBPlay.classList.add("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(t.title+(t.id||"b")),e&&(this.deckATitle&&(this.deckATitle.textContent=e.title||"Upcoming Track"),this.deckAArtist&&(this.deckAArtist.textContent=e.artist||"Next on Deck"),this.deckAState&&(this.deckAState.textContent="CUE / NEXT"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(e.title+(e.id||"a")))),n&&n.length>0&&this.queueList&&(this.queueList.innerHTML=n.map((a,c)=>`
        <div class="queue-item" data-id="${a.id}">
          <div class="queue-item-left">
            <div class="queue-item-title">${c+1}. ${a.title}</div>
            <div class="queue-item-artist">${a.artist}</div>
          </div>
          <div class="queue-item-right">
            ${a.genre?`<span class="q-genre-pill" style="color: ${a.genre.color}; border-color: ${a.genre.color}40;">${a.genre.name.split(" ")[0]}</span>`:""}
            <span class="q-bpm-pill">${a.bpm||128} BPM</span>
          </div>
        </div>
      `).join("")),this.transitionBanner&&this.transitionBanner.classList.add("hidden")}onTransition(t,e,n,s){this.transitionTimer&&clearTimeout(this.transitionTimer),t&&s?(this.transitionText&&(this.transitionText.textContent=`DJ MIXING: DECK ${e} ➔ DECK ${n} ("${s.title.substring(0,24)}...")`),this.transitionBanner&&this.transitionBanner.classList.remove("hidden"),n==="B"?(this.deckBState&&(this.deckBState.textContent="MIXING IN"),this.deckBPlay&&this.deckBPlay.classList.add("active-play")):n==="A"&&(this.deckAState&&(this.deckAState.textContent="MIXING IN"),this.deckAPlay&&this.deckAPlay.classList.add("active-play")),this.transitionTimer=setTimeout(()=>{this.transitionBanner&&this.transitionBanner.classList.add("hidden")},3500)):this.transitionBanner&&this.transitionBanner.classList.add("hidden")}updateProgress(t,e,n){const s=this.audioEngine.activeDeck,r=this.audioEngine.isPlaying,o=this.audioEngine.isCrossfading,a=Math.max(0,e-t),c=e>0?Math.min(1,t/e):0;if(this.radioTimeCur&&(this.radioTimeCur.textContent=this.formatTime(t)),this.radioTimeTotal&&(this.radioTimeTotal.textContent=this.formatTime(e)),this.radioWaveformCanvas&&this.waveform.drawWaveform(this.radioWaveformCanvas,this.waveform.waveformProfileA,c,"A",n),n&&r?(this.updateSegmentedLEDs(this.radioHpSegs,n.volume*.85),this.updateSegmentedLEDs(this.radioMasterVuLSegs,n.volume*1.1+n.bass*.3),this.updateSegmentedLEDs(this.radioMasterVuRSegs,n.volume*1.1+n.treble*.3)):(this.updateSegmentedLEDs(this.radioHpSegs,0),this.updateSegmentedLEDs(this.radioMasterVuLSegs,0),this.updateSegmentedLEDs(this.radioMasterVuRSegs,0)),s==="A")if(this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,c,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(t)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(a)}`),!o)this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,0,"B",null),this.deckBTimeCur&&(this.deckBTimeCur.textContent="0:00"),this.deckBTimeRem&&(this.deckBTimeRem.textContent="READY");else{const h=this.audioEngine.audioB,l=h.currentTime||0,d=h.duration||180,u=d>0?Math.min(1,l/d):0;this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,u,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(l)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(Math.max(0,d-l))}`)}else if(this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,c,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(t)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(a)}`),!o)this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,0,"A",null),this.deckATimeCur&&(this.deckATimeCur.textContent="0:00"),this.deckATimeRem&&(this.deckATimeRem.textContent="READY");else{const h=this.audioEngine.audioA,l=h.currentTime||0,d=h.duration||180,u=d>0?Math.min(1,l/d):0;this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,u,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(l)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(Math.max(0,d-l))}`)}if(n){const h=`${n.bpmA.toFixed(1)}`,l=`${n.bpmB.toFixed(1)}`;this.deckABpm&&(this.deckABpm.textContent=h),this.deckBBpm&&(this.deckBBpm.textContent=l),this.deckAJogBpm&&(this.deckAJogBpm.textContent=h),this.deckBJogBpm&&(this.deckBJogBpm.textContent=l)}if(this.jogWheel.updateJogAngles(n,r,this.audioEngine.deckStates),this.crossfaderCap&&n){const h=n.crossfadeProgress*100;this.crossfaderCap.style.left=`${h}%`}n&&r?(this.updateLEDs(this.vuMeterCh1Leds,n.deckALevel),this.updateLEDs(this.vuMeterCh2Leds,n.deckBLevel),this.updateLEDs(this.masterVuL,n.volume*1.3+n.bass*.3),this.updateLEDs(this.masterVuR,n.volume*1.3+n.treble*.3),this.horizVuBars.forEach(h=>{h.style.width=`${Math.min(100,n.volume*120)}%`})):(this.updateLEDs(this.vuMeterCh1Leds,0),this.updateLEDs(this.vuMeterCh2Leds,0),this.updateLEDs(this.masterVuL,0),this.updateLEDs(this.masterVuR,0),this.horizVuBars.forEach(h=>{h.style.width="10%"}))}updateLEDs(t,e){if(!t)return;const n=t.length;for(let s=0;s<n;s++){const r=(n-1-s)/n,o=e>=r;t[s].className="led "+(o?s<=1?"lit-red":s<=2?"lit-orange":s<=3?"lit-yellow":"lit-green":"")}}updateSegmentedLEDs(t,e){if(!t||t.length===0)return;const n=t.length;for(let s=0;s<n;s++){const r=s/n;e>=r?s>=n-3?t[s].className="r-seg lit-yellow":s>=n-7?t[s].className="r-seg lit-green":t[s].className="r-seg lit-cyan":t[s].className="r-seg"}}}function Ta(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container not found");return}const t=new em(i);let e=null;const n=new nm((r,o,a)=>{e&&e.onTrackChanged(r,o,a)},(r,o,a,c)=>{e&&e.onTransition(r,o,a,c)});e=new om(n,t);function s(){requestAnimationFrame(s);const r=n.update();t.setTrackInfo(n.currentTrack,n.nextTrack,n.elapsedTime,n.duration),(n.isPlaying||n.isCrossfading)&&e.updateProgress(n.elapsedTime,n.duration,r),t.update(r,n.isPlaying)}s()}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",Ta):Ta();
