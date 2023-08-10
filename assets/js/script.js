(function($){
	'use script';

//���ࣺhttp://www.bootstrapmb.com
// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	var $loader = $('#preloader');
    if($loader.length > 0){
		$(window).on('load', function(event) {
	        $('#preloader').delay(500).fadeOut(500);
		});
	}


	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll<0){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});

	// Scroll Area
	var $scroll = $('.scroll-area');
	if($scroll.length > 0){
		$(document).ready(function(){
		    $('.scroll-area').click(function(){
		      	$('html').animate({
		        	'scrollTop' : 0,
		      	},700);
		      	return false;
		    });
		    $(window).on('scroll',function(){
		      	var a = $(window).scrollTop();
		      	if(a>400){
		            $('.scroll-area').slideDown(300);
		        }else{
		            $('.scroll-area').slideUp(200);
		        }
		    });
		});
	}

	//video
		var $video = $('.technology-video a');
	    if($video.length > 0){
			$('.technology-video a').magnificPopup({
			  	type: 'iframe',
			});	
	 }
		


   

		///banner
   		var $full = $('.slider-area-full');
		    if($full.length > 0){
		    $(document).ready(function(){
			  	$(".slider-area-full").owlCarousel({
			  		loop:true,
			  		center:true,
			  		items:1,
			  		autoplay: true,
			  		nav: true,
		  			navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
			  	});
			});
		}

	 	///testimonial
   		var $full = $('.testimonial-slider');
		    if($full.length > 0){
		    $(document).ready(function(){
			  	$(".testimonial-slider").owlCarousel({
			  		loop:true,
			  		center:true,
			  		items:1,
			  		autoplay: true,
			  		nav: true,
		  			navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
			  	});
			});
			}

		$('.technology-video a').magnificPopup({
		  	type: 'iframe',
		});




		//===== Mobile Menu
    $('.mobile-menu-open').on('click', function(){
        $('.mobile-off-canvas-menu').addClass('open')
        $('.overlay').addClass('open')
    });
    

    $('.close-mobile-menu').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    $('.overlay').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    
   
    
    /*Variables*/
    var $offCanvasNav = $('.mobile-main-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.mega-sub-menu, .sub-menu, .submenu-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
	

    		///add minicart login serach
      let searchForm = document.querySelector('.search-form');

        document.querySelector('#search-btn').onclick = () =>{
         searchForm.classList.toggle('active');
         loginForm.classList.remove('active');
        }


        let loginForm = document.querySelector('.login-form');

        document.querySelector('#login-btn').onclick = () =>{
            loginForm.classList.toggle('active');
            searchForm.classList.remove('active');
        }


     document.querySelector('#close-login').onclick = () =>{
       loginForm.classList.remove('active');
    }

    
	///counter
		var $count = $('.count');
    	if($count.length > 0){
			$(document).ready(function(){
				$('.count').counterUp({
					delay: 10,
					time: 1000
				});

			});
		}
}(jQuery));
