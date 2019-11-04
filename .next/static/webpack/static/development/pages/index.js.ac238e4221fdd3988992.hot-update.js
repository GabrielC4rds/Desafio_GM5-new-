webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/OurServices/index.js":
/*!*****************************************!*\
  !*** ./components/OurServices/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\GitHub-Projects\\Desafio_GM5\\components\\OurServices\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var json = __webpack_require__(/*! ../../assets/servico.json */ "./assets/servico.json");

var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "OurServices__Main",
  componentId: "xf3luz-0"
})(["height:100%;width:55%;display:flex;flex-direction:column;@media (max-width:900px){height:500vh;width:85%;align-self:center;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "OurServices__Title",
  componentId: "xf3luz-1"
})(["height:20%;width:100%;P{font-size:30px;font-weight:900;font-family:'Montserrat';color:#282828;}@media (max-width:900px){height:10%;}"]);
var Blocks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "OurServices__Blocks",
  componentId: "xf3luz-2"
})(["height:80%;width:100%;display:flex;flex-direction:row;justify-content:space-between;@media (max-width:750px){flex-direction:column;height:500vh;}"]);
var Block = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "OurServices__Block",
  componentId: "xf3luz-3"
})(["width:30%;height:100%;@media (max-width:900px){flex-direction:column;width:100%;}@media(max-width:375px){height:60vh;}"]);
var PhotoBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "OurServices__PhotoBlock",
  componentId: "xf3luz-4"
})(["width:70%;height:50%;@media (max-width:900px){flex-direction:column;width:100%;height:30vh;}"]);
var BlockTexts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "OurServices__BlockTexts",
  componentId: "xf3luz-5"
})(["width:100%;height:50%;padding:15px 0;display:flex;flex-direction:column;p:nth-child(1){margin:1px 0;font-size:15px;font-family:Montserrat;font-weight:bold;}p:nth-child(2){margin:1px 0;font-size:12px;}p:nth-child(3){margin:1px 0;font-size:10px;text-align:justify;text-justify:auto;font-weight:bold;font-family:Montserrat;}@media (max-width:900px){align-items:center;height:20vh;p:nth-child(3){text-align:justify;text-align-last:center;font-family:Montserrat;}}"]);
function index() {
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "NOSSOS SERVI\xC7OS")), __jsx(Blocks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, json.Servico.map(function (res) {
    return __jsx(Block, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(PhotoBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, src = res.Image), __jsx(BlockTexts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, res.Titulo), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, res.Subtitulo), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, res.Descricao)));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.ac238e4221fdd3988992.hot-update.js.map