<?php
/**
 * @package   CF_Translate
 * @author    Josh Pollock <Josh@CalderaWP.com>
 * @license   GPL-2.0+
 * @link
 * @copyright Josh Pollock <Josh@CalderaWP.com> & CalderaWP LLC
 *
 * @wordpress-plugin
 * Plugin Name: Caldera Forms Translation
 * Plugin URI:  https://CalderaWP.com
 * Description: Translate Caldera Forms
 * Version: 1.0.7
 * Author:      CalderaWP LLC
 * Author URI:  https://CalderaForms.com
 * Text Domain: caldera-forms-translation
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'CFTRANS_PATH',  plugin_dir_path( __FILE__ ) );
define( 'CFTRANS_CORE',  __FILE__ );
define( 'CFTRANS_URL',  plugin_dir_url( __FILE__ ) );
define( 'CFTRANS_VER', '1.0.7' );



// Load instance
add_action( 'caldera_forms_includes_complete', 'cf_translate_load', 25 );
function cf_translate_load(){
    if ( method_exists( 'Caldera_Forms_Forms', 'get_fields' ) ) {
	    /**
	     * Add autoloader
	     */
        Caldera_Forms_Autoloader::add_root('CF_Translate', CFTRANS_PATH . 'classes');

	    /**
	     * Load admin
	     */
        if (is_admin()) {
            $slugs = new stdClass();
            $slugs->cf = Caldera_Forms::PLUGIN_SLUG;
            $slugs->translate = $slugs->cf . '-translate';
            new CF_Translate_Admin($slugs, CFTRANS_PATH, CFTRANS_URL, CFTRANS_VER );

        }

	    /**
	     * When form is rendered init front-end system
	     */
        add_action( 'caldera_forms_render_start', 'cf_translate_front_end_init' );

	    /**
	     * Create field(s)
	     */
	    add_filter('caldera_forms_get_field_types', 'cf_translate_add_switcher_field' );

	    /**
	     * admin-ajax - use CF API when we get to 1.5.0
	     */
	    add_action( 'wp_ajax_cf_translate_save_translation', 'cf_translate_save_translation'  );
	    add_action( 'wp_ajax_cf_translate_add_language', 'cf_translate_add_language'  );
	    add_action( 'wp_ajax_cf_translate_get_language', 'cf_translate_get_language'  );


    }

}

/**
 *
 */
add_filter( 'cf_translate_get_current_language', 'cf_translate_select_language' );


/**
 * Start up front-end for translating
 *
 * @since 0.1.0
 *
 * @uses "caldera_forms_render_start" action
 */
function cf_translate_front_end_init( $form ){
	$form = CF_Translate_Factories::get_form( $form );
	$front_end = new CF_Translate_Render( $form, array(
		'hook' => 'caldera_forms_render_get_field',
		'callback' => 'translate',
	) );

	new CF_Translate_PickerOptions( $form, array(
		'hook' => 'caldera_forms_render_get_field_type-language-picker',
	));

	/**
	 * Runs after the front-end is loaded for a form
	 *
	 * @since 0.1.0
	 *
	 * @param CF_Translate_Render $front_end Front-end system
	 * @param CF_Translate_Form $form Form object for translating
	 */
	add_action( 'cf_translate_front_end_init', $front_end, $form );
}

/**
 * Get the current language
 *
 * @since 0.1.0
 *
 * Defaults to value of get_locale() but has filter
 *
 * @return string
 */
function cf_translate_get_current_language(){
	/**
	 * Filter current language
	 *
	 * @since 0.1.0
	 *
	 * @param string $language Language code
	 */
	return apply_filters( 'cf_translate_get_current_language', get_locale() );
}

/**
 * Change language based on cf_lang GET var
 *
 * @since 0.2.0
 *
 * @uses "cf_translate_get_current_language"
 *
 * @param $language
 *
 * @return string
 */
function cf_translate_select_language( $language ){
	if( ! empty( $_GET[ 'cf_lang' ] ) && is_string( $_GET[ 'cf_lang' ] ) ){
		$language = trim( strip_tags( $_GET[ 'cf_lang' ] ) );
	}

	return $language;

}


add_action( 'init', 'cf_translate_init_text_domain' );
function cf_translate_init_text_domain(){
	load_plugin_textdomain( 'caldera-forms-translation', FALSE, CFTRANS_PATH . 'languages' );

}

add_action( 'cf_translate_templates', 'cf_translate_templates' );
function cf_translate_templates(){
	include  CFTRANS_PATH . '/assets/language-codes.php';
	$dir = CFTRANS_PATH . 'views/templates/';
	include  $dir . '/field.php';
	include  $dir . '/field-list.php';
}



function cf_translate_save_translation(){
	if( cf_translate_can_translate() ){
		if( ! empty( $_POST[ 'language' ] ) &&  ! empty( $_POST[ 'form_id' ] ) && ! empty( $_POST[ 'fields' ] ) && is_array(  $_POST[ 'fields' ] ) && ! empty( $_POST[ CF_Translate_AdminForm::nonce_field_name() ] ) ){
			if( CF_Translate_AdminForm::verify_nonce( $_POST[ CF_Translate_AdminForm::nonce_field_name() ] ) ){

				$form = CF_Translate_Factories::get_form( $_POST[ 'form_id' ] );
				if( ! empty( $form ) ) {
					//@todo validate code
					$language = trim( strip_tags( trim( $_POST[ 'language' ] ) ) );


                    $fields = array();
					foreach ( $_POST[ 'fields' ] as $id => $field ) {
					    $fields[ $id ] = CF_Translate_Factories::field_object( $field, true );


                    }

                    $form->get_translator()->add_fields_to_language( $language, $fields );
                    $saved = $form->save();
                    if( $saved ){
                        status_header( 200 );
                    }else{
                        status_header( 500 );
                    }

				}
			}else{
				status_header( 406 );
			}
		}else{
			status_header( 400 );
		}
	}else{
		status_header( 403 );
	}
	exit;
}

/**
 * Add language picker field
 *
 * @uses "caldera_forms_get_field_types" filter
 *
 * @since 0.1.0
 *
 * @param array $field_types
 *
 * @return array
 */
function cf_translate_add_switcher_field( $field_types ){

	$field_types[ 'language-picker' ] = array(
		"field"       => __( 'Language Picker', 'caldera-forms-translation' ),
		"description" => __( 'Translation chooser', 'caldera-forms-translation' ),
		"file"        => CFTRANS_PATH . "fields/picker/field.php",
		"category"    => __( 'Select', 'caldera-forms' ),
		"static"      => true,
		"single"      => true,
		"setup"       => array(
			"template" => CFTRANS_PATH . "fields/picker/config_template.php",
			"preview"  => CFTRANS_PATH . "fields/picker/dropdown/preview.php",
		),
		"scripts"     => array(
			CFTRANS_URL . 'assets/js/language-picker.js'
		),
	);

	return $field_types;
}


function cf_translate_add_language(){
    if( cf_translate_can_translate() ){
        if( ! empty( $_POST[ 'language' ] ) &&  ! empty( $_POST[ 'form_id' ] )   && ! empty( $_POST[ CF_Translate_AdminForm::nonce_field_name() ] ) ){
            if( CF_Translate_AdminForm::verify_nonce( $_POST[ CF_Translate_AdminForm::nonce_field_name() ] ) ){

                $form = CF_Translate_Factories::get_form( $_POST[ 'form_id' ] );
                if( ! empty( $form ) ) {
                    //@todo validate code
                    $language = trim( strip_tags( trim( $_POST[ 'language' ] ) ) );

                    $form->get_translator()->add_language( $language );

                    $saved = $form->save();
                    if( $saved ){
                        status_header( 200 );
                    }else{
                        status_header( 500 );
                    }

                }
            }else{
                status_header( 406 );
            }
        }else{
            status_header( 400 );
        }
    }else{
        status_header( 403 );
    }
}

function cf_translate_get_language(){

    if( cf_translate_can_translate() ){

        if( ! empty( $_GET[ 'language' ] ) &&  ! empty( $_GET[ 'form_id' ] )   && ! empty( $_GET[ CF_Translate_AdminForm::nonce_field_name() ] ) ){
            if( CF_Translate_AdminForm::verify_nonce( $_GET[ CF_Translate_AdminForm::nonce_field_name() ] ) ){

                $form = CF_Translate_Factories::get_form( $_GET[ 'form_id' ] );
                if( ! empty( $form ) ) {
                    //@todo validate code
                    $language = trim( strip_tags( trim( $_GET[ 'language' ] ) ) );

                    $form->get_translator()->add_language( $language );
                    $form->get_translator()->add_fields_to_language( $language, CF_Translate_Factories::new_language_fields( $form ) );

                    $fields = $form->get_translator()->get_fields( $language, true );
                    if( ! empty( $fields ) ){
                        status_header( 200 );
                        wp_send_json_success( $fields );
                        exit;
                    }else{
                        status_header( 501 );
                        wp_send_json_error( $form->get_translator()->get_languages() );

                    }

                }else{
                    status_header( 404 );
                }
            }else{
                status_header( 406 );
            }
        }else{
            status_header( 400 );
        }
    }else{
        status_header( 403 );
    }

    exit;
}


function cf_translate_can_translate(){
	return current_user_can( Caldera_Forms::get_manage_cap( 'translate' ) );
}

