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
	
	// 1.
	console.log('Creating Map');

	map = new Map( "map" , {
		//autoResize: false,
		basemap: "gray",	
    	center: [-85.416, 49.781],
		zoom : 5,
		logo: false
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

		if (layerType[i] == 'FeatureLayer')
		{
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
		else 
		{
			if (i ==12)
			{
				mapLayer[i] = new esri.layers.ArcGISDynamicMapServiceLayer(
					mapAddress2   , {
					"opacity"        :1.0,
					"imageParameters":imageParameters
					});
			}	
			else if (i ==13)
			{
				mapLayer[i] = new esri.layers.ArcGISDynamicMapServiceLayer(
					mapAddress3  , {
					"opacity"        :1.0,
					"imageParameters":imageParameters
					});
			}
			else if (i == 14)
			{
				mapLayer[i] = new esri.layers.ArcGISDynamicMapServiceLayer(
					mapAddress4  , {
					"opacity"        :1.0,
					"imageParameters":imageParameters
					});
			}
			else if ( i ==15)
			{
			mapLayer[i] = new esri.layers.ArcGISDynamicMapServiceLayer(
					mapAddress5  , {
					"opacity"        :1.0,
					"imageParameters":imageParameters
					});
			}
			
		}
	}

	for (var j in servicePointBuffers) {
	
		for (var i = 0; i < 2; i++) {

			var bufferIndex = servicePointBuffers[j][i];
		
			console.log('Creating Buffers for Layer ' + j + ' buffer index: ' + bufferIndex);

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

	setupAccordion();

	map.on("zoom-start", function() {
		$("#loadingIndicator").fadeIn('fast');
		$( "#map" ).fadeTo("slow" , 0.8);

		setTimeout(function(){fadeOutSpinner();}, 30000);		
	});	

	map.on("zoom-end", function() {
		updateLayer(-1);
	});	
	
	map.on("update-start", function() {
		$("#loadingIndicator").fadeIn('fast');
		$( "#map" ).fadeTo("slow" , 0.8);
		
		setTimeout(function(){fadeOutSpinner();}, 30000);
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
			var legendsArray = [];
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
					
					if (layer.drawingInfo && layer.drawingInfo.renderer)
					{
						if (layer.drawingInfo.renderer.classBreakInfos)
							legendsArray[i] = layer.drawingInfo.renderer.classBreakInfos;
						else if (layer.drawingInfo.renderer.uniqueValueInfos)
							legendsArray[i] = layer.drawingInfo.renderer.uniqueValueInfos;
						else
							legendsArray[i] = null;
							
					}
					else
					{
						legendsArray[i] = null;					
					}
					i++;
				}

				accordionHtmlBody += 
					'</ul>' + 
					'<ul class="nav nav-list" id="legendList' + 
						j + '">' + 
					'</ul>' + 
						'<p>' +
							'<button class="button1" onclick="myFunction()">' +
							'<img src="images/Information.jpg" width="25" height="25" title="InformationImage"/>' +
							'</button>' +
							
							'<script>' +
								'function myFunction()' +
									'{' +
									'window.showModalDialog("./info.html" , "height=255, width=1700");' +
									'}' +
							'</script>' +
						'</p>' +
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
			
			drawLegend(activeLayer);	

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
		/**
		 * 1. Remove all checkboxes except for the one just clicked. 
		 * 2. Remove old layers.
		 * 3. Get the clicked layerId.
		 * 4. Draw the new layer accordingly. 
		 *    4.1. If nothing is clicked draw layer 4.
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
			((clickedLayerId == -1) &&(layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			// 4.1.
			// 4.2.
			console.log('4.1. 4.2.');
			activeLayer = 16;
		}
		else if ((clickedLayerId == -1) || 
			((clickedLayerId == 0) &&(layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			activeLayer = 12;
		}
		
		else if ((clickedLayerId == -1) || 
			((clickedLayerId == 1) &&(layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			activeLayer = 13;
		}
		else if ((clickedLayerId == -1) || 
			((clickedLayerId == 2) &&(layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			activeLayer = 14;
		}
		else if ((clickedLayerId == -1) || 
			((clickedLayerId == 3) &&(layerToRegion[clickedLayerId] == 0) && (extent < 7)))
		{
			activeLayer = 15;
		}
		else
		{
			// 4.3.
			console.log('4.3. clickedLayerId: ' + clickedLayerId);
			activeLayer = clickedLayerId;
		}
		
		try
		{
			if (layerInfoWindow[activeLayer])
			{
				layerInfoWindow[activeLayer].startup();
				mapLayer[activeLayer].InfoTemplate = layerTemplate[activeLayer];
			}
			
			map.addLayer(mapLayer[activeLayer]);
			drawLegend(activeLayer);		
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
		
		$('#legendList' + layerToRegion[layerId]).html('');
	}
	
	function drawLegend(layerId)
	{
		console.log('drawLegend was called layerId: ' + layerId);

		var layerLegend = legendsArray[layerId];
		
		if (layerLegend)
		{							
			console.log("if(layerLegend)?");
			var legendBody = '<li class="nav-header">' + T('Legends') + '</li>';
	
			for (j = 0; j < layerLegend.length; j++)
			{
				var thisLayerLegend = layerLegend[j];
	
				var legendColour = thisLayerLegend.symbol.color[0] + ',' +
					thisLayerLegend.symbol.color[1] + ',' +
					thisLayerLegend.symbol.color[2];
	
				legendBody +=  '<li><table><tr>' + 
						'<td>' + 
							'<div style="width:40px;height:20px;border:1px solid' + 
							' #000;background-color:RGB('+legendColour+');"></div>' + 
						'</td>' + 
						'<td>' + 
							'<div style="width:10px;height:20px;border:0px;"></div>' + 
						'</td>' + 
						'<td>' + thisLayerLegend.label + '</td>' + 
					'</tr></table></li>';
			}	
	
			$('#legendList' + layerToRegion[layerId]).html(legendBody);
		}
		else
		{
			removeLegend(layerId);
			removeLegend(inLayer);
			$('#legendList' + layerToRegion[layerId]).html('');			
		}		
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
	
	function getAccordionRowHtmlBody(layer, layerCounter, accordionCounter) 
	{
		if (accordionCounter != (accordion.length-1)) 
		{
			htmlBody = 
				'<table>' +
					'<tr>' + 
						'<td>' + 
							'<input type="checkbox" id="layerHyperLink' +layerCounter+ '"/>' + 
						'</td>' + 
						'<td>' + 
							T(layer.name) + 
						'</td>' +
					'</tr>' + 
				'</table>' 
				;
		}
		else
		{
			htmlBody = 
				'<table>' +
					'<tr>' + 
						'<td>' + 
							'<label>'+'<input type="checkbox" id="servicePointHyperLink' +layerCounter+ '" />' + 
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
								' 10K' +
							'</input>' +
						'</td>' + 
					'</tr>' + 
					'<tr class="servicePointBufferRow' + layerCounter + '">' + 
						'<td>' + 
						'</td>' + 
						'<td>' + 
							'<input type="checkbox" class="servicePointBufferLayerCheckBox" id="servicePointBuffer20k' +layerCounter+ '" >' + 
								' 20K' +
							'</input>' +
						'</td>' + 
					'</tr>' + 									
				'</table>';
		}
		
		htmlBody = 
			'<li class="first" id="region' + layerCounter + '">' +  
				htmlBody + 
			'</li>';
		return htmlBody;
	}
	
	function fadeOutSpinner()
	{
		$("#loadingIndicator").fadeOut('fast');
		$( "#map" ).fadeTo("fast" , 1);	
	}
		
});
