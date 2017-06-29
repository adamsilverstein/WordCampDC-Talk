( function( $ ) {
	$( document ).ready( function() {

		var $pass1 = $( '#pass1' ),
			$submitButton = $( '#submit' );

		// Disallow weak passwords entirely.
		$( '.pw-weak' ).remove();

		// When the password changes, update the button enabled state.
		$pass1.on( 'input pwupdate', function () {
			var passStrength = $( '#pass-strength-result' )[0];
			$submitButton.prop( 'disabled', ( 'strong' !== passStrength.className ) );
		} );
	} );
} ) ( jQuery );
