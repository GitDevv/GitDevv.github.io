$(document).ready(function(){
 
	$('.button-toggle').click(function(e){
		e.preventDefault();
		$('.main-sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});
	
    $('.select_hour').niceSelect();
    
    $('.map_block .option .opt').click(function(){
        if(!$(this).closest('li').hasClass('active')){
            $('.map_block .option li').removeClass('active');
            $(this).closest('li').addClass('active');
        }else{
           $('.map_block .option li').removeClass('active'); 
        }
    });
    
    $('.item_agent input').change(function(){
        if($(this).prop('checked')){
            $('.item_agent label').removeClass('active');
            $(this).closest('label').addClass('active');
        }
    });
    
    $('.visitors form  .list_day a').click(function(e){
        e.preventDefault();
        $('.visitors form  .list_day a').removeClass('checked');
        $(this).addClass('checked');
    })
    
});

 
