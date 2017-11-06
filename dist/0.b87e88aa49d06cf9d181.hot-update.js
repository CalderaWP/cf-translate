webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\n\t\tmessage: {\n\t\t\tget: function get() {\n\t\t\t\tvar name = this.$store.getters.formName;\n\t\t\t\tif (name) {\n\t\t\t\t\treturn this.$store.getters.strings.you_are_trans + ' ' + name;\n\t\t\t\t}\n\t\t\t\treturn '';\n\t\t\t}\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/OWU0NThkZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7OztnQ0FHQTtrREFDQTtBQUNBOzs7dUJBRUE7bUNBQ0E7Y0FDQTs4REFDQTtBQUNBO1dBQ0E7QUFHQTtBQVRBO0FBSkE7OztBQWVBOztrREFDQTt3QkFDQTt3QkFDQTs4Q0FDQTt3QkFDQTtBQUNBO0FBQ0E7NENBQ0E7c0JBQ0E7QUFFQTtBQVpBO0FBZkEiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjZi10cmFuc2xhdGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD1cImNmLXRyYW5zbGF0ZS1zYXZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgdi1odG1sPVwic2F2ZVRleHRcIlxuICAgICAgICA+XG5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjZi10cmFuc2xhdGUtaW5mby1ibG9jayBkZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIDwvcD5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH0sXG4gICAgICAgICAgICBtZXNzYWdlOntcblx0XHRcdFx0Z2V0KCl7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZvcm1OYW1lO1xuXHRcdFx0XHRcdGlmKCBuYW1lICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHJpbmdzLnlvdV9hcmVfdHJhbnMgKyAnICcgKyBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuIFx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2F2ZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2F2aW5nJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnLCB0cnVlICk7XG5cdFx0XHRcdFx0dGhpcy5zaG93Q2hvb3NlciA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGFkZEJ1dHRvbkNsaWNrKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdH1cbiAgICAgICAgfVxuXHR9XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvcm1TYXZlci52dWU/OWU0NThkZjAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})