import{_ as v}from"./index.7c13f399.js";import{D as B,F as D,I as E,w as g}from"./element-plus.6c36063e.js";import{_ as h}from"./picker.fbae7d4c.js";import{a as b,b as w}from"./user.7725577e.js";import{d as p,a1 as y,ah as A,o as s,c as k,W as e,O as r,a,P as V,M as x,U as S}from"./@vue.af680e04.js";import"./index.87c39045.js";import"./@vueuse.8c34eaea.js";import"./lodash.873faf2b.js";import"./axios.3af9fe4b.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.e12a99db.js";import"./color.cb877126.js";import"./clone.3b081931.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.034bf3af.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./lodash-es.70b90cb6.js";import"./dayjs.f7363e4f.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.eb605f27.js";import"./index.19abbdf8.js";import"./index.vue_vue_type_script_setup_true_lang.1dfa8134.js";import"./index.0082bd94.js";import"./index.125a6ba8.js";import"./index.vue_vue_type_script_setup_true_lang.bdee5def.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./vuedraggable.c3915452.js";import"./vue.35da8104.js";import"./sortablejs.d9cb9a0e.js";const U={class:"user-setup"},N=a("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),j=a("div",null,[a("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),I=S("\u4FDD\u5B58"),M=p({name:"userSetup"}),kt=p({...M,setup(O){const t=y({default_avatar:""}),i=async()=>{try{const o=await b();for(const m in t)t[m]=o[m]}catch(o){console.log("\u83B7\u53D6=>",o)}},n=async()=>{try{await w(t),i()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return i(),(o,m)=>{const l=h,u=B,_=D,c=E,d=g,f=v,F=A("perms");return s(),k("div",U,[e(c,{shadow:"never",class:"!border-none"},{default:r(()=>[N,e(_,{ref:"formRef",model:t,"label-width":"120px"},{default:r(()=>[e(u,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:r(()=>[a("div",null,[e(l,{modelValue:t.default_avatar,"onUpdate:modelValue":m[0]||(m[0]=C=>t.default_avatar=C),limit:1},null,8,["modelValue"])])]),_:1}),e(u,null,{default:r(()=>[j]),_:1})]),_:1},8,["model"])]),_:1}),V((s(),x(f,null,{default:r(()=>[e(d,{type:"primary",onClick:n},{default:r(()=>[I]),_:1})]),_:1})),[[F,["setting.user.user/setConfig"]]])])}}});export{kt as default};
