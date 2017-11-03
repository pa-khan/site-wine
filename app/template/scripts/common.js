$(document).ready(function($) {

	/* Phone mask */
	$('.input_phone input').mask('+7 (999) 999-99-99');
	
	$('.panel__nav a, .footer__nav a').click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top - 50;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});

	$('.catalog__button').click(function(event) {
		var title = $(this).parents('.catalog__item').find('.catalog__subtitle').html();
		// title.hide();
		$('#popup-order .form__title').html('Заказ на дубовую щепу: <br />' + title);
	});

	$('.panel__hum').click(function(event) {
		$(this).toggleClass('panel__hum_click');
		$('.panel__nav').toggle();
	});


	$(window).resize(function(event) {
		if ($(window).width() >= 1050) {
			$('.panel__hum').removeClass('panel__hum_click');
			$('.panel__nav').removeAttr('style');
		}
	});
});