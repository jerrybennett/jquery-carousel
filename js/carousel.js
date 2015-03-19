$(function (){

	var numberSlides = $('.slide').size(),
		slideWidth = $('.slide').width(),
		scrollValue = 0;

	// set width of the #tray
	$('#tray').width(numberSlides * slideWidth);

	$('#next').click(function(event){
		event.preventDefault();
		scrollValue += 1;
		var position = scrollValue * slideWidth;
		$('#tray').animate({right: position}, 400);
	});

	$('#prev').click(function(event){
		event.preventDefault();
		scrollValue -= 1;
		var position = scrollValue * slideWidth;
		$('#tray').animate({right: position}, 400);
	});

});