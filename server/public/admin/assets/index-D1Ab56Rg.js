import{d as D,s as B,i as O,z as F,o as n,a as v,m as i,w as o,b as $,B as f,C as d,p as m,e as p,e$ as y,G as w,H as N,I as G,q as M,v as P,K as S}from"./index-J7LZbOsU.js";import{E as q}from"./el-card-DLZAV2I4.js";import{E as H,a as I}from"./el-table-column-CyjRaU0z.js";import"./el-checkbox-D7P9lxhC.js";import"./el-tag-T63lvwFN.js";import{e as K,a as j}from"./menu-CD6JYr9g.js";import{u as J}from"./usePaging-DcC9VJen.js";import{_ as Q}from"./edit.vue_vue_type_script_setup_true_lang-D8hD0mW3.js";import{E as W}from"./index-Bc9ImQlx.js";import"./_Uint8Array-87dXSNdh.js";import"./isEqual-CX9K0tcs.js";import"./_initCloneObject-B6EJo72y.js";import"./el-form-item-DQ0zpmBv.js";import"./_baseClone-DhKVrr9i.js";import"./picker.vue_vue_type_script_setup_true_lang-DJYmr9x3.js";import"./el-popover-DzNtnsoN.js";import"./el-select-BwOjsGZl.js";import"./token-DI9FKtlJ.js";import"./el-tree-D1KO1DO3.js";import"./el-tree-select-CfrCKlcP.js";/* empty css                       */import"./el-radio-DpScKcGn.js";import"./index-B2jr8Okl.js";import"./index-BKOsLFqa.js";const X={class:"menu-lists"},Y={key:0},Z={key:1},ee={key:2},te={class:"flex"},oe=D({name:"permission-menu"}),$e=D({...oe,setup(ae){const h=B(),u=B();let k=!1;const _=O(!1),{pager:b,getLists:g}=J({fetchFun:j,params:{page_type:0}}),C=async a=>{var e,s;_.value=!0,await N(),a&&((e=u.value)==null||e.setFormData({pid:a})),(s=u.value)==null||s.open("add")},R=async a=>{var e,s;_.value=!0,await N(),(e=u.value)==null||e.open("edit"),(s=u.value)==null||s.getDetail(a)},L=async a=>{await G.confirm("确定要删除？"),await K({id:a}),g()},U=()=>{k=!k,E(b.lists,k)},E=(a,e=!0)=>{var s;for(const l in a)(s=h.value)==null||s.toggleRowExpansion(a[l],e),a[l].children&&E(a[l].children,e)};return g(),(a,e)=>{const s=M,l=P,r=H,x=W,V=I,z=q,c=F("perms"),A=S;return n(),v("div",X,[i(z,{class:"!border-none",shadow:"never"},{default:o(()=>[$("div",null,[f((n(),d(l,{type:"primary",onClick:e[0]||(e[0]=t=>C())},{icon:o(()=>[i(s,{name:"el-icon-Plus"})]),default:o(()=>[e[2]||(e[2]=m(" 新增 "))]),_:1})),[[c,["auth.menu/add"]]]),i(l,{onClick:U},{default:o(()=>e[3]||(e[3]=[m(" 展开/折叠 ")])),_:1})]),f((n(),d(V,{ref_key:"tableRef",ref:h,class:"mt-4",size:"large",data:p(b).lists,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:o(()=>[i(r,{label:"菜单名称",prop:"name","min-width":"150","show-overflow-tooltip":""}),i(r,{label:"类型",prop:"type","min-width":"80"},{default:o(({row:t})=>[t.type==p(y).CATALOGUE?(n(),v("div",Y,"目录")):t.type==p(y).MENU?(n(),v("div",Z,"菜单")):t.type==p(y).BUTTON?(n(),v("div",ee,"按钮")):w("",!0)]),_:1}),i(r,{label:"图标",prop:"icon","min-width":"80"},{default:o(({row:t})=>[$("div",te,[i(s,{name:t.icon,size:20},null,8,["name"])])]),_:1}),i(r,{label:"权限标识",prop:"perms","min-width":"150","show-overflow-tooltip":""}),i(r,{label:"状态",prop:"is_disable","min-width":"100"},{default:o(({row:t})=>[t.is_disable==0?(n(),d(x,{key:0},{default:o(()=>e[4]||(e[4]=[m("正常")])),_:1})):(n(),d(x,{key:1,type:"danger"},{default:o(()=>e[5]||(e[5]=[m("停用")])),_:1}))]),_:1}),i(r,{label:"排序",prop:"sort","min-width":"100"}),i(r,{label:"更新时间",prop:"update_time","min-width":"180"}),i(r,{label:"操作",width:"160",fixed:"right"},{default:o(({row:t})=>[t.type!==p(y).BUTTON?f((n(),d(l,{key:0,type:"primary",link:"",onClick:T=>C(t.id)},{default:o(()=>e[6]||(e[6]=[m(" 新增 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/add"]]]):w("",!0),f((n(),d(l,{type:"primary",link:"",onClick:T=>R(t)},{default:o(()=>e[7]||(e[7]=[m(" 编辑 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/edit"]]]),f((n(),d(l,{type:"danger",link:"",onClick:T=>L(t.id)},{default:o(()=>e[8]||(e[8]=[m(" 删除 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[A,p(b).loading]])]),_:1}),p(_)?(n(),d(Q,{key:0,ref_key:"editRef",ref:u,onSuccess:p(g),onClose:e[1]||(e[1]=t=>_.value=!1)},null,8,["onSuccess"])):w("",!0)])}}});export{$e as default};
