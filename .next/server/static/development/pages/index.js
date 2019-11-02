module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\components\\Banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Banner__Main",
  componentId: "mqiqqr-0"
})(["width:100%;height:auto;background:no-repeat;"]);
function index() {
  return __jsx(Main, {
    src: "./static/myfolder/img/Banner.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/Common/MainFooter.js":
/*!*****************************************!*\
  !*** ./components/Common/MainFooter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\components\\Common\\MainFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainFooterHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainFooter__MainFooterHolder",
  componentId: "sc-17ao4m2-0"
})(["width:100%;margin-top:60px;"]);
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainFooter__FooterContent",
  componentId: "sc-17ao4m2-1"
})(["width:100%;padding:15px 0;max-width:2000px;margin:0 auto;display:flex;align-items:flex-start;justify-content:space-around;border-top:2px solid #0199b0;@media (max-width:750px){flex-wrap:wrap;justify-content:center;}"]);
const MainColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainFooter__MainColumn",
  componentId: "sc-17ao4m2-2"
})(["width:20%;height:25vh;display:flex;flex-direction:column;margin:0 auto;align-items:flex-start;justify-content:center;ul{display:flex;flex-direction:column;justify-content:space-between;a{color:#282828;margin:5px 0;}a1{color:purple;margin:5px 0;}}"]);
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainFooter__SocialIcons",
  componentId: "sc-17ao4m2-3"
})(["width:50%;height:5vh;display:flex;margin:0 35px;justify-content:space-around;align-items:center;flex-direction:row;"]);
function MainFooter() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(MainFooterHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(FooterContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(MainColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "home"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "quem somos"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "servi\xE7os"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "contato"))), __jsx(MainColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "endere\xE7o"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "asdasfjiasjfoa wdoasfoaska asfalsfka"), __jsx("a1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "contato"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "safjasjf skflakfkas\xE7f falasff"))), __jsx(MainColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("a1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "redes sociais")), __jsx(SocialIcons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("img", {
    src: "./static/myfolder/img/facebook_icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("img", {
    src: "./static/myfolder/img/instagram_icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    src: "./static/myfolder/img/twitter_icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("img", {
    src: "./static/myfolder/img/linkedin_icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "copyright 2019 - gm5 tecnologia"))))));
}

/***/ }),

/***/ "./components/Common/MainMenu.js":
/*!***************************************!*\
  !*** ./components/Common/MainMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown/style/css */ "./node_modules/antd/lib/dropdown/style/css.js");
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sizes */ "react-sizes");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\components\\Common\\MainMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




const mapSizesToProps = ({
  width,
  height
}) => ({
  ScreenWidth: width,
  ScreenHeight: height
});

const MainMenuHolder = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "MainMenu__MainMenuHolder",
  componentId: "v496ik-0"
})(["width:100%;"]);
const MenuContent = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "MainMenu__MenuContent",
  componentId: "v496ik-1"
})(["width:100%;padding:15px 15px;max-width:1250px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;img{width:100px;}ul{width:50%;display:flex;align-items:center;justify-content:space-between;list-style:none;margin-bottom:0px;}ul li a{color:#282828;text-decoration:none;:hover{color:#0199b0;}}ul li{margin-right:15px;text-transform:uppercase;font-size:14px;position:relative;cursor:pointer;font-family:\"Montserrat\",Montserrat-Medium !important;font-weight:bold;:after{content:\"\";width:0%;height:2px;background:#0e996d;transition:all 0.3s ease;position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);}:last-child:after{display:none !important;}}@media (max-width:900px){.ant-dropdown,.ant-dropdown-menu{width:100vw !important;position:absolute !important;left:0 !important;top:80px !important;}.ant-dropdown-menu-item > a,.ant-dropdown-menu-submenu-title > a{font-size:18px !important;text-align:center !important;padding:10px 0 !important;font-family:\"Open Sans\",sans-serif !important;}.anticon{font-size:28px !important;color:#0e996d !important;}}"]);
const AlreadyStudent = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button.withConfig({
  displayName: "MainMenu__AlreadyStudent",
  componentId: "v496ik-2"
})(["background:transparent;border:1px solid #000;border-radius:30px;padding:7px 30px;transition:all 0.4s ease;:hover{box-shadow:0px 9px 45px #0e996d40;color:#fff;cursor:pointer;}"]);

const menu = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "home")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "quem somos")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, "nossos servi\xE7os")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, "contato")));

function MainMenu({
  ScreenWidth,
  ScreenHeight
}) {
  const {
    0: ScreenDimensions,
    1: setScreenDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    width: ScreenWidth,
    height: ScreenHeight
  });
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    setScreenDimensions({
      width: ScreenWidth,
      height: ScreenHeight
    });
  }, [ScreenWidth, ScreenHeight]);
  return __jsx(MainMenuHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(MenuContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("img", {
    src: "./static/myfolder/img/Logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), ScreenDimensions.width <= 900 ? __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: menu,
    trigger: ["click"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("a", {
    className: "ant-dropdown-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))) : __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "home")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "quem somos")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "nossos servi\xE7os")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "contato")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_8___default()(mapSizesToProps)(MainMenu));

/***/ }),

/***/ "./components/WhoWeAre/index.js":
/*!**************************************!*\
  !*** ./components/WhoWeAre/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\components\\WhoWeAre\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WhoWeAre__Main",
  componentId: "ctd8j-0"
})(["width:100%;height:70vh;margin:10vh 0;display:flex;align-itens:center;justify-content:center;"]);
const PhotoDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WhoWeAre__PhotoDiv",
  componentId: "ctd8j-1"
})(["width:40%;height:70%;background:#0199b0;"]);
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "WhoWeAre__DescriptionDiv",
  componentId: "ctd8j-2"
})(["width:35%;height:70%;display:flex;padding:25px 0;align-itens:center;justify-content:center;ul{display:flex;flex-direction:column;li1{font-size:20px;}li2{margin-top:15px;text-align:justify;text-justify:auto;}}"]);
function index() {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(PhotoDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(DescriptionDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("li1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Quem Somos"), __jsx("li2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. Ut aliquet convallis cursus. Pellentesque tincidunt, libero ut volutpat gravida, tellus velit porta lacus, vitae pellentesque urna erat ac eros. In quis ante fermentum, ullamcorper velit ut, viverra risus. Cras volutpat justo tellus, in convallis augue sodales at. Cras varius semper metus laoreet aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus luctus convallis metus. Cras et elit eu diam rutrum iaculis. Morbi malesuada efficitur justo a tincidunt."))));
}

/***/ }),

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/button/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/dropdown/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/dropdown/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/dropdown/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/icon/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/menu/style/index.css");

__webpack_require__(/*! ../../tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tooltip/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_MainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/MainMenu */ "./components/Common/MainMenu.js");
/* harmony import */ var _components_Common_MainFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/MainFooter */ "./components/Common/MainFooter.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner/index.js");
/* harmony import */ var _components_WhoWeAre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WhoWeAre */ "./components/WhoWeAre/index.js");
var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Common_MainMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_WhoWeAre__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_Common_MainFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitHub-Projects\gm5(new)\gm5-teste\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-sizes":
/*!******************************!*\
  !*** external "react-sizes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map