"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{964:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),u=r(791),s=r(87),i=r(689),a=r(732),c="SearchForm_form__o80os",o=r(184),l=function(e){var t=e.query,r=e.onSubmit;return(0,o.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var n=e.target.elements.searchQuery.value.trim();n!==t&&r(n)},children:[(0,o.jsx)("input",{type:"text",name:"searchQuery",defaultValue:null!==t&&void 0!==t?t:""}),(0,o.jsx)("button",{type:"submit",children:"Search movie"})]})},m="Movies_list__hqYjd",h="Movies_listLink__hKKEO",f=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1],f=(0,i.TH)(),d=(0,i.s0)(),v=new URLSearchParams(f.search).get("query")||"";(0,u.useEffect)((function(){v?(0,a.bI)(v).then((function(e){return c(e.results)})):c([])}),[v]);return(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{query:v,onSubmit:function(e){d("/movies?query=".concat(e))}}),(0,o.jsx)("ul",{className:m,children:r.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.OL,{to:"/movies/".concat(e.id),className:h,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=964.8a59f7f7.chunk.js.map