import{_ as w}from"./index.5891afd5.js";import{b as v,c as A,d as D,k as B,f as E}from"./element-plus.34a22242.js";import{_ as V}from"./picker.ec9626f1.js";import{a as k,b as h}from"./website.f7414602.js";import{d as j,r as x,$ as y,o as p,c as U,U as t,L as u,a as r,M as q,K as N,S as W,ad as I}from"./@vue.10616dc1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./@vueuse.803aa217.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./@element-plus.f64a65f2.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.e6077264.js";import"./index.e37c442c.js";import"./index.vue_vue_type_script_setup_true_lang.d86da938.js";import"./index.vue_vue_type_script_lang.c17b493f.js";import"./util.b0902e67.js";import"./index.19a8cfbc.js";import"./pinia.c96893b0.js";import"./vue-demi.ebc8116b.js";import"./vue-router.2222457d.js";import"./nprogress.54513b29.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2e516ce9.js";import"./usePaging.56928ce7.js";import"./feedback.cf6f8996.js";import"./vue3-video-play.fec274ee.js";import"./vuedraggable.9f535ba0.js";import"./vue.e0602fdb.js";import"./sortablejs.ea473bf9.js";const L={class:"website-information"},O={class:"w-80"},R=r("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),S=r("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),G=r("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),K=W("\u4FDD\u5B58"),qo=j({__name:"information",setup(M){const n=x(),o=y({name:"",web_favicon:"",web_logo:"",login_image:""}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}]},s=async()=>{const m=await k();for(const e in o)o[e]=m[e]},d=async()=>{var m;await((m=n.value)==null?void 0:m.validate()),await h(o),s()};return s(),(m,e)=>{const F=v,l=A,a=V,c=D,f=B,g=E,b=w,C=I("perms");return p(),U("div",L,[t(f,{shadow:"never",class:"!border-none"},{default:u(()=>[t(c,{ref_key:"formRef",ref:n,rules:_,class:"ls-form",model:o,"label-width":"120px"},{default:u(()=>[t(l,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[r("div",O,[t(F,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=i=>o.name=i),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(l,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:u(()=>[r("div",null,[t(a,{modelValue:o.web_favicon,"onUpdate:modelValue":e[1]||(e[1]=i=>o.web_favicon=i),limit:1},null,8,["modelValue"]),R])]),_:1}),t(l,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:u(()=>[r("div",null,[t(a,{modelValue:o.web_logo,"onUpdate:modelValue":e[2]||(e[2]=i=>o.web_logo=i),limit:1},null,8,["modelValue"]),S])]),_:1}),t(l,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:u(()=>[r("div",null,[t(a,{modelValue:o.login_image,"onUpdate:modelValue":e[3]||(e[3]=i=>o.login_image=i),limit:1},null,8,["modelValue"]),G])]),_:1})]),_:1},8,["model"])]),_:1}),q((p(),N(b,null,{default:u(()=>[t(g,{type:"primary",onClick:d},{default:u(()=>[K]),_:1})]),_:1})),[[C,["setting.web.web_setting/setWebsite"]]])])}}});export{qo as default};
