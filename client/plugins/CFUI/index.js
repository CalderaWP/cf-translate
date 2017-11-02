import Label from './Label.js';
import  Input from './Input.js';
import  InputGroup from './InputGroup.js';

let components = {
	'cf-label': Label,
	'cf-input': Input,
	'cf-input-group': InputGroup
};

/**
 * Create plugin
 *
 * @type {{install: (function(*, *): void)}}
 */
const CFUI = {
	install(Vue, options) {
		Vue.mixin({
			components: components
		});
	}
};

export default CFUI;