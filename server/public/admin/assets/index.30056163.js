import{C as J,D as O,w as W,F as H,I as Q,J as X,p as Y,q as Z,r as ee,K as te,L as oe}from"./element-plus.81dd3128.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang.09e19d7d.js";import{k as ae,f as k,b as le}from"./index.69f70f99.js";import{d as T,a1 as A,r as se,a6 as ue,ah as re,o as l,c as C,W as e,O as t,ab as P,u as r,P as i,M as m,a as w,k as ie,T as de,U as u}from"./@vue.af680e04.js";import{a as me,b as ce,c as _e,d as pe,s as fe}from"./code.ee8ceed0.js";import{u as Fe}from"./usePaging.01638e85.js";import{_ as ge}from"./data-table.vue_vue_type_script_setup_true_lang.3fd4c2b4.js";import{_ as he}from"./code-preview.vue_vue_type_script_setup_true_lang.736f6d75.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.8a39f93d.js";import"./axios.ef849b08.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.cceb5001.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.525addec.js";import"./color.629b30be.js";import"./clone.5fb606c0.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.06980d2d.js";import"./vue-clipboard3.5ebd6696.js";import"./clipboard.3fb7e13f.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./index.04b9b699.js";const be={class:"code-generation"},Ce=u("\u67E5\u8BE2"),we=u("\u91CD\u7F6E"),ye={class:"flex"},ve=u(" \u5BFC\u5165\u6570\u636E\u8868 "),Ee=u(" \u5220\u9664 "),ke=u(" \u751F\u6210\u4EE3\u7801 "),De={class:"mt-4"},Be={class:"flex items-center"},Ve=u(" \u9884\u89C8 "),xe=u(" \u7F16\u8F91 "),Ae=u(" \u66F4\u591A "),Pe=u(" \u751F\u6210\u4EE3\u7801 "),Te=u(" \u540C\u6B65 "),$e=u(" \u5220\u9664 "),Ke={class:"flex justify-end mt-4"},Se=T({name:"codeGenerate"}),bt=T({...Se,setup(Ie){const c=A({table_name:"",table_comment:""}),_=A({show:!1,loading:!1,code:[]}),{pager:f,getLists:b,resetParams:$,resetPage:y}=Fe({fetchFun:pe,params:c}),F=se([]),K=n=>{F.value=n},S=async n=>{await k.confirm("\u786E\u5B9A\u8981\u540C\u6B65\u8868\u7ED3\u6784\uFF1F"),await fe({id:n})},D=async n=>{await k.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await me({id:n}),b()},I=async n=>{const o=await ce({id:n});_.code=o,_.show=!0},U=n=>n.some(o=>o.generate_type==1),B=async n=>{if(U(n))return k.msgError("\u751F\u6210\u65B9\u5F0F\u4E3A\u751F\u6210\u5230\u6A21\u5757\uFF0C\u8BF7\u5728\u524D\u7AEF\u5F00\u53D1\u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF0C\u8BE6\u7EC6\u53C2\u8003\u6587\u6863");const o=n.map(({id:h})=>h),g=await _e({id:o});g.file&&window.open(g.file,"_blank")},N=(n,o)=>{switch(n){case"generate":B([o]);break;case"sync":S(o.id);break;case"delete":D(o.id)}};return b(),(n,o)=>{const g=J,h=O,s=W,G=H,V=Q,v=le,p=X,L=ue("router-link"),E=Y,M=Z,q=ee,z=te,R=ne,d=re("perms"),j=oe;return l(),C("div",be,[e(V,{class:"!border-none",shadow:"never"},{default:t(()=>[e(G,{class:"mb-[-16px]",model:c,inline:""},{default:t(()=>[e(h,{label:"\u8868\u540D\u79F0"},{default:t(()=>[e(g,{class:"w-[280px]",modelValue:c.table_name,"onUpdate:modelValue":o[0]||(o[0]=a=>c.table_name=a),clearable:"",onKeyup:P(r(y),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(h,{label:"\u8868\u63CF\u8FF0"},{default:t(()=>[e(g,{class:"w-[280px]",modelValue:c.table_comment,"onUpdate:modelValue":o[1]||(o[1]=a=>c.table_comment=a),clearable:"",onKeyup:P(r(y),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(h,null,{default:t(()=>[e(s,{type:"primary",onClick:r(y)},{default:t(()=>[Ce]),_:1},8,["onClick"]),e(s,{onClick:r($)},{default:t(()=>[we]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),i((l(),m(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[w("div",ye,[i((l(),m(ge,{class:"inline-block mr-[10px]",onSuccess:r(b)},{default:t(()=>[e(s,{type:"primary"},{icon:t(()=>[e(v,{name:"el-icon-Plus"})]),default:t(()=>[ve]),_:1})]),_:1},8,["onSuccess"])),[[d,["tools.generator/selectTable"]]]),i((l(),m(s,{disabled:!F.value.length,onClick:o[2]||(o[2]=a=>D(F.value)),type:"danger"},{icon:t(()=>[e(v,{name:"el-icon-Delete"})]),default:t(()=>[Ee]),_:1},8,["disabled"])),[[d,["tools.generator/delete"]]]),i((l(),m(s,{disabled:!F.value.length,onClick:o[3]||(o[3]=a=>B(F.value))},{default:t(()=>[ke]),_:1},8,["disabled"])),[[d,["tools.generator/generate"]]])]),w("div",De,[e(z,{data:r(f).lists,size:"large",onSelectionChange:K},{default:t(()=>[e(p,{type:"selection",width:"55"}),e(p,{label:"\u8868\u540D\u79F0",prop:"table_name","min-width":"180"}),e(p,{label:"\u8868\u63CF\u8FF0",prop:"table_comment","min-width":"180"}),e(p,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"180"}),e(p,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),e(p,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:a})=>[w("div",Be,[i((l(),m(s,{type:"primary",link:"",onClick:x=>I(a.id)},{default:t(()=>[Ve]),_:2},1032,["onClick"])),[[d,["tools.generator/preview"]]]),e(s,{type:"primary",link:""},{default:t(()=>[i((l(),m(L,{to:{path:r(ae)("tools.generator/edit"),query:{id:a.id}}},{default:t(()=>[xe]),_:2},1032,["to"])),[[d,["tools.generator/edit"]]])]),_:2},1024),i((l(),m(q,{class:"ml-2",onCommand:x=>N(x,a)},{dropdown:t(()=>[e(M,null,{default:t(()=>[i((l(),C("div",null,[e(E,{command:"generate"},{default:t(()=>[e(s,{type:"primary",link:""},{default:t(()=>[Pe]),_:1})]),_:1})])),[[d,["tools.generator/generate"]]]),i((l(),C("div",null,[e(E,{command:"sync"},{default:t(()=>[e(s,{type:"primary",link:""},{default:t(()=>[Te]),_:1})]),_:1})])),[[d,["tools.generator/syncColumn"]]]),i((l(),C("div",null,[e(E,{command:"delete"},{default:t(()=>[e(s,{type:"danger",link:""},{default:t(()=>[$e]),_:1})]),_:1})])),[[d,["tools.generator/delete"]]])]),_:1})]),default:t(()=>[e(s,{type:"primary",link:""},{default:t(()=>[Ae,e(v,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[d,["tools.generator/generate","tools.generator/syncColumn","tools.generator/delete"]]])])]),_:1})]),_:1},8,["data"])]),w("div",Ke,[e(R,{modelValue:r(f),"onUpdate:modelValue":o[4]||(o[4]=a=>ie(f)?f.value=a:null),onChange:r(b)},null,8,["modelValue","onChange"])])]),_:1})),[[j,r(f).loading]]),_.show?(l(),m(he,{key:0,modelValue:_.show,"onUpdate:modelValue":o[5]||(o[5]=a=>_.show=a),code:_.code},null,8,["modelValue","code"])):de("",!0)])}}});export{bt as default};
