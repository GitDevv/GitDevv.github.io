$(document).ready(function(){	
	
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav-menu').slideToggle();
    }); 	
	
 	setInterval(function(){
		if(window.location.hash === '#Main'){
			$('.header').removeClass('white');
		}		
		if(window.location.hash === '#Partners'){
			$('.header').removeClass('white');
		}
		if(window.location.hash === '#Supply'){
			$('.header').addClass('white');
		}		
	},50);
	
 	$('.section').fullpage({
		menu:'#menu',
		scrollOverflow:true,
		slidesNavigation: true,		
		sectionSelector: '.section-slide',
		navigation: true,
		parallax: true,
		parallaxOptions: {
			type: 'reveal',
			percentage: 62,
			property: 'translate'
		},
		navigationPosition: 'right'	,
		navigationTooltips: ['Главная', 'Технологии','Разработка','Партнеры','Поставка'],
		scrollOverflow:true,
		anchors: ['Main', 'Technologies', 'Development', 'Partners','Supply'],
		css3: true,
		responsiveWidth: 992,
		scrollingSpeed: 1000,
		onLeave: function(index, nextIndex, direction) {
			var $thisSection = $(this);
			console.log(window.location.hash);
        
			if (index == 1) {
				$('.main-slide .arrow-down').addClass('hide');
				$('.header').addClass('white');
			};
			if (index == 2) {
				$('.header').removeClass('white');
				$('.main-slide .arrow-down').removeClass('hide');
			};
			if (index == 3 && direction == "up" ) {
				$('.header').addClass('white');
			};
			if (index == 2 && direction == "up" ) {
				$('.header').removeClass('white');
			}			
			
		}
 
	}); 
	
	$('#menu a, #fp-nav a').click(function(){
//		if(window.location.hash === '#Technologies'){
////			$('.header').addClass('white');
//		}
		var hrefT = $(this).attr('href');
		if(hrefT == '#Technologies'){
			console.log('YES');
			$('.header').addClass('white');
		}else{
			console.log('no')
		}
	});	
	
	$('.slider-skills').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	arrows:false,
	autoplay: true,
	autoplaySpeed: 3000,
	  responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			vertical:false
		  }
		} ,
		  {
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			vertical:false
		  }
		}	,
		  {
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			arrows:false
		  }
		}		  
	  ]		        
	}); 
	
	$('.wrap-2 .tabs-nav a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-link');
		
		$('.wrap-2 .tab').removeClass('active');
		$('.wrap-2 #' + link).addClass('active');
		
		$('.wrap-2 .tabs-nav a').removeClass('active');
		$(this).addClass('active');
//		$('.slider-skills').slick('destroy');
//		$('.slider-skills').slick('init');
	});
}); 
 