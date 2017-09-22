(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand svg").attr("visibility","visible");
            $(".socialfloat").css("visibility","visible");
            $(".orderfloat").css("visibility","visible");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand svg").attr("visibility","hidden");
            $(".socialfloat").css("visibility","hidden");
            $(".orderfloat").css("visibility","hidden");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
    
    $(document).ready(function(){
        $('.foldscroll').scroll();
        $(".foldscroll").animate({
          scrollTop: 1400
        }, 90000);
    });

})(jQuery);
