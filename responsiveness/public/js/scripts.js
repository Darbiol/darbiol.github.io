$( document ).ready( function(){
	console.log('doc is ready');

	$( '#goto-website' ).click( function (){
		var website = $(this).prev().val();
		console.log(website);
		$('main').find('.iframe').each( function(){
			console.log($(this).attr('src', website));
		} );
	} );

	$( '#refresh-website' ).click( function(){
		window.location.reload();
	} );
} )