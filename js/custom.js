$( document ).ready(function() {
    $(".yashu").focus(function() {
  		$(this).parent().addClass('focus');
	});
	$(".yashu").blur(function() {
		setTimeout(function(){ $(".yashu").parent().removeClass('focus') }, 90);
	});
});