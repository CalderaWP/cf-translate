webpackHotUpdate(0,{

/***/ 45:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(/*! vuex */ 86);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_app_state__ = __webpack_require__(/*! vue-app-state */ 59);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined !== state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined !== state.language ? state.language : '';\n\t},\n\tformName: function formName(state) {\n\t\treturn state.form.formName;\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' !== _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tformInfo: function formInfo(state) {\n\t\treturn state.form.info[state.language];\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};\n\n\n\n\n/** Import plugin factory **/\n\n\n/**\n * Define your 2-way, 1-way and 2-way async bindings\n * @type {{twoWay: string[], oneWay: string[], dispatching: Array}}\n */\nvar stateComputes = {\n\ttwoWay: ['industry'],\n\toneWay: ['hi'],\n\tdispatching: []\n};\n\nvar statePlugin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vue_app_state__[\"a\" /* createStatePlugin */])(stateComputes);\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(statePlugin);\n\nvar STATE = {\n\tindustry: 'Apex',\n\thi: 'Roy'\n};\n\nvar store = new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n\tstrict: false,\n\tplugins: [],\n\tmodules: {},\n\tstate: STATE,\n\tgetters: {\n\t\tindustry: function industry(state) {\n\t\t\treturn state.foo;\n\t\t},\n\t\tbar: function bar(state) {\n\t\t\treturn state.bar;\n\t\t}\n\t},\n\tmutations: {\n\t\tindustry: function industry(state, value) {\n\t\t\tstate.industry = value;\n\t\t}\n\t},\n\tactions: {}\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZm9ybU5hbWUiLCJmaWVsZHMiLCJmaWVsZCIsImZvcm1MYW5ndWFnZXMiLCJzaG93Rm9ybUNob2ljZSIsInNob3dBZGRMYW5ndWFnZSIsInNob3dMYW5ndWFnZUNob2ljZSIsInNhdmluZyIsInNob3dDaG9vc2VyIiwiZm9ybUluZm8iLCJpbmZvIiwiZm9vIiwic3RhdGVDb21wdXRlcyIsInR3b1dheSIsIm9uZVdheSIsImRpc3BhdGNoaW5nIiwic3RhdGVQbHVnaW4iLCJjcmVhdGVTdGF0ZVBsdWdpbiIsIlZ1ZSIsInVzZSIsIlNUQVRFIiwiaW5kdXN0cnkiLCJoaSIsInN0b3JlIiwiVnVleCIsIlN0b3JlIiwic3RyaWN0IiwicGx1Z2lucyIsIm1vZHVsZXMiLCJnZXR0ZXJzIiwiYmFyIiwibXV0YXRpb25zIiwidmFsdWUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGNBQWNGLE1BQU1ELE9BQXpELEdBQW1FQyxNQUFNRCxPQUF6RSxHQUFtRixLQUExRjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9ILE1BQU1HLE9BQWI7QUFDQSxFQU5xQjtBQU90QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9KLE1BQU1JLElBQWI7QUFDQSxFQVRxQjtBQVV0QkMsUUFBUSxzQkFBUztBQUNoQixT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QUFJUm1CLE9BQUssb0JBQVM7QUFDYixVQUFPMUMsTUFBTTBDLEdBQWI7QUFDQTtBQU5PLEVBTG9CO0FBYTdCQyxZQUFXO0FBQ1ZWLFVBRFUsb0JBQ0RqQyxLQURDLEVBQ000QyxLQUROLEVBQ2E7QUFDdEI1QyxTQUFNaUMsUUFBTixHQUFpQlcsS0FBakI7QUFDQTtBQUhTLEVBYmtCO0FBa0I3QkMsVUFBUztBQWxCb0IsQ0FBZixDQUFmIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGNvbnN0IEdFVFRFUlMgPSB7XG5cdGZpZWxkSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCAnZmllbGRJZCcgKSAmJiB1bmRlZmluZWQgIT09IHN0YXRlLmZpZWxkSWQgPyBzdGF0ZS5maWVsZElkIDogZmFsc2U7XG5cdH0sXG5cdHN0cmluZ3MgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnN0cmluZ3M7XG5cdH0sXG5cdGRhdGEgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGE7XG5cdH0sXG5cdGxvY2FsIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sb2NhbDtcblx0fSxcblx0Zm9ybSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybTtcblx0fSxcblx0Zm9ybUlkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLklEO1xuXHR9LFxuXHRmb3JtcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybXM7XG5cdH0sXG5cdGxhbmd1YWdlcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubGFuZ3VhZ2VzO1xuXHR9LFxuXHRsYW5ndWFnZSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkICE9PSBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmxhbmd1YWdlIDogJyc7XG5cdH0sXG5cdGZvcm1OYW1lIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmZvcm1OYW1lO1xuXHR9LFxuXHRmaWVsZHM6IHN0YXRlID0+IHtcblx0XHRpZiggdW5kZWZpbmVkID09PSBzdGF0ZS5maWVsZHMgKXtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdO1xuXHR9LFxuXHRmaWVsZDogc3RhdGUgPT4ge1xuXHRcdGlmKCAnb2JqZWN0JyAhPT0gdHlwZW9mICBzdGF0ZS5maWVsZCApe1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH0sXG5cdHNob3dGb3JtQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApIHtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlICkge1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2U7XG5cdH0sXG5cdHNhdmluZzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zYXZpbmc7XG5cdH0sXG5cdHNob3dDaG9vc2VyOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dDaG9vc2VyO1xuXHR9LFxuXHRmb3JtSW5mbzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiAgc3RhdGUuZm9ybS5pbmZvW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0Zm9vOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCdmb28nICkgPyBzdGF0ZS5mb28gOiAnb29mJztcblx0fVxufTtcblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuLyoqIEltcG9ydCBwbHVnaW4gZmFjdG9yeSAqKi9cbmltcG9ydCB7IGNyZWF0ZVN0YXRlUGx1Z2luIH0gZnJvbSBcInZ1ZS1hcHAtc3RhdGVcIjtcblxuLyoqXG4gKiBEZWZpbmUgeW91ciAyLXdheSwgMS13YXkgYW5kIDItd2F5IGFzeW5jIGJpbmRpbmdzXG4gKiBAdHlwZSB7e3R3b1dheTogc3RyaW5nW10sIG9uZVdheTogc3RyaW5nW10sIGRpc3BhdGNoaW5nOiBBcnJheX19XG4gKi9cbmNvbnN0IHN0YXRlQ29tcHV0ZXMgPSB7XG5cdHR3b1dheTogW1xuXHRcdCdpbmR1c3RyeScsXG5cdF0sXG5cdG9uZVdheTogW1xuXHRcdCdoaSdcblx0XSxcblx0ZGlzcGF0Y2hpbmc6IFtcblx0XVxufTtcblxuXG5jb25zdCBzdGF0ZVBsdWdpbiA9IGNyZWF0ZVN0YXRlUGx1Z2luKHN0YXRlQ29tcHV0ZXMpO1xuVnVlLnVzZSggc3RhdGVQbHVnaW4gKTtcblxuXG5jb25zdCBTVEFURSA9IHtcblx0aW5kdXN0cnk6ICdBcGV4Jyxcblx0aGk6ICdSb3knXG59O1xuXG5cblxuY29uc3Qgc3RvcmUgPSAgbmV3IFZ1ZXguU3RvcmUoe1xuXHRzdHJpY3Q6IGZhbHNlLFxuXHRwbHVnaW5zOiBbXSxcblx0bW9kdWxlczoge30sXG5cdHN0YXRlOiBTVEFURSxcblx0Z2V0dGVyczoge1xuXHRcdGluZHVzdHJ5OiBzdGF0ZSA9PiB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuZm9vO1xuXHRcdH0sXG5cdFx0YmFyOiBzdGF0ZSA9PiB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuYmFyO1xuXHRcdH1cblx0fSxcblx0bXV0YXRpb25zOiB7XG5cdFx0aW5kdXN0cnkoc3RhdGUsIHZhbHVlICl7XG5cdFx0XHRzdGF0ZS5pbmR1c3RyeSA9IHZhbHVlO1xuXHRcdH1cblx0fSxcblx0YWN0aW9uczoge31cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})