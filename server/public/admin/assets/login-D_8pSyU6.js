import{d as C,u as R,c as F,o as m,a as p,b as n,F as K,r as j,e as f,t as L,s as k,f as D,g as P,h as T,i as M,j as O,k as X,l as b,A as E,m as o,w as a,n as V,p as Y,_ as G,q as H,E as J,v as Q,P as W,x as Z}from"./index-J7LZbOsU.js";import{E as ee}from"./el-checkbox-D7P9lxhC.js";import{E as oe,a as te}from"./el-form-item-DQ0zpmBv.js";import{u as se}from"./useLockFn-ZxUzRDBa.js";import"./isEqual-CX9K0tcs.js";import"./_Uint8Array-87dXSNdh.js";import"./_baseClone-DhKVrr9i.js";import"./_initCloneObject-B6EJo72y.js";const ne={class:"layout-footer"},ae={class:"text-center p-2 text-xs text-tx-secondary max-w-[900px] mx-auto"},re=["href"],ce=C({__name:"footer",setup(S){const i=R(),u=F(()=>i.config.copyright_config||[]);return(g,x)=>(m(),p("footer",ne,[n("div",ae,[(m(!0),p(K,null,j(f(u),r=>(m(),p("a",{class:"mx-1 hover:underline",href:r.value,target:"_blank",key:r.key},L(r.key),9,re))),128))])]))}}),le={class:"login flex flex-col"},ie={class:"flex-1 flex items-center justify-center"},ue={class:"login-card flex rounded-md"},de={class:"flex-1 h-full hidden md:inline-block"},me={class:"login-form bg-body flex flex-col justify-center px-10 py-10 md:w-[400px] w-[375px] flex-none mx-auto"},pe={class:"text-center text-3xl font-medium mb-8"},_e={class:"mb-5"},fe=C({__name:"login",setup(S){const i=k(),u=k(),g=R(),x=D(),r=P(),U=T(),c=M(!1),h=F(()=>g.config),s=O({account:"",password:""}),N={account:[{required:!0,message:"请输入账号",trigger:["blur"]}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}]},$=()=>{var e;if(!s.password)return(e=i.value)==null?void 0:e.focus();_()},_=async()=>{var d;await((d=u.value)==null?void 0:d.validate()),b.set(E,{remember:c.value,account:c.value?s.account:""}),await x.login(s);const{query:{redirect:e}}=r,t=typeof e=="string"?e:W.INDEX;U.push(t)},{isLock:q,lockFn:z}=se(_);return X(()=>{const e=b.get(E);e!=null&&e.remember&&(c.value=e.remember,s.account=e.account)}),(e,t)=>{const d=G,v=H,y=J,w=oe,A=te,B=ee,I=Q;return m(),p("div",le,[n("div",ie,[n("div",ue,[n("div",de,[o(d,{src:h.value.login_image,width:400,height:"100%"},null,8,["src"])]),n("div",me,[n("div",pe,L(h.value.web_name),1),o(A,{ref_key:"formRef",ref:u,model:s,size:"large",rules:N},{default:a(()=>[o(w,{prop:"account"},{default:a(()=>[o(y,{modelValue:s.account,"onUpdate:modelValue":t[0]||(t[0]=l=>s.account=l),placeholder:"请输入账号",onKeyup:V($,["enter"])},{prepend:a(()=>[o(v,{name:"el-icon-User",size:"16"})]),_:1},8,["modelValue"])]),_:1}),o(w,{prop:"password"},{default:a(()=>[o(y,{ref_key:"passwordRef",ref:i,modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=l=>s.password=l),"show-password":"",placeholder:"请输入密码",onKeyup:V(_,["enter"])},{prepend:a(()=>[o(v,{name:"el-icon-Lock",size:"16"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),n("div",_e,[o(B,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),label:"记住账号"},null,8,["modelValue"])]),o(I,{type:"primary",size:"large",loading:f(q),onClick:f(z)},{default:a(()=>t[3]||(t[3]=[Y(" 登录 ")])),_:1},8,["loading","onClick"])])])]),o(ce)])}}}),Ee=Z(fe,[["__scopeId","data-v-69c631b3"]]);export{Ee as default};
