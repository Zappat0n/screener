(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],{18:function(e,c,t){},31:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),s=t(7),i=t.n(s),a=(t(18),t(2)),l=t(3),o=t(4),d=t.n(o),u=t(6);t(28).config();var j=function(e){return new Request("https://financialmodelingprep.com/api/v3/quote/".concat(e,"?apikey=").concat("0ed5cec47c4500b673870d8288ff4f30"),{port:443,method:"GET"})},b=function(e){return new Request("https://financialmodelingprep.com/api/v3/profile/".concat(e,"?apikey=").concat("0ed5cec47c4500b673870d8288ff4f30"),{port:443,method:"GET"})};function h(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(c);case 3:return t=e.sent,e.abrupt("return",t.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j(c),e.abrupt("return",h(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(b(c)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=Object(l.c)({name:"indexes",initialState:{"^GSPC":{name:"S&P 500",price:""},"^NDX":{name:"NASDAQ 100",price:""},"^STOXX50E":{name:"ESTX 50 PR.EUR",price:""}},reducers:{clearIndexes:function(e){Object.keys(e).forEach((function(c){return delete e[c]}))},updateQuote:function(e,c){e[c.payload[0].symbol]=c.payload[0]},updateIndexes:function(e,c){c.payload.forEach((function(c){e[c.symbol]=c}))}}}),N=Object(l.b)("indexes/updateIndexes",function(){var e=Object(u.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(c);case 2:return t=e.sent,m.actions.updateIndexes(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),k=m.actions,S=(k.clearIndexes,k.updateQuote,k.updateIndexes),y=m.reducer,A=Object(l.c)({name:"profile",initialState:{},reducers:{updateProfile:function(e,c){var t=c.payload[0];e.data=t}}}),C=A.actions.updateProfile,P=Object(l.b)("profile/updateProfile",function(){var e=Object(u.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(c);case 2:return t=e.sent,C(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),g=A.reducer,D=(t(31),t(0)),w=function(e){var c,t,n=e.ticker,r=e.handleClick,s=Object(a.c)((function(e){return e.stocks[n]?e.stocks[n]:""})),i=function(e){return Object(D.jsx)("div",{className:"cell",onClick:function(e){return r(e,n)},onKeyPress:function(e){return r(e,n)},role:"presentation",children:e})};return Object(D.jsxs)("tr",{className:"stock",children:[Object(D.jsx)("td",{children:i(s.companyName)}),Object(D.jsx)("td",{children:i(s.price)}),Object(D.jsx)("td",{className:"change ".concat(s&&s.changes<0?"colorRed":"colorBlue"),children:i((c=s.changes,t=s.price,""!==t?0!==c?"".concat(Math.round(1e4*c/t)/100,"%"):"0%":""))}),Object(D.jsx)("td",{children:i(s.sector)})]})},E=(t(33),function(e){var c=e.handleChange,t=Object(a.c)((function(e){return e.stocks})),n=["All"];return Object.values(t).forEach((function(e){n.includes(e.sector)||n.push(e.sector)})),Object(D.jsx)("div",{className:"filter",children:Object(D.jsxs)("div",{className:"content",children:["Sector:","  ",Object(D.jsx)("select",{className:"industry-filter",onChange:function(e){return c(e.target.value)},children:n.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]})})}),M=Object(l.c)({name:"filter",initialState:{value:"All",stocksVisible:!0},reducers:{updateFilter:function(e,c){e.value=c.payload},updateVisible:function(e){e.stocksVisible=!e.stocksVisible},setVisible:function(e){e.stocksVisible=!0}}}),G=M.actions,T=G.setVisible,I=G.updateFilter,V=G.updateVisible,B=M.reducer,F=(t(34),function(){var e=Object(a.c)((function(e){return e.stocks})),c=Object(a.c)((function(e){return e.filter})),t=Object(a.b)(),n=function(e,c){e.preventDefault(),t(V()),t(P(c)).then(l.d).then((function(e){t(C(e))}))};return Object(D.jsx)("div",{className:c.stocksVisible?"dFlex":"dNone",children:Object(D.jsxs)("div",{className:"stocks",children:[Object(D.jsx)(E,{handleChange:function(e){t(I(e))}}),Object(D.jsxs)("table",{children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Name"}),Object(D.jsx)("th",{children:"Price"}),Object(D.jsx)("th",{children:"Change"}),Object(D.jsx)("th",{children:"Sector"})]})}),Object(D.jsx)("tbody",{children:e?Object.keys(e).filter((function(t){return e[t].sector===c.value||"All"===c.value})).map((function(e){return Object(D.jsx)(w,{ticker:e,handleClick:n},e)})):[]})]})]})})}),L=(t(35),function(e){var c=e.ticker,t=e.handleClick,n=Object(a.c)((function(e){return e.indexes[c].name})),r=Object(a.c)((function(e){return e.indexes[c].price})),s=Object(a.c)((function(e){return e.indexes[c].changesPercentage}));return Object(D.jsx)("div",{className:"index",children:Object(D.jsxs)("button",{type:"button",onClick:function(e){return t(e,c)},children:[n,Object(D.jsxs)("div",{className:s<0?"colorRed":"colorBlue",children:[r," ",s,"%"]})]})})}),R=Object(l.c)({name:"stocks",initialState:{},reducers:{clearStocks:function(e){Object.keys(e).forEach((function(c){return delete e[c]}))},updateStocks:function(e,c){c.payload.forEach((function(c){e[c.symbol]=c}))}}}),X=Object(l.b)("stocks/updateStocks",function(){var e=Object(u.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(c);case 2:return t=e.sent,R.actions.updateStocks(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()),J=R.actions,U=J.clearStocks,Q=J.updateStocks,q=R.reducer,H={"^GSPC":["MSFT","AAPL","AMZN","FB","GOOGL","GOOG","JNJ","V","PG","JPM","HD","UNH","MA","NVDA","VZ","NFLX","ADBE","DIS","INTC","PYPL","T","PFE","CSCO"],"^NDX":["AAPL","MSFT","AMZN","GOOG","GOOGL","FB","TSLA","NVDA","PYPL","INTC","ASML","CMCSA","NFLX","ADBE","CSCO","AVGO","PEP","TXN","PDD","TMUS","COST","QCOM","AMGN","AMAT","SBUX","JD","CHTR","INTU","MU","AMD"],"^STOXX50E":["MC.PA","ASML.AS","OR.PA","PRX.AS","VOW.DE","SAP.DE","LIN","SIE.DE","ABI.BR","SAN.PA"]},W=(t(36),function(){var e=Object(a.c)((function(e){return e.indexes})),c=Object(a.b)(),t=function(e,t){e.preventDefault(),c(U()),c(T()),c(I("All")),c(X(H[t].join(","))).then(l.d).then((function(e){c(Q(e))}))};return Object(D.jsx)("div",{className:"indexes",children:e?Object.keys(e).map((function(e){return Object(D.jsx)(L,{ticker:e,handleClick:t},e)})):[]})}),Y=(t(37),function(){var e=Object(a.c)((function(e){return e.profile.data?e.profile.data:""})),c=Object(a.c)((function(e){return e.filter})),t=Object(a.b)();return Object(D.jsx)("div",{className:"profile ".concat(c.stocksVisible?"dNone":"dFlex"),children:Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("button",{type:"button",onClick:function(){return t(V())},children:"Go Back"}),Object(D.jsxs)("div",{className:"top",children:[Object(D.jsx)("img",{className:"logo",src:e.image,alt:"logo"}),Object(D.jsx)("h2",{children:e.companyName}),Object(D.jsx)("h4",{children:e.price}),Object(D.jsx)("h5",{className:e.changes<0?"colorRed":"colorBlue",children:e.changes})]}),Object(D.jsxs)("div",{className:"priceData",children:[Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Previous close"}),Object(D.jsx)("div",{children:Math.round(100*(e.price-e.changes))/100})]}),Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Market Cap"}),Object(D.jsx)("div",{children:e.mktCap})]})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"52 Week Range"}),Object(D.jsx)("div",{children:e.range})]}),Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Beta"}),Object(D.jsx)("div",{children:e.beta})]})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Dividend Yield"}),Object(D.jsx)("div",{children:"".concat(Math.round(1e4*e.lastDiv/e.price)/100,"%")})]}),Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"DCF"}),Object(D.jsx)("div",{children:e.dcf})]})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Exchange"}),Object(D.jsx)("div",{children:e.exchangeShortName})]}),Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Country"}),Object(D.jsx)("div",{children:e.country})]})]})]}),Object(D.jsxs)("div",{className:"info",children:[Object(D.jsx)("h3",{children:"Company Information"}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Sector:"}),Object(D.jsx)("div",{children:e.sector})]}),Object(D.jsxs)("div",{className:"cell",children:[Object(D.jsx)("div",{children:"Industry:"}),Object(D.jsx)("div",{children:e.industry})]})]}),Object(D.jsx)("h4",{children:"CEO"}),Object(D.jsx)("p",{children:e.ceo}),Object(D.jsx)("h4",{children:"Website"}),Object(D.jsx)("p",{children:e.website}),Object(D.jsx)("h4",{children:"Description"}),Object(D.jsx)("p",{children:e.description})]})]})})});var Z=function(){var e=Object(a.b)(),c=Object(a.c)((function(e){return e.indexes}));return""===c["^GSPC"].price&&e(N(Object.keys(c).join(","))).then(l.d).then((function(c){e(S(c))})),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(W,{}),Object(D.jsx)(F,{}),Object(D.jsx)(Y,{})]})},K=Object(l.a)({reducer:{indexes:y,stocks:q,profile:g,filter:B}});i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(a.a,{store:K,children:Object(D.jsx)(Z,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3932f0f6.chunk.js.map