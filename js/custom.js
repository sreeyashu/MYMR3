
var offcanvas;
$( document ).ready(function() {
	
	
	offCanvas = $('.wcm-header .header').html();
	$('.mm_offcanvas').html(offCanvas);
	
	$(".hamburger_icon").click(function() {
		$('html').addClass('mm_slideout');
		$('.cover').show();
		
		
	});
	$(".cover").click(function() {
		$('html').removeClass('mm_slideout');
		$('.cover').hide();
	});
	
	$(".mm_next").click(function() {
		$('.mm_prev_view').addClass('mm_opened');
		$('.mm_offcanvas').addClass('mm_subopened');
	});
	$(".mm_prev").click(function() {
		$('.mm_prev_view').removeClass('mm_opened');
		$('.mm_offcanvas').removeClass('mm_subopened');
	});
	
	
	
	$(".mm_current").click(function() {
		var mmcover = $(this).parent()
		mmcover.toggleClass('mm_opened');
		$('.mm_cover').fadeToggle(600);
	});
	
    $(".magnify_icon").click(function() {
  		$(this).parent().toggleClass('focus');
	});
	//$(".magnify_icon").blur(function() {
//		setTimeout(function(){ $(".magnify_icon").parent().removeClass('focus') }, 90);
//	});
	
	
	
	//$(".magnify_icon").click(function() {
//		$("#inputSearchTxt").focus(function() {
//			$(this).parent().addClass('focus');
//		});
//	});
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