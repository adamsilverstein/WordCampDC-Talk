
( function( $, win ) {

	// $ and win are protected here.

}( jQuery, window ) );


	// Confirm the click action in a modal.
	$( '.confirm' ).click( function() {
		return window.confirm( 'Really delete the Database?$?@%!?' );
	} );


	window.confirm = function() { return window.confirm( 'Click OK!' ); }

