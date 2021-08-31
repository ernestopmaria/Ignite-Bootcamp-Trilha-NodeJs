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

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst compile = async function (data) {\r\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1__.join(process.cwd(), \"src\", \"templates\", \"certificate.hbs\");\r\n    const html = fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync(filePath, \"utf-8\");\r\n    return handlebars__WEBPACK_IMPORTED_MODULE_4__.compile(html)(data);\r\n};\r\nconst handle = async (event) => {\r\n    const { id, name, grade } = JSON.parse(event.body);\r\n    const response = await src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_2__.document.query({\r\n        TableName: \"users_certificates\",\r\n        KeyConditionExpression: \"id = :id\",\r\n        ExpressionAttributeValues: {\r\n            \":id\": id\r\n        }\r\n    }).promise();\r\n    const userAlreadyExists = response.Items[0];\r\n    if (!userAlreadyExists) {\r\n        await src_utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_2__.document.put({\r\n            TableName: \"users_certificates\",\r\n            Item: {\r\n                id,\r\n                name,\r\n                grade\r\n            }\r\n        }).promise();\r\n    }\r\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1__.join(process.cwd(), \"src\", \"templates\", \"selo.png\");\r\n    const medal = fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync(medalPath, \"base64\");\r\n    const data = {\r\n        date: dayjs__WEBPACK_IMPORTED_MODULE_5__().format('DD/MM/YYYY'),\r\n        grade,\r\n        name,\r\n        id,\r\n        medal\r\n    };\r\n    const content = await compile(data);\r\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__.puppeteer.launch({\r\n        headless: true,\r\n        args: chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__.args,\r\n        defaultViewport: chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__.defaultViewport,\r\n        executablePath: await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__.executablePath\r\n    });\r\n    const page = await browser.newPage();\r\n    await page.setContent(content);\r\n    const pdf = await page.pdf({\r\n        format: \"a4\",\r\n        landscape: true,\r\n        path: process.env.IS_OFFLINE ? \"certificate.pdf\" : null,\r\n        printBackground: true,\r\n        preferCSSPageSize: true\r\n    });\r\n    await browser.close();\r\n    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_6__.S3();\r\n    await s3.putObject({\r\n        Bucket: \"slscertificate\",\r\n        Key: `${id}.pdf`,\r\n        ACL: \"public-read\",\r\n        Body: pdf,\r\n        ContentType: \"application/pdf\"\r\n    }).promise();\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify({\r\n            message: \"Certificate created!\",\r\n            url: `https://slscertificate.s3.sa-east-1.amazonaws.com/${id}.pdf`\r\n        }),\r\n        headers: {\r\n            \"Content-type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcnRpZmljYXRpb25zYXBwLy4vc3JjL2Z1bmN0aW9ucy9nZW5lcmF0ZUNlcnRpZmljYXRlLnRzP2E1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBjaHJvbWl1bSBmcm9tIFwiY2hyb21lLWF3cy1sYW1iZGFcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSBcInNyYy91dGlscy9keW5hbW9kYkNsaWVudFwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5pbXBvcnQgKiBhcyBoYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCI7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7UzN9IGZyb20gJ2F3cy1zZGsnXG5cblxuXG5cbmludGVyZmFjZSBJQ3JlYXRlQ2VydGlmaWNhdGV7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ3JhZGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVRlbXBsYXRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdyYWRlOiBzdHJpbmc7XG4gICAgZGF0ZTpzdHJpbmc7XG4gICAgbWVkYWw6c3RyaW5nXG59XG5cbmNvbnN0IGNvbXBpbGUgPSBhc3luYyBmdW5jdGlvbiAoZGF0YTpJVGVtcGxhdGUpe1xuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksXCJzcmNcIiwgXCJ0ZW1wbGF0ZXNcIiwgXCJjZXJ0aWZpY2F0ZS5oYnNcIik7XG4gICAgY29uc3QgaHRtbCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKVxuXG4gICAgcmV0dXJuIGhhbmRsZWJhcnMuY29tcGlsZShodG1sKShkYXRhKVxufVxuXG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoZXZlbnQpID0+e1xuIGNvbnN0IHtpZCwgbmFtZSwgZ3JhZGV9ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KSBhcyBJQ3JlYXRlQ2VydGlmaWNhdGU7XG5cbiBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5KHtcbiAgICBUYWJsZU5hbWU6XCJ1c2Vyc19jZXJ0aWZpY2F0ZXNcIixcbiAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOlwiaWQgPSA6aWRcIixcbiAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOntcbiAgICAgICAgXCI6aWRcIjppZFxuICAgIH1cbiB9KS5wcm9taXNlKClcblxuIGNvbnN0IHVzZXJBbHJlYWR5RXhpc3RzID0gcmVzcG9uc2UuSXRlbXNbMF1cblxuIGlmKCF1c2VyQWxyZWFkeUV4aXN0cyl7XG4gICAgYXdhaXQgZG9jdW1lbnQucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOlwidXNlcnNfY2VydGlmaWNhdGVzXCIsXG4gICAgICAgIEl0ZW06e1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZ3JhZGVcbiAgICAgICAgfVxuICAgIH0pLnByb21pc2UoKTtcblxuIH1cblxuXG5cbiBjb25zdCBtZWRhbFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJzcmNcIiwgXCJ0ZW1wbGF0ZXNcIiwgXCJzZWxvLnBuZ1wiKVxuIGNvbnN0IG1lZGFsID0gZnMucmVhZEZpbGVTeW5jKG1lZGFsUGF0aCwgXCJiYXNlNjRcIilcblxuIGNvbnN0IGRhdGE6SVRlbXBsYXRlPXtcbiAgICAgZGF0ZTogZGF5anMoKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcbiAgICAgZ3JhZGUsXG4gICAgIG5hbWUsXG4gICAgIGlkLFxuICAgICBtZWRhbFxuIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBjb21waWxlKGRhdGEpXG5cbiAgICBjb25zdCBicm93c2VyID0gYXdhaXQgY2hyb21pdW0ucHVwcGV0ZWVyLmxhdW5jaCh7XG4gICAgICAgIGhlYWRsZXNzOiB0cnVlLFxuICAgICAgICBhcmdzOmNocm9taXVtLmFyZ3MsXG4gICAgICAgIGRlZmF1bHRWaWV3cG9ydDpjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXG4gICAgICAgIGV4ZWN1dGFibGVQYXRoOiBhd2FpdCBjaHJvbWl1bS5leGVjdXRhYmxlUGF0aFxuICAgIH0pXG5cbiAgICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKClcbiAgICBhd2FpdCBwYWdlLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBwZGYgPSBhd2FpdCBwYWdlLnBkZih7XG4gICAgICAgIGZvcm1hdDogXCJhNFwiLFxuICAgICAgICBsYW5kc2NhcGU6dHJ1ZSxcbiAgICAgICAgcGF0aDpwcm9jZXNzLmVudi5JU19PRkZMSU5FID8gXCJjZXJ0aWZpY2F0ZS5wZGZcIiA6IG51bGwsXG4gICAgICAgIHByaW50QmFja2dyb3VuZDp0cnVlLFxuICAgICAgICBwcmVmZXJDU1NQYWdlU2l6ZTp0cnVlXG4gICAgfSlcblxuICAgIGF3YWl0IGJyb3dzZXIuY2xvc2UoKVxuXG4gICAgY29uc3QgczMgPSBuZXcgUzMoKVxuXG4gICAgYXdhaXQgczMucHV0T2JqZWN0KHtcbiAgICAgICAgQnVja2V0Olwic2xzY2VydGlmaWNhdGVcIixcbiAgICAgICAgS2V5OmAke2lkfS5wZGZgLFxuICAgICAgICBBQ0w6XCJwdWJsaWMtcmVhZFwiLFxuICAgICAgICBCb2R5OnBkZixcbiAgICAgICAgQ29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgIH0pLnByb21pc2UoKVxuXG5cblxuIHJldHVybntcbiAgICAgc3RhdHVzQ29kZToyMDEsXG4gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblxuICAgICAgICAgbWVzc2FnZTpcIkNlcnRpZmljYXRlIGNyZWF0ZWQhXCIsXG4gICAgICAgICB1cmw6YGh0dHBzOi8vc2xzY2VydGlmaWNhdGUuczMuc2EtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHtpZH0ucGRmYFxuICAgICB9KSxcbiAgICAgaGVhZGVyczp7XG4gICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICB9XG4gfVxuXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

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

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;