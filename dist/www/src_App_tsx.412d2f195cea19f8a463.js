(self["webpackChunkhugiris_nft"] = self["webpackChunkhugiris_nft"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_baseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/baseConnection */ "./src/utils/baseConnection.tsx");


const Main = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_components_Main_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Main */ "./src/components/Main/index.tsx")));
const WalletModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_components_WalletModal_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/WalletModal */ "./src/components/WalletModal/index.tsx")));
const Routes = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_route_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./route */ "./src/route.tsx")));
const Header = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("src_components_Header_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Header */ "./src/components/Header/index.tsx")));
const Footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_Footer_Footer_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Footer/Footer */ "./src/components/Footer/Footer.tsx")));

const App = () => {
    (0,_utils_baseConnection__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Header, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Routes, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletModal, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Footer, {}, void 0)] }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


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

/***/ "./src/hooks/useAuth.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useAuth.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var _utils_connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/connectors */ "./src/utils/connectors.tsx");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/hook */ "./src/redux/hook.tsx");
/* harmony import */ var _redux_triedEager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/triedEager */ "./src/redux/triedEager.tsx");
/* harmony import */ var _walletTokenNetwork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walletTokenNetwork */ "./src/hooks/walletTokenNetwork.tsx");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");








const useAuth = () => {
    const dispatch = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    const { active, connector, activate, deactivate } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    if (active) {
        if (connector == _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.injected) {
            localStorage.setItem('_iris_fintech_', 'Injected');
        }
        else if (connector == _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.walletconnect) {
            localStorage.setItem('_iris_fintech_', 'WalletConnect');
        }
    }
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        dispatch((0,_redux_triedEager__WEBPACK_IMPORTED_MODULE_6__.setState)(false));
        deactivate();
        if (localStorage.getItem('_iris_fintech_') == 'WalletConnect') {
            _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.walletconnect.handleDisconnect();
        }
        localStorage.removeItem('_iris_fintech_');
        localStorage.removeItem('walletconnect');
    }, [deactivate, dispatch]);
    const login = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((connectorId) => {
        var currentConnector;
        if (connectorId == 'Injected') {
            currentConnector = _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.injected;
        }
        else if (connectorId == 'WalletConnect') {
            currentConnector = _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.walletconnect;
        }
        else {
            const connectorType = localStorage.getItem('_iris_fintech_');
            if (connectorType == 'Injected') {
                currentConnector = _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.injected;
            }
            else if (connectorType == 'WalletConnect') {
                currentConnector = _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.walletconnect;
            }
        }
        if (currentConnector) {
            activate(currentConnector, async (error) => {
                if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.UnsupportedChainIdError) {
                    if (currentConnector == _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.injected) {
                        const hasSetup = await (0,_walletTokenNetwork__WEBPACK_IMPORTED_MODULE_7__.setupNetwork)();
                        if (hasSetup) {
                            activate(currentConnector, undefined, true).catch(() => {
                                dispatch((0,_redux_triedEager__WEBPACK_IMPORTED_MODULE_6__.setState)(true));
                            });
                        }
                        else {
                            logout();
                        }
                    }
                    else if (currentConnector == _utils_connectors__WEBPACK_IMPORTED_MODULE_4__.walletconnect) {
                        currentConnector.handleDisconnect();
                        logout();
                    }
                }
                else {
                    if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.NoEthereumProviderError) {
                        console.log('Provider Error', 'No provider was found');
                    }
                    else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.UserRejectedRequestError) {
                        console.log('Authorization Error', 'Please authorize to access your account');
                    }
                    else if (error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError) {
                        currentConnector.handleDisconnect();
                        console.log('Authorization Error', 'Please authorize to access your account');
                    }
                    else {
                        console.log(error.name, error.message);
                    }
                    logout();
                }
            }).catch(() => {
                dispatch((0,_redux_triedEager__WEBPACK_IMPORTED_MODULE_6__.setState)(true));
                logout();
            });
        }
        else {
            console.log("Can't find connector", 'The connector config is wrong');
            logout();
        }
    }, [activate, dispatch, logout]);
    return { login, logout };
};
/* harmony default export */ __webpack_exports__["default"] = (useAuth);


/***/ }),

/***/ "./src/hooks/useEagerConnect.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useEagerConnect.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/hook */ "./src/redux/hook.tsx");
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAuth */ "./src/hooks/useAuth.tsx");




const useEagerConnect = () => {
    const { activate } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const dispatch = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    const { login } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const connecetedWallet = localStorage.getItem('_iris_fintech_');
        if (connecetedWallet) {
            login('useEagerConnect');
        }
    }, [activate, dispatch, login]);
};
/* harmony default export */ __webpack_exports__["default"] = (useEagerConnect);


/***/ }),

/***/ "./src/hooks/useInactiveListener.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useInactiveListener.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAuth */ "./src/hooks/useAuth.tsx");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



const useInactiveListener = (suppress = false) => {
    const { connector, active, error } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const connectedWallet = localStorage.getItem('_iris_fintech_') ?? '';
    const { login } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (connector && connector.on && !active && !error && !suppress) {
            const handleConnect = () => {
                console.log("Handling 'connect' event");
                login('useInactiveListener');
            };
            const handleChainChanged = (chainId) => {
                console.log("Handling 'chainChanged' event with payload", chainId);
                window.location.reload();
                login('useInactiveListener');
            };
            const handleAccountsChanged = (accounts) => {
                console.log("Handling 'accountsChanged' event with payload", accounts);
                if (accounts.length > 0) {
                    login('useInactiveListener');
                }
            };
            const handleNetworkChanged = (networkId) => {
                console.log("Handling 'networkChanged' event with payload", networkId);
                login('useInactiveListener');
            };
            connector.on('connect', handleConnect);
            connector.on('chainChanged', handleChainChanged);
            connector.on('accountsChanged', handleAccountsChanged);
            connector.on('networkChanged', handleNetworkChanged);
            return () => {
                if (connector.removeListener) {
                    connector.removeListener('connect', handleConnect);
                    connector.removeListener('chainChanged', handleChainChanged);
                    connector.removeListener('accountsChanged', handleAccountsChanged);
                    connector.removeListener('networkChanged', handleNetworkChanged);
                }
            };
        }
    }, [active, error, suppress, connector, login, connectedWallet]);
};
/* harmony default export */ __webpack_exports__["default"] = (useInactiveListener);


/***/ }),

/***/ "./src/hooks/walletTokenNetwork.tsx":
/*!******************************************!*\
  !*** ./src/hooks/walletTokenNetwork.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupNetwork": function() { return /* binding */ setupNetwork; },
/* harmony export */   "registerToken": function() { return /* binding */ registerToken; }
/* harmony export */ });
/* harmony import */ var _utils_getRPC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getRPC */ "./src/utils/getRPC.tsx");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");

const setupNetwork = async () => {
    const provider = window.ethereum;
    if (provider) {
        const chainId = (0,_utils_getRPC__WEBPACK_IMPORTED_MODULE_0__.getChainID)();
        try {
            try {
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${chainId.toString(16)}` }],
                });
                return true;
            }
            catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: `0x${chainId.toString(16)}`,
                                    chainName: 'Ethereum Mainnet',
                                    nativeCurrency: {
                                        name: 'ETH',
                                        symbol: 'eth',
                                        decimals: 18,
                                    },
                                    rpcUrls: [(0,_utils_getRPC__WEBPACK_IMPORTED_MODULE_0__.getRPCNodeUrl)()],
                                    blockExplorerUrls: ['https://etherscan.io'],
                                },
                            ],
                        });
                        return true;
                    }
                    catch (addError) {
                        console.error('add', addError);
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        catch (error) {
            console.error('setup', error);
            return false;
        }
    }
    else {
        console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
        return false;
    }
};
const registerToken = async (tokenAddress, tokenSymbol, tokenDecimals, tokenImage) => {
    const provider = window.ethereum;
    const tokenAdded = await provider.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
        },
    });
    return tokenAdded;
};


/***/ }),

/***/ "./src/redux/hook.tsx":
/*!****************************!*\
  !*** ./src/redux/hook.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": function() { return /* binding */ useAppDispatch; },
/* harmony export */   "useAppSelector": function() { return /* binding */ useAppSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


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

/***/ "./src/utils/baseConnection.tsx":
/*!**************************************!*\
  !*** ./src/utils/baseConnection.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useEagerConnect */ "./src/hooks/useEagerConnect.tsx");
/* harmony import */ var _hooks_useInactiveListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useInactiveListener */ "./src/hooks/useInactiveListener.tsx");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/hook */ "./src/redux/hook.tsx");



const BaseConnector = () => {
    const triedEager = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state) => state.triedEager.tried);
    (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_hooks_useInactiveListener__WEBPACK_IMPORTED_MODULE_1__["default"])(!triedEager);
};
/* harmony default export */ __webpack_exports__["default"] = (BaseConnector);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHLG9EQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFHOUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ25CLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO0lBR0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFHRixJQUFJLHVEQUFjLEtBQUssU0FBUyxFQUFFO0lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztDQUNoRDtBQUVELE1BQU0sT0FBTyxHQUFHLHVEQUFjLENBQUM7QUFFL0IsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFbUM7Ozs7Ozs7Ozs7O0FDbkNyQzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbmZpZy50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvaG9va3MvdXNlQXV0aC50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvaG9va3MvdXNlRWFnZXJDb25uZWN0LnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9ob29rcy91c2VJbmFjdGl2ZUxpc3RlbmVyLnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9ob29rcy93YWxsZXRUb2tlbk5ldHdvcmsudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3JlZHV4L2hvb2sudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3JlZHV4L3RyaWVkRWFnZXIudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL3V0aWxzL2Jhc2VDb25uZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy91dGlscy9jb25uZWN0b3JzLnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy91dGlscy9nZXRSUEMudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL0BldGhlcmV1bWpzL2NvbW1vbi9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9AZXRoZXJldW1qcy90eC9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jyb3JhbmR8Y3J5cHRvIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktcnNhL25vZGVfbW9kdWxlcy9ibi5qcy9saWJ8YnVmZmVyIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktc2lnbi9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5LXNpZ24vbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtc3x1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktc2lnbi9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYnx1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2RvdGVudi9saWJ8ZnMiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvaGFzaC1iYXNlL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9oYXNoLWJhc2Uvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWJ8dXRpbCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9rZWNjYWsvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtc3x1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL2tlY2Nhay9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYnx1dGlsIiwid2VicGFjazovL2h1Z2lyaXMtbmZ0L2lnbm9yZWR8L1VzZXJzL2FsYmVydGxpbi9EZXNrdG9wL0lyaXMtRnJvbnRlbmQvbm9kZV9tb2R1bGVzL3JscC9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy9zdHJlYW0taHR0cC9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvaWdub3JlZHwvVXNlcnMvYWxiZXJ0bGluL0Rlc2t0b3AvSXJpcy1Gcm9udGVuZC9ub2RlX21vZHVsZXMvc3RyZWFtLWh0dHAvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWJ8dXRpbCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy93ZWIzLWV0aC1hY2NvdW50cy9ub2RlX21vZHVsZXMvYm4uanMvbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC9pZ25vcmVkfC9Vc2Vycy9hbGJlcnRsaW4vRGVza3RvcC9JcmlzLUZyb250ZW5kL25vZGVfbW9kdWxlcy93ZWIzLXV0aWxzL25vZGVfbW9kdWxlcy9ldGhlcmV1bWpzLXV0aWwvbm9kZV9tb2R1bGVzL2JuLmpzL2xpYnxidWZmZXIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenkgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1haW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL01haW4nKSk7XG5jb25zdCBXYWxsZXRNb2RhbCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvV2FsbGV0TW9kYWwnKSk7XG5jb25zdCBSb3V0ZXMgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9yb3V0ZScpKTtcbmNvbnN0IEhlYWRlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvSGVhZGVyJykpO1xuY29uc3QgRm9vdGVyID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJykpO1xuXG4vLyBjb25zdCBBY2NvdW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9BY2NvdW50JykpO1xuXG5pbXBvcnQgQmFzZUNvbm5lY3RvciBmcm9tICcuL3V0aWxzL2Jhc2VDb25uZWN0aW9uJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIEJhc2VDb25uZWN0b3IoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8Um91dGVzIC8+XG4gICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgPFdhbGxldE1vZGFsIC8+XG4gICAgICAgICAgICB7LyogPEFjY291bnQgLz4gKi99XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzEgfHwgIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWlzc2luZyBSUEMgdXJsISEnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIGJhY2tlbmQgdXJsISEnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICAgIGNoYWluSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9DSEFJTl9JRCB8fCAnMScsXG4gICAgcnBjX3VybDE6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzEgfHwgJycsXG4gICAgcnBjX3VybDI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FVEhfTUFJTk5FVF9SUENfVVJMXzIgfHwgJycsXG5cbiAgICBiYWNrZW5kX3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIHx8ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLy8gaW1wb3J0IG5lY2Vzc2FyeSBsaWJyYXJ5XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJztcbmltcG9ydCB7XG4gICAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXG4gICAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkLFxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InO1xuXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJztcblxuLy8gaW1wb3J0IGxvY2FsIGNvbXBvbmVudHNcbmltcG9ydCB7IGluamVjdGVkLCB3YWxsZXRjb25uZWN0IH0gZnJvbSAnLi4vdXRpbHMvY29ubmVjdG9ycyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3JlZHV4L2hvb2snO1xuaW1wb3J0IHsgc2V0U3RhdGUgfSBmcm9tICcuLi9yZWR1eC90cmllZEVhZ2VyJztcbmltcG9ydCB7IHNldHVwTmV0d29yayB9IGZyb20gJy4vd2FsbGV0VG9rZW5OZXR3b3JrJztcblxuY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBhY3RpdmUsIGNvbm5lY3RvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBpZiAoY29ubmVjdG9yID09IGluamVjdGVkKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX2lyaXNfZmludGVjaF8nLCAnSW5qZWN0ZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25uZWN0b3IgPT0gd2FsbGV0Y29ubmVjdCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19pcmlzX2ZpbnRlY2hfJywgJ1dhbGxldENvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U3RhdGUoZmFsc2UpKTtcbiAgICAgICAgZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX2lyaXNfZmludGVjaF8nKSA9PSAnV2FsbGV0Q29ubmVjdCcpIHtcbiAgICAgICAgICAgICh3YWxsZXRjb25uZWN0IGFzIGFueSkuaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19pcmlzX2ZpbnRlY2hfJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd3YWxsZXRjb25uZWN0Jyk7XG4gICAgfSwgW2RlYWN0aXZhdGUsIGRpc3BhdGNoXSk7XG5cbiAgICBjb25zdCBsb2dpbiA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoY29ubmVjdG9ySWQpID0+IHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50Q29ubmVjdG9yOiBhbnk7XG4gICAgICAgICAgICBpZiAoY29ubmVjdG9ySWQgPT0gJ0luamVjdGVkJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0b3IgPSBpbmplY3RlZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29ubmVjdG9ySWQgPT0gJ1dhbGxldENvbm5lY3QnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbm5lY3RvciA9IHdhbGxldGNvbm5lY3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvclR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX2lyaXNfZmludGVjaF8nKTtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdG9yVHlwZSA9PSAnSW5qZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0b3IgPSBpbmplY3RlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbm5lY3RvclR5cGUgPT0gJ1dhbGxldENvbm5lY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0b3IgPSB3YWxsZXRjb25uZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25uZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjdXJyZW50Q29ubmVjdG9yLCBhc3luYyAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbm5lY3RvciA9PSBpbmplY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc1NldHVwID0gYXdhaXQgc2V0dXBOZXR3b3JrKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU2V0dXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGUoY3VycmVudENvbm5lY3RvciwgdW5kZWZpbmVkLCB0cnVlKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0ZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbm5lY3RvciA9PSB3YWxsZXRjb25uZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbm5lY3Rvci5oYW5kbGVEaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyIEVycm9yJywgJ05vIHByb3ZpZGVyIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6YXRpb24gRXJyb3InLCAnUGxlYXNlIGF1dGhvcml6ZSB0byBhY2Nlc3MgeW91ciBhY2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0b3IuaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRob3JpemF0aW9uIEVycm9yJywgJ1BsZWFzZSBhdXRob3JpemUgdG8gYWNjZXNzIHlvdXIgYWNjb3VudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5uYW1lLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0ZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGZpbmQgY29ubmVjdG9yXCIsICdUaGUgY29ubmVjdG9yIGNvbmZpZyBpcyB3cm9uZycpO1xuICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYWN0aXZhdGUsIGRpc3BhdGNoLCBsb2dvdXRdLFxuICAgICk7XG5cbiAgICByZXR1cm4geyBsb2dpbiwgbG9nb3V0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3JlZHV4L2hvb2snO1xuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi91c2VBdXRoJztcblxuY29uc3QgdXNlRWFnZXJDb25uZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25uZWNldGVkV2FsbGV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19pcmlzX2ZpbnRlY2hfJyk7XG5cbiAgICAgICAgaWYgKGNvbm5lY2V0ZWRXYWxsZXQpIHtcbiAgICAgICAgICAgIGxvZ2luKCd1c2VFYWdlckNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgIH0sIFthY3RpdmF0ZSwgZGlzcGF0Y2gsIGxvZ2luXSk7IC8vIGludGVudGlvbmFsbHkgb25seSBydW5uaW5nIG9uIG1vdW50IChtYWtlIHN1cmUgaXQncyBvbmx5IG1vdW50ZWQgb25jZSA6KSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUVhZ2VyQ29ubmVjdDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi91c2VBdXRoJztcblxuY29uc3QgdXNlSW5hY3RpdmVMaXN0ZW5lciA9IChzdXBwcmVzczogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBjb25uZWN0b3IsIGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IGNvbm5lY3RlZFdhbGxldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfaXJpc19maW50ZWNoXycpID8/ICcnO1xuICAgIGNvbnN0IHsgbG9naW4gfSA9IHVzZUF1dGgoKTtcblxuICAgIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICAgICAgaWYgKGNvbm5lY3RvciAmJiBjb25uZWN0b3Iub24gJiYgIWFjdGl2ZSAmJiAhZXJyb3IgJiYgIXN1cHByZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2Nvbm5lY3QnIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIGxvZ2luKCd1c2VJbmFjdGl2ZUxpc3RlbmVyJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKGNoYWluSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2NoYWluQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIGNoYWluSWQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBsb2dpbigndXNlSW5hY3RpdmVMaXN0ZW5lcicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50czogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdhY2NvdW50c0NoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBhY2NvdW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW4oJ3VzZUluYWN0aXZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV0d29ya0NoYW5nZWQgPSAobmV0d29ya0lkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICduZXR3b3JrQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIG5ldHdvcmtJZCk7XG4gICAgICAgICAgICAgICAgbG9naW4oJ3VzZUluYWN0aXZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbm5lY3Rvci5vbignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpO1xuICAgICAgICAgICAgY29ubmVjdG9yLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpO1xuICAgICAgICAgICAgY29ubmVjdG9yLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpO1xuICAgICAgICAgICAgY29ubmVjdG9yLm9uKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKTtcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdG9yLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5yZW1vdmVMaXN0ZW5lcignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0b3IucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdG9yLnJlbW92ZUxpc3RlbmVyKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2FjdGl2ZSwgZXJyb3IsIHN1cHByZXNzLCBjb25uZWN0b3IsIGxvZ2luLCBjb25uZWN0ZWRXYWxsZXRdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluYWN0aXZlTGlzdGVuZXI7XG4iLCJpbXBvcnQgeyBnZXRDaGFpbklELCBnZXRSUENOb2RlVXJsIH0gZnJvbSAnLi4vdXRpbHMvZ2V0UlBDJztcblxuZXhwb3J0IGNvbnN0IHNldHVwTmV0d29yayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bTtcblxuICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICBjb25zdCBjaGFpbklkID0gZ2V0Q2hhaW5JRCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6IGAweCR7Y2hhaW5JZC50b1N0cmluZygxNil9YCB9XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXG4gICAgICAgICAgICAgICAgaWYgKChzd2l0Y2hFcnJvciBhcyBhbnkpLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogYDB4JHtjaGFpbklkLnRvU3RyaW5nKDE2KX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnRXRoZXJldW0gTWFpbm5ldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ2V0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFtnZXRSUENOb2RlVXJsKCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly9ldGhlcnNjYW4uaW8nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdhZGQnLCBhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignc2V0dXAnLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3Qgc2V0dXAgdGhlIEJTQyBuZXR3b3JrIG9uIG1ldGFtYXNrIGJlY2F1c2Ugd2luZG93LmV0aGVyZXVtIGlzIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclRva2VuID0gYXN5bmMgKFxuICAgIHRva2VuQWRkcmVzczogc3RyaW5nLFxuICAgIHRva2VuU3ltYm9sOiBzdHJpbmcsXG4gICAgdG9rZW5EZWNpbWFsczogbnVtYmVyLFxuICAgIHRva2VuSW1hZ2U6IHN0cmluZyxcbikgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gd2luZG93LmV0aGVyZXVtO1xuXG4gICAgY29uc3QgdG9rZW5BZGRlZCA9IGF3YWl0IChwcm92aWRlciBhcyBhbnkpLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICd3YWxsZXRfd2F0Y2hBc3NldCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogJ0VSQzIwJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0b2tlbkFkZHJlc3MsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiB0b2tlblN5bWJvbCxcbiAgICAgICAgICAgICAgICBkZWNpbWFsczogdG9rZW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICBpbWFnZTogdG9rZW5JbWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9rZW5BZGRlZDtcbn07XG4iLCJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHR5cGUgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSAnLi9zdG9yZSc7XG5cbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCBjb25zdCB0cmllZEVhZ2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3RyaWVkRWFnZXInLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB0cmllZDogZmFsc2UsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRTdGF0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnRyaWVkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldFN0YXRlIH0gPSB0cmllZEVhZ2VyU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdHJpZWRFYWdlclNsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgdXNlRWFnZXJDb25uZWN0IGZyb20gJy4uL2hvb2tzL3VzZUVhZ2VyQ29ubmVjdCc7XG5pbXBvcnQgdXNlSW5hY3RpdmVMaXN0ZW5lciBmcm9tICcuLi9ob29rcy91c2VJbmFjdGl2ZUxpc3RlbmVyJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvaG9vayc7XG5cbmNvbnN0IEJhc2VDb25uZWN0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJpZWRFYWdlci50cmllZCk7XG5cbiAgICAvLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxuICAgIHVzZUVhZ2VyQ29ubmVjdCgpO1xuXG4gICAgLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcbiAgICB1c2VJbmFjdGl2ZUxpc3RlbmVyKCF0cmllZEVhZ2VyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb25uZWN0b3I7XG4iLCIvLyBMaWJyYXJ5IEltcG9ydFxuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG4vLyBJbXBvcnQgVFNYIEZpbGVcbmltcG9ydCB7IGdldFJQQ05vZGVVcmwsIGdldENoYWluSUQgfSBmcm9tICcuL2dldFJQQyc7XG5cbi8vIERlZmluZSBDb25zdGFudHNcbi8vIGNvbnN0IFBPTExJTkdfSU5URVJWQUw6IG51bWJlciA9IDEyMDAwO1xuY29uc3QgUlBDX1VSTDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0UlBDTm9kZVVybCgpO1xuY29uc3QgQ0hBSU5fSUQ6IG51bWJlciA9IGdldENoYWluSUQoKTtcblxuLy8gVHlwZSBDaGVjazogUlBDX1VSTCBzaG91bGQgYmUgdmFsaWQgc3RyaW5nXG5pZiAoUlBDX1VSTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVUkwgVHlwZSBFcnJvcjogc2hvdWxkIGJlIHN0cmluZycpO1xufVxuXG4vLyBUeXBlIENoZWNrOiBDSEFJTl9JRCBzaG91bGQgYmUgdmFsaWQgTnVtYmVyXG5pZiAoQ0hBSU5fSUQgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBOdW1uZXJpYyBFcnJvcjogc2hvdWxkIGJlIGEgdmFsaWQgbnVtYmVyJyk7XG59XG5cbi8vIENvbm5lY3QgdG8gSW5qZWN0IENvbm5lY3RvclxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcbiAgICBzdXBwb3J0ZWRDaGFpbklkczogW0NIQUlOX0lEXSxcbn0pO1xuXG4vL0B0cy1pZ25vcmVcbmluamVjdGVkLmhhbmRsZUNoYWluQ2hhbmdlZCA9IChuZXdDaGFpbklEOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICBpZiAobmV3Q2hhaW5JRCAhPSBDSEFJTl9JRCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX2lyaXNfZmludGVjaF8nKTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaW5qZWN0ZWQuZW1pdERlYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9AdHMtaWdub3JlXG4gICAgaW5qZWN0ZWQuZW1pdFVwZGF0ZSh7IGNoYWluSWQ6IG5ld0NoYWluSUQsIHByb3ZpZGVyOiB3aW5kb3cuQmluYW5jZUNoYWluIH0pO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuLy8gQ29ubmVjdCB0byBXYWxsZXRjb25uZWN0IENvbm5lY3RvclxuY29uc3QgUE9MTElOR19JTlRFUlZBTCA9IDEyMDAwO1xuXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgICBycGM6IHsgMTogUlBDX1VSTCB9LFxuICAgIGJyaWRnZTogJ2h0dHBzOi8vYnJpZGdlLndhbGxldGNvbm5lY3Qub3JnJyxcbiAgICBxcmNvZGU6IHRydWUsXG4gICAgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMLFxufSk7XG5cbi8vIGdldExpYnJhcnkgZnVuY3Rpb24gZm9yIFdlYjNQcm92aWRlclxuZXhwb3J0IGNvbnN0IGdldExpYnJhcnkgPSAocHJvdmlkZXI6IGFueSk6IFdlYjMgPT4ge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgcmV0dXJuIGxpYnJhcnk7XG59O1xuIiwiaW1wb3J0IHNhbXBsZSBmcm9tICdsb2Rhc2gvc2FtcGxlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuLy8gRXJyb3IgY2hlY2sgXCIuZW52XCIgZmlsZSBmb3IgQlNDX1JQQ19VUkxcbmlmICghY29uZmlnLnJwY191cmwxIHx8ICFjb25maWcucnBjX3VybDIpIHtcbiAgICB0aHJvdyBFcnJvcignRVRIX1JQQ19VUkxzIGlzIHVuZGVmaW5lZCcpO1xufVxuXG4vLyBBcnJheSBvZiBhdmFpbGFibGUgbm9kZXMgdG8gY29ubmVjdCB0byBCaW5hbmNlIFNtYXJ0IENoYWluXG5leHBvcnQgY29uc3QgUlBDX05PREVTID0gW2NvbmZpZy5ycGNfdXJsMSwgY29uZmlnLnJwY191cmwyXTtcblxuY29uc3QgZ2V0UlBDTm9kZVVybCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIC8vIGdldCBVUkxcbiAgICBjb25zdCB1cmwgPSBzYW1wbGUoUlBDX05PREVTKTtcblxuICAgIC8vIHJldHVybiB1bmRlZmluZWQgaWYgZmFpbGVkIHRvIGV4dHJhY3QgdmFsaWQgVVJMXG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHZhbGlkIHN0cmluZyBVUkxcbiAgICByZXR1cm4gdXJsO1xufTtcblxuLy8gRXJyb3IgY2hlY2sgXCIuZW52XCIgZmlsZSBmb3IgQlNDX0NIQUlOX0lEXG5pZiAoY29uZmlnLmNoYWluSWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQlNDX0NIQUlOX0lEIGlzIHVuZGVmaW5lZCcpO1xufVxuXG5jb25zdCBjaGFpbklEID0gY29uZmlnLmNoYWluSWQ7XG5cbmNvbnN0IGdldENoYWluSUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGNoYWluSUQsIDEwKTtcbn07XG5cbmV4cG9ydCB7IGdldFJQQ05vZGVVcmwsIGdldENoYWluSUQgfTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==