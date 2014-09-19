$(document).ready(function() {
		$("ul.nav-pills li a").click(function() {
		$("ul.nav-pills li.active").removeClass("active"), $(this).parent("li").addClass("active")
	}), $(window).load(function() {
		var e = $(".grid-wrapper");
		e.isotope({
			filter: "*",
			animationOptions: {
				duration: 750,
				easing: "linear",
				queue: !1
			}
		}), $(".grid-controls li a").click(function() {
			$(".grid-controls .current").removeClass("current"), $(this).addClass("current");
			var i = $(this).attr("data-filter");
			return e.isotope({
				filter: i,
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: !1
				}
			}), !1
		})
	})
});

$(document).ready(function() {
	
	$('#grid .mix').hover(
		function(){
			$(this).children('a').children('.overlay').css('opacity', '1');
		},
		function(){
			$(this).children('a').children('.overlay').css('opacity', '0');
		}
	)
});

$(document).ready(function() {
	$(".container-one").find('h1').css({right:-500,position:'absolute'});
	$('.container-one').find('h1').animate({right:50}, 1000);
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#portfolio a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ 
        filter: selector,
        animationOptions: {
            duration: 0,
            easing: 'linear',
            queue: false, 
        }
    });
  return false;
});