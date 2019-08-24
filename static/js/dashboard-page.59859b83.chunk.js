(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";var n=a(9),o=a(37);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=a(0),l=a.n(i),s=(a(2),a(12)),c=a.n(s),u=a(243),d=a.n(u),h=function(){function e(e,t,a){var n=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){n.matches=n.nativeMediaQueryList.matches,n.active&&a.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,r(Object(o.a)(Object(o.a)(t)),"state",{matches:t.props.defaultMatches}),r(Object(o.a)(Object(o.a)(t)),"updateMatches",function(){var e=t.mediaQueryList.matches;t.setState({matches:e});var a=t.props.onChange;a&&a(e)}),t}Object(n.a)(t,e);var a=t.prototype;return a.componentWillMount=function(){if("object"===typeof window){var e=this.props.targetWindow||window;"function"!==typeof e.matchMedia&&c()(!1);var t=this.props.query;"string"!==typeof t&&(t=d()(t)),this.mediaQueryList=new h(e,t,this.updateMatches),this.updateMatches()}},a.componentWillUnmount=function(){this.mediaQueryList.cancel()},a.render=function(){var e=this.props,t=e.children,a=e.render,n=this.state.matches;return a?n?a():null:t?"function"===typeof t?t(n):(!Array.isArray(t)||t.length)&&n?l.a.Children.only(t):null:null},t}(l.a.Component);r(m,"defaultProps",{defaultMatches:!0});t.a=m},153:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});var n=function(e){return e.finance.data},o=function(e){return e.finance.error}},184:function(e,t,a){"use strict";t.a=function(e){var t=e.filter(function(e){return"+"===e.type}).reduce(function(e,t){return e+t.amount},0),a=e.filter(function(e){return"-"===e.type}).reduce(function(e,t){return e+t.amount},0);return{balance:t-a,deposits:t,withdrow:a}}},185:function(e,t,a){e.exports={header:"Header_header__1VCKf",headerContainer:"Header_headerContainer__1YLYN",headerLogo:"Header_headerLogo__pHUY0",headerName:"Header_headerName__KFvNl",logoutText:"Header_logoutText__3LwD2",logo:"Header_logo__3_SJs",headerUser:"Header_headerUser__1rJjU",headerLogoLink:"Header_headerLogoLink__cljzb",headerText:"Header_headerText__15hRh",headerButton:"Header_headerButton__rY3_I",logout:"Header_logout__1UGPC",AsyncCurrencies:"Header_AsyncCurrencies__JbxUA"}},243:function(e,t,a){var n=a(244),o=function(e){var t="",a=Object.keys(e);return a.forEach(function(o,r){var i=e[o];(function(e){return/[height|width]$/.test(e)})(o=n(o))&&"number"===typeof i&&(i+="px"),t+=!0===i?o:!1===i?"not "+o:"("+o+": "+i+")",r<a.length-1&&(t+=" and ")}),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach(function(a,n){t+=o(a),n<e.length-1&&(t+=", ")}),t):o(e)}},244:function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},245:function(e,t,a){e.exports={nav:"Navigations_nav__VpvJ6",navLink:"Navigations_navLink__2J7V8",navText:"Navigations_navText__12jTe",navLinkBtn:"Navigations_navLinkBtn__1Mkg7",navLinkActive:"Navigations_navLinkActive__2m5Th",navLinkBtnHome:"Navigations_navLinkBtnHome__3Xiyb",navLinkBtnStats:"Navigations_navLinkBtnStats__3cV6z",navLinkBtnCurr:"Navigations_navLinkBtnCurr__3Oaxy"}},246:function(e,t,a){e.exports={balanceDiv:"Balance_balanceDiv__s68Kd",innerValue:"Balance_innerValue__3pKlK",balanceText:"Balance_balanceText__Bt_ME",balanceValue:"Balance_balanceValue__2-DxI",balanceCurr:"Balance_balanceCurr__3HaBz"}},247:function(e,t,a){"use strict";a.r(t);var n=a(17),o=a(18),r=a(20),i=a(19),l=a(21),s=a(0),c=a.n(s),u=a(248),d=a.n(u),h=a(38),m="https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={currencies:[],wait:!1},a.getCurrencies=function(){a.setState({wait:!0}),fetch(m).then(function(e){return e.json()}).then(function(e){return a.setState({currencies:e})}).finally(a.setState({wait:!1}))},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getCurrencies()}},{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.wait,n=t.filter(function(e){return"BTC"!==e.ccy});return c.a.createElement("div",null,c.a.createElement("div",{className:d.a.form},a&&c.a.createElement(h.a,null),c.a.createElement("table",{className:d.a.history},c.a.createElement("thead",null,c.a.createElement("tr",{className:d.a.historyTr},c.a.createElement("th",null,"Currency"),c.a.createElement("th",null,"Buy"),c.a.createElement("th",null,"Sale"))),c.a.createElement("tbody",{className:d.a.tBody},!a&&n.map(function(e){return c.a.createElement("tr",{key:e.ccy,className:d.a.currTr},c.a.createElement("th",null,e.ccy),c.a.createElement("th",null,Number(e.buy).toFixed(4)),c.a.createElement("th",null,Number(e.sale).toFixed(4)))}))),c.a.createElement("div",{className:d.a.bgi})))}}]),t}(c.a.Component);t.default=f},248:function(e,t,a){e.exports={thead:"Currencies_thead__1gXBQ",history:"Currencies_history__3xzoS",historyTr:"Currencies_historyTr__iNb9m",tBody:"Currencies_tBody__3tV8P",currTr:"Currencies_currTr__2KhhJ",form:"Currencies_form__34hu6"}},249:function(e,t,a){e.exports={innerCurrencies:"Sidebar_innerCurrencies__3u6nZ",container:"Sidebar_container__1-BZO"}},250:function(e){e.exports={}},251:function(e){e.exports=[{id:"1",title:"Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.",body:"More quote text"},{id:"2",title:"Finance is not merely about making money. It's about achieving our deep goals and protecting the fruits of our labor. It's about stewardship and, therefore, about achieving the good society.",body:"More quote text"},{id:"3",title:"I believe that through knowledge and discipline, financial peace is possible for all of us.",body:"More quote text"},{id:"4",title:"Our incomes are like our shoes; if too small, they gall and pinch us; but if too large, they cause us to stumble and to trip.",body:"More quote text"},{id:"5",title:"Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",body:"More quote text"},{id:"6",title:"A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.",body:"More quote text"},{id:"7",title:"Stay on top of your finances. Don't leave that up to others.",body:"More quote text"},{id:"8",title:"One of the funny things about the stock market is that every time one person buys, another sells, and both think they are astute.",body:"More quote text"},{id:"9",title:"The only way you will ever permanently take control of your financial life is to dig deep and fix the root problem.",body:"More quote text"},{id:"10",title:"A budget tells us what we can't afford, but it doesn't keep us from buying it.",body:"More quote text"},{id:"11",title:"The longer I go on, the more I am aware of the power of finance.",body:"More quote text"},{id:"12",title:"Money is like manure. You have to spread it around or it smells.",body:"More quote text"},{id:"13",title:"We teach about how to drive in school, but not how to manage finances.",body:"More quote text"},{id:"14",title:"It is a kind of spiritual snobbery that makes people think they can be happy without money.",body:"More quote text"},{id:"15",title:"There can be no rise in the value of labour without a fall of profits.",body:"More quote text"},{id:"16",title:"Do you know the only thing that gives me pleasure? It's to see my dividends coming in.",body:"More quote text"},{id:"17",title:"As sure as the spring will follow the winter, prosperity and economic growth will follow recession.",body:"More quote text"},{id:"18",title:"Finance, like time, devours its own children.",body:"More quote text"},{id:"19",title:"Our goal is to make finance the servant, not the master, of the real economy.",body:"More quote text"},{id:"20",title:"Don't gamble; take all your savings and buy some good stock and hold it till it goes up, then sell it. If it don't go up, don't buy it.",body:"More quote text"},{id:"21",title:"In the absence of the gold standard, there is no way to protect savings from confiscation through inflation. There is no safe store of value.",body:"More quote text"},{id:"22",title:"Wealth, in even the most improbable cases, manages to convey the aspect of intelligence.",body:"More quote text"},{id:"23",title:"You don't want to have so much money going toward your mortgage every month that you can't enjoy life or take care of your other financial responsibilities.",body:"More quote text"},{id:"24",title:"All money is a matter of belief.",body:"More quote text"},{id:"25",title:"Financial crises are like fireworks: they illuminate the sky even as they go pop.",body:"More quote text"},{id:"26",title:"We at Chrysler borrow money the old-fashioned way. We pay it back.",body:"More quote text"},{id:"27",title:"Here's my gift-giving rule: Respect your current financial situation.",body:"More quote text"},{id:"28",title:"I wasn't a financial pro, and I paid the price.",body:"More quote text"},{id:"29",title:"It's cheaper to buy a house and finance it than it is to rent in many markets.",body:"More quote text"},{id:"30",title:"The poor don't know that their function in life is to exercise our generosity.",body:"More quote text"}]},252:function(e,t,a){e.exports={backdrop:"QuotesModal_backdrop__Ccw2R",modal:"QuotesModal_modal__ENTEo",modalId:"QuotesModal_modalId__2TJUH",modalTitle:"QuotesModal_modalTitle__279jF",modalText:"QuotesModal_modalText__zbNwY"}},253:function(e,t,a){e.exports={container:"Dashboard_container__3Osv9",innerContainer:"Dashboard_innerContainer__lp5MV",leftSideBar:"Dashboard_leftSideBar__2NA6a",rightSideBar:"Dashboard_rightSideBar__2pkUu"}},254:function(e,t,a){e.exports=a.p+"static/media/logo.49db5ab8.svg"},255:function(e,t,a){e.exports=a.p+"static/media/exit.abe30dc3.svg"},468:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(17),r=a(18),i=a(20),l=a(19),s=a(21),c=a(0),u=a.n(c),d=a(14),h=a(25),m=a.n(h),f=a(15),p=a(152),b=a(26),v=a(23),y=a(245),_=a.n(y),g=function(){return u.a.createElement("div",{className:_.a.nav},u.a.createElement(v.c,{to:"/dashboard/home",exact:!0,className:_.a.navLink,activeClassName:_.a.navLinkActive},u.a.createElement("button",{type:"button",className:"".concat(_.a.navLinkBtn," ").concat(_.a.navLinkBtnHome)}),u.a.createElement("p",{className:_.a.navText},"Home")),u.a.createElement(v.c,{to:"/dashboard/stats",className:_.a.navLink,activeClassName:_.a.navLinkActive},u.a.createElement("button",{type:"button",className:"".concat(_.a.navLinkBtn," ").concat(_.a.navLinkBtnStats)}),u.a.createElement("p",{className:_.a.navText},"Statistics")),u.a.createElement(v.c,{to:"/dashboard/currencies",activeClassName:_.a.navLinkActive},u.a.createElement("button",{type:"button",className:"".concat(_.a.navLinkBtn," ").concat(_.a.navLinkBtnCurr)})))},w=a(246),k=a.n(w),E=function(e){var t=e.balance;return u.a.createElement("div",{className:k.a.balanceDiv},u.a.createElement("p",{className:k.a.balanceText},"Balance:"),u.a.createElement("div",{className:k.a.innerValue},u.a.createElement("p",{className:k.a.balanceValue},t),u.a.createElement("p",{className:k.a.balanceCurr},"UAH")))},x=a(247),M=a(249),N=a.n(M),L=function(e){var t=e.balance;return u.a.createElement("div",{className:N.a.container},u.a.createElement(g,null),u.a.createElement(E,{balance:t}),u.a.createElement(p.a,{query:"(min-width: 767px)",render:function(){return u.a.createElement(x.default,null)}}))},C=(a(250),a(184)),O=a(251),j=a(252),q=a.n(j),B={37:1,38:1,39:1,40:1},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={quotes:O,isDescriptionOpen:!1},a.backdropRef=Object(c.createRef)(),a.handleOpenDescription=function(){a.setState(function(e){return{isDescriptionOpen:!e.isDescriptionOpen}})},a.preventDefault=function(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1},a.preventDefaultForScrollKeys=function(e){return B[e.keyCode]&&a.preventDefault(e),!1},a.disableScroll=function(){window.addEventListener&&window.addEventListener("DOMMouseScroll",a.preventDefault,!1),document.addEventListener("wheel",a.preventDefault,{passive:!1}),window.onwheel=a.preventDefault,window.onmousewheel=a.preventDefault,window.ontouchmove=a.preventDefault,document.onkeydown=a.preventDefaultForScrollKeys},a.enableScroll=function(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",a.preventDefault,!1),document.removeEventListener("wheel",a.preventDefault,{passive:!1}),window.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null},a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress),this.disableScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress),this.enableScroll()}},{key:"render",value:function(){var e=this.state.quotes,t=this.props.onClose,a=e[Math.floor(Math.random()*Math.floor(e.length))];return u.a.createElement("div",{className:q.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick,onKeyPress:this.handleKeyPress,role:"button",tabIndex:0},u.a.createElement("div",{className:q.a.modal},u.a.createElement("p",{className:q.a.modalId},"Usefull advice \u2116",a.id),u.a.createElement("h2",{className:q.a.modalTitle},a.title)),setTimeout(t,3e3))}}]),t}(c.Component),T=a(253),S=a.n(T),I=a(185),A=a.n(I),H=a(11),Q=a(34),U=a(254),K=a(255),P=function(e){var t=e.user,a=e.onLogOut;return u.a.createElement("div",{className:A.a.headerContainer},u.a.createElement("div",{className:A.a.headerLogo},u.a.createElement(v.b,{to:"/home",className:A.a.headerLogoLink},u.a.createElement("img",{src:U,alt:"logo",className:A.a.logo}),u.a.createElement("div",{className:A.a.headerText},u.a.createElement("p",null,"Wallet")))),u.a.createElement("div",{className:A.a.headerName},u.a.createElement("p",{className:A.a.headerUser},t),u.a.createElement("button",{type:"button",className:A.a.headerButton,onClick:a},u.a.createElement("img",{src:K,alt:"logo",className:A.a.logout}),u.a.createElement("span",{className:A.a.logoutText},"Logout"))))};P.defaultProps={user:""};var V={onLogOut:Q.c},F=Object(f.b)(function(e){return{user:H.c(e)}},V)(P),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(F,null)}}]),t}(c.Component),W=a(153),Y=m()({loader:function(){return Promise.all([a.e(2),a.e(11),a.e(4)]).then(a.bind(null,466))},loading:b.a,timeout:1e4,delay:200}),R=m()({loader:function(){return Promise.all([a.e(0),a.e(2),a.e(12),a.e(9)]).then(a.bind(null,467))},loading:b.a,timeout:1e4,delay:200}),z=m()({loader:function(){return Promise.resolve().then(a.bind(null,247))},loading:b.a,timeout:1e4,delay:200}),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],quotesModalIsOpen:!1},a.handleQuotesModalClose=function(){a.setState({quotesModalIsOpen:!1})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.transactions,t=this.state.quotesModalIsOpen;this.setState({items:Object(n.a)(e),quotesModalIsOpen:!0}),t&&(document.body.style.overflow="hidden")}},{key:"componentDidUpdate",value:function(e,t){if(e.transactions!==this.props.transactions){var a=this.props.transactions;this.setState({items:Object(n.a)(a)})}}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.quotesModalIsOpen,n=new Intl.NumberFormat("ua",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Object(C.a)(t).balance);return u.a.createElement("div",{className:A.a.innerContainer},u.a.createElement("header",{className:A.a.header},u.a.createElement(J,null)),u.a.createElement("div",{className:S.a.container},a&&u.a.createElement(D,{onClose:this.handleQuotesModalClose}),u.a.createElement("div",{className:S.a.leftSideBar},u.a.createElement(L,{balance:n})),u.a.createElement("div",{className:S.a.rightSideBar},u.a.createElement(p.a,{query:"(max-width: 766px)"},function(e){return e?u.a.createElement(d.d,null,u.a.createElement(d.b,{path:"/dashboard/home",component:Y}),u.a.createElement(d.b,{path:"/dashboard/stats",component:R}),u.a.createElement(d.b,{path:"/dashboard/currencies",component:z}),u.a.createElement(d.a,{to:"/dashboard/home"})):u.a.createElement(d.d,null,u.a.createElement(d.b,{path:"/dashboard/home",component:Y}),u.a.createElement(d.b,{path:"/dashboard/stats",component:R}),u.a.createElement(d.a,{to:"/dashboard/home"}))}))))}}]),t}(c.Component);t.default=Object(f.b)(function(e){return{transactions:Object(W.b)(e)}},null)(Z)}}]);
//# sourceMappingURL=dashboard-page.59859b83.chunk.js.map