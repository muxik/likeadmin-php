import{d as e,c as t,r as a,a as n,o as r,b as o,w as l,e as i,n as s,f as c,i as u,g as d,h as p,j as m,k as f,l as g,t as y,F as b,m as h,p as v,S as x,q as _,u as k,s as C,v as S,x as w,y as j,z as P,A as I,B as O,C as L,D as N,E as R,G as B,H as T,I as $,J as M}from"./index.79c3669d.js";import{_ as F}from"./page-meta.d41892be.js";import{_ as z}from"./u-search.bfce0490.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as U}from"./u-image.33995e93.js";import{_ as Z}from"./news-card.eea3ac97.js";import{_ as J}from"./u-icon.fc3bf852.js";import{_ as Y}from"./tabbar.15e52cbb.js";import"./icon_visit.21b6ed3b.js";import"./u-badge.b77a4c81.js";var q=A(e({__name:"search",props:{pageMeta:{type:Object,default:()=>[]},content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},isLargeScreen:{type:Boolean},percent:{type:Number}},setup(e){const d=e;return t((()=>d.pageMeta[0].content)),(t,d)=>{const p=a(n("u-search"),z),m=u;return e.isLargeScreen?c("v-if",!0):(r(),o(m,{key:0,url:"/pages/search/search",class:"px-[24rpx] mt-[24rpx] mb-[30rpx]",style:s({opacity:1-e.percent}),"hover-class":"none"},{default:l((()=>[i(p,{placeholder:"请输入关键词搜索",height:72,disabled:!0,"show-action":!1,bgColor:"#ffffff"})])),_:1},8,["style"]))}}}),[["__scopeId","data-v-6be2acf8"]]);var D=A({name:"u-swiper",emits:["click","change"],props:{list:{type:Array,default:()=>[]},title:{type:Boolean,default:!1},indicator:{type:Object,default:()=>({})},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:()=>({})}},watch:{list(e,t){e.length!==t.length&&(this.uCurrent=0)},current(e){this.uCurrent=e}},data(){return{uCurrent:this.current}},computed:{justifyContent(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom(){let e=0;return"none"==this.mode?"12rpx":(e=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",e)},elCurrent(){return Number(this.current)}},methods:{listClick(e){this.$emit("click",e)},change(e){let t=e.detail.current;this.uCurrent=t,this.$emit("change",t)},animationfinish(e){}}},[["render",function(e,t,a,n,u,k){const C=h,S=v,w=x,j=_;return r(),o(S,{class:"u-swiper-wrap",style:s({borderRadius:`${a.borderRadius}rpx`})},{default:l((()=>[i(j,{current:k.elCurrent,onChange:k.change,onAnimationfinish:k.animationfinish,interval:a.interval,circular:a.circular,duration:a.duration,autoplay:a.autoplay,"previous-margin":a.effect3d?a.effect3dPreviousMargin+"rpx":"0","next-margin":a.effect3d?a.effect3dPreviousMargin+"rpx":"0",style:s({height:a.height+"rpx",backgroundColor:a.bgColor})},{default:l((()=>[(r(!0),d(b,null,p(a.list,((e,t)=>(r(),o(w,{class:"u-swiper-item",key:t},{default:l((()=>[i(S,{class:m(["u-list-image-wrap",[u.uCurrent!=t?"u-list-scale":""]]),onClick:f((e=>k.listClick(t)),["stop","prevent"]),style:s({borderRadius:`${a.borderRadius}rpx`,transform:a.effect3d&&u.uCurrent!=t?"scaleY(0.9)":"scaleY(1)",margin:a.effect3d&&u.uCurrent!=t?"0 20rpx":0})},{default:l((()=>[i(C,{class:"u-swiper-image",src:e[a.name]||e,mode:a.imgMode},null,8,["src","mode"]),a.title&&e.title?(r(),o(S,{key:0,class:"u-swiper-title u-line-1",style:s([{"padding-bottom":k.titlePaddingBottom},a.titleStyle])},{default:l((()=>[g(y(e.title),1)])),_:2},1032,["style"])):c("v-if",!0)])),_:2},1032,["onClick","class","style"])])),_:2},1024)))),128))])),_:1},8,["current","onChange","onAnimationfinish","interval","circular","duration","autoplay","previous-margin","next-margin","style"]),i(S,{class:"u-swiper-indicator",style:s({top:"topLeft"==a.indicatorPos||"topCenter"==a.indicatorPos||"topRight"==a.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==a.indicatorPos||"bottomCenter"==a.indicatorPos||"bottomRight"==a.indicatorPos?"12rpx":"auto",justifyContent:k.justifyContent,padding:"0 "+(a.effect3d?"74rpx":"24rpx")})},{default:l((()=>["rect"==a.mode?(r(!0),d(b,{key:0},p(a.list,((e,t)=>(r(),o(S,{class:m(["u-indicator-item-rect",{"u-indicator-item-rect-active":t==u.uCurrent}]),key:t},null,8,["class"])))),128)):c("v-if",!0),"dot"==a.mode?(r(!0),d(b,{key:1},p(a.list,((e,t)=>(r(),o(S,{class:m(["u-indicator-item-dot",{"u-indicator-item-dot-active":t==u.uCurrent}]),key:t},null,8,["class"])))),128)):c("v-if",!0),"round"==a.mode?(r(!0),d(b,{key:2},p(a.list,((e,t)=>(r(),o(S,{class:m(["u-indicator-item-round",{"u-indicator-item-round-active":t==u.uCurrent}]),key:t},null,8,["class"])))),128)):c("v-if",!0),"number"==a.mode?(r(),o(S,{key:3,class:"u-indicator-item-number"},{default:l((()=>[g(y(u.uCurrent+1)+"/"+y(a.list.length),1)])),_:1})):c("v-if",!0)])),_:1},8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-37003b61"]]);const E=e({__name:"l-swiper",props:{content:{default:{data:[]}},mode:{default:"round"},height:{default:"340"},indicatorPos:{default:"bottomCenter"},effect3d:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},interval:{default:"2500"},duration:{default:300},circular:{type:Boolean,default:!0},current:{default:0},name:{default:"image"},borderRadius:{default:"0"},bgColor:{default:"#f3f4f6"}},emits:["change"],setup(e,{emit:l}){const i=e,{getImageUrl:s}=k();C((()=>{var e;try{const t=null==i?void 0:i.content,a=null==(e=null==t?void 0:t.data)?void 0:e.length;if(!a)return;for(let e=0;e<a;e++){const a=t.data[e];a.image=s(a.image)}l("change",0)}catch(t){console.log("轮播图数据错误",t)}}));const u=t((()=>i.content.data||[]));S();const d=e=>{var t;const a=null==(t=i.content.data[e])?void 0:t.link;a&&j(a)},p=e=>{l("change",e)};return(t,l)=>{const i=a(n("u-swiper"),D);return w(u).length?(r(),o(i,{key:0,list:w(u),mode:e.mode,height:e.height,effect3d:e.effect3d,"indicator-pos":e.indicatorPos,autoplay:e.autoplay,interval:e.interval,circular:e.circular,borderRadius:e.borderRadius,current:e.current,name:e.name,"bg-color":e.bgColor,onClick:d,onChange:p},null,8,["list","mode","height","effect3d","indicator-pos","autoplay","interval","circular","borderRadius","current","name","bg-color"])):c("v-if",!0)}}}),G=e({__name:"banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},isLargeScreen:{type:Boolean}},emits:["change"],setup(e,{emit:t}){const a=e,{getImageUrl:n}=k(),s=e=>{t("change",n(a.content.data[e].bg))};return(t,a)=>{const n=v;return e.content.data.length&&e.content.enabled?(r(),o(n,{key:0,class:m(["banner translate-y-0",{"px-[20rpx]":!e.isLargeScreen}])},{default:l((()=>[i(E,{content:e.content,height:e.isLargeScreen?"980":"321",circular:!0,effect3d:!1,"border-radius":e.isLargeScreen?"0":"14",bgColor:"transparent",onChange:s},null,8,["content","height","border-radius"])])),_:1},8,["class"])):c("v-if",!0)}}}),H=e({__name:"nav",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const u=e,{getImageUrl:m}=k(),f=P(0),h=P([]),C=t((()=>u.content.per_line*u.content.show_line));I((()=>u.content.data),(e=>{const t=1===u.content.style?e.length:C.value;h.value=O(e,t),console.log(h.value)}),{deep:!0,immediate:!0});const S=e=>{f.value=e.detail.current};return(t,u)=>{const f=a(n("u-image"),U),k=v,C=x,P=_;return r(),d("div",{class:"relative mx-[30rpx] mt-[20rpx]"},[i(P,{class:"py-[20rpx] bg-white rounded-lg",style:s({height:h.value[0].length>e.content.per_line?"288rpx":"132rpx"}),autoplay:!1,"indicator-dots":!1,onChange:S},{default:l((()=>[(r(!0),d(b,null,p(h.value,((t,a)=>(r(),o(C,{key:a},{default:l((()=>[h.value.length&&e.content.enabled?(r(),o(k,{key:0,class:"nav"},{default:l((()=>[i(k,{class:"grid grid-rows-auto gap-y-3 w-full",style:s({"grid-template-columns":`repeat(${e.content.per_line}, 1fr)`})},{default:l((()=>[(r(!0),d(b,null,p(t,((e,t)=>(r(),o(k,{key:t,class:"flex flex-col items-center",onClick:t=>{return a=e.link,void j(a);var a}},{default:l((()=>[i(f,{width:"82",height:"82",src:w(m)(e.image),alt:""},null,8,["src"]),i(k,{class:"mt-[14rpx] text-xs"},{default:l((()=>[g(y(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1032,["style"])])),_:2},1024)):c("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["style"])])}}}),K=e({__name:"middle-banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const s=e,{getImageUrl:u}=k(),m=t((()=>{var e;return(null==(e=s.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(t,s)=>{const f=a(n("u-image"),U),g=x,y=_,h=v;return w(m).length&&e.content.enabled?(r(),o(h,{key:0,class:"banner h-[200rpx] mx-[20rpx] mt-[20rpx] translate-y-0"},{default:l((()=>[i(y,{class:"swiper h-full","indicator-dots":w(m).length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:l((()=>[(r(!0),d(b,null,p(w(m),((e,t)=>(r(),o(g,{key:t,onClick:t=>{return a=e.limk,void j(a);var a}},{default:l((()=>[i(f,{mode:"widthFix",width:"100%",height:"100%",src:w(u)(e.image),"border-radius":14},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):c("v-if",!0)}}});var Q=A({name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:()=>({color:"#909399",fontSize:"38rpx"})},customStyle:{type:Object,default:()=>({})}},watch:{showBackTop(e,t){e?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop(){return this.scrollTop>L(this.top)}},data:()=>({opacity:0,uZIndex:-1}),methods:{backToTop(){N({scrollTop:0,duration:this.duration})}}},[["render",function(e,t,c,u,d,p){const f=a(n("u-icon"),J),b=v;return r(),o(b,{onClick:p.backToTop,class:m(["u-back-top",["u-back-top--mode--"+c.mode]]),style:s([{bottom:c.bottom+"rpx",right:c.right+"rpx",borderRadius:"circle"==c.mode?"10000rpx":"8rpx",zIndex:d.uZIndex,opacity:d.opacity},c.customStyle])},{default:l((()=>[e.$slots.default||e.$slots.$default?R(e.$slots,"default",{key:1},void 0,!0):(r(),o(b,{key:0,class:"u-back-top__content"},{default:l((()=>[i(f,{onClick:p.backToTop,name:c.icon,"custom-style":c.iconStyle},null,8,["onClick","name","custom-style"]),i(b,{class:"u-back-top__content__tips"},{default:l((()=>[g(y(c.tips),1)])),_:1})])),_:1}))])),_:3},8,["onClick","class","style"])}],["__scopeId","data-v-59f326b7"]]);var V=A(e({__name:"index",setup(e){const u=B({pages:[],meta:[],article:[],bannerImage:""}),m=P(0),f=P(0),y=t((()=>{var e;return 1===(null==(e=u.pages.find((e=>"banner"===e.name)))?void 0:e.content.bg_style)})),h=t((()=>{var e;return 2===(null==(e=u.pages.find((e=>"banner"===e.name)))?void 0:e.content.style)})),x=t((()=>{var e,t;const{bg_type:a,bg_color:n,bg_image:r}=null!=(t=null==(e=u.meta[0])?void 0:e.content)?t:{};return y.value?{"background-image":`url(${u.bannerImage})`}:1==a?{"background-color":n}:{"background-image":`url(${r})`}})),_=e=>{u.bannerImage=e};return T((e=>{m.value=e.scrollTop;const t=L(100);f.value=e.scrollTop/t>1?1:e.scrollTop/t})),$((()=>{(async()=>{var e,t;const a=await M();u.pages=JSON.parse(null==(e=null==a?void 0:a.page)?void 0:e.data),u.meta=JSON.parse(null==(t=null==a?void 0:a.page)?void 0:t.meta),u.article=a.article})()})),(e,t)=>{const y=a(n("page-meta"),F),k=a(n("w-search"),q),C=a(n("w-banner"),G),S=a(n("w-nav"),H),j=a(n("w-middle-banner"),K),P=v,I=a(n("news-card"),Z),O=a(n("u-back-top"),Q),L=a(n("tabbar"),Y);return r(),d(b,null,[i(y,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),i(P,{class:"index",style:s(w(x))},{default:l((()=>[c(" 组件 "),(r(!0),d(b,null,p(u.pages,((e,t)=>(r(),d(b,{key:t},["search"==e.name?(r(),o(k,{key:0,pageMeta:u.meta,content:e.content,styles:e.styles,percent:f.value,isLargeScreen:w(h)},null,8,["pageMeta","content","styles","percent","isLargeScreen"])):c("v-if",!0),"banner"==e.name?(r(),o(C,{key:1,content:e.content,styles:e.styles,isLargeScreen:w(h),onChange:_},null,8,["content","styles","isLargeScreen"])):c("v-if",!0),"nav"==e.name?(r(),o(S,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):c("v-if",!0),"middle-banner"==e.name?(r(),o(j,{key:3,content:e.content,styles:e.styles},null,8,["content","styles"])):c("v-if",!0)],64)))),128)),u.article.length?(r(),o(P,{key:0,class:"article"},{default:l((()=>[i(P,{class:"flex items-center article-title mx-[20rpx] my-[30rpx] text-lg font-medium"},{default:l((()=>[g(" 最新资讯 ")])),_:1}),(r(!0),d(b,null,p(u.article,(e=>(r(),o(I,{key:e.id,"news-id":e.id,item:e},null,8,["news-id","item"])))),128))])),_:1})):c("v-if",!0),c(" 返回顶部按钮 "),i(O,{"scroll-top":m.value,top:100,customStyle:{backgroundColor:"#FFF",color:"#000",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.1)"}},null,8,["scroll-top","customStyle"]),i(L)])),_:1},8,["style"])],64)}}}),[["__scopeId","data-v-2d90a25c"]]);export{V as default};
