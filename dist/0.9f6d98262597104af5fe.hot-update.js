webpackHotUpdate(0,{

/***/ 4:
/* exports provided: stateFactory */
/* exports used: stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__ = __webpack_require__(/*! lodash.isfunction */ 52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation, dispath) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsic3RhdGVGYWN0b3J5IiwiZ2V0dGVyIiwibXV0YXRpb24iLCJkaXNwYXRoIiwiZ2V0IiwiJHN0b3JlIiwic3RhdGUiLCJzZXQiLCJ2YWx1ZSIsImNvbW1pdCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBR0E7Ozs7QUFJUSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBRUMsTUFBRixFQUFVQyxRQUFWLEVBQW9CQyxPQUFwQixFQUFpQzs7QUFFN0QsS0FBSSxDQUFFRCxRQUFOLEVBQWdCO0FBQUdBLGFBQVdELE1BQVg7QUFBb0I7O0FBR3ZDLFFBQU87QUFDTkcsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CTCxNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOTSxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQlAsUUFBbkIsRUFBNkJNLEtBQTdCO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FiTyIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoLmlzZnVuY3Rpb24nO1xuXG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IGdldHRlciBUaGUgbmFtZSBvZiB0aGUgZ2V0dGVyXG4gKiBAcGFyYW0ge1N0cmluZ3x1bmRlZmluZWR9IG11dGF0aW9uIFRoZSBuYW1lIG9mIHRoZSBtdXRhdGlvbiwgb3IgdW5kZWZpbmVkIHRvIHVzZSBzYW1lIG5hbWUgYXMgZ2V0dGVyXG4gKi9cbmV4cG9ydCAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gKCBnZXR0ZXIsIG11dGF0aW9uLCBkaXNwYXRoICkgPT4ge1xuXG5cdGlmKCAhIG11dGF0aW9uICl7ICBtdXRhdGlvbiA9IGdldHRlcjsgfVxuXG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbiwgdmFsdWUpO1xuXHRcdH1cblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})