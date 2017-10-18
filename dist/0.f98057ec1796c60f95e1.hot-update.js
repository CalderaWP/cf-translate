webpackHotUpdate(0,{

/***/ 62:
/* exports provided: stateFactory */
/* exports used: stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__ = __webpack_require__(/*! lodash.isfunction */ 67);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isfunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isfunction__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsic3RhdGVGYWN0b3J5IiwiZ2V0dGVyIiwibXV0YXRpb24iLCJnZXQiLCIkc3RvcmUiLCJzdGF0ZSIsInNldCIsInZhbHVlIiwiY29tbWl0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFHQTs7OztBQUlRLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxDQUFFQyxNQUFGLEVBQVVDLFFBQVYsRUFBd0I7O0FBRXBELEtBQUksQ0FBRUEsUUFBTixFQUFnQjtBQUFHQSxhQUFXRCxNQUFYO0FBQW9COztBQUd2QyxRQUFPO0FBQ05FLEtBRE0saUJBQ0U7QUFDUCxVQUFPLEtBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFtQkosTUFBbkIsQ0FBUDtBQUNBLEdBSEs7QUFJTkssS0FKTSxlQUlGQyxLQUpFLEVBSUs7QUFDVixRQUFLSCxNQUFMLENBQVlJLE1BQVosQ0FBbUJOLFFBQW5CLEVBQTZCSyxLQUE3QjtBQUNBO0FBTkssRUFBUDtBQVFBLENBYk8iLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2guaXNmdW5jdGlvbic7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gZ2V0dGVyIFRoZSBuYW1lIG9mIHRoZSBnZXR0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfHVuZGVmaW5lZH0gbXV0YXRpb24gVGhlIG5hbWUgb2YgdGhlIG11dGF0aW9uLCBvciB1bmRlZmluZWQgdG8gdXNlIHNhbWUgbmFtZSBhcyBnZXR0ZXJcbiAqL1xuZXhwb3J0ICBjb25zdCBzdGF0ZUZhY3RvcnkgPSAoIGdldHRlciwgbXV0YXRpb24gKSA9PiB7XG5cblx0aWYoICEgbXV0YXRpb24gKXsgIG11dGF0aW9uID0gZ2V0dGVyOyB9XG5cblxuXHRyZXR1cm4ge1xuXHRcdGdldCAoKSAge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlWyBnZXR0ZXIgXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9uLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RhdGVzL3N0YXRlRmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})