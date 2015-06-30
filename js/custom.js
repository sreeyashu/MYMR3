$( document ).ready(function() {
	
	$(".yash").click(function() {
		$(this).parent().addClass('mm_opened');
	});
	
    $("#inputSearchTxt").focus(function() {
  		$(this).parent().addClass('focus');
	});
	$("#inputSearchTxt").blur(function() {
		setTimeout(function(){ $("#inputSearchTxt").parent().removeClass('focus') }, 90);
	});
	//var offCanvas = $('.wcm-header .header').html();
	//$('.mm_offcanvas').html(offCanvas);
	
	
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
		 $('[data-toggle="dropdown"]').parent().removeClass('open');
	});
	
	
});