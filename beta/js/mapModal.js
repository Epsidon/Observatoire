function MapModal()
{
	this.accordion = [];

	this.accordion[0] = []
	this.accordion[0]['title'] = translator.T('French Speaking Population (2011)');
	this.accordion[0]['numLayers'] = 4;

	this.accordion[1] = []
	this.accordion[1]['title'] = translator.T('Profiles By LHIN (2011)');
	this.accordion[1]['numLayers'] = 3;

	this.accordion[2] = []
	this.accordion[2]['title'] = translator.T('Health Services (2011)');
	this.accordion[2]['numLayers'] = 10;
	
	this.clickedLayerId = -1;
	this.clickedServicePoint = -1;
	this.clickedServicePointBufferSmall = -1;
	this.clickedServicePointBufferLarge = -1;
	
	this.accordionHeaders = {7 : translator.T('Hospitals By Services Offered'), 14 : translator.T('Hospitals By French Language Service (FLS) Designation')};
	
};

MapModal.prototype.fillModalBody = function()
{
	var self = this;
	
	console.log('Setting up accordion');
	$.get("layers.json", function( data ) 
	{
		layers = data.layers;
		
		var accordionHtmlBody = '';
		
		accordionHtmlBody = '<div class="notesDiv">' +
				'<object data="images/information.svg" type="image/svg+xml" id="object"></object>'+
				'<p align="center">' +
					translator.T('Select a data layer from the menu below and click on map for detailed information.') + '</p>' +
			'</div>' ;

		var i = 0;

		for (var j = 0; j < self.accordion.length; j++)
		{
			var colspan = (j == self.accordion.length - 1)? 3 : 2;
			
			accordionHtmlBody += 
				'<div>' + self.accordion[j]['title'] + '</div>';

			for (var k = 0; k < self.accordion[j]['numLayers']; k++)
			{
				var layer = layers[i];
						
				accordionHtmlBody += self.getAccordionRowHtmlBody(layer, i, j);
				i++;
			}

			//accordionHtmlBody += '</table>';
		}
													
		$( ".modal-body" ).html(accordionHtmlBody);

		$('.servicePointBufferRow').hide();	

		self.addSelectedItemsToModal();

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
	htmlBody = '';
	
	
	if (this.accordionHeaders[layerCounter])
				htmlBody += '<div' + this.accordionHeaders[layerCounter] +
							'</div>';

	if (accordionCounter != (this.accordion.length-1)) 
	{
		htmlBody += 
			'<div float="left">' +
				'<input type="checkbox" id="layerHyperLink' +layerCounter+ '" ' + 
						'class="layerHyperLinkCheckBox"' +
						'onClick="javascript:mapModal.layerCheckBoxClicked(' + layerCounter + ')"/>' + 
					translator.T(layer.name) +
			'</div>';
	}
	else
	{
		htmlBody += 
				'<div float="right">' + 				
						'<input type="checkbox" id="servicePointHyperLink' + layerCounter + '" ' + 
							'class="servicePointCheckBox"' +
							'onClick="javascript:mapModal.servicePointCheckBoxClicked(' + layerCounter + ')"/>' + 
						translator.T(layer.name) +
				'</div>' +
				
				'<div class="servicePointBufferRowLayer' + layerCounter + ' servicePointBufferRow">' + 	
						'<input type="checkbox"  class="servicePointBufferLayerCheckBox" id="servicePointBuffer10k' +layerCounter+ '" >' + 
							translator.T(' 25 km Driving Distance') +
				'</div>' + 
				
				'<div class="servicePointBufferRowLayer' + layerCounter + ' servicePointBufferRow">' + 
						'<input type="checkbox" class="servicePointBufferLayerCheckBox" id="servicePointBuffer20k' +layerCounter+ '" >' + 
							translator.T(' 50 km Driving Distance') +
				'</div>';
	}

/*	
	htmlBody = 
		'<li id="region' + layerCounter + '">' +  
			htmlBody + 
		'</li>';
*/

	return htmlBody;
}

MapModal.prototype.layerCheckBoxClicked = function (layerCounter)
{
	$('.layerHyperLinkCheckBox').prop('checked', false);
	$('#layerHyperLink' + layerCounter).prop('checked', true);
};

MapModal.prototype.servicePointCheckBoxClicked = function (layerCounter)
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
};


MapModal.prototype.modalUpdateMapsClick = function()
{
	this.storeClickedItems();

	$('#mapsModal').modal('hide');

	updateLayer();
};

/** 
 * This method stores the clicked items internally. So when the modal is gone, we know 
 * what are the clicked items. It: 
 *
 * 1. First loops through all layer checkboxes and if there is a layer that is clicked, 
 *    it stores its id in this.clickedLayerId.
 * 2. It will then loops through service points, and if it finds a clicked service point, 
 *    it stores the service point id in this.clickedServicePoint.
 *    2.1. After finding a service point that is clicked it looks for small and large 
 *         buffers; and if it finds them it will store them in : 
 *         this.clickedServicePointBufferSmall and this.clickedServicePointBufferLarge.
 */
MapModal.prototype.storeClickedItems = function()
{
	this.clickedLayerId = -1;
	this.clickedServicePoint = -1;
	this.clickedServicePointBufferSmall = -1;
	this.clickedServicePointBufferLarge = -1;

	for(var i = 0; i < numLayers; i++)
	{
		if ($('#layerHyperLink' + i).prop('checked') )
			this.clickedLayerId = i;	
	}

	for(var i = 0; i < numLayers; i++)
	{
		if (layerToRegion[i] != 2)
			continue;

		if ($('#servicePointHyperLink' + i).prop('checked') )
		{
			this.clickedServicePoint = i;
			
			if ($('#servicePointBuffer10k' + i).prop('checked'))
				this.clickedServicePointBufferSmall = i;

			if ($('#servicePointBuffer20k' + i).prop('checked'))
				this.clickedServicePointBufferLarge = i;
		}
	}
};

MapModal.prototype.getCheckedLayerId = function()
{
	return this.clickedLayerId;
};

MapModal.prototype.getCheckedServicePoint = function()
{
	return this.clickedServicePoint;
};

MapModal.prototype.getCheckedServicePointBufferSmall = function()
{
	return this.clickedServicePointBufferSmall;
};

MapModal.prototype.getCheckedServicePointBufferLarge = function()
{
	return this.clickedServicePointBufferLarge;
};

/**
 * This me
 */
MapModal.prototype.addSelectedItemsToModal = function()
{
	if (this.clickedLayerId != -1)
		$('#layerHyperLink' + this.clickedLayerId).prop('checked', true);

	if (this.clickedServicePoint != -1)
	{
		$('#servicePointHyperLink' + this.clickedServicePoint).prop('checked', true);

		if (this.clickedServicePointBufferSmall != -1)
			$('#servicePointBuffer10k' + this.clickedServicePoint).prop('checked', true);
		
		if (this.clickedServicePointBufferLarge != -1)
			$('#servicePointBuffer20k' + this.clickedServicePoint).prop('checked', true);
		
		$('.servicePointBufferRowLayer' + this.clickedServicePoint).show();

	}
}





