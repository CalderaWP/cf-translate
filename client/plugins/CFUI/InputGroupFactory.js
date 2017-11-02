import  Input from './Input';

import { propsFactory } from './propsFactory';

const props = propsFactory([
	'label',
	'id',
	'value',
	'type'
]);

export const InputGroupFactory = ( type ) => {

	let group = {
		functional: true,
		props: props,
		render(h, context) {
			return h(
				'div',
				{
					'class': {
						'caldera-config-group': true,
					},
					attrs: {
						id: 'wrap-' + context.props.id
					}
				},
				[
					h('cf-label',
						{
							id: context.props.id,
							label: context.props.label,
						}
					),
					h('cf-input',
						{
							id: context.props.id,
							value: context.props.value,
							type: type
						}
					)


				]
			)
		}
	};

	return group;

};