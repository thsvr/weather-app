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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/*! exports provided: searchForm, searchCity, warning, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchForm\", function() { return searchForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchCity\", function() { return searchCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\nconst searchForm = document.querySelector('.check-by-city .search-form');\nconst searchCity = document.querySelector('.check-by-city .search-city');\nconst warning = document.querySelector('.check-by-city .warning');\nconst iconImg = document.querySelector('.icon-container > img');\nconst desc = document.querySelector('.icon-container > p');\nconst cityTemp = document.querySelector('.city-temp > div');\nconst cityCountry = document.querySelectorAll('.city-country > span');\nconst extraInfo = document.querySelectorAll('.extra-info > p');\nconst cardCity = document.getElementById('card-city');\n// const timeInfo = document.querySelector('.time-info .day-time');\nconst a = document.getElementById('switchKel');\nconst b = document.getElementById('temp-toggle');\nconst c = document.getElementById('main-temp');\nconst d = document.getElementById('btn-main-temp');\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((data, tempF = null) => {\n  const list = document.createElement('li');\n  let checkTempF = false;\n  const toggleTempF = (elem, cc, tempInfo) => {\n    const cel = `<i class='fas fa-thermometer-three-quarters c-mix'></i>${Math.round(\n      tempInfo,\n    )}°C`;\n    const elTempF = `<i class='fas fa-thermometer-three-quarters c-mix'></i>${Math.round(tempF)}°F`;\n    if (checkTempF) {\n      cc.innerHTML = cel;\n      elem.innerHTML = 'Switch to °F';\n      checkTempF = false;\n    } else {\n      cc.innerHTML = elTempF;\n      elem.innerHTML = 'Switch to °C';\n      checkTempF = true;\n    }\n  };\n  let checkTemp = false;\n  const toggleTemp = (elem, ccc, tempInfo) => {\n    const cel = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(\n      tempInfo,\n    )}°C`;\n    const kel = `<i class='fas fa-thermometer-three-quarters'></i><p>${Math.round(tempInfo + 273.15)}°K</p>`;\n    if (checkTemp) {\n      ccc.innerHTML = cel;\n      elem.innerHTML = 'Switch to °K';\n      checkTemp = false;\n    } else {\n      ccc.innerHTML = kel;\n      elem.innerHTML = 'Switch to °C';\n      checkTemp = true;\n    }\n  };\n  list.classList.add('city');\n  cityCountry[0].innerHTML = data.name;\n  cityCountry[1].innerHTML = data.country;\n  // timeInfo.innerHTML = data.dateTime;\n  cityTemp.innerHTML = `<i class='fas fa-thermometer-three-quarters'></i>${Math.round(\n    data.temp,\n  )}°C`;\n  iconImg.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;\n  desc.innerHTML = data.description;\n  extraInfo[0].innerHTML = `\n  <i class='fas fa-thermometer-three-quarters c-green'></i>\n  <span class='x-padd'>Feels Like</span>\n  ${Math.round(data.feelsLike)}°C\n  `;\n  extraInfo[1].innerHTML = `\n  <i class='fas fa-temperature-high c-green'></i>\n  <span class='x-padd'>Max temp</span>${Math.round(data.tempMax)}°C\n  `;\n  extraInfo[2].innerHTML = `\n  <i class='fas fa-temperature-low c-green'></i>\n  <span class='x-padd'>Min temp</span>${Math.round(data.tempMin)}°C\n  `;\n  a.innerHTML = `${Math.round(data.temp)}°C`;\n  d.style.display = 'block';\n  b.style.display = 'inline';\n  b.addEventListener('click', () => {\n    toggleTemp(b, a, data.temp);\n  });\n  d.addEventListener('click', () => {\n    toggleTempF(d, c, data.temp);\n  });\n  cardCity.className = 'show';\n});\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _parseJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseJSON */ \"./src/parseJSON.js\");\n\n\n\nconst weatherKey = '6080e17b0fc07b99a71fde330eb48aed';\n_DOM__WEBPACK_IMPORTED_MODULE_0__[\"searchForm\"].addEventListener('submit', event => {\n  event.preventDefault();\n  let data = {};\n  const chosenCity = _DOM__WEBPACK_IMPORTED_MODULE_0__[\"searchCity\"].value;\n  const metricURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=metric`;\n  const fehrenhitURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${weatherKey}&units=imperial`;\n  fetch(metricURL)\n    .then(response => response.json())\n    .then(json => Object(_parseJSON__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json))\n    .then(dataMetric => { data = dataMetric; })\n    .then(() => fetch(fehrenhitURL))\n    .then(response => response.json())\n    .then(json => Object(_parseJSON__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json))\n    .then(dataImperial => dataImperial.temp)\n    .then(tempF => Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, tempF))\n    .catch(() => {\n      _DOM__WEBPACK_IMPORTED_MODULE_0__[\"warning\"].textContent = 'I\\'m afraid we don\\'t know the weather of this city.';\n    });\n  _DOM__WEBPACK_IMPORTED_MODULE_0__[\"warning\"].textContent = '';\n  _DOM__WEBPACK_IMPORTED_MODULE_0__[\"searchForm\"].reset();\n  _DOM__WEBPACK_IMPORTED_MODULE_0__[\"searchCity\"].focus();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parseJSON.js":
/*!**************************!*\
  !*** ./src/parseJSON.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((json) => {\n  const { description, icon, main } = json.weather[0];\n  const { temp } = json.main;\n  const [name, country] = [json.name, json.sys.country];\n  const { dateTime } = Date(json.dt);\n  return {\n    description,\n    icon,\n    main,\n    temp,\n    name,\n    country,\n    tempMax: json.main.temp_max,\n    tempMin: json.main.temp_min,\n    feelsLike: json.main.feels_like,\n    dateTime,\n  };\n});\n\n//# sourceURL=webpack:///./src/parseJSON.js?");

/***/ })

/******/ });