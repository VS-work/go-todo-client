(this["webpackJsonpgo-todo-client"]=this["webpackJsonpgo-todo-client"]||[]).push([[0],{189:function(e,t,n){e.exports=n(405)},405:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=(n(70),n(71),n(29)),i=n.n(u),l=n(30),s=n(407),d=n(180),f=n(172),p=n.n(f);n(211).config();var m="https://dry-woodland-14649.herokuapp.com";console.log(111,m,Object({NODE_ENV:"production",PUBLIC_URL:"/go-todo-client",REACT_APP_API_URL:"https://dry-woodland-14649.herokuapp.com"}));var b=p.a.create({baseURL:m,headers:{"Content-Type":"application/json"}}),v=n(186),E=n(127),O=n(92),j=n(20),w=n(412),y=n(406),g=n(408),h=n(411),x=n(409),k=n(410);var C=x.a.create({name:"editData"})((function(e){var t=e.form;Object(a.useEffect)((function(){0!==e.submitFlag&&t.validateFields((function(n,a){n||(e.handleEditOk(a),t.resetFields())}))}),[e.submitFlag]);var n=e.form.getFieldDecorator;return r.a.createElement(x.a,null,r.a.createElement(x.a.Item,null,n("content",{rules:[{required:!0,message:"Please input content!"}]})(r.a.createElement(k.a,{autoFocus:!0,placeholder:"Content"}))))}));function S(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!1),s=Object(l.a)(u,1)[0],d=Object(a.useState)(0),f=Object(l.a)(d,2),p=f[0],m=f[1],x=Object(a.useState)(),k=Object(l.a)(x,2),S=k[0],I=k[1],F=Object(a.useState)(),L=Object(l.a)(F,2),P=L[0],A=L[1],B=Object(a.useState)(0),N=Object(l.a)(B,2),_=N[0],D=N[1],R=Object(a.useState)(0),T=Object(l.a)(R,2),U=T[0],H=T[1],J=Object(a.useState)(null),V=Object(l.a)(J,2),q=V[0],G=V[1],z=["Normal","Low","High"];Object(a.useEffect)((function(){return e=_,void(_>0&&function(){var t;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(b.delete("todo/".concat(e)));case 2:t=Object(E.a)(P.filter((function(t){return t.key!==e}))),A(t);case 4:case"end":return n.stop()}}))}());var e}),[_]),Object(a.useEffect)((function(){return e=U,void(U>0&&function(){var t,n;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=P.findIndex((function(t){return t.rowid===e})),(n=Object.assign({},P[t])).completed=1,a.next=5,i.a.awrap(b.put("todo/".concat(e),n));case 5:A(P.map((function(t){return t.rowid===e?n:t})));case 6:case"end":return a.stop()}}))}());var e}),[U]),Object(a.useEffect)((function(){var e;null!==(e=q)&&function(){var t,n;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=P.findIndex((function(t){return t.rowid===e.rowid})),(n=Object.assign({},P[t])).priority=e.e.target.value,a.next=5,i.a.awrap(b.put("todo/".concat(e.rowid),n));case 5:A(P.map((function(t){return t.rowid===e.rowid?n:t})));case 6:case"end":return a.stop()}}))}()}),[q]),Object(a.useEffect)((function(){if(e.data){I([{title:"Content",dataIndex:"content",key:"content"},{title:"Priority",dataIndex:"priority",render:function(e,t){return 0!=t.completed?r.a.createElement("div",null,z[t.priority]):r.a.createElement(O.a.Group,{defaultValue:t.priority,onChange:function(e){return function(e,t){return G({e:e,rowid:t})}(e,t.key)}},r.a.createElement(O.a.Button,{value:1},"Low"),r.a.createElement(O.a.Button,{value:0},"Normal"),r.a.createElement(O.a.Button,{value:2},"High"))}},{title:"Status",dataIndex:"completed",render:function(e,t){return"0"==e?r.a.createElement(j.a,{type:"primary",onClick:function(){return e=t.key,H(e);var e}},"Complete"):r.a.createElement(w.a,{color:"blue"},"Completed")}},{title:"...",dataIndex:"operation",render:function(e,t){return r.a.createElement(y.a,{title:"Sure to delete?",onConfirm:function(){return e=t.key,D(e);var e}},r.a.createElement("a",null,"Delete"))}}]);var t=e.data.map((function(e){return Object(v.a)({},e,{key:e.rowid})}));A(t)}}),[e.data]);return S?r.a.createElement("div",null,r.a.createElement(j.a,{onClick:function(){return o(!0)},type:"primary",style:{margin:10}},"Add new Todo"),r.a.createElement(g.a,{columns:S,dataSource:P,pagination:!1,scroll:{y:240}}),r.a.createElement(h.a,{title:"New Todo",visible:c,onOk:function(){m(p+1)},confirmLoading:s,onCancel:function(){o(!1)}},r.a.createElement(C,{submitFlag:p,handleEditOk:function(e){!function(){var t,n;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(b.post("todo",e));case 2:t=a.sent,(n=t.data).key=n.rowid,A([n].concat(Object(E.a)(P))),o(!1);case 7:case"end":return a.stop()}}))}()}}))):r.a.createElement(r.a.Fragment,null)}var I=s.a.Content;function F(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),f=u[0],p=u[1];return Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,i.a.awrap(b.get("todos"));case 3:e=t.sent,c(e.data),p(!1);case 6:case"end":return t.stop()}}))}()}),[]),f?r.a.createElement(d.a,{tip:"Loading..."}):r.a.createElement(s.a,null,r.a.createElement(I,null,r.a.createElement("div",{style:{padding:24,background:"#fff",textAlign:"center"}},r.a.createElement(S,{data:n}))))}o.a.render(r.a.createElement(F,null),document.getElementById("root"))},71:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.e51156d4.chunk.js.map