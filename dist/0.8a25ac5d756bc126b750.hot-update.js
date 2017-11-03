webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tformName: function formName() {\n\t\t\treturn this.$store.getters.formName;\n\t\t},\n\n\t\tmessage: {\n\t\t\tget: function get() {\n\t\t\t\tvar name = this.$store.getters.formName;\n\t\t\t\tif (name) {\n\t\t\t\t\treturn this.$store.getters.strings.you_are_trans + ' ' + name;\n\t\t\t\t}\n\t\t\t\treturn '';\n\t\t\t}\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/MTkzNWM4NzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7OztnQ0FHQTtrREFDQTtBQUNBO2dDQUNBOzhCQUNBO0FBQ0E7Ozt1QkFFQTttQ0FDQTtjQUNBOzhEQUNBO0FBQ0E7V0FDQTtBQUdBO0FBVEE7QUFQQTs7O0FBa0JBOztrREFDQTt3QkFDQTt3QkFDQTs4Q0FDQTt3QkFDQTtBQUNBO0FBQ0E7NENBQ0E7c0JBQ0E7QUFFQTtBQVpBO0FBbEJBIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjZi10cmFuc2xhdGUtc2F2ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInNhdmVUZXh0XCJcbiAgICAgICAgPlxuXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2YtdHJhbnNsYXRlLWluZm8tYmxvY2sgZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgICB7e21lc3NhZ2V9fVxuICAgICAgICA8L3A+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9LFxuICAgICAgICAgICAgZm9ybU5hbWUoKXtcblx0XHRcdCAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5mb3JtTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlOntcblx0XHRcdFx0Z2V0KCl7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZvcm1OYW1lO1xuXHRcdFx0XHRcdGlmKCBuYW1lICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHJpbmdzLnlvdV9hcmVfdHJhbnMgKyAnICcgKyBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuIFx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2F2ZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2F2aW5nJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnLCB0cnVlICk7XG5cdFx0XHRcdFx0dGhpcy5zaG93Q2hvb3NlciA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGFkZEJ1dHRvbkNsaWNrKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdH1cbiAgICAgICAgfVxuXHR9XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvcm1TYXZlci52dWU/MTkzNWM4NzgiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})