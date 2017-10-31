/**
 * Util function for setting mutation as getter when undefiend
 *
 * @param mutation {String}
 * @param getter {String}
 * @returns {*}
 */
const getterToSetter = function (mutation, getter) {
	if (!mutation) {
		mutation = getter;
	}
	return mutation;
};

/**
 * Create a computed getter function for a two-way binding of state to all components.
 *
 *
 * @param getter {String} Name of getter function
 * @param mutation {String} Optional. Name of mutation/ setter function. Default is name of getter.
 * @returns {*}
 * @constructor
 */
export  const StateFactory = ( getter, mutation ) => {

	mutation = getterToSetter(mutation, getter);

	return {
		get ()  {
			return this.$store.state[ getter ];
		},
		set(value) {
			this.$store.commit(mutation, value);
		}
	}
};


/**
 * Create a computed getter function for a two-way asynchronous binding of state to all components.
 *
 *
 * @param getter {String} Name of getter function
 * @param action {String} Optional. Name of action to dispatch. Default is name of getter.
 * @returns {*}
 * @constructor
 */
export  const StateFactoryDispatching = ( getter, action ) => {

	action = getterToSetter(action, getter);

	return {
		get ()  {
			return this.$store.state[ getter ];
		},
		set(value) {
			this.$store.dispatch(action, value);
		}
	}
};


/**
 * Create a one-way getter function for a two-way binding of state to all components.
 *
 *
 * @param getter {String} Name of getter function
 * @returns {*}
 * @constructor
 */
export  const StateFactoryReadOnly = ( getter ) => {
	return {
		get ()  {
			return this.$store.state[ getter ];
		},
		set(value){
			//You shall not pass
		}
	}
};