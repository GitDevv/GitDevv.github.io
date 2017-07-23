$(document).ready(function(){	
    

    $('.etap .list-radio .radio').click(function(e){
        e.preventDefault();
        $('.etap .list-radio .radio').removeClass('checked');
        $(this).addClass('checked');
    });
    
    $('.booking-info   .toggle').click(function(e){
        e.preventDefault();
//        $(this).toggleClass('active');
        $('.booking-info .wrap').slideToggle();
    });    
    
    $('.mob-header .toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mob-header .menu').slideToggle();
    });
    
    $('.faqs .question ').click(function(){
        var $item = $(this).closest('.item'),
            itemOther = $('.faqs .item');
        
        if(!$item.hasClass('active')){
            itemOther.removeClass('active');
            $item.addClass('active');
            itemOther.find('.answer').slideUp();
            $item.find('.answer').slideDown();
        }else{
            itemOther.removeClass('active');
            itemOther.find('.answer').slideUp();            
        }
    });
    
    $('.nice_select').niceSelect();
    
    
	$('.slider-customer').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				centerMode: true,
				slidesToShow: 3,
                centerPadding: '0px'                 
			  }
			},			
			{
			  breakpoint: 600,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
                arrows: false
			  }
			}
		]        
		
	});    
	    
 
    $(".numbers-column").append('<div class="dec button">-</div> <div class="inc button">+</div> ');

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
 	 
	
    
    $('.buttons .show-1').click(function(e){
        e.preventDefault();
        $('.etap, .item-e').removeClass('active');
        $('.etap-1').addClass('active');
        $('.indicator .item').removeClass('active');
        $('.indicator .in1').addClass('active');        
    });    
    $('.buttons .show-2').click(function(e){
        e.preventDefault();
        $('.etap, .item-e').removeClass('active');
        $('.etap-2').addClass('active');
        $('.indicator .item').removeClass('active');
        $('.indicator .in1, .indicator .in2').addClass('active');
    });
    $('.buttons .show-3').click(function(e){
        e.preventDefault();
		$('.etap, .item-e').removeClass('active');
        $('.etap-3').addClass('active');
        $('.indicator .item').removeClass('active');
        $('.indicator .in1, .indicator .in2, .indicator .in3').addClass('active');
    }); 
    $('.buttons .show-4').click(function(e){
        e.preventDefault();
        $('.etap, .item-e').removeClass('active');
        $('.etap-4').addClass('active');
        $('.indicator .item').removeClass('active');
        $('.indicator .in1, .indicator .in2, .indicator .in3, .indicator .in4').addClass('active');
    }); 
    $('.buttons .show-5').click(function(e){
        e.preventDefault();
        $('.etap').removeClass('active');
        $('.etap-5').addClass('active');
        $('.indicator .item').removeClass('active');
        $('.indicator .in1, .indicator .in2, .indicator .in3, .indicator .in4, .indicator .in5').addClass('active');
    });     
//    $('input[type=checkbox] ').styler();   
    
    $('.edit-prof').click(function(e){
        e.preventDefault();
        $('.modal-edit').fadeIn();
    });
    $('.modal-edit .close').click(function(e){
        e.preventDefault();
        $('.modal-edit').fadeOut();
    });
    
    $('.add-payment').click(function(e){
        e.preventDefault();
        $('.add-payment-modal').fadeIn();
    });
    $('.moday-bags .close').click(function(e){
        e.preventDefault();
        $('.moday-bags').fadeOut();
    });     
    
}); 
 
//$(window).load(function () {
//  new WOW().init();
//});
// 
