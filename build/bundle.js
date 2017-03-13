/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "197e0932be9d6c97595955860dbfab86.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ })
/******/ ]);