jQuery(function($){
	
	'use strict';
	
	var locations = {
		base: { zoom: '70', x: '4107', y: '2603' },
		corktown: { zoom: '250', x: '4277', y: '3008' },
		woodbridge: { zoom: '260', x: '4055', y: '2488' },
		easternmarket: { zoom: '270', x: '4739', y: '2540' },
		mexicantown: { zoom: '80', x: '3598', y: '2670' },
		midtown: { zoom: '140', x: '4363', y: '2389' }
	};
		
	function resizeMap() {
		
		var windowHeight = $(window).height(),
			heightOffset = 200;
		
		if (windowHeight >= 800 || window.matchMedia('(min-width: 688px)').matches) {
			heightOffset = $('#nav').outerHeight();
		}
		
		$('.map-container').css('height', $(window).height() - heightOffset);
		
		if (window.matchMedia('(min-width: 880px)').matches) {
			$('.control').css('width', $('.row').innerWidth() - $('.text').outerWidth() - 40);
		} else {
			$('.control').css('width', '');
		}
	}
	
	function getAdjustedZoom(zoom) {
		
		var adjustmentRatio = parseInt($('.map-container').css('height'), 10) / 1000;
		
		return zoom * adjustmentRatio;
	}
	
	function zoomMap(location) {

		var zoomData = $('#map').smoothZoom('getZoomData');
			
		$('#map').smoothZoom('focusTo', {
			x: locations[location].x,
			y: locations[location].y,
			zoom: getAdjustedZoom(locations[location].zoom)
		});
	}
	
	$(document).ready(function(e) {
		
		resizeMap();
		
		$('#map').smoothZoom({
			pan_BUTTONS_SHOW: false,
			button_SIZE: 24,
			button_SIZE_TOUCH_DEVICE: 50,
			button_ALIGN: 'top right',
			button_MARGIN: 10,
			zoom_MAX: 300,
			zoom_OUT_TO_FIT: false,
			border_TRANSPARENCY: 20,
			responsive: true,
			touch_DRAG: true,
			mouse_DRAG: true,
			mouse_WHEEL: false,
			initial_ZOOM: getAdjustedZoom(locations.base.zoom),
			initial_POSITION: locations.base.x + ',' + locations.base.y,
			use_3D_Transform: true
		});
		
		$('.nav-link').click(function(e) {
			e.preventDefault();
			
			zoomMap($(this).data('location'));
		});
	});
	
	$(window).resize(function(e) {
		resizeMap();
	});
	
});
