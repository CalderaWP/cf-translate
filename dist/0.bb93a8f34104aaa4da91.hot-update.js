webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_savingState__ = __webpack_require__(/*! ./states/savingState */ 73);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\n\t\t\tshowSpinner: false,\n\t\t\tshowChooser: true,\n\t\t\t//labelText: this.$store.getters.strings.choose_form,\n\t\t\tlabelText: 'Fix This Label'\n\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */],\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaving: __WEBPACK_IMPORTED_MODULE_2__states_savingState__[\"a\" /* savingState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.saving ? 'Saving' : 'Save';\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.showChooser = false;\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT82ZTdkZjcxZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUNBOztBQUVBO3VCQUVBOzs7Z0JBR0E7Z0JBQ0E7QUFDQTtjQUdBOztBQU5BO0FBT0E7OztRQUVBO1NBQ0E7VUFDQTtnQ0FDQTttQ0FDQTtBQUVBO0FBUEE7OztBQVNBOztrREFDQTt3QkFDQTt3QkFFQTtBQUNBO0FBQ0E7NEJBQ0E7c0JBQ0E7c0JBQ0E7QUFFQTtBQVpBO0FBbkJBIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuXHRcdFx0IHYtaWY9XCIgc2hvd0Nob29zZXJcIlxuXHRcdD5cblx0XHRcdDxsYWJlbCBmb3I9XCJjZi10cmFuc2xhdGlvbnMtZm9ybVwiPlxuXHRcdFx0XHR7e2xhYmVsVGV4dH19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRjbGFzcz1cImJsb2NrLWlucHV0XCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImNoYW5nZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwiZm9ybSBpbiBmb3Jtc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJmb3JtLklEXCJcblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt7Zm9ybS5uYW1lfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwiISBzaG93Q2hvb3NlclwiXG5cdFx0PlxuXHRcdFx0PGJ1dHRvbiAgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLXNhdmUtYnV0dG9uXCIgIEBjbGljaz1cInNhdmVcIiA+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0PHA+XHRZb3UgQXJlIFRyYW5zbGF0aW5nIHt7Zm9ybS5JRH19PC9wPlxuXG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZm9ybVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZm9ybVN0YXRlJztcblx0aW1wb3J0IHsgZm9ybXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1zU3RhdGUnO1xuXHRpbXBvcnQgeyBzYXZpbmdTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3NhdmluZ1N0YXRlJztcblxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXG5cdFx0XHRcdHNob3dTcGlubmVyOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nob29zZXI6IHRydWUsXG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MuY2hvb3NlX2Zvcm0sXG5cdFx0XHRcdGxhYmVsVGV4dDogJ0ZpeCBUaGlzIExhYmVsJyxcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHRcdGZvcm1zOiAgZm9ybXNTdGF0ZSxcblx0XHRcdHNhdmluZzogc2F2aW5nU3RhdGUsXG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2F2ZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2F2aW5nJyApO1xuXHRcdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSB0cnVlO1xuXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb3JtQ2hvb3Nlci52dWU/NmU3ZGY3MWYiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})