/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/createTodo.ts":
/*!*************************************!*\
  !*** ./src/functions/createTodo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuidv4 */ \"uuidv4\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\n\r\nconst handle = async (event) => {\r\n    const { user_id, title, deadline } = JSON.parse(event.body);\r\n    const response = await src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_1__.document.put({\r\n        TableName: \"users_todo\",\r\n        Item: {\r\n            id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_0__.uuid)(),\r\n            user_id,\r\n            title,\r\n            done: false,\r\n            deadline\r\n        }\r\n    }).promise();\r\n    const todo = response;\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify({\r\n            message: \"Todo Created! \",\r\n            Todo: todo\r\n        }),\r\n        headers: {\r\n            \"Content-type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRvZG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVUb2RvLnRzPzkyMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1dWlkfSBmcm9tICd1dWlkdjQnXG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCJzcmMvdXRpbHMvZHluYW1vZGJDbGllbnRcIlxuXG5pbnRlcmZhY2UgSUNyZWF0ZVRvZG97XG4gICAgdXNlcl9pZDpzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkb25lOmJvb2xlYW5cbiAgICBkZWFkbGluZTogRGF0ZVxuXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyhldmVudCk9PntcblxuICAgIGNvbnN0IHt1c2VyX2lkICwgdGl0bGUsICBkZWFkbGluZX0gPUpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSUNyZWF0ZVRvZG9cblxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZG9jdW1lbnQucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOlwidXNlcnNfdG9kb1wiLFxuICAgICAgICBJdGVtOntcbiAgICAgICAgaWQ6dXVpZCgpLFxuICAgICAgICB1c2VyX2lkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGRlYWRsaW5lXG4gICAgICAgIH1cbiAgICB9KS5wcm9taXNlKClcblxuICAgIGNvbnN0IHRvZG8gPSByZXNwb25zZVxuXG4gICAgcmV0dXJue1xuICAgICAgICBzdGF0dXNDb2RlOjIwMSxcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlOlwiVG9kbyBDcmVhdGVkISBcIixcbiAgICAgICAgICAgIFRvZG86dG9kb1xuICAgICAgICAgICAgXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIiBcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/createTodo.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline()\r\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\r\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtb0RCfSBmcm9tICdhd3Mtc2RrJ1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9e1xyXG5yZWdpb246XCJsb2NhbGhvc3RcIixcclxuZW5kcG9pbnQ6XCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIlxyXG59XHJcblxyXG5jb25zdCBpc09mZmxpbmUgPSgpID0+e1xyXG5yZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpIFxyXG4/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKSBcclxuOiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "uuidv4":
/*!*************************!*\
  !*** external "uuidv4" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/createTodo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;