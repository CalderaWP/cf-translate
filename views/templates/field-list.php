<?php
if( ! defined( 'ABSPATH' ) ){
	exit;
}
?>
<script id="tpml--cf-translate-field-list" type="text/x-handlebars-template">
	<option></option>
	{{#each fields}}
		<option value="{{ID}}">{{label}}</option>
	{{/each}}
</script>