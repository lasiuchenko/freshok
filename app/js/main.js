$(function () {
	$(document).ready(function() {
		$('.catalog').on('click', function () {
			$(this).next().slideToggle(2000);
		});		
	});
})