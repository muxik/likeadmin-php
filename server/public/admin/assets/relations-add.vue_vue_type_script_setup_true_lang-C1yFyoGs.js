import{d as A,s as g,i as I,c as O,j as P,o as u,a as m,m as t,w as n,e as a,F as i,r as _,C as y,E as S}from"./index-J7LZbOsU.js";import{E as $,a as j}from"./el-form-item-DQ0zpmBv.js";import"./el-tag-T63lvwFN.js";import{E as L,a as M}from"./el-select-BwOjsGZl.js";import{a as N}from"./code--AAPmWMr.js";import{P as T}from"./index-B2jr8Okl.js";import{u as z}from"./useDictOptions-B8ZL466k.js";const G={class:"edit-popup"},Z=A({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(k,{expose:x,emit:E}){const v=E,V=g(),d=g(),p=I("add"),w=O(()=>p.value=="edit"?"编辑关联":"新增关联"),o=P({name:"",model:"",type:"",local_key:"",foreign_key:""}),C={name:[{required:!0,message:"请输入关联名称"}],type:[{required:!0,message:"请选择关联类型"}],model:[{required:!0,message:"请选择关联模型"}],local_key:[{required:!0,message:"请选择关联健"}],foreign_key:[{required:!0,message:"请输入外键"}]},{optionsData:R}=z({models:{api:N}}),q=async()=>{var r,e;await((r=V.value)==null?void 0:r.validate()),(e=d.value)==null||e.close(),v(p.value,o)},F=(r="add")=>{var e;p.value=r,(e=d.value)==null||e.open()},U=r=>{for(const e in o)r[e]!=null&&r[e]!=null&&(o[e]=r[e])},D=()=>{v("close")};return x({open:F,setFormData:U}),(r,e)=>{const f=L,c=M,s=$,b=S,h=j;return u(),m("div",G,[t(T,{ref_key:"popupRef",ref:d,title:a(w),async:!0,width:"550px",onConfirm:q,onClose:D},{default:n(()=>[t(h,{ref_key:"formRef",ref:V,model:a(o),"label-width":"84px",rules:C},{default:n(()=>[t(s,{label:"关联类型",prop:"type"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).type,"onUpdate:modelValue":e[0]||(e[0]=l=>a(o).type=l),placeholder:"请选择关联类型"},{default:n(()=>[(u(!0),m(i,null,_(k.types,(l,B)=>(u(),y(f,{key:B,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联名称",prop:"name"},{default:n(()=>[t(b,{modelValue:a(o).name,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).name=l),placeholder:"请输入关联名称"},null,8,["modelValue"])]),_:1}),t(s,{label:"关联模型",prop:"model"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).model,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).model=l),placeholder:"请选择关联模型"},{default:n(()=>[(u(!0),m(i,null,_(a(R).models,l=>(u(),y(f,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联健",prop:"local_key"},{default:n(()=>[t(c,{class:"flex-1",modelValue:a(o).local_key,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).local_key=l),clearable:"",placeholder:"请选择关联健"},{default:n(()=>[(u(!0),m(i,null,_(k.column,l=>(u(),y(f,{key:l.id,value:l.column_name,label:`${l.column_name}：${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"外键",prop:"foreign_key"},{default:n(()=>[t(b,{modelValue:a(o).foreign_key,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).foreign_key=l),placeholder:"关联表外键或中间表的外键"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Z as _};
