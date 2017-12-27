$(document).ready(function(){	
	
	
	$('.property-st').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.property-sb',

	});
	$('.property-sb').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.property-st',
		dots: false,
		arrows:false,
		focusOnSelect: true ,
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				  arrows:false
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 2,
				  arrows:false
			  }
			}			
		]
	}); 	
	
	
	$('.nice_select').niceSelect();
	
	$(document).scroll(function (){
		var value = $(this).scrollTop();
		if ( value > 30 ){
			$(".site-header").addClass('fixed');
		} else {
			$(".site-header").removeClass('fixed');
		}

	}); 		
	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-header ').toggleClass('active');
        $('.site-header .nav').slideToggle();
    }); 	
	
	var hlist = $('.main .list-country > li.active .list-info').height();
	var plist = parseInt($('.main .list-country > li.active .list-info').css('padding-top'));
	$('.main .list-country > li.active .list-info').slideDown(0);
	$('.main .list-country > li.active').css('margin-bottom',hlist + plist + plist);
 	
	$('.main .list-country > li').click(function(e){
		e.preventDefault();
		$('.main .list-country > li').removeClass('active').css('margin-bottom','0');
		$('.main .list-country > li .list-info').slideUp(0);
		$(this).addClass('active').css('margin-bottom', hlist + plist + plist);
		$(this).find('.list-info').slideDown(0);
	});
	
 
	$('.review-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		adaptiveHeight:true,
		fade:true

	});	

 		var headH= $('.inner-body').find('.site-header').height();
 		var headP= parseInt($('.inner-body').find('.site-header').css('padding-top'));
		$('.inner-body').css('padding-top',headH + headP + headP);
	if($("body").width() > 769){
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
 
 
