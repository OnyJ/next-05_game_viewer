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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/GameDetail.js":
/*!******************************!*\
  !*** ./src/js/GameDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameDetail = (argument = \"\") => {\n  console.log(\"Game Detail\", argument);\n\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    let articleContent = \"\";\n\n    const fetchGame = (url, argument) => {\n      let finalURL = url + argument;\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          let { name, released, description } = response;\n\n          let articleDOM = document.querySelector(\".game-detail .article\");\n\n          articleDOM.querySelector(\"h1.title\").innerHTML = name;\n          articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n          articleDOM.querySelector(\"p.description\").innerHTML = description;\n        });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"game-detail\">\n        <div class=\"article\">\n          <h1 class=\"title\"></h1>\n          <p class=\"release-date\">Release date : <span></span></p>\n          <p class=\"description\"></p>\n        </div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDetail);\n\n\n//# sourceURL=webpack:///./src/js/GameDetail.js?");

/***/ }),

/***/ "./src/js/GameList.js":
/*!****************************!*\
  !*** ./src/js/GameList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameList = (argument = \"\") => {\n  console.log(\"Game List\", argument);\n\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    let articles = \"\";\n\n    const fetchList = (url, argument) => {\n      let finalURL = url;\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          response.results.forEach((article) => {\n            articles += `\n                  <div class=\"cardGame\">\n                    <h1>${article.name}</h1>\n                    <h2>${article.released}</h2>\n                    <a href = \"#gamedetail/${article.id}\">${article.id}</a>\n                  </div>\n                `;\n          });\n          document.querySelector(\".game-list .articles\").innerHTML = articles;\n        });\n    };\n    console.log(\"utilise url\");\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"game-list\">\n        <div class=\"articles\">Hey, this page is a GameList template, about : ${argument}</div>\n      </section>\n    `;\n    preparePage();\n  };\n\n  render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameList);\n\n\n//# sourceURL=webpack:///./src/js/GameList.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet selectedPlatform = \"\";\nlet articlesToDisplay = \"\";\nlet articles = [];\nlet visibleArticles = 0;\nconst URL_MOST_WANTED_GAMES =\n  \"https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added\";\n\nconst Home = (argument = \"\") => {\n  console.log(\"Page Home\", argument);\n\n  // const nineMore = () => {\n  // let showMore = document.getElementById(\"show-more\");\n  // let i = visibleArticles;\n  //\n  // if (visibleArticles > 21) {\n  // showMore.hidden = true;\n  // return;\n  // }\n  // showMore.hidden = false;\n  //\n  // for (i; i < visibleArticles + 9; i++) {\n  // console.log(articles[i]);\n  // if (articles[i] !== undefined)\n  // document.querySelector(\".game-list .articles\").innerHTML += articles[i];\n  // }\n  // visibleArticles += 9;\n  // };\n\n  const preparePage = (finalURL) => {\n    articles = \"\";\n\n    const selectByPlatform = (jsonArticlePlatforms) => {\n      let articlePlatforms = [];\n      jsonArticlePlatforms.forEach((platform) => {\n        articlePlatforms.push(platform.platform.slug);\n      });\n      if (selectedPlatform === \"\") return true;\n      return articlePlatforms.includes(selectedPlatform) ? true : false;\n    };\n\n    fetch(`${finalURL}`)\n      .then((response) => response.json())\n      .then((response) => {\n        console.log(\"ma response\");\n        console.log(response);\n        response.results.forEach((article) => {\n          if (selectByPlatform(article.platforms)) {\n            articles += `\n              <div class=\"cardGame\">\n                <img src=\"${article.background_image}\" alt=\"\"  />\n                <div class=\"card-text\">\n                  <h1>${article.name}</h1>\n                  <h2 class=\"date\">${article.released}</h2>\n                  <a href = \"#gamedetail/${article.id}\">${article.id}</a>\n                </div>\n              </div>\n            `;\n          }\n        });\n        // articlesToDisplay = nineMore();\n        document.querySelector(\".game-list .articles\").innerHTML = articles;\n      });\n  };\n\n  const changePlatform = () => {\n    selectedPlatform = document.getElementById(\"filter\").value;\n    preparePage(URL_MOST_WANTED_GAMES);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"game-list\">\n        <select id=\"filter\" class=\"drop\">\n          <option class=\"option active placeholder\" value=\"\">Platforms</option>\n          <option class=\"option\" value=\"pc\">PC</option>\n          <option class=\"option\" value=\"xbox-one\">Xbox One</option>\n          <option class=\"option\" value=\"playstation4\">Playstation 4</option>\n          <option class=\"option\" value=\"nintendo-switch\">Nintendo Switch</option>\n          <option class=\"option\" value=\"ios\">iOS</option>\n          <option class=\"option\" value=\"android\">Android</option>\n          <option class=\"option\" value=\"macos\">Mac OS</option>\n          <option class=\"option\" value=\"linux\">Linux</option>\n        </select>\n        <div class=\"articles\">Hey, this page is a GameList template, about : ${argument}</div>\n        <button id=\"show-more\">Show More</button>\n      </section>\n    `;\n\n    // <div class=\"drop\">\n    //   <div class=\"option active placeholder\" data-value=\"placeholder\">\n    //     Choose wisely\n    //   </div>\n    //   <div class=\"option\" data-value=\"wow\">\n    //     Wow!\n    //   </div>\n    //   <div class=\"option\" data-value=\"drop\">\n    //     So dropdown!\n    //   </div>\n    //   <div class=\"option\" data-value=\"select\">\n    //     Very select!\n    //   </div>\n    //   <div class=\"option\" data-value=\"custom\">\n    //     Much custom!\n    //   </div>\n    //   <div class=\"option\" data-value=\"animation\">\n    //     Such animation!\n    //   </div>\n    // </div>;\n\n    preparePage(URL_MOST_WANTED_GAMES);\n    document.getElementById(\"filter\").addEventListener(\"click\", changePlatform);\n    // document.getElementById(\"show-more\").addEventListener(\"click\", nineMore);\n  };\n  render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n// nine per nine display\n// fetchList(`https://api.rawg.io/api/games?dates=${time},${future_time}&ordering=-added&page_size=27`);\n\n\n//# sourceURL=webpack:///./src/js/Home.js?");

/***/ }),

/***/ "./src/js/Search.js":
/*!**************************!*\
  !*** ./src/js/Search.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst URL_SEARCH = \"https://api.rawg.io/api/games?search=\";\n\nconst Search = () => {\n  const preparePage = (finalURL) => {\n    let articles = \"\";\n\n    fetch(`${finalURL}`)\n      .then((response) => response.json())\n      .then((response) => {\n        console.log(\"ma response\");\n        console.log(response);\n        response.results.forEach((article) => {\n          articles += `\n              <div class=\"cardGame\">\n                <h1>${article.name}</h1>\n                <h2>${article.released}</h2>\n                <a href = \"#gamedetail/${article.id}\">${article.id}</a>\n              </div>\n            `;\n        });\n        document.querySelector(\"#pageContent\").innerHTML = articles;\n      });\n  };\n\n  const searchGame = () => {\n    let argument = document.getElementsByTagName(\"input\")[0].value;\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    if (cleanedArgument !== \"\") preparePage(URL_SEARCH + cleanedArgument);\n\n    document.getElementsByTagName(\"input\")[0].value = \"\";\n  };\n\n  document\n    .getElementById(\"submit-search\")\n    .addEventListener(\"click\", searchGame);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n\n//# sourceURL=webpack:///./src/js/Search.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ \"./src/js/Search.js\");\n\n\n\n\nlet pageArgument;\n\nfunction setRoute() {\n  let path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][path[0]](pageArgument);\n  return true;\n}\n\nObject(_Search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/*! exports provided: routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _GameDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameDetail */ \"./src/js/GameDetail.js\");\n/* harmony import */ var _GameList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameList */ \"./src/js/GameList.js\");\n\n\n\nconst routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  gamelist: _GameList__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  gamedetail: _GameDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n\n//# sourceURL=webpack:///./src/js/routes.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });