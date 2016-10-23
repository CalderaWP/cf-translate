<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 12:27 PM
 */
class CF_Translate_Form implements ArrayAccess {

	/**
	 * Form config
	 *
	 * Accessible by using object as array
	 *
	 * @since 0.1.0
	 *
	 * @var array
	 */
    protected $form;

    /**
     * @var CF_Translate_Translator
     */
    protected $translator;

    public function __construct( array  $form ){
        $this->form = $this->add_translation_data( $form );
    }

    public function get_id(){
        return $this->form[ 'ID' ];
    }

    public function get_form(){
        return $this->form;
    }

    public function save(){
        $this->form[ 'translations' ] = $this->translator;
        return Caldera_Forms_Forms::save_form( $this->form );
    }

    /**
     * @return CF_Translate_Translator
     */
    public function get_translator(){
        return $this->translator;
    }

    public function add_translation( $language, array  $fields ){
        $this->translator->add_fields_to_language( $language, $fields );
    }

    public function get_languages(){
        return $this->translator->get_languages();
    }

    protected  function add_translation_data( $form ){
        if( ! isset( $form[ 'translations' ] ) || ! $form[ 'translations' ] instanceof  CF_Translate_Translator ){
            $form[ 'translations' ]  =  CF_Translate_Factories::new_translator( $form );

        }

	    $this->translator = $form[ 'translations' ];


        return $form;
    }


    public function offsetSet($offset, $value) {

        if (is_null($offset)) {
            $this->form[] = $value;
        } else {
            $this->form[$offset] = $value;
        }

    }

    public function offsetExists($offset) {
        return isset($this->form[$offset]);
    }

    public function offsetUnset($offset) {
        unset($this->form[$offset]);
    }

    public function offsetGet($offset) {
        return isset($this->form[$offset]) ? $this->form[$offset] : null;
    }
}