
var offcanvas;
$( document ).ready(function() {
	var prevCurrent = null;
	
	//offCanvas = $('.wcm-header .header').html();
//$('.mm_offcanvas').html(offCanvas);
//	
//	$(".hamburger_icon").click(function() {
//		$('html').addClass('mm_slideout');
//		$('.cover').show();
//		
//		
//	});
//	$(".cover").click(function() {
//		$('html').removeClass('mm_slideout');
//		$('.cover').hide();
//	});
//	
//	$(".mm_next").click(function() {
//		$('.mm_prev_view').addClass('mm_opened');
//		$('.mm_offcanvas').addClass('mm_subopened');
//	});
//	$(".mm_prev").click(function() {
//		$('.mm_prev_view').removeClass('mm_opened');
//		$('.mm_offcanvas').removeClass('mm_subopened');
//	});
	var $menuList = $(".navigation_menu ul:first li");
	
	$(".navigation_menu li").click(function() {
	var $current = $(event.currentTarget);
				   

				   
					var yash = true;
					removeMenu();
					$current.addClass('mm_opened');
				   
					if(yash){
						//$(".navigation_menu").addClass('mm_opened raja');
						$(".mm_cover").fadeIn().delay(500);
						yash= false;
					}
					if(prevCurrent!== null && prevCurrent === $current.index()){
						//$(".navigation_menu").removeClass('mm_opened raja');
						$menuList.removeClass('mm_opened');
						$(".mm_cover").fadeOut().delay(400);
						prevCurrent = null;
					} else{
						prevCurrent = $current.index();
								   
					}
				   
	});
   
	var removeMenu = function(){
		$(".navigation_menu li").removeClass('mm_opened')
	};
	
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
	});
	
	
});