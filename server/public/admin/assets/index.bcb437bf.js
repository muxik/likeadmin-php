import{C as O,D as W,w as H,F as J,I as Q,L as X,p as Y,q as Z,r as ee,M as te,N as oe}from"./element-plus.504c2ead.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang.6dfc20ab.js";import{j as ne,f as v,b as le}from"./index.9aa6418f.js";import{d as S,a0 as A,r as ue,af as re,am as se,o as u,c as C,W as e,O as t,u as a,a8 as P,T as s,P as i,M as d,a as b,j as ie,S as me}from"./@vue.2527ecfd.js";import{b as de,c as ce,d as pe,e as _e,s as fe}from"./code.eb25cfad.js";import{u as Fe}from"./usePaging.fb804618.js";import{_ as ge}from"./data-table.vue_vue_type_script_setup_true_lang.f099deb6.js";import{_ as Ce}from"./code-preview.vue_vue_type_script_setup_true_lang.e9521e10.js";import"./@vueuse.b9e34262.js";import"./@element-plus.fec869e0.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.4558177f.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";import"./index.c5fba4fc.js";const be={class:"code-generation"},we={class:"flex"},ye={class:"mt-4"},Ee={class:"flex items-center"},he={class:"flex justify-end mt-4"},ve=S({name:"codeGenerate"}),mt=S({...ve,setup(ke){const c=A({table_name:"",table_comment:""}),p=A({show:!1,loading:!1,code:[]}),{pager:f,getLists:g,resetParams:T,resetPage:w}=Fe({fetchFun:_e,params:c}),F=ue([]),$=n=>{F.value=n.map(({id:o})=>o)},I=async n=>{await v.confirm("\u786E\u5B9A\u8981\u540C\u6B65\u8868\u7ED3\u6784\uFF1F"),await fe({id:n})},k=async n=>{await v.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await de({id:n}),g()},K=async n=>{const o=await ce({id:n});p.code=o,p.show=!0},N=n=>n.some(o=>o.generate_type==1),D=async n=>{if(N(n))return v.msgError("\u751F\u6210\u65B9\u5F0F\u4E3A\u751F\u6210\u5230\u6A21\u5757\uFF0C\u8BF7\u5728\u524D\u7AEF\u5F00\u53D1\u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF0C\u8BE6\u7EC6\u53C2\u8003\u6587\u6863");const o=await pe({id:n});o.file&&window.open(o.file,"_blank")},M=(n,o)=>{switch(n){case"generate":D([o.id]);break;case"sync":I(o.id);break;case"delete":k(o.id)}};return g(),(n,o)=>{const B=O,y=W,r=H,U=J,V=Q,E=le,_=X,j=re("router-link"),h=Y,G=Z,L=ee,q=te,z=ae,m=se("perms"),R=oe;return u(),C("div",be,[e(V,{class:"!border-none",shadow:"never"},{default:t(()=>[e(U,{class:"mb-[-16px]",model:a(c),inline:""},{default:t(()=>[e(y,{label:"\u8868\u540D\u79F0"},{default:t(()=>[e(B,{class:"w-[280px]",modelValue:a(c).table_name,"onUpdate:modelValue":o[0]||(o[0]=l=>a(c).table_name=l),clearable:"",onKeyup:P(a(w),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(y,{label:"\u8868\u63CF\u8FF0"},{default:t(()=>[e(B,{class:"w-[280px]",modelValue:a(c).table_comment,"onUpdate:modelValue":o[1]||(o[1]=l=>a(c).table_comment=l),clearable:"",onKeyup:P(a(w),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(y,null,{default:t(()=>[e(r,{type:"primary",onClick:a(w)},{default:t(()=>[s("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(r,{onClick:a(T)},{default:t(()=>[s("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),i((u(),d(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[b("div",we,[i((u(),d(ge,{class:"inline-block mr-[10px]",onSuccess:a(g)},{default:t(()=>[e(r,{type:"primary"},{icon:t(()=>[e(E,{name:"el-icon-Plus"})]),default:t(()=>[s(" \u5BFC\u5165\u6570\u636E\u8868 ")]),_:1})]),_:1},8,["onSuccess"])),[[m,["tools.generator/selectTable"]]]),i((u(),d(r,{disabled:!a(F).length,onClick:o[2]||(o[2]=l=>k(a(F))),type:"danger"},{icon:t(()=>[e(E,{name:"el-icon-Delete"})]),default:t(()=>[s(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[m,["tools.generator/delete"]]]),i((u(),d(r,{disabled:!a(F).length,onClick:o[3]||(o[3]=l=>D(a(F)))},{default:t(()=>[s(" \u751F\u6210\u4EE3\u7801 ")]),_:1},8,["disabled"])),[[m,["tools.generator/generate"]]])]),b("div",ye,[e(q,{data:a(f).lists,size:"large",onSelectionChange:$},{default:t(()=>[e(_,{type:"selection",width:"55"}),e(_,{label:"\u8868\u540D\u79F0",prop:"table_name","min-width":"180"}),e(_,{label:"\u8868\u63CF\u8FF0",prop:"table_comment","min-width":"180"}),e(_,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"180"}),e(_,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),e(_,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[b("div",Ee,[i((u(),d(r,{type:"primary",link:"",onClick:x=>K(l.id)},{default:t(()=>[s(" \u9884\u89C8 ")]),_:2},1032,["onClick"])),[[m,["tools.generator/preview"]]]),e(r,{type:"primary",link:""},{default:t(()=>[i((u(),d(j,{to:{path:a(ne)("tools.generator/edit"),query:{id:l.id}}},{default:t(()=>[s(" \u7F16\u8F91 ")]),_:2},1032,["to"])),[[m,["tools.generator/edit"]]])]),_:2},1024),i((u(),d(L,{class:"ml-2",onCommand:x=>M(x,l)},{dropdown:t(()=>[e(G,null,{default:t(()=>[i((u(),C("div",null,[e(h,{command:"generate"},{default:t(()=>[e(r,{type:"primary",link:""},{default:t(()=>[s(" \u751F\u6210\u4EE3\u7801 ")]),_:1})]),_:1})])),[[m,["tools.generator/generate"]]]),i((u(),C("div",null,[e(h,{command:"sync"},{default:t(()=>[e(r,{type:"primary",link:""},{default:t(()=>[s(" \u540C\u6B65 ")]),_:1})]),_:1})])),[[m,["tools.generator/syncColumn"]]]),i((u(),C("div",null,[e(h,{command:"delete"},{default:t(()=>[e(r,{type:"danger",link:""},{default:t(()=>[s(" \u5220\u9664 ")]),_:1})]),_:1})])),[[m,["tools.generator/delete"]]])]),_:1})]),default:t(()=>[e(r,{type:"primary",link:""},{default:t(()=>[s(" \u66F4\u591A "),e(E,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[m,["tools.generator/generate","tools.generator/syncColumn","tools.generator/delete"]]])])]),_:1})]),_:1},8,["data"])]),b("div",he,[e(z,{modelValue:a(f),"onUpdate:modelValue":o[4]||(o[4]=l=>ie(f)?f.value=l:null),onChange:a(g)},null,8,["modelValue","onChange"])])]),_:1})),[[R,a(f).loading]]),a(p).show?(u(),d(Ce,{key:0,modelValue:a(p).show,"onUpdate:modelValue":o[5]||(o[5]=l=>a(p).show=l),code:a(p).code},null,8,["modelValue","code"])):me("",!0)])}}});export{mt as default};
