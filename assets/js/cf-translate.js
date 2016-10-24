

function CF_Translations( settings, $, _, Handlebars ){

    var self = this;

    this.languages = [];

    this.languages_objects = {};

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
        code = code.substring(0,2).toLowerCase();
        if( ! _.has( self.languages_objects, code ) ){
            self.languages_objects[ code ] = self.language_codes[ code ];
        }

        return self.languages_objects[ code ];
    };

    this.add_language_option = function( code ){
        var opts = [];
        var $options = $( '#' + self.$language_selector.attr( 'id' ) + ' option' );
        var found = false;
        if ( $options.length ) {
            var $opt;
            $options.each(function (i, opt) {
                $opt = $( opt );
                if( _.isString( $opt.val() ) && $opt.val().substring(0,2).toLowerCase() === code ){
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
            return self.language_codes[ language.substring(0,2).toLowerCase() ];
        }
    };

    this.is_language_known = function( language ) {
        return _.has( self.language_codes, language.substring(0,2).toLowerCase() );
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

function CF_Translate_Template_Engine( $, Handlebars ){
    var self = this;

    this.templates = {
        field: $( '#tpml--cf-translate-field' ).html(),
        field_list: $( '#tpml--cf-translate-field-list' ).html()
    };

    this.get_template = function( template ){
        if( _.has( self.templates, template ) ){
            return self.templates[ template ];
        }

        return false;
    };

    this.render_template = function( template_name, data, $target ){
        var source   = self.get_template( template_name );
        if( false == source ){
            return false;
        }

        var template = Handlebars.compile(source);
        var html = template( data );
        $target.append( html );
    }


}


function CF_Translate_Form( form, language_code, save, $ ){
    var self = this;

    this.fields = {};

    this.field_objs = {};

    this.template_engine = new CF_Translate_Template_Engine( $, Handlebars );

    this.$field_selector = $( '#cf-translate-field-select' );

    this.$field_edit_area = $( '#cf-translate-field-translator-wrap' );

    this.language = language_code.substr(0,2).toLocaleLowerCase();

    this.has_changes = false;

    this.$save_button = $( '#cf-translations-save-button' );

    this.init = function( ){
        if( _.has( form, 'fields') ){
            //this needs to use self.language_code but en_US vs en...
            self.fields = form.fields[ language_code ];
        }
        self.$save_button.attr( 'disabled', false );
        self.$field_selector.find('option').remove();
        self.setup_fields();
        self.$field_selector.on( 'change', function(){
            var field = self.get_field( self.$field_selector.val() );
            self.render_field_ui( field, self.language, self.$field_edit_area );
        });

        self.$save_button.on( 'click', function(){
            var data = {
                action: 'cf_translate_save_translation',
                language: language_code,
                fields: self.fields,
                cftrans_nonce: save.nonce,
                form_id: form.ID
            };
            $.post( save.api, data ).success( function(r){
                cf_translation_report( CFTRANS.strings.translations_saved, true );

            }).error( function(r){
                cf_translation_report( CFTRANS.strings.save_error, false );
            });
        });
    };

    this.setup_fields = function(){
        var list = {};
        _.each( self.fields, function( field, id ){

           if( _.has( field, 'label' ) ){
               list[id] = {ID: id, label: field.label};
           }

        });
        self.template_engine.render_template( 'field_list', { fields: list}, self.$field_selector );
        self.$field_selector.parent().parent().show().css( 'visibility', 'visible' ).attr( 'aria-hidden', false );
    };

    this.get_field = function( id ){
        if( undefined == self.field_objs[ id ] ){
            self.field_objs[ id ] = new CF_Translate_Field( self.fields[ id ], self.language );
        }

        return self.field_objs[ id ];
    };

    this.render_field_ui = function( field ){
        self.$field_edit_area.empty();
        self.template_engine.render_template( 'field', field, self.$field_edit_area );
        self.bind( field.ID );
    };

    this.bind = function( id ){
        var $label = $( '#cf-translate-field-label-' + id + '-' + self.language );
        var $caption = $( '#cf-translate-field-caption-' + id + '-' + self.language );

        var  handle_click = function() {
            _.debounce( self.add_translation( id, language_code, {
                label : $label.val(),
                caption: $caption.val()
            }), 3000 );
        };

        $label.on( 'change', handle_click );
        $caption.on( 'change', handle_click );


    };

    this.add_translation = function( field_id, language, translations ){
        $.each( translations, function( i, translation ) {
            form[ 'fields' ][ language ][ field_id ][ i ] = translation;
        });

        self.has_changes = true;

    };
}

function CF_Translate_Field( field_data, language ){
        return  {
            language: language,
            ID: field_data.ID,
            caption: field_data.caption,
            label: field_data.label,
            default: field_data.default
        };

}

jQuery( document ).ready( function( $ ) {
    if( _.isObject( CFTRANS ) ) {
        var cf_translations = new CF_Translations( CFTRANS, $,  _, Handlebars );
        cf_translations.init();

        var $form = $(document.getElementById('cf-translate-language-control'));
        var $language_selector = $(document.getElementById('cf-translate-language-chooser'));
        var $add_language = $(document.getElementById('cf-translate-add-language'));
        var $add_language_button = $(document.getElementById('cf-translate-add-language-button'));

        cf_translations.populate_language_selector($language_selector);
        cf_translations.setup_language_form($form, $add_language, $add_language_button);

    }

});

function cf_translation_report( message, good ){

    var $not_saved = jQuery( document.getElementById( 'cf-translations-not-saved' ) );
    var $saved = jQuery( document.getElementById( 'cf-translations-saved' ) );


    if( good ){
        $saved.html( message ).show().css( 'visibility', 'visible' ).attr( 'aria-hidden', false );
        $not_saved.html( '' ).hide().css( 'visibility', 'hidden' ).attr( 'aria-hidden', true );
    }else{
        $not_saved.html( message ).show().css( 'visibility', 'visible' ).attr( 'aria-hidden', false );
        $saved.html( '' ).hide().css( 'visibility', 'hidden' ).attr( 'aria-hidden', true );
    }


}