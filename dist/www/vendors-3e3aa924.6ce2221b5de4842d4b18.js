(self.webpackChunkhugiris_nft=self.webpackChunkhugiris_nft||[]).push([[1715],{93608:function(e,t,r){var o=r(23085).Buffer;const n=r(59494),i=r(3091),s=r(86266);r(73390);const c=new s.ec("secp256k1"),{keccak256:a,keccak256s:l}=r(1538),u=e=>{var t=l(e.slice(2));let r="0x";for(let o=0;o<40;o++)r+=7<parseInt(t[o+2],16)?e[o+2].toUpperCase():e[o+2];return r},p=e=>{var t=new o(e.slice(2),"hex");t="0x"+c.keyFromPrivate(t).getPublic(!1,"hex").slice(2);const r=a(t);return{address:u("0x"+r.slice(-40)),privateKey:e}},g=([e,t,r])=>n.flatten([t,r,e]),h=e=>[n.slice(64,n.length(e),e),n.slice(0,32,e),n.slice(32,64,e)];r=e=>(t,r)=>{const s=c.keyFromPrivate(new o(r.slice(2),"hex")).sign(new o(t.slice(2),"hex"),{canonical:!0});return g([i.fromString(n.fromNumber(e+s.recoveryParam)),n.pad(32,n.fromNat("0x"+s.r.toString(16))),n.pad(32,n.fromNat("0x"+s.s.toString(16)))])};var f=r(27);e.exports={create:e=>(e=a(n.concat(n.random(32),e||n.random(32))),e=n.concat(n.concat(n.random(32),e),n.random(32)),e=a(e),p(e)),toChecksum:u,fromPrivate:p,sign:f,makeSigner:r,recover:(e,t)=>{const r=h(t);t={v:n.toNumber(r[0]),r:r[1].slice(2),s:r[2].slice(2)};const i=c.recoverPubKey(new o(e.slice(2),"hex"),t,t.v<2?t.v:1-t.v%2);e="0x"+i.encode("hex",!1).slice(2);const s=a(e);return u("0x"+s.slice(-40))},encodeSignature:g,decodeSignature:h}},50458:function(e){const t=(e,t)=>{let r=[];for(var o=0;o<e;++o)r.push(t(o));return r};e.exports={generate:t,replicate:(e,r)=>t(e,(()=>r)),concat:(e,t)=>e.concat(t),flatten:e=>{let t=[];for(let r=0,o=e.length;r<o;++r)for(let o=0,n=e[r].length;o<n;++o)t.push(e[r][o]);return t},chunksOf:(e,t)=>{let r=[];for(let o=0,n=t.length;o<n;o+=e)r.push(t.slice(o,o+e));return r}}},59494:function(e,t,r){r(50458);const o=(e,t)=>parseInt(e.slice(2*t+2,2*t+4),16),n=e=>(e.length-2)/2,i=(e,t)=>t.length===2*e+2?t:i(e,"0x0"+t.slice(2)),s=(e,t)=>t.length===2*e+2?t:s(e,t+"0"),c=e=>{let t=[];for(let r=2,o=e.length;r<o;r+=2)t.push(parseInt(e.slice(r,r+2),16));return t},a=e=>{let t="0x";for(let r=0,o=e.length;r<o;++r){let o=e[r];t+=(o<16?"0":"")+o.toString(16)}return t};e.exports={random:e=>{let t,o=(t="undefined"!=typeof window&&window.crypto&&window.crypto.getRandomValues?window.crypto.getRandomValues(new Uint8Array(e)):r(55835).randomBytes(e),"0x");for(let r=0;r<e;++r)o+=("00"+t[r].toString(16)).slice(-2);return o},length:n,concat:(e,t)=>e.concat(t.slice(2)),flatten:e=>"0x"+e.reduce(((e,t)=>e+t.slice(2)),""),slice:(e,t,r)=>"0x"+r.slice(2*e+2,2*t+2),reverse:e=>{let t="0x";for(let r=0,o=n(e);r<o;++r)t+=e.slice(2*(o-r),2*(o-r+1));return t},pad:i,padRight:s,fromAscii:e=>{let t="0x";for(let r=0;r<e.length;++r)t+=("00"+e.charCodeAt(r).toString(16)).slice(-2);return t},toAscii:e=>{let t="";for(let r=2;r<e.length;r+=2)t+=String.fromCharCode(parseInt(e.slice(r,r+2),16));return t},fromString:e=>{var t=e=>(e=e.toString(16)).length<2?"0"+e:e;let r="0x";for(let n=0;n!=e.length;n++){let i=e.charCodeAt(n);if(i<128)r+=t(i);else{if(i<2048)r+=t(i>>6|192);else{if(55295<i&&i<56320){if(++n==e.length)return null;var o=e.charCodeAt(n);if(o<56320||57343<o)return null;i=65536+((1023&i)<<10)+(1023&o),r=(r+=t(i>>18|240))+t(i>>12&63|128)}else r+=t(i>>12|224);r+=t(i>>6&63|128)}r+=t(63&i|128)}}return r},toString:e=>{let t="",r=0;for(var i=n(e);r<i;){let n=o(e,r++);if(127<n){if(191<n&&n<224){if(r>=i)return null;n=(31&n)<<6|63&o(e,r)}else if(223<n&&n<240){if(r+1>=i)return null;n=(15&n)<<12|(63&o(e,r))<<6|63&o(e,++r)}else{if(!(239<n&&n<248))return null;if(r+2>=i)return null;n=(7&n)<<18|(63&o(e,r))<<12|(63&o(e,++r))<<6|63&o(e,++r)}++r}if(n<=65535)t+=String.fromCharCode(n);else{if(!(n<=1114111))return null;n-=65536,t=(t+=String.fromCharCode(n>>10|55296))+String.fromCharCode(1023&n|56320)}}return t},fromNumber:e=>(e=e.toString(16)).length%2==0?"0x"+e:"0x0"+e,toNumber:e=>parseInt(e.slice(2),16),fromNat:e=>"0x0"===e?"0x":e.length%2==0?e:"0x0"+e.slice(2),toNat:e=>"0"===e[2]?"0x"+e.slice(3):e,fromArray:a,toArray:c,fromUint8Array:e=>a([].slice.call(e,0)),toUint8Array:e=>new Uint8Array(c(e))}},1538:function(e){const t="0123456789abcdef".split(""),r=[1,256,65536,16777216],o=[0,8,16,24],n=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],i=e=>{for(var t,r,o,i,s,c,a,l,u,p,g,h,f,y,d,m,x,k,b,B,v,S,_,w,C,A,T,H,N,I,P,U,F,L,R,E,V,W,j,K,M,z,G,q,D,O,Q,J,X,Y,Z=0;Z<48;Z+=2)N=e[0]^e[10]^e[20]^e[30]^e[40],I=e[1]^e[11]^e[21]^e[31]^e[41],r=e[2]^e[12]^e[22]^e[32]^e[42],t=e[3]^e[13]^e[23]^e[33]^e[43],L=e[4]^e[14]^e[24]^e[34]^e[44],F=e[5]^e[15]^e[25]^e[35]^e[45],J=e[6]^e[16]^e[26]^e[36]^e[46],Q=e[7]^e[17]^e[27]^e[37]^e[47],d=e[8]^e[18]^e[28]^e[38]^e[48],S=(m=e[9]^e[19]^e[29]^e[39]^e[49])^(t<<1|r>>>31),e[0]^=v=d^(r<<1|t>>>31),e[1]^=S,e[10]^=v,e[11]^=S,e[20]^=v,e[21]^=S,e[30]^=v,e[31]^=S,e[40]^=v,e[41]^=S,S=I^(F<<1|L>>>31),e[2]^=v=N^(L<<1|F>>>31),e[3]^=S,e[12]^=v,e[13]^=S,e[22]^=v,e[23]^=S,e[32]^=v,e[33]^=S,e[42]^=v,e[43]^=S,S=t^(Q<<1|J>>>31),e[4]^=v=r^(J<<1|Q>>>31),e[5]^=S,e[14]^=v,e[15]^=S,e[24]^=v,e[25]^=S,e[34]^=v,e[35]^=S,e[44]^=v,e[45]^=S,S=F^(m<<1|d>>>31),e[6]^=v=L^(d<<1|m>>>31),e[7]^=S,e[16]^=v,e[17]^=S,e[26]^=v,e[27]^=S,e[36]^=v,e[37]^=S,e[46]^=v,e[47]^=S,S=Q^(I<<1|N>>>31),e[8]^=v=J^(N<<1|I>>>31),e[9]^=S,e[18]^=v,e[19]^=S,e[28]^=v,e[29]^=S,e[38]^=v,e[39]^=S,e[48]^=v,e[49]^=S,t=e[0],r=e[1],F=e[11]<<4|e[10]>>>28,L=e[10]<<4|e[11]>>>28,d=e[20]<<3|e[21]>>>29,m=e[21]<<3|e[20]>>>29,Q=e[31]<<9|e[30]>>>23,J=e[30]<<9|e[31]>>>23,N=e[40]<<18|e[41]>>>14,I=e[41]<<18|e[40]>>>14,v=e[2]<<1|e[3]>>>31,S=e[3]<<1|e[2]>>>31,o=e[13]<<12|e[12]>>>20,i=e[12]<<12|e[13]>>>20,R=e[22]<<10|e[23]>>>22,E=e[23]<<10|e[22]>>>22,x=e[33]<<13|e[32]>>>19,k=e[32]<<13|e[33]>>>19,X=e[42]<<2|e[43]>>>30,Y=e[43]<<2|e[42]>>>30,M=e[5]<<30|e[4]>>>2,z=e[4]<<30|e[5]>>>2,_=e[14]<<6|e[15]>>>26,w=e[15]<<6|e[14]>>>26,s=e[25]<<11|e[24]>>>21,c=e[24]<<11|e[25]>>>21,V=e[34]<<15|e[35]>>>17,W=e[35]<<15|e[34]>>>17,b=e[45]<<29|e[44]>>>3,B=e[44]<<29|e[45]>>>3,g=e[6]<<28|e[7]>>>4,h=e[7]<<28|e[6]>>>4,G=e[17]<<23|e[16]>>>9,q=e[16]<<23|e[17]>>>9,C=e[26]<<25|e[27]>>>7,A=e[27]<<25|e[26]>>>7,a=e[36]<<21|e[37]>>>11,l=e[37]<<21|e[36]>>>11,j=e[47]<<24|e[46]>>>8,K=e[46]<<24|e[47]>>>8,P=e[8]<<27|e[9]>>>5,U=e[9]<<27|e[8]>>>5,f=e[18]<<20|e[19]>>>12,y=e[19]<<20|e[18]>>>12,D=e[29]<<7|e[28]>>>25,O=e[28]<<7|e[29]>>>25,T=e[38]<<8|e[39]>>>24,H=e[39]<<8|e[38]>>>24,u=e[48]<<14|e[49]>>>18,p=e[49]<<14|e[48]>>>18,e[0]=t^~o&s,e[1]=r^~i&c,e[10]=g^~f&d,e[11]=h^~y&m,e[20]=v^~_&C,e[21]=S^~w&A,e[30]=P^~F&R,e[31]=U^~L&E,e[40]=M^~G&D,e[41]=z^~q&O,e[2]=o^~s&a,e[3]=i^~c&l,e[12]=f^~d&x,e[13]=y^~m&k,e[22]=_^~C&T,e[23]=w^~A&H,e[32]=F^~R&V,e[33]=L^~E&W,e[42]=G^~D&Q,e[43]=q^~O&J,e[4]=s^~a&u,e[5]=c^~l&p,e[14]=d^~x&b,e[15]=m^~k&B,e[24]=C^~T&N,e[25]=A^~H&I,e[34]=R^~V&j,e[35]=E^~W&K,e[44]=D^~Q&X,e[45]=O^~J&Y,e[6]=a^~u&t,e[7]=l^~p&r,e[16]=x^~b&g,e[17]=k^~B&h,e[26]=T^~N&v,e[27]=H^~I&S,e[36]=V^~j&P,e[37]=W^~K&U,e[46]=Q^~X&M,e[47]=J^~Y&z,e[8]=u^~t&o,e[9]=p^~r&i,e[18]=b^~g&f,e[19]=B^~h&y,e[28]=N^~v&_,e[29]=I^~S&w,e[38]=j^~P&F,e[39]=K^~U&L,e[48]=X^~M&G,e[49]=Y^~z&q,e[0]^=n[Z],e[1]^=n[Z+1]};var s=e=>n=>{if("0x"===n.slice(0,2))for(var s=[],c=2,a=n.length;c<a;c+=2)s.push(parseInt(n.slice(c,c+2),16));else s=n;for(var l,u={blocks:[],reset:!0,block:0,start:0,blockCount:1600-(e<<1)>>5,outputBlocks:e>>5,s:(e=>[].concat(e,e,e,e,e))([0,0,0,0,0,0,0,0,0,0])},p=s,g=p.length,h=u.blocks,f=u.blockCount<<2,y=u.blockCount,d=u.outputBlocks,m=u.s,x=0;x<g;){if(u.reset)for(u.reset=!1,h[0]=u.block,B=1;B<y+1;++B)h[B]=0;if("string"!=typeof p)for(B=u.start;x<g&&B<f;++x)h[B>>2]|=p[x]<<o[3&B++];else for(B=u.start;x<g&&B<f;++x)(l=p.charCodeAt(x))<128?h[B>>2]|=l<<o[3&B++]:(l<2048?h[B>>2]|=(192|l>>6)<<o[3&B++]:(l<55296||57344<=l?h[B>>2]|=(224|l>>12)<<o[3&B++]:(l=65536+((1023&l)<<10|1023&p.charCodeAt(++x)),h[B>>2]|=(240|l>>18)<<o[3&B++],h[B>>2]|=(128|l>>12&63)<<o[3&B++]),h[B>>2]|=(128|l>>6&63)<<o[3&B++]),h[B>>2]|=(128|63&l)<<o[3&B++]);if(f<=(u.lastByteIndex=B)){for(u.start=B-f,u.block=h[y],B=0;B<y;++B)m[B]^=h[B];i(m),u.reset=!0}else u.start=B}if(h[(B=u.lastByteIndex)>>2]|=r[3&B],u.lastByteIndex===f)for(h[0]=h[y],B=1;B<y+1;++B)h[B]=0;for(h[y-1]|=2147483648,B=0;B<y;++B)m[B]^=h[B];i(m);for(var k,b="",B=0,v=0;v<d;){for(B=0;B<y&&v<d;++B,++v)k=m[B],b+=t[k>>4&15]+t[15&k]+t[k>>12&15]+t[k>>8&15]+t[k>>20&15]+t[k>>16&15]+t[k>>28&15]+t[k>>24&15];v%y==0&&(i(m),B=0)}return"0x"+b};e.exports={keccak256:s(256),keccak512:s(512),keccak256s:s(256),keccak512s:s(512)}},3091:function(e,t,r){const o=r(13550),n=r(59494),i=e=>new o(e.slice(2),16),s=e=>"0x0"==(e="0x"+("0x"===e.slice(0,2)?new o(e.slice(2),16):new o(e,10)).toString("hex"))?"0x":e,c=e=>"string"==typeof e?/^0x/.test(e)?e:"0x"+e:"0x"+new o(e).toString("hex"),a=e=>i(e).toNumber();r=e=>(t,r)=>"0x"+i(t)[e](i(r)).toString("hex");var l=r("add");const u=r("mul"),p=r("div");r=r("sub"),e.exports={toString:e=>i(e).toString(10),fromString:s,toNumber:a,fromNumber:c,toEther:e=>a(p(e,s("10000000000")))/1e8,fromEther:e=>u(c(Math.floor(1e8*e)),s("10000000000")),toUint256:e=>n.pad(32,e),add:l,mul:u,div:p,sub:r}},73390:function(e){e.exports={encode:e=>{const t=e=>(e=>e.length%2==0?e:"0"+e)(e.toString(16)),r=(e,r)=>e<56?t(r+e):t(r+t(e).length/2+55)+t(e),o=e=>{var t;return"string"==typeof e?(2!=(t=e.slice(2)).length||"80"<=t?r(t.length/2,128):"")+t:(t=e.map(o).join(""),r(t.length/2,192)+t)};return"0x"+o(e)},decode:e=>{let t=2;const r=()=>{if(t>=e.length)throw"";var n=e.slice(t,t+2);return n<"80"?(t+=2,"0x"+n):(n<"c0"?()=>{const r=o();return"0x"+e.slice(t,t+=2*r)}:()=>{const e=2*o()+t;let n=[];for(;t<e;)n.push(r());return n})()},o=()=>{var r=parseInt(e.slice(t,t+=2),16)%64;return r<56?r:parseInt(e.slice(t,t+=2*(r-55)),16)};try{return r()}catch(e){return[]}}}},75682:function(e,t,r){const o=r(47529),n=r(23420)();function i(e){this.currentProvider=e}function s(e){return function(){var t=[].slice.call(arguments),r=t.pop();this.sendAsync({method:e,params:t},r)}}function c(e,t){return function(){var r=[].slice.call(arguments),o=r.pop();r.length<e&&r.push("latest"),this.sendAsync({method:t,params:r},o)}}(e.exports=i).prototype.getBalance=c(2,"eth_getBalance"),i.prototype.getCode=c(2,"eth_getCode"),i.prototype.getTransactionCount=c(2,"eth_getTransactionCount"),i.prototype.getStorageAt=c(3,"eth_getStorageAt"),i.prototype.call=c(2,"eth_call"),i.prototype.protocolVersion=s("eth_protocolVersion"),i.prototype.syncing=s("eth_syncing"),i.prototype.coinbase=s("eth_coinbase"),i.prototype.mining=s("eth_mining"),i.prototype.hashrate=s("eth_hashrate"),i.prototype.gasPrice=s("eth_gasPrice"),i.prototype.accounts=s("eth_accounts"),i.prototype.blockNumber=s("eth_blockNumber"),i.prototype.getBlockTransactionCountByHash=s("eth_getBlockTransactionCountByHash"),i.prototype.getBlockTransactionCountByNumber=s("eth_getBlockTransactionCountByNumber"),i.prototype.getUncleCountByBlockHash=s("eth_getUncleCountByBlockHash"),i.prototype.getUncleCountByBlockNumber=s("eth_getUncleCountByBlockNumber"),i.prototype.sign=s("eth_sign"),i.prototype.sendTransaction=s("eth_sendTransaction"),i.prototype.sendRawTransaction=s("eth_sendRawTransaction"),i.prototype.estimateGas=s("eth_estimateGas"),i.prototype.getBlockByHash=s("eth_getBlockByHash"),i.prototype.getBlockByNumber=s("eth_getBlockByNumber"),i.prototype.getTransactionByHash=s("eth_getTransactionByHash"),i.prototype.getTransactionByBlockHashAndIndex=s("eth_getTransactionByBlockHashAndIndex"),i.prototype.getTransactionByBlockNumberAndIndex=s("eth_getTransactionByBlockNumberAndIndex"),i.prototype.getTransactionReceipt=s("eth_getTransactionReceipt"),i.prototype.getUncleByBlockHashAndIndex=s("eth_getUncleByBlockHashAndIndex"),i.prototype.getUncleByBlockNumberAndIndex=s("eth_getUncleByBlockNumberAndIndex"),i.prototype.getCompilers=s("eth_getCompilers"),i.prototype.compileLLL=s("eth_compileLLL"),i.prototype.compileSolidity=s("eth_compileSolidity"),i.prototype.compileSerpent=s("eth_compileSerpent"),i.prototype.newFilter=s("eth_newFilter"),i.prototype.newBlockFilter=s("eth_newBlockFilter"),i.prototype.newPendingTransactionFilter=s("eth_newPendingTransactionFilter"),i.prototype.uninstallFilter=s("eth_uninstallFilter"),i.prototype.getFilterChanges=s("eth_getFilterChanges"),i.prototype.getFilterLogs=s("eth_getFilterLogs"),i.prototype.getLogs=s("eth_getLogs"),i.prototype.getWork=s("eth_getWork"),i.prototype.submitWork=s("eth_submitWork"),i.prototype.submitHashrate=s("eth_submitHashrate"),i.prototype.sendAsync=function(e,t){this.currentProvider.sendAsync((e=e,o({id:n(),jsonrpc:"2.0",params:[]},e)),(function(e,r){if(e=!e&&r.error?new Error("EthQuery - RPC Error - "+r.error.message):e)return t(e);t(null,r.result)}))}},2843:function(e,t,r){const o=r(21964),n=r(68142);function i(e){const t=new Error("Expect argument to be non-empty array");if("object"!=typeof e||!e.length)throw t;var r=e.map((function(e){return"bytes"===e.type?o.toBuffer(e.value):e.value})),i=e.map((function(e){return e.type})),s=e.map((function(e){if(!e.name)throw t;return e.type+" "+e.name}));return n.soliditySHA3(["bytes32","bytes32"],[n.soliditySHA3(new Array(e.length).fill("string"),s),n.soliditySHA3(i,r)])}function s(e,t){return t=o.toBuffer(t),t=o.fromRpcSig(t),o.ecrecover(e,t.v,t.r,t.s)}function c(e){var t=o.toBuffer(e.data);return s(o.hashPersonalMessage(t),e.sig)}function a(e,t){for(var r=""+e;r.length<t;)r="0"+r;return r}e.exports={concatSig:function(e,t,r){t=o.fromSigned(t),r=o.fromSigned(r),e=o.bufferToInt(e);const n=a(o.toUnsigned(t).toString("hex"),64);return t=a(o.toUnsigned(r).toString("hex"),64),r=o.stripHexPrefix(o.intToHex(e)),o.addHexPrefix(n.concat(t,r)).toString("hex")},normalize:function(e){if(e){var t;if("number"==typeof e&&(t=o.toBuffer(e),e=o.bufferToHex(t)),"string"!=typeof e)throw t="eth-sig-util.normalize() requires hex string or integer input.",t+=" received "+typeof e+": "+e,new Error(t);return o.addHexPrefix(e.toLowerCase())}},personalSign:function(e,t){return t=o.toBuffer(t.data),t=o.hashPersonalMessage(t),t=o.ecsign(t,e),o.bufferToHex(this.concatSig(t.v,t.r,t.s))},recoverPersonalSignature:function(e){return e=c(e),e=o.publicToAddress(e),o.bufferToHex(e)},extractPublicKey:function(e){return"0x"+c(e).toString("hex")},typedSignatureHash:function(e){return e=i(e),o.bufferToHex(e)},signTypedData:function(e,t){return t=i(t.data),t=o.ecsign(t,e),o.bufferToHex(this.concatSig(t.v,t.r,t.s))},recoverTypedSignature:function(e){return e=s(i(e.data),e.sig),e=o.publicToAddress(e),o.bufferToHex(e)}}}}]);