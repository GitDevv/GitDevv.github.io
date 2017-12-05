 

$(document).ready(function(){
	$("#infoform button.btn-warning").click(function() {
		if($('#inputName1').attr('value').length <= 1){
			
			$('#inputName1').css('border-color','#d70000');
			$('.inputName1').fadeIn();
		}else{
			$('#inputName1').css('border-color','#ccc');
			$('.inputName1').hide();
		}	
		/***************************************/
		if($('#inputName2').attr('value').length <= 1){
			
			$('#inputName2').css('border-color','#d70000');
			$('.inputName2').fadeIn();
		}else{
			$('#inputName2').css('border-color','#ccc');
			$('.inputName2').hide();
		}
		/***************************************/
if($('#inputName1').attr('value').length <= 1){
			
			$('#inputName11').css('border-color','#d70000');
			$('.inputName11').fadeIn();
		}else{
			$('#inputName11').css('border-color','#ccc');
			$('.inputName11').hide();
		}	
		/***************************************/
		if($('#inputName21').attr('value').length <= 1){
			
			$('#inputName21').css('border-color','#d70000');
			$('.inputName21').fadeIn();
		}else{
			$('#inputName21').css('border-color','#ccc');
			$('.inputName21').hide();
		}
		/***************************************/		
		
		if($('#inputEmailA').attr('value').length <= 1){
			
			$('#inputEmailA').css('border-color','#d70000');
			$('.inputEmailA').fadeIn();
		}else{
			$('#inputEmailA').css('border-color','#ccc');
			$('.inputEmailA').hide();
		}
		/***************************************/
		
		if($('#inputEmailC').attr('value').length <= 1){
			
			$('#inputEmailC').css('border-color','#d70000');
			$('.inputEmailC').fadeIn();
		}else{
			$('#inputEmailC').css('border-color','#ccc');
			$('.inputEmailC').hide();
		}
		/***************************************/
		if($('#PhoneNumber').attr('value').length <= 1){
			
			$('#PhoneNumber').css('border-color','#d70000');
			$('.PhoneNumber').fadeIn();
		}else{
			$('#PhoneNumber').css('border-color','#ccc');
			$('.PhoneNumber').hide();
		}
		/***************************************/
		/***************************************/
		
		if($('#PostalCode').attr('value').length <= 1){
			
			$('#PostalCode').css('border-color','#d70000');
			$('.PostalCode').fadeIn();
		}else{
			$('#PostalCode').css('border-color','#ccc');
			$('.PostalCode').hide();
		}
		/***************************************/
		if($('#Address1').attr('value').length <= 1){
			
			$('#Address1').css('border-color','#d70000');
			$('.Address1').fadeIn();
		}else{
			$('#Address1').css('border-color','#ccc');
			$('.Address1').hide();
		}
		/***************************************/
		if($('#City').attr('value').length <= 1){
			
			$('#City').css('border-color','#d70000');
			$('.City').fadeIn();
		}else{
			$('#City').css('border-color','#ccc');
			$('.City').hide();
		}
		/***************************************/
		if($('#State').attr('value') === "Select Your State"){
			
			$('#State').css('border-color','#d70000');
			$('.State').fadeIn();
		}else{
			$('#State').css('border-color','#ccc');
			$('.State').hide();
		}		
	
		if($('#PostalCode2').attr('value').length <= 1){
			
			$('#PostalCode2').css('border-color','#d70000');
			$('.PostalCode2').fadeIn();
		}else{
			$('#PostalCode2').css('border-color','#ccc');
			$('.PostalCode2').hide();
		}
		/***************************************/
		if($('#Address1_1').attr('value').length <= 1){
			
			$('#Address1_1').css('border-color','#d70000');
			$('.Address1_1').fadeIn();
		}else{
			$('#Address1_1').css('border-color','#ccc');
			$('.Address1_1').hide();
		}
		/***************************************/
		if($('#City2').attr('value').length <= 1){
			
			$('#City2').css('border-color','#d70000');
			$('.City2').fadeIn();
		}else{
			$('#City2').css('border-color','#ccc');
			$('.City2').hide();
		}
		/***************************************/
		if($('#State2').attr('value') === "Select Your State"){
			
			$('#State2').css('border-color','#d70000');
			$('.State2').fadeIn();
		}else{
			$('#State2').css('border-color','#ccc');
			$('.State2').hide();
		}
		
		/***************************************/
		if($('#CardNumber').attr('value').length <= 1){
			
			$('#CardNumber').css('border-color','#d70000');
			$('.CardNumber').fadeIn();
		}else{
			$('#CardNumber').css('border-color','#ccc');
			$('.CardNumber').hide();
		}
		/***************************************/
		if($('#Expiration').attr('value') === "00" && $('#Expiration2').attr('value') === "0000"){
			
			$('#Expiration, #Expiration2').css('border-color','#d70000');
			$('.Expiration').fadeIn();
		}else{
			$('#Expiration, #Expiration2').css('border-color','#ccc');
			$('.Expiration').hide();
		}	
		/***************************************/
		if($('#Code').attr('value') === "" && $('#Code').attr('value') === ""){
			
			$('#Code, #Code2').css('border-color','#d70000');
			$('.Code').fadeIn();
		}else{
			$('#Code, #Code2').css('border-color','#ccc');
			$('.Code').hide();
		}		
		

	});
});


$(document).ready(function(){
   $('.block-4 option').click(function() {	
    	var $this = $(this),
             list = $this.closest('.block-4 select'),
             items = list.find('option');
  
         if(!$this.hasClass('active')){
             items.removeClass('active');
             $this.addClass('active');
         }
   });
	
	$('#check1').on('click', function(){
		if($('#check1').prop("checked")){
			$('.block-7').slideDown();
		}else{
			$('.block-7').slideUp();
		}
	});
	
   $('.block-2 .item').click(function() {	
    	var $this = $(this),
             list = $this.closest('.block-2 .wraper-item'),
             items = list.find('.item');
  
         if(!$this.hasClass('active')){
             items.removeClass('active');
             $this.addClass('active');
         }
   });
  /* $('.form-group').click(function() {	
         var $this = $(this),
             list = $this.closest('#form-details'),
             item = $this.find('.invalid'),
             items = list.find('.invalid'),
			 fcontrol = $this.find('.form-control');
  
         if(!item.is(':visible')){
 
         }
	    if(fcontrol.change()){
		 
            item.fadeIn();
	    }else{
			item.fadeOut();
		}
   });	*/
	
   $('.block-2 .item.last').click(function() {	
	   	$('.block-2 .item').fadeOut(0);
	    $('.block-2 .item-other-s').fadeIn(0);
         
   });	
   $('.block-2 .item-other-s .close').click(function() {	
	   	$('.block-2 .item').fadeIn(0);
	    $('.block-2 .item-other-s').fadeOut(0);
         
   });	
	
	
	$("#CardNumber").mask("9999 - 9999 - 9999 - 9999");
      
    
});

$(window).load(function(){
 
});
 

 

//mask phone
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
