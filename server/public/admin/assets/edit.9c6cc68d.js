import{d as w,s as _,r as k,e as h,f as g,h as x,b1 as R,j as D,k as q,m as t,w as u,l as p,n as T,q as f}from"./index.e2e7edc0.js";import{E as U,a as N}from"./el-form-item.a063458d.js";import{E as I,a as P}from"./el-radio.2f2d66ca.js";import{P as S}from"./index.c43fd295.js";import{f as j,g as A}from"./dict.fb6fc139.js";import"./isEqual.556fce3b.js";import"./index.f20416ed.js";import"./index.80345726.js";const G={class:"edit-popup"},M={class:"h-[400px]"},z={class:"w-80"},H={class:"w-80"},J=f("\u6B63\u5E38"),K=f("\u505C\u7528"),ue=w({__name:"edit",emits:["success","close"],setup(L,{expose:B,emit:m}){const i=_(),r=_(),n=k("add"),F=h(()=>n.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B":"\u65B0\u589E\u5B57\u5178\u7C7B\u578B"),o=g({id:"",name:"",type:"",status:1,remark:""}),V={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",trigger:["blur"]}],type:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",trigger:["blur"]}]},b=async()=>{var l,e;await((l=i.value)==null?void 0:l.validate()),n.value=="edit"?await j(o):await A(o),(e=r.value)==null||e.close(),m("success")},v=()=>{m("close")};return B({open:(l="add")=>{var e;n.value=l,(e=r.value)==null||e.open()},setFormData:l=>{for(const e in o)l[e]!=null&&l[e]!=null&&(o[e]=l[e])}}),(l,e)=>{const d=x,s=U,c=I,y=P,C=N,E=R;return D(),q("div",G,[t(S,{ref_key:"popupRef",ref:r,title:T(F),async:!0,width:"700px",clickModalClose:!0,onConfirm:b,onClose:v},{default:u(()=>[p("div",M,[t(E,null,{default:u(()=>[t(C,{class:"ls-form",ref_key:"formRef",ref:i,rules:V,model:o,"label-width":"120px"},{default:u(()=>[t(s,{label:"\u5B57\u5178\u540D\u79F0",prop:"name"},{default:u(()=>[p("div",z,[t(d,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),t(s,{label:"\u5B57\u5178\u7C7B\u578B",prop:"type"},{default:u(()=>[p("div",H,[t(d,{modelValue:o.type,"onUpdate:modelValue":e[1]||(e[1]=a=>o.type=a),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B"},null,8,["modelValue"])])]),_:1}),t(s,{label:"\u72B6\u6001",required:"",prop:"status"},{default:u(()=>[t(y,{modelValue:o.status,"onUpdate:modelValue":e[2]||(e[2]=a=>o.status=a)},{default:u(()=>[t(c,{label:1},{default:u(()=>[J]),_:1}),t(c,{label:0},{default:u(()=>[K]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[t(d,{class:"w-80",modelValue:o.remark,"onUpdate:modelValue":e[3]||(e[3]=a=>o.remark=a),type:"textarea",rows:"4",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})])]),_:1},8,["title"])])}}});export{ue as default};