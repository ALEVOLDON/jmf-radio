(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="170",li={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ec=0,ya=1,Sc=2,Uo=1,Fo=2,rn=3,hn=0,Pe=1,an=2,En=0,hi=1,Es=2,Ea=3,Sa=4,bc=5,Bn=100,Tc=101,wc=102,Ac=103,Cc=104,Rc=200,Pc=201,Lc=202,Dc=203,ur=204,fr=205,Ic=206,Bc=207,Uc=208,Fc=209,Nc=210,kc=211,Oc=212,zc=213,Gc=214,pr=0,mr=1,gr=2,fi=3,_r=4,vr=5,xr=6,Mr=7,No=0,Hc=1,Vc=2,Sn=0,Wc=1,Xc=2,qc=3,ko=4,jc=5,Yc=6,$c=7,Oo=300,pi=301,mi=302,yr=303,Er=304,Cs=306,Sr=1e3,Fn=1001,br=1002,je=1003,Kc=1004,Wi=1005,ke=1006,Is=1007,Nn=1008,dn=1009,zo=1010,Go=1011,Ni=1012,ta=1013,On=1014,on=1015,ki=1016,ea=1017,na=1018,gi=1020,Ho=35902,Vo=1021,Wo=1022,qe=1023,Xo=1024,qo=1025,di=1026,_i=1027,jo=1028,ia=1029,Yo=1030,sa=1031,ra=1033,gs=33776,_s=33777,vs=33778,xs=33779,Tr=35840,wr=35841,Ar=35842,Cr=35843,Rr=36196,Pr=37492,Lr=37496,Dr=37808,Ir=37809,Br=37810,Ur=37811,Fr=37812,Nr=37813,kr=37814,Or=37815,zr=37816,Gr=37817,Hr=37818,Vr=37819,Wr=37820,Xr=37821,Ms=36492,qr=36494,jr=36495,$o=36283,Yr=36284,$r=36285,Kr=36286,Jc=3200,Zc=3201,Ko=0,Qc=1,yn="",Ne="srgb",Mi="srgb-linear",Rs="linear",te="srgb",Xn=7680,ba=519,tl=512,el=513,nl=514,Jo=515,il=516,sl=517,rl=518,al=519,Ta=35044,wa="300 es",cn=2e3,Ss=2001;class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Ui=Math.PI/180,vi=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function aa(i,t){return(i%t+t)%t}function ol(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cl(i,t,e){return i!==t?(e-i)/(t-i):0}function Fi(i,t,e){return(1-e)*i+e*t}function ll(i,t,e,n){return Fi(i,t,1-Math.exp(-e*n))}function hl(i,t=1){return t-Math.abs(aa(i,t*2)-t)}function dl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ul(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pl(i,t){return i+Math.random()*(t-i)}function ml(i){return i*(.5-Math.random())}function gl(i){i!==void 0&&(Aa=i);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _l(i){return i*Ui}function vl(i){return i*vi}function xl(i){return(i&i-1)===0&&i!==0}function Ml(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function El(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zo={DEG2RAD:Ui,RAD2DEG:vi,generateUUID:yi,clamp:ve,euclideanModulo:aa,mapLinear:ol,inverseLerp:cl,lerp:Fi,damp:ll,pingpong:hl,smoothstep:dl,smootherstep:ul,randInt:fl,randFloat:pl,randFloatSpread:ml,seededRandom:gl,degToRad:_l,radToDeg:vl,isPowerOfTwo:xl,ceilPowerOfTwo:Ml,floorPowerOfTwo:yl,setQuaternionFromProperEuler:El,normalize:Se,denormalize:ri};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],b=s[4],y=s[7],D=s[2],w=s[5],A=s[8];return r[0]=a*_+o*S+c*D,r[3]=a*m+o*b+c*w,r[6]=a*d+o*y+c*A,r[1]=l*_+h*S+f*D,r[4]=l*m+h*b+f*w,r[7]=l*d+h*y+f*A,r[2]=u*_+p*S+g*D,r[5]=u*m+p*b+g*w,r[8]=u*d+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new kt;function Qo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sl(){const i=bs("canvas");return i.style.display="block",i}const Ca={};function Ii(i){i in Ca||(Ca[i]=!0,console.warn(i))}function bl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?Rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ra=[.64,.33,.3,.6,.15,.06],Pa=[.2126,.7152,.0722],La=[.3127,.329],Da=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Mi]:{primaries:Ra,whitePoint:La,transfer:Rs,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:Pa,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Ra,whitePoint:La,transfer:te,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:Pa,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let qn;class Al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=bs("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cl=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Us(s[a].image)):r.push(Us(s[a]))}else r=Us(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rl=0;class Te extends Hn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Fn,s=Fn,r=ke,a=Nn,o=qe,c=dn,l=Te.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=yi(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Oo;Te.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(p+1)/2,D=(d+1)/2,w=(h+u)/4,A=(f+_)/4,P=(g+m)/4;return b>y&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pl extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ec extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ll extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==u||l!==p||h!==g){let m=1-o;const d=c*u+l*p+h*g+f*_,S=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const D=Math.sqrt(b),w=Math.atan2(D,d*S);m=Math.sin(m*w)/D,o=Math.sin(o*w)/D}const y=o*S;if(c=c*m+u*y,l=l*m+p*y,h=h*m+g*y,f=f*m+_*y,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*p-l*u,t[e+1]=c*g+h*u+l*f-o*p,t[e+2]=l*g+h*p+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new R,Ba=new Gn;class Oi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),qi.subVectors(this.max,wi),jn.subVectors(t.a,wi),Yn.subVectors(t.b,wi),$n.subVectors(t.c,wi),pn.subVectors(Yn,jn),mn.subVectors($n,Yn),wn.subVectors(jn,$n);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-wn.z,wn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,wn.z,0,-wn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-wn.y,wn.x,0];return!Ns(e,jn,Yn,$n,qi)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,jn,Yn,$n,qi))?!1:(ji.crossVectors(pn,mn),e=[ji.x,ji.y,ji.z],Ns(e,jn,Yn,$n,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new R,new R,new R,new R,new R,new R,new R,new R],He=new R,Xi=new Oi,jn=new R,Yn=new R,$n=new R,pn=new R,mn=new R,wn=new R,wi=new R,qi=new R,ji=new R,An=new R;function Ns(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){An.fromArray(i,r);const o=s.x*Math.abs(An.x)+s.y*Math.abs(An.y)+s.z*Math.abs(An.z),c=t.dot(An),l=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Dl=new Oi,Ai=new R,ks=new R;class zi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(ks)),this.expandByPoint(Ai.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new R,Os=new R,Yi=new R,gn=new R,zs=new R,$i=new R,Gs=new R;class Ps{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Os.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Os);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=gn.dot(this.direction),c=-gn.dot(Yi),l=gn.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Os).addScaledVector(Yi,u),p}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,s,r){zs.subVectors(e,t),$i.subVectors(n,t),Gs.crossVectors(zs,$i);let a=this.direction.dot(Gs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,t);const c=o*this.direction.dot($i.crossVectors(gn,$i));if(c<0)return null;const l=o*this.direction.dot(zs.cross(gn));if(l<0||c+l>a)return null;const h=-o*gn.dot(Gs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,s,r,a,o,c,l,h,f,u,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,p,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,f,u,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*f,g=l*h,_=l*f;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*f,g=l*h,_=l*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Il,t,Bl)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),_n.crossVectors(n,De),_n.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),_n.crossVectors(n,De)),_n.normalize(),Ki.crossVectors(De,_n),s[0]=_n.x,s[4]=Ki.x,s[8]=De.x,s[1]=_n.y,s[5]=Ki.y,s[9]=De.y,s[2]=_n.z,s[6]=Ki.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],b=n[7],y=n[11],D=n[15],w=s[0],A=s[4],P=s[8],E=s[12],x=s[1],C=s[5],H=s[9],z=s[13],j=s[2],J=s[6],W=s[10],Y=s[14],k=s[3],et=s[7],it=s[11],ot=s[15];return r[0]=a*w+o*x+c*j+l*k,r[4]=a*A+o*C+c*J+l*et,r[8]=a*P+o*H+c*W+l*it,r[12]=a*E+o*z+c*Y+l*ot,r[1]=h*w+f*x+u*j+p*k,r[5]=h*A+f*C+u*J+p*et,r[9]=h*P+f*H+u*W+p*it,r[13]=h*E+f*z+u*Y+p*ot,r[2]=g*w+_*x+m*j+d*k,r[6]=g*A+_*C+m*J+d*et,r[10]=g*P+_*H+m*W+d*it,r[14]=g*E+_*z+m*Y+d*ot,r[3]=S*w+b*x+y*j+D*k,r[7]=S*A+b*C+y*J+D*et,r[11]=S*P+b*H+y*W+D*it,r[15]=S*E+b*z+y*Y+D*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*f-s*l*f-r*o*u+n*l*u+s*o*p-n*c*p)+_*(+e*c*p-e*l*u+r*a*u-s*a*p+s*l*h-r*c*h)+m*(+e*l*f-e*o*p-r*a*f+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-e*c*f+e*o*u+s*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=f*m*l-_*u*l+_*c*p-o*m*p-f*c*d+o*u*d,b=g*u*l-h*m*l-g*c*p+a*m*p+h*c*d-a*u*d,y=h*_*l-g*f*l+g*o*p-a*_*p-h*o*d+a*f*d,D=g*f*c-h*_*c-g*o*u+a*_*u+h*o*m-a*f*m,w=e*S+n*b+s*y+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=S*A,t[1]=(_*u*r-f*m*r-_*s*p+n*m*p+f*s*d-n*u*d)*A,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*d+n*c*d)*A,t[3]=(f*c*r-o*u*r-f*s*l+n*u*l+o*s*p-n*c*p)*A,t[4]=b*A,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*d+e*u*d)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*A,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*p+e*c*p)*A,t[8]=y*A,t[9]=(g*f*r-h*_*r-g*n*p+e*_*p+h*n*d-e*f*d)*A,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(h*_*s-g*f*s+g*n*u-e*_*u-h*n*m+e*f*m)*A,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,p=r*h,g=r*f,_=a*h,m=a*f,d=o*f,S=c*l,b=c*h,y=c*f,D=n.x,w=n.y,A=n.z;return s[0]=(1-(_+d))*D,s[1]=(p+y)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(u+d))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-S)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const l=1/r,h=1/a,f=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===cn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ss)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*l,p=(n+s)*h;let g,_;if(o===cn)g=(a+r)*f,_=-2*f;else if(o===Ss)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new R,Ve=new $t,Il=new R(0,0,0),Bl=new R(1,1,1),_n=new R,Ki=new R,De=new R,Ua=new $t,Fa=new Gn;class Ke{constructor(t=0,e=0,n=0,s=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ul=0;const Na=new R,Jn=new Gn,en=new $t,Ji=new R,Ci=new R,Fl=new R,Nl=new Gn,ka=new R(1,0,0),Oa=new R(0,1,0),za=new R(0,0,1),Ga={type:"added"},kl={type:"removed"},Zn={type:"childadded",child:null},Hs={type:"childremoved",child:null};class _e extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new R,e=new Ke,n=new Gn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new kt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(ka,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ka,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ci,Ji,this.up):en.lookAt(Ji,Ci,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(en),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ga),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kl),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ga),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Fl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Nl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new R,nn=new R,Vs=new R,sn=new R,Qn=new R,ti=new R,Ha=new R,Ws=new R,Xs=new R,qs=new R,js=new ne,Ys=new ne,$s=new ne;class Xe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),nn.subVectors(n,e),Vs.subVectors(t,e);const a=We.dot(We),o=We.dot(nn),c=We.dot(Vs),l=nn.dot(nn),h=nn.dot(Vs),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(o,sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return js.setScalar(0),Ys.setScalar(0),$s.setScalar(0),js.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(js,r.x),a.addScaledVector(Ys,r.y),a.addScaledVector($s,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),nn.subVectors(t,e),We.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),We.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ti.subVectors(r,n),Ws.subVectors(t,n);const c=Qn.dot(Ws),l=ti.dot(Ws);if(c<=0&&l<=0)return e.copy(n);Xs.subVectors(t,s);const h=Qn.dot(Xs),f=ti.dot(Xs);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Qn,a);qs.subVectors(t,r);const p=Qn.dot(qs),g=ti.dot(qs);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ti,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Ha.subVectors(r,s),o=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(Ha,o);const d=1/(m+_+u);return a=_*d,o=u*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=aa(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ks(a,r,t+1/3),this.g=Ks(a,r,t),this.b=Ks(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Yt.fromWorkingColorSpace(ye.copy(this),t),Math.round(ve(ye.r*255,0,255))*65536+Math.round(ve(ye.g*255,0,255))*256+Math.round(ve(ye.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,s=ye.g,r=ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ne){Yt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,s=ye.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Zi);const n=Fi(vn.h,Zi.h,e),s=Fi(vn.s,Zi.s,e),r=Fi(vn.l,Zi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ht;Ht.NAMES=ic;let Ol=0;class Vn extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=yi(),this.name="",this.blending=hi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=fr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class le extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,Qi=new It;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}}class sc extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rc extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zl=0;const Fe=new $t,Js=new _e,ei=new R,Ie=new Oi,Ri=new Oi,ge=new R;class we extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qo(t)?rc:sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ie.min,Ri.min),Ie.expandByPoint(ge),ge.addVectors(Ie.max,Ri.max),Ie.expandByPoint(ge)):(Ie.expandByPoint(Ri.min),Ie.expandByPoint(Ri.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(t,l),ge.add(ei)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,h=new R,f=new R,u=new It,p=new It,g=new It,_=new R,m=new R;function d(P,E,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(_),o[E].add(_),o[x].add(_),c[P].add(m),c[E].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const x=S[P],C=x.start,H=x.count;for(let z=C,j=C+H;z<j;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new R,y=new R,D=new R,w=new R;function A(P){D.fromBufferAttribute(s,P),w.copy(D);const E=o[P];b.copy(E),b.sub(D.multiplyScalar(D.dot(E))).normalize(),y.crossVectors(w,E);const C=y.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,C)}for(let P=0,E=S.length;P<E;++P){const x=S[P],C=x.start,H=x.count;for(let z=C,j=C+H;z<j;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)u[g++]=l[p++]}return new Oe(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new $t,Cn=new Ps,ts=new zi,Wa=new R,es=new R,ns=new R,is=new R,Zs=new R,ss=new R,Xa=new R,rs=new R;class q extends _e{constructor(t=new we,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Zs.fromBufferAttribute(f,t),a?ss.addScaledVector(Zs,h):ss.addScaledVector(Zs.sub(e),h))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(ts.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(ts,Wa)===null||Cn.origin.distanceToSquared(Wa)>(t.far-t.near)**2))&&(Va.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,D=b;y<D;y+=3){const w=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);s=as(this,d,t,n,l,h,f,w,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=as(this,a,t,n,l,h,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,D=b;y<D;y+=3){const w=y,A=y+1,P=y+2;s=as(this,d,t,n,l,h,f,w,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,b=m+1,y=m+2;s=as(this,a,t,n,l,h,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Gl(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===hn,o),c===null)return null;rs.copy(o),rs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:i}}function as(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,es),i.getVertexPosition(c,ns),i.getVertexPosition(l,is);const h=Gl(i,t,e,n,es,ns,is,Xa);if(h){const f=new R;Xe.getBarycoord(Xa,es,ns,is,f),s&&(h.uv=Xe.getInterpolatedAttribute(s,o,c,l,f,new It)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,o,c,l,f,new It)),a&&(h.normal=Xe.getInterpolatedAttribute(a,o,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};Xe.getNormal(es,ns,is,u.normal),h.face=u,h.barycoord=f}return h}class _t extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function g(_,m,d,S,b,y,D,w,A,P,E){const x=y/A,C=D/P,H=y/2,z=D/2,j=w/2,J=A+1,W=P+1;let Y=0,k=0;const et=new R;for(let it=0;it<W;it++){const ot=it*C-z;for(let yt=0;yt<J;yt++){const Bt=yt*x-H;et[_]=Bt*S,et[m]=ot*b,et[d]=j,l.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=w>0?1:-1,h.push(et.x,et.y,et.z),f.push(yt/A),f.push(1-it/P),Y+=1}}for(let it=0;it<P;it++)for(let ot=0;ot<A;ot++){const yt=u+ot+J*it,Bt=u+ot+J*(it+1),$=u+(ot+1)+J*(it+1),nt=u+(ot+1)+J*it;c.push(yt,Bt,nt),c.push(Bt,$,nt),k+=6}o.addGroup(p,k,E),p+=k,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const s in n)t[s]=n[s]}return t}function Hl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Vl={clone:xi,merge:be};var Wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wl,this.fragmentShader=Xl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Hl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new R,qa=new It,ja=new It;class Re extends oc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,qa,ja),e.subVectors(ja,qa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class ql extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Re(ni,ii,t,e);s.layers=this.layers,this.add(s);const r=new Re(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Re(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Re(ni,ii,t,e);o.layers=this.layers,this.add(o);const c=new Re(ni,ii,t,e);c.layers=this.layers,this.add(c);const l=new Re(ni,ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Te{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _t(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:En});r.uniforms.tEquirect.value=e;const a=new q(s,r),o=e.minFilter;return e.minFilter===Nn&&(e.minFilter=ke),new ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Qs=new R,Yl=new R,$l=new kt;class Mn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qs.subVectors(n,e).cross(Yl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$l.getNormalMatrix(t),s=this.coplanarPoint(Qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new zi,os=new R;class oa{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-r,u-l,m-p,y-d).normalize(),n[1].setComponents(c+r,u+l,m+p,y+d).normalize(),n[2].setComponents(c+a,u+h,m+g,y+S).normalize(),n[3].setComponents(c-a,u-h,m-g,y-S).normalize(),n[4].setComponents(c-o,u-f,m-_,y-b).normalize(),e===cn)n[5].setComponents(c+o,u+f,m+_,y+b).normalize();else if(e===Ss)n[5].setComponents(o,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(os.x=s.normal.x>0?t.max.x:t.min.x,os.y=s.normal.y>0?t.max.y:t.min.y,os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kl(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Be extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const S=d*u-a;for(let b=0;b<l;b++){const y=b*f-r;g.push(y,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const b=S+l*d,y=S+l*(d+1),D=S+1+l*(d+1),w=S+1+l*d;p.push(b,y,w),p.push(y,D,w)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zl=`#ifdef USE_ALPHAHASH
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
#endif`,Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
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
#endif`,sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh=`#ifdef USE_BATCHING
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
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
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
}`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hh=`uniform bool receiveShadow;
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
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
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
#endif`,$h=`struct PhysicalMaterial {
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
}`,Kh=`
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ud=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nu=`#include <common>
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
}`,iu=`#if DEPTH_PACKING == 3200
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
}`,su=`#define DISTANCE
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
}`,ru=`#define DISTANCE
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`uniform float scale;
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
}`,lu=`uniform vec3 diffuse;
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
}`,hu=`#include <common>
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
}`,du=`uniform vec3 diffuse;
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
}`,uu=`#define LAMBERT
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
}`,fu=`#define LAMBERT
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
}`,pu=`#define MATCAP
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
}`,mu=`#define MATCAP
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
}`,gu=`#define NORMAL
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
}`,_u=`#define NORMAL
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
}`,vu=`#define PHONG
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
}`,xu=`#define PHONG
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
}`,Mu=`#define STANDARD
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
}`,yu=`#define STANDARD
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
}`,Eu=`#define TOON
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
}`,Su=`#define TOON
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
}`,bu=`uniform float size;
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
}`,Tu=`uniform vec3 diffuse;
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
}`,wu=`#include <common>
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
}`,Au=`uniform vec3 color;
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
}`,Cu=`uniform float rotation;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Jl,alphahash_pars_fragment:Zl,alphamap_fragment:Ql,alphamap_pars_fragment:th,alphatest_fragment:eh,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:sh,batching_pars_vertex:rh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:ch,bsdfs:lh,iridescence_fragment:hh,bumpmap_pars_fragment:dh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:vh,color_vertex:xh,common:Mh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Sh,displacementmap_vertex:bh,emissivemap_fragment:Th,emissivemap_pars_fragment:wh,colorspace_fragment:Ah,colorspace_pars_fragment:Ch,envmap_fragment:Rh,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Vh,envmap_vertex:Ih,fog_vertex:Bh,fog_pars_vertex:Uh,fog_fragment:Fh,fog_pars_fragment:Nh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Oh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Hh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:jh,lights_physical_fragment:Yh,lights_physical_pars_fragment:$h,lights_fragment_begin:Kh,lights_fragment_maps:Jh,lights_fragment_end:Zh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:od,metalnessmap_pars_fragment:cd,morphinstance_vertex:ld,morphcolor_vertex:hd,morphnormal_vertex:dd,morphtarget_pars_vertex:ud,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Sd,opaque_fragment:bd,packing:Td,premultiplied_alpha_fragment:wd,project_vertex:Ad,dithering_fragment:Cd,dithering_pars_fragment:Rd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Id,shadowmap_vertex:Bd,shadowmask_pars_fragment:Ud,skinbase_vertex:Fd,skinning_pars_vertex:Nd,skinning_vertex:kd,skinnormal_vertex:Od,specularmap_fragment:zd,specularmap_pars_fragment:Gd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Vd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:jd,uv_vertex:Yd,worldpos_vertex:$d,background_vert:Kd,background_frag:Jd,backgroundCube_vert:Zd,backgroundCube_frag:Qd,cube_vert:tu,cube_frag:eu,depth_vert:nu,depth_frag:iu,distanceRGBA_vert:su,distanceRGBA_frag:ru,equirect_vert:au,equirect_frag:ou,linedashed_vert:cu,linedashed_frag:lu,meshbasic_vert:hu,meshbasic_frag:du,meshlambert_vert:uu,meshlambert_frag:fu,meshmatcap_vert:pu,meshmatcap_frag:mu,meshnormal_vert:gu,meshnormal_frag:_u,meshphong_vert:vu,meshphong_frag:xu,meshphysical_vert:Mu,meshphysical_frag:yu,meshtoon_vert:Eu,meshtoon_frag:Su,points_vert:bu,points_frag:Tu,shadow_vert:wu,shadow_frag:Au,sprite_vert:Cu,sprite_frag:Ru},ht={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},$e={basic:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:be([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:be([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:be([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:be([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:be([ht.lights,ht.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};$e.physical={uniforms:be([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const cs={r:0,b:0,g:0},Pn=new Ke,Pu=new $t;function Lu(i,t,e,n,s,r,a){const o=new Ht(0);let c=r===!0?0:1,l,h,f=null,u=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function _(S){let b=!1;const y=g(S);y===null?d(o,c):y&&y.isColor&&(d(y,1),b=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===Cs)?(h===void 0&&(h=new q(new _t(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:xi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pn.copy(b.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pu.makeRotationFromEuler(Pn)),h.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,(f!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new q(new Be(2,2),new bn({name:"BackgroundMaterial",uniforms:xi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,b){S.getRGB(cs,ac(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(o,c)},render:_,addToRenderList:m}}function Du(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,C,H,z,j){let J=!1;const W=f(z,H,C);r!==W&&(r=W,l(r.object)),J=p(x,z,H,j),J&&g(x,z,H,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(x,C,H,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,C,H){const z=H.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let J=j[C.id];J===void 0&&(J={},j[C.id]=J);let W=J[z];return W===void 0&&(W=u(c()),J[z]=W),W}function u(x){const C=[],H=[],z=[];for(let j=0;j<e;j++)C[j]=0,H[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,C,H,z){const j=r.attributes,J=C.attributes;let W=0;const Y=H.getAttributes();for(const k in Y)if(Y[k].location>=0){const it=j[k];let ot=J[k];if(ot===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),it===void 0||it.attribute!==ot||ot&&it.data!==ot.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(x,C,H,z){const j={},J=C.attributes;let W=0;const Y=H.getAttributes();for(const k in Y)if(Y[k].location>=0){let it=J[k];it===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));const ot={};ot.attribute=it,it&&it.data&&(ot.data=it.data),j[k]=ot,W++}r.attributes=j,r.attributesNum=W,r.index=z}function _(){const x=r.newAttributes;for(let C=0,H=x.length;C<H;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const H=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;H[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),j[x]!==C&&(i.vertexAttribDivisor(x,C),j[x]=C)}function S(){const x=r.newAttributes,C=r.enabledAttributes;for(let H=0,z=C.length;H<z;H++)C[H]!==x[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function b(x,C,H,z,j,J,W){W===!0?i.vertexAttribIPointer(x,C,H,j,J):i.vertexAttribPointer(x,C,H,z,j,J)}function y(x,C,H,z){_();const j=z.attributes,J=H.getAttributes(),W=C.defaultAttributeValues;for(const Y in J){const k=J[Y];if(k.location>=0){let et=j[Y];if(et===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const it=et.normalized,ot=et.itemSize,yt=t.get(et);if(yt===void 0)continue;const Bt=yt.buffer,$=yt.type,nt=yt.bytesPerElement,gt=$===i.INT||$===i.UNSIGNED_INT||et.gpuType===ta;if(et.isInterleavedBufferAttribute){const lt=et.data,Ct=lt.stride,Pt=et.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)d(k.location+Ot,lt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)m(k.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Ot=0;Ot<k.locationSize;Ot++)b(k.location+Ot,ot/k.locationSize,$,it,Ct*nt,(Pt+ot/k.locationSize*Ot)*nt,gt)}else{if(et.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)d(k.location+lt,et.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let lt=0;lt<k.locationSize;lt++)m(k.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let lt=0;lt<k.locationSize;lt++)b(k.location+lt,ot/k.locationSize,$,it,ot*nt,ot/k.locationSize*lt*nt,gt)}}else if(W!==void 0){const it=W[Y];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(k.location,it);break;case 3:i.vertexAttrib3fv(k.location,it);break;case 4:i.vertexAttrib4fv(k.location,it);break;default:i.vertexAttrib1fv(k.location,it)}}}}S()}function D(){P();for(const x in n){const C=n[x];for(const H in C){const z=C[H];for(const j in z)h(z[j].object),delete z[j];delete C[H]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const H in C){const z=C[H];for(const j in z)h(z[j].object),delete z[j];delete C[H]}delete n[x.id]}function A(x){for(const C in n){const H=n[C];if(H[x.id]===void 0)continue;const z=H[x.id];for(const j in z)h(z[j].object),delete z[j];delete H[x.id]}}function P(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Iu(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function c(l,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Bu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:D,maxSamples:w}}function Uu(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,b=S*4;let y=d.clippingState||null;c.value=y,y=h(g,u,b,p);for(let D=0;D!==b;++D)y[D]=e[D];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,y=p;b!==_;++b,y+=4)a.copy(f[b]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Fu(i){let t=new WeakMap;function e(a,o){return o===yr?a.mapping=pi:o===Er&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yr||o===Er)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new jl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Nu extends oc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,Ya=[.125,.215,.35,.446,.526,.582],Un=20,tr=new Nu,$a=new Ht;let er=null,nr=0,ir=0,sr=!1;const In=(1+Math.sqrt(5))/2,si=1/In,Ka=[new R(-In,si,0),new R(In,si,0),new R(-si,0,In),new R(si,0,In),new R(0,In,-si),new R(0,In,si),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(er,nr,ir),this._renderer.xr.enabled=sr,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ki,format:qe,colorSpace:Mi,depthBuffer:!1},s=Za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(r)),this._blurMaterial=Ou(r,t,e)}return s}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s){const o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor($a),h.toneMapping=Sn,h.autoClear=!1;const p=new le({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new q(new _t,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy($a),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):S===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const b=this._cubeSize;ls(s,S*b,d>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ka[(s-r-1)%Ka.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new q(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Un-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Un;m>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const d=[];let S=0;for(let A=0;A<Un;++A){const P=A/_,E=Math.exp(-P*P/2);d.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const y=this._sizeLods[s],D=3*y*(s>b-oi?s-b+oi:0),w=4*(this._cubeSize-y);ls(e,D,w,3*y,2*y),c.setRenderTarget(e),c.render(f,tr)}}function ku(i){const t=[],e=[],n=[];let s=i;const r=i-oi+1+Ya.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-oi?c=Ya[a-i+oi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(E,_*g*w),b.set(u,m*g*w);const x=[w,w,w,w,w,w];y.set(x,d*g*w)}const D=new we;D.setAttribute("position",new Oe(S,_)),D.setAttribute("uv",new Oe(b,m)),D.setAttribute("faceIndex",new Oe(y,d)),t.push(D),s>oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Za(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ou(i,t,e){const n=new Float32Array(Un),s=new R(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ca(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Qa(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function to(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function zu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yr||c===Er,h=c===pi||c===mi;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Ja(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ja(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Gu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hu(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const u=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,y=S.length;b<y;b+=3){const D=S[b+0],w=S[b+1],A=S[b+2];u.push(D,w,w,A,A,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const D=b+0,w=b+1,A=b+2;u.push(D,w,w,A,A,D)}}else return;const m=new(Qo(u)?rc:sc)(u,1);m.version=_;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Vu(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)l(u[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Wu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xu(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let D=o.attributes.position.count*y,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*w*4*f),P=new ec(A,D,w,f);P.type=on,P.needsUpdate=!0;const E=y*4;for(let C=0;C<f;C++){const H=d[C],z=S[C],j=b[C],J=D*w*4*C;for(let W=0;W<H.count;W++){const Y=W*E;g===!0&&(s.fromBufferAttribute(H,W),A[J+Y+0]=s.x,A[J+Y+1]=s.y,A[J+Y+2]=s.z,A[J+Y+3]=0),_===!0&&(s.fromBufferAttribute(z,W),A[J+Y+4]=s.x,A[J+Y+5]=s.y,A[J+Y+6]=s.z,A[J+Y+7]=0),m===!0&&(s.fromBufferAttribute(j,W),A[J+Y+8]=s.x,A[J+Y+9]=s.y,A[J+Y+10]=s.z,A[J+Y+11]=j.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new It(D,w)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class hc extends Te{constructor(t,e,n,s,r,a,o,c,l,h=di){if(h!==di&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=On),n===void 0&&h===_i&&(n=gi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dc=new Te,eo=new hc(1,1),uc=new ec,fc=new Ll,pc=new cc,no=[],io=[],so=new Float32Array(16),ro=new Float32Array(9),ao=new Float32Array(4);function Ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=no[s];if(r===void 0&&(r=new Float32Array(s),no[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ls(i,t){let e=io[t];e===void 0&&(e=new Int32Array(t),io[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ju(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function $u(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Ju(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ao.set(n),i.uniformMatrix2fv(this.addr,!1,ao),me(e,n)}}function Zu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ro.set(n),i.uniformMatrix3fv(this.addr,!1,ro),me(e,n)}}function Qu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;so.set(n),i.uniformMatrix4fv(this.addr,!1,so),me(e,n)}}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eo.compareFunction=Jo,r=eo):r=dc,e.setTexture2D(t||r,s)}function hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fc,s)}function df(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pc,s)}function uf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uc,s)}function ff(i){switch(i){case 5126:return ju;case 35664:return Yu;case 35665:return $u;case 35666:return Ku;case 35674:return Ju;case 35675:return Zu;case 35676:return Qu;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return uf}}function pf(i,t){i.uniform1fv(this.addr,t)}function mf(i,t){const e=Ei(t,this.size,2);i.uniform2fv(this.addr,e)}function gf(i,t){const e=Ei(t,this.size,3);i.uniform3fv(this.addr,e)}function _f(i,t){const e=Ei(t,this.size,4);i.uniform4fv(this.addr,e)}function vf(i,t){const e=Ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xf(i,t){const e=Ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mf(i,t){const e=Ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yf(i,t){i.uniform1iv(this.addr,t)}function Ef(i,t){i.uniform2iv(this.addr,t)}function Sf(i,t){i.uniform3iv(this.addr,t)}function bf(i,t){i.uniform4iv(this.addr,t)}function Tf(i,t){i.uniform1uiv(this.addr,t)}function wf(i,t){i.uniform2uiv(this.addr,t)}function Af(i,t){i.uniform3uiv(this.addr,t)}function Cf(i,t){i.uniform4uiv(this.addr,t)}function Rf(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||dc,r[a])}function Pf(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||fc,r[a])}function Lf(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||pc,r[a])}function Df(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uc,r[a])}function If(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return Mf;case 5124:case 35670:return yf;case 35667:case 35671:return Ef;case 35668:case 35672:return Sf;case 35669:case 35673:return bf;case 5125:return Tf;case 36294:return wf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}class Bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ff(e.type)}}class Uf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=If(e.type)}}class Ff{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function oo(i,t){i.seq.push(t),i.map[t.id]=t}function Nf(i,t,e){const n=i.name,s=n.length;for(rr.lastIndex=0;;){const r=rr.exec(n),a=rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){oo(e,l===void 0?new Bf(o,i,t):new Uf(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ff(o),oo(e,f)),e=f}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function co(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kf=37297;let Of=0;function zf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const lo=new kt;function Gf(i){Yt._getMatrix(lo,Yt.workingColorSpace,i);const t=`mat3( ${lo.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ho(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zf(i.getShaderSource(t),a)}else return s}function Hf(i,t){const e=Gf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vf(i,t){let e;switch(t){case Wc:e="Linear";break;case Xc:e="Reinhard";break;case qc:e="Cineon";break;case ko:e="ACESFilmic";break;case Yc:e="AgX";break;case $c:e="Neutral";break;case jc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new R;function Wf(){Yt.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function qf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bi(i){return i!==""}function uo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(i){return i.replace(Yf,Kf)}const $f=new Map;function Kf(i,t){let e=Gt[t];if(e===void 0){const n=$f.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jr(e)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function po(i){return i.replace(Jf,Zf)}function Zf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function tp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ep(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function np(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:t="ENVMAP_BLENDING_MULTIPLY";break;case Hc:t="ENVMAP_BLENDING_MIX";break;case Vc:t="ENVMAP_BLENDING_ADD";break}return t}function ip(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Qf(e),l=tp(e),h=ep(e),f=np(e),u=ip(e),p=Xf(e),g=qf(r),_=s.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),d.length>0&&(d+=`
`)):(m=[mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),d=[mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Vf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Hf("linearToOutputTexel",e.outputColorSpace),Wf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=Jr(a),a=uo(a,e),a=fo(a,e),o=Jr(o),o=uo(o,e),o=fo(o,e),a=po(a),o=po(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=S+m+a,y=S+d+o,D=co(s,s.VERTEX_SHADER,b),w=co(s,s.FRAGMENT_SHADER,y);s.attachShader(_,D),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),j=s.getShaderInfoLog(w).trim();let J=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,w);else{const Y=ho(s,D,"vertex"),k=ho(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Y+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||j==="")&&(W=!1);W&&(C.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(D),s.deleteShader(w),P=new ys(s,_),E=jf(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,kf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Of++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let rp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new op(t),e.set(t,n)),n}}class op{constructor(t){this.id=rp++,this.code=t,this.usedTimes=0}}function cp(i,t,e,n,s,r,a){const o=new nc,c=new ap,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,C,H,z){const j=H.fog,J=z.geometry,W=E.isMeshStandardMaterial?H.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),k=Y&&Y.mapping===Cs?Y.image.height:null,et=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=it!==void 0?it.length:0;let yt=0;J.morphAttributes.position!==void 0&&(yt=1),J.morphAttributes.normal!==void 0&&(yt=2),J.morphAttributes.color!==void 0&&(yt=3);let Bt,$,nt,gt;if(et){const Qt=$e[et];Bt=Qt.vertexShader,$=Qt.fragmentShader}else Bt=E.vertexShader,$=E.fragmentShader,c.update(E),nt=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,re=!!E.map,Vt=!!E.matcap,ce=!!Y,B=!!E.aoMap,Ee=!!E.lightMap,Xt=!!E.bumpMap,F=!!E.normalMap,O=!!E.displacementMap,ct=!!E.emissiveMap,at=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,N=E.clearcoat>0,Z=E.dispersion>0,tt=E.iridescence>0,K=E.sheen>0,Et=E.transmission>0,dt=v&&!!E.anisotropyMap,vt=N&&!!E.clearcoatMap,qt=N&&!!E.clearcoatNormalMap,st=N&&!!E.clearcoatRoughnessMap,xt=tt&&!!E.iridescenceMap,Rt=tt&&!!E.iridescenceThicknessMap,Lt=K&&!!E.sheenColorMap,Mt=K&&!!E.sheenRoughnessMap,jt=!!E.specularMap,zt=!!E.specularColorMap,ie=!!E.specularIntensityMap,L=Et&&!!E.transmissionMap,ut=Et&&!!E.thicknessMap,X=!!E.gradientMap,Q=!!E.alphaMap,mt=E.alphaTest>0,ft=!!E.alphaHash,Ut=!!E.extensions;let he=Sn;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(he=i.toneMapping);const xe={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:Bt,fragmentShader:$,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Mi,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Vt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Ee,bumpMap:Xt,normalMap:F,displacementMap:u&&O,emissiveMap:ct,normalMapObjectSpace:F&&E.normalMapType===Qc,normalMapTangentSpace:F&&E.normalMapType===Ko,metalnessMap:at,roughnessMap:T,anisotropy:v,anisotropyMap:dt,clearcoat:N,clearcoatMap:vt,clearcoatNormalMap:qt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:Rt,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:jt,specularColorMap:zt,specularIntensityMap:ie,transmission:Et,transmissionMap:L,thicknessMap:ut,gradientMap:X,opaque:E.transparent===!1&&E.blending===hi&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:ft,combine:E.combine,mapUv:re&&_(E.map.channel),aoMapUv:B&&_(E.aoMap.channel),lightMapUv:Ee&&_(E.lightMap.channel),bumpMapUv:Xt&&_(E.bumpMap.channel),normalMapUv:F&&_(E.normalMap.channel),displacementMapUv:O&&_(E.displacementMap.channel),emissiveMapUv:ct&&_(E.emissiveMap.channel),metalnessMapUv:at&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:dt&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(E.sheenRoughnessMap.channel),specularMapUv:jt&&_(E.specularMap.channel),specularColorMapUv:zt&&_(E.specularColorMap.channel),specularIntensityMapUv:ie&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:ut&&_(E.thicknessMap.channel),alphaMapUv:Q&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(F||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(re||Q),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function d(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)x.push(C),x.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(S(x,E),b(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function b(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const x=g[E.type];let C;if(x){const H=$e[x];C=Vl.clone(H.uniforms)}else C=E.uniforms;return C}function D(E,x){let C;for(let H=0,z=h.length;H<z;H++){const j=h[H];if(j.cacheKey===x){C=j,++C.usedTimes;break}}return C===void 0&&(C=new sp(i,x,E,r),h.push(C)),C}function w(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function lp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function go(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _o(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,p,g,_,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,u,p,g,_,m){const d=a(f,u,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(f,u,p,g,_,m){const d=a(f,u,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,u){e.length>1&&e.sort(f||hp),n.length>1&&n.sort(u||go),s.length>1&&s.sort(u||go)}function h(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function dp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _o,i.set(n,[a])):s>=r.length?(a=new _o,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function up(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ht};break;case"SpotLight":e={position:new R,direction:new R,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function fp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pp=0;function mp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gp(i){const t=new up,e=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new $t,a=new $t;function o(l){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,b=0,y=0,D=0,w=0,A=0;l.sort(mp);for(let E=0,x=l.length;E<x;E++){const C=l[E],H=C.color,z=C.intensity,j=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*z,f+=H.g*z,u+=H.b*z;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],z);A++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=W,p++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=j,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;const Y=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Y.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=J,y++}_++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Y=C.shadow,k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(z),W.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==D||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=D,P.numLightProbes=A,n.version=pp++)}function c(l,h){let f=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const b=l[d];if(b.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function vo(i){const t=new gp(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function _p(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vo(i),t.set(s,[o])):r>=a.length?(o=new vo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class vp extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xp extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
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
}`;function Ep(i,t,e){let n=new oa;const s=new It,r=new It,a=new ne,o=new vp({depthPacking:Zc}),c=new xp,l={},h=e.maxTextureSize,f={[hn]:Pe,[Pe]:hn,[an]:an},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Mp,fragmentShader:yp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new q(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let d=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(En),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=d!==rn&&this.type===rn,j=d===rn&&this.type!==rn;for(let J=0,W=w.length;J<W;J++){const Y=w[J],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const et=k.getFrameExtents();if(s.multiply(et),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,k.mapSize.y=r.y)),k.map===null||z===!0||j===!0){const ot=this.type!==rn?{minFilter:je,magFilter:je}:{};k.map!==null&&k.map.dispose(),k.map=new zn(s.x,s.y,ot),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const it=k.getViewportCount();for(let ot=0;ot<it;ot++){const yt=k.getViewport(ot);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),H.viewport(a),k.updateMatrices(Y,ot),n=k.getFrustum(),y(A,P,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===rn&&S(k,P),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,C)};function S(w,A){const P=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function b(w,A,P,E){let x=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=x.uuid,z=A.uuid;let j=l[H];j===void 0&&(j={},l[H]=j);let J=j[z];J===void 0&&(J=x.clone(),j[z]=J,A.addEventListener("dispose",D)),x=J}if(x.visible=A.visible,x.wireframe=A.wireframe,E===rn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=i.properties.get(x);H.light=P}return x}function y(w,A,P,E,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=t.update(w),j=w.material;if(Array.isArray(j)){const J=z.groups;for(let W=0,Y=J.length;W<Y;W++){const k=J[W],et=j[k.materialIndex];if(et&&et.visible){const it=b(w,et,E,x);w.onBeforeShadow(i,w,A,P,z,it,k),i.renderBufferDirect(P,null,z,it,w,k),w.onAfterShadow(i,w,A,P,z,it,k)}}}else if(j.visible){const J=b(w,j,E,x);w.onBeforeShadow(i,w,A,P,z,J,null),i.renderBufferDirect(P,null,z,J,w,null),w.onAfterShadow(i,w,A,P,z,J,null)}}const H=w.children;for(let z=0,j=H.length;z<j;z++)y(H[z],A,P,E,x)}function D(w){w.target.removeEventListener("dispose",D);for(const P in l){const E=l[P],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Sp={[pr]:mr,[gr]:xr,[_r]:Mr,[fi]:vr,[mr]:pr,[xr]:gr,[Mr]:_r,[vr]:fi};function bp(i,t){function e(){let L=!1;const ut=new ne;let X=null;const Q=new ne(0,0,0,0);return{setMask:function(mt){X!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){L=mt},setClear:function(mt,ft,Ut,he,xe){xe===!0&&(mt*=he,ft*=he,Ut*=he),ut.set(mt,ft,Ut,he),Q.equals(ut)===!1&&(i.clearColor(mt,ft,Ut,he),Q.copy(ut))},reset:function(){L=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,X=null,Q=null,mt=null;return{setReversed:function(ft){if(ut!==ft){const Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const he=mt;mt=null,this.setClear(he)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){X!==ft&&!L&&(i.depthMask(ft),X=ft)},setFunc:function(ft){if(ut&&(ft=Sp[ft]),Q!==ft){switch(ft){case pr:i.depthFunc(i.NEVER);break;case mr:i.depthFunc(i.ALWAYS);break;case gr:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case _r:i.depthFunc(i.EQUAL);break;case vr:i.depthFunc(i.GEQUAL);break;case xr:i.depthFunc(i.GREATER);break;case Mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ft}},setLocked:function(ft){L=ft},setClear:function(ft){mt!==ft&&(ut&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){L=!1,X=null,Q=null,mt=null,ut=!1}}}function s(){let L=!1,ut=null,X=null,Q=null,mt=null,ft=null,Ut=null,he=null,xe=null;return{setTest:function(Qt){L||(Qt?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!L&&(i.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,ze,Je){(X!==Qt||Q!==ze||mt!==Je)&&(i.stencilFunc(Qt,ze,Je),X=Qt,Q=ze,mt=Je)},setOp:function(Qt,ze,Je){(ft!==Qt||Ut!==ze||he!==Je)&&(i.stencilOp(Qt,ze,Je),ft=Qt,Ut=ze,he=Je)},setLocked:function(Qt){L=Qt},setClear:function(Qt){xe!==Qt&&(i.clearStencil(Qt),xe=Qt)},reset:function(){L=!1,ut=null,X=null,Q=null,mt=null,ft=null,Ut=null,he=null,xe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,b=null,y=null,D=null,w=null,A=new Ht(0,0,0),P=0,E=!1,x=null,C=null,H=null,z=null,j=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=Y>=2);let et=null,it={};const ot=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Bt=new ne().fromArray(ot),$=new ne().fromArray(yt);function nt(L,ut,X,Q){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(L,ft),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<X;Ut++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const gt={};gt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(fi),Xt(!1),F(ya),lt(i.CULL_FACE),B(En);function lt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ct(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Pt(L,ut){return f[L]!==ut?(i.bindFramebuffer(L,ut),f[L]=ut,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ot(L,ut){let X=p,Q=!1;if(L){X=u.get(ut),X===void 0&&(X=[],u.set(ut,X));const mt=L.textures;if(X.length!==mt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ut=mt.length;ft<Ut;ft++)X[ft]=i.COLOR_ATTACHMENT0+ft;X.length=mt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function re(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Vt={[Bn]:i.FUNC_ADD,[Tc]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};Vt[Ac]=i.MIN,Vt[Cc]=i.MAX;const ce={[Rc]:i.ZERO,[Pc]:i.ONE,[Lc]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Uc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Bc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[Oc]:i.ONE_MINUS_CONSTANT_COLOR,[zc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(L,ut,X,Q,mt,ft,Ut,he,xe,Qt){if(L===En){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),L!==bc){if(L!==m||Qt!==E){if((d!==Bn||y!==Bn)&&(i.blendEquation(i.FUNC_ADD),d=Bn,y=Bn),Qt)switch(L){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,D=null,w=null,A.set(0,0,0),P=0,m=L,E=Qt}return}mt=mt||ut,ft=ft||X,Ut=Ut||Q,(ut!==d||mt!==y)&&(i.blendEquationSeparate(Vt[ut],Vt[mt]),d=ut,y=mt),(X!==S||Q!==b||ft!==D||Ut!==w)&&(i.blendFuncSeparate(ce[X],ce[Q],ce[ft],ce[Ut]),S=X,b=Q,D=ft,w=Ut),(he.equals(A)===!1||xe!==P)&&(i.blendColor(he.r,he.g,he.b,xe),A.copy(he),P=xe),m=L,E=!1}function Ee(L,ut){L.side===an?Ct(i.CULL_FACE):lt(i.CULL_FACE);let X=L.side===Pe;ut&&(X=!X),Xt(X),L.blending===hi&&L.transparent===!1?B(En):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function F(L){L!==Ec?(lt(i.CULL_FACE),L!==C&&(L===ya?i.cullFace(i.BACK):L===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),C=L}function O(L){L!==H&&(W&&i.lineWidth(L),H=L)}function ct(L,ut,X){L?(lt(i.POLYGON_OFFSET_FILL),(z!==ut||j!==X)&&(i.polygonOffset(ut,X),z=ut,j=X)):Ct(i.POLYGON_OFFSET_FILL)}function at(L){L?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+J-1),et!==L&&(i.activeTexture(L),et=L)}function v(L,ut,X){X===void 0&&(et===null?X=i.TEXTURE0+J-1:X=et);let Q=it[X];Q===void 0&&(Q={type:void 0,texture:void 0},it[X]=Q),(Q.type!==L||Q.texture!==ut)&&(et!==X&&(i.activeTexture(X),et=X),i.bindTexture(L,ut||gt[L]),Q.type=L,Q.texture=ut)}function N(){const L=it[et];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Bt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function Mt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function jt(L,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let Q=X.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(ut,L.name),X.set(L,Q))}function zt(L,ut){const Q=l.get(ut).get(L);c.get(ut)!==Q&&(i.uniformBlockBinding(ut,Q,L.__bindingPointIndex),c.set(ut,Q))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,it={},f={},u=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,b=null,y=null,D=null,w=null,A=new Ht(0,0,0),P=0,E=!1,x=null,C=null,H=null,z=null,j=null,Bt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:re,setBlending:B,setMaterial:Ee,setFlipSided:Xt,setCullFace:F,setLineWidth:O,setPolygonOffset:ct,setScissorTest:at,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:xt,texImage3D:Rt,updateUBOMapping:jt,uniformBlockBinding:zt,texStorage2D:qt,texStorage3D:st,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Lt,viewport:Mt,reset:ie}}function xo(i,t,e,n){const s=Tp(n);switch(e){case Vo:return i*t;case Xo:return i*t;case qo:return i*t*2;case jo:return i*t/s.components*s.byteLength;case ia:return i*t/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case sa:return i*t*2/s.components*s.byteLength;case Wo:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case ra:return i*t*4/s.components*s.byteLength;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:case Cr:return Math.max(i,16)*Math.max(t,8)/4;case Tr:case Ar:return Math.max(i,8)*Math.max(t,8)/2;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Br:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Or:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ms:case qr:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case Yr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $r:case Kr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case dn:case zo:return{byteLength:1,components:1};case Ni:case Go:case ki:return{byteLength:2,components:1};case ea:case na:return{byteLength:2,components:4};case On:case ta:case on:return{byteLength:4,components:1};case Ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):bs("canvas")}function _(T,v,N){let Z=1;const tt=at(T);if((tt.width>N||tt.height>N)&&(Z=N/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Z*tt.width),Et=Math.floor(Z*tt.height);f===void 0&&(f=g(K,Et));const dt=v?g(K,Et):f;return dt.width=K,dt.height=Et,dt.getContext("2d").drawImage(T,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Et+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,N,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),v===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){const Et=tt?Rs:Yt.getTransfer(Z);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=Et===te?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(T,v){let N;return T?v===null||v===On||v===gi?N=i.DEPTH24_STENCIL8:v===on?N=i.DEPTH32F_STENCIL8:v===Ni&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===gi?N=i.DEPTH_COMPONENT24:v===on?N=i.DEPTH_COMPONENT32F:v===Ni&&(N=i.DEPTH_COMPONENT16),N}function D(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),x(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,Z=u.get(N);if(Z){const tt=Z[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(Z).length===0&&u.delete(N)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const N=T.source,Z=u.get(N);delete Z[v.__cacheKey],a.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let tt=0;tt<v.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let Z=0,tt=N.length;Z<tt;Z++){const K=n.get(N[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(T)}let C=0;function H(){C=0}function z(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function j(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){const N=n.get(T);if(T.isVideoTexture&&O(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,T,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function W(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function Y(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function k(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){nt(N,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const et={[Sr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[br]:i.MIRRORED_REPEAT},it={[je]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},ot={[tl]:i.NEVER,[al]:i.ALWAYS,[el]:i.LESS,[Jo]:i.LEQUAL,[nl]:i.EQUAL,[rl]:i.GEQUAL,[il]:i.GREATER,[sl]:i.NOTEQUAL};function yt(T,v){if(v.type===on&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Is||v.magFilter===Wi||v.magFilter===Nn||v.minFilter===ke||v.minFilter===Is||v.minFilter===Wi||v.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,et[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Wi&&v.minFilter!==Nn||v.type===on&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Bt(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));const K=j(v);if(K!==T.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),tt[K].usedTimes++;const Et=tt[T.__cacheKey];Et!==void 0&&(tt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),T.__cacheKey=K,T.__webglTexture=tt[K].texture}return N}function $(T,v,N){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Bt(T,v),K=v.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+N);const Et=n.get(K);if(K.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+N);const dt=Yt.getPrimaries(Yt.workingColorSpace),vt=v.colorSpace===yn?null:Yt.getPrimaries(v.colorSpace),qt=v.colorSpace===yn||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=_(v.image,!1,s.maxTextureSize);st=ct(v,st);const xt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let Lt=b(v.internalFormat,xt,Rt,v.colorSpace,v.isVideoTexture);yt(Z,v);let Mt;const jt=v.mipmaps,zt=v.isVideoTexture!==!0,ie=Et.__version===void 0||tt===!0,L=K.dataReady,ut=D(v,st);if(v.isDepthTexture)Lt=y(v.format===_i,v.type),ie&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,xt,Rt,null));else if(v.isDataTexture)if(jt.length>0){zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,jt[0].width,jt[0].height);for(let X=0,Q=jt.length;X<Q;X++)Mt=jt[X],zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,xt,Rt,Mt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,Mt.width,Mt.height,0,xt,Rt,Mt.data);v.generateMipmaps=!1}else zt?(ie&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,st.width,st.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,xt,Rt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,xt,Rt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Lt,jt[0].width,jt[0].height,st.depth);for(let X=0,Q=jt.length;X<Q;X++)if(Mt=jt[X],v.format!==qe)if(xt!==null)if(zt){if(L)if(v.layerUpdates.size>0){const mt=xo(Mt.width,Mt.height,v.format,v.type);for(const ft of v.layerUpdates){const Ut=Mt.data.subarray(ft*mt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*mt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ft,Mt.width,Mt.height,1,xt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,st.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,st.depth,xt,Rt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,Mt.width,Mt.height,st.depth,0,xt,Rt,Mt.data)}else{zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ut,Lt,jt[0].width,jt[0].height);for(let X=0,Q=jt.length;X<Q;X++)Mt=jt[X],v.format!==qe?xt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,xt,Rt,Mt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,Mt.width,Mt.height,0,xt,Rt,Mt.data)}else if(v.isDataArrayTexture)if(zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Lt,st.width,st.height,st.depth),L)if(v.layerUpdates.size>0){const X=xo(st.width,st.height,v.format,v.type);for(const Q of v.layerUpdates){const mt=st.data.subarray(Q*X/st.data.BYTES_PER_ELEMENT,(Q+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Rt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Rt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,xt,Rt,st.data);else if(v.isData3DTexture)zt?(ie&&e.texStorage3D(i.TEXTURE_3D,ut,Lt,st.width,st.height,st.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Rt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,xt,Rt,st.data);else if(v.isFramebufferTexture){if(ie)if(zt)e.texStorage2D(i.TEXTURE_2D,ut,Lt,st.width,st.height);else{let X=st.width,Q=st.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Lt,X,Q,0,xt,Rt,null),X>>=1,Q>>=1}}else if(jt.length>0){if(zt&&ie){const X=at(jt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Lt,X.width,X.height)}for(let X=0,Q=jt.length;X<Q;X++)Mt=jt[X],zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,Rt,Mt):e.texImage2D(i.TEXTURE_2D,X,Lt,xt,Rt,Mt);v.generateMipmaps=!1}else if(zt){if(ie){const X=at(st);e.texStorage2D(i.TEXTURE_2D,ut,Lt,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Rt,st)}else e.texImage2D(i.TEXTURE_2D,0,Lt,xt,Rt,st);m(v)&&d(Z),Et.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function nt(T,v,N){if(v.image.length!==6)return;const Z=Bt(T,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const K=n.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const Et=Yt.getPrimaries(Yt.workingColorSpace),dt=v.colorSpace===yn?null:Yt.getPrimaries(v.colorSpace),vt=v.colorSpace===yn||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,st=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!qt&&!st?xt[Q]=_(v.image[Q],!0,s.maxCubemapSize):xt[Q]=st?v.image[Q].image:v.image[Q],xt[Q]=ct(v,xt[Q]);const Rt=xt[0],Lt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),jt=b(v.internalFormat,Lt,Mt,v.colorSpace),zt=v.isVideoTexture!==!0,ie=K.__version===void 0||Z===!0,L=tt.dataReady;let ut=D(v,Rt);yt(i.TEXTURE_CUBE_MAP,v);let X;if(qt){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,jt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){X=xt[Q].mipmaps;for(let mt=0;mt<X.length;mt++){const ft=X[mt];v.format!==qe?Lt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Lt,Mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,jt,ft.width,ft.height,0,Lt,Mt,ft.data)}}}else{if(X=v.mipmaps,zt&&ie){X.length>0&&ut++;const Q=at(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Lt,Mt,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,xt[Q].width,xt[Q].height,0,Lt,Mt,xt[Q].data);for(let mt=0;mt<X.length;mt++){const Ut=X[mt].image[Q].image;zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ut.width,Ut.height,Lt,Mt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,jt,Ut.width,Ut.height,0,Lt,Mt,Ut.data)}}else{zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,Mt,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Lt,Mt,xt[Q]);for(let mt=0;mt<X.length;mt++){const ft=X[mt];zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Lt,Mt,ft.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,jt,Lt,Mt,ft.image[Q])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),K.__version=tt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function gt(T,v,N,Z,tt,K){const Et=r.convert(N.format,N.colorSpace),dt=r.convert(N.type),vt=b(N.internalFormat,Et,dt,N.colorSpace),qt=n.get(v),st=n.get(N);if(st.__renderTarget=v,!qt.__hasExternalTextures){const xt=Math.max(1,v.width>>K),Rt=Math.max(1,v.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,vt,xt,Rt,v.depth,0,Et,dt,null):e.texImage2D(tt,K,vt,xt,Rt,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,st.__webglTexture,0,Xt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Z=v.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=y(v.stencilBuffer,tt),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Xt(v);F(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,K,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{const Z=v.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],Et=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),vt=b(K.internalFormat,Et,dt,K.colorSpace),qt=Xt(v);N&&F(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,vt,v.width,v.height):F(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const tt=Z.__webglTexture,K=Xt(v);if(v.depthTexture.format===di)F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===_i)F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ct(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(T,v,N){const Z=n.get(T);v!==void 0&&gt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(T)}function re(T){const v=T.texture,N=n.get(T),Z=n.get(v);T.addEventListener("dispose",A);const tt=T.textures,K=T.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[dt]=[];for(let vt=0;vt<v.mipmaps.length;vt++)N.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else N.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[dt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,vt=tt.length;dt<vt;dt++){const qt=n.get(tt[dt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&F(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const vt=tt[dt];N.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[dt]);const qt=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),xt=b(vt.internalFormat,qt,st,vt.colorSpace,T.isXRRenderTarget===!0),Rt=Xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,N.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)gt(N.__webglFramebuffer[dt][vt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else gt(N.__webglFramebuffer[dt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,vt=tt.length;dt<vt;dt++){const qt=tt[dt],st=n.get(qt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),yt(i.TEXTURE_2D,qt),gt(N.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),yt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)gt(N.__webglFramebuffer[vt],T,v,i.COLOR_ATTACHMENT0,dt,vt);else gt(N.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&d(dt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Vt(T){const v=T.textures;for(let N=0,Z=v.length;N<Z;N++){const tt=v[N];if(m(tt)){const K=S(T),Et=n.get(tt).__webglTexture;e.bindTexture(K,Et),d(K),e.unbindTexture()}}}const ce=[],B=[];function Ee(T){if(T.samples>0){if(F(T)===!1){const v=T.textures,N=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),dt=v.length>1;if(dt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const qt=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,tt,i.NEAREST),c===!0&&(ce.length=0,B.length=0,ce.push(i.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ce.push(K),B.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const qt=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xt(T){return Math.min(s.maxSamples,T.samples)}function F(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ct(T,v){const N=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Mi&&N!==yn&&(Yt.getTransfer(N)===te?(Z!==qe||tt!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function at(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Ot,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=F}function Ap(i,t){function e(n,s=yn){let r;const a=Yt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Vo)return i.ALPHA;if(n===Wo)return i.RGB;if(n===qe)return i.RGBA;if(n===Xo)return i.LUMINANCE;if(n===qo)return i.LUMINANCE_ALPHA;if(n===di)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===gs||n===_s||n===vs||n===xs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tr||n===wr||n===Ar||n===Cr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Pr||n===Lr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===Pr)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dr||n===Ir||n===Br||n===Ur||n===Fr||n===Nr||n===kr||n===Or||n===zr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ir)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Br)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Or)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===qr||n===jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ms)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Yr||n===$r||n===Kr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ms)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Cp extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lp=`
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

}`;class Dp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:Pp,fragmentShader:Lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ip extends Hn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const _=new Dp,m=e.getContextAttributes();let d=null,S=null;const b=[],y=[],D=new It;let w=null;const A=new Re;A.viewport=new ne;const P=new Re;P.viewport=new ne;const E=[A,P],x=new Cp;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=b[$];return nt===void 0&&(nt=new ar,b[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=b[$];return nt===void 0&&(nt=new ar,b[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=b[$];return nt===void 0&&(nt=new ar,b[$]=nt),nt.getHandSpace()};function z($){const nt=y.indexOf($.inputSource);if(nt===-1)return;const gt=b[nt];gt!==void 0&&(gt.update($.inputSource,$.frame,l||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",J);for(let $=0;$<b.length;$++){const nt=y[$];nt!==null&&(y[$]=null,b[$].disconnect(nt))}C=null,H=null,_.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,S=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new zn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,gt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?_i:di,gt=m.stencil?gi:On);const Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new zn(u.textureWidth,u.textureHeight,{format:qe,type:dn,depthTexture:new hc(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J($){for(let nt=0;nt<$.removed.length;nt++){const gt=$.removed[nt],lt=y.indexOf(gt);lt>=0&&(y[lt]=null,b[lt].disconnect(gt))}for(let nt=0;nt<$.added.length;nt++){const gt=$.added[nt];let lt=y.indexOf(gt);if(lt===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=y.length){y.push(gt),lt=Pt;break}else if(y[Pt]===null){y[Pt]=gt,lt=Pt;break}if(lt===-1)break}const Ct=b[lt];Ct&&Ct.connect(gt)}}const W=new R,Y=new R;function k($,nt,gt){W.setFromMatrixPosition(nt.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const lt=W.distanceTo(Y),Ct=nt.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),Vt=(Ct[9]+1)/Ct[5],ce=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],Ee=(Pt[8]+1)/Pt[0],Xt=Ot*B,F=Ot*Ee,O=lt/(-B+Ee),ct=O*-B;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(O),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const at=Ot+O,T=re+O,v=Xt-ct,N=F+(lt-ct),Z=Vt*re/T*at,tt=ce*re/T*at;$.projectionMatrix.makePerspective(v,N,Z,tt,at,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,gt=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=P.near=A.near=nt,x.far=P.far=A.far=gt,(C!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,H=x.far),A.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;const lt=$.parent,Ct=x.cameras;et(x,lt);for(let Pt=0;Pt<Ct.length;Pt++)et(Ct[Pt],lt);Ct.length===2?k(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),it($,x,lt)};function it($,nt,gt){gt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ot=null;function yt($,nt){if(h=nt.getViewerPose(l||a),g=nt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let lt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ot=gt[Pt];let re=null;if(p!==null)re=p.getViewport(Ot);else{const ce=f.getViewSubImage(u,Ot);re=ce.viewport,Pt===0&&(t.setRenderTargetTextures(S,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(S))}let Vt=E[Pt];Vt===void 0&&(Vt=new Re,Vt.layers.enable(Pt),Vt.viewport=new ne,E[Pt]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(re.x,re.y,re.width,re.height),Pt===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Vt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=f.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let gt=0;gt<b.length;gt++){const lt=y[gt],Ct=b[gt];lt!==null&&Ct!==void 0&&Ct.update(lt,nt,l||a)}ot&&ot($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Bt=new lc;Bt.setAnimationLoop(yt),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}}const Ln=new Ke,Bp=new $t;function Up(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ac(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,b,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Ln.copy(y),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),m.envMapRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(Ln)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function l(S,b){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const D=b.program;n.updateUBOMapping(S,D);const w=t.render.frame;r[S.id]!==w&&(u(S),r[S.id]=w)}function h(S){const b=f();S.__bindingPointIndex=b;const y=i.createBuffer(),D=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],y=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=y.length;w<A;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,x=P.length;E<x;E++){const C=P[E];if(p(C,w,E,D)===!0){const H=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let J=0;J<z.length;J++){const W=z[J],Y=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+j,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,y,D){const w=S.value,A=b+"_"+y;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const P=D[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return D[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(S){const b=S.uniforms;let y=0;const D=16;for(let A=0,P=b.length;A<P;A++){const E=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,C=E.length;x<C;x++){const H=E[x],z=Array.isArray(H.value)?H.value:[H.value];for(let j=0,J=z.length;j<J;j++){const W=z[j],Y=_(W),k=y%D,et=k%Y.boundary,it=k+et;y+=et,it!==0&&D-it<Y.storage&&(y+=D-it),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Y.storage}}}const w=y%D;return w>0&&(y+=D-w),S.__size=y,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Np{constructor(t={}){const{canvas:e=Sl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Sn,this.toneMappingExposure=1;const y=this;let D=!1,w=0,A=0,P=null,E=-1,x=null;const C=new ne,H=new ne;let z=null;const j=new Ht(0);let J=0,W=e.width,Y=e.height,k=1,et=null,it=null;const ot=new ne(0,0,W,Y),yt=new ne(0,0,W,Y);let Bt=!1;const $=new oa;let nt=!1,gt=!1;const lt=new $t,Ct=new $t,Pt=new R,Ot=new ne,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ce(){return P===null?k:1}let B=n;function Ee(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){const I="webgl2";if(B=Ee(I,M),B===null)throw Ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,F,O,ct,at,T,v,N,Z,tt,K,Et,dt,vt,qt,st,xt,Rt,Lt,Mt,jt,zt,ie,L;function ut(){Xt=new Gu(B),Xt.init(),zt=new Ap(B,Xt),F=new Bu(B,Xt,t,zt),O=new bp(B,Xt),F.reverseDepthBuffer&&u&&O.buffers.depth.setReversed(!0),ct=new Wu(B),at=new lp,T=new wp(B,Xt,O,at,F,zt,ct),v=new Fu(y),N=new zu(y),Z=new Kl(B),ie=new Du(B,Z),tt=new Hu(B,Z,ct,ie),K=new qu(B,tt,Z,ct),Lt=new Xu(B,F,T),st=new Uu(at),Et=new cp(y,v,N,Xt,F,ie,st),dt=new Up(y,at),vt=new dp,qt=new _p(Xt),Rt=new Lu(y,v,N,O,K,p,c),xt=new Ep(y,K,F),L=new Fp(B,ct,F,O),Mt=new Iu(B,Xt,ct),jt=new Vu(B,Xt,ct),ct.programs=Et.programs,y.capabilities=F,y.extensions=Xt,y.properties=at,y.renderLists=vt,y.shadowMap=xt,y.state=O,y.info=ct}ut();const X=new Ip(y,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(W,Y,!1))},this.getSize=function(M){return M.set(W,Y)},this.setSize=function(M,I,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,Y=I,e.width=Math.floor(M*k),e.height=Math.floor(I*k),G===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(W*k,Y*k).floor()},this.setDrawingBufferSize=function(M,I,G){W=M,Y=I,k=G,e.width=Math.floor(M*G),e.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(ot)},this.setViewport=function(M,I,G,V){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,I,G,V),O.viewport(C.copy(ot).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(yt)},this.setScissor=function(M,I,G,V){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,I,G,V),O.scissor(H.copy(yt).multiplyScalar(k).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){O.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){it=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,I=!0,G=!0){let V=0;if(M){let U=!1;if(P!==null){const rt=P.texture.format;U=rt===ra||rt===sa||rt===ia}if(U){const rt=P.texture.type,pt=rt===dn||rt===On||rt===Ni||rt===gi||rt===ea||rt===na,St=Rt.getClearColor(),bt=Rt.getClearAlpha(),Dt=St.r,Ft=St.g,Tt=St.b;pt?(g[0]=Dt,g[1]=Ft,g[2]=Tt,g[3]=bt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=Tt,_[3]=bt,B.clearBufferiv(B.COLOR,0,_))}else V|=B.COLOR_BUFFER_BIT}I&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),qt.dispose(),at.dispose(),v.dispose(),N.dispose(),K.dispose(),ie.dispose(),L.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",fa),X.removeEventListener("sessionend",pa),Tn.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=ct.autoReset,I=xt.enabled,G=xt.autoUpdate,V=xt.needsUpdate,U=xt.type;ut(),ct.autoReset=M,xt.enabled=I,xt.autoUpdate=G,xt.needsUpdate=V,xt.type=U}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ut(M){const I=M.target;I.removeEventListener("dispose",Ut),he(I)}function he(M){xe(M),at.remove(M)}function xe(M){const I=at.get(M).programs;I!==void 0&&(I.forEach(function(G){Et.releaseProgram(G)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,V,U,rt){I===null&&(I=re);const pt=U.isMesh&&U.matrixWorld.determinant()<0,St=xc(M,I,G,V,U);O.setMaterial(V,pt);let bt=G.index,Dt=1;if(V.wireframe===!0){if(bt=tt.getWireframeAttribute(G),bt===void 0)return;Dt=2}const Ft=G.drawRange,Tt=G.attributes.position;let Kt=Ft.start*Dt,se=(Ft.start+Ft.count)*Dt;rt!==null&&(Kt=Math.max(Kt,rt.start*Dt),se=Math.min(se,(rt.start+rt.count)*Dt)),bt!==null?(Kt=Math.max(Kt,0),se=Math.min(se,bt.count)):Tt!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,Tt.count));const ae=se-Kt;if(ae<0||ae===1/0)return;ie.setup(U,V,St,G,bt);let Ae,Jt=Mt;if(bt!==null&&(Ae=Z.get(bt),Jt=jt,Jt.setIndex(Ae)),U.isMesh)V.wireframe===!0?(O.setLineWidth(V.wireframeLinewidth*ce()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(U.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),O.setLineWidth(wt*ce()),U.isLineSegments?Jt.setMode(B.LINES):U.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else U.isPoints?Jt.setMode(B.POINTS):U.isSprite&&Jt.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,Ze=U._multiDrawCounts,Zt=U._multiDrawCount,Ge=bt?Z.get(bt).bytesPerElement:1,Wn=at.get(V).currentProgram.getUniforms();for(let Le=0;Le<Zt;Le++)Wn.setValue(B,"_gl_DrawID",Le),Jt.render(wt[Le]/Ge,Ze[Le])}else if(U.isInstancedMesh)Jt.renderInstances(Kt,ae,U.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ze=Math.min(G.instanceCount,wt);Jt.renderInstances(Kt,ae,Ze)}else Jt.render(Kt,ae)};function Qt(M,I,G){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,Vi(M,I,G),M.side=hn,M.needsUpdate=!0,Vi(M,I,G),M.side=an):Vi(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),d=qt.get(G),d.init(I),b.push(d),G.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),M!==G&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const rt=U.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const St=rt[pt];Qt(St,G,U),V.add(St)}else Qt(rt,G,U),V.add(rt)}),b.pop(),d=null,V},this.compileAsync=function(M,I,G=null){const V=this.compile(M,I,G);return new Promise(U=>{function rt(){if(V.forEach(function(pt){at.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){U(M);return}setTimeout(rt,10)}Xt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ze=null;function Je(M){ze&&ze(M)}function fa(){Tn.stop()}function pa(){Tn.start()}const Tn=new lc;Tn.setAnimationLoop(Je),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){ze=M,X.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},X.addEventListener("sessionstart",fa),X.addEventListener("sessionend",pa),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,P),d=qt.get(M,b.length),d.init(I),b.push(d),Ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Ct),gt=this.localClippingEnabled,nt=st.init(this.clippingPlanes,gt),m=vt.get(M,S.length),m.init(),S.push(m),X.enabled===!0&&X.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Ds(rt,I,-1/0,y.sortObjects)}Ds(M,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,it),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&Rt.addToRenderList(m,M),this.info.render.frame++,nt===!0&&st.beginShadows();const G=d.state.shadowsArray;xt.render(G,M,I),nt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const rt=I.cameras;if(U.length>0)for(let pt=0,St=rt.length;pt<St;pt++){const bt=rt[pt];ga(V,U,M,bt)}Vt&&Rt.render(M);for(let pt=0,St=rt.length;pt<St;pt++){const bt=rt[pt];ma(m,M,bt,bt.viewport)}}else U.length>0&&ga(V,U,M,I),Vt&&Rt.render(M),ma(m,M,I);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,I),ie.resetDefaultState(),E=-1,x=null,b.pop(),b.length>0?(d=b[b.length-1],nt===!0&&st.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ds(M,I,G,V){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){V&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const pt=K.update(M),St=M.material;St.visible&&m.push(M,pt,St,G,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const pt=K.update(M),St=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ot.copy(pt.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){const bt=pt.groups;for(let Dt=0,Ft=bt.length;Dt<Ft;Dt++){const Tt=bt[Dt],Kt=St[Tt.materialIndex];Kt&&Kt.visible&&m.push(M,pt,Kt,G,Ot.z,Tt)}}else St.visible&&m.push(M,pt,St,G,Ot.z,null)}}const rt=M.children;for(let pt=0,St=rt.length;pt<St;pt++)Ds(rt[pt],I,G,V)}function ma(M,I,G,V){const U=M.opaque,rt=M.transmissive,pt=M.transparent;d.setupLightsView(G),nt===!0&&st.setGlobalState(y.clippingPlanes,G),V&&O.viewport(C.copy(V)),U.length>0&&Hi(U,I,G),rt.length>0&&Hi(rt,I,G),pt.length>0&&Hi(pt,I,G),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ga(M,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new zn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ki:dn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[V.id],pt=V.viewport||C;rt.setSize(pt.z,pt.w);const St=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(j),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Rt.render(G);const bt=y.toneMapping;y.toneMapping=Sn;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),nt===!0&&st.setGlobalState(y.clippingPlanes,V),Hi(M,G,V),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Tt=0,Kt=I.length;Tt<Kt;Tt++){const se=I[Tt],ae=se.object,Ae=se.geometry,Jt=se.material,wt=se.group;if(Jt.side===an&&ae.layers.test(V.layers)){const Ze=Jt.side;Jt.side=Pe,Jt.needsUpdate=!0,_a(ae,G,V,Ae,Jt,wt),Jt.side=Ze,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}y.setRenderTarget(St),y.setClearColor(j,J),Dt!==void 0&&(V.viewport=Dt),y.toneMapping=bt}function Hi(M,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,rt=M.length;U<rt;U++){const pt=M[U],St=pt.object,bt=pt.geometry,Dt=V===null?pt.material:V,Ft=pt.group;St.layers.test(G.layers)&&_a(St,I,G,bt,Dt,Ft)}}function _a(M,I,G,V,U,rt){M.onBeforeRender(y,I,G,V,U,rt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,I,G,V,M,rt),U.transparent===!0&&U.side===an&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,y.renderBufferDirect(G,I,V,U,M,rt),U.side=hn,U.needsUpdate=!0,y.renderBufferDirect(G,I,V,U,M,rt),U.side=an):y.renderBufferDirect(G,I,V,U,M,rt),M.onAfterRender(y,I,G,V,U,rt)}function Vi(M,I,G){I.isScene!==!0&&(I=re);const V=at.get(M),U=d.state.lights,rt=d.state.shadowsArray,pt=U.state.version,St=Et.getParameters(M,U.state,rt,I,G),bt=Et.getProgramCacheKey(St);let Dt=V.programs;V.environment=M.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",Ut),Dt=new Map,V.programs=Dt);let Ft=Dt.get(bt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===pt)return xa(M,St),Ft}else St.uniforms=Et.getUniforms(M),M.onBeforeCompile(St,y),Ft=Et.acquireProgram(St,bt),Dt.set(bt,Ft),V.uniforms=St.uniforms;const Tt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=st.uniform),xa(M,St),V.needsLights=yc(M),V.lightsStateVersion=pt,V.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function va(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ys.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function xa(M,I){const G=at.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function xc(M,I,G,V,U){I.isScene!==!0&&(I=re),T.resetTextureUnits();const rt=I.fog,pt=V.isMeshStandardMaterial?I.environment:null,St=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mi,bt=(V.isMeshStandardMaterial?N:v).get(V.envMap||pt),Dt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let ae=Sn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=y.toneMapping);const Ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=Ae!==void 0?Ae.length:0,wt=at.get(V),Ze=d.state.lights;if(nt===!0&&(gt===!0||M!==x)){const Ue=M===x&&V.id===E;st.setState(V,M,Ue)}let Zt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ze.state.version||wt.outputColorSpace!==St||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==bt||V.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Ft||wt.morphTargets!==Tt||wt.morphNormals!==Kt||wt.morphColors!==se||wt.toneMapping!==ae||wt.morphTargetsCount!==Jt)&&(Zt=!0):(Zt=!0,wt.__version=V.version);let Ge=wt.currentProgram;Zt===!0&&(Ge=Vi(V,I,U));let Wn=!1,Le=!1,bi=!1;const oe=Ge.getUniforms(),Ye=wt.uniforms;if(O.useProgram(Ge.program)&&(Wn=!0,Le=!0,bi=!0),V.id!==E&&(E=V.id,Le=!0),Wn||x!==M){O.buffers.depth.getReversed()?(lt.copy(M.projectionMatrix),Tl(lt),wl(lt),oe.setValue(B,"projectionMatrix",lt)):oe.setValue(B,"projectionMatrix",M.projectionMatrix),oe.setValue(B,"viewMatrix",M.matrixWorldInverse);const un=oe.map.cameraPosition;un!==void 0&&un.setValue(B,Pt.setFromMatrixPosition(M.matrixWorld)),F.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Le=!0,bi=!0)}if(U.isSkinnedMesh){oe.setOptional(B,U,"bindMatrix"),oe.setOptional(B,U,"bindMatrixInverse");const Ue=U.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),oe.setValue(B,"boneTexture",Ue.boneTexture,T))}U.isBatchedMesh&&(oe.setOptional(B,U,"batchingTexture"),oe.setValue(B,"batchingTexture",U._matricesTexture,T),oe.setOptional(B,U,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",U._indirectTexture,T),oe.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",U._colorsTexture,T));const Ti=G.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Lt.update(U,G,Ge),(Le||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,oe.setValue(B,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ye.envMap.value=bt,Ye.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Ye.envMapIntensity.value=I.environmentIntensity),Le&&(oe.setValue(B,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&Mc(Ye,bi),rt&&V.fog===!0&&dt.refreshFogUniforms(Ye,rt),dt.refreshMaterialUniforms(Ye,V,k,Y,d.state.transmissionRenderTarget[M.id]),ys.upload(B,va(wt),Ye,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ys.upload(B,va(wt),Ye,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(B,"center",U.center),oe.setValue(B,"modelViewMatrix",U.modelViewMatrix),oe.setValue(B,"normalMatrix",U.normalMatrix),oe.setValue(B,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ue=V.uniformsGroups;for(let un=0,fn=Ue.length;un<fn;un++){const Ma=Ue[un];L.update(Ma,Ge),L.bind(Ma,Ge)}}return Ge}function Mc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function yc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,G){at.get(M.texture).__webglTexture=I,at.get(M.depthTexture).__webglTexture=G;const V=at.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const G=at.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,G=0){P=M,w=I,A=G;let V=!0,U=null,rt=!1,pt=!1;if(M){const bt=at.get(M);if(bt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(bt.__hasExternalTextures)T.rebindTextures(M,at.get(M.texture).__webglTexture,at.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Tt=M.depthTexture;if(bt.__boundDepthTexture!==Tt){if(Tt!==null&&at.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);const Ft=at.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[I])?U=Ft[I][G]:U=Ft[I],rt=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=at.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[G]:U=Ft,C.copy(M.viewport),H.copy(M.scissor),z=M.scissorTest}else C.copy(ot).multiplyScalar(k).floor(),H.copy(yt).multiplyScalar(k).floor(),z=Bt;if(O.bindFramebuffer(B.FRAMEBUFFER,U)&&V&&O.drawBuffers(M,U),O.viewport(C),O.scissor(H),O.setScissorTest(z),rt){const bt=at.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,G)}else if(pt){const bt=at.get(M.texture),Dt=I||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.__webglTexture,G||0,Dt)}E=-1},this.readRenderTargetPixels=function(M,I,G,V,U,rt,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=at.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){O.bindFramebuffer(B.FRAMEBUFFER,St);try{const bt=M.texture,Dt=bt.format,Ft=bt.type;if(!F.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-V&&G>=0&&G<=M.height-U&&B.readPixels(I,G,V,U,zt.convert(Dt),zt.convert(Ft),rt)}finally{const bt=P!==null?at.get(P).__webglFramebuffer:null;O.bindFramebuffer(B.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,I,G,V,U,rt,pt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=at.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const bt=M.texture,Dt=bt.format,Ft=bt.type;if(!F.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-V&&G>=0&&G<=M.height-U){O.bindFramebuffer(B.FRAMEBUFFER,St);const Tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.bufferData(B.PIXEL_PACK_BUFFER,rt.byteLength,B.STREAM_READ),B.readPixels(I,G,V,U,zt.convert(Dt),zt.convert(Ft),0);const Kt=P!==null?at.get(P).__webglFramebuffer:null;O.bindFramebuffer(B.FRAMEBUFFER,Kt);const se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await bl(B,se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,rt),B.deleteBuffer(Tt),B.deleteSync(se),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,G=0){M.isTexture!==!0&&(Ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-G),U=Math.floor(M.image.width*V),rt=Math.floor(M.image.height*V),pt=I!==null?I.x:0,St=I!==null?I.y:0;T.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,pt,St,U,rt),O.unbindTexture()},this.copyTextureToTexture=function(M,I,G=null,V=null,U=0){M.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,G=null);let rt,pt,St,bt,Dt,Ft,Tt,Kt,se;const ae=M.isCompressedTexture?M.mipmaps[U]:M.image;G!==null?(rt=G.max.x-G.min.x,pt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,Dt=G.min.y,Ft=G.isBox3?G.min.z:0):(rt=ae.width,pt=ae.height,St=ae.depth||1,bt=0,Dt=0,Ft=0),V!==null?(Tt=V.x,Kt=V.y,se=V.z):(Tt=0,Kt=0,se=0);const Ae=zt.convert(I.format),Jt=zt.convert(I.type);let wt;I.isData3DTexture?(T.setTexture3D(I,0),wt=B.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),wt=B.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,I.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),Zt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ge=B.getParameter(B.UNPACK_SKIP_PIXELS),Wn=B.getParameter(B.UNPACK_SKIP_ROWS),Le=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ae.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const bi=M.isDataArrayTexture||M.isData3DTexture,oe=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Ye=at.get(M),Ti=at.get(I),Ue=at.get(Ye.__renderTarget),un=at.get(Ti.__renderTarget);O.bindFramebuffer(B.READ_FRAMEBUFFER,Ue.__webglFramebuffer),O.bindFramebuffer(B.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let fn=0;fn<St;fn++)bi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,at.get(M).__webglTexture,U,Ft+fn),M.isDepthTexture?(oe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,at.get(I).__webglTexture,U,se+fn),B.blitFramebuffer(bt,Dt,rt,pt,Tt,Kt,rt,pt,B.DEPTH_BUFFER_BIT,B.NEAREST)):oe?B.copyTexSubImage3D(wt,U,Tt,Kt,se+fn,bt,Dt,rt,pt):B.copyTexSubImage2D(wt,U,Tt,Kt,se+fn,bt,Dt,rt,pt);O.bindFramebuffer(B.READ_FRAMEBUFFER,null),O.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(wt,U,Tt,Kt,se,rt,pt,St,Ae,Jt,ae.data):I.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,U,Tt,Kt,se,rt,pt,St,Ae,ae.data):B.texSubImage3D(wt,U,Tt,Kt,se,rt,pt,St,Ae,Jt,ae):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,Tt,Kt,rt,pt,Ae,Jt,ae.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,Tt,Kt,ae.width,ae.height,Ae,ae.data):B.texSubImage2D(B.TEXTURE_2D,U,Tt,Kt,rt,pt,Ae,Jt,ae);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Le),U===0&&I.generateMipmaps&&B.generateMipmap(wt),O.unbindTexture()},this.copyTextureToTexture3D=function(M,I,G=null,V=null,U=0){return M.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),Ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,G,V,U)},this.initRenderTarget=function(M){at.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),O.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,O.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class la{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new la(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mc extends Vn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new R,ws=new R,Mo=new $t,Pi=new Ps,ds=new zi,or=new R,yo=new R;class Op extends _e{constructor(t=new we,e=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ts.fromBufferAttribute(e,s-1),ws.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ts.distanceTo(ws);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;Mo.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(Mo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),S=h.getX(_+1),b=us(this,t,Pi,c,d,S);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=us(this,t,Pi,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=us(this,t,Pi,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=us(this,t,Pi,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function us(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ts.fromBufferAttribute(a,s),ws.fromBufferAttribute(a,r),e.distanceSqToSegment(Ts,ws,or,yo)>n)return;or.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(or);if(!(c<t.near||c>t.far))return{distance:c,point:yo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Eo=new R,So=new R;class zp extends Op{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eo.fromBufferAttribute(e,s),So.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eo.distanceTo(So);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends Vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bo=new $t,Zr=new Ps,fs=new zi,ps=new R;class Gp extends _e{constructor(t=new we,e=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;bo.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(bo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);ps.fromBufferAttribute(f,m),To(ps,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,_=p;g<_;g++)ps.fromBufferAttribute(f,g),To(ps,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function To(i,t,e,n,s,r,a){const o=Zr.distanceSqToPoint(i);if(o<e){const c=new R;Zr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ci extends Te{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nt extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function S(){const y=new R,D=new R;let w=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const E=[],x=P/r,C=x*(e-t)+t;for(let H=0;H<=s;H++){const z=H/s,j=z*c+o,J=Math.sin(j),W=Math.cos(j);D.x=C*J,D.y=-x*n+m,D.z=C*W,f.push(D.x,D.y,D.z),y.set(J,A,W).normalize(),u.push(y.x,y.y,y.z),p.push(z,1-x),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const x=_[E][P],C=_[E+1][P],H=_[E+1][P+1],z=_[E][P+1];(t>0||E!==0)&&(h.push(x,C,z),w+=3),(e>0||E!==r-1)&&(h.push(C,H,z),w+=3)}l.addGroup(d,w,0),d+=w}function b(y){const D=g,w=new It,A=new R;let P=0;const E=y===!0?t:e,x=y===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;const C=g;for(let H=0;H<=s;H++){const j=H/s*c+o,J=Math.cos(j),W=Math.sin(j);A.x=E*W,A.y=m*x,A.z=E*J,f.push(A.x,A.y,A.z),u.push(0,x,0),w.x=J*.5+.5,w.y=W*.5*x+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){const z=D+H,j=C+H;y===!0?h.push(j,j+1,z):h.push(j+1,j,z),P+=3}l.addGroup(d,P,y===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ha extends Nt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ha(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gi extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new R,u=new R,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],b=d/n;let y=0;d===0&&a===0?y=.5/e:d===n&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const w=D/e;f.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),f.y=t*Math.cos(a+b*o),f.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(w+y,1-b),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const b=h[d][S+1],y=h[d][S],D=h[d+1][S],w=h[d+1][S+1];(d!==0||a>0)&&p.push(b,y,w),(d!==n-1||c<Math.PI)&&p.push(y,D,w)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Si extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new R,f=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(_,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class At extends Vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class As extends At{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class da extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const cr=new $t,wo=new R,Ao=new R;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(wo),Ao.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ao),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hp extends _c{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Co extends da{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ro=new $t,Li=new R,lr=new R;class Vp extends _c{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Li.setFromMatrixPosition(t.matrixWorld),n.position.copy(Li),lr.copy(n.position),lr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lr),n.updateMatrixWorld(),s.makeTranslation(-Li.x,-Li.y,-Li.z),Ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro)}}class Di extends da{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wp extends da{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Po{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xp extends zp{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ht(n),s=new Ht(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,p=0,g=-o;u<=e;u++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=u===r?n:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const h=new we;h.setAttribute("position",new ue(c,3)),h.setAttribute("color",new ue(l,3));const f=new mc({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qp extends Hn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const Lo={type:"change"},ua={type:"start"},vc={type:"end"},ms=new Ps,Do=new Mn,jp=Math.cos(70*Zo.DEG2RAD),fe=new R,Ce=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hr=1e-6;class Yp extends qp{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Gn,this._lastTargetPosition=new R,this._quat=new Gn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Po,this._sphericalDelta=new Po,this._scale=1,this._panOffset=new R,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new R,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kp.bind(this),this._onPointerDown=$p.bind(this),this._onPointerUp=Jp.bind(this),this._onContextMenu=sm.bind(this),this._onMouseWheel=tm.bind(this),this._onKeyDown=em.bind(this),this._onTouchStart=nm.bind(this),this._onTouchMove=im.bind(this),this._onMouseDown=Zp.bind(this),this._onMouseMove=Qp.bind(this),this._interceptControlDown=rm.bind(this),this._interceptControlUp=am.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lo),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ce:n>Math.PI&&(n-=Ce),s<-Math.PI?s+=Ce:s>Math.PI&&(s-=Ce),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ms.origin.copy(this.object.position),ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ms.direction))<jp?this.object.lookAt(this.target):(Do.setFromNormalAndCoplanarPoint(this.object.up,this.target),ms.intersectPlane(Do,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hr||this._lastTargetPosition.distanceToSquared(this.target)>hr?(this.dispatchEvent(Lo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ce/60*this.autoRotateSpeed*t:Ce/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $p(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Kp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vc),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(ua)}function Qp(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(ua),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vc))}function em(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function nm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(ua)}function im(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function sm(i){this.enabled!==!1&&i.preventDefault()}function rm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function am(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new we;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=Io(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][u]);const g=Io(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Io(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Oe(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);o.setComponent(u+f,g,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}class om{constructor(t){this.scene=t,this.group=new Wt,this.neonElements=[],this.cityBuildings=[],this.vipLights=[],this.stageCanvas=null,this.stageTexture=null,this.stageCtx=null,this.stagePhase=0,this.init(),this.scene.add(this.group)}init(){this.createFloor(),this.createWalls(),this.createWindowAndSkyline(),this.createAcousticPanels(),this.createNeonSigns(),this.createVIPLounge(),this.createStageScreen()}createFloor(){const t=new Be(26,24),e=new At({color:658194,roughness:.15,metalness:.85}),n=new q(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n);const s=new Xp(24,48,61695,1579560);s.position.y=.005,this.group.add(s)}createWalls(){const t=new At({color:1052954,roughness:.85,metalness:.1}),e=new q(new _t(7,9,.4),t);e.position.set(-8.5,4.5,-9.8),e.receiveShadow=!0,this.group.add(e);const n=new q(new _t(7,9,.4),t);n.position.set(8.5,4.5,-9.8),n.receiveShadow=!0,this.group.add(n);const s=new q(new _t(24,1.8,.4),t);s.position.set(0,8.1,-9.8),this.group.add(s);const r=new q(new _t(24,1.2,.4),t);r.position.set(0,.6,-9.8),this.group.add(r);const a=new q(new _t(.4,9,24),t);a.position.set(-12,4.5,2),a.receiveShadow=!0,this.group.add(a);const o=new q(new _t(.4,9,24),t);o.position.set(12,4.5,2),o.receiveShadow=!0,this.group.add(o);const c=new At({color:395020,roughness:.9}),l=new q(new _t(26,.4,24),c);l.position.set(0,9,2),this.group.add(l)}createWindowAndSkyline(){const t=new Wt;t.position.set(0,0,-14);const e=new le({color:263432}),n=[61695,16711807,16764928,10309341,16777215],s=[];for(let u=0;u<45;u++){const p=.8+Math.random()*1.6,g=4+Math.random()*9,_=.8+Math.random()*1.6,m=-18+u*.8+(Math.random()-.5)*.5,d=(Math.random()-.5)*4,S=new _t(p,g,_);S.applyMatrix4(new $t().makeTranslation(m,g/2-1,d)),s.push(S);const b=new Gi(.06,6,6),y=n[Math.floor(Math.random()*n.length)],D=new le({color:y}),w=new q(b,D);w.position.set(m,g-.9,d),t.add(w),this.cityBuildings.push(w)}const r=kn(s);s.forEach(u=>u.dispose()),t.add(new q(r,e));const a=new At({color:1710886,metalness:.9,roughness:.2}),o=[-4.5,-1.5,1.5,4.5].map(u=>{const p=new _t(.14,7,.2);return p.applyMatrix4(new $t().makeTranslation(u,4.7,-9.8)),p}),c=new _t(12,.14,.2);c.applyMatrix4(new $t().makeTranslation(0,5,-9.8)),o.push(c);const l=kn(o);o.forEach(u=>u.dispose()),this.group.add(new q(l,a));const h=new As({color:1122867,transparent:!0,opacity:.25,roughness:.1,metalness:.1,transmission:.6,ior:1.5}),f=new q(new Be(12,7),h);f.position.set(0,4.7,-9.75),this.group.add(f),this.group.add(t)}createAcousticPanels(){const t=new At({color:1579044,roughness:.95,metalness:.05}),e=(n,s)=>{const r=new Wt;for(let a=0;a<3;a++)for(let o=0;o<6;o++){const c=new q(new _t(.9,.9,.12),t);c.position.set((o-2.5)*1.2,3+a*1.2,0),c.rotation.z=(a+o)%2===0?0:Math.PI/4,r.add(c)}r.position.set(n,0,1),r.rotation.y=s,this.group.add(r)};e(-11.75,Math.PI/2),e(11.75,-Math.PI/2)}createNeonSigns(){const t=new q(new _t(5.2,1.4,.1),new At({color:328968,roughness:.5}));t.position.set(0,8,-9.5),this.group.add(t);const e=new le({color:16711748}),n=new q(new _t(5,.05,.04),e);n.position.set(0,8.6,-9.42);const s=new q(new _t(5,.05,.04),e);s.position.set(0,7.4,-9.42),this.group.add(n,s);const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="#050508",a.fillRect(0,0,1024,256),a.font="900 80px Orbitron, sans-serif",a.fillStyle="#00f0ff",a.shadowColor="#00f0ff",a.shadowBlur=24,a.textAlign="center",a.textBaseline="middle",a.fillText("JMF RADIO",512,90),a.font="800 36px Orbitron, sans-serif",a.fillStyle="#ff0044",a.shadowColor="#ff0044",a.shadowBlur=18,a.fillText("● 24/7 LIVE ON AIR ●",512,180);const o=new ci(r),c=new le({map:o,transparent:!0}),l=new q(new Be(4.8,1.15),c);l.position.set(0,8,-9.42),this.group.add(l);const h=new le({color:61695}),f=[];for(let p=0;p<9;p++){const g=.6+Math.sin(p*.7)*.9,_=new _t(.08,g,.05);_.applyMatrix4(new $t().makeTranslation(-11.7,6,-3+p*.45)),f.push(_)}const u=kn(f);f.forEach(p=>p.dispose()),this.group.add(new q(u,h)),this.neonElements.push(h)}createVIPLounge(){const t=new Wt;t.position.set(-7.5,0,3.5),t.rotation.y=Math.PI/2;const e=new At({color:1446431,roughness:.5,metalness:.2}),n=new At({color:10309341,roughness:.6}),s=new q(new _t(4.2,.45,1.1),e);s.position.set(0,.225,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new q(new _t(4.2,.9,.35),e);r.position.set(0,.8,-.4),t.add(r);const a=new q(new _t(.35,.7,1.1),e);a.position.set(-2,.6,0),t.add(a);for(let b=0;b<4;b++){const y=new q(new _t(.5,.45,.18),n);y.position.set(-1.4+b*.9,.55,-.25),y.rotation.x=-Math.PI/16,t.add(y)}const o=new q(new _t(3,.45,1.1),e);o.position.set(0,.225,2.4),o.castShadow=!0,t.add(o);const c=new q(new _t(3,.9,.35),e);c.position.set(0,.8,2.8),t.add(c);const l=new As({color:1118498,transparent:!0,opacity:.6,roughness:.1,metalness:.3,transmission:.7}),h=new q(new _t(2.4,.05,1),l);h.position.set(0,.45,1.2),t.add(h);const f=new q(new _t(2.2,.4,.8),new At({color:658194,roughness:.3,metalness:.8}));f.position.set(0,.2,1.2),t.add(f);const u=new Nt(.08,.1,.2,16),p=new At({color:16711807,emissive:16711807,emissiveIntensity:.8,roughness:.1}),g=new q(u,p);g.position.set(0,.58,1.2),t.add(g),this.vipLights.push(p);const _=document.createElement("canvas");_.width=512,_.height=128;const m=_.getContext("2d");m.fillStyle="#05060a",m.fillRect(0,0,512,128),m.font="900 48px Orbitron, sans-serif",m.fillStyle="#ffd000",m.shadowColor="#ffd000",m.shadowBlur=16,m.textAlign="center",m.textBaseline="middle",m.fillText("👑 VIP LOUNGE 👑",256,64);const d=new ci(_),S=new q(new Be(2.4,.6),new le({map:d}));S.position.set(0,3.2,-.6),t.add(S),this.group.add(t)}createStageScreen(){const t=new Wt;t.position.set(0,0,11.2),this.stageCanvas=document.createElement("canvas"),this.stageCanvas.width=1024,this.stageCanvas.height=512,this.stageCtx=this.stageCanvas.getContext("2d"),this.stageTexture=new ci(this.stageCanvas),this.stageTexture.minFilter=ke,this.stageTexture.magFilter=ke;const e=new Be(10.5,5.2),n=new le({map:this.stageTexture,side:hn}),s=new q(e,n);s.position.set(0,4.4,-.1),s.rotation.y=Math.PI,t.add(s);const r=new At({color:460815,metalness:.9,roughness:.2}),a=new q(new _t(11,.2,.3),r);a.position.set(0,7.1,0);const o=new q(new _t(11,.3,.3),r);o.position.set(0,1.7,0);const c=new q(new _t(.3,5.6,.3),r);c.position.set(-5.35,4.4,0);const l=new q(new _t(.3,5.6,.3),r);l.position.set(5.35,4.4,0),t.add(a,o,c,l);const h=new le({color:61695}),f=new q(new _t(10.7,.04,.04),h);f.position.set(0,7,-.15),t.add(f);const u=new q(new _t(12,.5,2.5),new At({color:855576,metalness:.7,roughness:.3}));u.position.set(0,.25,-1),t.add(u);const p=(g,_,m)=>{const d=document.createElement("canvas");d.width=512,d.height=128;const S=d.getContext("2d");S.fillStyle="#05060d",S.fillRect(0,0,512,128),S.font="900 44px Orbitron, sans-serif",S.fillStyle=m,S.shadowColor=m,S.shadowBlur=18,S.textAlign="center",S.textBaseline="middle",S.fillText(g,256,64);const b=new ci(d),y=new q(new Be(3.6,.9),new le({map:b}));y.position.set(_,6.2,3.5),y.rotation.y=_<0?Math.PI/2:-Math.PI/2,this.group.add(y)};p("VIP LOUNGE",-11.75,"#ff007f"),p("COCKTAIL BAR",11.75,"#00f0ff"),this.group.add(t),this.drawInitialStageScreen()}setTrackInfo(t,e,n,s){this.currentTrack=t,this.nextTrack=e,this.elapsedTime=n||0,this.duration=s||180}drawInitialStageScreen(){if(!this.stageCtx)return;const t=this.stageCtx;t.fillStyle="#05060c",t.fillRect(0,0,1024,512),t.font="900 76px Orbitron, sans-serif",t.fillStyle="#ffffff",t.shadowColor="#00f0ff",t.shadowBlur=24,t.textAlign="center",t.textBaseline="middle",t.fillText("JMF RADIO",512,180),t.font='700 22px "Space Grotesk", sans-serif',t.fillStyle="#00f0ff",t.shadowColor="#00f0ff",t.shadowBlur=12,t.fillText("● 24/7 PRO VIRTUAL DJ ● ON AIR ●",512,240),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}updateStageScreen(t,e){var j,J;if(!this.stageCtx)return;const n=this.stageCtx,s=1024,r=512,a=performance.now();this.vjMode===void 0&&(this.vjMode=0,this.lastVJSwitch=a,this.spectrumPeaks=new Float32Array(48),this.scrollTickerX=0,this.radialAngle=0),(a-this.lastVJSwitch>18e3||t.bass>.88&&Math.random()<.03&&a-this.lastVJSwitch>5e3)&&(this.vjMode=(this.vjMode+1+Math.floor(Math.random()*2))%5,this.lastVJSwitch=a),this.stagePhase+=.04+(t.bass||0)*.06,this.radialAngle+=.02+(t.treble||0)*.04;const o=e&&e.primary?`#${e.primary.toString(16).padStart(6,"0")}`:"#00f0ff",c=e&&e.accent?`#${e.accent.toString(16).padStart(6,"0")}`:"#ff007f";n.fillStyle="rgba(4, 5, 10, 0.38)",n.fillRect(0,0,s,r);const l=t.rawArray||[],h=l.length||64;if(this.vjMode===0)[{color:o,blur:16,amp:65*(.4+t.bass*1.3),speed:1,width:3.5,yOff:380},{color:c,blur:14,amp:50*(.3+t.mids*1),speed:1.4,width:2.5,yOff:380},{color:"#a855f7",blur:12,amp:35*(.3+t.treble*1),speed:1.8,width:2,yOff:380}].forEach(Y=>{n.strokeStyle=Y.color,n.shadowColor=Y.color,n.shadowBlur=Y.blur,n.lineWidth=Y.width,n.beginPath();for(let k=0;k<=s;k+=10){const et=Math.floor(k/s*(h-1)),it=(l[et]||0)/255,ot=Math.sin(k*.012+this.stagePhase*Y.speed)*Math.cos(k*.007),yt=Y.yOff+ot*Y.amp+(it-.5)*Y.amp*1.4;k===0?n.moveTo(k,yt):n.lineTo(k,yt)}n.stroke()});else if(this.vjMode===1){const Y=(s-120)/44-4,k=420;for(let et=0;et<44;et++){const it=Math.floor(et/44*(h-1)),ot=(l[it]||0)/255*(.5+t.bass*.7),yt=Math.max(6,ot*160);yt>this.spectrumPeaks[et]?this.spectrumPeaks[et]=yt:this.spectrumPeaks[et]=Math.max(0,this.spectrumPeaks[et]-2.5);const Bt=60+et*(Y+4),$=k-yt,nt=n.createLinearGradient(0,$,0,k);nt.addColorStop(0,c),nt.addColorStop(.5,o),nt.addColorStop(1,"#1e293b"),n.fillStyle=nt,n.shadowColor=o,n.shadowBlur=8,n.fillRect(Bt,$,Y,yt),n.fillStyle="rgba(0, 240, 255, 0.15)",n.fillRect(Bt,k+2,Y,yt*.35),n.fillStyle="#ffffff",n.shadowColor="#ffffff",n.shadowBlur=6,n.fillRect(Bt,k-this.spectrumPeaks[et]-3,Y,2.5)}}else if(this.vjMode===2){n.strokeStyle="rgba(0, 240, 255, 0.18)",n.lineWidth=1.5;const W=320,Y=512;for(let it=-400;it<=s+400;it+=100)n.beginPath(),n.moveTo(Y,W),n.lineTo(it,r),n.stroke();const k=this.stagePhase*40%35;for(let it=0;it<180;it+=25){const ot=W+Math.pow((it+k)/180,2)*(r-W);ot<=r&&(n.beginPath(),n.moveTo(0,ot),n.lineTo(s,ot),n.stroke())}n.save();const et=55+(t.bass||0)*30;n.shadowColor=c,n.shadowBlur=30,n.strokeStyle=c,n.lineWidth=3,n.beginPath(),n.arc(512,W,et,Math.PI,0),n.stroke(),n.restore()}else if(this.vjMode===3){const k=70+(t.bass||0)*35;n.save(),n.translate(512,370),n.rotate(this.radialAngle);const et=36;for(let it=0;it<et;it++){const ot=it/et*Math.PI*2,yt=Math.floor(it/et*(h-1)),Bt=(l[yt]||0)/255*60*(.6+t.mids),$=Math.cos(ot)*k,nt=Math.sin(ot)*k,gt=Math.cos(ot)*(k+Bt),lt=Math.sin(ot)*(k+Bt);n.strokeStyle=it%2===0?o:c,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.lineWidth=2.5,n.beginPath(),n.moveTo($,nt),n.lineTo(gt,lt),n.stroke()}n.strokeStyle="#ffffff",n.lineWidth=2,n.shadowColor="#00f0ff",n.shadowBlur=12,n.beginPath();for(let it=0;it<6;it++){const ot=it/6*Math.PI*2-this.radialAngle*2,yt=Math.cos(ot)*(k*.55),Bt=Math.sin(ot)*(k*.55);it===0?n.moveTo(yt,Bt):n.lineTo(yt,Bt)}n.closePath(),n.stroke(),n.restore()}else if(this.vjMode===4){n.save(),n.translate(512,380),n.strokeStyle=o,n.shadowColor=o,n.shadowBlur=18,n.lineWidth=3,n.beginPath();const W=3,Y=2,k=this.stagePhase*1.5,et=220*(.6+t.bass*.6),it=70*(.6+t.mids*.6);for(let ot=0;ot<=Math.PI*2;ot+=.05){const yt=Math.sin(W*ot+k)*et,Bt=Math.sin(Y*ot)*it;ot===0?n.moveTo(yt,Bt):n.lineTo(yt,Bt)}n.stroke(),n.restore()}n.fillStyle="rgba(10, 14, 24, 0.75)",n.fillRect(0,0,s,52),n.strokeStyle="rgba(0, 240, 255, 0.2)",n.lineWidth=1,n.beginPath(),n.moveTo(0,52),n.lineTo(s,52),n.stroke();const f=Math.sin(a*.005)>0;n.fillStyle=f?"#ff0055":"#880022",n.shadowColor="#ff0055",n.shadowBlur=f?14:4,n.beginPath(),n.arc(36,26,6,0,Math.PI*2),n.fill(),n.font="900 15px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowColor="#ffffff",n.shadowBlur=6,n.textAlign="left",n.textBaseline="middle",n.fillText("ON AIR  |  JMF RADIO 24/7",52,26);const u=(j=this.currentTrack)==null?void 0:j.genre,p=u?`${u.icon} ${u.name}`:"🔥 ALL STYLES",g=(u==null?void 0:u.color)||"#00f0ff";n.font="900 13px Orbitron, sans-serif";const _=n.measureText(p).width+24,m=512-_/2;n.fillStyle="rgba(0, 0, 0, 0.6)",n.strokeStyle=g,n.lineWidth=1.5,n.shadowColor=g,n.shadowBlur=10,n.beginPath(),n.roundRect(m,12,_,28,14),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.textAlign="center",n.fillText(p,512,26);const d=((J=this.currentTrack)==null?void 0:J.bpm)||128,S=Math.floor(this.elapsedTime/60),b=Math.floor(this.elapsedTime%60).toString().padStart(2,"0"),y=Math.floor(this.duration/60),D=Math.floor(this.duration%60).toString().padStart(2,"0"),w=`${S}:${b} / ${y}:${D}  •  ${d} BPM`;n.font='700 14px "Space Grotesk", monospace',n.fillStyle="#94a3b8",n.shadowBlur=0,n.textAlign="right",n.fillText(w,s-36,26);const A=this.duration>0?Math.min(1,this.elapsedTime/this.duration):0;n.fillStyle="rgba(255, 255, 255, 0.1)",n.fillRect(0,52,s,2.5),n.fillStyle=o,n.shadowColor=o,n.shadowBlur=8,n.fillRect(0,52,s*A,2.5);const P=this.currentTrack,E=((P==null?void 0:P.artist)||"JMF RADIO").toUpperCase(),x=((P==null?void 0:P.title)||"THE FUTURE OF SOUND").toUpperCase(),C=1+(t.bass||0)*.08;n.save(),n.translate(512,135),n.scale(C,C),n.font="900 52px Orbitron, sans-serif",n.fillStyle="#ffffff",n.shadowColor=(t.bass||0)>.65?c:o,n.shadowBlur=20+(t.bass||0)*20,n.textAlign="center",n.textBaseline="middle",n.fillText(E.length>28?E.substring(0,26)+"...":E,0,0),n.restore(),n.save(),n.font='700 26px "Space Grotesk", sans-serif',n.fillStyle=o,n.shadowColor=o,n.shadowBlur=14,n.textAlign="center",n.textBaseline="middle";const H=n.measureText(x).width;H>800?(this.scrollTickerX=(this.scrollTickerX-1.2)%(H+200),n.fillText(x,512+this.scrollTickerX,195),n.fillText(x,512+this.scrollTickerX+H+200,195)):n.fillText(x,512,195),n.restore();const z=["🌊 CYBER WAVES","📊 SPECTRUM PEAKS","🌌 HYPERSPACE GRID","🌀 RADIAL ORBIT","⚡ VECTOR SCOPE"];n.font="700 11px Orbitron, sans-serif",n.fillStyle="rgba(148, 163, 184, 0.4)",n.shadowBlur=0,n.textAlign="left",n.fillText(`[ VJ: ${z[this.vjMode]} ]`,24,r-18),this.stageTexture&&(this.stageTexture.needsUpdate=!0)}update(t,e){const n=performance.now()*.002;for(let s=0;s<this.cityBuildings.length;s++)this.cityBuildings[s].scale.setScalar(.8+.4*Math.sin(n*2+s));if(e){const s=t.bass;for(let r of this.vipLights)r.emissive.setHex(e.accent||16711807),r.emissiveIntensity=.5+s*1.5}this.updateStageScreen(t,e)}}class cm{constructor(t){this.scene=t,this.group=new Wt,this.speakers=[],this.subCones=[],this.tweeters=[],this.eqLedBars=[],this.init(),this.scene.add(this.group)}init(){this.createSpeakerTower(-3.2,0,-2.8,Math.PI/8),this.createSpeakerTower(3.2,0,-2.8,-Math.PI/8)}createSpeakerTower(t,e,n,s){const r=new Wt;r.position.set(t,e,n),r.rotation.y=s;const a=new At({color:987159,roughness:.4,metalness:.3}),o=new q(new _t(1.2,3.2,1),a);o.position.y=1.6,o.castShadow=!0,o.receiveShadow=!0,r.add(o);const c=new At({color:1579300,roughness:.2,metalness:.5}),l=new q(new _t(1.08,3.08,.08),c);l.position.set(0,1.6,.5),r.add(l);const h=this.createWooferCone(0,.9,.54,.38);r.add(h.group),this.subCones.push(h);const f=this.createWooferCone(0,1.85,.54,.32);r.add(f.group),this.subCones.push(f);const u=new Nt(.16,.12,.08,32),p=new At({color:61695,emissive:61695,emissiveIntensity:.5,roughness:.1,metalness:.9}),g=new q(u,p);g.rotation.x=Math.PI/2,g.position.set(0,2.65,.54),r.add(g),this.tweeters.push(g);const _=new le({color:61695});for(let m=0;m<10;m++){const d=new q(new _t(.04,.08,.02),_.clone());d.position.set(.56,.8+m*.18,.48),r.add(d),this.eqLedBars.push(d)}this.group.add(r),this.speakers.push(r)}createWooferCone(t,e,n,s){const r=new Wt;r.position.set(t,e,n);const a=new Si(s,.035,16,32),o=new At({color:1118485,roughness:.9}),c=new q(a,o);r.add(c);const l=new ha(s,.14,32,1,!0),h=new At({color:2237488,roughness:.3,metalness:.4}),f=new q(l,h);f.rotation.x=-Math.PI/2,r.add(f);const u=new Gi(s*.38,16,16),p=new At({color:658192,roughness:.2,metalness:.8}),g=new q(u,p);return g.scale.z=.5,r.add(g),{group:r,coneMesh:f,cap:g,baseRadius:s}}update(t,e){const n=t.bass,s=t.beat,r=t.treble,a=t.rawArray||[],o=1+n*.4+s*.5,c=n*.08+s*.12;for(let h of this.subCones)h.group.scale.set(o,o,1+n*.8),h.cap.position.z=c;const l=.3+r*2.5;for(let h of this.tweeters)h.material.emissiveIntensity=Math.min(3,l),e&&e.primary&&h.material.emissive.setHex(e.primary);for(let h=0;h<this.eqLedBars.length;h++){const f=this.eqLedBars[h],u=h%10,p=a[u*2]||0;u/10<=p*1.3?u>7?f.material.color.setHex(16711748):u>5?f.material.color.setHex(16755200):f.material.color.setHex(e?e.primary:61695):f.material.color.setHex(1710628)}}}class lm{constructor(t){this.scene=t,this.group=new Wt,this.turntables=[],this.mixerKnobs=[],this.vuLeds=[],this.djMesh=null,this.djHead=null,this.djLeftArm=null,this.djRightArm=null,this.djTorso=null,this.laptopCanvas=null,this.laptopTexture=null,this.laptopCtx=null,this.init(),this.scene.add(this.group)}init(){this.createDJBooth(),this.createTurntablesAndMixer(),this.createLaptop(),this.createDJAvatar()}createDJBooth(){const t=new At({color:1316127,roughness:.3,metalness:.7}),e=new _t(3.6,.12,1.4),n=new q(e,t);n.position.set(0,1.05,0),n.receiveShadow=!0,n.castShadow=!0,this.group.add(n);const s=new le({color:61695}),r=new q(new _t(3.62,.04,.04),s);r.position.set(0,1.05,.7),this.group.add(r);const a=new At({color:657935,metalness:.9,roughness:.2}),c=[[-1.6,-.5],[-1.6,.5],[1.6,-.5],[1.6,.5]].map(([u,p])=>{const g=new Nt(.05,.05,1.05,12);return g.applyMatrix4(new $t().makeTranslation(u,.525,p)),g}),l=kn(c);c.forEach(u=>u.dispose());const h=new q(l,a);h.castShadow=!0,this.group.add(h);const f=new q(new _t(3.4,.9,.04),new At({color:855574,roughness:.5}));f.position.set(0,.525,.65),this.group.add(f)}createTurntablesAndMixer(){const t=new At({color:1842473,roughness:.3,metalness:.6}),e=_=>{const m=new Wt;m.position.set(_,1.12,0);const d=new q(new _t(.9,.06,.9),t);m.add(d);const S=new Wt;S.position.set(0,.04,0);const b=new Nt(.36,.36,.02,32),y=new At({color:526348,roughness:.2,metalness:.8}),D=new q(b,y);S.add(D);const w=new Nt(.12,.12,.025,32),A=new At({color:_<0?61695:16711807,emissive:_<0?61695:16711807,emissiveIntensity:.4}),P=new q(w,A);S.add(P),m.add(S);const E=new At({color:13421772,metalness:.9,roughness:.1}),x=new q(new Nt(.04,.04,.04,16),E);x.position.set(.34,.06,-.32),m.add(x);const C=new q(new Nt(.012,.012,.42,8),E);C.rotation.z=Math.PI/2,C.rotation.y=-Math.PI/4,C.position.set(.2,.08,-.18),m.add(C);const H=new q(new Nt(.03,.03,.02,16),new le({color:65416}));H.position.set(-.32,.04,.32),m.add(H),this.group.add(m),this.turntables.push({group:m,vinyl:S})};e(-1),e(1);const n=new Wt;n.position.set(0,1.12,0);const s=new q(new _t(.8,.06,.9),new At({color:1381920,roughness:.4,metalness:.5}));n.add(s),this.xFader=new q(new _t(.06,.03,.04),new At({color:16777215,roughness:.2})),this.xFader.position.set(0,.04,.28),n.add(this.xFader);const r=new Nt(.02,.022,.03,12),a=new At({color:3355978,roughness:.3,metalness:.6}),o=[];for(let _ of[-.18,.18])for(let m=0;m<4;m++){const d=r.clone();d.applyMatrix4(new $t().makeTranslation(_,.045,-.28+m*.12)),o.push(d)}const c=kn(o);o.forEach(_=>_.dispose()),r.dispose();const l=new q(c,a);n.add(l),this.mixerKnobsMesh=l;const h=new _t(.03,.015,.015),f=new le({color:1122833}),u=[];for(let _ of[-.05,.05])for(let m=0;m<8;m++){const d=h.clone();d.applyMatrix4(new $t().makeTranslation(_,.035,-.25+m*.05)),u.push(d)}const p=kn(u);u.forEach(_=>_.dispose()),h.dispose();const g=new q(p,f);n.add(g),this.vuLedsMesh=g,this.group.add(n)}createLaptop(){const t=new Wt;t.position.set(1.45,1.25,-.3),t.rotation.y=-Math.PI/6;const e=new At({color:2236979,metalness:.8}),n=new q(new Nt(.02,.02,.3,16),e);n.position.y=-.1,t.add(n);const s=new At({color:3355972,metalness:.7,roughness:.3}),r=new q(new _t(.55,.02,.38),s);t.add(r),this.laptopCanvas=document.createElement("canvas"),this.laptopCanvas.width=512,this.laptopCanvas.height=256,this.laptopCtx=this.laptopCanvas.getContext("2d"),this.laptopTexture=new ci(this.laptopCanvas);const a=new le({map:this.laptopTexture}),o=new q(new _t(.55,.35,.02),s);o.position.set(0,.17,-.18),o.rotation.x=-Math.PI/10,t.add(o);const c=new q(new Be(.52,.32),a);c.position.set(0,.17,-.168),c.rotation.x=-Math.PI/10,t.add(c),this.group.add(t)}createDJAvatar(){const t=new Wt;t.position.set(0,0,-.4);const e=new At({color:1579304,roughness:.7,metalness:.1}),n=new At({color:14659984,roughness:.5}),s=new At({color:61695,emissive:61695,emissiveIntensity:.6,metalness:.8}),r=new At({color:658194,roughness:.8}),a=new q(new Nt(.12,.1,.9,16),r);a.position.set(-.22,.45,0);const o=new q(new Nt(.12,.1,.9,16),r);o.position.set(.22,.45,0),t.add(a,o),this.djTorso=new Wt,this.djTorso.position.set(0,.9,0);const c=new q(new _t(.65,.75,.4),e);c.position.y=.38,c.castShadow=!0,this.djTorso.add(c);const l=new q(new Be(.25,.25),new le({color:61695,transparent:!0,opacity:.85}));l.position.set(0,.45,.21),this.djTorso.add(l),this.djHead=new Wt,this.djHead.position.set(0,.82,0);const h=new q(new Nt(.08,.09,.15,16),n);h.position.y=.05,this.djHead.add(h);const f=new _t(.36,.4,.36),u=new q(f,n);u.position.y=.25,this.djHead.add(u);const p=new At({color:61695,roughness:.4}),g=new q(new Gi(.2,16,16,0,Math.PI*2,0,Math.PI/2),p);g.position.y=.4;const _=new q(new _t(.25,.03,.2),p);_.position.set(0,.4,-.22),_.rotation.x=-Math.PI/16,this.djHead.add(g,_);const m=new q(new Si(.24,.025,16,32,Math.PI),s);m.position.set(0,.38,0),m.rotation.z=Math.PI,this.djHead.add(m);const d=new q(new Nt(.08,.08,.05,16),s);d.rotation.z=Math.PI/2,d.position.set(-.21,.25,0);const S=new q(new Nt(.08,.08,.05,16),s);S.rotation.z=Math.PI/2,S.position.set(.21,.25,0),this.djHead.add(d,S),this.djTorso.add(this.djHead),this.djLeftArm=new Wt,this.djLeftArm.position.set(-.36,.65,0);const b=new q(new Nt(.08,.07,.38,16),e);b.position.set(-.15,-.15,.15),b.rotation.set(Math.PI/4,0,Math.PI/6),this.djLeftArm.add(b);const y=new q(new Nt(.065,.06,.38,16),n);y.position.set(-.35,-.28,.4),y.rotation.set(Math.PI/3,0,Math.PI/4),this.djLeftArm.add(y),this.djTorso.add(this.djLeftArm),this.djRightArm=new Wt,this.djRightArm.position.set(.36,.65,0);const D=new q(new Nt(.08,.07,.38,16),e);D.position.set(.12,-.15,.15),D.rotation.set(Math.PI/4,0,-Math.PI/8),this.djRightArm.add(D);const w=new q(new Nt(.065,.06,.38,16),n);w.position.set(.22,-.28,.38),w.rotation.set(Math.PI/3,0,-Math.PI/6),this.djRightArm.add(w),this.djTorso.add(this.djRightArm),t.add(this.djTorso),this.djMesh=t,this.group.add(t)}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat,o=t.rawArray||[];if(e&&this.turntables.length>0&&this.turntables.forEach(c=>{c.mesh?c.mesh.rotation.y+=.04:c.vinyl&&(c.vinyl.rotation.y+=.04)}),this.xFader&&t.crossfadeProgress!==void 0){const c=(t.crossfadeProgress-.5)*.3;this.xFader.position.x=Zo.lerp(this.xFader.position.x,c,.1)}if(this.djHead){const c=e?5:1.5,l=e?.08+r*.12+a*.15:.02;this.djHead.position.y=.82-Math.abs(Math.sin(s*c))*l,this.djHead.rotation.x=Math.sin(s*c)*(.08+r*.15),this.djHead.rotation.y=Math.sin(s*1.5)*.1}if(this.djTorso){const c=e?2.5:.8;this.djTorso.rotation.z=Math.sin(s*c)*(.03+r*.06),this.djTorso.position.y=.9+Math.cos(s*c*2)*(.01+r*.03)}this.djLeftArm&&e&&(this.djLeftArm.rotation.y=Math.sin(s*6)*(.15+r*.2),this.djLeftArm.position.z=Math.cos(s*6)*.05),this.djRightArm&&e&&(t.isCrossfading?(this.djRightArm.rotation.x=Math.PI/4+Math.sin(s*8)*.15,this.djRightArm.position.x=.3+(t.crossfadeProgress-.5)*.2):(this.djRightArm.rotation.x=Math.sin(s*3)*(.1+r*.15),this.djRightArm.rotation.y=Math.cos(s*2)*.12));for(let c=0;c<this.vuLeds.length;c++){const l=this.vuLeds[c],h=c%8/8,f=o[c*2]||0;e&&h<=f*1.4?h>.7?l.material.color.setHex(16711748):h>.5?l.material.color.setHex(16763904):l.material.color.setHex(65416):l.material.color.setHex(660490)}this.laptopCtx&&this.drawLaptopScreen(t,e)}drawLaptopScreen(t,e){const n=this.laptopCtx,s=this.laptopCanvas.width,r=this.laptopCanvas.height;n.fillStyle="#0e101a",n.fillRect(0,0,s,r),n.strokeStyle="rgba(255, 255, 255, 0.06)",n.lineWidth=1;for(let l=0;l<r;l+=32)n.beginPath(),n.moveTo(0,l),n.lineTo(s,l),n.stroke();const a=t.rawArray||[],o=s/32;for(let l=0;l<32;l++){const f=(e?a[l]||0:.05+.05*Math.sin(l*.5+performance.now()*.003))*(r*.7),u=n.createLinearGradient(0,r-f,0,r);u.addColorStop(0,"#00f0ff"),u.addColorStop(.6,"#9d4edd"),u.addColorStop(1,"#ff007f"),n.fillStyle=u,n.fillRect(l*o+2,r-f-20,o-4,f)}n.font="bold 18px sans-serif",n.fillStyle=t.isCrossfading?"#ff007f":"#00f0ff";const c=t.isCrossfading?`MIXING: DECK ${t.activeDeck} ➔ DECK ${t.activeDeck==="A"?"B":"A"} (${Math.round(t.crossfadeProgress*100)}%)`:`DECK ${t.activeDeck||"A"} ACTIVE // ON AIR`;n.fillText(c,16,30),n.font="14px monospace",n.fillStyle="#8a8d9b",n.fillText(`BPM: 128.0   VOL: ${Math.round(t.volume*100)}%   EQ: BASS SWAP ON`,16,52),this.laptopTexture.needsUpdate=!0}}const dr={cyber:{name:"Cyberpunk Neon",primary:61695,secondary:16711807,accent:10309341,ambient:1316136,spotlight:61695},sunset:{name:"Sunset Lo-Fi",primary:16739125,secondary:16237983,accent:15672124,ambient:2364698,spotlight:16753920},matrix:{name:"Emerald Matrix",primary:65416,secondary:47957,accent:8978176,ambient:662034,spotlight:65416},acid:{name:"Electric Blue",primary:3835647,secondary:8599788,accent:16711790,ambient:1053734,spotlight:3835647}};class hm{constructor(t){this.scene=t,this.group=new Wt,this.currentTheme=dr.cyber,this.ambientLight=null,this.djSpotlight=null,this.danceFloorSpot=null,this.barLight=null,this.vipLight=null,this.leftFillPoint=null,this.rightFillPoint=null,this.strobeLight=null,this.particles=null,this.intensityMultiplier=1,this.strobeEnabled=!0,this.lasersEnabled=!0,this.fogEnabled=!0,this.laserSpeed=1,this.init(),this.scene.add(this.group)}init(){this.ambientLight=new Wp(this.currentTheme.ambient,1.4),this.group.add(this.ambientLight),this.djSpotlight=new Co(this.currentTheme.spotlight,6,16,Math.PI/4,.4,1.5),this.djSpotlight.position.set(0,8.5,1.2),this.djSpotlight.target.position.set(0,1,0),this.djSpotlight.castShadow=!0,this.djSpotlight.shadow.mapSize.width=1024,this.djSpotlight.shadow.mapSize.height=1024,this.djSpotlight.shadow.camera.near=1,this.djSpotlight.shadow.camera.far=18,this.group.add(this.djSpotlight),this.group.add(this.djSpotlight.target),this.danceFloorSpot=new Co(this.currentTheme.secondary,5,16,Math.PI/3,.5,1.2),this.danceFloorSpot.position.set(0,8.5,4.5),this.danceFloorSpot.target.position.set(0,0,4.5),this.group.add(this.danceFloorSpot),this.group.add(this.danceFloorSpot.target),this.barLight=new Di(this.currentTheme.secondary,3.5,10,2),this.barLight.position.set(6.8,4,3.5),this.group.add(this.barLight),this.vipLight=new Di(this.currentTheme.accent,3,10,2),this.vipLight.position.set(-7.5,3.8,3.5),this.group.add(this.vipLight),this.leftFillPoint=new Di(this.currentTheme.primary,3,12,2),this.leftFillPoint.position.set(-4.5,3.5,-2),this.group.add(this.leftFillPoint),this.rightFillPoint=new Di(this.currentTheme.secondary,3,12,2),this.rightFillPoint.position.set(4.5,3.5,-2),this.group.add(this.rightFillPoint),this.strobeLight=new Di(16777215,0,18,2),this.strobeLight.position.set(0,7.5,4),this.group.add(this.strobeLight),this.laserBeams=[],this.createLaserBeams(),this.createAtmosphereParticles()}createLaserBeams(){this.laserGroup=new Wt,this.laserGroup.position.set(0,7.5,-2);const t=[61695,16711807,65416,10309341,16711765,61695],e=new le({color:61695,transparent:!0,opacity:.65,blending:Es}),n=new Nt(.015,.06,18,8);n.translate(0,9,0),n.rotateX(Math.PI/2);for(let s=0;s<6;s++){const r=e.clone();r.color.setHex(t[s%t.length]);const a=new q(n,r);a.position.set((s-2.5)*1.4,0,0),this.laserBeams.push(a),this.laserGroup.add(a)}this.group.add(this.laserGroup)}setIntensityMultiplier(t){this.intensityMultiplier=Math.max(.1,Math.min(3,t))}setLaserSpeed(t){this.laserSpeed=Math.max(.2,Math.min(4,t))}setStrobeEnabled(t){this.strobeEnabled=t}setLasersEnabled(t){this.lasersEnabled=t,this.laserGroup&&(this.laserGroup.visible=t)}setFogEnabled(t){this.fogEnabled=t,this.particles&&(this.particles.visible=t)}createAtmosphereParticles(){const e=new we,n=new Float32Array(450*3);for(let r=0;r<450;r++)n[r*3]=(Math.random()-.5)*20,n[r*3+1]=Math.random()*8,n[r*3+2]=(Math.random()-.5)*20;e.setAttribute("position",new Oe(n,3));const s=new gc({color:61695,size:.05,transparent:!0,opacity:.5,blending:Es});this.particles=new Gp(e,s),this.group.add(this.particles)}setTheme(t){dr[t]&&(this.currentTheme=dr[t],this.ambientLight&&this.ambientLight.color.setHex(this.currentTheme.ambient),this.djSpotlight&&this.djSpotlight.color.setHex(this.currentTheme.spotlight),this.danceFloorSpot&&this.danceFloorSpot.color.setHex(this.currentTheme.secondary),this.barLight&&this.barLight.color.setHex(this.currentTheme.secondary),this.vipLight&&this.vipLight.color.setHex(this.currentTheme.accent),this.leftFillPoint&&this.leftFillPoint.color.setHex(this.currentTheme.primary),this.rightFillPoint&&this.rightFillPoint.color.setHex(this.currentTheme.secondary),this.particles&&this.particles.material.color.setHex(this.currentTheme.primary))}update(t){const e=t.bass,n=t.beat,s=t.treble,r=performance.now()*.001*this.laserSpeed,a=this.intensityMultiplier;if(this.djSpotlight&&(this.djSpotlight.intensity=(4+e*6+n*4)*a),this.danceFloorSpot&&this.lasersEnabled&&(this.danceFloorSpot.intensity=(3+e*5+n*5)*a,this.danceFloorSpot.position.x=Math.sin(r*1.5)*2.5),this.laserBeams&&this.lasersEnabled){const o=.35+e*.25;for(let c=0;c<this.laserBeams.length;c++){const l=this.laserBeams[c],h=(c-2.5)*o,f=Math.sin(r*2.2+c*.6)*.28;l.rotation.x=Math.PI/4+Math.sin(r*1.8)*.22+f,l.rotation.y=h+Math.cos(r*1.2+c*.4)*.15,l.material.opacity=(.35+e*.45+n*.3)*a}}if(this.leftFillPoint&&(this.leftFillPoint.intensity=(2+e*4)*a),this.rightFillPoint&&(this.rightFillPoint.intensity=(2+s*4)*a),this.barLight&&(this.barLight.intensity=(2.5+e*2)*a),this.vipLight&&(this.vipLight.intensity=(2+n*2)*a),this.strobeLight&&(this.strobeEnabled&&n>.8&&e>.55?this.strobeLight.intensity=9*a:this.strobeLight.intensity*=.7),this.particles&&this.fogEnabled){const o=this.particles.geometry.attributes.position.array;for(let c=0;c<o.length;c+=3)o[c+1]+=.003+e*.008,o[c+1]>8&&(o[c+1]=.2);this.particles.geometry.attributes.position.needsUpdate=!0}}}class dm{constructor(t){this.scene=t,this.group=new Wt,this.tiles=[],this.dancers=[],this.init(),this.scene.add(this.group)}init(){this.createLEDFloor(),this.createDancers()}createLEDFloor(){const a=new _t(.95,.04,.95);for(let _=0;_<6;_++)for(let m=0;m<6;m++){const d=new At({color:1118490,emissive:61695,emissiveIntensity:.2,roughness:.2,metalness:.8}),S=new q(a,d);S.position.set(-2.525+m*(.95+.05),.02,2.4+_*(.95+.05)),S.receiveShadow=!0,this.group.add(S),this.tiles.push({mesh:S,row:_,col:m})}const o=new le({color:16711807}),c=.06,l=6*(.95+.05)+.1,h=6*(.95+.05)+.1,f=new q(new _t(l,.06,c),o);f.position.set(0,.03,2.4-.95/2-.05);const u=new q(new _t(l,.06,c),o);u.position.set(0,.03,2.4+h-.95/2-.05);const p=new q(new _t(c,.06,h),o);p.position.set(-2.525-.95/2,.03,2.4+h/2-.95/2);const g=new q(new _t(c,.06,h),o);g.position.set(2.525+.95/2,.03,2.4+h/2-.95/2),this.group.add(f,u,p,g)}createDancers(){const t=[{x:-1.8,z:3.2,style:0,speed:1},{x:-.6,z:3,style:1,speed:1.2},{x:.7,z:3.1,style:2,speed:.9},{x:1.9,z:3.3,style:3,speed:1.1},{x:-2.2,z:4.5,style:1,speed:1.15},{x:-1,z:4.4,style:3,speed:.95},{x:.2,z:4.6,style:0,speed:1.05},{x:1.4,z:4.3,style:2,speed:1.25},{x:2.3,z:4.7,style:1,speed:1},{x:-1.5,z:5.8,style:2,speed:1.1},{x:0,z:6,style:0,speed:.9},{x:1.6,z:5.9,style:3,speed:1.15}],e=[16711765,61695,16766720,10309341,65416,16737792,16711850,3835647],n=[14659984,9262372,13010498,14724201,15843965];t.forEach((s,r)=>{const a=e[r%e.length],o=n[r%n.length],c=this.buildDancerMesh(s.x,s.z,a,o,s.style,s.speed,r);this.dancers.push(c),this.group.add(c.group)})}buildDancerMesh(t,e,n,s,r,a,o){const c=new Wt;c.position.set(t,0,e),c.rotation.y=Math.PI+(Math.random()-.5)*1.2;const l=new At({color:n,roughness:.5,metalness:.2}),h=new At({color:789780,roughness:.8}),f=new At({color:s,roughness:.6}),u=new le({color:n}),p=new q(new Nt(.09,.07,.85,12),h);p.position.set(-.16,.42,0);const g=new q(new Nt(.09,.07,.85,12),h);g.position.set(.16,.42,0),c.add(p,g);const _=new Wt;_.position.set(0,.85,0);const m=new q(new _t(.5,.65,.28),l);m.position.y=.32,m.castShadow=!0,_.add(m);const d=new q(new Si(.12,.02,8,16),u);d.position.set(0,.58,.05),d.rotation.x=Math.PI/3,_.add(d);const S=new Wt;S.position.set(0,.7,0);const b=new q(new _t(.28,.32,.28),f);b.position.y=.16,S.add(b);const y=new At({color:1118488,roughness:.9}),D=new q(new _t(.3,.12,.3),y);D.position.y=.3,S.add(D),_.add(S);const w=new Wt;w.position.set(-.28,.55,0);const A=new q(new Nt(.065,.055,.35,12),l);A.position.set(-.1,-.12,0),A.rotation.z=Math.PI/6;const P=new q(new Nt(.05,.045,.35,12),f);P.position.set(-.22,-.32,.1),P.rotation.x=Math.PI/4,w.add(A,P),_.add(w);const E=new Wt;E.position.set(.28,.55,0);const x=new q(new Nt(.065,.055,.35,12),l);x.position.set(.1,-.12,0),x.rotation.z=-Math.PI/6;const C=new q(new Nt(.05,.045,.35,12),f);return C.position.set(.22,-.32,.1),C.rotation.x=Math.PI/4,E.add(x,C),_.add(E),c.add(_),{group:c,torso:_,head:S,armL:w,armR:E,style:r,speed:a,seed:o,baseY:0}}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat,o=t.rawArray||[];for(let c=0;c<this.tiles.length;c++){const l=this.tiles[c],h=o[(l.row*5+l.col)%o.length]||0,f=Math.sin(s*3+l.row*.8+l.col*.8),u=e?Math.min(2.5,.2+r*1.8+h*1.5+f*.4):.15+.1*f;l.mesh.material.emissiveIntensity=u,n&&((l.row+l.col)%2===0?l.mesh.material.emissive.setHex(n.primary):l.mesh.material.emissive.setHex(n.secondary))}for(let c of this.dancers){const l=(e?4.5:1.2)*c.speed,h=s*l+c.seed,f=e?.08+r*.16+a*.2:.02;switch(c.group.position.y=Math.abs(Math.sin(h))*f,c.head.rotation.x=Math.sin(h*2)*(.15+r*.2),c.head.rotation.y=Math.cos(h*.8)*.2,c.torso.rotation.z=Math.sin(h)*(.08+r*.12),c.torso.rotation.y=Math.cos(h*.5)*.15,c.style){case 0:c.armL.rotation.x=-Math.PI/1.5+Math.sin(h*2)*.4,c.armR.rotation.x=-Math.PI/1.5+Math.cos(h*2)*.4,c.armL.rotation.z=-.4+Math.sin(h)*.3,c.armR.rotation.z=.4-Math.sin(h)*.3;break;case 1:c.armL.rotation.x=Math.sin(h)*.6,c.armR.rotation.x=-Math.sin(h)*.6,c.armL.rotation.y=Math.PI/4+Math.cos(h)*.3,c.armR.rotation.y=-Math.PI/4-Math.cos(h)*.3;break;case 2:c.armL.rotation.z=-Math.PI/3+Math.sin(h)*.5,c.armR.rotation.x=-Math.PI/2.5+Math.sin(h*2)*.3,c.group.rotation.y+=Math.sin(h*.5)*.005;break;case 3:c.armL.rotation.x=-Math.PI/3+Math.cos(h*2)*.5,c.armR.rotation.x=-Math.PI/3+Math.sin(h*2)*.5,c.group.position.x+=Math.sin(h*.5)*.002;break}}}}class um{constructor(t){this.scene=t,this.group=new Wt,this.bartender=null,this.bottles=[],this.barLights=[],this.shaker=null,this.init(),this.scene.add(this.group)}init(){this.group.position.set(6.8,0,3.5),this.group.rotation.y=-Math.PI/2,this.createBarCounter(),this.createBackShelvesAndBottles(),this.createBarStools(),this.createBartender()}createBarCounter(){const t=new At({color:1184542,roughness:.2,metalness:.8}),e=new _t(5.2,.12,.8),n=new q(e,t);n.position.set(0,1.15,0),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const s=new le({color:61695}),r=new q(new _t(5.22,.04,.04),s);r.position.set(0,1.1,.4),this.group.add(r),this.barLights.push(s);const a=new At({color:723986,roughness:.8,metalness:.1}),o=new q(new _t(5,1.05,.6),a);o.position.set(0,.55,0),o.castShadow=!0,this.group.add(o);const c=new At({color:14540253,metalness:.95,roughness:.1}),l=new q(new Nt(.025,.025,5,16),c);l.rotation.z=Math.PI/2,l.position.set(0,.2,.45),this.group.add(l);const h=new As({color:16777215,transparent:!0,opacity:.5,roughness:.1,metalness:.1,transmission:.8,ior:1.5});for(let f=0;f<4;f++){const u=new q(new Nt(.04,.03,.12,16),h);u.position.set(-1.8+f*1.2,1.25,.1),this.group.add(u)}}createBackShelvesAndBottles(){const t=new q(new _t(5,3.2,.2),new At({color:526608,roughness:.9}));t.position.set(0,2,-1.2),this.group.add(t);const e=new As({color:61695,transparent:!0,opacity:.4,roughness:.1,metalness:.2,transmission:.6}),n=[16711765,61695,16766720,65416,10309341,16746496,3835647,16711850],s={};n.forEach(h=>{s[h]=[]});for(let h=0;h<3;h++){const f=1.2+h*.7,u=new q(new _t(4.8,.04,.35),e);u.position.set(0,f,-1.05),this.group.add(u);const p=new q(new _t(4.8,.02,.02),new le({color:h%2===0?61695:16711807}));p.position.set(0,f-.03,-1),this.group.add(p),this.barLights.push(p.material);for(let g=0;g<14;g++){const _=n[(h*5+g)%n.length],m=new Nt(.035,.035,.25,8);m.applyMatrix4(new $t().makeTranslation(-2.1+g*.32,f+.14,-1.05)),s[_].push(m)}}n.forEach(h=>{const f=s[h];if(!f.length)return;const u=kn(f);f.forEach(_=>_.dispose());const p=new At({color:h,emissive:h,emissiveIntensity:.4,roughness:.1,metalness:.6,transparent:!0,opacity:.85}),g=new q(u,p);this.group.add(g),this.bottles.push(g)});const r=document.createElement("canvas");r.width=512,r.height=128;const a=r.getContext("2d");a.fillStyle="#05060a",a.fillRect(0,0,512,128),a.font="900 48px Orbitron, sans-serif",a.fillStyle="#ff007f",a.shadowColor="#ff007f",a.shadowBlur=16,a.textAlign="center",a.textBaseline="middle",a.fillText("🍸 JMF BAR 🍸",256,64);const o=new ci(r),c=new le({map:o}),l=new q(new Be(2.4,.6),c);l.position.set(0,3.4,-1.08),this.group.add(l)}createBarStools(){new At({color:1579304,roughness:.4,metalness:.5});const t=new At({color:15658734,metalness:.95,roughness:.1}),e=new At({color:16711765,roughness:.6});for(let n=0;n<4;n++){const s=new Wt,r=-1.6+n*1.1;s.position.set(r,0,.85);const a=new q(new Nt(.2,.22,.03,24),t);a.position.y=.015,s.add(a);const o=new q(new Nt(.025,.025,.75,16),t);o.position.y=.4,s.add(o);const c=new q(new Si(.12,.015,8,24),t);c.rotation.x=Math.PI/2,c.position.y=.25,s.add(c);const l=new q(new Nt(.22,.22,.08,24),e);l.position.y=.78,l.castShadow=!0,s.add(l),this.group.add(s)}}createBartender(){const t=new Wt;t.position.set(0,0,-.6);const e=new At({color:1118488,roughness:.6}),n=new At({color:15724527,roughness:.5}),s=new At({color:16711765}),r=new At({color:14065016,roughness:.5}),a=new At({color:657936,roughness:.8}),o=new At({color:13421772,metalness:.95,roughness:.1}),c=new q(new Nt(.1,.08,.9,12),a);c.position.set(-.16,.45,0);const l=new q(new Nt(.1,.08,.9,12),a);l.position.set(.16,.45,0),t.add(c,l);const h=new Wt;h.position.set(0,.9,0);const f=new q(new _t(.55,.72,.32),n);f.position.y=.36,h.add(f);const u=new q(new _t(.56,.68,.33),e);u.position.y=.34,h.add(u);const p=new q(new _t(.14,.06,.04),s);p.position.set(0,.68,.18),h.add(p);const g=new Wt;g.position.set(0,.78,0);const _=new q(new _t(.3,.34,.3),r);_.position.y=.18,g.add(_);const m=new q(new _t(.32,.12,.32),new At({color:2037008,roughness:.8}));m.position.y=.32,g.add(m),h.add(g);const d=new Wt;d.position.set(-.3,.6,0);const S=new q(new Nt(.07,.06,.35,12),n);S.position.set(.1,-.1,.15),S.rotation.set(Math.PI/4,0,-Math.PI/6),d.add(S),h.add(d);const b=new Wt;b.position.set(.3,.6,0);const y=new q(new Nt(.07,.06,.35,12),n);y.position.set(-.1,-.1,.15),y.rotation.set(Math.PI/4,0,Math.PI/6),b.add(y),h.add(b);const D=new Wt;D.position.set(0,.52,.32);const w=new q(new Nt(.06,.045,.24,16),o),A=new q(new Nt(.04,.06,.08,16),o);A.position.y=.14,D.add(w,A),D.rotation.z=Math.PI/8,h.add(D),t.add(h),this.group.add(t),this.bartender={group:t,torso:h,head:g,shaker:D,armL:d,armR:b}}update(t,e,n){const s=performance.now()*.001,r=t.bass,a=t.beat;if(this.bartender){const c=e?8:2,l=e?.08+r*.12:.02;this.bartender.shaker.position.y=.52+Math.sin(s*c)*l,this.bartender.shaker.rotation.z=Math.PI/8+Math.cos(s*c)*.3,this.bartender.armL.position.y=.6+Math.sin(s*c)*(l*.5),this.bartender.armR.position.y=.6+Math.sin(s*c)*(l*.5),this.bartender.head.rotation.x=Math.sin(s*4)*(.08+r*.1),this.bartender.torso.rotation.y=Math.sin(s*1.5)*.15}const o=.3+(e?r*1.2+a*.8:.1);for(let c of this.bottles)c.material.emissiveIntensity=o;if(n)for(let c of this.barLights)c.color.setHex(n.secondary||16711807)}}const Dn={pov:{position:new R(0,1.38,-.65),target:new R(0,1.15,6)},booth:{position:new R(0,1.8,2.6),target:new R(0,1.4,0)},dance:{position:new R(0,2.8,8.6),target:new R(0,1.1,4)},bar:{position:new R(4,2.3,5.2),target:new R(6.8,1.4,3.5)},lounge:{position:new R(-4.2,2.3,5.2),target:new R(-7.5,1.2,3.5)},decks:{position:new R(0,2.6,1),target:new R(0,1.1,-.2)},room:{position:new R(7.5,4.8,9.5),target:new R(0,1.5,2.5)},cinematic:{position:new R(-6.5,3.2,7.5),target:new R(0,1.4,2)}};class fm{constructor(t){this.container=t,this.width=t.clientWidth||window.innerWidth||1280,this.height=t.clientHeight||window.innerHeight||720,this.scene=new kp,this.scene.background=new Ht(460555),this.scene.fog=new la(460555,.035),this.camera=new Re(50,this.width/this.height,.1,80),this.camera.position.copy(Dn.booth.position),this.renderer=new Np({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=ko,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fo,this.container.appendChild(this.renderer.domElement),this.controls=new Yp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=1.5,this.controls.maxDistance=16,this.controls.target.copy(Dn.booth.target),this.room=new om(this.scene),this.soundSystem=new cm(this.scene),this.dj=new lm(this.scene),this.danceFloor=new dm(this.scene),this.barArea=new um(this.scene),this.lighting=new hm(this.scene),this.activePreset="booth",this.targetCamPos=new R().copy(Dn.booth.position),this.targetCamLook=new R().copy(Dn.booth.target),this.isTransitioningCam=!1,this.isCinematicOrbit=!1,this.cinematicAngle=0,window.addEventListener("resize",()=>this.onResize())}setCameraPreset(t){Dn[t]&&(this.activePreset=t,this.dj&&this.dj.djTorso&&(this.dj.djTorso.visible=t!=="pov"),t==="cinematic"?this.isCinematicOrbit=!0:(this.isCinematicOrbit=!1,this.targetCamPos.copy(Dn[t].position),this.targetCamLook.copy(Dn[t].target),this.isTransitioningCam=!0))}setTheme(t){this.lighting.setTheme(t)}onResize(){this.width=this.container.clientWidth||window.innerWidth,this.height=this.container.clientHeight||window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setTrackInfo(t,e,n,s){this.room&&this.room.setTrackInfo&&this.room.setTrackInfo(t,e,n,s)}update(t,e){const n=t||{bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126};if(this.isCinematicOrbit){this.cinematicAngle+=.0025;const s=8.5,r=3.5+Math.sin(this.cinematicAngle*1.2)*.8;this.camera.position.x=Math.cos(this.cinematicAngle)*s,this.camera.position.z=2.5+Math.sin(this.cinematicAngle)*s,this.camera.position.y=r,this.controls.target.set(0,1.3,2.5)}else this.isTransitioningCam&&(this.camera.position.lerp(this.targetCamPos,.07),this.controls.target.lerp(this.targetCamLook,.07),this.camera.position.distanceTo(this.targetCamPos)<.02&&(this.isTransitioningCam=!1));this.controls.update(),this.room.update(n,this.lighting.currentTheme),this.soundSystem.update(n,this.lighting.currentTheme),this.dj.update(n,e,this.lighting.currentTheme),this.danceFloor.update(n,e,this.lighting.currentTheme),this.barArea.update(n,e,this.lighting.currentTheme),this.lighting.update(n),this.renderer.render(this.scene,this.camera)}}class pm{constructor(t,e){this.onTrackChange=t,this.onTransition=e,this.audioA=new Audio,this.audioB=new Audio,this.audioA.crossOrigin="anonymous",this.audioB.crossOrigin="anonymous",this.activeDeck="A",this.mixMode="dj",this.crossfadeDuration=8,this.isCrossfading=!1,this.crossfadeProgress=0,this.crossfadeStartTime=0,this.audioContext=null,this.analyser=null,this.masterGain=null,this.chGainA=null,this.xFaderGainA=null,this.eqLowA=null,this.eqMidA=null,this.eqHighA=null,this.filterSweepA=null,this.chGainB=null,this.xFaderGainB=null,this.eqLowB=null,this.eqMidB=null,this.eqHighB=null,this.filterSweepB=null,this.deckStates={A:{isPlaying:!1,cueTime:0,pitch:1,bpm:128,detectedBpm:128,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0},B:{isPlaying:!1,cueTime:0,pitch:1,bpm:126,detectedBpm:126,loopActive:!1,loopBeats:0,loopStart:0,loopEnd:0}},this.fxStates={A:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4},B:{enabled:!1,type:"filter",lpf:.5,res:.3,drywet:.4}},this.isPlaying=!1,this.isMuted=!1,this.volume=.8,this.currentTrack=null,this.nextTrack=null,this.elapsedTime=0,this.duration=180,this.queue=[],this.history=[],this.totalTracks=0,this.dataArray=null,this.freqData=null,this.lastBeatTime=0,this.beatIntervals=[],this.bpmCache=new Map,this.analysis={bass:0,mids:0,treble:0,volume:0,rawArray:[],beat:0,activeDeck:"A",crossfadeProgress:0,isCrossfading:!1,deckALevel:0,deckBLevel:0,bpmA:128,bpmB:126},this.prevBass=0,this.isTransitionTriggered=!1,this.autoDjEnabled=!0,this.hotCues={A:[null,null,null,null],B:[null,null,null,null]},this.setupAudioListeners()}async initAudioContext(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t,this.masterGain=this.audioContext.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.audioContext.currentTime),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.82;const e=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(e),this.freqData=new Uint8Array(e),this.masterGain.connect(this.analyser),this.analyser.connect(this.audioContext.destination);const n=this.audioContext.createMediaElementSource(this.audioA);this.eqLowA=this.audioContext.createBiquadFilter(),this.eqLowA.type="lowshelf",this.eqLowA.frequency.value=120,this.eqLowA.gain.value=0,this.eqMidA=this.audioContext.createBiquadFilter(),this.eqMidA.type="peaking",this.eqMidA.frequency.value=1e3,this.eqMidA.Q.value=1,this.eqMidA.gain.value=0,this.eqHighA=this.audioContext.createBiquadFilter(),this.eqHighA.type="highshelf",this.eqHighA.frequency.value=8e3,this.eqHighA.gain.value=0,this.filterSweepA=this.audioContext.createBiquadFilter(),this.filterSweepA.type="lowpass",this.filterSweepA.frequency.value=22e3,this.fxFilterA=this.audioContext.createBiquadFilter(),this.fxFilterA.type="lowpass",this.fxFilterA.frequency.value=14e3,this.fxFilterA.Q.value=1.5,this.fxDelayA=this.audioContext.createDelay(2),this.fxDelayA.delayTime.value=.375,this.fxFeedbackA=this.audioContext.createGain(),this.fxFeedbackA.gain.value=.42,this.fxDryA=this.audioContext.createGain(),this.fxDryA.gain.value=1,this.fxWetA=this.audioContext.createGain(),this.fxWetA.gain.value=0,this.chGainA=this.audioContext.createGain(),this.chGainA.gain.value=1,this.xFaderGainA=this.audioContext.createGain(),this.xFaderGainA.gain.value=1,n.connect(this.eqLowA),this.eqLowA.connect(this.eqMidA),this.eqMidA.connect(this.eqHighA),this.eqHighA.connect(this.filterSweepA),this.filterSweepA.connect(this.fxDryA),this.fxDryA.connect(this.chGainA),this.filterSweepA.connect(this.fxFilterA),this.fxFilterA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxFeedbackA),this.fxFeedbackA.connect(this.fxDelayA),this.fxDelayA.connect(this.fxWetA),this.fxWetA.connect(this.chGainA),this.chGainA.connect(this.xFaderGainA),this.xFaderGainA.connect(this.masterGain);const s=this.audioContext.createMediaElementSource(this.audioB);this.eqLowB=this.audioContext.createBiquadFilter(),this.eqLowB.type="lowshelf",this.eqLowB.frequency.value=120,this.eqLowB.gain.value=0,this.eqMidB=this.audioContext.createBiquadFilter(),this.eqMidB.type="peaking",this.eqMidB.frequency.value=1e3,this.eqMidB.Q.value=1,this.eqMidB.gain.value=0,this.eqHighB=this.audioContext.createBiquadFilter(),this.eqHighB.type="highshelf",this.eqHighB.frequency.value=8e3,this.eqHighB.gain.value=0,this.filterSweepB=this.audioContext.createBiquadFilter(),this.filterSweepB.type="lowpass",this.filterSweepB.frequency.value=22e3,this.fxFilterB=this.audioContext.createBiquadFilter(),this.fxFilterB.type="lowpass",this.fxFilterB.frequency.value=14e3,this.fxFilterB.Q.value=1.5,this.fxDelayB=this.audioContext.createDelay(2),this.fxDelayB.delayTime.value=.375,this.fxFeedbackB=this.audioContext.createGain(),this.fxFeedbackB.gain.value=.42,this.fxDryB=this.audioContext.createGain(),this.fxDryB.gain.value=1,this.fxWetB=this.audioContext.createGain(),this.fxWetB.gain.value=0,this.chGainB=this.audioContext.createGain(),this.chGainB.gain.value=1,this.xFaderGainB=this.audioContext.createGain(),this.xFaderGainB.gain.value=0,s.connect(this.eqLowB),this.eqLowB.connect(this.eqMidB),this.eqMidB.connect(this.eqHighB),this.eqHighB.connect(this.filterSweepB),this.filterSweepB.connect(this.fxDryB),this.fxDryB.connect(this.chGainB),this.filterSweepB.connect(this.fxFilterB),this.fxFilterB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxFeedbackB),this.fxFeedbackB.connect(this.fxDelayB),this.fxDelayB.connect(this.fxWetB),this.fxWetB.connect(this.chGainB),this.chGainB.connect(this.xFaderGainB),this.xFaderGainB.connect(this.masterGain)}setupAudioListeners(){const t=e=>{!this.isCrossfading&&this.activeDeck===e&&this.skipNext()};this.audioA.addEventListener("ended",()=>t("A")),this.audioB.addEventListener("ended",()=>t("B")),this.audioA.addEventListener("error",e=>console.warn("Deck A audio error:",e)),this.audioB.addEventListener("error",e=>console.warn("Deck B audio error:",e))}async analyzeTrackBpm(t,e){if(!t)return;if(t.bpm&&t.bpm>=60&&t.bpm<=200)return this.deckStates[e].bpm=t.bpm,this.deckStates[e].detectedBpm=t.bpm,t.bpm;if(this.bpmCache.has(t.id)){const r=this.bpmCache.get(t.id);return this.deckStates[e].bpm=r,this.deckStates[e].detectedBpm=r,r}try{if(!this.audioContext)return;const a=await(await fetch(`/api/stream/${t.id}`,{headers:{Range:"bytes=0-350000"}})).arrayBuffer(),o=await this.audioContext.decodeAudioData(a),c=o.getChannelData(0),l=o.sampleRate,h=4,f=new Float32Array(Math.floor(c.length/h));for(let _=0;_<f.length;_++)f[_]=c[_*h];const u=[],p=.35,g=Math.floor(l/h*.3);for(let _=1;_<f.length-1;_++)f[_]>p&&f[_]>f[_-1]&&f[_]>f[_+1]&&(u.length===0||_-u[u.length-1]>g)&&u.push(_);if(u.length>=6){const _=[];for(let m=1;m<u.length;m++){let S=60/((u[m]-u[m-1])/(l/h));for(;S<90;)S*=2;for(;S>180;)S/=2;S>=90&&S<=180&&_.push(Math.round(S*2)/2)}if(_.length>0){_.sort((d,S)=>d-S);const m=_[Math.floor(_.length/2)];return this.deckStates[e].bpm=m,this.deckStates[e].detectedBpm=m,this.bpmCache.set(t.id,m),m}}}catch{}let n=0;for(let r=0;r<(t.title||"").length;r++)n=(n<<5)-n+t.title.charCodeAt(r),n|=0;const s=120+Math.abs(n)%18*1;return this.deckStates[e].bpm=s,this.deckStates[e].detectedBpm=s,this.bpmCache.set(t.id,s),s}async start(){try{await this.initAudioContext(),this.audioContext&&this.audioContext.state==="suspended"&&await this.audioContext.resume()}catch(t){console.warn("AudioContext initialization note:",t)}await this.fetchInitialData()}async fetchInitialData(){try{const e=await(await fetch("/api/track")).json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck("A",this.currentTrack,e.serverProgress||0),this.analyzeTrackBpm(this.currentTrack,"A"),this.nextTrack&&(this.loadDeck("B",this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,"B")),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error fetching initial track data:",t)}}loadDeck(t,e,n=0,s=!0){if(!e)return;const r=t==="A"?this.audioA:this.audioB;r.src=`/api/stream/${e.id}`,r.currentTime=n,r.playbackRate=this.deckStates[t].pitch,this.analyzeTrackBpm(e,t),s?r.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(a=>{console.warn(`Deck ${t} autoplay prevented:`,a)}):this.deckStates[t].isPlaying=!1}setEQ(t,e,n){if(!this.audioContext)return;const s=this.audioContext.currentTime;let r=null;t==="A"?e==="low"?r=this.eqLowA:e==="mid"?r=this.eqMidA:e==="high"&&(r=this.eqHighA):e==="low"?r=this.eqLowB:e==="mid"?r=this.eqMidB:e==="high"&&(r=this.eqHighB),r&&r.gain.setTargetAtTime(n,s,.05)}setEQPreset(t){this.currentEQPreset=t;const e={flat:{low:0,mid:0,high:0},bass:{low:6,mid:0,high:1},club:{low:4,mid:-1,high:3},vocal:{low:-2,mid:4,high:2},electronic:{low:5,mid:-2,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}setFilterSweep(t,e){if(!this.audioContext)return;const n=t==="A"?this.filterSweepA:this.filterSweepB;if(!n)return;const s=this.audioContext.currentTime;if(e<.48){n.type="lowpass";const r=200+Math.pow(e/.5,2)*21800;n.frequency.setTargetAtTime(r,s,.05)}else if(e>.52){n.type="highpass";const r=20+Math.pow((e-.5)/.5,2)*8e3;n.frequency.setTargetAtTime(r,s,.05)}else n.type="lowpass",n.frequency.setTargetAtTime(22e3,s,.05)}setChannelGain(t,e){if(!this.audioContext)return;const n=t==="A"?this.chGainA:this.chGainB;n&&n.gain.setValueAtTime(Math.max(0,Math.min(1.5,e)),this.audioContext.currentTime)}setFXType(t,e){if(!this.fxStates[t]||(this.fxStates[t].type=e,!this.audioContext))return;const n=this.audioContext.currentTime,s=t==="A"?this.fxDelayA:this.fxDelayB,r=t==="A"?this.fxFeedbackA:this.fxFeedbackB,a=t==="A"?this.fxFilterA:this.fxFilterB;!s||!r||!a||(e==="echo"?(s.delayTime.setTargetAtTime(.375,n,.05),r.gain.setTargetAtTime(.45,n,.05),a.frequency.setTargetAtTime(12e3,n,.05),a.type="lowpass"):e==="flanger"?(s.delayTime.setTargetAtTime(.006,n,.05),r.gain.setTargetAtTime(.65,n,.05),a.frequency.setTargetAtTime(18e3,n,.05),a.type="allpass"):e==="reverb"?(s.delayTime.setTargetAtTime(.09,n,.05),r.gain.setTargetAtTime(.7,n,.05),a.frequency.setTargetAtTime(8e3,n,.05),a.type="lowpass"):e==="filter"&&(s.delayTime.setTargetAtTime(.001,n,.05),r.gain.setTargetAtTime(0,n,.05),a.frequency.setTargetAtTime(1e4,n,.05),a.type="lowpass"))}setFXToggle(t,e){this.fxStates[t]&&(this.fxStates[t].enabled=e,this.updateFXDryWet(t))}setFXParam(t,e,n){if(!this.audioContext||!this.fxStates[t])return;const s=this.audioContext.currentTime,r=this.fxStates[t];r[e]=n;const a=t==="A"?this.fxDelayA:this.fxDelayB,o=t==="A"?this.fxFeedbackA:this.fxFeedbackB,c=t==="A"?this.fxFilterA:this.fxFilterB;if(e==="lpf"&&c){const l=200+Math.pow(n,2)*19800;if(c.frequency.setTargetAtTime(l,s,.05),r.type==="echo"&&a){const h=.1+n*.7;a.delayTime.setTargetAtTime(h,s,.05)}}else if(e==="res"&&c&&o){const l=.5+n*12;c.Q.setTargetAtTime(l,s,.05);const h=Math.min(.85,n*.85);o.gain.setTargetAtTime(h,s,.05)}else e==="drywet"&&this.updateFXDryWet(t)}updateFXDryWet(t){if(!this.audioContext||!this.fxStates[t])return;const e=this.audioContext.currentTime,n=this.fxStates[t],s=t==="A"?this.fxDryA:this.fxDryB,r=t==="A"?this.fxWetA:this.fxWetB;if(!(!s||!r))if(!n.enabled)s.gain.setTargetAtTime(1,e,.05),r.gain.setTargetAtTime(0,e,.05);else{const a=n.drywet!==void 0?n.drywet:.4;s.gain.setTargetAtTime(Math.max(.2,1-a*.6),e,.05),r.gain.setTargetAtTime(a,e,.05)}}setCrossfader(t){if(this.crossfadeProgress=Math.max(0,Math.min(1,t)),!this.audioContext||!this.xFaderGainA||!this.xFaderGainB)return;const e=Math.cos(this.crossfadeProgress*.5*Math.PI),n=Math.sin(this.crossfadeProgress*.5*Math.PI);this.xFaderGainA.gain.setValueAtTime(e,this.audioContext.currentTime),this.xFaderGainB.gain.setValueAtTime(n,this.audioContext.currentTime)}cueDeck(t){const e=t==="A"?this.audioA:this.audioB;e&&(e.paused?this.deckStates[t].cueTime=e.currentTime||0:(e.pause(),e.currentTime=this.deckStates[t].cueTime||0,this.deckStates[t].isPlaying=!1))}togglePlayDeck(t){const e=t==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),e.paused?(e.play(),this.deckStates[t].isPlaying=!0,this.isPlaying=!0):(e.pause(),this.deckStates[t].isPlaying=!1),this.deckStates[t].isPlaying}setPitch(t,e){const n=1+e/100,s=t==="A"?this.audioA:this.audioB;s.playbackRate=Math.max(.5,Math.min(2,n)),this.deckStates[t].pitch=n}setEQPreset(t){const e={flat:{low:0,mid:0,high:0},bass:{low:5.5,mid:0,high:2},club:{low:4.5,mid:-2,high:3.5},vocal:{low:-3,mid:4,high:2},electronic:{low:5,mid:1,high:4}},n=e[t]||e.flat;this.setEQ("A","low",n.low),this.setEQ("A","mid",n.mid),this.setEQ("A","high",n.high),this.setEQ("B","low",n.low),this.setEQ("B","mid",n.mid),this.setEQ("B","high",n.high)}toggleAutoDj(){return this.autoDjEnabled=!this.autoDjEnabled,this.autoDjEnabled}triggerHotCue(t,e,n=!1){const s=t==="A"?this.audioA:this.audioB;if(!s)return null;const r=this.hotCues[t][e];return r===null||n?(this.hotCues[t][e]=s.currentTime||0,{action:"set",time:this.hotCues[t][e]}):(s.currentTime=r,s.paused&&s.play().then(()=>{this.deckStates[t].isPlaying=!0,this.isPlaying=!0}).catch(()=>{}),{action:"jump",time:r})}toggleLoop(t,e){const n=t==="A"?this.audioA:this.audioB,s=this.deckStates[t];if(s.loopActive&&s.loopBeats===e)return s.loopActive=!1,!1;s.loopActive=!0,s.loopBeats=e,s.loopStart=n.currentTime;const r=60/(s.detectedBpm||128);return s.loopEnd=s.loopStart+e*r,!0}getAuthHeaders(){const t=localStorage.getItem("jmf_dj_key")||(typeof window<"u"?new URLSearchParams(window.location.search).get("dj_key"):null),e={"Content-Type":"application/json"};return t&&(e["x-dj-key"]=t),e}async triggerDJCrossfade(){if(this.isCrossfading)return;const t=this.activeDeck==="A"?"B":"A";if(!this.nextTrack)try{const e=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.track&&(this.nextTrack=n.track,this.queue=n.queue||[],this.totalTracks=n.totalTracks||0)}catch(e){console.warn("Error fetching next track for crossfade:",e)}this.nextTrack&&(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.loadDeck(t,this.nextTrack,0,!0),this.analyzeTrackBpm(this.nextTrack,t),this.onTransition&&this.onTransition(!0,this.activeDeck,t,this.nextTrack))}async crossfadeToDeck(t,e=5){if(this.isCrossfading||this.activeDeck===t)return;const n=t,s=t==="A"?"B":"A",r=n==="A"?this.audioA:this.audioB;if(r.paused||r.currentTime===0){const a=n==="A"?this.currentTrack:this.nextTrack||this.queue[0];a&&(this.loadDeck(n,a,0,!0),this.analyzeTrackBpm(a,n))}if(this.isCrossfading=!0,this.crossfadeStartTime=performance.now(),this.crossfadeDuration=e,this.onTransition){const a=n==="A"?this.currentTrack:this.nextTrack;this.onTransition(!0,s,n,a)}}setMixMode(t){this.mixMode=t,this.crossfadeDuration=t==="dj"?8:3}async setGenre(t){this.activeGenre=t;try{const e=await fetch("/api/genre/select",{method:"POST",headers:this.getAuthHeaders(),body:JSON.stringify({genre:t})});if(e.status===403){this.onAuthRequired&&this.onAuthRequired();return}const n=await e.json();n.currentTrack&&(this.nextTrack=n.currentTrack,this.mixMode==="radio"?this.loadDeck(this.activeDeck,n.currentTrack,0,!0):this.triggerDJCrossfade()),await this.fetchStatus()}catch(e){console.warn("Error setting genre:",e)}}async fetchStatus(){try{const e=await(await fetch("/api/track")).json();e&&e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.warn("Error fetching status:",t)}}async fetchGenres(){try{return await(await fetch("/api/genres")).json()}catch{return{genres:[],activeGenre:"all"}}}togglePlay(){const t=this.activeDeck==="A"?this.audioA:this.audioB;return this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),t.paused?(t.play(),this.isPlaying=!0,this.deckStates[this.activeDeck].isPlaying=!0):(t.pause(),this.isPlaying=!1,this.deckStates[this.activeDeck].isPlaying=!1),this.isPlaying}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.audioContext&&this.masterGain.gain.setValueAtTime(this.isMuted?0:this.volume,this.audioContext.currentTime)}toggleMute(){return this.isMuted=!this.isMuted,this.setVolume(this.volume),this.isMuted}async skipNext(){try{const t=await fetch("/api/next",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();if(e.track){this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck);const n=this.activeDeck==="A"?"B":"A";this.nextTrack&&(this.loadDeck(n,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,n)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks)}}catch(t){console.error("Error skipping next track:",t)}}async skipPrev(){try{const t=await fetch("/api/prev",{method:"POST",headers:this.getAuthHeaders()});if(t.status===403){this.onAuthRequired&&this.onAuthRequired();return}const e=await t.json();e.track&&(this.currentTrack=e.track,this.queue=e.queue||[],this.totalTracks=e.totalTracks||0,this.nextTrack=this.queue[0]||null,this.loadDeck(this.activeDeck,this.currentTrack,0,!0),this.analyzeTrackBpm(this.currentTrack,this.activeDeck),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks))}catch(t){console.error("Error skipping prev track:",t)}}getActiveAudio(){return this.activeDeck==="A"?this.audioA:this.audioB}getAudioAnalysis(){if(!this.analyser||!this.isPlaying)return null;const t=this.deckStates[this.activeDeck];if(t.loopActive&&t.loopEnd>t.loopStart){const p=this.getActiveAudio();p.currentTime>=t.loopEnd&&(p.currentTime=t.loopStart)}const e=this.activeDeck==="A"?this.audioA:this.audioB;e.currentTime&&(this.elapsedTime=e.currentTime,e.duration&&!isNaN(e.duration)&&(this.duration=e.duration));const n=this.duration-this.elapsedTime;if(this.autoDjEnabled&&this.mixMode==="dj"&&n<=this.crossfadeDuration&&!this.isTransitionTriggered&&this.elapsedTime>5&&(this.isTransitionTriggered=!0,this.triggerDJCrossfade()),this.isCrossfading&&this.audioContext){const g=(performance.now()-this.crossfadeStartTime)/1e3,_=Math.min(1,g/this.crossfadeDuration);if(this.activeDeck==="A"?(this.setCrossfader(_),this.setFilterSweep("A",.5-.4*_),this.setFilterSweep("B",.1+.4*_)):(this.setCrossfader(1-_),this.setFilterSweep("B",.5-.4*_),this.setFilterSweep("A",.1+.4*_)),_>=1){this.isCrossfading=!1;const m=this.activeDeck,d=this.activeDeck==="A"?"B":"A",S=m==="A"?this.audioA:this.audioB;S.pause(),S.currentTime=0,this.deckStates[m].isPlaying=!1,this.activeDeck=d,this.currentTrack=this.nextTrack,this.isTransitionTriggered=!1,this.setFilterSweep("A",.5),this.setFilterSweep("B",.5),fetch("/api/next",{method:"POST"}).then(b=>b.json()).then(b=>{b.track&&(this.nextTrack=b.track,this.queue=b.queue||[],this.totalTracks=b.totalTracks||0,this.loadDeck(m,this.nextTrack,0,!1),this.analyzeTrackBpm(this.nextTrack,m),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,null,null,null))}).catch(b=>console.warn("Error preloading upcoming track on standby deck:",b)),this.onTrackChange&&this.onTrackChange(this.currentTrack,this.queue,this.totalTracks),this.onTransition&&this.onTransition(!1,this.activeDeck,this.activeDeck,null)}}this.analyser.getByteFrequencyData(this.freqData),this.analyser.getByteTimeDomainData(this.dataArray);const s=this.freqData.length;let r=0;for(let p=1;p<=10;p++)r+=this.freqData[p];const a=r/2550;this.analysis.bass=a;let o=0;for(let p=11;p<=60;p++)o+=this.freqData[p];this.analysis.mids=o/12750;let c=0;for(let p=61;p<=180;p++)c+=this.freqData[p];this.analysis.treble=c/30600;let l=0;for(let p=0;p<s;p++)l+=this.freqData[p];this.analysis.volume=l/(s*255);const h=a-this.prevBass,f=performance.now()/1e3;if(h>.16&&a>.38){if(this.analysis.beat=1,this.lastBeatTime>0){const p=f-this.lastBeatTime;if(p>=.33&&p<=1.05){this.beatIntervals.push(p),this.beatIntervals.length>12&&this.beatIntervals.shift();const g=[...this.beatIntervals].sort((S,b)=>S-b),m=60/g[Math.floor(g.length/2)],d=this.deckStates[this.activeDeck].detectedBpm;this.deckStates[this.activeDeck].detectedBpm=d*.88+m*.12}}this.lastBeatTime=f}else this.analysis.beat*=.88;this.prevBass=a,this.analysis.rawArray=[];const u=Math.floor(s/32);for(let p=0;p<32;p++)this.analysis.rawArray.push(this.freqData[p*u]/255);return this.analysis.activeDeck=this.activeDeck,this.analysis.crossfadeProgress=this.crossfadeProgress,this.analysis.isCrossfading=this.isCrossfading,this.analysis.deckALevel=this.activeDeck==="A"?this.analysis.volume*1.4:this.isCrossfading?(1-this.crossfadeProgress)*this.analysis.volume:.02,this.analysis.deckBLevel=this.activeDeck==="B"?this.analysis.volume*1.4:this.isCrossfading?this.crossfadeProgress*this.analysis.volume:.02,this.analysis.bpmA=(this.deckStates.A.detectedBpm||128)*this.deckStates.A.pitch,this.analysis.bpmB=(this.deckStates.B.detectedBpm||126)*this.deckStates.B.pitch,this.analysis}update(){return this.getAudioAnalysis()}}class mm{constructor(t,e,n,s,r,a,o){this.audioEngine=t,this.deckAWaveWrap=e,this.deckBWaveWrap=n,this.deckACanvas=s,this.deckBCanvas=r,this.radioWaveformCanvas=a,this.radioWaveformWrap=o,this.waveformProfileA=this.generateWaveformProfile("seed-a"),this.waveformProfileB=this.generateWaveformProfile("seed-b"),this.initWaveformSeeking()}generateWaveformProfile(t){let e=0;for(let a=0;a<t.length;a++)e=(e<<5)-e+t.charCodeAt(a),e|=0;const n=a=>{const o=Math.sin(e+a*12.9898)*43758.5453;return o-Math.floor(o)},s=[],r=120;for(let a=0;a<r;a++){const o=a/r;let c=.5;o<.12?c=.3+.35*(o/.12):o<.35?c=.75+.2*Math.sin(o*40):o<.45?c=.35+.15*Math.sin(o*20):o<.75?c=.88+.12*Math.sin(o*50):o<.85?c=.45+.2*Math.sin(o*30):c=.7*(1-(o-.85)/.15);const l=n(a),f=a%4===0||a%6===0?.25*l:.12*l,u=Math.max(.18,Math.min(1,c+f));s.push(u)}return s}drawWaveform(t,e,n,s,r){if(!t)return;const a=t.getContext("2d"),o=t.width,c=t.height,l=c/2;a.clearRect(0,0,o,c);const h=e.length,f=o/h,u=n*o,p=r?r.bass*4:0;for(let g=0;g<h;g++){const _=g*f,m=_<=u,S=Math.abs(_-u)<16&&m?p:0,b=e[g]*(c*.84)+S,y=Math.max(3,Math.min(c-2,b)),D=l-y/2;if(m)if(s==="A"){const w=a.createLinearGradient(0,D,0,D+y);w.addColorStop(0,"#ffffff"),w.addColorStop(.3,"#00f0ff"),w.addColorStop(.7,"#7928ca"),w.addColorStop(1,"#00f0ff"),a.fillStyle=w}else{const w=a.createLinearGradient(0,D,0,D+y);w.addColorStop(0,"#ffffff"),w.addColorStop(.3,"#ff007f"),w.addColorStop(.7,"#ffd000"),w.addColorStop(1,"#ff007f"),a.fillStyle=w}else a.fillStyle="rgba(90, 105, 140, 0.32)";a.fillRect(_+.5,D,Math.max(1.8,f-1),y)}a.fillStyle="#ffffff",a.shadowColor=s==="A"?"#00f0ff":"#ff007f",a.shadowBlur=8,a.fillRect(u-1,0,2,c),a.shadowBlur=0}initWaveformSeeking(){const t=(e,n)=>{e&&e.addEventListener("click",s=>{const r=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(s.clientX-r.left)/r.width)),o=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;o&&o.duration&&(o.currentTime=a*o.duration)})};t(this.deckAWaveWrap,"A"),t(this.deckBWaveWrap,"B")}}class gm{constructor(t,e,n,s,r,a,o,c,l,h,f,u,p,g,_,m,d){this.audioEngine=t,this.deckAJog=e,this.deckBJog=n,this.deckAJogBpm=s,this.deckBJogBpm=r,this.deckAJogPitch=a,this.deckBJogPitch=o,this.deckAPitch=c,this.deckBPitch=l,this.deckAPitchVal=h,this.deckBPitchVal=f,this.deckAPitchReset=u,this.deckBPitchReset=p,this.deckATempoPlus=g,this.deckATempoMinus=_,this.deckBTempoPlus=m,this.deckBTempoMinus=d,this.jogAngleA=0,this.jogAngleB=0,this.initJogWheelMouseControl(),this.initRotaryKnobs()}getJogAngleA(){return this.jogAngleA}getJogAngleB(){return this.jogAngleB}updateJogAngles(t,e,n){var s,r;if(e){const a=this.audioEngine.activeDeck,o=a==="A"||this.audioEngine.isCrossfading||((s=n==null?void 0:n.A)==null?void 0:s.isPlaying),c=a==="B"||this.audioEngine.isCrossfading||((r=n==null?void 0:n.B)==null?void 0:r.isPlaying);o&&(this.jogAngleA+=2.2,this.deckAJog&&(this.deckAJog.style.transform=`rotate(${this.jogAngleA}deg)`)),c&&(this.jogAngleB+=2.2,this.deckBJog&&(this.deckBJog.style.transform=`rotate(${this.jogAngleB}deg)`))}}initJogWheelMouseControl(){const t=(e,n)=>{if(!e)return;let s=!1,r=0,a=!1;const o=()=>{const u=e.getBoundingClientRect();return{x:u.left+u.width/2,y:u.top+u.height/2}},c=u=>{const p=o(),g=u.clientX!==void 0?u.clientX:u.touches&&u.touches[0]?u.touches[0].clientX:0,_=u.clientY!==void 0?u.clientY:u.touches&&u.touches[0]?u.touches[0].clientY:0;return Math.atan2(_-p.y,g-p.x)},l=u=>{u.preventDefault(),s=!0,r=c(u),e.classList.add("is-scratching");const p=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;a=p&&!p.paused,a&&p.pause(),window.addEventListener("mousemove",h),window.addEventListener("mouseup",f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f)},h=u=>{if(!s)return;u.preventDefault&&u.preventDefault();const p=c(u);let g=p-r;g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),r=p;const _=g*(180/Math.PI);n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;if(m&&m.duration){const d=g/(2*Math.PI)*1.8;m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+d))}},f=()=>{if(s){s=!1,e.classList.remove("is-scratching"),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f);const u=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;a&&u&&u.play().catch(p=>console.warn("Resume error after jog scratch:",p))}};e.addEventListener("mousedown",l),e.addEventListener("touchstart",l,{passive:!1}),e.addEventListener("wheel",u=>{u.preventDefault();const p=u.deltaY<0?1:-1,g=p*.35,_=p*12;n==="A"?(this.jogAngleA+=_,e.style.transform=`rotate(${this.jogAngleA}deg)`):(this.jogAngleB+=_,e.style.transform=`rotate(${this.jogAngleB}deg)`);const m=n==="A"?this.audioEngine.audioA:this.audioEngine.audioB;m&&m.duration&&(m.currentTime=Math.max(0,Math.min(m.duration,m.currentTime+g)))})};t(this.deckAJog,"A"),t(this.deckBJog,"B")}initRotaryKnobs(){document.querySelectorAll(".rotary-knob-component").forEach(e=>{const n=e.getAttribute("data-param"),s=parseFloat(e.getAttribute("data-min")),r=parseFloat(e.getAttribute("data-max")),a=parseFloat(e.getAttribute("data-default"));let o=parseFloat(e.getAttribute("data-val"));const c=e.querySelector(".knob-cap"),l=d=>{const b=-135+(d-s)/(r-s)*270;c&&(c.style.transform=`rotate(${b}deg)`),e.setAttribute("data-val",d)},h=d=>{if(this.audioEngine)switch(n){case"trim-A":this.audioEngine.setChannelGain("A",d);break;case"eq-A-high":this.audioEngine.setEQ("A","high",d);break;case"eq-A-mid":this.audioEngine.setEQ("A","mid",d);break;case"eq-A-low":this.audioEngine.setEQ("A","low",d);break;case"filter-A":this.audioEngine.setFilterSweep("A",d);break;case"fx-a-lpf":this.audioEngine.setFXParam("A","lpf",d);break;case"fx-a-res":this.audioEngine.setFXParam("A","res",d);break;case"fx-a-drywet":this.audioEngine.setFXParam("A","drywet",d);break;case"trim-B":this.audioEngine.setChannelGain("B",d);break;case"eq-B-high":this.audioEngine.setEQ("B","high",d);break;case"eq-B-mid":this.audioEngine.setEQ("B","mid",d);break;case"eq-B-low":this.audioEngine.setEQ("B","low",d);break;case"filter-B":this.audioEngine.setFilterSweep("B",d);break;case"fx-b-lpf":this.audioEngine.setFXParam("B","lpf",d);break;case"fx-b-res":this.audioEngine.setFXParam("B","res",d);break;case"fx-b-drywet":this.audioEngine.setFXParam("B","drywet",d);break;case"master-vol":this.audioEngine.setVolume(d);break;case"hp-vol":this.audioEngine.setVolume(d);break}};l(o);let f=!1,u=0,p=o;const g=d=>{f=!0,u=d.clientY||d.touches&&d.touches[0].clientY,p=o,e.classList.add("is-dragging"),window.addEventListener("mousemove",_),window.addEventListener("mouseup",m),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",m)},_=d=>{if(!f)return;d.preventDefault&&d.preventDefault();const S=d.clientY||d.touches&&d.touches[0].clientY,b=u-S,D=(r-s)/140;o=Math.max(s,Math.min(r,p+b*D)),l(o),h(o)},m=()=>{f&&(f=!1,e.classList.remove("is-dragging"),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",m),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",m))};e.addEventListener("mousedown",g),e.addEventListener("touchstart",g,{passive:!1}),e.addEventListener("wheel",d=>{d.preventDefault();const S=d.deltaY<0?1:-1,b=(r-s)/30;o=Math.max(s,Math.min(r,o+S*b)),l(o),h(o)}),e.addEventListener("dblclick",()=>{o=a,l(o),h(o)})})}}class _m{constructor(t,e){this.audioEngine=t,this.djScene=e,this.camButtons=document.querySelectorAll(".cam-btn"),this.genreModal=document.getElementById("genre-modal"),this.lightingModal=document.getElementById("lighting-modal"),this.queueDrawer=document.getElementById("queue-drawer"),this.setMode=n=>{if(n==="dj"){const s=document.getElementById("btn-mode-dj");s&&s.click()}else{const s=document.getElementById("btn-mode-radio");s&&s.click()}},this.currentTrack=null,this.initMobileMenu()}initMobileMenu(){this.btnMobileMenu=document.getElementById("btn-mobile-menu"),this.btnMobileMenuClose=document.getElementById("btn-mobile-menu-close"),this.mobileMenuDrawer=document.getElementById("mobile-menu-drawer"),this.mobileMenuBackdrop=document.getElementById("mobile-menu-backdrop");const t=()=>{if(this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.remove("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.remove("hidden"),this.currentTrack){const w=document.getElementById("m-menu-track-title"),A=document.getElementById("m-menu-track-artist");if(w&&(w.textContent=this.currentTrack.title||"Unknown Track"),A){const P=this.currentTrack.genre?` • ${this.currentTrack.genre.name}`:"";A.textContent=(this.currentTrack.artist||"JMF Live Station")+P}}},e=()=>{this.mobileMenuDrawer&&this.mobileMenuDrawer.classList.add("hidden"),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.classList.add("hidden")};this.btnMobileMenu&&this.btnMobileMenu.addEventListener("click",t),this.btnMobileMenuClose&&this.btnMobileMenuClose.addEventListener("click",e),this.mobileMenuBackdrop&&this.mobileMenuBackdrop.addEventListener("click",e),window.addEventListener("keydown",w=>{w.key==="Escape"&&e()});const n=document.getElementById("m-btn-mode-dj"),s=document.getElementById("m-btn-mode-radio");n&&n.addEventListener("click",()=>{this.setMode("dj")}),s&&s.addEventListener("click",()=>{this.setMode("radio")});const r=document.querySelectorAll(".m-cam-item");r.forEach(w=>{w.addEventListener("click",()=>{const A=w.getAttribute("data-cam");r.forEach(P=>P.classList.remove("active")),w.classList.add("active"),this.camButtons.forEach(P=>{P.getAttribute("data-cam")===A?P.classList.add("active"):P.classList.remove("active")}),this.djScene.setCameraPreset(A)})});const a=document.getElementById("m-btn-open-all-genres");a&&a.addEventListener("click",()=>{e(),this.genreModal&&this.genreModal.classList.remove("hidden")});const o=document.getElementById("m-btn-open-lighting-modal");o&&o.addEventListener("click",()=>{e(),this.lightingModal&&this.lightingModal.classList.remove("hidden")});const c=document.querySelectorAll(".m-theme-pill");c.forEach(w=>{w.addEventListener("click",()=>{c.forEach(E=>E.classList.remove("active")),w.classList.add("active");const A=w.getAttribute("data-theme");document.querySelectorAll(".l-theme-btn").forEach(E=>{E.getAttribute("data-theme")===A?E.classList.add("active"):E.classList.remove("active")}),this.djScene.setTheme(A)})});const l=document.getElementById("m-toggle-strobe"),h=document.getElementById("m-toggle-lasers"),f=document.getElementById("m-toggle-fog"),u=document.getElementById("toggle-strobe"),p=document.getElementById("toggle-lasers"),g=document.getElementById("toggle-fog");l&&l.addEventListener("change",w=>{u&&(u.checked=w.target.checked),this.djScene.lighting.setStrobeEnabled(w.target.checked)}),h&&h.addEventListener("change",w=>{p&&(p.checked=w.target.checked),this.djScene.lighting.setLasersEnabled(w.target.checked)}),f&&f.addEventListener("change",w=>{g&&(g.checked=w.target.checked),this.djScene.lighting.setFogEnabled(w.target.checked)});const _=document.getElementById("m-slider-light-intensity"),m=document.getElementById("m-val-light-intensity"),d=document.getElementById("slider-light-intensity"),S=document.getElementById("val-light-intensity");_&&m&&_.addEventListener("input",w=>{const A=parseFloat(w.target.value),P=`${Math.round(A*100)}%`;m.textContent=P,d&&(d.value=A),S&&(S.textContent=P),this.djScene.lighting.setIntensityMultiplier(A)});const b=document.getElementById("m-radio-eq-preset");b&&b.addEventListener("change",w=>{const A=w.target.value;this.radioEqPreset&&(this.radioEqPreset.value=A),this.audioEngine.setEQPreset(A)});const y=document.getElementById("m-btn-open-queue");y&&y.addEventListener("click",()=>{e(),this.queueDrawer&&this.queueDrawer.classList.remove("hidden")});const D=document.getElementById("m-btn-fullscreen");D&&D.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})})}}class vm{constructor(t,e){this.audioEngine=t,this.djScene=e,this.overlay=document.getElementById("start-overlay"),this.btnStart=document.getElementById("btn-start-stream"),this.waveIndicator=document.getElementById("wave-indicator"),this.queueDrawer=document.getElementById("queue-drawer"),this.btnQueueToggle=document.getElementById("btn-queue-toggle"),this.queueCloseBtn=document.getElementById("queue-close-btn"),this.queueList=document.getElementById("queue-list"),this.btnModeDj=document.getElementById("btn-mode-dj"),this.btnModeRadio=document.getElementById("btn-mode-radio"),this.transitionBanner=document.getElementById("transition-banner"),this.transitionText=document.getElementById("transition-text"),this.camButtons=document.querySelectorAll(".cam-btn"),this.deckAUnit=document.getElementById("deck-a-unit"),this.deckATitle=document.getElementById("deck-a-title"),this.deckAArtist=document.getElementById("deck-a-artist"),this.deckAState=document.getElementById("deck-a-state"),this.deckABpm=document.getElementById("deck-a-bpm"),this.deckAPitchVal=document.getElementById("deck-a-pitch-val"),this.deckAPitch=document.getElementById("deck-a-pitch"),this.deckAPitchReset=document.getElementById("deck-a-pitch-reset"),this.deckATempoPlus=document.getElementById("deck-a-tempo-plus"),this.deckATempoMinus=document.getElementById("deck-a-tempo-minus"),this.deckACanvas=document.getElementById("deck-a-canvas"),this.deckAWaveWrap=document.getElementById("deck-a-waveform-wrap"),this.deckATimeCur=document.getElementById("deck-a-time-cur"),this.deckATimeRem=document.getElementById("deck-a-time-rem"),this.deckAJog=document.getElementById("deck-a-jog"),this.deckAJogBpm=document.getElementById("deck-a-jog-bpm"),this.deckAJogPitch=document.getElementById("deck-a-jog-pitch"),this.deckACue=document.getElementById("deck-a-cue"),this.deckAPlay=document.getElementById("deck-a-play"),this.deckASync=document.getElementById("deck-a-sync"),this.deckALoop4=document.getElementById("deck-a-loop-4"),this.deckALoop8=document.getElementById("deck-a-loop-8"),this.deckAFxToggle=document.getElementById("deck-a-fx-toggle"),this.deckBUnit=document.getElementById("deck-b-unit"),this.deckBTitle=document.getElementById("deck-b-title"),this.deckBArtist=document.getElementById("deck-b-artist"),this.deckBState=document.getElementById("deck-b-state"),this.deckBBpm=document.getElementById("deck-b-bpm"),this.deckBPitchVal=document.getElementById("deck-b-pitch-val"),this.deckBPitch=document.getElementById("deck-b-pitch"),this.deckBPitchReset=document.getElementById("deck-b-pitch-reset"),this.deckBTempoPlus=document.getElementById("deck-b-tempo-plus"),this.deckBTempoMinus=document.getElementById("deck-b-tempo-minus"),this.deckBCanvas=document.getElementById("deck-b-canvas"),this.deckBWaveWrap=document.getElementById("deck-b-waveform-wrap"),this.deckBTimeCur=document.getElementById("deck-b-time-cur"),this.deckBTimeRem=document.getElementById("deck-b-time-rem"),this.deckBJog=document.getElementById("deck-b-jog"),this.deckBJogBpm=document.getElementById("deck-b-jog-bpm"),this.deckBJogPitch=document.getElementById("deck-b-jog-pitch"),this.deckBCue=document.getElementById("deck-b-cue"),this.deckBPlay=document.getElementById("deck-b-play"),this.deckBSync=document.getElementById("deck-b-sync"),this.deckBLoop4=document.getElementById("deck-b-loop-4"),this.deckBLoop8=document.getElementById("deck-b-loop-8"),this.deckBFxToggle=document.getElementById("deck-b-fx-toggle"),this.faderCh1=document.getElementById("fader-ch1"),this.vuMeterCh1Leds=document.querySelectorAll("#vu-meter-ch1 .led"),this.faderCh2=document.getElementById("fader-ch2"),this.vuMeterCh2Leds=document.querySelectorAll("#vu-meter-ch2 .led"),this.masterVuL=document.querySelectorAll("#master-vu-l .led"),this.masterVuR=document.querySelectorAll("#master-vu-r .led"),this.btnMixNow=document.getElementById("btn-mix-now"),this.btnPrev=document.getElementById("btn-prev"),this.btnNext=document.getElementById("btn-next"),this.btnMixerPlay=document.getElementById("btn-mixer-play"),this.btnMute=document.getElementById("btn-mute"),this.iconVol=document.getElementById("icon-vol"),this.iconMute=document.getElementById("icon-mute"),this.btnFullscreen=document.getElementById("btn-fullscreen"),this.crossfaderTrack=document.getElementById("crossfader-track"),this.crossfaderCap=document.getElementById("crossfader-cap"),this.btnAutoDj=document.getElementById("btn-auto-dj"),this.btnRecord=document.getElementById("btn-record"),this.btnSplit=document.getElementById("btn-split"),this.horizVuBars=document.querySelectorAll(".horiz-vu-bar"),this.radioModeConsole=document.getElementById("radio-mode-console"),this.djStation=document.querySelector(".hardware-dj-station"),this.mobileDeckTabs=document.getElementById("mobile-deck-tabs"),this.bottomUtilityBar=document.querySelector(".bottom-utility-bar"),this.radioTrackTitle=document.getElementById("radio-track-title"),this.radioTrackArtist=document.getElementById("radio-track-artist"),this.btnRadioPrev=document.getElementById("btn-radio-prev"),this.btnRadioPlay=document.getElementById("btn-radio-play"),this.btnRadioNext=document.getElementById("btn-radio-next"),this.radioWaveformCanvas=document.getElementById("radio-waveform-canvas"),this.radioWaveformWrap=document.getElementById("radio-waveform-wrap"),this.radioTimeCur=document.getElementById("radio-time-cur"),this.radioTimeTotal=document.getElementById("radio-time-total"),this.radioEqPreset=document.getElementById("radio-eq-preset"),this.btnRadioEqToggle=document.getElementById("btn-radio-eq-toggle"),this.radioHpSegs=document.querySelectorAll("#radio-hp-meter .r-seg"),this.radioMasterVuLSegs=document.querySelectorAll(".r-row-l .r-seg"),this.radioMasterVuRSegs=document.querySelectorAll(".r-row-r .r-seg"),this.waveform=new mm(t,this.deckAWaveWrap,this.deckBWaveWrap,this.deckACanvas,this.deckBCanvas,this.radioWaveformCanvas,this.radioWaveformWrap),this.jogWheel=new gm(t,this.deckAJog,this.deckBJog,this.deckAJogBpm,this.deckBJogBpm,this.deckAJogPitch,this.deckBJogPitch,this.deckAPitch,this.deckBPitch,this.deckAPitchVal,this.deckBPitchVal,this.deckAPitchReset,this.deckBPitchReset,this.deckATempoPlus,this.deckATempoMinus,this.deckBTempoPlus,this.deckBTempoMinus),this.mobileMenu=new _m(t,e),this.initHardwareEvents(),this.initGenreControls()}initHardwareEvents(){const t=async F=>{F&&(F.preventDefault(),F.stopPropagation()),this.overlay&&(this.overlay.classList.add("hidden"),this.overlay.style.display="none");try{await this.audioEngine.start()}catch(O){console.warn("Audio start error:",O)}this.updatePlayState(!0)};this.btnStart&&(this.btnStart.addEventListener("click",t),this.btnStart.addEventListener("touchend",t)),this.overlay&&this.overlay.addEventListener("click",F=>{F.target===this.overlay&&t(F)}),this.deckAPlay&&this.deckAPlay.addEventListener("click",()=>{const F=this.audioEngine.togglePlayDeck("A");this.deckAPlay.classList.toggle("active-play",F),this.updatePlayState(F)}),this.deckACue&&this.deckACue.addEventListener("click",()=>{this.audioEngine.cueDeck("A"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckAPitch&&this.deckAPitch.addEventListener("input",F=>{const O=parseFloat(F.target.value);this.audioEngine.setPitch("A",O);const ct=`${O>=0?"+":""}${O.toFixed(1)}%`;this.deckAPitchVal&&(this.deckAPitchVal.textContent=ct),this.deckAJogPitch&&(this.deckAJogPitch.textContent=ct)}),this.deckAPitchReset&&this.deckAPitchReset.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=0),this.audioEngine.setPitch("A",0),this.deckAPitchVal&&(this.deckAPitchVal.textContent="+0.0%"),this.deckAJogPitch&&(this.deckAJogPitch.textContent="0.0%")}),this.deckATempoPlus&&this.deckATempoPlus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.min(8,parseFloat(this.deckAPitch.value)+.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckATempoMinus&&this.deckATempoMinus.addEventListener("click",()=>{this.deckAPitch&&(this.deckAPitch.value=Math.max(-8,parseFloat(this.deckAPitch.value)-.5),this.deckAPitch.dispatchEvent(new Event("input")))}),this.deckALoop4&&this.deckALoop4.addEventListener("click",()=>{const F=this.audioEngine.toggleLoop("A",4);this.deckALoop4.classList.toggle("active",F),this.deckALoop8&&this.deckALoop8.classList.remove("active")}),this.deckALoop8&&this.deckALoop8.addEventListener("click",()=>{const F=this.audioEngine.toggleLoop("A",8);this.deckALoop8.classList.toggle("active",F),this.deckALoop4&&this.deckALoop4.classList.remove("active")});const e=document.getElementById("deck-a-fx-type");e&&e.addEventListener("change",F=>this.audioEngine.setFXType("A",F.target.value)),this.deckAFxToggle&&this.deckAFxToggle.addEventListener("click",()=>{const F=!this.deckAFxToggle.classList.contains("active");this.deckAFxToggle.classList.toggle("active",F),this.audioEngine.setFXToggle("A",F)}),this.deckBPlay&&this.deckBPlay.addEventListener("click",()=>{const F=this.audioEngine.togglePlayDeck("B");this.deckBPlay.classList.toggle("active-play",F),this.updatePlayState(F)}),this.deckBCue&&this.deckBCue.addEventListener("click",()=>{this.audioEngine.cueDeck("B"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.updatePlayState(!1)}),this.deckBPitch&&this.deckBPitch.addEventListener("input",F=>{const O=parseFloat(F.target.value);this.audioEngine.setPitch("B",O);const ct=`${O>=0?"+":""}${O.toFixed(1)}%`;this.deckBPitchVal&&(this.deckBPitchVal.textContent=ct),this.deckBJogPitch&&(this.deckBJogPitch.textContent=ct)}),this.deckBPitchReset&&this.deckBPitchReset.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=0),this.audioEngine.setPitch("B",0),this.deckBPitchVal&&(this.deckBPitchVal.textContent="+0.0%"),this.deckBJogPitch&&(this.deckBJogPitch.textContent="0.0%")}),this.deckBTempoPlus&&this.deckBTempoPlus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.min(8,parseFloat(this.deckBPitch.value)+.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBTempoMinus&&this.deckBTempoMinus.addEventListener("click",()=>{this.deckBPitch&&(this.deckBPitch.value=Math.max(-8,parseFloat(this.deckBPitch.value)-.5),this.deckBPitch.dispatchEvent(new Event("input")))}),this.deckBLoop4&&this.deckBLoop4.addEventListener("click",()=>{const F=this.audioEngine.toggleLoop("B",4);this.deckBLoop4.classList.toggle("active",F),this.deckBLoop8&&this.deckBLoop8.classList.remove("active")}),this.deckBLoop8&&this.deckBLoop8.addEventListener("click",()=>{const F=this.audioEngine.toggleLoop("B",8);this.deckBLoop8.classList.toggle("active",F),this.deckBLoop4&&this.deckBLoop4.classList.remove("active")});const n=document.getElementById("deck-b-fx-type");n&&n.addEventListener("change",F=>this.audioEngine.setFXType("B",F.target.value)),this.deckBFxToggle&&this.deckBFxToggle.addEventListener("click",()=>{const F=!this.deckBFxToggle.classList.contains("active");this.deckBFxToggle.classList.toggle("active",F),this.audioEngine.setFXToggle("B",F)}),this.faderCh1&&this.faderCh1.addEventListener("input",F=>this.audioEngine.setChannelGain("A",parseFloat(F.target.value))),this.faderCh2&&this.faderCh2.addEventListener("input",F=>this.audioEngine.setChannelGain("B",parseFloat(F.target.value))),this.btnMixNow&&this.btnMixNow.addEventListener("click",()=>this.audioEngine.triggerDJCrossfade()),this.btnNext&&this.btnNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.btnPrev&&this.btnPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnMixerPlay&&this.btnMixerPlay.addEventListener("click",()=>{const F=this.audioEngine.togglePlay();this.updatePlayState(F)}),this.btnMute&&this.btnMute.addEventListener("click",()=>{const F=this.audioEngine.toggleMute();this.updateVolumeIcons(F)}),this.btnFullscreen&&this.btnFullscreen.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})});const s=document.getElementById("btn-cf-ch1"),r=document.getElementById("btn-cf-ch2");s&&s.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("A",5)}),r&&r.addEventListener("click",()=>{this.audioEngine.crossfadeToDeck("B",5)}),this.crossfaderTrack&&this.crossfaderTrack.addEventListener("click",F=>{const O=this.crossfaderTrack.getBoundingClientRect(),ct=F.clientX-O.left,at=Math.max(0,Math.min(1,ct/O.width));at<.35?this.audioEngine.crossfadeToDeck("A",4):at>.65?this.audioEngine.crossfadeToDeck("B",4):this.audioEngine.setCrossfader(at)}),this.setMode=F=>{const O=document.getElementById("m-btn-mode-dj"),ct=document.getElementById("m-btn-mode-radio");F==="radio"?(this.audioEngine.setMixMode("radio"),this.btnModeRadio&&this.btnModeRadio.classList.add("active"),this.btnModeDj&&this.btnModeDj.classList.remove("active"),ct&&ct.classList.add("active"),O&&O.classList.remove("active"),document.body.classList.add("mode-radio"),document.body.classList.remove("mode-dj"),this.djStation&&this.djStation.classList.add("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display="none"),this.bottomUtilityBar&&this.bottomUtilityBar.classList.add("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.remove("hidden"),this.transitionBanner&&this.transitionBanner.classList.add("hidden")):(this.audioEngine.setMixMode("dj"),this.btnModeDj&&this.btnModeDj.classList.add("active"),this.btnModeRadio&&this.btnModeRadio.classList.remove("active"),O&&O.classList.add("active"),ct&&ct.classList.remove("active"),document.body.classList.add("mode-dj"),document.body.classList.remove("mode-radio"),this.djStation&&this.djStation.classList.remove("hidden"),this.mobileDeckTabs&&(this.mobileDeckTabs.style.display=""),this.bottomUtilityBar&&this.bottomUtilityBar.classList.remove("hidden"),this.radioModeConsole&&this.radioModeConsole.classList.add("hidden"))},window.innerWidth<=820||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.setMode("radio"):this.setMode("dj"),this.btnModeDj&&this.btnModeRadio&&(this.btnModeDj.addEventListener("click",()=>this.setMode("dj")),this.btnModeRadio.addEventListener("click",()=>this.setMode("radio"))),this.btnRadioPlay&&this.btnRadioPlay.addEventListener("click",()=>{const F=this.audioEngine.togglePlay();this.updatePlayState(F)}),this.btnRadioPrev&&this.btnRadioPrev.addEventListener("click",()=>this.audioEngine.skipPrev()),this.btnRadioNext&&this.btnRadioNext.addEventListener("click",()=>this.audioEngine.skipNext()),this.radioEqPreset&&this.radioEqPreset.addEventListener("change",F=>{this.audioEngine.setEQPreset(F.target.value)}),this.btnRadioEqToggle&&this.radioEqPreset&&this.btnRadioEqToggle.addEventListener("click",()=>{const F=["flat","bass","club","vocal","electronic"],ct=(F.indexOf(this.radioEqPreset.value)+1)%F.length;this.radioEqPreset.value=F[ct],this.audioEngine.setEQPreset(F[ct])}),this.radioWaveformWrap&&this.radioWaveformWrap.addEventListener("click",F=>{const O=this.radioWaveformWrap.getBoundingClientRect(),ct=Math.max(0,Math.min(1,(F.clientX-O.left)/O.width)),at=this.audioEngine.getActiveAudio();at&&at.duration&&(at.currentTime=ct*at.duration)}),this.camButtons.forEach(F=>{F.addEventListener("click",()=>{this.camButtons.forEach(O=>O.classList.remove("active")),F.classList.add("active"),this.djScene.setCameraPreset(F.getAttribute("data-cam"))})}),this.btnQueueToggle&&this.queueDrawer&&this.btnQueueToggle.addEventListener("click",()=>this.queueDrawer.classList.toggle("hidden")),this.queueCloseBtn&&this.queueDrawer&&this.queueCloseBtn.addEventListener("click",()=>this.queueDrawer.classList.add("hidden")),this.lightingModal=document.getElementById("lighting-modal"),this.btnLightsToggle=document.getElementById("btn-lights-toggle"),this.btnLightsClose=document.getElementById("btn-lights-close"),this.btnSettingsOpen=document.getElementById("btn-settings-open"),this.btnRadioSettings=document.getElementById("btn-radio-settings");const o=()=>{this.lightingModal&&this.lightingModal.classList.remove("hidden")},c=()=>{this.lightingModal&&this.lightingModal.classList.add("hidden")};this.btnLightsToggle&&this.btnLightsToggle.addEventListener("click",o),this.btnSettingsOpen&&this.btnSettingsOpen.addEventListener("click",o),this.btnRadioSettings&&this.btnRadioSettings.addEventListener("click",o),this.btnLightsClose&&this.btnLightsClose.addEventListener("click",c),this.lightingModal&&this.lightingModal.addEventListener("click",F=>{F.target===this.lightingModal&&c()});const l=document.querySelectorAll(".l-theme-btn");l.forEach(F=>{F.addEventListener("click",()=>{l.forEach(ct=>ct.classList.remove("active")),F.classList.add("active");const O=F.getAttribute("data-theme");this.djScene.setTheme(O)})});const h=document.getElementById("toggle-strobe");h&&h.addEventListener("change",F=>{this.djScene.lighting.setStrobeEnabled(F.target.checked)});const f=document.getElementById("toggle-lasers");f&&f.addEventListener("change",F=>{this.djScene.lighting.setLasersEnabled(F.target.checked)});const u=document.getElementById("toggle-fog");u&&u.addEventListener("change",F=>{this.djScene.lighting.setFogEnabled(F.target.checked)});const p=document.getElementById("slider-light-intensity"),g=document.getElementById("val-light-intensity");p&&g&&p.addEventListener("input",F=>{const O=parseFloat(F.target.value);g.textContent=`${Math.round(O*100)}%`,this.djScene.lighting.setIntensityMultiplier(O)});const _=document.getElementById("slider-laser-speed"),m=document.getElementById("val-laser-speed");_&&m&&_.addEventListener("input",F=>{const O=parseFloat(F.target.value);m.textContent=`${O.toFixed(1)}x`,this.djScene.lighting.setLaserSpeed(O)});const d=document.querySelectorAll(".m-tab-btn"),S=document.getElementById("deck-a-unit"),b=document.getElementById("djm-mixer"),y=document.getElementById("deck-b-unit");d.forEach(F=>{F.addEventListener("click",()=>{d.forEach(ct=>ct.className="m-tab-btn");const O=F.getAttribute("data-tab");O==="deck-a"?(F.classList.add("active-tab-a"),S&&S.classList.add("m-active-panel"),b&&b.classList.remove("m-active-panel"),y&&y.classList.remove("m-active-panel")):O==="mixer"?(F.classList.add("active-tab-mixer"),S&&S.classList.remove("m-active-panel"),b&&b.classList.add("m-active-panel"),y&&y.classList.remove("m-active-panel")):O==="deck-b"&&(F.classList.add("active-tab-b"),S&&S.classList.remove("m-active-panel"),b&&b.classList.remove("m-active-panel"),y&&y.classList.add("m-active-panel"))})});for(let F=1;F<=4;F++){const O=document.getElementById(`deck-a-pad-${F}`);O&&O.addEventListener("click",at=>{this.audioEngine.triggerHotCue("A",F-1,at.shiftKey)&&(O.classList.add("active"),O.style.transform="scale(0.92)",setTimeout(()=>{O.style.transform=""},120))});const ct=document.getElementById(`deck-b-pad-${F}`);ct&&ct.addEventListener("click",at=>{this.audioEngine.triggerHotCue("B",F-1,at.shiftKey)&&(ct.classList.add("active"),ct.style.transform="scale(0.92)",setTimeout(()=>{ct.style.transform=""},120))})}const D=document.getElementById("btn-auto-dj");D&&D.addEventListener("click",()=>{const F=this.audioEngine.toggleAutoDj();D.classList.toggle("active",F)}),window.addEventListener("keydown",F=>{var O;if(!["INPUT","TEXTAREA","SELECT"].includes((O=document.activeElement)==null?void 0:O.tagName)){if(F.code==="Space"){F.preventDefault();const ct=this.audioEngine.togglePlay();this.updatePlayState(ct)}else if(F.code==="Escape"){this.queueDrawer&&this.queueDrawer.classList.add("hidden"),this.lightingModal&&this.lightingModal.classList.add("hidden");const ct=document.getElementById("genre-modal");ct&&ct.classList.add("hidden");const at=document.getElementById("dj-auth-modal");at&&at.classList.add("hidden");const T=document.getElementById("about-modal");T&&T.classList.add("hidden");const v=document.getElementById("mobile-menu-drawer"),N=document.getElementById("mobile-menu-backdrop");v&&v.classList.add("hidden"),N&&N.classList.add("hidden")}}});const w=document.getElementById("dj-auth-modal"),A=document.getElementById("btn-dj-auth-close"),P=document.getElementById("btn-dj-enjoy"),E=document.getElementById("input-dj-key"),x=document.getElementById("btn-submit-dj-key"),C=document.getElementById("dj-auth-error"),H=document.getElementById("btn-dj-lang-ru"),z=document.getElementById("btn-dj-lang-en"),j={ru:{title:"🎧 JMF RESIDENT DJ BOOTH",heading:"ДОСТУП К ПУЛЬТУ ОГРАНИЧЕН",desc:"Сейчас за пультом играют резиденты <strong>JMF Radio</strong>.<br><br>Чтобы встать за вертушки, управлять треками эфира или заказать свой сет — обратитесь к <strong>администратору клуба</strong> за персональным DJ-ключом.",label:"🔑 ЕСТЬ DJ-КЛЮЧ ДОСТУПА?",placeholder:"Введите ключ...",submit:"Встать за пульт",enjoy:"🍸 Наслаждаться музыкой и атмосферой",success:"🎉 DJ-ключ сохранён! Пробуем войти за пульт..."},en:{title:"🎧 JMF RESIDENT DJ BOOTH",heading:"DJ BOOTH ACCESS RESTRICTED",desc:"Resident DJs are currently performing live on <strong>JMF Radio</strong>.<br><br>To take over the decks, control the broadcast, or request a set — please contact the <strong>club administrator</strong> for a personal DJ access key.",label:"🔑 HAVE A DJ ACCESS KEY?",placeholder:"Enter access key...",submit:"Take the Decks",enjoy:"🍸 Enjoy the music & club vibes",success:"🎉 DJ Key saved! Taking over the decks..."}};let J=localStorage.getItem("jmf_ui_lang")||"en";const W=F=>{J=F,localStorage.setItem("jmf_ui_lang",F);const O=j[F]||j.en,ct=document.getElementById("dj-auth-title"),at=document.getElementById("dj-auth-heading"),T=document.getElementById("dj-auth-desc"),v=document.getElementById("dj-auth-label"),N=document.getElementById("dj-auth-enjoy-text");ct&&(ct.textContent=O.title),at&&(at.textContent=O.heading),T&&(T.innerHTML=O.desc),v&&(v.textContent=O.label),E&&(E.placeholder=O.placeholder),x&&(x.textContent=O.submit),N&&(N.textContent=O.enjoy),H&&H.classList.toggle("active",F==="ru"),z&&z.classList.toggle("active",F==="en")};if(H&&H.addEventListener("click",()=>W("ru")),z&&z.addEventListener("click",()=>W("en")),W(J),this.showDjAuthModal=()=>{w&&(W(J),w.classList.remove("hidden"),C&&C.classList.add("hidden"),E&&(E.value="",E.focus()))},A&&w&&A.addEventListener("click",()=>w.classList.add("hidden")),P&&w&&P.addEventListener("click",()=>w.classList.add("hidden")),x&&E){const F=async()=>{const O=E.value.trim();if(!O)return;localStorage.setItem("jmf_dj_key",O);const ct=j[J]||j.ru;C&&(C.classList.remove("hidden"),C.style.color="#00ff88",C.textContent=ct.success),setTimeout(()=>{w&&w.classList.add("hidden"),this.audioEngine.skipNext()},600)};x.addEventListener("click",F),E.addEventListener("keydown",O=>{O.key==="Enter"&&F()})}this.audioEngine.onAuthRequired=()=>{this.showDjAuthModal()};const Y=document.getElementById("about-modal"),k=document.getElementById("btn-about-toggle"),et=document.getElementById("m-btn-about-open"),it=document.getElementById("btn-about-close"),ot=document.getElementById("btn-about-lang-ru"),yt=document.getElementById("btn-about-lang-en"),Bt={ru:{title:"ℹ️ О ПРОЕКТЕ JMF RADIO",tagline:"Интерактивная 3D киберпанк-станция нового поколения и платформа онлайн-вещания на базе Web Audio API.",storyHeading:"🌌 ИСТОРИЯ И КОНЦЕПЦИЯ",storyText:"JMF Radio зародилось как ранний аудио-эксперимент на GitHub и выросло в атмосферный 3D киберпанк-клуб. Объединяя процедурный мир на Three.js, реалистичную эмуляцию диджейских дек Pioneer CDJ-3000 / микшера DJM-900 и интеллектуальный AutoDJ-движок с DSP-фильтрами в реальном времени, JMF Radio обеспечивает непрерывный электронный эфир 24/7 прямо в браузере.",creatorHeading:"👤 АВТОР И МУЗЫКАЛЬНЫЕ РЕСУРСЫ",scDesc:"Оригинальные треки, живые сеты и миксы",bcDesc:"Дискография, релизы и Lossless аудио",ghEarlyDesc:"Истоки проекта и ранние архивы на GitHub",ghStationDesc:"Исходный код 3D радио и дорожная карта",techHeading:"🛠️ КЛЮЧЕВЫЕ ТЕХНОЛОГИИ",legalHeading:"⚖️ ПРАВОВАЯ ИНФОРМАЦИЯ И DMCA",legalText:"JMF Radio — некоммерческий экспериментальный веб-арт проект, созданный в образовательных, культурных и промо-целях.<br><br>Все права на музыкальные произведения, ремиксы и фонограммы принадлежат их законным авторам, исполнителям и лейблам. JMF Radio не продает треки и не взимает плату за прослушивание.<br><br><strong>Правообладателям и авторам:</strong> Если вы являетесь автором или правообладателем и хотите удалить свой трек из ротации, либо хотите отправить свои оригинальные треки для ротации в эфире — свяжитесь с нами через GitHub или контакты администратора."},en:{title:"ℹ️ ABOUT JMF RADIO",tagline:"Next-generation interactive 3D cyberpunk nightclub & real-time Web Audio broadcasting platform.",storyHeading:"🌌 HISTORY & CONCEPT",storyText:"JMF Radio began as an early experimental audio project on GitHub and has evolved into an immersive cyberpunk nightclub experience. Combining a procedural 3D world built with Three.js, realistic Pioneer CDJ-3000/DJM-900 hardware emulation, and an intelligent AutoDJ engine with real-time DSP filters, JMF Radio delivers continuous 24/7 electronic music streaming directly in your web browser.",creatorHeading:"👤 CREATOR & MUSIC CHANNELS",scDesc:"Original tracks, live sets & mixes",bcDesc:"Discography, releases & lossless audio",ghEarlyDesc:"Original roots & GitHub archives",ghStationDesc:"Full 3D station source code & roadmap",techHeading:"🛠️ CORE TECHNOLOGIES",legalHeading:"⚖️ LEGAL DISCLAIMER & DMCA NOTICE",legalText:"JMF Radio is an experimental, non-commercial web audio art & cultural project created for educational, developmental, and promotional purposes.<br><br>All musical works, remixes, and sound recordings remain the intellectual property of their respective artists, composers, and record labels. JMF Radio does not sell audio files or charge listeners for streaming.<br><br><strong>For Artists & Copyright Holders:</strong> If you are a copyright owner and wish to have your music removed from the rotation, or if you would like to submit your original tracks for 24/7 broadcast promotion, please reach out via GitHub or contact the administrator."}},$=F=>{const O=Bt[F]||Bt.en,ct=document.getElementById("about-modal-title"),at=document.getElementById("about-tagline"),T=document.getElementById("about-story-heading"),v=document.getElementById("about-story-text"),N=document.getElementById("about-creator-heading"),Z=document.getElementById("about-sc-desc"),tt=document.getElementById("about-bc-desc"),K=document.getElementById("about-gh-early-desc"),Et=document.getElementById("about-gh-station-desc"),dt=document.getElementById("about-tech-heading"),vt=document.getElementById("about-legal-heading"),qt=document.getElementById("about-legal-text");ct&&(ct.textContent=O.title),at&&(at.textContent=O.tagline),T&&(T.textContent=O.storyHeading),v&&(v.textContent=O.storyText),N&&(N.textContent=O.creatorHeading),Z&&(Z.textContent=O.scDesc),tt&&(tt.textContent=O.bcDesc),K&&(K.textContent=O.ghEarlyDesc),Et&&(Et.textContent=O.ghStationDesc),dt&&(dt.textContent=O.techHeading),vt&&(vt.textContent=O.legalHeading),qt&&(qt.innerHTML=O.legalText),ot&&ot.classList.toggle("active",F==="ru"),yt&&yt.classList.toggle("active",F==="en")};ot&&ot.addEventListener("click",()=>$("ru")),yt&&yt.addEventListener("click",()=>$("en"));const nt=()=>{Y&&($(J),Y.classList.remove("hidden"))};k&&k.addEventListener("click",nt),et&&et.addEventListener("click",()=>{const F=document.getElementById("mobile-menu-drawer"),O=document.getElementById("mobile-menu-backdrop");F&&F.classList.add("hidden"),O&&O.classList.add("hidden"),nt()}),it&&Y&&it.addEventListener("click",()=>Y.classList.add("hidden"));const gt=document.getElementById("cyber-picker-modal"),lt=document.getElementById("cyber-picker-title"),Ct=document.getElementById("cyber-picker-dot"),Pt=document.getElementById("cyber-picker-list"),Ot=document.getElementById("btn-cyber-picker-close"),re={eq:{title:"🎚️ SELECT EQUALIZER PRESET",color:"#00f0ff",options:[{val:"flat",icon:"🎚️",name:"FLAT",desc:"Balanced studio frequency response (Default)"},{val:"bass",icon:"🔊",name:"BASS BOOST",desc:"Deep low-end sub-bass & kick enhancement"},{val:"club",icon:"💥",name:"CLUB PUNCH",desc:"Enhanced punchy bass & crisp club highs"},{val:"vocal",icon:"🎤",name:"VOCAL CLARITY",desc:"Elevated mid-range for clear vocals"},{val:"electronic",icon:"⚡",name:"ELECTRONIC DANCE",desc:"Dynamic wide-spectrum electronic mastering"}],getCurrent:()=>this.audioEngine.currentEQPreset||"flat",onSelect:(F,O)=>{this.audioEngine.setEQPreset(F);const ct=document.getElementById("radio-eq-val"),at=document.getElementById("m-eq-val");ct&&(ct.textContent=`EQ: ${O.name}`),at&&(at.textContent=O.name==="FLAT"?"FLAT (Default)":O.name)}},"fx-a":{title:"⚡ DECK A EFFECTS",color:"#00f0ff",options:[{val:"filter",icon:"🎛️",name:"FILTER",desc:"Bi-directional resonant LPF / HPF sweep"},{val:"echo",icon:"🔁",name:"ECHO",desc:"Beat-synchronized delay with feedback"},{val:"reverb",icon:"🌌",name:"REVERB",desc:"Spatial nightclub reverberation"},{val:"flanger",icon:"🌊",name:"FLANGER",desc:"Sweeping harmonic comb modulation"}],getCurrent:()=>{var F,O;return((O=(F=this.audioEngine.fxStates)==null?void 0:F.A)==null?void 0:O.type)||"filter"},onSelect:(F,O)=>{this.audioEngine.setFXType("A",F);const ct=document.getElementById("deck-a-fx-val");ct&&(ct.textContent=O.name)}},"fx-b":{title:"⚡ DECK B EFFECTS",color:"#ff007f",options:[{val:"filter",icon:"🎛️",name:"FILTER",desc:"Bi-directional resonant LPF / HPF sweep"},{val:"echo",icon:"🔁",name:"ECHO",desc:"Beat-synchronized delay with feedback"},{val:"reverb",icon:"🌌",name:"REVERB",desc:"Spatial nightclub reverberation"},{val:"flanger",icon:"🌊",name:"FLANGER",desc:"Sweeping harmonic comb modulation"}],getCurrent:()=>{var F,O;return((O=(F=this.audioEngine.fxStates)==null?void 0:F.B)==null?void 0:O.type)||"filter"},onSelect:(F,O)=>{this.audioEngine.setFXType("B",F);const ct=document.getElementById("deck-b-fx-val");ct&&(ct.textContent=O.name)}}},Vt=F=>{const O=re[F];if(!O||!gt||!Pt)return;lt&&(lt.textContent=O.title),Ct&&(Ct.style.background=O.color,Ct.style.boxShadow=`0 0 8px ${O.color}`);const ct=O.getCurrent();Pt.innerHTML="",O.options.forEach(at=>{const T=document.createElement("button");T.type="button";const v=at.val===ct,N=O.color==="#ff007f"?"active-pink":"active";T.className=`cyber-picker-item ${v?N:""}`,T.setAttribute("data-val",at.val),T.innerHTML=`
          <span class="cyber-picker-icon">${at.icon}</span>
          <div class="cyber-picker-meta">
            <span class="cyber-picker-name">${at.name}</span>
            <span class="cyber-picker-desc">${at.desc}</span>
          </div>
          <span class="cyber-picker-indicator"></span>
        `,T.addEventListener("click",()=>{O.onSelect(at.val,at),gt.classList.add("hidden")}),Pt.appendChild(T)}),gt.classList.remove("hidden")},ce=document.getElementById("btn-radio-eq-picker"),B=document.getElementById("btn-deck-a-fx-picker"),Ee=document.getElementById("btn-deck-b-fx-picker"),Xt=document.getElementById("m-btn-eq-picker");ce&&ce.addEventListener("click",()=>Vt("eq")),B&&B.addEventListener("click",()=>Vt("fx-a")),Ee&&Ee.addEventListener("click",()=>Vt("fx-b")),Xt&&Xt.addEventListener("click",()=>{const F=document.getElementById("mobile-menu-drawer"),O=document.getElementById("mobile-menu-backdrop");F&&F.classList.add("hidden"),O&&O.classList.add("hidden"),Vt("eq")}),Ot&&gt&&(Ot.addEventListener("click",()=>gt.classList.add("hidden")),gt.addEventListener("click",F=>{F.target===gt&&gt.classList.add("hidden")}))}updatePlayState(t){t?(this.waveIndicator&&this.waveIndicator.classList.add("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.add("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>')):(this.waveIndicator&&this.waveIndicator.classList.remove("wave-playing"),this.btnRadioPlay&&(this.btnRadioPlay.classList.remove("active-play"),this.btnRadioPlay.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>'))}updateVolumeIcons(t){t?(this.iconVol&&this.iconVol.classList.add("hidden"),this.iconMute&&this.iconMute.classList.remove("hidden")):(this.iconVol&&this.iconVol.classList.remove("hidden"),this.iconMute&&this.iconMute.classList.add("hidden"))}formatTime(t){if(isNaN(t)||t<0)return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}async initGenreControls(){this.btnGenresToggle=document.getElementById("btn-genres-toggle"),this.btnCenterGenres=document.getElementById("m-btn-center-genres"),this.genreModal=document.getElementById("genre-modal"),this.btnGenresClose=document.getElementById("btn-genres-close"),this.headerGenreIcon=document.getElementById("header-genre-icon"),this.headerGenreLabel=document.getElementById("header-genre-label"),this.mHeaderGenreLabel=document.getElementById("m-header-genre-label"),this.genreModalGrid=document.getElementById("genre-modal-grid"),this.queueGenreFilter=document.getElementById("queue-genre-filter");const t=()=>{this.genreModal&&this.genreModal.classList.remove("hidden")},e=()=>{this.genreModal&&this.genreModal.classList.add("hidden")};this.btnGenresToggle&&this.btnGenresToggle.addEventListener("click",t),this.btnCenterGenres&&this.btnCenterGenres.addEventListener("click",t),this.btnGenresClose&&this.btnGenresClose.addEventListener("click",e),this.genreModal&&this.genreModal.addEventListener("click",s=>{s.target===this.genreModal&&e()});const n=s=>{if(s){this.headerGenreIcon&&(this.headerGenreIcon.textContent=s.icon);const r=s.name.replace(/^[^\s]+\s/,"");this.headerGenreLabel&&(this.headerGenreLabel.textContent=r),this.mHeaderGenreLabel&&(this.mHeaderGenreLabel.textContent=`${s.icon} ${r}`)}};try{const{genres:s,activeGenre:r}=await this.audioEngine.fetchGenres();this.activeGenre=r||"all";const a=()=>{this.genreModalGrid&&s&&(this.genreModalGrid.innerHTML=s.map(c=>`
            <button class="genre-card-btn ${c.id===this.activeGenre?"active":""}" data-genre="${c.id}">
              <div class="genre-card-header">
                <span class="genre-card-icon">${c.icon}</span>
                <span class="genre-card-count">${c.count} tracks</span>
              </div>
              <div class="genre-card-name" style="color: ${c.color};">${c.name}</div>
            </button>
          `).join(""),this.genreModalGrid.querySelectorAll(".genre-card-btn").forEach(c=>{c.addEventListener("click",async()=>{const l=c.getAttribute("data-genre");this.activeGenre=l;const h=s.find(f=>f.id===l);n(h),a(),e(),await this.audioEngine.setGenre(l)})})),this.queueGenreFilter&&s&&(this.queueGenreFilter.innerHTML=s.map(c=>`
            <button class="q-filter-pill ${c.id===this.activeGenre?"active":""}" data-genre="${c.id}" style="--pill-color: ${c.color}">
              <span>${c.icon} ${c.name.split(" ")[1]||"ALL"}</span>
              <span class="pill-badge">${c.count}</span>
            </button>
          `).join(""),this.queueGenreFilter.querySelectorAll(".q-filter-pill").forEach(c=>{c.addEventListener("click",async()=>{const l=c.getAttribute("data-genre");this.activeGenre=l;const h=s.find(f=>f.id===l);n(h),a(),await this.audioEngine.setGenre(l)})}));const o=document.getElementById("m-genre-chips");o&&s&&(o.innerHTML=s.map(c=>`
            <button class="m-genre-chip ${c.id===this.activeGenre?"active":""}" data-genre="${c.id}">
              <span class="m-genre-chip-icon">${c.icon}</span>
              <span class="m-genre-chip-name" style="color: ${c.color};">${c.name}</span>
            </button>
          `).join(""),o.querySelectorAll(".m-genre-chip").forEach(c=>{c.addEventListener("click",async()=>{const l=c.getAttribute("data-genre");this.activeGenre=l;const h=s.find(f=>f.id===l);n(h),a(),await this.audioEngine.setGenre(l)})}))};a()}catch(s){console.warn("Error loading genres:",s)}}onTrackChanged(t,e,n){this.updateTrackInfo(t,this.audioEngine.nextTrack,e)}updateTrackInfo(t,e,n){if(!t)return;this.currentTrack=t,this.mobileMenu&&(this.mobileMenu.currentTrack=t);const s=this.audioEngine.activeDeck,r=document.getElementById("m-menu-track-title"),a=document.getElementById("m-menu-track-artist");if(r&&(r.textContent=t.title||"Unknown Track"),a){const o=t.genre?` • ${t.genre.name}`:"";a.textContent=(t.artist||"JMF Live Station")+o}if(this.radioTrackTitle&&(this.radioTrackTitle.textContent=t.title||"Unknown Track"),this.radioTrackArtist){const o=t.genre?` [${t.genre.name.split(" ")[0]}]`:"";this.radioTrackArtist.textContent=(t.artist||"JMF Radio 24/7")+o}s==="A"?(this.deckATitle&&(this.deckATitle.textContent=t.title||"Unknown Track"),this.deckAArtist&&(this.deckAArtist.textContent=t.artist||"JMF Radio"),this.deckAState&&(this.deckAState.textContent="ON AIR"),this.deckAPlay&&this.deckAPlay.classList.add("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(t.title+(t.id||"a")),e&&(this.deckBTitle&&(this.deckBTitle.textContent=e.title||"Upcoming Track"),this.deckBArtist&&(this.deckBArtist.textContent=e.artist||"Next on Deck"),this.deckBState&&(this.deckBState.textContent="CUE / NEXT"),this.deckBPlay&&this.deckBPlay.classList.remove("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(e.title+(e.id||"b")))):(this.deckBTitle&&(this.deckBTitle.textContent=t.title||"Unknown Track"),this.deckBArtist&&(this.deckBArtist.textContent=t.artist||"JMF Radio"),this.deckBState&&(this.deckBState.textContent="ON AIR"),this.deckBPlay&&this.deckBPlay.classList.add("active-play"),this.waveform.waveformProfileB=this.waveform.generateWaveformProfile(t.title+(t.id||"b")),e&&(this.deckATitle&&(this.deckATitle.textContent=e.title||"Upcoming Track"),this.deckAArtist&&(this.deckAArtist.textContent=e.artist||"Next on Deck"),this.deckAState&&(this.deckAState.textContent="CUE / NEXT"),this.deckAPlay&&this.deckAPlay.classList.remove("active-play"),this.waveform.waveformProfileA=this.waveform.generateWaveformProfile(e.title+(e.id||"a")))),n&&n.length>0&&this.queueList&&(this.queueList.innerHTML=n.map((o,c)=>`
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
      `).join("")),this.transitionBanner&&this.transitionBanner.classList.add("hidden")}onTransition(t,e,n,s){this.transitionTimer&&clearTimeout(this.transitionTimer),t&&s?(this.transitionText&&(this.transitionText.textContent=`🎛️ DJ MIXING: DECK ${e} ➔ DECK ${n} ("${s.title.substring(0,24)}...")`),this.transitionBanner&&this.transitionBanner.classList.remove("hidden"),n==="B"?(this.deckBState&&(this.deckBState.textContent="MIXING IN"),this.deckBPlay&&this.deckBPlay.classList.add("active-play")):n==="A"&&(this.deckAState&&(this.deckAState.textContent="MIXING IN"),this.deckAPlay&&this.deckAPlay.classList.add("active-play")),this.transitionTimer=setTimeout(()=>{this.transitionBanner&&this.transitionBanner.classList.add("hidden")},3500)):this.transitionBanner&&this.transitionBanner.classList.add("hidden")}updateProgress(t,e,n){const s=this.audioEngine.activeDeck,r=this.audioEngine.isPlaying,a=this.audioEngine.isCrossfading,o=Math.max(0,e-t),c=e>0?Math.min(1,t/e):0;if(this.radioTimeCur&&(this.radioTimeCur.textContent=this.formatTime(t)),this.radioTimeTotal&&(this.radioTimeTotal.textContent=this.formatTime(e)),this.radioWaveformCanvas&&this.waveform.drawWaveform(this.radioWaveformCanvas,this.waveform.waveformProfileA,c,"A",n),n&&r?(this.updateSegmentedLEDs(this.radioHpSegs,n.volume*.85),this.updateSegmentedLEDs(this.radioMasterVuLSegs,n.volume*1.1+n.bass*.3),this.updateSegmentedLEDs(this.radioMasterVuRSegs,n.volume*1.1+n.treble*.3)):(this.updateSegmentedLEDs(this.radioHpSegs,0),this.updateSegmentedLEDs(this.radioMasterVuLSegs,0),this.updateSegmentedLEDs(this.radioMasterVuRSegs,0)),s==="A")if(this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,c,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(t)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(o)}`),!a)this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,0,"B",null),this.deckBTimeCur&&(this.deckBTimeCur.textContent="0:00"),this.deckBTimeRem&&(this.deckBTimeRem.textContent="READY");else{const l=this.audioEngine.audioB,h=l.currentTime||0,f=l.duration||180,u=f>0?Math.min(1,h/f):0;this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,u,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(h)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(Math.max(0,f-h))}`)}else if(this.waveform.drawWaveform(this.deckBCanvas,this.waveform.waveformProfileB,c,"B",n),this.deckBTimeCur&&(this.deckBTimeCur.textContent=this.formatTime(t)),this.deckBTimeRem&&(this.deckBTimeRem.textContent=`-${this.formatTime(o)}`),!a)this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,0,"A",null),this.deckATimeCur&&(this.deckATimeCur.textContent="0:00"),this.deckATimeRem&&(this.deckATimeRem.textContent="READY");else{const l=this.audioEngine.audioA,h=l.currentTime||0,f=l.duration||180,u=f>0?Math.min(1,h/f):0;this.waveform.drawWaveform(this.deckACanvas,this.waveform.waveformProfileA,u,"A",n),this.deckATimeCur&&(this.deckATimeCur.textContent=this.formatTime(h)),this.deckATimeRem&&(this.deckATimeRem.textContent=`-${this.formatTime(Math.max(0,f-h))}`)}if(n){const l=`${n.bpmA.toFixed(1)}`,h=`${n.bpmB.toFixed(1)}`;this.deckABpm&&(this.deckABpm.textContent=l),this.deckBBpm&&(this.deckBBpm.textContent=h),this.deckAJogBpm&&(this.deckAJogBpm.textContent=l),this.deckBJogBpm&&(this.deckBJogBpm.textContent=h)}if(this.jogWheel.updateJogAngles(n,r,this.audioEngine.deckStates),this.crossfaderCap&&n){const l=n.crossfadeProgress*100;this.crossfaderCap.style.left=`${l}%`}n&&r?(this.updateLEDs(this.vuMeterCh1Leds,n.deckALevel),this.updateLEDs(this.vuMeterCh2Leds,n.deckBLevel),this.updateLEDs(this.masterVuL,n.volume*1.3+n.bass*.3),this.updateLEDs(this.masterVuR,n.volume*1.3+n.treble*.3),this.horizVuBars.forEach(l=>{l.style.width=`${Math.min(100,n.volume*120)}%`})):(this.updateLEDs(this.vuMeterCh1Leds,0),this.updateLEDs(this.vuMeterCh2Leds,0),this.updateLEDs(this.masterVuL,0),this.updateLEDs(this.masterVuR,0),this.horizVuBars.forEach(l=>{l.style.width="10%"}))}updateLEDs(t,e){if(!t)return;const n=t.length;for(let s=0;s<n;s++){const r=(n-1-s)/n,a=e>=r;t[s].className="led "+(a?s<=1?"lit-red":s<=2?"lit-orange":s<=3?"lit-yellow":"lit-green":"")}}updateSegmentedLEDs(t,e){if(!t||t.length===0)return;const n=t.length;for(let s=0;s<n;s++){const r=s/n;e>=r?s>=n-3?t[s].className="r-seg lit-yellow":s>=n-7?t[s].className="r-seg lit-green":t[s].className="r-seg lit-cyan":t[s].className="r-seg"}}}function Bo(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container not found");return}const t=new fm(i);let e=null;const n=new pm((r,a,o)=>{e&&e.onTrackChanged(r,a,o)},(r,a,o,c)=>{e&&e.onTransition(r,a,o,c)});e=new vm(n,t);function s(){requestAnimationFrame(s);const r=n.update();t.setTrackInfo(n.currentTrack,n.nextTrack,n.elapsedTime,n.duration),(n.isPlaying||n.isCrossfading)&&e.updateProgress(n.elapsedTime,n.duration,r),t.update(r,n.isPlaying)}s()}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",Bo):Bo();
