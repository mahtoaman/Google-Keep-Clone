(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),l=n(0),c=n.n(l),o=n(8),u=n(4);var i=function(){return c.a.createElement("header",null,c.a.createElement("img",{src:"./logo.png",alt:"image"}),c.a.createElement("h1",null,"Keeper"))};var m=function(){var e=new Date;return c.a.createElement("footer",null,c.a.createElement("p",null,"copyright\xa9",e.getFullYear()))};var p=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},E=n(3),f=n(5);var d=function(e){var t=Object(l.useState)({title:"",content:""}),n=Object(u.a)(t,2),a=n[0],r=n[1];function o(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(E.a)({},n,a))}))}return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("input",{value:a.title,onChange:o,name:"title",placeholder:"Title"}),c.a.createElement("textarea",{value:a.content,onChange:o,name:"content",placeholder:"Take a note...",rows:"3"}),c.a.createElement("button",{onClick:function(t){e.onAdd(a),r({title:"",content:""}),t.preventDefault()}},"Add")))};var v=function(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];function r(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(d,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:r})})),c.a.createElement(m,null))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2c57bb1b.chunk.js.map