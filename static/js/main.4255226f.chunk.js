/*! For license information please see main.4255226f.chunk.js.LICENSE.txt */
(this["webpackJsonpcyan-blue-creative"]=this["webpackJsonpcyan-blue-creative"]||[]).push([[0],{134:function(e,t,n){e.exports=n(179)},141:function(e,t,n){},175:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(107),i=(n(141),n(8)),c=n(19),l=n(253),s=n(110),u=n(230),m=n(254),h=n(255),f=n(68),p=n.n(f),d=n(69),g=n.n(d),v=n(70),b=n.n(v),E=n(71),y=n.n(E),w=n(252),x=n(113),j=n.n(x),O=function(e){var t=e.toggle;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(w.a,{variant:"h2"},r.a.createElement("b",null,"CYAN BLUE CREATIVE")),r.a.createElement("div",{style:{height:25}}),r.a.createElement(j.a,{onClick:function(){return t(!0)}}),r.a.createElement(w.a,{variant:"h6"},"Currently",r.a.createElement("br",null),"Undergoing",r.a.createElement("br",null),"Upgrades",r.a.createElement("div",{style:{height:25}}),"\u2615 Be Back Soon \u2615"))))};function k(){k=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new C(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var m={};function h(){}function f(){}function p(){}var d={};l(d,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(S([])));v&&v!==t&&n.call(v,o)&&(d=v);var b=p.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,a(b,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(y.prototype),l(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new y(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var C=function(e){var t=e.setAppUnderConstruction,n=e.hideConstruction,o=Object(a.useState)(0),c=Object(i.a)(o,2),f=c[0],d=c[1],v=Object(a.useState)(!0),E=Object(i.a)(v,2),w=E[0],x=E[1],j=Object(a.useState)(!0),C=Object(i.a)(j,2),S=C[0],L=C[1],I=Object(a.useRef)(null),A=[p.a,g.a,b.a,y.a],N=function(){var e=Object(s.a)(k().mark((function e(t){var n;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){return new Promise((function(t,n){var a=new Image;a.src=e,a.onload=t(),a.onerror=n()}))}));case 2:return n=e.sent,e.next=5,Promise.all(n);case 5:L(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N(A)}),[]),Object(a.useEffect)((function(){var e;return w&&(e=setInterval((function(){d((function(e){return e===A.length-1?0:e+1}))}),5e3)),function(){return clearInterval(e)}}),[w,A.length]);var P=function(){x(!w)};return n?!S&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{sx:{height:"100vh",position:"relative",overflowX:"hidden",backgroundColor:"#000000c4"},ref:I},A.map((function(e,t){return r.a.createElement(u.a,{key:t,direction:t===f?"left":"right",in:t===f,container:I.current,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(m.a,{sx:{borderRadius:0,boxShadow:"none",position:"absolute",width:"100%",height:"auto"}},r.a.createElement(h.a,{sx:{height:"100vh",width:"auto",marginLeft:"auto",marginRight:"auto"},image:e,title:"Cyan Blue Creative",onClick:P})))})))):r.a.createElement(O,{toggle:t})},S=n(115),L=n.n(S),I=(n(144),L.a.initializeApp({apiKey:"AIzaSyBfrtj2KoLLz_YDsg_W_VgOx2402zETg4w",authDomain:"cyanbluecreative.firebaseapp.com",databaseURL:"https://cyanbluecreative.firebaseio.com",projectId:"cyanbluecreative",storageBucket:"cyanbluecreative.appspot.com",messagingSenderId:"769914626190",appId:"1:769914626190:web:c0fc731da834a4d453a9df",measurementId:"G-5B6BLYR73S"})),A=n(14),N=n(88);function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.useEffect)((function(){return window.addEventListener(e,t,n),function(){window.removeEventListener(e,t)}}))}var T=n(116),B=(n(148),n(242)),_=n(256),z=n(231),D=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var e=window.innerHeight,t=document.documentElement.scrollHeight,n=window.pageYOffset||document.documentElement.scrollTop;r(n+e>=t-150)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),n},F=function(){var e,t,n=null===(e=window)||void 0===e||null===(t=e.navigator)||void 0===t?void 0:t.userAgent;return!!(n&&n.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)||window.outerWidth<=776||window.innerWidth<=776)},W=(n(175),function(e){var t,n=e.photos4k,o=Object(a.useState)(0),c=Object(i.a)(o,2),s=c[0],u=c[1],m=Object(a.useState)(!1),h=Object(i.a)(m,2),f=h[0],p=h[1],d=Object(a.useState)(2),g=Object(i.a)(d,2),v=g[0],b=g[1],E=Object(a.useState)(!1),y=Object(i.a)(E,2),w=y[0],x=y[1],j=Object(a.useState)([]),O=Object(i.a)(j,2),k=O[0],C=O[1],S=Object(a.useState)(),L=Object(i.a)(S,2),I=L[0],W=L[1],R=null===k||void 0===k||null===(t=k[s])||void 0===t?void 0:t.src,U=(F(),null===k||void 0===k?void 0:k[s]);console.log("isVerticalImage =>",U);var H=Object(a.useCallback)((function(e,t){t.photo;var n=t.index;u(n),p(!0)}),[]),M=function(){p(!1)};Object(a.useEffect)((function(){if(q(),!w){var e=n&&Y(n,1024);W(e)}var t=n&&Y(n,2048);C(t)}),[]);var Y=function(e,t){return null===e||void 0===e?void 0:e.map((function(e){var n=e.src.split("/"),a=n[4],r=n[6].slice(0,-13),o="".concat("https://media.publit.io/file","/").concat(a,"/").concat(t,"/").concat(r,"-").concat(t,"p-80.jpg");return Object(N.a)(Object(N.a)({},e),{},{src:o,title:"\xa9CyanBlueCreative"})}))},q=function(){var e=window.innerWidth;b(e<=479?1:e<=776||e<=1900?2:4),(e>=512&&window.devicePixelRatio>1||e>=512&&window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)&&x(!0)};P("resize",(function(){return q()}));var G=D(),$=Object(a.useState)([]),J=Object(i.a)($,2),K=J[0],V=J[1],Z=Object(a.useState)(0),X=Object(i.a)(Z,2),Q=X[0],ee=X[1];console.log("images =>",K);Object(a.useEffect)((function(){return function(){if(!(Q>=k.length)&&(0===K.length||G)){var e=Object(A.a)(k).slice(Q,Q+4);V([].concat(Object(A.a)(K),Object(A.a)(e))),ee(Q+4)}}()}),[k,G]);var te={position:"absolute",top:"50%",left:"50%",margin:"auto",maxHeight:"100vh",width:"98%",maxWidth:"100%",transform:"translate(-50%, -50%)",backgroundColor:"common.white",overflowY:"auto"};return r.a.createElement(l.a,{sx:{m:.15}},(I||k)&&K&&r.a.createElement(T.a,{photos:K,onClick:H,targetRowHeight:700,direction:"row",limitNodeSearch:v}),k&&r.a.createElement(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:f,onClose:M,closeAfterTransition:!0,slots:{backdrop:_.a},disableAutoFocus:!0,slotProps:{backdrop:{timeout:700,sx:{color:"#000000c4",overflow:"hidden","-ms-overflow-style":"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}}}},r.a.createElement(z.a,{in:f},r.a.createElement(l.a,{sx:te,onClick:M},r.a.createElement(l.a,{sx:{m:2,height:"100%"}},r.a.createElement("img",{style:{width:"100%"},src:R,alt:"full size - ".concat(R)}))))))}),R=function(e){var t=e.title,n=void 0===t?"JUNE 2020 | AUSTIN, TX":t,a=e.subText,o=void 0===a?"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti":a;return r.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement("h5",null,o)))},U=n(234),H=n(257),M=n(235),Y=n(233),q=function(){var e=Object(Y.a)({threshold:500}),t=r.a.useCallback((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return r.a.createElement(U.a,{in:e},r.a.createElement(l.a,{role:"presentation",sx:{position:"fixed",bottom:32,right:32,zIndex:1}},r.a.createElement(H.a,{onClick:t,sx:{color:"#ffffff",backgroundColor:"#0000004c","&:hover":{color:"#000000"}},size:"small","aria-label":"scroll back to top"},r.a.createElement(M.a,null))))},G=function(e){var t=e.galleryName,n=void 0===t?"street":t,o=e.title,c=e.subText,l=Object(a.useState)(),s=Object(i.a)(l,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){var e=I.database().ref("photos/".concat(n)),t=e.on("value",(function(e){e.val()&&m(e.val())}));return function(){e.off("value",t)}}),[n]),r.a.createElement("div",null,r.a.createElement(R,{title:o.toUpperCase(),subText:c}),u&&r.a.createElement(W,{photos4k:u}),r.a.createElement(q,null))},$=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){var e=I.database().ref("photos/portraits"),t=e.on("value",(function(e){e.val()&&n(e.val())}));return function(){e.off("value",t)}}),[]),r.a.createElement(G,{galleryName:"cantbreathe"})},J=n(236),K=n(237),V=n(238),Z=function(e){var t=e.toggle,n=(new Date).getFullYear();return r.a.createElement(l.a,{sx:{position:"relative",bottom:0,maxHeight:40,mb:2.4,textAlign:"center",mt:1.2}},r.a.createElement(w.a,{variant:"h7"},r.a.createElement(l.a,{sx:{mb:-1}},r.a.createElement("a",{href:"/",style:{color:"inherit",cursor:"pointer",textDecoration:"none"}},r.a.createElement(J.a,{sx:{height:20}}))," ",r.a.createElement("a",{href:"https://www.instagram.com/chase_chronicles/",style:{color:"inherit",cursor:"pointer",textDecoration:"none"}},r.a.createElement(K.a,{sx:{height:20}}))," ",r.a.createElement("a",{href:"mailto:chase@cyanbluecreative.com",style:{color:"inherit",cursor:"pointer",textDecoration:"none"}},r.a.createElement(V.a,{sx:{height:20}}))),r.a.createElement(l.a,{sx:{maxHeight:"fit-content",pt:1},onClick:function(){return t(!0)}},"CyanBlueCreative \xa9 ".concat(n))))},X=n(239),Q=n(258),ee=n(259),te=n(248),ne=n(260),ae=n(261),re=n(249),oe=n(250),ie=n(120),ce=n.n(ie),le=[{title:"home",link:""},{title:"photos",link:"photos"},{title:"can't breathe",link:"cantbreathe"},{title:"gallery",link:"gallery"},{title:"people",link:"people"},{title:"street",link:"street"},{title:"under construction",link:"construction"},{title:"contact",link:"contact"}],se=function(e){var t=e.children,n=e.window,o=Object(Y.a)({target:n?n():void 0}),c=Object(a.useState)(document.scrollingElement.scrollHeight),l=Object(i.a)(c,2),s=(l[0],l[1],Object(a.useState)(!1)),m=Object(i.a)(s,2);m[0],m[1];return r.a.createElement(u.a,{appear:!0,direction:"down",in:!o},t)},ue=Object(c.f)((function(e){var t=e.history,n=e.location.pathname,o=e.hideConstruction,c=Object(a.useState)(!1),s=Object(i.a)(c,2),u=s[0],m=s[1],h="/"===n;return o?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,null),r.a.createElement(se,e,r.a.createElement(Q.a,{sx:{height:"".concat(h?"110px":"auto"),backgroundColor:"".concat(h?"transparent":"black"),backgroundImage:"linear-gradient(#0000004c, transparent)",boxShadow:"none",position:"".concat(h?"":"sticky")}},r.a.createElement(ee.a,null,r.a.createElement(te.a,{href:"/",underline:"none"},r.a.createElement(w.a,{variant:F()?"h5":"h4",sx:{fontWeight:600},component:"div",color:"common.white"},"CYAN BLUE CREATIVE")),r.a.createElement(ne.a,{size:"large",edge:"start","aria-label":"menu",sx:{ml:"auto",mr:0,color:"common.white"},onClick:function(){return m(!u)}},r.a.createElement(ce.a,null)),r.a.createElement(ae.a,{anchor:"right",open:u,onClose:function(){return m(!1)},sx:{backdropFilter:"blur(3px)","& .MuiDrawer-paper":{bgcolor:"rgba(0,0,0,0.25)",backdropFilter:"blur(3px)"}}},r.a.createElement(re.a,{sx:{width:300,height:"100%",backdropFilter:"blur(3px)",bgcolor:"transparent"}},r.a.createElement(l.a,{sx:{my:2,bgcolor:"transparent"}},le.map((function(e){var n=e.title,a=e.link;return r.a.createElement(oe.a,{key:a,onClick:function(){t.push("/".concat(a)),m(!1)},sx:{width:"100%",":hover":{backgroundColor:"transparent"},color:"common.white"}},r.a.createElement("h1",null,n.toUpperCase()))}))))))))):null})),me=n(241),he=n(4),fe=Object(he.a)("form")((function(e){e.theme;return{display:"flex",flexDirection:"column",maxWidth:"500px",margin:"0 auto",gap:"1rem"}})),pe=Object(he.a)(oe.a)((function(e){e.theme;return{marginTop:"1rem"}})),de=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),p=f[0],d=f[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),b=v[0],E=v[1],y=Object(a.useState)(""),x=Object(i.a)(y,2),j=x[0],O=x[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),S=C[0],L=C[1];return r.a.createElement(l.a,{sx:{maxWidth:"60vw",margin:"auto",mt:1}},r.a.createElement(fe,{onSubmit:function(e){if(e.preventDefault(),n&&u&&p){if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n)){var t="Inquiry: ".concat(u," (").concat(n,")"),a=JSON.stringify({email:n,name:u,message:p,phoneNumber:b,additionalNotes:j});window.location.href="mailto:hello@cyanbluecreative.com?subject=".concat(encodeURIComponent(t),"&body=").concat(encodeURIComponent(a))}else L(!0)}else alert("Please fill in all required fields.")}},r.a.createElement(w.a,{variant:"h4",component:"h1"},"Say hello"),r.a.createElement(me.a,{required:!0,label:"Email",type:"email",value:n,onChange:function(e){o(e.target.value)},margin:"normal",error:S,helperText:S?"Please enter a valid email address.":null}),r.a.createElement(me.a,{required:!0,label:"Name",type:"text",value:u,onChange:function(e){m(e.target.value)},margin:"normal"}),r.a.createElement(me.a,{required:!0,label:"Message",multiline:!0,rows:4,value:p,onChange:function(e){d(e.target.value)},margin:"normal"}),r.a.createElement(me.a,{label:"Phone Number",type:"tel",value:b,onChange:function(e){var t,n=e.target.value.replace(/\D/g,"");t=n.length<=10?n.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"):n.replace(/(\d{1,3})(\d{1,3})(\d{1,4})(\d{1,4})/,"+$1 $2 $3-$4"),E(t)},margin:"normal"}),r.a.createElement(me.a,{label:"Additional Notes",multiline:!0,rows:4,value:j,onChange:function(e){O(e.target.value)},margin:"normal"}),r.a.createElement(pe,{variant:"contained",color:"primary",type:"submit",sx:{mb:2}},"Send")))},ge=n(262),ve=n(263),be=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",cols:2},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats",cols:2},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey",author:"@arwinneil",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike",cols:2}],Ee=function(){return a.createElement(ge.a,{sx:{width:"100vw",height:"100vh"},variant:"quilted",cols:4,rowHeight:121},be.map((function(e){return a.createElement(ve.a,{key:e.img,cols:e.cols||1,rows:e.rows||1},a.createElement("img",Object.assign({},function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{src:"".concat(e,"?w=").concat(t*a,"&h=").concat(t*n,"&fit=crop&auto=format"),srcSet:"".concat(e,"?w=").concat(t*a,"&h=").concat(t*n,"&fit=crop&auto=format&dpr=2 2x")}}(e.img,121,e.rows,e.cols),{alt:e.title,loading:"lazy"})))})))},ye=n(251),we=n(47),xe=n(264),je=function(e){var t=e.image,n=Object(a.useState)(!1),o=Object(i.a)(n,2),c=o[0],s=o[1],u=Object(a.useState)(F()),f=Object(i.a)(u,2),p=f[0],d=f[1];P("resize",(function(){return d(F())})),Object(a.useEffect)((function(){p&&s(!0)}),[p]);return r.a.createElement(ye.a,{item:!0,xs:12,sx:{width:"".concat(p?"80vw":"70vw"),m:"0 auto"}},r.a.createElement(m.a,{sx:{height:"250px",borderRadius:0,boxShadow:"none"},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.a.createElement(xe.a,{component:we.b,to:t.link,sx:{display:"flex",textDecoration:"none",position:"relative",color:"transparent","&:hover":{display:"flex",color:"transparent"}}},r.a.createElement(h.a,{component:"img",image:t.src,alt:t.alt,sx:{height:250,maxWidth:800}}),c&&r.a.createElement(l.a,{sx:{position:"absolute",width:800,height:"100%",backgroundColor:"rgba(0, 0, 0, ".concat(p?"0.2":"0.3",")"),display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease-in-out",opacity:1}},r.a.createElement(w.a,{variant:"".concat(p?"h5":"h4"),component:"div",sx:{color:"white",textAlign:"center",textTransform:"uppercase",opacity:1,transition:"opacity 0.3s ease-in-out"}},t.title)))))},Oe=[{src:y.a,alt:"Image 4",title:"street",link:"/street"},{src:p.a,alt:"Image 1",title:"people",link:"/construction"},{src:b.a,alt:"Image 3",title:"activism",link:"/cantbreathe"},{src:g.a,alt:"Image 2",title:"contact",link:"/contact"}],ke=function(e){var t=e.imagesData,n=void 0===t?Oe:t;return r.a.createElement(l.a,null,r.a.createElement(w.a,{variant:"h3",sx:{textTransform:"uppercase",mt:4,mb:4,textAlign:"center",fontWeight:600}},"Photos"),r.a.createElement(ye.a,{container:!0,spacing:4,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mb:8}},n.map((function(e,t){return r.a.createElement(ye.a,{item:!0,key:t,xs:12},r.a.createElement(je,{image:e}))}))))},Ce=function(){return r.a.createElement(G,{galleryName:"portraits",title:"People"})},Se=function(){return r.a.createElement(G,{galleryName:"street",title:"Street"})},Le=n(244),Ie=n(121),Ae=n.n(Ie),Ne=function(e){var t=e.toastMessage,n=void 0===t?null:t,a=e.open,o=e.handleClose,i=null!==n&&void 0!==n?n:"\ud83e\uddc7\ud83e\udd5e\ud83e\uddc7\ud83e\udd5e\ud83e\uddc7",c=r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{size:"small","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(Ae.a,{fontSize:"small"})));return r.a.createElement(Le.a,{open:a,autoHideDuration:6e3,onClose:o,message:i,action:c})},Pe=(n(178),Object(c.f)((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(),u=Object(i.a)(s,2),m=u[0],h=u[1];P("contextmenu",(function(){return o(!0)}));return r.a.createElement(l.a,{sx:{width:"100%"}},r.a.createElement(ue,{hideConstruction:m}),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(C,{setAppUnderConstruction:h,hideConstruction:m})}}),r.a.createElement(c.a,{exact:!0,path:"/gallery",component:Ee}),r.a.createElement(c.a,{path:"/cantbreathe",component:$}),r.a.createElement(c.a,{exact:!0,path:"/construction",component:O}),r.a.createElement(c.a,{exact:!0,path:"/contact",component:de}),r.a.createElement(c.a,{exact:!0,path:"/photos",component:ke}),r.a.createElement(c.a,{exact:!0,path:"/people",component:Ce}),r.a.createElement(c.a,{exact:!0,path:"/street",component:Se})),r.a.createElement(Ne,{open:n,handleClose:function(){return o(!1)},toastMessage:"Works on this site are shared under the Creative Commons CC BY-NC-SA 3.0 license. Commercial use requires explicit consent."}),r.a.createElement(Z,{toggle:h}))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=document.getElementById("root");o.createRoot(Te).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we.a,null,r.a.createElement(Pe,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n.p+"static/media/CB-2K-1633232.cbf03600.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/CB-2K-1633147.4881eacd.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/P1511063.b63d9a90.jpg"},71:function(e,t,n){e.exports=n.p+"static/media/P1511379.5d89f603.jpg"}},[[134,1,2]]]);
//# sourceMappingURL=main.4255226f.chunk.js.map