import{f as g,j as x,g as h,o as a,c as o,k as e,Y as y,Z as v,a as s,b as d,m as k,n as C,t as p,w as b,d as w,Q as E,E as $,aa as j}from"./entry.ad0f3fd4.js";import{u as z}from"./asyncData.7ffb1b6a.js";import{e as B,c as N}from"./news.fce18aa1.js";import{e as V,a as A,E as D}from"./empty_news.6369f931.js";import{E as M}from"./index.359a6488.js";import"./debounce.bc588598.js";import"./index.f9846253.js";import"./index.032bc769.js";import"./isUndefined.9717dae4.js";const P={class:"px-[30px] py-5 user-info min-h-full flex flex-col"},S=s("div",{class:"border-b border-br pb-5"},[s("span",{class:"text-2xl font-medium"},"我的收藏")],-1),q={key:0},F=["onClick"],I={class:"border-b border-br py-4 flex items-center"},L={class:"flex-1"},O={class:"text-lg font-medium line-clamp-1"},Q={class:"text-tx-regular line-clamp-2 mt-4"},T={class:"mt-5 text-tx-secondary flex justify-between"},U={class:"py-4 flex justify-end"},Y={key:1,class:"flex flex-1 justify-center items-center"},se=g({__name:"collection",async setup(Z){let n,m;const i=x({page_no:1,page_size:15}),{data:r,refresh:_}=([n,m]=h(()=>z(()=>B(i),{initialCache:!1},"$0MtqemkOuk")),n=await n,m(),n),u=async c=>{await N({id:c}),j.msgSuccess("已取消收藏"),_()};return(c,l)=>(a(),o("div",P,[S,e(r).lists.length?(a(),o("div",q,[(a(!0),o(y,null,v(e(r).lists,t=>(a(),o("div",{class:"cursor-pointer",key:t.id,onClick:f=>c.$router.push(`/information/detail/${t.article_id}`)},[s("div",I,[t.image?(a(),k(e(D),{key:0,class:"flex-none w-[180px] h-[135px] mr-4",src:t.image,fit:"cover"},null,8,["src"])):C("",!0),s("div",L,[s("div",O,p(t.title),1),s("div",Q,p(t.desc),1),s("div",T,[s("div",null,"收藏于"+p(t.collect_time),1),d(e($),{link:"",onClick:E(f=>u(t.article_id),["stop"])},{default:b(()=>[w(" 取消收藏 ")]),_:2},1032,["onClick"])])])])],8,F))),128)),s("div",U,[d(e(M),{"current-page":e(i).page_no,"onUpdate:currentPage":l[0]||(l[0]=t=>e(i).page_no=t),total:e(r).count,"page-size":e(i).page_size,"hide-on-single-page":"",layout:"total, prev, pager, next, jumper",onCurrentChange:l[1]||(l[1]=t=>e(_)())},null,8,["current-page","total","page-size"])])])):(a(),o("div",Y,[d(e(A),{image:e(V),description:"暂无收藏","image-size":250},null,8,["image"])]))]))}});export{se as default};