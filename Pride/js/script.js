$(document).ready(function(){
	
	$('.controls input').on('click');
	
// Play video 
  $('.play_video').on('click', function(e) {
    $('body').addClass('show_video');
    $('.popup_video').addClass('active');
    document.getElementById('video').src = 
    document.getElementById('video').src.replace('autoplay=0','autoplay=1');
  });
//////

// Close video 
  $('.close_video').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('show_video');
    $('.popup_video').removeClass('active');
    document.getElementById('video').src = 
    document.getElementById('video').src.replace('autoplay=1','autoplay=0');
  });
//////	
	
	
// In Club
  $('.show_modal').click(function(){
	  $('.wraper_popup').addClass('active');
	  setTimeout(function () { 
		  $('.wraper_popup .modal').addClass('active');
	  }, 400);

  });	
	
  $('.modal_close, .wraper_popup .close').click(function(){
	  $('.wraper_popup').removeClass('active');
	   $('.wraper_popup .modal').removeClass('active');
  });	
 
	
 	
});
 