function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="homeContainer">' +
			'<table>' +
				'<tr>' +
					'<td>' +
						'<img src="images/accueil_img.jpg" id="accueil"/>' +
					'</td>' +
				
					'<td>' +
						'<p class="homeTitle">' +  translator.T('Observatory of Minority Health') + '</p>' +
						
						'<p id="p1">' + translator.T('Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for minority populations.') + '</p>'+
						'<p >' + translator.T('The Observatory of Minority Health aims to fill these gaps and improve knowledge about health and access to health professionals and services for the Francophone population of Ontario.') + '</p>'+
						
						'<p id="p3">' + translator.T('The activity of the Observatory is organized around two priorities: ') + '</p>' +
						'<p>' +
							'<ul id="p4">' + translator.T('1) Activities of data collection, research and production of new knowledge') + '</ul>'+
							'<ul id="p5">' + translator.T('2) Valorisation and transfer of knowledge') + '</ul>'+
						'</p>' +
						
						'<p><b class="contact">Contact : </b>' + 
						'<a href="mailto:louise.bouchard@uottawa.ca" class="mail">' + ' louise.bouchard@uottawa.ca</a>' + '</p>'+
					'</td>' +
				'</tr>' +	
			'</table>' +
			
			'<p>' +
				'<p id="p7" class="homeTitle">' + translator.T('Team') + '</p>'+
				'<b>' + translator.T('Scientific director') + '</b>' +
				'<br><a href="http://' + (router.getLanguage() == 'french'? 'sciencessociales.uottawa.ca/soc-ant/profil-professeur?id=274':'socialsciences.uottawa.ca/soc-ant/professor-profile?id=274') + '" target="_blank">' +  translator.T('Louise Bouchard, PhD, Sociology,  Institut de recherche de l’Hôpital Montfort, University of Ottawa') + '</a></br>' +
			'</p>' +
			
			'<p>' +
				'<b>' + translator.T('Co-Investigator') + '</b>' +
				'<br>' +  translator.T('Guy-Vincent Jourdan, PhD, School of Electrical Engineering and Computer Science, Institut de recherche de l’Hôpital Montfort, University of Ottawa') + '</br>' +
			'</p>' +
			
			'<p>' +
				'<b>' + translator.T('Geomatic, Data and Analysis') + '</b>' +
				'<br>'+ translator.T('Érik Bourdon, Manager') + '</br>' +
			'</p>' +
			
			
				'<b>' + translator.T('Analysts') + '</b>' +
				'<li>'+ translator.T('Ewa Sucha, PhD (candidate), Biostatistic') + '</li>' +
				'<li>' + translator.T('Golnaz Sedigh, PhD (candidate), Economy') + '</li>' +
				'<li>'+  translator.T('Ricardo Batista, PhD (candidat), Population Health') + '</li>' +
			
			'<br>' +
				'<b>' + translator.T('Transfer and application of knowledge') + '</b>' +
				'<br>' +  translator.T('Solange van Kemenade, PhD, Research Associate, University of Ottawa') + '</br>' +
			'</br>' +	
			
				'<b>' + translator.T('Developers') + '</b>' +
				'<li>Ava Ahadipour</li>' +
				'<li>Seyed M Mirtaheri</li>' +
			
		'<br>' +
			'<p class="homeTitle">' + translator.T('Financial support') + '</p>' + 
			'<a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + '<img border="0" src="images/ontario.jpg" >' + '</a>' +
			'<a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + translator.T('Ministry of Health and Long Term Care of Ontario') + '</a>' +
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
						
			'<div id="hospitalLegendList" class="hospitalTable cursorStyle mediumFont hidden"></div>' +
			'<div id="zoomInInstruction" class="transbox cursorStyle hidden"></div>' +
				'<p>' +
				'<div id="layerLegendList" class="legendTransbox cursorStyle smallFont"></div>' +
				'</p>' +
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
		'<div class="partnersContainer">' +	
			'<table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">' +
				'<tr>'+
					'<td colspan="4">'+
						'<p class="homeTitle">L&rsquo;équipe de l&rsquo;Observatoire de la santé des minorités remercie ses partenaires   pour la mise en place de ce projet.</p>'+
					'</blockquote>'+
					'</td>'+
				'</tr>'+
				
			
				'<tr>'+
					'<td width="25%" align="right" valign="bottom"><p><img src="images/ontario.jpg" width="127" height="47" /></p>'+
					 '<p><a href="https://www.ophrdc.org/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + '<img border="0" src="images/ophrdc.jpg" width="204" height="38" >' + '</a></p>' +
					 '<p><a href="http://www.statcan.gc.ca/start-debut-' + (router.getLanguage() == 'french'? 'fra':'eng') + '.html" target="_blank">' + '<img border="0" width="205" height="30" src="images/stat_canada.jpg" width="204" height="38" >' + '</a></p>' +
					  
					'<td width="75%" colspan="3" valign="top"><p><strong>Le soutien financier est assuré par le<span class="homeTitle"> Ministère de la santé et des soins de   longue durée de l&rsquo;Ontario</span>.</strong></p>'+          
					  '<p><strong>Les données utilisées sont fournies par<span class="homeTitle"> Professions Santé Ontario</span>, <span class="homeTitle">OPHRDC</span> (Ontario Physician Human Resources Data Center), le <span class="homeTitle">Ministère de la santé et des   soins de longue durée de l&rsquo;Ontario</span> et <span class="boldcolor">Statistique Canada</span>. </strong></p>          <p><strong>Aide à la conception : <br />'+
						'<span class="homeTitle">          RRASFO</span> – Réseau de recherche appliquée sur la santé de la   population francophone de l&rsquo;Ontario,<br />'+
					  '<span class="homeTitle">J W COMM INC.</span>, <span class="homeTitle">IRHM</span> (Institut de   recherche de l&rsquo;Hôpital Montfort)</strong></p>'+  
					  '<p><strong>Soutien et réalisation technique : <span class="homeTitle">Epsidon Inc</span>.</strong></p></td>'+
				'</tr>'+
				
				'<tr>'+	  
					'<td width="25%" align="center" valign="middle"><p><a href="http://www.rrasfo.ca/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + '<img border="0" src="images/rrasfo.jpg">' + '</a></p></td>'+
					'<td width="25%" align="center" valign="middle"><p><a href="http://www.jwcomm.ca/' + (router.getLanguage() == 'french'? '':'english.htm') + '" target="_blank">' + '<img border="0" src="images/jwcomm.jpg"  width="200" height="50" >' + '</a></p></td>'+
					'<td width="25%" align="center" valign="middle"><p><a href="http://www.hopitalmontfort.com/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + '<img border="0"  src="images/irhm.jpg"  width="200" height="50" >' + '</a></p></td>'+
					'<td width="25%" align="center" valign="middle"><p><a href="http://www.epsidon.com/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + '<img border="0" src="images/epsidon.jpg"  width="157" height="50" >' + '</a></p></td>'+
			  '</tr>'+
			'</table>' +
	
		'</div>';


	return body;	
};
 
Tabs.prototype.getResearch = function ()
{
	var body = 
		'<div class="researchContainer">' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="BouchardWarnkeTitle"></b>' +
					
					'<br>'+
					'<b>' + translator.T('Abstract: ') + '</b>' +
					'<li id="BouchardWarnkeAbstract"></li>' +
					'<a href="Pdf/Indices IPSLOM - Bouchard&Warnke.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Indices IPSLOM - Bouchard&Warnke.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
					'</br>' +
				
				'<br>' +
					//'<h6 id="headerTwoResearchTab"></h6>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="AgingTitle"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<li id="agingAbstract"></li>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</br>' +

				'<br>' +
					//'<h6 id="headerThreeResearchTab"></h6>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="PolicyTitle"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<li id="PolicyAbstract"></li>' +
					'<a href="Pdf/Aging-Bouchard_et_al_2013.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/Policy_vol9_SP-BOUCHARD-2013.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</br>' +
				
				'<br>' +
					'<b>' + translator.T('Title: ') + '</b>' +
					'<b id="FOCUS13Title"></b>' +
					'<br><b>' + translator.T('Abstract: ') + '</b></br>' +
					'<li id="FOCUS13Abstract"></li>' +
					'<a href="Pdf/FOCUS13-A1e.pdf" target="_blank">' + '<img border="0" src="images/pdf.jpg" >' + '</a>' +
					'<a href="Pdf/FOCUS13-A1e.pdf" target="_blank"><b>' + translator.T('PDF') + '</b></a>' +
				'</br>' +

		'</div>';
		
	return body;
};

