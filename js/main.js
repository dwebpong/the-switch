$('button').on('click', function() {

	if ( $(this).hasClass('on') ) {

		$(this).removeClass('on').addClass('off');

		$('.status').text('Too dark!');

		$('body').removeClass('light').addClass('dark');

	}

	else if ( $(this).hasClass('off') ) {

		$(this).removeClass('off').addClass('on');

		$('.status').text('Too bright!');

		$('body').removeClass('dark').addClass('light');

	}

});












