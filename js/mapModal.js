function MapModal()
{
	this.accordion = [];

	this.accordion[0] = []
	this.accordion[0]['title'] = translator.T('French Speaking Population (2011)');
	this.accordion[0]['numLayers'] = 4;

	this.accordion[1] = []
	this.accordion[1]['title'] = translator.T('Profiles By LHIN (2011)');
	this.accordion[1]['numLayers'] = 2;

	this.accordion[2] = []
	this.accordion[2]['title'] = translator.T('Health Services (2011)');
	this.accordion[2]['numLayers'] = 7;
};

MapModal.prototype.fillModalBody = function()
{
	var self = this;
	
	console.log('Setting up accordion');
	$.get("layers.json", function( data ) 
	{
		layers = data.layers;
		
		var accordionHtmlBody = '';

		var i = 0;

		for (var j = 0; j < self.accordion.length; j++)
		{
			var colspan = (j == self.accordion.length - 1)? 3 : 2;
			
			accordionHtmlBody += 
				'<table class="table table-condensed table-hover table-bordered">' +
					'<tr><td colspan="' + colspan +'"><strong>' + self.accordion[j]['title'] + '</strong></td></tr>';

			for (var k = 0; k < self.accordion[j]['numLayers']; k++)
			{
				var layer = layers[i];
						
				accordionHtmlBody += self.getAccordionRowHtmlBody(layer, i, j);
				i++;
			}

			accordionHtmlBody += '</table>';
		}
													
		$( ".modal-body" ).html(accordionHtmlBody);

console.log(accordionHtmlBody);


/*	
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
*/					
	}, "json" );
}




MapModal.prototype.getAccordionRowHtmlBody = function(layer, layerCounter, accordionCounter) 
{
	if (accordionCounter != (this.accordion.length-1)) 
	{
		htmlBody = 
			'<tr>' +
				'<td>' + 
					'<input type="checkbox" id="layerHyperLink' +layerCounter+ '"/>' + 
				'</td>' + 
				'<td><small>' + 
					translator.T(layer.name) +
				'</small></td>' + 
			'</tr>';
	}
	else
	{
		htmlBody = 
				'<tr>' + 				
					'<td>' + 
						'<label>'+'<input type="checkbox" id="servicePointHyperLink' +layerCounter+ '" />' + 
					'</td>' +

					'<td colspan="2"><small>' + 
						translator.T(layer.name) +
					'</small></td>' + 
						'</label>'+
				'</tr>' + 
				'<tr class="servicePointBufferRow' + layerCounter + ' collapse out">' + 
					'<td>' + 
					'</td>' + 
					'<td>' + 
						'<input type="checkbox"  class="servicePointBufferLayerCheckBox" id="servicePointBuffer10k' +layerCounter+ '" >' + 
						'</input>' +
					'</td>' + 
					'<td><small>' + 
							translator.T(' 25 km Driving Distance') +
					'</small></td>' + 
				'</tr>' + 
				'<tr class="servicePointBufferRow' + layerCounter + ' collapse out">' + 

					'<td>' + 
					'</td>' + 

					'<td>' + 
						'<input type="checkbox" class="servicePointBufferLayerCheckBox" id="servicePointBuffer20k' +layerCounter+ '" >' + 
						'</input>' +
					'</td>' + 
					'<td><small>' + 
							translator.T(' 25 km Driving Distance') +
					'</small></td>' + 
					
				'</tr>';
	}

/*	
	htmlBody = 
		'<li id="region' + layerCounter + '">' +  
			htmlBody + 
		'</li>';
*/

	return htmlBody;
}
