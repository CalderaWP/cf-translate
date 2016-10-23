<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 1:03 PM
 */
class CF_Translate_Factories{

    /**
     * @param $form_id
     * @return CF_Translate_Form|null|WP_Error
     */
    public static function get_form( $form_id ){
        $form = Caldera_Forms_Forms::get_form( $form_id );
        if( ! empty( $form ) ){
            $form = new CF_Translate_Form( $form );
            return $form;
        }else{
            return new WP_Error('', __( 'Can not find form', 'caldera-forms-translate' ) );
        }
    }

    public static function new_translator( array  $form ){
        $code = get_locale();
        $translator = new CF_Translate_Translator(  );
        $translator->add_language( $code );
        $translator->add_form_info( $code, 'name', $form[ 'name' ] );
        $translator->add_fields_to_language( $code, self::new_language_fields( $form ) );

        return $translator;
    }

    public static function new_language_fields( $form  ){
        if( $form instanceof  CF_Translate_Form ){
            $form = $form->get_form();
        }
        $fields = Caldera_Forms_Forms::get_fields( $form, false );
        $objects = array();
        foreach ( $fields as $id => $field ){
            $objects[ $id ] = self::field_object( $field );
        }

        return $objects;
    }

    public static function field_object( array $field, $sanitize = false ){
        $field_object = new CF_Translate_Field();
        foreach ( $field_object->get_field_names() as $key ){
            if (isset( $field[ $key ] ) ) {
                $field_object->$key = $field[$key];
            }
        }

        if( $sanitize ){
            return self::sanatize_field( $field_object );
        }
        return $field_object;

    }

    public static function sanatize_field( CF_Translate_Field $field  ){
        $field->ID = caldera_forms_very_safe_string($field->ID);
        $field->caption = Caldera_Forms_Sanitize::sanitize( $field->caption );
        $field->label = Caldera_Forms_Sanitize::sanitize( $field->label );
        $field->default = Caldera_Forms_Sanitize::sanitize( $field->default );
        return $field;
    }
}