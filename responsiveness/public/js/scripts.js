$( document ).ready( function(){
	console.log('doc is ready');

	$( '#goto-website' ).click( function (){
		console.log(this)
		var website = $(this).prev().val();
		console.log(website);
		$('main').find('.iframe').each( function(){
			console.log($(this).attr('src', website));
		} );
	} );

	$( '#refresh-website' ).click( function(){
		//window.location.reload();
		if( $( '#contents' ).find( 'div.selected' ).length > 0){
			$( '#contents' ).find( 'div.selected' ).each( function(){
				var iframe = $(this).find('iframe');
				iframe.attr( 'src', iframe.attr( 'src' ) );
			} );
		}else{
		}
	} );

	$( '#rotate-website' ).click( function(){
		var resolution = $( '#frame1' ).find( 'h1' ).attr('data-res').split('x')
		var currentHeight = resolution[1];
		var currentWidth = resolution[0];
		$( '#frame1' ).find( 'h1' ).children().html( currentHeight+' x '+currentWidth );
		$( '#frame1' ).find( 'h1' ).attr( 'data-res', currentHeight+'x'+currentWidth  )
		$( '#frame1' ).find( 'iframe' ).animate({
			width : currentHeight,
			height : currentWidth
		});
		//console.log(resolution);
	} );
// =========================  Contents Behavior ====================

	$( 'li' ).click( function(){
		$( this ).siblings().children().removeClass( 'selected' );
		$( this ).children().addClass( 'selected' );
		var resolution = $( this ).attr( 'data-res' ).split( 'x' );
		var currentHeight = resolution[1];
		var currentWidth = resolution[0];
		$( '#frame1' ).find( 'h1' ).children().html( currentWidth+' x '+currentHeight );
		$( '#frame1' ).find( 'h1' ).attr( 'data-res', currentWidth+'x'+currentHeight  )
		$( '#frame1' ).find( 'iframe' ).animate({
			width : currentWidth,
			height : currentHeight
		});
	} );

} );