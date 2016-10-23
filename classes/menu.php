<?php

/**
 * Created by PhpStorm.
 * User: josh
 * Date: 10/22/16
 * Time: 2:30 PM
 */
class CF_Translate_Menu {

	/**
	 * @var stdClass
	 */
	protected $slugs;

	protected $path;

	protected $url;

	protected $version;


	public function __construct( $slugs, $path, $url, $version ) {
		$this->slugs = $slugs;
		$this->path = $path;
		$this->url = $url;
		$this->version = $version;

		add_action('admin_menu', array( $this, 'add_menu' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );

	}

	public function add_menu(){
		add_submenu_page(
			$this->slugs->cf,
			__( 'Translations', 'caldera-forms-translation' ),
			__( 'Translations', 'caldera-forms-translation' ),
			Caldera_Forms::get_manage_cap(),
			$this->slugs->translate,
			array( $this, 'render_admin' )
		);
	}

	public function render_admin(){
		include $this->path . '/views/main-page.php';
	}

	public function register(){
		//$codes_slug = $this->slugs->translate . '-language-codes';
		//wp_register_script( $codes_slug, $this->url . '/assets/js/language-codes.js' );

		//@TODO better handling for handlebars loading
		$handlebars_slug = $this->slugs->cf . '-handlebars';
		wp_register_script( $handlebars_slug, CFCORE_URL . 'assets/js/handlebars.js' );
		wp_register_script( $this->slugs->translate, $this->url . '/assets/js/cf-translate.js', array( 'jquery', 'underscore', $handlebars_slug ), $this->version, true );
		wp_register_style( $this->slugs->translate, $this->url . '/assets/css/cf-translate.css', array(  ), $this->version );

	}

	public function enqueue( $hook ){
		if( $this->slugs->cf . '_page_' . $this->slugs->translate == $hook ){
			wp_enqueue_script( $this->slugs->translate );
			wp_enqueue_style( $this->slugs->translate );
			wp_enqueue_style( $this->slugs->cf . '-admin-styles', CFCORE_URL . 'assets/css/admin.css', array(), CFCORE_VER );
			$this->localize();
		}

	}

	public function localize(){
        $form = $this->get_form();
        if( is_wp_error( $form ) ){
            $form = null;
        }

        $localizer = new CF_Translate_Localize( $form );
        wp_localize_script( $this->slugs->translate, 'CFTRANS', $localizer->to_array() );


	}

    /**
     * @return array|CF_Translate_Form|null|WP_Error
     */
	protected function get_form(){
		if( ! empty( $_GET[ 'form' ] ) && is_string( $_GET[ 'form' ] ) && ! empty( $_GET[ 'cftrans_nonce' ] ) ) {
			$form_id = $_GET[ 'form' ];
			$nonce   = $_GET[ 'cftrans_nonce' ];
			if( CF_Translate_AdminForm::verify_nonce( $nonce ) ){
				return  CF_Translate_Factories::get_form( $form_id );
			}
		}

		return null;


	}
}