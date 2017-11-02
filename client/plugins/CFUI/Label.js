import { propsFactory } from './propsFactory';

const props = propsFactory([
	'id',
	'label',
]);
export default {
	props: props,
	render(h,context){
		return h( 'label', {
				attrs: {
					id: this.context.id
				}
			}, this.context.label
		);
	}
}
