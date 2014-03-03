function Tabs() {}

Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="container">' +
			'<span id="homeMainParagraph">Loading ...</span>' +
			'<br>' +
			'<span id="homeSecondLine"></span>' +
			'<br>' +

			'<br>1) <span id="homeOptionOne"></span></br>' +
			'<br>2) <span id="homeOptionTwo"></span></br>' +
			'</br>' +

			'<h2 class="grayFont smallFont" id="withSupportOfMsg"></h2>' +
			'<img border="0" src="images/ontario.jpg" alt="I" width="80" height="80">' +
			'<font class="blueFont smallFont ministryOfMsg"></font>' +
			'<font class="blueFont mediumFont healthAndLongTermCareMsg"></font>' + 
		'</div>';

	
	return body;	
};

Tabs.prototype.getMaps = function () 
{
	var body =	 
		'<div class="row" style="padding-left: 20px;">' +
			'<div id="map" class="col-xs-12" data-dojo-type="dijit.layout.ContentPane" region="center"></div>' +
			'<img src="images/loading2.gif" id="loadingIndicator"/>' +
			'<div id="legendList" class="mediumFont"></div>' + 
		'</div>' +
		
		'<div class="modal fade" id="mapsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
						'<h4 class="modal-title" id="myModalLabel">Maps</h4>' +
					'</div>' +
					'<div class="modal-body">' +
						'Loading ...' +
					'</div>' +
					'<div class="modal-footer">' +
						'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
						'<button type="button" class="btn btn-primary">Save changes</button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
		

	return body;
};

Tabs.prototype.getPartners = function () 
{
	var body =
		'<div class="container">' +	
			'<h2 class="grayFont smallFont" id="financialSupport"></h2>' +
			'<p>' +
				'<img border="0" src="images/ontario.jpg" width="100" height="150">' +
				'<font class="blueFont smallFont ministryOfMsg"></font>' +
				'<font class="blueFont mediumFont healthAndLongTermCareMsg"></font>' +
			'</p>' +

			'<h2 class="grayFont smallFont" id="dataProvidersMsg"></h2>' +

			'<p>' +
				'<img border="0" src="images/ontario.jpg" width="100" height="150">' +
				'<font class="mediumFont" id="healthMsg"></font>' +
				'<font class="redFont" id="forceMsg"></font>' +
				'<font id="ontarioMsg"></font>' +
			'</p>' +

			'<p><img border="0" src="images/ontario.jpg"  width="100" height="150">' +
			'<font class="smallFont blueFont ministryOfMsg"></font>' +
			'<font class="mediumFont blueFont healthAndLongTermCareMsg"></font>' +
			'</p>' +

			'<p><img border="0" src="images/OntarioPhysicianHumanResourcesDataCentre.jpg" alt="Pulpit rock" width="500" height="250"></p>' +
			'<p><img border="0" src="images/StatisticsCanada.jpg"  width="250" height="250"></p>' + 
		'</div>';


	return body;	
};

