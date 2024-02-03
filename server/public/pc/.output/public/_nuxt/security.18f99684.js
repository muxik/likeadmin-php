import{_ as D}from"./index.vue.8a9b897e.js";import{E as j,_ as A}from"./client-only.8193b00b.js";import{u as N}from"./asyncData.82ff1658.js";import{u as T}from"./useLockFn.286fbecb.js";import{a as q,w as L,b as O,r as $,e as z,s as G,f as M,o as _,h as W,i as a,j as o,k as t,l as f,t as w,u as e,E as h,m as X,c as k,p as V,q as g,P as H,v as J,x as K,y as Q,z as Y}from"./entry.606e70b4.js";import{E as Z,a as c}from"./index.69a50ca2.js";import{_ as ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./isUndefined.cd892975.js";const y=p=>(J("data-v-329000e7"),p=p(),K(),p),se={class:"px-[30px] py-5 user-info"},oe=y(()=>a("div",{class:"border-b border-br pb-5"},[a("span",{class:"text-2xl font-medium"},"账号安全")],-1)),ae={class:"mt-5"},te={class:"info-item leading-10 flex justify-between"},le=y(()=>a("div",{class:"item-name"},"登录密码",-1)),re={class:"info-item leading-10 flex justify-between"},de=y(()=>a("div",{class:"item-name"},"绑定微信",-1)),ne={class:"px-5"},ie={class:"flex justify-between"},pe={class:"text-4xl"},ue=q({__name:"security",async setup(p){let u,v;const{data:n,refresh:b}=([u,v]=L(()=>N(()=>Q(),{default:()=>({}),initialCache:!1},"$aylh5XbgmP")),u=await u,v(),u),C=O(),d=$(!1),{setPopupType:E,toggleShowPopup:I}=z(),x=G(),P={old_password:[{required:!0,message:"请输入原密码",trigger:["change","blur"]}],password:[{required:!0,message:"请输入6-20位数字+字母或符号组合",trigger:["change","blur"]},{min:6,max:20,message:"密码长度应为6-20",trigger:["change","blur"]}],password_confirm:[{validator(m,s,i){s===""?i(new Error("请再次输入密码")):s!==l.password?i(new Error("两次输入的密码不一致")):i()},trigger:["change","blur"]}]},l=M({old_password:"",password:"",password_confirm:""}),R=()=>{d.value=!1,E(H.FORGOT_PWD),I(!0)},S=async()=>{var m;await((m=x.value)==null?void 0:m.validate()),await Y(l),C.logout(),d.value=!1,b()},{lockFn:F,isLock:U}=T(S);return(m,s)=>{const i=D,B=A;return _(),W("div",se,[oe,a("div",ae,[a("div",te,[le,a("div",null,[o(e(h),{link:"",type:"primary",onClick:s[0]||(s[0]=r=>d.value=!0)},{default:t(()=>[f(w(e(n).has_password?"点击修改":"点击设置")+" ",1),o(i,{name:"el-icon-ArrowRight"})]),_:1})])]),a("div",re,[de,a("div",null,w(e(n).has_auth?"已绑定":"未绑定"),1)])]),o(B,null,{default:t(()=>[o(e(j),{modelValue:e(d),"onUpdate:modelValue":s[4]||(s[4]=r=>X(d)?d.value=r:null),width:400,"close-on-click-modal":!1},{default:t(()=>[a("div",ne,[a("div",ie,[a("span",pe,w(e(n).has_password?"修改登录密码":"设置登录密码"),1),e(n).has_password?(_(),k(e(h),{key:0,type:"primary",link:"",onClick:R},{default:t(()=>[f(" 忘记原密码 ")]),_:1})):V("",!0)]),o(e(Z),{ref_key:"formRef",ref:x,class:"mt-[35px]",size:"large",model:e(l),rules:P},{default:t(()=>[e(n).has_password?(_(),k(e(c),{key:0,prop:"old_password"},{default:t(()=>[o(e(g),{modelValue:e(l).old_password,"onUpdate:modelValue":s[1]||(s[1]=r=>e(l).old_password=r),placeholder:"请输入原密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1})):V("",!0),o(e(c),{prop:"password"},{default:t(()=>[o(e(g),{modelValue:e(l).password,"onUpdate:modelValue":s[2]||(s[2]=r=>e(l).password=r),placeholder:"请输入6-20位数字+字母或符号组合",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),o(e(c),{prop:"password_confirm"},{default:t(()=>[o(e(g),{modelValue:e(l).password_confirm,"onUpdate:modelValue":s[3]||(s[3]=r=>e(l).password_confirm=r),placeholder:"请再次输入密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),o(e(c),{class:"mt-[60px]"},{default:t(()=>[o(e(h),{class:"w-full",type:"primary",onClick:e(F),loading:e(U)},{default:t(()=>[f(" 确认 ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model"])])]),_:1},8,["modelValue"])]),_:1})])}}});const ve=ee(ue,[["__scopeId","data-v-329000e7"]]);export{ve as default};
