/**
 * All preset component prop sets go here to be accessed through propsFactory
 * @param prop {String} Prop name
 * @returns {{}}
 */
const factory = ( prop ) => {

	const props = {
		label: {
			type: String,
			required:true,
		},
		id: {
			type: String,
			required:true,
		},
		value : {
			type: String,
			required:false,
		},
		type: {
			type: String,
			required:false,
			default: 'text'
		},
		changeEvent:{
			type: String,
			required: false,
			default(){
			}
		}
	};

	return props.hasOwnProperty(prop) ? props[prop] : {};
};

/**
 * Creates an object of component props.
 *
 * @param propArray {Array} Array of prop names
 * @returns {{}}
 */
export const propsFactory = ( propArray ) => {
	let props = {};
	propArray.forEach( (key,i) => {
		props[key] = factory(key);
	});

	return props;


}