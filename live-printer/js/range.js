  $(function() {
    $( "#range-sum" ).slider({
      range: false,
      min: 100000,
      max: 5000000,
      values: [ 200000],
      slide: function( event, ui ) {
          $( "#range-v1" ).val( ui.values[ 0 ] );
      }
    });
      $( "#range-v1" ).val(  $( "#range-sum" ).slider( "values", 0 )  );
  });
 
  $(function() {
    $( "#range-date" ).slider({
      range: false,
      min: 1,
      max: 240,
      values: [ 20],
      slide: function( event, ui ) {
          $( "#range-v2" ).val( ui.values[ 0 ] );
      }
    });
      $( "#range-v2" ).val(  $( "#range-date" ).slider( "values", 0 )  );
  });  

$(function() {
    $( "#range-percent" ).slider({
      range: false,
      min: 15,
      max: 60,
      values: [ 30],
      slide: function( event, ui ) {
          $( "#range-v3" ).val( ui.values[ 0 ] );
      }
    });
      $( "#range-v3" ).val(  $( "#range-percent" ).slider( "values", 0 )  );
  });

$(function() {
    $( "#range-month" ).slider({
      range: false,
      min: 3467,
      max: 173327,
      values: [ 30000],
      slide: function( event, ui ) {
          $( "#range-v4" ).val( ui.values[ 0 ] );
      }
    });
      $( "#range-v4" ).val(  $( "#range-month" ).slider( "values", 0 )  );
  });