<?php
/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 2:57 PM
 */

class  CF_Translate_Render {

    /**
     * @var CF_Translate_Form
     */
    protected $form;

    protected $hook = 'caldera_forms_render_get_field';

	protected $callback = 'translate';

	protected $priority;

    protected $language;
    public function __construct( CF_Translate_Form  $form, $language ){
        $this->language = $language;
        $this->form = $form;
	    $this->callable = array( $this, 'translate' );
	    $this->priority = 51;
        $this->maybe_add_hook();


    }

	/**
	 * Change hook priority
	 *
	 * @since 0.1.0
	 *
	 * @param int $priority Hook priority
	 */
    public function change_priority( $priority ){
    	$this->priority = absint( $priority );
    }

	/**
	 * Translate a field
	 *
	 * @since 0.1.0
	 *
	 * @uses "caldera_forms_render_get_field" filter.
	 *
	 * @param array $field Field config
	 * @param array $form Form config
	 *
	 * @return mixed
	 */
    public function translate( $field, $form ){
        if( $this->form[ 'ID' ] == $form[ 'ID' ] ){
            $field = $this->translate_field( $field );
        }
        return $field;

    }

	/**
	 * If possible, translate a field
	 *
	 * @since 0.1.0
	 *
	 * @param array $field
	 *
	 * @return array
	 */
    protected function translate_field( $field ){
        $field_object  = $this->form->get_translator()->get_field( $this->language, $field[ 'ID' ] );
        /**  @var CF_Translate_Field $field_object */
        if( is_object( $field_object ) ){
            foreach( $field_object->get_field_names() as $key ){

                if( 'ID' != $key  ){
		            $value = $field_object->$key;
		            if( ! empty( $value ) && $value != $field[ $key ] ) {
			            $field[ $key ] = $field_object->$key;
		            }

                }
            }

        }

        return $field;

    }

	/**
	 * Remove field translation hook
	 *
	 * @since 0.1.0
	 */
    public function remove_hook(){
        remove_filter( $this->hook, array( $this, $this->callback ), $this->priority );
    }

    /**
     * Add field translation hook if needed
     *
     * @since 0.1.0
     */
    protected function maybe_add_hook (){
        if ( $this->form->get_translator()->has_language( $this->language )) {
            add_filter( $this->hook, array( $this, $this->callback ), $this->priority, 2 );
        }

    }

}