$(document).ready(function () {

        var $menu = $("#menu");

        $(window).scroll(function(){
           if ( $(this).scrollTop() > 1 && $menu.hasClass("default") ){
                $menu.fadeIn('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 1 && $menu.hasClass("fixed")) {
                $menu.fadeIn('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });//scroll
    
        $(".navbar_prod_all_content_right .product_more_button").click(function(){
            $(".wrapper_form_first_prod").show();
        }); 
    
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        $(".form_product_big_right .prod_sposob_nanes .prod_more_plus").click(function(){
            $(".form_product_big_right .prod_sposob_nanes").css('border-color','#23ee7e');  
            $(".form_product_big_right .prod_sposob_nanes .prod_more_plus").css('display','none'); 
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").css('display','inline');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").css('color', '#23ee7e');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").css('border-color','#23ee7e');
            $(".form_product_big_right .prod_sposob_nanes  p").css('display','block');
            $(".form_product_big_right .prod_vutratu .prod_more_minus").click(); 
            $(".form_product_big_right .prod_zactereg .prod_more_minus").click(); 
            $(".form_product_big_right .prod_zberig .prod_more_minus").click();
        }); 
        $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").click(function(){
            $(".form_product_big_right .prod_sposob_nanes .prod_more_plus").css('color', '#b5b5b5');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_plus").css('border-color','#b5b5b5');
            $(".form_product_big_right .prod_sposob_nanes").css('border-color','#b5b5b5');  
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").css('display','none'); 
            $(".form_product_big_right .prod_sposob_nanes .prod_more_plus").css('display','inline');
            $(".form_product_big_right .prod_sposob_nanes  p").css('display','none');
        });
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        $(".form_product_big_right .prod_vutratu .prod_more_plus").click(function(){
            $(".form_product_big_right .prod_vutratu").css('border-color','#23ee7e');  
            $(".form_product_big_right .prod_vutratu .prod_more_plus").css('display','none'); 
            $(".form_product_big_right .prod_vutratu .prod_more_minus").css('display','inline');
            $(".form_product_big_right .prod_vutratu .prod_more_minus").css('color', '#23ee7e');
            $(".form_product_big_right .prod_vutratu .prod_more_minus").css('border-color','#23ee7e');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").click(); 
            $(".form_product_big_right .prod_zactereg .prod_more_minus").click(); 
            $(".form_product_big_right .prod_zberig .prod_more_minus").click();
        }); 
        $(".form_product_big_right .prod_vutratu .prod_more_minus").click(function(){
            $(".form_product_big_right .prod_vutratu .prod_more_plus").css('color', '#b5b5b5');
            $(".form_product_big_right .prod_vutratu .prod_more_plus").css('border-color','#b5b5b5');
            $(".form_product_big_right .prod_vutratu").css('border-color','#b5b5b5');  
            $(".form_product_big_right .prod_vutratu .prod_more_minus").css('display','none'); 
            $(".form_product_big_right .prod_vutratu .prod_more_plus").css('display','inline');
        });
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        $(".form_product_big_right .prod_zactereg .prod_more_plus").click(function(){
            $(".form_product_big_right .prod_zactereg").css('border-color','#23ee7e');  
            $(".form_product_big_right .prod_zactereg .prod_more_plus").css('display','none'); 
            $(".form_product_big_right .prod_zactereg .prod_more_minus").css('display','inline');
            $(".form_product_big_right .prod_zactereg .prod_more_minus").css('color', '#23ee7e');
            $(".form_product_big_right .prod_zactereg .prod_more_minus").css('border-color','#23ee7e');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").click(); 
            $(".form_product_big_right .prod_vutratu .prod_more_minus").click();
            $(".form_product_big_right .prod_zberig .prod_more_minus").click();
        }); 
        $(".form_product_big_right .prod_zactereg .prod_more_minus").click(function(){
            $(".form_product_big_right .prod_zactereg .prod_more_plus").css('color', '#b5b5b5');
            $(".form_product_big_right .prod_zactereg .prod_more_plus").css('border-color','#b5b5b5');
            $(".form_product_big_right .prod_zactereg").css('border-color','#b5b5b5');  
            $(".form_product_big_right .prod_zactereg .prod_more_minus").css('display','none'); 
            $(".form_product_big_right .prod_zactereg .prod_more_plus").css('display','inline');
        });        
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        $(".form_product_big_right .prod_zberig .prod_more_plus").click(function(){
            $(".form_product_big_right .prod_zberig").css('border-color','#23ee7e');  
            $(".form_product_big_right .prod_zberig .prod_more_plus").css('display','none'); 
            $(".form_product_big_right .prod_zberig .prod_more_minus").css('display','inline');
            $(".form_product_big_right .prod_zberig .prod_more_minus").css('color', '#23ee7e');
            $(".form_product_big_right .prod_zberig .prod_more_minus").css('border-color','#23ee7e');
            $(".form_product_big_right .prod_sposob_nanes .prod_more_minus").click(); 
            $(".form_product_big_right .prod_vutratu .prod_more_minus").click();
            $(".form_product_big_right .prod_zactereg .prod_more_minus").click(); 
        }); 
        $(".form_product_big_right .prod_zberig .prod_more_minus").click(function(){
            $(".form_product_big_right .prod_zberig .prod_more_plus").css('color', '#b5b5b5');
            $(".form_product_big_right .prod_zberig .prod_more_plus").css('border-color','#b5b5b5');
            $(".form_product_big_right .prod_zberig").css('border-color','#b5b5b5');  
            $(".form_product_big_right .prod_zberig .prod_more_minus").css('display','none'); 
            $(".form_product_big_right .prod_zberig .prod_more_plus").css('display','inline');
        });        
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    
    $(".button_konsult_big").click(function(){
         $(".form_consult_prod").css('display', 'block');
    });
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</
    $(".close_prod_form_consult").click(function(){
         $(".form_consult_prod").css('display', 'none');
    });
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</
    $(".close_prod_big").click(function(){
         $(".wrapper_form_first_prod").css('display', 'none');
    });
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</
    /*$("#home_page header .navbar-toggle").click(function(){
         $("#responsiv-menu_10").slideToggle();
    });*/
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</
    $(".product_menu_set i").click(function(){
         $(".pronuct_all_page  .product_menu_set ul").slideToggle();
    });
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</
    $(".navbar-toggle_2").click(function(){
       
         $(".navbar-brand").slideToggle();
    }); 
    
  $('#ca-container').contentcarousel();
  $('#ca-container2').contentcarousel();

  $('#works-grid').mixItUp();
  $(".works-tabs li:first").click();


  $("#works-grid .works-tabs li").click(function () {
    $(".works-tabs li").removeClass("active");
    $(this).addClass("active");
  });

  $('.ca-more').click(function () {
    if ($(document).width() <= 992) {
      $('.ca-container').css('height', '800px');
    }
  });
  $('.ca-close').click(function () {
    if ($(document).width() <= 992) {
      $('.ca-container').css('height', '400px');
    }
  });
  $('.mu-block').addClass('animated bouncelnRight');
  //$('.test-1').addClass('animated bouncelnRight');
  
  if ($(".tabs-nav #tab4-1").is(":checked")) {
    $('#content-b4-1').css('display', 'block');
  }
  $(".tabs-nav #tab4-1").on("click", function () {
    $('.tabs-b4 section[id^=content]').css('display', 'none');
    $('#content-b4-1').css('display', 'block');
  });
  $(".tabs-nav #tab4-2").on("click", function () {
    $('.tabs-b4 section[id^=content]').css('display', 'none');
    $('#content-b4-2').css('display', 'block');
  });

  if ($(".tabs-nav #tab5-1").is(":checked")) {
    $('#content-b5-1').css('display', 'block');
  }
  $(".tabs-nav #tab5-1").on("click", function () {
    $('.tabs-b5 section[id^=content]').css('display', 'none');
    $('#content-b5-1').css('display', 'block');
  });
  $(".tabs-nav #tab5-2").on("click", function () {
    $('.tabs-b5 section[id^=content]').css('display', 'none');
    $('#content-b5-2').css('display', 'block');
  });
  $(".tabs-nav #tab5-3").on("click", function () {
    $('.tabs-b5 section[id^=content]').css('display', 'none');
    $('#content-b5-3').css('display', 'block');
  });
});

$(window).load(function () {
  new WOW().init();
});

