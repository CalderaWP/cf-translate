import  {
	StateFactory,
	StateFactoryReadOnly,
	StateFactoryDispatching
} from './factories';

/**
 * Container for factories that are created as need
 *
 * @type {{twoWay: {}, dispatching: {}, oneWay: {}}}
 */
let factories = {
	twoWay: {},
	dispatching: {},
	oneWay: {},

};

/**
 * Factory for creating lazy-loading state factories
 *
 * @param type {String} Type of factory
 * @param factory {Function} Callback function to create state factories with.
 * @returns {function(*=)}
 */
const factoryFactory = ( type, factory ) => {
	return ( prop ) => {
		if ( ! factories[ type ].hasOwnProperty( prop ) ) {
			factories[ type ][prop] = new factory(prop);
		}
		return factories[ type ][prop]
	};
};

/** Create Factories **/
const twoWayFactory = factoryFactory( 'twoWay', StateFactory );
const oneWayFactory = factoryFactory( 'oneWay', StateFactoryReadOnly );
const dispatchingFactory = factoryFactory( 'dispatching', StateFactoryDispatching );

/**
 * The computed properties to be injected into all components
 *
 * @type {{}}
 */
let computed = {};

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
		'formLanguages'
	],
	oneWay: [
		'field'
	],
	dispatching: [
		'form'
	]
};

/** Inject two-way bindings **/
stateComputes.twoWay.forEach( (key,i) => {
	computed[key] = twoWayFactory( key, key );
});

/** Inject one-way bindings **/
stateComputes.oneWay.forEach( (key,i) => {
	computed[key] = oneWayFactory( key, key );
});

/** Inject two-way, asynchronous bindings **/
stateComputes.dispatching.forEach( (key,i) => {
	computed[key] = dispatchingFactory( key, key );
});

/**
 * Create plugin
 *
 * @type {{install: (function(*, *): void)}}
 */
const statePlugin = {
	install(Vue, options) {
		Vue.mixin({
			computed: computed
		});
	}
};

export default statePlugin;