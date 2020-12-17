webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {// styles/global.js
var _defaultExport = new String("body{margin:0;padding:0;background-color:#101010;}a{-webkit-text-decoration:none;text-decoration:none;color:#228cee;}a:hover{-webkit-text-decoration:none;text-decoration:none;}h1,h2{font-family:\"Roboto Mono\",monospace;font-size:2.3em;}p{font-family:\"Roboto\",sans-serif;line-height:1.5em;}.navbar-neon .navbar-toggler-icon{background-image:url(\"/toggler.png\");background-size:contain;}.navbar-toggler{color:#228cee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR3VuZ29yXFxEZXNrdG9wXFxQcm9qZWN0c1xcbXktc2l0ZVxcc3R5bGVzXFxnbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3lCLEFBR2MsQUFNWSxBQUtBLEFBSWdCLEFBSUosQUFJSSxBQUl2QixTQTFCSixLQTJCWixLQTFCMkIsYUFrQlAsSUFKRixDQVFRLE9BckIxQixNQUlnQixBQUtoQixBQVNBLEVBSkEsU0FRQSxHQWpCQSIsImZpbGUiOiJDOlxcVXNlcnNcXEd1bmdvclxcRGVza3RvcFxcUHJvamVjdHNcXG15LXNpdGVcXHN0eWxlc1xcZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVzL2dsb2JhbC5qc1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzLmdsb2JhbGBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzIyOGNlZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaDEsIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgfVxyXG4gIC5uYXZiYXItbmVvbiAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvdG9nZ2xlci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBjb2xvcjogIzIyOGNlZTtcclxuICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Gungor\\\\Desktop\\\\Projects\\\\my-site\\\\styles\\\\global.js */");

_defaultExport.__hash = "326767846";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTs7OztBQUdlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0ZDFkYTAwZDEwZjE4ZDIzZmI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZXMvZ2xvYmFsLmpzXHJcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjI4Y2VlO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBoMSwgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAyLjNlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICB9XHJcbiAgLm5hdmJhci1uZW9uIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi90b2dnbGVyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiAjMjI4Y2VlO1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==