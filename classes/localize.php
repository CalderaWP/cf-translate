<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/22/16
 * Time: 2:37 PM
 */
class CF_Translate_Localize {

    /**
     * @var CF_Translate_Form
     */
	protected $form;

	protected $language_codes;

	public function __construct( CF_Translate_Form $form = null ) {
		$this->form = $form;
	}

	public function to_array(){
		$data = array(
			'strings' => $this->strings(),
			'data' => $this->data(),
			'local' => get_locale(),
			'form' => array(
				'ID' => 0,
				'languages' => array(),
				'fields' => array(),
				'form_info' => array( 'name' => '' )
			),

		);

		if( ! empty( $this->form ) ){
			$data[ 'form' ] = array(
				'ID' => $this->form->get_id(),
				'languages' => $this->form->get_languages(),
				'form_info' => $this->form_info()
			);
            foreach( $data[ 'form' ][ 'languages' ] as $language ){
                $fields =  $this->form->get_translator()->get_fields( $language );
                if( ! empty( $fields ) ){
                    foreach ( $fields as $id => $field ){
                        $_field = array();
                        if( $field instanceof  CF_Translate_Field ){
                            $_field = $field->to_array( false );
                        }

                        $data[ 'form' ][ 'fields' ][ $language ][ $id ] = $_field;
                    }
                }


            }

		}

		return $data;
	}

	protected function form_info(){
		return array(
			'name' => $this->form[ 'name' ]
		);
	}
	protected function fields(){

		return  $this->form[ 'translations' ][ 'fields' ];
	}

	protected function strings(){
		return array(

		);
	}

	protected function data(){
		return array(
			'nonce' => CF_Translate_AdminForm:: nonce(),
			'api' => esc_url_raw( admin_url( 'admin-ajax.php' ) )
		);
	}

}