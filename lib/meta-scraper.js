(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("meta-scraper", [], factory);
	else if(typeof exports === 'object')
		exports["meta-scraper"] = factory();
	else
		root["meta-scraper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _metadataRules = _interopRequireDefault(__webpack_require__(/*! ./metadata-rules.js */ "./src/metadata-rules.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function extractMetaData(ruleSet, doc) {
  var maxPriority = 0,
      maxValue = "";
  ruleSet.rules.forEach(function (rule, i) {
    var _rule = _slicedToArray(rule, 2),
        query = _rule[0],
        handler = _rule[1];

    var element = doc.querySelector(query);
    if (!element) return;
    var priority = ruleSet.rules.length - i;

    if (priority > maxPriority) {
      maxPriority = priority;
      maxValue = handler(element);
    }
  });
  return maxValue;
}

function GetMetadata(doc) {
  var metadata = {};
  var ruleSets = _metadataRules.default;
  Object.keys(ruleSets).map(function (key) {
    var ruleSet = ruleSets[key];
    metadata[key] = extractMetaData(ruleSet, doc);
    console.log(metadata);
  });
  return metadata;
}

var _default = GetMetadata;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/metadata-rules.js":
/*!*******************************!*\
  !*** ./src/metadata-rules.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MetadataRules = {
  description: {
    rules: [['meta[property="og:description"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[name="description" i]', function (element) {
      return element.getAttribute("content");
    }]]
  },
  image: {
    rules: [['meta[property="og:image:secure_url"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[property="og:image:url"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[property="og:image"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[name="twitter:image"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[property="twitter:image"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[name="thumbnail"]', function (element) {
      return element.getAttribute("content");
    }]]
  },
  keywords: {
    rules: [['meta[name="keywords" i]', function (element) {
      return element.getAttribute("content");
    }]]
  },
  title: {
    rules: [['meta[property="og:title"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[name="twitter:title"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[property="twitter:title"]', function (element) {
      return element.getAttribute("content");
    }], ['meta[name="hdl"]', function (element) {
      return element.getAttribute("content");
    }], ["title", function (element) {
      return element.text;
    }]]
  }
};
var _default = MetadataRules;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhLXNjcmFwZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21ldGEtc2NyYXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRhLXNjcmFwZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWV0YS1zY3JhcGVyLy4vc3JjL21ldGFkYXRhLXJ1bGVzLmpzIl0sIm5hbWVzIjpbImV4dHJhY3RNZXRhRGF0YSIsInJ1bGVTZXQiLCJkb2MiLCJtYXhQcmlvcml0eSIsIm1heFZhbHVlIiwicnVsZXMiLCJmb3JFYWNoIiwicnVsZSIsImkiLCJxdWVyeSIsImhhbmRsZXIiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInByaW9yaXR5IiwibGVuZ3RoIiwiR2V0TWV0YWRhdGEiLCJtZXRhZGF0YSIsInJ1bGVTZXRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJNZXRhZGF0YVJ1bGVzIiwiZGVzY3JpcHRpb24iLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsImtleXdvcmRzIiwidGl0bGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QixTQUFyQixDQUFKO0FBQUEsS0FGVCxDQWRLLEVBa0JMLENBQUMsd0JBQUQsRUFBMkIsVUFBQWYsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ2UsWUFBUixDQUFxQixTQUFyQixDQUFKO0FBQUEsS0FBbEMsQ0FsQks7QUFERixHQVZhO0FBZ0NwQkUsVUFBUSxFQUFFO0FBQ1J2QixTQUFLLEVBQUUsQ0FDTCxDQUFDLHlCQUFELEVBQTRCLFVBQUFNLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNlLFlBQVIsQ0FBcUIsU0FBckIsQ0FBSjtBQUFBLEtBQW5DLENBREs7QUFEQyxHQWhDVTtBQXFDcEJHLE9BQUssRUFBRTtBQUNMeEIsU0FBSyxFQUFFLENBQ0wsQ0FBQywyQkFBRCxFQUE4QixVQUFBTSxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDZSxZQUFSLENBQXFCLFNBQXJCLENBQUo7QUFBQSxLQUFyQyxDQURLLEVBRUwsQ0FDRSw0QkFERixFQUVFLFVBQUFmLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNlLFlBQVIsQ0FBcUIsU0FBckIsQ0FBSjtBQUFBLEtBRlQsQ0FGSyxFQU1MLENBQ0UsZ0NBREYsRUFFRSxVQUFBZixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDZSxZQUFSLENBQXFCLFNBQXJCLENBQUo7QUFBQSxLQUZULENBTkssRUFVTCxDQUFDLGtCQUFELEVBQXFCLFVBQUFmLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNlLFlBQVIsQ0FBcUIsU0FBckIsQ0FBSjtBQUFBLEtBQTVCLENBVkssRUFXTCxDQUFDLE9BQUQsRUFBVSxVQUFBZixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDbUIsSUFBWjtBQUFBLEtBQWpCLENBWEs7QUFERjtBQXJDYSxDQUF0QjtlQXNEZU4sYSIsImZpbGUiOiJtZXRhLXNjcmFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1ldGEtc2NyYXBlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtZXRhLXNjcmFwZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWV0YS1zY3JhcGVyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE1ldGFkYXRhUnVsZXMgZnJvbSBcIi4vbWV0YWRhdGEtcnVsZXMuanNcIjtcblxuZnVuY3Rpb24gZXh0cmFjdE1ldGFEYXRhKHJ1bGVTZXQsIGRvYykge1xuICBsZXQgbWF4UHJpb3JpdHkgPSAwLFxuICAgIG1heFZhbHVlID0gXCJcIjtcblxuICBydWxlU2V0LnJ1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICBjb25zdCBbcXVlcnksIGhhbmRsZXJdID0gcnVsZTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBydWxlU2V0LnJ1bGVzLmxlbmd0aCAtIGk7XG5cbiAgICBpZiAocHJpb3JpdHkgPiBtYXhQcmlvcml0eSkge1xuICAgICAgbWF4UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIG1heFZhbHVlID0gaGFuZGxlcihlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF4VmFsdWU7XG59XG5cbmZ1bmN0aW9uIEdldE1ldGFkYXRhKGRvYykge1xuICBjb25zdCBtZXRhZGF0YSA9IHt9O1xuICBjb25zdCBydWxlU2V0cyA9IE1ldGFkYXRhUnVsZXM7XG5cbiAgT2JqZWN0LmtleXMocnVsZVNldHMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IHJ1bGVTZXQgPSBydWxlU2V0c1trZXldO1xuXG4gICAgbWV0YWRhdGFba2V5XSA9IGV4dHJhY3RNZXRhRGF0YShydWxlU2V0LCBkb2MpO1xuICAgIGNvbnNvbGUubG9nKG1ldGFkYXRhKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRNZXRhZGF0YTtcbiIsImNvbnN0IE1ldGFkYXRhUnVsZXMgPSB7XG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIFtcbiAgICAgICAgJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScsXG4gICAgICAgIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICBdLFxuICAgICAgWydtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiIGldJywgZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIildXG4gICAgXVxuICB9LFxuICBpbWFnZToge1xuICAgIHJ1bGVzOiBbXG4gICAgICBbXG4gICAgICAgICdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXScsXG4gICAgICAgIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlOnVybFwiXScsXG4gICAgICAgIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICBdLFxuICAgICAgWydtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nLCBlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKV0sXG4gICAgICBbXG4gICAgICAgICdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJyxcbiAgICAgICAgZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIilcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdtZXRhW3Byb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiXScsXG4gICAgICAgIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICBdLFxuICAgICAgWydtZXRhW25hbWU9XCJ0aHVtYm5haWxcIl0nLCBlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKV1cbiAgICBdXG4gIH0sXG4gIGtleXdvcmRzOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIFsnbWV0YVtuYW1lPVwia2V5d29yZHNcIiBpXScsIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXVxuICAgIF1cbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBydWxlczogW1xuICAgICAgWydtZXRhW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nLCBlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKV0sXG4gICAgICBbXG4gICAgICAgICdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJyxcbiAgICAgICAgZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIilcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdtZXRhW3Byb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiXScsXG4gICAgICAgIGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gICAgICBdLFxuICAgICAgWydtZXRhW25hbWU9XCJoZGxcIl0nLCBlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKV0sXG4gICAgICBbXCJ0aXRsZVwiLCBlbGVtZW50ID0+IGVsZW1lbnQudGV4dF1cbiAgICBdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFkYXRhUnVsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9