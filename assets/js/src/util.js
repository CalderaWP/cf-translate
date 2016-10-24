
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
