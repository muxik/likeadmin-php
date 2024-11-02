import{o as t,b as i,w as e,n as s,j as o,f as l,l as n,t as a,m as c,a3 as r,p as u}from"./index-561dd99e.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const d=h({name:"u-icon",emits:["click","touchstart"],props:{name:{type:String,default:""},color:{type:String,default:""},size:{type:[Number,String],default:"inherit"},bold:{type:Boolean,default:!1},index:{type:[Number,String],default:""},hoverClass:{type:String,default:""},customPrefix:{type:String,default:"uicon"},label:{type:[String,Number],default:""},labelPos:{type:String,default:"right"},labelSize:{type:[String,Number],default:"28"},labelColor:{type:String,default:"#606266"},marginLeft:{type:[String,Number],default:"6"},marginTop:{type:[String,Number],default:"6"},marginRight:{type:[String,Number],default:"6"},marginBottom:{type:[String,Number],default:"6"},imgMode:{type:String,default:"widthFix"},customStyle:{type:Object,default:()=>({})},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},top:{type:[String,Number],default:0},showDecimalIcon:{type:Boolean,default:!1},inactiveColor:{type:String,default:"#ececec"},percent:{type:[Number,String],default:"50"}},computed:{customClass(){let t=[],{customPrefix:i,name:e}=this,s=e.indexOf("-icon-");return s>-1?(i=e.substring(0,s+5),t.push(e)):t.push(`${i}-${e}`),"uicon"===i?t.push("u-iconfont"):t.push(i),this.showDecimalIcon&&this.inactiveColor&&this.$u.config.type.includes(this.inactiveColor)?t.push("u-icon__icon--"+this.inactiveColor):this.color&&this.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle(){let t={};return t={fontSize:"inherit"==this.size?"inherit":this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.showDecimalIcon&&this.inactiveColor&&!this.$u.config.type.includes(this.inactiveColor)?t.color=this.inactiveColor:this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg(){return-1!==this.name.indexOf("/")},imgStyle(){let t={};return t.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),t.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),t},decimalIconStyle(){let t={};return t={fontSize:"inherit"==this.size?"inherit":this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top),width:this.percent+"%"},this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},decimalIconClass(){let t=[];return t.push(this.customPrefix+"-"+this.name),"uicon"==this.customPrefix?t.push("u-iconfont"):t.push(this.customPrefix),this.color&&this.$u.config.type.includes(this.color)?t.push("u-icon__icon--"+this.color):t.push("u-icon__icon--primary"),t}},methods:{click(){this.$emit("click",this.index)},touchstart(){this.$emit("touchstart",this.index)}}},[["render",function(h,d,m,p,g,f){const y=c,b=r,S=u;return t(),i(S,{style:s([m.customStyle]),class:o(["u-icon",["u-icon--"+m.labelPos]]),onClick:f.click},{default:e((()=>[f.isImg?(t(),i(y,{key:0,class:"u-icon__img",src:m.name,mode:m.imgMode,style:s([f.imgStyle])},null,8,["src","mode","style"])):(t(),i(S,{key:1,class:o(["u-icon__icon",f.customClass]),style:s([f.iconStyle]),"hover-class":m.hoverClass,onTouchstart:f.touchstart},{default:e((()=>[m.showDecimalIcon?(t(),i(b,{key:0,style:s([f.decimalIconStyle]),class:o([f.decimalIconClass,"u-icon__decimal"]),"hover-class":m.hoverClass},null,8,["style","class","hover-class"])):l("v-if",!0)])),_:1},8,["class","style","hover-class","onTouchstart"])),l(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示，微信小程序不传值默认为null，故需要增加null的判断 '),""!==m.label&&null!==m.label?(t(),i(b,{key:2,class:"u-icon__label",style:s({color:m.labelColor,fontSize:h.$u.addUnit(m.labelSize),marginLeft:"right"==m.labelPos?h.$u.addUnit(m.marginLeft):0,marginTop:"bottom"==m.labelPos?h.$u.addUnit(m.marginTop):0,marginRight:"left"==m.labelPos?h.$u.addUnit(m.marginRight):0,marginBottom:"top"==m.labelPos?h.$u.addUnit(m.marginBottom):0})},{default:e((()=>[n(a(m.label),1)])),_:1},8,["style"])):l("v-if",!0)])),_:1},8,["style","onClick","class"])}],["__scopeId","data-v-ee9d516c"]]);export{d as _};
