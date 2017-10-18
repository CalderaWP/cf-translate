<template>

	<div>
		<p
			style="display: inline"
		>
			{{strings.current_language}} : {{language}}
		</p>

		<div class="caldera-config-group">
			<label for="cf-translations-field">
				{{strings.choose_field}}
			</label>
			<div class="caldera-config-field">
				<select
						id="cf-translations-field"
						v-model="fieldId"
						class="block-input"
				>
					<option></option>
					<option
							v-for="_field in fields"
							v-bind:value="_field.ID"
					>
						{{_field.label}}
					</option>
				</select>
			</div>
		</div>
	</div>

</template>
<script>
	import { fieldsState } from './states/fieldsState';
	import { fieldIdState } from './states/fieldIdState';
	import { languageState } from './states/languageState';

	export default{

		computed: {
			fields() { return this.$store.state.fields;},
			fieldId: fieldIdState,
			language: languageState,
			strings (){
				return this.$store.getters.strings
			}
		}
	}
</script>