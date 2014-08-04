jQuery(function($){
	
	'use strict';
	
	var locations = {
		base: { zoom: '50', x: '4107', y: '2603' },
		corktown: { zoom: '100', x: '4277', y: '3008' },
		woodbridge: { zoom: '100', x: '4055', y: '2488' },
		easternmarket: { zoom: '100', x: '4739', y: '2533' },
		mexicantown: { zoom: '100', x: '3598', y: '2670' },
		midtown: { zoom: '100', x: '4363', y: '2389' }
	};
		
	function writeObject() {
	
		var zoomDataObject = $('#map').smoothZoom('getZoomData');		
		
		$('#code').html(		
			"Normal X: <span style='color:#000000'>"+parseInt(zoomDataObject.normX, 10) +"</span>"
			+"<br />Normal Y: <span style='color:#000000'>"+parseInt(zoomDataObject.normY, 10) +"</span>"
			+"<br />Normal Width: <span style='color:#000000'>"+parseInt(zoomDataObject.normWidth, 10) +"</span>"
			+"<br />Normal Height: <span style='color:#000000'>"+parseInt(zoomDataObject.normHeight, 10) +"</span>"
			
			+"<br /><br />Scaled X: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledX, 10)  +"</span>"
			+"<br />Scaled Y: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledY, 10) +"</span>"
			+"<br />Scaled Width: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledWidth, 10) +"</span>"
			+"<br />Scaled Height: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledHeight, 10) +"</span>"
			
			+"<br /><br />Center X: <span style='color:#000000'>"+parseInt(zoomDataObject.centerX, 10) +"</span>"
			+"<br />Center Y: <span style='color:#000000'>"+parseInt(zoomDataObject.centerY, 10) +"</span>"	
			
			+"<br /><br />Scale Ratio:<br /> <span style='color:#000000'>"+zoomDataObject.ratio +"</span>"		
		);	
	}
	
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
	
	function zoomMap(location) {

		var zoomData = $('#map').smoothZoom('getZoomData');
		
		$('#map').smoothZoom('focusTo', {
			x: locations[location].x,
			y: locations[location].y,
			zoom: locations[location].zoom
		});
	}
	
	$(document).ready(function(e) {
		
		resizeMap();
		
		$('#map').smoothZoom({
			full_BROWSER_SIZE: 'YES',
			pan_BUTTONS_SHOW: "NO",
			pan_LIMIT_BOUNDARY: "YES",
			button_SIZE: 24,
			button_SIZE_TOUCH_DEVICE: 50,
			button_ALIGN: "top right",
			button_MARGIN: 10,
			zoom_MAX: 350,
			border_TRANSPARENCY: 20,
			responsive: true,
			responsive_maintain_ratio: false,
			touch_DRAG: true,
			mouse_DRAG: true,
			initial_ZOOM: locations.base.zoom,
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
