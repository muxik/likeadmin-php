import{_ as w}from"./index.2f976c12.js";import{x as v,y as A,A as D,D as B,t as E}from"./element-plus.32724f3c.js";import{_ as V}from"./picker.738188b3.js";import{a as h,b as k}from"./website.334889ff.js";import{d as x,r as y,$ as j,o as p,c as U,U as t,L as u,a as l,M as q,K as N,S as W,ad as I}from"./@vue.67e62321.js";import"./index.fb421b84.js";import"./@vueuse.4608b35b.js";import"./pinia.45d0690c.js";import"./vue-demi.ebc8116b.js";import"./vue-router.4c2c9e7d.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.1892f8d7.js";import"./axios.68af02ab.js";import"./nprogress.54513b29.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.a46c5e2c.js";import"./dayjs.6e4093f3.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.685915dd.js";import"./index.13c9a350.js";import"./index.vue_vue_type_script_setup_true_lang.2cd09ee2.js";import"./usePaging.5525c62f.js";import"./vue3-video-play.644a31d5.js";import"./vuedraggable.0d3cfcf0.js";import"./vue.71624a9c.js";import"./sortablejs.ea473bf9.js";const L={class:"website-information"},O={class:"w-80"},R=l("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),S=l("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),G=l("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),K=W("\u4FDD\u5B58"),ke=x({__name:"information",setup(M){const n=y(),e=j({name:"",web_favicon:"",web_logo:"",login_image:""}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}]},s=async()=>{const r=await h();for(const o in e)e[o]=r[o]},d=async()=>{var r;await((r=n.value)==null?void 0:r.validate()),await k(e),s()};return s(),(r,o)=>{const F=v,a=A,m=V,c=D,f=B,g=E,b=w,C=I("perms");return p(),U("div",L,[t(f,{shadow:"never",class:"!border-none"},{default:u(()=>[t(c,{ref_key:"formRef",ref:n,rules:_,class:"ls-form",model:e,"label-width":"120px"},{default:u(()=>[t(a,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[l("div",O,[t(F,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=i=>e.name=i),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(a,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:u(()=>[l("div",null,[t(m,{modelValue:e.web_favicon,"onUpdate:modelValue":o[1]||(o[1]=i=>e.web_favicon=i),limit:1},null,8,["modelValue"]),R])]),_:1}),t(a,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:u(()=>[l("div",null,[t(m,{modelValue:e.web_logo,"onUpdate:modelValue":o[2]||(o[2]=i=>e.web_logo=i),limit:1},null,8,["modelValue"]),S])]),_:1}),t(a,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:u(()=>[l("div",null,[t(m,{modelValue:e.login_image,"onUpdate:modelValue":o[3]||(o[3]=i=>e.login_image=i),limit:1},null,8,["modelValue"]),G])]),_:1})]),_:1},8,["model"])]),_:1}),q((p(),N(b,null,{default:u(()=>[t(g,{type:"primary",onClick:d},{default:u(()=>[K]),_:1})]),_:1})),[[C,["setting.web.web_setting/setWebsite"]]])])}}});export{ke as default};
