$(document).ready(function(){	
    
    
    $('.links_tag a').click(function(e){
        e.preventDefault();
        var idThis = $(this).attr('data-tag');
        $('.links_tag a').removeClass('active');
        $(this).addClass('active');
        $('.tags_container .item').fadeOut(0);
        $('.tags_container .'+idThis).fadeIn(0);
    });
    $('.iz_item td').click(function(e){
        var thisTd = $(this).attr('data-id');
       if(!$(this).hasClass('active')){
//           $('.iz_item td').removeClass('active');
           $(this).addClass('active');
//           $('.iz_item .tr_item').slideUp(0);
           $('#'+thisTd).slideDown(0);
       } else{
           $(this).removeClass('active');
           $('#'+thisTd).slideUp(0);       
       }
    });
 
    $('.catalog_targ').click(function(e){
        e.preventDefault();
        $('.top_nav .menu_catalog').addClass('active');
        $(this).addClass('active');
    });
    $('.menu_catalog .close').click(function(e){
        e.preventDefault();
        $('.top_nav .menu_catalog').removeClass('active');
        $('.catalog_targ').removeClass('active');
    }); 
    
    $('.search_toggle').click(function(e){
        e.preventDefault();
        $('.modal_wrapper').fadeIn();
    });
    $('.modal_wrapper .closes').click(function(e){
        e.preventDefault();
        $('.modal_wrapper').fadeOut();
    });      
    
    
    $('.list_category .toggle').click(function(e){
        e.preventDefault();
        $('.list_category .menu_catalog').removeClass('active');
        $(this).closest('li').find('.menu_catalog').addClass('active');
    });
    $('.menu_catalog .close').click(function(e){
        e.preventDefault();
        $('.list_category .menu_catalog').removeClass('active');
    });     
	    
    /*Селекты кастомные*/
     $('select').niceSelect();
        
    $('.catalog_nav .item_col .h5').click(function(){
        $('.catalog_nav .item_col ul').removeClass('active');
        $(this).closest('.item').find('ul').addClass('active');
    });
    
    
	$('.main-slider .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots:false,
		prevArrow:'.main-slider .controlers .prev',
		nextArrow:'.main-slider  .controlers .next'       
	}); 
	$('.brend__slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
        dots:false,
		prevArrow:'.brend__wrapper .controlers .prev',
		nextArrow:'.brend__wrapper  .controlers .next',
		  responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
                vertical:false
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
                vertical:false
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,
                vertical:false
			  }
			}              
		  ]	        
	});     
    
    
	$('.ct1 .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
        dots:false,
		prevArrow:'.ct1 .controlers .prev',
		nextArrow:'.ct1  .controlers .next',
		  responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3 
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2 
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1 
			  }
			}              
		  ]	        
	});
	$('.ct2 .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
        dots:false,
		prevArrow:'.ct2 .controlers .prev',
		nextArrow:'.ct2  .controlers .next',
		  responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3 
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2 
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1 
			  }
			}              
		  ]	        
	});     
    
	function pde(e){
		if (e.preventDefault) {
			e.preventDefault();
		}
		else {
			e.returnValue = false;
		}
	}
 

	/* Scroll on Top */
	$('.back-to-top').click(function(evt){
		$('html, body').animate({scrollTop: '0'}, 1200, 'easeInOutCubic');
		pde(evt);
	});	   
    
    
  $(".numbers-column").append('<div class="dec button">-<img src="img/arrow_down.png"></div> <div class="inc button"><img src="img/arrow_up.png">+</div> ');

//  $(".numbers-column").append('<div class="dec button">-</div> <div class="inc button">+</div> ');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	}

    $button.parent().find("input").val(newVal);

  });

 
    if( $('body').width() < 700 ){
        $('.cart_page .last td:first-child').attr('colspan', '1');
    }
     
    
	
}); 
 
$(document).scroll(function (){
	// var position = $(document).scrollTop();
	// var headerHeight = $('#header').outerHeight();
	var value = $(this).scrollTop();
	/* Show "Back to Top" button */
	if ( value > 100 ){
		$(".back-to-top").addClass('show-to-top');
	} else {
	 	$(".back-to-top").removeClass('show-to-top');
	}

}); 
 
document.createElement("section");


 
