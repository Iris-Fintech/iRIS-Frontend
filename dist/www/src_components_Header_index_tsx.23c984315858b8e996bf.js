"use strict";
(self["webpackChunkhugiris_nft"] = self["webpackChunkhugiris_nft"] || []).push([["src_components_Header_index_tsx"],{

/***/ "./src/components/ConnectButton/index.css":
/*!************************************************!*\
  !*** ./src/components/ConnectButton/index.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ConnectButton/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ConnectButton/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var _utils_getEthErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getEthErrorMessage */ "./src/utils/getEthErrorMessage.tsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.tsx");
/* harmony import */ var _Wallet_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Wallet/address */ "./src/components/Wallet/address.tsx");
/* harmony import */ var _redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/modalShowSlice */ "./src/redux/modalShowSlice.tsx");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/hook */ "./src/redux/hook.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./src/components/ConnectButton/index.css");










const ConnectButton = () => {
    const { active, error } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const { logout } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const dispatch = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
    const addressAbbrev = (0,_Wallet_address__WEBPACK_IMPORTED_MODULE_4__.WalletAddressAbbrev)();
    const address = (0,_Wallet_address__WEBPACK_IMPORTED_MODULE_4__.WalletAddress)();
    const etherscanURL = 'https://etherscan.io/address/' + address;
    const openseaURL = 'https://opensea.io/' + address;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                    display: 'grid',
                    gridGap: '2vw',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20vw',
                    margin: 'auto',
                }, children: [active && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], { align: "end", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Toggle, { variant: "flat", id: "dropdown-basic", children: addressAbbrev }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Menu, { variant: "dark", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, { href: etherscanURL, target: "_blank", children: "Wallet" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, { href: openseaURL, target: "_blank", children: "Transactions" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Divider, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, { onClick: logout, children: "Disconnect" }, void 0)] }, void 0)] }, void 0)), !active && !error && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], { variant: "flat", onClick: () => {
                            dispatch((0,_redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_5__.changeState)());
                        }, children: "Connect Wallet" }, void 0))] }, void 0), !!error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { style: { marginTop: '1rem', marginBottom: '0' }, children: (0,_utils_getEthErrorMessage__WEBPACK_IMPORTED_MODULE_2__.getErrorMessage)(error) }, void 0)] }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (ConnectButton);


/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConnectButton */ "./src/components/ConnectButton/index.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/Header/index.css");
/* harmony import */ var _assets_iris_banner_light_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/iris_banner_light.svg */ "./src/assets/iris_banner_light.svg");







const Header = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "Nav", sticky: "top", expand: "lg", variant: "dark", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "mx-3 my-1", fluid: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Brand, { href: "/", style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _assets_iris_banner_light_svg__WEBPACK_IMPORTED_MODULE_3__, width: "90", height: "36", alt: "iRIS Fintech" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, { "aria-controls": "responsive-navbar-nav" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Collapse, { id: "responsive-navbar-nav", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "me-auto", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, { style: { color: 'rgb(230, 230, 250)' }, href: "#home", children: "FEATURE" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, { style: { color: 'rgb(230, 230, 250)' }, href: "#story", children: "STORY" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, { style: { color: 'rgb(230, 230, 250)' }, href: "#roadmap", children: "ROADMAP" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, { style: { color: 'rgb(230, 230, 250)' }, href: "#team", children: "TEAM" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { style: { marginLeft: '1%' }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, { style: { color: 'rgb(230, 230, 250)' }, href: "#contact", children: "CONTACT" }, void 0) }, void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectButton__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0) }, void 0) }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./src/components/Wallet/address.tsx":
/*!*******************************************!*\
  !*** ./src/components/Wallet/address.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletAddress": function() { return /* binding */ WalletAddress; },
/* harmony export */   "WalletAddressAbbrev": function() { return /* binding */ WalletAddressAbbrev; }
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");

const WalletAddressAbbrev = () => {
    const { account } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    return account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '';
};
const WalletAddress = () => {
    const { account } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    return account;
};



/***/ }),

/***/ "./src/redux/modalShowSlice.tsx":
/*!**************************************!*\
  !*** ./src/redux/modalShowSlice.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/utils/getEthErrorMessage.tsx":
/*!******************************************!*\
  !*** ./src/utils/getEthErrorMessage.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getErrorMessage": function() { return /* binding */ getErrorMessage; }
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


const getErrorMessage = (error) => {
    if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.NoEthereumProviderError) {
        return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
    }
    if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.UnsupportedChainIdError) {
        return 'You are connected to an unsupported network.';
    }
    if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.UserRejectedRequestError) {
        return 'Please authorize this website to access your Ethereum account.';
    }
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
};



/***/ }),

/***/ "./src/assets/iris_banner_light.svg":
/*!******************************************!*\
  !*** ./src/assets/iris_banner_light.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b423f6ce8b33a586104f.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfSGVhZGVyX2luZGV4X3RzeC4yM2M5ODQzMTU4NThiOGU5OTZiZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NnRDtBQUVKO0FBQ0k7QUFFaUI7QUFDdkI7QUFDNkI7QUFDZDtBQUNQO0FBQzdCO0FBRXJCLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUN2QixNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLDhEQUFZLEVBQUUsQ0FBQztJQUV6QyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsMERBQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sUUFBUSxHQUFHLDJEQUFjLEVBQUUsQ0FBQztJQUVsQyxNQUFNLGFBQWEsR0FBRyxvRUFBbUIsRUFBRSxDQUFDO0lBRTVDLE1BQU0sT0FBTyxHQUFHLDhEQUFhLEVBQUUsQ0FBQztJQUNoQyxNQUFNLFlBQVksR0FBRywrQkFBK0IsR0FBRyxPQUFPLENBQUM7SUFDL0QsTUFBTSxVQUFVLEdBQUcscUJBQXFCLEdBQUcsT0FBTyxDQUFDO0lBRW5ELE9BQU8sQ0FDSCw4SEFDSSxpRUFDSSxLQUFLLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsbUJBQW1CLEVBQUUsYUFBYTtvQkFDbEMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2lCQUNqQixhQUVBLE1BQU0sSUFBSSxDQUNQLHdEQUFDLGdFQUFRLElBQUMsS0FBSyxFQUFDLEtBQUssYUFDakIsdURBQUMsdUVBQWUsSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsWUFDOUMsYUFBYSxXQUNBLEVBRWxCLHdEQUFDLHFFQUFhLElBQUMsT0FBTyxFQUFDLE1BQU0sYUFDekIsdURBQUMscUVBQWEsSUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxR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Q21CO0FBRTNELE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDckMsSUFBSSxLQUFLLFlBQVksbUZBQXVCLEVBQUU7UUFDMUMsT0FBTyw2R0FBNkcsQ0FBQztLQUN4SDtJQUNELElBQUksS0FBSyxZQUFZLHFFQUF1QixFQUFFO1FBQzFDLE9BQU8sOENBQThDLENBQUM7S0FDekQ7SUFDRCxJQUFJLEtBQUssWUFBWSxvRkFBZ0MsRUFBRTtRQUNuRCxPQUFPLGdFQUFnRSxDQUFDO0tBQzNFO0lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixPQUFPLGdFQUFnRSxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQUV5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbXBvbmVudHMvQ29ubmVjdEJ1dHRvbi9pbmRleC5jc3M/MzYyOSIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5jc3M/ZjY1NiIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL0Nvbm5lY3RCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL1dhbGxldC9hZGRyZXNzLnRzeCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9yZWR1eC9tb2RhbFNob3dTbGljZS50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvdXRpbHMvZ2V0RXRoRXJyb3JNZXNzYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcblxuaW1wb3J0IHsgZ2V0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0RXRoRXJyb3JNZXNzYWdlJztcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnO1xuaW1wb3J0IHsgV2FsbGV0QWRkcmVzcywgV2FsbGV0QWRkcmVzc0FiYnJldiB9IGZyb20gJy4uL1dhbGxldC9hZGRyZXNzJztcbmltcG9ydCB7IGNoYW5nZVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvbW9kYWxTaG93U2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9yZWR1eC9ob29rJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBDb25uZWN0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICBjb25zdCB7IGxvZ291dCB9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGFkZHJlc3NBYmJyZXYgPSBXYWxsZXRBZGRyZXNzQWJicmV2KCk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gV2FsbGV0QWRkcmVzcygpO1xuICAgIGNvbnN0IGV0aGVyc2NhblVSTCA9ICdodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLycgKyBhZGRyZXNzO1xuICAgIGNvbnN0IG9wZW5zZWFVUkwgPSAnaHR0cHM6Ly9vcGVuc2VhLmlvLycgKyBhZGRyZXNzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6ICcydncnLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYWxpZ249XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cImZsYXRcIiBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZHJlc3NBYmJyZXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgdmFyaWFudD1cImRhcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPXtldGhlcnNjYW5VUkx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj17b3BlbnNlYVVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e2xvZ291dH0+RGlzY29ubmVjdDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshYWN0aXZlICYmICFlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyEhZXJyb3IgJiYgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcwJyB9fT57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2g0Pn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IENvbm5lY3RCdXR0b24gZnJvbSAnLi4vQ29ubmVjdEJ1dHRvbic7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBpcmlzX2Jhbm5lciBmcm9tICcuLi8uLi9hc3NldHMvaXJpc19iYW5uZXJfbGlnaHQuc3ZnJztcblxuLy8gZXhwYW5kPVwibGdcIiB2YXJpYW50PVwiZGFya1wiIHN0aWNreT1cInRvcFwiXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgaWQ9XCJOYXZcIiBzdGlja3k9XCJ0b3BcIiBleHBhbmQ9XCJsZ1wiIHZhcmlhbnQ9XCJkYXJrXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJteC0zIG15LTFcIiBmbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXJpc19iYW5uZXJ9IHdpZHRoPVwiOTBcIiBoZWlnaHQ9XCIzNlwiIGFsdD1cImlSSVMgRmludGVjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBjb2xvcjogJ3JnYigyMzAsIDIzMCwgMjUwKScgfX0gaHJlZj1cIiNob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRUFUVVJFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzElJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGNvbG9yOiAncmdiKDIzMCwgMjMwLCAyNTApJyB9fSBocmVmPVwiI3N0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVE9SWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBjb2xvcjogJ3JnYigyMzAsIDIzMCwgMjUwKScgfX0gaHJlZj1cIiNyb2FkbWFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBST0FETUFQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzElJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGNvbG9yOiAncmdiKDIzMCwgMjMwLCAyNTApJyB9fSBocmVmPVwiI3RlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRFQU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMjMwLCAyMzAsIDI1MCknIH19IGhyZWY9XCIjY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEFDVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuXG5jb25zdCBXYWxsZXRBZGRyZXNzQWJicmV2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICByZXR1cm4gYWNjb3VudCA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gIDogJyc7XG59O1xuXG5jb25zdCBXYWxsZXRBZGRyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICByZXR1cm4gYWNjb3VudDtcbn07XG5cbmV4cG9ydCB7IFdhbGxldEFkZHJlc3MsIFdhbGxldEFkZHJlc3NBYmJyZXYgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFNob3dTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnbW9kYWxTaG93JyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBjaGFuZ2VTdGF0ZTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zaG93ID0gc3RhdGUuc2hvdyA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgY2hhbmdlU3RhdGUgfSA9IG1vZGFsU2hvd1NsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsU2hvd1NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQge1xuICAgIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxuICAgIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCxcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJztcbmltcG9ydCB7IFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5cbmNvbnN0IGdldEVycm9yTWVzc2FnZSA9IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xuICAgICAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJztcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICdZb3UgYXJlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLic7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkKSB7XG4gICAgICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nO1xufTtcblxuZXhwb3J0IHsgZ2V0RXJyb3JNZXNzYWdlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=