webpackHotUpdate(0,{

/***/ 62:
/* exports provided: stateFactory */
/* exports used: stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__ = __webpack_require__(/*! lodash.isfunction */ 67);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation, dispath) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsic3RhdGVGYWN0b3J5IiwiZ2V0dGVyIiwibXV0YXRpb24iLCJkaXNwYXRoIiwiZ2V0IiwiJHN0b3JlIiwic3RhdGUiLCJzZXQiLCJ2YWx1ZSIsImNvbW1pdCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBR0E7Ozs7QUFJUSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBRUMsTUFBRixFQUFVQyxRQUFWLEVBQW9CQyxPQUFwQixFQUFpQzs7QUFFN0QsS0FBSSxDQUFFRCxRQUFOLEVBQWdCO0FBQUdBLGFBQVdELE1BQVg7QUFBb0I7O0FBR3ZDLFFBQU87QUFDTkcsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CTCxNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOTSxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQlAsUUFBbkIsRUFBNkJNLEtBQTdCO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FiTyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC5pc2Z1bmN0aW9uJztcblxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBnZXR0ZXIgVGhlIG5hbWUgb2YgdGhlIGdldHRlclxuICogQHBhcmFtIHtTdHJpbmd8dW5kZWZpbmVkfSBtdXRhdGlvbiBUaGUgbmFtZSBvZiB0aGUgbXV0YXRpb24sIG9yIHVuZGVmaW5lZCB0byB1c2Ugc2FtZSBuYW1lIGFzIGdldHRlclxuICovXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeSA9ICggZ2V0dGVyLCBtdXRhdGlvbiwgZGlzcGF0aCApID0+IHtcblxuXHRpZiggISBtdXRhdGlvbiApeyAgbXV0YXRpb24gPSBnZXR0ZXI7IH1cblxuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHZhbHVlKTtcblx0XHR9XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdGF0ZXMvc3RhdGVGYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})