(self.webpackChunkhugiris_nft=self.webpackChunkhugiris_nft||[]).push([[7010],{82131:function(t,e,r){"use strict";function n(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}}function o(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var r=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return r.observe({type:t,buffered:!0}),r}}catch(t){}}function i(t,e){function r(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(t(n),e&&(removeEventListener("visibilitychange",r,!0),removeEventListener("pagehide",r,!0)))}addEventListener("visibilitychange",r,!0),addEventListener("pagehide",r,!0)}function a(t,e,r){var n;return function(){0<=e.value&&(r||v.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(n||0),!e.delta&&void 0!==n||(n=e.value,t(e)))}}function s(){return g<0&&(g=y(),E(),h((function(){setTimeout((function(){g=y(),E()}),0)}))),{get timeStamp(){return g}}}function c(t,e){p||(p=e,d=t,m=new Date,l(removeEventListener),u())}function u(){var t;0<=d&&d<m-k&&(t={entryType:"first-input",name:p.type,target:p.target,cancelable:p.cancelable,startTime:p.timeStamp,processingStart:p.timeStamp+d},f.forEach((function(e){e(t)})),f=[])}function l(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,P)}))}r.r(e),r.d(e,{getCLS:function(){return b},getFCP:function(){return w},getFID:function(){return x},getLCP:function(){return F},getTTFB:function(){return N}});var p,d,m,f,h=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},v=new("function"==typeof WeakSet?WeakSet:Set),b=function(t,e){function r(t){t.hadRecentInput||(c.value+=t.value,c.entries.push(t),s())}var s,c=n("CLS",0),u=o("layout-shift",r);u&&(s=a(t,c,e),i((function(){u.takeRecords().map(r),s()})),h((function(){c=n("CLS",0),s=a(t,c,e)})))},g=-1,y=function(){return"hidden"===document.visibilityState?0:1/0},E=function(){i((function(t){t=t.timeStamp,g=t}),!0)},w=function(t,e){function r(t){"first-contentful-paint"===t.name&&(p&&p.disconnect(),t.startTime<c.timeStamp&&(u.value=t.startTime,u.entries.push(t),v.add(u),i()))}var i,c=s(),u=n("FCP"),l=performance.getEntriesByName("first-contentful-paint")[0],p=l?null:o("paint",r);(l||p)&&(i=a(t,u,e),l&&r(l),h((function(r){u=n("FCP"),i=a(t,u,e),requestAnimationFrame((function(){requestAnimationFrame((function(){u.value=performance.now()-r.timeStamp,v.add(u),i()}))}))})))},P={passive:!0,capture:!0},k=new Date,T=function(t){var e,r,n,o;function i(){c(r,n),o()}function a(){o()}t.cancelable&&(e=(1e12<t.timeStamp?new Date:performance.now())-t.timeStamp,"pointerdown"==t.type?(r=e,n=t,o=function(){removeEventListener("pointerup",i,P),removeEventListener("pointercancel",a,P)},addEventListener("pointerup",i,P),addEventListener("pointercancel",a,P)):c(e,t))},x=function(t,e){function r(t){t.startTime<c.timeStamp&&(m.value=t.processingStart-t.startTime,m.entries.push(t),v.add(m),g())}var c=s(),m=n("FID"),b=o("first-input",r),g=a(t,m,e);b&&i((function(){b.takeRecords().map(r),b.disconnect()}),!0),b&&h((function(){m=n("FID"),g=a(t,m,e),f=[],d=-1,p=null,l(addEventListener),f.push(r),u()}))},F=function(t,e){function r(t){var e=t.startTime;e<l.timeStamp&&(p.value=e,p.entries.push(t)),c()}var c,u,l=s(),p=n("LCP"),d=o("largest-contentful-paint",r);d&&(c=a(t,p,e),u=function(){v.has(p)||(d.takeRecords().map(r),d.disconnect(),v.add(p),c())},["keydown","click"].forEach((function(t){addEventListener(t,u,{once:!0,capture:!0})})),i(u,!0),h((function(r){p=n("LCP"),c=a(t,p,e),requestAnimationFrame((function(){requestAnimationFrame((function(){p.value=performance.now()-r.timeStamp,v.add(p),c()}))}))})))},N=function(t){var e=n("TTFB"),r=function(){try{var r=performance.getEntriesByType("navigation")[0]||function(){var t,e=performance.timing,r={entryType:"navigation",startTime:0};for(t in e)"navigationStart"!==t&&"toJSON"!==t&&(r[t]=Math.max(e[t]-e.navigationStart,0));return r}();if(e.value=e.delta=r.responseStart,e.value<0)return;e.entries=[r],t(e)}catch(r){}};"complete"===document.readyState?setTimeout(r,0):addEventListener("pageshow",r)}},63583:function(t,e,r){"use strict";function n(t){this.givenProvider=n.givenProvider,t&&t._requestManager&&(t=t.currentProvider),"undefined"!=typeof document&&(this.pick=o.pick),this.setProvider(t)}var o=r(71789);n.givenProvider=null,"undefined"!=typeof ethereum&&ethereum.bzz&&(n.givenProvider=ethereum.bzz),n.prototype.setProvider=function(t){var e;return"string"!=typeof(t=t&&"object"==typeof t&&"string"==typeof t.bzz?t.bzz:t)?(this.currentProvider=null,e=new Error("No provider set, please set one using bzz.setProvider()."),!(this.download=this.upload=this.isAvailable=function(){throw e})):(this.currentProvider=t,this.download=o.at(t).download,this.upload=o.at(t).upload,this.isAvailable=o.at(t).isAvailable,!0)},t.exports=n},54928:function(t){"use strict";t.exports={ErrorResponse:function(t){var e=t&&t.error&&t.error.message?t.error.message:JSON.stringify(t);t=t.error&&t.error.data?t.error.data:null;return(e=new Error("Returned error: "+e)).data=t,e},InvalidNumberOfParams:function(t,e,r){return new Error('Invalid number of parameters for "'+r+'". Got '+t+" expected "+e+"!")},InvalidConnection:function(t,e){return this.ConnectionError("CONNECTION ERROR: Couldn't connect to node "+t+".",e)},InvalidProvider:function(){return new Error("Provider not set or invalid")},InvalidResponse:function(t){return t=t&&t.error&&t.error.message?t.error.message:"Invalid JSON RPC response: "+JSON.stringify(t),new Error(t)},ConnectionTimeout:function(t){return new Error("CONNECTION TIMEOUT: timeout of "+t+" ms achived")},ConnectionNotOpenError:function(t){return this.ConnectionError("connection not open on send()",t)},ConnectionCloseError:function(t){return"object"==typeof t&&t.code&&t.reason?this.ConnectionError("CONNECTION ERROR: The connection got closed with the close code `"+t.code+"` and the following reason string `"+t.reason+"`",t):new Error("CONNECTION ERROR: The connection closed unexpectedly")},MaxAttemptsReachedOnReconnectingError:function(){return new Error("Maximum number of reconnect attempts reached!")},PendingRequestsOnReconnectingError:function(){return new Error("CONNECTION ERROR: Provider started to reconnect before the response got received!")},ConnectionError:function(t,e){const r=new Error(t);return e&&(r.code=e.code,r.reason=e.reason),r},RevertInstructionError:function(t,e){var r=new Error("Your request got reverted with the following reason string: "+t);return r.reason=t,r.signature=e,r},TransactionRevertInstructionError:function(t,e,r){var n=new Error("Transaction has been reverted by the EVM:\n"+JSON.stringify(r,null,2));return n.reason=t,n.signature=e,n.receipt=r,n},TransactionError:function(t,e){return(t=new Error(t)).receipt=e,t},NoContractAddressFoundError:function(t){return this.TransactionError("The transaction receipt didn't contain a contract address.",t)},ContractCodeNotStoredError:function(t){return this.TransactionError("The contract code couldn't be stored, please check your gas limit.",t)},TransactionRevertedWithoutReasonError:function(t){return this.TransactionError("Transaction has been reverted by the EVM:\n"+JSON.stringify(t,null,2),t)},TransactionOutOfGasError:function(t){return this.TransactionError("Transaction ran out of gas. Please provide more gas:\n"+JSON.stringify(t,null,2),t)},ResolverMethodMissingError:function(t,e){return new Error("The resolver at "+t+'does not implement requested method: "'+e+'".')},ContractMissingABIError:function(){return new Error("You must provide the json interface of the contract when instantiating a contract object.")},ContractOnceRequiresCallbackError:function(){return new Error("Once requires a callback as the second parameter.")},ContractEventDoesNotExistError:function(t){return new Error('Event "'+t+"\" doesn't exist in this contract.")},ContractReservedEventError:function(t){return new Error('The event "'+t+"\" is a reserved event name, you can't use it.")},ContractMissingDeployDataError:function(){return new Error('No "data" specified in neither the given options, nor the default options.')},ContractNoAddressDefinedError:function(){return new Error("This contract object doesn't have address set yet, please set an address first.")},ContractNoFromAddressDefinedError:function(){return new Error('No "from" address specified in neither the given options, nor the default options.')}}},76267:function(t,e,r){"use strict";function n(t){return c.toBN(t).toString(10)}function o(t){if(void 0!==t)return l(t)?t:"genesis"===t?"0x0":c.isHexStrict(t)?"string"==typeof t?t.toLowerCase():t:c.numberToHex(t)}function i(t){if(t.to&&(t.to=p(t.to)),t.data&&t.input)throw new Error('You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');if(!t.data&&t.input&&(t.data=t.input,delete t.input),t.data&&!t.data.startsWith("0x")&&(t.data="0x"+t.data),t.data&&!c.isHex(t.data))throw new Error("The data field must be HEX encoded data.");return(t.gas||t.gasLimit)&&(t.gas=t.gas||t.gasLimit),(t.maxPriorityFeePerGas||t.maxFeePerGas)&&delete t.gasPrice,["gasPrice","gas","value","maxPriorityFeePerGas","maxFeePerGas","nonce"].filter((function(e){return void 0!==t[e]})).forEach((function(e){t[e]=c.numberToHex(t[e])})),t}function a(t){return null!==t.blockNumber&&(t.blockNumber=c.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=c.hexToNumber(t.transactionIndex)),t.nonce=c.hexToNumber(t.nonce),t.gas=c.hexToNumber(t.gas),t.gasPrice&&(t.gasPrice=n(t.gasPrice)),t.maxFeePerGas&&(t.maxFeePerGas=n(t.maxFeePerGas)),t.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=n(t.maxPriorityFeePerGas)),t.type&&(t.type=c.hexToNumber(t.type)),t.value=n(t.value),t.to&&c.isAddress(t.to)?t.to=c.toChecksumAddress(t.to):t.to=null,t.from&&(t.from=c.toChecksumAddress(t.from)),t}function s(t){var e;return"string"==typeof t.blockHash&&"string"==typeof t.transactionHash&&"string"==typeof t.logIndex?(e=c.sha3(t.blockHash.replace("0x","")+t.transactionHash.replace("0x","")+t.logIndex.replace("0x","")),t.id="log_"+e.replace("0x","").substr(0,8)):t.id||(t.id=null),null!==t.blockNumber&&(t.blockNumber=c.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=c.hexToNumber(t.transactionIndex)),null!==t.logIndex&&(t.logIndex=c.hexToNumber(t.logIndex)),t.address&&(t.address=c.toChecksumAddress(t.address)),t}var c=r(18269),u=r(34751),l=function(t){return"latest"===t||"pending"===t||"earliest"===t},p=function(t){var e=new u(t);if(e.isValid()&&e.isDirect())return e.toAddress().toLowerCase();if(c.isAddress(t))return"0x"+t.toLowerCase().replace("0x","");throw new Error(`Provided address ${t} is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.`)};t.exports={inputDefaultBlockNumberFormatter:function(t){return o(this&&null==t?this.defaultBlock:t)},inputBlockNumberFormatter:o,inputCallFormatter:function(t){var e=(t=i(t)).from||(this?this.defaultAccount:null);return e&&(t.from=p(e)),t},inputTransactionFormatter:function(t){if("number"!=typeof(t=i(t)).from&&(!t.from||"object"!=typeof t.from)){if(t.from=t.from||(this?this.defaultAccount:null),!t.from&&"number"!=typeof t.from)throw new Error('The send transactions "from" field must be defined!');t.from=p(t.from)}return t},inputAddressFormatter:p,inputPostFormatter:function(t){return t.ttl&&(t.ttl=c.numberToHex(t.ttl)),t.workToProve&&(t.workToProve=c.numberToHex(t.workToProve)),t.priority&&(t.priority=c.numberToHex(t.priority)),Array.isArray(t.topics)||(t.topics=t.topics?[t.topics]:[]),t.topics=t.topics.map((function(t){return 0===t.indexOf("0x")?t:c.fromUtf8(t)})),t},inputLogFormatter:function(t){var e=function(t){return null==t?null:0===(t=String(t)).indexOf("0x")?t:c.fromUtf8(t)};return!(t=void 0===(t=void 0===t?{}:t).fromBlock?{...t,fromBlock:"latest"}:t).fromBlock&&0!==t.fromBlock||(t.fromBlock=o(t.fromBlock)),!t.toBlock&&0!==t.toBlock||(t.toBlock=o(t.toBlock)),t.topics=t.topics||[],t.topics=t.topics.map((function(t){return Array.isArray(t)?t.map(e):e(t)})),e=null,t.address&&(t.address=Array.isArray(t.address)?t.address.map((function(t){return p(t)})):p(t.address)),t},inputSignFormatter:function(t){return c.isHexStrict(t)?t:c.utf8ToHex(t)},inputStorageKeysFormatter:function(t){return t.map(c.numberToHex)},outputProofFormatter:function(t){return t.address=c.toChecksumAddress(t.address),t.nonce=c.hexToNumberString(t.nonce),t.balance=c.hexToNumberString(t.balance),t},outputBigNumberFormatter:n,outputTransactionFormatter:a,outputTransactionReceiptFormatter:function(t){if("object"!=typeof t)throw new Error("Received receipt is invalid: "+t);return null!==t.blockNumber&&(t.blockNumber=c.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=c.hexToNumber(t.transactionIndex)),t.cumulativeGasUsed=c.hexToNumber(t.cumulativeGasUsed),t.gasUsed=c.hexToNumber(t.gasUsed),Array.isArray(t.logs)&&(t.logs=t.logs.map(s)),t.effectiveGasPrice&&(t.effectiveGasPrice=c.hexToNumber(t.effectiveGasPrice)),t.contractAddress&&(t.contractAddress=c.toChecksumAddress(t.contractAddress)),void 0!==t.status&&null!==t.status&&(t.status=Boolean(parseInt(t.status))),t},outputBlockFormatter:function(t){return t.gasLimit=c.hexToNumber(t.gasLimit),t.gasUsed=c.hexToNumber(t.gasUsed),t.size=c.hexToNumber(t.size),t.timestamp=c.hexToNumber(t.timestamp),null!==t.number&&(t.number=c.hexToNumber(t.number)),t.difficulty&&(t.difficulty=n(t.difficulty)),t.totalDifficulty&&(t.totalDifficulty=n(t.totalDifficulty)),Array.isArray(t.transactions)&&t.transactions.forEach((function(t){if("string"!=typeof t)return a(t)})),t.miner&&(t.miner=c.toChecksumAddress(t.miner)),t.baseFeePerGas&&(t.baseFeePerGas=c.hexToNumber(t.baseFeePerGas)),t},outputLogFormatter:s,outputPostFormatter:function(t){return t.expiry=c.hexToNumber(t.expiry),t.sent=c.hexToNumber(t.sent),t.ttl=c.hexToNumber(t.ttl),t.workProved=c.hexToNumber(t.workProved),t.topics||(t.topics=[]),t.topics=t.topics.map((function(t){return c.toUtf8(t)})),t},outputSyncingFormatter:function(t){return t.startingBlock=c.hexToNumber(t.startingBlock),t.currentBlock=c.hexToNumber(t.currentBlock),t.highestBlock=c.hexToNumber(t.highestBlock),t.knownStates&&(t.knownStates=c.hexToNumber(t.knownStates),t.pulledStates=c.hexToNumber(t.pulledStates)),t}}},84390:function(t,e,r){"use strict";var n=r(54928);r=r(76267);t.exports={errors:n,formatters:r}},93952:function(t,e,r){"use strict";function n(t,e){return"number"==typeof t?e.wallet[t]:t&&"object"==typeof t&&t.address&&t.privateKey?t:e.wallet[t.toLowerCase()]}var o=r(84390).errors,i=r(84390).formatters,a=r(18269),s=r(4017),c=r(96602).subscriptions,u=r(75504),l=function(t){if(!t.call||!t.name)throw new Error('When creating a method you need to provide at least the "name" and "call" property.');this.name=t.name,this.call=t.call,this.params=t.params||0,this.inputFormatter=t.inputFormatter,this.outputFormatter=t.outputFormatter,this.transformPayload=t.transformPayload,this.extraFormatters=t.extraFormatters,this.abiCoder=t.abiCoder,this.requestManager=t.requestManager,this.accounts=t.accounts,this.defaultBlock=t.defaultBlock||"latest",this.defaultAccount=t.defaultAccount||null,this.transactionBlockTimeout=t.transactionBlockTimeout||50,this.transactionConfirmationBlocks=t.transactionConfirmationBlocks||24,this.transactionPollingTimeout=t.transactionPollingTimeout||750,this.transactionPollingInterval=t.transactionPollingInterval||1e3,this.blockHeaderTimeout=t.blockHeaderTimeout||10,this.defaultCommon=t.defaultCommon,this.defaultChain=t.defaultChain,this.defaultHardfork=t.defaultHardfork,this.handleRevert=t.handleRevert};l.prototype.setRequestManager=function(t,e){this.requestManager=t,e&&(this.accounts=e)},l.prototype.createFunction=function(t,e){var r=this.buildCall();return r.call=this.call,this.setRequestManager(t||this.requestManager,e||this.accounts),r},l.prototype.attachToObject=function(t){var e=this.buildCall(),r=(e.call=this.call,this.name.split("."));1<r.length?(t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=e):t[r[0]]=e},l.prototype.getCall=function(t){return"function"==typeof this.call?this.call(t):this.call},l.prototype.extractCallback=function(t){if("function"==typeof t[t.length-1])return t.pop()},l.prototype.validateArgs=function(t){if(t.length!==this.params)throw o.InvalidNumberOfParams(t.length,this.params,this.name)},l.prototype.formatInput=function(t){var e=this;return this.inputFormatter?this.inputFormatter.map((function(r,n){return r?r.call(e,t[n]):t[n]})):t},l.prototype.formatOutput=function(t){var e=this;return Array.isArray(t)?t.map((function(t){return e.outputFormatter&&t?e.outputFormatter(t):t})):this.outputFormatter&&t?this.outputFormatter(t):t},l.prototype.toPayload=function(t){var e=this.getCall(t),r=this.extractCallback(t);t=this.formatInput(t),this.validateArgs(t),e={method:e,params:t,callback:r};return this.transformPayload?this.transformPayload(e):e},l.prototype._confirmTransaction=function(t,e,r){function n(n,c,l,P,T){if(!l)return T=T||{unsubscribe:function(){clearInterval(v),clearTimeout(b)}},(n?s.resolve(n):k.getTransactionReceipt(e)).catch((function(e){T.unsubscribe(),d=!0,a._fireError({message:"Failed to check for transaction receipt:",data:e},t.eventEmitter,t.reject)})).then((async function(e){if(!e||!e.blockHash)throw new Error("Receipt missing or blockHash null");var r,o;return p.extraFormatters&&p.extraFormatters.receiptFormatter&&(e=p.extraFormatters.receiptFormatter(e)),0<t.eventEmitter.listeners("confirmation").length&&(void 0!==n&&0===h||(o=(o=await k.getBlockByNumber("latest"))?o.hash:null,c?g?(r=await k.getBlockByNumber(g.number+1))&&(g=r,t.eventEmitter.emit("confirmation",h,e,o)):(r=await k.getBlockByNumber(e.blockNumber),g=r,t.eventEmitter.emit("confirmation",h,e,o)):t.eventEmitter.emit("confirmation",h,e,o)),(c&&r||!c)&&h++,m=!1,h===p.transactionConfirmationBlocks+1&&(T.unsubscribe(),t.eventEmitter.removeAllListeners())),e})).then((async function(e){if(E&&!d){if(!e.contractAddress)return m&&(T.unsubscribe(),d=!0),void a._fireError(o.NoContractAddressFoundError(e),t.eventEmitter,t.reject,null,e);var r;try{r=await k.getCode(e.contractAddress)}catch(e){}if(!r)return;!0===e.status&&w||2<r.length?(t.eventEmitter.emit("receipt",e),p.extraFormatters&&p.extraFormatters.contractDeployFormatter?t.resolve(p.extraFormatters.contractDeployFormatter(e)):t.resolve(e),m&&t.eventEmitter.removeAllListeners()):a._fireError(o.ContractCodeNotStoredError(e),t.eventEmitter,t.reject,null,e),m&&T.unsubscribe(),d=!0}return e})).then((async function(e){if(!E&&!d){if(e.outOfGas||y&&y===e.gasUsed||!0!==e.status&&"0x1"!==e.status&&void 0!==e.status)if(JSON.stringify(e,null,2),!1===e.status||"0x0"===e.status)try{var n;if(!p.handleRevert||"eth_sendTransaction"!==p.call&&"eth_sendRawTransaction"!==p.call)throw!1;var s,c,l=r.params[0];if("eth_sendRawTransaction"===p.call&&(s=r.params[0],c=u.parse(s),l=i.inputTransactionFormatter({data:c.data,to:c.to,from:c.from,gas:c.gasLimit.toHexString(),gasPrice:c.gasPrice.toHexString(),value:c.value.toHexString()})),!(n=await p.getRevertReason(l,e.blockNumber)))throw!1;a._fireError(o.TransactionRevertInstructionError(n.reason,n.signature,e),t.eventEmitter,t.reject,null,e)}catch(n){a._fireError(o.TransactionRevertedWithoutReasonError(e),t.eventEmitter,t.reject,null,e)}else a._fireError(o.TransactionOutOfGasError(e),t.eventEmitter,t.reject,null,e);else t.eventEmitter.emit("receipt",e),t.resolve(e),m&&t.eventEmitter.removeAllListeners();m&&T.unsubscribe(),d=!0}})).catch((function(){f++,c?f-1>=p.transactionPollingTimeout&&(T.unsubscribe(),d=!0,a._fireError(o.TransactionError("Transaction was not mined within "+p.transactionPollingTimeout+" seconds, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject)):f-1>=p.transactionBlockTimeout&&(T.unsubscribe(),d=!0,a._fireError(o.TransactionError("Transaction was not mined within "+p.transactionBlockTimeout+" blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject))}));T.unsubscribe(),d=!0,a._fireError({message:"Failed to subscribe to new newBlockHeaders to confirm the transaction receipts.",data:l},t.eventEmitter,t.reject)}var p=this,d=!1,m=!0,f=0,h=0,v=null,b=null,g=null,y=r.params[0]&&"object"==typeof r.params[0]&&r.params[0].gas?r.params[0].gas:null,E=!!r.params[0]&&"object"==typeof r.params[0]&&r.params[0].data&&r.params[0].from&&!r.params[0].to,w=E&&2<r.params[0].data.length,P=[new l({name:"getBlockByNumber",call:"eth_getBlockByNumber",params:2,inputFormatter:[i.inputBlockNumberFormatter,function(t){return!!t}],outputFormatter:i.outputBlockFormatter}),new l({name:"getTransactionReceipt",call:"eth_getTransactionReceipt",params:1,inputFormatter:[null],outputFormatter:i.outputTransactionReceiptFormatter}),new l({name:"getCode",call:"eth_getCode",params:2,inputFormatter:[i.inputAddressFormatter,i.inputDefaultBlockNumberFormatter]}),new l({name:"getTransactionByHash",call:"eth_getTransactionByHash",params:1,inputFormatter:[null],outputFormatter:i.outputTransactionFormatter}),new c({name:"subscribe",type:"eth",subscriptions:{newBlockHeaders:{subscriptionName:"newHeads",params:0,outputFormatter:i.outputBlockFormatter}}})],k={},T=(P.forEach((t=>{t.attachToObject(k),t.requestManager=p.requestManager})),function(t){let e=!1;const r=()=>{v=setInterval(n.bind(null,t,!0),p.transactionPollingInterval)};if(!this.requestManager.provider.on)return r();k.subscribe("newBlockHeaders",(function(o,i,a){if(e=!0,o||!i)return r();n(t,!1,o,0,a)})),b=setTimeout((()=>{e||r()}),1e3*this.blockHeaderTimeout)}.bind(this));k.getTransactionReceipt(e).then((function(e){e&&e.blockHash?(0<t.eventEmitter.listeners("confirmation").length&&T(e),n(e,!1)):d||T()})).catch((function(){d||T()}))},l.prototype.buildCall=function(){function t(){function t(t){t={...m,method:"eth_sendRawTransaction",params:[t.rawTransaction]},e.requestManager.send(t,f)}function c(e,r){if(r&&r.accounts&&r.accounts.wallet&&r.accounts.wallet.length)if("eth_sendTransaction"===e.method){var o=n((i=e.params[0])&&"object"==typeof i?i.from:null,r.accounts);if(o&&o.privateKey)return delete(i=JSON.parse(JSON.stringify(i))).from,r.defaultChain&&!i.chain&&(i.chain=r.defaultChain),r.defaultHardfork&&!i.hardfork&&(i.hardfork=r.defaultHardfork),r.defaultCommon&&!i.common&&(i.common=r.defaultCommon),r.accounts.signTransaction(i,o.privateKey).then(t).catch((function(t){if("function"==typeof d.eventEmitter.listeners&&d.eventEmitter.listeners("error").length){try{d.eventEmitter.emit("error",t)}catch(t){}d.eventEmitter.removeAllListeners(),d.eventEmitter.catch((function(){}))}d.reject(t)})),0}else if("eth_sign"===e.method){var i=e.params[1];if((o=n(e.params[0],r.accounts))&&o.privateKey)return i=r.accounts.sign(i,o.privateKey),e.callback&&e.callback(null,i.signature),d.resolve(i.signature),0}return r.requestManager.send(e,f)}var u,p,d=s(!r),m=e.toPayload(Array.prototype.slice.call(arguments)),f=function(t,n){var s;if(e.handleRevert&&i&&e.abiCoder&&(!t&&e.isRevertReasonString(n)?s=n.substring(10):t&&t.data&&(s=t.data.substring(10)),s))return s=e.abiCoder.decodeParameter("string","0x"+s),void a._fireError(o.RevertInstructionError(s,"Error(String)"),d.eventEmitter,d.reject,m.callback,{reason:s,signature:"Error(String)"});try{n=e.formatOutput(n)}catch(n){t=n}if(t=n instanceof Error?n:t)return t.error&&(t=t.error),a._fireError(t,d.eventEmitter,d.reject,m.callback);m.callback&&m.callback(null,n),r?(d.eventEmitter.emit("transactionHash",n),e._confirmTransaction(d,n,m)):t||d.resolve(n)};return r&&m.params[0]&&"object"==typeof m.params[0]&&void 0===m.params[0].gasPrice&&(void 0===m.params[0].maxPriorityFeePerGas||void 0===m.params[0].maxFeePerGas)?(u=e,p=m.params[0],new Promise(((t,e)=>{try{var r=new l({name:"getBlockByNumber",call:"eth_getBlockByNumber",params:2,inputFormatter:[function(t){return t?a.toHex(t):"latest"},function(){return!1}]}).createFunction(u.requestManager),n=new l({name:"getGasPrice",call:"eth_gasPrice",params:0}).createFunction(u.requestManager);Promise.all([r(),n()]).then((e=>{var[e,r]=e;if(("0x2"===p.type||void 0===p.type)&&e&&e.baseFeePerGas){let r,n;p.gasPrice?(r=p.gasPrice,n=p.gasPrice,delete p.gasPrice):(r=p.maxPriorityFeePerGas||"0x9502F900",n=p.maxFeePerGas||a.toHex(a.toBN(e.baseFeePerGas).mul(a.toBN(2)).add(a.toBN(r)))),t({maxFeePerGas:n,maxPriorityFeePerGas:r})}else{if(p.maxPriorityFeePerGas||p.maxFeePerGas)throw Error("Network doesn't support eip-1559");t({gasPrice:r})}}))}catch(r){e(r)}})).then((t=>{void 0!==t.gasPrice?m.params[0].gasPrice=t.gasPrice:void 0!==t.maxPriorityFeePerGas&&void 0!==t.maxFeePerGas&&(m.params[0].maxPriorityFeePerGas=t.maxPriorityFeePerGas,m.params[0].maxFeePerGas=t.maxFeePerGas),r&&setTimeout((()=>{d.eventEmitter.emit("sending",m)}),0),c(m,e)}))):(r&&setTimeout((()=>{d.eventEmitter.emit("sending",m)}),0),c(m,e)),r&&setTimeout((()=>{d.eventEmitter.emit("sent",m)}),0),d.eventEmitter}var e=this,r="eth_sendTransaction"===e.call||"eth_sendRawTransaction"===e.call,i="eth_call"===e.call;return t.method=e,t.request=this.request.bind(this),t},l.prototype.getRevertReason=function(t,e){var r=this;return new Promise((function(n,o){new l({name:"call",call:"eth_call",params:2,abiCoder:r.abiCoder,handleRevert:!0}).createFunction(r.requestManager)(t,a.numberToHex(e)).then((function(){n(!1)})).catch((function(t){t.reason?n({reason:t.reason,signature:t.signature}):o(t)}))}))},l.prototype.isRevertReasonString=function(t){return"string"==typeof t&&(t.length-2)/2%32==4&&"0x08c379a0"===t.substring(0,10)},l.prototype.request=function(){var t=this.toPayload(Array.prototype.slice.call(arguments));return t.format=this.formatOutput.bind(this),t},t.exports=l},4017:function(t,e,r){"use strict";function n(t){var e,r,n=new Promise((function(){e=arguments[0],r=arguments[1]}));return t||(t=new o,n._events=t._events,n.emit=t.emit,n.on=t.on,n.once=t.once,n.off=t.off,n.listeners=t.listeners,n.addListener=t.addListener,n.removeListener=t.removeListener,n.removeAllListeners=t.removeAllListeners),{resolve:e,reject:r,eventEmitter:n}}var o=r(26729);n.resolve=function(t){var e=n(!0);return e.resolve(t),e.eventEmitter},t.exports=n},98991:function(t,e,r){"use strict";function n(t){this.requestManager=t,this.requests=[]}var o=r(28911),i=r(84390).errors;n.prototype.add=function(t){this.requests.push(t)},n.prototype.execute=function(){var t=this.requests,e=this._sortResponses.bind(this);this.requestManager.sendBatch(t,(function(r,n){n=e(n),t.map((function(t,e){return n[e]||{}})).forEach((function(e,r){if(t[r].callback){if(e&&e.error)return t[r].callback(i.ErrorResponse(e));if(!o.isValidResponse(e))return t[r].callback(i.InvalidResponse(e));try{t[r].callback(null,t[r].format?t[r].format(e.result):e.result)}catch(e){t[r].callback(e)}}}))}))},n.prototype._sortResponses=function(t){return(t||[]).sort(((t,e)=>t.id-e.id))},t.exports=n},72319:function(t){"use strict";var e,r=null;try{e=Function("return this")()}catch(t){e=window}void 0!==e.ethereum?r=e.ethereum:void 0!==e.web3&&e.web3.currentProvider&&(e.web3.currentProvider.sendAsync&&(e.web3.currentProvider.send=e.web3.currentProvider.sendAsync,delete e.web3.currentProvider.sendAsync),!e.web3.currentProvider.on&&e.web3.currentProvider.connection&&"ipcProviderWrapper"===e.web3.currentProvider.connection.constructor.name&&(e.web3.currentProvider.on=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");"data"===t?this.connection.on("data",(function(t){var r="";t=t.toString();try{r=JSON.parse(t)}catch(r){return e(new Error("Couldn't parse response data"+t))}r.id||-1===r.method.indexOf("_subscription")||e(null,r)})):this.connection.on(t,e)}),r=e.web3.currentProvider),t.exports=r},24983:function(t,e,r){"use strict";const n=r(89539).callbackify;function o(t,e){this.provider=null,this.providers=o.providers,this.setProvider(t,e),this.subscriptions=new Map}var i=r(84390).errors,a=r(28911),s=r(98991),c=r(72319);o.givenProvider=c,o.providers={WebsocketProvider:r(69556),HttpProvider:r(34351),IpcProvider:r(73097)},o.prototype.setProvider=function(t,e){var r=this;if(t&&"string"==typeof t&&this.providers)if(/^http(s)?:\/\//i.test(t))t=new this.providers.HttpProvider(t);else if(/^ws(s)?:\/\//i.test(t))t=new this.providers.WebsocketProvider(t);else if(t&&"object"==typeof e&&"function"==typeof e.connect)t=new this.providers.IpcProvider(t,e);else if(t)throw new Error("Can't autodetect provider for \""+t+'"');this.provider&&this.provider.connected&&this.clearSubscriptions(),this.provider=t||null,this.provider&&this.provider.on&&("function"==typeof t.request?this.provider.on("message",(function(t){t&&"eth_subscription"===t.type&&t.data&&(t=t.data).subscription&&r.subscriptions.has(t.subscription)&&r.subscriptions.get(t.subscription).callback(null,t.result)})):this.provider.on("data",(function(t,e){(t=t||e).method&&t.params&&t.params.subscription&&r.subscriptions.has(t.params.subscription)&&r.subscriptions.get(t.params.subscription).callback(null,t.params.result)})),this.provider.on("connect",(function(){r.subscriptions.forEach((function(t){t.subscription.resubscribe()}))})),this.provider.on("error",(function(t){r.subscriptions.forEach((function(e){e.callback(t)}))})),this.provider.on("close",e=function(t){r._isCleanCloseEvent(t)&&!r._isIpcCloseError(t)||(r.subscriptions.forEach((function(e){e.callback(i.ConnectionCloseError(t)),r.subscriptions.delete(e.subscription.id)})),r.provider&&r.provider.emit&&r.provider.emit("error",i.ConnectionCloseError(t))),r.provider&&r.provider.emit&&r.provider.emit("end",t)}),this.provider.on("disconnect",e))},o.prototype.send=function(t,e){if(e=e||function(){},!this.provider)return e(i.InvalidProvider());var{method:t,params:r}=t,o=a.toPayload(t,r),s=this._jsonrpcResultCallback(e,o);if(this.provider.request){n(this.provider.request.bind(this.provider))({method:t,params:r},e)}else if(this.provider.sendAsync)this.provider.sendAsync(o,s);else{if(!this.provider.send)throw new Error("Provider does not have a request or send method to use.");this.provider.send(o,s)}},o.prototype.sendBatch=function(t,e){if(!this.provider)return e(i.InvalidProvider());t=a.toBatchPayload(t),this.provider[this.provider.sendAsync?"sendAsync":"send"](t,(function(t,r){return t?e(t):Array.isArray(r)?void e(null,r):e(i.InvalidResponse(r))}))},o.prototype.addSubscription=function(t,e){if(!this.provider.on)throw new Error("The provider doesn't support subscriptions: "+this.provider.constructor.name);this.subscriptions.set(t.id,{callback:e,subscription:t})},o.prototype.removeSubscription=function(t,e){var r;if(this.subscriptions.has(t))return r=this.subscriptions.get(t).subscription.options.type,this.subscriptions.delete(t),void this.send({method:r+"_unsubscribe",params:[t]},e);"function"==typeof e&&e(null)},o.prototype.clearSubscriptions=function(t){try{var e=this;return 0<this.subscriptions.size&&this.subscriptions.forEach((function(r,n){t&&"syncing"===r.name||e.removeSubscription(n)})),this.provider.reset&&this.provider.reset(),!0}catch(t){throw new Error("Error while clearing subscriptions: "+t)}},o.prototype._isCleanCloseEvent=function(t){return"object"==typeof t&&([1e3].includes(t.code)||!0===t.wasClean)},o.prototype._isIpcCloseError=function(t){return"boolean"==typeof t&&t},o.prototype._jsonrpcResultCallback=function(t,e){return function(r,n){return n&&n.id&&e.id!==n.id?t(new Error(`Wrong response id ${n.id} (expected: ${e.id}) in `+JSON.stringify(e))):r?t(r):n&&n.error?t(i.ErrorResponse(n)):a.isValidResponse(n)?void t(null,n.result):t(i.InvalidResponse(n))}},t.exports={Manager:o,BatchManager:s}},28911:function(t){"use strict";var e={messageId:0,toPayload:function(t,r){if(!t)throw new Error('JSONRPC method should be specified for params: "'+JSON.stringify(r)+'"!');return e.messageId++,{jsonrpc:"2.0",id:e.messageId,method:t,params:r||[]}},isValidResponse:function(t){return Array.isArray(t)?t.every(e):e(t);function e(t){return!(!t||t.error||"2.0"!==t.jsonrpc||"number"!=typeof t.id&&"string"!=typeof t.id||void 0===t.result)}},toBatchPayload:function(t){return t.map((function(t){return e.toPayload(t.method,t.params)}))}};t.exports=e},96602:function(t,e,r){"use strict";function n(t){this.name=t.name,this.type=t.type,this.subscriptions=t.subscriptions||{},this.requestManager=null}var o=r(25108),i=r(45826);n.prototype.setRequestManager=function(t){this.requestManager=t},n.prototype.attachToObject=function(t){var e=this.buildCall(),r=this.name.split(".");1<r.length?(t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=e):t[r[0]]=e},n.prototype.buildCall=function(){var t=this;return function(){t.subscriptions[arguments[0]]||o.warn("Subscription "+JSON.stringify(arguments[0])+" doesn't exist. Subscribing anyway.");var e=new i({subscription:t.subscriptions[arguments[0]]||{},requestManager:t.requestManager,type:t.type});return e.subscribe.apply(e,arguments)}},t.exports={subscriptions:n,subscription:i}},45826:function(t,e,r){"use strict";var n=r(84390).errors,o=r(26729),i=r(84390).formatters;function a(t){return t}function s(t){o.call(this),this.id=null,this.callback=a,this.arguments=null,this.lastBlock=null,this.options={subscription:t.subscription,type:t.type,requestManager:t.requestManager}}((s.prototype=Object.create(o.prototype)).constructor=s).prototype._extractCallback=function(t){if("function"==typeof t[t.length-1])return t.pop()},s.prototype._validateArgs=function(t){var e=this.options.subscription;if((e=e||{}).params||(e.params=0),t.length!==e.params)throw n.InvalidNumberOfParams(t.length,e.params,e.subscriptionName)},s.prototype._formatInput=function(t){var e=this.options.subscription;return e&&e.inputFormatter?e.inputFormatter.map((function(e,r){return e?e(t[r]):t[r]})):t},s.prototype._formatOutput=function(t){var e=this.options.subscription;return e&&e.outputFormatter&&t?e.outputFormatter(t):t},s.prototype._toPayload=function(t){var e=[];if(this.callback=this._extractCallback(t)||a,this.subscriptionMethod||(this.subscriptionMethod=t.shift(),this.options.subscription.subscriptionName&&(this.subscriptionMethod=this.options.subscription.subscriptionName)),this.arguments||(this.arguments=this._formatInput(t),this._validateArgs(this.arguments),t=[]),e.push(this.subscriptionMethod),e=e.concat(this.arguments),t.length)throw new Error("Only a callback is allowed as parameter on an already instantiated subscription.");return{method:this.options.type+"_subscribe",params:e}},s.prototype.unsubscribe=function(t){this.options.requestManager.removeSubscription(this.id,t),this.id=null,this.lastBlock=null,this.removeAllListeners()},s.prototype.subscribe=function(){var t=this,e=Array.prototype.slice.call(arguments),r=this._toPayload(e);return r&&(this.options.requestManager.provider?this.options.requestManager.provider.on?(this.lastBlock&&this.options.params&&"object"==typeof this.options.params&&(r.params[1]=this.options.params,r.params[1].fromBlock=i.inputBlockNumberFormatter(this.lastBlock+1)),this.id&&this.unsubscribe(),this.options.params=r.params[1],"logs"===r.params[0]&&r.params[1]&&"object"==typeof r.params[1]&&r.params[1].hasOwnProperty("fromBlock")&&isFinite(r.params[1].fromBlock)&&(e=Object.assign({},r.params[1]),this.options.requestManager.send({method:"eth_getLogs",params:[e]},(function(e,r){e?setTimeout((function(){t.callback(e,null,t),t.emit("error",e)}),0):r.forEach((function(e){e=t._formatOutput(e),t.callback(null,e,t),t.emit("data",e)}))}))),"object"==typeof r.params[1]&&delete r.params[1].fromBlock,this.options.requestManager.send(r,(function(e,n){!e&&n?(t.id=n,t.method=r.params[0],t.options.requestManager.addSubscription(t,(function(e,r){e?(t.callback(e,!1,t),t.emit("error",e)):(r=Array.isArray(r)?r:[r]).forEach((function(e){if(e=t._formatOutput(e),t.lastBlock=e&&"object"==typeof e?e.blockNumber:null,"function"==typeof t.options.subscription.subscriptionHandler)return t.options.subscription.subscriptionHandler.call(t,e);t.emit("data",e),t.callback(null,e,t)}))})),t.emit("connected",n)):setTimeout((function(){t.callback(e,!1,t),t.emit("error",e)}),0)}))):setTimeout((function(){var e=new Error("The current provider doesn't support subscriptions: "+t.options.requestManager.provider.constructor.name);t.callback(e,null,t),t.emit("error",e)}),0):setTimeout((function(){var e=new Error("No provider set.");t.callback(e,null,t),t.emit("error",e)}),0)),this},s.prototype.resubscribe=function(){this.options.requestManager.removeSubscription(this.id),this.id=null,this.subscribe(this.callback)},t.exports=s},37327:function(t,e,r){"use strict";var n=r(84390).formatters,o=r(93952),i=r(18269);t.exports=function(t){function e(e){var r=e.property?(t[e.property]||(t[e.property]={}),t[e.property]):t;return e.methods&&e.methods.forEach((function(e){(e=e instanceof o?e:new o(e)).attachToObject(r),e.setRequestManager(t._requestManager)})),t}return e.formatters=n,e.utils=i,e.Method=o,e}},92928:function(t,e,r){const n=r(24983),o=r(37327);t.exports={packageInit:(t,e)=>{if(e=Array.prototype.slice.call(e),!t)throw new Error('You need to instantiate using the "new" keyword.');Object.defineProperty(t,"currentProvider",{get:()=>t._provider,set:e=>t.setProvider(e),enumerable:!0,configurable:!0}),e[0]&&e[0]._requestManager?t._requestManager=e[0]._requestManager:t._requestManager=new n.Manager(e[0],e[1]),t.givenProvider=n.Manager.givenProvider,t.providers=n.Manager.providers,t._provider=t._requestManager.provider,t.setProvider||(t.setProvider=(e,r)=>(t._requestManager.setProvider(e,r),t._provider=t._requestManager.provider,!0)),t.setRequestManager=e=>{t._requestManager=e,t._provider=e.provider},t.BatchRequest=n.BatchManager.bind(null,t._requestManager),t.extend=o(t)},addProviders:t=>{t.givenProvider=n.Manager.givenProvider,t.providers=n.Manager.providers}}}}]);