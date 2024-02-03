import{C as _,ai as B,D as L,aa as $,ab as l,a as y,O as A,r as S,G as I,M as P,at as k,H as z,o as E,h as N,Z as T,u as i,c as O,k as K,ac as Y,T as j,Y as g,R as D,a1 as v,a5 as F,L as h,a2 as R,I as J,K as G,aG as u}from"./entry.606e70b4.js";import{u as U,a as b}from"./index.ff1be561.js";const V=_({size:{type:[Number,String],values:B,default:"",validator:t=>L(t)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:$},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:l(String),default:"cover"}}),q={error:t=>t instanceof Event},H=["src","alt","srcset"],x=y({name:"ElAvatar"}),W=y({...x,props:V,emits:q,setup(t,{emit:c}){const a=t,o=A("avatar"),n=S(!1),d=I(()=>{const{size:e,icon:r,shape:s}=a,m=[o.b()];return P(e)&&m.push(o.m(e)),r&&m.push(o.m("icon")),s&&m.push(o.m(s)),m}),C=I(()=>{const{size:e}=a;return L(e)?o.cssVarBlock({size:k(e)||""}):void 0}),f=I(()=>({objectFit:a.fit}));z(()=>a.src,()=>n.value=!1);function p(e){n.value=!0,c("error",e)}return(e,r)=>(E(),N("span",{class:D(i(d)),style:T(i(C))},[(e.src||e.srcSet)&&!n.value?(E(),N("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:T(i(f)),onError:p},null,44,H)):e.icon?(E(),O(i(j),{key:1},{default:K(()=>[(E(),O(Y(e.icon)))]),_:1})):g(e.$slots,"default",{key:2})],6))}});var Z=v(W,[["__file","avatar.vue"]]);const pe=F(Z),Q=y({inheritAttrs:!1});function X(t,c,a,o,n,d){return g(t.$slots,"default")}var ee=v(Q,[["render",X],["__file","collection.vue"]]);const te=y({name:"ElCollectionItem",inheritAttrs:!1});function oe(t,c,a,o,n,d){return g(t.$slots,"default")}var se=v(te,[["render",oe],["__file","collection-item.vue"]]);const ae="data-el-collection-item",ne=t=>{const c=`El${t}Collection`,a=`${c}Item`,o=Symbol(c),n=Symbol(a),d={...ee,name:c,setup(){const f=S(null),p=new Map;h(o,{itemMap:p,getItems:()=>{const r=i(f);if(!r)return[];const s=Array.from(r.querySelectorAll(`[${ae}]`));return[...p.values()].sort((M,w)=>s.indexOf(M.ref)-s.indexOf(w.ref))},collectionRef:f})}},C={...se,name:a,setup(f,{attrs:p}){const e=S(null),r=R(o,void 0);h(n,{collectionItemRef:e}),J(()=>{const s=i(e);s&&r.itemMap.set(s,{ref:s,...p})}),G(()=>{const s=i(e);r.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:n,ElCollection:d,ElCollectionItem:C}},ue=_({trigger:U.trigger,effect:{...b.effect,default:"light"},type:{type:l(String)},placement:{type:l(String),default:"bottom"},popperOptions:{type:l(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:l([Number,String]),default:0},maxHeight:{type:l([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:l(Object)},teleported:b.teleported}),de=_({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:$}}),fe=_({onKeydown:{type:l(Function)}}),re=[u.down,u.pageDown,u.home],le=[u.up,u.pageUp,u.end],me=[...re,...le],{ElCollection:Ee,ElCollectionItem:_e,COLLECTION_INJECTION_KEY:ye,COLLECTION_ITEM_INJECTION_KEY:Ce}=ne("Dropdown");export{Ce as C,pe as E,me as F,le as L,Ee as a,de as b,ne as c,ue as d,ae as e,_e as f,fe as g,ye as h};
