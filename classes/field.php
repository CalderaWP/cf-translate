<?php

/**
 * Field abstraction for translatable fields
 *
 * @package CF_Translate
 * @author    Josh Pollock <Josh@CalderaWP.com>
 * @license   GPL-2.0+
 * @link
 * @copyright 2016 CalderaWP LLC
 */
class CF_Translate_Field extends Caldera_Forms_Object {

	/** @var  string */
    protected $ID;
	/** @var  string */
    protected $caption;
	/** @var  string */
    protected $label;
	/** @var  string */
    protected $default;

	/**
	 * Field type
	 *
	 * @since 2.1.0
	 *
	 * @var string
	 */
	protected $type;

	/**
	 * Field options
	 *
	 * @since 2.1.0
	 *
	 * @var string
	 */
	protected $options;

	/**
	 * Get all field names
	 *
	 * @since 0.1.0
	 *
	 * @return array
	 */
    public function get_field_names(){
        $vars = get_object_vars(  $this );
        return array_keys( $vars );
    }

    public function add_option( $opt, $label ){
    	if( ! is_array( $this->options ) ){
    		$this->options = array();
	    }
    	$this->options[ $opt ] = $label;
    }


}