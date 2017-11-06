webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tformName: function formName() {\n\t\t\treturn this.$store.getters.formName;\n\t\t},\n\n\t\tmessage: {\n\t\t\tget: function get() {\n\t\t\t\tvar name = this.formName;\n\t\t\t\tif (name) {\n\t\t\t\t\treturn this.$store.getters.strings.you_are_trans + ' ' + name;\n\t\t\t\t}\n\t\t\t\treturn '';\n\t\t\t}\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/MWNlNjkyN2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Z0NBR0E7a0RBQ0E7QUFDQTtnQ0FDQTs4QkFDQTtBQUNBOzs7dUJBRUE7b0JBQ0E7Y0FDQTs4REFDQTtBQUNBO1dBQ0E7QUFHQTtBQVRBO0FBUEE7OztBQWtCQTs7a0RBQ0E7d0JBQ0E7d0JBQ0E7OENBQ0E7d0JBQ0E7QUFDQTtBQUNBOzRDQUNBO3NCQUNBO0FBRUE7QUFaQTtBQWxCQSIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGNmLXRyYW5zbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPVwiY2YtdHJhbnNsYXRlLXNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJzYXZlVGV4dFwiXG4gICAgICAgID5cblxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8cFxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNmLXRyYW5zbGF0ZS1pbmZvLWJsb2NrIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9wPlxuICAgICAgICB7e2Zvcm1OYW1lfX1cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH0sXG4gICAgICAgICAgICBmb3JtTmFtZSgpe1xuXHRcdFx0ICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZvcm1OYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2U6e1xuXHRcdFx0XHRnZXQoKXtcblx0XHRcdFx0XHRsZXQgbmFtZSA9IHRoaXMuZm9ybU5hbWU7XG5cdFx0XHRcdFx0aWYoIG5hbWUgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MueW91X2FyZV90cmFucyArICcgJyArIG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gXHRcdH0sXG5cdFx0bWV0aG9kczp7XG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0YWRkQnV0dG9uQ2xpY2soKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0fVxuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9ybVNhdmVyLnZ1ZT8xY2U2OTI3ZSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})