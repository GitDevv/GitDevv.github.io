$(document).ready(function(){	
	
	$('.select').niceSelect();	
	$(".fancybox").fancybox(); 
	
	
	
 	/* Function to prevent Default Events */
	function pde(e){
		if (e.preventDefault) {
			e.preventDefault();
		}
		else {
			e.returnValue = false;
		}
	}

	/* Scroll with class */
	jQuery('.scroll').bind('click',function(e){
		e.preventDefault();
		var anchor = jQuery(this);
		jQuery('html, body').stop().animate({
			scrollTop:jQuery(anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		pde(e);
	});	
	
	
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
        dots: true       
	});  	
	
	$('.donate-page .button.next').click(function(e){
		e.preventDefault();
		$(this).closest('.step').slideUp();
		$('.step-2').slideDown();
	});
	
}); 
 
 
