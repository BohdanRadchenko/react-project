(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"l",function(){return a}),n.d(t,"m",function(){return o}),n.d(t,"k",function(){return c}),n.d(t,"i",function(){return u}),n.d(t,"j",function(){return i}),n.d(t,"h",function(){return S}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return E}),n.d(t,"b",function(){return R}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return _}),n.d(t,"e",function(){return f});var r={SIGN_UP_REQUEST:"session/SIGN_UP_REQUEST",SIGN_UP_SUCCESS:"session/SIGN_UP_SUCCESS",SIGN_UP_ERROR:"session/SIGN_UP_ERROR",SIGN_IN_REQUEST:"session/SIGN_IN_REQUEST",SIGN_IN_SUCCESS:"session/SIGN_IN_SUCCESS",SIGN_IN_ERROR:"session/SIGN_IN_ERROR",REFRESH_USER_REQUEST:"session/REFRESH_USER_REQUEST",REFRESH_USER_SUCCESS:"session/REFRESH_USER_SUCCESS",REFRESH_USER_ERROR:"session/REFRESH_USER_ERROR",LOGOUT_REQUEST:"session/LOGOUT_REQUEST",LOGOUT_SUCCESS:"session/LOGOUT_SUCCESS",LOGOUT_ERROR:"session/LOGOUT_ERROR"},a=function(){return{type:r.SIGN_UP_REQUEST}},o=function(e){return{type:r.SIGN_UP_SUCCESS,payload:{response:e}}},c=function(e){return{type:r.SIGN_UP_ERROR,payload:{error:e}}},u=function(){return{type:r.SIGN_IN_REQUEST}},i=function(e){return{type:r.SIGN_IN_SUCCESS,payload:{response:e}}},S=function(e){return{type:r.SIGN_IN_ERROR,payload:{error:e}}},s=function(){return{type:r.LOGOUT_REQUEST}},E=function(){return{type:r.LOGOUT_SUCCESS}},R=function(){return{type:r.LOGOUT_ERROR}},l=function(){return{type:r.REFRESH_USER_REQUEST}},_=function(e){return{type:r.REFRESH_USER_SUCCESS,payload:{response:e}}},f=function(e){return{type:r.REFRESH_USER_ERROR,payload:{error:e}}}},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(22),c=n.n(o),u=n(15),i=n(50),S=n(23),s=n(14),E=n(17),R=n(18),l=n(21),_=n(19),f=n(20),d=n(25),O=n.n(d),p=n(26),C=n(52),T=n(11),U=Object(u.b)(function(e){return{authentificated:Object(T.d)(e)}},null)(function(e){var t=e.component,n=e.authentificated,r=Object(C.a)(e,["component","authentificated"]);return a.a.createElement(s.b,Object.assign({},r,{render:function(e){return n?a.a.createElement(t,e):a.a.createElement(s.a,{to:"/signin"})}}))}),N=n(34),h=n(48),b=O()({loader:function(){return n.e(3).then(n.bind(null,457))},loading:p.a,timeout:1e4,delay:200}),y=O()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(13),n.e(8)]).then(n.bind(null,458))},loading:p.a,timeout:1e4,delay:200}),I=O()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,459))},loading:p.a,timeout:1e4,delay:200}),m=function(e){function t(){return Object(E.a)(this,t),Object(l.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.handleRefreshUser,n=e.handleGetTransactions;t(),n()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.authentificated,r=t.handleGetTransactions;e.authentificated!==n&&r()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/signup",component:y}),a.a.createElement(s.b,{path:"/signin",component:I}),a.a.createElement(U,{path:"/dashboard",component:b}),a.a.createElement(s.a,{to:"/dashboard/home"})))}}]),t}(r.Component),G={handleRefreshUser:N.a,handleGetTransactions:h.a},A=Object(u.b)(function(e){return{authentificated:Object(T.d)(e)}},G)(m),g=n(4),j=n(53),v=n(54),P=n(32),k=n(55),w=n.n(k),Q=n(1),F=Object(g.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Q.a.SIGN_IN_SUCCESS:case Q.a.SIGN_UP_SUCCESS:case Q.a.REFRESH_USER_SUCCESS:return r.response.user;case Q.a.LOGOUT_SUCCESS:return{};default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Q.a.SIGN_IN_SUCCESS:case Q.a.SIGN_UP_SUCCESS:return r.response.token;case Q.a.LOGOUT_SUCCESS:return null;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Q.a.SIGN_UP_ERROR:case Q.a.SIGN_IN_ERROR:case Q.a.REFRESH_USER_ERROR:return r.error.message;case Q.a.SIGN_IN_SUCCESS:case Q.a.SIGN_UP_SUCCESS:case Q.a.REFRESH_USER_SUCCESS:return null;default:return e}},authentificated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case Q.a.SIGN_IN_SUCCESS:case Q.a.SIGN_UP_SUCCESS:case Q.a.REFRESH_USER_SUCCESS:return!0;case Q.a.LOGOUT_SUCCESS:return!1;default:return e}},tokenDliaMarusi:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Q.a.SIGN_IN_SUCCESS:case Q.a.SIGN_UP_SUCCESS:return r.response.token;case Q.a.REFRESH_USER_SUCCESS:return JSON.parse(localStorage.getItem("persist:root")).token.split("").filter(function(e){return'"'!==e}).join("");case Q.a.LOGOUT_SUCCESS:return null;default:return e}}}),H=n(35),L=n(5),B=Object(g.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case L.g.GET_TRANSACTION_SUCCESS:return r.response;case L.g.POST_TRANSACTION_SUCCESS:return[].concat(Object(H.a)(e),[r]);default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case L.g.POST_TRANSACTION_ERROR:case L.g.GET_TRANSACTION_ERROR:return r.error.message;case L.g.POST_TRANSACTION_SUCCESS:case L.g.GET_TRANSACTION_SUCCESS:return null;default:return e}}}),D={key:"root",storage:w.a,whitelist:["token"]},z=Object(g.combineReducers)({session:Object(P.a)(D,F),finance:B}),J=[v.a],M=g.applyMiddleware.apply(void 0,J),x=Object(g.createStore)(z,Object(j.composeWithDevTools)(M)),W=Object(P.b)(x),q=function(){return a.a.createElement(u.a,{store:x},a.a.createElement(i.a,{persistor:W},a.a.createElement(S.a,null,a.a.createElement(s.b,{component:A}))))};n(105);c.a.render(a.a.createElement(q,null),document.getElementById("root"))},11:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c});var r=function(e){return e.session.error},a=function(e){return e.session.user.name},o=function(e){return e.session.authentificated},c=function(e){return e.session.token}},26:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(38);t.a=function(e){var t=e.error,n=e.timedOut,r=e.pastDelay,c=e.retry;return t?a.a.createElement("div",null,"Error!",a.a.createElement("button",{type:"button",onClick:c},"Retry")):n?a.a.createElement("div",null,"Taking a long time...",a.a.createElement("button",{type:"button",onClick:c},"Retry")):r?a.a.createElement(o.a,null):null}},34:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"b",function(){return S}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return E});var r=n(10),a=n.n(r),o=n(1),c=n(11);a.a.defaults.baseURL="https://mywallet.goit.co.ua/api/";var u=function(e){a.a.defaults.headers.common.Authorization="Bearer ".concat(e)},i=function(e){return function(t){return t(Object(o.l)()),a.a.post("register",e).then(function(e){return t(Object(o.m)(e.data))}).catch(function(e){return t(Object(o.k)(e.response.data))})}},S=function(e){return function(t){t(Object(o.i)()),a.a.post("login",e).then(function(e){return t(Object(o.j)(e.data))}).catch(function(e){return t(Object(o.h)(e.response.data))})}},s=function(){return function(e,t){var n=Object(c.b)(t());n&&(u(n),e(Object(o.f)()),a.a.get("finance",n).then(function(t){return e(Object(o.g)(t.data))}).catch(function(t){return e(Object(o.e)(t.message))}))}},E=function(){return function(e,t){e(Object(o.c)());var n=Object(c.b)(t());n&&(u(n),a.a.get("logout").then(function(){e(Object(o.d)()),a.a.defaults.headers.common.Authorization=null}).catch(function(t){e(Object(o.b)(t))}))}}},38:function(e,t,n){"use strict";n.d(t,"a",function(){return R});var r=n(17),a=n(18),o=n(21),c=n(19),u=n(20),i=n(0),S=n.n(i),s=n(51),E=n.n(s),R=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return S.a.createElement(E.a,{type:"Oval",color:"#3d5575",height:140,width:315})}}]),t}(S.a.Component)},48:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});var r=n(10),a=n.n(r),o=n(5),c=n(11),u=function(e){return function(t,n){var r=Object(c.b)(n());if(r){t(Object(o.e)());var u=e.type,i=e.amount,S=e.category,s=e.date,E=e.comments,R=e.balanceAfter,l=e.typeBalanceAfter;return a.a.post("https://mywallet.goit.co.ua/api/finance",{type:u,amount:i,category:S,date:s,comments:E,balanceAfter:R,typeBalanceAfter:l},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then(function(n){console.log(n.data),t(Object(o.f)(e))}).catch(function(e){return t(Object(o.d)(e))})}}},i=function(){return function(e,t){var n=Object(c.b)(t());n&&(e(Object(o.b)()),a.a.get("https://mywallet.goit.co.ua/api/finance",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(function(t){return e(Object(o.c)(t.data.finance.data))}).catch(function(t){return e(Object(o.a)(t))}))}}},5:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return S});var r={POST_TRANSACTION_REQUEST:"POST_TRANSACTION_REQUEST",POST_TRANSACTION_SUCCESS:"POST_TRANSACTION_SUCCESS",POST_TRANSACTION_ERROR:"POST_TRANSACTION_ERROR",GET_TRANSACTION_REQUEST:"GET_TRANSACTION_REQUEST",GET_TRANSACTION_SUCCESS:"GET_TRANSACTION_SUCCESS",GET_TRANSACTION_ERROR:"GET_TRANSACTION_ERROR"},a=function(){return{type:r.POST_TRANSACTION_REQUEST}},o=function(e){return{type:r.POST_TRANSACTION_SUCCESS,payload:e}},c=function(e){return{type:r.POST_TRANSACTION_ERROR,payload:{error:e}}},u=function(){return{type:r.GET_TRANSACTION_REQUEST}},i=function(e){return{type:r.GET_TRANSACTION_SUCCESS,payload:{response:e}}},S=function(e){return{type:r.GET_TRANSACTION_ERROR,payload:{error:e}}}},57:function(e,t,n){e.exports=n(106)}},[[57,6,10]]]);
//# sourceMappingURL=main.2c900aa1.chunk.js.map