//function hasActiveBtn(count){
//    $('#sign-up-first .btn').each(function(count){
//        if($(this).hasClass('active')){
//            count++;
//        }
//    });    
//}

$(document).ready(function(){	
	jQuery('.scroll').bind('click',function(e){
		e.preventDefault();
		var anchor = jQuery(this);
		jQuery('html, body').stop().animate({
			scrollTop:jQuery(anchor.attr('href')).offset().top - 70
		}, 1500);
	});	     
    
    setTimeout(function(){
        $('#modal-stepSingup1').fadeIn();
    }, 30000);
    
	$('.wrap-check .checkbox').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});  
    var count = 0;
    $('#sign-up-first .btn').click(function(e){
        e.preventDefault();
        $(this).addClass('active');
        count++;        
        $('#sign-up-first .btn').each(function(){
            if($(this).hasClass('active')){              
               if(count <= 1 ){
                    $(this).text('Loading...');
                }                  
            }            
        });  
    });     
    
    
//    setInterval(function(){
//        $('.tab-papers .form-group').each(function(){
//            if($(this).find('input').prop('checked')){
//                $(this).addClass('active');
//            }else{
//                $(this).removeClass('active');
//            }
//        });  
//        if($('.tab-papers .form-group').hasClass('active')){
//            $('#modal-stepSingup3  .wrap-btn a').removeClass('deactive');
//        }else{
//            $('#modal-stepSingup3 .wrap-btn a').addClass('deactive');
//        };
//        
// 
//        
//    }, 100);
    
        
    
    
//    $('.tab-papers label').click(function(){
//        if($(this).closest('.form-group').hasClass('active')){
//            $(this).closest('.form-group').removeClass('active');
//        }else {
//            $(this).closest('.form-group').addClass('active');
//        };
//        
//    });
    
	jQuery('.scroll').bind('click',function(e){
		e.preventDefault();
		var anchor = jQuery(this);
		jQuery('html, body').stop().animate({
			scrollTop:jQuery(anchor.attr('href')).offset().top - 70
		}, 1500,'easeInOutExpo');
		pde(e);
	});	    

    $('.chart-semi').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi5').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });
   $('.chart-semi6').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });   
   $('.chart-semi7').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 38.9],
               ['Impact area 2', 14.29],
               ['Impact area 3', 33]
           ]
        }]
    });    
   $('.chart-semi8').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 25],
               ['Impact area 2', 15],
               ['Impact area 3', 10],
               ['Impact area 4', 20],
               ['Impact area 5', 17],
               ['Impact area 6', 13]
           ]
        }]
    });  
    
   $('.chart-semi9').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: null,
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            pointFormat: '{series.name} '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    },
                    formatter: function(){
                        return this.y;
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: ' ',
            innerSize: '65%',
           data: [            
               ['Impact area 1', 25],
               ['Impact area 2', 15],
               ['Impact area 3', 10],
               ['Impact area 4', 20],
               ['Impact area 5', 17],
               ['Impact area 6', 13]
           ]
        }]
    });      
    
    
    
    $('.show-all-publication').click(function(e){
       e.preventDefault();
        $(this).fadeOut(0);
        $('.list-publication').addClass('show');
    });
    
    
    $('.top--fead .nav-tabs .second').click(function(e){
        e.preventDefault();
        $('.top--fead .nav-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.list-publication.pub-list').fadeOut(0);
        $('.list-publication.innov-list').fadeIn(0);
    });
    
    $('.top--fead .nav-tabs .first').click(function(e){
        e.preventDefault();
        $('.top--fead .nav-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.list-publication.innov-list').fadeOut(0);
        $('.list-publication.pub-list').fadeIn(0);
    })    
    
	
    $('.faqs .question ').click(function(){
        var $item = $(this).closest('.item'),
            itemOther = $('.faqs .item');
        
        if(!$item.hasClass('active')){
            itemOther.removeClass('active');
            $item.addClass('active');
            itemOther.find('.answer').slideUp();
            $item.find('.answer').slideDown();
        }else{
            itemOther.removeClass('active');
            itemOther.find('.answer').slideUp();            
        }
    });	
 
	$('.slider-customer').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2               
			  }
			},			
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
                arrows: false
			  }
			}
		]        
		
	});  	
	
	$('.manage-publication form .btn').click(function(e){
		e.preventDefault();
		$(this).closest('.etap-1').fadeOut(0);
		$('.manage-publication .etap-2').fadeIn(0);
	});
	$('.manage-publication .back').click(function(e){
		e.preventDefault();
		$(this).closest('.etap-2').fadeOut(0);
		$('.manage-publication .etap-1').fadeIn(0);
	});	
	
	$('.to-step1').click(function(e){
		e.preventDefault();
		$(this).closest('.step-s').fadeOut(0);
		$('.step1-sign').fadeIn(0);
	});	
	$('.to-step2').click(function(e){
		e.preventDefault();
		$(this).closest('.step-s').fadeOut(0);
		$('.step2-sign').fadeIn(0);
	});
	$('.to-step3').click(function(e){
		e.preventDefault();
		$(this).closest('.step-s').fadeOut(0);
		$('.step3-sign').fadeIn(0);
	});	
	$('.to-step4').click(function(e){
		e.preventDefault();
		$(this).closest('.step-s').fadeOut(0);
		$('.step4-sign').fadeIn(0);
	});		
	
	
	 $('.cont').each(function(){
		var val = parseInt($(this).find('.percent').val());
		 console.log(val);
		var $circle = $(this).find('.bar');
		 console.log($circle);

		if (isNaN(val)) {
			val = 0; 
		}
		else{
			var r = $circle.attr('r');
			var c = Math.PI*(r*2);

			if (val < 0) { val = 0;}
			if (val > 100) { val = 100;}

			var pct = ((100-val)/100)*c;

			$circle.css({ strokeDashoffset: pct});

			$(this).attr('data-pct',val);
		}	 
	});
	
//	$('.search input').on('input keyup', function(e) {
//		var valueText = $(this).val(),
//			lengthV = valueText.length;
//    	if(lengthV >= 1){
//			$('.wrap-search').slideDown();
//			$(this).closest('form').addClass('active');
//		}else{
//			$('.wrap-search').slideUp();
//			$(this).closest('form').removeClass('active');
//		}
//	});
    
	$('.search input').on('click', function(e) {
			$('.wrap-search').slideDown();
			$(this).closest('form').addClass('active');
	});    
	 
    
	 
	
	$('.nav-tabs a').click(function(e){
		e.preventDefault();
		$('.nav-tabs a').removeClass('active');
		$(this).addClass('active');
		
	});
	
	$('.all-links-toggle a').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.sidebar .other-links').slideToggle();
		
	});
	
	$('[data-toggle]').click(function(e){
		e.preventDefault();
		$(this).closest('.modal-wrapper').fadeOut();
		var link = $(this).attr('data-toggle');
		$('#'+link).fadeIn();
		$('#'+link).addClass('active');
		$('body').css('overflow','hidden');
	});
	
	$('.modal-wrapper .close').click(function(e){
		$(this).closest('.modal-wrapper').fadeOut(0);
		$(this).closest('.modal-wrapper').removeClass('active');
		$('body').css('overflow-y','auto');
	});
	
	$('.careerFit a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-tab');
		$('[data-tab]').removeClass('active');
		$(this).addClass('active');
		
		$('.tabs-Fit .tab').removeClass('active');
		$('#' + link).addClass('active');
	});	
	
	$('.linkTab-card a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-tab');
		$(this).closest('.modal').find('[data-tab]').removeClass('active');
		$(this).addClass('active');
		
		$(this).closest('.modal').find('.tabs-card .tab').removeClass('active');
		$('#' + link).addClass('active');
	});		
	
	$('.setting-linkTab a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-tab');
		$('[data-tab]').removeClass('active');
		$(this).addClass('active');
		
		$('.setting-tab .tab').removeClass('active');
		$('#' + link).addClass('active');
	});		
	
	$('.preferences-tabLink a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('tab-link');
		$('[tab-link]').removeClass('active');
		$(this).addClass('active');
		
		$('.preferences-tabs .tab').removeClass('active');
		$('#' + link).addClass('active');
	});	
	
	$('.profile--tabLink a').click(function(e){
		e.preventDefault();
		var link = $(this).attr('data-tab');
		$('[data-tab]').removeClass('active');
		$(this).addClass('active');
		
		$('.tab').removeClass('active');
		$('#' + link).addClass('active');
	});
	
 
	
	//bell
	$('.bell').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.notifications').slideToggle();
    }); 
	
	$(document).click(function(e){
		var bell = $('.bell');
		if ($('.bell').hasClass('active')) {
			if ($(e.target).closest('li').length===0) {
				$('.bell').removeClass('active');
				$('.notifications').slideUp();
			}
		}
	});		
	
	
	//sidebar mobile
    $('.toggle-sidebar').click(function(e){
        e.preventDefault();
        $('.toggle-sidebar .toggle').toggleClass('active');
        $('.sidebar').slideToggle();
    }); 	
	
	//profile header
    $('.toggle-profile').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.profile-nav').slideToggle();
    }); 	
		
	//mobile menu
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-header .mob-wrap ').slideToggle();
    }); 	
	$(document).click(function(e){
		var bell = $('.bell');
		var profile = $('.toggle-profile');
		
		if ($('.bell').hasClass('active')) {
			if ($(e.target).closest('li').length===0) {
				$('.bell').removeClass('active');
				$('.notifications').slideUp();
			}
		}
		if ($('.toggle-profile').hasClass('active')) {
			if ($(e.target).closest('.profile').length===0) {
				$('.toggle-profile').removeClass('active');
				$('.profile-nav').slideUp();
			}
		}		
	});		
	
	
	if($('body').width() < 992 ){
		$('#sidebar').removeAttr('id');
	$(document).mousedown(function(e){
		var input = $('.search input');
		if (input.closest('form').hasClass('active')) {
			if ($(e.target).closest('.search').length===0) {
				input.closest('form').removeClass('active');
				$('.wrap-search').slideUp();
			}
		}
	});	         
	}else{
        
	$(document).click(function(e){
		var input = $('.search input');
		if (input.closest('form').hasClass('active')) {
			if ($(e.target).closest('.search').length===0) {
				input.closest('form').removeClass('active');
				$('.wrap-search').slideUp();
			}
		}
	});	         
		(function(){
		var a = document.querySelector('#sidebar'), b = null, P = 0;
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
		  if (b == null) {
			var Sa = getComputedStyle(a, ''), s = '';
			for (var i = 0; i < Sa.length; i++) {
			  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
				s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
			  }
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
			  b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
			  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#center').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
		  if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
			  b.className = 'stop';
			  b.style.top = - R +'px';
			} else {
			  b.className = 'sticky';
			  b.style.top = P + 'px';
			}
		  } else {
			b.className = '';
			b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
			a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
		})();
		(function(){
		var a = document.querySelector('#rightbar'), b = null, P = 0;
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
		  if (b == null) {
			var Sa = getComputedStyle(a, ''), s = '';
			for (var i = 0; i < Sa.length; i++) {
			  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
				s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
			  }
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
			  b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
			  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#center').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
		  if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
			  b.className = 'stop';
			  b.style.top = - R +'px';
			} else {
			  b.className = 'sticky';
			  b.style.top = P + 'px';
			}
		  } else {
			b.className = '';
			b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
			a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
		})()		
	}
	 
}); 
 
 