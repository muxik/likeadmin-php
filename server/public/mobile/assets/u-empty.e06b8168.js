import{_ as e}from"./u-icon.fce5c7bf.js";import{r as t,a as o,o as a,b as r,w as s,e as i,E as l,n as c,f as n,p}from"./index.29acdabd.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";var u=d({name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:()=>({})}},data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}})},[["render",function(d,u,m,f,y,g){const b=t(o("u-icon"),e),S=p;return m.show?(a(),r(S,{key:0,class:"u-empty",style:c({marginTop:m.marginTop+"rpx"})},{default:s((()=>[i(b,{name:m.src?m.src:"empty-"+m.mode,"custom-style":m.iconStyle,label:m.text?m.text:y.icons[m.mode],"label-pos":"bottom","label-color":m.color,"label-size":m.fontSize,size:m.iconSize,color:m.iconColor,"margin-top":"14"},null,8,["name","custom-style","label","label-color","label-size","size","color"]),i(S,{class:"u-slot-wrap"},{default:s((()=>[l(d.$slots,"bottom",{},void 0,!0)])),_:3})])),_:3},8,["style"])):n("v-if",!0)}],["__scopeId","data-v-582d610a"]]);export{u as _};
