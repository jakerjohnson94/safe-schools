(window["webpackJsonpsafe-schools"]=window["webpackJsonpsafe-schools"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/pike_main.5f3fd664.png"},17:function(e,t,a){e.exports=a.p+"static/media/pike-header.b9b0470d.jpg"},18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAnlJREFUSA3Fl79qFFEUh9VEI7GwEknlRg0qq4Kgrc+QShBimVoT3yEvYSViI4rYig8QFG0k+CcaG8F0aWKICOr3zc5ZrpNx5prVzA++nbN3zvmdzJ27dyZj+/J1gNQZuAqzcBduwiQcgx+wAT/hn2gKl9uwDFugcR2eM8dca3atQ1QuwmdIG23y/SO8KjF2LM2xxlo9/ko9sp9CmHk1D+E6nIIj4NSLsWOeMyedFT16kKXzZL2HaPqY+FJW5SDJXGuiXi89G3WCs6tg0Te4BbuVtXropafetZpg9BmYuA1O3ajSQy899bbHDi0wYoKMcqVVY73C1x6/6TjfvoAJT2A/NMlFNVdi3CS99NTbHvYayt+eJ1yRF4ejfw7OcSquwrhNesZqt1ehcT6fg0aPipH2j8tlvjXGOdLbfHuNO03TcAHUg8Gh9VODUBrHWN0xvO01beM+HAan4gXk6HuSlMbJ8I5Qb3vYq+80xz3yxq9DVS6Os+AOFVcXNeZ6/w4aIHO/wluIXMJCetvDXa6oXyMw6SXUrVBXb2wE5rVhrjVV6W0P69fqGlUL/st3p/oOLMFRcP69D6nu88W/tDrV98qkGxzflHE61eXQ8KC3PZQ9i4e6l++9OelAhryvMeU5v3st9baHdbNO9Qq4n07CFchRLCZz07ipVm972GvFxp/gNahrg0Prp1MaSuMYqzuGt73sWaiTLdPOnT0kbN7JY9HGE+DD2lXnAtizFwF6Fa8nqxxt7g40ygtB9qsPfQp18rIXzXsEe/56G807eaGP5h6nwN/5MriPe//r8Jw55lrTqNxdRxN3udPQhzMwD8oN/x249X4A/3lr1S8MHuMMmohXNQAAAABJRU5ErkJggg=="},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(27),a(19)),s=a(6),i=a(4),u=a(16),m=a.n(u);var p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),u=s[0],p=s[1],d=e.history;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:m.a,alt:"Pike High School"})),r.a.createElement("h3",{className:"page-subtitle login-subtitle"},"Safe schools. Safe communities."),r.a.createElement("p",{className:"err-msg"},u),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("p",{className:"input-title"},"Student Number"),r.a.createElement("input",{className:"input-box student-num-input",type:"text",value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("button",{className:"btn login-btn",onClick:function(){!function(e){var t=e.trim();return t&&""!==t}(c)?p("Invalid Student Number. Please check the number and try again. "):d.push({pathname:"/report/1",state:{studentId:c}})}},"Login"))},d=a(12),h=a(17),v=a.n(h);var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img-top-wrapper"},r.a.createElement("img",{src:v.a,alt:"Pike High School",className:"header-img"})),r.a.createElement("h1",{className:"header-title"},"Make a Report"),r.a.createElement("p",{className:"header-subtitle"},"Remember, all reports are anonymous."))},f=a(18),b=a.n(f);var g=function(e){var t=e.history,a=e.location,c=Object(n.useState)("student"),l=Object(i.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)([""]),m=Object(i.a)(u,2),p=m[0],h=m[1],v=Object(n.useState)(""),f=Object(i.a)(v,2),g=f[0],N=f[1];return a&&a.state?r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("button",{className:"back-btn",onClick:function(){return t.goBack()}},"Back"),r.a.createElement(E,null),r.a.createElement("p",{className:"err-msg"},g),r.a.createElement("div",{className:"report-form-wrapper"},r.a.createElement("p",{className:"report-form-title"},"I'd like to report a:"),r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"student"},r.a.createElement("input",{type:"radio",name:"student",value:"student",id:"student",className:"radio-btn",onChange:function(e){return s(e.target.value)},checked:"student"===o}),"Student")),r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"staffFaculty"},r.a.createElement("input",{type:"radio",name:"staffFaculty",value:"staffFaculty",id:"staffFaculty",className:"radio-btn",onChange:function(e){return s(e.target.value)},checked:"staffFaculty"===o}),"Staff or faculty member")),r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"other"},r.a.createElement("input",{type:"radio",name:"other",value:"other",id:"other",className:"radio-btn",onChange:function(e){return s(e.target.value)},checked:"other"===o}),"Someone Else")))}),null),r.a.createElement("div",{className:"report-input-wrapper"},r.a.createElement("p",{className:"report-input-title"},"Who is involved?"),p.map((function(e,t){return r.a.createElement("div",{key:t,className:"person-input-wrapper"},r.a.createElement("input",{value:p[t],onChange:function(e){return function(e,t){var a=p;a.splice(t,1,e.target.value),h(Object(d.a)(a))}(e,t)}}))})),r.a.createElement("img",{src:b.a,alt:"",onClick:function(){return h([].concat(Object(d.a)(p),[""]))}}),r.a.createElement("span",{className:"add-person-text"},"add person")),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("div",{className:"btn",onClick:function(){""!==p.join("")?t.push({pathname:"/report/2",state:{studentId:a.state.studentId,involvedPosition:o,involvedNames:p.filter((function(e){return""!==e}))}}):N("Please enter the name of the person involved")}},"Next")))):function(){return t.push("/")}};var N=function(e){var t=e.history,a=e.location,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)("notSure"),v=Object(i.a)(h,2),f=v[0],b=v[1],g=Object(n.useState)(!1),N=Object(i.a)(g,2),w=N[0],y=N[1];if(!a||!a.state)return function(){return t.push("/")};var A=a.state,S=A.involvedPosition,O=A.involvedNames,k=A.studentId;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(E,null),r.a.createElement("p",{className:"err-msg"},o),r.a.createElement("div",{className:"report-form-wrapper"},r.a.createElement("p",{className:"report-form-title"},"Describe what's goin on"),r.a.createElement("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)},className:"description-input"}),r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"yes"},r.a.createElement("input",{type:"radio",name:"yes",value:"yes",id:"yes",className:"radio-btn",onChange:function(e){return b(e.target.value)},checked:"yes"===f}),"Yes")),r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"no"},r.a.createElement("input",{type:"radio",name:"no",value:"no",id:"no",className:"radio-btn",onChange:function(e){return b(e.target.value)},checked:"no"===f}),"No")),r.a.createElement("div",{className:"radio-wrapper"},r.a.createElement("label",{htmlFor:"notSure"},r.a.createElement("input",{type:"radio",name:"notSure",value:"notSure",id:"notSure",className:"radio-btn",onChange:function(e){return b(e.target.value)},checked:"notSure"===f}),"I'm not sure")))}),null)),r.a.createElement("div",{className:"understand-wrapper"},r.a.createElement("input",{type:"checkbox",value:w,checked:w,onChange:function(){return y(!w)},className:"understand-input"}),r.a.createElement("p",{className:"understand-title"},"I understand thatintentionally false reporting is unethical and a crime.")),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn",onClick:function(){w||p?w?p?t.push({pathname:"/report/complete",state:{studentId:k,involvedPosition:S,involvedNames:O,description:p,isDanger:f}}):s("Please fill out the description of events"):s("Please check the box below."):s("Please fill out all fields below.")}},"Report")))};function w(e){var t=e.history,a=e.location;if(!a||!a.state)return function(){return t.push("/")};var n=a.state;n.involvedPosition,n.involvedNames,n.studentId,n.description,n.isDanger;return r.a.createElement("div",null,JSON.stringify(a.state))}function y(){return r.a.createElement(o.a,{basename:"/safe-schools"},r.a.createElement(s.a,{path:"/",exact:!0,component:p}),r.a.createElement(s.a,{path:"/report/1",component:g}),r.a.createElement(s.a,{path:"/report/2",component:N}),r.a.createElement(s.a,{path:"/report/complete",component:w}))}var A=a(2);a(33);var S=function(){var e=Object(A.a)();return r.a.createElement(y,{history:e})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1828af54.chunk.js.map