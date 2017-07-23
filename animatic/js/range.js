  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [  30, 60 ],
      slide: function( event, ui ) {
          $( "#amount1" ).val( ui.values[ 0 ] );
		  $( "#amount2" ).val( ui.values[ 1 ] );
      }
    });
      $( "#amount1" ).val(  $( "#slider-range" ).slider( "values", 0 )  );
	  $( "#amount2" ).val(  $( "#slider-range" ).slider( "values", 1 ) );
  });

$(document).ready(function(){
    
    setInterval(function() {
        var rLeft = parseInt($('#amount1').val());
        $('.shkala .left').css('width', rLeft+'%');
        
        var rRight = parseInt($('#amount2').val());
        console.log(rRight);
        $('.shkala .right').css('width', 100-rRight+'%');        
    }, 50);
 
    
})