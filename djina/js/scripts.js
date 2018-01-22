$(document).ready(function(){	
	var videoMain = document.getElementById('video-main');
	videoMain.play();
	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-header .nav').slideToggle();
    }); 	
	
	
	var num = 0;
	$('.service-nav li').each(function(index){
		num = num + 2;
		$(this).find('a').css('transition-delay', '0.'+num+'s');
		$(this).find('a').css('-webkit-transition-delay', '0.'+num+'s');
	});
	
    $('.service-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
		setTimeout(function(){
			$('.service-nav').toggleClass('active');
		},100);
        $('.service-nav').slideToggle();
    }); 	
	
	var countN = 0;
	$('.portfolio-list a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		if($(this).find('video').hasClass('video')){
			countN =  countN + 1;
			console.log(countN);
			if(countN == 2){
				location.href = link;
			}
		}else{
			location.href = link;
		}
	});
	$('.portfolio-list a').mouseover(function(){
		var count = 0;
		if($(this).find('.video').hasClass('video')){
			count = 1;
//			console.log(count);
				$(this).addClass('active');
			var idV = $(this).find('video').attr('id');
			var video = document.getElementById(idV);
			video.play();		
		};
	});
	$('.portfolio-list a').mouseout(function(){
		if($(this).find('.video').hasClass('video')){
			$('.portfolio-list a').removeClass('active');
			var idV = $(this).find('video').attr('id');
			var video = document.getElementById(idV);
			video.pause();		
			video.currentTime = 0;		
		}
	});
	
	$('.seo-wrap .item .detail').click(function(e){
		e.preventDefault();
		$(this).fadeOut(0);
		$(this).closest('.item').addClass('active');
		$(this).closest('.item').find('.hover').fadeIn();
	});
	$('.seo-wrap .close').click(function(){
		$('.seo-wrap .item .detail').fadeIn(0);
//		$(this).removeClass('active');
		$(this).closest('.item').find('.hover').fadeOut();
	});	
	
	  $(this).keydown(function(eventObject){
		if (eventObject.which == 27)
			$('.create-modal').fadeOut();
	 });	
	
	$('.wrap-type-site a, .callback').click(function(e){
		e.preventDefault();
		$('.create-modal').fadeIn();
	});
	
	$('.create-modal .close').click(function(e){
		e.preventDefault();
		$('.create-modal').fadeOut();
	});	
	
    $("#create-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "create.php",
			data: $("#create-form").serialize()
		}).done(function() {
            $("#create-form").trigger("reset");
            $(".create-modal").fadeOut();
            $(".thank-modal").fadeIn();
		});
		return false;
	});	
	
 
	
	$('input[type="tel"]').mask("+7(999)999-99-99");
 
}); 
 
$(window).load(function() {
   new WOW().init();
});
 