<?php
/**
 * Caldera Forms Translate - Main View
 *
 * @package CF_Translate
 * @author    Josh Pollock <Josh@JoshPress.net>
 * @license   GPL-2.0+
 * @link
 * @copyright 2016 CalderaWP LLC
 */

?>
<div class="caldera-editor-header">
	<ul class="caldera-editor-header-nav">
		<li class="caldera-editor-logo">
			<span class="dashicons-cf-logo"></span>
			Caldera Forms: <?php esc_html_e( 'Translations', 'caldera-forms-translation' ); ?>
		</li>

	</ul>
</div>
<div class="support-admin-page-wrap" id="cf-translate-admin" style="margin-top: 75px;">
	<div id="cf-translate-forms-list">
		<?php
			$forms = Caldera_Forms_Forms::get_forms( true, true );
			if( empty( $forms ) ){
				printf( '<p>%s</p>', esc_html__( 'You do not have any forms yet', 'caldera-forms-translation' ) );
			}else{
				printf( '<h3>%s</h3>', esc_html__( 'Choose Form', 'caldera-forms-translation') );
				?>
					<form id="cf-translations-form-chooser" action="<?php echo esc_url_raw( admin_url( 'admin.php?page=caldera-forms-translate' ) ); ?>">

						<div class="caldera-config-group">
							<label for="cf-translate-form-list" class="">
								<?php esc_html_e('Select Form', 'caldera-forms-translation'); ?>
							</label>
							<div class="caldera-config-field">
								<select id="cf-translate-form-list" name="form">

									<?php
										foreach ( $forms as $id => $form ){
											$selected = '';
											if( ! empty( $_GET[ 'form' ] ) && $_GET[ 'form' ] == $id ){
												$selected = 'selected';
											}
											printf( '<option value="%s" %s >%s', esc_attr( $id ), $selected, esc_html( $form[ 'name' ] ) );
										}
									?>
								</select>
							</div>
						</div>
						<input type="hidden" value="caldera-forms-translate" name="page" />
						<?php
							wp_nonce_field( CF_Translate_AdminForm::$nonce_action, CF_Translate_AdminForm::nonce_field_name(), false );
							submit_button( __( 'Load Form', 'caldera-forms-translation' ) );
						?>

					</form>
				<?php
			}

        if ( ! empty( $_GET[ 'form' ] ) ) {
            if (!empty($_GET['cftrans_nonce']) && true == CF_Translate_AdminForm::verify_nonce($_GET['cftrans_nonce'])) {
                printf('<h3>%s</h3>', esc_html__('Choose Language', 'caldera-forms-translation'));
                ?>
                <form id="cf-translate-language-control">
                    <div class="caldera-config-group">
                        <label for="cf-translate-language-chooser" class="">
                            <?php esc_html_e('Select Language', 'caldera-forms-translation'); ?>
                        </label>
                        <div class="caldera-config-field">
                            <select id="cf-translate-language-chooser" name="language">
                            </select>
                        </div>
                    </div>

                    <div class="caldera-config-group">
                        <label for="cf-translate-add-language" class="">
                            <?php esc_html_e('Enter New Language', 'caldera-forms-translation'); ?>
                        </label>
                        <div class="caldera-config-field">
                            <input id="cf-translate-add-language" type="text"/>
                        </div>
                    </div>
                    <div class="caldera-config-group">
                        <button class="btn button-secondary button-secondary" id="cf-translate-add-language-button">
                            <?php esc_html_e('Add Language', 'caldera-forms-translation'); ?>
                        </button>
                    </div>
                    <?php
                    wp_nonce_field('choose-form-language', 'cftrans_nonce_lang', false);
                    submit_button(__('Load Language', 'caldera-forms-translation'), 'secondary');
                    ?>
                </form>
                <?php
                printf('<h3>%s</h3>', esc_html__('Translate Fields', 'caldera-forms-translation'));
                ?>
                <div>
                    <button role="button" id="cf-translations-save-button"
                            title="<?php esc_attr_e('Save Translations For This Language', 'caldera-forms-translation' ); ?>" class="button primary" disabled>
                                <?php esc_html_e( 'Save Translations', 'caldera-forms-translation' ); ?>
                            </button>
                            <div class="caldera-config-group cf-translate-field-group" style="display: none;visibility: hidden" aria-hidden="true">
                                <label for="cf-translate-field-select">
                                    <?php esc_html_e('Select Field', 'caldera-forms-translation'); ?>
                                </label>
                                <div class="caldera-config-field">
                                    <select id="cf-translate-field-select" type="text">

                                    </select>
                                </div>
                            </div>

                            <div id="cf-translate-field-translator-wrap">

                            </div>
                        </div>
                    <?php
                } else{
                    printf( '<div class="notice notice-error"><p>%s</p>', esc_html__( 'Please try the form chooser again', 'caldera-forms-translation') );
                }
            }

		?>
	</div>
</div>

<?php do_action( 'cf_translate_templates' ); ?>