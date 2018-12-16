 $(document).ready(function(){	
     $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-header .mob-wrap ').slideToggle();
    }); 
	 
}); 
 
 