import{_ as a}from"./u-loading.f498bd1f.js";import{d as s,a$ as t,x as e,o,b as r,w as u,j as p,E as d,p as i,f,e as l,r as n,a as y,a2 as c}from"./index.b2ed7cc4.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";var m=g(s({__name:"page-status",props:{status:{type:String,default:t.LOADING},fixed:{type:Boolean,default:!0}},setup:s=>(c,g)=>{const m=n(y("u-loading"),a),v=i;return s.status!==e(t).NORMAL?(o(),r(v,{key:0,class:p(["page-status",{"page-status--fixed":s.fixed}])},{default:u((()=>[f(" Loading "),s.status===e(t).LOADING?d(c.$slots,"loading",{key:0},(()=>[l(m,{size:60,mode:"flower"})]),!0):f("v-if",!0),f(" Error "),s.status===e(t).ERROR?d(c.$slots,"error",{key:1},void 0,!0):f("v-if",!0),f(" Empty "),s.status===e(t).EMPTY?d(c.$slots,"empty",{key:2},void 0,!0):f("v-if",!0)])),_:3},8,["class"])):d(c.$slots,"default",{key:1},void 0,!0)}}),[["__scopeId","data-v-e456cece"]]);function v(a){return c.get({url:"/pay/payWay",data:a},{isAuth:!0})}function _(a){return c.post({url:"/pay/prepay",data:a},{isAuth:!0})}function x(a){return c.get({url:"/pay/payStatus",data:a},{isAuth:!0})}export{m as _,v as a,x as g,_ as p};
