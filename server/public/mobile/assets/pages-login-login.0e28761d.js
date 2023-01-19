import{o as e,c as t,w as n,b as i,p as o,q as a,E as r,h as s,k as c,z as l,d,aa as u,u as p,X as f,m,A as g,P as h,ac as v,a3 as y,ad as _,ae as w,Y as S,L as k,g as x,l as I,t as b,e as T,F as C,x as V,a9 as L,af as M,K as P,v as A,ag as B,ah as N,ai as O,r as U,a as E,i as W,y as R}from"./index.a8ef0639.js";import{_ as D}from"./u-image.7827fc2c.js";import{_ as j}from"./u-icon.49919d65.js";import{_ as J,a as Q}from"./u-form-item.3da2b0ee.js";import{_ as z}from"./u-verification-code.b45d3ed9.js";import{_ as $}from"./u-form.8e3129a1.js";import{g as q,O as F,_ as Z,l as G}from"./account.27a1077b.js";import{_ as X}from"./u-button.e425d99e.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{S as K}from"./appEnums.18338bd1.js";import{i as Y,a as ee}from"./client.7d8d9e98.js";var te=H({name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle(){let e={};return-1!=String(this.halfWidth).indexOf("%")?e.width=this.halfWidth:e.width=this.halfWidth+"rpx",this.borderColor&&(e.borderColor=this.borderColor),e}},methods:{click(){this.$emit("click")}}},[["render",function(l,d,u,p,f,m){const g=c;return e(),t(g,{class:"u-divider",style:a({height:"auto"==u.height?"auto":u.height+"rpx",backgroundColor:u.bgColor,marginBottom:u.marginBottom+"rpx",marginTop:u.marginTop+"rpx"}),onClick:m.click},{default:n((()=>[i(g,{class:o(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:a([m.lineStyle])},null,8,["class","style"]),u.useSlot?(e(),t(g,{key:0,class:"u-divider-text",style:a({color:u.color,fontSize:u.fontSize+"rpx"})},{default:n((()=>[r(l.$slots,"default",{},void 0,!0)])),_:3},8,["style"])):s("v-if",!0),i(g,{class:o(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:a([m.lineStyle])},null,8,["class","style"])])),_:3},8,["style","onClick"])}],["__scopeId","data-v-ba53c472"]]);var ne,ie={exports:{}};ne=window,ie.exports=function(e,t){if(!e.jWeixin){var n,i={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},o=function(){var e={};for(var t in i)e[i[t]]=t;return e}(),a=e.document,r=a.title,s=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),l=!(!c.match("mac")&&!c.match("win")),d=-1!=s.indexOf("wxdebugger"),u=-1!=s.indexOf("micromessenger"),p=-1!=s.indexOf("android"),f=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),m=(n=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:A(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},v={},y={_completes:[]},_={state:0,data:{}};B((function(){g.initEndTime=A()}));var w=!1,S=[],k={config:function(t){P("config",v=t);var n=!1!==v.check;B((function(){if(n)b(i.config,{verifyJsApiList:M(v.jsApiList),verifyOpenTagList:M(v.openTagList)},function(){y._complete=function(e){g.preVerifyEndTime=A(),_.state=1,_.data=e},y.success=function(e){h.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):_.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(l||d||v.debug||m<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){h.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=n}})}}()})),y.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();y._completes=[]},y}()),g.preVerifyStartTime=A();else{_.state=1;for(var e=y._completes,t=0,o=e.length;t<o;++t)e[t]();y._completes=[]}})),k.invoke||(k.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,C(n),i)},k.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=_.state?e():(y._completes.push(e),!u&&v.debug&&e())},error:function(e){m<"6.0.2"||(-1==_.state?e(_.data):y._fail=e)},checkJsApi:function(e){b("checkJsApi",{jsApiList:M(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=o[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){T(i.onMenuShareTimeline,{complete:function(){b("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){T(i.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?b("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):b("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){T(i.onMenuShareQQ,{complete:function(){b("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){T(i.onMenuShareWeibo,{complete:function(){b("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){T(i.onMenuShareQZone,{complete:function(){b("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){b("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){b("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){b("startRecord",{},e)},stopRecord:function(e){b("stopRecord",{},e)},onVoiceRecordEnd:function(e){T("onVoiceRecordEnd",e)},playVoice:function(e){b("playVoice",{localId:e.localId},e)},pauseVoice:function(e){b("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){b("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){T("onVoicePlayEnd",e)},uploadVoice:function(e){b("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){b("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){b("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){b("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(n){}}},e))},getLocation:function(e){},previewImage:function(e){b(i.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){b("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){b("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===w?(w=!0,b("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(w=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){b("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){b("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){b(i.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){b("hideOptionMenu",{},e)},showOptionMenu:function(e){b("showOptionMenu",{},e)},closeWindow:function(e){b("closeWindow",{},e=e||{})},hideMenuItems:function(e){b("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){b("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){b("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){b("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){b("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){b(i.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))},openProductSpecificView:function(e){b(i.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}b(i.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){b("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,code:r.code};n.push(s)}b(i.openCard,{card_list:n},e)},consumeAndShareCard:function(e){b(i.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){b(i.chooseWXPay,V(e),e)},openEnterpriseRedPacket:function(e){b(i.openEnterpriseRedPacket,V(e),e)},startSearchBeacons:function(e){b(i.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){b(i.stopSearchBeacons,{},e)},onSearchBeacons:function(e){T(i.onSearchBeacons,e)},openEnterpriseChat:function(e){b("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){b("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){b("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},B((function(){b("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){b("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){b("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){b("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){b("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){b("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){B((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},x=1,I={};return a.addEventListener("error",(function(e){if(!p){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=x++,t["wx-id"]=o),I[o])return;I[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),a.addEventListener("load",(function(e){if(!p){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(I[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=k),k}function b(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,C(n),(function(e){L(t,e,i)})):P(t,i)}function T(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),L(t,e,n)})):P(t,i||n)}function C(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=o[n];i&&(n=i);var a="ok";if(t){var r=t.indexOf(":");"confirm"==(a=t.substring(r+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",v.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function M(e){if(e){for(var t=0,n=e.length;t<n;++t){var o=e[t],a=i[o];a&&(e[t]=a)}return e}}function P(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var n=o[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function A(){return(new Date).getTime()}function B(t){u&&(e.WeixinJSBridge?t():a.addEventListener&&a.addEventListener("WeixinJSBridgeReady",t,!1))}}(ne);var oe=ie.exports;const ae={getSignLink:()=>(void 0!==window.signLink&&""!==window.signLink||(window.signLink=location.href.split("#")[0]),Y()?location.href.split("#")[0]:window.signLink),getUrl(){q().then((e=>{location.href=e.url}))},authLogin:e=>new Promise(((t,n)=>{F({code:e}).then((e=>{t(e)})).catch((e=>{n(e)}))})),ready:()=>new Promise((e=>{oe.ready((()=>{e("success")}))})),share(e){this.ready().then((()=>{const{shareTitle:t,shareLink:n,shareImage:i,shareDesc:o}=e;oe.updateTimelineShareData({title:t,link:n,imgUrl:i}),oe.updateAppMessageShareData({title:t,link:n,imgUrl:i,desc:o}),oe.onMenuShareWeibo({title:t,link:n,imgUrl:i,desc:o})}))},getAddress(){return new Promise(((e,t)=>{this.ready().then((()=>{oe.openAddress({success:t=>{e(t)},fail:e=>{t(e)}})}))}))},getLocation(){return new Promise(((e,t)=>{this.ready().then((()=>{oe.getLocation({type:"gcj02",success:t=>{e(t)},fail:e=>{t(e)}})}))}))}};const re=d({__name:"login",setup(a){const r=l(!0);r.value=ee();const d=u(),q=p(),F=f(),H=l(""),Y=l(!1),ie=m({scene:1,account:"",password:"",code:""}),oe=e=>{H.value=e},re=async()=>{var e,t;ie.account&&(null==(e=F.value)?void 0:e.canGetCode)&&(await M({scene:K.LOGIN,mobile:ie.account}),uni.$u.toast("发送成功"),null==(t=F.value)||t.start())},se=e=>{ie.scene=e},ce=e=>{var t;return null==(t=q.getLoginConfig.login_way)?void 0:t.includes(String(e))},le=g((()=>q.getLoginConfig.wechat_auth)),de=g((()=>1==q.getLoginConfig.login_agreement)),ue=g((()=>1==q.getLoginConfig.third_auth)),pe=g((()=>1==q.getLoginConfig.coerce_mobile)),fe=async e=>{const{token:t,mobile:n}=e;if(!n&&pe.value)return d.temToken=t,P({url:"/pages/bind_mobile/bind_mobile"}),void _();d.login(e.token),await d.getUser(),uni.$u.toast("登录成功"),_();const i=A();if(i.length>1){const e=i.at(-2);w({success:()=>{const{onLoad:t,options:n}=e;t&&t(n)}})}else B.get(N)?O({url:B.get(N)}):k({url:"/pages/index/index"});B.remove(N)},{lockFn:me}=function(e){const t=l(!1);return{isLock:t,lockFn:async(...n)=>{if(!t.value){t.value=!0;try{const i=await e(...n);return t.value=!1,i}catch(ne){throw t.value=!1,ne}}}}}((async()=>{if(!Y.value&&de.value)return uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》");if(1==ie.scene){if(!ie.account)return uni.$u.toast("请输入账号/手机号码");if(!ie.password)return uni.$u.toast("请输入密码")}if(2==ie.scene){if(!ie.account)return uni.$u.toast("请输入手机号码");if(!ie.code)return uni.$u.toast("请输入验证码")}y({title:"请稍后..."});try{const e=await G(ie);fe(e)}catch(e){_(),uni.$u.toast(e)}})),ge=async()=>{if(!Y.value&&de.value)return uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》");r.value&&ae.getUrl()};return h((()=>q.getLoginConfig),(e=>{e.login_way&&(ie.scene=e.login_way[0])}),{immediate:!0}),v((async()=>{try{d.isLogin&&(y({title:"请稍后..."}),await d.getUser(),_(),w())}catch(e){_()}})),S((async e=>{if(d.isLogin)return void k({url:"/pages/index/index"});const{code:t}=e;if(t){y({title:"请稍后..."});try{const e=await ae.authLogin(t);fe(e)}catch(n){throw _(),new Error(n)}}})),(a,l)=>{const d=U(E("u-image"),D),u=c,p=U(E("u-icon"),j),f=U(E("u-input"),J),m=U(E("u-form-item"),Q),g=W,h=U(E("u-verification-code"),z),v=R,y=U(E("u-form"),$),_=U(E("u-checkbox"),Z),w=U(E("u-button"),X),S=U(E("u-divider"),te);return e(),t(u,{class:"bg-white login min-h-full flex flex-col items-center px-[40rpx] pt-[80rpx] box-border"},{default:n((()=>[i(u,null,{default:n((()=>[i(d,{src:x(q).getWebsiteConfig.shop_logo,mode:"widthFix",height:"160",width:"160"},null,8,["src"])])),_:1}),i(u,{class:"mt-4 text-xl font-medium"},{default:n((()=>[I(b(x(q).getWebsiteConfig.shop_name),1)])),_:1}),i(u,{class:"w-full mt-[60rpx] pb-[60rpx]"},{default:n((()=>[i(y,{borderBottom:""},{default:n((()=>[1==ie.scene&&ce(1)?(e(),T(C,{key:0},[i(m,{borderBottom:""},{default:n((()=>[i(p,{class:"mr-2",size:36,name:"/static/images/icon/icon_user.png"}),i(f,{class:"flex-1",modelValue:ie.account,"onUpdate:modelValue":l[0]||(l[0]=e=>ie.account=e),border:!1,placeholder:"请输入账号/手机号码"},null,8,["modelValue"])])),_:1}),i(m,{borderBottom:""},{default:n((()=>[i(p,{class:"mr-2",size:36,name:"/static/images/icon/icon_password.png"}),i(f,{class:"flex-1",modelValue:ie.password,"onUpdate:modelValue":l[1]||(l[1]=e=>ie.password=e),type:"password",placeholder:"请输入密码",border:!1},null,8,["modelValue"]),i(g,{url:"/pages/forget_pwd/forget_pwd","hover-class":"none"},{default:n((()=>[i(u,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3"},{default:n((()=>[I(" 忘记密码？ ")])),_:1})])),_:1})])),_:1})],64)):s("v-if",!0),2==ie.scene&&ce(2)?(e(),T(C,{key:1},[i(m,{borderBottom:""},{default:n((()=>[i(p,{class:"mr-2",size:36,name:"/static/images/icon/icon_mobile.png"}),i(f,{class:"flex-1",modelValue:ie.account,"onUpdate:modelValue":l[2]||(l[2]=e=>ie.account=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),i(m,{borderBottom:""},{default:n((()=>[i(p,{class:"mr-2",size:36,name:"/static/images/icon/icon_code.png"}),i(f,{class:"flex-1",modelValue:ie.code,"onUpdate:modelValue":l[3]||(l[3]=e=>ie.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),i(u,{class:"border-l border-solid border-0 border-light pl-3 leading-4 ml-3 w-[180rpx]",onClick:re},{default:n((()=>[i(h,{ref_key:"uCodeRef",ref:F,seconds:60,onChange:oe,"change-text":"x秒"},null,512),i(v,{class:o(ie.account?"text-primary":"text-muted")},{default:n((()=>[I(b(H.value),1)])),_:1},8,["class"])])),_:1})])),_:1})],64)):s("v-if",!0)])),_:1}),x(de)?(e(),t(u,{key:0,class:"mt-[40rpx]"},{default:n((()=>[i(_,{modelValue:Y.value,"onUpdate:modelValue":l[6]||(l[6]=e=>Y.value=e),shape:"circle"},{default:n((()=>[i(u,{class:"text-xs flex"},{default:n((()=>[I(" 已阅读并同意 "),i(u,{onClick:l[4]||(l[4]=V((()=>{}),["stop"]))},{default:n((()=>[i(g,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:n((()=>[I(" 《服务协议》 ")])),_:1})])),_:1}),I(" 和 "),i(u,{onClick:l[5]||(l[5]=V((()=>{}),["stop"]))},{default:n((()=>[i(g,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:n((()=>[I(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):s("v-if",!0),i(u,{class:"mt-[60rpx]"},{default:n((()=>[i(w,{type:"primary",shape:"circle",onClick:l[7]||(l[7]=e=>x(me)(ie.scene))},{default:n((()=>[I(" 登 录 ")])),_:1})])),_:1}),i(u,{class:"text-content flex justify-between mt-[40rpx]"},{default:n((()=>[i(u,{class:"flex-1"},{default:n((()=>[2==ie.scene&&ce(1)?(e(),t(u,{key:0,onClick:l[8]||(l[8]=e=>se(1))},{default:n((()=>[I(" 账号密码登录 ")])),_:1})):s("v-if",!0),1==ie.scene&&ce(2)?(e(),t(u,{key:1,onClick:l[9]||(l[9]=e=>se(2))},{default:n((()=>[I(" 短信验证码登录 ")])),_:1})):s("v-if",!0)])),_:1}),i(g,{url:"/pages/register/register","hover-class":"none"},{default:n((()=>[I("注册账号")])),_:1})])),_:1}),x(ue)&&r.value?(e(),t(u,{key:1,class:"mt-[80rpx]"},{default:n((()=>[i(S,null,{default:n((()=>[I("第三方登录")])),_:1}),L("div",{class:"flex justify-center mt-[40rpx]"},[x(le)&&r.value?(e(),T("div",{key:0,class:"flex flex-col items-center",onClick:ge},[L("img",{src:"/mobile/assets/icon_wx.a848c744.png",class:"w-[80rpx] h-[80rpx]"}),L("div",{class:"text-sm mt-[10px]"},"微信登录")])):s("v-if",!0)])])),_:1})):s("v-if",!0)])),_:1})])),_:1})}}});var se=H(re,[["__scopeId","data-v-a28ccf08"]]);export{se as default};
