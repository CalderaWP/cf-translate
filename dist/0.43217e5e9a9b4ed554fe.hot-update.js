webpackHotUpdate(0,{

/***/ 47:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' === typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID !== value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\n\t\tstate.formName = state.form.name;\n\t},\n\tformName: function formName(state, value) {\n\t\tstate.formName = value;\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.field = value;\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t},\n\tfieldOpt: function fieldOpt(state, opt) {\n\t\tstate.field.option[opt.opt] = opt.value;\n\t\tstate.form.fields[state.language][state.fieldId] = state.field;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\tif (null === state.showFormChoice) {\n\t\t\tstate.showFormChoice = true;\n\t\t} else {\n\t\t\tstate.showFormChoice = !state.showFormChoice;\n\t\t}\n\t},\n\tshowAddLanguage: function showAddLanguage(state, value) {\n\t\tif (null === state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\tif (undefined == value) {\n\t\t\tstate.showAddLanguage = !state.showAddLanguage;\n\t\t} else {\n\t\t\tstate.showAddLanguage = value;\n\t\t}\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state, value) {\n\t\tif (null === state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\n\t\tif (undefined == value) {\n\t\t\tstate.showLanguageChoice = !state.showLanguageChoice;\n\t\t} else {\n\t\t\tstate.showLanguageChoice = value;\n\t\t}\n\t},\n\tsaving: function saving(state) {\n\t\tif (null === state.saving) {\n\t\t\tstate.saving = true;\n\t\t} else {\n\t\t\tstate.saving = !state.saving;\n\t\t}\n\t},\n\tisSaving: function isSaving(state) {\n\t\tstate.saving = true;\n\t},\n\tnotSaving: function notSaving(state) {\n\t\tstate.saving = false;\n\t},\n\tshowChooser: function showChooser(state, value) {\n\t\tstate.showChooser = value;\n\t},\n\tformInfo: function formInfo(state, value) {\n\t\tstate.form.info[state.language] = value;\n\t},\n\tfoo: function foo(state, value) {\n\t\tstate.foo = value;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImZvcm1OYW1lIiwibmFtZSIsImZpZWxkVmFsdWUiLCJmaWVsZE9wdCIsIm9wdCIsIm9wdGlvbiIsInNob3dGb3JtQ2hvaWNlIiwic2hvd0FkZExhbmd1YWdlIiwidW5kZWZpbmVkIiwic2hvd0xhbmd1YWdlQ2hvaWNlIiwic2F2aW5nIiwiaXNTYXZpbmciLCJub3RTYXZpbmciLCJzaG93Q2hvb3NlciIsImZvcm1JbmZvIiwiaW5mbyIsImZvbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLEtBQVYsRUFBaUI7QUFDdEMsUUFBT0EsTUFBTUMsT0FBTixJQUFpQkQsTUFBTUUsUUFBdkIsR0FBa0NGLE1BQU1HLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkosTUFBTUUsUUFBeEIsRUFBa0NGLE1BQU1DLE9BQXhDLENBQWxDLEdBQXFGLEVBQTVGO0FBQ0EsQ0FGRDs7QUFJTyxJQUFNSSxZQUFZO0FBQ3hCRixLQUR3QixnQkFDbkJILEtBRG1CLEVBQ2JNLEtBRGEsRUFDUDtBQUNoQixNQUFJLGFBQWEsT0FBUUEsS0FBekIsRUFBZ0M7QUFDL0JBLFdBQVE7QUFDUEMsUUFBSUQ7QUFERyxJQUFSO0FBR0E7QUFDRCxNQUFJTixNQUFNRyxJQUFOLENBQVdJLEVBQVgsS0FBa0JELE1BQU1DLEVBQTVCLEVBQWdDO0FBQy9CUCxTQUFNRSxRQUFOLEdBQWlCLEVB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QVl4QixLQUFaO0FBQ0E7QUFsR3VCLENBQWxCIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWF5YmVTZXRGaWVsZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xufTtcblxuZXhwb3J0IGNvbnN0IE1VVEFUSU9OUyA9IHtcblx0Zm9ybShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoICdzdHJpbmcnID09PSB0eXBlb2YgIHZhbHVlICl7XG5cdFx0XHR2YWx1ZSA9IHtcblx0XHRcdFx0SUQ6IHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiggc3RhdGUuZm9ybS5JRCAhPT0gdmFsdWUuSUQgKXtcblx0XHRcdHN0YXRlLmxhbmd1YWdlID0gJyc7XG5cdFx0XHRzdGF0ZS5maWVsZElkID0gJyc7XG5cdFx0XHRzdGF0ZS5maWVsZCA9IHt9O1xuXHRcdH1cblxuXHRcdHN0YXRlLmZvcm0gPSBPYmplY3QuYXNzaWduKHN0YXRlLmZvcm0sdmFsdWUpO1xuXHRcdGlmKCBzdGF0ZS5mb3JtLmhhc093blByb3BlcnR5KCAnbGFuZ3VhZ2VzX25hbWVkJyApICl7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0gc3RhdGUuZm9ybS5sYW5ndWFnZXNfbmFtZWQ7XG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0ge307XG5cdFx0fVxuXG5cdFx0c3RhdGUuZm9ybU5hbWUgPSBzdGF0ZS5mb3JtLm5hbWU7XG5cdH0sXG5cdGZvcm1OYW1lKCBzdGF0ZSx2YWx1ZSApIHsgc3RhdGUuZm9ybU5hbWUgPSB2YWx1ZSB9LFxuXHRmb3JtTGFuZ3VhZ2VzKHN0YXRlLHZhbHVlICl7IHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB2YWx1ZSB9LFxuXHRsYW5ndWFnZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUubGFuZ3VhZ2UgPSB2YWx1ZTtcblx0XHRzdGF0ZS5maWVsZCA9IHt9O1xuXHRcdHN0YXRlLmZpZWxkSWQgPSAnJztcblx0XHRzdGF0ZS5maWVsZHMgPSBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZpZWxkSWQoc3RhdGUsIHZhbHVlKXtcblx0XHRzdGF0ZS5maWVsZElkID0gdmFsdWU7XG5cdFx0c3RhdGUuZmllbGQgPSBzdGF0ZS5maWVsZElkICYmIHN0YXRlLmxhbmd1YWdlID8gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdIDoge307XG5cblx0fSxcblx0ZmllbGRWYWx1ZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGQgPSB2YWx1ZTtcblx0XHRzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gPSB2YWx1ZTtcblxuXHR9LFxuXHRmaWVsZE9wdChzdGF0ZSxvcHQpe1xuXHRcdHN0YXRlLmZpZWxkLm9wdGlvbltvcHQub3B0XSA9IG9wdC52YWx1ZTtcblx0XHRzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gPSBzdGF0ZS5maWVsZDtcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZShzdGF0ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNob3dGb3JtQ2hvaWNlICl7XG5cdFx0XHRzdGF0ZS5zaG93Rm9ybUNob2ljZSA9IHRydWU7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dGb3JtQ2hvaWNlID0gISBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0XHR9XG5cdH0sXG5cdHNob3dBZGRMYW5ndWFnZShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApe1xuXHRcdFx0c3RhdGUuc2hvd0FkZExhbmd1YWdlID0gZmFsc2U7XG5cblx0XHR9XG5cblx0XHRpZiggdW5kZWZpbmVkID09IHZhbHVlICl7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSAhIHN0YXRlLnNob3dBZGRMYW5ndWFnZTtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IHZhbHVlO1xuXHRcdH1cblx0fSxcblx0c2hvd0xhbmd1YWdlQ2hvaWNlKHN0YXRlLHZhbHVlKXtcblx0XHRpZiggbnVsbCA9PT0gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlICl7XG5cdFx0XHRzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdW5kZWZpbmVkID09IHZhbHVlICl7XG5cdFx0XHRzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgPSAhIHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZTtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IHZhbHVlO1xuXHRcdH1cblx0fSxcblx0c2F2aW5nKHN0YXRlKXtcblx0XHRpZiggbnVsbCA9PT0gc3RhdGUuc2F2aW5nICl7XG5cdFx0XHRzdGF0ZS5zYXZpbmcgPSB0cnVlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zYXZpbmcgPSAhIHN0YXRlLnNhdmluZztcblx0XHR9XG5cdH0sXG5cdGlzU2F2aW5nKHN0YXRlKXtcblx0XHRzdGF0ZS5zYXZpbmcgPSB0cnVlO1xuXHR9LFxuXHRub3RTYXZpbmcoc3RhdGUpe1xuXHRcdHN0YXRlLnNhdmluZyA9IGZhbHNlO1xuXHR9LFxuXHRzaG93Q2hvb3NlcihzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUuc2hvd0Nob29zZXIgPSB2YWx1ZTtcblx0fSxcblx0Zm9ybUluZm8oIHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5mb3JtLmluZm9bc3RhdGUubGFuZ3VhZ2VdID0gdmFsdWU7XG5cdH0sXG5cdGZvbyhzdGF0ZSwgdmFsdWUgKXtcblx0XHRzdGF0ZS5mb28gPSB2YWx1ZTtcblx0fVxuXG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})