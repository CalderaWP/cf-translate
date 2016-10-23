<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
$languges = new CF_Translate_Languages();
?>
<script>
    var cf_lang_codes = <?php echo json_encode( $languges ); ?>

</script>