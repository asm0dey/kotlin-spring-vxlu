import{d as c,i as u,a as d,f as o,E as s,g as r,t as a,o as l,_ as m}from"./index-91ed0ba1.js";const k=["innerHTML"],v=["textContent"],f=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){u(d);const n=p;return(e,t)=>e.noteHtml?(l(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,k)):e.note?(l(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,v)],2)):(l(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,f)],2))}}),g=m(y,[["__file","/home/runner/work/kotlin-spring-vxlu/kotlin-spring-vxlu/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};