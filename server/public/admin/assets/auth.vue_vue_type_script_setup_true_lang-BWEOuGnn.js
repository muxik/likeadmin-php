import{d as j,s as f,i as r,j as q,o as k,a as I,m as s,w as d,B as J,C as M,e as c,b as y,D as O,f1 as U,H as x,bJ as z,K as G}from"./index-J7LZbOsU.js";import{E as Q,a as W}from"./el-form-item-DQ0zpmBv.js";import{E as X}from"./el-tree-D1KO1DO3.js";import{E as Y}from"./el-checkbox-D7P9lxhC.js";import{m as Z}from"./menu-CD6JYr9g.js";import{a as $}from"./role-BNT8YRqx.js";import{P as ee}from"./index-B2jr8Okl.js";const te={class:"edit-popup"},de=j({__name:"auth",emits:["success","close"],setup(oe,{expose:C,emit:b}){const _=b,l=f(),h=f(),u=f(),g=r(!1),i=r(!0),m=r(!1),v=r([]),p=r([]),a=q({id:"",name:"",desc:"",sort:0,menu_id:[]}),E={name:[{required:!0,message:"请输入名称",trigger:["blur"]}]},w=()=>{m.value=!0,Z().then(e=>{p.value=e,v.value=U(e),x(()=>{K()}),m.value=!1})},R=()=>{var o,n;const e=(o=l.value)==null?void 0:o.getCheckedKeys(),t=(n=l.value)==null?void 0:n.getHalfCheckedKeys();return e==null||e.unshift.apply(e,t),e},K=()=>{a.menu_id.forEach(e=>{x(()=>{var t;(t=l.value)==null||t.setChecked(e,!0,!1)})})},A=e=>{const t=p.value;for(let o=0;o<t.length;o++)l.value.store.nodesMap[t[o].id].expanded=e},D=e=>{var t,o;e?(t=l.value)==null||t.setCheckedKeys(v.value.map(n=>n.id)):(o=l.value)==null||o.setCheckedKeys([])},B=async()=>{var e,t;await((e=h.value)==null?void 0:e.validate()),a.menu_id=R(),await $(a),(t=u.value)==null||t.close(),_("success")},V=()=>{_("close")},S=()=>{var e;(e=u.value)==null||e.open()},T=async e=>{for(const t in a)e[t]!=null&&e[t]!=null&&(a[t]=e[t])};return w(),C({open:S,setFormData:T}),(e,t)=>{const o=Y,n=X,F=Q,H=z,L=W,N=G;return k(),I("div",te,[s(ee,{ref_key:"popupRef",ref:u,title:"分配权限",async:!0,width:"550px",onConfirm:B,onClose:V},{default:d(()=>[J((k(),M(L,{class:"ls-form",ref_key:"formRef",ref:h,rules:E,model:c(a),"label-width":"60px"},{default:d(()=>[s(H,{class:"h-[400px] sm:h-[600px]"},{default:d(()=>[s(F,{label:"权限",prop:"menu_id"},{default:d(()=>[y("div",null,[s(o,{label:"展开/折叠",onChange:A}),s(o,{label:"全选/不全选",onChange:D}),s(o,{modelValue:c(i),"onUpdate:modelValue":t[0]||(t[0]=P=>O(i)?i.value=P:null),label:"父子联动"},null,8,["modelValue"]),y("div",null,[s(n,{ref_key:"treeRef",ref:l,data:c(p),props:{label:"name",children:"children"},"check-strictly":!c(i),"node-key":"id","default-expand-all":c(g),"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1})]),_:1},8,["model"])),[[N,c(m)]])]),_:1},512)])}}});export{de as _};
