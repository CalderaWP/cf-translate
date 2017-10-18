import Vue from 'vue'
import SettingsView from  './views/Settings.vue';

import Promise from 'promise-polyfill';
import store from  './store/index';


[ 'update-nag', 'notice' ].forEach( className => {
	let elements = document.getElementsByClassName(className);
	while(elements.length > 0){
		elements[0].parentNode.removeChild(elements[0]);
	}
});
const mainSettingsApp = new Vue({
	el: '#cf-translate-app',
	store,
	components: {
		'settings': SettingsView
	},
	render(h) {
		return h(
			'div',
			{
				attrs: {
					id: 'cf-translate'
				}
			},
			[
				h( 'settings')
			]
		)
	}

});
