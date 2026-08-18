(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="170",li={ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,_a=1,pc=2,Ao=1,Co=2,an=3,dn=0,Le=1,on=2,bn=0,hi=1,xs=2,va=3,xa=4,mc=5,Fn=100,gc=101,_c=102,vc=103,xc=104,Mc=200,yc=201,Ec=202,Sc=203,or=204,cr=205,Tc=206,bc=207,wc=208,Ac=209,Cc=210,Rc=211,Pc=212,Lc=213,Dc=214,lr=0,hr=1,dr=2,fi=3,ur=4,fr=5,pr=6,mr=7,Ro=0,Ic=1,Bc=2,wn=0,Uc=1,Nc=2,Fc=3,Po=4,kc=5,Oc=6,zc=7,Lo=300,pi=301,mi=302,gr=303,_r=304,Ts=306,Ni=1e3,On=1001,vr=1002,je=1003,Gc=1004,Vi=1005,ke=1006,Rs=1007,zn=1008,un=1009,Do=1010,Io=1011,Fi=1012,Yr=1013,Gn=1014,cn=1015,ki=1016,$r=1017,Jr=1018,gi=1020,Bo=35902,Uo=1021,No=1022,qe=1023,Fo=1024,ko=1025,di=1026,_i=1027,Oo=1028,Kr=1029,zo=1030,Zr=1031,Qr=1033,fs=33776,ps=33777,ms=33778,gs=33779,xr=35840,Mr=35841,yr=35842,Er=35843,Sr=36196,Tr=37492,br=37496,wr=37808,Ar=37809,Cr=37810,Rr=37811,Pr=37812,Lr=37813,Dr=37814,Ir=37815,Br=37816,Ur=37817,Nr=37818,Fr=37819,kr=37820,Or=37821,_s=36492,zr=36494,Gr=36495,Go=36283,Hr=36284,Vr=36285,Wr=36286,Hc=3200,Vc=3201,Ho=0,Wc=1,Sn="",Fe="srgb",Mi="srgb-linear",bs="linear",ne="srgb",qn=7680,Ma=519,Xc=512,qc=513,jc=514,Vo=515,Yc=516,$c=517,Jc=518,Kc=519,ya=35044,Ea="300 es",ln=2e3,Ms=2001;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const Bi=Math.PI/180,vi=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function ta(i,t){return(i%t+t)%t}function Zc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qc(i,t,e){return i!==t?(e-i)/(t-i):0}function Ui(i,t,e){return(1-e)*i+e*t}function tl(i,t,e,n){return Ui(i,t,1-Math.exp(-e*n))}function el(i,t=1){return t-Math.abs(ta(i,t*2)-t)}function nl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function il(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rl(i,t){return i+Math.random()*(t-i)}function al(i){return i*(.5-Math.random())}function ol(i){i!==void 0&&(Sa=i);let t=Sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cl(i){return i*Bi}function ll(i){return i*vi}function hl(i){return(i&i-1)===0&&i!==0}function dl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fl(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),l=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*l,c*d,c*u,o*h);break;case"YZY":i.set(c*u,o*l,c*d,o*h);break;case"ZXZ":i.set(c*d,c*u,o*l,o*h);break;case"XZX":i.set(o*l,c*g,c*p,o*h);break;case"YXY":i.set(c*p,o*l,c*g,o*h);break;case"ZYZ":i.set(c*g,c*p,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wo={DEG2RAD:Bi,RAD2DEG:vi,generateUUID:yi,clamp:xe,euclideanModulo:ta,mapLinear:Zc,inverseLerp:Qc,lerp:Ui,damp:tl,pingpong:el,smoothstep:nl,smootherstep:il,randInt:sl,randFloat:rl,randFloatSpread:al,seededRandom:ol,degToRad:cl,radToDeg:ll,isPowerOfTwo:hl,ceilPowerOfTwo:dl,floorPowerOfTwo:ul,setQuaternionFromProperEuler:fl,normalize:Te,denormalize:ai};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,c,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],T=s[1],b=s[4],M=s[7],D=s[2],w=s[5],A=s[8];return r[0]=a*_+o*T+c*D,r[3]=a*m+o*b+c*w,r[6]=a*f+o*M+c*A,r[1]=h*_+l*T+d*D,r[4]=h*m+l*b+d*w,r[7]=h*f+l*M+d*A,r[2]=u*_+p*T+g*D,r[5]=u*m+p*b+g*w,r[8]=u*f+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,u=o*c-l*r,p=h*r-a*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-l*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(l*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Ft;function Xo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pl(){const i=ys("canvas");return i.style.display="block",i}const Ta={};function Di(i){i in Ta||(Ta[i]=!0,console.warn(i))}function ml(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _l(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?bs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ba=[.64,.33,.3,.6,.15,.06],wa=[.2126,.7152,.0722],Aa=[.3127,.329],Ca=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Mi]:{primaries:ba,whitePoint:Aa,transfer:bs,toXYZ:Ca,fromXYZ:Ra,luminanceCoefficients:wa,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:ba,whitePoint:Aa,transfer:ne,toXYZ:Ca,fromXYZ:Ra,luminanceCoefficients:wa,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let jn;class vl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=ys("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xl=0;class qo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ls(s[a].image)):r.push(Ls(s[a]))}else r=Ls(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ml=0;class we extends Wn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=On,s=On,r=ke,a=zn,o=qe,c=un,h=we.DEFAULT_ANISOTROPY,l=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=yi(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Lo;we.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,M=(p+1)/2,D=(f+1)/2,w=(l+u)/4,A=(d+_)/4,R=(g+m)/4;return b>M&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):M>D?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=R/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=R/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-l)*(u-l));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(u-l)/T,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yl extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class El extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],d=n[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||h!==p||l!==g){let m=1-o;const f=c*u+h*p+l*g+d*_,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const D=Math.sqrt(b),w=Math.atan2(D,f*T);m=Math.sin(m*w)/D,o=Math.sin(o*w)/D}const M=o*T;if(c=c*m+u*M,h=h*m+p*M,l=l*m+g*M,d=d*m+_*M,m===1-o){const D=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=D,h*=D,l*=D,d*=D}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+l*d+c*p-h*u,t[e+1]=c*g+l*u+h*d-o*p,t[e+2]=h*g+l*p+o*u-c*d,t[e+3]=l*g-o*d-c*u-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d-u*p*g;break;case"YXZ":this._x=u*l*d+h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d+u*p*g;break;case"ZXY":this._x=u*l*d-h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d-u*p*g;break;case"ZYX":this._x=u*l*d-h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d+u*p*g;break;case"YZX":this._x=u*l*d+h*p*g,this._y=h*p*d+u*l*g,this._z=h*l*g-u*p*d,this._w=h*l*d-u*p*g;break;case"XZY":this._x=u*l*d-h*p*g,this._y=h*p*d-u*l*g,this._z=h*l*g+u*p*d,this._w=h*l*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(l-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-e)*l)/h,u=Math.sin(e*l)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=s+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new L,Pa=new Vn;class Oi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Xi.subVectors(this.max,Ai),Yn.subVectors(t.a,Ai),$n.subVectors(t.b,Ai),Jn.subVectors(t.c,Ai),mn.subVectors($n,Yn),gn.subVectors(Jn,$n),Rn.subVectors(Yn,Jn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Rn.y,Rn.x,0];return!Is(e,Yn,$n,Jn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,Yn,$n,Jn,Xi))?!1:(qi.crossVectors(mn,gn),e=[qi.x,qi.y,qi.z],Is(e,Yn,$n,Jn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new L,new L,new L,new L,new L,new L,new L,new L],He=new L,Wi=new Oi,Yn=new L,$n=new L,Jn=new L,mn=new L,gn=new L,Rn=new L,Ai=new L,Xi=new L,qi=new L,Pn=new L;function Is(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pn.fromArray(i,r);const o=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),c=t.dot(Pn),h=e.dot(Pn),l=n.dot(Pn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Sl=new Oi,Ci=new L,Bs=new L;class ws{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(Bs)),this.expandByPoint(Ci.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new L,Us=new L,ji=new L,_n=new L,Ns=new L,Yi=new L,Fs=new L;class ea{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Us.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Us);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ji),o=_n.dot(this.direction),c=-_n.dot(ji),h=_n.lengthSq(),l=Math.abs(1-a*a);let d,u,p,g;if(l>0)if(d=a*c-o,u=a*o-c,g=r*l,d>=0)if(u>=-g)if(u<=g){const _=1/l;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Us).addScaledVector(ji,u),p}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){Ns.subVectors(e,t),Yi.subVectors(n,t),Fs.crossVectors(Ns,Yi);let a=this.direction.dot(Fs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(_n,Yi));if(c<0)return null;const h=o*this.direction.dot(Ns.cross(_n));if(h<0||c+h>a)return null;const l=-o*_n.dot(Fs);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,c,h,l,d,u,p,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,d,u,p,g,_,m)}set(t,e,n,s,r,a,o,c,h,l,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*l,p=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=p+g*h,e[5]=u-_*h,e[9]=-o*c,e[2]=_-u*h,e[6]=g+p*h,e[10]=a*c}else if(t.order==="YXZ"){const u=c*l,p=c*d,g=h*l,_=h*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*l,p=c*d,g=h*l,_=h*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*l,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*l,p=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=g*h-p,e[8]=u*h+_,e[1]=c*d,e[5]=_*h+u,e[9]=p*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+_,e[5]=a*l,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*l,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tl,t,bl)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),vn.crossVectors(n,Ie),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),vn.crossVectors(n,Ie)),vn.normalize(),$i.crossVectors(Ie,vn),s[0]=vn.x,s[4]=$i.x,s[8]=Ie.x,s[1]=vn.y,s[5]=$i.y,s[9]=Ie.y,s[2]=vn.z,s[6]=$i.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],b=n[7],M=n[11],D=n[15],w=s[0],A=s[4],R=s[8],E=s[12],y=s[1],C=s[5],G=s[9],k=s[13],W=s[2],Y=s[6],X=s[10],Z=s[14],z=s[3],tt=s[7],it=s[11],gt=s[15];return r[0]=a*w+o*y+c*W+h*z,r[4]=a*A+o*C+c*Y+h*tt,r[8]=a*R+o*G+c*X+h*it,r[12]=a*E+o*k+c*Z+h*gt,r[1]=l*w+d*y+u*W+p*z,r[5]=l*A+d*C+u*Y+p*tt,r[9]=l*R+d*G+u*X+p*it,r[13]=l*E+d*k+u*Z+p*gt,r[2]=g*w+_*y+m*W+f*z,r[6]=g*A+_*C+m*Y+f*tt,r[10]=g*R+_*G+m*X+f*it,r[14]=g*E+_*k+m*Z+f*gt,r[3]=T*w+b*y+M*W+D*z,r[7]=T*A+b*C+M*Y+D*tt,r[11]=T*R+b*G+M*X+D*it,r[15]=T*E+b*k+M*Z+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-s*h*d-r*o*u+n*h*u+s*o*p-n*c*p)+_*(+e*c*p-e*h*u+r*a*u-s*a*p+s*h*l-r*c*l)+m*(+e*h*d-e*o*p-r*a*d+n*a*p+r*o*l-n*h*l)+f*(-s*o*l-e*c*d+e*o*u+s*a*d-n*a*u+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],T=d*m*h-_*u*h+_*c*p-o*m*p-d*c*f+o*u*f,b=g*u*h-l*m*h-g*c*p+a*m*p+l*c*f-a*u*f,M=l*_*h-g*d*h+g*o*p-a*_*p-l*o*f+a*d*f,D=g*d*c-l*_*c-g*o*u+a*_*u+l*o*m-a*d*m,w=e*T+n*b+s*M+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=T*A,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*A,t[2]=(o*m*r-_*c*r+_*s*h-n*m*h-o*s*f+n*c*f)*A,t[3]=(d*c*r-o*u*r-d*s*h+n*u*h+o*s*p-n*c*p)*A,t[4]=b*A,t[5]=(l*m*r-g*u*r+g*s*p-e*m*p-l*s*f+e*u*f)*A,t[6]=(g*c*r-a*m*r-g*s*h+e*m*h+a*s*f-e*c*f)*A,t[7]=(a*u*r-l*c*r+l*s*h-e*u*h-a*s*p+e*c*p)*A,t[8]=M*A,t[9]=(g*d*r-l*_*r-g*n*p+e*_*p+l*n*f-e*d*f)*A,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*f+e*o*f)*A,t[11]=(l*o*r-a*d*r-l*n*h+e*d*h+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(l*_*s-g*d*s+g*n*u-e*_*u-l*n*m+e*d*m)*A,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*d*s-l*o*s+l*n*c-e*d*c-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,u=r*h,p=r*l,g=r*d,_=a*l,m=a*d,f=o*d,T=c*h,b=c*l,M=c*d,D=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+M)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(u+f))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-T)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const h=1/r,l=1/a,d=1/o;return Ve.elements[0]*=h,Ve.elements[1]*=h,Ve.elements[2]*=h,Ve.elements[4]*=l,Ve.elements[5]*=l,Ve.elements[6]*=l,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===ln)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln){const c=this.elements,h=1/(e-t),l=1/(n-s),d=1/(a-r),u=(e+t)*h,p=(n+s)*l;let g,_;if(o===ln)g=(a+r)*d,_=-2*d;else if(o===Ms)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new L,Ve=new Jt,Tl=new L(0,0,0),bl=new L(1,1,1),vn=new L,$i=new L,Ie=new L,La=new Jt,Da=new Vn;class Ke{constructor(t=0,e=0,n=0,s=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return La.makeRotationFromQuaternion(t),this.setFromRotationMatrix(La,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Da.setFromEuler(this),this.setFromQuaternion(Da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wl=0;const Ia=new L,Zn=new Vn,nn=new Jt,Ji=new L,Ri=new L,Al=new L,Cl=new Vn,Ba=new L(1,0,0),Ua=new L(0,1,0),Na=new L(0,0,1),Fa={type:"added"},Rl={type:"removed"},Qn={type:"childadded",child:null},ks={type:"childremoved",child:null};class Me extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new L,e=new Ke,n=new Vn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(Ba,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Na,t)}translateOnAxis(t,e){return Ia.copy(t).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ba,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Na,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ri,Ji,this.up):nn.lookAt(Ji,Ri,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(nn),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fa),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rl),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fa),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,Al),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Cl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new L(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new L,sn=new L,Os=new L,rn=new L,ti=new L,ei=new L,ka=new L,zs=new L,Gs=new L,Hs=new L,Vs=new se,Ws=new se,Xs=new se;class Xe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),sn.subVectors(n,e),Os.subVectors(t,e);const a=We.dot(We),o=We.dot(sn),c=We.dot(Os),h=sn.dot(sn),l=sn.dot(Os),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(h*c-o*l)*u,g=(a*l-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Vs.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,n),Xs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vs,r.x),a.addScaledVector(Ws,r.y),a.addScaledVector(Xs,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),sn.subVectors(t,e),We.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),We.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ei.subVectors(r,n),zs.subVectors(t,n);const c=ti.dot(zs),h=ei.dot(zs);if(c<=0&&h<=0)return e.copy(n);Gs.subVectors(t,s);const l=ti.dot(Gs),d=ei.dot(Gs);if(l>=0&&d<=l)return e.copy(s);const u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(ti,a);Hs.subVectors(t,r);const p=ti.dot(Hs),g=ei.dot(Hs);if(g>=0&&p<=g)return e.copy(r);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(ei,o);const m=l*g-p*d;if(m<=0&&d-l>=0&&p-g>=0)return ka.subVectors(r,s),o=(d-l)/(d-l+(p-g)),e.copy(s).addScaledVector(ka,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ta(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qs(a,r,t+1/3),this.g=qs(a,r,t),this.b=qs(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=$o[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return qt.fromWorkingColorSpace(Se.copy(this),t),Math.round(xe(Se.r*255,0,255))*65536+Math.round(xe(Se.g*255,0,255))*256+Math.round(xe(Se.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Fe){qt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Ki);const n=Ui(xn.h,Ki.h,e),s=Ui(xn.s,Ki.s,e),r=Ui(xn.l,Ki.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Vt;Vt.NAMES=$o;let Pl=0;class Ei extends Wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=yi(),this.name="",this.blending=hi,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=cr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==or&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new L,Zi=new Ct;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ya&&(t.usage=this.usage),t}}class Jo extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ko extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ll=0;const Ne=new Jt,js=new Me,ni=new L,Be=new Oi,Pi=new Oi,ve=new L;class Ae extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xo(t)?Ko:Jo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Be.min,Pi.min),Be.expandByPoint(ve),ve.addVectors(Be.max,Pi.max),Be.expandByPoint(ve)):(Be.expandByPoint(Pi.min),Be.expandByPoint(Pi.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ve.fromBufferAttribute(o,h),c&&(ni.fromBufferAttribute(t,h),ve.add(ni)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;const h=new L,l=new L,d=new L,u=new Ct,p=new Ct,g=new Ct,_=new L,m=new L;function f(R,E,y){h.fromBufferAttribute(n,R),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),l.sub(h),d.sub(h),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(C),o[R].add(_),o[E].add(_),o[y].add(_),c[R].add(m),c[E].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,E=T.length;R<E;++R){const y=T[R],C=y.start,G=y.count;for(let k=C,W=C+G;k<W;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new L,M=new L,D=new L,w=new L;function A(R){D.fromBufferAttribute(s,R),w.copy(D);const E=o[R];b.copy(E),b.sub(D.multiplyScalar(D.dot(E))).normalize(),M.crossVectors(w,E);const C=M.dot(c[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,E=T.length;R<E;++R){const y=T[R],C=y.start,G=y.count;for(let k=C,W=C+G;k<W;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,h=new L,l=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*l;for(let f=0;f<l;f++)u[g++]=h[p++]}return new Oe(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){const u=h[l],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){const p=h[d];l.push(p.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],d=r[h];for(let u=0,p=d.length;u<p;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,l=a.length;h<l;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new Jt,Ln=new ea,Qi=new ws,za=new L,ts=new L,es=new L,ns=new L,Ys=new L,is=new L,Ga=new L,ss=new L;class O extends Me{constructor(t=new Ae,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){is.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],d=r[c];l!==0&&(Ys.fromBufferAttribute(d,t),a?is.addScaledVector(Ys,l):is.addScaledVector(Ys.sub(e),l))}e.add(is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(Qi.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Qi,za)===null||Ln.origin.distanceToSquared(za)>(t.far-t.near)**2))&&(Oa.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,D=b;M<D;M+=3){const w=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);s=rs(this,f,t,n,h,l,d,w,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=rs(this,a,t,n,h,l,d,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,D=b;M<D;M+=3){const w=M,A=M+1,R=M+2;s=rs(this,f,t,n,h,l,d,w,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,b=m+1,M=m+2;s=rs(this,a,t,n,h,l,d,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Dl(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===dn,o),c===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ss);return h<e.near||h>e.far?null:{distance:h,point:ss.clone(),object:i}}function rs(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,ts),i.getVertexPosition(c,es),i.getVertexPosition(h,ns);const l=Dl(i,t,e,n,ts,es,ns,Ga);if(l){const d=new L;Xe.getBarycoord(Ga,ts,es,ns,d),s&&(l.uv=Xe.getInterpolatedAttribute(s,o,c,h,d,new Ct)),r&&(l.uv1=Xe.getInterpolatedAttribute(r,o,c,h,d,new Ct)),a&&(l.normal=Xe.getInterpolatedAttribute(a,o,c,h,d,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:c,c:h,normal:new L,materialIndex:0};Xe.getNormal(ts,es,ns,u.normal),l.face=u,l.barycoord=d}return l}class at extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(d,2));function g(_,m,f,T,b,M,D,w,A,R,E){const y=M/A,C=D/R,G=M/2,k=D/2,W=w/2,Y=A+1,X=R+1;let Z=0,z=0;const tt=new L;for(let it=0;it<X;it++){const gt=it*C-k;for(let It=0;It<Y;It++){const jt=It*y-G;tt[_]=jt*T,tt[m]=gt*b,tt[f]=W,h.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[f]=w>0?1:-1,l.push(tt.x,tt.y,tt.z),d.push(It/A),d.push(1-it/R),Z+=1}}for(let it=0;it<R;it++)for(let gt=0;gt<A;gt++){const It=u+gt+Y*it,jt=u+gt+Y*(it+1),$=u+(gt+1)+Y*(it+1),et=u+(gt+1)+Y*it;c.push(It,jt,et),c.push(jt,$,et),z+=6}o.addGroup(p,z,E),p+=z,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const s in n)t[s]=n[s]}return t}function Il(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Bl={clone:xi,merge:be};var Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Il(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qo extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new L,Ha=new Ct,Va=new Ct;class Pe extends Qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Ha,Va),e.subVectors(Va,Ha)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class Fl extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pe(ii,si,t,e);s.layers=this.layers,this.add(s);const r=new Pe(ii,si,t,e);r.layers=this.layers,this.add(r);const a=new Pe(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Pe(ii,si,t,e);o.layers=this.layers,this.add(o);const c=new Pe(ii,si,t,e);c.layers=this.layers,this.add(c);const h=new Pe(ii,si,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tc extends we{constructor(t,e,n,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:bn});r.uniforms.tEquirect.value=e;const a=new O(s,r),o=e.minFilter;return e.minFilter===zn&&(e.minFilter=ke),new Fl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const $s=new L,Ol=new L,zl=new Ft;class En{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$s.subVectors(n,e).cross(Ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zl.getNormalMatrix(t),s=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new ws,as=new L;class na{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],T=s[13],b=s[14],M=s[15];if(n[0].setComponents(c-r,u-h,m-p,M-f).normalize(),n[1].setComponents(c+r,u+h,m+p,M+f).normalize(),n[2].setComponents(c+a,u+l,m+g,M+T).normalize(),n[3].setComponents(c-a,u-l,m-g,M-T).normalize(),n[4].setComponents(c-o,u-d,m-_,M-b).normalize(),e===ln)n[5].setComponents(c+o,u+d,m+_,M+b).normalize();else if(e===Ms)n[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(as.x=s.normal.x>0?t.max.x:t.min.x,as.y=s.normal.y>0?t.max.y:t.min.y,as.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gl(i){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,h,l),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const l=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,l);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class pe extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<l;f++){const T=f*u-a;for(let b=0;b<h;b++){const M=b*d-r;g.push(M,-T,0),_.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const b=T+h*f,M=T+h*(f+1),D=T+1+h*(f+1),w=T+1+h*f;p.push(b,M,w),p.push(M,D,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hl=`#ifdef USE_ALPHAHASH
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_FOG
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
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,od=`#ifndef FLAT_SHADED
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`float getShadowMask() {
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
}`,au=`#define MATCAP
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
}`,ou=`#define NORMAL
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
}`,zt={alphahash_fragment:Hl,alphahash_pars_fragment:Vl,alphamap_fragment:Wl,alphamap_pars_fragment:Xl,alphatest_fragment:ql,alphatest_pars_fragment:jl,aomap_fragment:Yl,aomap_pars_fragment:$l,batching_pars_vertex:Jl,batching_vertex:Kl,begin_vertex:Zl,beginnormal_vertex:Ql,bsdfs:th,iridescence_fragment:eh,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:ah,color_fragment:oh,color_pars_fragment:ch,color_pars_vertex:lh,color_vertex:hh,common:dh,cube_uv_reflection_fragment:uh,defaultnormal_vertex:fh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:vh,colorspace_pars_fragment:xh,envmap_fragment:Mh,envmap_common_pars_fragment:yh,envmap_pars_fragment:Eh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Bh,envmap_vertex:Th,fog_vertex:bh,fog_pars_vertex:wh,fog_fragment:Ah,fog_pars_fragment:Ch,gradientmap_pars_fragment:Rh,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Ih,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:kh,lights_physical_fragment:Oh,lights_physical_pars_fragment:zh,lights_fragment_begin:Gh,lights_fragment_maps:Hh,lights_fragment_end:Vh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:jh,map_fragment:Yh,map_pars_fragment:$h,map_particle_fragment:Jh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Qh,morphinstance_vertex:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:cd,normal_vertex:ld,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:xd,dithering_pars_fragment:Md,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:Td,shadowmap_vertex:bd,shadowmask_pars_fragment:wd,skinbase_vertex:Ad,skinning_pars_vertex:Cd,skinning_vertex:Rd,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Id,tonemapping_pars_fragment:Bd,transmission_fragment:Ud,transmission_pars_fragment:Nd,uv_pars_fragment:Fd,uv_pars_vertex:kd,uv_vertex:Od,worldpos_vertex:zd,background_vert:Gd,background_frag:Hd,backgroundCube_vert:Vd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:jd,depth_frag:Yd,distanceRGBA_vert:$d,distanceRGBA_frag:Jd,equirect_vert:Kd,equirect_frag:Zd,linedashed_vert:Qd,linedashed_frag:tu,meshbasic_vert:eu,meshbasic_frag:nu,meshlambert_vert:iu,meshlambert_frag:su,meshmatcap_vert:ru,meshmatcap_frag:au,meshnormal_vert:ou,meshnormal_frag:cu,meshphong_vert:lu,meshphong_frag:hu,meshphysical_vert:du,meshphysical_frag:uu,meshtoon_vert:fu,meshtoon_frag:pu,points_vert:mu,points_frag:gu,shadow_vert:_u,shadow_frag:vu,sprite_vert:xu,sprite_frag:Mu},ot={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Je={basic:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:be([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:be([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:be([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:be([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:be([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:be([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:be([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:be([ot.lights,ot.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Je.physical={uniforms:be([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const os={r:0,b:0,g:0},In=new Ke,yu=new Jt;function Eu(i,t,e,n,s,r,a){const o=new Vt(0);let c=r===!0?0:1,h,l,d=null,u=0,p=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function _(T){let b=!1;const M=g(T);M===null?f(o,c):M&&M.isColor&&(f(M,1),b=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===Ts)?(l===void 0&&(l=new O(new at(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:xi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),In.copy(b.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yu.makeRotationFromEuler(In)),l.material.toneMapped=qt.getTransfer(M.colorSpace)!==ne,(d!==M||u!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new O(new pe(2,2),new An({name:"BackgroundMaterial",uniforms:xi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=qt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function f(T,b){T.getRGB(os,Zo(i)),n.buffers.color.setClear(os.r,os.g,os.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(o,c)},render:_,addToRenderList:m}}function Su(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,C,G,k,W){let Y=!1;const X=d(k,G,C);r!==X&&(r=X,h(r.object)),Y=p(y,k,G,W),Y&&g(y,k,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(y,C,G,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function d(y,C,G){const k=G.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[C.id];Y===void 0&&(Y={},W[C.id]=Y);let X=Y[k];return X===void 0&&(X=u(c()),Y[k]=X),X}function u(y){const C=[],G=[],k=[];for(let W=0;W<e;W++)C[W]=0,G[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,C,G,k){const W=r.attributes,Y=C.attributes;let X=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){const it=W[z];let gt=Y[z];if(gt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),it===void 0||it.attribute!==gt||gt&&it.data!==gt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(y,C,G,k){const W={},Y=C.attributes;let X=0;const Z=G.getAttributes();for(const z in Z)if(Z[z].location>=0){let it=Y[z];it===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const gt={};gt.attribute=it,it&&it.data&&(gt.data=it.data),W[z]=gt,X++}r.attributes=W,r.attributesNum=X,r.index=k}function _(){const y=r.newAttributes;for(let C=0,G=y.length;C<G;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const G=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;G[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),W[y]!==C&&(i.vertexAttribDivisor(y,C),W[y]=C)}function T(){const y=r.newAttributes,C=r.enabledAttributes;for(let G=0,k=C.length;G<k;G++)C[G]!==y[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function b(y,C,G,k,W,Y,X){X===!0?i.vertexAttribIPointer(y,C,G,W,Y):i.vertexAttribPointer(y,C,G,k,W,Y)}function M(y,C,G,k){_();const W=k.attributes,Y=G.getAttributes(),X=C.defaultAttributeValues;for(const Z in Y){const z=Y[Z];if(z.location>=0){let tt=W[Z];if(tt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const it=tt.normalized,gt=tt.itemSize,It=t.get(tt);if(It===void 0)continue;const jt=It.buffer,$=It.type,et=It.bytesPerElement,_t=$===i.INT||$===i.UNSIGNED_INT||tt.gpuType===Yr;if(tt.isInterleavedBufferAttribute){const rt=tt.data,wt=rt.stride,Rt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)f(z.location+kt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<z.locationSize;kt++)m(z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let kt=0;kt<z.locationSize;kt++)b(z.location+kt,gt/z.locationSize,$,it,wt*et,(Rt+gt/z.locationSize*kt)*et,_t)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)f(z.location+rt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<z.locationSize;rt++)m(z.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<z.locationSize;rt++)b(z.location+rt,gt/z.locationSize,$,it,gt*et,gt/z.locationSize*rt*et,_t)}}else if(X!==void 0){const it=X[Z];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(z.location,it);break;case 3:i.vertexAttrib3fv(z.location,it);break;case 4:i.vertexAttrib4fv(z.location,it);break;default:i.vertexAttrib1fv(z.location,it)}}}}T()}function D(){R();for(const y in n){const C=n[y];for(const G in C){const k=C[G];for(const W in k)l(k[W].object),delete k[W];delete C[G]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const G in C){const k=C[G];for(const W in k)l(k[W].object),delete k[W];delete C[G]}delete n[y.id]}function A(y){for(const C in n){const G=n[C];if(G[y.id]===void 0)continue;const k=G[y.id];for(const W in k)l(k[W].object),delete k[W];delete G[y.id]}}function R(){E(),a=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Tu(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,d){d!==0&&(i.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function o(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let p=0;for(let g=0;g<d;g++)p+=l[g];e.update(p,n,1)}function c(h,l,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)a(h[g],l[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,l,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=l[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==cn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:D,maxSamples:w}}function wu(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new En,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{const T=r?0:n,b=T*4;let M=f.clippingState||null;c.value=M,M=l(g,u,b,p);for(let D=0;D!==b;++D)M[D]=e[D];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==_;++b,M+=4)a.copy(d[b]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Au(i){let t=new WeakMap;function e(a,o){return o===gr?a.mapping=pi:o===_r&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gr||o===_r)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new kl(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cu extends Qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,Wa=[.125,.215,.35,.446,.526,.582],kn=20,Js=new Cu,Xa=new Vt;let Ks=null,Zs=0,Qs=0,tr=!1;const Nn=(1+Math.sqrt(5))/2,ri=1/Nn,qa=[new L(-Nn,ri,0),new L(Nn,ri,0),new L(-ri,0,Nn),new L(ri,0,Nn),new L(0,Nn,-ri),new L(0,Nn,ri),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Zs,Qs),this._renderer.xr.enabled=tr,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ki,format:qe,colorSpace:Mi,depthBuffer:!1},s=Ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ru(r)),this._blurMaterial=Pu(r,t,e)}return s}_compileMaterial(t){const e=new O(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,s){const o=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(Xa),l.toneMapping=wn,l.autoClear=!1;const p=new $t({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new O(new at,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Xa),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):T===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));const b=this._cubeSize;cs(s,T*b,f>2?b:0,b,b),l.setRenderTarget(s),_&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new O(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qa[(s-r-1)%qa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new O(this._lodPlanes[s],h),u=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let T=0;for(let A=0;A<kn;++A){const R=A/_,E=Math.exp(-R*R/2);f.push(E),A===0?T+=E:A<m&&(T+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[s],D=3*M*(s>b-ci?s-b+ci:0),w=4*(this._cubeSize-M);cs(e,D,w,3*M,2*M),c.setRenderTarget(e),c.render(d,Js)}}function Ru(i){const t=[],e=[],n=[];let s=i;const r=i-ci+1+Wa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ci?c=Wa[a-i+ci-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,R=w>2?0:-1,E=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];T.set(E,_*g*w),b.set(u,m*g*w);const y=[w,w,w,w,w,w];M.set(y,f*g*w)}const D=new Ae;D.setAttribute("position",new Oe(T,_)),D.setAttribute("uv",new Oe(b,m)),D.setAttribute("faceIndex",new Oe(M,f)),t.push(D),s>ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ya(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pu(i,t,e){const n=new Float32Array(kn),s=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ia(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $a(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ja(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}function Lu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===gr||c===_r,l=c===pi||c===mi;if(h||l){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ja(i)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return h&&p&&p.height>0||l&&p&&s(p)?(e===null&&(e=new ja(i)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Du(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Di("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Iu(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let b=0,M=T.length;b<M;b+=3){const D=T[b+0],w=T[b+1],A=T[b+2];u.push(D,w,w,A,A,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){const D=b+0,w=b+1,A=b+2;u.push(D,w,w,A,A,D)}}else return;const m=new(Xo(u)?Ko:Jo)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function l(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Bu(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function h(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function l(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)h(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function Uu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nu(i,t,e){const n=new WeakMap,s=new se;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=o.attributes.position.count*M,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*w*4*d),R=new jo(A,D,w,d);R.type=cn,R.needsUpdate=!0;const E=M*4;for(let C=0;C<d;C++){const G=f[C],k=T[C],W=b[C],Y=D*w*4*C;for(let X=0;X<G.count;X++){const Z=X*E;g===!0&&(s.fromBufferAttribute(G,X),A[Y+Z+0]=s.x,A[Y+Z+1]=s.y,A[Y+Z+2]=s.z,A[Y+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,X),A[Y+Z+4]=s.x,A[Y+Z+5]=s.y,A[Y+Z+6]=s.z,A[Y+Z+7]=0),m===!0&&(s.fromBufferAttribute(W,X),A[Y+Z+8]=s.x,A[Y+Z+9]=s.y,A[Y+Z+10]=s.z,A[Y+Z+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Ct(D,w)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fu(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,d=t.get(c,l);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class nc extends we{constructor(t,e,n,s,r,a,o,c,h,l=di){if(l!==di&&l!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===di&&(n=Gn),n===void 0&&l===_i&&(n=gi),super(null,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ic=new we,Ka=new nc(1,1),sc=new jo,rc=new El,ac=new tc,Za=[],Qa=[],to=new Float32Array(16),eo=new Float32Array(9),no=new Float32Array(4);function Si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Za[s];if(r===void 0&&(r=new Float32Array(s),Za[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ku(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Hu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;no.set(n),i.uniformMatrix2fv(this.addr,!1,no),ge(e,n)}}function Vu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;eo.set(n),i.uniformMatrix3fv(this.addr,!1,eo),ge(e,n)}}function Wu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;to.set(n),i.uniformMatrix4fv(this.addr,!1,to),ge(e,n)}}function Xu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function $u(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ka.compareFunction=Vo,r=Ka):r=ic,e.setTexture2D(t||r,s)}function tf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rc,s)}function ef(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ac,s)}function nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sc,s)}function sf(i){switch(i){case 5126:return ku;case 35664:return Ou;case 35665:return zu;case 35666:return Gu;case 35674:return Hu;case 35675:return Vu;case 35676:return Wu;case 5124:case 35670:return Xu;case 35667:case 35671:return qu;case 35668:case 35672:return ju;case 35669:case 35673:return Yu;case 5125:return $u;case 36294:return Ju;case 36295:return Ku;case 36296:return Zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(i,t){i.uniform1fv(this.addr,t)}function af(i,t){const e=Si(t,this.size,2);i.uniform2fv(this.addr,e)}function of(i,t){const e=Si(t,this.size,3);i.uniform3fv(this.addr,e)}function cf(i,t){const e=Si(t,this.size,4);i.uniform4fv(this.addr,e)}function lf(i,t){const e=Si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hf(i,t){const e=Si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function df(i,t){const e=Si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uf(i,t){i.uniform1iv(this.addr,t)}function ff(i,t){i.uniform2iv(this.addr,t)}function pf(i,t){i.uniform3iv(this.addr,t)}function mf(i,t){i.uniform4iv(this.addr,t)}function gf(i,t){i.uniform1uiv(this.addr,t)}function _f(i,t){i.uniform2uiv(this.addr,t)}function vf(i,t){i.uniform3uiv(this.addr,t)}function xf(i,t){i.uniform4uiv(this.addr,t)}function Mf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ic,r[a])}function yf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rc,r[a])}function Ef(i,t,e){const n=this.cache,s=t.length,r=As(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ac,r[a])}function Sf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sc,r[a])}function Tf(i){switch(i){case 5126:return rf;case 35664:return af;case 35665:return of;case 35666:return cf;case 35674:return lf;case 35675:return hf;case 35676:return df;case 5124:case 35670:return uf;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Sf}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sf(e.type)}}class wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tf(e.type)}}class Af{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const er=/(\w+)(\])?(\[|\.)?/g;function io(i,t){i.seq.push(t),i.map[t.id]=t}function Cf(i,t,e){const n=i.name,s=n.length;for(er.lastIndex=0;;){const r=er.exec(n),a=er.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){io(e,h===void 0?new bf(o,i,t):new wf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Af(o),io(e,d)),e=d}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Cf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function so(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rf=37297;let Pf=0;function Lf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ro=new Ft;function Df(i){qt._getMatrix(ro,qt.workingColorSpace,i);const t=`mat3( ${ro.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ao(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lf(i.getShaderSource(t),a)}else return s}function If(i,t){const e=Df(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bf(i,t){let e;switch(t){case Uc:e="Linear";break;case Nc:e="Reinhard";break;case Fc:e="Cineon";break;case Po:e="ACESFilmic";break;case Oc:e="AgX";break;case zc:e="Neutral";break;case kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ls=new L;function Uf(){qt.getLuminanceCoefficients(ls);const i=ls.x.toFixed(4),t=ls.y.toFixed(4),e=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Ff(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ii(i){return i!==""}function oo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function co(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(i){return i.replace(Of,Gf)}const zf=new Map;function Gf(i,t){let e=zt[t];if(e===void 0){const n=zf.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xr(e)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(Hf,Vf)}function Vf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ho(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Co?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function Xf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function jf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ro:t="ENVMAP_BLENDING_MULTIPLY";break;case Ic:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $f(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Wf(e),h=Xf(e),l=qf(e),d=jf(e),u=Yf(e),p=Nf(e),g=Ff(r),_=s.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(m=[ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,If("linearToOutputTexel",e.outputColorSpace),Uf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=Xr(a),a=oo(a,e),a=co(a,e),o=Xr(o),o=oo(o,e),o=co(o,e),a=lo(a),o=lo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+a,M=T+f+o,D=so(s,s.VERTEX_SHADER,b),w=so(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(w).trim();let Y=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,w);else{const Z=ao(s,D,"vertex"),z=ao(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Z+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||W==="")&&(X=!1);X&&(C.diagnostics={runnable:Y,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(D),s.deleteShader(w),R=new vs(s,_),E=kf(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Rf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let Jf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zf(t),e.set(t,n)),n}}class Zf{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function Qf(i,t,e,n,s,r,a){const o=new Yo,c=new Kf,h=new Set,l=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,y,C,G,k){const W=G.fog,Y=k.geometry,X=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),z=Z&&Z.mapping===Ts?Z.image.height:null,tt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const it=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=it!==void 0?it.length:0;let It=0;Y.morphAttributes.position!==void 0&&(It=1),Y.morphAttributes.normal!==void 0&&(It=2),Y.morphAttributes.color!==void 0&&(It=3);let jt,$,et,_t;if(tt){const te=Je[tt];jt=te.vertexShader,$=te.fragmentShader}else jt=E.vertexShader,$=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Rt=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,Qt=!!E.map,Pt=!!E.matcap,le=!!Z,N=!!E.aoMap,_e=!!E.lightMap,At=!!E.bumpMap,Ht=!!E.normalMap,Tt=!!E.displacementMap,ee=!!E.emissiveMap,P=!!E.metalnessMap,x=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,J=E.dispersion>0,K=E.iridescence>0,j=E.sheen>0,xt=E.transmission>0,ct=v&&!!E.anisotropyMap,ft=B&&!!E.clearcoatMap,Wt=B&&!!E.clearcoatNormalMap,nt=B&&!!E.clearcoatRoughnessMap,pt=K&&!!E.iridescenceMap,bt=K&&!!E.iridescenceThicknessMap,Lt=j&&!!E.sheenColorMap,vt=j&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Ot=!!E.specularColorMap,re=!!E.specularIntensityMap,I=xt&&!!E.transmissionMap,lt=xt&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,ut=E.alphaTest>0,ht=!!E.alphaHash,Ut=!!E.extensions;let he=wn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=i.toneMapping);const ye={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:$,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&k.instanceColor!==null,instancingMorph:Rt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Mi,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Pt,envMap:le,envMapMode:le&&Z.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:_e,bumpMap:At,normalMap:Ht,displacementMap:u&&Tt,emissiveMap:ee,normalMapObjectSpace:Ht&&E.normalMapType===Wc,normalMapTangentSpace:Ht&&E.normalMapType===Ho,metalnessMap:P,roughnessMap:x,anisotropy:v,anisotropyMap:ct,clearcoat:B,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:j,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:re,transmission:xt,transmissionMap:I,thicknessMap:lt,gradientMap:q,opaque:E.transparent===!1&&E.blending===hi&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:ut,alphaHash:ht,combine:E.combine,mapUv:Qt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:_e&&_(E.lightMap.channel),bumpMapUv:At&&_(E.bumpMap.channel),normalMapUv:Ht&&_(E.normalMap.channel),displacementMapUv:Tt&&_(E.displacementMap.channel),emissiveMapUv:ee&&_(E.emissiveMap.channel),metalnessMapUv:P&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:ft&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(E.sheenRoughnessMap.channel),specularMapUv:Xt&&_(E.specularMap.channel),specularColorMapUv:Ot&&_(E.specularColorMap.channel),specularIntensityMapUv:re&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:lt&&_(E.thicknessMap.channel),alphaMapUv:Q&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ht||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Qt||Q),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:It,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===ne,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===on,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=h.has(1),ye.vertexUv2s=h.has(2),ye.vertexUv3s=h.has(3),h.clear(),ye}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(y,E),b(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const y=g[E.type];let C;if(y){const G=Je[y];C=Bl.clone(G.uniforms)}else C=E.uniforms;return C}function D(E,y){let C;for(let G=0,k=l.length;G<k;G++){const W=l[G];if(W.cacheKey===y){C=W,++C.usedTimes;break}}return C===void 0&&(C=new $f(i,y,E,r),l.push(C)),C}function w(E){if(--E.usedTimes===0){const y=l.indexOf(E);l[y]=l[l.length-1],l.pop(),E.destroy()}}function A(E){c.remove(E)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:R}}function tp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ep(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,u){e.length>1&&e.sort(d||ep),n.length>1&&n.sort(u||uo),s.length>1&&s.sort(u||uo)}function l(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function np(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fo,i.set(n,[a])):s>=r.length?(a=new fo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function sp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rp=0;function ap(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function op(i){const t=new ip,e=sp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,r=new Jt,a=new Jt;function o(h){let l=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,b=0,M=0,D=0,w=0,A=0;h.sort(ap);for(let E=0,y=h.length;E<y;E++){const C=h[E],G=C.color,k=C.intensity,W=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)l+=G.r*k,d+=G.g*k,u+=G.b*k;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],k);A++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=X,p++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(G).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const Z=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,M++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(G).multiplyScalar(k),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Z=C.shadow,z=e.get(C);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(k),X.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==T||R.numPointShadows!==b||R.numSpotShadows!==M||R.numSpotMaps!==D||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=T,R.numPointShadows=b,R.numSpotShadows=M,R.numSpotMaps=D,R.numLightProbes=A,n.version=rp++)}function c(h,l){let d=0,u=0,p=0,g=0,_=0;const m=l.matrixWorldInverse;for(let f=0,T=h.length;f<T;f++){const b=h[f];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function po(i){const t=new op(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new po(i),t.set(s,[o])):r>=a.length?(o=new po(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class lp extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hp extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dp=`void main() {
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
}`;function fp(i,t,e){let n=new na;const s=new Ct,r=new Ct,a=new se,o=new lp({depthPacking:Vc}),c=new hp,h={},l=e.maxTextureSize,d={[dn]:Le,[Le]:dn,[on]:on},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:dp,fragmentShader:up}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new O(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let f=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(bn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==an&&this.type===an,W=f===an&&this.type!==an;for(let Y=0,X=w.length;Y<X;Y++){const Z=w[Y],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||k===!0||W===!0){const gt=this.type!==an?{minFilter:je,magFilter:je}:{};z.map!==null&&z.map.dispose(),z.map=new Hn(s.x,s.y,gt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const it=z.getViewportCount();for(let gt=0;gt<it;gt++){const It=z.getViewport(gt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),G.viewport(a),z.updateMatrices(Z,gt),n=z.getFrustum(),M(A,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===an&&T(z,R),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,C)};function T(w,A){const R=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,R,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,R,p,_,null)}function b(w,A,R,E){let y=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=y.uuid,k=A.uuid;let W=h[G];W===void 0&&(W={},h[G]=W);let Y=W[k];Y===void 0&&(Y=y.clone(),W[k]=Y,A.addEventListener("dispose",D)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,E===an?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=R}return y}function M(w,A,R,E,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===an)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=t.update(w),W=w.material;if(Array.isArray(W)){const Y=k.groups;for(let X=0,Z=Y.length;X<Z;X++){const z=Y[X],tt=W[z.materialIndex];if(tt&&tt.visible){const it=b(w,tt,E,y);w.onBeforeShadow(i,w,A,R,k,it,z),i.renderBufferDirect(R,null,k,it,w,z),w.onAfterShadow(i,w,A,R,k,it,z)}}}else if(W.visible){const Y=b(w,W,E,y);w.onBeforeShadow(i,w,A,R,k,Y,null),i.renderBufferDirect(R,null,k,Y,w,null),w.onAfterShadow(i,w,A,R,k,Y,null)}}const G=w.children;for(let k=0,W=G.length;k<W;k++)M(G[k],A,R,E,y)}function D(w){w.target.removeEventListener("dispose",D);for(const R in h){const E=h[R],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const pp={[lr]:hr,[dr]:pr,[ur]:mr,[fi]:fr,[hr]:lr,[pr]:dr,[mr]:ur,[fr]:fi};function mp(i,t){function e(){let I=!1;const lt=new se;let q=null;const Q=new se(0,0,0,0);return{setMask:function(ut){q!==ut&&!I&&(i.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){I=ut},setClear:function(ut,ht,Ut,he,ye){ye===!0&&(ut*=he,ht*=he,Ut*=he),lt.set(ut,ht,Ut,he),Q.equals(lt)===!1&&(i.clearColor(ut,ht,Ut,he),Q.copy(lt))},reset:function(){I=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,q=null,Q=null,ut=null;return{setReversed:function(ht){if(lt!==ht){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?rt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!I&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(lt&&(ht=pp[ht]),Q!==ht){switch(ht){case lr:i.depthFunc(i.NEVER);break;case hr:i.depthFunc(i.ALWAYS);break;case dr:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case ur:i.depthFunc(i.EQUAL);break;case fr:i.depthFunc(i.GEQUAL);break;case pr:i.depthFunc(i.GREATER);break;case mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ut!==ht&&(lt&&(ht=1-ht),i.clearDepth(ht),ut=ht)},reset:function(){I=!1,q=null,Q=null,ut=null,lt=!1}}}function s(){let I=!1,lt=null,q=null,Q=null,ut=null,ht=null,Ut=null,he=null,ye=null;return{setTest:function(te){I||(te?rt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(te){lt!==te&&!I&&(i.stencilMask(te),lt=te)},setFunc:function(te,ze,Ze){(q!==te||Q!==ze||ut!==Ze)&&(i.stencilFunc(te,ze,Ze),q=te,Q=ze,ut=Ze)},setOp:function(te,ze,Ze){(ht!==te||Ut!==ze||he!==Ze)&&(i.stencilOp(te,ze,Ze),ht=te,Ut=ze,he=Ze)},setLocked:function(te){I=te},setClear:function(te){ye!==te&&(i.clearStencil(te),ye=te)},reset:function(){I=!1,lt=null,q=null,Q=null,ut=null,ht=null,Ut=null,he=null,ye=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let l={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,M=null,D=null,w=null,A=new Vt(0,0,0),R=0,E=!1,y=null,C=null,G=null,k=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Z>=2);let tt=null,it={};const gt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),jt=new se().fromArray(gt),$=new se().fromArray(It);function et(I,lt,q,Q){const ut=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<q;Ut++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(lt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ht}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(fi),At(!1),Ht(_a),rt(i.CULL_FACE),N(bn);function rt(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function wt(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Rt(I,lt){return d[I]!==lt?(i.bindFramebuffer(I,lt),d[I]=lt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function kt(I,lt){let q=p,Q=!1;if(I){q=u.get(lt),q===void 0&&(q=[],u.set(lt,q));const ut=I.textures;if(q.length!==ut.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=ut.length;ht<Ut;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=ut.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function Qt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Pt={[Fn]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};Pt[vc]=i.MIN,Pt[xc]=i.MAX;const le={[Mc]:i.ZERO,[yc]:i.ONE,[Ec]:i.SRC_COLOR,[or]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[wc]:i.DST_COLOR,[Tc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Pc]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Dc]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,lt,q,Q,ut,ht,Ut,he,ye,te){if(I===bn){_===!0&&(wt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),I!==mc){if(I!==m||te!==E){if((f!==Fn||M!==Fn)&&(i.blendEquation(i.FUNC_ADD),f=Fn,M=Fn),te)switch(I){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,b=null,D=null,w=null,A.set(0,0,0),R=0,m=I,E=te}return}ut=ut||lt,ht=ht||q,Ut=Ut||Q,(lt!==f||ut!==M)&&(i.blendEquationSeparate(Pt[lt],Pt[ut]),f=lt,M=ut),(q!==T||Q!==b||ht!==D||Ut!==w)&&(i.blendFuncSeparate(le[q],le[Q],le[ht],le[Ut]),T=q,b=Q,D=ht,w=Ut),(he.equals(A)===!1||ye!==R)&&(i.blendColor(he.r,he.g,he.b,ye),A.copy(he),R=ye),m=I,E=!1}function _e(I,lt){I.side===on?wt(i.CULL_FACE):rt(i.CULL_FACE);let q=I.side===Le;lt&&(q=!q),At(q),I.blending===hi&&I.transparent===!1?N(bn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Ht(I){I!==fc?(rt(i.CULL_FACE),I!==C&&(I===_a?i.cullFace(i.BACK):I===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),C=I}function Tt(I){I!==G&&(X&&i.lineWidth(I),G=I)}function ee(I,lt,q){I?(rt(i.POLYGON_OFFSET_FILL),(k!==lt||W!==q)&&(i.polygonOffset(lt,q),k=lt,W=q)):wt(i.POLYGON_OFFSET_FILL)}function P(I){I?rt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function x(I){I===void 0&&(I=i.TEXTURE0+Y-1),tt!==I&&(i.activeTexture(I),tt=I)}function v(I,lt,q){q===void 0&&(tt===null?q=i.TEXTURE0+Y-1:q=tt);let Q=it[q];Q===void 0&&(Q={type:void 0,texture:void 0},it[q]=Q),(Q.type!==I||Q.texture!==lt)&&(tt!==q&&(i.activeTexture(q),tt=q),i.bindTexture(I,lt||_t[I]),Q.type=I,Q.texture=lt)}function B(){const I=it[tt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function vt(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Xt(I,lt){let q=h.get(lt);q===void 0&&(q=new WeakMap,h.set(lt,q));let Q=q.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(lt,I.name),q.set(I,Q))}function Ot(I,lt){const Q=h.get(lt).get(I);c.get(lt)!==Q&&(i.uniformBlockBinding(lt,Q,I.__bindingPointIndex),c.set(lt,Q))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},tt=null,it={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,M=null,D=null,w=null,A=new Vt(0,0,0),R=0,E=!1,y=null,C=null,G=null,k=null,W=null,jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:wt,bindFramebuffer:Rt,drawBuffers:kt,useProgram:Qt,setBlending:N,setMaterial:_e,setFlipSided:At,setCullFace:Ht,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:P,activeTexture:x,bindTexture:v,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:K,texImage2D:pt,texImage3D:bt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Wt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Lt,viewport:vt,reset:re}}function mo(i,t,e,n){const s=gp(n);switch(e){case Uo:return i*t;case Fo:return i*t;case ko:return i*t*2;case Oo:return i*t/s.components*s.byteLength;case Kr:return i*t/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case Zr:return i*t*2/s.components*s.byteLength;case No:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case Qr:return i*t*4/s.components*s.byteLength;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mr:case Er:return Math.max(i,16)*Math.max(t,8)/4;case xr:case yr:return Math.max(i,8)*Math.max(t,8)/2;case Sr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Or:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _s:case zr:case Gr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case Hr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vr:case Wr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gp(i){switch(i){case un:case Do:return{byteLength:1,components:1};case Fi:case Io:case ki:return{byteLength:2,components:1};case $r:case Jr:return{byteLength:2,components:4};case Gn:case Yr:case cn:return{byteLength:4,components:1};case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _p(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,l=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):ys("canvas")}function _(x,v,B){let J=1;const K=P(x);if((K.width>B||K.height>B)&&(J=B/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const j=Math.floor(J*K.width),xt=Math.floor(J*K.height);d===void 0&&(d=g(j,xt));const ct=v?g(j,xt):d;return ct.width=j,ct.height=xt,ct.getContext("2d").drawImage(x,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+xt+")."),ct}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){i.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(x,v,B,J,K=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let j=v;if(v===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),v===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const xt=K?bs:qt.getTransfer(J);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=xt===ne?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(x,v){let B;return x?v===null||v===Gn||v===gi?B=i.DEPTH24_STENCIL8:v===cn?B=i.DEPTH32F_STENCIL8:v===Fi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===gi?B=i.DEPTH_COMPONENT24:v===cn?B=i.DEPTH_COMPONENT32F:v===Fi&&(B=i.DEPTH_COMPONENT16),B}function D(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==je&&x.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function w(x){const v=x.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&l.delete(v)}function A(x){const v=x.target;v.removeEventListener("dispose",A),y(v)}function R(x){const v=n.get(x);if(v.__webglInit===void 0)return;const B=x.source,J=u.get(B);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(x),Object.keys(J).length===0&&u.delete(B)}n.remove(x)}function E(x){const v=n.get(x);i.deleteTexture(v.__webglTexture);const B=x.source,J=u.get(B);delete J[v.__cacheKey],a.memory.textures--}function y(x){const v=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let K=0;K<v.__webglFramebuffer[J].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[J][K]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=x.textures;for(let J=0,K=B.length;J<K;J++){const j=n.get(B[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[J])}n.remove(x)}let C=0;function G(){C=0}function k(){const x=C;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),C+=1,x}function W(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function Y(x,v){const B=n.get(x);if(x.isVideoTexture&&Tt(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const J=x.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,x,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function X(x,v){const B=n.get(x);if(x.version>0&&B.__version!==x.version){$(B,x,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Z(x,v){const B=n.get(x);if(x.version>0&&B.__version!==x.version){$(B,x,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function z(x,v){const B=n.get(x);if(x.version>0&&B.__version!==x.version){et(B,x,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const tt={[Ni]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},it={[je]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},gt={[Xc]:i.NEVER,[Kc]:i.ALWAYS,[qc]:i.LESS,[Vo]:i.LEQUAL,[jc]:i.EQUAL,[Jc]:i.GEQUAL,[Yc]:i.GREATER,[$c]:i.NOTEQUAL};function It(x,v){if(v.type===cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Rs||v.magFilter===Vi||v.magFilter===zn||v.minFilter===ke||v.minFilter===Rs||v.minFilter===Vi||v.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,tt[v.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,it[v.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,it[v.minFilter]),v.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Vi&&v.minFilter!==zn||v.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(x,v){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",w));const J=v.source;let K=u.get(J);K===void 0&&(K={},u.set(J,K));const j=W(v);if(j!==x.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[j].usedTimes++;const xt=K[x.__cacheKey];xt!==void 0&&(K[x.__cacheKey].usedTimes--,xt.usedTimes===0&&E(v)),x.__cacheKey=j,x.__webglTexture=K[j].texture}return B}function $(x,v,B){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const K=jt(x,v),j=v.source;e.bindTexture(J,x.__webglTexture,i.TEXTURE0+B);const xt=n.get(j);if(j.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const ct=qt.getPrimaries(qt.workingColorSpace),ft=v.colorSpace===Sn?null:qt.getPrimaries(v.colorSpace),Wt=v.colorSpace===Sn||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let nt=_(v.image,!1,s.maxTextureSize);nt=ee(v,nt);const pt=r.convert(v.format,v.colorSpace),bt=r.convert(v.type);let Lt=b(v.internalFormat,pt,bt,v.colorSpace,v.isVideoTexture);It(J,v);let vt;const Xt=v.mipmaps,Ot=v.isVideoTexture!==!0,re=xt.__version===void 0||K===!0,I=j.dataReady,lt=D(v,nt);if(v.isDepthTexture)Lt=M(v.format===_i,v.type),re&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,pt,bt,null));else if(v.isDataTexture)if(Xt.length>0){Ot&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)vt=Xt[q],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,pt,bt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,pt,bt,vt.data);v.generateMipmaps=!1}else Ot?(re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,nt.width,nt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,pt,bt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,pt,bt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Xt[0].width,Xt[0].height,nt.depth);for(let q=0,Q=Xt.length;q<Q;q++)if(vt=Xt[q],v.format!==qe)if(pt!==null)if(Ot){if(I)if(v.layerUpdates.size>0){const ut=mo(vt.width,vt.height,v.format,v.type);for(const ht of v.layerUpdates){const Ut=vt.data.subarray(ht*ut/vt.data.BYTES_PER_ELEMENT,(ht+1)*ut/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ht,vt.width,vt.height,1,pt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,pt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,pt,bt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,nt.depth,0,pt,bt,vt.data)}else{Ot&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)vt=Xt[q],v.format!==qe?pt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,pt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,pt,bt,vt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,pt,bt,vt.data)}else if(v.isDataArrayTexture)if(Ot){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,nt.width,nt.height,nt.depth),I)if(v.layerUpdates.size>0){const q=mo(nt.width,nt.height,v.format,v.type);for(const Q of v.layerUpdates){const ut=nt.data.subarray(Q*q/nt.data.BYTES_PER_ELEMENT,(Q+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,pt,bt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,bt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,pt,bt,nt.data);else if(v.isData3DTexture)Ot?(re&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,bt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,pt,bt,nt.data);else if(v.isFramebufferTexture){if(re)if(Ot)e.texStorage2D(i.TEXTURE_2D,lt,Lt,nt.width,nt.height);else{let q=nt.width,Q=nt.height;for(let ut=0;ut<lt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Lt,q,Q,0,pt,bt,null),q>>=1,Q>>=1}}else if(Xt.length>0){if(Ot&&re){const q=P(Xt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,q.width,q.height)}for(let q=0,Q=Xt.length;q<Q;q++)vt=Xt[q],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,pt,bt,vt):e.texImage2D(i.TEXTURE_2D,q,Lt,pt,bt,vt);v.generateMipmaps=!1}else if(Ot){if(re){const q=P(nt);e.texStorage2D(i.TEXTURE_2D,lt,Lt,q.width,q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,bt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,bt,nt);m(v)&&f(J),xt.__version=j.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function et(x,v,B){if(v.image.length!==6)return;const J=jt(x,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+B);const j=n.get(K);if(K.version!==j.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const xt=qt.getPrimaries(qt.workingColorSpace),ct=v.colorSpace===Sn?null:qt.getPrimaries(v.colorSpace),ft=v.colorSpace===Sn||xt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Q=0;Q<6;Q++)!Wt&&!nt?pt[Q]=_(v.image[Q],!0,s.maxCubemapSize):pt[Q]=nt?v.image[Q].image:v.image[Q],pt[Q]=ee(v,pt[Q]);const bt=pt[0],Lt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Xt=b(v.internalFormat,Lt,vt,v.colorSpace),Ot=v.isVideoTexture!==!0,re=j.__version===void 0||J===!0,I=K.dataReady;let lt=D(v,bt);It(i.TEXTURE_CUBE_MAP,v);let q;if(Wt){Ot&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,bt.width,bt.height);for(let Q=0;Q<6;Q++){q=pt[Q].mipmaps;for(let ut=0;ut<q.length;ut++){const ht=q[ut];v.format!==qe?Lt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,ht.width,ht.height,Lt,vt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Xt,ht.width,ht.height,0,Lt,vt,ht.data)}}}else{if(q=v.mipmaps,Ot&&re){q.length>0&&lt++;const Q=P(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pt[Q].width,pt[Q].height,Lt,vt,pt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,pt[Q].width,pt[Q].height,0,Lt,vt,pt[Q].data);for(let ut=0;ut<q.length;ut++){const Ut=q[ut].image[Q].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,Ut.width,Ut.height,Lt,vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Xt,Ut.width,Ut.height,0,Lt,vt,Ut.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,vt,pt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,Lt,vt,pt[Q]);for(let ut=0;ut<q.length;ut++){const ht=q[ut];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,Lt,vt,ht.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Xt,Lt,vt,ht.image[Q])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),j.__version=K.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function _t(x,v,B,J,K,j){const xt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),ft=b(B.internalFormat,xt,ct,B.colorSpace),Wt=n.get(v),nt=n.get(B);if(nt.__renderTarget=v,!Wt.__hasExternalTextures){const pt=Math.max(1,v.width>>j),bt=Math.max(1,v.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,j,ft,pt,bt,v.depth,0,xt,ct,null):e.texImage2D(K,j,ft,pt,bt,0,xt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,nt.__webglTexture,0,At(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,nt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(x,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,x),v.depthBuffer){const J=v.depthTexture,K=J&&J.isDepthTexture?J.type:null,j=M(v.stencilBuffer,K),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=At(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,x)}else{const J=v.textures;for(let K=0;K<J.length;K++){const j=J[K],xt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),ft=b(j.internalFormat,xt,ct,j.colorSpace),Wt=At(v);B&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ft,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const K=J.__webglTexture,j=At(v);if(v.depthTexture.format===di)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===_i)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(x){const v=n.get(x),B=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const J=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=J}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");wt(v.__webglFramebuffer,x)}else if(B){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[J],x,!1);else{const K=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(x,v,B){const J=n.get(x);v!==void 0&&_t(J.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Rt(x)}function Qt(x){const v=x.texture,B=n.get(x),J=n.get(v);x.addEventListener("dispose",A);const K=x.textures,j=x.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let ft=0;ft<v.mipmaps.length;ft++)B.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ct=0,ft=K.length;ct<ft;ct++){const Wt=n.get(K[ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(x.samples>0&&Ht(x)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<K.length;ct++){const ft=K[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Wt=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),pt=b(ft.internalFormat,Wt,nt,ft.colorSpace,x.isXRRenderTarget===!0),bt=At(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,pt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),It(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)_t(B.__webglFramebuffer[ct][ft],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else _t(B.__webglFramebuffer[ct],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,ft=K.length;ct<ft;ct++){const Wt=K[ct],nt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),It(i.TEXTURE_2D,Wt),_t(B.__webglFramebuffer,x,Wt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ct=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),It(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)_t(B.__webglFramebuffer[ft],x,v,i.COLOR_ATTACHMENT0,ct,ft);else _t(B.__webglFramebuffer,x,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}x.depthBuffer&&Rt(x)}function Pt(x){const v=x.textures;for(let B=0,J=v.length;B<J;B++){const K=v[B];if(m(K)){const j=T(x),xt=n.get(K).__webglTexture;e.bindTexture(j,xt),f(j),e.unbindTexture()}}}const le=[],N=[];function _e(x){if(x.samples>0){if(Ht(x)===!1){const v=x.textures,B=x.width,J=x.height;let K=i.COLOR_BUFFER_BIT;const j=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(x),ct=v.length>1;if(ct)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Wt=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,K,i.NEAREST),c===!0&&(le.length=0,N.length=0,le.push(i.COLOR_ATTACHMENT0+ft),x.depthBuffer&&x.resolveDepthBuffer===!1&&(le.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Wt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const v=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function At(x){return Math.min(s.maxSamples,x.samples)}function Ht(x){const v=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(x){const v=a.render.frame;l.get(x)!==v&&(l.set(x,v),x.update())}function ee(x,v){const B=x.colorSpace,J=x.format,K=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==Mi&&B!==Sn&&(qt.getTransfer(B)===ne?(J!==qe||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function P(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(h.width=x.naturalWidth||x.width,h.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(h.width=x.displayWidth,h.height=x.displayHeight):(h.width=x.width,h.height=x.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ht}function vp(i,t){function e(n,s=Sn){let r;const a=qt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===$r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Do)return i.BYTE;if(n===Io)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Uo)return i.ALPHA;if(n===No)return i.RGB;if(n===qe)return i.RGBA;if(n===Fo)return i.LUMINANCE;if(n===ko)return i.LUMINANCE_ALPHA;if(n===di)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===zo)return i.RG;if(n===Zr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===fs||n===ps||n===ms||n===gs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xr||n===Mr||n===yr||n===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===Tr||n===br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sr||n===Tr)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===br)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wr||n===Ar||n===Cr||n===Rr||n===Pr||n===Lr||n===Dr||n===Ir||n===Br||n===Ur||n===Nr||n===Fr||n===kr||n===Or)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ur)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kr)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Or)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===zr||n===Gr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_s)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Hr||n===Vr||n===Wr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class xp extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),p=.02,g=.005;h.inputState.pinching&&u>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yp=`
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

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:yp,fragmentShader:Ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends Wn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,p=null,g=null;const _=new Sp,m=e.getContextAttributes();let f=null,T=null;const b=[],M=[],D=new Ct;let w=null;const A=new Pe;A.viewport=new se;const R=new Pe;R.viewport=new se;const E=[A,R],y=new xp;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=b[$];return et===void 0&&(et=new nr,b[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=b[$];return et===void 0&&(et=new nr,b[$]=et),et.getGripSpace()},this.getHand=function($){let et=b[$];return et===void 0&&(et=new nr,b[$]=et),et.getHandSpace()};function k($){const et=M.indexOf($.inputSource);if(et===-1)return;const _t=b[et];_t!==void 0&&(_t.update($.inputSource,$.frame,h||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){const et=M[$];et!==null&&(M[$]=null,b[$].disconnect(et))}C=null,G=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,T=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Hn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?_i:di,_t=m.stencil?gi:Gn);const wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new Hn(u.textureWidth,u.textureHeight,{format:qe,type:un,depthTexture:new nc(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let et=0;et<$.removed.length;et++){const _t=$.removed[et],rt=M.indexOf(_t);rt>=0&&(M[rt]=null,b[rt].disconnect(_t))}for(let et=0;et<$.added.length;et++){const _t=$.added[et];let rt=M.indexOf(_t);if(rt===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=M.length){M.push(_t),rt=Rt;break}else if(M[Rt]===null){M[Rt]=_t,rt=Rt;break}if(rt===-1)break}const wt=b[rt];wt&&wt.connect(_t)}}const X=new L,Z=new L;function z($,et,_t){X.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const rt=X.distanceTo(Z),wt=et.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,kt=wt[14]/(wt[10]-1),Qt=wt[14]/(wt[10]+1),Pt=(wt[9]+1)/wt[5],le=(wt[9]-1)/wt[5],N=(wt[8]-1)/wt[0],_e=(Rt[8]+1)/Rt[0],At=kt*N,Ht=kt*_e,Tt=rt/(-N+_e),ee=Tt*-N;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const P=kt+Tt,x=Qt+Tt,v=At-ee,B=Ht+(rt-ee),J=Pt*Qt/x*P,K=le*Qt/x*P;$.projectionMatrix.makePerspective(v,B,J,K,P,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,_t=$.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=R.near=A.near=et,y.far=R.far=A.far=_t,(C!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,G=y.far),A.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;const rt=$.parent,wt=y.cameras;tt(y,rt);for(let Rt=0;Rt<wt.length;Rt++)tt(wt[Rt],rt);wt.length===2?z(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),it($,y,rt)};function it($,et,_t){_t===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function It($,et){if(l=et.getViewerPose(h||a),g=et,l!==null){const _t=l.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let rt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Rt=0;Rt<_t.length;Rt++){const kt=_t[Rt];let Qt=null;if(p!==null)Qt=p.getViewport(kt);else{const le=d.getViewSubImage(u,kt);Qt=le.viewport,Rt===0&&(t.setRenderTargetTextures(T,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(T))}let Pt=E[Rt];Pt===void 0&&(Pt=new Pe,Pt.layers.enable(Rt),Pt.viewport=new se,E[Rt]=Pt),Pt.matrix.fromArray(kt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(kt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Rt===0&&(y.matrix.copy(Pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Pt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Rt=d.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let _t=0;_t<b.length;_t++){const rt=M[_t],wt=b[_t];rt!==null&&wt!==void 0&&wt.update(rt,et,h||a)}gt&&gt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new ec;jt.setAnimationLoop(It),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}}const Bn=new Ke,bp=new Jt;function wp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Zo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),l(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,T,b):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Le&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Le&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,Bn.copy(M),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Bn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ap(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const M=b.program;n.uniformBlockBinding(T,M)}function h(T,b){let M=s[T.id];M===void 0&&(g(T),M=l(T),s[T.id]=M,T.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(T,D);const w=t.render.frame;r[T.id]!==w&&(u(T),r[T.id]=w)}function l(T){const b=d();T.__bindingPointIndex=b;const M=i.createBuffer(),D=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const b=s[T.id],M=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=M.length;w<A;w++){const R=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,y=R.length;E<y;E++){const C=R[E];if(p(C,w,E,D)===!0){const G=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let Y=0;Y<k.length;Y++){const X=k[Y],Z=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+W,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,M,D){const w=T.value,A=b+"_"+M;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const R=D[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return D[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(T){const b=T.uniforms;let M=0;const D=16;for(let A=0,R=b.length;A<R;A++){const E=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,C=E.length;y<C;y++){const G=E[y],k=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Y=k.length;W<Y;W++){const X=k[W],Z=_(X),z=M%D,tt=z%Z.boundary,it=z+tt;M+=tt,it!==0&&D-it<Z.storage&&(M+=D-it),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=Z.storage}}}const w=M%D;return w>0&&(M+=D-w),T.__size=M,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:f}}class Cp{constructor(t={}){const{canvas:e=pl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=wn,this.toneMappingExposure=1;const M=this;let D=!1,w=0,A=0,R=null,E=-1,y=null;const C=new se,G=new se;let k=null;const W=new Vt(0);let Y=0,X=e.width,Z=e.height,z=1,tt=null,it=null;const gt=new se(0,0,X,Z),It=new se(0,0,X,Z);let jt=!1;const $=new na;let et=!1,_t=!1;const rt=new Jt,wt=new Jt,Rt=new L,kt=new se,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function le(){return R===null?z:1}let N=n;function _e(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const U="webgl2";if(N=_e(U,S),N===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let At,Ht,Tt,ee,P,x,v,B,J,K,j,xt,ct,ft,Wt,nt,pt,bt,Lt,vt,Xt,Ot,re,I;function lt(){At=new Du(N),At.init(),Ot=new vp(N,At),Ht=new bu(N,At,t,Ot),Tt=new mp(N,At),Ht.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ee=new Uu(N),P=new tp,x=new _p(N,At,Tt,P,Ht,Ot,ee),v=new Au(M),B=new Lu(M),J=new Gl(N),re=new Su(N,J),K=new Iu(N,J,ee,re),j=new Fu(N,K,J,ee),Lt=new Nu(N,Ht,x),nt=new wu(P),xt=new Qf(M,v,B,At,Ht,re,nt),ct=new wp(M,P),ft=new np,Wt=new cp(At),bt=new Eu(M,v,B,Tt,j,p,c),pt=new fp(M,j,Ht),I=new Ap(N,ee,Ht,Tt),vt=new Tu(N,At,ee),Xt=new Bu(N,At,ee),ee.programs=xt.programs,M.capabilities=Ht,M.extensions=At,M.properties=P,M.renderLists=ft,M.shadowMap=pt,M.state=Tt,M.info=ee}lt();const q=new Tp(M,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=At.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=At.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(X,Z,!1))},this.getSize=function(S){return S.set(X,Z)},this.setSize=function(S,U,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,Z=U,e.width=Math.floor(S*z),e.height=Math.floor(U*z),H===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(X*z,Z*z).floor()},this.setDrawingBufferSize=function(S,U,H){X=S,Z=U,z=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,U,H,V){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,U,H,V),Tt.viewport(C.copy(gt).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(It)},this.setScissor=function(S,U,H,V){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,H,V),Tt.scissor(G.copy(It).multiplyScalar(z).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){Tt.setScissorTest(jt=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(S=!0,U=!0,H=!0){let V=0;if(S){let F=!1;if(R!==null){const st=R.texture.format;F=st===Qr||st===Zr||st===Kr}if(F){const st=R.texture.type,dt=st===un||st===Gn||st===Fi||st===gi||st===$r||st===Jr,Mt=bt.getClearColor(),yt=bt.getClearAlpha(),Bt=Mt.r,Nt=Mt.g,Et=Mt.b;dt?(g[0]=Bt,g[1]=Nt,g[2]=Et,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Bt,_[1]=Nt,_[2]=Et,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),Wt.dispose(),P.dispose(),v.dispose(),B.dispose(),j.dispose(),re.dispose(),I.dispose(),xt.dispose(),q.dispose(),q.removeEventListener("sessionstart",la),q.removeEventListener("sessionend",ha),Cn.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=ee.autoReset,U=pt.enabled,H=pt.autoUpdate,V=pt.needsUpdate,F=pt.type;lt(),ee.autoReset=S,pt.enabled=U,pt.autoUpdate=H,pt.needsUpdate=V,pt.type=F}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ut(S){const U=S.target;U.removeEventListener("dispose",Ut),he(U)}function he(S){ye(S),P.remove(S)}function ye(S){const U=P.get(S).programs;U!==void 0&&(U.forEach(function(H){xt.releaseProgram(H)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,V,F,st){U===null&&(U=Qt);const dt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=hc(S,U,H,V,F);Tt.setMaterial(V,dt);let yt=H.index,Bt=1;if(V.wireframe===!0){if(yt=K.getWireframeAttribute(H),yt===void 0)return;Bt=2}const Nt=H.drawRange,Et=H.attributes.position;let Yt=Nt.start*Bt,ae=(Nt.start+Nt.count)*Bt;st!==null&&(Yt=Math.max(Yt,st.start*Bt),ae=Math.min(ae,(st.start+st.count)*Bt)),yt!==null?(Yt=Math.max(Yt,0),ae=Math.min(ae,yt.count)):Et!=null&&(Yt=Math.max(Yt,0),ae=Math.min(ae,Et.count));const oe=ae-Yt;if(oe<0||oe===1/0)return;re.setup(F,V,Mt,H,yt);let Ce,Kt=vt;if(yt!==null&&(Ce=J.get(yt),Kt=Xt,Kt.setIndex(Ce)),F.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*le()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(F.isLine){let St=V.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*le()),F.isLineSegments?Kt.setMode(N.LINES):F.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else F.isPoints?Kt.setMode(N.POINTS):F.isSprite&&Kt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,Qe=F._multiDrawCounts,Zt=F._multiDrawCount,Ge=yt?J.get(yt).bytesPerElement:1,Xn=P.get(V).currentProgram.getUniforms();for(let De=0;De<Zt;De++)Xn.setValue(N,"_gl_DrawID",De),Kt.render(St[De]/Ge,Qe[De])}else if(F.isInstancedMesh)Kt.renderInstances(Yt,oe,F.count);else if(H.isInstancedBufferGeometry){const St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qe=Math.min(H.instanceCount,St);Kt.renderInstances(Yt,oe,Qe)}else Kt.render(Yt,oe)};function te(S,U,H){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,Hi(S,U,H),S.side=dn,S.needsUpdate=!0,Hi(S,U,H),S.side=on):Hi(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),f=Wt.get(H),f.init(U),b.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const Mt=st[dt];te(Mt,H,F),V.add(Mt)}else te(st,H,F),V.add(st)}),b.pop(),f=null,V},this.compileAsync=function(S,U,H=null){const V=this.compile(S,U,H);return new Promise(F=>{function st(){if(V.forEach(function(dt){P.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(S);return}setTimeout(st,10)}At.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ze=null;function Ze(S){ze&&ze(S)}function la(){Cn.stop()}function ha(){Cn.start()}const Cn=new ec;Cn.setAnimationLoop(Ze),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(S){ze=S,q.setAnimationLoop(S),S===null?Cn.stop():Cn.start()},q.addEventListener("sessionstart",la),q.addEventListener("sessionend",ha),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,R),f=Wt.get(S,b.length),f.init(U),b.push(f),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,et=nt.init(this.clippingPlanes,_t),m=ft.get(S,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&Cs(st,U,-1/0,M.sortObjects)}Cs(S,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(tt,it),Pt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Pt&&bt.addToRenderList(m,S),this.info.render.frame++,et===!0&&nt.beginShadows();const H=f.state.shadowsArray;pt.render(H,S,U),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const st=U.cameras;if(F.length>0)for(let dt=0,Mt=st.length;dt<Mt;dt++){const yt=st[dt];ua(V,F,S,yt)}Pt&&bt.render(S);for(let dt=0,Mt=st.length;dt<Mt;dt++){const yt=st[dt];da(m,S,yt,yt.viewport)}}else F.length>0&&ua(V,F,S,U),Pt&&bt.render(S),da(m,S,U);R!==null&&(x.updateMultisampleRenderTarget(R),x.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(M,S,U),re.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],et===!0&&nt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Cs(S,U,H,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){V&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(wt);const dt=j.update(S),Mt=S.material;Mt.visible&&m.push(S,dt,Mt,H,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const dt=j.update(S),Mt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),kt.copy(dt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(wt)),Array.isArray(Mt)){const yt=dt.groups;for(let Bt=0,Nt=yt.length;Bt<Nt;Bt++){const Et=yt[Bt],Yt=Mt[Et.materialIndex];Yt&&Yt.visible&&m.push(S,dt,Yt,H,kt.z,Et)}}else Mt.visible&&m.push(S,dt,Mt,H,kt.z,null)}}const st=S.children;for(let dt=0,Mt=st.length;dt<Mt;dt++)Cs(st[dt],U,H,V)}function da(S,U,H,V){const F=S.opaque,st=S.transmissive,dt=S.transparent;f.setupLightsView(H),et===!0&&nt.setGlobalState(M.clippingPlanes,H),V&&Tt.viewport(C.copy(V)),F.length>0&&Gi(F,U,H),st.length>0&&Gi(st,U,H),dt.length>0&&Gi(dt,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ua(S,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Hn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?ki:un,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const st=f.state.transmissionRenderTarget[V.id],dt=V.viewport||C;st.setSize(dt.z,dt.w);const Mt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(W),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Pt&&bt.render(H);const yt=M.toneMapping;M.toneMapping=wn;const Bt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),et===!0&&nt.setGlobalState(M.clippingPlanes,V),Gi(S,H,V),x.updateMultisampleRenderTarget(st),x.updateRenderTargetMipmap(st),At.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Et=0,Yt=U.length;Et<Yt;Et++){const ae=U[Et],oe=ae.object,Ce=ae.geometry,Kt=ae.material,St=ae.group;if(Kt.side===on&&oe.layers.test(V.layers)){const Qe=Kt.side;Kt.side=Le,Kt.needsUpdate=!0,fa(oe,H,V,Ce,Kt,St),Kt.side=Qe,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(x.updateMultisampleRenderTarget(st),x.updateRenderTargetMipmap(st))}M.setRenderTarget(Mt),M.setClearColor(W,Y),Bt!==void 0&&(V.viewport=Bt),M.toneMapping=yt}function Gi(S,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,st=S.length;F<st;F++){const dt=S[F],Mt=dt.object,yt=dt.geometry,Bt=V===null?dt.material:V,Nt=dt.group;Mt.layers.test(H.layers)&&fa(Mt,U,H,yt,Bt,Nt)}}function fa(S,U,H,V,F,st){S.onBeforeRender(M,U,H,V,F,st),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,U,H,V,S,st),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=Le,F.needsUpdate=!0,M.renderBufferDirect(H,U,V,F,S,st),F.side=dn,F.needsUpdate=!0,M.renderBufferDirect(H,U,V,F,S,st),F.side=on):M.renderBufferDirect(H,U,V,F,S,st),S.onAfterRender(M,U,H,V,F,st)}function Hi(S,U,H){U.isScene!==!0&&(U=Qt);const V=P.get(S),F=f.state.lights,st=f.state.shadowsArray,dt=F.state.version,Mt=xt.getParameters(S,F.state,st,U,H),yt=xt.getProgramCacheKey(Mt);let Bt=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?B:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",Ut),Bt=new Map,V.programs=Bt);let Nt=Bt.get(yt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===dt)return ma(S,Mt),Nt}else Mt.uniforms=xt.getUniforms(S),S.onBeforeCompile(Mt,M),Nt=xt.acquireProgram(Mt,yt),Bt.set(yt,Nt),V.uniforms=Mt.uniforms;const Et=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=nt.uniform),ma(S,Mt),V.needsLights=uc(S),V.lightsStateVersion=dt,V.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function pa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=vs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ma(S,U){const H=P.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function hc(S,U,H,V,F){U.isScene!==!0&&(U=Qt),x.resetTextureUnits();const st=U.fog,dt=V.isMeshStandardMaterial?U.environment:null,Mt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mi,yt=(V.isMeshStandardMaterial?B:v).get(V.envMap||dt),Bt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let oe=wn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(oe=M.toneMapping);const Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Ce!==void 0?Ce.length:0,St=P.get(V),Qe=f.state.lights;if(et===!0&&(_t===!0||S!==y)){const Ue=S===y&&V.id===E;nt.setState(V,S,Ue)}let Zt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Qe.state.version||St.outputColorSpace!==Mt||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==yt||V.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Bt||St.vertexTangents!==Nt||St.morphTargets!==Et||St.morphNormals!==Yt||St.morphColors!==ae||St.toneMapping!==oe||St.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,St.__version=V.version);let Ge=St.currentProgram;Zt===!0&&(Ge=Hi(V,U,F));let Xn=!1,De=!1,bi=!1;const ce=Ge.getUniforms(),Ye=St.uniforms;if(Tt.useProgram(Ge.program)&&(Xn=!0,De=!0,bi=!0),V.id!==E&&(E=V.id,De=!0),Xn||y!==S){Tt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),gl(rt),_l(rt),ce.setValue(N,"projectionMatrix",rt)):ce.setValue(N,"projectionMatrix",S.projectionMatrix),ce.setValue(N,"viewMatrix",S.matrixWorldInverse);const fn=ce.map.cameraPosition;fn!==void 0&&fn.setValue(N,Rt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,De=!0,bi=!0)}if(F.isSkinnedMesh){ce.setOptional(N,F,"bindMatrix"),ce.setOptional(N,F,"bindMatrixInverse");const Ue=F.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ce.setValue(N,"boneTexture",Ue.boneTexture,x))}F.isBatchedMesh&&(ce.setOptional(N,F,"batchingTexture"),ce.setValue(N,"batchingTexture",F._matricesTexture,x),ce.setOptional(N,F,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",F._indirectTexture,x),ce.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",F._colorsTexture,x));const wi=H.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Lt.update(F,H,Ge),(De||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,ce.setValue(N,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ye.envMap.value=yt,Ye.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),De&&(ce.setValue(N,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&dc(Ye,bi),st&&V.fog===!0&&ct.refreshFogUniforms(Ye,st),ct.refreshMaterialUniforms(Ye,V,z,Z,f.state.transmissionRenderTarget[S.id]),vs.upload(N,pa(St),Ye,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(N,pa(St),Ye,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(N,"center",F.center),ce.setValue(N,"modelViewMatrix",F.modelViewMatrix),ce.setValue(N,"normalMatrix",F.normalMatrix),ce.setValue(N,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ue=V.uniformsGroups;for(let fn=0,pn=Ue.length;fn<pn;fn++){const ga=Ue[fn];I.update(ga,Ge),I.bind(ga,Ge)}}return Ge}function dc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function uc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,H){P.get(S.texture).__webglTexture=U,P.get(S.depthTexture).__webglTexture=H;const V=P.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const H=P.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){R=S,w=U,A=H;let V=!0,F=null,st=!1,dt=!1;if(S){const yt=P.get(S);if(yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(yt.__hasExternalTextures)x.rebindTextures(S,P.get(S.texture).__webglTexture,P.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(yt.__boundDepthTexture!==Et){if(Et!==null&&P.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(dt=!0);const Nt=P.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?F=Nt[U][H]:F=Nt[U],st=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?F=P.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[H]:F=Nt,C.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else C.copy(gt).multiplyScalar(z).floor(),G.copy(It).multiplyScalar(z).floor(),k=jt;if(Tt.bindFramebuffer(N.FRAMEBUFFER,F)&&V&&Tt.drawBuffers(S,F),Tt.viewport(C),Tt.scissor(G),Tt.setScissorTest(k),st){const yt=P.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,H)}else if(dt){const yt=P.get(S.texture),Bt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Bt)}E=-1},this.readRenderTargetPixels=function(S,U,H,V,F,st,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Tt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const yt=S.texture,Bt=yt.format,Nt=yt.type;if(!Ht.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&H>=0&&H<=S.height-F&&N.readPixels(U,H,V,F,Ot.convert(Bt),Ot.convert(Nt),st)}finally{const yt=R!==null?P.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,V,F,st,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=P.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const yt=S.texture,Bt=yt.format,Nt=yt.type;if(!Ht.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-V&&H>=0&&H<=S.height-F){Tt.bindFramebuffer(N.FRAMEBUFFER,Mt);const Et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),N.readPixels(U,H,V,F,Ot.convert(Bt),Ot.convert(Nt),0);const Yt=R!==null?P.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Yt);const ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ml(N,ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer(Et),N.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(Di("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(S.image.width*V),st=Math.floor(S.image.height*V),dt=U!==null?U.x:0,Mt=U!==null?U.y:0;x.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,dt,Mt,F,st),Tt.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,V=null,F=0){S.isTexture!==!0&&(Di("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let st,dt,Mt,yt,Bt,Nt,Et,Yt,ae;const oe=S.isCompressedTexture?S.mipmaps[F]:S.image;H!==null?(st=H.max.x-H.min.x,dt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,Bt=H.min.y,Nt=H.isBox3?H.min.z:0):(st=oe.width,dt=oe.height,Mt=oe.depth||1,yt=0,Bt=0,Nt=0),V!==null?(Et=V.x,Yt=V.y,ae=V.z):(Et=0,Yt=0,ae=0);const Ce=Ot.convert(U.format),Kt=Ot.convert(U.type);let St;U.isData3DTexture?(x.setTexture3D(U,0),St=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),St=N.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ge=N.getParameter(N.UNPACK_SKIP_PIXELS),Xn=N.getParameter(N.UNPACK_SKIP_ROWS),De=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const bi=S.isDataArrayTexture||S.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Ye=P.get(S),wi=P.get(U),Ue=P.get(Ye.__renderTarget),fn=P.get(wi.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let pn=0;pn<Mt;pn++)bi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(S).__webglTexture,F,Nt+pn),S.isDepthTexture?(ce&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(U).__webglTexture,F,ae+pn),N.blitFramebuffer(yt,Bt,st,dt,Et,Yt,st,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ce?N.copyTexSubImage3D(St,F,Et,Yt,ae+pn,yt,Bt,st,dt):N.copyTexSubImage2D(St,F,Et,Yt,ae+pn,yt,Bt,st,dt);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(St,F,Et,Yt,ae,st,dt,Mt,Ce,Kt,oe.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(St,F,Et,Yt,ae,st,dt,Mt,Ce,oe.data):N.texSubImage3D(St,F,Et,Yt,ae,st,dt,Mt,Ce,Kt,oe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Et,Yt,st,dt,Ce,Kt,oe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Et,Yt,oe.width,oe.height,Ce,oe.data):N.texSubImage2D(N.TEXTURE_2D,F,Et,Yt,st,dt,Ce,Kt,oe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De),F===0&&U.generateMipmaps&&N.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,V=null,F=0){return S.isTexture!==!0&&(Di("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0),Di('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,H,V,F)},this.initRenderTarget=function(S){P.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Tt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class sa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oc extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const go=new Jt,qr=new ea,hs=new ws,ds=new L;class Pp extends Me{constructor(t=new Ae,e=new oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;go.copy(s).invert(),qr.copy(t.ray).applyMatrix4(go);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=h.getX(g);ds.fromBufferAttribute(d,m),_o(ds,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)ds.fromBufferAttribute(d,g),_o(ds,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _o(i,t,e,n,s,r,a){const o=qr.distanceSqToPoint(i);if(o<e){const c=new L;qr.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $e extends we{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ra extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new L,l=new Ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[u]/t+1)/2,l.y=(a[u+1]/t+1)/2,c.push(l.x,l.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dt extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function T(){const M=new L,D=new L;let w=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const E=[],y=R/r,C=y*(e-t)+t;for(let G=0;G<=s;G++){const k=G/s,W=k*c+o,Y=Math.sin(W),X=Math.cos(W);D.x=C*Y,D.y=-y*n+m,D.z=C*X,d.push(D.x,D.y,D.z),M.set(Y,A,X).normalize(),u.push(M.x,M.y,M.z),p.push(k,1-y),E.push(g++)}_.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const y=_[E][R],C=_[E+1][R],G=_[E+1][R+1],k=_[E][R+1];(t>0||E!==0)&&(l.push(y,C,k),w+=3),(e>0||E!==r-1)&&(l.push(C,G,k),w+=3)}h.addGroup(f,w,0),f+=w}function b(M){const D=g,w=new Ct,A=new L;let R=0;const E=M===!0?t:e,y=M===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let G=0;G<=s;G++){const W=G/s*c+o,Y=Math.cos(W),X=Math.sin(W);A.x=E*X,A.y=m*y,A.z=E*Y,d.push(A.x,A.y,A.z),u.push(0,y,0),w.x=Y*.5+.5,w.y=X*.5*y+.5,p.push(w.x,w.y),g++}for(let G=0;G<s;G++){const k=D+G,W=C+G;M===!0?l.push(W,W+1,k):l.push(W+1,W,k),R+=3}h.addGroup(f,R,M===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Dt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Es(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class aa extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],h=[],l=[];let d=t;const u=(e-t)/s,p=new L,g=new Ct;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,l.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const T=f+m,b=T,M=T+n+1,D=T+n+2,w=T+1;o.push(b,M,w),o.push(M,D,w)}}this.setIndex(o),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zi extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],d=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],b=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const w=D/e;d.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+M,1-b),T.push(h++)}l.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const b=l[f][T+1],M=l[f][T],D=l[f+1][T],w=l[f+1][T+1];(f!==0||a>0)&&p.push(b,M,w),(f!==n-1||c<Math.PI)&&p.push(M,D,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ti extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],h=[],l=new L,d=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),u.subVectors(d,l).normalize(),c.push(u.x,u.y,u.z),h.push(g/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,T=(s+1)*p+g;a.push(_,m,T),a.push(m,f,T)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mt extends Ei{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ss extends mt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class oa extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ir=new Jt,vo=new L,xo=new L;class cc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vo.setFromMatrixPosition(t.matrixWorld),e.position.copy(vo),xo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xo),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lp extends cc{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Mo extends oa{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yo=new Jt,Li=new L,sr=new L;class Dp extends cc{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Li.setFromMatrixPosition(t.matrixWorld),n.position.copy(Li),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),s.makeTranslation(-Li.x,-Li.y,-Li.z),yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo)}}class yn extends oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ip extends oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Eo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bp extends Wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);const So={type:"change"},ca={type:"start"},lc={type:"end"},us=new ea,To=new En,Up=Math.cos(70*Wo.DEG2RAD),fe=new L,Re=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rr=1e-6;class Np extends Bp{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Vn,this._lastTargetPosition=new L,this._quat=new Vn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eo,this._sphericalDelta=new Eo,this._scale=1,this._panOffset=new L,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new L,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kp.bind(this),this._onPointerDown=Fp.bind(this),this._onPointerUp=Op.bind(this),this._onContextMenu=qp.bind(this),this._onMouseWheel=Hp.bind(this),this._onKeyDown=Vp.bind(this),this._onTouchStart=Wp.bind(this),this._onTouchMove=Xp.bind(this),this._onMouseDown=zp.bind(this),this._onMouseMove=Gp.bind(this),this._interceptControlDown=jp.bind(this),this._interceptControlUp=Yp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(So),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Re:n>Math.PI&&(n-=Re),s<-Math.PI?s+=Re:s>Math.PI&&(s-=Re),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(us.origin.copy(this.object.position),us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(us.direction))<Up?this.object.lookAt(this.target):(To.setFromNormalAndCoplanarPoint(this.object.up,this.target),us.intersectPlane(To,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rr||this._lastTargetPosition.distanceToSquared(this.target)>rr?(this.dispatchEvent(So),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Re/60*this.autoRotateSpeed*t:Re/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function kp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Op(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lc),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ca)}function Gp(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hp(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(ca),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lc))}function Vp(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Wp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ca)}function Xp(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function qp(i){this.enabled!==!1&&i.preventDefault()}function jp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ae;let h=0;for(let l=0;l<i.length;++l){const d=i[l];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,p,l),h+=p}}if(e){let l=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+l);l+=i[u].attributes.position.count}c.setIndex(d)}for(const l in r){const d=bo(r[l]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,d)}for(const l in a){const d=a[l][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<a[l].length;++_)p.push(a[l][_][u]);const g=bo(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function bo(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const a=new t(r),o=new Oe(a,e,n);let c=0;for(let h=0;h<i.length;++h){const l=i[h];if(l.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=l.count;u<p;u++)for(let g=0;g<e;g++){const _=l.getComponent(u,g);o.setComponent(u+d,g,_)}}else a.set(l.array,c);c+=l.count*e}return s!==void 0&&(o.gpuType=s),o}class $p{constructor(t){this.scene=t,this.group=new Gt,this.neonElements=[],this.cityBuildings=[],this.vipLights=[],this.wallWashNeonMats=[],this.columnLedMats=[],this.billboardNeonMats=[],this.skywayTrails=[],this.artLightboxMats=[],this.stageCanvas=null,this.stageTexture=null,this.stageCtx=null,this.stagePhase=0,this.init(),this.scene.add(this.group)}init(){this.createFloor(),this.createWalls(),this.createCeilingTrusses(),this.createWindowAndSkyline(),this.createAcousticPanels(),this.createNeonSigns(),this.createClubArtAndPosters(),this.createVIPLounge(),this.createStageScreen()}createFloor(){const t=new pe(26,24),e=new mt({color:658194,roughness:.12,metalness:.88}),n=new O(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n);const s=new $t({color:61695,transparent:!0,opacity:.45});this.wallWashNeonMats.push(s);const r=new O(new pe(16,.05),s);r.rotation.x=-Math.PI/2,r.position.set(0,.006,-1.2),this.group.add(r);const a=new aa(4.2,4.26,64),o=new O(a,s);o.rotation.x=-Math.PI/2,o.position.set(0,.006,3.5),this.group.add(o);const c=new O(new pe(.04,14),s);c.rotation.x=-Math.PI/2,c.position.set(-5.8,.006,4);const h=new O(new pe(.04,14),s);h.rotation.x=-Math.PI/2,h.position.set(5.8,.006,4),this.group.add(c,h)}createWalls(){const t=new mt({color:1184541,roughness:.75,metalness:.25}),e=new O(new at(7,9,.4),t);e.position.set(-8.5,4.5,-9.8),e.receiveShadow=!0,this.group.add(e);const n=new O(new at(7,9,.4),t);n.position.set(8.5,4.5,-9.8),n.receiveShadow=!0,this.group.add(n);const s=new O(new at(24,1.8,.4),t);s.position.set(0,8.1,-9.8),this.group.add(s);const r=new O(new at(24,1.2,.4),t);r.position.set(0,.6,-9.8),this.group.add(r);const a=new O(new at(.4,9,24),t);a.position.set(-12,4.5,2),a.receiveShadow=!0,this.group.add(a);const o=new O(new at(.4,9,24),t);o.position.set(12,4.5,2),o.receiveShadow=!0,this.group.add(o);const c=new mt({color:526608,roughness:.85,metalness:.2}),h=new O(new at(26,.4,24),c);h.position.set(0,9,2),this.group.add(h);const l=[{x:-11.7,z:-1.5},{x:-11.7,z:6.5},{x:11.7,z:-1.5},{x:11.7,z:6.5}],d=new mt({color:1447972,roughness:.6,metalness:.4}),u=new $t({color:61695});this.columnLedMats.push(u),l.forEach(M=>{const D=new O(new at(.8,9,1.2),d);D.position.set(M.x,4.5,M.z),D.castShadow=!0,D.receiveShadow=!0,this.group.add(D);const w=M.x<0?M.x+.38:M.x-.38,A=new O(new at(.04,8.8,.08),u);A.position.set(w,4.5,M.z),this.group.add(A)});const p=new $t({color:16711807,transparent:!0,opacity:.8});this.wallWashNeonMats.push(p);const g=new O(new at(.06,.06,23.6),p);g.position.set(-11.75,.04,2);const _=new O(new at(.06,.06,23.6),p);_.position.set(11.75,.04,2);const m=new O(new at(23.6,.06,.06),p);m.position.set(0,.04,-9.75),this.group.add(g,_,m);const f=new O(new at(.06,.06,23.6),p);f.position.set(-11.75,8.75,2);const T=new O(new at(.06,.06,23.6),p);T.position.set(11.75,8.75,2);const b=new O(new at(23.6,.06,.06),p);b.position.set(0,8.75,-9.75),this.group.add(f,T,b)}createCeilingTrusses(){const t=new mt({color:2369336,metalness:.95,roughness:.2}),e=[],n=(h,l,d,u,p)=>{const g=Math.hypot(u-h,p-d),_=Math.atan2(u-h,p-d),m=.03,f=new Dt(m,m,g,8),T=f.clone();T.rotateX(Math.PI/2),T.rotateY(_),T.translate((h+u)/2,l+.18,(d+p)/2),e.push(T);const b=f.clone();b.rotateX(Math.PI/2),b.rotateY(_),b.translate((h+u)/2-.15*Math.cos(_),l-.12,(d+p)/2+.15*Math.sin(_)),e.push(b);const M=f.clone();M.rotateX(Math.PI/2),M.rotateY(_),M.translate((h+u)/2+.15*Math.cos(_),l-.12,(d+p)/2-.15*Math.sin(_)),e.push(M),f.dispose()};n(-5.5,8.25,-9.2,-5.5,11),n(5.5,8.25,-9.2,5.5,11),n(-11.5,8.25,-2,11.5,-2),n(-11.5,8.25,4.5,11.5,4.5),n(-11.5,8.25,9.8,11.5,9.8);const s=Tn(e);e.forEach(h=>h.dispose());const r=new O(s,t);r.castShadow=!0,this.group.add(r);const a=new mt({color:1118746,metalness:.9,roughness:.3}),o=new $t({color:61695});this.wallWashNeonMats.push(o),[{x:-4,z:-2,rotX:Math.PI/4,rotY:Math.PI/6},{x:4,z:-2,rotX:Math.PI/4,rotY:-Math.PI/6},{x:-3,z:4.5,rotX:Math.PI/6,rotY:Math.PI/4},{x:3,z:4.5,rotX:Math.PI/6,rotY:-Math.PI/4},{x:0,z:4.5,rotX:0,rotY:0}].forEach(h=>{const l=new Gt;l.position.set(h.x,8,h.z),l.rotation.set(h.rotX,h.rotY,0);const d=new O(new Dt(.14,.18,.45,16),a);d.rotation.x=Math.PI/2,l.add(d);const u=new O(new ra(.13,16),o);u.position.z=.23,l.add(u),this.group.add(l)})}createWindowAndSkyline(){const t=new Gt;t.position.set(0,0,-14);const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#03040a"),s.addColorStop(.4,"#0e081e"),s.addColorStop(.75,"#1e0836"),s.addColorStop(.92,"#ff0055"),s.addColorStop(1,"#ffaa00"),n.fillStyle=s,n.fillRect(0,0,1024,512),n.fillStyle="rgba(0, 240, 255, 0.12)",n.beginPath(),n.arc(512,450,280,0,Math.PI*2),n.fill();const r=new $e(e),a=new O(new pe(54,26),new $t({map:r}));a.position.set(0,7.5,-4.5),t.add(a);const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#06070d",c.fillRect(0,0,512,512);const h=["#00f0ff","#ff007f","#ffd700","#00ff88","#ffffff","#ff6600"];for(let R=12;R<500;R+=20)for(let E=12;E<500;E+=16)Math.random()<.42&&(c.fillStyle=h[Math.floor(Math.random()*h.length)],c.shadowColor=c.fillStyle,c.shadowBlur=6,c.fillRect(E,R,8,12));const l=new $e(o);l.wrapS=Ni,l.wrapT=Ni,l.repeat.set(1.5,3);const d=new mt({color:1119007,map:l,roughness:.3,metalness:.7,emissive:1119007,emissiveIntensity:.6}),u=[61695,16711807,16764928,65416,16777215],p=[];for(let R=0;R<55;R++){const E=.9+Math.random()*1.8,y=4.5+Math.random()*9.5,C=.9+Math.random()*1.8,G=-22+R*.8+(Math.random()-.5)*.4,k=(Math.random()-.5)*4,W=new at(E,y,C);W.applyMatrix4(new Jt().makeTranslation(G,y/2-1,k)),p.push(W);const Y=new zi(.08,8,8),X=u[Math.floor(Math.random()*u.length)],Z=new $t({color:X}),z=new O(Y,Z);z.position.set(G,y-.9,k),t.add(z),this.cityBuildings.push(z)}const g=Tn(p);p.forEach(R=>R.dispose()),t.add(new O(g,d));const _=(R,E,y,C,G)=>{const k=document.createElement("canvas");k.width=512,k.height=128;const W=k.getContext("2d");W.fillStyle="#060812",W.fillRect(0,0,512,128),W.font="900 48px Orbitron, sans-serif",W.fillStyle=G,W.shadowColor=G,W.shadowBlur=20,W.textAlign="center",W.textBaseline="middle",W.fillText(R,256,64);const Y=new $e(k),X=new O(new pe(3.6,.9),new $t({map:Y,transparent:!0,opacity:.9}));X.position.set(E,y,C),t.add(X)};_("⚡ JMF 24/7 ⚡",-6,9.5,-2,"#00f0ff"),_("● CYBER RADIO ●",5.5,10.2,-1.5,"#ff007f"),_("NEO TOKYO",0,11.5,-3,"#00ff88");const m=new $t({color:61695,transparent:!0,opacity:.8}),f=new $t({color:16711765,transparent:!0,opacity:.8});for(let R=0;R<6;R++){const E=new O(new Dt(.04,.04,3.2,8),R%2===0?m:f);E.rotation.z=Math.PI/2;const y=3.5+R*1.1,C=-18+R*6;E.position.set(C,y,-1+R%3*.8),t.add(E),this.skywayTrails.push({mesh:E,speed:.08+R%3*.04,dir:R%2===0?1:-1})}const T=new mt({color:1710886,metalness:.9,roughness:.2}),b=[-4.5,-1.5,1.5,4.5].map(R=>{const E=new at(.14,7,.2);return E.applyMatrix4(new Jt().makeTranslation(R,4.7,-9.8)),E}),M=new at(12,.14,.2);M.applyMatrix4(new Jt().makeTranslation(0,5,-9.8)),b.push(M);const D=Tn(b);b.forEach(R=>R.dispose()),this.group.add(new O(D,T));const w=new Ss({color:1122867,transparent:!0,opacity:.25,roughness:.1,metalness:.1,transmission:.6,ior:1.5}),A=new O(new pe(12,7),w);A.position.set(0,4.7,-9.75),this.group.add(A),this.group.add(t)}createClubArtAndPosters(){const t=(e,n,s,r,a,o,c,h)=>{const l=document.createElement("canvas");l.width=512,l.height=768;const d=l.getContext("2d"),u=d.createLinearGradient(0,0,512,768);u.addColorStop(0,"#06070e"),u.addColorStop(1,"#12081f"),d.fillStyle=u,d.fillRect(0,0,512,768),d.strokeStyle=c,d.lineWidth=4,d.shadowColor=c,d.shadowBlur=15,d.beginPath(),d.arc(256,340,160,0,Math.PI*2),d.stroke(),d.strokeStyle=h,d.lineWidth=2,d.beginPath();for(let T=0;T<12;T++)d.moveTo(96,440+T*16),d.lineTo(416,440+T*16);d.stroke(),d.font="900 36px Orbitron, sans-serif",d.fillStyle="#ffffff",d.textAlign="center",d.fillText(e,256,120),d.font='700 20px "Space Grotesk", sans-serif',d.fillStyle=c,d.fillText(n,256,170),d.font="800 16px Orbitron, sans-serif",d.fillStyle=h,d.fillText("JMF 24/7 SOUND SYSTEM",256,710);const p=new $e(l),g=new mt({map:p,emissive:1118498,emissiveIntensity:.6,roughness:.2,metalness:.8});this.artLightboxMats.push(g);const _=new O(new pe(2,3),g);_.position.set(s,r,a),_.rotation.y=o,this.group.add(_);const m=new $t({color:c});this.wallWashNeonMats.push(m);const f=new O(new at(2.08,3.08,.06),new mt({color:395020}));f.position.set(s+(o>0?-.04:.04),r,a),f.rotation.y=o,this.group.add(f)};t("UNDERGROUND","LIVE ELECTRONIC SETS",-11.72,4.8,-4.5,Math.PI/2,"#00f0ff","#ff007f"),t("ACID MATRIX","ANALOG MODULAR SYNTH",-11.72,4.8,1.2,Math.PI/2,"#00ff88","#ffd700"),t("CYBER SESSIONS","TOKYO NIGHTS & BASS",11.72,4.8,-4.5,-Math.PI/2,"#ff007f","#00f0ff"),t("DEEP SUB","PRO HARDWARE BROADCAST",11.72,4.8,1.2,-Math.PI/2,"#9d4edd","#00f0ff")}createAcousticPanels(){const t=new mt({color:1579044,roughness:.95,metalness:.05}),e=(n,s)=>{const r=new Gt;for(let a=0;a<3;a++)for(let o=0;o<6;o++){const c=new O(new at(.9,.9,.12),t);c.position.set((o-2.5)*1.2,3+a*1.2,0),c.rotation.z=(a+o)%2===0?0:Math.PI/4,r.add(c)}r.position.set(n,0,1),r.rotation.y=s,this.group.add(r)};e(-11.75,Math.PI/2),e(11.75,-Math.PI/2)}createNeonSigns(){const t=new O(new at(5.2,1.4,.1),new mt({color:328968,roughness:.5}));t.position.set(0,8,-9.5),this.group.add(t);const e=new $t({color:16711748}),n=new O(new at(5,.05,.04),e);n.position.set(0,8.6,-9.42);const s=new O(new at(5,.05,.04),e);s.position.set(0,7.4,-9.42),this.group.add(n,s);const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="#050508",a.fillRect(0,0,1024,256),a.font="900 80px Orbitron, sans-serif",a.fillStyle="#00f0ff",a.shadowColor="#00f0ff",a.shadowBlur=24,a.textAlign="center",a.textBaseline="middle",a.fillText("JMF RADIO",512,90),a.font="800 36px Orbitron, sans-serif",a.fillStyle="#ff0044",a.shadowColor="#ff0044",a.shadowBlur=18,a.fillText("● 24/7 LIVE ON AIR ●",512,180);const o=new $e(r),c=new $t({map:o,transparent:!0}),h=new O(new pe(4.8,1.15),c);h.position.set(0,8,-9.42),this.group.add(h);const l=new $t({color:61695}),d=[];for(let p=0;p<9;p++){const g=.6+Math.sin(p*.7)*.9,_=new at(.08,g,.05);_.applyMatrix4(new Jt().makeTranslation(-11.7,6,-3+p*.45)),d.push(_)}const u=Tn(d);d.forEach(p=>p.dispose()),this.group.add(new O(u,l)),this.neonElements.push(l)}createVIPLounge(){const t=new Gt;t.position.set(-7.5,0,3.5),t.rotation.y=Math.PI/2;const e=new mt({color:1446431,roughness:.5,metalness:.2}),n=new mt({color:10309341,roughness:.6}),s=new O(new at(4.2,.45,1.1),e);s.position.set(0,.225,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new O(new at(4.2,.9,.35),e);r.position.set(0,.8,-.4),t.add(r);const a=new O(new at(.35,.7,1.1),e);a.position.set(-2,.6,0),t.add(a);for(let b=0;b<4;b++){const M=new O(new at(.5,.45,.18),n);M.position.set(-1.4+b*.9,.55,-.25),M.rotation.x=-Math.PI/16,t.add(M)}const o=new O(new at(3,.45,1.1),e);o.position.set(0,.225,2.4),o.castShadow=!0,t.add(o);const c=new O(new at(3,.9,.35),e);c.position.set(0,.8,2.8),t.add(c);const h=new Ss({color:1118498,transparent:!0,opacity:.6,roughness:.1,metalness:.3,transmission:.7}),l=new O(new at(2.4,.05,1),h);l.position.set(0,.45,1.2),t.add(l);const d=new O(new at(2.2,.4,.8),new mt({color:658194,roughness:.3,metalness:.8}));d.position.set(0,.2,1.2),t.add(d);const u=new Dt(.08,.1,.2,16),p=new mt({color:16711807,emissive:16711807,emissiveIntensity:.8,roughness:.1}),g=new O(u,p);g.position.set(0,.58,1.2),t.add(g),this.vipLights.push(p);const _=document.createElement("canvas");_.width=512,_.height=128;const m=_.getContext("2d");m.fillStyle="#05060a",m.fillRect(0,0,512,128),m.font="900 48px Orbitron, sans-serif",m.fillStyle="#ffd000",m.shadowColor="#ffd000",m.shadowBlur=16,m.textAlign="center",m.textBaseline="middle",m.fillText("VIP LOUNGE",256,64);const f=new $e(_),T=new O(new pe(2.4,.6),new $t({map:f}));T.position.set(0,3.2,-.6),t.add(T),this.group.add(t)}createStageScreen(){const t=new Gt;t.position.set(0,0,11.2),this.stageCanvas=document.createElement("canvas"),this.stageCanvas.width=1024,this.stageCanvas.height=512,this.stageCtx=this.stageCanvas.getContext("2d"),this.stageTexture=new $e(this.stageCanvas),this.stageTexture.minFilter=ke,this.stageTexture.magFilter=ke;const e=new pe(10.5,5.2),n=new $t({map:this.stageTexture,side:dn}),s=new O(e,n);s.position.set(0,4.4,-.1),s.rotation.y=Math.PI,t.add(s);const r=new mt({color:460815,metalness:.9,roughness:.2}),a=new O(new at(11,.2,.3),r);a.position.set(0,7.1,0);const o=new O(new at(11,.3,.3),r);o.position.set(0,1.7,0);const c=new O(new at(.3,5.6,.3),r);c.position.set(-5.35,4.4,0);const h=new O(new at(.3,5.6,.3),r);h.position.set(5.35,4.4,0),t.add(a,o,c,h);const l=new $t({color:61695}),d=new O(new at(10.7,.04,.04),l);d.position.set(0,7,-.15),t.add(d);const u=new O(new at(12,.5,2.5),new mt({color:855576,metalness:.7,roughness:.3}));u.position.set(0,.25,-1),t.add(u);const p=(g,_,m)=>{const f=document.createElement("canvas");f.width=512,f.height=128;const T=f.getContext("2d");T.fillStyle="#05060d",T.fillRect(0,0,512,128),T.font="900 44px Orbitron, sans-serif",T.fillStyle=m,T.shadowColor=m,T.shadowBlur=18,T.textAlign="center",T.textBaseline="middle",T.fillText(g,256,64);const b=new $e(f),M=new O(new pe(3.6,.9),new $t({map:b}));M.position.set(_,6.2,3.5),M.rotation.y=_<0?Math.PI/2:-Math.PI/2,this.group.add(M)};p("VIP LOUNGE",-11.75,"#ff007f"),p("COCKTAIL BAR",11.75,"#00f0ff"),this.group.add(t),this.drawInitialStageScreen()}setTrackInfo(t,e,n,s){this.currentTrack=t,this.nextTrack=e,this.elapsedTime=n||0,this.duration=s||180}drawInitialStageScreen(){if(!this.stageCtx)return;const t=this.stageCtx;t.fillStyle="#05060c",t.fillRect(0,0,1024,512),t.font="900 76px Orbitron, sans-serif",t.fillStyle="#ffffff",t.shadowColor="#00f0ff",t.shadowBlur=24,t.textAlign="center",t.textBaseline="middle",t.fillText("JMF RADIO",512,180),t.font='700 22px "Space Grotesk", sans-serif',t.fillStyle="#00f0ff",t.shadowColor="#00f0ff",t.shadowBlur=12,t.fillText("● 24/7 PRO VIRTUAL DJ ● ON AIR ●",512,240),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}updateStageScreen(t,e){var W,Y,X,Z;if(!this.stageCtx)return;const n=this.stageCtx,s=1024,r=512,a=performance.now();this.vjMode===void 0&&(this.vjMode=0,this.lastVJSwitch=a,this.spectrumPeaks=new Float32Array(48),this.scrollTickerX=0,this.radialAngle=0),(a-this.lastVJSwitch>18e3||t.bass>.88&&Math.random()<.03&&a-this.lastVJSwitch>5e3)&&(this.vjMode=(this.vjMode+1)%5,this.lastVJSwitch=a);const o=e?"#"+e.primary.toString(16).padStart(6,"0"):"#00f0ff",c=e?"#"+e.secondary.toString(16).padStart(6,"0"):"#ff007f",h=e?"#"+e.accent.toString(16).padStart(6,"0"):"#9d4edd";n.fillStyle="rgba(5, 6, 14, 0.28)",n.fillRect(0,0,s,r);const l=t.bass||0,d=t.beat||0,u=t.treble||0,p=t.rawArray||[],g=a*.002;if(this.vjMode===0){n.lineWidth=3+l*4;for(let z=0;z<4;z++){n.beginPath(),n.strokeStyle=z%2===0?o:c,n.shadowColor=n.strokeStyle,n.shadowBlur=14+l*16;for(let tt=0;tt<s;tt+=16){const it=p[tt/s*32|0]||0,gt=r/2+Math.sin(tt*.015+g*2+z)*(40+l*70)+it/255*50;tt===0?n.moveTo(tt,gt):n.lineTo(tt,gt)}n.stroke()}}else if(this.vjMode===1){const tt=(s-120)/40;for(let it=0;it<40;it++){const It=(p[it%p.length]||0)/255*260*(1+l*.5);this.spectrumPeaks[it]=Math.max(It,(this.spectrumPeaks[it]||0)*.92);const jt=60+it*tt,$=r-60-this.spectrumPeaks[it],et=n.createLinearGradient(0,$,0,r-60);et.addColorStop(0,c),et.addColorStop(.5,o),et.addColorStop(1,"rgba(0, 240, 255, 0.1)"),n.fillStyle=et,n.shadowColor=o,n.shadowBlur=10,n.fillRect(jt+2,$,tt-4,this.spectrumPeaks[it])}}else if(this.vjMode===2){n.strokeStyle=o,n.shadowColor=o,n.shadowBlur=12,n.lineWidth=1.5;const z=r*.45;for(let tt=-s;tt<s*2;tt+=64)n.beginPath(),n.moveTo(s/2,z),n.lineTo(tt+Math.sin(g)*40,r),n.stroke();for(let tt=z;tt<r;tt+=24+l*12)n.beginPath(),n.moveTo(0,tt),n.lineTo(s,tt),n.stroke()}else if(this.vjMode===3){this.radialAngle+=.02+l*.04;const z=s/2,tt=r/2;for(let it=0;it<5;it++){const gt=(it*50+g*80%250)*(1+l*.3);n.beginPath(),n.arc(z,tt,gt,0,Math.PI*2),n.strokeStyle=it%2===0?o:c,n.shadowColor=n.strokeStyle,n.shadowBlur=16,n.lineWidth=2+d*4,n.stroke()}}else{n.lineWidth=3,n.strokeStyle=h,n.shadowColor=h,n.shadowBlur=20,n.beginPath();for(let z=0;z<Math.PI*2;z+=.05){const tt=s/2+Math.sin(z*3+g*3)*(180+l*60),it=r/2+Math.cos(z*2+g*2)*(120+u*50);z===0?n.moveTo(tt,it):n.lineTo(tt,it)}n.closePath(),n.stroke()}n.fillStyle="rgba(5, 6, 12, 0.75)",n.fillRect(0,0,s,52),n.fillStyle="#ff0055",n.shadowColor="#ff0055",n.shadowBlur=12,n.beginPath(),n.arc(32,26,7+d*3,0,Math.PI*2),n.fill(),n.font="800 14px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowBlur=0,n.textAlign="left",n.textBaseline="middle",n.fillText("ON AIR  |  JMF RADIO 24/7",52,26);const _=(W=this.currentTrack)==null?void 0:W.genre,m=_?(_.name||"ALL STYLES").replace(/^[\p{Emoji}\p{Extended_Pictographic}\uFE0F\s]+/u,"").trim():"ALL STYLES",f=(_==null?void 0:_.color)||"#00f0ff";n.font="900 13px Orbitron, sans-serif";const T=n.measureText(m).width+24,b=512-T/2;n.fillStyle="rgba(0, 0, 0, 0.6)",n.strokeStyle=f,n.lineWidth=1.5,n.shadowColor=f,n.shadowBlur=10,n.beginPath(),n.roundRect(b,12,T,28,14),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.textAlign="center",n.fillText(m,512,26);const M=((Y=this.currentTrack)==null?void 0:Y.bpm)||128,D=Math.floor(this.elapsedTime/60),w=Math.floor(this.elapsedTime%60).toString().padStart(2,"0"),A=Math.floor(this.duration/60),R=Math.floor(this.duration%60).toString().padStart(2,"0");n.font="700 13px Orbitron, sans-serif",n.fillStyle="#00f0ff",n.shadowColor="#00f0ff",n.shadowBlur=8,n.textAlign="right",n.fillText(`BPM: ${M}  |  ${D}:${w} / ${A}:${R}`,s-24,26);const E=(X=this.currentTrack)!=null&&X.artist?this.currentTrack.artist.toUpperCase():"JMF RESIDENT DJ",y=(Z=this.currentTrack)!=null&&Z.title?this.currentTrack.title.toUpperCase():"LIVE AUDIO BROADCAST";n.save(),n.translate(512,135);const C=1+(t.bass||0)*.08;n.scale(C,C),n.font="900 42px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowColor=(t.bass||0)>.65?c:h,n.shadowBlur=20+(t.bass||0)*20,n.textAlign="center",n.textBaseline="middle",n.fillText(E.length>28?E.substring(0,26)+"...":E,0,0),n.restore(),n.save(),n.font='700 26px "Space Grotesk", sans-serif',n.fillStyle=h,n.shadowColor=h,n.shadowBlur=14,n.textAlign="center",n.textBaseline="middle";const G=n.measureText(y).width;G>800?(this.scrollTickerX=(this.scrollTickerX-1.2)%(G+200),n.fillText(y,512+this.scrollTickerX,195),n.fillText(y,512+this.scrollTickerX+G+200,195)):n.fillText(y,512,195),n.restore();const k=["CYBER WAVES","SPECTRUM PEAKS","HYPERSPACE GRID","RADIAL ORBIT","VECTOR SCOPE"];n.font="700 11px Orbitron, sans-serif",n.fillStyle="rgba(148, 163, 184, 0.4)",n.shadowBlur=0,n.textAlign="left",n.fillText(`[ VJ: ${k[this.vjMode]} ]`,24,r-18),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}update(t,e){const n=performance.now()*.002,s=t?t.bass:0,r=t?t.beat:0;for(let a=0;a<this.cityBuildings.length;a++)this.cityBuildings[a].scale.setScalar(.8+.4*Math.sin(n*2+a));for(let a of this.skywayTrails)a.mesh.position.x+=a.speed*a.dir,a.dir>0&&a.mesh.position.x>22?a.mesh.position.x=-22:a.dir<0&&a.mesh.position.x<-22&&(a.mesh.position.x=22);if(e){for(let a of this.vipLights)a.emissive.setHex(e.accent||16711807),a.emissiveIntensity=.5+s*1.5;for(let a of this.columnLedMats)a.color.setHex(e.primary||61695);for(let a of this.wallWashNeonMats)a.opacity=.45+s*.45+r*.2,a.color&&e.primary&&a.color.setHex(e.primary);for(let a of this.artLightboxMats)a.emissiveIntensity=.4+s*.6+r*.4}this.updateStageScreen(t,e)}}class Jp{constructor(t){this.scene=t,this.group=new Gt,this.speakers=[],this.subCones=[],this.tweeters=[],this.eqLedBars=[],this.hornMaterials=[],this.init(),this.scene.add(this.group)}init(){this.createSpeakerTower(-3.4,0,-2.6,Math.PI/8),this.createSpeakerTower(3.4,0,-2.6,-Math.PI/8),this.createSubBassBin(-4.8,0,.2,Math.PI/6),this.createSubBassBin(4.8,0,.2,-Math.PI/6)}createSpeakerTower(t,e,n,s){const r=new Gt;r.position.set(t,e,n),r.rotation.y=s;const a=new mt({color:789780,roughness:.35,metalness:.5}),o=new O(new at(1.3,3.6,1.1),a);o.position.y=1.8,o.castShadow=!0,o.receiveShadow=!0,r.add(o);const c=new mt({color:1447972,roughness:.2,metalness:.7}),h=new O(new at(1.16,3.48,.08),c);h.position.set(0,1.8,.55),r.add(h);const l=this.createWooferCone(0,.95,.59,.44);r.add(l.group),this.subCones.push(l);const d=this.createWooferCone(0,2.05,.59,.38);r.add(d.group),this.subCones.push(d);const u=new mt({color:10309341,emissive:10309341,emissiveIntensity:.4,roughness:.15,metalness:.85});this.hornMaterials.push(u);const p=new Es(.34,.45,16,1,!0),g=new O(p,u);g.rotation.x=-Math.PI/2,g.position.set(0,3,.62),r.add(g);const _=new Dt(.12,.08,.2,16),m=new mt({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1,metalness:.9}),f=new O(_,m);f.rotation.x=Math.PI/2,f.position.set(0,3,.68),r.add(f),this.tweeters.push(f);const T=new $t({color:61695});for(let D=0;D<12;D++){const w=new O(new at(.04,.08,.02),T.clone());w.position.set(.61,.8+D*.18,.52),r.add(w),this.eqLedBars.push(w)}const b=new $t({color:61695}),M=new O(new at(.02,.35,.7),b);M.position.set(.66,3.2,0),r.add(M),this.group.add(r),this.speakers.push(r)}createSubBassBin(t,e,n,s){const r=new Gt;r.position.set(t,e,n),r.rotation.y=s;const a=new mt({color:658192,roughness:.4,metalness:.4}),o=new O(new at(1.6,.9,1.2),a);o.position.y=.45,o.castShadow=!0,o.receiveShadow=!0,r.add(o);const c=this.createWooferCone(-.42,.45,.61,.34),h=this.createWooferCone(.42,.45,.61,.34);r.add(c.group,h.group),this.subCones.push(c,h);const l=new Dt(.12,.12,.15,16),d=new mt({color:61695,emissive:61695,emissiveIntensity:.3}),u=new O(l,d);u.rotation.x=Math.PI/2,u.position.set(0,.45,.6),r.add(u),this.group.add(r)}createWooferCone(t,e,n,s){const r=new Gt;r.position.set(t,e,n);const a=new Ti(s,.035,16,32),o=new mt({color:1118485,roughness:.9}),c=new O(a,o);r.add(c);const h=new Es(s,.14,32,1,!0),l=new mt({color:2237488,roughness:.3,metalness:.4}),d=new O(h,l);d.rotation.x=-Math.PI/2,r.add(d);const u=new zi(s*.38,16,16),p=new mt({color:658192,roughness:.2,metalness:.8}),g=new O(u,p);return g.scale.z=.5,r.add(g),{group:r,coneMesh:d,cap:g,baseRadius:s}}update(t,e){const n=t?t.bass:0,s=t?t.beat:0,r=t?t.treble:0,a=t&&t.rawArray?t.rawArray:[],o=1+n*.45+s*.6,c=n*.09+s*.14;for(let l of this.subCones)l.group.scale.set(o,o,1+n*.9),l.cap.position.z=c;const h=.4+r*3;for(let l of this.tweeters)l.material.emissiveIntensity=Math.min(3.5,h),e&&e.primary&&l.material.emissive.setHex(e.primary);for(let l of this.hornMaterials)l.emissiveIntensity=.3+n*.8+s*.5,e&&e.accent&&l.emissive.setHex(e.accent);for(let l=0;l<this.eqLedBars.length;l++){const d=this.eqLedBars[l],u=l%12,p=a[u*2]||0;u/12<=p*1.3?u>9?d.material.color.setHex(16711748):u>6?d.material.color.setHex(16755200):d.material.color.setHex(e?e.primary:61695):d.material.color.setHex(1381920)}}}class Kp{constructor(t){this.scene=t,this.group=new Gt,this.turntables=[],this.mixerKnobs=[],this.vuLeds=[],this.djMesh=null,this.djHead=null,this.djLeftArm=null,this.djRightArm=null,this.djTorso=null,this.laptopCanvas=null,this.laptopTexture=null,this.laptopCtx=null,this.init(),this.scene.add(this.group)}init(){this.createDJBooth(),this.createTurntablesAndMixer(),this.createLaptop(),this.createDJAvatar()}createDJBooth(){const t=new mt({color:1316127,roughness:.3,metalness:.7}),e=new at(3.6,.12,1.4),n=new O(e,t);n.position.set(0,1.05,0),n.receiveShadow=!0,n.castShadow=!0,this.group.add(n);const s=new $t({color:61695}),r=new O(new at(3.62,.04,.04),s);r.position.set(0,1.05,.7),this.group.add(r);const a=new mt({color:657935,metalness:.9,roughness:.2}),c=[[-1.6,-.5],[-1.6,.5],[1.6,-.5],[1.6,.5]].map(([u,p])=>{const g=new Dt(.05,.05,1.05,12);return g.applyMatrix4(new Jt().makeTranslation(u,.525,p)),g}),h=Tn(c);c.forEach(u=>u.dispose());const l=new O(h,a);l.castShadow=!0,this.group.add(l);const d=new O(new at(3.4,.9,.04),new mt({color:855574,roughness:.5}));d.position.set(0,.525,.65),this.group.add(d)}createTurntablesAndMixer(){const t=new mt({color:1842473,roughness:.3,metalness:.6}),e=_=>{const m=new Gt;m.position.set(_,1.12,0);const f=new O(new at(.9,.06,.9),t);m.add(f);const T=new Gt;T.position.set(0,.04,0);const b=new Dt(.36,.36,.02,32),M=new mt({color:526348,roughness:.2,metalness:.8}),D=new O(b,M);T.add(D);const w=new Dt(.12,.12,.025,32),A=new mt({color:_<0?61695:16711807,emissive:_<0?61695:16711807,emissiveIntensity:.4}),R=new O(w,A);T.add(R),m.add(T);const E=new mt({color:13421772,metalness:.9,roughness:.1}),y=new O(new Dt(.04,.04,.04,16),E);y.position.set(.34,.06,-.32),m.add(y);const C=new O(new Dt(.012,.012,.42,8),E);C.rotation.z=Math.PI/2,C.rotation.y=-Math.PI/4,C.position.set(.2,.08,-.18),m.add(C);const G=new O(new Dt(.03,.03,.02,16),new $t({color:65416}));G.position.set(-.32,.04,.32),m.add(G),this.group.add(m),this.turntables.push({group:m,vinyl:T})};e(-1),e(1);const n=new Gt;n.position.set(0,1.12,0);const s=new O(new at(.8,.06,.9),new mt({color:1381920,roughness:.4,metalness:.5}));n.add(s),this.xFader=new O(new at(.06,.03,.04),new mt({color:16777215,roughness:.2})),this.xFader.position.set(0,.04,.28),n.add(this.xFader);const r=new Dt(.02,.022,.03,12),a=new mt({color:3355978,roughness:.3,metalness:.6}),o=[];for(let _ of[-.18,.18])for(let m=0;m<4;m++){const f=r.clone();f.applyMatrix4(new Jt().makeTranslation(_,.045,-.28+m*.12)),o.push(f)}const c=Tn(o);o.forEach(_=>_.dispose()),r.dispose();const h=new O(c,a);n.add(h),this.mixerKnobsMesh=h;const l=new at(.03,.015,.015),d=new $t({color:1122833}),u=[];for(let _ of[-.05,.05])for(let m=0;m<8;m++){const f=l.clone();f.applyMatrix4(new Jt().makeTranslation(_,.035,-.25+m*.05)),u.push(f)}const p=Tn(u);u.forEach(_=>_.dispose()),l.dispose();const g=new O(p,d);n.add(g),this.vuLedsMesh=g,this.group.add(n)}createLaptop(){const t=new Gt;t.position.set(1.45,1.25,-.3),t.rotation.y=-Math.PI/6;const e=new mt({color:2236979,metalness:.8}),n=new O(new Dt(.02,.02,.3,16),e);n.position.y=-.1,t.add(n);const s=new mt({color:3355972,metalness:.7,roughness:.3}),r=new O(new at(.55,.02,.38),s);t.add(r),this.laptopCanvas=document.createElement("canvas"),this.laptopCanvas.width=512,this.laptopCanvas.height=256,this.laptopCtx=this.laptopCanvas.getContext("2d"),this.laptopTexture=new $e(this.laptopCanvas);const a=new $t({map:this.laptopTexture}),o=new O(new at(.55,.35,.02),s);o.position.set(0,.17,-.18),o.rotation.x=-Math.PI/10,t.add(o);const c=new O(new pe(.52,.32),a);c.position.set(0,.17,-.168),c.rotation.x=-Math.PI/10,t.add(c),this.group.add(t)}createDJAvatar(){const t=new Gt;t.position.set(0,0,-.4);const e=new mt({color:1579304,roughness:.7,metalness:.1}),n=new mt({color:14659984,roughness:.5}),s=new mt({color:61695,emissive:61695,emissiveIntensity:.6,metalness:.8}),r=new mt({color:658194,roughness:.8}),a=new O(new Dt(.12,.1,.9,16),r);a.position.set(-.22,.45,0);const o=new O(new Dt(.12,.1,.9,16),r);o.position.set(.22,.45,0),t.add(a,o),this.djTorso=new Gt,this.djTorso.position.set(0,.9,0);const c=new O(new at(.65,.75,.4),e);c.position.y=.38,c.castShadow=!0,this.djTorso.add(c);const h=new O(new pe(.25,.25),new $t({color:61695,transparent:!0,opacity:.85}));h.position.set(0,.45,.21),this.djTorso.add(h),this.djHead=new Gt,this.djHead.position.set(0,.82,0);const l=new O(new Dt(.08,.09,.15,16),n);l.position.y=.05,this.djHead.add(l);const d=new at(.36,.4,.36),u=new O(d,n);u.position.y=.25,this.djHead.add(u);const p=new mt({color:61695,roughness:.4}),g=new O(new zi(.2,16,16,0,Math.PI*2,0,Math.PI/2),p);g.position.y=.4;const _=new O(new at(.25,.03,.2),p);_.position.set(0,.4,-.22),_.rotation.x=-Math.PI/16,this.djHead.add(g,_);const m=new O(new Ti(.24,.025,16,32,Math.PI),s);m.position.set(0,.38,0),m.rotation.z=Math.PI,this.djHead.add(m);const f=new O(new Dt(.08,.08,.05,16),s);f.rotation.z=Math.PI/2,f.position.set(-.21,.25,0);const T=new O(new Dt(.08,.08,.05,16),s);T.rotation.z=Math.PI/2,T.position.set(.21,.25,0),this.djHead.add(f,T),this.djTorso.add(this.djHead),this.djLeftArm=new Gt,this.djLeftArm.position.set(-.36,.65,0);const b=new O(new Dt(.08,.07,.38,16),e);b.position.set(-.15,-.15,.15),b.rotation.set(Math.PI/4,0,Math.PI/6),this.djLeftArm.add(b);const M=new O(new Dt(.065,.06,.38,16),n);M.position.set(-.35,-.28,.4),M.rotation.set(Math.PI/3,0,Math.PI/4),this.djLeftArm.add(M),this.djTorso.add(this.djLeftArm),this.djRightArm=new Gt,this.djRightArm.position.set(.36,.65,0);const D=new O(new Dt(.08,.07,.38,16),e);D.position.set(.12,-.15,.15),D.rotation.set(Math.PI/4,0,-Math.PI/8),this.djRightArm.add(D);const w=new O(new Dt(.065,.06,.38,16),n);w.position.set(.22,-.28,.38),w.rotation.set(Math.PI/3,0,-Math.PI/6),this.djRightArm.add(w),this.djTorso.add(this.djRightArm),t.add(this.djTorso),this.djMesh=t,this.group.add(t)}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat,o=t.rawArray||[];if(e&&this.turntables.length>0&&this.turntables.forEach(c=>{c.mesh?c.mesh.rotation.y+=.04:c.vinyl&&(c.vinyl.rotation.y+=.04)}),this.xFader&&t.crossfadeProgress!==void 0){const c=(t.crossfadeProgress-.5)*.3;this.xFader.position.x=Wo.lerp(this.xFader.position.x,c,.1)}if(this.djHead){const c=e?5:1.5,h=e?.08+r*.12+a*.15:.02;this.djHead.position.y=.82-Math.abs(Math.sin(s*c))*h,this.djHead.rotation.x=Math.sin(s*c)*(.08+r*.15),this.djHead.rotation.y=Math.sin(s*1.5)*.1}if(this.djTorso){const c=e?2.5:.8;this.djTorso.rotation.z=Math.sin(s*c)*(.03+r*.06),this.djTorso.position.y=.9+Math.cos(s*c*2)*(.01+r*.03)}this.djLeftArm&&e&&(this.djLeftArm.rotation.y=Math.sin(s*6)*(.15+r*.2),this.djLeftArm.position.z=Math.cos(s*6)*.05),this.djRightArm&&e&&(t.isCrossfading?(this.djRightArm.rotation.x=Math.PI/4+Math.sin(s*8)*.15,this.djRightArm.position.x=.3+(t.crossfadeProgress-.5)*.2):(this.djRightArm.rotation.x=Math.sin(s*3)*(.1+r*.15),this.djRightArm.rotation.y=Math.cos(s*2)*.12));for(let c=0;c<this.vuLeds.length;c++){const h=this.vuLeds[c],l=c%8/8,d=o[c*2]||0;e&&l<=d*1.4?l>.7?h.material.color.setHex(16711748):l>.5?h.material.color.setHex(16763904):h.material.color.setHex(65416):h.material.color.setHex(660490)}this.laptopCtx&&this.drawLaptopScreen(t,e)}drawLaptopScreen(t,e){const n=this.laptopCtx,s=this.laptopCanvas.width,r=this.laptopCanvas.height;n.fillStyle="#0e101a",n.fillRect(0,0,s,r),n.strokeStyle="rgba(255, 255, 255, 0.06)",n.lineWidth=1;for(let h=0;h<r;h+=32)n.beginPath(),n.moveTo(0,h),n.lineTo(s,h),n.stroke();const a=t.rawArray||[],o=s/32;for(let h=0;h<32;h++){const d=(e?a[h]||0:.05+.05*Math.sin(h*.5+performance.now()*.003))*(r*.7),u=n.createLinearGradient(0,r-d,0,r);u.addColorStop(0,"#00f0ff"),u.addColorStop(.6,"#9d4edd"),u.addColorStop(1,"#ff007f"),n.fillStyle=u,n.fillRect(h*o+2,r-d-20,o-4,d)}n.font="bold 18px sans-serif",n.fillStyle=t.isCrossfading?"#ff007f":"#00f0ff";const c=t.isCrossfading?`MIXING: DECK ${t.activeDeck} ➔ DECK ${t.activeDeck==="A"?"B":"A"} (${Math.round(t.crossfadeProgress*100)}%)`:`DECK ${t.activeDeck||"A"} ACTIVE // ON AIR`;n.fillText(c,16,30),n.font="14px monospace",n.fillStyle="#8a8d9b",n.fillText(`BPM: 128.0   VOL: ${Math.round(t.volume*100)}%   EQ: BASS SWAP ON`,16,52),this.laptopTexture.needsUpdate=!0}}const ar={cyber:{name:"Cyberpunk Neon",primary:61695,secondary:16711807,accent:10309341,ambient:1316136,spotlight:61695},sunset:{name:"Sunset Lo-Fi",primary:16739125,secondary:16237983,accent:15672124,ambient:2364698,spotlight:16753920},matrix:{name:"Emerald Matrix",primary:65416,secondary:47957,accent:8978176,ambient:662034,spotlight:65416},acid:{name:"Electric Blue",primary:3835647,secondary:8599788,accent:16711790,ambient:1053734,spotlight:3835647}};class Zp{constructor(t){this.scene=t,this.group=new Gt,this.currentTheme=ar.cyber,this.ambientLight=null,this.djSpotlight=null,this.danceFloorSpot=null,this.barLight=null,this.vipLight=null,this.leftFillPoint=null,this.rightFillPoint=null,this.strobeLight=null,this.particles=null,this.intensityMultiplier=1,this.strobeEnabled=!0,this.lasersEnabled=!0,this.fogEnabled=!0,this.laserSpeed=1,this.init(),this.scene.add(this.group)}init(){this.ambientLight=new Ip(this.currentTheme.ambient,1.4),this.group.add(this.ambientLight),this.djSpotlight=new Mo(this.currentTheme.spotlight,6,16,Math.PI/4,.4,1.5),this.djSpotlight.position.set(0,8.5,1.2),this.djSpotlight.target.position.set(0,1,0),this.djSpotlight.castShadow=!0,this.djSpotlight.shadow.mapSize.width=1024,this.djSpotlight.shadow.mapSize.height=1024,this.djSpotlight.shadow.camera.near=1,this.djSpotlight.shadow.camera.far=18,this.group.add(this.djSpotlight),this.group.add(this.djSpotlight.target),this.danceFloorSpot=new Mo(this.currentTheme.secondary,5,16,Math.PI/3,.5,1.2),this.danceFloorSpot.position.set(0,8.5,4.5),this.danceFloorSpot.target.position.set(0,0,4.5),this.group.add(this.danceFloorSpot),this.group.add(this.danceFloorSpot.target),this.barLight=new yn(this.currentTheme.secondary,3.5,10,2),this.barLight.position.set(6.8,4,3.5),this.group.add(this.barLight),this.vipLight=new yn(this.currentTheme.accent,3,10,2),this.vipLight.position.set(-7.5,3.8,3.5),this.group.add(this.vipLight),this.leftFillPoint=new yn(this.currentTheme.primary,3,12,2),this.leftFillPoint.position.set(-4.5,3.5,-2),this.group.add(this.leftFillPoint),this.rightFillPoint=new yn(this.currentTheme.secondary,3,12,2),this.rightFillPoint.position.set(4.5,3.5,-2),this.group.add(this.rightFillPoint),this.wallWashLeft=new yn(this.currentTheme.primary,4,16,2),this.wallWashLeft.position.set(-11,5,2),this.group.add(this.wallWashLeft),this.wallWashRight=new yn(this.currentTheme.secondary,4,16,2),this.wallWashRight.position.set(11,5,2),this.group.add(this.wallWashRight),this.wallWashBack=new yn(this.currentTheme.accent,4.5,14,2),this.wallWashBack.position.set(0,6.5,-9),this.group.add(this.wallWashBack),this.strobeLight=new yn(16777215,0,18,2),this.strobeLight.position.set(0,7.5,4),this.group.add(this.strobeLight),this.laserBeams=[],this.createLaserBeams(),this.createAtmosphereParticles()}createLaserBeams(){this.laserGroup=new Gt,this.laserGroup.position.set(0,7.5,-2);const t=[61695,16711807,65416,10309341,16711765,61695],e=new $t({color:61695,transparent:!0,opacity:.65,blending:xs}),n=new Dt(.015,.06,18,8);n.translate(0,9,0),n.rotateX(Math.PI/2);for(let s=0;s<6;s++){const r=e.clone();r.color.setHex(t[s%t.length]);const a=new O(n,r);a.position.set((s-2.5)*1.4,0,0),this.laserBeams.push(a),this.laserGroup.add(a)}this.group.add(this.laserGroup)}setIntensityMultiplier(t){this.intensityMultiplier=Math.max(.1,Math.min(3,t))}setLaserSpeed(t){this.laserSpeed=Math.max(.2,Math.min(4,t))}setStrobeEnabled(t){this.strobeEnabled=t}setLasersEnabled(t){this.lasersEnabled=t,this.laserGroup&&(this.laserGroup.visible=t)}setFogEnabled(t){this.fogEnabled=t,this.particles&&(this.particles.visible=t)}createAtmosphereParticles(){const e=new Ae,n=new Float32Array(450*3);for(let r=0;r<450;r++)n[r*3]=(Math.random()-.5)*20,n[r*3+1]=Math.random()*8,n[r*3+2]=(Math.random()-.5)*20;e.setAttribute("position",new Oe(n,3));const s=new oc({color:61695,size:.05,transparent:!0,opacity:.5,blending:xs});this.particles=new Pp(e,s),this.group.add(this.particles)}setTheme(t){ar[t]&&(this.currentTheme=ar[t],this.ambientLight&&this.ambientLight.color.setHex(this.currentTheme.ambient),this.djSpotlight&&this.djSpotlight.color.setHex(this.currentTheme.spotlight),this.danceFloorSpot&&this.danceFloorSpot.color.setHex(this.currentTheme.secondary),this.barLight&&this.barLight.color.setHex(this.currentTheme.secondary),this.vipLight&&this.vipLight.color.setHex(this.currentTheme.accent),this.leftFillPoint&&this.leftFillPoint.color.setHex(this.currentTheme.primary),this.rightFillPoint&&this.rightFillPoint.color.setHex(this.currentTheme.secondary),this.wallWashLeft&&this.wallWashLeft.color.setHex(this.currentTheme.primary),this.wallWashRight&&this.wallWashRight.color.setHex(this.currentTheme.secondary),this.wallWashBack&&this.wallWashBack.color.setHex(this.currentTheme.accent),this.particles&&this.particles.material.color.setHex(this.currentTheme.primary))}update(t){const e=t.bass,n=t.beat,s=t.treble,r=performance.now()*.001*this.laserSpeed,a=this.intensityMultiplier;if(this.djSpotlight&&(this.djSpotlight.intensity=(4+e*6+n*4)*a),this.danceFloorSpot&&this.lasersEnabled&&(this.danceFloorSpot.intensity=(3+e*5+n*5)*a,this.danceFloorSpot.position.x=Math.sin(r*1.5)*2.5),this.laserBeams&&this.lasersEnabled){const o=.35+e*.25;for(let c=0;c<this.laserBeams.length;c++){const h=this.laserBeams[c],l=(c-2.5)*o,d=Math.sin(r*2.2+c*.6)*.28;h.rotation.x=Math.PI/4+Math.sin(r*1.8)*.22+d,h.rotation.y=l+Math.cos(r*1.2+c*.4)*.15,h.material.opacity=(.35+e*.45+n*.3)*a}}if(this.leftFillPoint&&(this.leftFillPoint.intensity=(2+e*4)*a),this.rightFillPoint&&(this.rightFillPoint.intensity=(2+s*4)*a),this.wallWashLeft&&(this.wallWashLeft.intensity=(3+e*3.5)*a),this.wallWashRight&&(this.wallWashRight.intensity=(3+s*3.5)*a),this.wallWashBack&&(this.wallWashBack.intensity=(3.5+n*4)*a),this.barLight&&(this.barLight.intensity=(2.5+e*2)*a),this.vipLight&&(this.vipLight.intensity=(2+n*2)*a),this.strobeLight&&(this.strobeEnabled&&n>.8&&e>.55?this.strobeLight.intensity=9*a:this.strobeLight.intensity*=.7),this.particles&&this.fogEnabled){const o=this.particles.geometry.attributes.position.array;for(let c=0;c<o.length;c+=3)o[c+1]+=.003+e*.008,o[c+1]>8&&(o[c+1]=.2);this.particles.geometry.attributes.position.needsUpdate=!0}}}class Qp{constructor(t){this.scene=t,this.group=new Gt,this.tiles=[],this.dancers=[],this.init(),this.scene.add(this.group)}init(){this.createLEDFloor(),this.createDancers()}createLEDFloor(){const a=new at(.95,.04,.95);for(let _=0;_<6;_++)for(let m=0;m<6;m++){const f=new mt({color:1118490,emissive:61695,emissiveIntensity:.2,roughness:.2,metalness:.8}),T=new O(a,f);T.position.set(-2.525+m*(.95+.05),.02,2.4+_*(.95+.05)),T.receiveShadow=!0,this.group.add(T),this.tiles.push({mesh:T,row:_,col:m})}const o=new $t({color:16711807}),c=.06,h=6*(.95+.05)+.1,l=6*(.95+.05)+.1,d=new O(new at(h,.06,c),o);d.position.set(0,.03,2.4-.95/2-.05);const u=new O(new at(h,.06,c),o);u.position.set(0,.03,2.4+l-.95/2-.05);const p=new O(new at(c,.06,l),o);p.position.set(-2.525-.95/2,.03,2.4+l/2-.95/2);const g=new O(new at(c,.06,l),o);g.position.set(2.525+.95/2,.03,2.4+l/2-.95/2),this.group.add(d,u,p,g)}createDancers(){const t=[{x:-1.8,z:3.2,style:0,speed:1},{x:-.6,z:3,style:1,speed:1.2},{x:.7,z:3.1,style:2,speed:.9},{x:1.9,z:3.3,style:3,speed:1.1},{x:-2.2,z:4.5,style:1,speed:1.15},{x:-1,z:4.4,style:3,speed:.95},{x:.2,z:4.6,style:0,speed:1.05},{x:1.4,z:4.3,style:2,speed:1.25},{x:2.3,z:4.7,style:1,speed:1},{x:-1.5,z:5.8,style:2,speed:1.1},{x:0,z:6,style:0,speed:.9},{x:1.6,z:5.9,style:3,speed:1.15}],e=[16711765,61695,16766720,10309341,65416,16737792,16711850,3835647],n=[14659984,9262372,13010498,14724201,15843965];t.forEach((s,r)=>{const a=e[r%e.length],o=n[r%n.length],c=this.buildDancerMesh(s.x,s.z,a,o,s.style,s.speed,r);this.dancers.push(c),this.group.add(c.group)})}buildDancerMesh(t,e,n,s,r,a,o){const c=new Gt;c.position.set(t,0,e),c.rotation.y=Math.PI+(Math.random()-.5)*1.2;const h=new mt({color:n,roughness:.5,metalness:.2}),l=new mt({color:789780,roughness:.8}),d=new mt({color:s,roughness:.6}),u=new $t({color:n}),p=new O(new Dt(.09,.07,.85,12),l);p.position.set(-.16,.42,0);const g=new O(new Dt(.09,.07,.85,12),l);g.position.set(.16,.42,0),c.add(p,g);const _=new Gt;_.position.set(0,.85,0);const m=new O(new at(.5,.65,.28),h);m.position.y=.32,m.castShadow=!0,_.add(m);const f=new O(new Ti(.12,.02,8,16),u);f.position.set(0,.58,.05),f.rotation.x=Math.PI/3,_.add(f);const T=new Gt;T.position.set(0,.7,0);const b=new O(new at(.28,.32,.28),d);b.position.y=.16,T.add(b);const M=new mt({color:1118488,roughness:.9}),D=new O(new at(.3,.12,.3),M);D.position.y=.3,T.add(D),_.add(T);const w=new Gt;w.position.set(-.28,.55,0);const A=new O(new Dt(.065,.055,.35,12),h);A.position.set(-.1,-.12,0),A.rotation.z=Math.PI/6;const R=new O(new Dt(.05,.045,.35,12),d);R.position.set(-.22,-.32,.1),R.rotation.x=Math.PI/4,w.add(A,R),_.add(w);const E=new Gt;E.position.set(.28,.55,0);const y=new O(new Dt(.065,.055,.35,12),h);y.position.set(.1,-.12,0),y.rotation.z=-Math.PI/6;const C=new O(new Dt(.05,.045,.35,12),d);return C.position.set(.22,-.32,.1),C.rotation.x=Math.PI/4,E.add(y,C),_.add(E),c.add(_),{group:c,torso:_,head:T,armL:w,armR:E,style:r,speed:a,seed:o,baseY:0}}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat,o=t.rawArray||[];for(let c=0;c<this.tiles.length;c++){const h=this.tiles[c],l=o[(h.row*5+h.col)%o.length]||0,d=Math.sin(s*3+h.row*.8+h.col*.8),u=e?Math.min(2.5,.2+r*1.8+l*1.5+d*.4):.15+.1*d;h.mesh.material.emissiveIntensity=u,n&&((h.row+h.col)%2===0?h.mesh.material.emissive.setHex(n.primary):h.mesh.material.emissive.setHex(n.secondary))}for(let c of this.dancers){const h=(e?4.5:1.2)*c.speed,l=s*h+c.seed,d=e?.08+r*.16+a*.2:.02;switch(c.group.position.y=Math.abs(Math.sin(l))*d,c.head.rotation.x=Math.sin(l*2)*(.15+r*.2),c.head.rotation.y=Math.cos(l*.8)*.2,c.torso.rotation.z=Math.sin(l)*(.08+r*.12),c.torso.rotation.y=Math.cos(l*.5)*.15,c.style){case 0:c.armL.rotation.x=-Math.PI/1.5+Math.sin(l*2)*.4,c.armR.rotation.x=-Math.PI/1.5+Math.cos(l*2)*.4,c.armL.rotation.z=-.4+Math.sin(l)*.3,c.armR.rotation.z=.4-Math.sin(l)*.3;break;case 1:c.armL.rotation.x=Math.sin(l)*.6,c.armR.rotation.x=-Math.sin(l)*.6,c.armL.rotation.y=Math.PI/4+Math.cos(l)*.3,c.armR.rotation.y=-Math.PI/4-Math.cos(l)*.3;break;case 2:c.armL.rotation.z=-Math.PI/3+Math.sin(l)*.5,c.armR.rotation.x=-Math.PI/2.5+Math.sin(l*2)*.3,c.group.rotation.y+=Math.sin(l*.5)*.005;break;case 3:c.armL.rotation.x=-Math.PI/3+Math.cos(l*2)*.5,c.armR.rotation.x=-Math.PI/3+Math.sin(l*2)*.5,c.group.position.x+=Math.sin(l*.5)*.002;break}}}}class tm{constructor(t){this.scene=t,this.group=new Gt,this.bartender=null,this.bottles=[],this.barLights=[],this.shaker=null,this.init(),this.scene.add(this.group)}init(){this.group.position.set(6.8,0,3.5),this.group.rotation.y=-Math.PI/2,this.createBarCounter(),this.createBackShelvesAndBottles(),this.createBarStools(),this.createBartender()}createBarCounter(){const t=new mt({color:1184542,roughness:.2,metalness:.8}),e=new at(5.2,.12,.8),n=new O(e,t);n.position.set(0,1.15,0),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const s=new $t({color:61695}),r=new O(new at(5.22,.04,.04),s);r.position.set(0,1.1,.4),this.group.add(r),this.barLights.push(s);const a=new mt({color:723986,roughness:.8,metalness:.1}),o=new O(new at(5,1.05,.6),a);o.position.set(0,.55,0),o.castShadow=!0,this.group.add(o);const c=new mt({color:14540253,metalness:.95,roughness:.1}),h=new O(new Dt(.025,.025,5,16),c);h.rotation.z=Math.PI/2,h.position.set(0,.2,.45),this.group.add(h);const l=new Ss({color:16777215,transparent:!0,opacity:.5,roughness:.1,metalness:.1,transmission:.8,ior:1.5});for(let d=0;d<4;d++){const u=new O(new Dt(.04,.03,.12,16),l);u.position.set(-1.8+d*1.2,1.25,.1),this.group.add(u)}}createBackShelvesAndBottles(){const t=new O(new at(5,3.2,.2),new mt({color:526608,roughness:.9}));t.position.set(0,2,-1.2),this.group.add(t);const e=new Ss({color:61695,transparent:!0,opacity:.4,roughness:.1,metalness:.2,transmission:.6}),n=[16711765,61695,16766720,65416,10309341,16746496,3835647,16711850],s={};n.forEach(l=>{s[l]=[]});for(let l=0;l<3;l++){const d=1.2+l*.7,u=new O(new at(4.8,.04,.35),e);u.position.set(0,d,-1.05),this.group.add(u);const p=new O(new at(4.8,.02,.02),new $t({color:l%2===0?61695:16711807}));p.position.set(0,d-.03,-1),this.group.add(p),this.barLights.push(p.material);for(let g=0;g<14;g++){const _=n[(l*5+g)%n.length],m=new Dt(.035,.035,.25,8);m.applyMatrix4(new Jt().makeTranslation(-2.1+g*.32,d+.14,-1.05)),s[_].push(m)}}n.forEach(l=>{const d=s[l];if(!d.length)return;const u=Tn(d);d.forEach(_=>_.dispose());const p=new mt({color:l,emissive:l,emissiveIntensity:.4,roughness:.1,metalness:.6,transparent:!0,opacity:.85}),g=new O(u,p);this.group.add(g),this.bottles.push(g)});const r=document.createElement("canvas");r.width=512,r.height=128;const a=r.getContext("2d");a.fillStyle="#05060a",a.fillRect(0,0,512,128),a.font="900 48px Orbitron, sans-serif",a.fillStyle="#ff007f",a.shadowColor="#ff007f",a.shadowBlur=16,a.textAlign="center",a.textBaseline="middle",a.fillText("🍸 JMF BAR 🍸",256,64);const o=new $e(r),c=new $t({map:o}),h=new O(new pe(2.4,.6),c);h.position.set(0,3.4,-1.08),this.group.add(h)}createBarStools(){new mt({color:1579304,roughness:.4,metalness:.5});const t=new mt({color:15658734,metalness:.95,roughness:.1}),e=new mt({color:16711765,roughness:.6});for(let n=0;n<4;n++){const s=new Gt,r=-1.6+n*1.1;s.position.set(r,0,.85);const a=new O(new Dt(.2,.22,.03,24),t);a.position.y=.015,s.add(a);const o=new O(new Dt(.025,.025,.75,16),t);o.position.y=.4,s.add(o);const c=new O(new Ti(.12,.015,8,24),t);c.rotation.x=Math.PI/2,c.position.y=.25,s.add(c);const h=new O(new Dt(.22,.22,.08,24),e);h.position.y=.78,h.castShadow=!0,s.add(h),this.group.add(s)}}createBartender(){const t=new Gt;t.position.set(0,0,-.6);const e=new mt({color:1118488,roughness:.6}),n=new mt({color:15724527,roughness:.5}),s=new mt({color:16711765}),r=new mt({color:14065016,roughness:.5}),a=new mt({color:657936,roughness:.8}),o=new mt({color:13421772,metalness:.95,roughness:.1}),c=new O(new Dt(.1,.08,.9,12),a);c.position.set(-.16,.45,0);const h=new O(new Dt(.1,.08,.9,12),a);h.position.set(.16,.45,0),t.add(c,h);const l=new Gt;l.position.set(0,.9,0);const d=new O(new at(.55,.72,.32),n);d.position.y=.36,l.add(d);const u=new O(new at(.56,.68,.33),e);u.position.y=.34,l.add(u);const p=new O(new at(.14,.06,.04),s);p.position.set(0,.68,.18),l.add(p);const g=new Gt;g.position.set(0,.78,0);const _=new O(new at(.3,.34,.3),r);_.position.y=.18,g.add(_);const m=new O(new at(.32,.12,.32),new mt({color:2037008,roughness:.8}));m.position.y=.32,g.add(m),l.add(g);const f=new Gt;f.position.set(-.3,.6,0);const T=new O(new Dt(.07,.06,.35,12),n);T.position.set(.1,-.1,.15),T.rotation.set(Math.PI/4,0,-Math.PI/6),f.add(T),l.add(f);const b=new Gt;b.position.set(.3,.6,0);const M=new O(new Dt(.07,.06,.35,12),n);M.position.set(-.1,-.1,.15),M.rotation.set(Math.PI/4,0,Math.PI/6),b.add(M),l.add(b);const D=new Gt;D.position.set(0,.52,.32);const w=new O(new Dt(.06,.045,.24,16),o),A=new O(new Dt(.04,.06,.08,16),o);A.position.y=.14,D.add(w,A),D.rotation.z=Math.PI/8,l.add(D),t.add(l),this.group.add(t),this.bartender={group:t,torso:l,head:g,shaker:D,armL:f,armR:b}}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat;if(this.bartender){const c=e?8:2,h=e?.08+r*.12:.02;this.bartender.shaker.position.y=.52+Math.sin(s*c)*h,this.bartender.shaker.rotation.z=Math.PI/8+Math.cos(s*c)*.3,this.bartender.armL.position.y=.6+Math.sin(s*c)*(h*.5),this.bartender.armR.position.y=.6+Math.sin(s*c)*(h*.5),this.bartender.head.rotation.x=Math.sin(s*4)*(.08+r*.1),this.bartender.torso.rotation.y=Math.sin(s*1.5)*.15}const o=.3+(e?r*1.2+a*.8:.1);for(let c of this.bottles)c.material.emissiveIntensity=o;if(n)for(let c of this.barLights)c.color.setHex(n.secondary||16711807)}}const Un={pov:{position:new L(0,1.38,-.65),target:new L(0,1.15,6)},booth:{position:new L(0,1.8,2.6),target:new L(0,1.4,0)},dance:{position:new L(0,2.8,8.6),target:new L(0,1.1,4)},bar:{position:new L(4,2.3,5.2),target:new L(6.8,1.4,3.5)},lounge:{position:new L(-4.2,2.3,5.2),target:new L(-7.5,1.2,3.5)},decks:{position:new L(0,2.6,1),target:new L(0,1.1,-.2)},room:{position:new L(7.5,4.8,9.5),target:new L(0,1.5,2.5)},cinematic:{position:new L(-6.5,3.2,7.5),target:new L(0,1.4,2)}};class em{constructor(t){this.container=t,this.width=t.clientWidth||window.innerWidth||1280,this.height=t.clientHeight||window.innerHeight||720,this.scene=new Rp,this.scene.background=new Vt(460555),this.scene.fog=new sa(460555,.035),this.camera=new Pe(50,this.width/this.height,.1,80),this.camera.position.copy(Un.booth.position),this.renderer=new Cp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=Po,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Co,this.container.appendChild(this.renderer.domElement),this.controls=new Np(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=1.5,this.controls.maxDistance=16,this.controls.target.copy(Un.booth.target),this.room=new $p(this.scene),this.soundSystem=new Jp(this.scene),this.dj=new Kp(this.scene),this.danceFloor=new Qp(this.scene),this.barArea=new tm(this.scene),this.lighting=new Zp(this.scene),this.activePreset="booth",this.targetCamPos=new L().copy(Un.booth.position),this.targetCamLook=new L().copy(Un.booth.target),this.isTransitioningCam=!1,this.isCinematicOrbit=!1,this.cinematicAngle=0,window.addEventListener("resize",()=>this.onResize())}setCameraPreset(t){Un[t]&&(this.activePreset=t,this.dj&&this.dj.djTorso&&(this.dj.djTorso.visible=t!=="pov"),t==="cinematic"?this.isCinematicOrbit=!0:(this.isCinematicOrbit=!1,this.targetCamPos.copy(Un[t].position),this.targetCamLook.copy(Un[t].target),this.isTransitioningCam=!0))}setTheme(t){this.lighting.setTheme(t)}onResize(){this.width=this.container.clientWidth||window.innerWidth,this.height=this.container.clientHeight||window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setTrackInfo(t,e,n,s){this.room&&this.room.setTrackInfo&&this.room.setTrackInfo(t,e,n,s)}update(t,e){const n=t||{bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126};if(this.isCinematicOrbit){this.cinematicAngle+=.0025;const s=8.5,r=3.5+Math.sin(this.cinematicAngle*1.2)*.8;this.camera.position.x=Math.cos(this.cinematicAngle)*s,this.camera.position.z=2.5+Math.sin(this.cinematicAngle)*s,this.camera.position.y=r,this.controls.target.set(0,1.3,2.5)}else this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.07),this.controls.target.lerp(this.targetCamLook,.07),this.camera.position.distanceTo(this.targetCamPos)<.02&&(this.isTransitioningCam=!1));this.controls.update(),this.room.update(n,this.lighting.currentTheme),this.soundSystem.update(n,this.lighting.currentTheme),this.dj.update(n,e,this.lighting.currentTheme),this.danceFloor.update(n,e,this.lighting.currentTheme),this.barArea.update(n,e,this.lighting.currentTheme),this.lighting.update(n),this.renderer.render(this.scene,this.camera)}}class nm{constructor(t,e){this.onTrackChange=t,this.onTransition=e,this.audioA=new Audio,this.audioB=new Audio,this.audioA.crossOrigin="anonymous",this.audioB.crossOrigin="anonymous",this.activeDeck="A",this.mixMode="dj",this.crossfadeDuration=8,this.isCrossfading=!1,this.crossfadeProgress=0,this.crossfadeStartTime=0,this.audioContext=null,this.analyser=null,this.masterGain=null,this.chGainA=null,this.xFaderGainA=null,this.eqLowA=null,this.eqMidA=null,this.eqHighA=null,this.filterSweepA=null,this.chGainB=null,this.xFaderGainB=null,this.eqLowB=null,this.eqMidB=null,this.eqHighB=null,this.filterSweepB=null,this.deckStates={A:{isPlaying:!1,cueTime:0,pitch:1,bpm:128,detectedBpm:128,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0},B:{isPlaying:!1,cueTime:0,pitch:1,bpm:126,detectedBpm:126,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0}},this.fxStates={A:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4},B:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4}},this.isPlaying=!1,this.isMuted=!1,this.volume=.8,this.currentTrack=null,this.nextTrack=null,this.elapsedTime=0,this.duration=180,this.queue=[],this.history=[],this.totalTracks=0,this.dataArray=null,this.freqData=null,this.lastBeatTime=0,this.beatIntervals=[],this.bpmCache=new Map,this.analysis={bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126},this.prevBass=0,this.isTransitionTriggered=!1,this.autoDjEnabled=!0,this.hotCues={A:[null,null,null,null],B:[null,null,null,null]},this.setupAudioListeners()}async initAudioContext(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t,this.masterGain=this.audioContext.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.audioContext.currentTime),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.82;const e=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(e),this.freqData=new Uint8Array(e),this.masterGain.connect(this.analyser),this.analyser.connect(this.audioContext.destination);const n=this.audioContext.createMediaElementSource(this.audioA);this.eqLowA=this.audioContext.createBiquadFilter(),this.eqLowA.type="lowshelf",this.eqLowA.frequency.value=120,this.eqLowA.gain.value=0,this.eqMidA=this.audioContext.createBiquadFilter(),this.eqMidA.type="peaking",this.eqMidA.frequency.value=1e3,this.eqMidA.Q.value=1,this.eqMidA.gain.value=0,this.eqHighA=this.audioContext.createBiquadFilter(),this.eqHighA.type="highshelf",this.eqHighA.frequency.value=8e3,this.eqHighA.gain.value=0,this.filterSweepA=this.audioContext.createBiquadFilter(),this.filterSweepA.type="lowpass",this.filterSweepA.frequency.value=22e3,this.fxFilterA=this.audioContext.createBiquadFilter(),this.fxFilterA.type="lowpass",this.fxFilterA.frequency.value=14e3,this.fxFilterA.Q.value=1.5,this.fxDelayA=this.audioContext.createDelay(2),this.fxDelayA.delayTime.value=.375,this.fxFeedbackA=this.audioContext.createGain(),this.fxFeedbackA.gain.value=.42,this.fxDryA=this.audioContext.createGain(),this.fxDryA.gain.value=1,this.fxWetA=this.audioContext.createGain(),this.fxWetA.gain.value=0,this.chGainA=this.audioContext.createGain(),this.chGainA.gain.value=1,this.xFaderGainA=this.audioContext.createGain(),this.xFaderGainA.gain.value=1,n.connect(this.eqLowA),this.eqLowA.connect(this.eqMidA),this.eqMidA.connect(this.eqHighA),this.eqHighA.connect(this.filterSweepA),this.filterSweepA.connect(this.fxDryA),this.fxDryA.connect(this.chGainA),this.filterSweepA.connect(this.fxFilterA),this.fxFilterA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxFeedbackA),this.fxFeedbackA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxWetA),this.fxWetA.connect(this.chGainA),this.chGainA.connect(this.xFaderGainA),this.xFaderGainA.connect(this.masterGain);const s=this.audioContext.createMediaElementSource(this.audioB);this.eqLowB=this.audioContext.createBiquadFilter(),this.eqLowB.type="lowshelf",this.eqLowB.frequency.value=120,this.eqLowB.gain.value=0,this.eqMidB=this.audioContext.createBiquadFilter(),this.eqMidB.type="peaking",this.eqMidB.frequency.value=1e3,this.eqMidB.Q.value=1,this.eqMidB.gain.value=0,this.eqHighB=this.audioContext.createBiquadFilter(),this.eqHighB.type="highshelf",this.eqHighB.frequency.value=8e3,this.eqHighB.gain.value=0,this.filterSweepB=this.audioContext.createBiquadFilter(),this.filterSweepB.type="lowpass",this.filterSweepB.frequency.value=22e3,this.fxFilterB=this.audioContext.createBiquadFilter(),this.fxFilterB.type="lowpass",this.fxFilterB.frequency.value=14e3,this.fxFilterB.Q.value=1.5,this.fxDelayB=this.audioContext.createDelay(2),this.fxDelayB.delayTime.value=.375,this.fxFeedbackB=this.audioContext.createGain(),this.fxFeedbackB.gain.value=.42,this.fxDryB=this.audioContext.createGain(),this.fxDryB.gain.value=1,this.fxWetB=this.audioContext.createGain(),this.fxWetB.gain.value=0,this.chGainB=this.audioContext.createGain(),this.chGainB.gain.value=1,this.xFaderGainB=this.audioContext.createGain(),this.xFaderGainB.gain.value=0,s.connect(this.eqLowB),this.eqLowB.connect(this.eqMidB),this.eqMidB.connect(this.eqHighB),this.eqHighB.connect(this.filterSweepB),this.filterSweepB.connect(this.fxDryB),this.fxDryB.connect(this.chGainB),this.filterSweepB.connect(this.fxFilterB),this.fxFilterB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxFeedbackB),this.fxFeedbackB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxWetB),this.fxWetB.connect(this.chGainB),this.chGainB.connect(this.xFaderGainB),this.xFaderGainB.connect(this.masterGain)}setupAudioListeners(){const t=e=>{!this.isCrossfading&&this.activeDeck===e&&this.skipNext()};this.audioA.addEventListener("ended",()=>t("A")),this.audioB.addEventListener("ended",()=>t("B")),this.audioA.addEventListener("error",e=>console.warn("Deck A audio error:",e)),this.audioB.addEventListener("error",e=>console.warn("Deck B audio error:",e))}async analyzeTrackBpm(t,e){if(!t)return;if(t.bpm&&t.bpm>=60&&t.bpm<=200)return this.deckStates[e].bpm=t.bpm,this.deckStates[e].detectedBpm=t.bpm,t.bpm;if(this.bpmCache.has(t.id)){const r=this.bpmCache.get(t.id);return this.deckStates[e].bpm=r,this.deckStates[e].detectedBpm=r,r}try{if(!this.audioContext)return;const a=await(await fetch(`/api/stream/${t.id}`,{headers:{Range:"bytes=0-350000"}})).arrayBuffer(),o=await this.audioContext.decodeAudioData(a),c=o.getChannelData(0),h=o.sampleRate,l=4,d=new Float32Array(Math.floor(c.length/l));for(let _=0;_<d.length;_++)d[_]=c[_*l];const u=[],p=.35,g=Math.floor(h/l*.3);for(let _=1;_<d.length-1;_++)d[_]>p&&d[_]>d[_-1]&&d[_]>d[_+1]&&(u.length===0||_-u[u.length-1]>g)&&u.push(_);if(u.length>=6){const _=[];for(let m=1;m<u.length;m++){let T=60/((u[m]-u[m-1])/(h/l));for(;T<90;)T*=2;for(;T>180;)T/=2;T>=90&&T<=180&&_.push(Math.round(T*2)/2)}if(_.length>0){_.sort((f,T)=>f-T);const m=_[Math.floor(_.length/2)];return this.deckStates[e].bpm=m,this.deckStates[e].detectedBpm=m,this.bpmCache.set(t.id,m),m}}}catch{}let n=0;for(let r=0;r<(t.title||"").length;r++)n=(n<<5)-n+t.title.charCodeAt(r),n|=0;const s=120+Math.abs(n)%18*1;return this.deckStates[e].bpm=s,this.deckStates[e].detectedBpm=s,this.bpmCache.set(t.id,s),s}async start(){try{await this.initAudioContext(),this.audioContext&&this.audioContext.state==="suspended"&&await this.audioContext.resume()}catch(t){console.warn("AudioContext initialization note:",t)}await this.fetchInitialData()}async fetchInitialData(){try{const e=await(await fetch("/api/track")).json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck("A",this.currentTrack,e.serverProgress||0),this.analyzeTrackBpm(this.currentTrack,"A"),this.nextTrack&&(this.loadDeck("B",this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,"B")),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error fetching initial track data:",t)}}loadDeck(t,e,n=0,s=!0){if(!e)return;const r=t==="A"?this.audioA:this.audioB;r.src=`/api/stream/${e.id}`,r.currentTime=n,r.playbackRate=this.deckStates[t].pitch,this.analyzeTrackBpm(e,t),s?r.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(a=>{console.warn(`Deck ${t} autoplay prevented:`,a)}):this.deckStates[t].isPlaying=!1}setEQ(t,e,n){if(!this.audioContext)return;const s=this.audioContext.currentTime;let r=null;t==="A"?e==="low"?r=this.eqLowA:e==="mid"?r=this.eqMidA:e==="high"&&(r=this.eqHighA):e==="low"?r=this.eqLowB:e==="mid"?r=this.eqMidB:e==="high"&&(r=this.eqHighB),r&&r.gain.setTargetAtTime(n,s,.05)}setEQPreset(t){this.currentEQPreset=t;const e={flat:{low:0,mid:0,high:0},bass:{low:6,mid:0,high:1},club:{low:4,mid:-1,high:3},vocal:{low:-2,mid:4,high:2},electronic:{low:5,mid:-2,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}setFilterSweep(t,e){if(!this.audioContext)return;const n=t==="A"?this.filterSweepA:this.filterSweepB;if(!n)return;const s=this.audioContext.currentTime;if(e<.48){n.type="lowpass";const r=200+Math.pow(e/.5,2)*21800;n.frequency.setTargetAtTime(r,s,.05)}else if(e>.52){n.type="highpass";const r=20+Math.pow((e-.5)/.5,2)*8e3;n.frequency.setTargetAtTime(r,s,.05)}else n.type="lowpass",n.frequency.setTargetAtTime(22e3,s,.05)}setChannelGain(t,e){if(!this.audioContext)return;const n=t==="A"?this.chGainA:this.chGainB;n&&n.gain.setValueAtTime(Math.max(0,Math.min(1.5,e)),this.audioContext.currentTime)}setFXType(t,e){if(!this.fxStates[t]||(this.fxStates[t].type=e,!this.audioContext))return;const n=this.audioContext.currentTime,s=t==="A"?this.fxDelayA:this.fxDelayB,r=t==="A"?this.fxFeedbackA:this.fxFeedbackB,a=t==="A"?this.fxFilterA:this.fxFilterB;!s||!r||!a||(e==="echo"?(s.delayTime.setTargetAtTime(.375,n,.05),r.gain.setTargetAtTime(.45,n,.05),a.frequency.setTargetAtTime(12e3,n,.05),a.type="lowpass"):e==="flanger"?(s.delayTime.setTargetAtTime(.006,n,.05),r.gain.setTargetAtTime(.65,n,.05),a.frequency.setTargetAtTime(18e3,n,.05),a.type="allpass"):e==="reverb"?(s.delayTime.setTargetAtTime(.09,n,.05),r.gain.setTargetAtTime(.7,n,.05),a.frequency.setTargetAtTime(8e3,n,.05),a.type="lowpass"):e==="filter"&&(s.delayTime.setTargetAtTime(.001,n,.05),r.gain.setTargetAtTime(0,n,.05),a.frequency.setTargetAtTime(1e4,n,.05),a.type="lowpass"))}setFXToggle(t,e){this.fxStates[t]&&(this.fxStates[t].enabled=e,this.updateFXDryWet(t))}setFXParam(t,e,n){if(!this.audioContext||!this.fxStates[t])return;const s=this.audioContext.currentTime,r=this.fxStates[t];r[e]=n;const a=t==="A"?this.fxDelayA:this.fxDelayB,o=t==="A"?this.fxFeedbackA:this.fxFeedbackB,c=t==="A"?this.fxFilterA:this.fxFilterB;if(e==="lpf"&&c){const h=200+Math.pow(n,2)*19800;if(c.frequency.setTargetAtTime(h,s,.05),r.type==="echo"&&a){const l=.1+n*.7;a.delayTime.setTargetAtTime(l,s,.05)}}else if(e==="res"&&c&&o){const h=.5+n*12;c.Q.setTargetAtTime(h,s,.05);const l=Math.min(.85,n*.85);o.gain.setTargetAtTime(l,s,.05)}else e==="drywet"&&this.updateFXDryWet(t)}updateFXDryWet(t){if(!this.audioContext||!this.fxStates[t])return;const e=this.audioContext.currentTime,n=this.fxStates[t],s=t==="A"?this.fxDryA:this.fxDryB,r=t==="A"?this.fxWetA:this.fxWetB;if(!(!s||!r))if(!n.enabled)s.gain.setTargetAtTime(1,e,.05),r.gain.setTargetAtTime(0,e,.05);else{const a=n.drywet!==void 0?n.drywet:.4;s.gain.setTargetAtTime(Math.max(.2,1-a*.6),e,.05),r.gain.setTargetAtTime(a,e,.05)}}setCrossfader(t){if(this.crossfadeProgress=Math.max(0,Math.min(1,t)),!this.audioContext||!this.xFaderGainA||!this.xFaderGainB)return;const e=Math.cos(this.crossfadeProgress*.5*Math.PI),n=Math.sin(this.crossfadeProgress*.5*Math.PI);this.xFaderGainA.gain.setValueAtTime(e,this.audioContext.currentTime),this.xFaderGainB.gain.setValueAtTime(n,this.audioContext.currentTime)}cueDeck(t){const e=t==="A"?this.audioA:this.audioB;e&&(e.paused?this.deckStates[t].cueTime=e.currentTime||0:(e.pause(),e.currentTime=this.deckStates[t].cueTime||0,this.deckStates[t].isPlaying=!1))}togglePlayDeck(t){const e=t==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),e.paused?(e.play(),this.deckStates[t].isPlaying=!0,this.isPlaying=!0):(e.pause(),this.deckStates[t].isPlaying=!1),this.deckStates[t].isPlaying}setPitch(t,e){const n=1+e/100,s=t==="A"?this.audioA:this.audioB;s.playbackRate=Math.max(.5,Math.min(2,n)),this.deckStates[t].pitch=n}setEQPreset(t){const e={flat:{low:0,mid:0,high:0},bass:{low:5.5,mid:0,high:2},club:{low:4.5,mid:-2,high:3.5},vocal:{low:-3,mid:4,high:2},electronic:{low:5,mid:1,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}toggleAutoDj(){return this.autoDjEnabled=!this.autoDjEnabled,this.autoDjEnabled}triggerHotCue(t,e,n=!1){const s=t==="A"?this.audioA:this.audioB;if(!s)return null;const r=this.hotCues[t][e];return r===null||n?(this.hotCues[t][e]=s.currentTime||0,{action:"set",time:this.hotCues[t][e]}):(s.currentTime=r,s.paused&&s.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(()=>{}),{action:"jump",time:r})}toggleLoop(t,e){const n=t==="A"?this.audioA:this.audioB,s=this.deckStates[t];if(s.loopActive&&s.loopBeats===e)return s.loopActive=!1,!1;s.loopActive=!0,s.loopBeats=e,s.loopStart=n.currentTime;const r=60/(s.detectedBpm||128);return s.loopEnd=s.loopStart+e*r,!0}getAuthHeaders(){const t=localStorage.getItem("jmf_dj_key")||(typeof window<"u"?new URLSearchParams(window.location.search).get("dj_key"):null),e={"Content-Type":"application/json"};return t&&(e["x-dj-key"]=t),e}async triggerDJCrossfade(){if(this.isCrossfading)return;const t=this.activeDeck==="A"?"B":"A";if(!this.nextTrack)try{const e=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.track&&(this.nextTrack=n.track,this.queue=n.queue||[],this.totalTracks=n.totalTracks||0)}catch(e){console.warn("Error fetching next track for crossfade:",e)}this.nextTrack&&(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.loadDeck(t,this.nextTrack,0,!0),this.analyzeTrackBpm(this.nextTrack,t),this.onTransition&&this.onTransition(!0,this.activeDeck,t,this.nextTrack))}async crossfadeToDeck(t,e=5){if(this.isCrossfading||this.activeDeck===t)return;const n=t,s=t==="A"?"B":"A",r=n==="A"?this.audioA:this.audioB;if(r.paused||r.currentTime===0){const a=n==="A"?this.currentTrack:this.nextTrack||this.queue[0];a&&(this.loadDeck(n,a,0,!0),this.analyzeTrackBpm(a,n))}if(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.crossfadeDuration=e,this.onTransition){const a=n==="A"?this.currentTrack:this.nextTrack;this.onTransition(!0,s,n,a)}}setMixMode(t){this.mixMode=t,this.crossfadeDuration=t==="dj"?8:3}async setGenre(t){this.activeGenre=t;try{const e=await fetch("/api/genre/select",{method:"POST",headers:this.getAuthHeaders(),body:JSON.stringify({genre:t})});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.currentTrack&&(this.nextTrack=n.currentTrack,this.mixMode==="radio"?this.loadDeck(this.activeDeck,n.currentTrack,0,!0):this.triggerDJCrossfade()),await this.fetchStatus()}catch(e){console.warn("Error setting genre:",e)}}async fetchStatus(){try{const e=await(await fetch("/api/track")).json();e&&e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.warn("Error fetching status:",t)}}async fetchGenres(){try{return await(await fetch("/api/genres")).json()}catch{return{genres:[],activeGenre:"all"}}}togglePlay(){const t=this.activeDeck==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),t.paused?(t.play(),this.isPlaying=!0,this.deckStates[this.activeDeck].isPlaying=!0):(t.pause(),this.isPlaying=!1,this.deckStates[this.activeDeck].isPlaying=!1),this.isPlaying}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.audioContext&&this.masterGain.gain.setValueAtTime(this.isMuted?0:this.volume,this.audioContext.currentTime)}toggleMute(){return this.isMuted=!this.isMuted,this.setVolume(this.volume),this.isMuted}async skipNext(){try{const t=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();if(e.track){this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck);const n=this.activeDeck==="A"?"B":"A";this.nextTrack&&(this.loadDeck(n,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,n)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks)}}catch(t){console.error("Error skipping next track:",t)}}async skipPrev(){try{const t=await fetch("/api/prev",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error skipping prev track:",t)}}getActiveAudio(){return this.activeDeck==="A"?this.audioA:this.audioB}getAudioAnalysis(){if(!this.analyser||!this.isPlaying)return null;const t=this.deckStates[this.activeDeck];if(t.loopActive&&t.loopEnd>t.loopStart){const p=this.getActiveAudio();p.currentTime>=t.loopEnd&&(p.currentTime=t.loopStart)}const e=this.activeDeck==="A"?this.audioA:this.audioB;e.currentTime&&(this.elapsedTime=e.currentTime,e.duration&&!isNaN(e.duration)&&(this.duration=e.duration));const n=this.duration-this.elapsedTime;if(this.autoDjEnabled&&this.mixMode==="dj"&&n<=this.crossfadeDuration&&!this.isTransitionTriggered&&this.elapsedTime>5&&(this.isTransitionTriggered=!0,this.triggerDJCrossfade()),this.isCrossfading&&this.audioContext){const g=(performance.now()-this.crossfadeStartTime)/1e3,_=Math.min(1,g/this.crossfadeDuration);if(this.activeDeck==="A"?(this.setCrossfader(_),this.setFilterSweep("A",.5-.4*_),this.setFilterSweep("B",.1+.4*_)):(this.setCrossfader(1-_),this.setFilterSweep("B",.5-.4*_),this.setFilterSweep("A",.1+.4*_)),_>=1){this.isCrossfading=!1;const m=this.activeDeck,f=this.activeDeck==="A"?"B":"A",T=m==="A"?this.audioA:this.audioB;T.pause(),T.currentTime=0,this.deckStates[m].isPlaying=!1,this.activeDeck=f,this.currentTrack=this.nextTrack,this.isTransitionTriggered=!1,this.setFilterSweep("A",.5),this.setFilterSweep("B",.5),fetch("/api/next",{method:"POST"}).then(b=>b.json()).then(b=>{b.track&&(this.nextTrack=b.track,this.queue=b.queue||[],this.totalTracks=b.totalTracks||0,this.loadDeck(m,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,m),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,null,null,null))}).catch(b=>console.warn("Error preloading upcoming track on standby deck:",b)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,this.activeDeck,this.activeDeck,null)}}this.analyser.getByteFrequencyData(this.freqData),this.analyser.getByteTimeDomainData(this.dataArray);const s=this.freqData.length;let r=0;for(let p=1;p<=10;p++)r+=this.freqData[p];const a=r/2550;this.analysis.bass=a;let o=0;for(let p=11;p<=60;p++)o+=this.freqData[p];this.analysis.mids=o/12750;let c=0;for(let p=61;p<=180;p++)c+=this.freqData[p];this.analysis.treble=c/30600;let h=0;for(let p=0;p<s;p++)h+=this.freqData[p];this.analysis.volume=h/(s*255);const l=a-this.prevBass,d=performance.now()/1e3;if(l>.16&&a>.38){if(this.analysis.beat=1,this.lastBeatTime>0){const p=d-this.lastBeatTime;if(p>=.33&&p<=1.05){this.beatIntervals.push(p),this.beatIntervals.length>12&&this.beatIntervals.shift();const g=[...this.beatIntervals].sort((T,b)=>T-b),m=60/g[Math.floor(g.length/2)],f=this.deckStates[this.activeDeck].detectedBpm;this.deckStates[this.activeDeck].detectedBpm=f*.88+m*.12}}this.lastBeatTime=d}else this.analysis.beat*=.88;this.prevBass=a,this.analysis.rawArray=[];const u=Math.floor(s/32);for(let p=0;p<32;p++)this.analysis.rawArray.push(this.freqData[p*u]/255);return this.analysis.activeDeck=this.activeDeck,this.analysis.crossfadeProgress=this.crossfadeProgress,this.analysis.isCrossfading=this.isCrossfading,this.analysis.deckALevel=this.activeDeck==="A"?this.analysis.volume*1.4:this.isCrossfading?(1-this.crossfadeProgress)*this.analysis.volume:.02,this.analysis.deckBLevel=this.activeDeck==="B"?this.analysis.volume*1.4:this.isCrossfading?this.crossfadeProgress*this.analysis.volume:.02,this.analysis.bpmA=(this.deckStates.A.detectedBpm||128)*this.deckStates.A.pitch,this.analysis.bpmB=(this.deckStates.B.detectedBpm||126)*this.deckStates.B.pitch,this.analysis}update(){return this.getAudioAnalysis()}}class im{constructor(t,e,n,s,r,a,o){this.audioEngine=t,this.deckAWaveWrap=e,this.deckBWaveWrap=n,this.deckACanvas=s,this.deckBCanvas=r,this.radioWaveformCanvas=a,this.radioWaveformWrap=o,this.waveformProfileA=this.generateWaveformProfile("seed-a"),this.waveformProfileB=this.generateWaveformProfile("seed-b"),this.initWaveformSeeking()}generateWaveformProfile(t){let e=0;for(let a=0;a<t.length;a++)e=(e<<5)-e+t.charCodeAt(a),e|=0;const n=a=>{const o=Math.sin(e+a*12.9898)*43758.5453;return o-Math.floor(o)},s=[],r=120;for(let a=0;a<r;a++){const o=a/r;let c=.5;o<.12?c=.3+.35*(o/.12):o<.35?c=.75+.2*Math.sin(o*40):o<.45?c=.35+.15*Math.sin(o*20):o<.75?c=.88+.12*Math.sin(o*50):o<.85?c=.45+.2*Math.sin(o*30):c=.7*(1-(o-.85)/.15);const h=n(a),d=a%4===0||a%6===0?.25*h:.12*h,u=Math.max(.18,Math.min(1,c+d));s.push(u)}return s}drawWaveform(t,e,n,s,r){if(!t)return;const a=t.getContext("2d"),o=t.width,c=t.height,h=c/2;a.clearRect(0,0,o,c);const l=e.length,d=o/l,u=n*o,p=r?r.bass*4:0;for(let g=0;g<l;g++){const _=g*d,m=_<=u,T=Math.abs(_-u)<16&&m?p:0,b=e[g]*(c*.84)+T,M=Math.max(3,Math.min(c-2,b)),D=h-M/2;if(m)if(s==="A"){const w=a.createLinearGradient(0,D,0,D+M);w.addColorStop(0,"#ffffff"),w.addColorStop(.3,"#00f0ff"),w.addColorStop(.7,"#7928ca"),w.addColorStop(1,"#00f0ff"),a.fillStyle=w}else{const w=a.createLinearGradient(0,D,0,D+M);w.addColorStop(0,"#ffffff"),w.addColorStop(.3,"#ff007f"),w.addColorStop(.7,"#ffd000"),w.addColorStop(1,"#ff007f"),a.fillStyle=w}else a.fillStyle="rgba(90, 105, 140, 0.32)";a.fillRect(_+.5,D,Math.max(1.8,d-1),M)}a.fillStyle="#ffffff",a.shadowColor=s==="A"?"#00f0ff":"#ff007f",a.shadowBlur=8,a.fillRect(u-1,0,2,c),a.shadowBlur=0}initWaveformSeeking(){const t=(e,n)=>{e&&e.addEventListener("click",s=>{const r=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(s.clientX-r.left)/r.width)),o=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;o&&o.duration&&(o.currentTime=a*o.duration)})};t(this.deckAWaveWrap,"A"),t(this.deckBWaveWrap,"B")}}class sm{constructor(t,e,n,s,r,a,o,c,h,l,d,u,p,g,_,m,f){this.audioEngine=t,this.deckAJog=e,this.deckBJog=n,this.deckAJogBpm=s,this.deckBJogBpm=r,this.deckAJogPitch=a,this.deckBJogPitch=o,this.deckAPitch=c,this.deckBPitch=h,this.deckAPitchVal=l,this.deckBPitchVal=d,this.deckAPitchReset=u,this.deckBPitchReset=p,this.deckATempoPlus=g,this.deckATempoMinus=_,this.deckBTempoPlus=m,this.deckBTempoMinus=f,this.jogAngleA=0,this.jogAngleB=0,this.initJogWheelMouseControl(),this.initRotaryKnobs()}getJogAngleA(){return this.jogAngleA}getJogAngleB(){return this.jogAngleB}updateJogAngles(t,e,n){var s,r;if(e){const a=this.audioEngine.activeDeck,o=a==="A"||this.audioEngine.isCrossfading||((s=n==null?void 0:n.A)==null?void 0:s.isPlaying),c=a==="B"||this.audioEngine.isCrossfading||((r=n==null?void 0:n.B)==null?void 0:r.isPlaying);o&&(this.jogAngleA+=2.2,this.deckAJog&&(this.deckAJog.style.transform=`rotate(${this.jogAngleA}deg)`)),c&&(this.jogAngleB+=2.2,this.deckBJog&&(this.deckBJog.style.transform=`rotate(${this.jogAngleB}deg)`))}}initJogWheelMouseControl(){const t=(e,n)=>{if(!e)return;let s=!1,r=0,a=!1;const o=()=>{const u=e.getBoundingClientRect();return{x:u.left+u.width/2,y:u.top+u.height/2}},c=u=>{const p=o(),g=u.clientX!==void 0?u.clientX:u.touches&&u.touches[0]?u.touches[0].clientX:0,_=u.clientY!==void 0?u.clientY:u.touches&&u.touches[0]?u.touches[0].clientY:0;return Math.atan2(_-p.y,g-p.x)},h=u=>{u.preventDefault(),s=!0,r=c(u),e.classList.add("is-scratching");const p=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;a=p&&!p.paused,a&&p.pause(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d)},l=u=>{if(!s)return;u.preventDefault&&u.preventDefault();const p=c(u);let g=p-r;g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),r=p;const _=g*(180/Math.PI);n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;if(m&&m.duration){const f=g/(2*Math.PI)*1.8;m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+f))}},d=()=>{if(s){s=!1,e.classList.remove("is-scratching"),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",d),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d);const u=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;a&&u&&u.play().catch(p=>console.warn("Resume error after jog scratch:",p))}};e.addEventListener("mousedown",h),e.addEventListener("touchstart",h,{passive:!1}),e.addEventListener("wheel",u=>{u.preventDefault();const p=u.deltaY<0?1:-1,g=p*.35,_=p*12;n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;m&&m.duration&&(m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+g)))})};t(this.deckAJog,"A"),t(this.deckBJog,"B")}initRotaryKnobs(){document.querySelectorAll(".rotary-knob-component").forEach(e=>{const n=e.getAttribute("data-param"),s=parseFloat(e.getAttribute("data-min")),r=parseFloat(e.getAttribute("data-max")),a=parseFloat(e.getAttribute("data-default"));let o=parseFloat(e.getAttribute("data-val"));const c=e.querySelector(".knob-cap"),h=f=>{const b=-135+(f-s)/(r-s)*270;c&&(c.style.transform=`rotate(${b}deg)`),e.setAttribute("data-val",f)},l=f=>{if(this.audioEngine)switch(n){case"trim-A":this.audioEngine.setChannelGain("A",f);break;case"eq-A-high":this.audioEngine.setEQ("A","high",f);break;case"eq-A-mid":this.audioEngine.setEQ("A","mid",f);break;case"eq-A-low":this.audioEngine.setEQ("A","low",f);break;case"filter-A":this.audioEngine.setFilterSweep("A",f);break;case"fx-a-lpf":this.audioEngine.setFXParam("A","lpf",f);break;case"fx-a-res":this.audioEngine.setFXParam("A","res",f);break;case"fx-a-drywet":this.audioEngine.setFXParam("A","drywet",f);break;case"trim-B":this.audioEngine.setChannelGain("B",f);break;case"eq-B-high":this.audioEngine.setEQ("B","high",f);break;case"eq-B-mid":this.audioEngine.setEQ("B","mid",f);break;case"eq-B-low":this.audioEngine.setEQ("B","low",f);break;case"filter-B":this.audioEngine.setFilterSweep("B",f);break;case"fx-b-lpf":this.audioEngine.setFXParam("B","lpf",f);break;case"fx-b-res":this.audioEngine.setFXParam("B","res",f);break;case"fx-b-drywet":this.audioEngine.setFXParam("B","drywet",f);break;case"master-vol":this.audioEngine.setVolume(f);break;case"hp-vol":this.audioEngine.setVolume(f);break}};h(o);let d=!1,u=0,p=o;const g=f=>{d=!0,u=f.clientY||f.touches&&f.touches[0].clientY,p=o,e.classList.add("is-dragging"),window.addEventListener("mousemove",_),window.addEventListener("mouseup",m),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",m)},_=f=>{if(!d)return;f.preventDefault&&f.preventDefault();const T=f.clientY||f.touches&&f.touches[0].clientY,b=u-T,D=(r-s)/140;o=Math.max(s,Math.min(r,p+b*D)),h(o),l(o)},m=()=>{d&&(d=!1,e.classList.remove("is-dragging"),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",m),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",m))};e.addEventListener("mousedown",g),e.addEventListener("touchstart",g,{passive:!1}),e.addEventListener("wheel",f=>{f.preventDefault();const T=f.deltaY<0?1:-1,b=(r-s)/30;o=Math.max(s,Math.min(r,o+T*b)),h(o),l(o)}),e.addEventListener("dblclick",()=>{o=a,h(o),l(o)})})}}class rm{constructor(t,e){this.audioEngine=t,this.djScene=e,this.camButtons=document.querySelectorAll(".cam-btn"),this.genreModal=document.getElementById("genre-modal"),this.lightingModal=document.getElementById("lighting-modal"),this.queueDrawer=document.getElementById("queue-drawer"),this.setMode=n=>{if(n==="dj"){const s=document.getElementById("btn-mode-dj");s&&s.click()}else{const s=document.getElementById("btn-mode-radio");s&&s.click()}},this.currentTrack=null,this.initMobileMenu()}initMobileMenu(){this.btnMobileMenu=document.getElementById("btn-mobile-menu"),this.btnMobileMenuClose=document.getElementById("btn-mobile-menu-close"),this.mobileMenuDrawer=document.getElementById("mobile-menu-drawer"),this.mobileMenuBackdrop=document.getElementById("mobile-menu-backdrop");const t=()=>{if(this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.remove("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.remove("hidden"),this.currentTrack){const w=document.getElementById("m-menu-track-title"),A=document.getElementById("m-menu-track-artist");if(w&&(w.textContent=this.currentTrack.title||"Unknown Track"),A){const R=this.currentTrack.genre?` • ${this.currentTrack.genre.name}`:"";A.textContent=(this.currentTrack.artist||"JMF Live Station")+R}}},e=()=>{this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.add("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.add("hidden")};this.btnMobileMenu&&this.btnMobileMenu.addEventListener("click",t),this.btnMobileMenuClose&&this.btnMobileMenuClose.addEventListener("click",e),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.addEventListener("click",e),window.addEventListener("keydown",w=>{w.key==="Escape"&&e()});const n=document.getElementById("m-btn-mode-dj"),s=document.getElementById("m-btn-mode-radio");n&&n.addEventListener("click",()=>{this.setMode("dj")}),s&&s.addEventListener("click",()=>{this.setMode("radio")});const r=document.querySelectorAll(".m-cam-item");r.forEach(w=>{w.addEventListener("click",()=>{const A=w.getAttribute("data-cam");r.forEach(R=>R.classList.remove("active")),w.classList.add("active"),this.camButtons.forEach(R=>{R.getAttribute("data-cam")===A?R.classList.add("active"):R.classList.remove("active")}),this.djScene.setCameraPreset(A)})});const a=document.getElementById("m-btn-open-all-genres");a&&a.addEventListener("click",()=>{e(),this.genreModal&&this.genreModal.classList.remove("hidden")});const o=document.getElementById("m-btn-open-lighting-modal");o&&o.addEventListener("click",()=>{e(),this.lightingModal&&this.lightingModal.classList.remove("hidden")});const c=document.querySelectorAll(".m-theme-pill");c.forEach(w=>{w.addEventListener("click",()=>{c.forEach(E=>E.classList.remove("active")),w.classList.add("active");const A=w.getAttribute("data-theme");document.querySelectorAll(".l-theme-btn").forEach(E=>{E.getAttribute("data-theme")===A?E.classList.add("active"):E.classList.remove("active")}),this.djScene.setTheme(A)})});const h=document.getElementById("m-toggle-strobe"),l=document.getElementById("m-toggle-lasers"),d=document.getElementById("m-toggle-fog"),u=document.getElementById("toggle-strobe"),p=document.getElementById("toggle-lasers"),g=document.getElementById("toggle-fog");h&&h.addEventListener("change",w=>{u&&(u.checked=w.target.checked),this.djScene.lighting.setStrobeEnabled(w.target.checked)}),l&&l.addEventListener("change",w=>{p&&(p.checked=w.target.checked),this.djScene.lighting.setLasersEnabled(w.target.checked)}),d&&d.addEventListener("change",w=>{g&&(g.checked=w.target.checked),this.djScene.lighting.setFogEnabled(w.target.checked)});const _=document.getElementById("m-slider-light-intensity"),m=document.getElementById("m-val-light-intensity"),f=document.getElementById("slider-light-intensity"),T=document.getElementById("val-light-intensity");_&&m&&_.addEventListener("input",w=>{const A=parseFloat(w.target.value),R=`${Math.round(A*100)}%`;m.textContent=R,f&&(f.value=A),T&&(T.textContent=R),this.djScene.lighting.setIntensityMultiplier(A)});const b=document.getElementById("m-radio-eq-preset");b&&b.addEventListener("change",w=>{const A=w.target.value;this.radioEqPreset&&(this.radioEqPreset.value=A),this.audioEngine.setEQPreset(A)});const M=document.getElementById("m-btn-open-queue");M&&M.addEventListener("click",()=>{e(),this.queueDrawer&&this.queueDrawer.classList.remove("hidden")});const D=document.getElementById("m-btn-fullscreen");D&&D.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})})}}class am{constructor(t,e){this.audioEngine=t,this.djScene=e,this.overlay=document.getElementById("start-overlay"),this.btnStart=document.getElementById("btn-start-stream"),this.waveIndicator=document.getElementById("wave-indicator"),this.queueDrawer=document.getElementById("queue-drawer"),this.btnQueueToggle=document.getElementById("btn-queue-toggle"),this.queueCloseBtn=document.getElementById("queue-close-btn"),this.queueList=document.getElementById("queue-list"),this.btnModeDj=document.getElementById("btn-mode-dj"),this.btnModeRadio=document.getElementById("btn-mode-radio"),this.transitionBanner=document.getElementById("transition-banner"),this.transitionText=document.getElementById("transition-text"),this.camButtons=document.querySelectorAll(".cam-btn"),this.deckAUnit=document.getElementById("deck-a-unit"),this.deckATitle=document.getElementById("deck-a-title"),this.deckAArtist=document.getElementById("deck-a-artist"),this.deckAState=document.getElementById("deck-a-state"),this.deckABpm=document.getElementById("deck-a-bpm"),this.deckAPitchVal=document.getElementById("deck-a-pitch-val"),this.deckAPitch=document.getElementById("deck-a-pitch"),this.deckAPitchReset=document.getElementById("deck-a-pitch-reset"),this.deckATempoPlus=document.getElementById("deck-a-tempo-plus"),this.deckATempoMinus=document.getElementById("deck-a-tempo-minus"),this.deckACanvas=document.getElementById("deck-a-canvas"),this.deckAWaveWrap=document.getElementById("deck-a-waveform-wrap"),this.deckATimeCur=document.getElementById("deck-a-time-cur"),this.deckATimeRem=document.getElementById("deck-a-time-rem"),this.deckAJog=document.getElementById("deck-a-jog"),this.deckAJogBpm=document.getElementById("deck-a-jog-bpm"),this.deckAJogPitch=document.getElementById("deck-a-jog-pitch"),this.deckACue=document.getElementById("deck-a-cue"),this.deckAPlay=document.getElementById("deck-a-play"),this.deckASync=document.getElementById("deck-a-sync"),this.deckALoop4=document.getElementById("deck-a-loop-4"),this.deckALoop8=document.getElementById("deck-a-loop-8"),this.deckAFxToggle=document.getElementById("deck-a-fx-toggle"),this.deckBUnit=document.getElementById("deck-b-unit"),this.deckBTitle=document.getElementById("deck-b-title"),this.deckBArtist=document.getElementById("deck-b-artist"),this.deckBState=document.getElementById("deck-b-state"),this.deckBBpm=document.getElementById("deck-b-bpm"),this.deckBPitchVal=document.getElementById("deck-b-pitch-val"),this.deckBPitch=document.getElementById("deck-b-pitch"),this.deckBPitchReset=document.getElementById("deck-b-pitch-reset"),this.deckBTempoPlus=document.getElementById("deck-b-tempo-plus"),this.deckBTempoMinus=document.getElementById("deck-b-tempo-minus"),this.deckBCanvas=document.getElementById("deck-b-canvas"),this.deckBWaveWrap=document.getElementById("deck-b-waveform-wrap"),this.deckBTimeCur=document.getElementById("deck-b-time-cur"),this.deckBTimeRem=document.getElementById("deck-b-time-rem"),this.deckBJog=document.getElementById("deck-b-jog"),this.deckBJogBpm=document.getElementById("deck-b-jog-bpm"),this.deckBJogPitch=document.getElementById("deck-b-jog-pitch"),this.deckBCue=document.getElementById("deck-b-cue"),this.deckBPlay=document.getElementById("deck-b-play"),this.deckBSync=document.getElementById("deck-b-sync"),this.deckBLoop4=document.getElementById("deck-b-loop-4"),this.deckBLoop8=document.getElementById("deck-b-loop-8"),this.deckBFxToggle=document.getElementById("deck-b-fx-toggle"),this.faderCh1=document.getElementById("fader-ch1"),this.vuMeterCh1Leds=document.querySelectorAll("#vu-meter-ch1 .led"),this.faderCh2=document.getElementById("fader-ch2"),this.vuMeterCh2Leds=document.querySelectorAll("#vu-meter-ch2 .led"),this.masterVuL=document.querySelectorAll("#master-vu-l .led"),this.masterVuR=document.querySelectorAll("#master-vu-r .led"),this.btnMixNow=document.getElementById("btn-mix-now"),this.btnPrev=document.getElementById("btn-prev"),this.btnNext=document.getElementById("btn-next"),this.btnMixerPlay=document.getElementById("btn-mixer-play"),this.btnMute=document.getElementById("btn-mute"),this.iconVol=document.getElementById("icon-vol"),this.iconMute=document.getElementById("icon-mute"),this.btnFullscreen=document.getElementById("btn-fullscreen"),this.crossfaderTrack=document.getElementById("crossfader-track"),this.crossfaderCap=document.getElementById("crossfader-cap"),this.btnAutoDj=document.getElementById("btn-auto-dj"),this.btnRecord=document.getElementById("btn-record"),this.btnSplit=document.getElementById("btn-split"),this.horizVuBars=document.querySelectorAll(".horiz-vu-bar"),this.radioModeConsole=document.getElementById("radio-mode-console"),this.djStation=document.querySelector(".hardware-dj-station"),this.mobileDeckTabs=document.getElementById("mobile-deck-tabs"),this.bottomUtilityBar=document.querySelector(".bottom-utility-bar"),this.radioTrackTitle=document.getElementById("radio-track-title"),this.radioTrackArtist=document.getElementById("radio-track-artist"),this.btnRadioPrev=document.getElementById("btn-radio-prev"),this.btnRadioPlay=document.getElementById("btn-radio-play"),this.btnRadioNext=document.getElementById("btn-radio-next"),this.radioWaveformCanvas=document.getElementById("radio-waveform-canvas"),this.radioWaveformWrap=document.getElementById("radio-waveform-wrap"),this.radioTimeCur=document.getElementById("radio-time-cur"),this.radioTimeTotal=document.getElementById("radio-time-total"),this.radioEqPreset=document.getElementById("radio-eq-preset"),this.btnRadioEqToggle=document.getElementById("btn-radio-eq-toggle"),this.radioHpSegs=document.querySelectorAll("#radio-hp-meter .r-seg"),this.radioMasterVuLSegs=document.querySelectorAll(".r-row-l .r-seg"),this.radioMasterVuRSegs=document.querySelectorAll(".r-row-r .r-seg"),this.waveform=new im(t,this.deckAWaveWrap,this.deckBWaveWrap,this.deckACanvas,this.deckBCanvas,this.radioWaveformCanvas,this.radioWaveformWrap),this.jogWheel=new sm(t,this.deckAJog,this.deckBJog,this.deckAJogBpm,this.deckBJogBpm,this.deckAJogPitch,this.deckBJogPitch,this.deckAPitch,this.deckBPitch,this.deckAPitchVal,this.deckBPitchVal,this.deckAPitchReset,this.deckBPitchReset,this.deckATempoPlus,this.deckATempoMinus,this.deckBTempoPlus,this.deckBTempoMinus),this.mobileMenu=new rm(t,e),this.initHardwareEvents(),this.initGenreControls()}initHardwareEvents(){const t=async P=>{P&&(P.preventDefault(),P.stopPropagation()),this.overlay&&(this.overlay.classList.add("hidden"),this.overlay.style.display="none");try{await this.audioEngine.start()}catch(x){console.warn("Audio start error:",x)}this.updatePlayState(!0)};this.btnStart&&(this.btnStart.addEventListener("click",t),this.btnStart.addEventListener("touchend",t)),this.overlay&&this.overlay.addEventListener("click",P=>{P.target===this.overlay&&t(P)}),this.deckAPlay&&this.deckAPlay.addEventListener("click",()=>{const P=this.audioEngine.togglePlayDeck("A");this.deckAPlay.classList.toggle("active-play",P),this.updatePlayState(P)}),this.deckACue&&this.deckACue.addEventListener("click",()=>{this.audioEngine.cueDeck("A"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckAPitch&&this.deckAPitch.addEventListener("input",P=>{const x=parseFloat(P.target.value);this.audioEngine.setPitch("A",x);const v=`${x>=0?"+":""}${x.toFixed(1)}%`;this.deckAPitchVal&&(this.deckAPitchVal.textContent=v),this.deckAJogPitch&&(this.deckAJogPitch.textContent=v)}),this.deckAPitchReset&&this.deckAPitchReset.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=0),this.audioEngine.setPitch("A",0),this.deckAPitchVal&&(this.deckAPitchVal.textContent="+0.0%"),this.deckAJogPitch&&(this.deckAJogPitch.textContent="0.0%")}),this.deckATempoPlus&&this.deckATempoPlus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.min(8,parseFloat(this.deckAPitch.value)+.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckATempoMinus&&this.deckATempoMinus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.max(-8,parseFloat(this.deckAPitch.value)-.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckALoop4&&this.deckALoop4.addEventListener("click",()=>{const P=this.audioEngine.toggleLoop("A",4);this.deckALoop4.classList.toggle("active",P),this.deckALoop8&&this.deckALoop8.classList.remove("active")}),this.deckALoop8&&this.deckALoop8.addEventListener("click",()=>{const P=this.audioEngine.toggleLoop("A",8);this.deckALoop8.classList.toggle("active",P),this.deckALoop4&&this.deckALoop4.classList.remove("active")});const e=document.getElementById("deck-a-fx-type");e&&e.addEventListener("change",P=>this.audioEngine.setFXType("A",P.target.value)),this.deckAFxToggle&&this.deckAFxToggle.addEventListener("click",()=>{const P=!this.deckAFxToggle.classList.contains("active");this.deckAFxToggle.classList.toggle("active",P),this.audioEngine.setFXToggle("A",P)}),this.deckBPlay&&this.deckBPlay.addEventListener("click",()=>{const P=this.audioEngine.togglePlayDeck("B");this.deckBPlay.classList.toggle("active-play",P),this.updatePlayState(P)}),this.deckBCue&&this.deckBCue.addEventListener("click",()=>{this.audioEngine.cueDeck("B"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckBPitch&&this.deckBPitch.addEventListener("input",P=>{const x=parseFloat(P.target.value);this.audioEngine.setPitch("B",x);const v=`${x>=0?"+":""}${x.toFixed(1)}%`;this.deckBPitchVal&&(this.deckBPitchVal.textContent=v),this.deckBJogPitch&&(this.deckBJogPitch.textContent=v)}),this.deckBPitchReset&&this.deckBPitchReset.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=0),this.audioEngine.setPitch("B",0),this.deckBPitchVal&&(this.deckBPitchVal.textContent="+0.0%"),this.deckBJogPitch&&(this.deckBJogPitch.textContent="0.0%")}),this.deckBTempoPlus&&this.deckBTempoPlus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.min(8,parseFloat(this.deckBPitch.value)+.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBTempoMinus&&this.deckBTempoMinus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.max(-8,parseFloat(this.deckBPitch.value)-.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBLoop4&&this.deckBLoop4.addEventListener("click",()=>{const P=this.audioEngine.toggleLoop("B",4);this.deckBLoop4.classList.toggle("active",P),this.deckBLoop8&&this.deckBLoop8.classList.remove("active")}),this.deckBLoop8&&this.deckBLoop8.addEventListener("click",()=>{const P=this.audioEngine.toggleLoop("B",8);this.deckBLoop8.classList.toggle("active",P),this.deckBLoop4&&this.deckBLoop4.classList.remove("active")});const n=document.getElementById("deck-b-fx-type");n&&n.addEventListener("change",P=>this.audioEngine.setFXType("B",P.target.value)),this.deckBFxToggle&&this.deckBFxToggle.addEventListener("click",()=>{const P=!this.deckBFxToggle.classList.contains("active");this.deckBFxToggle.classList.toggle("active",P),this.audioEngine.setFXToggle("B",P)}),this.faderCh1&&this.faderCh1.addEventListener("input",P=>this.audioEngine.setChannelGain("A",parseFloat(P.target.value))),this.faderCh2&&this.faderCh2.addEventListener("input",P=>this.audioEngine.setChannelGain("B",parseFloat(P.target.value))),this.btnMixNow&&this.btnMixNow.addEventListener("click",()=>this.audioEngine.triggerDJCrossfade()),this.btnNext&&this.btnNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.btnPrev&&this.btnPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnMixerPlay&&this.btnMixerPlay.addEventListener("click",()=>{const P=this.audioEngine.togglePlay();this.updatePlayState(P)}),this.btnMute&&this.btnMute.addEventListener("click",()=>{const P=this.audioEngine.toggleMute();this.updateVolumeIcons(P)}),this.btnFullscreen&&this.btnFullscreen.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})});const s=document.getElementById("btn-cf-ch1"),r=document.getElementById("btn-cf-ch2");s&&s.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("A",5)}),r&&r.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("B",5)}),this.crossfaderTrack&&this.crossfaderTrack.addEventListener("click",P=>{const x=this.crossfaderTrack.getBoundingClientRect(),v=P.clientX-x.left,B=Math.max(0,Math.min(1,v/x.width));B<.35?this.audioEngine.crossfadeToDeck("A",4):B>.65?this.audioEngine.crossfadeToDeck("B",4):this.audioEngine.setCrossfader(B)}),this.setMode=P=>{const x=document.getElementById("m-btn-mode-dj"),v=document.getElementById("m-btn-mode-radio");P==="radio"?(this.audioEngine.setMixMode("radio"),this.btnModeRadio&&this.btnModeRadio.classList.add("active"),this.btnModeDj&&this.btnModeDj.classList.remove("active"),v&&v.classList.add("active"),x&&x.classList.remove("active"),document.body.classList.add("mode-radio"),document.body.classList.remove("mode-dj"),this.djStation&&this.djStation.classList.add("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display="none"),this.bottomUtilityBar&&this.bottomUtilityBar.classList.add("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.remove("hidden"),this.transitionBanner&&this.transitionBanner.classList.add("hidden")):(this.audioEngine.setMixMode("dj"),this.btnModeDj&&this.btnModeDj.classList.add("active"),this.btnModeRadio&&this.btnModeRadio.classList.remove("active"),x&&x.classList.add("active"),v&&v.classList.remove("active"),document.body.classList.add("mode-dj"),document.body.classList.remove("mode-radio"),this.djStation&&this.djStation.classList.remove("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display=""),this.bottomUtilityBar&&this.bottomUtilityBar.classList.remove("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.add("hidden"))},window.innerWidth<=820||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.setMode("radio"):this.setMode("dj"),this.btnModeDj&&this.btnModeRadio&&(this.btnModeDj.addEventListener("click",()=>this.setMode("dj")),this.btnModeRadio.addEventListener("click",()=>this.setMode("radio"))),this.btnRadioPlay&&this.btnRadioPlay.addEventListener("click",()=>{const P=this.audioEngine.togglePlay();this.updatePlayState(P)}),this.btnRadioPrev&&this.btnRadioPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnRadioNext&&this.btnRadioNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.radioEqPreset&&this.radioEqPreset.addEventListener("change",P=>{this.audioEngine.setEQPreset(P.target.value)}),this.btnRadioEqToggle&&this.radioEqPreset&&this.btnRadioEqToggle.addEventListener("click",()=>{const P=["flat","bass","club","vocal","electronic"],v=(P.indexOf(this.radioEqPreset.value)+1)%P.length;this.radioEqPreset.value=P[v],this.audioEngine.setEQPreset(P[v])}),this.radioWaveformWrap&&this.radioWaveformWrap.addEventListener("click",P=>{const x=this.radioWaveformWrap.getBoundingClientRect(),v=Math.max(0,Math.min(1,(P.clientX-x.left)/x.width)),B=this.audioEngine.getActiveAudio();B&&B.duration&&(B.currentTime=v*B.duration)}),this.camButtons.forEach(P=>{P.addEventListener("click",()=>{this.camButtons.forEach(x=>x.classList.remove("active")),P.classList.add("active"),this.djScene.setCameraPreset(P.getAttribute("data-cam"))})}),this.btnQueueToggle&&this.queueDrawer&&this.btnQueueToggle.addEventListener("click",()=>this.queueDrawer.classList.toggle("hidden")),this.queueCloseBtn&&this.queueDrawer&&this.queueCloseBtn.addEventListener("click",()=>this.queueDrawer.classList.add("hidden")),this.lightingModal=document.getElementById("lighting-modal"),this.btnLightsToggle=document.getElementById("btn-lights-toggle"),this.btnLightsClose=document.getElementById("btn-lights-close"),this.btnSettingsOpen=document.getElementById("btn-settings-open"),this.btnRadioSettings=document.getElementById("btn-radio-settings");const o=()=>{this.lightingModal&&this.lightingModal.classList.remove("hidden")},c=()=>{this.lightingModal&&this.lightingModal.classList.add("hidden")};this.btnLightsToggle&&this.btnLightsToggle.addEventListener("click",o),this.btnSettingsOpen&&this.btnSettingsOpen.addEventListener("click",o),this.btnRadioSettings&&this.btnRadioSettings.addEventListener("click",o),this.btnLightsClose&&this.btnLightsClose.addEventListener("click",c),this.lightingModal&&this.lightingModal.addEventListener("click",P=>{P.target===this.lightingModal&&c()});const h=document.querySelectorAll(".l-theme-btn");h.forEach(P=>{P.addEventListener("click",()=>{h.forEach(v=>v.classList.remove("active")),P.classList.add("active");const x=P.getAttribute("data-theme");this.djScene.setTheme(x)})});const l=document.getElementById("toggle-strobe");l&&l.addEventListener("change",P=>{this.djScene.lighting.setStrobeEnabled(P.target.checked)});const d=document.getElementById("toggle-lasers");d&&d.addEventListener("change",P=>{this.djScene.lighting.setLasersEnabled(P.target.checked)});const u=document.getElementById("toggle-fog");u&&u.addEventListener("change",P=>{this.djScene.lighting.setFogEnabled(P.target.checked)});const p=document.getElementById("slider-light-intensity"),g=document.getElementById("val-light-intensity");p&&g&&p.addEventListener("input",P=>{const x=parseFloat(P.target.value);g.textContent=`${Math.round(x*100)}%`,this.djScene.lighting.setIntensityMultiplier(x)});const _=document.getElementById("slider-laser-speed"),m=document.getElementById("val-laser-speed");_&&m&&_.addEventListener("input",P=>{const x=parseFloat(P.target.value);m.textContent=`${x.toFixed(1)}x`,this.djScene.lighting.setLaserSpeed(x)});const f=document.querySelectorAll(".m-tab-btn"),T=document.getElementById("deck-a-unit"),b=document.getElementById("djm-mixer"),M=document.getElementById("deck-b-unit");f.forEach(P=>{P.addEventListener("click",()=>{f.forEach(v=>v.className="m-tab-btn");const x=P.getAttribute("data-tab");x==="deck-a"?(P.classList.add("active-tab-a"),T&&T.classList.add("m-active-panel"),b&&b.classList.remove("m-active-panel"),M&&M.classList.remove("m-active-panel")):x==="mixer"?(P.classList.add("active-tab-mixer"),T&&T.classList.remove("m-active-panel"),b&&b.classList.add("m-active-panel"),M&&M.classList.remove("m-active-panel")):x==="deck-b"&&(P.classList.add("active-tab-b"),T&&T.classList.remove("m-active-panel"),b&&b.classList.remove("m-active-panel"),M&&M.classList.add("m-active-panel"))})});for(let P=1;P<=4;P++){const x=document.getElementById(`deck-a-pad-${P}`);x&&x.addEventListener("click",B=>{this.audioEngine.triggerHotCue("A",P-1,B.shiftKey)&&(x.classList.add("active"),x.style.transform="scale(0.92)",setTimeout(()=>{x.style.transform=""},120))});const v=document.getElementById(`deck-b-pad-${P}`);v&&v.addEventListener("click",B=>{this.audioEngine.triggerHotCue("B",P-1,B.shiftKey)&&(v.classList.add("active"),v.style.transform="scale(0.92)",setTimeout(()=>{v.style.transform=""},120))})}const D=document.getElementById("btn-auto-dj");D&&D.addEventListener("click",()=>{const P=this.audioEngine.toggleAutoDj();D.classList.toggle("active",P)}),window.addEventListener("keydown",P=>{var x;if(!["INPUT","TEXTAREA","SELECT"].includes((x=document.activeElement)==null?void 0:x.tagName)){if(P.code==="Space"){P.preventDefault();const v=this.audioEngine.togglePlay();this.updatePlayState(v)}else if(P.code==="Escape"){this.queueDrawer&&this.queueDrawer.classList.add("hidden"),this.lightingModal&&this.lightingModal.classList.add("hidden");const v=document.getElementById("genre-modal");v&&v.classList.add("hidden");const B=document.getElementById("dj-auth-modal");B&&B.classList.add("hidden");const J=document.getElementById("about-modal");J&&J.classList.add("hidden");const K=document.getElementById("mobile-menu-drawer"),j=document.getElementById("mobile-menu-backdrop");K&&K.classList.add("hidden"),j&&j.classList.add("hidden")}}});const w=document.getElementById("dj-auth-modal"),A=document.getElementById("btn-dj-auth-close"),R=document.getElementById("btn-dj-enjoy"),E=document.getElementById("input-dj-key"),y=document.getElementById("btn-submit-dj-key"),C=document.getElementById("dj-auth-error"),G=document.getElementById("btn-dj-lang-ru"),k=document.getElementById("btn-dj-lang-en"),W={ru:{title:"JMF RESIDENT DJ BOOTH",heading:"ДОСТУП К ПУЛЬТУ ОГРАНИЧЕН",desc:"Сейчас за пультом играют резиденты <strong>JMF Radio</strong>.<br><br>Чтобы встать за вертушки, управлять треками эфира или заказать свой сет — обратитесь к <strong>администратору клуба</strong> за персональным DJ-ключом.",label:"ЕСТЬ DJ-КЛЮЧ ДОСТУПА?",placeholder:"Введите ключ...",submit:"Встать за пульт",enjoy:"Наслаждаться музыкой и атмосферой",success:"DJ-ключ сохранён! Пробуем войти за пульт..."},en:{title:"JMF RESIDENT DJ BOOTH",heading:"DJ BOOTH ACCESS RESTRICTED",desc:"Resident DJs are currently performing live on <strong>JMF Radio</strong>.<br><br>To take over the decks, control the broadcast, or request a set — please contact the <strong>club administrator</strong> for a personal DJ access key.",label:"HAVE A DJ ACCESS KEY?",placeholder:"Enter access key...",submit:"Take the Decks",enjoy:"Enjoy the music & club vibes",success:"DJ Key saved! Taking over the decks..."}};let Y=localStorage.getItem("jmf_ui_lang")||"en";const X=P=>{Y=P,localStorage.setItem("jmf_ui_lang",P);const x=W[P]||W.en,v=document.getElementById("dj-auth-title"),B=document.getElementById("dj-auth-heading"),J=document.getElementById("dj-auth-desc"),K=document.getElementById("dj-auth-label"),j=document.getElementById("dj-auth-enjoy-text");v&&(v.textContent=x.title),B&&(B.textContent=x.heading),J&&(J.innerHTML=x.desc),K&&(K.textContent=x.label),E&&(E.placeholder=x.placeholder),y&&(y.textContent=x.submit),j&&(j.textContent=x.enjoy),G&&G.classList.toggle("active",P==="ru"),k&&k.classList.toggle("active",P==="en")};if(G&&G.addEventListener("click",()=>X("ru")),k&&k.addEventListener("click",()=>X("en")),X(Y),this.showDjAuthModal=()=>{w&&(X(Y),w.classList.remove("hidden"),C&&C.classList.add("hidden"),E&&(E.value="",E.focus()))},A&&w&&A.addEventListener("click",()=>w.classList.add("hidden")),R&&w&&R.addEventListener("click",()=>w.classList.add("hidden")),y&&E){const P=async()=>{const x=E.value.trim();if(!x)return;localStorage.setItem("jmf_dj_key",x);const v=W[Y]||W.ru;C&&(C.classList.remove("hidden"),C.style.color="#00ff88",C.textContent=v.success),setTimeout(()=>{w&&w.classList.add("hidden"),this.audioEngine.skipNext()},600)};y.addEventListener("click",P),E.addEventListener("keydown",x=>{x.key==="Enter"&&P()})}this.audioEngine.onAuthRequired=()=>{this.showDjAuthModal()};const Z=document.getElementById("about-modal"),z=document.getElementById("btn-about-toggle"),tt=document.getElementById("m-btn-about-open"),it=document.getElementById("btn-about-close"),gt=document.getElementById("btn-about-lang-ru"),It=document.getElementById("btn-about-lang-en"),jt={ru:{title:"О ПРОЕКТЕ JMF RADIO",tagline:"Интерактивная 3D киберпанк-станция нового поколения и платформа онлайн-вещания на базе Web Audio API.",storyHeading:"ИСТОРИЯ И КОНЦЕПЦИЯ",storyText:"JMF Radio зародилось как ранний аудио-эксперимент на GitHub и выросло в атмосферный 3D киберпанк-клуб. Объединяя процедурный мир на Three.js, реалистичную эмуляцию диджейских дек Pioneer CDJ-3000 / микшера DJM-900 и интеллектуальный AutoDJ-движок с DSP-фильтрами в реальном времени, JMF Radio обеспечивает непрерывный электронный эфир 24/7 прямо в браузере.",creatorHeading:"АВТОР И МУЗЫКАЛЬНЫЕ РЕСУРСЫ",scDesc:"Оригинальные треки, живые сеты и миксы",bcDesc:"Дискография, релизы и Lossless аудио",ghEarlyDesc:"Истоки проекта и ранние архивы на GitHub",ghStationDesc:"Исходный код 3D радио и дорожная карта",techHeading:"КЛЮЧЕВЫЕ ТЕХНОЛОГИИ",legalHeading:"ПРАВОВАЯ ИНФОРМАЦИЯ И DMCA",legalText:"JMF Radio — некоммерческий экспериментальный веб-арт проект, созданный в образовательных, культурных и промо-целях.<br><br>Все права на музыкальные произведения, ремиксы и фонограммы принадлежат их законным авторам, исполнителям и лейблам. JMF Radio не продает треки и не взимает плату за прослушивание.<br><br><strong>Правообладателям и авторам:</strong> Если вы являетесь автором или правообладателем и хотите удалить свой трек из ротации, либо хотите отправить свои оригинальные треки для ротации в эфире — свяжитесь с нами через GitHub или контакты администратора."},en:{title:"ABOUT JMF RADIO",tagline:"Next-generation interactive 3D cyberpunk nightclub & real-time Web Audio broadcasting platform.",storyHeading:"HISTORY & CONCEPT",storyText:"JMF Radio began as an early experimental audio project on GitHub and has evolved into an immersive cyberpunk nightclub experience. Combining a procedural 3D world built with Three.js, realistic Pioneer CDJ-3000/DJM-900 hardware emulation, and an intelligent AutoDJ engine with real-time DSP filters, JMF Radio delivers continuous 24/7 electronic music streaming directly in your web browser.",creatorHeading:"CREATOR & MUSIC CHANNELS",scDesc:"Original tracks, live sets & mixes",bcDesc:"Discography, releases & lossless audio",ghEarlyDesc:"Original roots & GitHub archives",ghStationDesc:"Full 3D station source code & roadmap",techHeading:"🛠️ CORE TECHNOLOGIES",legalHeading:"⚖️ LEGAL DISCLAIMER & DMCA NOTICE",legalText:"JMF Radio is an experimental, non-commercial web audio art & cultural project created for educational, developmental, and promotional purposes.<br><br>All musical works, remixes, and sound recordings remain the intellectual property of their respective artists, composers, and record labels. JMF Radio does not sell audio files or charge listeners for streaming.<br><br><strong>For Artists & Copyright Holders:</strong> If you are a copyright owner and wish to have your music removed from the rotation, or if you would like to submit your original tracks for 24/7 broadcast promotion, please reach out via GitHub or contact the administrator."}},$=P=>{const x=jt[P]||jt.en,v=document.getElementById("about-modal-title"),B=document.getElementById("about-tagline"),J=document.getElementById("about-story-heading"),K=document.getElementById("about-story-text"),j=document.getElementById("about-creator-heading"),xt=document.getElementById("about-sc-desc"),ct=document.getElementById("about-bc-desc"),ft=document.getElementById("about-gh-early-desc"),Wt=document.getElementById("about-gh-station-desc"),nt=document.getElementById("about-tech-heading"),pt=document.getElementById("about-legal-heading"),bt=document.getElementById("about-legal-text");v&&(v.textContent=x.title),B&&(B.textContent=x.tagline),J&&(J.textContent=x.storyHeading),K&&(K.textContent=x.storyText),j&&(j.textContent=x.creatorHeading),xt&&(xt.textContent=x.scDesc),ct&&(ct.textContent=x.bcDesc),ft&&(ft.textContent=x.ghEarlyDesc),Wt&&(Wt.textContent=x.ghStationDesc),nt&&(nt.textContent=x.techHeading),pt&&(pt.textContent=x.legalHeading),bt&&(bt.innerHTML=x.legalText),gt&&gt.classList.toggle("active",P==="ru"),It&&It.classList.toggle("active",P==="en")};gt&&gt.addEventListener("click",()=>$("ru")),It&&It.addEventListener("click",()=>$("en"));const et=()=>{Z&&($(Y),Z.classList.remove("hidden"))};z&&z.addEventListener("click",et),tt&&tt.addEventListener("click",()=>{const P=document.getElementById("mobile-menu-drawer"),x=document.getElementById("mobile-menu-backdrop");P&&P.classList.add("hidden"),x&&x.classList.add("hidden"),et()}),it&&Z&&it.addEventListener("click",()=>Z.classList.add("hidden"));const _t=document.getElementById("btn-radio-eq-toggle"),rt=document.getElementById("radio-eq-popover"),wt=document.getElementById("radio-eq-val"),Rt=document.querySelectorAll("#radio-eq-popover .popover-opt"),kt=document.querySelectorAll("#m-eq-chips-group .m-genre-chip"),Qt=document.getElementById("btn-deck-a-fx-toggle"),Pt=document.getElementById("deck-a-fx-popover"),le=document.getElementById("deck-a-fx-val"),N=document.querySelectorAll("#deck-a-fx-popover .popover-opt"),_e=document.getElementById("btn-deck-b-fx-toggle"),At=document.getElementById("deck-b-fx-popover"),Ht=document.getElementById("deck-b-fx-val"),Tt=document.querySelectorAll("#deck-b-fx-popover .popover-opt"),ee=P=>{this.audioEngine.setEQPreset(P);const x={flat:"FLAT",bass:"BASS BOOST",club:"CLUB PUNCH",vocal:"VOCAL",electronic:"ELECTRONIC"};wt&&(wt.textContent=`EQ: ${x[P]||P.toUpperCase()}`),Rt.forEach(v=>{v.classList.toggle("active",v.getAttribute("data-eq")===P)}),kt.forEach(v=>{v.classList.toggle("active",v.getAttribute("data-eq")===P)})};_t&&rt&&(_t.addEventListener("click",P=>{P.stopPropagation();const x=rt.classList.contains("hidden");Pt&&Pt.classList.add("hidden"),At&&At.classList.add("hidden"),rt.classList.toggle("hidden",!x)}),Rt.forEach(P=>{P.addEventListener("click",x=>{x.stopPropagation();const v=P.getAttribute("data-eq");ee(v),rt.classList.add("hidden")})})),kt.forEach(P=>{P.addEventListener("click",()=>{const x=P.getAttribute("data-eq");ee(x)})}),Qt&&Pt&&(Qt.addEventListener("click",P=>{P.stopPropagation();const x=Pt.classList.contains("hidden");rt&&rt.classList.add("hidden"),At&&At.classList.add("hidden"),Pt.classList.toggle("hidden",!x)}),N.forEach(P=>{P.addEventListener("click",x=>{x.stopPropagation();const v=P.getAttribute("data-fx");this.audioEngine.setFXType("A",v),le&&(le.textContent=v.toUpperCase()),N.forEach(B=>B.classList.toggle("active",B===P)),Pt.classList.add("hidden")})})),_e&&At&&(_e.addEventListener("click",P=>{P.stopPropagation();const x=At.classList.contains("hidden");rt&&rt.classList.add("hidden"),Pt&&Pt.classList.add("hidden"),At.classList.toggle("hidden",!x)}),Tt.forEach(P=>{P.addEventListener("click",x=>{x.stopPropagation();const v=P.getAttribute("data-fx");this.audioEngine.setFXType("B",v),Ht&&(Ht.textContent=v.toUpperCase()),Tt.forEach(B=>B.classList.toggle("active",B===P)),At.classList.add("hidden")})})),document.addEventListener("click",P=>{rt&&!rt.contains(P.target)&&!(_t!=null&&_t.contains(P.target))&&rt.classList.add("hidden"),Pt&&!Pt.contains(P.target)&&!(Qt!=null&&Qt.contains(P.target))&&Pt.classList.add("hidden"),At&&!At.contains(P.target)&&!(_e!=null&&_e.contains(P.target))&&At.classList.add("hidden")})}updatePlayState(t){t?(this.waveIndicator&&this.waveIndicator.classList.add("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.add("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>')):(this.waveIndicator&&this.waveIndicator.classList.remove("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.remove("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>'))}updateVolumeIcons(t){t?(this.iconVol&&this.iconVol.classList.add("hidden"),this.iconMute&&this.iconMute.classList.remove("hidden")):(this.iconVol&&this.iconVol.classList.remove("hidden"),this.iconMute&&this.iconMute.classList.add("hidden"))}formatTime(t){if(isNaN(t)||t<0)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}async initGenreControls(){this.btnGenresToggle=document.getElementById("btn-genres-toggle"),this.btnCenterGenres=document.getElementById("m-btn-center-genres"),this.genreModal=document.getElementById("genre-modal"),this.btnGenresClose=document.getElementById("btn-genres-close"),this.headerGenreIcon=document.getElementById("header-genre-icon"),this.headerGenreLabel=document.getElementById("header-genre-label"),this.mHeaderGenreLabel=document.getElementById("m-header-genre-label"),this.genreModalGrid=document.getElementById("genre-modal-grid"),this.queueGenreFilter=document.getElementById("queue-genre-filter");const t=a=>{switch(a){case"all":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';case"techno":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';case"house":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';case"bass":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/></svg>';case"lofi":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';case"electro":return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>';default:return'<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'}},e=a=>a?a.replace(/^[\p{Emoji}\p{Extended_Pictographic}\uFE0F\s]+/u,"").trim():"ALL STYLES",n=()=>{this.genreModal&&this.genreModal.classList.remove("hidden")},s=()=>{this.genreModal&&this.genreModal.classList.add("hidden")};this.btnGenresToggle&&this.btnGenresToggle.addEventListener("click",n),this.btnCenterGenres&&this.btnCenterGenres.addEventListener("click",n),this.btnGenresClose&&this.btnGenresClose.addEventListener("click",s),this.genreModal&&this.genreModal.addEventListener("click",a=>{a.target===this.genreModal&&s()});const r=a=>{if(a){const o=t(a.id),c=e(a.name);this.headerGenreIcon&&(this.headerGenreIcon.innerHTML=o),this.headerGenreLabel&&(this.headerGenreLabel.textContent=c),this.mHeaderGenreLabel&&(this.mHeaderGenreLabel.innerHTML=`${o} <span>${c}</span>`)}};try{const{genres:a,activeGenre:o}=await this.audioEngine.fetchGenres();this.activeGenre=o||"all";const c=()=>{this.genreModalGrid&&a&&(this.genreModalGrid.innerHTML=a.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="genre-card-btn ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}">
                <div class="genre-card-header">
                  <span class="genre-card-icon">${u}</span>
                  <span class="genre-card-count">${l.count} tracks</span>
                </div>
                <div class="genre-card-name" style="color: ${l.color};">${d}</div>
              </button>
            `}).join(""),this.genreModalGrid.querySelectorAll(".genre-card-btn").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=a.find(p=>p.id===d);r(u),c(),s(),await this.audioEngine.setGenre(d)})})),this.queueGenreFilter&&a&&(this.queueGenreFilter.innerHTML=a.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="q-filter-pill ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}" style="--pill-color: ${l.color}">
                <span class="q-filter-inner">${u} <span>${d.split(" ")[0]||"ALL"}</span></span>
                <span class="pill-badge">${l.count}</span>
              </button>
            `}).join(""),this.queueGenreFilter.querySelectorAll(".q-filter-pill").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=a.find(p=>p.id===d);r(u),c(),await this.audioEngine.setGenre(d)})}));const h=document.getElementById("m-genre-chips");h&&a&&(h.innerHTML=a.map(l=>{const d=e(l.name),u=t(l.id);return`
              <button class="m-genre-chip ${l.id===this.activeGenre?"active":""}" data-genre="${l.id}">
                <span class="m-genre-chip-icon">${u}</span>
                <span class="m-genre-chip-name" style="color: ${l.color};">${d}</span>
              </button>
            `}).join(""),h.querySelectorAll(".m-genre-chip").forEach(l=>{l.addEventListener("click",async()=>{const d=l.getAttribute("data-genre");this.activeGenre=d;const u=a.find(p=>p.id===d);r(u),c(),await this.audioEngine.setGenre(d)})}))};c()}catch(a){console.warn("Error loading genres:",a)}}onTrackChanged(t,e,n){this.updateTrackInfo(t,this.audioEngine.nextTrack,e)}updateTrackInfo(t,e,n){if(!t)return;this.currentTrack=t,this.mobileMenu&&(this.mobileMenu.currentTrack=t);const s=this.audioEngine.activeDeck,r=document.getElementById("m-menu-track-title"),a=document.getElementById("m-menu-track-artist");if(r&&(r.textContent=t.title||"Unknown Track"),a){const o=t.genre?` • ${t.genre.name}`:"";a.textContent=(t.artist||"JMF Live Station")+o}if(this.radioTrackTitle&&(this.radioTrackTitle.textContent=t.title||"Unknown Track"),this.radioTrackArtist){const o=t.genre?` [${t.genre.name.split(" ")[0]}]`:"";this.radioTrackArtist.textContent=(t.artist||"JMF Radio 24/7")+o}s==="A"?(this.deckATitle&&(this.deckATitle.textContent=t.title||"Unknown Track"),this.deckAArtist&&(this.deckAArtist.textContent=t.artist||"JMF Radio"),this.deckAState&&(this.deckAState.textContent="ON AIR"),this.deckAPlay&&this.deckAPlay.classList.add("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(t.title+(t.id||"a")),e&&(this.deckBTitle&&(this.deckBTitle.textContent=e.title||"Upcoming Track"),this.deckBArtist&&(this.deckBArtist.textContent=e.artist||"Next on Deck"),this.deckBState&&(this.deckBState.textContent="CUE / NEXT"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(e.title+(e.id||"b")))):(this.deckBTitle&&(this.deckBTitle.textContent=t.title||"Unknown Track"),this.deckBArtist&&(this.deckBArtist.textContent=t.artist||"JMF Radio"),this.deckBState&&(this.deckBState.textContent="ON AIR"),this.deckBPlay&&this.deckBPlay.classList.add("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(t.title+(t.id||"b")),e&&(this.deckATitle&&(this.deckATitle.textContent=e.title||"Upcoming Track"),this.deckAArtist&&(this.deckAArtist.textContent=e.artist||"Next on Deck"),this.deckAState&&(this.deckAState.textContent="CUE / NEXT"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(e.title+(e.id||"a")))),n&&n.length>0&&this.queueList&&(this.queueList.innerHTML=n.map((o,c)=>`
        <div class="queue-item" data-id="${o.id}">
          <div class="queue-item-left">
            <div class="queue-item-title">${c+1}. ${o.title}</div>
            <div class="queue-item-artist">${o.artist}</div>
          </div>
          <div class="queue-item-right">
            ${o.genre?`<span class="q-genre-pill" style="color: ${o.genre.color}; border-color: ${o.genre.color}40;">${o.genre.name.split(" ")[0]}</span>`:""}
            <span class="q-bpm-pill">${o.bpm||128} BPM</span>
          </div>
        </div>
      `).join("")),this.transitionBanner&&this.transitionBanner.classList.add("hidden")}onTransition(t,e,n,s){this.transitionTimer&&clearTimeout(this.transitionTimer),t&&s?(this.transitionText&&(this.transitionText.textContent=`DJ MIXING: DECK ${e} ➔ DECK ${n} ("${s.title.substring(0,24)}...")`),this.transitionBanner&&this.transitionBanner.classList.remove("hidden"),n==="B"?(this.deckBState&&(this.deckBState.textContent="MIXING IN"),this.deckBPlay&&this.deckBPlay.classList.add("active-play")):n==="A"&&(this.deckAState&&(this.deckAState.textContent="MIXING IN"),this.deckAPlay&&this.deckAPlay.classList.add("active-play")),this.transitionTimer=setTimeout(()=>{this.transitionBanner&&this.transitionBanner.classList.add("hidden")},3500)):this.transitionBanner&&this.transitionBanner.classList.add("hidden")}updateProgress(t,e,n){const s=this.audioEngine.activeDeck,r=this.audioEngine.isPlaying,a=this.audioEngine.isCrossfading,o=Math.max(0,e-t),c=e>0?Math.min(1,t/e):0;if(this.radioTimeCur&&(this.radioTimeCur.textContent=this.formatTime(t)),this.radioTimeTotal&&(this.radioTimeTotal.textContent=this.formatTime(e)),this.radioWaveformCanvas&&this.waveform.drawWaveform(this.radioWaveformCanvas,this.waveform.waveformProfileA,c,"A",n),n&&r?(this.updateSegmentedLEDs(this.radioHpSegs,n.volume*.85),this.updateSegmentedLEDs(this.radioMasterVuLSegs,n.volume*1.1+n.bass*.3),this.updateSegmentedLEDs(this.radioMasterVuRSegs,n.volume*1.1+n.treble*.3)):(this.updateSegmentedLEDs(this.radioHpSegs,0),this.updateSegmentedLEDs(this.radioMasterVuLSegs,0),this.updateSegmentedLEDs(this.radioMasterVuRSegs,0)),s==="A")if(this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,c,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(t)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(o)}`),!a)this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,0,"B",null),this.deckBTimeCur&&(this.deckBTimeCur.textContent="0:00"),this.deckBTimeRem&&(this.deckBTimeRem.textContent="READY");else{const h=this.audioEngine.audioB,l=h.currentTime||0,d=h.duration||180,u=d>0?Math.min(1,l/d):0;this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,u,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(l)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(Math.max(0,d-l))}`)}else if(this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,c,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(t)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(o)}`),!a)this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,0,"A",null),this.deckATimeCur&&(this.deckATimeCur.textContent="0:00"),this.deckATimeRem&&(this.deckATimeRem.textContent="READY");else{const h=this.audioEngine.audioA,l=h.currentTime||0,d=h.duration||180,u=d>0?Math.min(1,l/d):0;this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,u,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(l)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(Math.max(0,d-l))}`)}if(n){const h=`${n.bpmA.toFixed(1)}`,l=`${n.bpmB.toFixed(1)}`;this.deckABpm&&(this.deckABpm.textContent=h),this.deckBBpm&&(this.deckBBpm.textContent=l),this.deckAJogBpm&&(this.deckAJogBpm.textContent=h),this.deckBJogBpm&&(this.deckBJogBpm.textContent=l)}if(this.jogWheel.updateJogAngles(n,r,this.audioEngine.deckStates),this.crossfaderCap&&n){const h=n.crossfadeProgress*100;this.crossfaderCap.style.left=`${h}%`}n&&r?(this.updateLEDs(this.vuMeterCh1Leds,n.deckALevel),this.updateLEDs(this.vuMeterCh2Leds,n.deckBLevel),this.updateLEDs(this.masterVuL,n.volume*1.3+n.bass*.3),this.updateLEDs(this.masterVuR,n.volume*1.3+n.treble*.3),this.horizVuBars.forEach(h=>{h.style.width=`${Math.min(100,n.volume*120)}%`})):(this.updateLEDs(this.vuMeterCh1Leds,0),this.updateLEDs(this.vuMeterCh2Leds,0),this.updateLEDs(this.masterVuL,0),this.updateLEDs(this.masterVuR,0),this.horizVuBars.forEach(h=>{h.style.width="10%"}))}updateLEDs(t,e){if(!t)return;const n=t.length;for(let s=0;s<n;s++){const r=(n-1-s)/n,a=e>=r;t[s].className="led "+(a?s<=1?"lit-red":s<=2?"lit-orange":s<=3?"lit-yellow":"lit-green":"")}}updateSegmentedLEDs(t,e){if(!t||t.length===0)return;const n=t.length;for(let s=0;s<n;s++){const r=s/n;e>=r?s>=n-3?t[s].className="r-seg lit-yellow":s>=n-7?t[s].className="r-seg lit-green":t[s].className="r-seg lit-cyan":t[s].className="r-seg"}}}function wo(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container not found");return}const t=new em(i);let e=null;const n=new nm((r,a,o)=>{e&&e.onTrackChanged(r,a,o)},(r,a,o,c)=>{e&&e.onTransition(r,a,o,c)});e=new am(n,t);function s(){requestAnimationFrame(s);const r=n.update();t.setTrackInfo(n.currentTrack,n.nextTrack,n.elapsedTime,n.duration),(n.isPlaying||n.isCrossfading)&&e.updateProgress(n.elapsedTime,n.duration,r),t.update(r,n.isPlaying)}s()}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",wo):wo();
