webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tformName: function formName() {\n\t\t\treturn this.$store.getters.formName;\n\t\t},\n\n\t\tmessage: {\n\t\t\tget: function get() {\n\t\t\t\tvar name = this.formName();\n\t\t\t\tif (name) {\n\t\t\t\t\treturn this.$store.getters.strings.you_are_trans + ' ' + name;\n\t\t\t\t}\n\t\t\t\treturn '';\n\t\t\t}\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/ZmFiNDMzZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7OztnQ0FHQTtrREFDQTtBQUNBO2dDQUNBOzhCQUNBO0FBQ0E7Ozt1QkFFQTtvQkFDQTtjQUNBOzhEQUNBO0FBQ0E7V0FDQTtBQUdBO0FBVEE7QUFQQTs7O0FBa0JBOztrREFDQTt3QkFDQTt3QkFDQTs4Q0FDQTt3QkFDQTtBQUNBO0FBQ0E7NENBQ0E7c0JBQ0E7QUFFQTtBQVpBO0FBbEJBIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjZi10cmFuc2xhdGUtc2F2ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInNhdmVUZXh0XCJcbiAgICAgICAgPlxuXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2YtdHJhbnNsYXRlLWluZm8tYmxvY2sgZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgICB7e21lc3NhZ2V9fVxuICAgICAgICA8L3A+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9LFxuICAgICAgICAgICAgZm9ybU5hbWUoKXtcblx0XHRcdCAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5mb3JtTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlOntcblx0XHRcdFx0Z2V0KCl7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSB0aGlzLmZvcm1OYW1lKCk7XG5cdFx0XHRcdFx0aWYoIG5hbWUgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MueW91X2FyZV90cmFucyArICcgJyArIG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gXHRcdH0sXG5cdFx0bWV0aG9kczp7XG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0YWRkQnV0dG9uQ2xpY2soKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0fVxuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9ybVNhdmVyLnZ1ZT9mYWI0MzNlYyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})