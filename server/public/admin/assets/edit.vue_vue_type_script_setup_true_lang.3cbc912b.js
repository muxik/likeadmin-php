import{G as x,H as E,C as R,D as g,F as k}from"./element-plus.5649e4ba.js";import{P as D}from"./index.5b52610c.js";import{g as h,h as U}from"./dict.496c514e.js";import{d as T,s as f,r as q,b as G,Z as I,o as N,c as P,U as o,L as l,u as t,R as _}from"./@vue.90bde458.js";const z={class:"edit-popup"},K=T({__name:"edit",emits:["success","close"],setup(A,{expose:B,emit:F}){const p=F,i=f(),n=f(),m=q("add"),b=G(()=>m.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B":"\u65B0\u589E\u5B57\u5178\u7C7B\u578B"),u=I({id:"",name:"",type:"",status:1,remark:""}),V={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",trigger:["blur"]}],type:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",trigger:["blur"]}]},y=async()=>{var a,e;await((a=i.value)==null?void 0:a.validate()),m.value=="edit"?await h(u):await U(u),(e=n.value)==null||e.close(),p("success")},C=()=>{p("close")};return B({open:(a="add")=>{var e;m.value=a,(e=n.value)==null||e.open()},setFormData:a=>{for(const e in u)a[e]!=null&&a[e]!=null&&(u[e]=a[e])}}),(a,e)=>{const d=R,r=g,c=x,w=E,v=k;return N(),P("div",z,[o(D,{ref_key:"popupRef",ref:n,title:t(b),async:!0,width:"550px",onConfirm:y,onClose:C},{default:l(()=>[o(v,{class:"ls-form",ref_key:"formRef",ref:i,rules:V,model:t(u),"label-width":"84px"},{default:l(()=>[o(r,{label:"\u5B57\u5178\u540D\u79F0",prop:"name"},{default:l(()=>[o(d,{modelValue:t(u).name,"onUpdate:modelValue":e[0]||(e[0]=s=>t(u).name=s),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(r,{label:"\u5B57\u5178\u7C7B\u578B",prop:"type"},{default:l(()=>[o(d,{modelValue:t(u).type,"onUpdate:modelValue":e[1]||(e[1]=s=>t(u).type=s),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",clearable:""},null,8,["modelValue"])]),_:1}),o(r,{label:"\u5B57\u5178\u72B6\u6001",required:"",prop:"status"},{default:l(()=>[o(w,{modelValue:t(u).status,"onUpdate:modelValue":e[2]||(e[2]=s=>t(u).status=s)},{default:l(()=>[o(c,{label:1},{default:l(()=>[_("\u6B63\u5E38")]),_:1}),o(c,{label:0},{default:l(()=>[_("\u505C\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[o(d,{modelValue:t(u).remark,"onUpdate:modelValue":e[3]||(e[3]=s=>t(u).remark=s),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{K as _};
