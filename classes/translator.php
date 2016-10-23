<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 12:50 PM
 */
class CF_Translate_Translator {

    protected $form_info;

    protected $fields;

    protected $languages;


    public function __construct(){
        $this->languages = array();
    }


    public function add_form_info( $code, $type, $value  ){
        if ( $this->add_language( $code ) ) {
            $this->form_info[$code][$type] = $value;
            return true;
        }

        return false;
    }

	/**
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

    public function get_languages(){
        return $this->languages;
    }

    public function has_language( $code ){
        return in_array( $code, $this->languages );
    }


    public function add_language( $code ){
        if( ! $this->validate_code( $code ) ){
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

    public function add_fields_to_language( $code, array $fields ){
        if( $this->add_language( $code ) ){
            foreach( $fields as $field ){
                if( $field instanceof  CF_Translate_Field ){
                    $this->fields[ $code ][ $field->ID ] = $field;
                }
            }
        }
    }

    protected function validate_code( $code ){
        //@todo validate code
        return $code;
    }


}