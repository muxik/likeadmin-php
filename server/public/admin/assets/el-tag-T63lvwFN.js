import{S as O,k as P}from"./_Uint8Array-87dXSNdh.js";import{b as A}from"./isEqual-CX9K0tcs.js";import{aR as h,bW as R,bX as b,bH as m,bY as y,bZ as M,bA as _,aS as g}from"./index-J7LZbOsU.js";var C=1,I=2;function L(n,r,e,t){var i=e.length,u=i;if(n==null)return!u;for(n=Object(n);i--;){var f=e[i];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<u;){f=e[i];var s=f[0],o=n[s],p=f[1];if(f[2]){if(o===void 0&&!(s in n))return!1}else{var E=new O,a;if(!(a===void 0?A(p,o,C|I,t,E):a))return!1}}return!0}function c(n){return n===n&&!h(n)}function d(n){for(var r=P(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,c(i)]}return r}function l(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function D(n){var r=d(n);return r.length==1&&r[0][2]?l(r[0][0],r[0][1]):function(e){return e===n||L(e,n,r)}}var G=1,S=2;function w(n,r){return R(n)&&c(r)?l(b(n),r):function(e){var t=m(e,n);return t===void 0&&t===r?y(e,n):A(r,t,G|S)}}function F(n){return function(r){return r==null?void 0:r[n]}}function x(n){return function(r){return M(r,n)}}function K(n){return R(n)?F(b(n)):x(n)}function $(n){return typeof n=="function"?n:n==null?_:typeof n=="object"?g(n)?w(n[0],n[1]):D(n):K(n)}export{$ as b};
