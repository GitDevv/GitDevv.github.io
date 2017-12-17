$(document).ready(function(){	
	
	$('input[type="tel"]').mask("+7(999) 999 - 99 - 99");
	
 	$('.wrap-card .rent, .header .callback').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeIn();
		$('body').css('overflow-y','hidden');
	});
	
 	$('.modal-wrap .close').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeOut();
		$('body').css('overflow-y','auto');
	});	
	
	
	var wid = $('body').width();
//	console.log(wid);
	
	if(wid <= 768 ){
		$('.wrap-rev').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots:false,
			autoplay:true
		});		
	}
	

	
	$('.wrap-rev').on('setPosition', function(event, slick, direction){
		var currentSlide = $('.wrap-rev').slick('slickCurrentSlide');
//		$('.slider-big').slick('setPosition');
		$('.number-slider .current').text(currentSlide + 1 );		
		console.log(currentSlide);
	});		
	var lenAll = $('.wrap-rev li').length;
	var lenClone = $('.wrap-rev .slick-cloned').length;
	var len = lenAll - lenClone;
	console.log(len);	
	$('.number-slider .all').text(len);	
	
	
	$('.main-slider .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:true,
		autoplay:true,
		fade:true
 
		
	});
	
	$('.header .toggle-mob').click(function(e){
		e.preventDefault();
		$('.mob-menu').slideDown();
	});	
	$('.mob-menu .close').click(function(e){
		e.preventDefault();
		$('.mob-menu').slideUp();
	});
	
	// табы в моб. версии peronal-area
	$('.tab-links a').click(function(e){
		e.preventDefault();
		var linkId = $(this).attr('data-id');
		
		$('.tab-links a').removeClass('active');
		$(this).addClass('active');
		
		$('.tab-item').removeClass('active');
		$('#'+linkId).addClass('active');
	});	
 
 
	$(document).click(function(e){
		var catalogList = $('.header .right .search');
		if ($('header .container').hasClass('active')) {
			if ($(e.target).closest('header').length===0) {
				$('header .container').removeClass('active');
			}
		}
	});		
		
	
	$('  .top a.search').click(function(e){
		e.preventDefault();
		$('.header .container').addClass('active');
	});	 	
	$('.mob-char .toggle').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mob-char .wr').slideToggle();
	});	 
	
	$('.slider-card-b').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-card-m'
		
	});
	$('.slider-card-m').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-card-b',
		dots: false,
		arrows:false,
		focusOnSelect: true 
	}); 	
	
	
}); 
 
 
