import{D as V,E as w,C as z,F as T,G as L,H as N,I as S}from"./auth.342ef958.js";import{E as j,u as I,_ as $}from"./fileUpload.a323c8ad.js";import{E as H,a as M,g as q,_ as G}from"./header_tool.944c97cb.js";import{d as K,r as f,a as O,c,e as _,f as e,l as t,w as u,y as i,O as P,n as k,_ as v,a1 as F,g as R,q as r,t as g}from"./index.b46490af.js";import{E as U}from"./request.197b9c77.js";import"./index.6fb23d66.js";import"./index.280d97dd.js";const J={class:"header"},Q={class:"add-box"},W={href:"javascript:;"},X=r(" \u65B0\u5EFA\u767D\u677F "),Y={href:"javascript:;"},Z=r(" \u65B0\u5EFA\u94FE\u63A5 "),ee={href:"javascript:;"},te=r(" \u65B0\u5EFA\u4FBF\u7B7E "),se={class:"right_box"},le={class:"pushSource"},ae=e("div",{class:"pushtitle"},[r(" \u63A8\u8350\u8D44\u6E90 "),e("div",{class:"lastTimeTool"})],-1),oe={class:"push_list"},ue={class:"source_item"},ie={class:"pushSource"},ne={class:"pushtitle"},de=r(" \u6700\u8FD1\u4F7F\u7528 "),ce={class:"lastTimeTool"},_e=r(" \u5DF2\u5168\u90E8\u52A0\u8F7D\uFF0C\u517135\u4E2A "),re={class:"push_list"},pe={class:"source_item"},he={key:0,class:"updateList"},me={class:"files"},fe=e("td",null,[e("img",{src:$,height:"32",width:"32"})],-1),ve={class:"progress_box"},Ae=K({__name:"main_page",setup(Fe){const E=f(""),h=f(!1),p=f(!1),x=f("/"),m=O([]),y=()=>{h.value=!1},b=(s,o)=>{m[s].proValue=o},A=()=>{const s=document.createElement("input");s.onchange=o=>{if(p.value=!0,s.files){for(let l=0;l<s.files.length;l++){const n=new FormData;n.append("file",s.files[l]),n.append("path",x.value);const d=q();n.append("token",d||""),m.push({path:x.value,file:s.files[l],proValue:0}),I(n,b,l)}console.log(m)}},s.setAttribute("type","file"),s.setAttribute("multiple",""),s.click()},C=s=>s.size/1024>1024?parseFloat(s.size/1024/1024+"")+"MB":parseFloat(s.size/1024+"")+"kb";return(s,o)=>{const l=U,n=H,d=M,D=j;return c(),_("div",{class:"home",onClick:y},[e("div",J,[t(n,{type:"text",modelValue:E.value,"onUpdate:modelValue":o[0]||(o[0]=a=>E.value=a),size:"default",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57",style:{width:"200px","border-radius":"10px"}},{prefix:u(()=>[t(l,null,{default:u(()=>[t(i(z))]),_:1})]),_:1},8,["modelValue"]),e("div",Q,[t(d,{icon:i(V),type:"default",class:"search-btn",onClick:o[1]||(o[1]=P(a=>h.value=!h.value,["stop"]))},null,8,["icon"]),e("div",{class:k(h.value?"add-list-show":"add-list")},[e("ul",null,[e("li",null,[e("a",W,[t(l,null,{default:u(()=>[t(i(T))]),_:1}),X])]),e("li",null,[e("a",Y,[t(l,null,{default:u(()=>[t(i(L))]),_:1}),Z])]),e("li",null,[e("a",ee,[t(l,null,{default:u(()=>[t(i(N))]),_:1}),te])])])],2),t(d,{type:"default",icon:i(w),size:"small",class:"search-btn",onClick:A},null,8,["icon"])]),e("div",se,[t(G)])]),e("div",le,[ae,e("div",oe,[(c(),_(v,null,F(10,a=>e("div",ue)),64))])]),e("div",ie,[e("div",ne,[de,e("div",ce,[_e,t(d,{type:"default",size:"small"},{default:u(()=>[t(l,{size:"20px"},{default:u(()=>[t(i(S))]),_:1})]),_:1})])]),e("div",re,[(c(),_(v,null,F(10,a=>e("div",pe)),64))])]),e("div",{class:k(["updateBox",p.value?"":"updateBox_hide"])},[e("div",{class:"uptitle",onClick:o[2]||(o[2]=a=>p.value=!p.value)}," \u6587\u4EF6\u4E0A\u4F20\u5217\u8868 "),p.value?(c(),_("div",he,[e("table",me,[(c(!0),_(v,null,F(m,a=>{var B;return c(),_("tr",null,[fe,e("td",null,[e("p",null,g((B=a.file)==null?void 0:B.name),1),e("p",null,g(C(a.file))+" \u5DF2\u4E0A\u4F20\u81F3 "+g(a.path),1),e("p",null,[e("div",ve,[t(D,{percentage:a.proValue},null,8,["percentage"])])])])])}),256))])])):R("",!0)],2)])}}});export{Ae as default};
