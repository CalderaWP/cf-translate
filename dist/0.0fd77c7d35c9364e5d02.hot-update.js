webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tsettings: function settings(state) {\n\t\tif (undefined === state.form.info) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.info[state.language];\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJzYXZpbmciLCJzaG93Q2hvb3NlciIsInNldHRpbmdzIiwiaW5mbyIsImZvbyJdLCJtYXBwaW5ncyI6Ijs7O0FBR08sSUFBTUEsVUFBVTtBQUN0QkMsVUFBVSx3QkFBUztBQUNsQixTQUFPQyxNQUFNQyxjQUFOLENBQXNCLFNBQXRCLEtBQXFDQyxhQUFhRixNQUFNRCxPQUF4RCxHQUFrRUMsTUFBTUQsT0FBeEUsR0FBa0YsS0FBekY7QUFDQSxFQUhxQjtBQUl0QkksVUFBVSx3QkFBUztBQUNsQixTQUFPSCxNQUFNRyxPQUFiO0FBQ0EsRUFOcUI7QUFPdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPSixNQUFNSSxJQUFiO0FBQ0EsRUFUcUI7QUFVdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT0wsTUFBTUssS0FBYjtBQUNBLEVBWnFCO0FBYXRCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT04sTUFBTU0sSUFBYjtBQUNBLEVBZnFCO0FBZ0J0QkMsU0FBUyx1QkFBUztBQUNqQixTQUFPUCxNQUFNTSxJQUFOLENBQVdFLEVBQWxCO0FBQ0EsRUFsQnFCO0FBbUJ0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPVCxNQUFNUyxLQUFiO0FBQ0EsRUFyQnFCO0FBc0J0QkMsWUFBWSwwQkFBUztBQUNwQixTQUFPVixNQUFNVSxTQUFiO0FBQ0EsRUF4QnFCO0FBeUJ0QkMsV0FBVyx5QkFBUztBQUNuQixTQUFPVCxhQUFhRixNQUFNVyxRQUFuQixHQUE4QlgsTUFBTVcsUUFBcEMsR0FBK0MsRUFBdEQ7QUFDQSxFQTNCcUI7QUE0QnRCQyxTQUFRLHVCQUFTO0FBQ2hCLE1BQUlWLGNBQWNGLE1BQU1ZLE1BQXhCLEVBQWdDO0FBQy9CLFVBQU8sRUFBUDtBQUNBO0FBQ0QsU0FBT1osTUFBTU0sSUFBTixDQUFXTSxNQUFYLENBQWtCWixNQUFNVyxRQUF4QixDQUFQO0FBQ0EsRUFqQ3FCO0FBa0N0QkUsUUFBTyxzQkFBUztBQUNmLE1BQUksb0JBQW9CYixNQUFNYSxLQUExQixDQUFKLEVBQXFDO0FBQ3BDLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU9iLE1BQU1hLEtBQWI7QUFDQSxFQXhDcUI7QUF5Q3RCQyxnQkFBZSw4QkFBUztBQUN2QixTQUFPZCxNQUFNYyxhQUFiO0FBRUEsRUE1Q3FCO0FBNkN0QkMsaUJBQWdCLCtCQUFTO0FBQ3hCLFNBQU9mLE1BQU1lLGNBQWI7QUFDQSxFQS9DcUI7QUFnRHRCQyxrQkFBaUIsZ0NBQVM7QUFDekIsTUFBSyxTQUFTaEIsTUFBTWdCLGVBQXBCLEVBQXNDO0FBQ3JDaEIsU0FBTWdCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTs7QUFFRCxTQUFPaEIsTUFBTWdCLGVBQWI7QUFDQSxFQXREcUI7QUF1RHRCQyxxQkFBb0IsbUNBQVM7QUFDNUIsTUFBSyxTQUFTakIsTUFBTWlCLGtCQUFwQixFQUF5QztBQUN4Q2pCLFNBQU1pQixrQkFBTixHQUEyQixLQUEzQjtBQUNBO0FBQ0QsU0FBT2pCLE1BQU1pQixrQkFBYjtBQUNBLEVBNURxQjtBQTZEdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT2xCLE1BQU1rQixNQUFiO0FBQ0EsRUEvRHFCO0FBZ0V0QkMsY0FBYSw0QkFBUztBQUNyQixTQUFPbkIsTUFBTW1CLFdBQWI7QUFDQSxFQWxFcUI7QUFtRXRCQyxXQUFVLHlCQUFTO0FBQ2xCLE1BQUlsQixjQUFjRixNQUFNTSxJQUFOLENBQVdlLElBQTdCLEVBQW1DO0FBQ2xDLFVBQU8sRUFBUDtBQUNBO0FBQ0QsU0FBT3JCLE1BQU1NLElBQU4sQ0FBV2UsSUFBWCxDQUFnQnJCLE1BQU1XLFFBQXRCLENBQVA7QUFDQSxFQXhFcUI7QUF5RXRCVyxNQUFLLG9CQUFTO0FBQ2IsU0FBT3RCLE1BQU1DLGNBQU4sQ0FBcUIsS0FBckIsSUFBK0JELE1BQU1zQixHQUFyQyxHQUEyQyxLQUFsRDtBQUNBO0FBM0VxQixDQUFoQiIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBHRVRURVJTID0ge1xuXHRmaWVsZElkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSggJ2ZpZWxkSWQnICkgJiYgdW5kZWZpbmVkICE9IHN0YXRlLmZpZWxkSWQgPyBzdGF0ZS5maWVsZElkIDogZmFsc2U7XG5cdH0sXG5cdHN0cmluZ3MgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnN0cmluZ3M7XG5cdH0sXG5cdGRhdGEgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGE7XG5cdH0sXG5cdGxvY2FsIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sb2NhbDtcblx0fSxcblx0Zm9ybSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybTtcblx0fSxcblx0Zm9ybUlkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLklEO1xuXHR9LFxuXHRmb3JtcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybXM7XG5cdH0sXG5cdGxhbmd1YWdlcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubGFuZ3VhZ2VzO1xuXHR9LFxuXHRsYW5ndWFnZSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkICE9IHN0YXRlLmxhbmd1YWdlID8gc3RhdGUubGFuZ3VhZ2UgOiAnJztcblx0fSxcblx0ZmllbGRzOiBzdGF0ZSA9PiB7XG5cdFx0aWYoIHVuZGVmaW5lZCA9PT0gc3RhdGUuZmllbGRzICl7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT0gdHlwZW9mICBzdGF0ZS5maWVsZCApe1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH0sXG5cdHNob3dGb3JtQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApIHtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlICkge1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2U7XG5cdH0sXG5cdHNhdmluZzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zYXZpbmc7XG5cdH0sXG5cdHNob3dDaG9vc2VyOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dDaG9vc2VyO1xuXHR9LFxuXHRzZXR0aW5nczogc3RhdGUgPT4ge1xuXHRcdGlmKCB1bmRlZmluZWQgPT09IHN0YXRlLmZvcm0uaW5mbyApe1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmluZm9bc3RhdGUubGFuZ3VhZ2VdO1xuXHR9LFxuXHRmb286IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoJ2ZvbycgKSA/IHN0YXRlLmZvbyA6ICdvb2YnO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL2dldHRlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})