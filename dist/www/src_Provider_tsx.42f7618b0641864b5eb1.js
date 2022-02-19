(self["webpackChunkhugiris_nft"] = self["webpackChunkhugiris_nft"] || []).push([["src_Provider_tsx"],{

/***/ "./src/Provider.tsx":
/*!**************************!*\
  !*** ./src/Provider.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/connectors */ "./src/utils/connectors.tsx");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.tsx");





const Web3Provider = ({ children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, { store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.Web3ReactProvider, { getLibrary: _utils_connectors__WEBPACK_IMPORTED_MODULE_3__.getLibrary, children: children }, void 0) }, void 0) }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (Web3Provider);


/***/ }),

/***/ "./src/config.tsx":
/*!************************!*\
  !*** ./src/config.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
(__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config)();
if (false) {}
const config = {
    chainId: process.env.REACT_APP_ETH_MAINNET_CHAIN_ID || '1',
    rpc_url1: process.env.REACT_APP_ETH_MAINNET_RPC_URL_1 || '',
    rpc_url2: process.env.REACT_APP_ETH_MAINNET_RPC_URL_2 || '',
    backend_url: process.env.REACT_APP_BACKEND_URL || '',
};
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/redux/modalShowSlice.tsx":
/*!**************************************!*\
  !*** ./src/redux/modalShowSlice.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalShowSlice": function() { return /* binding */ modalShowSlice; },
/* harmony export */   "changeState": function() { return /* binding */ changeState; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const modalShowSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'modalShow',
    initialState: {
        show: false,
    },
    reducers: {
        changeState: (state) => {
            state.show = state.show ? false : true;
        },
    },
});
const { changeState } = modalShowSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (modalShowSlice.reducer);


/***/ }),

/***/ "./src/redux/store.tsx":
/*!*****************************!*\
  !*** ./src/redux/store.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _modalShowSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalShowSlice */ "./src/redux/modalShowSlice.tsx");
/* harmony import */ var _triedEager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triedEager */ "./src/redux/triedEager.tsx");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        modalShow: _modalShowSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
        triedEager: _triedEager__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/redux/triedEager.tsx":
/*!**********************************!*\
  !*** ./src/redux/triedEager.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "triedEagerSlice": function() { return /* binding */ triedEagerSlice; },
/* harmony export */   "setState": function() { return /* binding */ setState; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const triedEagerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'triedEager',
    initialState: {
        tried: false,
    },
    reducers: {
        setState: (state, action) => {
            state.tried = action.payload;
        },
    },
});
const { setState } = triedEagerSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (triedEagerSlice.reducer);


/***/ }),

/***/ "./src/utils/connectors.tsx":
/*!**********************************!*\
  !*** ./src/utils/connectors.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injected": function() { return /* binding */ injected; },
/* harmony export */   "walletconnect": function() { return /* binding */ walletconnect; },
/* harmony export */   "getLibrary": function() { return /* binding */ getLibrary; }
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getRPC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRPC */ "./src/utils/getRPC.tsx");




const RPC_URL = (0,_getRPC__WEBPACK_IMPORTED_MODULE_3__.getRPCNodeUrl)();
const CHAIN_ID = (0,_getRPC__WEBPACK_IMPORTED_MODULE_3__.getChainID)();
if (RPC_URL === undefined) {
    throw new Error('URL Type Error: should be string');
}
if (CHAIN_ID === NaN) {
    throw new Error('Invalid Numneric Error: should be a valid number');
}
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
    supportedChainIds: [CHAIN_ID],
});
injected.handleChainChanged = (newChainID) => {
    if (newChainID != CHAIN_ID) {
        localStorage.removeItem('_iris_fintech_');
        injected.emitDeactivate();
        return;
    }
    injected.emitUpdate({ chainId: newChainID, provider: window.BinanceChain });
    window.location.reload();
};
const POLLING_INTERVAL = 12000;
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__.WalletConnectConnector({
    rpc: { 1: RPC_URL },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
});
const getLibrary = (provider) => {
    const library = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(provider);
    return library;
};


/***/ }),

/***/ "./src/utils/getRPC.tsx":
/*!******************************!*\
  !*** ./src/utils/getRPC.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RPC_NODES": function() { return /* binding */ RPC_NODES; },
/* harmony export */   "getRPCNodeUrl": function() { return /* binding */ getRPCNodeUrl; },
/* harmony export */   "getChainID": function() { return /* binding */ getChainID; }
/* harmony export */ });
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.tsx");


if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].rpc_url1 || !_config__WEBPACK_IMPORTED_MODULE_1__["default"].rpc_url2) {
    throw Error('ETH_RPC_URLs is undefined');
}
const RPC_NODES = [_config__WEBPACK_IMPORTED_MODULE_1__["default"].rpc_url1, _config__WEBPACK_IMPORTED_MODULE_1__["default"].rpc_url2];
const getRPCNodeUrl = () => {
    const url = lodash_sample__WEBPACK_IMPORTED_MODULE_0___default()(RPC_NODES);
    if (url === undefined) {
        return undefined;
    }
    return url;
};
if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].chainId === undefined) {
    throw new Error('BSC_CHAIN_ID is undefined');
}
const chainID = _config__WEBPACK_IMPORTED_MODULE_1__["default"].chainId;
const getChainID = () => {
    return parseInt(chainID, 10);
};



/***/ }),

/***/ "?da9b":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?96ce":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?f9d4":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?7a28":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?cad2":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?593c":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?a0c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?802b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?1e44":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?ef3d":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?fa7e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?b3ef":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?0cc0":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?aeb7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?a8d7":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?c6c0":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Byb3ZpZGVyX3RzeC40MmY3NjE4YjA2NDE4NjRiNWViMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2Q7QUFFUztBQUNUO0FBRXZDLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQTJCLEVBQUUsRUFBRTtJQUMzRCxPQUFPLENBQ0gsNEhBQ0ksdURBQUMsaURBQVEsSUFBQyxLQUFLLEVBQUUsb0RBQVUsWUFDdkIsdURBQUMsK0RBQWlCLElBQUMsVUFBVSxFQUFFLHlEQUFVLFlBQUcsUUFBUSxXQUFxQixXQUNsRSxXQUNaLENBQ04sQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLCtEQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUNqQjVCLCtFQUF3QixFQUFFLENBQUM7QUFFM0IsSUFBSSxLQUFxQyxFQUFFLEVBUzFDO0FBRUQsTUFBTSxNQUFNLEdBQUc7SUFDWCxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsSUFBSSxHQUFHO0lBQzFELFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixJQUFJLEVBQUU7SUFDM0QsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLElBQUksRUFBRTtJQUUzRCxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFO0NBQ3ZELENBQUM7QUFFRiwrREFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUI7QUFFeEMsTUFBTSxjQUFjLEdBQUcsNkRBQVcsQ0FBQztJQUN0QyxJQUFJLEVBQUUsV0FBVztJQUNqQixZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsS0FBSztLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxD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Q0FBQztBQUU1RCxNQUFNLGFBQWEsR0FBRyxHQUF1QixFQUFFO0lBRTNDLE1BQU0sR0FBRyxHQUFHLG9EQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFHOUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ25CLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO0lBR0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFHRixJQUFJLHVEQUFjLEtBQUssU0FBUyxFQUFFO0lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztDQUNoRDtBQUVELE1BQU0sT0FBTyxHQUFHLHVEQUFjLENBQUM7QUFFL0IsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFbUM7Ozs7Ozs7Ozs7O0FDbkNyQzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9Qcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvY29uZmlnLnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9yZWR1eC9tb2RhbFNob3dTbGljZS50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvcmVkdXgvc3RvcmUudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3JlZHV4L3RyaWVkRWFnZXIudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3V0aWxzL2Nvbm5lY3RvcnMudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3V0aWxzL2dldFJQQy50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvQGV0aGVyZXVtanMvY29tbW9uL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL0BldGhlcmV1bWpzL3R4L25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2JuLmpzL2xpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvYnJvcmFuZHxjcnlwdG8iLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1yc2Evbm9kZV9tb2R1bGVzL2JuLmpzL2xpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1zaWduL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktc2lnbi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1zaWduL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGlifHV0aWwiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvZG90ZW52L2xpYnxmcyIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9oYXNoLWJhc2Uvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtc3x1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2hhc2gtYmFzZS9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYnx1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2tlY2Nhay9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMva2VjY2FrL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGlifHV0aWwiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvcmxwL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL3N0cmVhbS1odHRwL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9zdHJlYW0taHR0cC9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYnx1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL3dlYjMtZXRoLWFjY291bnRzL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL3dlYjMtdXRpbHMvbm9kZV9tb2R1bGVzL2V0aGVyZXVtanMtdXRpbC9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaWJyYXJ5IH0gZnJvbSAnLi91dGlscy9jb25uZWN0b3JzJztcbmltcG9ydCByZWR1eFN0b3JlIGZyb20gJy4vcmVkdXgvc3RvcmUnO1xuXG5jb25zdCBXZWIzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgICAgICAgICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT57Y2hpbGRyZW59PC9XZWIzUmVhY3RQcm92aWRlcj5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7XG4iLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzEgfHwgIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWlzc2luZyBSUEMgdXJsISEnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIGJhY2tlbmQgdXJsISEnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICAgIGNoYWluSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9DSEFJTl9JRCB8fCAnMScsXG4gICAgcnBjX3VybDE6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzEgfHwgJycsXG4gICAgcnBjX3VybDI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzIgfHwgJycsXG5cbiAgICBiYWNrZW5kX3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIHx8ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IG1vZGFsU2hvd1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdtb2RhbFNob3cnLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGNoYW5nZVN0YXRlOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzdGF0ZS5zaG93ID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VTdGF0ZSB9ID0gbW9kYWxTaG93U2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxTaG93U2xpY2UucmVkdWNlcjtcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgbW9kYWxTaG93UmVkdWNlciBmcm9tICcuL21vZGFsU2hvd1NsaWNlJztcbmltcG9ydCB0cmllZEVhZ2VyUmVkdWNlciBmcm9tICcuL3RyaWVkRWFnZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIG1vZGFsU2hvdzogbW9kYWxTaG93UmVkdWNlcixcbiAgICAgICAgdHJpZWRFYWdlcjogdHJpZWRFYWdlclJlZHVjZXIsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCBjb25zdCB0cmllZEVhZ2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3RyaWVkRWFnZXInLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB0cmllZDogZmFsc2UsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRTdGF0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnRyaWVkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldFN0YXRlIH0gPSB0cmllZEVhZ2VyU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdHJpZWRFYWdlclNsaWNlLnJlZHVjZXI7XG4iLCIvLyBMaWJyYXJ5IEltcG9ydFxuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG4vLyBJbXBvcnQgVFNYIEZpbGVcbmltcG9ydCB7IGdldFJQQ05vZGVVcmwsIGdldENoYWluSUQgfSBmcm9tICcuL2dldFJQQyc7XG5cbi8vIERlZmluZSBDb25zdGFudHNcbi8vIGNvbnN0IFBPTExJTkdfSU5URVJWQUw6IG51bWJlciA9IDEyMDAwO1xuY29uc3QgUlBDX1VSTDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0UlBDTm9kZVVybCgpO1xuY29uc3QgQ0hBSU5fSUQ6IG51bWJlciA9IGdldENoYWluSUQoKTtcblxuLy8gVHlwZSBDaGVjazogUlBDX1VSTCBzaG91bGQgYmUgdmFsaWQgc3RyaW5nXG5pZiAoUlBDX1VSTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVUkwgVHlwZSBFcnJvcjogc2hvdWxkIGJlIHN0cmluZycpO1xufVxuXG4vLyBUeXBlIENoZWNrOiBDSEFJTl9JRCBzaG91bGQgYmUgdmFsaWQgTnVtYmVyXG5pZiAoQ0hBSU5fSUQgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBOdW1uZXJpYyBFcnJvcjogc2hvdWxkIGJlIGEgdmFsaWQgbnVtYmVyJyk7XG59XG5cbi8vIENvbm5lY3QgdG8gSW5qZWN0IENvbm5lY3RvclxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcbiAgICBzdXBwb3J0ZWRDaGFpbklkczogW0NIQUlOX0lEXSxcbn0pO1xuXG4vL0B0cy1pZ25vcmVcbmluamVjdGVkLmhhbmRsZUNoYWluQ2hhbmdlZCA9IChuZXdDaGFpbklEOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICBpZiAobmV3Q2hhaW5JRCAhPSBDSEFJTl9JRCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX2lyaXNfZmludGVjaF8nKTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaW5qZWN0ZWQuZW1pdERlYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgaW5qZWN0ZWQuZW1pdFVwZGF0ZSh7IGNoYWluSWQ6IG5ld0NoYWluSUQsIHByb3ZpZGVyOiB3aW5kb3cuQmluYW5jZUNoYWluIH0pO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuLy8gQ29ubmVjdCB0byBXYWxsZXRjb25uZWN0IENvbm5lY3RvclxuY29uc3QgUE9MTElOR19JTlRFUlZBTCA9IDEyMDAwO1xuXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgICBycGM6IHsgMTogUlBDX1VSTCB9LFxuICAgIGJyaWRnZTogJ2h0dHBzOi8vYnJpZGdlLndhbGxldGNvbm5lY3Qub3JnJyxcbiAgICBxcmNvZGU6IHRydWUsXG4gICAgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMLFxufSk7XG5cbi8vIGdldExpYnJhcnkgZnVuY3Rpb24gZm9yIFdlYjNQcm92aWRlclxuZXhwb3J0IGNvbnN0IGdldExpYnJhcnkgPSAocHJvdmlkZXI6IGFueSk6IFdlYjMgPT4ge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgcmV0dXJuIGxpYnJhcnk7XG59O1xuIiwiaW1wb3J0IHNhbXBsZSBmcm9tICdsb2Rhc2gvc2FtcGxlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLy8gRXJyb3IgY2hlY2sgXCIuZW52XCIgZmlsZSBmb3IgQlNDX1JQQ19VUkxcbmlmICghY29uZmlnLnJwY191cmwxIHx8ICFjb25maWcucnBjX3VybDIpIHtcbiAgICB0aHJvdyBFcnJvcignRVRIX1JQQ19VUkxzIGlzIHVuZGVmaW5lZCcpO1xufVxuXG4vLyBBcnJheSBvZiBhdmFpbGFibGUgbm9kZXMgdG8gY29ubmVjdCB0byBCaW5hbmNlIFNtYXJ0IENoYWluXG5leHBvcnQgY29uc3QgUlBDX05PREVTID0gW2NvbmZpZy5ycGNfdXJsMSwgY29uZmlnLnJwY191cmwyXTtcblxuY29uc3QgZ2V0UlBDTm9kZVVybCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIC8vIGdldCBVUkxcbiAgICBjb25zdCB1cmwgPSBzYW1wbGUoUlBDX05PREVTKTtcblxuICAgIC8vIHJldHVybiB1bmRlZmluZWQgaWYgZmFpbGVkIHRvIGV4dHJhY3QgdmFsaWQgVVJMXG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHZhbGlkIHN0cmluZyBVUkxcbiAgICByZXR1cm4gdXJsO1xufTtcblxuLy8gRXJyb3IgY2hlY2sgXCIuZW52XCIgZmlsZSBmb3IgQlNDX0NIQUlOX0lEXG5pZiAoY29uZmlnLmNoYWluSWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQlNDX0NIQUlOX0lEIGlzIHVuZGVmaW5lZCcpO1xufVxuXG5jb25zdCBjaGFpbklEID0gY29uZmlnLmNoYWluSWQ7XG5cbmNvbnN0IGdldENoYWluSUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGNoYWluSUQsIDEwKTtcbn07XG5cbmV4cG9ydCB7IGdldFJQQ05vZGVVcmwsIGdldENoYWluSUQgfTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==