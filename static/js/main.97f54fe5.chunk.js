(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{30:function(e,t){},31:function(e,t,n){e.exports=n(45)},39:function(e,t,n){},42:function(e,t,n){},44:function(e,t){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),c=n.n(s),o=n(16),i=n(13),u=n(17),l=n(27),d=n(14),m={score:0,userr:{name:"",email:""}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(d.a)({},e,{userr:t.user});case"FEEDBACK":return Object(d.a)({},e,{score:t.feed});default:return e}},p=Object(u.b)({login:h}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,f=Object(u.d)(p,b(Object(u.a)(l.a))),g=(n(39),n(2)),v=n(22),O=n(12),k=n.n(O),y=n(18),E=n(8),j=n(9),w=n(3),C=n(11),A=n(10),N=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(E.a)(this,n),(e=t.call(this)).handleInput=e.handleInput.bind(Object(w.a)(e)),e.validar=e.validar.bind(Object(w.a)(e)),e.getToken=e.getToken.bind(Object(w.a)(e)),e.setToken=e.setToken.bind(Object(w.a)(e)),e.APIQuestions=e.APIQuestions.bind(Object(w.a)(e)),e.getQuestionsAndAnswers=e.getQuestionsAndAnswers.bind(Object(w.a)(e)),e.logado=e.logado.bind(Object(w.a)(e)),e.state={userr:{questions:[],name:"",email:""},redirect:!1},e}return Object(j.a)(n,[{key:"getToken",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api_token.php?command=request",e.next=3,fetch("https://opentdb.com/api_token.php?command=request");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.token);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"setToken",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getToken();case 2:t=e.sent,localStorage.setItem("token",t),n={player:{name:"",assertions:0,score:0,gravatarEmail:""}},a=JSON.stringify(n),localStorage.setItem("state",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getQuestionsAndAnswers",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a,r,s,c,o,i,u,l,m,h;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.userr,e.next=3,this.APIQuestions();case 3:for(n=e.sent,console.log(n,"json"),a=[],r=0;r<n.length;r+=1)a.push(n[r].question);for(s=[],c=0;c<n.length;c+=1)s.push(n[c].category);for(o=[],i=0;i<n.length;i+=1)o.push(n[i].correct_answer);for(u=[],l=0;l<n.length;l+=1)u.push(n[l].incorrect_answers);for(m=[],h=0;h<n.length;h+=1)m.push(n[h].difficulty);this.setState({userr:Object(d.a)({},t,{categories:s,questions:a,correctsAnswers:o,wrongAnswers:u,difficulty:m})}),this.logado();case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){var t=e.target,n=t.name,a=t.value,r=this.state.userr;this.setState({userr:Object(d.a)({},r,Object(v.a)({},n,a))})}},{key:"logado",value:function(){var e=this.state.userr;(0,this.props.login)(e),this.setState({redirect:!0})}},{key:"APIQuestions",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),n="https://opentdb.com/api.php?amount=5&token=".concat(t),e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r.results);case 12:throw e.prev=12,e.t0=e.catch(0),new Error("".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"validar",value:function(){var e=this.state.userr;return e.name&&e.email}},{key:"render",value:function(){var e=this,t=this.state,n=t.userr;return t.redirect?r.a.createElement(g.a,{to:"/game-quest/game"}):r.a.createElement("div",{className:"login"},r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"input text",type:"name",name:"name",placeholder:"Name","data-testid":"input-player-name",value:n.name,onChange:this.handleInput}),r.a.createElement("input",{className:"input text",type:"text",name:"email",placeholder:"Email","data-testid":"input-gravatar-email",value:n.email,onChange:this.handleInput}),r.a.createElement("button",{className:"input",type:"button",disabled:!this.validar(),"data-testid":"btn-play",onClick:Object(y.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setToken();case 2:e.getQuestionsAndAnswers();case 3:case"end":return t.stop()}}),t)})))},"Play"),r.a.createElement(o.b,{to:"/game-quest/settings","data-testid":"btn-settings",className:"engrenagem"},r.a.createElement("div",{className:"engrenagem"})))))}}]),n}(a.Component),S=Object(i.b)(null,(function(e){return{login:function(t){return e({type:"LOGIN",user:t})}}}))(N),x=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Settings"))}}]),n}(a.Component),q=(n(42),n(29)),I=n.n(q),Q=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.userr,n=e.score;return r.a.createElement("header",null,r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(I()(t.email)),alt:"gravatar imagem","data-testid":"header-profile-picture"}),r.a.createElement("p",{"data-testid":"header-player-name"},t.name),r.a.createElement("p",{"data-testid":"header-score"},n))}}]),n}(a.Component),_=Object(i.b)((function(e){return{score:e.login.score,userr:e.login.userr}}))(Q),T=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(E.a)(this,n),(e=t.call(this)).state={number:0,hidden:!0,timer:30,red:"",green:"",score:0,assertions:0},e.renderQuestion=e.renderQuestion.bind(Object(w.a)(e)),e.cronometro=e.cronometro.bind(Object(w.a)(e)),e.changeQuestion=e.changeQuestion.bind(Object(w.a)(e)),e.scoreCalculator=e.scoreCalculator.bind(Object(w.a)(e)),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.cronometro,1e3)}},{key:"cronometro",value:function(){this.state.timer>0?this.setState((function(e){return Object(d.a)({},e,{timer:e.timer-1})})):this.setState({timer:0,lock:!0})}},{key:"changeQuestion",value:function(){var e=this.state.number,t=this.props.history;e<4?this.setState({green:"",red:"",number:e+=1,hidden:!0,timer:30,lock:!1}):t.push("/game-quest/feedback")}},{key:"scoreCalculator",value:function(){var e=this.state,t=e.timer,n=e.number,a=this.state,r=a.assertions,s=a.score,c=this.props,o=c.difficulty,i=c.name,u=c.gravatarEmail,l=c.feedback;s+=10+t*("easy"===o[n]?1:"medium"===o[n]?2:3),this.setState({score:s,assertions:r+=1});var d={player:{name:i,assertions:r,score:s,gravatarEmail:u}},m=JSON.stringify(d);localStorage.setItem("state",m),l(s)}},{key:"renderQuestion",value:function(){var e=this,t=this.props,n=t.questions,a=t.wrongAnswers,s=t.correctsAnswers,c=t.categories,o=t.difficulty,i=this.state,u=i.number,l=i.lock,d=i.timer,m=this.state,h=m.green,p=m.red,b=m.hidden,f=n[u],g=s[u],v=a[u],O=c[u];return r.a.createElement("div",null,r.a.createElement("div",null,d),r.a.createElement("h2",{"data-testid":"question-category"}," ","Categoria :"," ",O)," ",r.a.createElement("h2",{"data-testid":"question-category"}," ","Dificuldade :"," ",o[u]),r.a.createElement("h1",{"data-testid":"question-text"},f),r.a.createElement("button",{type:"button",disabled:l,onClick:function(){e.setState({green:"green",red:"red",hidden:!1},(function(){return e.scoreCalculator()}))},"data-testid":"correct-answer",className:h},g),v&&v.map((function(t,n){return r.a.createElement("button",{type:"button",key:t,"data-testid":"wrong-answer-".concat(n),className:p,onClick:function(){e.setState({green:"green",red:"red",hidden:!1})}},t)})),r.a.createElement("button",{hidden:b,type:"button","data-testid":"btn-next",onClick:this.changeQuestion},"Pr\xf3xima"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,null),this.renderQuestion())}}]),n}(a.Component),P=Object(i.b)((function(e){return{correctsAnswers:e.login.userr.correctsAnswers,wrongAnswers:e.login.userr.wrongAnswers,categories:e.login.userr.categories,questions:e.login.userr.questions,difficulty:e.login.userr.difficulty,name:e.login.userr.name,gravatarEmail:e.login.userr.email}}),(function(e){return{feedback:function(t){return e({type:"FEEDBACK",feed:t})}}}))(T),J=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(E.a)(this,n),(e=t.call(this)).feedback=e.feedback.bind(Object(w.a)(e)),e.countCorrect=e.countCorrect.bind(Object(w.a)(e)),e}return Object(j.a)(n,[{key:"feedback",value:function(){var e=localStorage.getItem("state"),t="";return t=JSON.parse(e).player.assertions<3?"Podia ser melhor...":"Mandou bem!",r.a.createElement("h2",{"data-testid":"feedback-text"},t)}},{key:"countCorrect",value:function(){var e=localStorage.getItem("state"),t=JSON.parse(e);return r.a.createElement("div",null,"1"," ",r.a.createElement("h3",{"data-testid":"feedback-total-question"},t.player.assertions),r.a.createElement("h3",{"data-testid":"feedback-total-score"},t.player.score))}},{key:"render",value:function(){var e=this.props.history;return r.a.createElement("div",null,r.a.createElement(_,null),this.feedback(),this.countCorrect(),r.a.createElement("button",{"data-testid":"btn-play-again",type:"button",onClick:function(){return e.push("/")}},"Jogar novamente"))}}]),n}(a.Component),D=n(30),B=n.n(D),F=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"notFoundfundo"},r.a.createElement("div",{className:"notFound"},r.a.createElement("h1",null," P\xe1gina N\xe3o Encontrada")))}}]),n}(a.Component);function L(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/game-quest",component:S}),r.a.createElement(g.b,{exact:!0,path:"/game-quest/game",component:P}),r.a.createElement(g.b,{path:"/game-quest/feedback",component:J}),r.a.createElement(g.b,{path:"/game-quest/settings",component:x}),r.a.createElement(g.b,{path:"/game-quest/ranking",component:B.a}),r.a.createElement(g.b,{component:F}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(i.a,{store:f},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.97f54fe5.chunk.js.map