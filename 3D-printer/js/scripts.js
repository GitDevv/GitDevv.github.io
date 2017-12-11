$(document).ready(function(){	
	
 	
	$('.drop-menu').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		var thisLi = $(this).closest('li').find('.menu-2').slideToggle();
	});
	
	$('.search-toggle, .search-mobt').click(function(e){
		e.preventDefault();
		$('.form-search').slideToggle();
	});
	$('.checkbox').click(function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('input').prop('checked',true);
		}else{
			$(this).removeClass('active');
			$(this).find('input').prop('checked',false);
		}
	});
	
	$('input[type="tel"]').mask("+7(999) 999 - 99 - 99");
	
	$('.callback').click(function(e){
		e.preventDefault();
		$('#callback-modal').fadeIn();
		$('body').css('overflow-y', 'hidden');
	});	
	$('.map-img').click(function(e){
		e.preventDefault();
		$('#modal-map').fadeIn();
		$('body').css('overflow-y', 'hidden');
	});
	$('.modal-wrap .close').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeOut();
		$('body').css('overflow-y', 'auto');
	});	
	$('.modal-wrap input[type=submit]').click(function(e){
		e.preventDefault();
		$('#callback-modal').fadeOut();
		$('#thank-modal').fadeIn();
	})
	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav-page').slideToggle();
    });    
	$('.toggle-link').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('ol').slideToggle();
    });
	
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:true

	});	
	$('.slider-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false

	});
 
	
	if($("body").width() > 769){
		var position = $(".nav-page").offset().top;
		$(document).scroll(function (){
			// var headerHeight = $('#header').outerHeight();
			var value = $(this).scrollTop();
			/* Show "Back to Top" button */
			console
			if ( value > position ){
				$(".nav-page").addClass('fixed');
			} else {
				$(".nav-page").removeClass('fixed');
			}

		}); 		
 
	}else{
		$('.sidebar .title, .toggle-sidebar ').click(function(e){
			e.preventDefault();
			$('.sidebar > ul').slideToggle();
		});
	};
 
  	
 
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
			scrollTop:jQuery(anchor.attr('href')).offset().top - 180
		}, 1500,'easeInOutExpo');
		pde(e);
	});	
 
}); 
 
 
