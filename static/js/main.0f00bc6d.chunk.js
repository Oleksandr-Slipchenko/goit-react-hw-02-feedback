(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(4),s=n.n(o),i=(n(17),n(18),n(5)),d=n(6),b=n(7),u=n(11),l=n(10),j=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:t}),n]})},h=n(8),f=n.n(h),v=function(e){var t=e.message;return Object(a.jsx)("p",{children:t})},k=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(a.jsxs)(a.Fragment,{children:[r>0&&Object(a.jsxs)("ul",{className:f.a.statList,children:[Object(a.jsxs)("li",{children:["Good: ",t]}),Object(a.jsxs)("li",{children:["Neutral: ",n]}),Object(a.jsxs)("li",{children:["Bad: ",c]}),Object(a.jsxs)("li",{children:["Total: ",r]}),Object(a.jsxs)("li",{children:["Positive feedback:",o,"%"]})]}),0===r&&Object(a.jsx)(v,{message:"No Feedback given"})]})},O=n(2),p=n.n(O),g=n(9),x=n.n(g),F=n(23),m=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,n=e.onLeaveFeedback,c=Object(F.a)();return Object(a.jsx)("button",{className:x.a.feedbackButton,type:"button","data-feedback":t,onClick:n,children:t},c)}({feedback:e,onLeaveFeedback:n})}))};m.propTypes={options:p.a.arrayOf(p.a.string),onLeaveFeedback:p.a.func.isRequired};var L=m,P=["good","neutral","bad"],y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handlerFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(t/n*100):0},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{title:"Please leave feedback",children:Object(a.jsx)(L,{options:P,onLeaveFeedback:this.handlerFeedback})}),Object(a.jsx)(j,{title:"Statistics",children:Object(a.jsx)(k,{good:t,neutral:n,bad:c,total:r,positivePercentage:o})})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={statList:"Statistics_statList__31srv"}},9:function(e,t,n){e.exports={feedbackButton:"FeedbackOptions_feedbackButton__2MK8g"}}},[[21,1,2]]]);
//# sourceMappingURL=main.0f00bc6d.chunk.js.map