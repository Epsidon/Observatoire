function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="container">' +
			'<p id="homeMainParagraph">Loading ...</p>' +
				'<p id="homeMainParagraph2">Loading ...</p>' +
				'<p>' +
				'<span id="homeSecondLine"></span>' + 
				'</p>' +

				'<p><br>1) <span id="homeOptionOne"></span></br>' +
				'<br>2) <span id="homeOptionTwo"></span></br>' +
				'</br></p>' +
				
				'<h4 class="grayFont largeFont" id="TeamHeader"></h4>' +
				
				'<br><u><b class="grayFont mediumFont" id="Bouchard"></b></u></br>' +
				'<p id="BouchardTitle"></p>' +
				
				'<u><b class="grayFont mediumFont" id="Erik"></b></u>' +
				'<p id="ErikTitle"></p>' +
				
				'<u><b class="grayFont mediumFont" id="GVJourdan"></b></u>' +
				'<p id="GVJourdanTitle"></p>' +
				
				'<b class="grayFont mediumFont" id="Seyed"></b>' +
				'<u><br><b class="grayFont mediumFont" id="Ava"></b></br></u>' +
				'<p id="Programmer"></p>' +
				
				'<b class="grayFont mediumFont" id="Ewa"></b>' +
				'<u><br><b class="grayFont mediumFont" id="Golnaz"></b></br></u>' +
				'<p id="Analyst"></p>' +
				
				'<h2 class="grayFont largeFont" id="withSupportOfMsg"></h2>' +
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
			'<div id="legendTitle" class="transbox">Loading ...</div>' +
			'<div id="hospitalLegendList" class="transbox"></div>' +
			'<div id="legendList" class="transbox">' +
				'<div id="layerLegendList"></div>' +
			'</div>' +
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
						'<button type="button" class="btn btn-primary" id="modalUpdateMapButton">Update Map</button>' +
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
 
Tabs.prototype.getAnalysis = function ()
{
	var body = 
		'<div class="container">' +
			'<h2 class="grayFont mediumFont" id="headerOneResearchTab"></h2>' +
			'<p>' +
				'<font class="mediumFont" id="validationFirstContent"></font>' +
			'</p>' +
			'<a href="Pdf/Indices IPSLOM - Bouchard&Warnke.pdf" target="_blank"><b>' + translator.T('PDF Link') + '</b></a>' +
			
			'<h2 class="grayFont mediumFont" id="headerTwoResearchTab"></h2>' +
			'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank"><b>' + translator.T('PDF Link') + '</b></a>' +
			
			'<h2 class="grayFont mediumFont" id="headerThreeResearchTab"></h2>' +
			'<a href="Pdf/Policy_vol9_SP-BOUCHARD-2013.pdf" target="_blank"><b>' + translator.T('PDF Link') + '</b></a>' +
			
			'<h2 class="grayFont mediumFont" id="headerFourResearchTab"></h2>' +
			'<a href="Pdf/FOCUS13-A1e.pdf" target="_blank"><b>' + translator.T('PDF Link') + '</b></a>' +
		'</div>';
		
	return body;
};

