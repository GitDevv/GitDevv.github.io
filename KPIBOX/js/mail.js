var submitForm = function(form) {
	$.post(
		'php/form.php',
		$('#' + form).serialize(),
		function( response ) {
			var data = $.parseJSON(response);
			if ( data.result == 'ok' ) {
				$('#' + form)[0].reset();
				$('.pop-form-style').addClass('active');
/*				$('.error', '#' + form).html('<span class="success">Письмо успешно отправлено!</span>');*/
			}
			else{
				return false;
/*				$('.error', '#' + form).addClass('active');
				$('.error', '#' + form).html('<span class="error">' + data.message + '</span>');*/
			}
		}
	)
	return false;
};
