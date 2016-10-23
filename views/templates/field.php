<?php
/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/22/16
 * Time: 3:23 PM
 */
?>
<script id="tpml--cf-translate-field" type="text/x-handlebars-template">
	<div class="caldera-config-group cf-translate-field-label-wrap cf-translate-field-group">
		<label for="cf-translate-field-label-{{ID}}-{{language}}" class="label-{{language}}">
			<?php esc_html_e('Field Label', 'caldera-forms-translation'); ?>
		</label>
		<div class="caldera-config-field">
			<input id="cf-translate-field-label-{{ID}}-{{language}}" type="text" value="{{label}}" data-language="{{language}}" />
		</div>
	</div>
	<div class="caldera-config-group cf-translate-field-caption-wrap cf-translate-field-group">
		<label for="cf-translate-field-caption-{{ID}}-{{language}}" class="label-{{language}}">
			<?php esc_html_e('Field Description', 'caldera-forms-translation'); ?>
		</label>
		<div class="caldera-config-field">
			<input id="cf-translate-field-caption-{{ID}}-{{language}}" type="text" value="{{caption}}" data-language="{{language}}" />
		</div>
	</div>
</script>