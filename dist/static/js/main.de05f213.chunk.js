(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{384:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n(216),c=n.n(r),s=n(9),o=n(10),l=n(5),d=n(225),u=n(12),j=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/create",children:"New Report"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/spending/form",children:"Spending Report"})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})]})]})})),h=function(){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signup",children:"Sign Up"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signin",children:"Sign In"})]})]})},b=n(6);function p(){var e=Object(l.a)(["\n\n\n  \n  ul li {\n    display: inline-block;\n    margin-left: 20px;\n    a {\n      color: #fff;\n    }\n\n  }\n\n  @media (max-width: 680px) {\n          position: absolute;\n          top: 10vh;\n          right: -300px;\n          background: #464546;\n          padding: 20px;\n          transition: all .5s;\n\n          &.menu-active {\n            right: 0;\n          }\n\n          ul li {\n    display: block;\n    margin: 20px 0;\n    a {\n      color: #fff;\n      font-size: 17pt;\n    }\n\n  }\n        }\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n        width: 100%;\n        height: 5px;\n        background: #fff;\n        border-radius: 20%;\n        position: absolute;\n        transition: all .5s;\n\n        &#bar-1 {\n            width: 50%;\n        }\n        &#bar-2 {\n            transform: translateY(15px);\n        }\n        &#bar-3 {\n            transform: translateY(30px);\n            width: 50%;\n            right: 0;\n        }\n\n\n"]);return f=function(){return e},e}function O(){var e=Object(l.a)(["\n        width: 40px;\n        height: 35px;\n        position: relative;\n        display: none;\n\n        @media (max-width: 680px) {\n          display: block;\n        }\n\n\n        &.active #bar-1 {\n            transform: translateY(15px) rotate(225deg);\n            width: 100%;\n        }\n\n        &.active #bar-2 {\n            transform: translateY(15px);\n            opacity: 0;\n        }\n        &.active #bar-3 {\n            transform: translateY(15px) rotate(-225deg);\n            width: 100%;\n            right: 0;\n        }\n"]);return O=function(){return e},e}function x(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10vh;\n    padding:  0 7%;\n    position:  fixed;\n    top: 0;\n    width: 100%;\n    z-index: 999;\n\n    .logo {\n      font-size: 20pt;\n      color: #fff;\n    }\n"]);return x=function(){return e},e}var m=b.a.div(x()),g=b.a.div(O()),v=b.a.div(f()),N=b.a.div(p()),y=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,r=t.uid?Object(a.jsx)(j,{profile:n}):Object(a.jsx)(h,{}),c=Object(i.useState)(!1),o=Object(d.a)(c,2),l=o[0],u=o[1];return Object(a.jsxs)(m,{className:"nav-wrapper grey darken-3",children:[Object(a.jsx)(s.b,{to:"/",className:"logo",children:"Talk2Hear"}),Object(a.jsxs)(g,{className:l?"active":"",onClick:function(){return u(!l)},children:[Object(a.jsx)(v,{id:"bar-1"}),Object(a.jsx)(v,{id:"bar-2"}),Object(a.jsx)(v,{id:"bar-3"})]}),Object(a.jsx)(N,{className:l?"menu-active":"",children:r})]})})),C=n(33),w=n.n(C);function S(){var e=Object(l.a)(["\n  padding: 5%;\n"]);return S=function(){return e},e}function E(){var e=Object(l.a)(["\n  padding: 5%;\n  box-shadow: 0 2px 3px #00000018;\n  border-radius: 10px;\n"]);return E=function(){return e},e}function R(){var e=Object(l.a)(["\n  margin-bottom: 5vh;\n"]);return R=function(){return e},e}var A=b.a.span(R()),U=b.a.ul(E()),k=b.a.li(S()),I=function(e){var t=e.notifications;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"card z-depth-0",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)(A,{className:"card-title",children:"Happening now"}),Object(a.jsx)(U,{className:"online-users",children:t&&t.map((function(e){return Object(a.jsxs)(k,{children:[Object(a.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(a.jsx)("span",{children:e.content}),Object(a.jsx)("div",{className:"note-date grey-text",children:w()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})};function F(){var e=Object(l.a)(["\nfont-size: 8pt;\n"]);return F=function(){return e},e}function L(){var e=Object(l.a)(["\nfont-size: 10pt;\n"]);return L=function(){return e},e}function J(){var e=Object(l.a)(["\nfont-size: 12pt;\n\n"]);return J=function(){return e},e}function Y(){var e=Object(l.a)(["\ntext-transform: capitalize;\nfont-size: 17pt;\nmargin-bottom: 3vh;\n"]);return Y=function(){return e},e}function z(){var e=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\nobject-fit: cover;\n"]);return z=function(){return e},e}function P(){var e=Object(l.a)(["\n\n"]);return P=function(){return e},e}function X(){var e=Object(l.a)(["\n  margin-right: 2vw;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 6px;\n"]);return X=function(){return e},e}function D(){var e=Object(l.a)(["\ndisplay: flex;\nalign-items: center;\n  border-radius: 10px;\n  box-shadow: 0 2px 3px #00000024;\n  margin-bottom: 5vh;\n  padding: 15px 15px;\n"]);return D=function(){return e},e}var T=b.a.div(D()),M=b.a.div(X()),G=b.a.div(P()),B=b.a.img(z()),W=b.a.span(Y()),K=b.a.p(J()),V=b.a.p(L()),Z=b.a.p(F()),q=function(e){var t=e.project;return Object(a.jsxs)(T,{children:[Object(a.jsx)(M,{children:Object(a.jsx)(B,{src:"data:image/png;base64,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",alt:""})}),Object(a.jsxs)(G,{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)(W,{children:t.title}),Object(a.jsxs)(K,{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)(V,{className:"grey-text",children:w()(t.createdAt.toDate()).calendar()}),Object(a.jsx)(Z,{children:" 3 points earned "})]})]})},Q=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(a.jsx)(s.b,{to:"/project/"+e.id,children:Object(a.jsx)(q,{project:e})},e.id)}))})},H=n(27),_=n(19);function $(){var e=Object(l.a)(["\nmargin-top: 15vh;\n"]);return $=function(){return e},e}var ee=b.a.div($()),te=Object(_.d)(Object(u.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(H.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))((function(e){var t=e.projects,n=e.auth,i=e.notifications;return n.uid?Object(a.jsx)(ee,{className:"dashboard container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(Q,{projects:t})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)(I,{notifications:i})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}));function ne(){var e=Object(l.a)(["\ntext-transform: capitalize;\nfont-size: 20pt;\nmargin-bottom: 3vh;\n"]);return ne=function(){return e},e}function ae(){var e=Object(l.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 75%;\n  @media (max-width: 950px) {\n\n  width: 95%;\n        }\n"]);return ae=function(){return e},e}function ie(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5%;\nmargin-top: 15vh;\n"]);return ie=function(){return e},e}var re=b.a.div(ie()),ce=b.a.div(ae()),se=b.a.span(ne()),oe=Object(_.d)(Object(u.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(H.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(a.jsx)(re,{children:Object(a.jsxs)(ce,{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)(se,{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(a.jsxs)("div",{children:[" ",w()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading project..."})}):Object(a.jsx)(o.a,{to:"/signin"})})),le=n(31),de=n(34),ue=n(35),je=n(37),he=n(36),be=n.p+"static/media/img.a0eb9c50.png";function pe(){var e=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return pe=function(){return e},e}function fe(){var e=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\n\n@media (max-width: 950px) {\n          display: none;\n        }\n"]);return fe=function(){return e},e}function Oe(){var e=Object(l.a)(["\npadding: 5%;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(l.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return xe=function(){return e},e}function me(){var e=Object(l.a)(["\ndisplay: grid;\ngrid-template-columns: 60% auto;\nwidth: 75%;\nheight: 60vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n<<<<<<< HEAD\n=======\n@media (max-width: 1050px) {\n\n        }\n\n        @media (max-width: 950px) {\n  grid-template-columns: 1fr;\n  width: 85%;\n  height: auto;\n        }\n\n>>>>>>> 969cd765c14d095549b6be7a2a63021ee9445ad7\n"]);return me=function(){return e},e}function ge(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\n"]);return ge=function(){return e},e}var ve=function(e){Object(je.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(de.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(le.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(ue.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(Ne,{children:Object(a.jsxs)(ye,{children:[Object(a.jsxs)(we,{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)(Ce,{children:" Sign In"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:" Email "}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:" Password "}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Login"}),Object(a.jsx)("div",{className:"center red-text",children:t?Object(a.jsx)("p",{children:t}):null})]}),Object(a.jsx)(s.c,{to:"/signup",children:Object(a.jsx)("button",{className:"btn-large green z-index-0",children:"Create New Account"})})]}),Object(a.jsx)(Se,{children:Object(a.jsx)(Ee,{src:be,alt:""})})]})})}}]),n}(i.Component),Ne=b.a.div(ge()),ye=b.a.div(me()),Ce=b.a.h5(xe()),we=b.a.form(Oe()),Se=b.a.div(fe()),Ee=b.a.img(pe()),Re=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(ve);function Ae(){var e=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return Ae=function(){return e},e}function Ue(){var e=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\n\n@media (max-width: 950px) {\n          display: none;\n        }\n"]);return Ue=function(){return e},e}function ke(){var e=Object(l.a)(["\npadding: 5%;\n"]);return ke=function(){return e},e}function Ie(){var e=Object(l.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return Ie=function(){return e},e}function Fe(){var e=Object(l.a)(["\ndisplay: grid;\ngrid-template-columns: auto 60%;\nwidth: 75%;\nheight: 70vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n@media (max-width: 950px) {\n  grid-template-columns: 1fr;\n  width: 85%;\n  height: auto;\n        }\n\n"]);return Fe=function(){return e},e}function Le(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\n\n"]);return Le=function(){return e},e}var Je=function(e){Object(je.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(de.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(le.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(ue.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(Ye,{children:Object(a.jsxs)(ze,{children:[Object(a.jsx)(De,{children:Object(a.jsx)(Te,{src:be,alt:""})}),Object(a.jsxs)(Xe,{className:"white",onSubmit:this.handleSubmit,children:[Object(a.jsx)(Pe,{children:"Sign Up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(a.jsx)("div",{className:"center red-text",children:n?Object(a.jsx)("p",{children:n}):null})]}),Object(a.jsxs)(s.c,{to:"/signin",children:["Have an accout? ",Object(a.jsx)("button",{className:"btn-small bold green z-index-0 ",children:"Sign In"})]})]})]})})}}]),n}(i.Component),Ye=b.a.div(Le()),ze=b.a.div(Fe()),Pe=b.a.h5(Ie()),Xe=b.a.form(ke()),De=b.a.div(Ue()),Te=b.a.img(Ae()),Me=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var i=a.getFirebase,r=a.getFirestore,c=i(),s=r();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(Je),Ge=n(57),Be=n(17);function We(){var e=Object(l.a)(["\nmargin-top: 15vh;\n"]);return We=function(){return e},e}var Ke=function(e){Object(je.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(de.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",content:"",imageData:[],imageUrl:"",videoData:[],videoUrl:""},e.handleChange=function(t){e.setState(Object(le.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Ge.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Ge.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e}return Object(ue.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsx)(Ve,{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Post New Update / News"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Title "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Post Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component),Ve=b.a.div(We());var Ze=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,n,a){var i=a.getFirestore,r=(a.getFirebase,i()),c=n().firebase.profile,s=n().firebase.auth.uid;r.collection("projects").add(Object(Be.a)(Object(Be.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(Ke),qe=n(223);function Qe(){var e=Object(l.a)(["\nmargin-top: 15vh;\n"]);return Qe=function(){return e},e}var He=function(e){Object(je.a)(n,e);var t=Object(he.a)(n);function n(){var e;Object(de.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",name:"",content:"",notables:"",imageData:[],imageUrl:"",videoData:[],videoUrl:"",value:"Select Noteables",region:"",country:"Nigeria"},e.handleChange=function(t){e.setState(Object(le.a)({},t.target.id,t.target.value))},e.handleSelectChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.createSpending(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Ge.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Ge.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e.selectRegion=function(t){e.setState({region:t})},e}return Object(ue.a)(n,[{key:"componentDidMount",value:function(){window.$(document).ready((function(){window.$("select").not(".disabled").formSelect()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.country,i=t.region;return this.props.auth.uid?Object(a.jsxs)(_e,{className:"container",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Report Public or Private Notables' Spending Ananymously"}),Object(a.jsx)("p",{className:"grey-text text-darken-3",children:" Select from below or type if not found"}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{value:this.state.value,onChange:this.handleSelectChange,className:"input-field dark-gray",children:[Object(a.jsx)("option",{value:"",selected:!0,children:"Select Notables"}),Object(a.jsxs)("optgroup",{label:"Government",children:[Object(a.jsx)("option",{value:"1",children:"President Muhammadu Buhari"}),Object(a.jsx)("option",{value:"2",children:"Vice President Yemi Oshinbajo"}),Object(a.jsx)("option",{value:"3",children:"Abdullahi Adamu"}),Object(a.jsx)("option",{value:"4",children:"Oby Ezekwesili"})]}),Object(a.jsxs)("optgroup",{label:"Private Business",children:[Object(a.jsx)("option",{value:"5",children:"Aliko Dangote"}),Object(a.jsx)("option",{value:"6",children:"Femi Otedola"}),Object(a.jsx)("option",{value:"7",children:"Mike Adenuga"}),Object(a.jsx)("option",{value:"8",children:"Folorunso Alakija"})]})]})}),Object(a.jsx)("p",{className:"red-text",children:"* Note: If Notables not above, Enter their names below:"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"notables",children:" Enter Notables "}),Object(a.jsx)("input",{type:"text",id:"notables",onChange:this.handleChange})]}),Object(a.jsx)(qe.a,{className:"input-field",country:n,value:i,defaultOptionLabel:"Select State",onChange:function(t){return e.selectRegion(t)}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Select Sector"}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"sector",type:"radio",checked:!0}),Object(a.jsx)("span",{children:"Public"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"sector",type:"radio"}),Object(a.jsx)("span",{children:"Private"})]})})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" What would you like to say: "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]}),Object(a.jsx)("div",{children:Object(a.jsx)(s.c,{to:"/",children:Object(a.jsx)("button",{className:"btn green lighten-1 z-index-0",children:"View other ananymous reports"})})})]}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component),_e=b.a.div(Qe());var $e=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createSpending:function(t){return e(function(e){return function(t,n,a){var i=a.getFirestore,r=(a.getFirebase,i()),c=n().firebase.profile,s=n().firebase.auth.uid;r.collection("spending").add(Object(Be.a)(Object(Be.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,ananymous:"ananymous",createdAt:new Date})).then((function(){t({type:"CREATE_SPENDING",spending:e})})).catch((function(e){t({type:"CREATE_SPENDING_ERROR",err:e})}))}}(t))}}}))(He);function et(){var e=Object(l.a)(["\ntext-transform: capitalize;\nfont-size: 20pt;\nmargin-bottom: 3vh;\n"]);return et=function(){return e},e}function tt(){var e=Object(l.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 75%;\n"]);return tt=function(){return e},e}function nt(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5%;\n"]);return nt=function(){return e},e}var at=b.a.div(nt()),it=b.a.div(tt()),rt=b.a.span(et()),ct=Object(_.d)(Object(u.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.spendings;return{spending:a?a[n]:null,auth:e.firebase.auth}})),Object(H.firestoreConnect)([{collection:"spendings"}]))((function(e){var t=e.spending;return e.auth.uid?t?Object(a.jsx)(at,{children:Object(a.jsxs)(it,{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)(rt,{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.ananymous," "]}),Object(a.jsxs)("div",{children:[" ",w()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading ..."})}):Object(a.jsx)(o.a,{to:"/signin"})}));var st=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:te}),Object(a.jsx)(o.b,{path:"/project/:id",component:oe}),Object(a.jsx)(o.b,{path:"/signin",component:Re}),Object(a.jsx)(o.b,{path:"/signup",component:Me}),Object(a.jsx)(o.b,{path:"/create",component:Ze}),Object(a.jsx)(o.b,{path:"/spending/form",component:$e}),Object(a.jsx)(o.b,{path:"/spending/:id",component:ct})]})]})})},ot=(n(384),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,416)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))}),lt={authError:null},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(Be.a)(Object(Be.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(Be.a)(Object(Be.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(Be.a)(Object(Be.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(Be.a)(Object(Be.a)({},e),{},{authError:t.err.message});default:return e}},ut={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created this:",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("error created!",t.err),e;default:return e}},ht={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SPENDING":return console.log("created this:",t.spending),e;case"CREATE_SPENDING_ERROR":return console.log("error created!",t.err),e;default:return e}},pt=n(72),ft=Object(_.c)({auth:dt,project:jt,spending:bt,firestore:pt.firestoreReducer,firebase:H.firebaseReducer}),Ot=n(224),xt=n(100);n(415),n(412);xt.a.initializeApp({apiKey:"AIzaSyA8Z--tkEjjbYEkBhYKu7EXSlSbXuaQzYU",authDomain:"talk2hear.firebaseapp.com",projectId:"talk2hear",storageBucket:"talk2hear.appspot.com",messagingSenderId:"719330214199",appId:"1:719330214199:web:e68a2da61702a79d965ab2",measurementId:"G-NKQ20TQNZE"}),xt.a.firestore().settings({timestampsInSnapshorts:!0});var mt=xt.a,gt=Object(_.e)(ft,Object(_.d)(Object(_.a)(Ot.a.withExtraArgument({getFirestore:pt.getFirestore,getFirebase:H.getFirebase})),Object(pt.reduxFirestore)(mt),Object(H.reactReduxFirebase)(mt,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));gt.firebaseAuthIsReady.then((function(){c.a.render(Object(a.jsx)(u.a,{store:gt,children:Object(a.jsx)(st,{})}),document.getElementById("root"))})),ot()}},[[414,1,2]]]);
//# sourceMappingURL=main.de05f213.chunk.js.map