import{d as N,s as L,i as U,c as g,o as f,a as A,m as t,w as o,b as v,p as m,B as O,C as w,e as l,t as h,D as P,G as j,H as b,I as q,q as z,v as F,J as G,K as H}from"./index-Db5CBa4F.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-BH1fcTP5.js";import{E as J,a as K}from"./el-table-column-CwsjKE_0.js";import"./el-checkbox-BvO8hgnA.js";import"./el-tag-CxPsTVqn.js";import{E as M}from"./el-card-CdrfA3tk.js";import{E as Q}from"./el-alert-C-QnRtf_.js";import{o as W,d as X,e as Y}from"./wx_oa-BZ95cUYr.js";import{u as Z}from"./usePaging-PxVE1wmU.js";import{_ as ee}from"./edit.vue_vue_type_script_setup_true_lang-DvRX2RcR.js";import"./el-select-BcOBwzuk.js";import"./index-CjI4u-fQ.js";import"./token-DI9FKtlJ.js";import"./isEqual-B2ISp8N_.js";import"./_Uint8Array-QK_0xYq9.js";import"./_initCloneObject-uEbz8wZF.js";import"./el-form-item-DdPN1Y-B.js";import"./_baseClone-DqE177pC.js";/* empty css                       */import"./el-radio-DYnCiASz.js";import"./index-Cynsnu2B.js";import"./index--VjTFVLi.js";const te={class:"flex justify-end mt-4"},Ve=N({__name:"keyword_reply",setup(ae){const d=L(),p=U(!1),C=g(()=>n=>{switch(n){case 1:return"全匹配";case 2:return"模糊匹配"}}),k=g(()=>n=>{switch(n){case 1:return"文本"}}),{pager:r,getLists:i}=Z({fetchFun:Y,params:{reply_type:2}}),E=async()=>{var n;p.value=!0,await b(),(n=d.value)==null||n.open("add",2)},V=async n=>{var e,c;p.value=!0,await b(),(e=d.value)==null||e.open("edit",2),(c=d.value)==null||c.getDetail(n)},$=async n=>{await q.confirm("确定要删除？"),await W({id:n}),i()},x=async n=>{try{await X({id:n}),i()}catch{i()}};return i(),(n,e)=>{const c=Q,y=M,R=z,_=F,s=J,B=G,D=K,S=I,T=H;return f(),A("div",null,[t(y,{class:"!border-none",shadow:"never"},{default:o(()=>[t(c,{type:"warning",title:"温馨提示：1.粉丝在公众号发送内容时，通过关键词可触发关键词回复；2.同时可启用多个关键词回复，有多条关键词匹配时优选选择排序靠前的一条",closable:!1,"show-icon":""})]),_:1}),t(y,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[v("div",null,[t(_,{class:"mb-4",type:"primary",onClick:e[0]||(e[0]=a=>E())},{icon:o(()=>[t(R,{name:"el-icon-Plus"})]),default:o(()=>[e[3]||(e[3]=m(" 新增 "))]),_:1})]),O((f(),w(D,{size:"large",data:l(r).lists},{default:o(()=>[t(s,{label:"规则名称",prop:"name","min-width":"120"}),t(s,{label:"关键词",prop:"keyword","min-width":"120"}),t(s,{label:"匹配方式","min-width":"120"},{default:o(({row:a})=>[m(h(l(C)(a.matching_type)),1)]),_:1}),t(s,{label:"回复类型","min-width":"120"},{default:o(({row:a})=>[m(h(l(k)(a.content_type)),1)]),_:1}),t(s,{label:"状态","min-width":"120"},{default:o(({row:a})=>[t(B,{modelValue:a.status,"onUpdate:modelValue":u=>a.status=u,"active-value":1,"inactive-value":0,onChange:u=>x(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(s,{label:"排序",prop:"sort","min-width":"120"}),t(s,{label:"操作",width:"120",fixed:"right"},{default:o(({row:a})=>[t(_,{type:"primary",link:"",onClick:u=>V(a)},{default:o(()=>e[4]||(e[4]=[m(" 编辑 ")])),_:2},1032,["onClick"]),t(_,{type:"danger",link:"",onClick:u=>$(a.id)},{default:o(()=>e[5]||(e[5]=[m(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[T,l(r).loading]]),v("div",te,[t(S,{modelValue:l(r),"onUpdate:modelValue":e[1]||(e[1]=a=>P(r)?r.value=a:null),onChange:l(i)},null,8,["modelValue","onChange"])])]),_:1}),l(p)?(f(),w(ee,{key:0,ref_key:"editRef",ref:d,onSuccess:l(i),onClose:e[2]||(e[2]=a=>p.value=!1)},null,8,["onSuccess"])):j("",!0)])}}});export{Ve as default};
