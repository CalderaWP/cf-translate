<template>
		<div id="cf-translate-settings">

			<div id="cf-translate-setting-inner">
				<div class="caldera-editor-header">
					<ul class="caldera-editor-header-nav">
						<li class="caldera-editor-logo">
							<span class="caldera-forms-name">
								Caldera Forms Translate
							</span>
						</li>

					</ul>
				</div>
			</div>
			<div class="caldera-editor-body">

				<div class="cf-translate-left ">
					<form-chooser
					>
					</form-chooser>

					<lang-chooser
						v-if="form.ID"
					>
					</lang-chooser>


				</div>
				<div
					v-if="! saving"
					class="cf-translate-right"
				>
					<field-chooser
						v-if="language"
					>
					</field-chooser>
					<div v-else>
						{{strings.select_language}}
					</div>
				</div>
				<div style="clear:both"></div>

				<div v-if="! saving">
					<field-translate
						v-if="fieldId"
						>

					</field-translate>
					<div v-else>
						<span v-if="language">
							{{strings.select_field}}
						</span>
					</div>

				</div>

				<div style="clear:both"></div>

			</div>
			<cf-input-group
				:id="'foo'"
				:label="'LABELFOO!'"
				:value="'valueFood!'"
				:type="'email'"
			></cf-input-group>
		</div>

</template>
<script>
	import feildChooser from  '../components/fieldChooser.vue';
	import fieldTranslate from  '../components/fieldTranslate.vue';
	import formChooser from  '../components/formChooser.vue';
	import langChooser from  '../components/langChooser.vue';

	export  default {
		components: {
			'field-chooser': feildChooser,
			'field-translate': fieldTranslate,
			'form-chooser': formChooser,
			'lang-chooser': langChooser
		}
	}

</script>
<style>
	p.submit{ display:inline;float:left;}
	span#cf-translations-spinner {
		margin-top: 35px;
		padding-top: 20px;
	}
	p.cf-translations-notice {
		display: inline-block;
		padding: 4px;
		border-radius: 4px;
	}
	p.cf-translations-success {
		background: #a3bf61;
		color: #fff;
	}
	p.cf-translations-error {
		background: #ff0000;
		color: #fff;
	}
	li.cf-translations-notice-wrap{
		margin-top: -5px;
	}
	.caldera-editor-header {
		height: 50px !important;
	}
	li.caldera-editor-logo {
		margin-top: 6px !important;
	}
	#cf-translate-add-language-button {
		background: #fafafa;
		border-color: #999;
		color: #23282d;
	}

	.cf-translate-green{
		background: #a3bf61;
	}
	.cf-translate-red {
		background: #ff0000;
	}
	.caldera-config-field textarea {
		width: 250px;
	}

	select#cf-translate-add-language, select#cf-translate-language-chooser {
		min-width: 250px;
	}

	#cf-translate-form-list, #cf-translate-form-list-wrap .submit button{
		min-width: 250px;
	}

	#cf-translate-form-list-wrap .submit{
		display: block;
		float: none;
	}

	.cf-translate-left {
		float:left;
		display: inline;
		width: 47%;
		margin-left: 3%
	}

	.cf-translate-right {
		display: inline;
		width: 47%;
		margin-right: 3%;
		float:left;
	}

</style>