$( document ).ready( function () {

	$( '#i-agree' ).click( function ( evt ) {
		console.log();
		if( $(evt.target).is(':checked') ) {
			$( '.btn-primary' ).prop( 'disabled', false );
		}else {
			$( '.btn-primary' ).prop( 'disabled', true );
		}

	} );
} );