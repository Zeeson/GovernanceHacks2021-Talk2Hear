(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{380:function(e,t,n){},410:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n(214),c=n.n(r),s=n(11),o=n(8),l=n(14),d=Object(l.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/create",children:"New Post"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/spending/form",children:"Spending "})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})]})]})})),j=function(){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signup",children:"Signup"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signin",children:"Login"})]})]})},u=Object(l.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,i=t.uid?Object(a.jsx)(d,{profile:n}):Object(a.jsx)(j,{});return Object(a.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(s.b,{to:"/",className:"brand-logo",children:"Talk2Hear"}),i]})})})),h=n(5),b=n(56),p=n.n(b),O=n(6);function f(){var e=Object(h.a)(["\n  padding: 5%;\n"]);return f=function(){return e},e}function x(){var e=Object(h.a)(["\n  padding: 5%;\n  box-shadow: 0 2px 3px #00000018;\n  border-radius: 10px;\n"]);return x=function(){return e},e}function m(){var e=Object(h.a)(["\n  margin-bottom: 5vh;\n"]);return m=function(){return e},e}var g=O.a.span(m()),v=O.a.ul(x()),N=O.a.li(f()),y=function(e){var t=e.notifications;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"card z-depth-0",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)(g,{className:"card-title",children:"Happening now"}),Object(a.jsx)(v,{className:"online-users",children:t&&t.map((function(e){return Object(a.jsxs)(N,{children:[Object(a.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(a.jsx)("span",{children:e.content}),Object(a.jsx)("div",{className:"note-date grey-text",children:p()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})};function C(){var e=Object(h.a)(["\nfont-size: 10pt;\n"]);return C=function(){return e},e}function w(){var e=Object(h.a)(["\nfont-size: 12pt;\n\n"]);return w=function(){return e},e}function S(){var e=Object(h.a)(["\ntext-transform: capitalize;\nfont-size: 17pt;\nmargin-bottom: 3vh;\n"]);return S=function(){return e},e}function U(){var e=Object(h.a)(["\n\n"]);return U=function(){return e},e}function E(){var e=Object(h.a)(["\n  border-radius: 10px;\n  box-shadow: 0 2px 3px #00000024;\n  margin-bottom: 5vh;\n  padding: 30px 25px;\n"]);return E=function(){return e},e}var R=O.a.div(E()),F=O.a.div(U()),I=O.a.span(S()),P=O.a.p(w()),k=O.a.p(C()),A=function(e){var t=e.project;return Object(a.jsx)(R,{children:Object(a.jsxs)(F,{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)(I,{children:t.title}),Object(a.jsxs)(P,{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)(k,{className:"grey-text",children:p()(t.createdAt.toDate()).calendar()})]})})},L=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(a.jsx)(s.b,{to:"/project/"+e.id,children:Object(a.jsx)(A,{project:e})},e.id)}))})},D=n(32),z=n(23),_=Object(z.d)(Object(l.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(D.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))((function(e){var t=e.projects,n=e.auth,i=e.notifications;return n.uid?Object(a.jsx)("div",{className:"dashboard container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(L,{projects:t})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)(y,{notifications:i})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}));function T(){var e=Object(h.a)(["\ntext-transform: capitalize;\nfont-size: 20pt;\nmargin-bottom: 3vh;\n"]);return T=function(){return e},e}function G(){var e=Object(h.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 75%;\n"]);return G=function(){return e},e}function B(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5%;\n"]);return B=function(){return e},e}var V=O.a.div(B()),J=O.a.div(G()),K=O.a.span(T()),Q=Object(z.d)(Object(l.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(D.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(a.jsx)(V,{children:Object(a.jsxs)(J,{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)(K,{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(a.jsxs)("div",{children:[" ",p()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading project..."})}):Object(a.jsx)(o.a,{to:"/signin"})})),Y=n(30),H=n(33),M=n(34),W=n(36),X=n(35),Z=n.p+"static/media/img.a0eb9c50.png";function q(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return q=function(){return e},e}function $(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return $=function(){return e},e}function ee(){var e=Object(h.a)(["\npadding: 5%;\n"]);return ee=function(){return e},e}function te(){var e=Object(h.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns: 60% auto;\nwidth: 60%;\nheight: 60vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n\n"]);return ne=function(){return e},e}function ae(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 80vh;\n"]);return ae=function(){return e},e}var ie=function(e){Object(W.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(M.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(re,{children:Object(a.jsxs)(ce,{children:[Object(a.jsxs)(oe,{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)(se,{children:" Sign In"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:" Email "}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:" Password "}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Login"}),Object(a.jsx)("div",{className:"center red-text",children:t?Object(a.jsx)("p",{children:t}):null})]})]}),Object(a.jsx)(le,{children:Object(a.jsx)(de,{src:Z,alt:""})})]})})}}]),n}(i.Component),re=O.a.div(ae()),ce=O.a.div(ne()),se=O.a.h5(te()),oe=O.a.form(ee()),le=O.a.div($()),de=O.a.img(q()),je=Object(l.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(ie);function ue(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return ue=function(){return e},e}function he(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\npadding: 5%;\n"]);return be=function(){return e},e}function pe(){var e=Object(h.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return pe=function(){return e},e}function Oe(){var e=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns: auto 60%;\nwidth: 60%;\nheight: 70vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n\n"]);return Oe=function(){return e},e}function fe(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 80vh;\n"]);return fe=function(){return e},e}var xe=function(e){Object(W.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(M.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(me,{children:Object(a.jsxs)(ge,{children:[Object(a.jsx)(ye,{children:Object(a.jsx)(Ce,{src:Z,alt:""})}),Object(a.jsxs)(Ne,{className:"white",onSubmit:this.handleSubmit,children:[Object(a.jsx)(ve,{children:"Sign Up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(a.jsx)("div",{className:"center red-text",children:n?Object(a.jsx)("p",{children:n}):null})]})]})]})})}}]),n}(i.Component),me=O.a.div(fe()),ge=O.a.div(Oe()),ve=O.a.h5(pe()),Ne=O.a.form(be()),ye=O.a.div(he()),Ce=O.a.img(ue()),we=Object(l.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var i=a.getFirebase,r=a.getFirestore,c=i(),s=r();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(xe),Se=n(57),Ue=n(24),Ee=function(e){return function(t,n,a){var i=a.getFirestore,r=(a.getFirebase,i()),c=n().firebase.profile,s=n().firebase.auth.uid;r.collection("projects").add(Object(Ue.a)(Object(Ue.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},Re=function(e){Object(W.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",content:"",imageData:[],imageUrl:"",videoData:[],videoUrl:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Se.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Se.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e}return Object(M.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Post New Update / News"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Title "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Post Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component);var Fe=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(Ee(t))}}}))(Re),Ie=function(e){Object(W.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",name:"",content:"",imageData:[],imageUrl:"",videoData:[],videoUrl:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Se.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Se.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e}return Object(M.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Report Public or Private Persons' Spending Ananymously"}),Object(a.jsx)("p",{className:"grey-text text-darken-3",children:" Select from below or type if not found"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Name "}),Object(a.jsxs)("select",{required:!0,className:"form-group form-control",onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"Select Name"}),Object(a.jsx)("option",{children:"President Muhammad Buhari"}),Object(a.jsx)("option",{children:"Mike Adenuga"}),Object(a.jsx)("option",{children:"Gov. Sanwolu"}),Object(a.jsx)("option",{children:"Sen. Ahmed Lawan"}),Object(a.jsx)("option",{children:"Alh. Dangote"}),Object(a.jsx)("option",{children:"Atiku Abubakar"}),Object(a.jsx)("option",{children:"Peter Obi"}),Object(a.jsx)("option",{children:"Rotimi Ameichi"})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"name",children:" Name "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]}),Object(a.jsx)("div",{children:Object(a.jsx)(s.c,{to:"/",children:Object(a.jsx)("button",{className:"btn green lighten-1 z-index-0",children:"View other ananymous reports"})})})]}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component);var Pe=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(Ee(t))}}}))(Ie);var ke=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:_}),Object(a.jsx)(o.b,{path:"/project/:id",component:Q}),Object(a.jsx)(o.b,{path:"/signin",component:je}),Object(a.jsx)(o.b,{path:"/signup",component:we}),Object(a.jsx)(o.b,{path:"/create",component:Fe}),Object(a.jsx)(o.b,{path:"/spending/form",component:Pe})]})]})})},Ae=(n(380),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,412)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))}),Le={authError:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:t.err.message});default:return e}},ze={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created this:",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("error created!",t.err),e;default:return e}},Te=n(71),Ge=Object(z.c)({auth:De,project:_e,firestore:Te.firestoreReducer,firebase:D.firebaseReducer}),Be=n(221),Ve=n(98);n(411),n(408);Ve.a.initializeApp({apiKey:"AIzaSyA8Z--tkEjjbYEkBhYKu7EXSlSbXuaQzYU",authDomain:"talk2hear.firebaseapp.com",projectId:"talk2hear",storageBucket:"talk2hear.appspot.com",messagingSenderId:"719330214199",appId:"1:719330214199:web:e68a2da61702a79d965ab2",measurementId:"G-NKQ20TQNZE"}),Ve.a.firestore().settings({timestampsInSnapshorts:!0});var Je=Ve.a,Ke=Object(z.e)(Ge,Object(z.d)(Object(z.a)(Be.a.withExtraArgument({getFirestore:Te.getFirestore,getFirebase:D.getFirebase})),Object(Te.reduxFirestore)(Je),Object(D.reactReduxFirebase)(Je,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Ke.firebaseAuthIsReady.then((function(){c.a.render(Object(a.jsx)(l.a,{store:Ke,children:Object(a.jsx)(ke,{})}),document.getElementById("root"))})),Ae()}},[[410,1,2]]]);
//# sourceMappingURL=main.7fd5f1ab.chunk.js.map