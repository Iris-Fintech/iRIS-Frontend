"use strict";
(self["webpackChunkhugiris_nft"] = self["webpackChunkhugiris_nft"] || []).push([["src_components_Footer_Footer_tsx"],{

/***/ "./src/components/Footer/index.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/Footer/index.css");





const ETHBalance = () => {
    const { account, library } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
    const [ethbalance, setEthbalance] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())((web3__WEBPACK_IMPORTED_MODULE_3___default().givenProvider));
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
        if (!!account && !!library) {
            let stale = false;
            web3.eth
                .getBalance(account)
                .then((wei) => {
                var balance = web3.utils.fromWei(wei, 'ether');
                if (!stale) {
                    setEthbalance(balance);
                }
            })
                .catch(() => {
                if (!stale) {
                    setEthbalance('NaN');
                }
            });
            return () => {
                setEthbalance(undefined);
            };
        }
    }, [account, library]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { id: "title", children: ["ETH: ", ethbalance === null ? 'Error' : ethbalance ? `${ethbalance}` : ''] }, void 0) }, void 0));
};
const Footer = () => {
    const { account, library } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
    if (!account || !library) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ml-5 col-3", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { id: "title", children: "Welcome to HugiRIS" }, void 0) }, void 0) }, void 0) }, void 0) }, void 0));
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-3", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { id: "title", children: "Wallet Connected" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-3", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ETHBalance, {}, void 0) }, void 0)] }, void 0) }, void 0) }, void 0));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfRm9vdGVyX0Zvb3Rlcl90c3guMzJlYmI4ZmQ0NGZhYjFjNzYwM2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBRXNCO0FBQ3hCO0FBQ0g7QUFFckIsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsOERBQVksRUFBRSxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsMkNBQWMsRUFBVSxDQUFDO0lBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQywyREFBa0IsQ0FBQyxDQUFDO0lBRTFDLDRDQUFlLENBQUMsR0FBUSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVsQixJQUFJLENBQUMsR0FBRztpQkFDSCxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtZQUNMLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1IsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRVAsT0FBTyxHQUFHLEVBQUU7Z0JBQ1IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztTQUNMO0lBQ0wsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFdkIsT0FBTyxDQUNILDRIQUNJLCtEQUFHLEVBQUUsRUFBQyxPQUFPLHNCQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUssV0FDM0YsQ0FDTixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBeUNGLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNoQixNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLDhEQUFZLEVBQUUsQ0FBQztJQUM1QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3RCLE9BQU8sQ0FDSCw0SEFDSSxnRUFBSyxFQUFFLEVBQUMsUUFBUSxZQUNaLGdFQUFLLFNBQVMsRUFBQyxLQUFLLFlBQ2hCLGdFQUFLLFNBQVMsRUFBQyxZQUFZLFlBQ3ZCLDhEQUFHLEVBQUUsRUFBQyxPQUFPLDJDQUF1QixXQUNsQyxXQUNKLFdBQ0osV0FDUCxDQUNOLENBQUM7S0FDTDtTQUFNO1FBQ0gsT0FBTyxDQUNILDRIQUNJLGdFQUFLLEVBQUUsRUFBQyxRQUFRLFlBQ1osaUVBQUssU0FBUyxFQUFDLEtBQUssYUFDaEIsZ0VBQUssU0FBUyxFQUFDLE9BQU8sWUFDbEIsOERBQUcsRUFBRSxFQUFDLE9BQU8seUNBQXFCLFdBQ2hDLEVBSU4sZ0VBQUssU0FBUyxFQUFDLE9BQU8sWUFDbEIsdURBQUMsVUFBVSxhQUFHLFdBQ1osWUFDSixXQUNKLFdBQ1AsQ0FDTixDQUFDO0tBQ0w7QUFDTCxDQUFDLENBQUM7QUFFRiwrREFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5jc3M/OWNlZiIsIndlYnBhY2s6Ly9odWdpcmlzLW5mdC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBFVEhCYWxhbmNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgW2V0aGJhbGFuY2UsIHNldEV0aGJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xuICAgICAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xuICAgICAgICAgICAgbGV0IHN0YWxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHdlYjMuZXRoXG4gICAgICAgICAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcbiAgICAgICAgICAgICAgICAudGhlbigod2VpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhbGFuY2UgPSB3ZWIzLnV0aWxzLmZyb21XZWkod2VpLCAnZXRoZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoYmFsYW5jZShiYWxhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXRoYmFsYW5jZSgnTmFOJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFdGhiYWxhbmNlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2FjY291bnQsIGxpYnJhcnldKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cCBpZD1cInRpdGxlXCI+RVRIOiB7ZXRoYmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBldGhiYWxhbmNlID8gYCR7ZXRoYmFsYW5jZX1gIDogJyd9PC9wPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuLy8gY29uc3QgQlRDQmFsYW5jZSA9ICgpID0+IHtcbi8vICAgICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuLy8gICAgIGNvbnN0IFtidGNiYWxhbmNlLCBzZXRCdGNiYWxhbmNlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKTtcbi8vICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoJ2h0dHBzOi8vYnNjLWRhdGFzZWVkMS5iaW5hbmNlLm9yZzo0NDMnKTtcblxuLy8gICAgIGNvbnN0IEFkZHJlc3MgPSAnMHg1YUYwM0RiZEQ4MjczQTgxQjllNzEzQUY4MjFEMjVlODE5ZDMxODk0Jztcbi8vICAgICBjb25zdCBCaXRjb2luQUJJID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXF1aXJlKCcuL0JpdGNvaW5BQkkuanNvbicpKSk7XG4vLyAgICAgY29uc3QgQlRDY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQml0Y29pbkFCSSwgQWRkcmVzcyk7XG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xuLy8gICAgICAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xuLy8gICAgICAgICAgICAgbGV0IHN0YWxlID0gZmFsc2U7XG5cbi8vICAgICAgICAgICAgIEJUQ2NvbnRyYWN0Lm1ldGhvZHNcbi8vICAgICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXG4vLyAgICAgICAgICAgICAgICAgLmNhbGwoKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnRjYmFsYW5jZShiYWxhbmNlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnRjYmFsYW5jZShOYU4pO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgc2V0QnRjYmFsYW5jZSh1bmRlZmluZWQpO1xuLy8gICAgICAgICAgICAgfTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkLCBCVENjb250cmFjdC5tZXRob2RzXSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coYnRjYmFsYW5jZSk7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIj5CVEM6IHtidGNiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJ0Y2JhbGFuY2UgPyBgJHtidGNiYWxhbmNlfWAgOiAnJ308L3A+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgICk7XG4vLyB9O1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBpZiAoIWFjY291bnQgfHwgIWxpYnJhcnkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IGNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiPldlbGNvbWUgdG8gSHVnaVJJUzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRpdGxlXCI+V2FsbGV0IENvbm5lY3RlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QlRDQmFsYW5jZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFVEhCYWxhbmNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=