import{d as I,s as b,i as G,c as P,j as S,o as m,a as T,m as o,w as a,e as l,b as n,C as c,G as v,p as i,E as j,L as z,J as A}from"./index-Db5CBa4F.js";import{E as J,a as L}from"./el-form-item-DdPN1Y-B.js";/* empty css                       */import{E as O,a as H}from"./el-radio-DYnCiASz.js";import{f as K,h as M,i as Q}from"./wx_oa-BZ95cUYr.js";import{P as W}from"./index-Cynsnu2B.js";const X={class:"edit-popup"},Y={class:"flex-1"},Z={class:"flex-1"},$={class:"flex-1"},h={class:"flex-1"},ee={class:"flex-1"},te={class:"flex-1"},le={class:"flex-1"},pe=I({__name:"edit",emits:["success","close"],setup(oe,{expose:x,emit:k}){const V=k,g=b(),f=b(),_=G("add"),R=P(()=>_.value=="edit"?"编辑":"新增"),t=S({id:"",name:"",reply_type:0,content_type:1,keyword:"",content:"",matching_type:1,status:1,sort:0,reply_num:1}),E={name:[{required:!0,message:"请输入规则名称",trigger:["blur"]}],keyword:[{required:!0,message:"请输入关键词",trigger:["blur"]}],matching_type:[{required:!0,message:"请选择匹配方式",trigger:["blur"]}],content_type:[{required:!0,message:"请选择回复类型",trigger:["blur"]}],content:[{required:!0,message:"请输入回复内容",trigger:["blur"]}]},U=async()=>{var r,e;await((r=g.value)==null?void 0:r.validate()),_.value=="edit"?await K(t):await M(t),(e=f.value)==null||e.close(),V("success")},C=(r="add",e=0)=>{var u;_.value=r,t.reply_type=e,(u=f.value)==null||u.open()},w=r=>{for(const e in t)r[e]!=null&&r[e]!=null&&(t[e]=r[e])},q=async r=>{const e=await Q({id:r.id});w(e)},N=()=>{V("close")};return x({open:C,setFormData:w,getDetail:q}),(r,e)=>{const u=j,d=J,p=O,y=H,B=z,D=A,F=L;return m(),T("div",X,[o(W,{ref_key:"popupRef",ref:f,title:l(R),async:!0,width:"500px",onConfirm:U,onClose:N},{default:a(()=>[o(F,{ref_key:"formRef",ref:g,model:l(t),"label-width":"84px",rules:E,class:"pr-10"},{default:a(()=>[o(d,{label:"规则名称",prop:"name"},{default:a(()=>[n("div",Y,[o(u,{modelValue:l(t).name,"onUpdate:modelValue":e[0]||(e[0]=s=>l(t).name=s),placeholder:"请输入规则名称"},null,8,["modelValue"]),e[8]||(e[8]=n("div",{class:"form-tips"},"方便通过名称管理关注回复内容",-1))])]),_:1}),l(t).reply_type==2?(m(),c(d,{key:0,label:"关键词",prop:"keyword"},{default:a(()=>[n("div",Z,[o(u,{modelValue:l(t).keyword,"onUpdate:modelValue":e[1]||(e[1]=s=>l(t).keyword=s),placeholder:"请输入关键词"},null,8,["modelValue"]),e[9]||(e[9]=n("div",{class:"form-tips"},"方便通过名称管理关注回复内容",-1))])]),_:1})):v("",!0),l(t).reply_type==2?(m(),c(d,{key:1,label:"匹配方式",prop:"matching_type"},{default:a(()=>[n("div",$,[o(y,{modelValue:l(t).matching_type,"onUpdate:modelValue":e[2]||(e[2]=s=>l(t).matching_type=s)},{default:a(()=>[o(p,{value:1},{default:a(()=>e[10]||(e[10]=[i("全匹配")])),_:1}),o(p,{value:2},{default:a(()=>e[11]||(e[11]=[i("模糊匹配")])),_:1})]),_:1},8,["modelValue"]),e[12]||(e[12]=n("div",{class:"form-tips"},"模糊匹配时，关键词部分匹配用户输入的内容即可",-1))])]),_:1})):v("",!0),o(d,{label:"回复类型",prop:"content_type",min:0},{default:a(()=>[n("div",h,[o(y,{modelValue:l(t).content_type,"onUpdate:modelValue":e[3]||(e[3]=s=>l(t).content_type=s)},{default:a(()=>[o(p,{value:1},{default:a(()=>e[13]||(e[13]=[i("文本")])),_:1})]),_:1},8,["modelValue"]),e[14]||(e[14]=n("div",{class:"form-tips"},"暂时只支持文本类型",-1))])]),_:1}),o(d,{label:"回复内容",prop:"content"},{default:a(()=>[n("div",ee,[o(u,{modelValue:l(t).content,"onUpdate:modelValue":e[4]||(e[4]=s=>l(t).content=s),autosize:{minRows:4,maxRows:4},type:"textarea",maxlength:"200","show-word-limit":"",placeholder:"请输入回复内容"},null,8,["modelValue"])])]),_:1}),o(d,{label:"排序"},{default:a(()=>[n("div",te,[o(B,{modelValue:l(t).sort,"onUpdate:modelValue":e[5]||(e[5]=s=>l(t).sort=s),min:0,max:9999},null,8,["modelValue"])])]),_:1}),l(t).reply_type==2?(m(),c(d,{key:2,label:"回复数量",prop:"reply_num",required:""},{default:a(()=>[n("div",le,[o(y,{modelValue:l(t).reply_num,"onUpdate:modelValue":e[6]||(e[6]=s=>l(t).reply_num=s)},{default:a(()=>[o(p,{value:1},{default:a(()=>e[15]||(e[15]=[i("回复匹配首词条")])),_:1})]),_:1},8,["modelValue"]),e[16]||(e[16]=n("div",{class:"form-tips"}," 设置关键词匹配多条时回复的数量，暂时支持回复一条内容 ",-1))])]),_:1})):v("",!0),o(d,{label:"启用状态"},{default:a(()=>[o(D,{modelValue:l(t).status,"onUpdate:modelValue":e[7]||(e[7]=s=>l(t).status=s),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{pe as _};
