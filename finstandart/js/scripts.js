$(document).ready(function(){	
	$('.slider_team').slick({
		slidesToShow: 4,
		dots: false,  	
        arrows:true,
        prevArrow:'.wrap_slider .controlers .prev',
        nextArrow:'.wrap_slider .controlers .next'  , 
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				centerMode: false,
				slidesToShow: 3,
			  }
			} ,            
			{
			  breakpoint: 530,
			  settings: {
				centerMode: false,
				slidesToShow: 1,
			  }
			}
		]          
	}); 
    
    
    
    $('a.callback').click(function(e){
        e.preventDefault();
        $('.modal_wrapper').addClass('active');
    });
    $('.modal_wrapper .closes, .modal_wrapper .close').click(function(e){
        e.preventDefault();
        $('.modal_wrapper').removeClass('active');
    });    
    
    $(".fancybox").fancybox();
	    
    /*Селекты кастомные*/
     $('select').niceSelect();
        
	
}); 
 
 
 
document.createElement("section");


 
