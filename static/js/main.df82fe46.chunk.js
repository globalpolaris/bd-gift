(this.webpackJsonpbirthday=this.webpackJsonpbirthday||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(22),r=c.n(s),a=(c(28),c(29),c(9)),i=c(3),j=c(5),l=c(0),b=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{className:"title",children:"P R O J E C T - Z"}),Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("div",{className:"hamburger",children:[Object(l.jsx)("input",{className:"chck",type:"checkbox",onChange:function(){return s((function(e){return!e}))}}),Object(l.jsx)("div",{className:"line"}),Object(l.jsx)("div",{className:"line"}),Object(l.jsx)("div",{className:"line"})]}),Object(l.jsxs)("ul",{className:c?"nav slide":"nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/how-it-started",children:"How it started"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/your-gift",children:Object(l.jsx)("span",{children:"Your Gift"})})})]})]})]})},o=c(19),h=c(20),u=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(l.jsx)(o.a,{icon:h.b,size:"1x"}),a=Object(l.jsx)(o.a,{icon:h.a,size:"1x"}),i=localStorage.getItem("theme");return Object(l.jsx)("div",{className:"switch",children:Object(l.jsxs)("label",{className:"switch-icon",children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("input",{type:"checkbox",value:c,onChange:function(){return s((function(e){return!e}))}}),Object(l.jsx)("span",{className:"slider",children:Object(l.jsx)("div",{className:"moon-icon",children:c?Object(l.jsxs)(l.Fragment,{children:[r,document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme","dark")]}):Object(l.jsxs)(l.Fragment,{children:[a,document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme","light")]})})})]})})},d=function(){var e=Object(n.useState)("00"),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("00"),a=Object(j.a)(r,2),i=a[0],b=a[1],o=Object(n.useState)("00"),h=Object(j.a)(o,2),u=h[0],d=h[1],O=Object(n.useState)("00"),x=Object(j.a)(O,2),m=x[0],p=x[1],f=Object(n.useRef)();return Object(n.useEffect)((function(){return function(){var e=new Date("Jun 01 2021 00:00:00").getTime();f=setInterval((function(){var t=(new Date).getTime(),c=e-t,n=Math.floor(c/864e5),r=Math.floor(c%864e5/36e5),a=Math.floor(c%36e5/6e4),i=Math.floor(c%6e4/1e3);c>0?(s(n),b(r),d(a),p(i)):clearInterval(f.current)}),1e3)}(),function(){clearInterval(f.current)}})),Object(l.jsx)("div",{className:"clock",children:Object(l.jsxs)("div",{className:"cd",children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:c}),Object(l.jsx)("span",{children:Object(l.jsx)("small",{children:"Days"})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:i}),Object(l.jsx)("span",{children:Object(l.jsx)("small",{children:"Hours"})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:u}),Object(l.jsx)("span",{children:Object(l.jsx)("small",{children:"Minutes"})})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:m}),Object(l.jsx)("span",{children:Object(l.jsx)("small",{children:"Seconds"})})]})]})})},O=c(11),x=c.n(O),m=c(14),p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(j.a)(r,2),i=a[0],b=a[1],o=Object(n.useState)(!0),h=Object(j.a)(o,2),u=h[0],d=h[1],O=Object(n.useState)(""),p=Object(j.a)(O,2),f=p[0],v=p[1],g=c,N="https://api.dictionaryapi.dev/api/v2/entries/en-US/"+c,y=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N);case 3:if(404==(t=e.sent).status){e.next=13;break}return e.next=7,t.json();case 7:c=e.sent,v(c[0]),d(!0),b(i+1),e.next=14;break;case 13:d(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{className:"searchbar",onSubmit:function(e){e.preventDefault(),y()},children:[Object(l.jsx)("input",{type:"text",id:"search",maxLength:"24",placeholder:"Something...",value:c,onChange:function(e){return s(e.target.value)},required:!0}),Object(l.jsx)("input",{className:"submit-btn",type:"submit",placeholder:"Submit",value:"I'm feeling lucky"})]}),Object(l.jsx)("div",{className:"dictionary",children:"zenochka"===g.toLowerCase()?Object(l.jsxs)("div",{className:"res",children:[Object(l.jsx)("h2",{children:"Zenochka Uma Zivanka"}),Object(l.jsx)("em",{children:"/ Zenochka, Enok /"}),Object(l.jsx)("p",{children:"Born on 1st of July 2002. Graduated from Al-Azhar 3 Kebayoran Baru in 2019. Student of Architecture at Diponogero University, expected to graduate in 2023"})]}):Object(l.jsx)(l.Fragment,{children:u||0!==i?u&&i>0?Object(l.jsxs)("div",{className:"res",children:[Object(l.jsx)("h2",{children:f.word}),Object(l.jsxs)("em",{children:["/ ",f.phonetics[0].text," /"]}),Object(l.jsx)("p",{children:f.meanings[0].definitions[0].definition})]}):0===i?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("em",{children:"No such word! :("}):Object(l.jsx)("em",{children:"No such word! :("})})})]})},f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{})]})},v=c.p+"static/media/sorry.e9b93c9a.png",g=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(j.a)(r,2),i=a[0],b=a[1],o="http://numbersapi.com/"+c+"?json",h=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(o);case 3:if(404===(t=e.sent).status){e.next=9;break}return e.next=7,t.json();case 7:c=e.sent,b(c);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return h(),function(){b({})}}),[c]);return Object(l.jsxs)("div",{className:"contain",children:[Object(l.jsx)("img",{className:"sorry-img",src:v,alt:"sorry"}),Object(l.jsxs)("div",{className:"context",children:[Object(l.jsx)("h1",{children:"Hmm.."}),Object(l.jsx)("h3",{children:"I think I'm not finished with this page."}),Object(l.jsx)("h3",{children:"In the meantime try typing any number inside the box!"}),Object(l.jsx)("input",{className:"number-box",onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("em",{children:i.text})]})]})},N=(c.p,function(){return Object(l.jsxs)("div",{className:"gift-wrap",children:[Object(l.jsxs)("h1",{children:["Not yet...",Object(l.jsx)("br",{})]}),Object(l.jsx)(d,{})]})});var y=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsx)(u,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:f}),Object(l.jsx)(i.a,{path:"/how-it-started",component:g}),Object(l.jsx)(i.a,{path:"/your-gift",component:N})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};r.a.render(Object(l.jsx)(a.a,{basename:"/project-z",children:Object(l.jsx)(y,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.df82fe46.chunk.js.map