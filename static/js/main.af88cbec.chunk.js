(this["webpackJsonpcyan-blue-creative"]=this["webpackJsonpcyan-blue-creative"]||[]).push([[0],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(85),a(12)),i=(a(86),function(){return r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("small",null,"All current works on this site are shared under the Creative Commons CC BY-NC-SA 3.0 license; commercial use requires consent."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("small",null,"I am a commercial photographer & filmmaker. For bookings:"," ",r.a.createElement("a",{href:"mailto:chase@cyanbluecreative.com"},"chase@cyanbluecreative.com")),r.a.createElement("br",null),r.a.createElement("small",null,"(The rest of my portfolio is undergoing updates & will be back shortly.)")),r.a.createElement("h5",null,r.a.createElement("small",null,"CyanBlueCreative \xa9 2020")))}),u=a(67),s=a.n(u),m=(a(90),s.a.initializeApp({apiKey:"AIzaSyBfrtj2KoLLz_YDsg_W_VgOx2402zETg4w",authDomain:"cyanbluecreative.firebaseapp.com",databaseURL:"https://cyanbluecreative.firebaseio.com",projectId:"cyanbluecreative",storageBucket:"cyanbluecreative.appspot.com",messagingSenderId:"769914626190",appId:"1:769914626190:web:c0fc731da834a4d453a9df",measurementId:"G-5B6BLYR73S"})),p=a(28);var d=a(68),b=(a(186),a(72)),h=a.n(b),E=function(e){var t=e.photos4k,a=Object(n.useState)(0),c=Object(o.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(o.a)(u,2),m=s[0],b=s[1],E=Object(n.useState)(2),f=Object(o.a)(E,2),v=f[0],g=f[1],w=Object(n.useState)(!1),O=Object(o.a)(w,2),j=O[0],y=O[1],C=Object(n.useState)(),k=Object(o.a)(C,2),x=k[0],S=k[1],T=Object(n.useState)(),A=Object(o.a)(T,2),B=A[0],I=A[1],N=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;i(a),b(!0)}),[]),L=function(e,t){return e&&e.map((function(e){var a=e.src.split("/"),n=a[4],r=a[6].slice(0,-13),c="".concat("https://media.publit.io/file","/").concat(n,"/").concat(t,"/").concat(r,"-").concat(t,"p-80.jpg");return Object(p.a)(Object(p.a)({},e),{},{src:c,title:"\xa9CyanBlueCreative"})}))};Object(n.useEffect)((function(){if(P(),!j){var e=t&&L(t,1024);I(e)}var a=t&&L(t,2048);S(a)}),[]);var P=function(){var e=window.innerWidth;g(e<=479?1:e<=767||e<=2048?2:4),(e>=512&&window.devicePixelRatio>1||e>=512&&window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)&&y(!0)};!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(n.useEffect)((function(){return window.addEventListener(e,t,a),function(){window.removeEventListener(e,t)}}))}("resize",(function(){return P()}));return r.a.createElement("div",null,(B||x)&&r.a.createElement(d.a,{photos:j?x:B,onClick:N,targetRowHeight:700,direction:"row",limitNodeSearch:v}),x&&r.a.createElement(h.a,{imgs:(j?t:x).map((function(e){return Object(p.a)(Object(p.a)({},e),{},{srcset:[],caption:e.description})})),isOpen:m,currImg:l,onClickPrev:function(){return i(l-1)},onClickNext:function(){return i(l+1)},onClose:function(){b(!1)},closeBtnTitle:"Close",backdropCloseable:!1,leftArrowTitle:"Prev",rightArrowTitle:"Next",width:3840,onClickImg:function(){return window.open(x[l].src,"Image")},showThumbnails:!0,onClickThumbnail:function(e){return i(e)}}))},f=function(e){return r.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("h1",null,"JUNE 2020 | AUSTIN, TX"),r.a.createElement("h5",null,"This is a special temporary page in support of the ongoing anti-police brutality protests across the world.")))},v=function(e){e.toggleMessage;var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=m.database().ref("photos/cantbreathe"),t=e.on("value",(function(e){e.val()&&l(e.val())}));return function(){e.off("value",t)}}),[]),r.a.createElement("div",null,r.a.createElement(f,null),c&&r.a.createElement(E,{photos4k:c}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},r.a.createElement("h5",null,"POWER TO THE PEOPLE"),r.a.createElement("a",{style:{cursor:"pointer",textDecoration:"none"},href:"/"},r.a.createElement("span",{role:"img"},"\u2665\ufe0f"))))},g=function(e){e.toggleMessage;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,r.a.createElement("b",null,"CYAN BLUE CREATIVE")),r.a.createElement("small",null,"\u2615 My Regular Portfolio is Currently Undergoing Updates & Will Be Back Soon \u2615",r.a.createElement("br",null),r.a.createElement("br",null),"\u270a ",r.a.createElement("a",{style:{cursor:"pointer",textDecoration:"none",color:"inherit"},href:"/cantbreathe"},"Click Here for a Special Temporary Page")," \u270a"))),r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},r.a.createElement("a",{style:{cursor:"pointer",textDecoration:"none"},href:"/cantbreathe"},r.a.createElement("span",{role:"img"},"\u2665\ufe0f"))))},w=a(4),O=Object(w.f)((function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:g}),r.a.createElement(w.a,{path:"/cantbreathe",component:v})),r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},r.a.createElement(i,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(43);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(187)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.af88cbec.chunk.js.map