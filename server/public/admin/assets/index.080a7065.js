import{V as B,W as U,J as w}from"./element-plus.504c2ead.js";import{a as V,i as p,R as C,f,d as D}from"./index.9aa6418f.js";import{d as P,s as R,r as m,b as F,o as u,c as g,W as b,O as y,J as N,M as j,a as v,V as I,a7 as J,U as O,S as W}from"./@vue.2527ecfd.js";const _=P({components:{},props:{type:{type:String,default:"image"},multiple:{type:Boolean,default:!0},limit:{type:Number,default:10},data:{type:Object,default:()=>({})},showProgress:{type:Boolean,default:!1}},emits:["change","error","success","allSuccess"],setup(e,{emit:a}){const h=V(),i=R(),E=m(`${p.baseUrl}${p.urlPrefix}/upload/${e.type}`),S=F(()=>({token:h.token,version:p.version})),r=m(!1),l=m([]),d=(o,t,n)=>{r.value=!0};let s=0;const c=(o,t,n)=>{s++,s==l.value.length&&(s=0,l.value=[],a("allSuccess")),a("change",t),o.code==C.SUCCESS&&a("success",o),o.code==C.FAIL&&o.msg&&f.msgError(o.msg)},L=(o,t)=>{var n;s++,s==l.value.length&&(s=0,l.value=[],a("allSuccess")),f.msgError(`${t.name}\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25`),(n=i.value)==null||n.abort(t),r.value=!1,a("change",t),a("error",t)},k=()=>{f.msgError(`\u8D85\u51FA\u4E0A\u4F20\u4E0A\u9650${e.limit}\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`)},A=()=>{l.value=[],r.value=!1},$=F(()=>{switch(e.type){case"image":return".jpg,.png,.gif,.jpeg";case"video":return".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";default:return"*"}});return{uploadRefs:i,action:E,headers:S,visible:r,fileList:l,getAccept:$,handleProgress:d,handleSuccess:c,handleError:L,handleExceed:k,handleClose:A}}}),q={class:"upload"},M={class:"file-list p-4"},z={class:"flex-1"};function G(e,a,h,i,E,S){const r=B,l=U,d=w;return u(),g("div",q,[b(r,{"file-list":e.fileList,"onUpdate:fileList":a[0]||(a[0]=s=>e.fileList=s),ref:"uploadRefs",action:e.action,multiple:e.multiple,limit:e.limit,"show-file-list":!1,headers:e.headers,data:e.data,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-error":e.handleError,accept:e.getAccept},{default:y(()=>[N(e.$slots,"default")]),_:3},8,["file-list","action","multiple","limit","headers","data","on-progress","on-success","on-exceed","on-error","accept"]),e.showProgress&&e.fileList.length?(u(),j(d,{key:0,modelValue:e.visible,"onUpdate:modelValue":a[1]||(a[1]=s=>e.visible=s),title:"\u4E0A\u4F20\u8FDB\u5EA6","close-on-click-modal":!1,width:"500px",modal:!1,onClose:e.handleClose},{default:y(()=>[v("div",M,[(u(!0),g(I,null,J(e.fileList,(s,c)=>(u(),g("div",{key:c,class:"mb-5"},[v("div",null,O(s.name),1),v("div",z,[b(l,{percentage:parseInt(s.percentage)},null,8,["percentage"])])]))),128))])]),_:1},8,["modelValue","onClose"])):W("",!0)])}const T=D(_,[["render",G]]);export{T as U};
