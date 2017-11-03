webpackHotUpdate(0,{

/***/ 45:
/* exports provided: ACTIONS */
/* exports used: ACTIONS */
/*!*********************************!*\
  !*** ./client/store/actions.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(/*! axios */ 25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_polyfill__ = __webpack_require__(/*! ../promise-polyfill */ 44);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ACTIONS; });\n\n\n\nvar timeout = 30000;\n\nvar localAPI = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({\n\tbaseURL: CF_TRANS_ADMIN.data.api.root,\n\ttimeout: timeout,\n\theaders: { 'X-WP-Nonce': CF_TRANS_ADMIN.data.rest_nonce }\n});\n\nvar _forms = {};\nvar saveForm = function saveForm(ID, r, context) {\n\t_forms[ID] = r.data.form;\n\tcontext.commit('formName', r.data.form.name);\n\tcontext.commit('form', r.data.form);\n};\nvar ACTIONS = {\n\taddLanguage: function addLanguage(context, payload) {\n\t\treturn localAPI.post('/language', {\n\t\t\tform_id: payload.form,\n\t\t\tlanguage: payload.language\n\n\t\t}).then(function (r) {\n\t\t\treturn saveForm(payload.form, r, context);\n\t\t}).catch(function (error) {\n\t\t\treturn error;\n\t\t});\n\t},\n\tform: function form(context, ID) {\n\t\tif (!_forms.hasOwnProperty(ID)) {\n\t\t\tlocalAPI.get('/form', {\n\t\t\t\tparams: {\n\t\t\t\t\tform_id: ID\n\t\t\t\t}\n\t\t\t}).then(function (r) {\n\t\t\t\tcontext.commit('notSaving', false);\n\t\t\t\tsaveForm(ID, r, context);\n\t\t\t}).catch(function (error) {\n\t\t\t\tconsole.log(error);\n\t\t\t});\n\t\t} else {\n\t\t\tcontext.commit('form', _forms[ID]);\n\t\t}\n\t},\n\tsave: function save(context) {\n\t\tvar data = {\n\t\t\tform_id: context.getters.formId,\n\t\t\tlanguage: context.getters.language,\n\t\t\tfields: context.getters.fields,\n\t\t\tform_info: context.getters.formInfo\n\t\t};\n\t\treturn localAPI.post('/', data).then(function (r) {\n\t\t\tconsole.log(r.data);\n\t\t}).catch(function (error) {\n\t\t\treturn error;\n\t\t});\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInRpbWVvdXQiLCJsb2NhbEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkNGX1RSQU5TX0FETUlOIiwiZGF0YSIsImFwaSIsInJvb3QiLCJoZWFkZXJzIiwicmVzdF9ub25jZSIsIl9mb3JtcyIsInNhdmVGb3JtIiwiSUQiLCJyIiwiY29udGV4dCIsImZvcm0iLCJjb21taXQiLCJuYW1lIiwiQUNUSU9OUyIsImFkZExhbmd1YWdlIiwicGF5bG9hZCIsInBvc3QiLCJmb3JtX2lkIiwibGFuZ3VhZ2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImhhc093blByb3BlcnR5IiwiZ2V0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInNhdmUiLCJnZXR0ZXJzIiwiZm9ybUlkIiwiZmllbGRzIiwiZm9ybV9pbmZvIiwiZm9ybUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsS0FBaEI7O0FBRUEsSUFBTUMsV0FBWSw2Q0FBQUMsQ0FBTUMsTUFBTixDQUFhO0FBQzlCQyxVQUFTQyxlQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QkMsSUFESDtBQUU5QlIsVUFBU0EsT0FGcUI7QUFHOUJTLFVBQVMsRUFBQyxjQUFjSixlQUFlQyxJQUFmLENBQW9CSSxVQUFuQztBQUhxQixDQUFiLENBQWxCOztBQVFBLElBQUlDLFNBQVMsRUFBYjtBQUNBLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFVQyxFQUFWLEVBQWNDLENBQWQsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ3hDSixRQUFPRSxFQUFQLElBQWFDLEVBQUVSLElBQUYsQ0FBT1UsSUFBcEI7QUFDQUQsU0FBUUUsTUFBUixDQUFnQixVQUFoQixFQUE0QkgsRUFBRVIsSUFBRixDQUFPVSxJQUFQLENBQVlFLElBQXhDO0FBQ0FILFNBQVFFLE1BQVIsQ0FBZSxNQUFmLEVBQXVCSCxFQUFFUixJQUFGLENBQU9VLElBQTlCO0FBQ0EsQ0FKRDtBQUtPLElBQU1HLFVBQVU7QUFDdEJDLFlBRHNCLHVCQUNWTCxPQURVLEVBQ0RNLE9BREMsRUFDUTtBQUM3QixTQUFPcEIsU0FBU3FCLElBQVQsQ0FBYyxXQUFkLEVBQTJCO0FBQ2pDQyxZQUFTRixRQUFRTCxJQURnQjtBQUVqQ1EsYUFBVUgsUUFBUUc7O0FBRmUsR0FBM0IsRUFLTEMsSUFMSyxDQUtBLGFBQU07QUFDWCxVQUFPYixTQUFTUyxRQUFRTCxJQUFqQixFQUF1QkYsQ0FBdkIsRUFBMEJDLE9BQTFCLENBQVA7QUFDQSxHQVBLLEVBUUxXLEtBUkssQ0FRRSxpQkFBUztBQUNoQixVQUFPQyxLQUFQO0FBQ0EsR0FWSyxDQUFQO0FBV0EsRUFicUI7QUFjdEJYLEtBZHNCLGdCQWNqQkQsT0FkaUIsRUFjUkYsRUFkUSxFQWNMO0FBQ2hCLE1BQUksQ0FBRUYsT0FBT2lCLGNBQVAsQ0FBc0JmLEVBQXRCLENBQU4sRUFBaUM7QUFDaENaLFlBQVM0QixHQUFULENBQWEsT0FBYixFQUFzQjtBQUNyQkMsWUFBUTtBQUNQUCxjQUFTVjtBQURGO0FBRGEsSUFBdEIsRUFLQ1ksSUFMRCxDQUtNLGFBQU07QUFDWFYsWUFBUUUsTUFBUixDQUFlLFdBQWYsRUFBNEIsS0FBNUI7QUFDQUwsYUFBU0MsRUFBVCxFQUFhQyxDQUFiLEVBQWdCQyxPQUFoQjtBQUNBLElBUkQsRUFTQ1csS0FURCxDQVNRLGlCQUFTO0FBQ2hCSyxZQUFRQyxHQUFSLENBQVlMLEtBQVo7QUFDQSxJQVhEO0FBYUEsR0FkRCxNQWNLO0FBQ0paLFdBQVFFLE1BQVIsQ0FBZ0IsTUFBaEIsRUFBd0JOLE9BQU9FLEVBQVAsQ0FBeEI7QUFDQTtBQUVELEVBakNxQjtBQWtDdEJvQixLQWxDc0IsZ0JBa0NoQmxCLE9BbENnQixFQWtDUDtBQUNkLE1BQUlULE9BQU87QUFDVmlCLFlBQVNSLFFBQVFtQixPQUFSLENBQWdCQyxNQURmO0FBRVZYLGFBQVVULFFBQVFtQixPQUFSLENBQWdCVixRQUZoQjtBQUdWWSxXQUFRckIsUUFBUW1CLE9BQVIsQ0FBZ0JFLE1BSGQ7QUFJVkMsY0FBV3RCLFFBQVFtQixPQUFSLENBQWdCSTtBQUpqQixHQUFYO0FBTUEsU0FBT3JDLFNBQVNxQixJQUFULENBQWMsR0FBZCxFQUFtQmhCLElBQW5CLEVBQ0xtQixJQURLLENBQ0EsYUFBTTtBQUNYTSxXQUFRQyxHQUFSLENBQVlsQixFQUFFUixJQUFkO0FBQ0EsR0FISyxFQUlMb0IsS0FKSyxDQUlFLGlCQUFTO0FBQ2hCLFVBQU9DLEtBQVA7QUFDQSxHQU5LLENBQVA7QUFPQTtBQWhEcUIsQ0FBaEIiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9wcm9taXNlLXBvbHlmaWxsJztcbmNvbnN0IHRpbWVvdXQgPSAzMDAwMDtcblxuY29uc3QgbG9jYWxBUEkgID0gYXhpb3MuY3JlYXRlKHtcblx0YmFzZVVSTDogQ0ZfVFJBTlNfQURNSU4uZGF0YS5hcGkucm9vdCxcblx0dGltZW91dDogdGltZW91dCxcblx0aGVhZGVyczogeydYLVdQLU5vbmNlJzogQ0ZfVFJBTlNfQURNSU4uZGF0YS5yZXN0X25vbmNlfVxufSk7XG5cblxuXG52YXIgX2Zvcm1zID0ge307XG52YXIgc2F2ZUZvcm0gPSBmdW5jdGlvbiAoSUQsIHIsIGNvbnRleHQpIHtcblx0X2Zvcm1zW0lEXSA9IHIuZGF0YS5mb3JtO1xuXHRjb250ZXh0LmNvbW1pdCggJ2Zvcm1OYW1lJywgci5kYXRhLmZvcm0ubmFtZSApO1xuXHRjb250ZXh0LmNvbW1pdCgnZm9ybScsIHIuZGF0YS5mb3JtKTtcbn07XG5leHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcblx0YWRkTGFuZ3VhZ2UoY29udGV4dCwgcGF5bG9hZCApe1xuXHRcdHJldHVybiBsb2NhbEFQSS5wb3N0KCcvbGFuZ3VhZ2UnLCB7XG5cdFx0XHRmb3JtX2lkOiBwYXlsb2FkLmZvcm0sXG5cdFx0XHRsYW5ndWFnZTogcGF5bG9hZC5sYW5ndWFnZVxuXG5cdFx0fSlcblx0XHRcdC50aGVuKHIgPT4gIHtcblx0XHRcdFx0cmV0dXJuIHNhdmVGb3JtKHBheWxvYWQuZm9ybSwgciwgY29udGV4dCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnJvciA9PiB7XG5cdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdH0pO1xuXHR9LFxuXHRmb3JtKGNvbnRleHQsIElEKXtcblx0XHRpZiggISBfZm9ybXMuaGFzT3duUHJvcGVydHkoSUQpICl7XG5cdFx0XHRsb2NhbEFQSS5nZXQoJy9mb3JtJywge1xuXHRcdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0XHRmb3JtX2lkOiBJRFxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4ociA9PiAge1xuXHRcdFx0XHRjb250ZXh0LmNvbW1pdCgnbm90U2F2aW5nJywgZmFsc2UgKTtcblx0XHRcdFx0c2F2ZUZvcm0oSUQsIHIsIGNvbnRleHQpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblxuXHRcdH1lbHNle1xuXHRcdFx0Y29udGV4dC5jb21taXQoICdmb3JtJywgX2Zvcm1zW0lEXSApO1xuXHRcdH1cblxuXHR9LFxuXHRzYXZlIChjb250ZXh0KSB7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRmb3JtX2lkOiBjb250ZXh0LmdldHRlcnMuZm9ybUlkLFxuXHRcdFx0bGFuZ3VhZ2U6IGNvbnRleHQuZ2V0dGVycy5sYW5ndWFnZSxcblx0XHRcdGZpZWxkczogY29udGV4dC5nZXR0ZXJzLmZpZWxkcyxcblx0XHRcdGZvcm1faW5mbzogY29udGV4dC5nZXR0ZXJzLmZvcm1JbmZvXG5cdFx0fTtcblx0XHRyZXR1cm4gbG9jYWxBUEkucG9zdCgnLycsIGRhdGEpXG5cdFx0XHQudGhlbihyID0+ICB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHIuZGF0YSApO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9KTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})