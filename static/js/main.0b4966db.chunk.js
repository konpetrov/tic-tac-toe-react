(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),i=n.n(r),a=n(7),s=n(8),u=n(3),b=n(0),j=function(){return Object(b.jsx)("h1",{className:"header",children:"Tic-Tac-Toe"})},d=n(9),o=function(e){var t=e.mark,n=e.invisible,c=e.gameOver,r=e.winning,i=["mark",t,n?"invisible":"",c&&!r?"dimmed":""];return Object(b.jsx)("div",{className:i.join(" ")})},l=function(e){var t=e.index,n=e.checked,c=e.mark,r=e.turn,i=e.update,a=e.gameOver,s=e.winningIndices.includes(t);return Object(b.jsx)("button",{className:"square",disabled:a||n,onClick:function(){return i(t)},children:n?Object(b.jsx)(o,{mark:c,invisible:!1,gameOver:a,winning:s}):!a&&Object(b.jsx)(o,{mark:r,invisible:!0})})},O=function(e){var t=e.squares,n=e.turn,c=e.update,r=e.gameOver,i=e.winningIndices;return Object(b.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(b.jsx)(l,Object(d.a)({index:t,turn:n,update:c,gameOver:r,winningIndices:i},e),t)}))})},v=function(e){var t=e.visible,n=e.gameStarted,c=e.restart,r=t?"visible":"hidden";return Object(b.jsx)("div",{className:"restart-container",style:{visibility:n?"visible":"hidden"},children:Object(b.jsx)("button",{className:"restart-button ".concat(r),onClick:function(){return c()},children:"Restart?"})})},f=(n(15),function(){var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=function(){return Array(9).fill({checked:!1,mark:null})},n=Object(c.useState)(t()),r=Object(u.a)(n,2),i=r[0],d=r[1],o=Object(c.useState)(null),l=Object(u.a)(o,2),f=l[0],m=l[1],h=Object(c.useState)(!1),x=Object(u.a)(h,2),k=x[0],g=x[1],p=Object(c.useState)(!1),w=Object(u.a)(p,2),y=w[0],N=w[1],S=Object(c.useState)([]),I=Object(u.a)(S,2),q=I[0],E=I[1];Object(c.useEffect)((function(){(T()||C())&&N(!0),m("x"===f?"o":"x")}),[i]);var T=function(){var t=[];i.forEach((function(e,n){f&&e.mark===f&&t.push(n)}));var n,c=Object(a.a)(e);try{for(c.s();!(n=c.n()).done;){var r=n.value;if(r.every((function(e){return t.includes(e)})))return E(r),!0}}catch(s){c.e(s)}finally{c.f()}return!1},C=function(){return i.every((function(e){return e.checked}))};return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(j,{}),Object(b.jsx)(O,{squares:i,turn:f,update:function(e){var t=Object(s.a)(i);t[e]={checked:!0,mark:f},d(t),k||g(!0)},gameOver:y,winningIndices:q}),Object(b.jsx)(v,{visible:y,gameStarted:k,restart:function(){m(null),N(!1),E([]),d(t())}})]})});i.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b4966db.chunk.js.map