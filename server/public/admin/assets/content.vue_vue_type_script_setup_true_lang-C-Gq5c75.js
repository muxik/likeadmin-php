import c from"./decoration-img-qZFktFrc.js";import{d as i,c as s,o as m,a as p,b as l,m as u,e as d}from"./index-J7LZbOsU.js";const _={class:"banner mx-[10px] mt-[10px]"},f={class:"banner-image"},x=i({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(n){const o=n,e=s(()=>{var t;return((t=o.content.data)==null?void 0:t.filter(a=>a.is_show=="1"))||[]}),r=s(()=>Array.isArray(e.value)&&e.value[0]?e.value[0].image:"");return(t,a)=>(m(),p("div",_,[l("div",f,[u(c,{width:"100%",height:"100px",src:d(r),fit:"contain"},null,8,["src"])])]))}});export{x as _};
