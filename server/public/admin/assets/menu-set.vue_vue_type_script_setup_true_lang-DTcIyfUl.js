import{d as D,c as z,o as d,a as B,b as u,m as a,w as o,C as m,G as p,e as r,D as $,p as N,F,I as f,q as I,E as P,J as R,v as q}from"./index-J7LZbOsU.js";import{_ as A}from"./index-ClulNe3u.js";import{_ as G}from"./picker-BqWYOtt-.js";import{E as J}from"./el-form-item-DQ0zpmBv.js";import{D as S,_ as T}from"./picker-BWff4WtJ.js";import{c as j}from"./index-D8yJqDm_.js";const H={class:"mb-[18px] max-w-[400px]"},K={class:"bg-fill-light w-full p-4 mt-4"},L={class:"upload-btn w-[60px] h-[60px]"},M={class:"upload-btn w-[60px] h-[60px]"},O={class:"flex-1 flex items-center"},Q={class:"drag-move cursor-move ml-auto"},oe=D({__name:"menu-set",props:{modelValue:{},max:{default:9999},min:{default:-1},itemData:{default:()=>({name:"",selected:"",unselected:"",is_show:"1",link:{}})}},emits:["update:modelValue"],setup(v,{emit:x}){const i=v,g=x,t=z({get(){return i.modelValue},set(s){g("update:modelValue",s)}}),k=()=>{var s;((s=t.value)==null?void 0:s.length)<i.max?t.value.push(j(i.itemData)):f.msgError(`最多添加${i.max}个`)},b=s=>{if(t.value.length<=i.min&&i.min>-1)return f.msgError(`最少保留${i.min}个`);t.value.splice(s,1)};return(s,n)=>{const _=I,V=T,c=J,h=P,w=G,y=R,U=A,E=q;return d(),B(F,null,[u("div",H,[a(r(S),{class:"draggable",modelValue:r(t),"onUpdate:modelValue":n[0]||(n[0]=e=>$(t)?t.value=e:null),animation:"300",handle:".drag-move","item-key":"index"},{item:o(({element:e,index:C})=>[a(U,{onClose:l=>b(C),class:"max-w-[400px]"},{default:o(()=>[u("div",K,[e.unselected!==void 0||e.selected!==void 0?(d(),m(c,{key:0,label:"导航图标"},{default:o(()=>[e.unselected!==void 0?(d(),m(V,{key:0,modelValue:e.unselected,"onUpdate:modelValue":l=>e.unselected=l,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:o(()=>[u("div",L,[a(_,{name:"el-icon-Plus",size:16}),n[1]||(n[1]=u("span",{class:"text-xs leading-5"}," 未选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])):p("",!0),e.selected!==void 0?(d(),m(V,{key:1,modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:o(()=>[u("div",M,[a(_,{name:"el-icon-Plus",size:16}),n[2]||(n[2]=u("span",{class:"text-xs leading-5"}," 选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])):p("",!0)]),_:2},1024)):p("",!0),e.name!==void 0?(d(),m(c,{key:1,label:"导航名称"},{default:o(()=>[a(h,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):p("",!0),e.link!==void 0?(d(),m(c,{key:2,label:"链接地址"},{default:o(()=>[a(w,{modelValue:e.link,"onUpdate:modelValue":l=>e.link=l,type:"pc"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):p("",!0),e.is_show!==void 0?(d(),m(c,{key:3,label:"是否显示"},{default:o(()=>[u("div",O,[a(y,{modelValue:e.is_show,"onUpdate:modelValue":l=>e.is_show=l,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),u("div",Q,[a(_,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)):p("",!0)])]),_:2},1032,["onClose"])]),_:1},8,["modelValue"])]),r(t).length<s.max?(d(),m(c,{key:0,"label-width":"0"},{default:o(()=>[a(E,{type:"primary",onClick:k},{default:o(()=>n[3]||(n[3]=[N(" 添加导航 ")])),_:1})]),_:1})):p("",!0)],64)}}});export{oe as _};
