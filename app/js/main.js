$(function () {
	$('.top-slider__list').slick({
        dots: false,
        infinite: false,
				slidesToShow: 1,
    });


	$(document).ready(function() {
		$('.catalog').on('click', function () {
			$(this).next().slideToggle(2000);
		});
	})

	
})