(this.webpackJsonpreactloginlogoutapp=this.webpackJsonpreactloginlogoutapp||[]).push([[0],[,,,function(e,n,t){e.exports={login:"Login_login__AdzFQ",actions:"Login_actions__14uQP"}},,function(e,n,t){e.exports={control:"Input_control__gFGY7",invalid:"Input_invalid__f4qc0"}},,function(e,n,t){e.exports={card:"Card_card__2y1jA"}},function(e,n,t){e.exports={button:"Button_button__2z_8Q"}},function(e,n,t){e.exports={home:"Home_home__Samm5"}},function(e,n,t){e.exports={nav:"Navigation_nav__3-BAv"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__2kXQb"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),a=t(6),i=t.n(a),l=(t(16),t(2)),s=t(7),u=t.n(s),r=t(0),d=function(e){return Object(r.jsx)("div",{className:"".concat(u.a.card," ").concat(e.className),children:e.children})},j=t(8),b=t.n(j),f=function(e){return Object(r.jsx)("button",{type:e.type||"button",className:"".concat(b.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},g=o.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),v=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],a=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&a(!0)}),[]);return Object(r.jsx)(g.Provider,{value:{isLoggedIn:o,onLogout:function(){localStorage.removeItem("isLoggedIn"),a(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),a(!0)}},children:e.children})},O=g,h=t(5),x=t.n(h),m=o.a.forwardRef((function(e,n){var t=Object(c.useRef)(),o=function(){t.current.focus()};return Object(c.useImperativeHandle)(n,(function(){return{focus:o}})),Object(r.jsxs)("div",{className:"".concat(x.a.control," ").concat(!1===e.isValid?x.a.invalid:""),children:[Object(r.jsx)("label",{htmlFor:e.id,children:e.label}),Object(r.jsx)("input",{ref:t,type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})})),p=t(3),_=t.n(p),L=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},I=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},N=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],a=t[1],i=Object(c.useReducer)(L,{value:"",isValid:null}),s=Object(l.a)(i,2),u=s[0],j=s[1],b=Object(c.useReducer)(I,{value:"",isValid:null}),g=Object(l.a)(b,2),v=g[0],h=g[1],x=Object(c.useContext)(O),p=Object(c.useRef)(),N=Object(c.useRef)();Object(c.useEffect)((function(){return console.log("EFFECT RUNNING"),function(){console.log("EFFECT CLEANUP")}}),[]);var U=u.isValid,y=v.isValid;Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("Checking form validity!"),a(U&&y)}),500);return function(){console.log("CLEANUP"),clearTimeout(e)}}),[U,y]);return Object(r.jsx)(d,{className:_.a.login,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?x.onLogin(u.value,v.value):U?N.current.focus():p.current.focus()},children:[Object(r.jsx)(m,{ref:p,id:"email",label:"E-Mail",type:"email",isValid:U,value:u.value,onChange:function(e){j({type:"USER_INPUT",val:e.target.value})},onBlur:function(){j({type:"INPUT_BLUR"})}}),Object(r.jsx)(m,{ref:N,id:"password",label:"Password",type:"password",isValid:y,value:v.value,onChange:function(e){h({type:"USER_INPUT",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})}}),Object(r.jsx)("div",{className:_.a.actions,children:Object(r.jsx)(f,{type:"submit",className:_.a.btn,children:"Login"})})]})})},U=t(9),y=t.n(U),C=function(e){var n=Object(c.useContext)(O);return Object(r.jsxs)(d,{className:y.a.home,children:[Object(r.jsx)("h1",{children:"Welcome back!"}),Object(r.jsx)(f,{onClick:n.onLogout,children:"Logout"})]})},E=t(10),R=t.n(E),P=function(){var e=Object(c.useContext)(O);return Object(r.jsx)("nav",{className:R.a.nav,children:Object(r.jsxs)("ul",{children:[e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},T=t(11),V=t.n(T),B=function(e){return Object(r.jsxs)("header",{className:V.a["main-header"],children:[Object(r.jsx)("h1",{children:"A Typical Page"}),Object(r.jsx)(P,{})]})};var S=function(){var e=Object(c.useContext)(O);return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(B,{}),Object(r.jsxs)("main",{children:[!e.isLoggedIn&&Object(r.jsx)(N,{}),e.isLoggedIn&&Object(r.jsx)(C,{})]})]})};i.a.render(Object(r.jsx)(v,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a4975fc0.chunk.js.map