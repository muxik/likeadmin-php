import{d as D,s as T,i as N,c as L,o as f,a as U,m as t,w as n,b as g,p as u,B as A,C as y,e as l,t as O,D as P,G as j,H as w,I as h,q,v as z,J as F,K as G}from"./index-Db5CBa4F.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-BH1fcTP5.js";import{E as I,a as J}from"./el-table-column-CwsjKE_0.js";import"./el-checkbox-BvO8hgnA.js";import"./el-tag-CxPsTVqn.js";import{E as K}from"./el-card-CdrfA3tk.js";import{E as M}from"./el-alert-C-QnRtf_.js";import{o as Q,d as W,e as X}from"./wx_oa-BZ95cUYr.js";import{u as Y}from"./usePaging-PxVE1wmU.js";import{_ as Z}from"./edit.vue_vue_type_script_setup_true_lang-DvRX2RcR.js";import"./el-select-BcOBwzuk.js";import"./index-CjI4u-fQ.js";import"./token-DI9FKtlJ.js";import"./isEqual-B2ISp8N_.js";import"./_Uint8Array-QK_0xYq9.js";import"./_initCloneObject-uEbz8wZF.js";import"./el-form-item-DdPN1Y-B.js";import"./_baseClone-DqE177pC.js";/* empty css                       */import"./el-radio-DYnCiASz.js";import"./index-Cynsnu2B.js";import"./index--VjTFVLi.js";const ee={class:"flex justify-end mt-4"},Ee=D({__name:"default_reply",setup(te){const m=T(),d=N(!1),b=L(()=>o=>{switch(o){case 1:return"文本"}}),{pager:r,getLists:s}=Y({fetchFun:X,params:{reply_type:3}}),C=async()=>{var o;d.value=!0,await w(),(o=m.value)==null||o.open("add",3)},k=async o=>{var e,p;d.value=!0,await w(),(e=m.value)==null||e.open("edit",3),(p=m.value)==null||p.getDetail(o)},E=async o=>{await h.confirm("确定要删除？"),await Q({id:o}),h.msgSuccess("删除成功"),s()},V=async o=>{try{await W({id:o}),s()}catch{s()}};return s(),(o,e)=>{const p=M,v=K,$=q,_=z,i=I,x=F,R=J,S=H,B=G;return f(),U("div",null,[t(v,{class:"!border-none",shadow:"never"},{default:n(()=>[t(p,{type:"warning",title:"温馨提示：1.粉丝在公众号发送内容时，系统无法匹配情况下发送启用的默认文本回复；2.同时只能启用一个默认回复。",closable:!1,"show-icon":""})]),_:1}),t(v,{class:"!border-none mt-4",shadow:"never"},{default:n(()=>[g("div",null,[t(_,{class:"mb-4",type:"primary",onClick:e[0]||(e[0]=a=>C())},{icon:n(()=>[t($,{name:"el-icon-Plus"})]),default:n(()=>[e[3]||(e[3]=u(" 新增 "))]),_:1})]),A((f(),y(R,{size:"large",data:l(r).lists},{default:n(()=>[t(i,{label:"规则名称",prop:"name","min-width":"120"}),t(i,{label:"回复类型","min-width":"120"},{default:n(({row:a})=>[u(O(l(b)(a.content_type)),1)]),_:1}),t(i,{label:"回复内容",prop:"content","min-width":"120"}),t(i,{label:"状态","min-width":"120"},{default:n(({row:a})=>[t(x,{modelValue:a.status,"onUpdate:modelValue":c=>a.status=c,"active-value":1,"inactive-value":0,onChange:c=>V(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(i,{label:"排序",prop:"sort","min-width":"120"}),t(i,{label:"操作",width:"120",fixed:"right"},{default:n(({row:a})=>[t(_,{type:"primary",link:"",onClick:c=>k(a)},{default:n(()=>e[4]||(e[4]=[u(" 编辑 ")])),_:2},1032,["onClick"]),t(_,{type:"danger",link:"",onClick:c=>E(a.id)},{default:n(()=>e[5]||(e[5]=[u(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[B,l(r).loading]]),g("div",ee,[t(S,{modelValue:l(r),"onUpdate:modelValue":e[1]||(e[1]=a=>P(r)?r.value=a:null),onChange:l(s)},null,8,["modelValue","onChange"])])]),_:1}),l(d)?(f(),y(Z,{key:0,ref_key:"editRef",ref:m,onSuccess:l(s),onClose:e[2]||(e[2]=a=>d.value=!1)},null,8,["onSuccess"])):j("",!0)])}}});export{Ee as default};
