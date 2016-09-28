$(function() {
	$('.right').on('click', function(){
        var carusel = $(this).parents('.container');
        rightCarusel(carusel);
        return false;
	});

	function rightCarusel(carusel) {
		var blockWidth = $(carusel).find('li').outerWidth();
		$(carusel).find('.images').animate({left: "-" + blockWidth + "px"});
		$(carusel).find('.images li').eq(0).clone()
	}
})