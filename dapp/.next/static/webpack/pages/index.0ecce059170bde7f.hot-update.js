"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useDwitter.ts":
/*!*****************************!*\
  !*** ./hooks/useDwitter.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dwitter.json */ \"./hooks/Dwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar ContractABI = _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__.abi;\nvar ContractAddress = \"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0\";\nvar Ethereum =  true && window.ethereum;\nvar getDwitterContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(Ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nvar useDwitter = function() {\n    // const Dwitter = getDwitterContract();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), currentUser = ref1[0], setCurrentUser = ref1[1];\n    var connect = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (Ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert(\"Please install Metamask\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return Ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (!(accounts.length == 0)) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        console.log(\"No authorized accounts\");\n                        return _ctx.abrupt(\"return\");\n                    case 10:\n                        account = accounts[0];\n                        console.log(\"Connected to account: \", account);\n                        setCurrentAccount(account);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    15\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!Ethereum) {\n            console.log(\"No ethereum wallets found, please get metamask\");\n            return;\n        }\n        connect();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (currentAccount) {\n            getUser();\n        }\n    }, [\n        currentAccount\n    ]);\n    var getUser = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, user, avatar, bio, name, username, wallet;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.getUser(currentAccount);\n                    case 3:\n                        user = _ctx.sent;\n                        avatar = user.avatar, bio = user.bio, name = user.name, username = user.username, wallet = user.wallet;\n                        setCurrentUser({\n                            avatar: avatar,\n                            bio: bio,\n                            name: name,\n                            username: username,\n                            wallet: wallet\n                        });\n                        return _ctx.abrupt(\"return\", user);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createUser = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, name, bio, avatar) {\n            var contract, user;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.signup(username, name, bio, avatar);\n                    case 3:\n                        user = _ctx.sent;\n                        console.log(user);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createUser(username, name, bio, avatar) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connect: connect,\n        account: currentAccount,\n        user: currentUser,\n        createUser: createUser\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFQyxNQUFNLEdBQUlMLElBQUksQ0FBZEssTUFBTSxDQUFTO3dCQUNuRGxCLGNBQWMsQ0FBQzs0QkFBQ2MsTUFBTSxFQUFOQSxNQUFNOzRCQUFFQyxHQUFHLEVBQUhBLEdBQUc7NEJBQUVDLElBQUksRUFBSkEsSUFBSTs0QkFBRUMsUUFBUSxFQUFSQSxRQUFROzRCQUFFQyxNQUFNLEVBQU5BLE1BQU07eUJBQUMsQ0FBQyxDQUFDO3FEQUMvQ0wsSUFBSTs7Ozs7O1NBQ2Q7d0JBTktGLE9BQU87OztPQU1aO0lBRUQsSUFBTVEsVUFBVTttQkFBRyx3TEFBT0YsUUFBZ0IsRUFBRUQsSUFBWSxFQUFFRCxHQUFXLEVBQUVELE1BQWMsRUFBSztnQkFDaEZGLFFBQVEsRUFDUkMsSUFBSTs7Ozt3QkFESkQsUUFBUSxHQUFHdkIsa0JBQWtCLEVBQUUsQ0FBQzs7K0JBQ2xCdUIsUUFBUSxDQUFDUSxNQUFNLENBQUNILFFBQVEsRUFBRUQsSUFBSSxFQUFFRCxHQUFHLEVBQUVELE1BQU0sQ0FBQzs7d0JBQTFERCxJQUFJLFlBQXNEO3dCQUNoRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDckI7d0JBSktNLFVBQVUsQ0FBVUYsUUFBZ0IsRUFBRUQsSUFBWSxFQUFFRCxHQUFXLEVBQUVELE1BQWM7OztPQUlwRjtJQUVELE9BQU87UUFBRWIsT0FBTyxFQUFQQSxPQUFPO1FBQUVFLE9BQU8sRUFBRU4sY0FBYztRQUFFZ0IsSUFBSSxFQUFFZCxXQUFXO1FBQUVvQixVQUFVLEVBQVZBLFVBQVU7S0FBRSxDQUFDO0NBQzlFO0FBRUQsK0RBQWV2QixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRHdpdHRlci50cz9iNjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEd2l0dGVyIGZyb20gJy4vRHdpdHRlci5qc29uJztcbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29udHJhY3RBQkkgPSBEd2l0dGVyLmFiaTtcbmNvbnN0IENvbnRyYWN0QWRkcmVzcyA9ICcweDlmRTQ2NzM2Njc5ZDJEOWE2NUYwOTkyRjIyNzJkRTlmM2M3ZmE2ZTAnO1xuY29uc3QgRXRoZXJldW0gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuZXRoZXJldW07XG5cbmNvbnN0IGdldER3aXR0ZXJDb250cmFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoRXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoQ29udHJhY3RBZGRyZXNzLCBDb250cmFjdEFCSSwgc2lnbmVyKTtcbn07XG5cbnR5cGUgVXNlciA9IHtcbiAgICBhdmF0YXIgOiBzdHJpbmc7XG4gICAgYmlvIDogc3RyaW5nO1xuICAgIG5hbWUgOiBzdHJpbmc7XG4gICAgdXNlcm5hbWUgOiBzdHJpbmc7XG4gICAgd2FsbGV0IDogc3RyaW5nOyBcbn1cblxuY29uc3QgdXNlRHdpdHRlciA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBEd2l0dGVyID0gZ2V0RHdpdHRlckNvbnRyYWN0KCk7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsID4obnVsbCk7IFxuXG4gICAgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghRXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IEV0aGVyZXVtLnJlcXVlc3QgKHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50cycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGFjY291bnQ6ICcsIGFjY291bnQpO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBpZighRXRoZXJldW0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGV0aGVyZXVtIHdhbGxldHMgZm91bmQsIHBsZWFzZSBnZXQgbWV0YW1hc2snKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0KCk7XG4gICAgfSwgW10pOyBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50QWNjb3VudCkge1xuICAgICAgICAgICAgZ2V0VXNlcigpOyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LCBbY3VycmVudEFjY291bnRdKTtcblxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RHdpdHRlckNvbnRyYWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjb250cmFjdC5nZXRVc2VyKGN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgY29uc3Qge2F2YXRhciwgYmlvLCBuYW1lLCB1c2VybmFtZSwgd2FsbGV0fSA9IHVzZXI7IFxuICAgICAgICBzZXRDdXJyZW50VXNlcih7YXZhdGFyLCBiaW8sIG5hbWUsIHVzZXJuYW1lLCB3YWxsZXR9KTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBiaW86IHN0cmluZywgYXZhdGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0ICBjb250cmFjdC5zaWdudXAodXNlcm5hbWUsIG5hbWUsIGJpbywgYXZhdGFyKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGNvbm5lY3QsIGFjY291bnQ6IGN1cnJlbnRBY2NvdW50LCB1c2VyOiBjdXJyZW50VXNlciwgY3JlYXRlVXNlciB9OyBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUR3aXR0ZXI7Il0sIm5hbWVzIjpbIkR3aXR0ZXIiLCJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRyYWN0QUJJIiwiYWJpIiwiQ29udHJhY3RBZGRyZXNzIiwiRXRoZXJldW0iLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldER3aXR0ZXJDb250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJ1c2VEd2l0dGVyIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJjb25uZWN0IiwiYWNjb3VudHMiLCJhY2NvdW50IiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0VXNlciIsImNvbnRyYWN0IiwidXNlciIsImF2YXRhciIsImJpbyIsIm5hbWUiLCJ1c2VybmFtZSIsIndhbGxldCIsImNyZWF0ZVVzZXIiLCJzaWdudXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useDwitter.ts\n");

/***/ })

});