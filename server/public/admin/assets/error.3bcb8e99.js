import{t as c}from"./element-plus.32724f3c.js";import{a as l}from"./vue-router.4c2c9e7d.js";import{d as u,r as d,G as _,o as n,c as f,a as r,T as i,K as v,L as B,S as g,u as h,R as y}from"./@vue.67e62321.js";import{d as E}from"./index.fb421b84.js";import"./@vueuse.4608b35b.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./@element-plus.1892f8d7.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.45d0690c.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.54513b29.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.a46c5e2c.js";const x={class:"error"},k={class:"error-code"},w={class:"lg lighter mt-7 mb-7"},C=u({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const m=t;let o=null;const e=d(5),s=l();return m.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),_(()=>{o&&clearInterval(o)}),(D,a)=>{const p=c;return n(),f("div",x,[r("div",null,[r("div",k,i(t.code),1),r("div",w,i(t.title),1),t.showBtn?(n(),v(p,{key:0,type:"primary",onClick:a[0]||(a[0]=I=>h(s).go(-1))},{default:B(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):y("",!0)])])}}});const ot=E(C,[["__scopeId","data-v-e6ff9c50"]]);export{ot as default};
