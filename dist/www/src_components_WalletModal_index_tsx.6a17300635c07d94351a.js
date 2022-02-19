"use strict";
(self["webpackChunkhugiris_nft"] = self["webpackChunkhugiris_nft"] || []).push([["src_components_WalletModal_index_tsx"],{

/***/ "./src/components/WalletModal/index.css":
/*!**********************************************!*\
  !*** ./src/components/WalletModal/index.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/WalletModal/icon.tsx":
/*!*********************************************!*\
  !*** ./src/components/WalletModal/icon.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const Icon = (icon) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: icon, style: { width: '40%' } }, void 0) }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./src/components/WalletModal/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/WalletModal/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/hook */ "./src/redux/hook.tsx");
/* harmony import */ var _redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modalShowSlice */ "./src/redux/modalShowSlice.tsx");
/* harmony import */ var _walletCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walletCard */ "./src/components/WalletModal/walletCard.tsx");
/* harmony import */ var _metaInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaInfo */ "./src/components/WalletModal/metaInfo.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/components/WalletModal/index.css");










const WalletModal = () => {
    const show = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state) => state.modalShow.show);
    const dispatch = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], { show: show, onHide: () => dispatch((0,_redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_2__.changeState)()), centered: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Header, { closeButton: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Title, { children: "Connect your wallet" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "justify-content-md-center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onClick: () => dispatch((0,_redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_2__.changeState)()), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_walletCard__WEBPACK_IMPORTED_MODULE_3__["default"], { walletMetaInfo: _metaInfo__WEBPACK_IMPORTED_MODULE_4__["default"][0] }, void 0) }, _metaInfo__WEBPACK_IMPORTED_MODULE_4__["default"][0].title) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onClick: () => dispatch((0,_redux_modalShowSlice__WEBPACK_IMPORTED_MODULE_2__.changeState)()), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_walletCard__WEBPACK_IMPORTED_MODULE_3__["default"], { walletMetaInfo: _metaInfo__WEBPACK_IMPORTED_MODULE_4__["default"][1] }, void 0) }, _metaInfo__WEBPACK_IMPORTED_MODULE_4__["default"][1].title) }, void 0)] }, void 0) }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, { className: "justify-content-md-center" }, void 0)] }, void 0) }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (WalletModal);


/***/ }),

/***/ "./src/components/WalletModal/metaInfo.tsx":
/*!*************************************************!*\
  !*** ./src/components/WalletModal/metaInfo.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/components/WalletModal/icon.tsx");
/* harmony import */ var _assets_connectors_metamask_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/connectors/metamask-icon.svg */ "./src/assets/connectors/metamask-icon.svg");
/* harmony import */ var _assets_connectors_walletconnect_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/connectors/walletconnect-icon.svg */ "./src/assets/connectors/walletconnect-icon.svg");



const config = [
    {
        title: 'Metamask',
        icon: (0,_icon__WEBPACK_IMPORTED_MODULE_0__["default"])(_assets_connectors_metamask_icon_svg__WEBPACK_IMPORTED_MODULE_1__),
        connectorId: 'Injected',
    },
    {
        title: 'WalletConnect',
        icon: (0,_icon__WEBPACK_IMPORTED_MODULE_0__["default"])(_assets_connectors_walletconnect_icon_svg__WEBPACK_IMPORTED_MODULE_2__),
        connectorId: 'WalletConnect',
    },
];
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/components/WalletModal/walletCard.tsx":
/*!***************************************************!*\
  !*** ./src/components/WalletModal/walletCard.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/WalletModal/index.css");





const WalletCard = ({ walletMetaInfo, disabled }) => {
    const { title, icon, connectorId } = walletMetaInfo;
    const { login } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-2", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-grid gap-2", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: disabled, onClick: () => {
                    login(connectorId);
                }, variant: "custom", children: [' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "justify-content-center", children: icon }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "justify-content-center", children: title }, void 0)] }, void 0) }, void 0) }, void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (WalletCard);


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

/***/ "./src/assets/connectors/metamask-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/connectors/metamask-icon.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4e89c6cff901fa51fdf.svg";

/***/ }),

/***/ "./src/assets/connectors/walletconnect-icon.svg":
/*!******************************************************!*\
  !*** ./src/assets/connectors/walletconnect-icon.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96434e49744b580d3d81.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfV2FsbGV0TW9kYWxfaW5kZXhfdHN4LjZhMTczMDA2MzVjMDdkOTQzNTFhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNFQSxNQUFNLElBQUksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQzFCLE9BQU8sQ0FDSCw0SEFDSSxnRUFBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBSSxXQUM1QyxDQUNOLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRiwrREFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHNCO0FBQ1E7QUFDWjtBQUNBO0FBRTRCO0FBQ1Q7QUFFbkI7QUFDTjtBQUNYO0FBRXJCLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtJQUNyQixNQUFNLElBQUksR0FBRywyREFBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELE1BQU0sUUFBUSxHQUFHLDJEQUFjLEVBQUUsQ0FBQztJQUVsQyxPQUFPLENBQ0gsNEhBQ0ksd0RBQUMsNkRBQUssSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0VBQVcsRUFBRSxDQUFDLEVBQUUsUUFBUSxtQkFDOUQsdURBQUMsb0VBQVksSUFBQyxXQUFXLGtCQUNyQix1REFBQyxtRUFBVyw4Q0FBa0MsV0FDbkMsRUFFZix1REFBQyxrRUFBVSxjQUNQLHVEQUFDLGlFQUFTLElBQUMsU0FBUyxFQUFDLDJCQUEyQixZQUM1Qyx3REFBQywyREFBRyxlQUNBLHVEQUFDLDJEQUFHLGNBQ0EsZ0VBQTJCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0VBQVcsRUFBRSxDQUFDLFlBQzdELHVEQUFDLG1EQUFVLElBQUMsY0FBYyxFQUFFLG9EQUFTLFdBQUksSUFEbkMsMERBQWUsQ0FFbkIsV0FDSixFQUNOLHVEQUFDLDJEQUFHLGNBQ0EsZ0VBQTJCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0VBQVcsRUFBRSxDQUFDLFlBQzdELHVEQUFDLG1EQUFVLElBQUMsY0FBYyxFQUFFLG9EQUFTLFdBQUksSUFEbkMsMERBQWUsQ0FFbkIsV0FDSixZQUNKLFdBQ0UsV0FDSCxFQUNiLHVEQUFDLG9FQUFZLElBQUMsU0FBUyxFQUFDLDJCQUEyQixXQUFnQixZQUMvRCxXQUNULENBQ04sQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLCtEQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNEO0FBQ3VDO0FBQ1U7QUFRM0UsTUFBTSxNQUFNLEdBQWE7SUFDckI7UUFDSSxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsaURBQUksQ0FBQyxpRUFBUSxDQUFDO1FBQ3BCLFdBQVcsRUFBRSxVQUFVO0tBQzFCO0lBQ0Q7UUFDSSxLQUFLLEVBQUUsZUFBZTtRQUN0QixJQUFJLEVBQUUsaURBQUksQ0FBQyxzRUFBYSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO0tBQy9CO0NBQ0osQ0FBQztBQUVGLCtEQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJzQjtBQUNOO0FBRUk7QUFDckI7QUFFckIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQU8sRUFBRSxFQUFFO0lBQ3JELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLGNBQWMsQ0FBQztJQUNwRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsMERBQU8sRUFBRSxDQUFDO0lBRTVCLE9BQU8sQ0FDSCxnRUFBSyxTQUFTLEVBQUMsVUFBVSxZQUNyQixnRUFBSyxTQUFTLEVBQUMsY0FBYyxZQUN6Qix3REFBQyw4REFBTSxJQUNILFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQ0QsT0FBTyxFQUFDLFFBQVEsYUFFZixHQUFHLEVBQ0osdURBQUMsMkRBQUcsSUFBQyxTQUFTLEVBQUMsd0JBQXdCLFlBQUUsSUFBSSxXQUFPLEVBQ3BELHVEQUFDLDJEQUFHLElBQUMsU0FBUyxFQUFDLHdCQUF3QixZQUFFLEtBQUssV0FBTyxZQUNoRCxXQUNQLFdBQ0osQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsK0RBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCcUI7QUFFeEMsTUFBTSxjQUFjLEdBQUcsNkRBQVcsQ0FBQztJQUN0QyxJQUFJLEVBQUUsV0FBVztJQUNqQixZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsS0FBSztLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUM7QUFHSSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUV0RCwrREFBZSxjQUFjLENBQUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvY29tcG9uZW50cy9XYWxsZXRNb2RhbC9pbmRleC5jc3M/ZjVmNCIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL1dhbGxldE1vZGFsL2ljb24udHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbXBvbmVudHMvV2FsbGV0TW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbXBvbmVudHMvV2FsbGV0TW9kYWwvbWV0YUluZm8udHN4Iiwid2VicGFjazovL2h1Z2lyaXMtbmZ0Ly4vc3JjL2NvbXBvbmVudHMvV2FsbGV0TW9kYWwvd2FsbGV0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vaHVnaXJpcy1uZnQvLi9zcmMvcmVkdXgvbW9kYWxTaG93U2xpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb24gPSAoaWNvbjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBzdHlsZT17eyB3aWR0aDogJzQwJScgfX0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5cbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3JlZHV4L2hvb2snO1xuaW1wb3J0IHsgY2hhbmdlU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1eC9tb2RhbFNob3dTbGljZSc7XG5cbmltcG9ydCBXYWxsZXRDYXJkIGZyb20gJy4vd2FsbGV0Q2FyZCc7XG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vbWV0YUluZm8nO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IFdhbGxldE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNob3cgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGFsU2hvdy5zaG93KTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17KCkgPT4gZGlzcGF0Y2goY2hhbmdlU3RhdGUoKSl9IGNlbnRlcmVkPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Db25uZWN0IHlvdXIgd2FsbGV0PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e0NvbmZpZ1swXS50aXRsZX0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2hhbmdlU3RhdGUoKSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhbGxldENhcmQgd2FsbGV0TWV0YUluZm89e0NvbmZpZ1swXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e0NvbmZpZ1sxXS50aXRsZX0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2hhbmdlU3RhdGUoKSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhbGxldENhcmQgd2FsbGV0TWV0YUluZm89e0NvbmZpZ1sxXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPjwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldE1vZGFsO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBNZXRhbWFzayBmcm9tICcuLi8uLi9hc3NldHMvY29ubmVjdG9ycy9tZXRhbWFzay1pY29uLnN2Zyc7XG5pbXBvcnQgV2FsbGV0Q29ubmVjdCBmcm9tICcuLi8uLi9hc3NldHMvY29ubmVjdG9ycy93YWxsZXRjb25uZWN0LWljb24uc3ZnJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaWNvbjogUmVhY3QuUmVhY3ROb2RlO1xuICAgIGNvbm5lY3RvcklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnW10gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ01ldGFtYXNrJyxcbiAgICAgICAgaWNvbjogSWNvbihNZXRhbWFzayksXG4gICAgICAgIGNvbm5lY3RvcklkOiAnSW5qZWN0ZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1dhbGxldENvbm5lY3QnLFxuICAgICAgICBpY29uOiBJY29uKFdhbGxldENvbm5lY3QpLFxuICAgICAgICBjb25uZWN0b3JJZDogJ1dhbGxldENvbm5lY3QnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5cbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IFdhbGxldENhcmQgPSAoeyB3YWxsZXRNZXRhSW5mbywgZGlzYWJsZWQgfTogYW55KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgY29ubmVjdG9ySWQgfSA9IHdhbGxldE1ldGFJbmZvO1xuICAgIGNvbnN0IHsgbG9naW4gfSA9IHVzZUF1dGgoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGNvbm5lY3RvcklkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj57aWNvbn08L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+e3RpdGxlfTwvUm93PlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDYXJkO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IG1vZGFsU2hvd1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdtb2RhbFNob3cnLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGNoYW5nZVN0YXRlOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNob3cgPSBzdGF0ZS5zaG93ID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VTdGF0ZSB9ID0gbW9kYWxTaG93U2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxTaG93U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==