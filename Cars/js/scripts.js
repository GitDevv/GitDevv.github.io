$(document).ready(function(){	
	
	$('.cars').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
        dots: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 2,
				  arrows:false                 
			  }
			},			
			{
			  breakpoint: 580,
			  settings: {
				slidesToShow: 1,
				  arrows:false                 
			  }
			}
		]		
	});  	
	
	
	
	$('.sub-modal .close').click(function(e){
		e.preventDefault();
		$('.sub-modal').fadeOut();
	});
	
	$('.wr-select select').niceSelect();	
	
	/*************************/
	
	$('input[type="tel"]').mask("+7(999) 999 - 99 - 99");
	
	$('.modal-show').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeIn();
		$('body').css('overflow-y', 'hidden');
		$('body').css('padding-right', '18px');
		$('.site-header').css('right', '18px');
	});
	$('.modal-wrap .close').click(function(e){
		e.preventDefault();
		$('.modal-wrap').fadeOut();
		$('body').css('overflow-y', 'auto');
		$('body').css('padding-right', '0');
		$('.site-header').css('right', '0');
	});	
	
    $('.site-header .toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-header .wrap-mob').toggleClass('active');
    });
	
	$('.card-top-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true ,
		asNavFor: '.card-bottom-slide',

	});
	$('.card-bottom-slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.card-top-slide',
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
			}
		]
	}); 
	
	$('.related-products').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
        dots: false,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				  arrows:false
			  }
			},		
			{
			  breakpoint: 760,
			  settings: {
				slidesToShow: 2,
				  arrows:false
			  }
			},			
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				  arrows:false                 
			  }
			}
		]		
	});  	
	
	if($("body").width() > 769){
		$('.sidebar >ul>li').hover(function(e){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$(this).find('.lvl-2').slideDown();
			}else{
				$(this).removeClass('active');
				$(this).find('.lvl-2').slideUp();			
			}
		});	
		$('.sidebar .lvl-2 > li').hover(function(e){
			if(!$(this).children('a').hasClass('active')){
				$(this).children('a').addClass('active');
				$(this).find('.lvl-3').slideDown();
			}else{
				$(this).children('a').removeClass('active');
				$(this).find('.lvl-3').slideUp();			
			}
		});
	};
	
	if($("body").width() < 769){
		$('.sidebar >ul>li >a').click(function(e){
			e.preventDefault();
			if(!$(this).hasClass('active')){
				$('.sidebar >ul>li').removeClass('open');
				$('.sidebar >ul>li >a').removeClass('active');				
				$(this).addClass('active');
				$(this).parent('li').addClass('open');
				$(this).find('.lvl-2').slideDown();
			}else{
				$(this).removeClass('active');
				$(this).parent('li').removeClass('open');
//				$(this).child('a').removeClass('active');
				$(this).find('.lvl-2').slideUp();			
			}
		});	
		$('.sidebar .lvl-2 > li >a').click(function(e){
			e.preventDefault();
			if(!$(this).hasClass('active')){
				$('.sidebar .lvl-2 >li').removeClass('open');
				$('.sidebar .lvl-2 >li > a').removeClass('active');
				$(this).addClass('active');
				$(this).parent('li').addClass('open');
				$(this).find('.lvl-3').slideDown();
			}else{
				$(this).removeClass('active');
				$(this).parent('li').removeClass('open');
//				$(this).child('a').removeClass('active');
				$(this).find('.lvl-3').slideUp();			
			}
		});		
	};
	
//	$('.sidebar .lvl-2 > li >a').on("mouseout",function(e){
//		$(this).parent('li').find('.lvl-3').slideUp();
//	});	
	
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows:true,
		adaptiveHeight: true,
//		autoplay: true,
		autoplaySpeed: 4000,
//		fade:true
	}); 	
 
	
  $(".numbers-column").append('<div class="dec button">-</div> <div class="inc button">+</div> ');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 1;
      }
	}

    $button.parent().find("input").val(newVal);

  });	
 
}); 
 
 
