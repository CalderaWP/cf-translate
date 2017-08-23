<?php

/**
 * Translation system
 *
 * @package CF_Translate
 * @author    Josh Pollock <Josh@CalderaWP.com>
 * @license   GPL-2.0+
 * @link
 * @copyright 2016 CalderaWP LLC
 */
class CF_Translate_Translator {

	/** @var  array */
    protected $form_info;

	/** @var  array */
    protected $fields;

	/** @var  array */
    protected $languages;

	/**
	 * CF_Translate_Translator constructor.
	 *
	 * @since 0.1.0
	 */
    public function __construct(){
        $this->languages = array();
    }


	/**
	 *
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 * @param string $type Info type
	 * @param string $value Info bit
 	 *
	 * @return bool
	 */
    public function add_form_info( $code, $type, $value  ){
        if ( $this->add_language( $code ) ) {
            $this->form_info[$code][$type] = $value;
            return true;
        }

        return false;
    }

	/**
	 * Get fields by language
	 *
	 * @since 0.1.0
	 *
	 * @param $code
	 * @param bool $to_array
	 *
	 * @return array
	 */
    public function get_fields( $code, $to_array = false ){
        if( $this->has_language( $code ) ){
        	if( $to_array ){
		        $fields = array();
		        /**
		         * @var  string $id
		         * @var CF_Translate_Field $field
		         */
		        foreach ( $this->fields[ $code ] as $id => $field ){
		        	$fields[ $id ] = $field->to_array( false );
		        }

		        return $fields;
	        }
            return $this->fields[ $code ];
        }

        return array();
    }

	/**
	 * Get all languages
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 *
	 * @return array
	 */
    public function get_languages(){
    	if( empty( $this->languages ) ){
    		return array( cf_translate_get_current_language() );
	    }
        return $this->languages;
    }

	/**
	 * Check if we have a language in object
	 *
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 *
	 * @return bool
	 */
    public function has_language( $code ){
        return in_array( $code, $this->languages );
    }

	/**
	 * Checks if we have a non-locale variant
	 *
	 * If $code is es_PE and es is found, then this will return true, while $this->has_language() would not
	 *
	 * @since 1.1.0
	 *
	 * @param string $code Full language code to check
	 *
	 * @return bool
	 */
    public function has_less_locale( $code ){
    	if ( $this->has_language( $this->get_less_locale_code( $code ) ) ){
    		return true;
	    }
	    return false;
    }

	/**
	 * Reduces a 2 part language code to a 1 part
	 *
	 * es_PE will become es
	 *
	 * @since 1.1.0
	 *
	 * @param string $code Full language code
	 *
	 * @return string
	 */
    public function get_less_locale_code( $code ){
    	return strtolower( substr( $code, 0, 2 ) );
    }

	/**
	 * Add a language to system
	 *
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 *
	 * @return bool
	 */
    public function add_language( $code ){
        if( ! CF_Translate_Languages::get_instance()->valid( $code ) ){
            return false;
        }

        if ( ! $this->has_language( $code ) ) {

            $this->languages[] = $code;
            $this->fields[$code] = array();
        }

        return true;
    }

    public function get_field( $language, $id ){

        $fields = $this->get_fields( $language );
        if( empty( $fields ) || ! isset( $fields[ $id ] ) ){
            return false;
        }else{
            return $fields[ $id ];
        }

    }

	/**
	 * Add a new language
	 *
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 * @param array $fields Fields -- must be an array of CF_Translate_Field objects
	 *
	 * @return  bool
	 */
    public function add_fields_to_language( $code, array $fields ){
        if( $this->add_language( $code ) ){
            foreach( $fields as $field ){
                if( $field instanceof  CF_Translate_Field ){
                    $this->fields[ $code ][ $field->ID ] = $field;
                }
            }

            return true;
        }

        return false;
    }



}