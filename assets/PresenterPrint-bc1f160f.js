import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as i,k as b,l as k,m as N,p as P,q as j,_ as w}from"./index-29adbf89.js";import{N as S}from"./NoteDisplay-c21f23c2.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const r=f(()=>y.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(i(),n("div",{id:"page-root",style:x(a(j))},[t("div",V,[t("div",D,[t("h1",L,o(a(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(i(!0),n(g,null,v(a(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),k(" "+o(e==null?void 0:e.title)+" ",1),z])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(i(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=w(M,[["__file","/Users/dj/Desktop/xiaoai_ppt/slidev-theme-penguin-main/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.28_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
