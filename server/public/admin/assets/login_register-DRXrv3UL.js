import{_ as q}from"./index-MNbLmrrq.js";import{d as y,i as C,j as b,z as B,o as w,a as D,m as l,w as a,b as t,e as r,p as n,t as p,B as U,C as R,J as F,v as N}from"./index-J7LZbOsU.js";import{E as P,a as S}from"./el-form-item-DQ0zpmBv.js";import{E as W}from"./el-card-DLZAV2I4.js";import{E as j,a as L}from"./el-checkbox-D7P9lxhC.js";import{g as z,s as A}from"./user-5nGFXY4q.js";import"./_baseClone-DhKVrr9i.js";import"./_Uint8Array-87dXSNdh.js";import"./_initCloneObject-B6EJo72y.js";import"./isEqual-CX9K0tcs.js";const G={class:"login-register"},I={class:"mt-1 ml-2"},J={class:"mt-1 ml-2"},T={class:"mt-1 ml-2"},H={href:"https://open.weixin.qq.com/",target:"_blank"},K=y({name:"loginRegister"}),ae=y({...K,setup(M){const d=C(),o=b({login_way:[],coerce_mobile:0,login_agreement:0,third_auth:0,wechat_auth:0,qq_auth:0}),V=b({loginWay:[{required:!0,validator:(s,e,u)=>{if(o.login_way.join("").length===0)u(new Error("登录方式至少选择一项！"));else{if(o.login_way!==""){if(!d.value)return;d.value.validateField("checkPass")}u()}},trigger:"change"}],coerce_mobile:[{required:!0,trigger:"blur"}],login_agreement:[{required:!0,trigger:"blur"}],third_auth:[{required:!0,trigger:"blur"}]}),f=async()=>{try{const s=await z();for(const e in o)o[e]=s[e]}catch(s){console.log("获取=>",s)}},k=async()=>{var s;await((s=d.value)==null?void 0:s.validate());try{await A(o),f()}catch(e){console.log("保存=>",e)}};return f(),(s,e)=>{const u=j,g=L,m=P,_=F,v=W,c=N,E=S,h=q,x=B("perms");return w(),D("div",G,[l(E,{ref_key:"formRef",ref:d,rules:r(V),model:r(o),"label-width":"120px"},{default:a(()=>[l(v,{shadow:"never",class:"!border-none"},{default:a(()=>[e[10]||(e[10]=t("div",{class:"font-medium mb-7"},"通用设置",-1)),l(m,{label:"登录方式",prop:"login_way"},{default:a(()=>[t("div",null,[l(g,{modelValue:r(o).login_way,"onUpdate:modelValue":e[0]||(e[0]=i=>r(o).login_way=i)},{default:a(()=>[l(u,{value:"1"},{default:a(()=>e[5]||(e[5]=[n("账号密码登录")])),_:1}),l(u,{value:"2"},{default:a(()=>e[6]||(e[6]=[n("手机验证码登录")])),_:1})]),_:1},8,["modelValue"]),e[7]||(e[7]=t("div",{class:"form-tips"},"系统通用登录方式，至少选择一项",-1))])]),_:1}),l(m,{label:"强制绑定手机",prop:"coerce_mobile"},{default:a(()=>[t("div",null,[l(_,{modelValue:r(o).coerce_mobile,"onUpdate:modelValue":e[1]||(e[1]=i=>r(o).coerce_mobile=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",I,p(r(o).coerce_mobile?"开启":"关闭"),1),e[8]||(e[8]=t("div",{class:"form-tips"},[n(" 1、如果开启，则新用户在注册完成之后要强制绑定手机号"),t("br"),n(" 2、老用户登录时如果检测到没有绑定手机，则要重新绑定手机号 ")],-1))])]),_:1}),l(m,{label:"政策协议",prop:"login_agreement"},{default:a(()=>[t("div",null,[l(_,{modelValue:r(o).login_agreement,"onUpdate:modelValue":e[2]||(e[2]=i=>r(o).login_agreement=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",J,p(r(o).login_agreement?"开启":"关闭"),1),e[9]||(e[9]=t("div",{class:"form-tips"},"登录/注册会员时，是否显示服务协议和隐私政策",-1))])]),_:1})]),_:1}),l(v,{shadow:"never",class:"!border-none mt-4"},{default:a(()=>[e[15]||(e[15]=t("div",{class:"font-medium mb-7"},"第三方设置",-1)),l(m,{label:"第三方登录",prop:"third_auth"},{default:a(()=>[t("div",null,[l(_,{modelValue:r(o).third_auth,"onUpdate:modelValue":e[3]||(e[3]=i=>r(o).third_auth=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",T,p(r(o).third_auth?"开启":"关闭"),1),e[12]||(e[12]=t("div",{class:"form-tips"},"登录时支持第三方登录，新用户授权即自动注册账号",-1)),t("div",null,[l(u,{modelValue:r(o).wechat_auth,"onUpdate:modelValue":e[4]||(e[4]=i=>r(o).wechat_auth=i),"true-value":1,"false-value":0},{default:a(()=>e[11]||(e[11]=[n(" 微信登录 ")])),_:1},8,["modelValue"])])])]),_:1}),l(m,{label:"微信开放平台"},{default:a(()=>[t("div",null,[t("a",H,[l(c,{type:"primary",link:"",class:"underline"},{default:a(()=>e[13]||(e[13]=[n(" 前往微信开放平台 ")])),_:1})]),e[14]||(e[14]=t("div",{class:"form-tips"},[n(" 1、在各渠道使用微信授权登录时，强烈建议配置微信开放平台"),t("br"),n(" 2、微信开放平台关联公众号、小程序和APP后，可实现各端用户账号统一，识别买家唯一微信身份"),t("br"),n(" 3、没有配置微信开放平台，同一微信号会生成多个用户，配置微信开放平台后已生成的用户账号无法合并 ")],-1))])]),_:1})]),_:1})]),_:1},8,["rules","model"]),U((w(),R(h,null,{default:a(()=>[l(c,{type:"primary",onClick:k},{default:a(()=>e[16]||(e[16]=[n("保存")])),_:1})]),_:1})),[[x,["setting.user.user/setRegisterConfig"]]])])}}});export{ae as default};
