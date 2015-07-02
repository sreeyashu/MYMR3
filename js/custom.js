

$( document ).ready(function() {
	var offCanvas = $('.wcm-header .header').html();
	$('.mm_offcanvas').html(offCanvas);
	
	$(".mm_current").click(function() {
		var mmcover = $(this).parent()
		mmcover.toggleClass('mm_opened');
		$('.mm_cover').fadeToggle(600);
	});
	
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
	//$('html').click(function(event){
//		if($(this).hasClass('mm_view')){
//		 event.stopPropagation();
//		}
//	 });
	 $('.dropdown-menu').click(function(event){
		if($(this).hasClass('mm_view')){
		 event.stopPropagation();
		}
	 });
	 
	$(".mm_panel .overlay_close").click(function() {
	 $('.mm_panel').parent().removeClass('mm_opened');
	 $('.mm_cover').fadeToggle(800);
	});
	
	
});