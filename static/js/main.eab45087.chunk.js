(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{108:function(e,t){},109:function(e,t,n){e.exports=n(207)},118:function(e,t,n){},121:function(e,t,n){},128:function(e,t){},130:function(e,t){},164:function(e,t){},165:function(e,t){},207:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(44),c=n.n(s),o=n(31),i=n(23),u=n(24),l=n(105),d=n(25),m={score:0,userr:{name:"",email:""}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(d.a)({},e,{userr:t.user});case"FEEDBACK":return Object(d.a)({},e,{score:t.feed});default:return e}},p=Object(u.c)({login:h}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,f=Object(u.e)(p,b(Object(u.a)(l.a))),g=(n(118),n(26)),v=n(46),O=n(9),y=n.n(O),E=n(13),k=n(14),j=n(16),w=n(15),x=n(5),C=n(17),A=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).handleInput=e.handleInput.bind(Object(x.a)(e)),e.validar=e.validar.bind(Object(x.a)(e)),e.getToken=e.getToken.bind(Object(x.a)(e)),e.setToken=e.setToken.bind(Object(x.a)(e)),e.APIQuestions=e.APIQuestions.bind(Object(x.a)(e)),e.getQuestionsAndAnswers=e.getQuestionsAndAnswers.bind(Object(x.a)(e)),e.logado=e.logado.bind(Object(x.a)(e)),e.state={userr:{questions:[],name:"",email:""},redirect:!1},e}return Object(C.a)(t,e),Object(k.a)(t,[{key:"getToken",value:function(){var e,t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://opentdb.com/api_token.php?command=request",n.next=3,y.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 3:return e=n.sent,n.next=6,y.a.awrap(e.json());case 6:return t=n.sent,n.abrupt("return",t.token);case 8:case"end":return n.stop()}}))}},{key:"setToken",value:function(){var e,t,n;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.awrap(this.getToken());case 2:e=a.sent,localStorage.setItem("token",e),t={player:{name:"",assertions:0,score:0,gravatarEmail:""}},n=JSON.stringify(t),localStorage.setItem("state",n);case 7:case"end":return a.stop()}}),null,this)}},{key:"getQuestionsAndAnswers",value:function(){var e,t,n,a,r,s,c,o,i,u,l,m;return y.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:return e=this.state.userr,h.next=3,y.a.awrap(this.APIQuestions());case 3:for(t=h.sent,console.log(t,"json"),n=[],a=0;a<t.length;a+=1)n.push(t[a].question);for(r=[],s=0;s<t.length;s+=1)r.push(t[s].category);for(c=[],o=0;o<t.length;o+=1)c.push(t[o].correct_answer);for(i=[],u=0;u<t.length;u+=1)i.push(t[u].incorrect_answers);for(l=[],m=0;m<t.length;m+=1)l.push(t[m].difficulty);this.setState({userr:Object(d.a)({},e,{categories:r,questions:n,correctsAnswers:c,wrongAnswers:i,difficulty:l})}),this.logado();case 17:case"end":return h.stop()}}),null,this)}},{key:"handleInput",value:function(e){var t=e.target,n=t.name,a=t.value,r=this.state.userr;this.setState({userr:Object(d.a)({},r,Object(v.a)({},n,a))})}},{key:"logado",value:function(){var e=this.state.userr;(0,this.props.login)(e),this.setState({redirect:!0})}},{key:"APIQuestions",value:function(){var e,t,n,a;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=localStorage.getItem("token"),t="https://opentdb.com/api.php?amount=5&token=".concat(e),r.next=5,y.a.awrap(fetch(t));case 5:return n=r.sent,r.next=8,y.a.awrap(n.json());case 8:return a=r.sent,r.abrupt("return",a.results);case 12:throw r.prev=12,r.t0=r.catch(0),new Error("".concat(r.t0));case 15:case"end":return r.stop()}}),null,null,[[0,12]])}},{key:"validar",value:function(){var e=this.state.userr;return e.name&&e.email}},{key:"render",value:function(){var e=this,t=this.state,n=t.userr;return t.redirect?r.a.createElement(g.a,{to:"./game"}):r.a.createElement("div",{className:"login"},r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"input text",type:"name",name:"name",placeholder:"Name","data-testid":"input-player-name",value:n.name,onChange:this.handleInput}),r.a.createElement("input",{className:"input text",type:"text",name:"email",placeholder:"Email","data-testid":"input-gravatar-email",value:n.email,onChange:this.handleInput}),r.a.createElement("button",{className:"input",type:"button",disabled:!this.validar(),"data-testid":"btn-play",onClick:function(){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(e.setToken());case 2:e.getQuestionsAndAnswers();case 3:case"end":return t.stop()}}))}},"Play"),r.a.createElement(o.b,{to:"./settings","data-testid":"btn-settings",className:"engrenagem"},r.a.createElement("div",{className:"engrenagem"})))))}}]),t}(a.Component),N=Object(i.b)(null,(function(e){return{login:function(t){return e({type:"LOGIN",user:t})}}}))(A),S=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Settings"))}}]),t}(a.Component),I=(n(121),n(107)),Q=n.n(I),q=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userr,n=e.score;return r.a.createElement("header",null,r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(Q()(t.email)),alt:"gravatar imagem","data-testid":"header-profile-picture"}),r.a.createElement("p",{"data-testid":"header-player-name"},t.name),r.a.createElement("p",{"data-testid":"header-score"},n))}}]),t}(a.Component),_=Object(i.b)((function(e){return{score:e.login.score,userr:e.login.userr}}))(q),T=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).state={number:0,hidden:!0,timer:30,red:"",green:"",score:0,assertions:0},e.renderQuestion=e.renderQuestion.bind(Object(x.a)(e)),e.cronometro=e.cronometro.bind(Object(x.a)(e)),e.changeQuestion=e.changeQuestion.bind(Object(x.a)(e)),e.scoreCalculator=e.scoreCalculator.bind(Object(x.a)(e)),e}return Object(C.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.cronometro,1e3)}},{key:"cronometro",value:function(){this.state.timer>0?this.setState((function(e){return Object(d.a)({},e,{timer:e.timer-1})})):this.setState({timer:0,lock:!0})}},{key:"changeQuestion",value:function(){var e=this.state.number,t=this.props.history;e<4?this.setState({green:"",red:"",number:e+=1,hidden:!0,timer:30,lock:!1}):t.push("./feedback")}},{key:"scoreCalculator",value:function(){var e=this.state,t=e.timer,n=e.number,a=this.state,r=a.assertions,s=a.score,c=this.props,o=c.difficulty,i=c.name,u=c.gravatarEmail,l=c.feedback;s+=10+t*("easy"===o[n]?1:"medium"===o[n]?2:3),this.setState({score:s,assertions:r+=1});var d={player:{name:i,assertions:r,score:s,gravatarEmail:u}},m=JSON.stringify(d);localStorage.setItem("state",m),l(s)}},{key:"renderQuestion",value:function(){var e=this,t=this.props,n=t.questions,a=t.wrongAnswers,s=t.correctsAnswers,c=t.categories,o=t.difficulty,i=this.state,u=i.number,l=i.lock,d=i.timer,m=this.state,h=m.green,p=m.red,b=m.hidden,f=n[u],g=s[u],v=a[u],O=c[u];return r.a.createElement("div",null,r.a.createElement("div",null,d),r.a.createElement("h2",{"data-testid":"question-category"}," ","Categoria :"," ",O)," ",r.a.createElement("h2",{"data-testid":"question-category"}," ","Dificuldade :"," ",o[u]),r.a.createElement("h1",{"data-testid":"question-text"},f),r.a.createElement("button",{type:"button",disabled:l,onClick:function(){e.setState({green:"green",red:"red",hidden:!1},(function(){return e.scoreCalculator()}))},"data-testid":"correct-answer",className:h},g),v&&v.map((function(t,n){return r.a.createElement("button",{type:"button",key:t,"data-testid":"wrong-answer-".concat(n),className:p,onClick:function(){e.setState({green:"green",red:"red",hidden:!1})}},t)})),r.a.createElement("button",{hidden:b,type:"button","data-testid":"btn-next",onClick:this.changeQuestion},"Pr\xf3xima"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,null),this.renderQuestion())}}]),t}(a.Component),P=Object(i.b)((function(e){return{correctsAnswers:e.login.userr.correctsAnswers,wrongAnswers:e.login.userr.wrongAnswers,categories:e.login.userr.categories,questions:e.login.userr.questions,difficulty:e.login.userr.difficulty,name:e.login.userr.name,gravatarEmail:e.login.userr.email}}),(function(e){return{feedback:function(t){return e({type:"FEEDBACK",feed:t})}}}))(T),J=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(j.a)(this,Object(w.a)(t).call(this))).feedback=e.feedback.bind(Object(x.a)(e)),e.countCorrect=e.countCorrect.bind(Object(x.a)(e)),e}return Object(C.a)(t,e),Object(k.a)(t,[{key:"feedback",value:function(){var e=localStorage.getItem("state"),t="";return t=JSON.parse(e).player.assertions<3?"Podia ser melhor...":"Mandou bem!",r.a.createElement("h2",{"data-testid":"feedback-text"},t)}},{key:"countCorrect",value:function(){var e=localStorage.getItem("state"),t=JSON.parse(e);return r.a.createElement("div",null,"1"," ",r.a.createElement("h3",{"data-testid":"feedback-total-question"},t.player.assertions),r.a.createElement("h3",{"data-testid":"feedback-total-score"},t.player.score))}},{key:"render",value:function(){var e=this.props.history;return r.a.createElement("div",null,r.a.createElement(_,null),this.feedback(),this.countCorrect(),r.a.createElement("button",{"data-testid":"btn-play-again",type:"button",onClick:function(){return e.push("/")}},"Jogar novamente"))}}]),t}(a.Component),D=n(108),B=n.n(D),F=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"notFoundfundo"},r.a.createElement("div",{className:"notFound"},r.a.createElement("h1",null," P\xe1gina N\xe3o Encontrada")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(i.a,{store:f},r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:N}),r.a.createElement(g.b,{exact:!0,path:"/game",component:P}),r.a.createElement(g.b,{exact:!0,path:"/feedback",component:J}),r.a.createElement(g.b,{exact:!0,path:"/settings",component:S}),r.a.createElement(g.b,{exact:!0,path:"/ranking",component:B.a}),r.a.createElement(g.b,{component:F}))))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.eab45087.chunk.js.map