<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 12:47 PM
 */
class CF_Translate_Field extends Caldera_Forms_Object {

    protected $ID;

    protected $caption;

    protected $label;

    protected $default;


    public function get_field_names(){
        $vars = get_object_vars(  $this );
        return array_keys( $vars );
    }

    public function __call( $name, $arguments ) {
	    if( isset( $this->$name ) ){
	    	return $this->$name;
	    }
    }

}