(this.webpackJsonpreact_start=this.webpackJsonpreact_start||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"inputName":{"name":"name","placeholder":"Name***...","type":"text","minLength":2,"maxLength":15},"inputPassword":{"name":"password","placeholder":"Password***","type":"password","minLength":2,"maxLength":15},"inputPhone":{"name":"phone","placeholder":"Phone","type":"number","minLength":2,"maxLength":15},"inputSearchByName":{"name":"name","placeholder":"Enter name to Saerch...","type":"text","minLength":2,"maxLength":15}}')},29:function(e,t,n){e.exports=n(59)},34:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(10),u=n.n(o),i=(n(34),n(2)),l=n(8),d=n(4),s=n(5),f=n(28),m=n(3),p=Object(d.b)("Contcat/addRequest"),h=Object(d.b)("Contcat/addError"),b=Object(d.b)("Contcat/addSuccsess"),g=Object(d.b)("Contact/delelteSuccsess"),j=Object(d.b)("Contact/filetrContact"),O=Object(d.b)("Contact/getContact"),v=function(e,t){return[].concat(Object(f.a)(e),[t.payload])},E=Object(d.c)([],(a={},Object(s.a)(a,b,v),Object(s.a)(a,h,v),Object(s.a)(a,g,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(s.a)(a,O,(function(e,t){return t.payload})),a)),y=Object(d.c)(!1,Object(s.a)({},p,(function(){return!0}))),x=Object(d.c)("",Object(s.a)({},j,(function(e,t){return t.payload}))),w=Object(m.c)({addContact:E,filterReducer:x,loaderReducer:y}),C=[l.a],L=Object(d.a)({reducer:w,middleware:C}),P=n(7),k=n(17);function S(e){var t=e.handleChange,n=e.config,a=n.name,r=n.placeholder,o=n.minLength,u=n.maxLength,i=n.type,l=e.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,a,c.a.createElement("input",{style:{width:280},name:a,placeholder:r,minLength:o,maxLength:u,type:i,value:l,onChange:t})))}var N=function(){return c.a.createElement("button",{style:{width:280,border:"2px dotted white"},type:"submit"},"Submit")},D=n(6),R=n.n(D),F=n(12),J=n(13),A=n.n(J),B=function(){var e=Object(F.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("http://localhost:4242/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(F.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("http://localhost:4242/contacts",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(F.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.delete("http://localhost:4242/contacts/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return function(t){t(p()),I(e).then((function(e){return t(b(e))})).catch((function(e){return t(h(e))}))}},z=function(){return function(e){B().then((function(t){return e(O(t))})).catch((function(t){return e(h(t))}))}},G=function(e){return function(t){_(e).then((function(){return t(g(e))})).catch((function(e){return t(h(e))}))}},H=function(){var e=Object(r.useState)(""),t=Object(P.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),u=Object(P.a)(o,2),l=u[0],d=u[1],s=Object(i.c)((function(e){return e.addContact})),f=Object(i.b)();return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:n,phone:l};""!==n&&""!==l&&function(e,t){return e.every((function(e){if(e.name!==t.name&&e.phone!==t.phone)return!0}))}(s,t)&&f(q(t)),a(""),d("")},style:{width:300,border:"2px dotted white"}},c.a.createElement(S,{handleChange:function(e){var t=e.target.value;a(t)},value:n,config:k.inputName}),c.a.createElement(S,{handleChange:function(e){var t=e.target.value;d(t)},value:l,config:k.inputPhone}),c.a.createElement(N,null))},K=function(e){var t=e.id,n=Object(i.b)();return c.a.createElement("button",{style:{margin:10,width:50,height:25,border:"2px dotted white"},onClick:function(){return n(G(t))}},"Delete")},M=function(e){var t=e.contact,n=t.id,a=t.name,r=t.phone;return c.a.createElement("p",{className:"clientName"},a,": ",r,c.a.createElement(K,{id:n}))},Q=function(){var e=Object(r.useState)(""),t=Object(P.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([]),u=Object(P.a)(o,2),l=u[0],d=u[1],s=Object(i.c)((function(e){return e.addContact}));Object(r.useEffect)((function(){0!==s.length&&""!==n&&d(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(s,n))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",placeholder:"Enter name to Saerch...",value:n,onChange:function(e){var t=e.target.value;a(t)}}),0!==l.length&&""!==n&&l.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(M,{contact:e}))})))},T={padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:280,borderRadius:"15%",border:"2px dotted white",backgroundColor:"black"},U=function(){return Object(i.c)((function(e){return e.addContact})).map((function(e){return c.a.createElement("div",{className:T,key:e.id},c.a.createElement(M,{contact:e}))}))},V=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(z())}),[]),c.a.createElement(U,null)};console.log("AddContact",H),console.log("FilterContactAPPPPPPPPP",Q);var W=function(){return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:280,border:"2px dotted white",backgroundColor:"black"}},c.a.createElement(H,null),c.a.createElement(Q,null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(V,null))};u.a.render(c.a.createElement(i.a,{store:L},c.a.createElement(W,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.06325fc8.chunk.js.map