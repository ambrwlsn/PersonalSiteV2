$(document).ready(function() {
	$('.Link').click(function(event){
		console.log(this);
		console.log($(this).attr('href'));
		event.preventDefault();
		$(window).scrollTo($(this).attr('href'), 1000, {easing:'easeInCubic'});
		//$(window).scrollTo('li:eq(15)', 2500, {easing:'elasout'});


	});

});