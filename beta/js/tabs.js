function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="container">' +
			'<p><b>L’observatoire de la santé</b></p>' +
			
			'<p>L’information sanitaire de qualité est essentielle à la décision politique et à la planification de la santé. Toutefois, cette information est absente ou incomplète pour les populations minoritaires.</p>'+
			'<p>L’Observatoire de la santé des minorités de langue officielle (OSM) vise à combler ces lacunes et à améliorer la connaissance sur la santé, l’accès aux services et aux professionnels de la santé de la population francophone de l’Ontario.</p>'+
			'<p>L’activité de l’Observatoire s’organise autour de deux pôles:</p>' +
			'<p>' +
			'<ul>1) activités de collecte de données, de recherche et de production de nouvelles connaissances</ul>'+
			'<ul>2) valorisation et transfert des connaissances</ul>'+
			'</p>' +
			'<b>Contact :</b>' + ' louise.bouchard@uottawa.ca' +
			
			'<h4>L’équipe</h4>' +
			
			'<h5 class="space"><u class="title">Direction scientifique</u></h5>' + 
			'Louise Bouchard, PhD, Sociologie, Institut de recherche de l’Hôpital Montfort, Université d’Ottawa' +
			
			'<h5 class="space"><u class="title">Co-chercheurs</u></h5>' + 
			'Guy-Vincent Jourdan, PhD, École d’ingénierie et de technologie de l’information, Institut de recherche de l’Hôpital Montfort, Université d’Ottawa' +
			
			'<h5 class="space"><u class="title">Géomatique, données et analyses</u></h5>' + 
			'Érik Bourdon, conseiller' +
			
			'<h5 class="space"><u class="title">Analystes</u></h5>' + 
			'<p>Ewa Sucha, PhD (c), Biostatistique</p>' +
			'<p>Golnaz Sedigh, PhD (c), Économie</p>' +
			'Ricardo Batista, PhD (c), Santé des populations' +
			
			'<h5 class="space"><u class="title">Transfert et application des connaissances</u></h5>' + 
			'<p>Solange van Kemenade, PhD,  Associée de recherche, Université d’Ottawa</p>' +
			
			'<h5 class="space"><u class="title">Programmation et gestion de la base de données</u></h5>' + 
			'<p>Ava Ahadipour, informaticienne</p>' +
			'<p>Seyed M Mirtaheri, informaticien</p>' +
			
			'<h5 class="space"><u class="title">Soutien financier</u></h5>' + 
			'<p>Ministère de la santé et des soins de longue durée de l’Ontario</p>' +
			
			/* '<p id="homeMainParagraph">Loading ...</p>' +
				'<p id="homeMainParagraph2">Loading ...</p>' +
				'<p>' +
				'<span id="homeSecondLine"></span>' + 
				'</p>' +

				'<ul>1) <span id="homeOptionOne"></span></ul>' +
				'<ul>2) <span id="homeOptionTwo"></span></ul>' +
				
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
				
				'<h4 class="grayFont largeFont" id="withSupportOfMsg"></h4>' +
				'<br>' +
				'<a href="http://www.ontario.ca/" target="_blank"><img border="0" src="images/ontario.jpg" ></a>' +
				'<br>'+
				'<a href="http://www.health.gov.on.ca/en/" target="_blank"><img border="0" src="images/healthandLongTermCare.jpg" ></a>' +
				'</br>' +
				'</br>' ; */
				
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
			'<h4 class="grayFont largeFont" id="financialSupport"></h4>' +
			'<p>' +
				'<a href="http://www.ontario.ca/" target="_blank"><img border="0" src="images/ontario.jpg" ></a>' +
				'<br>' +
				'<a href="http://www.health.gov.on.ca/en/" target="_blank"><img border="0" src="images/healthandLongTermCare.jpg" ></a>' +
				'</br>' +
			'</p>' +

			'<h4 class="grayFont largeFont" id="dataProvidersMsg"></h4>' +

			'<p>' +
				'<a href="http://www.ontario.ca/" target="_blank"><img border="0" src="images/ontario.jpg" ></a>' +
				'<br>' +
				'<a href="http://www.healthforceontario.ca/en/Home" target="_blank"><img border="0" src="images/HealthForceOntario.jpg" ></a>' +	
				'</br>' +
			'</p>' +
			
			'<p>' +
				'<a href="http://www.ontario.ca/" target="_blank"><img border="0" src="images/ontario.jpg" ></a>' +
				'<br>' +
				'<a href="http://www.health.gov.on.ca/en/" target="_blank"><img border="0" src="images/healthandLongTermCare.jpg" ></a>' +
				'<br>' +
			'</p>' +
			
			'<p>' +
				'<a href="https://www.ophrdc.org/" target="_blank"><img border="0" src="images/OntarioPhysicianHumanResourcesDataCentre.jpg" ></a>' +
			'</p>' +
			
			'<p>' +
			'<a href="http://www.statcan.gc.ca/start-debut-eng.html" target="_blank"><img border="0" src="images/StatisticsCanada.jpg" ></a>' +
			'</p>' + 
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

