(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(22),i=n.n(s),r=(n(74),n(75),n(16)),a=n(12),c=n(13),l=n(15),u=n(14),d="ADD_QUESTION",p="ADD_ANSWER",h="GET_QUESTIONS",j="GET_USERS",b="LOGIN",O=n(25),v=n(9),y={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:n.p+"static/media/levi.23c856b1.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:n.p+"static/media/eren.8135de69.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:n.p+"static/media/mikasa.f7d013af.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},f={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function m(e){return new Promise((function(t,n){var o=e.author,s=function(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){f=Object(v.a)(Object(v.a)({},f),{},Object(O.a)({},s.id,s)),y=Object(v.a)(Object(v.a)({},y),{},Object(O.a)({},o,Object(v.a)(Object(v.a)({},y[o]),{},{questions:y[o].questions.concat([s.id])}))),t(s)}),1e3)}))}function g(){return function(e){new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},y))}),1e3)})).then((function(t){console.log("inside userAction",t),e(function(e){return{type:j,payload:e}}(t))}))}}var x=n(7),w=(n(29),n(2)),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsxs)(x.a,{style:{width:"18rem"},children:[Object(w.jsx)(x.a.Img,{variant:"top",src:this.props.url}),Object(w.jsxs)(x.a.Body,{children:[Object(w.jsx)(x.a.Title,{children:this.props.id}),Object(w.jsxs)(x.a.Title,{children:["Rank: ",this.props.rank]}),Object(w.jsx)(x.a.Text,{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["Answered Questions: ",this.props.answeredQuestions]}),Object(w.jsxs)("p",{children:["Created Questions: ",this.props.createdQuestions]}),Object(w.jsxs)("p",{children:["Score: ",this.props.score]})]})})]})]})})}}]),n}(o.Component),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.handleRetrieveUsers()}},{key:"render",value:function(){return console.log("sorted users1 =",this.props.sortedUsers),this.props.users.sort((function(e,t){return e.questions.length+Object.keys(e.answers).length>=t.questions.length+Object.keys(t.answers).length?(console.log("inside condition true "),-1):(console.log("inside condition fasle "),1)})),console.log("sorted users2 =",this.props.users),console.log("users = ",this.props.users),console.log("inside render",this.props.users),Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:this.props.users.map((function(e,t){return Object(w.jsx)(T,{url:e.avatarURL,id:e.id,rank:t+1,answeredQuestions:Object.keys(e.answers).length,createdQuestions:e.questions.length,score:Object.keys(e.answers).length+e.questions.length},e.id)}))})})}}]),n}(o.Component),k=Object(r.b)((function(e){return{users:e.users}}),{handleRetrieveUsers:g})(q),S=n(8),R=(o.Component,n(66)),C=n(63),U=n(53);function Q(e){return{type:b,payload:e}}var A=n.p+"static/media/would_you_rather_logo.5e619a36.png",E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={option:"Select User"},e.handleSelect=function(t){console.log(t),e.setState((function(){return{option:t}}))},e.handleLogin=function(t){e.props.users.forEach((function(t){t.id===e.state.option&&(console.log("user =",t),e.props.login(t))})),e.setState((function(){return{option:"Select User"}}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.handleRetrieveUsers()}},{key:"render",value:function(){return console.log("users=",this.props.users),console.log("login user =",this.props.l),Object(w.jsx)("div",{children:Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsxs)(x.a,{style:{width:"25rem"},children:[Object(w.jsx)(x.a.Img,{variant:"top",src:A}),Object(w.jsxs)(x.a.Body,{children:[Object(w.jsx)(x.a.Title,{children:"Would You Rather!"}),Object(w.jsx)(x.a.Text,{children:"Welcome to Would you rather, please login to continue"}),Object(w.jsx)(C.a,{alignRight:!0,title:this.state.option,id:"dropdown-menu-align-right",style:{margin:"20px"},onSelect:this.handleSelect,children:this.props.users.map((function(e){return Object(w.jsx)(U.a.Item,{eventKey:e.id,children:e.id},e.id)}))}),Object(w.jsx)(R.a,{variant:"primary",onClick:this.handleLogin,children:"Login"})]})]})})})}}]),n}(o.Component),_=Object(r.b)((function(e){return{users:e.users,l:e.login}}),{login:Q,handleRetrieveUsers:g})(E),D=n(21),L=n(26),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(t){e.props.login({})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(D.a,{variant:"tabs",defaultActiveKey:"/home",style:{display:"flex",justifyContent:"space-between"},children:[Object(w.jsx)(D.a.Item,{children:Object(w.jsx)(D.a.Link,{as:L.b,to:"/home",eventKey:"link-1",children:"Home"})}),Object(w.jsx)(D.a.Item,{children:Object(w.jsx)(D.a.Link,{as:L.b,to:"/new-question",eventKey:"link-2",children:"New Question"})}),Object(w.jsx)(D.a.Item,{children:Object(w.jsx)(D.a.Link,{as:L.b,to:"/leaderboard",eventKey:"link-3",children:"Leaderboard"})}),Object(w.jsx)("div",{children:Object(w.jsxs)("p",{children:["Hello, ",Object.keys(this.props.loginUser).length>0?this.props.loginUser.id:"New User",Object(w.jsx)(R.a,{variant:"danger",onClick:this.handleLogout,style:{display:"inline"},children:"Logout"})]})})]})})}}]),n}(o.Component);Object(r.b)((function(e){return{loginUser:e.login}}),{login:Q})(z);function I(){return function(e){new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},f))}),1e3)})).then((function(t){e(function(e){return{type:h,payload:e}}(t))}))}}var N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={optionOne:"",optionTwo:"",valueOne:"",valueTwo:""},e.onOptionOneChangeQuery=function(t){e.setState((function(){return{optionOne:t,valueOne:t}}))},e.onOptionTwoChangeQuery=function(t){e.setState((function(){return{optionTwo:t,valueTwo:t}}))},e.handleSubmit=function(){e.setState((function(){return{valueOne:"",valueTwo:""}})),e.props.handleAddQuestion({author:"johndoe",optionOneText:e.state.optionOne,optionTwoText:e.state.optionTwo}),e.props.handleRetrieveUsers(),e.props.handleRetrieveQuestions()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return console.log("optionOne=",this.state.optionOne),console.log("optionTwo=",this.state.optionTwo),console.log("users= ",this.props.users),console.log("questions= ",this.props.questions),Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsx)(x.a,{style:{width:"33rem"},children:Object(w.jsxs)(x.a.Body,{children:[Object(w.jsx)(x.a.Title,{children:"Create new Question"}),Object(w.jsx)(x.a.Text,{children:"Complete the question"}),Object(w.jsx)(x.a.Text,{children:"Would you rather...?"}),Object(w.jsx)("input",{type:"text",placeholder:"option one",onChange:function(t){return e.onOptionOneChangeQuery(t.target.value)},value:this.state.valueOne}),Object(w.jsx)("hr",{}),Object(w.jsx)("p",{children:"or"}),Object(w.jsx)("hr",{}),Object(w.jsx)("input",{type:"text",placeholder:"option two",onChange:function(t){return e.onOptionTwoChangeQuery(t.target.value)},value:this.state.valueTwo}),Object(w.jsx)("br",{}),Object(w.jsx)(R.a,{style:{width:"28rem",margin:"20px"},variant:"primary",onClick:this.handleSubmit,children:"Submit"})]})})})}}]),n}(o.Component),M=(Object(r.b)((function(e){return{users:e.users,loginUser:e.login,questions:e.questions}}),{handleAddQuestion:function(e){return function(t){m(e).then((function(e){return t(function(e){return{type:d,payload:e}}(e))}))}},handleRetrieveUsers:g,handleRetrieveQuestions:I})(N),n(69)),K=n(60),W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.handleRetrieveUsers(),this.props.handleRetrieveQuestions()}},{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(M.a,{variant:"tabs",defaultActiveKey:"/home",style:{display:"flex",justifyContent:"center"},children:[Object(w.jsx)(K.a,{eventKey:"answered-questions",title:"Answered Questions "}),Object(w.jsx)(K.a,{eventKey:"unanswered-questions",title:"Unanswered Questions "})]})})}}]),n}(o.Component),B=(Object(r.b)((function(e){return{users:e.users,loginUser:e.login,questions:e.questions}}),{handleRetrieveQuestions:I,handleRetrieveUsers:g})(W),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={option:"",question:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}},e.onClick=function(t){return function(){e.setState((function(){return{option:t}}))}},e.handleSubmit=function(e){},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.handleRetrieveQuestions(),this.props.handleRetrieveUsers()}},{key:"render",value:function(){var e,t=this;return console.log("users= ",this.props.users),console.log("questions= ",this.props.questions),this.props.users.forEach((function(n){n.id===t.state.question.author&&(console.log("inside avatar",e),e=n.avatarURL)})),console.log("option is: ",this.state.option),Object(w.jsx)("div",{children:Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsxs)(x.a,{style:{width:"18rem"},children:[Object(w.jsx)(x.a.Img,{variant:"top",src:"holder.js/100px180"}),Object(w.jsxs)(x.a.Body,{children:[Object(w.jsx)(x.a.Title,{children:e}),Object(w.jsxs)(x.a.Text,{children:[Object(w.jsx)("input",{type:"radio",value:"Male",name:"gender",onClick:this.onClick("optionOne")})," Option One",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",value:"Male",name:"gender",onClick:this.onClick("optionTwo")})," Option Two",Object(w.jsx)("br",{}),Object(w.jsx)(R.a,{variant:"primary",onClick:this.handleSubmit,style:{width:"12rem"},children:"Submit"})]})]})]})})})}}]),n}(o.Component));Object(r.b)((function(e){return{users:e.users,loginUser:e.login,questions:e.questions}}),{handleRetrieveQuestions:I,handleRetrieveUsers:g,handleAddAnswer:function(e){return function(t){(function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,s){setTimeout((function(){y=Object(v.a)(Object(v.a)({},y),{},Object(O.a)({},t,Object(v.a)(Object(v.a)({},y[t]),{},{answers:Object(v.a)(Object(v.a)({},y[t].answers),{},Object(O.a)({},n,o))}))),f=Object(v.a)(Object(v.a)({},f),{},Object(O.a)({},n,Object(v.a)(Object(v.a)({},f[n]),{},Object(O.a)({},o,Object(v.a)(Object(v.a)({},f[n][o]),{},{votes:f[n][o].votes.concat([t])}))))),e()}),500)}))})(e).then((function(e){t(function(e){return{type:p,payload:e}}(e))}))}}})(B);var P=function(){return Object(w.jsx)("div",{className:"App",children:"Esraa Mamdouh kkkk"})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),i(e),r(e)}))},F=(n(88),n(33)),G=n(67);var X=n(68);var H=Object(F.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log("inside loginReducerrrrrr",t),t.type){case b:return console.log("inside loginReducer",t.type,t.payload),t.payload;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[t.payload].concat(Object(X.a)(e));case p:return e.map((function(e){var n;return console.log(e),t.payload.qid===e.id&&(console.log("inside ADD_ANSWER reducer: ",e),e[n=t.payload.answer].votes=e[n].votes.concat([t.payload.authedUser])),e}));case h:return Object.values(t.payload);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("inside userReducer",t.type,t.payload),t.type){case j:return console.log("inside userReducer",t.payload),Object.values(t.payload);case d:return console.log("inside userReducer2",t.payload),e.map((function(e){var n;return console.log(e),t.payload.author===e.id&&(console.log("inside ADD_ANSWER reducer: ",e),n=t.payload.id,e.questions=e.questions.concat([n])),e}));case p:return console.log("inside userReducer3",t.payload),e.map((function(e){var n,o;return console.log(e),t.payload.authedUser===e.id&&(console.log("inside ADD_ANSWER reducer: ",e),n=t.payload.qid,o=t.payload.answer,e.answers[n]=o,console.log("action",t),console.log("useeeer",e)),e}));default:return console.log("inside userReducer4",t.payload),e}}}),V=[G.a],$=Object(F.d)(H,{},Object(F.c)(F.a.apply(void 0,V),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(w.jsx)(r.a,{store:$,children:Object(w.jsx)(L.a,{children:Object(w.jsx)(P,{})})}),document.getElementById("root")),J()}},[[89,1,2]]]);
//# sourceMappingURL=main.2b1df3ac.chunk.js.map