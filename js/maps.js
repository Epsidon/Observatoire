require([
	"esri/map", 
	"esri/geometry/Extent",
	"dojo/on",
	"esri/layers/ImageParameters",
	"esri/dijit/HomeButton", 
	"esri/dijit/InfoWindowLite",
	"esri/InfoTemplate",
	"esri/layers/FeatureLayer",
	"esri/layers/ArcGISDynamicMapServiceLayer",
	"dojo/dom-construct",
	"dojo/domReady!"], 
function(
	Map,
	Extent,
	on,
	ImageParameters,
	HomeButton,
	InfoWindowLite,
	InfoTemplate,
	FeatureLayer,
	ArcGISDynamicMapServiceLayer,
	domConstruct)
{
	/**
	 * 1. Create map
	 * 2. Create info window, templates, and map layers. 
	 * 3. Get the legends
	 */

	reorganizeMapsPage();
	
	//boundary of valid extent
	var initExtent = esri.geometry.Extent({
		"xmax": -7506078.28,
		"xmin": -11908851.11,
		"ymax": 7989962.40,
		"ymin": 5054780.52,
		"spatialReference": {
			"wkid": 102100
		}
	});
	
	// 1.
	console.log('Creating Map');

	map = new Map( "map" , {
		basemap: "gray",	
		extent: initExtent,
		zoom : 6,
		logo: false,
		sliderStyle: "small"
	});
	
	 var validExtent = esri.geometry.Extent({
		"xmax": -8606771.49,
		"xmin": -10808157.90,
		"ymax": 7256166.93,
		"ymin": 5788575.99,
		"spatialReference": {
			"wkid": 102100
		}
	});
	
	  on(map, 'pan', function(evt) {
		if (!initExtent.contains(evt.extent)) 
			{
				console.log('Outside bounds!');
            } 
			else 
			{
				console.log('Updated extent');
				validExtent = evt.extent;
            }
	});

	on(map, 'pan-end', function(evt) {
		if (!initExtent.contains(evt.extent)) 
		{
			map.setExtent(validExtent);
		}
	}); 
   /* 
	 on(map, 'pan-end', function( extent)
	{
		var outOfBounds = false;
		// get center of current extent
		var centerX = (map.extent.xmax - map.extent.xmin) / 2 + map.extent.xmin;
		var centerY = (map.extent.ymax - map.extent.ymin) / 2 + map.extent.ymin;
		
		var adjX = 0;
		var adjY = 0;
		
		if (centerX > -5304691.87) {
	
			adjX = -5304691.87 - centerX;
			outOfBounds = true;
		} else if (centerX < -14110237.52) {
		
			adjX = -14110237.52 - centerX;
			outOfBounds = true;
		}
		
		if (centerY > 9457553.35) {

			adjY = 9457553.35 - centerY;
			outOfBounds = true;
		} else if (centerY < 3587189.58) {
	
			adjY = 3587189.58 - centerY;
			outOfBounds = true;
		}
		if (outOfBounds) {
		 console.log('outOfBounds');
			map.centerAt(new esri.geometry.Point({
				"x": centerX + adjX,
				"y": centerY + adjY,
				"spatialReference": {
					"wkid": 102100
				}
			}));
		}
	});  */
	
	var imageParameters = new ImageParameters();
        imageParameters.format = "PNG";

	dojo.connect(map,"onLoad",function(){
        var initExtent = map.extent;

        dojo.create("div",{
          className: "esriSimpleSliderHomeButton",
          onclick: function(){
            map.setExtent(initExtent);
          }
        },dojo.query(".esriSimpleSliderIncrementButton")[0], "after");
	  });
    
    // 2.
	for (var i = 0; i < numLayers; i++) {
		console.log('Creating Layer ' + i);

		layerInfoWindow[i] = 
			new InfoWindowLite(null, domConstruct.create("div", null, null, map.root));

		layerInfoWindow[i].startup();

		layerTemplate[i] = new InfoTemplate();

		layerTemplate[i].setTitle(layerData[i]['infoWindowTitle']);

		layerTemplate[i].setContent(layerData[i]['infoWindowBody']);
		
		

		mapLayer[i] = new FeatureLayer(
			mapAddress + i, {
				mode: FeatureLayer.MODE_ONDEMAND,
				infoTemplate:layerTemplate[i],
				outFields: layerData[i]['outFields']});
	}

	for (var j in servicePointBuffers) {

		for (var i = 0; i < 2; i++) {

			var bufferIndex = servicePointBuffers[j][i];

			console.log('Creating Buffers for Layer ' + j + 
				' buffer index: ' + bufferIndex);

			mapLayer[bufferIndex] = new FeatureLayer(
				mapAddress + bufferIndex);
		}
	}

	console.log('Adding Layer ' + activeLayer + ' to the map.');
	map.addLayer(mapLayer[activeLayer]);

	console.log('Adding symbol to the map');
	symbol = new esri.symbol.SimpleFillSymbol(
		esri.symbol.SimpleFillSymbol.STYLE_SOLID, 
		new esri.symbol.SimpleLineSymbol(
			esri.symbol.SimpleLineSymbol.STYLE_DASHDOT, 
			new dojo.Color([0,255,0]), 2),
			new dojo.Color([0,255,0,0]));

	updateMapLabel();
	updateLegend();
	setupAccordion();

	// Translate the popup window, if there is any translatable item in it. 	
	setInterval(function(){
		$(".spanToTranslate").each(function(index) {
			$(this).removeClass('spanToTranslate');
			$(this).html(T($(this).html()));
			$(this).removeClass('hidden');
		});
	}, 500);

	numVisibleSpinners = 0;
	map.on("zoom-start", function() {
		numVisibleSpinners++;

		if (numVisibleSpinners == 1)
		{
			$("#loadingIndicator").fadeIn('fast');
			$( "#map" ).fadeTo("slow" , 0.8);
		}

		fadeOutSpinnerEventually();
	});	

	map.on("zoom-end", function() {
		updateLayer(-1);
	});	

	map.on("update-start", function() {
		$("#loadingIndicator").fadeIn('fast');
		$( "#map" ).fadeTo("slow" , 0.8);

		fadeOutSpinnerEventually();
	});

	map.on("update-end", function() {
		fadeOutSpinner();
	});	

	function setupAccordion()
	{
		console.log('Setting up accordion');
		$.get("server.php", function( data ) 
		{
			layers = data.layers;

			var accordionHtmlBody = '';

			var i = 0;

			for (var j = 0; j < accordion.length; j++)
			{
				accordionHtmlBody += '<H3>' + accordion[j]['title'] + '</H3>';
				accordionHtmlBody += '<div><ul class="nav nav-list">';

				for (var k = 0; k < accordion[j]['numLayers']; k++)
				{
					var layer = layers[i];

					accordionHtmlBody += getAccordionRowHtmlBody(layer, i, j);
					i++;
				}

				accordionHtmlBody += 
					'</ul>' + 
						'<br>' +
						//<a href=http://216.48.92.42:8080/notes.html target=_blank >" + T("Methodological Notes") + "</a>"
							'<a href=http://216.48.92.42:8080/notes.html target=_blank ">' +
							'<img src="images/Information.jpg" width="25" height="25" title="InformationImage"/>' +
							'</a>' +

							'<script>' +
								'function myFunction()' +
									'{' +
									'window.showModalDialog("http://216.48.92.42:8080/notes.html" , "height=255, width=1700");' +
									'}' +
							'</script>' +
						'</br>' +
					'</div>';
			}

			$( "#panel" ).html(accordionHtmlBody);

			$( "#panel" ).accordion({
				event: "click",
				active: false,
				heightStyle: "content", 
				collapsible:true,
				autoHeight: false
			});

			for (var l = 0; l < numLayers; l++) {
				if (layerToRegion[l] == 2)
				{
					$('.servicePointBufferRow' + l).hide();
					$('#servicePointHyperLink' + l).click(updateLayerWrapper(l, true));
				}
				else
				{
					$('#layerHyperLink' + l).click(updateLayerWrapper(l, false));
				}
			}

			$('.servicePointBufferLayerCheckBox').click(updateServicePoints);

			drawLegend({activeLayer : activeLayer});

		}, "json" );
	}

	function updateLayerWrapper(layerId, isServicePoint)
	{		
		if (isServicePoint)
		{
			return function(){
				updateServicePoints();
			};
		}
		else
		{
			var myId = layerId;

			return function(){
				updateLayer(myId);
			};
		}
	}

	function updateLayer(clickedLayerId)
	{
		console.log('updateLayer was called: ' + clickedLayerId);
		
		/**
		 * 1. Remove all checkboxes except for the one just clicked. 
		 * 2. Remove old layers.
		 * 3. Get the clicked layerId.
		 * 4. Draw the new layer accordingly. 
		 *    4.1. If nothing is clicked draw layer 12.
		 *	  4.2. If something clicked in the first tab and extend is more than 7 
		 *		   draw layer 12 as well. 
		 * 	  4.3. Draw the clicked layer. 
		 */

		// 1.
		
		for(var i = 0; i < numLayers; i++)
		{	
			if ((clickedLayerId == i) || (clickedLayerId == -1))
				continue;

			$("#layerHyperLink" + i).attr("checked", false);

		}

		// 2.
		map.graphics.clear();
		map.infoWindow.hide();

		for(var i = 0; i < numLayers; i++)
			map.removeLayer(mapLayer[i]);

		// 3. 
		clickedLayerId = getClickedLayerId();

		// 4.
		removeLegend(activeLayer);
		var extent = map.getZoom();

		if ((clickedLayerId == -1) || 
			((layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			if (clickedLayerId == 2)
			{
				activeLayer = 17;
				drawLegend({activeLayer : activeLayer});
				LayerLegend = legendLabel[17];
			}
			else
			{
				// 4.1.
				// 4.2.
				console.log('4.1. 4.2.');
				activeLayer = 18;
				drawLegend({activeLayer : activeLayer});
				LayerLegend = legendLabel[18];
			}

		}
		else
		{
			// 4.3.
			console.log('4.3. clickedLayerId: ' + clickedLayerId);
			activeLayer = clickedLayerId;
			drawLegend({activeLayer : activeLayer});	
		}

		try
		{
			if (layerInfoWindow[activeLayer])
			{
				layerInfoWindow[activeLayer].startup();
				mapLayer[activeLayer].InfoTemplate = layerTemplate[activeLayer];
			}

			map.addLayer(mapLayer[activeLayer]);

		}
		catch(err)
		{
			console.log('ERROR: ' + err.message);
		}

		mapLayerLabel = layersLabels[activeLayer];
		LayerLegend = legendLabel[activeLayer];

		updateServicePoints();
	}	

	/**
	 * Simply checks the number which layer is clicked, if any. 
	 */
	function getClickedLayerId()
	{
		var clickedLayerId = -1;
		for(var i = 0; i < numLayers; i++)
		{
			if ($('#layerHyperLink' + i).prop('checked') )
				clickedLayerId = i;	
		}
		
		return clickedLayerId;
	}

	function updateServicePoints()
	{
		var clickedHospitalLayerIdArray = Array();
		
		mapServicePointLabel = '';
		mapServicePointLegendLabel = '';

		for(var i = 0; i < numLayers; i++)
		{
			if (layerToRegion[i] != 2)
				continue;

			numServicePointLayers = 0;

			if ($('#servicePointHyperLink' + i).prop('checked') )
			{
				clickedHospitalLayerIdArray.push(i);
			
				if ($('#servicePointBuffer20k' + i).prop('checked') )
				{
					map.addLayer(mapLayer[servicePointBuffers[i][1]]);
					numServicePointLayers++;	
					map.reorderLayer(mapLayer[servicePointBuffers[i][1]], numServicePointLayers);
				}
				else
				{
					map.removeLayer(mapLayer[servicePointBuffers[i][1]]);
				}

				if ($('#servicePointBuffer10k' + i).prop('checked') )
				{
					map.addLayer(mapLayer[servicePointBuffers[i][0]]);
					numServicePointLayers++;	
					map.reorderLayer(mapLayer[servicePointBuffers[i][0]], numServicePointLayers);
				}
				else
				{
					map.removeLayer(mapLayer[servicePointBuffers[i][0]]);
				}

				$('.servicePointBufferRow' + i).fadeIn();				

				map.addLayer(mapLayer[i]);
				numServicePointLayers++;				
				map.reorderLayer(mapLayer[i], numServicePointLayers);

				mapServicePointLabel += " & " + layersLabels[i];
				
				mapServicePointLegendLabel += " - " +legendLabel[i];

			}
			else
			{
				$('#legendTitle').hide();
				map.removeLayer(mapLayer[i]);	
				map.removeLayer(mapLayer[servicePointBuffers[i][1]]);					
				map.removeLayer(mapLayer[servicePointBuffers[i][0]]);					

				$('.servicePointBufferRow' + i).fadeOut();
				$("#servicePointBuffer10k" + i).attr("checked", false);
				$("#servicePointBuffer20k" + i).attr("checked", false);

			}
		}

		updateMapLabel();
		updateLegend();
		drawLegend({hospitals: clickedHospitalLayerIdArray});
	}

	function updateMapLabel()
	{
		console.log('updateMapLabel was called');

		if (mapLayerLabel == '' && mapServicePointLabel == '')
		{
			console.log('Labels are empty');

			$('#mapLabel').hide();
			return;
		}	

		$('#mapLabel').html('<b>' + T('Selected layer:') +  '</b>' + mapLayerLabel + "  " + mapServicePointLabel);
		$('#mapLabel').show();

		reorganizeMapsPage();
	}
	
	function updateLegend()
	{
		console.log('updateLegend was called');

		if (LayerLegend == '' && mapServicePointLegendLabel == '')
		{
			$('#legendTitle').hide();
			return;
		}	
		
		$('#legendTitle').html('<b>' + T('Legend: ') +  '</b>' + LayerLegend + "  "  );
		$('#legendTitle').show();

		reorganizeMapsPage();
	}

	function removeLegend(layerId)
	{
		var legendBody = [];
		var thisLayerLegend = [];
		var legendColour = [];
		legendBody += [];

		$('#legendList').hide();
	}

	function drawLegend(clickedItem)
	{
		console.log('Draw legend was called: ' + JSON.stringify(clickedItem));
	
		if ('activeLayer' in clickedItem)	
		{
			var activeLayer = clickedItem.activeLayer;
			var layer = layers[activeLayer];

			if (layer.drawingInfo.renderer.classBreakInfos)
				legendsArray[activeLayer] = layer.drawingInfo.renderer.classBreakInfos;
			else if (layer.drawingInfo.renderer.uniqueValueInfos)
				legendsArray[activeLayer] = layer.drawingInfo.renderer.uniqueValueInfos;
			else
				legendsArray[activeLayer] = null;

			var layerLegend = legendsArray[activeLayer];

			var legendBody = '<table>';

			for (j = 0; j < layerLegend.length; j++)
			{
				var thisLayerLegend = layerLegend[j];

				var legendColour = thisLayerLegend.symbol.color[0] + ',' +
					thisLayerLegend.symbol.color[1] + ',' +
					thisLayerLegend.symbol.color[2];

				legendBody +=  
					'<tr>' + 
						'<td>' + 
							'<div style="width:40px;height:20px;border:1px solid' + 
							' #000;background-color:RGB('+legendColour+');"></div>' + 
						'</td>' + 
						'<td>' + 
							'<div style="width:10px;height:20px;border:0px;"></div>' + 
						'</td>' + 
						'<td>' + T(thisLayerLegend.label) + '</td>' + 
					'</tr>';
			}
				
			legendBody += '</table>';

			$('#layerLegendList').html(legendBody);
		}
		
		if (clickedItem.hospitals)
		{
			var htmlBody = '';
		
			var hospitals = clickedItem.hospitals;
			
			for(hospitalId in hospitals)
			{
				// console.log(hospitalId);
				var layer = layers[hospitals[hospitalId]];

				htmlBody +=  '<img src="data:image/png;base64,' + layer.drawingInfo.renderer.symbol.imageData + '"  />';
				htmlBody += ' ' + mapServicePointLegendLabel;
			}
		
			$('#hospitalLegendList').html(htmlBody);
		}		

		$('#legendList').show();
		reorganizeMapsPage();		
	}

	function showResults(featureSet) 
	{
		// console.log('showResults was called');

		// console.log('showResults');

		map.graphics.clear();

		var features = featureSet.features;

		dojo.forEach(features,function(feature){
			var graphic = feature;
			graphic.setSymbol(symbol);

			infoTemplate = new esri.InfoTemplate(
				layerData[activeLayer]['infoWindowTitle'],
				layerData[activeLayer]['infoWindowBody']);

			graphic.setInfoTemplate(infoTemplate);

			map.graphics.add(graphic);

		});

		dojo.connect(map.graphics, "onMouseClick", function(evt) {
			var g = evt.graphic;
			map.infoWindow.setContent(g.getContent());
			map.infoWindow.setTitle(g.getTitle());
			map.infoWindow.show(evt.screenPoint,map.getInfoWindowAnchor(evt.screenPoint));
		});
	}

	function getAccordionRowHtmlBody(layer, layerCounter, accordionCounter) 
	{
		htmlBody = '';

		if (accordionHeaders[layerCounter])
				htmlBody = '<u><h3 style="font-size: 1em;">' + accordionHeaders[layerCounter] +
							'</h3></u>';
				
		if (accordionCounter != (accordion.length-1)) 
		{
			htmlBody += 
				'<table>' +
					'<tr>' + 
						'<td>' + 
							'<input type="checkbox" id="layerHyperLink' +layerCounter+ '"/>' + 
						'</td>' + 
						'<td>' + 
							T(layer.name) +
						'</td>' + 
					'</tr>' + 						
				'</table>';
		}
		else
		{				
			htmlBody += 
				'<table>' +
					'<tr>' + 
						'<td>' + 
							'<label>'+
							'<input type="checkbox" id="servicePointHyperLink' + layerCounter + '" ' + 
							'class="servicePointCheckBox"' +
							'onClick="javascript:servicePointCheckBoxClicked(' + layerCounter + ')"/>' + 
						'</td>' + 
						'<td>' + 
							T(layer.name) +
						'</td>' + 
							'</label>'+
					'</tr>' + 
					'<tr class="servicePointBufferRow' + layerCounter + '">' + 
						'<td>' + 
						'</td>' + 
						'<td>' + 
							'<input type="checkbox"  class="servicePointBufferLayerCheckBox" id="servicePointBuffer10k' +layerCounter+ '" >' + 
								T(' 25 km Driving Distance') +
							'</input>' +
						'</td>' + 
					'</tr>' + 
					'<tr class="servicePointBufferRow' + layerCounter + '">' + 
						'<td>' + 
						'</td>' + 
						'<td>' + 
							'<input type="checkbox" class="servicePointBufferLayerCheckBox" id="servicePointBuffer20k' +layerCounter+ '" >' + 
								T(' 50 km Driving Distance') +
							'</input>' +
						'</td>' + 
					'</tr>' + 									
				'</table>';
		}

		htmlBody = 
			'<li id="region' + layerCounter + '">' +  
				htmlBody + 
			'</li>';

		return htmlBody;
	}

	function fadeOutSpinnerEventually()
	{	
		setTimeout(function()
		{
			numVisibleSpinners = 1;
			fadeOutSpinner();
		}, 10000);
	}

	function fadeOutSpinner()
	{
		numVisibleSpinners--;

		if (numVisibleSpinners <= 0)
		{
			numVisibleSpinners = 0;

			$("#loadingIndicator").fadeOut('fast');
			$( "#map" ).fadeTo("fast" , 1);	
		}
	}
	
	function servicePointCheckBoxClicked(layerCounter)
	{
		if ($('#servicePointHyperLink' + layerCounter).prop('checked'))
			var checked = true;
		else 
			var checked = false;

		$('.servicePointCheckBox').prop('checked', false);	
		$('.servicePointBufferRow').hide();	
		$('.servicePointBufferLayerCheckBox').prop('checked', false);	

		if (checked)
		{
			$('#servicePointHyperLink' + layerCounter).prop('checked', true);	
			$('.servicePointBufferRowLayer' + layerCounter).show();
		}
	}
	
	window.servicePointCheckBoxClicked = servicePointCheckBoxClicked;
	window.map = map;

});