const stateComputes = {
	twoWay: [
		'foo',
		'fieldId',
		'language',
		'forms',
		'saving',
		'showAddLanguage',
		'languages',
		'showLanguageChoice',
		'formLanguages',
		'showChooser',
		'formInfo'
	],
	oneWay: [
		'field'
	],
	dispatching: [
		'form',
	]
};

import { createStatePlugin } from "vue-app-state";

const statePlugin = createStatePlugin(stateComputes);
export default statePlugin;