$(document).ready(function(){	
	
	/* Scroll on Top */
	$('.back-to-top').click(function(evt){
		$('html, body').animate({scrollTop: '0'}, 1200, 'easeInOutCubic');
		pde(evt);
	});		
 
}); 
 
 
$(document).scroll(function (){
	var value = $(this).scrollTop();
 
	if ( value > 600 ){
		$(".back-to-top").addClass('show-to-top');
	} else {
	 	$(".back-to-top").removeClass('show-to-top');
	}
});