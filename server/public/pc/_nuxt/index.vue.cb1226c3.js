import{f as m,D as o,o as r,c as a,a as f,X as g,k as s,cy as p,m as c,w as _,a9 as y,bJ as i,aI as h,R as N,n as l,cz as b,b as I,bK as $,Y as k}from"./entry.ad0f3fd4.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const u=(e,t="px")=>Object.is(Number(e),NaN)?e:`${e}${t}`;function F(e){if(e.length===0||!e||e=="undefined")return e;const t=e.replace("//","/"),n=t.length;return t[n-1]==="/"?t.slice(0,n-1):t}const C=m({props:{name:{type:String,required:!0},size:{type:[Number,String],default:16},color:{type:String,default:"inherit"}},setup(e){const t=o(()=>`#${e.name}`),n=o(()=>({width:u(e.size),height:u(e.size),color:e.color}));return{symbolId:t,styles:n}}}),S=["xlink:href"];function z(e,t,n,d,w,B){return r(),a("svg",{"aria-hidden":"true",style:g(e.styles)},[f("use",{"xlink:href":e.symbolId,fill:"currentColor"},null,8,S)],4)}const P=x(C,[["render",z]]),E={key:1,class:"local-icon"},L=m({__name:"index",props:{name:{type:String,default:""},size:{type:[String,Number],default:"14px"},color:{type:String,default:"inherit"}},setup(e){const t=e;return(n,d)=>(r(),a(k,null,[e.name.includes(s(p))?(r(),c(s(N),i(h({key:0},t)),{default:_(()=>[(r(),c(y(e.name)))]),_:1},16)):l("",!0),e.name.includes(s(b))?(r(),a("span",E,[I(P,i($(t)),null,16)])):l("",!0)],64))}});export{L as _,F as g};
