$(document).on('click', '.arr1', function(){
  $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '.arr2', function(){
  $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '.arr3', function(){
  $.fn.fullpage.moveSectionDown();
});

$(document).ready(function() {
 
//	$('.slider-1').fullpage({
//		menu:'#menu',
//		scrollOverflow:true,
//		slidesNavigation: true,		
//    sectionSelector: '.section-slide',
// 
//	});

	
     
	$('button.slick-next').click(function(){
		if($('#slick-slide02').hasClass('slick-active')){
			$('button.slick-next').addClass('active');
		}else{
			$('button.slick-next').removeClass('active');
		}
	});	
 		
	
	$('.mod-frame, img.worka').click(function(){
	 

		var $this = $(this),
			item = $this.closest('.content-slide'),
			list = $this.closest('.portfolio'),
			button = item.find('.mod-frame'),
			buttons = list.find('.mod-frame'),
			content = item.find('.worka'),
			otherContent = list.find('.worka');	
		
		if( !content.hasClass('active') ){
			otherContent.removeClass('active');
			content.addClass('active');
			buttons.removeClass('active');
			$this.addClass('active');
			$('.mod-frame').addClass('active');
			$('body').addClass('active-2');
			 
			$('.slider-portfolio').addClass('active');
		}else{
			content.removeClass('active');
			otherContent.removeClass('active');
			buttons.removeClass('active');
			$this.removeClass('active');
			$('.mod-frame').removeClass('active');
			$('body').removeClass('active-2');
		 
			$('.slider-portfolio').removeClass('active');
		}
	});	
	
	

    $("body").fadeIn(1000);

	$(".menu-list a, .logo a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
	
	$('.button-menu ').click(function(){
		var $this = $(this);
		 
		if(!$($this).hasClass('active')){
			$('.button-menu').removeClass('active');
			$($this).addClass('active');
		}else{
			$($this).removeClass('active'); 
		};
		$('body').addClass('active'); 
      	$('.menu-wrapper').fadeIn().addClass('active');
    	 
		 
	});
	$('.menu .clos-m, .closes-menu').click(function(){
		$('.button-menu, body, .menu-wrapper ').removeClass('active');
		$('.menu-wrapper').fadeOut();
	});
	
	$('.slider-portfolio-all, .slider-portfolio ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear' 
	});	
	$(' .slider-about').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear' 
	});	
	
	$('a[href^="#"]').click(function(){
			var el = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(el).offset().top}, 1000);
			return false; 
	});	
 
	
 
});
 
	 
	 
 
 

 

$(document).ready(function () {
	 
	
     $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
     });
     $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
     });
     
	
 
 
}); 

 $(document).ready(function () {
 
 	 
     
}); 