import { propsFactory } from './propsFactory';

const props = propsFactory([
	'id',
	'value',
	'type',
	'changeEvent'
]);

export default {
	functional: true,
	props: props,
	render(h, context) {
		return h('input', {
			attrs: {
				id: context.props.id,
				type: context.props.type
			},
			domProps: {
				value: context.props.value,
			},
			on: {
				input: function (event) {
					context.pros.value = event.target.value
					context.$emit( context.props.changeEvent, event.target.value)
				}
			}
		})
	},
}
