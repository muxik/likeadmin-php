import{_ as N}from"./index-MNbLmrrq.js";import{y as E,d as V,j as R,c as T,z as q,o as d,a as p,m as t,w as o,e as i,b as a,p as m,B as x,C as y,F as $,r as j,t as A,v as G,E as L,q as H,x as J}from"./index-J7LZbOsU.js";import{E as K,a as M}from"./el-table-column-CyjRaU0z.js";import"./el-checkbox-D7P9lxhC.js";import"./el-tag-T63lvwFN.js";import{E as O}from"./el-card-DLZAV2I4.js";import{E as P,a as Q}from"./el-form-item-DQ0zpmBv.js";/* empty css                       */import{E as W,a as X}from"./el-radio-DpScKcGn.js";import"./_Uint8Array-87dXSNdh.js";import"./isEqual-CX9K0tcs.js";import"./_initCloneObject-B6EJo72y.js";import"./_baseClone-DhKVrr9i.js";function Y(){return E.get({url:"/setting.hot_search/getConfig"})}function Z(u){return E.post({url:"/setting.hot_search/setConfig",params:u})}const ee={class:"hot-search"},te={class:"lg:flex"},oe={class:"flex-1 min-w-0"},se={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},ae={class:"hot-search-phone-content"},ne={class:"search-com"},le={class:"search-con flex items-center px-[15px]"},re={class:"hot-search-text"},de=V({name:"search"}),ie=V({...de,setup(u){const l=R({status:1,data:[]}),w=T(()=>l.data.filter(s=>s.name).sort((s,e)=>e.sort-s.sort)),f=async()=>{try{const s=await Y();for(const e in l)l[e]=s[e]}catch(s){console.log("获取=>",s)}},C=()=>{l.data.push({name:"",sort:0})},k=s=>{l.data.splice(s,1)},B=async()=>{try{await Z(l),f()}catch(s){console.log("保存=>",s)}};return f(),(s,e)=>{const h=W,D=X,S=P,U=Q,g=O,c=G,v=L,_=K,F=M,z=H,I=N,b=q("perms");return d(),p("div",ee,[t(g,{class:"!border-none",shadow:"never"},{default:o(()=>[t(U,{ref:"formRef",model:i(l),"label-width":"100px"},{default:o(()=>[t(S,{label:"功能状态",style:{"margin-bottom":"0"}},{default:o(()=>[a("div",null,[t(D,{modelValue:i(l).status,"onUpdate:modelValue":e[0]||(e[0]=n=>i(l).status=n)},{default:o(()=>[t(h,{value:1},{default:o(()=>e[1]||(e[1]=[m("开启")])),_:1}),t(h,{value:0},{default:o(()=>e[2]||(e[2]=[m("关闭")])),_:1})]),_:1},8,["modelValue"]),e[3]||(e[3]=a("div",{class:"form-tips"},"默认开启，关闭则前端不显示该功能",-1))])]),_:1})]),_:1},8,["model"])]),_:1}),t(g,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[a("div",te,[a("div",oe,[t(c,{type:"primary",class:"mb-4",onClick:C},{default:o(()=>e[4]||(e[4]=[m("添加")])),_:1}),t(F,{size:"large",data:i(l).data},{default:o(()=>[t(_,{label:"关键词",prop:"describe","min-width":"160"},{default:o(({row:n})=>[t(v,{modelValue:n.name,"onUpdate:modelValue":r=>n.name=r,clearable:"",placeholder:"请输入关键字","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{label:"排序",prop:"describe","min-width":"160"},{default:o(({row:n})=>[t(v,{modelValue:n.sort,"onUpdate:modelValue":r=>n.sort=r,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{label:"操作","min-width":"80",fixed:"right"},{default:o(({$index:n})=>[x((d(),y(c,{type:"danger",link:"",onClick:r=>k(n)},{default:o(()=>e[5]||(e[5]=[m(" 删除 ")])),_:2},1032,["onClick"])),[[b,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),a("div",se,[e[8]||(e[8]=a("div",{class:"mb-4 text-center"},"- 热搜预览图 -",-1)),a("div",ae,[a("div",ne,[a("div",le,[t(z,{name:"el-icon-Search",size:17}),e[6]||(e[6]=a("span",{class:"ml-[5px]"},"请输入关键词搜索",-1))])]),e[7]||(e[7]=a("div",{class:"hot-search-title"},"热门搜索",-1)),a("div",re,[(d(!0),p($,null,j(i(w),(n,r)=>(d(),p("span",{key:r},A(n.name),1))),128))])])])])]),_:1}),x((d(),y(I,null,{default:o(()=>[t(c,{type:"primary",onClick:B},{default:o(()=>e[9]||(e[9]=[m("保存")])),_:1})]),_:1})),[[b,["setting.hot_search/setConfig"]]])])}}}),Ve=J(ie,[["__scopeId","data-v-2569ecde"]]);export{Ve as default};
