(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{381:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n(214),c=n.n(r),s=n(9),o=n(10),l=n(12),d=Object(l.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/create",children:"New Report"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/spending/form",children:"Spending Report"})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})]})]})})),j=function(){return Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signup",children:"Sign Up"})]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(s.c,{to:"/signin",children:"Sign In"})]})]})},u=Object(l.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,i=t.uid?Object(a.jsx)(d,{profile:n}):Object(a.jsx)(j,{});return Object(a.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(s.b,{to:"/",className:"brand-logo",children:"Talk2Hear"}),i]})})})),h=n(5),b=n(33),p=n.n(b),O=n(6);function f(){var e=Object(h.a)(["\n  padding: 5%;\n"]);return f=function(){return e},e}function x(){var e=Object(h.a)(["\n  padding: 5%;\n  box-shadow: 0 2px 3px #00000018;\n  border-radius: 10px;\n"]);return x=function(){return e},e}function m(){var e=Object(h.a)(["\n  margin-bottom: 5vh;\n"]);return m=function(){return e},e}var g=O.a.span(m()),v=O.a.ul(x()),N=O.a.li(f()),y=function(e){var t=e.notifications;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"card z-depth-0",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)(g,{className:"card-title",children:"Happening now"}),Object(a.jsx)(v,{className:"online-users",children:t&&t.map((function(e){return Object(a.jsxs)(N,{children:[Object(a.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(a.jsx)("span",{children:e.content}),Object(a.jsx)("div",{className:"note-date grey-text",children:p()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})};function w(){var e=Object(h.a)(["\nfont-size: 8pt;\n"]);return w=function(){return e},e}function S(){var e=Object(h.a)(["\nfont-size: 10pt;\n"]);return S=function(){return e},e}function C(){var e=Object(h.a)(["\nfont-size: 12pt;\n\n"]);return C=function(){return e},e}function E(){var e=Object(h.a)(["\ntext-transform: capitalize;\nfont-size: 17pt;\nmargin-bottom: 3vh;\n"]);return E=function(){return e},e}function R(){var e=Object(h.a)(["\n\n"]);return R=function(){return e},e}function U(){var e=Object(h.a)(["\n  border-radius: 10px;\n  box-shadow: 0 2px 3px #00000024;\n  margin-bottom: 5vh;\n  padding: 30px 25px;\n"]);return U=function(){return e},e}var I=O.a.div(U()),F=O.a.div(R()),k=O.a.span(E()),A=O.a.p(C()),P=O.a.p(S()),D=O.a.p(w()),z=function(e){var t=e.project;return Object(a.jsx)(I,{children:Object(a.jsxs)(F,{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)(k,{children:t.title}),Object(a.jsxs)(A,{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(a.jsx)(P,{className:"grey-text",children:p()(t.createdAt.toDate()).calendar()}),Object(a.jsx)(D,{children:" 3 points earned "})]})})},L=function(e){var t=e.projects;return Object(a.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(a.jsx)(s.b,{to:"/project/"+e.id,children:Object(a.jsx)(z,{project:e})},e.id)}))})},_=n(27),T=n(19),G=Object(T.d)(Object(l.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(_.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))((function(e){var t=e.projects,n=e.auth,i=e.notifications;return n.uid?Object(a.jsx)("div",{className:"dashboard container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col s12 m6",children:Object(a.jsx)(L,{projects:t})}),Object(a.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(a.jsx)(y,{notifications:i})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}));function B(){var e=Object(h.a)(["\ntext-transform: capitalize;\nfont-size: 20pt;\nmargin-bottom: 3vh;\n"]);return B=function(){return e},e}function V(){var e=Object(h.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 75%;\n"]);return V=function(){return e},e}function J(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5%;\n"]);return J=function(){return e},e}var Y=O.a.div(J()),H=O.a.div(V()),K=O.a.span(B()),M=Object(T.d)(Object(l.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(_.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(a.jsx)(Y,{children:Object(a.jsxs)(H,{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)(K,{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(a.jsxs)("div",{children:[" ",p()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading project..."})}):Object(a.jsx)(o.a,{to:"/signin"})})),Q=n(31),W=n(34),X=n(35),Z=n(37),$=n(36),q=n.p+"static/media/img.a0eb9c50.png";function ee(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return ee=function(){return e},e}function te(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\npadding: 5%;\n"]);return ne=function(){return e},e}function ae(){var e=Object(h.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return ae=function(){return e},e}function ie(){var e=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns: 60% auto;\nwidth: 60%;\nheight: 60vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n"]);return ie=function(){return e},e}function re(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 80vh;\n"]);return re=function(){return e},e}var ce=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(X.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(se,{children:Object(a.jsxs)(oe,{children:[Object(a.jsxs)(de,{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)(le,{children:" Sign In"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:" Email "}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:" Password "}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Login"}),Object(a.jsx)("div",{className:"center red-text",children:t?Object(a.jsx)("p",{children:t}):null})]}),Object(a.jsx)(s.c,{to:"/signup",children:Object(a.jsx)("button",{className:"btn-large green z-index-0",children:"Create New Account"})})]}),Object(a.jsx)(je,{children:Object(a.jsx)(ue,{src:q,alt:""})})]})})}}]),n}(i.Component),se=O.a.div(re()),oe=O.a.div(ie()),le=O.a.h5(ae()),de=O.a.form(ne()),je=O.a.div(te()),ue=O.a.img(ee()),he=Object(l.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(ce);function be(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return be=function(){return e},e}function pe(){var e=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return pe=function(){return e},e}function Oe(){var e=Object(h.a)(["\npadding: 5%;\n"]);return Oe=function(){return e},e}function fe(){var e=Object(h.a)(["\ncolor: #2d5bda;\nmargin-bottom: 30px;\n"]);return fe=function(){return e},e}function xe(){var e=Object(h.a)(["\ndisplay: grid;\ngrid-template-columns: auto 60%;\nwidth: 60%;\nheight: 70vh;\nborder-radius: 20px;\nbox-shadow: 0 2px 5px rgba(0,0,0,0.3);\noverflow: hidden;\n\n"]);return xe=function(){return e},e}function me(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 80vh;\n"]);return me=function(){return e},e}var ge=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(X.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsx)(ve,{children:Object(a.jsxs)(Ne,{children:[Object(a.jsx)(Se,{children:Object(a.jsx)(Ce,{src:q,alt:""})}),Object(a.jsxs)(we,{className:"white",onSubmit:this.handleSubmit,children:[Object(a.jsx)(ye,{children:"Sign Up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(a.jsx)("div",{className:"center red-text",children:n?Object(a.jsx)("p",{children:n}):null})]}),Object(a.jsxs)(s.c,{to:"/signin",children:["Have an accout? ",Object(a.jsx)("button",{className:"btn-small bold green z-index-0 ",children:"Sign In"})]})]})]})})}}]),n}(i.Component),ve=O.a.div(me()),Ne=O.a.div(xe()),ye=O.a.h5(fe()),we=O.a.form(Oe()),Se=O.a.div(pe()),Ce=O.a.img(be()),Ee=Object(l.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var i=a.getFirebase,r=a.getFirestore,c=i(),s=r();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(ge),Re=n(57),Ue=n(17),Ie=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",content:"",imageData:[],imageUrl:"",videoData:[],videoUrl:""},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Re.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Re.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e}return Object(X.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Post New Update / News"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"title",children:" Title "}),Object(a.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" Post Content "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]})}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component);var Fe=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,n,a){var i=a.getFirestore,r=(a.getFirebase,i()),c=n().firebase.profile,s=n().firebase.auth.uid;r.collection("projects").add(Object(Ue.a)(Object(Ue.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(Ie),ke=n(221),Ae=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",name:"",content:"",notables:"",imageData:[],imageUrl:"",videoData:[],videoUrl:"",value:"Select Noteables",region:"",country:"Nigeria"},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSelectChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.createSpending(e.state),e.props.history.push("/")},e.handleImageUpload=function(t){var n=t.target.files;Object(Re.a)(n).forEach((function(t){e.setState({imageData:t,imageUrl:URL.createObjectURL(t)})}))},e.handleVideoUpload=function(t){var n=t.target.files;Object(Re.a)(n).forEach((function(t){e.setState({videoData:t,videoUrl:URL.createObjectURL(t)})}))},e.selectRegion=function(t){e.setState({region:t})},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){window.$(document).ready((function(){window.$("select").not(".disabled").formSelect()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.country,i=t.region;return this.props.auth.uid?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:" Report Public or Private Notables' Spending Ananymously"}),Object(a.jsx)("p",{className:"grey-text text-darken-3",children:" Select from below or type if not found"}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{value:this.state.value,onChange:this.handleSelectChange,className:"input-field dark-gray",children:[Object(a.jsx)("option",{value:"",selected:!0,children:"Select Notables"}),Object(a.jsxs)("optgroup",{label:"Government",children:[Object(a.jsx)("option",{value:"1",children:"President Muhammadu Buhari"}),Object(a.jsx)("option",{value:"2",children:"Vice President Yemi Oshinbajo"}),Object(a.jsx)("option",{value:"3",children:"Abdullahi Adamu"}),Object(a.jsx)("option",{value:"4",children:"Oby Ezekwesili"})]}),Object(a.jsxs)("optgroup",{label:"Private Business",children:[Object(a.jsx)("option",{value:"5",children:"Aliko Dangote"}),Object(a.jsx)("option",{value:"6",children:"Femi Otedola"}),Object(a.jsx)("option",{value:"7",children:"Mike Adenuga"}),Object(a.jsx)("option",{value:"8",children:"Folorunso Alakija"})]})]})}),Object(a.jsx)("p",{className:"red-text",children:"* Note: If Notables not above, Enter their names below:"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"notables",children:" Enter Notables "}),Object(a.jsx)("input",{type:"text",id:"notables",onChange:this.handleChange})]}),Object(a.jsx)(ke.a,{className:"input-field",country:n,value:i,defaultOptionLabel:"Select State",onChange:function(t){return e.selectRegion(t)}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Select Sector"}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"sector",type:"radio",checked:!0}),Object(a.jsx)("span",{children:"Public"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"sector",type:"radio"}),Object(a.jsx)("span",{children:"Private"})]})})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"content",children:" What would you like to say: "}),Object(a.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,children:" "})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Image"}),Object(a.jsx)("input",{onChange:this.handleImageUpload,accept:"image/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more images"})})]}),Object(a.jsxs)("div",{className:"file-field input-field",children:[Object(a.jsxs)("div",{class:"btn blue",children:[Object(a.jsx)("span",{children:"Upload Video"}),Object(a.jsx)("input",{onChange:this.handleVideoUpload,accept:"video/*",type:"file",multiple:!0})]}),Object(a.jsx)("div",{class:"file-path-wrapper",children:Object(a.jsx)("input",{class:"file-path validate",type:"text",placeholder:"Upload one or more videos"})})]}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("button",{className:"btn pink lighten-1 z-index-0",children:"Create"})})]}),Object(a.jsx)("div",{children:Object(a.jsx)(s.c,{to:"/",children:Object(a.jsx)("button",{className:"btn green lighten-1 z-index-0",children:"View other ananymous reports"})})})]}):Object(a.jsx)(o.a,{to:"/signin"})}}]),n}(i.Component);var Pe=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createSpending:function(t){return e(function(e){return function(t,n,a){var i=a.getFirestore,r=(a.getFirebase,i()),c=n().firebase.profile,s=n().firebase.auth.uid;r.collection("spending").add(Object(Ue.a)(Object(Ue.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,ananymous:"ananymous",createdAt:new Date})).then((function(){t({type:"CREATE_SPENDING",spending:e})})).catch((function(e){t({type:"CREATE_SPENDING_ERROR",err:e})}))}}(t))}}}))(Ae);function De(){var e=Object(h.a)(["\ntext-transform: capitalize;\nfont-size: 20pt;\nmargin-bottom: 3vh;\n"]);return De=function(){return e},e}function ze(){var e=Object(h.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  width: 75%;\n"]);return ze=function(){return e},e}function Le(){var e=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5%;\n"]);return Le=function(){return e},e}var _e=O.a.div(Le()),Te=O.a.div(ze()),Ge=O.a.span(De()),Be=Object(T.d)(Object(l.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.spendings;return{spending:a?a[n]:null,auth:e.firebase.auth}})),Object(_.firestoreConnect)([{collection:"spendings"}]))((function(e){var t=e.spending;return e.auth.uid?t?Object(a.jsx)(_e,{children:Object(a.jsxs)(Te,{className:"card z-index-0",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)(Ge,{className:"card-title",children:[" ",t.title," "]}),Object(a.jsxs)("p",{children:[" ",t.content," "]})]}),Object(a.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(a.jsxs)("div",{children:["  Posted by ",t.ananymous," "]}),Object(a.jsxs)("div",{children:[" ",p()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(a.jsx)("div",{className:"container center",children:Object(a.jsx)("p",{children:"Loading ..."})}):Object(a.jsx)(o.a,{to:"/signin"})}));var Ve=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:G}),Object(a.jsx)(o.b,{path:"/project/:id",component:M}),Object(a.jsx)(o.b,{path:"/signin",component:he}),Object(a.jsx)(o.b,{path:"/signup",component:Ee}),Object(a.jsx)(o.b,{path:"/create",component:Fe}),Object(a.jsx)(o.b,{path:"/spending/form",component:Pe}),Object(a.jsx)(o.b,{path:"/spending/:id",component:Be})]})]})})},Je=(n(381),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,413)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))}),Ye={authError:null},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(Ue.a)(Object(Ue.a)({},e),{},{authError:t.err.message});default:return e}},Ke={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created this:",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("error created!",t.err),e;default:return e}},Qe={projects:[{id:1,title:"write blog",content:"this is the redux app with auth and react"},{id:2,title:"read blog",content:"this is the redux app with auth and react"},{id:3,title:"make blog",content:"this is the redux app with auth and react"}]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SPENDING":return console.log("created this:",t.spending),e;case"CREATE_SPENDING_ERROR":return console.log("error created!",t.err),e;default:return e}},Xe=n(71),Ze=Object(T.c)({auth:He,project:Me,spending:We,firestore:Xe.firestoreReducer,firebase:_.firebaseReducer}),$e=n(222),qe=n(98);n(412),n(409);qe.a.initializeApp({apiKey:"AIzaSyA8Z--tkEjjbYEkBhYKu7EXSlSbXuaQzYU",authDomain:"talk2hear.firebaseapp.com",projectId:"talk2hear",storageBucket:"talk2hear.appspot.com",messagingSenderId:"719330214199",appId:"1:719330214199:web:e68a2da61702a79d965ab2",measurementId:"G-NKQ20TQNZE"}),qe.a.firestore().settings({timestampsInSnapshorts:!0});var et=qe.a,tt=Object(T.e)(Ze,Object(T.d)(Object(T.a)($e.a.withExtraArgument({getFirestore:Xe.getFirestore,getFirebase:_.getFirebase})),Object(Xe.reduxFirestore)(et),Object(_.reactReduxFirebase)(et,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));tt.firebaseAuthIsReady.then((function(){c.a.render(Object(a.jsx)(l.a,{store:tt,children:Object(a.jsx)(Ve,{})}),document.getElementById("root"))})),Je()}},[[411,1,2]]]);
//# sourceMappingURL=main.f4c294fb.chunk.js.map