function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="container">' +
			'<p class="homeTitle">' +  translator.T('The Health Observatory') + '</p>' +
			
			'<p id="p1">' + translator.T('Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for some populations.') + '</p>'+
			'<p id="p2">' + translator.T('The Observatory of Minority Health (OMH) aims to fill these gaps and improve knowledge about health and access to health services for the Francophone minority population of Ontario.') + '</p>'+
			
			'<p id="p3">' + translator.T('The activity of the Observatory is organized around two priorities: ') + '</p>' +
			'<p>' +
				'<ul id="p4">' + translator.T('1) Activities of data collection, research and production of new knowledge') + '</ul>'+
				'<ul id="p5">' + translator.T('2) Valorisation and transfer of knowledge') + '</ul>'+
			'</p>' +
			
			'<p><b>Contact :</b>' + 
			'<a href="mailto:louise.bouchard@uottawa.ca">' + ' louise.bouchard@uottawa.ca</a>' + '</p>'+
			
			'<p>' +
				'<p id="p7" class="homeTitle">' + translator.T('Team') + '</p>'+
				'<b>' + translator.T('Scientific Director') + '</b>' +
				'<br><a href="http://sciencessociales.uottawa.ca/soc-ant/' + (router.getLanguage() == 'french'? 'profil-professeur?id=274':'professor-profile?id=274') + 'target="_blank">' + 'Louise Bouchard, PhD, Sociologie,  Institut de recherche de l’Hôpital Montfort, Université d’Ottawa</a></br>' +
			'</p>' +
			
			'<p>' +
				'<b>' + translator.T('Co-researcher') + '</b>' +
				'<br>Guy-Vincent Jourdan, PhD, École d’ingénierie et de technologie de l’information, Institut de recherche de l’Hôpital Montfort, Université d’Ottawa</br>' +
			'</p>' +
			
			'<p>' +
				'<b>' + translator.T('GIS, data and analysis') + '</b>' +
				'<br>Érik Bourdon, conseiller</br>' +
			'</p>' +
			
			
				'<b>' + translator.T('Analysts') + '</b>' +
				'<li>Ewa Sucha, PhD (candidate), Biostatistique</li>' +
				'<li>Golnaz Sedigh, PhD (candidate), Économie</li>' +
				'<li>Ricardo Batista, PhD (candidat), Santé des populations</li>' +
			
			'<br>' +
				'<b>' + translator.T('Transfer and application of knowledge') + '</b>' +
				'<br>Solange van Kemenade, PhD,  Associée de recherche, Université d’Ottawa</br>' +
			'</br>' +	
			
				'<b>' + translator.T('Developers') + '</b>' +
				'<li>Ava Ahadipour</li>' +
				'<li>Seyed M. Mirtaheri</li>' +
			
		'<br>' +
			'<p class="homeTitle">' + translator.T('Financial support') + '</p>' + 
			'<a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + '<img border="0" src="images/ontario.jpg" >' + '</a>' +
			'<a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + translator.T('Ministère de la santé et des soins de longue durée de l’Ontario') + '</a>' +
		'</br>' +		
		'</div>';

	
	return body;	
};

Tabs.prototype.getMaps = function () 
{
	var body =	
		'<div class="row" style="padding-left: 20px;">' +
			'<div id="map" class="col-xs-12" data-dojo-type="dijit.layout.ContentPane" region="center"></div>' +
			'<img src="images/loading2.gif" id="loadingIndicator"/>' +
			
			'<div class="mapsInstruction alert alert-success  cursorStyle" id="instruction">' +
				'<img type="image" src="images/Information.jpg" align="center" id="object"/>'+
				'<div id="mapsInstructionOne" class="mapsInstructionOne cursorStyle" align="center"></div>' +
			'</div>' +
			'<div id="mapLabel" class="mediumFont transbox mapLabel">Loading ...</div>' +
						
			'<div id="hospitalLegendList" class="transbox cursorStyle mediumFont"></div>' +
			'<div id="zoomInInstruction" class="transbox cursorStyle hidden"></div>' +
			
			'<div id="legendList" class="transbox cursorStyle smallFont">' +
				'<div id="legendTitle" class="transbox legendLabel cursorStyle smallFont"><b>Loading ...</b></div>' +
				'<p>' +
				'<div id="layerLegendList"></div>' +
				'</p>' +
			'</div>' +
		
		'</div>' +
		
		'<div class="modal fade" id="mapsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
						'<h4 class="modal-title" id="myModalLabel">Interactive Maps</h4>' +
					'</div>' +
					'<div class="modal-body" style="cursor:default">' +
						'Loading ...' +
					'</div>' +
					'<div class="modal-footer modalFooterSize">' +
						'<button type="button" class="btn btn-default" data-dismiss="modal" id="close">Close</button>' +
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
			'<li><a href="http://www.epsidon.com/" target="_blank">EPSIDON</a></li>' +
			'<li><a href="http://www.jwcomm.ca/" target="_blank">J W COMM INC.</a></li>' +
			'<li class="ENhealthForceOntario"><a href="http://www.healthforceontario.ca/' + (router.getLanguage() == 'french'? 'fr/Home':'eng/Home') + '" target="_blank">' + translator.T('Health Force Ontario') + '</a></li>' +
			'<li><a href=" http://www.hopitalmontfort.com/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + translator.T('IRHM -Institut de recherche de l’Hôpital Montfort') + '</a></li>' +
			'<li><a href="https://www.ophrdc.org/" target="_blank">OPHRDC - Ontario Physician Human Resources Data Center</a></li>' +
			'<li class="ENministryOfHealth"><a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr/default.aspx':'eng') + '" target="_blank">' + translator.T('Ministry of Health and Long-Term Care of Ontario') + '</a></li>' +
			'<li><a href="http://www.rrasfo.ca/" target="_blank">RRASFO – Réseau de recherche appliquée sur la santé de la population francophone de l’Ontario</a></li>' +
			'<li class="ENStatisticCanada"><a href="http://www.statcan.gc.ca/start-debut-' + (router.getLanguage() == 'french'? 'fra':'eng') + '.html" target="_blank">' + translator.T('Statistics Canada') + '</a></li>' +
		'</div>';


	return body;	
};
 
Tabs.prototype.getAnalysis = function ()
{
	var body = 
		'<div class="container">' +
			'<p class="homeTitle" id="headerOneResearchTab"></p>' +
			'<p>' +
				'<font id="validationFirstContent"></font>' +
			'</p>' +
			
			'<table>' +
				'<p>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="BouchardWarnkeTitle"></b>' +
					
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<h5 id="BouchardWarnkeAbstract"></h5>' +
					'<a href="Pdf/Indices IPSLOM - Bouchard&Warnke.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Indices IPSLOM - Bouchard&Warnke.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</p>' +	
				
				'<p>' +
					//'<h6 id="headerTwoResearchTab"></h6>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="AgingTitle"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<h5 id="agingAbstract"></h5>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</p>' +

				'<p>' +
					//'<h6 id="headerThreeResearchTab"></h6>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="PolicyTitle"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<h5 id="PolicyAbstract"></h5>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Policy_vol9_SP-BOUCHARD-2013.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</p>' +
				
				'<p>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="FOCUS13Title"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<h5 id="FOCUS13Abstract"></h5>' +
					'<a href="Pdf/FOCUS13-A1e.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/FOCUS13-A1e.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</p>' +
		
			'</table>' +
		'</div>';
		
	return body;
};

