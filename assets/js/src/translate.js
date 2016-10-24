function CF_Translations( settings, $, _, Handlebars ){

    var self = this;

    this.languages = [];

    this.language_codes = {};

    this.$language_selector = null;

    this.init = function(){
        self.language_codes = cf_lang_codes;

        if( ! _.isEmpty( settings.form.languages ) ){
            self.languages = settings.form.languages;
        }else{
            self.add_language( settings.local );
        }
    };

    this.add_language = function( language ){
        if ( self.is_language_known( language ) ){
            self.languages[ language ] = self.find_language( language );
            return true;
        }

        return false;

    };

    this.populate_language_selector = function( $selector ){
        self.$language_selector = $selector;
        _.each( self.languages, function( code ){
            self.add_language_option( code );
        });
    };

    this.get_language_obj = function( code ){


        if ( _.isObject( self.language_codes[ code ] ) ) {
            return self.language_codes[code];
        } else {
            alert( settings.strings.bad_language );
        }
    };

    this.add_language_option = function( code ){
        var opts = [];
        var $options = $( '#' + self.$language_selector.attr( 'id' ) + ' option' );
        var found = false;
        if ( $options.length ) {
            var $opt;
            $options.each(function (i, opt) {
                $opt = $( opt );
                if( _.isString( $opt.val() ) && $opt.val() === code ){
                    found = true;
                    return false;
                }
            });
        }
        if ( ! found ) {
            var lang = self.get_language_obj( code );
            self.$language_selector.append('<option value="' + code + '">' + lang.name + '</option>');
        }
    };

    this.setup_language_form = function( $form, $add_language, $add_language_button ){
        $form.on( 'submit',  function(e){
            e.preventDefault();
            self.load_language( self.$language_selector.val() );
        });

        $add_language_button.on( 'click', function(e){
            e.preventDefault();
            var lang = $add_language.val();
            if( self.is_language_known( lang ) ){
                if( ! _.has( settings.form.fields, lang ) ){
                    self.get_language_fields( lang );
                }
                self.add_language( lang );
                self.add_language_option(  lang  );
                self.$language_selector.val( lang );

            }else{
                cf_translation_report( settings.strings.bad_language, false );
            }
        });

        $add_language.on( 'change', function(){
            //autocomplete
        });
    };

    this.get_language_fields = function( language ){
        $.get( settings.data.api, {
            action: 'cf_translate_get_language',
            form_id: settings.form.ID,
            language: language,
            cftrans_nonce: settings.data.nonce,

        }).success( function( r ){
            if( _.has( r, 'data' ) ){
                settings.form.fields[ language ] = r.data;
            }

        } ).error( function( r ){

        });
    };

    this.find_language = function( language ){
        if( self.is_language_known( language ) ){
            return self.language_codes[ language ];
        }
    };

    this.is_language_known = function( language ) {
        return _.has( self.language_codes, language );
    };

    this.find_language_by_name = function( language ){
        //could be valid code
        if( self.is_language_known( language ) ){
            return self.find_language( language );
        }


    };

    this.load_language = function( language_code ){
        var translator = new CF_Translate_Form( settings.form, language_code, settings.data, $ );
        translator.init();
    };

}
