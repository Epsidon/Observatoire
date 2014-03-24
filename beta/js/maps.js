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
	
	organizer.reorganizeMapsPage();
	
	
	//initExtent stores boundary of your valid extent
	var initExtent = esri.geometry.Extent({
		"xmax":  -5204406.49,
		"xmin": -14009952.14,
		"ymax": 9477121.23,
		"ymin": 3606757.45,
		"spatialReference": {
			"wkid": 102100
		}
	});
	
	var windowWidth = $( window ).width();
	console.log('window width is ' + windowWidth);
	
	if ( windowWidth <= 1920 || windowWidth >= 1464 )
	{
		map = new Map( "map" , {
		basemap: "gray",
		center: [-84.416, 49.000],
		zoom : 5,
		logo: false,
		sliderStyle: "small"
	});
		
	}
	else if ( windowWidth < 1464 || windowWidth >= 1123 )
	{
		map = new Map( "map" , {
		basemap: "gray",
		center: [-85.416, 49.000],
		zoom : 6,
		logo: false,
		sliderStyle: "small"
	});
	}
	else if ( windowWidth < 1123)
	{
		map = new Map( "map" , {
		basemap: "gray",
		center: [-85.416, 49.000],
		//extent: initExtent,
		zoom : 4,
		logo: false,
		sliderStyle: "small"
	});

	}
	
	// 1.
	console.log('Creating Map');
/* 
	map = new Map( "map" , {
		basemap: "gray",
		center: [-85.416, 49.000],
		//extent: initExtent,
		zoom : 6,
		logo: false,
		sliderStyle: "small"
	}); */
	
	//"validExtent" stores the last valid extent found while panning 
	 var validExtent ;
	
	on(map, 'extent-change', function(evt) {
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

	updateLegend();
	
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
		 * 2. Remove old layers.
		 * 3. Get the clicked layerId.
		 * 4. Draw the new layer accordingly. 
		 *    4.1. If nothing is clicked draw layer 12.
		 *	  4.2. If something clicked in the first tab and extend is more than 7 
		 *		   draw layer 12 as well. 
		 * 	  4.3. Draw the clicked layer. 
		 */
		
		// 2.
		map.graphics.clear();
		map.infoWindow.hide();

		for(var i = 0; i < numLayers; i++)
			map.removeLayer(mapLayer[i]);
		
		// 3. 
		var clickedLayerId = mapModal.getCheckedLayerId();

		// 4.
		removeLegend();
		var extent = map.getZoom();

		if ((clickedLayerId == -1) || 
			((layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			if (clickedLayerId == 2)
			{
				activeLayer = 17;
				drawLegend({activeLayer : activeLayer});
			}
			else
			{
				// 4.1.
				// 4.2.
				console.log('4.1. 4.2.');
				activeLayer = 18;
				drawLegend({activeLayer : activeLayer});
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
		
		LayerLegend = legendLabel[activeLayer];
		updateServicePoints();
	}	
	
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
		
		mapServicePointLegendLabel = '';
		/**
		 * 1. Remove all service point layers.
		 * 2. Add the clicked service point. 
		 */	
		for(var i = 0; i < numLayers; i++)
		{
			if (layerToRegion[i] != 2)
				continue;
			
			map.removeLayer(mapLayer[i]);	
			map.removeLayer(mapLayer[servicePointBuffers[i][1]]);					
			map.removeLayer(mapLayer[servicePointBuffers[i][0]]);					
		}
		
		var clickedServicePoint = mapModal.getCheckedServicePoint();
		var clickedServicePointBufferSmall = mapModal.getCheckedServicePointBufferSmall();							
		var clickedServicePointBufferLarge = mapModal.getCheckedServicePointBufferLarge();	
		
		if (clickedServicePoint != -1 )
		{
			clickedHospitalLayerIdArray.push(clickedServicePoint);
		
			if (clickedServicePointBufferSmall != -1 )
			{
				map.addLayer(mapLayer[servicePointBuffers[clickedServicePoint][1]]);
				numServicePointLayers++;	
				map.reorderLayer(mapLayer[servicePointBuffers[clickedServicePoint][1]], numServicePointLayers);
			}
			
			if (clickedServicePointBufferLarge != -1 )
			{
				map.addLayer(mapLayer[servicePointBuffers[clickedServicePoint][0]]);
				numServicePointLayers++;	
				map.reorderLayer(mapLayer[servicePointBuffers[clickedServicePoint][0]], numServicePointLayers);
			}

			map.addLayer(mapLayer[clickedServicePoint]);
			mapServicePointLegendLabel += " - " +legendLabel[clickedServicePoint];
			numServicePointLayers++;				
			map.reorderLayer(mapLayer[clickedServicePoint], numServicePointLayers);
		}
	
		updateLegend();
		drawLegend({hospitals: clickedHospitalLayerIdArray});	
	}
	
	function updateLegend()
	{
		console.log('updateLegend was called');

		if (LayerLegend == '' && mapServicePointLegendLabel == '')
		{
			$('#legendTitle').hide();
			return;
		}	
		
		$('#legendTitle').html('<b>' + translator.T('Legend: ') +  '</b>' + LayerLegend + "  "  );
		$('#legendTitle').show();

		organizer.reorganizeMapsPage();
	}
	
	function removeLegend()
	{
		var legendBody = [];
		var thisLayerLegend = [];
		var legendColour = [];
		legendBody += [];
		
		$('#legendList').hide();
	}
	
	function drawLegend(clickedItem)
	{
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
						'<td>' + translator.T(thisLayerLegend.label) + '</td>' + 
					'</tr>';
			}
				
			legendBody += '</table>';

			$('#layerLegendList').html(legendBody);
		}
		if ('hospitals' in clickedItem)	
		{
			var htmlBody = '';
		
			var hospitals = clickedItem.hospitals;
			
			for(hospitalId in hospitals)
			{
				var layer = layers[hospitals[hospitalId]];

				htmlBody +=  '<img src="data:image/png;base64,' + layer.drawingInfo.renderer.symbol.imageData + '"  />';
				htmlBody += ' ' + mapServicePointLegendLabel;
			}
		
			$('#hospitalLegendList').html(htmlBody);
		}		

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

	window.updateLayer = updateLayer;	
});
