<template>
	<div>
		<div
			class="caldera-config-group"
			 v-if="showChooser"
		>
			<label for="cf-translations-form">
				{{strings.choose_form}} {{foo}}
			</label>
			<div class="caldera-config-field">
				<select
					class="block-input"
					id="cf-translations-form"
					v-model="form"
					@change="change"
				>
					<option></option>
					<option
						v-for="form in forms"
						v-bind:value="form.ID"

					>
						{{form.name}}
					</option>
				</select>
			</div>
		</div>
		<div
			v-if="! showChooser"
		>
			<button
					style="display: inline"
					class="button button-primary cf-translate-button"
					id="cf-translate-save-button"
					@click="save"
					v-html="saveText"
			>

			</button>
			<button
					v-if="! showAddLanguage"
					style="display: inline"
					class="button cf-translate-button"
					@click="addButtonClick"
			>
				{{strings.add_lang_form}}
			</button>

			<p
				style="display: inline"

			>
				{{strings.you_are_trans}} {{form.info.name}}
			</p>

		</div>
	</div>

</template>
<script>

	export default{
		data(){
			return {
				showChooser: true,
			}
		},
		computed: {
			saveText(){
				return this.$store.getters.saving ? 'Saving' : 'Save';
			}
		},
		methods:{
			save(){
				this.$store.dispatch( 'save' ).then( r => {
					this.$store.commit( 'saving' );
					this.$store.commit( 'showAddLanguage' );
					this.$store.commit( 'showLanguageChoice', true );
					this.showChooser = true;
				});
			},
			change(){
				this.$store.commit( 'showAddLanguage' );
				this.$store.commit( 'showLanguageChoice', true );
				this.showChooser = false;
			},
			addButtonClick(){
				this.$store.commit( 'showAddLanguage' );
			}
		}
	}
</script>