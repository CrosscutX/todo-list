/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Color Theme Swatches in RGBA */\\r\\n.Color { color: #000000}\\r\\n.ParentBg { color: #2C7CB0 }\\r\\n.Bg { color: #398557 }\\r\\n.border { color: #A5DCE4 }\\r\\n\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-variation-settings:\\r\\n  'FILL' 0,\\r\\n  'wght' 400,\\r\\n  'GRAD' 0,\\r\\n  'opsz' 48\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n*{\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    font-family: 'Raleway', sans-serif;\\r\\n    background-color: #2C7CB0;\\r\\n    color: #000000;\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\nheader{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-size: 2rem;\\r\\n    height: 120px;\\r\\n    background-color: #2C7CB0;\\r\\n}\\r\\n\\r\\nmain{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n}\\r\\n\\r\\nh2, p, span {\\r\\n    cursor: default;\\r\\n}\\r\\n.project-column{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n    background-color: #398557;\\r\\n    border: 5px solid #A5DCE4;\\r\\n    width: 20%;\\r\\n    height: 800px\\r\\n}\\r\\n\\r\\n.list-column{\\r\\n    background-color: #398557;\\r\\n    border: 5px solid #A5DCE4;\\r\\n    width: 60%;\\r\\n    height: 800px\\r\\n}\\r\\n\\r\\n.project-header{\\r\\n    margin-top: 10px;\\r\\n    font-size: 2rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.list-header{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n    margin-top: 10px;\\r\\n    font-size: 2rem;\\r\\n    display: flex;\\r\\n    margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.project-column button{\\r\\n    background-color: #ba5312;\\r\\n    border: 1px solid #A5DCE4;\\r\\n    height: 40px;\\r\\n    width: 150px;\\r\\n}\\r\\n\\r\\n.list-column button{\\r\\n    background-color: #ba5312;\\r\\n    border: 1px solid #A5DCE4;\\r\\n    height: 40px;\\r\\n    width: 150px;\\r\\n}\\r\\n\\r\\n.project-box{\\r\\n    display: flex;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    width: 80%;\\r\\n    height: 550px;\\r\\n    background-color: #ba5312;\\r\\n    border: 1px solid #A5DCE4;\\r\\n    min-height: 0;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.project-item{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-shrink: 0;\\r\\n    font-size: 0.6rem;\\r\\n    margin-top: 20px;\\r\\n    width: 80%;\\r\\n    height: 50px;\\r\\n    background-color: #398557;\\r\\n    border: 1px solid #A5DCE4;\\r\\n}\\r\\n\\r\\n.project-delete {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-weight: bold;\\r\\n    width: 150px;\\r\\n    height: 40px;\\r\\n    background-color: rgb(200, 36, 36);\\r\\n    border: 2px solid black;\\r\\n}\\r\\n\\r\\n    .list-column{\\r\\n        min-height: 0;\\r\\n        overflow: auto;\\r\\n    }\\r\\n\\r\\n    /*Body to hold containers for todos*/\\r\\n    .list-body{\\r\\n        display: flex;\\r\\n        align-items: flex-start;\\r\\n        justify-content: flex-start;\\r\\n        margin-left: 15px;\\r\\n        gap: 20px;\\r\\n        flex-wrap: wrap;\\r\\n    }\\r\\n\\r\\n    /*todo elements that are added to the body of the list*/\\r\\n    .todo-item{\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        text-align: center;\\r\\n        background-color: #ba5312;\\r\\n        border: 1px solid #A5DCE4;\\r\\n        height: 85px;\\r\\n        width: 31%;\\r\\n        margin-bottom: 15px;\\r\\n    }\\r\\n    /*The project form that pops up when I click the new project button.\\r\\n    It starts not displayed and then centers on the body tag.*/\\r\\n.project-form{\\r\\n    visibility: hidden;\\r\\n    display: flex;\\r\\n    text-align: center;\\r\\n    align-items: flex-start;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    width: 200px;\\r\\n    height: 150px;\\r\\n    background-color: #ba5312;\\r\\n    border: 5px solid #A5DCE4;\\r\\n}\\r\\n\\r\\n.project-form input{\\r\\n    background-color: #2C7CB0;\\r\\n    border: 1px solid #A5DCE4;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.project-form button{\\r\\n    margin-top: 15px;\\r\\n    height: 50px;\\r\\n    width: 75px;\\r\\n}\\r\\n\\r\\n.project-submit{\\r\\n    background-color: #398557;\\r\\n}\\r\\n\\r\\n.project-exit{\\r\\n    background-color: rgb(200, 36, 36);\\r\\n}\\r\\n\\r\\n.list-form{\\r\\n    visibility: hidden;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    background-color:#ba5312;\\r\\n    border: 5px solid #A5DCE4;\\r\\n    height: 600px;\\r\\n    width: 500px;\\r\\n}\\r\\n\\r\\n.list-row{\\r\\n    margin-top: 10px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.list-row p{\\r\\n    margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.list-row-button button{\\r\\n    margin-top: 15px;\\r\\n    height: 50px;\\r\\n    width: 75px;\\r\\n}\\r\\n\\r\\n.list-submit{\\r\\n    background-color: #398557;\\r\\n}\\r\\n\\r\\n.list-exit{\\r\\n    background-color: rgb(200, 36, 36);\\r\\n}\\r\\n\\r\\n.todo-info{\\r\\n    visibility: hidden;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    background-color:#ba5312;\\r\\n    border: 5px solid #A5DCE4;\\r\\n    height: 500px;\\r\\n    width: 500px;\\r\\n    gap: 40px;\\r\\n}\\r\\n\\r\\n.info-row {\\r\\n    margin-top: 10px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.info-exit {\\r\\n    \\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    justify-self: flex-end;\\r\\n    background-color: rgb(200, 36, 36);\\r\\n    margin-top: 15px;\\r\\n    height: 50px;\\r\\n    width: 75px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n;\r\n\r\nlet projItems = document.getElementsByClassName('project-item');\r\nlet todoItems = document.getElementsByClassName('todo-item');\r\n\r\nreselectProjects();\r\nreselectTodos();\r\n//Array to hold all of my project objects\r\nlet todoArr = [{id: 0, title: 'Title', description: 'lorum ipsum', date: '2022-12-31', priority: 'Low'}];\r\n\r\n//Storing IDs to keep track of selected project.\r\nlet currentID = 0;\r\nlet idCounter = 0;\r\n\r\n\r\n //Project button click handlers\r\n(function clickEvents() {\r\n    //Proj button click handlers-------------------------------------\r\n    const projBtn = document.getElementById('projBtn');\r\n    const projDel = document.querySelector('.project-delete');\r\n    const projBox = document.querySelector('.project-box');\r\n    const projForm = document.querySelector('.project-form');\r\n    const projSubBtn = document.querySelector('.project-submit');\r\n    const projExitBtn = document.querySelector('.project-exit');\r\n\r\n    projBtn.addEventListener('click', function(){\r\n        projForm.style.visibility = 'visible';\r\n    });\r\n\r\n    projDel.addEventListener('click', function() {\r\n        console.log('delete');\r\n        for(let i = 0; i < projItems.length; i++) {\r\n            if(projItems[i].getAttribute('data') === currentID){\r\n                projBox.removeChild(projItems[i]);\r\n            }\r\n        }\r\n    });\r\n     \r\n    projSubBtn.addEventListener('click', function(){\r\n        appendProject();\r\n        reselectProjects();\r\n        projForm.style.visibility = 'hidden';\r\n    })\r\n\r\n    projExitBtn.addEventListener('click', function(){\r\n        projForm.style.visibility = 'hidden';\r\n    })\r\n    //-----------------------------------------------------------\r\n    \r\n    //List button click handler----------------------------------\r\n    const listBtn = document.getElementById('listBtn');\r\n    const listForm = document.querySelector('.list-form')\r\n    const listSubBtn = document.querySelector('.list-submit');\r\n    const listExitBtn = document.querySelector('.list-exit');\r\n\r\n    listBtn.addEventListener('click', function(){\r\n        listForm.style.visibility = 'visible';\r\n    })\r\n\r\n    listSubBtn.addEventListener('click', function(){\r\n        appendTodos();\r\n        reselectTodos();\r\n        listForm.style.visibility = 'hidden';\r\n    })\r\n\r\n    listExitBtn.addEventListener('click', function(){\r\n        listForm.style.visibility = 'hidden';\r\n    })\r\n    //---------------------------------------------------------\r\n    const infoForm = document.querySelector('.todo-info')\r\n    const infoExit = document.querySelector('.info-exit')\r\n    \r\n    infoExit.addEventListener('click', function(){\r\n        infoForm.style.visibility = 'hidden';\r\n        clearInfo();\r\n    })\r\n    \r\n})();\r\n\r\n\r\nfunction reselectProjects() {\r\n    projItems = document.getElementsByClassName('project-item');\r\n    //remove event listener from all items to avoid stacking.\r\n    for(let i = 0; i < projItems.length; i++) {\r\n        projItems[i].removeEventListener('click', displayTodos);\r\n    }\r\n    //add event listeners back so they all buttons are clickable.\r\n    for(let i = 0; i < projItems.length; i++) {\r\n        projItems[i].addEventListener('click', displayTodos)\r\n       }\r\n\r\n}\r\n\r\nfunction reselectTodos() {\r\n    todoItems = document.getElementsByClassName('todo-item');\r\n\r\n    //remove event listener from all items to avoid stacking.\r\n    for(let i = 0; i < todoItems.length; i++) {\r\n        todoItems[i].removeEventListener('click', displayInfo);\r\n    }\r\n    //add event listeners back so they all buttons are clickable.\r\n    for(let i = 0; i < todoItems.length; i++) {\r\n        todoItems[i].addEventListener('click', displayInfo)\r\n       }\r\n\r\n}\r\n//The functionality of appending elements to the project box.\r\nfunction appendProject() {\r\n    //Selects the project box\r\n    idCounter++\r\n    const box = document.querySelector('.project-box');\r\n    //Creates a new div and h2 element to insert into the project box.\r\n    const projItem = document.createElement('div');\r\n    const projTitle = document.createElement('h2');\r\n    const projTitleText = document.querySelector('.project-input');\r\n    //Adds the class to the item for styling purposes and adds the title defined in the click event to \r\n    //projTitle. Also adds the data attribute to be the title, for later use in identifying buttons.\r\n    projItem.classList.add('project-item');\r\n    projItem.setAttribute('data', idCounter);\r\n    \r\n    projTitle.setAttribute('data', idCounter);\r\n    projTitle.textContent = projTitleText.value;\r\n   //appending\r\n    projItem.appendChild(projTitle);\r\n    box.appendChild(projItem);\r\n    \r\n    projTitleText.value = '';\r\n}\r\n\r\nfunction appendTodos() {\r\n    const body = document.querySelector('.list-body');\r\n    const listTitle = document.querySelector('#list-title');\r\n    const listDescription = document.querySelector('#list-description');\r\n    const listDate = document.querySelector('#list-date');\r\n    const radioLow = document.querySelector('#list-priority-low');\r\n    const radioMedium = document.querySelector('#list-priority-medium');\r\n    const radioHigh = document.querySelector('#list-priority-high');\r\n    let radioChoice = 'Low';\r\n    \r\n    if(radioLow.checked){\r\n        radioChoice = 'Low'\r\n    } else if(radioMedium.checked){\r\n        radioChoice = 'Medium';\r\n    } else if(radioHigh.checked){\r\n        radioChoice = 'High';\r\n    }\r\n\r\n    const newTodo = document.createElement('div');\r\n    const newTitle = document.createElement('h2');\r\n    const newDate = document.createElement('p');\r\n    const newDel = document.createElement('span')\r\n    //Add todo block--------------------------------------------\r\n    newTitle.textContent = listTitle.value;\r\n    newDate.textContent = listDate.value;\r\n    newDel.textContent = 'delete';\r\n\r\n    //Set the classlists for formatting, and add the data/id attributes to the delete button and\r\n    //the todo card so that I can reference them later in the program to delete and pull up\r\n    //the proper info.\r\n    newTodo.classList.add('todo-item');\r\n    newTodo.setAttribute('data', currentID);\r\n    newTodo.setAttribute('id', newTitle.textContent);\r\n\r\n    newTitle.setAttribute('data', currentID);\r\n    newTitle.setAttribute('id', newTitle.textContent);\r\n\r\n    newDate.setAttribute('data', currentID);\r\n    newDate.setAttribute('id', newTitle.textContent);\r\n    \r\n    newDel.classList.add('material-symbols-outlined');\r\n    newDel.setAttribute('data', currentID);\r\n    newDel.setAttribute('id', newTitle.textContent);\r\n    \r\n    \r\n    //append the new todos and info\r\n    body.appendChild(newTodo);\r\n    newTodo.appendChild(newTitle);\r\n    newTodo.appendChild(newDate);\r\n    newTodo.appendChild(newDel);\r\n    //----------------------------------------------------------\r\n    //Add to array to compare later on\r\n    addTodoToArray(currentID, listTitle.value, listDescription.value, listDate.value, radioChoice);\r\n\r\n    //After the input is added, clear the boxes\r\n    listTitle.value = '';\r\n    listDescription.value = 'Enter description here';\r\n    listDate.value = '';\r\n    radioLow.checked = false;\r\n    radioMedium.checked = false;\r\n    radioHigh.checked = false;\r\n\r\n}\r\n\r\nfunction addTodoToArray(id,title,description,date,priority){\r\n    const newTodo = {\r\n        id: id,\r\n        title: title,\r\n        description: description,\r\n        date: date,\r\n        priority: priority\r\n    }\r\n\r\n    todoArr.push(newTodo);\r\n    console.log(todoArr);\r\n}\r\n//This function is needed so I can remove click events whenever a new project is added.\r\n//The function itself should make the proper todo's visible.\r\nfunction displayTodos(e){\r\n    const currentProject = e.target;\r\n    console.log(currentProject);\r\n    const todos = document.querySelectorAll('.todo-item');\r\n    currentID = currentProject.getAttribute('data');\r\n    //Display is changed here instead of visibility, as visibility will have an impact on formatting.\r\n    todos.forEach(element => {\r\n        if(element.getAttribute('data') !== currentID){\r\n            element.style.display = 'none';\r\n        } else{\r\n            element.style.display = 'flex'\r\n        }\r\n    });\r\n    \r\n}\r\n\r\nfunction displayInfo(e) {\r\n    const infoPanel = document.querySelector('.todo-info');\r\n    infoPanel.style.visibility = 'visible';\r\n    const currentTodo = e.target;\r\n    const titleLbl = document.querySelector('.info-title');\r\n   \r\n    //loop through todo array and append the proper info to the info page.\r\n    for(let i = 0; i < todoArr.length; i++){\r\n        if(currentTodo.getAttribute('id') === todoArr[i].title && currentTodo.getAttribute('data') == todoArr[i].id){\r\n            const newTitle = document.createElement('p');\r\n            newTitle.textContent = todoArr[i].title;\r\n            titleLbl.appendChild(newTitle);\r\n            console.log('works');\r\n        }\r\n    }\r\n   \r\n\r\n}\r\n\r\n\r\n\r\nfunction deleteTodos() {\r\n    const delBtns = document.querySelectorAll('')\r\n}\r\n\r\nfunction clearInfo() {\r\n    const titleLbl = document.querySelector('.info-title');\r\n    const title = document.querySelector('.info-title p')\r\n\r\n    \r\n    titleLbl.removeChild(title);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;