import{d as q,s as v,r as d,e as H,f as O,h as W,b1 as z,j as E,k as b,m as t,w as r,R as G,l as c,n as J,dW as Q,N as C}from"./index.e2e7edc0.js";import{v as X}from"./el-loading.50b86702.js";import{E as Y,a as Z}from"./el-form-item.a063458d.js";import{E as $}from"./el-tree.792f8ac5.js";import{E as ee}from"./el-checkbox.e0535dea.js";import{E as le}from"./el-input-number.aa6076ce.js";import{a as te,b as oe}from"./role.cc249beb.js";import{m as ae}from"./menu.5486e1eb.js";import{P as se}from"./index.c43fd295.js";import"./isEqual.556fce3b.js";import"./index.aefe0860.js";import"./index.f20416ed.js";import"./index.80345726.js";const ue={class:"edit-popup"},ne={class:"h-[400px]"},re={class:"w-80"},de={class:"w-80"},Fe=q({__name:"edit",emits:["success","close"],setup(ce,{expose:x,emit:h}){const u=v(),k=v(),i=v(),p=d("add"),F=d(!1),g=d(!1),m=d(!0),y=d([]),f=d([]),V=H(()=>p.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=O({id:"",name:"",desc:"",sort:0,menu_id:[]}),w={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},D=()=>{ae({page_type:0}).then(l=>{f.value=l.lists,y.value=Q(l.lists),C(()=>{R()})})},B=()=>{var a,s;const l=(a=u.value)==null?void 0:a.getCheckedKeys(),e=(s=u.value)==null?void 0:s.getHalfCheckedKeys();return l==null||l.unshift.apply(l,e),l},R=()=>{o.menu_id.forEach(l=>{C(()=>{var e;(e=u.value)==null||e.setChecked(l,!0,!1)})})},A=l=>{const e=f.value;for(let a=0;a<e.length;a++)u.value.store.nodesMap[e[a].id].expanded=l},K=l=>{var e,a;l?(e=u.value)==null||e.setCheckedKeys(y.value.map(s=>s.id)):(a=u.value)==null||a.setCheckedKeys([])},T=async()=>{var l,e;await((l=k.value)==null?void 0:l.validate()),o.menu_id=B(),p.value=="edit"?await te(o):await oe(o),(e=i.value)==null||e.close(),h("success")},N=()=>{h("close")},S=(l="add")=>{var e;p.value=l,(e=i.value)==null||e.open()},U=async l=>{for(const e in o)l[e]!=null&&l[e]!=null&&(o[e]=l[e])};return D(),x({open:S,setFormData:U}),(l,e)=>{const a=W,s=Y,I=le,_=ee,L=$,M=Z,P=z,j=X;return E(),b("div",ue,[t(se,{ref_key:"popupRef",ref:i,title:J(V),async:!0,width:"700px",clickModalClose:!0,onConfirm:T,onClose:N},{default:r(()=>[G((E(),b("div",ne,[t(P,null,{default:r(()=>[t(M,{class:"ls-form",ref_key:"formRef",ref:k,rules:w,model:o,"label-width":"120px"},{default:r(()=>[t(s,{label:"\u540D\u79F0",prop:"name"},{default:r(()=>[c("div",re,[t(a,{class:"ls-input",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=n=>o.name=n),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),t(s,{label:"\u5907\u6CE8",prop:"desc"},{default:r(()=>[c("div",de,[t(a,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=n=>o.desc=n),type:"textarea",rows:4,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])])]),_:1}),t(s,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[t(I,{modelValue:o.sort,"onUpdate:modelValue":e[2]||(e[2]=n=>o.sort=n)},null,8,["modelValue"])]),_:1}),t(s,{label:"\u6743\u9650",prop:"menu_id"},{default:r(()=>[c("div",null,[t(_,{label:"\u5C55\u5F00/\u6298\u53E0",onChange:A}),t(_,{label:"\u5168\u9009/\u4E0D\u5168\u9009",onChange:K}),t(_,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value=n),label:"\u7236\u5B50\u8054\u52A8"},null,8,["modelValue"]),c("div",null,[t(L,{ref_key:"treeRef",ref:u,data:f.value,props:{label:"name",children:"children"},"check-strictly":!m.value,"node-key":"id","default-expand-all":g.value,"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1},8,["model"])]),_:1})])),[[j,F.value]])]),_:1},8,["title"])])}}});export{Fe as default};