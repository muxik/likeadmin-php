import{x as w,y as k,J as x,K as g,A as h,E as R}from"./element-plus.32724f3c.js";import{P as D}from"./index.685915dd.js";import{f as U,g as T}from"./dict.d8a4905b.js";import{d as q,s as _,r as N,e as S,$ as A,o as I,c as P,U as u,L as t,a as p,u as G,S as f}from"./@vue.67e62321.js";const J={class:"edit-popup"},K={class:"h-[400px]"},L={class:"w-80"},M={class:"w-80"},$=f("\u6B63\u5E38"),j=f("\u505C\u7528"),Z=q({__name:"edit",emits:["success","close"],setup(z,{expose:B,emit:m}){const i=_(),r=_(),n=N("add"),F=S(()=>n.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B":"\u65B0\u589E\u5B57\u5178\u7C7B\u578B"),o=A({id:"",name:"",type:"",status:1,remark:""}),V={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",trigger:["blur"]}],type:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",trigger:["blur"]}]},y=async()=>{var l,e;await((l=i.value)==null?void 0:l.validate()),n.value=="edit"?await U(o):await T(o),(e=r.value)==null||e.close(),m("success")},b=()=>{m("close")};return B({open:(l="add")=>{var e;n.value=l,(e=r.value)==null||e.open()},setFormData:l=>{for(const e in o)l[e]!=null&&l[e]!=null&&(o[e]=l[e])}}),(l,e)=>{const d=w,s=k,c=x,v=g,C=h,E=R;return I(),P("div",J,[u(D,{ref_key:"popupRef",ref:r,title:G(F),async:!0,width:"600px",clickModalClose:!0,onConfirm:y,onClose:b},{default:t(()=>[p("div",K,[u(E,null,{default:t(()=>[u(C,{class:"ls-form",ref_key:"formRef",ref:i,rules:V,model:o,"label-width":"100px"},{default:t(()=>[u(s,{label:"\u5B57\u5178\u540D\u79F0",prop:"name"},{default:t(()=>[p("div",L,[u(d,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u5B57\u5178\u7C7B\u578B",prop:"type"},{default:t(()=>[p("div",M,[u(d,{modelValue:o.type,"onUpdate:modelValue":e[1]||(e[1]=a=>o.type=a),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B"},null,8,["modelValue"])])]),_:1}),u(s,{label:"\u72B6\u6001",required:"",prop:"status"},{default:t(()=>[u(v,{modelValue:o.status,"onUpdate:modelValue":e[2]||(e[2]=a=>o.status=a)},{default:t(()=>[u(c,{label:1},{default:t(()=>[$]),_:1}),u(c,{label:0},{default:t(()=>[j]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[u(d,{class:"w-80",modelValue:o.remark,"onUpdate:modelValue":e[3]||(e[3]=a=>o.remark=a),type:"textarea",rows:"4",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})])]),_:1},8,["title"])])}}});export{Z as _};
