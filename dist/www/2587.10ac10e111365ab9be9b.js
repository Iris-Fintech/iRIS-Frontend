(self.webpackChunkhugiris_nft=self.webpackChunkhugiris_nft||[]).push([[2587],{42052:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(85893),o=t(67294),i=t(77044),a=t(92375),c=t(58511),s=t(25108),u=()=>{var e=(0,a.C)((e=>e.triedEager.tried));(()=>{var e=(0,i.Ge)().activate,n=(0,a.T)();const t=(0,c.Z)().login;(0,o.useEffect)((()=>{localStorage.getItem("_iris_fintech_")&&t("useEagerConnect")}),[e,n,t])})(),((e=!1)=>{const{connector:n,active:t,error:r}=(0,i.Ge)();var a=localStorage.getItem("_iris_fintech_")??"";const u=(0,c.Z)().login;(0,o.useEffect)((()=>{if(n&&n.on&&!t&&!r&&!e){const e=()=>{s.log("Handling 'connect' event"),u("useInactiveListener")},t=e=>{s.log("Handling 'chainChanged' event with payload",e),window.location.reload(),u("useInactiveListener")},r=e=>{s.log("Handling 'accountsChanged' event with payload",e),0<e.length&&u("useInactiveListener")},o=e=>{s.log("Handling 'networkChanged' event with payload",e),u("useInactiveListener")};return n.on("connect",e),n.on("chainChanged",t),n.on("accountsChanged",r),n.on("networkChanged",o),()=>{n.removeListener&&(n.removeListener("connect",e),n.removeListener("chainChanged",t),n.removeListener("accountsChanged",r),n.removeListener("networkChanged",o))}}}),[t,r,e,n,u,a])})(!e)};const d=(0,o.lazy)((()=>Promise.all([t.e(4658),t.e(3738),t.e(944),t.e(813),t.e(9521),t.e(4912),t.e(9557),t.e(8384),t.e(2827),t.e(1715),t.e(9806),t.e(3278),t.e(1565),t.e(4735),t.e(4625),t.e(2329),t.e(6882),t.e(1106),t.e(5187),t.e(2972),t.e(4581),t.e(2506),t.e(8825),t.e(8490),t.e(1680),t.e(3964),t.e(7715),t.e(9842),t.e(5526),t.e(1771),t.e(8811),t.e(4211),t.e(2492),t.e(3923),t.e(483),t.e(9920),t.e(5457),t.e(7010),t.e(7219),t.e(8059),t.e(4245),t.e(3707),t.e(4962),t.e(3827)]).then(t.bind(t,93827)))),l=(0,o.lazy)((()=>Promise.all([t.e(4658),t.e(3738),t.e(944),t.e(813),t.e(9521),t.e(4912),t.e(9557),t.e(8384),t.e(2827),t.e(1715),t.e(9806),t.e(3278),t.e(1565),t.e(4735),t.e(4625),t.e(2329),t.e(6882),t.e(1106),t.e(5187),t.e(2972),t.e(4581),t.e(2506),t.e(8825),t.e(8490),t.e(1680),t.e(3964),t.e(7715),t.e(9842),t.e(5526),t.e(1771),t.e(8811),t.e(4211),t.e(2492),t.e(3923),t.e(483),t.e(9920),t.e(5457),t.e(7010),t.e(7219),t.e(8059),t.e(4245),t.e(3707),t.e(4962),t.e(9428)]).then(t.bind(t,29428)))),h=(0,o.lazy)((()=>t.e(1285).then(t.bind(t,1285)))),f=(0,o.lazy)((()=>Promise.all([t.e(4658),t.e(3738),t.e(944),t.e(813),t.e(9521),t.e(4912),t.e(9557),t.e(8384),t.e(2827),t.e(1715),t.e(9806),t.e(3278),t.e(1565),t.e(4735),t.e(4625),t.e(2329),t.e(6882),t.e(1106),t.e(5187),t.e(2972),t.e(4581),t.e(2506),t.e(8825),t.e(8490),t.e(1680),t.e(3964),t.e(7715),t.e(9842),t.e(5526),t.e(1771),t.e(8811),t.e(4211),t.e(2492),t.e(3923),t.e(483),t.e(9920),t.e(5457),t.e(7010),t.e(7219),t.e(8059),t.e(4245),t.e(3707),t.e(4962),t.e(5823)]).then(t.bind(t,5823)))),g=(0,o.lazy)((()=>t.e(6418).then(t.bind(t,66418))));var v=()=>(u(),(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{},void 0),(0,r.jsx)(h,{},void 0),(0,r.jsx)(d,{},void 0),(0,r.jsx)(l,{},void 0),(0,r.jsx)(g,{},void 0)]},void 0))},88476:function(e,n){"use strict";n.Z={chainId:"1",rpc_url1:"https://mainnet.infura.io/v3/3bb2facc1ba34c21ac433006dea3015d",rpc_url2:"https://mainnet.infura.io/v3/32cc1fd7fe8d4ad5aa6e4c2a18e90839",backend_url:"https://hugiris.de.r.appspot.com"}},58511:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(67294),o=t(77044),i=t(30950),a=t(83929),c=t(40782),s=t(92375),u=t(38658),d=t(42256),l=t(25108),h=t(25108),f=()=>{const e=(0,s.T)(),{active:n,connector:t,activate:f,deactivate:g}=(0,o.Ge)(),v=(n&&(t==c.Lj?localStorage.setItem("_iris_fintech_","Injected"):t==c.Lw&&localStorage.setItem("_iris_fintech_","WalletConnect")),(0,r.useCallback)((()=>{e((0,u.IW)(!1)),g(),"WalletConnect"==localStorage.getItem("_iris_fintech_")&&c.Lw.handleDisconnect(),localStorage.removeItem("_iris_fintech_"),localStorage.removeItem("walletconnect")}),[g,e]));return{login:(0,r.useCallback)((n=>{var t;"Injected"==n?t=c.Lj:"WalletConnect"==n?t=c.Lw:"Injected"==(n=localStorage.getItem("_iris_fintech_"))?t=c.Lj:"WalletConnect"==n&&(t=c.Lw),t?f(t,(async n=>{n instanceof o.Uu?t==c.Lj?await(async()=>{const e=window.ethereum;if(!e)return l.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),!1;{const n=(0,d.nU)();try{try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+n.toString(16)}]}),!0}catch(t){if(4902!==t.code)return!1;try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:"0x"+n.toString(16),chainName:"Ethereum Mainnet",nativeCurrency:{name:"ETH",symbol:"eth",decimals:18},rpcUrls:[(0,d.p1)()],blockExplorerUrls:["https://etherscan.io"]}]}),!0}catch(e){return l.error("add",e),!1}}}catch(e){return l.error("setup",e),!1}}})()?f(t,void 0,!0).catch((()=>{e((0,u.IW)(!0))})):v():t==c.Lw&&(t.handleDisconnect(),v()):(n instanceof i.A5?h.log("Provider Error","No provider was found"):n instanceof i.ab?h.log("Authorization Error","Please authorize to access your account"):n instanceof a.ab?(t.handleDisconnect(),h.log("Authorization Error","Please authorize to access your account")):h.log(n.name,n.message),v())})).catch((()=>{e((0,u.IW)(!0)),v()})):(h.log("Can't find connector","The connector config is wrong"),v())}),[f,e,v]),logout:v}}},92375:function(e,n,t){"use strict";t.d(n,{T:function(){return o},C:function(){return i}});var r=t(23594);const o=()=>(0,r.I0)(),i=r.v9},38658:function(e,n,t){"use strict";t.d(n,{IW:function(){return r}}),t=(0,t(29829).oM)({name:"triedEager",initialState:{tried:!1},reducers:{setState:(e,n)=>{e.tried=n.payload}}});const r=t.actions.setState;n.ZP=t.reducer},40782:function(e,n,t){"use strict";t.d(n,{Lj:function(){return c},Lw:function(){return s},av:function(){return u}});n=t(30950);var r=t(83929),o=t(3283),i=t.n(o);t=(0,(o=t(42256)).p1)();const a=(0,o.nU)();if(void 0===t)throw new Error("URL Type Error: should be string");if(NaN===a)throw new Error("Invalid Numneric Error: should be a valid number");const c=new n._k({supportedChainIds:[a]});c.handleChainChanged=e=>{if(e!=a)return localStorage.removeItem("_iris_fintech_"),void c.emitDeactivate();c.emitUpdate({chainId:e,provider:window.BinanceChain}),window.location.reload()};const s=new r.zw({rpc:{1:t},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),u=e=>new(i())(e)},42256:function(e,n,t){"use strict";t.d(n,{p1:function(){return i},nU:function(){return c}});n=t(95534);var r=t.n(n);if(!(n=t(88476)).Z.rpc_url1||!n.Z.rpc_url2)throw Error("ETH_RPC_URLs is undefined");const o=[n.Z.rpc_url1,n.Z.rpc_url2],i=()=>{var e=r()(o);if(void 0!==e)return e};if(void 0===n.Z.chainId)throw new Error("BSC_CHAIN_ID is undefined");const a=n.Z.chainId,c=()=>parseInt(a,10)},62859:function(){},75304:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},71408:function(){},23646:function(){},43503:function(){},33557:function(){}}]);