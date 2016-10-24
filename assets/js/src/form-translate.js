function CF_Translate_Form( form, language_code, save, $ ){
    var self = this;

    this.fields = {};

    this.field_objs = {};

    this.template_engine = new CF_Translate_Template_Engine( $, Handlebars );

    this.$field_selector = $( '#cf-translate-field-select' );

    this.$field_edit_area = $( '#cf-translate-field-translator-wrap' );

    this.language = language_code;

    this.$save_button = $( '#cf-translations-save-button' );

    this.init = function( ){

        if( _.has( form, 'fields') ){
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
                cf_translations_has_changes = false;
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
        var $default = $( '#cf-translate-field-default-' + id + '-' + self.language );

        var  handle_click = function() {
            cf_translations_has_changes = true;
            _.debounce( self.add_translation( id, language_code, {
                label : $label.val(),
                caption: $caption.val(),
                defualt: $default.val()
            }), 3000 );
        };

        $label.on( 'change', handle_click );
        $caption.on( 'change', handle_click );
        $default.on( 'change', handle_click );

    };

    this.add_translation = function( field_id, language, translations ){
        $.each( translations, function( i, translation ) {
            form[ 'fields' ][ language ][ field_id ][ i ] = translation;
        });

        cf_translations_has_changes = true;

    };


}
