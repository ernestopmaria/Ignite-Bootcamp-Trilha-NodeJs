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

/***/ "./src/functions/verifyCertificate.ts":
/*!********************************************!*\
  !*** ./src/functions/verifyCertificate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\r\nconst handle = async (event) => {\r\n    const { id } = event.pathParameters;\r\n    const response = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\r\n        TableName: \"users_certificates\",\r\n        KeyConditionExpression: \"id = :id\",\r\n        ExpressionAttributeValues: {\r\n            \":id\": id\r\n        }\r\n    }).promise();\r\n    const userCertificate = response.Items[0];\r\n    if (userCertificate) {\r\n        return {\r\n            statusCode: 200,\r\n            body: JSON.stringify({\r\n                message: \"certificado Válido!\",\r\n                name: userCertificate.name,\r\n                url: `https://slscertificate.s3.sa-east-1.amazonaws.com/${id}.pdf`\r\n            }),\r\n        };\r\n    }\r\n    return {\r\n        statusCode: 400,\r\n        body: JSON.stringify({\r\n            message: \"certificado inválido!\",\r\n        })\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3ZlcmlmeUNlcnRpZmljYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXJ0aWZpY2F0aW9uc2FwcC8uL3NyYy9mdW5jdGlvbnMvdmVyaWZ5Q2VydGlmaWNhdGUudHM/NmMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvZHluYW1vZGJDbGllbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlIDpBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMoZXZlbnQpPT57XHJcbiAgICBjb25zdCB7aWR9ID0gZXZlbnQucGF0aFBhcmFtZXRlcnM7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2N1bWVudC5xdWVyeSh7XHJcbiAgICAgICAgVGFibGVOYW1lOlwidXNlcnNfY2VydGlmaWNhdGVzXCIsXHJcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjpcImlkID0gOmlkXCIsXHJcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczp7XHJcbiAgICAgICAgICAgIFwiOmlkXCI6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfSkucHJvbWlzZSgpXHJcblxyXG4gY29uc3QgdXNlckNlcnRpZmljYXRlID0gcmVzcG9uc2UuSXRlbXNbMF07XHJcblxyXG4gaWYodXNlckNlcnRpZmljYXRlKXtcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgICBzdGF0dXNDb2RlOjIwMCxcclxuICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICBtZXNzYWdlOlwiY2VydGlmaWNhZG8gVsOhbGlkbyFcIixcclxuICAgICAgICAgICAgIG5hbWU6IHVzZXJDZXJ0aWZpY2F0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgdXJsOmBodHRwczovL3Nsc2NlcnRpZmljYXRlLnMzLnNhLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7aWR9LnBkZmBcclxuICAgICAgICAgfSksXHJcbiAgICAgfVxyXG4gfVxyXG4gcmV0dXJue1xyXG4gICAgIHN0YXR1c0NvZGU6NDAwLFxyXG4gICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG1lc3NhZ2U6XCJjZXJ0aWZpY2FkbyBpbnbDoWxpZG8hXCIsXHJcblxyXG4gICAgfSlcclxuIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/verifyCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline() ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options) : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VydGlmaWNhdGlvbnNhcHAvLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtb0RCfSBmcm9tICdhd3Mtc2RrJ1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlZ2lvbjpcImxvY2FsaG9zdFwiLFxyXG4gICAgZW5kcG9pbnQgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiXHJcbn1cclxuXHJcbmNvbnN0IGlzT2ZmbGluZSA9KCk9PntcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKT8gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbnMpIDogbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/verifyCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;