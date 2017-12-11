$(document).ready(function(){	
	
	$('.timetables-list .detail').click(function(e){
		e.preventDefault();
		$('body').css('overflow-y','hidden');
		$('.modal-timetable').addClass('active');
	});
	$('.modal-timetable .back').click(function(e){
		e.preventDefault();
		$('body').css('overflow-y','auto');
		$('.modal-timetable').removeClass('active');
	});	
	
	
	$('.top-cs .toggle-cs-left').click(function(e){
		e.preventDefault();
		$('.left-cs').toggleClass('active');
	});
	
	$('.tabs-link a').click(function(e){
		e.preventDefault();
		$('.tabs-link a').removeClass('active')
		$(this).addClass('active')
		var link = $(this).attr('link-tab');
		$('.tab').removeClass('active');
		$('.tab').slideUp('active');
		$('#'+link).slideDown('active');
	});
	
	$('.info-about .all-button').click(function(e){
		e.preventDefault();
		$(this).closest('.info-about').find('.div-toggle').slideToggle();
	});
	
	
	$('.zoom-out').click(function(e){
		e.preventDefault();
		$.fancybox.close( );
		$('.zoom-out').fadeOut(0);
	});
	$('.big-image a, .list-image-inner li  a, .photo-line a').click(function(){
		$('.zoom-out').fadeIn(0);
	});
	
	setInterval(function(){
		$('.banner-slider .slide img').css('display','block!important');
	}, 30);
	$('#file-attach .file').click(function(){
		$(this).closest('.modal-wrap').fadeOut();
	});	
	$('.route-comment .file').click(function(e){
		e.preventDefault();
		$('#file-attach').fadeIn();
	});
	
	$('.route-label p .pin').mouseover(function(){
		$(this).closest('.form-group').find('h4 span').addClass('active');
	});
	$('.route-label p .pin').mouseleave(function(){
		$(this).closest('.form-group').find('h4 span').removeClass('active');
	});	
	
	$('.banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows:false,
		fade:true,
		autoplay:true,
		autoplaySpeed:3000
	}); 	
	$('.photo-line').slick({
		slidesToShow: 24,
		slidesToScroll: 1,
		dots: false,
		arrows:false,
//		autoplay:true,
//		autoplaySpeed:1000,
		responsive: [
			{
			  breakpoint: 1600,
			  settings: {
				slidesToShow: 18 
			  }
			},
			{
			  breakpoint: 1400,
			  settings: {
				slidesToShow: 15 
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 12 
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 9 
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 6 
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 4 
			  }
			}	
			
		]
	}); 	
	
	$('.conditions-travel .item .arrow').click(function(){
		$(this).closest('.item').toggleClass('active').find('.wrap-list').slideToggle();
	});
	
	$(document).click(function(e){
		var links = $('.bottom-nav .search');
		if ($('.bottom-nav .search').hasClass('active')) {
			if ($(e.target).closest('.item-s').length===0) {
				links.removeClass('active');
				$('.search-f').removeClass('active');				
			}
		}
	});		
	
	$('input[type="tel"]').mask("+7(999) 999 - 99 - 99");
	$('.conditions-travel .item .right input').mask("999");
	$('.conditions-travel .number-p').mask("99999");
	
    $("#callback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback-form").serialize()
		}).done(function() {
            $("#callback-form").trigger("reset");
            $("#sps").fadeIn();
		});
		return false;
	});   
    $("#contacts-f").submit(function() {
		$.ajax({
			type: "POST",
			url: "contacts.php",
			data: $("#contacts-f").serialize()
		}).done(function() {
            $("#contacts-f").trigger("reset");
            $("#sps").fadeIn();
		});
		return false;
	});    	
 	 	
	$('.cosing-form .col  input[type=submit]').click(function(e){
		e.preventDefault();
		$('#sps-order').fadeIn();
	});
	
	$('a.callback').click(function(e){
		e.preventDefault();
		var call = $(this).attr('call-attr');
		$('#'+call).fadeIn();
	});
	
	
	$('.modal-wrap .close, .first-info .ok').click(function(e){
		e.preventDefault();
		$(this).closest('.modal-wrap').fadeOut();
	});
	
	
	$('.bottom-nav .search').click(function(e){
        e.preventDefault();
		$(this).toggleClass('active');
		$('.search-f').toggleClass('active');
	});
	
	$('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mob-header').slideToggle();
        $('.nav-list').slideToggle();
    });	
 
	
	 $('.accordeon .item-title').click(function(e){
		 e.preventDefault();
		 var thisI = $(this).closest('.item');
		 if(!thisI.hasClass('active')){
			 $('.accordeon .item').removeClass('active');
			 thisI.addClass('active');
			 $('.accordeon .item-title').removeClass('active');
			 $(this).addClass('active');
			 $('.accordeon .item-info').stop().slideUp();
			 thisI.find('.item-info').stop().slideDown();
		 }else{
			 
			 $('.accordeon .item').removeClass('active');
			 $(this).removeClass('active');
			 thisI.find('.item-info').slideUp();
		 }
	 });
 
	$('.accordeon .item').each(function(index){
 		$(this).css('-webkit-animation-delay','0.'+index+'s');
 		$(this).css('-o-animation-delay','0.'+index+'s');
 		$(this).css('animation-delay','0.'+index+'s');
	});
 
	$('.list-reviews a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-link');
		$('#'+link).fadeIn();
		$('body').css('overflow-y','hidden');
	});
	
	$('.modal-r .closes, .modal-r .close').click(function(e){
		e.preventDefault();
		$(this).closest('.modal-r').fadeOut();
		$('body').css('overflow-y','auto');
	});
	if($('body').width() < 768){
		$('.anim1').addClass('hidden');		
	} 		
	
	
	if($('body').width() > 768){
		$('.timetables-list .detail').click(function(e){
			e.preventDefault();
			$('body').css('overflow-y','hidden');
			$('.modal-timetable').addClass('active');
		});
		$('.modal-timetable .back').click(function(e){
			e.preventDefault();
			$('body').css('overflow-y','auto');
			$('.modal-timetable').removeClass('active');
		});			
	}
	
}); 
 
 $(window).load(function() {
	 
 
	if($('body').width() > 768){
			$('.anim1 .item:nth-child(1) ').addClass('active');
			setTimeout(function(){
				$('.anim1 .item:nth-child(2) ').addClass('active');
			}, 3300);	
			setTimeout(function(){
				$('.anim1 .item:nth-child(3) ').addClass('active');
			}, 6400);	 
			setTimeout(function(){
				$('.anim1').addClass('hidden');			
				$('.anim2').addClass('active');
				$('.banner').addClass('anim3');			
			}, 11000);	
			setTimeout(function(){
				$('.banner .icon, .banner .number img, .banner .number span, .banner .item h4').css('transition-duration','0s');			
				$('.banner .icon, .banner .number img, .banner .number span, .banner .item h4').css('transition-delay','0s');					
			}, 13000);		
		setInterval(function(){
				$('.banner .icon').css('transition-duration','0.6s');			
				$('.banner .number img').css('transition-duration','0.6s');			
				$('.banner .number span').css('transition-duration','0.6s');			
				$('.banner .item h4').css('transition-duration','0.4s');	
				$('.banner .number img').css('transition-delay','.7s');			
				$('.banner .number span').css('transition-delay','1.6s');			
				$('.banner .item h4').css('transition-delay','2s');				
			$('.anim1 .item:nth-child(1) ').addClass('active');
			setTimeout(function(){
				$('.anim1 .item:nth-child(2) ').addClass('active');
			}, 3300);	
			setTimeout(function(){
				$('.anim1 .item:nth-child(3) ').addClass('active');
			}, 6400);	 
			setTimeout(function(){
				$('.anim1').addClass('hidden');			
				$('.anim2').addClass('active');
				$('.banner').addClass('anim3');			
			}, 11000);	
			setTimeout(function(){
				$('.banner .icon, .banner .number img, .banner .number span, .banner .item h4').css('transition-duration','0s');			
				$('.banner .icon, .banner .number img, .banner .number span, .banner .item h4').css('transition-delay','0s');				
				$('.anim1 .item:nth-child(1) ').removeClass('active');
				$('.anim1 .item:nth-child(2) ').removeClass('active');
				$('.anim1 .item:nth-child(3) ').removeClass('active');
				$('.anim1').removeClass('hidden');			
				$('.anim2').removeClass('active');
				$('.banner').removeClass('anim3');			
			}, 13000);			
		}, 14000);
	 }
	if($('body').width() < 768){
		$('.anim1').addClass('hidden');
		setTimeout(function(){
			$('.anim2').addClass('active');
			$('.banner').addClass('anim3');
		}, 600);		
		
	}
	 
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});	 
	 
  
	 
	 
});
	   $(window).load(function() {
		   $('.preloader').fadeOut();
	   });