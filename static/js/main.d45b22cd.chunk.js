(this["webpackJsonpreact-grid-dashboard-example"]=this["webpackJsonpreact-grid-dashboard-example"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},4:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),d=function(e){var t=e.rows,n=e.columns,r=e.layout,o=e.gap;return Object(a.createElement)("div",{style:{height:"100%",width:"100%",display:"grid",gridTemplateRows:"repeat("+t+", minmax(0, 1fr))",gridTemplateColumns:"repeat("+n+", minmax(0, 1fr))",gap:o}},Object.entries(r).map((function(e){var t=e[0],n=e[1],r=n.x,o=n.y,i=n.w,d=n.h,c=n.component,p=n.isScrollable;return Object(a.createElement)("div",{ref:function(e){e&&console.log(name,e.getBoundingClientRect())},key:t,style:{gridColumnStart:""+r,gridRowStart:""+o,gridColumnEnd:"span "+i,gridRowEnd:"span "+d,overflow:"hidden"}},Object(a.createElement)(l,{isScrollable:p},Object(a.createElement)(c,null)))})))},l=function(e){var t=e.isScrollable,n=e.children;return Object(a.createElement)("div",{style:{overflow:t?"auto":"hidden",height:"100%",width:"100%",position:"relative"}},Object(a.createElement)("div",{style:{height:t?void 0:"100%",width:t?void 0:"100%",position:"absolute"}},n))},c=Object.freeze({a:{x:1,y:1,w:5,h:5,component:function(){return r.a.createElement("div",{style:{height:"100%",padding:"5px",background:"#eee",border:"1px solid #999"}},"component A ".repeat(20))}},b:{x:1,y:6,w:5,h:7,component:function(){return r.a.createElement("div",{style:{height:"100%",padding:"5px",background:"#eee",border:"1px solid #999"}},"component B")}},c:{x:6,y:1,w:19,h:6,component:function(){return r.a.createElement("div",{style:{height:"100%",padding:"5px",background:"#eee",border:"1px solid #999"}},"component C")}},d:{x:6,y:7,w:8,h:6,component:function(){return r.a.createElement("div",{style:{height:"100%",padding:"5px",background:"#eee",border:"1px solid #999"}},"component D ".repeat(400))},isScrollable:!0}}),p=function(){return r.a.createElement("div",{style:{height:"100vh",padding:"10px",border:"2px dashed #aaa",display:"flex",flexDirection:"column",background:"#bbb"}},r.a.createElement("div",{style:{margin:"10px",padding:"10px",height:"70px",border:"2px dashed #aaa"}}),r.a.createElement("div",{style:{flex:1,display:"flex"}},r.a.createElement("div",{style:{flex:1,margin:"10px",padding:"10px",border:"2px dashed #aaa"}}),r.a.createElement("div",{style:{flex:10,margin:"10px",border:"2px dashed #aaa",background:"#ccc"}},r.a.createElement(d,{columns:24,rows:12,layout:c,gap:"0.4rem"}))))};i.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.d45b22cd.chunk.js.map