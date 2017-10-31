let foo = 'foo';

const FooPlugin = {
	install(Vue, options) {
		Vue.prototype.$foo = {
			get ()  {
				return foo;
			},
			set(value) {
				foo = value;
			}
		}

	}
};

export default FooPlugin;