
    $(document).ready(function() {

       
        /***  Mega Flyout ***/

        var viewPort = $(window).width; //get window width

        /** This is to copy the contents of header to offcanvas container **/
        var offCanvas = $('.wcm-header .header').html();
        $('.mm_offcanvas').html(offCanvas);

        $(".main_wrapper").append("<div class='mm_cover'></div><div class='cover'></div>");

        /** This is to loop the contents of Mega flyout **/
        var $menu_links = $('.navigation_menu ul li .mm_current');
        var individual_menu, $operationBlock, operation_block_count;

        for (var i = 0; i < $menu_links.length; i++) {

            individual_menu = $menu_links[i];
            //mm_prev_view == mm_panel_prev
            operation_block_count = $(individual_menu).parent().find('.operations .mm_panel_prev .mm_block').length;
            $operationBlock = $(individual_menu).parent().find('.mm_view');
            if (operation_block_count === 2 || operation_block_count === 1) {
                $operationBlock.addClass('two');
            } else if (operation_block_count < 1) {
                $operationBlock.addClass('empty');
            }
        }

        /** This will execute whenever the megaflyout menu is clicked **/
        var $headerMenuList = $(".header .navigation_menu ul:first li");

        $menu_links.click(function() {

            var $current = $(event.currentTarget),
                $openedList = $current.parents("ul").find(".mm_opened");

            if ($openedList.length ===0) {
                $(".mm_cover").fadeIn().delay(300);
                applyHeight($current);
            } else if ($current.parent().hasClass('mm_opened')) {
                $(".mm_cover").fadeOut().delay(200);
		    } else {
               $openedList.removeClass("mm_opened"); 
			   applyHeight($current);
            }
            $current.parent().toggleClass("mm_opened");

        });

        /**  This will execute hamburger icon is clicked **/
        $(".main_wrapper,.overlay_close,.mm_panel").click(function(e) {
			if($(e.target).parents('.mm_wrapper').length===0 || $(e.target).hasClass('overlay_close'))
			resetMenu();
        });


        /** This will execute whenever the window is resized **/

        $(window).resize(function() {
            viewPort = $(window).width(); // New width
			resetMenu();
            if (viewPort < 1024) {
                resetMenu();
            }
			if (viewPort > 1023) {
                resetMenu();
				$(".cover").css('display','none');
            }
        });

        var resetMenu = function() {
            $headerMenuList.removeClass("mm_opened");
            $(".mm_cover").fadeOut().delay(200);
        };

        function applyHeight($current) {
            var lboxHeight = $current.parent().find('.operations .mm_prev_view').outerHeight(),
                rboxHeight = $current.parent().find('.requests .mm_prev_view').outerHeight(),
                maxHeight = 0;
            if (lboxHeight > rboxHeight) {
                maxHeight = lboxHeight;
            } else {
                maxHeight = rboxHeight;
            }
            $current.parent().find('.mm_prev_view').height(maxHeight);
        }


        // Mega Flyout Ends


        /**** Off canvas ***/

        /**  This will execute hamburger icon is clicked **/
        $(".canvas_container .nav_small").click(function() {
            $("html").addClass("mm_slideout");
        });

        $(".cover").click(function() {
            $("html").removeClass("mm_slideout");
            $(".cover").removeClass('show_active');
        });

        $(".mm_next").click(function() {
            var $current = $(event.currentTarget);
            $current.next().addClass("mm_opened");
            $(".mm_offcanvas").addClass("mm_subopened");

        });
        $(".mm_prev").click(function() {
            $(".mm_offcanvas").removeClass("mm_subopened");
            $(".mm_prev_view").removeClass("mm_opened");
        });
		
		
		
		
		 /*** Header ***/

        var isSearched = false;

        $('.header_search').click(function() {
            var $current = $(event.currentTarget);
            $current.children('.search_input').addClass('focus');
            addFocus($current);
        });

        $('html').click(function(e) {
            if ($(e.target).parents('.header_search').length === 0) {
                if ($(".search_input").hasClass('focus')) {
                    setTimeout(function() {
                        $(".search_input").removeClass('focus');
                    }, 300);
                }
            }
        });


        /*** Header search starts ***/
        var $searchInput = $('.header_search .search_input input');
        $searchInput.on('keypress', function(e) {
            var keycode;
            keycode = e.keycode || e.which;
            if (keycode === 13) {
                $(".header_search .magnify_icon").click();
            }
        });


        $searchInput.on("input", function(e) {
            var query = $searchInput.val();
            //left trim the spaces
            query = query.replace(/^\s+/, "");
            //replace special characters
            query = query.replace(/[^\w\s\][\-@;\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/gi, '').replace(/[\u0040,\u005B,\u005D,\u005F,\u002D,\u00A3,\u20AC,\u00A7]/g, "");
            $searchInput.val(query);
            if (e.keyCode == 13) {
                var searchValue = query.toLowerCase();
                $searchInput.blur();
                search.startSearch(searchValue);
                isSearched = true;
            } else {
                e.preventDefault();
                if (query.length > 0) {
                    $(".header_search .search_wipe").addClass("show_active");
                } else if (isSearched) {
                    isSearched = false;
                    search.clearSearch();
                }
            }
        });

        $searchInput.on("keyup", function(event) {
            var inputSearchTxt = $(event.currentTarget);
            var searchField = $('.header_search .search_input input');

            if (inputSearchTxt.val().length > 0) {
                searchField.parent().parent().addClass('clear');
            } else {
                $(".header_search .search_wipe").removeClass('show_active');
                searchField.parent().parent().removeClass('clear');
            }
        });

        $(".header_search .magnify_icon").click(function() {
            var searchValue = $('.header_search .search_input input').val().toLowerCase();
            if (searchValue.length > 3) {
                search.startSearch(searchValue);
                isSearched = true;
            }
        });

        $(".header_search .search_wipe").click(function() {
            isSearched = false;
            $('.header_search .search_input input').val('');
            $(".header_search .search_wipe").removeClass('show_active');
            //search.clearSearch();

        });
        //Header search ends 
		
		

        function addFocus(parentForm) {
            var isWindowsTouchDevice = /windows/i.test(navigator.userAgent) && /touch/i.test(navigator.userAgent);
            var isMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (!isWindowsTouchDevice && !isMobileBrowser) {
                var inputElements = $(parentForm).find('input');
                $(inputElements[0]).focus();
            }
        }

		
		
        //FAQ icon Click Handler.
        
        $('.navFaq').click(function(e) {
            
        	$('.widget').addClass('show');
            
			//Adding iscroll
            faq.toggle.addScroll();
            
            //Checking no.of Questions to open the accordion if number of questions were only one.
            faq.toggle.checkNoOfQuestions();
          
          
			e.preventDefault();
            e.stopPropagation();
            
            //Handling the FAQ Anchor.
            var faqWidgetAnchor = $(".faq-widget .module_content a");
            for (var i = 0; i < faqWidgetAnchor.length; i++) {
                if ($($(faqWidgetAnchor)[i]).html().indexOf(" ") === -1) {
                    $($(faqWidgetAnchor)[i]).css({
                        'width': '242px',
                        'text-overflow': 'ellipsis',
                        'overflow': 'hidden',
                        'white-space': 'nowrap'
                    });
                }
            }

        });

        /**
         * FAQ Widget Close icon Handler
         */
        $('.icon_widget_close').click(function(e) {
            $('.widget').removeClass('show');
            e.preventDefault();
            e.stopPropagation();
        });

       
    });


