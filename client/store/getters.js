


export const GETTERS = {
	fieldId : state => {
		return state.hasOwnProperty( 'fieldId' ) && undefined != state.fieldId ? state.fieldId : false;
	},
	strings : state => {
		return state.strings;
	},
	data : state => {
		return state.data;
	},
	local : state => {
		return state.local;
	},
	form : state => {
		return state.form;
	},
	formId : state => {
		return state.form.ID;
	},
	forms : state => {
		return state.forms;
	},
	languages : state => {
		return state.languages;
	},
	language : state => {
		return undefined != state.language ? state.language : '';
	},
	fields: state => {
		if( undefined === state.fields ){
			return {}
		}
		return state.form.fields[state.language];
	},
	field: state => {
		if( 'object' != typeof  state.field ){
			return {};
		}

		return state.field;
	},
	formLanguages: state => {
		return state.formLanguages;

	},
	showFormChoice: state => {
		return state.showFormChoice;
	},
	showAddLanguage: state => {
		if(  null !== state.showAddLanguage ) {
			state.showAddLanguage = false;
		}

		return state.showAddLanguage;
	},
	showLanguageChoice: state => {
		if(  null !== state.showLanguageChoice ) {
			state.showLanguageChoice = false;
		}
		return state.showLanguageChoice;
	},
	saving: state => {
		return state.saving;
	},
	showChooser: state => {
		return state.showChooser;
	},
	formInfo: state => {

		if( undefined === state.form.info ){
			return {}
		}
		return (state.form.info.hasOwnProperty( state.language ))
			?  state.form.info[state.language]
			: state.form.hasOwnProperty( 'info' )
				? state.form.info
				: { success: '', name: '' }
	},
	foo: state => {
		return state.hasOwnProperty('foo' ) ? state.foo : 'oof';
	}
};
