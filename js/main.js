
	/* --strict mode enabled
	-------------------------------------*/
	"use strict";



	$(window).on("load", function () {

	/* --preloader
	-------------------------------------*/
	$("body").imagesLoaded(function () {
		$(".tb-preloader-wave").fadeOut();
		$("#tb-preloader").delay(200).fadeOut("slow").remove();
	});

});



	$(function(){


	/* -- Nice scroll for custom scroll-bar
	----------------------------------- --*/
	$("html").niceScroll({
		cursorcolor: "#cccccc",
		background: "#777777",
		cursorwidth: "7px",
		cursorborder: "none",
		cursorborderradius: "0",
		cursoropacitymin: 0,
		cursoropacitymax: 1,
		scrollspeed: 60,
		mousescrollstep: 60
	});



	/* -- Smooth scrolling
	---------------------------------- --*/
	smoothScroll.init({
		selector: '[data-scroll]',
		selectorHeader: null,
		speed: 1000,
		easing: 'easeInQuint',
		offset: 20,
		callback: function ( anchor, toggle ){}
	});



	/*-- Parallax Scrolling
	----------------------------------- --*/
	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		horizontalOffset: 0,
		verticalOffset: 0,
		responsive: true,
		scrollProperty: 'scroll',
		positionProperty: 'position',
		parallaxBackgrounds: true,
		hideDistantElements: true,
		hideElement: function($elem) { $elem.hide(); },
		showElement: function($elem) { $elem.show(); }
	});



	/* --affixed nav
	----------------------------------- --*/
	$(document).on('scroll',function(){
		if ($(this).scrollTop() > $('.banner').offset().top) {
			$('.navbar-default').addClass('fixed_top');
		} else{
			$('.navbar-default').removeClass('fixed_top');
		};
	});



	/*-- animated nav button
	----------------------------------- --*/
	$("header .navbar-toggle").on('click',function(){
		$(this).toggleClass("change");
	});



	/*-- Animation on scroll
	---------------------------------- --*/
	new WOW().init();



	/* --owl carousel
	-------------------------------------*/
	$(".portfolio .owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	$('.blog .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('.skills .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	});



	/* --counter up
	-------------------------------------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});





	/*--google maps
	-------------------------------------*/
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(40.6700, -73.9400),
			styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		marker = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.BOUNCE,
			position: new google.maps.LatLng(40.6700, -73.9400)
		});
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}


});


	// revolution slider

	var tpj=jQuery;

	var revapi1078;
	tpj(document).ready(function() {
		if(tpj("#slider1").revolution == undefined){
			revslider_showDoubleJqueryError("#slider1");
		}else{
			revapi1078 = tpj("#slider1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"threexthree",
				delay:9000,
				navigation: {
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"metis",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200
					}
				},
				viewPort: {
					enable:true,
					outof:"pause",
					visible_area:"60%",
					presize:false
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[600,600,500,400],
				lazyType:"smart",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
					type:"mouse",
				},
				shadow:0,
				spinner:"spinner3",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				fullScreen:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
