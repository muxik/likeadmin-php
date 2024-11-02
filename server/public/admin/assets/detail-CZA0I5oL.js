import{d as C,g as q,j as g,s as R,z as A,o as d,a as N,m as t,w as a,e as s,b as f,p as r,t as i,B as c,C as v,Z as V,$ as z,v as F,q as M}from"./index-Db5CBa4F.js";import{E as S,a as U}from"./el-form-item-DdPN1Y-B.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-ByMzmBl8.js";import{E as I}from"./el-card-CdrfA3tk.js";import{E as O}from"./el-page-header-73c41BTf.js";import{g as T,u as Z,a as G}from"./consumer-BamASK1V.js";import{_ as J}from"./account-adjust.vue_vue_type_script_setup_true_lang-BQsmhh1h.js";import"./_baseClone-DqE177pC.js";import"./_Uint8Array-QK_0xYq9.js";import"./_initCloneObject-uEbz8wZF.js";import"./el-popover-Z5HLNGgJ.js";import"./el-tag-CxPsTVqn.js";import"./isEqual-B2ISp8N_.js";import"./el-select-BcOBwzuk.js";import"./index-CjI4u-fQ.js";import"./token-DI9FKtlJ.js";/* empty css                       */import"./el-radio-DYnCiASz.js";import"./index-Cynsnu2B.js";import"./index--VjTFVLi.js";const K={class:"bg-page flex py-5 mb-10 items-center"},L={class:"basis-40 flex flex-col justify-center items-center"},Q={class:"basis-40 flex flex-col justify-center items-center"},W={class:"mt-2 flex items-center"},X=C({name:"consumerDetail"}),we=C({...X,setup(Y){const w=q(),o=g({avatar:"",channel:"",create_time:"",login_time:"",mobile:"",nickname:"",real_name:0,sex:0,sn:"",account:"",user_money:""}),u=g({show:!1,value:""}),j=R(),E=async()=>{const n=await T({id:w.query.id});Object.keys(o).forEach(e=>{o[e]=n[e]})},y=async(n,e)=>{V(n)||(await Z({id:w.query.id,field:e,value:n}),E())},h=n=>{u.show=!0,u.value=n},B=async n=>{await G({user_id:w.query.id,...n}),u.show=!1,E()};return E(),(n,e)=>{const D=O,k=I,$=z,p=F,m=S,b=M,x=H,P=U,_=A("perms");return d(),N("div",null,[t(k,{class:"!border-none",shadow:"never"},{default:a(()=>[t(D,{content:"用户详情",onBack:e[0]||(e[0]=l=>n.$router.back())})]),_:1}),t(k,{class:"mt-4 !border-none",header:"基本资料",shadow:"never"},{default:a(()=>[t(P,{ref_key:"formRef",ref:j,class:"ls-form",model:s(o),"label-width":"120px"},{default:a(()=>[f("div",K,[f("div",L,[e[7]||(e[7]=f("div",{class:"mb-2 text-tx-regular"},"用户头像",-1)),t($,{src:s(o).avatar,size:58},null,8,["src"])]),f("div",Q,[e[9]||(e[9]=f("div",{class:"text-tx-regular"},"账户余额",-1)),f("div",W,[r(" ¥"+i(s(o).user_money)+" ",1),c((d(),v(p,{type:"primary",link:"",onClick:e[1]||(e[1]=l=>h(s(o).user_money))},{default:a(()=>e[8]||(e[8]=[r(" 调整 ")])),_:1})),[[_,["user.user/adjustMoney"]]])])])]),t(m,{label:"用户昵称："},{default:a(()=>[r(i(s(o).nickname),1)]),_:1}),t(m,{label:"账号："},{default:a(()=>[r(i(s(o).account)+" ",1),c((d(),v(x,{class:"ml-[10px]",onConfirm:e[2]||(e[2]=l=>y(l,"account")),limit:32},{default:a(()=>[t(p,{type:"primary",link:""},{default:a(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"真实姓名："},{default:a(()=>[r(i(s(o).real_name||"-")+" ",1),c((d(),v(x,{class:"ml-[10px]",onConfirm:e[3]||(e[3]=l=>y(l,"real_name")),limit:32},{default:a(()=>[t(p,{type:"primary",link:""},{default:a(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"性别："},{default:a(()=>[r(i(s(o).sex)+" ",1),c((d(),v(x,{class:"ml-[10px]",type:"select",options:[{label:"未知",value:0},{label:"男",value:1},{label:"女",value:2}],onConfirm:e[4]||(e[4]=l=>y(l,"sex"))},{default:a(()=>[t(p,{type:"primary",link:""},{default:a(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"联系电话："},{default:a(()=>[r(i(s(o).mobile||"-")+" ",1),c((d(),v(x,{class:"ml-[10px]",type:"number",onConfirm:e[5]||(e[5]=l=>y(l,"mobile"))},{default:a(()=>[t(p,{type:"primary",link:""},{default:a(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"注册来源："},{default:a(()=>[r(i(s(o).channel),1)]),_:1}),t(m,{label:"注册时间："},{default:a(()=>[r(i(s(o).create_time),1)]),_:1}),t(m,{label:"最近登录时间："},{default:a(()=>[r(i(s(o).login_time),1)]),_:1})]),_:1},8,["model"])]),_:1}),t(J,{show:s(u).show,"onUpdate:show":e[6]||(e[6]=l=>s(u).show=l),value:s(u).value,onConfirm:B},null,8,["show","value"])])}}});export{we as default};
