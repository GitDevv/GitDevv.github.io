$(document).ready(function(){	
    

    $('.footer .button-write').click(function(e){
        e.preventDefault();
        $('#fw').fadeIn();
        $('body').addClass('over');
    });
    $('.form-write .close').click(function(e){
        e.preventDefault();
        $('.form-write').fadeOut();
        $('body').removeClass('over');
    });   
    $('#sps button').click(function(e){
        e.preventDefault();
        $('.form-write').fadeOut();
        $('body').removeClass('over');
    });     
    
   
    
    $('.header .toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('active');
    });
    $('.techno a').click(function(e){
        e.preventDefault();
        $('.modal-techno').fadeIn();
        $('body').addClass('over');
        
    });  
    $('.modal-techno .close').click(function(e){
        e.preventDefault();
        $('.modal-techno').fadeOut();
        $('body').removeClass('over');
    });        
 
    
	$('.case-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '140px',          
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				centerMode: true,
				slidesToShow: 2,
                centerPadding: '120px'                 
			  }
			},			
			{
			  breakpoint: 600,
			  settings: {
				centerMode: false,
				slidesToShow: 1
			  }
			}
		]        
		
	});    
	$('.slider-comp').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '140px',          
		responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				centerMode: true,
				slidesToShow: 1,
                centerPadding: '180px'                 
			  }
			},			
			{
			  breakpoint: 680,
			  settings: {
				centerMode: true,
				slidesToShow: 1,
                centerPadding: '30px' 
			  }
			}
		]        
		
	});    
    
    
//    if( $('body').width() < 690 ){
//	$('.company-items ul').slick({
//		slidesToShow: 1,
//		slidesToScroll: 1,
//		arrows: false,
//        dots: false,        
//				centerMode: true,
//				slidesToShow: 1,
//                centerPadding: '40px'          
//		
//	});      
//    }
	    
    $("#form-write").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#form-write").serialize()
		}).done(function() {
            $("#form-write").trigger("reset");
            $("#fw").fadeOut();
            $("#sps").fadeIn();
		});
		return false;
	});    
 	 
	
    
      
    
}); 
 
$(window).load(function () {
  new WOW().init();
});
 
