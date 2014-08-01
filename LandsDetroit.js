jQuery(function($){
	
	'use strict';
	
	/*$('#map').smoothZoom({
		width: '100%',
		height: '100%',
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
		initial_ZOOM:'300',
		initial_POSITION: '150,1500'
	});*/
	
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
	}
	
	$(document).ready(function(e) {
		resizeMap();
	});
	
	$(window).resize(function(e) {
		resizeMap();
	});
	
	
});
