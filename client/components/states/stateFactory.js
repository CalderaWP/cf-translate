const getterToSetter = function (mutation, getter) {
	if (!mutation) {
		mutation = getter;
	}
	return mutation;
};


export  const stateFactory = ( getter, mutation ) => {

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



export  const stateFactoryDispatching = ( getter, mutation ) => {

	mutation = getterToSetter(mutation, getter);

	return {
		get ()  {
			return this.$store.state[ getter ];
		},
		set(value) {
			this.$store.dispatch(mutation, value);
		}
	}
};

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