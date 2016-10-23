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

    protected $language;
    public function __construct( CF_Translate_Form  $form, $language ){
        $this->language = $language;
        $this->form = $form;
        $this->maybe_add_hook($form, $language);


    }



    public function function( $field, $form ){
        if( $this->form[ 'ID' ] == $form[ 'ID' ] ){
            $field = $this->translate_field( $field );
        }
        return $field;

    }

    protected function translate_field( $field ){
        $field_object  = $this->form->get_translator()->get_field( $this->language, $field[ 'ID' ] );
        /**  @var CF_Translate_Field $field_object */
        if( is_object( $field_object ) ){
            foreach( $field_object->get_field_names() as $key ){
                if( ! empty( $field_object->$key ) ){
                    $field[ $key ] = $field_object->$key;
                }
            }

        }

        return $field;

    }

    public function remove_hook(){
        remove_filter( $this->hook, array($this, 'translate' ), 51 );
    }

    /**
     * @param CF_Translate_Form $form
     * @param $language
     */
    protected function maybe_add_hook(CF_Translate_Form $form, $language){
        if ( $form->get_translator()->has_language($language)) {
            add_filter( $this->hook, array($this, 'translate' ), 51, 2 );
        }
    }

}