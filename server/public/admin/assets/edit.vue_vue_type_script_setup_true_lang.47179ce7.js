import{C as V,D,v as C,F as y}from"./element-plus.5649e4ba.js";import{a as R,b as h}from"./role.0692cd41.js";import{P as B}from"./index.5b52610c.js";import{d as k,s as c,r as g,b as U,Z as I,o as N,c as P,U as l,L as u,u as a}from"./@vue.90bde458.js";const q={class:"edit-popup"},G=k({__name:"edit",emits:["success","close"],setup(z,{expose:f,emit:_}){const p=_,d=c(),n=c(),r=g("add"),F=U(()=>r.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=I({id:"",name:"",desc:"",sort:0,menu_id:[]}),b={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},v=async()=>{var t,e;await((t=d.value)==null?void 0:t.validate()),r.value=="edit"?await R(o):await h(o),(e=n.value)==null||e.close(),p("success")},w=()=>{p("close")};return f({open:(t="add")=>{var e;r.value=t,(e=n.value)==null||e.open()},setFormData:async t=>{for(const e in o)t[e]!=null&&t[e]!=null&&(o[e]=t[e])}}),(t,e)=>{const i=V,m=D,x=C,E=y;return N(),P("div",q,[l(B,{ref_key:"popupRef",ref:n,title:a(F),async:!0,width:"550px",onConfirm:v,onClose:w},{default:u(()=>[l(E,{class:"ls-form",ref_key:"formRef",ref:d,rules:b,model:a(o),"label-width":"60px"},{default:u(()=>[l(m,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[l(i,{class:"ls-input",modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(o).name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),l(m,{label:"\u5907\u6CE8",prop:"desc"},{default:u(()=>[l(i,{modelValue:a(o).desc,"onUpdate:modelValue":e[1]||(e[1]=s=>a(o).desc=s),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(m,{label:"\u6392\u5E8F",prop:"sort"},{default:u(()=>[l(x,{modelValue:a(o).sort,"onUpdate:modelValue":e[2]||(e[2]=s=>a(o).sort=s),min:0,max:9999},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{G as _};
