import{r as e,a as t,o as r,b as i,w as n,e as a,f as s,n as l,l as o,t as u,E as f,j as d,P as p,p as h}from"./index.79c3669d.js";import{_ as c}from"./u-icon.fc3bf852.js";import{E as g}from"./emitter.5b880544.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},m.apply(this,arguments)}var b=/%[sdj%]/g,v=function(){};function q(e){if(!e||!e.length)return null;var t={};return e.forEach((function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)})),t}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=1,n=t[0],a=t.length;if("function"==typeof n)return n.apply(null,t.slice(1));if("string"==typeof n){for(var s=String(n).replace(b,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})),l=t[i];i<a;l=t[++i])s+=" "+l;return s}return n}function x(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function _(e,t,r){var i=0,n=e.length;!function a(s){if(s&&s.length)r(s);else{var l=i;i+=1,l<n?t(e[l],a):r([])}}([])}function O(e,t,r,i){if(t.first){var n=new Promise((function(t,n){var a=function(e){var t=[];return Object.keys(e).forEach((function(r){t.push.apply(t,e[r])})),t}(e);_(a,r,(function(e){return i(e),e.length?n({errors:e,fields:q(e)}):t()}))}));return n.catch((function(e){return e})),n}var a=t.firstFields||[];!0===a&&(a=Object.keys(e));var s=Object.keys(e),l=s.length,o=0,u=[],f=new Promise((function(t,n){var f=function(e){if(u.push.apply(u,e),++o===l)return i(u),u.length?n({errors:u,fields:q(u)}):t()};s.length||(i(u),t()),s.forEach((function(t){var i=e[t];-1!==a.indexOf(t)?_(i,r,f):function(e,t,r){var i=[],n=0,a=e.length;function s(e){i.push.apply(i,e),++n===a&&r(i)}e.forEach((function(e){t(e,s)}))}(i,r,f)}))}));return f.catch((function(e){return e})),f}function A(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function S(e,t){if(t)for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];"object"==typeof i&&"object"==typeof e[r]?e[r]=m({},e[r],{},i):e[r]=i}return e}function j(e,t,r,i,n,a){!e.required||r.hasOwnProperty(e.field)&&!x(t,a||e.type)||i.push(w(n.messages.required,e.fullField))}"undefined"!=typeof process&&process.env;var P={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},F={integer:function(e){return F.number(e)&&parseInt(e,10)===e},float:function(e){return F.number(e)&&!F.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!F.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(P.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(P.url)},hex:function(e){return"string"==typeof e&&!!e.match(P.hex)}};var E={required:j,whitespace:function(e,t,r,i,n){(/^\s+$/.test(t)||""===t)&&i.push(w(n.messages.whitespace,e.fullField))},type:function(e,t,r,i,n){if(e.required&&void 0===t)j(e,t,r,i,n);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?F[a](t)||i.push(w(n.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&i.push(w(n.messages.types[a],e.fullField,e.type))}},range:function(e,t,r,i,n){var a="number"==typeof e.len,s="number"==typeof e.min,l="number"==typeof e.max,o=t,u=null,f="number"==typeof t,d="string"==typeof t,p=Array.isArray(t);if(f?u="number":d?u="string":p&&(u="array"),!u)return!1;p&&(o=t.length),d&&(o=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&i.push(w(n.messages[u].len,e.fullField,e.len)):s&&!l&&o<e.min?i.push(w(n.messages[u].min,e.fullField,e.min)):l&&!s&&o>e.max?i.push(w(n.messages[u].max,e.fullField,e.max)):s&&l&&(o<e.min||o>e.max)&&i.push(w(n.messages[u].range,e.fullField,e.min,e.max))},enum:function(e,t,r,i,n){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(t)&&i.push(w(n.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,t,r,i,n){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(w(n.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||i.push(w(n.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function D(e,t,r,i,n){var a=e.type,s=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t,a)&&!e.required)return r();E.required(e,t,i,s,n,a),x(t,a)||E.type(e,t,i,s,n)}r(s)}var I={string:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t,"string")&&!e.required)return r();E.required(e,t,i,a,n,"string"),x(t,"string")||(E.type(e,t,i,a,n),E.range(e,t,i,a,n),E.pattern(e,t,i,a,n),!0===e.whitespace&&E.whitespace(e,t,i,a,n))}r(a)},method:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&E.type(e,t,i,a,n)}r(a)},number:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(""===t&&(t=void 0),x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&(E.type(e,t,i,a,n),E.range(e,t,i,a,n))}r(a)},boolean:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&E.type(e,t,i,a,n)}r(a)},regexp:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),x(t)||E.type(e,t,i,a,n)}r(a)},integer:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&(E.type(e,t,i,a,n),E.range(e,t,i,a,n))}r(a)},float:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&(E.type(e,t,i,a,n),E.range(e,t,i,a,n))}r(a)},array:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t,"array")&&!e.required)return r();E.required(e,t,i,a,n,"array"),x(t,"array")||(E.type(e,t,i,a,n),E.range(e,t,i,a,n))}r(a)},object:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&E.type(e,t,i,a,n)}r(a)},enum:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n),void 0!==t&&E.enum(e,t,i,a,n)}r(a)},pattern:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t,"string")&&!e.required)return r();E.required(e,t,i,a,n),x(t,"string")||E.pattern(e,t,i,a,n)}r(a)},date:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();var s;if(E.required(e,t,i,a,n),!x(t))s="number"==typeof t?new Date(t):t,E.type(e,s,i,a,n),s&&E.range(e,s.getTime(),i,a,n)}r(a)},url:D,hex:D,email:D,required:function(e,t,r,i,n){var a=[],s=Array.isArray(t)?"array":typeof t;E.required(e,t,i,a,n,s),r(a)},any:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(x(t)&&!e.required)return r();E.required(e,t,i,a,n)}r(a)}};function k(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var L=k();function B(e){this.rules=null,this._messages=L,this.define(e)}B.prototype={messages:function(e){return e&&(this._messages=S(k(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){var i=this;void 0===t&&(t={}),void 0===r&&(r=function(){});var n,a,s=e,l=t,o=r;if("function"==typeof l&&(o=l,l={}),!this.rules||0===Object.keys(this.rules).length)return o&&o(),Promise.resolve();if(l.messages){var u=this.messages();u===L&&(u=k()),S(u,l.messages),l.messages=u}else l.messages=this.messages();var f={};(l.keys||Object.keys(this.rules)).forEach((function(t){n=i.rules[t],a=s[t],n.forEach((function(r){var n=r;"function"==typeof n.transform&&(s===e&&(s=m({},s)),a=s[t]=n.transform(a)),(n="function"==typeof n?{validator:n}:m({},n)).validator=i.getValidationMethod(n),n.field=t,n.fullField=n.fullField||t,n.type=i.getType(n),n.validator&&(f[t]=f[t]||[],f[t].push({rule:n,value:a,source:s,field:t}))}))}));var d={};return O(f,l,(function(e,t){var r,i=e.rule,n=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function a(e,t){return m({},t,{fullField:i.fullField+"."+e})}function s(r){void 0===r&&(r=[]);var s=r;if(Array.isArray(s)||(s=[s]),!l.suppressWarning&&s.length&&B.warning("async-validator:",s),s.length&&i.message&&(s=[].concat(i.message)),s=s.map(A(i)),l.first&&s.length)return d[i.field]=1,t(s);if(n){if(i.required&&!e.value)return s=i.message?[].concat(i.message).map(A(i)):l.error?[l.error(i,w(l.messages.required,i.field))]:[],t(s);var o={};if(i.defaultField)for(var u in e.value)e.value.hasOwnProperty(u)&&(o[u]=i.defaultField);for(var f in o=m({},o,{},e.rule.fields))if(o.hasOwnProperty(f)){var p=Array.isArray(o[f])?o[f]:[o[f]];o[f]=p.map(a.bind(null,f))}var h=new B(o);h.messages(l.messages),e.rule.options&&(e.rule.options.messages=l.messages,e.rule.options.error=l.error),h.validate(e.value,e.rule.options||l,(function(e){var r=[];s&&s.length&&r.push.apply(r,s),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(s)}n=n&&(i.required||!i.required&&e.value),i.field=e.field,i.asyncValidator?r=i.asyncValidator(i,e.value,s,e.source,l):i.validator&&(!0===(r=i.validator(i,e.value,s,e.source,l))?s():!1===r?s(i.message||i.field+" fails"):r instanceof Array?s(r):r instanceof Error&&s(r.message)),r&&r.then&&r.then((function(){return s()}),(function(e){return s(e)}))}),(function(e){!function(e){var t,r,i,n=[],a={};for(t=0;t<e.length;t++)r=e[t],i=void 0,Array.isArray(r)?n=(i=n).concat.apply(i,r):n.push(r);n.length?a=q(n):(n=null,a=null),o(n,a)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!I.hasOwnProperty(e.type))throw new Error(w("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?I.required:I[this.getType(e)]||!1}},B.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");I[e]=t},B.warning=v,B.messages=L;B.warning=function(){};var R=y({name:"u-form-item",mixins:[g],inject:{uForm:{default:()=>null}},props:{label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:[String,Boolean],default:""},labelPosition:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelStyle:{type:Object,default:()=>({})},labelAlign:{type:String,default:""},rightIcon:{type:String,default:""},leftIcon:{type:String,default:""},leftIconStyle:{type:Object,default:()=>({})},rightIconStyle:{type:Object,default:()=>({})},required:{type:Boolean,default:!1},inputAlign:{type:String,default:""}},data:()=>({initialValue:"",validateState:"",validateMessage:"",errorType:["message"],fieldValue:"",parentData:{borderBottom:!0,labelWidth:90,labelPosition:"left",labelStyle:{},labelAlign:"left",inputAlign:"left"}}),watch:{validateState(e){this.broadcastInputError()},"uForm.errorType"(e){this.errorType=e,this.broadcastInputError()}},computed:{uLabelWidth(){return"left"==this.elLabelPosition?"true"===this.label||""===this.label?"auto":this.$u.addUnit(this.elLabelWidth):"100%"},showError(){return e=>!(this.errorType.indexOf("none")>=0)&&this.errorType.indexOf(e)>=0},elLabelWidth(){return 0!=this.labelWidth||""!=this.labelWidth?this.labelWidth:this.parentData.labelWidth?this.parentData.labelWidth:90},elLabelStyle(){return Object.keys(this.labelStyle).length?this.labelStyle:this.parentData.labelStyle?this.parentData.labelStyle:{}},elLabelPosition(){return this.labelPosition?this.labelPosition:this.parentData.labelPosition?this.parentData.labelPosition:"left"},elLabelAlign(){return this.labelAlign?this.labelAlign:this.parentData.labelAlign?this.parentData.labelAlign:"left"},elBorderBottom(){return""!==this.borderBottom?this.borderBottom:!this.parentData.borderBottom||this.parentData.borderBottom},elInputAlign(){return this.inputAlign?this.inputAlign:this.parentData.inputAlign?this.parentData.inputAlign:"left"}},methods:{broadcastInputError(){this.broadcast("u-input","onFormItemError","error"===this.validateState&&this.showError("border"))},setRules(){},getRules(){let e=this.parent.rules;return e=e?e[this.prop]:[],[].concat(e||[])},onFieldBlur(){this.validation("blur")},onFieldChange(){this.validation("change")},getFilteredRule(e=""){let t=this.getRules();return e?t.filter((t=>t.trigger&&-1!==t.trigger.indexOf(e))):t},getData(e,t,r){let i;if(e){i=JSON.parse(JSON.stringify(e));let r="",n=".",a="[",s="]";t=t.replace(/\s+/g,r)+n;let l=r;for(let e=0;e<t.length;e++){let o=t.charAt(e);o!=n&&o!=a&&o!=s?l+=o:i&&(l!=r&&(i=i[l]),l=r)}}return void 0===i&&void 0!==r&&(i=r),i},setData(e,t,r){let i;i="object"==typeof r?JSON.parse(JSON.stringify(r)):r;let n=new RegExp("([\\w$]+)|\\[(:\\d)\\]","g");const a=t.match(n);for(let s=0;s<a.length-1;s++){let t=a[s];"object"!=typeof e[t]&&(e[t]={}),e=e[t]}e[a[a.length-1]]=i},validation(e,t=(()=>{})){this.fieldValue=this.getData(this.parent.model,this.prop);let r=this.getFilteredRule(e);if(!r||0===r.length)return t("");this.validateState="validating",new B({[this.prop]:r}).validate({[this.prop]:this.fieldValue},{firstFields:!0},((e,r)=>{this.validateState=e?"error":"success",this.validateMessage=e?e[0].message:"";let i=e?e[0].field:"";t(this.validateMessage,{state:this.validateState,key:i,msg:this.validateMessage})}))},resetField(){this.setData(this.parent.model,this.prop,this.initialValue),this.validateState="success"}},mounted(){this.parent=this.$u.$parent.call(this,"u-form"),this.parent&&(Object.keys(this.parentData).map((e=>{this.parentData[e]=this.parent[e]})),this.prop&&(this.parent.fields.push(this),this.errorType=this.parent.errorType,this.initialValue=this.fieldValue,this.$nextTick((()=>{this.setRules()}))))},beforeUnmount(){this.parent&&this.prop&&this.parent.fields.map(((e,t)=>{e===this&&this.parent.fields.splice(t,1)}))}},[["render",function(g,y,m,b,v,q){const w=p,x=e(t("u-icon"),c),_=h;return r(),i(_,{class:d(["u-form-item",{"u-border-bottom":q.elBorderBottom,"u-form-item__border-bottom--error":"error"===v.validateState&&q.showError("border-bottom")}])},{default:n((()=>[a(_,{class:"u-form-item__body",style:l({flexDirection:"left"==q.elLabelPosition?"row":"column"})},{default:n((()=>[s(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),a(_,{class:"u-form-item--left",style:l({width:q.uLabelWidth,flex:`0 0 ${q.uLabelWidth}`,marginBottom:"left"==q.elLabelPosition?0:"10rpx"})},{default:n((()=>[s(" 为了块对齐 "),m.required||m.leftIcon||m.label?(r(),i(_,{key:0,class:"u-form-item--left__content"},{default:n((()=>[s(" nvue不支持伪元素before "),m.required?(r(),i(w,{key:0,class:"u-form-item--left__content--required"},{default:n((()=>[o("*")])),_:1})):s("v-if",!0),m.leftIcon?(r(),i(_,{key:1,class:"u-form-item--left__content__icon"},{default:n((()=>[a(x,{name:m.leftIcon,"custom-style":m.leftIconStyle},null,8,["name","custom-style"])])),_:1})):s("v-if",!0),a(_,{class:"u-form-item--left__content__label",style:l([q.elLabelStyle,{"justify-content":"left"==q.elLabelAlign?"flex-start":"center"==q.elLabelAlign?"center":"flex-end"}])},{default:n((()=>[o(u(m.label),1)])),_:1},8,["style"])])),_:1})):s("v-if",!0)])),_:1},8,["style"]),a(_,{class:"u-form-item--right u-flex"},{default:n((()=>[a(_,{class:"u-form-item--right__content"},{default:n((()=>[a(_,{class:"u-form-item--right__content__slot",style:l("left"==q.elLabelPosition&&"right"==q.elInputAlign?"text-align:right;display: inline-block;line-height:initial;":"")},{default:n((()=>[f(g.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),g.$slots.right||m.rightIcon?(r(),i(_,{key:0,class:"u-form-item--right__content__icon u-flex"},{default:n((()=>[m.rightIcon?(r(),i(x,{key:0,"custom-style":m.rightIconStyle,name:m.rightIcon},null,8,["custom-style","name"])):s("v-if",!0),f(g.$slots,"right",{},void 0,!0)])),_:3})):s("v-if",!0)])),_:3})])),_:3})])),_:3},8,["style"]),"error"===v.validateState&&q.showError("message")?(r(),i(_,{key:0,class:"u-form-item__message",style:l({paddingLeft:"left"==q.elLabelPosition?g.$u.addUnit(q.elLabelWidth):"0",textAlign:"right"==q.elInputAlign?"right":"left"})},{default:n((()=>[o(u(v.validateMessage),1)])),_:1},8,["style"])):s("v-if",!0)])),_:3},8,["class"])}],["__scopeId","data-v-18d246b8"]]);export{R as _};
