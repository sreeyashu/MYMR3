$( document ).ready(function() {
    $("#inputSearchTxt").focus(function() {
  		$(this).parent().addClass('focus');
	});
	$("#inputSearchTxt").blur(function() {
		setTimeout(function(){ $("#inputSearchTxt").parent().removeClass('focus') }, 90);
	});
	
	$(".magnify_icon").click(function() {
		$("#inputSearchTxt").focus(function() {
			$(this).parent().addClass('focus');
		});
	});
});