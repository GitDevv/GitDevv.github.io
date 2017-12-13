$(document).ready(function(){	
	
	$('.callback').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeIn();
	});
	
	$('.modal-wrap .close').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeOut();
	});	
	
	$('.tab-links a').click(function(e){
		e.preventDefault();
		var $this = $(this).attr('data-link');
		$('.tab-links a').removeClass('active');
		$(this).addClass('active');
		$('.tab-item').fadeOut();
		$('#'+$this).fadeIn();
	});
	
	$('.nice-select').niceSelect();
	
	$('.info-accord .info-block .arrow').click(function(e){
		e.preventDefault();
		var item = $(this).closest('.item');
		item.removeClass('active');
		item.find('.info-block').slideUp();		
	});
	
	$('.info-accord .top').click(function(e){
		e.preventDefault();
		var item = $(this).closest('.item');
		item.toggleClass('active');
		item.find('.info-block').slideToggle();
		
	});
	
	$('.p-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows:true,
		autoplay: true,
		autoplaySpeed: 3000,
		  responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
                vertical:false
			  }
			} ,
			  {
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
                vertical:false
			  }
			}	,
			  {
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
                arrows:false
			  }
			}		  
		  ]		        
	}); 	
	
	
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:true,
		prevArrow:".wrap-m-slider .controlls .prev",
		nextArrow:".wrap-m-slider .controlls .next"

	});	
 	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mob-nav').slideToggle();
    }); 	
	
	$('.contact-header .search-t').click(function(e){
		e.preventDefault();
		$('.form-search').slideToggle();
	});	
	$('.site-header .service-toggle').click(function(e){
		e.preventDefault();
		$('.service-menu').slideToggle();
	});
//	$('.checkbox').click(function(e){
//		e.preventDefault();
//		if(!$(this).hasClass('active')){
//			$(this).addClass('active');
//			$(this).find('input').prop('checked',true);
//		}else{
//			$(this).removeClass('active');
//			$(this).find('input').prop('checked',false);
//		}
//	});
	
	$('input[type="tel"]').mask("+375(99)999999");
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
 
 
