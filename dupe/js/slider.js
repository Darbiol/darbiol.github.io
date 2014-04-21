$(document).ready( function(){
	//next element
	$( '#slider-previous' ).click( function(e){
		e.preventDefault();
		console.log('previous');
		$( '#image-list li.active' ).fadeOut(500);
		if($( '#image-list li.active' ).prev().length < 1){
			$( '#image-list li:last' ).fadeIn(500, function(){
				console.log('done fade in')
				$(this).removeClass('hide');
				$(this).addClass('active');
				$( '#image-list li:first' ).addClass('hide');
				$( '#image-list li:first' ).removeClass('active');
			});
		}else{
			$( '#image-list li.active' ).prev().fadeIn(500, function(){
				$(this).removeClass('hide');
				$(this).addClass('active');
				$(this).next().addClass('hide');
				$(this).next().removeClass('active');
			});
		}
	} );

	$( '#slider-next' ).click( function(e){
		e.preventDefault();
		$( '#image-list li.active' ).fadeOut(500);
		if($( '#image-list li.active' ).next().length < 1){
			$( '#image-list li:first' ).fadeIn(500, function(){
				$(this).removeClass('hide');
				$(this).addClass('active');
				$( '#image-list li:last' ).addClass('hide');
				$( '#image-list li:last' ).removeClass('active');
			});
		}else{
			$( '#image-list li.active' ).next().fadeIn(500, function(){
				$(this).removeClass('hide');
				$(this).addClass('active');
				$(this).prev().addClass('hide');
				$(this).prev().removeClass('active');
			});
		}
	} );
} );