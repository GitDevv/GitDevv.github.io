$(document).ready(function(){	
	
	$('.process .title').click(function(){
		if($(this).hasClass('active')){
			$('.process .title').removeClass('active');
			$(this).closest('.item').find('.item-content').slideUp();
			$('.process .title .fa').removeClass('fa-long-arrow-up');			
			$('.process .title .fa').addClass('fa-long-arrow-down');
		}else{
			$('.process .title .fa').removeClass('fa-long-arrow-up');			
			$('.process .title .fa').addClass('fa-long-arrow-down');			
			$(this).find('.fa').removeClass('fa-long-arrow-down');
			$(this).find('.fa').addClass('fa-long-arrow-up');
			$('.item-content').slideUp();
			$('.process .title').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.item').find('.item-content').slideDown();
		}
		
//		$('.item-content').slideUp();
//		$(this).closest('.item').find('.item-content').slideDown();
	});
	
 		var headH= $('.site-header').height();
 		var headP= parseInt($('.site-header').css('padding-top'));	
 		$('body').css('padding-top',headH + headP + headP);	
	
	$('.callback, .cost-develop .buy').click(function(e){
		e.preventDefault();
		$('.wrap-modal').fadeIn();
	});
	
	$('.wrap-modal .close').click(function(e){
		e.preventDefault();
		$('.wrap-modal').fadeOut();
	});	
	
	
	$('.review-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:true,
		autoplay:true

	});		
	
	$('.slider-project').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		autoplay:true

	});	
	$('.reviews-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots:false,
		autoplay:true,
//			centerMode: true,
//			centerPadding: '240px',		
		  responsive: [
			{
			  breakpoint: 650,
			  settings: {
				  slidesToShow: 1
			  }
			}
		  ]		

	});		
 	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mob-header').slideToggle();
    }); 	
	
 
//	$('input[type="tel"]').mask("+375(99)999999");
//	
//	$('.callback').click(function(e){
//		e.preventDefault();
//		$('#callback-modal').fadeIn();
//		$('body').css('overflow-y', 'hidden');
//	});	
//	$('.map-img').click(function(e){
//		e.preventDefault();
//		$('#modal-map').fadeIn();
//		$('body').css('overflow-y', 'hidden');
//	});
//	$('.modal-wrap .close').click(function(e){
//		e.preventDefault();
//		$('.modal-wrap').fadeOut();
//		$('body').css('overflow-y', 'auto');
//	});	
//	$('.modal-wrap input[type=submit]').click(function(e){
//		e.preventDefault();
//		$('#callback-modal').fadeOut();
//		$('#thank-modal').fadeIn();
//	})
	
    
	$('.toggle-link').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('ol').slideToggle();
    });
	
 
	$('.slider-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false

	});	
	$('.portfolio-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:true

	});
 
	
//	if($("body").width() > 769){
//		var position = $(".nav-page").offset().top;
//		$(document).scroll(function (){
//			// var headerHeight = $('#header').outerHeight();
//			var value = $(this).scrollTop();
//			/* Show "Back to Top" button */
//			console
//			if ( value > position ){
//				$(".nav-page").addClass('fixed');
//			} else {
//				$(".nav-page").removeClass('fixed');
//			}
//
//		}); 		
// 
//	}else{
//		$('.sidebar .title, .toggle-sidebar ').click(function(e){
//			e.preventDefault();
//			$('.sidebar > ul').slideToggle();
//		});
//	};
// 
  	
 
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
 
}); 
 
 
