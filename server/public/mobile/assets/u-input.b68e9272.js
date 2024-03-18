import{r as e,a as t,o as l,b as o,w as a,n as i,e as n,f as r,j as u,k as s,at as c,T as d,p}from"./index.79c3669d.js";import{_ as h}from"./u-icon.fc3bf852.js";import{E as m}from"./emitter.5b880544.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";var g=f({name:"u-input",emits:["update:modelValue","input","change","blur","focus","click","touchstart"],mixins:[m],props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:""},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:()=>({})},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:[Boolean,String]},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0},backgroundColor:{type:String},padding:{type:String}},data:()=>({defaultValue:"",inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:"",uForm:{inputAlign:"",clearable:""}}),watch:{valueCom(e,t){this.defaultValue=e,e!=t&&"select"==this.type&&this.handleInput({detail:{value:e}})}},computed:{valueCom(){return this.modelValue},inputAlignCom(){return this.inputAlign||this.uForm.inputAlign||"left"},clearableCom(){return"boolean"==typeof this.clearable?this.clearable:"boolean"!=typeof this.uForm.clearable||this.uForm.clearable},inputMaxlength(){return Number(this.maxlength)},getStyle(){let e={};return e.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",e=Object.assign(e,this.customStyle),e},getCursorSpacing(){return Number(this.cursorSpacing)},uSelectionStart(){return String(this.selectionStart)},uSelectionEnd(){return String(this.selectionEnd)}},created(){this.defaultValue=this.valueCom},mounted(){let e=this.$u.$parent.call(this,"u-form");e&&Object.keys(this.uForm).map((t=>{this.uForm[t]=e[t]}))},methods:{handleInput(e){let t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t),this.$emit("update:modelValue",t),this.defaultValue=t,setTimeout((()=>{this.dispatch("u-form-item","onFieldChange",t)}),40)},handleBlur(e){setTimeout((()=>{this.focused=!1}),100),this.$emit("blur",e.detail.value),setTimeout((()=>{this.dispatch("u-form-item","onFieldBlur",e.detail.value)}),40)},onFormItemError(e){this.validateState=e},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",e.detail.value)},onClear(e){this.$emit("input",""),this.$emit("update:modelValue","")},inputClick(){this.$emit("click")}}},[["render",function(m,f,g,y,S,b){const _=c,C=d,x=e(t("u-icon"),h),v=p;return l(),o(v,{class:u(["u-input",{"u-input--border":g.border,"u-input--error":S.validateState}]),style:i({padding:g.padding?g.padding:`0 ${g.border?20:0}rpx`,borderColor:g.borderColor,textAlign:b.inputAlignCom,backgroundColor:g.backgroundColor}),onClick:s(b.inputClick,["stop"])},{default:a((()=>["textarea"==g.type?(l(),o(_,{key:0,class:"u-input__input u-input__textarea",style:i([b.getStyle]),value:S.defaultValue,placeholder:g.placeholder,placeholderStyle:g.placeholderStyle,disabled:g.disabled,maxlength:b.inputMaxlength,fixed:g.fixed,focus:g.focus,autoHeight:g.autoHeight,"selection-end":b.uSelectionEnd,"selection-start":b.uSelectionStart,"cursor-spacing":b.getCursorSpacing,onInput:b.handleInput,onBlur:b.handleBlur,onFocus:b.onFocus,onConfirm:b.onConfirm},null,8,["style","value","placeholder","placeholderStyle","disabled","maxlength","fixed","focus","autoHeight","selection-end","selection-start","cursor-spacing","onInput","onBlur","onFocus","onConfirm"])):(l(),o(C,{key:1,class:"u-input__input",type:"password"==g.type?"text":g.type,style:i([b.getStyle]),value:S.defaultValue,password:"password"==g.type&&!S.showPassword,placeholder:g.placeholder,placeholderStyle:g.placeholderStyle,disabled:g.disabled||"select"===g.type,maxlength:b.inputMaxlength,focus:g.focus,confirmType:g.confirmType,"cursor-spacing":b.getCursorSpacing,"selection-end":b.uSelectionEnd,"selection-start":b.uSelectionStart,onFocus:b.onFocus,onBlur:b.handleBlur,onInput:b.handleInput,onConfirm:b.onConfirm},null,8,["type","style","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","selection-end","selection-start","onFocus","onBlur","onInput","onConfirm"])),n(v,{class:"u-input__right-icon u-flex"},{default:a((()=>[b.clearableCom&&""!=b.valueCom&&S.focused?(l(),o(v,{key:0,class:"u-input__right-icon__clear u-input__right-icon__item",onClick:b.onClear},{default:a((()=>[n(x,{size:"32",name:"close-circle-fill",color:"#c0c4cc"})])),_:1},8,["onClick"])):r("v-if",!0),g.passwordIcon&&"password"==g.type?(l(),o(v,{key:1,class:"u-input__right-icon__clear u-input__right-icon__item"},{default:a((()=>[n(x,{size:"32",name:S.showPassword?"eye-fill":"eye",color:"#c0c4cc",onClick:f[0]||(f[0]=e=>S.showPassword=!S.showPassword)},null,8,["name"])])),_:1})):r("v-if",!0),"select"==g.type?(l(),o(v,{key:2,class:u(["u-input__right-icon--select u-input__right-icon__item",{"u-input__right-icon--select--reverse":g.selectOpen}])},{default:a((()=>[n(x,{name:"arrow-down-fill",size:"26",color:"#c0c4cc"})])),_:1},8,["class"])):r("v-if",!0)])),_:1})])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-40b2398e"]]);export{g as _};
