$(document).ready(function(){	
	
	$('.header .toggle').click(function(){
		$(this).toggleClass('active');
		$('.header .wrap-list').slideToggle();
	});
	
	
 
       
 	$('.select').niceSelect();	
    
//	$('.home-slider, .card-slider').slick({
//		slidesToShow: 1,
//		slidesToScroll: 1,
//		arrows: false,
//        dots: true                 
//	});    
// 
//	$('.tab a').click(function(e){
//		e.preventDefault();
//		var link = $(this).attr('data-id');
//		$('.tab a').removeClass('active');
//		$(this).addClass('active');
//		$('.tab-item').removeClass('active');
//		$('#'+link).addClass('active');
//		
//	});
//    
//    $(".numbers-column").append('<div class="dec button">-</div> <div class="inc button">+</div> ');
//
//  $(".button").on("click", function() {
//
//    var $button = $(this);
//    var oldValue = $button.parent().find("input").val();
//
//    if ($button.text() == "+") {
//  	  var newVal = parseFloat(oldValue) + 1;
//  	} else {
//	   // Don't allow decrementing below zero
//      if (oldValue > 0) {
//        var newVal = parseFloat(oldValue) - 1;
//	    } else {
//        newVal = 0;
//      }
//	}
//
//    $button.parent().find("input").val(newVal);
//
//  });       
    
}); 
 
 
