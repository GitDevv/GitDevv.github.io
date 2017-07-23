$(document).ready(function(){	
 
	
	$('.reviews .slider').slick({
		slidesToShow: 1,
		dots: true,  	
        arrows:true     
	});    
    
    $('.callback').click(function(e){
        e.preventDefault();
        $('.modal-wrap').addClass('active');
    });
    $('.modal-wrap .close, .modal-wrap .closes').click(function(e){
        e.preventDefault();
        $('.modal-wrap').removeClass('active');
    });    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('.modal-wrap').removeClass('active');
    });    
    
    $('.list-faq  label').click(function(){
       $(this).closest('.item').find('article').slideToggle(); 
    });
 	 
	
}); 
 
 
 
document.createElement("section");


 
