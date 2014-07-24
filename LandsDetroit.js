
$( document ).ready(function() {
    options = {
            width: '100%',
            height: '100%',
            pan_BUTTONS_SHOW: "YES",
            pan_LIMIT_BOUNDARY: "YES",
            button_SIZE: 24,
            button_SIZE_TOUCH_DEVICE: 50,
            button_ALIGN: "top right",
            button_MARGIN: 10,
            zoom_MAX: 200,
            border_TRANSPARENCY: 20,
            container: 'zoom_container',
            responsive: true,
            responsive_maintain_ratio: false,
            touch_DRAG: true,
            mouse_DRAG: true,

    }


    $('#map').smoothZoom(options);
});
	
	
		
var zoomDataObject = $('#map).smoothZoom('getZoomData');		
		$('#code').html(		
			"Normal X: <span style='color:#000000'>"+parseInt(zoomDataObject.normX) +"</span>"
			+"<br />Normal Y: <span style='color:#000000'>"+parseInt(zoomDataObject.normY) +"</span>"
			+"<br />Normal Width: <span style='color:#000000'>"+parseInt(zoomDataObject.normWidth) +"</span>"
			+"<br />Normal Height: <span style='color:#000000'>"+parseInt(zoomDataObject.normHeight) +"</span>"
			
			+"<br /><br />Scaled X: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledX)  +"</span>"
			+"<br />Scaled Y: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledY) +"</span>"
			+"<br />Scaled Width: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledWidth) +"</span>"
			+"<br />Scaled Height: <span style='color:#000000'>"+parseInt(zoomDataObject.scaledHeight) +"</span>"

			+"<br /><br />Center X: <span style='color:#000000'>"+parseInt(zoomDataObject.centerX) +"</span>"
			+"<br />Center Y: <span style='color:#000000'>"+parseInt(zoomDataObject.centerY) +"</span>"	
			
			+"<br /><br />Scale Ratio:<br /> <span style='color:#000000'>"+zoomDataObject.ratio +"</span>"		
		);	
	}