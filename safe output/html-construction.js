
	// This is DANGEROUS!!!
	jQuery.ajax( {
		url: 'http://any-site.com/endpoint.json'
	} ).done( function( data ) {
		var link = '<a href="' + data.url + '">' + data.title + '</a>';

		// .html() will evaluate here, including any scripts in data.url or data.title.
		jQuery( '#my-div' ).html( link );
	}

	jQuery.ajax( {
		url: 'http://any-site.com/endpoint.json'
	} ).done( function( data ) {
		var a = jQuery( '<a />' );

		// .text() does not run scripts!
		a.attr( 'href', data.url );
		a.text( data.title );

		// Our `a` element is safe to insert with append.
		jQuery( '#my-div' ).append( a );
	} );


	backgroundImage = jQuery( '<img />', {
		'src': image,
		'css': { 'position': 'absolute' }
	} );