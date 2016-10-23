<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/22/16
 * Time: 3:09 PM
 */
class CF_Translate_AdminForm {

	public static $nonce_action = 'cf-translate-load-form';

	public static function verify_nonce( $nonce ){
		$valid =  wp_verify_nonce( $nonce, self::$nonce_action );
		return $valid;
	}

	public static function nonce(){
		return wp_create_nonce( self::$nonce_action );
	}

	public static function nonce_field_name(){
		return 'cftrans_nonce';
	}


	public static function get_form( $form_id ){
	    //@TODO REMVOE
	    return CF_Translate_Factories::get_form( $form_id );
	}



}