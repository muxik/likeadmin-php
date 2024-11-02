import{W as e,d as t,c as s,r as a,a as n,o as l,b as r,w as i,e as o,l as c,t as u,k as p,x as d,f as m,X as f,p as g,i as y,u as x,g as _,Y as v,F as b,h,y as k,S as j,q as w,G as O,Z as C,_ as S,$ as I,a0 as L,K as M}from"./index-561dd99e.js";import{_ as z}from"./page-meta.438f2c32.js";import{_ as U}from"./u-avatar.878580e7.js";import{_ as F}from"./u-icon.f1b72599.js";import{_ as J}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as N}from"./u-image.e9ed38ca.js";import{_ as $}from"./tabbar.vue_vue_type_script_setup_true_lang.b3a4c4a3.js";import"./u-badge.45c73cfd.js";const q=J(t({__name:"user-info",props:{pageMeta:{type:Object,default:()=>[]},content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},user:{type:Object,default:()=>({})},isLogin:{type:Boolean}},setup(t){const x=t,{copy:_}={copy:t=>{e({data:String(t)})}};s((()=>x.pageMeta[0].content));return(e,s)=>{const x=a(n("u-avatar"),U),v=g,b=y,h=a(n("u-icon"),F);return l(),r(v,{class:"user-info mb-[0rpx]"},{default:i((()=>[o(v,{class:"flex items-center justify-between px-[50rpx] pb-[50rpx] pt-[40rpx]"},{default:i((()=>[t.isLogin?(l(),r(v,{key:0,class:"flex items-center",onClick:s[1]||(s[1]=e=>{f({url:"/pages/user_data/user_data"})})},{default:i((()=>[o(x,{src:t.user.avatar,size:120},null,8,["src"]),o(v,{class:"text-white ml-[20rpx]"},{default:i((()=>[o(v,{class:"text-2xl"},{default:i((()=>[c(u(t.user.nickname),1)])),_:1}),o(v,{class:"text-xs mt-[18rpx]",onClick:s[0]||(s[0]=p((e=>d(_)(t.user.account)),["stop"]))},{default:i((()=>[c(" 账号："+u(t.user.account),1)])),_:1})])),_:1})])),_:1})):(l(),r(b,{key:1,class:"flex items-center","hover-class":"none",url:"/pages/login/login"},{default:i((()=>[o(x,{src:"/static/images/user/default_avatar.png",size:120}),o(v,{class:"text-white text-3xl ml-[20rpx]"},{default:i((()=>[c("未登录")])),_:1})])),_:1})),t.isLogin?(l(),r(b,{key:2,"hover-class":"none",url:"/pages/user_set/user_set"},{default:i((()=>[o(h,{name:"setting",color:"#fff",size:48})])),_:1})):m("v-if",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-090ccad9"]]),A=t({__name:"my-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const t=e,{getImageUrl:r}=x(),i=e=>{k(e)},c=s((()=>{var e;return(null==(e=t.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(t,s)=>{const p=a(n("u-image"),N),f=a(n("u-icon"),F);return l(),_("div",{class:"my-service bg-white mx-[20rpx] mt-[20rpx] rounded-lg p-[30rpx]"},[e.content.title?(l(),_("div",{key:0,class:"title font-medium text-lg"},[v("div",null,u(e.content.title),1)])):m("v-if",!0),1==e.content.style?(l(),_("div",{key:1,class:"grid grid-cols-4 gap-x-9 gap-y-7"},[(l(!0),_(b,null,h(d(c),((e,t)=>(l(),_("div",{key:t,class:"flex flex-col items-center pt-[40rpx]",onClick:t=>i(e.link)},[o(p,{width:"52",height:"52",src:d(r)(e.image),alt:""},null,8,["src"]),v("div",{class:"mt-[22rpx] text-sm"},u(e.name),1)],8,["onClick"])))),128))])):m("v-if",!0),2==e.content.style?(l(),_("div",{key:2},[(l(!0),_(b,null,h(d(c),((e,t)=>(l(),_("div",{key:t,class:"flex items-center border-light border-solid border-0 border-b h-[100rpx] px-[24rpx]",onClick:t=>i(e.link)},[o(p,{width:"48",height:"48",src:d(r)(e.image),alt:""},null,8,["src"]),v("div",{class:"ml-[20rpx] flex-1 text-sm"},u(e.name),1),v("div",{class:"text-muted"},[o(f,{name:"arrow-right"})])],8,["onClick"])))),128))])):m("v-if",!0)])}}}),B=t({__name:"user-banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const t=e,{getImageUrl:c}=x(),u=s((()=>{var e;return(null==(e=t.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(t,s)=>{const p=a(n("u-image"),N),f=j,y=w,x=g;return d(u).length&&e.content.enabled?(l(),r(x,{key:0,class:"banner h-[200rpx] mx-[20rpx] mt-[20rpx] translate-y-0"},{default:i((()=>[o(y,{class:"swiper h-full","indicator-dots":d(u).length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:i((()=>[(l(!0),_(b,null,h(d(u),((e,t)=>(l(),r(f,{key:t,onClick:t=>{return s=e.link,void k(s);var s}},{default:i((()=>[o(p,{mode:"widthFix",width:"100%",height:"100%",src:d(c)(e.image),"border-radius":14},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):m("v-if",!0)}}}),D=t({__name:"user",setup(e){const t=O({meta:[],pages:[]}),s=C(),{userInfo:c,isLogin:u}=S(s);return I((()=>{s.getUser()})),(async()=>{const e=await L({id:2});t.meta=JSON.parse(e.meta),t.pages=JSON.parse(e.data),M({title:t.meta[0].content.title})})(),(e,s)=>{const p=a(n("page-meta"),z),f=a(n("w-user-info"),q),y=a(n("w-my-service"),A),x=a(n("w-user-banner"),B),v=g,k=a(n("tabbar"),$);return l(),_(b,null,[o(p,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),o(v,{class:"user"},{default:i((()=>[(l(!0),_(b,null,h(t.pages,((e,s)=>(l(),r(v,{key:s},{default:i((()=>["user-info"==e.name?(l(),r(f,{key:0,pageMeta:t.meta,content:e.content,styles:e.styles,user:d(c),"is-login":d(u)},null,8,["pageMeta","content","styles","user","is-login"])):m("v-if",!0),"my-service"==e.name?(l(),r(y,{key:1,content:e.content,styles:e.styles},null,8,["content","styles"])):m("v-if",!0),"user-banner"==e.name?(l(),r(x,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):m("v-if",!0)])),_:2},1024)))),128)),o(k)])),_:1})],64)}}});export{D as default};
