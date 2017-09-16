
function cf_translation_report( message, good ){
    var $header = jQuery( document.getElementById( 'cf-translate-header' ) );
    var $not_saved = jQuery( document.getElementById( 'cf-translations-not-saved' ) );
    var $saved = jQuery( document.getElementById( 'cf-translations-saved' ) );
    if( good ){
        $not_saved.html( '' ).hide().css( 'visibility', 'hidden' ).attr( 'aria-hidden', true );
        $saved.html( message ).show().css( 'visibility', 'visible' ).attr( 'aria-hidden', false );

    }else{
        $not_saved.html( message ).show().css( 'visibility', 'visible' ).attr( 'aria-hidden', false );
        $saved.html( '' ).hide().css( 'visibility', 'hidden' ).attr( 'aria-hidden', true );
    }
}

Handlebars.registerHelper('ifIs', function (conditional, options) {
    if (options.hash.value == conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('ifNot', function (conditional, options) {
    if (options.hash.value != conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this);
    }
});