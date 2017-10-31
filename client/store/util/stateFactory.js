/**
 * Util function to copy mutation to getter prop as needed
 *
 * @param mutation
 * @param getter
 * @returns {*}
 */
const getterToSetter = function (mutation, getter) {
	if (!mutation) {
		mutation = getter;
	}
	return mutation;
};

/**
 * Create a state factory for use in component to create 2 way binging of item from store to component's local data property.
 *
 * @param getter {String} The name of the getter function (of Vuex store) store to get value with.
 * @param mutation {String|null} Optional. The name of the setter/mutation function (of Vuex store) store to set value with.
 * @returns {*}
 */
export  const stateFactory = ( getter, mutation ) => {

	mutation = getterToSetter(mutation, getter);

	return {
		get ()  {
			return this.$store.state[getter];
		},
		set(value) {
			this.$store.commit(mutation, value);
		}
	}
};


/**
 * Create a state factory for use in component to create an asynchronous 2 way binging of item from store to component's local data property.
 *
 * @param getter {String} The name of the getter function (of Vuex store) store to get value with.
 * @param action {String|null} Optional. The name of the setter/mutation function (of Vuex store) store to set value with.
 * @returns {*}
 */
export  const stateFactoryDispatching = ( getter, action ) => {

	action = getterToSetter(action, getter);

	return {
		get ()  {
			return this.$store.state[getter];
		},
		set(value) {
			this.$store.dispatch(action, value);
		}
	}
};


/**
 * Create a state factory for use in component to create 1 way binging of item from store to component's local data property, with no updates.
 *
 * @param getter {String} The name of the getter function (of Vuex store) store to get value with.
 * @returns {*}
 */
export  const stateFactoryReadOnly = ( getter ) => {
	return {
		get ()  {
			return this.$store.state[ getter ];
		},
		set(value){
			//You shall not pass
		}
	}
};