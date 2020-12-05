/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n\r\n\r\nObject(_js_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#timer-1', new Date('Jul 17, 2021'));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/format.js":
/*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction pad(value) {\r\n  return String(value).padStart(2, '0');\r\n}\r\n\r\nfunction getTimerComponents(time) {\r\n  const hours = pad(\r\n    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),\r\n  );\r\n  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));\r\n\r\n  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));\r\n\r\n  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));\r\n\r\n  return { days, hours, mins, secs };\r\n}\r\n\r\nfunction formartDate(time) {\r\n  return getTimerComponents(time);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (formartDate);\r\n\n\n//# sourceURL=webpack:///./src/js/format.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _js_pluginTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pluginTimer */ \"./src/js/pluginTimer.js\");\n\r\n\r\nfunction init(selector, targetDate) {\r\n  const timer = new _js_pluginTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ selector, targetDate });\r\n  timer.start();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/pluginTimer.js":
/*!*******************************!*\
  !*** ./src/js/pluginTimer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CountdownTimer; });\n/* harmony import */ var _js_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/format */ \"./src/js/format.js\");\n\r\n\r\nclass CountdownTimer {\r\n  constructor({ selector, targetDate }) {\r\n    this.targetDate = targetDate;\r\n\r\n    this.refs = {\r\n      $days: document.querySelector(`${selector} [data-value=\"days\"]`),\r\n      $hours: document.querySelector(`${selector} [data-value=\"hours\"]`),\r\n      $mins: document.querySelector(`${selector} [data-value=\"mins\"]`),\r\n      $secs: document.querySelector(`${selector} [data-value=\"secs\"]`),\r\n    };\r\n  }\r\n\r\n  start() {\r\n    setInterval(() => {\r\n      const curretnTime = Date.now();\r\n      const deltaTime = this.targetDate - curretnTime;\r\n      const time = Object(_js_format__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deltaTime);\r\n      this.updateTimerface(time);\r\n    }, 1000);\r\n  }\r\n\r\n  updateTimerface({ days, hours, mins, secs }) {\r\n    const { $days, $hours, $mins, $secs } = this.refs;\r\n    $days.innerHTML = days;\r\n    $hours.innerHTML = hours;\r\n    $mins.innerHTML = mins;\r\n    $secs.innerHTML = secs;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/pluginTimer.js?");

/***/ })

/******/ });