
import { propsFactory } from './propsFactory';

const props = propsFactory([
	'label',
	'id',
	'value',
	'type'
]);

export default {
	functional: true,
	props : props,
	render(h,context){
		return h(
			'div',
			{
				'class' :{
					'caldera-config-group': true,
				},
				attrs: {
					id: 'wrap-' + context.props.id
				}
			},
			[

				h('cf-input',
					{
						id: context.props.id,
						value: context.props.value,
						type: context.props.type
					}
				)


			]

		)
	}
}