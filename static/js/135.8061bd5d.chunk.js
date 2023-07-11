"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(A,w,e){e.r(w),e.d(w,{default:function(){return g}});var r=e(439),s=e(791),D=e(87),i=e(689),c=e(732),j=e(981),t="MovieDetails_movie__9X7I7",n="MovieDetails_poster__yO7gD",B="MovieDetails_backBtn__rLQ3F",G="MovieDetails_link__U+v+7",a=e(184),g=function(){var A=(0,i.UO)().movieId,w=(0,i.s0)(),e=(0,s.useState)({}),g=(0,r.Z)(e,2),o=g[0],I=g[1];(0,s.useEffect)((function(){(0,c.Y5)(A).then((function(A){return I(A)}))}),[A]);return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("button",{className:B,onClick:function(){w(-1)},children:"Go back"}),(0,a.jsx)("br",{}),(0,a.jsx)("img",{className:n,src:o.poster_path?"https://image.tmdb.org/t/p/w300/".concat(o.poster_path):j,alt:o.title}),(0,a.jsxs)("h1",{children:[o.title," (",o.release_date&&o.release_date.substring(0,4),")"]}),(0,a.jsxs)("p",{children:["User score: ",.1*o.vote_average*100," %"]}),(0,a.jsx)("h2",{children:"Overview: "}),(0,a.jsx)("p",{children:o.overview}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{children:"Genres: "}),o.genres&&o.genres.map((function(A){return A.name})).join(", ")]}),(0,a.jsx)("hr",{}),(0,a.jsx)("h3",{children:"Additional information"}),(0,a.jsx)(D.OL,{to:"/movies/".concat(A,"/cast"),className:G,children:"Cast"}),(0,a.jsx)(D.OL,{to:"/movies/".concat(A,"/reviews"),className:G,children:"Reviews"}),(0,a.jsx)(i.j3,{})]})}},981:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=135.8061bd5d.chunk.js.map