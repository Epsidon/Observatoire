require([
	"esri/map", 
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
	
	organizer.reorganizeMapsPage();
	
	// 1.
	console.log('Creating Map');

	map = new Map( "map" , {
		basemap: "gray",	
    	center: [-85.416, 49.000],
		zoom : 6,
		logo: false,
		sliderStyle: "small"
	});
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

// 	setupAccordion();

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
		var clickedLayerId = -1;
		for(var i = 0; i < numLayers; i++)
		{
			if ($('#layerHyperLink' + i).prop('checked') )
				clickedLayerId = i;	
		}

		// 4.
		removeLegend(activeLayer);
		var extent = map.getZoom();

		if ((clickedLayerId == -1) || 
			((layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			if (clickedLayerId == 2)
				{
					activeLayer = 13;
					drawLegend(activeLayer);
				}
			else
			{
			// 4.1.
			// 4.2.
			console.log('4.1. 4.2.');
			activeLayer = 14;
			drawLegend(activeLayer);
			}
			
		}
		else
		{
			// 4.3.
			console.log('4.3. clickedLayerId: ' + clickedLayerId);
			activeLayer = clickedLayerId;
			drawLegend(activeLayer);	
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
		
		updateServicePoints();
	}	
	
	function updateServicePoints()
	{		
		for(var i = 0; i < numLayers; i++)
		{
			if (layerToRegion[i] != 2)
				continue;
			
			numServicePointLayers = 0;
				
			if ($('#servicePointHyperLink' + i).prop('checked') )
			{
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
			}
			else
			{
				map.removeLayer(mapLayer[i]);	
				map.removeLayer(mapLayer[servicePointBuffers[i][1]]);					
				map.removeLayer(mapLayer[servicePointBuffers[i][0]]);					

				$('.servicePointBufferRow' + i).fadeOut();
				$("#servicePointBuffer10k" + i).attr("checked", false);
				$("#servicePointBuffer20k" + i).attr("checked", false);
				
			}
		}
	}
	
	function removeLegend(layerId)
	{
		var legendBody = [];
		var thisLayerLegend = [];
		var legendColour = [];
		legendBody += [];
		
		$('#legendList').hide();
	}
	
	function drawLegend(activeLayer)
	{
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
						'<td>' + thisLayerLegend.label + '</td>' + 
					'</tr>';
			}	
			legendBody += '</table>';

			$('#legendList').html(legendBody);
			$('#legendList').show();
			
			organizer.reorganizeMapsPage();
		
	}

	function showResults(featureSet) 
	{
		console.log('showResults was called');

		console.log('showResults');
	
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

window.map = map;
	
});
