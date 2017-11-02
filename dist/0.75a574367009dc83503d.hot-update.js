webpackHotUpdate(0,{

/***/ 47:
/* exports provided: languagesState */
/*!****************************************************!*\
  !*** ./client/components/states/languagesState.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stateFactory__ = __webpack_require__(/*! ./stateFactory */ 2);\n/* unused harmony export languagesState */\n\n\nvar languagesState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stateFactory__[\"a\" /* stateFactory */])('languages');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9sYW5ndWFnZXNTdGF0ZS5qcyJdLCJuYW1lcyI6WyJsYW5ndWFnZXNTdGF0ZSIsInN0YXRlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFTyxJQUFNQSxpQkFBaUIsMEZBQUFDLENBQWMsV0FBZCxDQUF2QiIsImZpbGUiOiI0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXRlRmFjdG9yeSB9IGZyb20gJy4vc3RhdGVGYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlc1N0YXRlID0gc3RhdGVGYWN0b3J5KCAnbGFuZ3VhZ2VzJyApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RhdGVzL2xhbmd1YWdlc1N0YXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 55:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/langChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formLanguagesState__ = __webpack_require__(/*! ./states/formLanguagesState */ 45);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_languagesState__ = __webpack_require__(/*! ./states/languagesState */ 47);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_languageState__ = __webpack_require__(/*! ./states/languageState */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 19);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\t//labelText: this.$store.getters.strings.choose_lang,\n\t\t\tlabelText: 'Choose Lanaugage',\n\t\t\tlabelTextAdd: 'ADD Lanaugage',\n\t\t\tlangToAdd: 'false'\n\t\t};\n\t},\n\n\n\tcomputed: {\n\t\tformLanguages: __WEBPACK_IMPORTED_MODULE_0__states_formLanguagesState__[\"a\" /* formLanguagesState */],\n\t\tlanguage: __WEBPACK_IMPORTED_MODULE_2__states_languageState__[\"a\" /* languageState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tshowLanguageChoice: __WEBPACK_IMPORTED_MODULE_4__states_showLanguageChoiceState__[\"a\" /* showLanguageChoiceState */],\n\t\tstrings: function strings() {\n\t\t\treturn this.$store.getters.strings;\n\t\t}\n\t},\n\twatch: {\n\t\tlanguage: function language(val) {\n\t\t\tthis.$store.commit('showLanguageChoice');\n\t\t}\n\t},\n\tmethods: {\n\t\taddLang: function addLang(ev) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('addLanguage', {\n\t\t\t\tlanguage: this.langToAdd,\n\t\t\t\tform: this.form.ID\n\t\t\t}).then(function (r) {\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.formLanguages = _this.form.languages_named;\n\t\t\t\t_this.$store.commit('language', _this.langToAdd);\n\t\t\t\t_this.langToAdd = 'false';\n\t\t\t});\n\t\t},\n\t\tlanguageSelected: function languageSelected() {\n\t\t\tthis.$store.commit('showAddLanguage', false);\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2xhbmdDaG9vc2VyLnZ1ZT80ZTM1Njk1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OERBRUE7dUJBRUE7O0FBRUE7Y0FDQTtpQkFDQTtjQUVBO0FBTEE7QUFPQTs7OztpQkFFQTtZQUNBO21CQUNBO3NCQUNBOzhCQUNBOzhCQUNBO0FBRUE7QUFSQTs7bUNBVUE7c0JBQ0E7QUFFQTtBQUpBOzs7QUFNQTs7O21CQUVBO29CQUNBO0FBRkEsd0JBR0E7d0JBQ0E7cUNBQ0E7MENBQ0E7c0JBQ0E7QUFDQTtBQUNBO2dEQUNBO3lDQUNBO0FBRUE7QUFmQTtBQXhCQSIsImZpbGUiOiI1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuXHQ8ZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJzaG93TGFuZ3VhZ2VDaG9pY2VcIlxuXHRcdFx0Y2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG5cdFx0PlxuXHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiPlxuXHRcdFx0XHR7e3N0cmluZ3MuY2hvb3NlX2xhbmd9fVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJsYW5ndWFnZVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImxhbmd1YWdlU2VsZWN0ZWRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbj48L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHR2LWZvcj1cImxhbmd1YWdlIGluIGZvcm1MYW5ndWFnZXNcIlxuXHRcdFx0XHRcdFx0di1iaW5kOnZhbHVlPVwibGFuZ3VhZ2UuY29kZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3tsYW5ndWFnZS5uYW1lfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IHYtaWY9XCJzaG93QWRkTGFuZ3VhZ2VcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlc1wiPlxuXHRcdFx0XHRcdHt7c3RyaW5ncy5hZGRfbGFuZ319XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJsYW5nVG9BZGRcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZXNcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJsYW5ndWFnZSBpbiBsYW5ndWFnZXNcIlxuXHRcdFx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImxhbmd1YWdlLmNvZGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIiB2LWlmPVwiJ2ZhbHNlJyAhPSBsYW5nVG9BZGRcIj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJhZGRMYW5nXCIgY2xhc3M9XCJidXR0b25cIj5cblx0XHRcdFx0XHR7e3N0cmluZ3MuYWRkX2xhbmdfcX19XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5cdGltcG9ydCB7IGZvcm1MYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1MYW5ndWFnZXNTdGF0ZSc7XG5cdGltcG9ydCB7IGxhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvbGFuZ3VhZ2VzU3RhdGUnO1xuXHRpbXBvcnQgeyBsYW5ndWFnZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvbGFuZ3VhZ2VTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dBZGRMYW5ndWFnZVN0YXRlIH0gZnJvbSAgJy4vc3RhdGVzL3Nob3dBZGRMYW5ndWFnZVN0YXRlJztcblx0aW1wb3J0IHsgc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUgfSBmcm9tICAnLi9zdGF0ZXMvc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUnO1xuXG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MuY2hvb3NlX2xhbmcsXG5cdFx0XHRcdGxhYmVsVGV4dDogJ0Nob29zZSBMYW5hdWdhZ2UnLFxuXHRcdFx0XHRsYWJlbFRleHRBZGQ6ICdBREQgTGFuYXVnYWdlJyxcblx0XHRcdFx0bGFuZ1RvQWRkOiAnZmFsc2UnLFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Zm9ybUxhbmd1YWdlczogZm9ybUxhbmd1YWdlc1N0YXRlLFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlU3RhdGUsXG5cdFx0XHRzaG93QWRkTGFuZ3VhZ2U6IHNob3dBZGRMYW5ndWFnZVN0YXRlLFxuXHRcdFx0c2hvd0xhbmd1YWdlQ2hvaWNlOiBzaG93TGFuZ3VhZ2VDaG9pY2VTdGF0ZSxcblx0XHRcdHN0cmluZ3MgKCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3Ncblx0XHRcdH1cblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsYW5ndWFnZSh2YWwpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhZGRMYW5nKGV2KXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goICdhZGRMYW5ndWFnZScsIHtcblx0XHRcdFx0XHRsYW5ndWFnZTogdGhpcy5sYW5nVG9BZGQsXG5cdFx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLklEXG5cdFx0XHRcdH0pLnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLmZvcm1MYW5ndWFnZXMgPSB0aGlzLmZvcm0ubGFuZ3VhZ2VzX25hbWVkO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ2xhbmd1YWdlJywgdGhpcy5sYW5nVG9BZGQgKTtcblx0XHRcdFx0XHR0aGlzLmxhbmdUb0FkZCA9ICdmYWxzZSc7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0bGFuZ3VhZ2VTZWxlY3RlZCgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmdDaG9vc2VyLnZ1ZT80ZTM1Njk1OCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 77:
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./client/plugins/state/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories__ = __webpack_require__(/*! ./factories */ 78);\n\n\nvar factories = {\n\ttwoWay: {},\n\tdispatching: {},\n\toneWay: {}\n\n};\n\nvar factoryFactory = function factoryFactory(type) {\n\treturn function (prop) {\n\t\tif (!factories[type].hasOwnProperty(prop)) {\n\t\t\tfactories[type][prop] = new __WEBPACK_IMPORTED_MODULE_0__factories__[\"a\" /* StateFactory */](prop);\n\t\t}\n\t\treturn factories[type][prop];\n\t};\n};\n\nvar twoWayFactory = factoryFactory('twoWay');\n\nvar computed = {};\n\nvar stateComputes = {\n\ttwoWay: ['foo', 'fieldId', 'language', 'forms', 'saving', 'showAddLanguage', 'languages', 'showLanguageChoice'],\n\toneWay: ['field'],\n\tdispatching: ['form']\n};\n\nstateComputes.twoWay.forEach(function (key, i) {\n\tcomputed[key] = twoWayFactory(key, key);\n});\n\nvar statePlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: computed\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = statePlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcmllcyIsInR3b1dheSIsImRpc3BhdGNoaW5nIiwib25lV2F5IiwiZmFjdG9yeUZhY3RvcnkiLCJ0eXBlIiwicHJvcCIsImhhc093blByb3BlcnR5IiwidHdvV2F5RmFjdG9yeSIsImNvbXB1dGVkIiwic3RhdGVDb21wdXRlcyIsImZvckVhY2giLCJrZXkiLCJpIiwic3RhdGVQbHVnaW4iLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsIm1peGluIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBTUEsSUFBSUEsWUFBWTtBQUNmQyxTQUFRLEVBRE87QUFFZkMsY0FBYSxFQUZFO0FBR2ZDLFNBQVE7O0FBSE8sQ0FBaEI7O0FBT0EsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFFQyxJQUFGLEVBQVk7QUFDbEMsUUFBTyxVQUFFQyxJQUFGLEVBQVk7QUFDbEIsTUFBSyxDQUFFTixVQUFXSyxJQUFYLEVBQWtCRSxjQUFsQixDQUFrQ0QsSUFBbEMsQ0FBUCxFQUFrRDtBQUNqRE4sYUFBV0ssSUFBWCxFQUFrQkMsSUFBbEIsSUFBMEIsSUFBSSxnRUFBSixDQUFpQkEsSUFBakIsQ0FBMUI7QUFDQTtBQUNELFNBQU9OLFVBQVdLLElBQVgsRUFBa0JDLElBQWxCLENBQVA7QUFDQSxFQUxEO0FBTUEsQ0FQRDs7QUFVQSxJQUFNRSxnQkFBZ0JKLGVBQWdCLFFBQWhCLENBQXRCOztBQUVBLElBQUlLLFdBQVcsRUFBZjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDckJULFNBQVEsQ0FDUCxLQURPLEVBRVAsU0FGTyxFQUdQLFVBSE8sRUFJUCxPQUpPLEVBS1AsUUFMTyxFQU1QLGlCQU5PLEVBT1AsV0FQTyxFQVFQLG9CQVJPLENBRGE7QUFXckJFLFNBQVEsQ0FDUCxPQURPLENBWGE7QUFjckJELGNBQWEsQ0FDWixNQURZO0FBZFEsQ0FBdEI7O0FBbUJBUSxjQUFjVCxNQUFkLENBQXFCVSxPQUFyQixDQUE4QixVQUFDQyxHQUFELEVBQUtDLENBQUwsRUFBVztBQUN4Q0osVUFBU0csR0FBVCxJQUFnQkosY0FBZUksR0FBZixFQUFvQkEsR0FBcEIsQ0FBaEI7QUFDQSxDQUZEOztBQUlBLElBQU1FLGNBQWM7QUFDbkJDLFFBRG1CLG1CQUNYQyxHQURXLEVBQ05DLE9BRE0sRUFDRztBQUNyQkQsTUFBSUUsS0FBSixDQUFVO0FBQ1RULGFBQVVBO0FBREQsR0FBVjtBQUdBO0FBTGtCLENBQXBCOztBQVFBLHdEQUFlSyxXQUFmIiwiZmlsZSI6Ijc3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7XG5cdFN0YXRlRmFjdG9yeSxcblx0U3RhdGVGYWN0b3J5UmVhZE9ubHksXG5cdFN0YXRlRmFjdG9yeURpc3BhdGNoaW5nXG59IGZyb20gJy4vZmFjdG9yaWVzJztcblxubGV0IGZhY3RvcmllcyA9IHtcblx0dHdvV2F5OiB7fSxcblx0ZGlzcGF0Y2hpbmc6IHt9LFxuXHRvbmVXYXk6IHt9LFxuXG59O1xuXG5jb25zdCBmYWN0b3J5RmFjdG9yeSA9ICggdHlwZSApID0+IHtcblx0cmV0dXJuICggcHJvcCApID0+IHtcblx0XHRpZiAoICEgZmFjdG9yaWVzWyB0eXBlIF0uaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcblx0XHRcdGZhY3Rvcmllc1sgdHlwZSBdW3Byb3BdID0gbmV3IFN0YXRlRmFjdG9yeShwcm9wKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhY3Rvcmllc1sgdHlwZSBdW3Byb3BdXG5cdH07XG59O1xuXG5cbmNvbnN0IHR3b1dheUZhY3RvcnkgPSBmYWN0b3J5RmFjdG9yeSggJ3R3b1dheScgKTtcblxubGV0IGNvbXB1dGVkID0ge307XG5cbmNvbnN0IHN0YXRlQ29tcHV0ZXMgPSB7XG5cdHR3b1dheTogW1xuXHRcdCdmb28nLFxuXHRcdCdmaWVsZElkJyxcblx0XHQnbGFuZ3VhZ2UnLFxuXHRcdCdmb3JtcycsXG5cdFx0J3NhdmluZycsXG5cdFx0J3Nob3dBZGRMYW5ndWFnZScsXG5cdFx0J2xhbmd1YWdlcycsXG5cdFx0J3Nob3dMYW5ndWFnZUNob2ljZSdcblx0XSxcblx0b25lV2F5OiBbXG5cdFx0J2ZpZWxkJ1xuXHRdLFxuXHRkaXNwYXRjaGluZzogW1xuXHRcdCdmb3JtJ1xuXHRdXG59O1xuXG5zdGF0ZUNvbXB1dGVzLnR3b1dheS5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IHR3b1dheUZhY3RvcnkoIGtleSwga2V5ICk7XG59KTtcblxuY29uc3Qgc3RhdGVQbHVnaW4gPSB7XG5cdGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG5cdFx0VnVlLm1peGluKHtcblx0XHRcdGNvbXB1dGVkOiBjb21wdXRlZFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZVBsdWdpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGx1Z2lucy9zdGF0ZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})