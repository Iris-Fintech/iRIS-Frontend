"use strict";(self.webpackChunkhugiris_nft=self.webpackChunkhugiris_nft||[]).push([[6418],{66418:function(i,e,d){d.r(e);var r=d(85893),s=d(67294),c=d(77044),l=d(3283),n=d.n(l);const t=()=>{const{account:i,library:e}=(0,c.Ge)(),[d,l]=s.useState(),t=new(n())(n().givenProvider);return s.useEffect((()=>{if(i&&e)return t.eth.getBalance(i).then((i=>{i=t.utils.fromWei(i,"ether"),l(i)})).catch((()=>{l("NaN")})),()=>{l(void 0)}}),[i,e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{id:"title",children:["ETH: ",null===d?"Error":d?""+d:""]},void 0)},void 0)};e.default=()=>{var{account:i,library:e}=(0,c.Ge)();return i&&e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"footer",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-3",children:(0,r.jsx)("p",{id:"title",children:"Wallet Connected"},void 0)},void 0),(0,r.jsx)("div",{className:"col-3",children:(0,r.jsx)(t,{},void 0)},void 0)]},void 0)},void 0)},void 0):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"footer",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"ml-5 col-3",children:(0,r.jsx)("p",{id:"title",children:"Welcome to HugiRIS"},void 0)},void 0)},void 0)},void 0)},void 0)}}}]);