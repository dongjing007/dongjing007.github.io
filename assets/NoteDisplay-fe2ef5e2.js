import{d,i as c,a as u,f as o,E as s,g as a,t as r,o as i,_ as m}from"./index-4ac465af.js";const v=["innerHTML"],f=["textContent"],k=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return c(u),(e,t)=>e.noteHtml?(i(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,v)):e.note?(i(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[a("p",{textContent:r(e.note)},null,8,f)],2)):(i(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[a("p",{textContent:r(n.placeholder||"No notes.")},null,8,k)],2))}}),_=m(y,[["__file","/Users/dj/Desktop/xiaoai_ppt/slidev-theme-penguin-main/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.28_vite@4.4.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{_ as N};
