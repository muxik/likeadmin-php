import{k as F,g as C,s as _,b as N,a as l,n as u,c as E,i as v,S as R,d as K}from"./_Uint8Array-87dXSNdh.js";import{aO as Q,aP as $,aQ as B,aR as W,aS as Y,aT as q}from"./index-J7LZbOsU.js";import{c as y,k as j,g as H,a as x,b as J,d as V,e as X,i as Z}from"./_initCloneObject-B6EJo72y.js";function z(e,r){for(var n=-1,s=e==null?0:e.length;++n<s&&r(e[n],n,e)!==!1;);return e}function k(e,r){return e&&y(r,F(r),e)}function ee(e,r){return e&&y(r,j(r),e)}function re(e,r){return y(e,C(e),r)}var te=Object.getOwnPropertySymbols,L=te?function(e){for(var r=[];e;)Q(r,C(e)),e=H(e);return r}:_;function ne(e,r){return y(e,L(e),r)}function ae(e){return N(e,j,L)}var oe=Object.prototype,se=oe.hasOwnProperty;function ce(e){var r=e.length,n=new e.constructor(r);return r&&typeof e[0]=="string"&&se.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ie(e,r){var n=r?x(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var be=/\w*$/;function ge(e){var r=new e.constructor(e.source,be.exec(e));return r.lastIndex=e.lastIndex,r}var O=$?$.prototype:void 0,w=O?O.valueOf:void 0;function fe(e){return w?Object(w.call(e)):{}}var ue="[object Boolean]",ye="[object Date]",Te="[object Map]",le="[object Number]",je="[object RegExp]",pe="[object Set]",Ae="[object String]",de="[object Symbol]",me="[object ArrayBuffer]",Se="[object DataView]",$e="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",Ie="[object Int16Array]",he="[object Int32Array]",Fe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Be="[object Uint32Array]";function xe(e,r,n){var s=e.constructor;switch(r){case me:return x(e);case ue:case ye:return new s(+e);case Se:return ie(e,n);case $e:case Oe:case we:case Ie:case he:case Fe:case Ce:case Ee:case Be:return J(e,n);case Te:return new s;case le:case Ae:return new s(e);case je:return ge(e);case pe:return new s;case de:return fe(e)}}var Le="[object Map]";function Me(e){return B(e)&&l(e)==Le}var I=u&&u.isMap,Ue=I?E(I):Me,Pe="[object Set]";function De(e){return B(e)&&l(e)==Pe}var h=u&&u.isSet,Ge=h?E(h):De,_e=1,Ne=2,ve=4,M="[object Arguments]",Re="[object Array]",Ke="[object Boolean]",Qe="[object Date]",We="[object Error]",U="[object Function]",Ye="[object GeneratorFunction]",qe="[object Map]",He="[object Number]",P="[object Object]",Je="[object RegExp]",Ve="[object Set]",Xe="[object String]",Ze="[object Symbol]",ze="[object WeakMap]",ke="[object ArrayBuffer]",er="[object DataView]",rr="[object Float32Array]",tr="[object Float64Array]",nr="[object Int8Array]",ar="[object Int16Array]",or="[object Int32Array]",sr="[object Uint8Array]",cr="[object Uint8ClampedArray]",ir="[object Uint16Array]",br="[object Uint32Array]",t={};t[M]=t[Re]=t[ke]=t[er]=t[Ke]=t[Qe]=t[rr]=t[tr]=t[nr]=t[ar]=t[or]=t[qe]=t[He]=t[P]=t[Je]=t[Ve]=t[Xe]=t[Ze]=t[sr]=t[cr]=t[ir]=t[br]=!0;t[We]=t[U]=t[ze]=!1;function T(e,r,n,s,p,c){var a,g=r&_e,f=r&Ne,D=r&ve;if(a!==void 0)return a;if(!W(e))return e;var A=Y(e);if(A){if(a=ce(e),!g)return V(e,a)}else{var b=l(e),d=b==U||b==Ye;if(v(e))return X(e,g);if(b==P||b==M||d&&!p){if(a=f||d?{}:Z(e),!g)return f?ne(e,ee(a,e)):re(e,k(a,e))}else{if(!t[b])return p?e:{};a=xe(e,b,g)}}c||(c=new R);var m=c.get(e);if(m)return m;c.set(e,a),Ge(e)?e.forEach(function(o){a.add(T(o,r,n,o,e,c))}):Ue(e)&&e.forEach(function(o,i){a.set(i,T(o,r,n,i,e,c))});var G=D?f?ae:K:f?j:F,S=A?void 0:G(e);return z(S||e,function(o,i){S&&(i=o,o=e[i]),q(a,i,T(o,r,n,i,e,c))}),a}export{T as b};
