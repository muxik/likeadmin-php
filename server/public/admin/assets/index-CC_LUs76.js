import{_ as N}from"./index-CQo7909_.js";import{d as w,j as C,i as v,c as l,V as E,z as B,o as _,a as I,b as O,m as n,w as c,e as i,D,B as U,C as h,p as k,eV as J,v as R,x as W}from"./index-Db5CBa4F.js";import{E as j}from"./el-card-CdrfA3tk.js";import{a as z,s as H}from"./decoration-Df89v5NZ.js";import{_ as $}from"./attr-setting.vue_vue_type_script_setup_true_lang-CAqCVWtm.js";import q from"./menu-C720sFC9.js";import A from"./preview-CZl_l6rf.js";import{e as F}from"./index-BIwIJ6c0.js";import"./index-DXmOAUEQ.js";import"./_baseClone-DqE177pC.js";import"./_Uint8Array-QK_0xYq9.js";import"./_initCloneObject-uEbz8wZF.js";import"./isEqual-B2ISp8N_.js";import"./index--VjTFVLi.js";import"./attr-Zqlu4ONX.js";import"./el-form-item-DdPN1Y-B.js";import"./index-BJw7_JGb.js";import"./picker-BkCB1btE.js";import"./index-Cynsnu2B.js";import"./index.vue_vue_type_script_setup_true_lang-BH1fcTP5.js";import"./el-tag-CxPsTVqn.js";import"./el-select-BcOBwzuk.js";import"./index-CjI4u-fQ.js";import"./token-DI9FKtlJ.js";import"./el-table-column-CwsjKE_0.js";import"./el-checkbox-BvO8hgnA.js";import"./article-mqGpmBTq.js";import"./usePaging-PxVE1wmU.js";/* empty css                       */import"./el-radio-DYnCiASz.js";import"./picker-BhXaOtJe.js";import"./index-CEF4wi3H.js";import"./el-tree-B0y5MMU4.js";import"./index.vue_vue_type_script_setup_true_lang-ByMzmBl8.js";import"./el-popover-Z5HLNGgJ.js";import"./content.vue_vue_type_script_setup_true_lang-BRCbkej2.js";import"./decoration-img-D6aoDKk5.js";import"./attr.vue_vue_type_script_setup_true_lang-D3viA2Z_.js";import"./content-8aAO1OtI.js";import"./attr.vue_vue_type_script_setup_true_lang-CPnQTuUJ.js";import"./content.vue_vue_type_script_setup_true_lang-BzzOk_N1.js";import"./attr.vue_vue_type_script_setup_true_lang-CVV7bGvB.js";import"./add-nav.vue_vue_type_script_setup_true_lang-trRXCgep.js";import"./content-BSDPWPty.js";import"./attr.vue_vue_type_script_setup_true_lang-XjpQRlIc.js";import"./content.vue_vue_type_script_setup_true_lang-CGu0cd2I.js";import"./attr.vue_vue_type_script_setup_true_lang-1y2aiO8X.js";import"./content-CLN0Q4ad.js";import"./attr.vue_vue_type_script_setup_true_lang-8NgRCwv1.js";import"./index.vue_vue_type_script_setup_true_lang-CEK8xAON.js";import"./content-BX9PEcUT.js";import"./content.vue_vue_type_script_setup_true_lang-IWGfUWio.js";import"./el-alert-C-QnRtf_.js";import"./attr.vue_vue_type_script_setup_true_lang-Dozo-jR1.js";import"./content-Ch-GwneN.js";import"./attr.vue_vue_type_script_setup_true_lang-BLm1ZV9l.js";import"./content.vue_vue_type_script_setup_true_lang-R8JnBFRB.js";import"./attr.vue_vue_type_script_setup_true_lang-_lvc514Y.js";import"./content-3YKsCf_s.js";const G={class:"decoration-pages min-w-[1100px]"},K={class:"flex flex-1 h-full justify-between"},L=w({name:"decorationPages"}),Q=w({...L,setup(T){let u;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(u||(u={}));const x=e=>{o[a.value].pageData=[...e]},p=e=>e.map(t=>{var s;return{id:J(),...((s=F[t])==null?void 0:s.options())||{}}}),M=e=>{var t;(t=o[a.value])!=null&&t.pageData&&(o[a.value].pageData[r.value].content=e)},o=C({1:{id:1,type:1,name:"首页装修",pageMeta:p(["page-meta"]),pageData:p(["search","banner","nav","news"])},2:{id:2,type:2,name:"个人中心",pageMeta:p(["page-meta"]),pageData:p(["user-info","my-service","user-banner"])},3:{id:3,type:3,name:"客服设置",pageMeta:null,pageData:p(["customer-service"])}}),a=v("1"),r=v(-1),d=l(()=>{var e;return((e=o[a.value])==null?void 0:e.pageData)??[]}),y=l(()=>{var e;return((e=o[a.value])==null?void 0:e.pageMeta)??null}),V=l(()=>{var e,t;return r.value===-1?((e=o[a.value])==null?void 0:e.pageMeta[0])??"":((t=o[a.value])==null?void 0:t.pageData[r.value])??""}),g=async()=>{const e=await z({id:a.value});o[String(e.id)].pageData=JSON.parse(e.data),o[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},b=async()=>{const e=o[a.value];await H({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),g()};return E(a,()=>{r.value=d.value.findIndex(e=>!e.disabled),g()},{immediate:!0}),(e,t)=>{const f=j,s=R,P=N,S=B("perms");return _(),I("div",G,[O("div",K,[n(f,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(q,{modelValue:i(a),"onUpdate:modelValue":t[0]||(t[0]=m=>D(a)?a.value=m:null),menus:i(o)},null,8,["modelValue","menus"])]),_:1}),n(A,{class:"flex-1 scroll-view-content",modelValue:i(r),"onUpdate:modelValue":t[1]||(t[1]=m=>D(r)?r.value=m:null),onUpdatePageData:x,pageData:i(d),pageMeta:i(y)},null,8,["modelValue","pageData","pageMeta"]),n($,{class:"w-[560px] scroll-view-content",widget:i(V),"onUpdate:content":M},null,8,["widget"])]),U((_(),h(P,{class:"mt-4",fixed:!1},{default:c(()=>[n(s,{type:"primary",onClick:b},{default:c(()=>t[2]||(t[2]=[k("保存")])),_:1})]),_:1})),[[S,["decorate:pages:save"]]])])}}}),at=W(Q,[["__scopeId","data-v-c24d7f45"]]);export{at as default};