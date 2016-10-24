<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/23/16
 * Time: 8:17 PM
 */
class CF_Translate_PickerOptions extends CF_Translate_Filter {

	/**
	 * @var array
	 */
	protected $languages;

	/**
	 * Add all field options to language picker
	 *
	 * @since 0.1.0
	 *
	 * @uses "caldera_forms_render_get_field_type-language-picker" filter
	 *
	 * @param $field
	 * @param $form
	 *
	 * @return array
	 */
	public function filter( $field, $form ){
		if( $form[ 'ID' ] != $this->form[ 'ID' ] ){
			return $form;
		}

		$languages = $this->form->get_translator()->get_languages();
		foreach ( $languages as $_language ){
			$code = $this->prepare_code( $_language );
			$language = $this->get_language( $code );
			if ( ! empty( $language ) ){
				$field['config']['option'][$code] = array(
					'value'	=>	$code,
					'label' =>	$language[ 'name' ]
				);
			}

		}

		return $field;
	}

	/**
	 * Get language if valid
	 *
	 * @since 0.1.0
	 *
	 * @param string $code Language code
	 *
	 * @return array|void
	 */
	protected function get_language( $code ){

		if( empty( $this->languages ) ){
			$_languages = new CF_Translate_Languages();
			$this->languages = $_languages->to_array();
		}

		if( ! empty( $this->languages[ $code ] ) ){
			return $this->languages[ $code ];
		}
	}

	/**
	 * Validate language code
	 *
	 * @since 0.10
	 *
	 * @param string $code Language code
	 *
	 * @return string
	 */
	protected function prepare_code( $code ) {
		$code = strtolower( substr( $code, 0, 2 ) );

		return $code;
	}
}