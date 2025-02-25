/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/DarkModeContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/DarkModeContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DarkModeProvider: () => (/* binding */ DarkModeProvider),\n/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DarkModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction DarkModeProvider({ children }) {\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"DarkModeProvider.useEffect\": ()=>{\n            const savedMode = localStorage.getItem(\"darkMode\") === \"true\";\n            setIsDarkMode(savedMode);\n        }\n    }[\"DarkModeProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"DarkModeProvider.useEffect\": ()=>{\n            if (isDarkMode) {\n                document.documentElement.classList.add(\"dark\");\n            } else {\n                document.documentElement.classList.remove(\"dark\");\n            }\n            localStorage.setItem(\"darkMode\", String(isDarkMode));\n        }\n    }[\"DarkModeProvider.useEffect\"], [\n        isDarkMode\n    ]);\n    function toggleDarkMode() {\n        setIsDarkMode(!isDarkMode);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DarkModeContext.Provider, {\n        value: {\n            isDarkMode,\n            toggleDarkMode\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/natthanat/Desktop/test-knacx/src/context/DarkModeContext.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\nconst useDarkMode = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DarkModeContext);\n    if (!context) {\n        throw new Error(\"useDarkMode must be used within a DarkModeProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9EYXJrTW9kZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNZTtBQU9mLE1BQU1JLGdDQUFrQkosb0RBQWFBLENBQ25DSztBQUlLLFNBQVNDLGlCQUFpQixFQUFFQyxRQUFRLEVBQXdCO0lBQ2pFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUV0REUsZ0RBQVNBO3NDQUFDO1lBQ1IsTUFBTU8sWUFBWUMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQjtZQUN2REgsY0FBY0M7UUFDaEI7cUNBQUcsRUFBRTtJQUVMUCxnREFBU0E7c0NBQUM7WUFDUixJQUFJSyxZQUFZO2dCQUNkSyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3pDLE9BQU87Z0JBQ0xILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7WUFDNUM7WUFDQU4sYUFBYU8sT0FBTyxDQUFDLFlBQVlDLE9BQU9YO1FBQzFDO3FDQUFHO1FBQUNBO0tBQVc7SUFFZixTQUFTWTtRQUNQWCxjQUFjLENBQUNEO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNKLGdCQUFnQmlCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZDtZQUFZWTtRQUFlO2tCQUMzRGI7Ozs7OztBQUdQO0FBRU8sTUFBTWdCLGNBQWM7SUFDekIsTUFBTUMsVUFBVXRCLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNvQixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvbmF0dGhhbmF0L0Rlc2t0b3AvdGVzdC1rbmFjeC9zcmMvY29udGV4dC9EYXJrTW9kZUNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICBSZWFjdE5vZGUsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBEYXJrTW9kZUNvbnRleHRQcm9wcyB7XG4gIGlzRGFya01vZGU6IGJvb2xlYW47XG4gIHRvZ2dsZURhcmtNb2RlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBEYXJrTW9kZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PERhcmtNb2RlQ29udGV4dFByb3BzIHwgdW5kZWZpbmVkPihcbiAgdW5kZWZpbmVkXG4pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBEYXJrTW9kZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTp7Y2hpbGRyZW46IFJlYWN0Tm9kZX0pIHtcbiAgY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXJrTW9kZVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgc2V0SXNEYXJrTW9kZShzYXZlZE1vZGUpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNEYXJrTW9kZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFya01vZGVcIiwgU3RyaW5nKGlzRGFya01vZGUpKTtcbiAgfSwgW2lzRGFya01vZGVdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVEYXJrTW9kZSgpIHtcbiAgICBzZXRJc0RhcmtNb2RlKCFpc0RhcmtNb2RlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERhcmtNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0RhcmtNb2RlLCB0b2dnbGVEYXJrTW9kZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RhcmtNb2RlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZURhcmtNb2RlID0gKCk6IERhcmtNb2RlQ29udGV4dFByb3BzID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoRGFya01vZGVDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlRGFya01vZGUgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIERhcmtNb2RlUHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJEYXJrTW9kZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJEYXJrTW9kZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsInNhdmVkTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldEl0ZW0iLCJTdHJpbmciLCJ0b2dnbGVEYXJrTW9kZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VEYXJrTW9kZSIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/DarkModeContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/DarkModeContext */ \"./src/context/DarkModeContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_DarkModeContext__WEBPACK_IMPORTED_MODULE_2__.DarkModeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/natthanat/Desktop/test-knacx/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/natthanat/Desktop/test-knacx/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUUrQjtBQUc5QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCxzRUFBZ0JBO2tCQUNmLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvVXNlcnMvbmF0dGhhbmF0L0Rlc2t0b3AvdGVzdC1rbmFjeC9zcmMvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IERhcmtNb2RlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0RhcmtNb2RlQ29udGV4dFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxEYXJrTW9kZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvRGFya01vZGVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJEYXJrTW9kZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();