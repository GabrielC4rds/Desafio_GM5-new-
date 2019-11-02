webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\GitHub-Projects\\gm5(new)\\gm5-teste\\components\\Common\\MainMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return {
    ScreenWidth: width,
    ScreenHeight: height
  };
};

var MainMenuHolder = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MainMenu__MainMenuHolder",
  componentId: "v496ik-0"
})(["width:100%;"]);
var MenuContent = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MainMenu__MenuContent",
  componentId: "v496ik-1"
})(["width:100%;padding:15px 15px;max-width:1250px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;img{width:200px;}ul{width:75%;display:flex;align-items:center;justify-content:space-between;list-style:none;margin-bottom:0px;}ul li a{color:inherit;text-decoration:none;}ul li{margin-right:15px;text-transform:uppercase;font-size:14px;position:relative;cursor:pointer;font-family:\"Open Sans\",sans-serif !important;:after{content:\"\";width:0%;height:2px;background:#0e996d;transition:all 0.3s ease;position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);}:hover:after{width:100%;}:last-child:after{display:none !important;}}@media (max-width:900px){.ant-dropdown,.ant-dropdown-menu{width:100vw !important;position:absolute !important;left:0 !important;top:80px !important;}.ant-dropdown-menu-item > a,.ant-dropdown-menu-submenu-title > a{font-size:18px !important;text-align:center !important;padding:10px 0 !important;font-family:\"Open Sans\",sans-serif !important;}.anticon{font-size:28px !important;color:#0e996d !important;}}"]);
var AlreadyStudent = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "MainMenu__AlreadyStudent",
  componentId: "v496ik-2"
})(["background:transparent;border:1px solid #000;border-radius:30px;padding:7px 30px;transition:all 0.4s ease;:hover{background:#0e996d;box-shadow:0px 9px 45px #0e996d40;color:#fff;border:1px solid #0e996d;cursor:pointer;}"]); // const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <a href="https://www.sanarmed.com/residenciamedica/">Home</a>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <a href="https://www.sanarmed.com/residenciamedica/#courses">Cursos</a>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <a href="https://www.sanarmed.com/residenciamedica/quem-somos/">
//         Quem Somos
//       </a>
//     </Menu.Item>
//     <Menu.Item key="3">
//       <a href="https://www.sanarmed.com/residenciamedica/duvidas/">Dúvidas</a>
//     </Menu.Item>
//     <Menu.Item key="4">
//       <a href="https://www.sanarmed.com/ciclos-da-medicina/residencia-medica">
//         Conteúdos
//       </a>
//     </Menu.Item>
//     <Menu.Item key="5">
//       <a href="https://aluno.sanarresidenciamedica.com.br/#/entrar">
//         Já Sou Aluno
//       </a>
//     </Menu.Item>
//   </Menu>
// );

function MainMenu(_ref2) {
  var ScreenWidth = _ref2.ScreenWidth,
      ScreenHeight = _ref2.ScreenHeight;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    width: ScreenWidth,
    height: ScreenHeight
  }),
      ScreenDimensions = _useState[0],
      setScreenDimensions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setScreenDimensions({
      width: ScreenWidth,
      height: ScreenHeight
    });
  }, [ScreenWidth, ScreenHeight]);
  return __jsx(MainMenuHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(MenuContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("img", {
    src: "./static/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), ScreenDimensions.width <= 900 ? __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: menu,
    trigger: ["click"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("a", {
    className: "ant-dropdown-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))) : __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sanarmed.com/residenciamedica/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Home")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sanarmed.com/residenciamedica/#courses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Cursos")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sanarmed.com/residenciamedica/quem-somos/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Quem Somos")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sanarmed.com/residenciamedica/duvidas/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "D\xFAvidas")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.sanarmed.com/ciclos-da-medicina/residencia-medica",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Conte\xFAdos")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(AlreadyStudent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("a", {
    href: "https://aluno.sanarresidenciamedica.com.br/#/entrar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "J\xE1 sou Aluno"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_6___default()(mapSizesToProps)(MainMenu));

/***/ }),

/***/ "./node_modules/antd/lib/_util/isNumeric.js":
false,

/***/ "./node_modules/antd/lib/_util/motion.js":
false,

/***/ "./node_modules/antd/lib/layout/Sider.js":
false,

/***/ "./node_modules/antd/lib/layout/layout.js":
false,

/***/ "./node_modules/antd/lib/menu/MenuContext.js":
false,

/***/ "./node_modules/antd/lib/menu/MenuItem.js":
false,

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
false,

/***/ "./node_modules/antd/lib/menu/index.js":
false,

/***/ "./node_modules/antd/lib/menu/style/css.js":
false,

/***/ "./node_modules/antd/lib/tooltip/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/placements.js":
false,

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
false,

/***/ "./node_modules/mini-store/lib/PropTypes.js":
false,

/***/ "./node_modules/mini-store/lib/Provider.js":
false,

/***/ "./node_modules/mini-store/lib/connect.js":
false,

/***/ "./node_modules/mini-store/lib/create.js":
false,

/***/ "./node_modules/mini-store/lib/index.js":
false,

/***/ "./node_modules/mini-store/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/mutationobserver-shim/dist/mutationobserver.min.js":
false,

/***/ "./node_modules/rc-animate/es/CSSMotion.js":
false,

/***/ "./node_modules/rc-animate/es/util/motion.js":
false,

/***/ "./node_modules/rc-menu/es/DOMWrap.js":
false,

/***/ "./node_modules/rc-menu/es/Divider.js":
false,

/***/ "./node_modules/rc-menu/es/Menu.js":
false,

/***/ "./node_modules/rc-menu/es/MenuItem.js":
false,

/***/ "./node_modules/rc-menu/es/MenuItemGroup.js":
false,

/***/ "./node_modules/rc-menu/es/SubMenu.js":
false,

/***/ "./node_modules/rc-menu/es/SubPopupMenu.js":
false,

/***/ "./node_modules/rc-menu/es/index.js":
false,

/***/ "./node_modules/rc-menu/es/placements.js":
false,

/***/ "./node_modules/rc-menu/es/util.js":
false,

/***/ "./node_modules/rc-menu/es/utils/isMobile.js":
false,

/***/ "./node_modules/rc-menu/es/utils/legacyUtil.js":
false,

/***/ "./node_modules/rc-tooltip/es/Content.js":
false,

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
false,

/***/ "./node_modules/rc-tooltip/es/index.js":
false,

/***/ "./node_modules/rc-tooltip/es/placements.js":
false,

/***/ "./node_modules/rc-tooltip/lib/placements.js":
false,

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
false,

/***/ "./node_modules/rc-util/es/KeyCode.js":
false,

/***/ "./node_modules/rc-util/es/warning.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false

})
//# sourceMappingURL=index.js.ca1fc9f643c32a5ed715.hot-update.js.map