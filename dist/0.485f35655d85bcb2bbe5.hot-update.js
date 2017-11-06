webpackHotUpdate(0,{

/***/ 45:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(/*! vuex */ 86);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_app_state__ = __webpack_require__(/*! vue-app-state */ 59);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined !== state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined !== state.language ? state.language : '';\n\t},\n\tformName: function formName(state) {\n\t\treturn state.form.formName;\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' !== _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tformInfo: function formInfo(state) {\n\t\treturn state.form.info[state.language];\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};\n\n\n\n\n/** Import plugin factory **/\n\n\n/**\n * Define your 2-way, 1-way and 2-way async bindings\n * @type {{twoWay: string[], oneWay: string[], dispatching: Array}}\n */\nvar stateComputes = {\n\t//2-way bindings, must have getter and mutation with same name to get/set this prop\n\ttwoWay: ['industry'],\n\t//1-way/ read-only bindings, must have getter  with same name to get this prop\n\toneWay: ['hi'],\n\tdispatching: []\n};\n\nvar statePlugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vue_app_state__[\"a\" /* createStatePlugin */])(stateComputes);\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(statePlugin);\n\nvar STATE = {\n\tindustry: 'Apex',\n\thi: 'Roy'\n};\n\nvar store = new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n\tstrict: false,\n\tplugins: [],\n\tmodules: {},\n\tstate: STATE,\n\tgetters: {\n\t\tindustry: function industry(state) {\n\t\t\treturn state.foo;\n\t\t},\n\t\tbar: function bar(state) {\n\t\t\treturn state.bar;\n\t\t}\n\t},\n\tmutations: {\n\t\tindustry: function industry(state, value) {\n\t\t\tstate.industry = value;\n\t\t}\n\t},\n\tactions: {}\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZm9ybU5hbWUiLCJmaWVsZHMiLCJmaWVsZCIsImZvcm1MYW5ndWFnZXMiLCJzaG93Rm9ybUNob2ljZSIsInNob3dBZGRMYW5ndWFnZSIsInNob3dMYW5ndWFnZUNob2ljZSIsInNhdmluZyIsInNob3dDaG9vc2VyIiwiZm9ybUluZm8iLCJpbmZvIiwiZm9vIiwic3RhdGVDb21wdXRlcyIsInR3b1dheSIsIm9uZVdheSIsImRpc3BhdGNoaW5nIiwic3RhdGVQbHVnaW4iLCJjcmVhdGVTdGF0ZVBsdWdpbiIsIlZ1ZSIsInVzZSIsIlNUQVRFIiwiaW5kdXN0cnkiLCJoaSIsInN0b3JlIiwiVnVleCIsIlN0b3JlIiwic3RyaWN0IiwicGx1Z2lucyIsIm1vZHVsZXMiLCJnZXR0ZXJzIiwiYmFyIiwibXV0YXRpb25zIiwidmFsdWUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGNBQWNGLE1BQU1ELE9BQXpELEdBQW1FQyxNQUFNRCxPQUF6RSxHQUFtRixLQUExRjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9ILE1BQU1HLE9BQWI7QUFDQSxFQU5xQjtBQU90QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9KLE1BQU1JLElBQWI7QUFDQSxFQVRxQjtBQVV0QkMsUUFBUSxzQkFBUztBQUNoQixT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QUFDQSxHQUhPO0FBSVJtQixPQUFLLG9CQUFTO0FBQ2IsVUFBTzFDLE1BQU0wQyxHQUFiO0FBQ0E7QUFOTyxFQUxvQjtBQWE3QkMsWUFBVztBQUNWVixVQURVLG9CQUNEakMsS0FEQyxFQUNNNEMsS0FETixFQUNhO0FBQ3RCNUMsU0FBTWlDLFFBQU4sR0FBaUJXLEtBQWpCO0FBQ0E7QUFIUyxFQWJrQjtBQWtCN0JDLFVBQVM7QUFsQm9CLENBQWYsQ0FBZiIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBHRVRURVJTID0ge1xuXHRmaWVsZElkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSggJ2ZpZWxkSWQnICkgJiYgdW5kZWZpbmVkICE9PSBzdGF0ZS5maWVsZElkID8gc3RhdGUuZmllbGRJZCA6IGZhbHNlO1xuXHR9LFxuXHRzdHJpbmdzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zdHJpbmdzO1xuXHR9LFxuXHRkYXRhIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhO1xuXHR9LFxuXHRsb2NhbCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubG9jYWw7XG5cdH0sXG5cdGZvcm0gOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm07XG5cdH0sXG5cdGZvcm1JZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5JRDtcblx0fSxcblx0Zm9ybXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1zO1xuXHR9LFxuXHRsYW5ndWFnZXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxhbmd1YWdlcztcblx0fSxcblx0bGFuZ3VhZ2UgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZCAhPT0gc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5sYW5ndWFnZSA6ICcnO1xuXHR9LFxuXHRmb3JtTmFtZSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5mb3JtTmFtZTtcblx0fSxcblx0ZmllbGRzOiBzdGF0ZSA9PiB7XG5cdFx0aWYoIHVuZGVmaW5lZCA9PT0gc3RhdGUuZmllbGRzICl7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT09IHR5cGVvZiAgc3RhdGUuZmllbGQgKXtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuZmllbGQ7XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybUxhbmd1YWdlcztcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0fSxcblx0c2hvd0FkZExhbmd1YWdlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApIHtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlO1xuXHR9LFxuXHRzYXZpbmc6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2F2aW5nO1xuXHR9LFxuXHRzaG93Q2hvb3Nlcjogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Q2hvb3Nlcjtcblx0fSxcblx0Zm9ybUluZm86IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gIHN0YXRlLmZvcm0uaW5mb1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZvbzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSgnZm9vJyApID8gc3RhdGUuZm9vIDogJ29vZic7XG5cdH1cbn07XG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbi8qKiBJbXBvcnQgcGx1Z2luIGZhY3RvcnkgKiovXG5pbXBvcnQgeyBjcmVhdGVTdGF0ZVBsdWdpbiB9IGZyb20gXCJ2dWUtYXBwLXN0YXRlXCI7XG5cbi8qKlxuICogRGVmaW5lIHlvdXIgMi13YXksIDEtd2F5IGFuZCAyLXdheSBhc3luYyBiaW5kaW5nc1xuICogQHR5cGUge3t0d29XYXk6IHN0cmluZ1tdLCBvbmVXYXk6IHN0cmluZ1tdLCBkaXNwYXRjaGluZzogQXJyYXl9fVxuICovXG5jb25zdCBzdGF0ZUNvbXB1dGVzID0ge1xuXHQvLzItd2F5IGJpbmRpbmdzLCBtdXN0IGhhdmUgZ2V0dGVyIGFuZCBtdXRhdGlvbiB3aXRoIHNhbWUgbmFtZSB0byBnZXQvc2V0IHRoaXMgcHJvcFxuXHR0d29XYXk6IFtcblx0XHQnaW5kdXN0cnknLFxuXHRdLFxuXHQvLzEtd2F5LyByZWFkLW9ubHkgYmluZGluZ3MsIG11c3QgaGF2ZSBnZXR0ZXIgIHdpdGggc2FtZSBuYW1lIHRvIGdldCB0aGlzIHByb3Bcblx0b25lV2F5OiBbXG5cdFx0J2hpJ1xuXHRdLFxuXHRkaXNwYXRjaGluZzogW1xuXHRdXG59O1xuXG5cbmNvbnN0IHN0YXRlUGx1Z2luID0gY3JlYXRlU3RhdGVQbHVnaW4oc3RhdGVDb21wdXRlcyk7XG5WdWUudXNlKCBzdGF0ZVBsdWdpbiApO1xuXG5cbmNvbnN0IFNUQVRFID0ge1xuXHRpbmR1c3RyeTogJ0FwZXgnLFxuXHRoaTogJ1JveSdcbn07XG5cblxuXG5jb25zdCBzdG9yZSA9ICBuZXcgVnVleC5TdG9yZSh7XG5cdHN0cmljdDogZmFsc2UsXG5cdHBsdWdpbnM6IFtdLFxuXHRtb2R1bGVzOiB7fSxcblx0c3RhdGU6IFNUQVRFLFxuXHRnZXR0ZXJzOiB7XG5cdFx0aW5kdXN0cnk6IHN0YXRlID0+IHtcblx0XHRcdHJldHVybiBzdGF0ZS5mb287XG5cdFx0fSxcblx0XHRiYXI6IHN0YXRlID0+IHtcblx0XHRcdHJldHVybiBzdGF0ZS5iYXI7XG5cdFx0fVxuXHR9LFxuXHRtdXRhdGlvbnM6IHtcblx0XHRpbmR1c3RyeShzdGF0ZSwgdmFsdWUgKXtcblx0XHRcdHN0YXRlLmluZHVzdHJ5ID0gdmFsdWU7XG5cdFx0fVxuXHR9LFxuXHRhY3Rpb25zOiB7fVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL2dldHRlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})