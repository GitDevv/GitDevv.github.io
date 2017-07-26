$(document).ready(function(){	
	
     $('.main-b a').click(function(e){
        e.preventDefault();
        $('.modal-wrap').fadeIn();
    });	
     $('.modal-wrap .close').click(function(e){
        e.preventDefault();
        $('.modal-wrap').fadeOut();
    });		
	
	$("#member").submit(function() {
		$.ajax({
			type: "POST",
			url: "member.php",
			data: $("#member").serialize()
		}).done(function() {
            $("#member").trigger("reset");
            $("#member .wrap-form").fadeOut();
            $("#member .wr-thanks").fadeIn();
		});
		return false;
	}); 	
	
     $('.header .toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header .nav-list').slideToggle();
    });
	
	
	
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
			scrollTop:jQuery(anchor.attr('href')).offset().top - 80
		}, 1500,'easeInOutExpo');
		pde(e);
	});	
	
	
 
	
}); 
 
 
