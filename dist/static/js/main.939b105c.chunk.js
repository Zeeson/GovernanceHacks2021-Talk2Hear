(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{373:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),i=n(210),r=n.n(i),s=n(9),l=n(6),o=n(12),d=Object(o.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/create",children:"New Post"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/spending/form",children:"Spending "})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})]})]})})),j=function(){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signup",children:"Signup"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signin",children:"Login"})]})]})},h=Object(o.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,c=t.uid?Object(a.jsx)(d,{profile:n}):Object(a.jsx)(j,{});return Object(a.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(s.b,{to:"/",className:"brand-logo",children:"Talk2Hear"}),c]})})})),u=n(53),b=n.n(u),p=function(e){var t=e.notifications;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"card z-depth-0",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title",children:"Happening now"}),Object(a.jsx)("ul",{className:"online-users",children:t&&t.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(a.jsx)("span",{children:e.content}),Object(a.jsx)("div",{className:"note-date grey-text",children:b()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})},O=function(e){var t=e.project;return Object(a.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(a.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)("span",{className:"card-title ",children:t.title}),Object(a.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)("p",{className:"grey-text",children:b()(t.createdAt.toDate()).calendar()})]})})},m=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(a.jsx)(s.b,{to:"/project/"+e.id,children:Object(a.jsx)(O,{project:e})},e.id)}))})},x=n(30),f=n(21),g=Object(f.d)(Object(o.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notificatio}})),Object(x.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))((function(e){var t=e.projects,n=e.auth,c=e.notifications;return n.uid?Object(a.jsx)("div",{className:"dashboard container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(m,{projects:t})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)(p,{notifications:c})})]})}):Object(a.jsx)(l.a,{to:"/signin"})})),v=Object(f.d)(Object(o.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(x.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(a.jsx)("div",{className:"container section project-details",children:Object(a.jsxs)("div",{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)("span",{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(a.jsxs)("div",{children:[" ",b()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading project..."})}):Object(a.jsx)(l.a,{to:"/signin"})})),N=n(28),C=n(31),y=n(32),S=n(34),E=n(33),w=function(e){Object(S.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Sign In"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:" Email "}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:" Password "}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Login"}),Object(a.jsx)("div",{className:"center red-text",children:t?Object(a.jsx)("p",{children:t}):null})]})]})})}}]),n}(c.Component),R=Object(o.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(w),U=function(e){Object(S.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{className:"white",onSubmit:this.handleSubmit,children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(a.jsx)("div",{className:"center red-text",children:n?Object(a.jsx)("p",{children:n}):null})]})]})})}}]),n}(c.Component),F=Object(o.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var c=a.getFirebase,i=a.getFirestore,r=c(),s=i();r.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(U),P=n(138),I=n(22),k=function(e){return function(t,n,a){var c=a.getFirestore,i=(a.getFirebase,c()),r=n().firebase.profile,s=n().firebase.auth.uid;i.collection("projects").add(Object(I.a)(Object(I.a)({},e),{},{authorFirstName:r.firstName,authorLastName:r.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},A=function(e){Object(S.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:"",imageData:[],imageUrl:"",videoData:[],videoUrl:""},e.handleChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(P.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(P.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e}return Object(y.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Post New Update / News"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Title "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Post Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]})}):Object(a.jsx)(l.a,{to:"/signin"})}}]),n}(c.Component);var L=Object(o.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(k(t))}}}))(A),T=function(e){Object(S.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(N.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(y.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Report Public or Private Persons' Spending Ananymously"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Title "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Post Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]}),Object(a.jsx)(s.c,{to:"/",children:Object(a.jsx)("button",{className:"btn blue lighten-1 z-index-0",children:"View other ananymous reports"})})]}):Object(a.jsx)(l.a,{to:"/signin"})}}]),n}(c.Component);var _=Object(o.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(k(t))}}}))(T);var D=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:g}),Object(a.jsx)(l.b,{path:"/project/:id",component:v}),Object(a.jsx)(l.b,{path:"/signin",component:R}),Object(a.jsx)(l.b,{path:"/signup",component:F}),Object(a.jsx)(l.b,{path:"/create",component:L}),Object(a.jsx)(l.b,{path:"/spending/form",component:_})]})]})})},z=(n(373),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,405)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))}),G={authError:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(I.a)(Object(I.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(I.a)(Object(I.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(I.a)(Object(I.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(I.a)(Object(I.a)({},e),{},{authError:t.err.message});default:return e}},J={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created this:",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("error created!",t.err),e;default:return e}},K=n(67),Q=Object(f.c)({auth:B,project:V,firestore:K.firestoreReducer,firebase:x.firebaseReducer}),Y=n(214),H=n(94);n(404),n(401);H.a.initializeApp({apiKey:"AIzaSyA8Z--tkEjjbYEkBhYKu7EXSlSbXuaQzYU",authDomain:"talk2hear.firebaseapp.com",projectId:"talk2hear",storageBucket:"talk2hear.appspot.com",messagingSenderId:"719330214199",appId:"1:719330214199:web:e68a2da61702a79d965ab2",measurementId:"G-NKQ20TQNZE"}),H.a.firestore().settings({timestampsInSnapshorts:!0});var W=H.a,X=Object(f.e)(Q,Object(f.d)(Object(f.a)(Y.a.withExtraArgument({getFirestore:K.getFirestore,getFirebase:x.getFirebase})),Object(K.reduxFirestore)(W),Object(x.reactReduxFirebase)(W,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));X.firebaseAuthIsReady.then((function(){r.a.render(Object(a.jsx)(o.a,{store:X,children:Object(a.jsx)(D,{})}),document.getElementById("root"))})),z()}},[[403,1,2]]]);
//# sourceMappingURL=main.939b105c.chunk.js.map