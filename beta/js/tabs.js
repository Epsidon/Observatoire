function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
	'<div class="homeContainer">' +
		'<table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">'+
				'<tr>'+
				'<td></td>'+
				'</tr>'+
	
				'<tr>'+
						'<table width="100%" border="0" cellspacing="0" cellpadding="20">'+
							'<tr>'+
								'<td width="35%"><img src="images/accueil_img.jpg" width="401" height="226" /></td>'+
								'<td width="65%">'+
									'<p class="titre1">' + translator.T('Observatory of Minority Health') + '</p>'+
									'<ol>'+
									'<p>' + translator.T('Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for minority populations.') + '<br />'+
									translator.T('The Observatory of Minority Health aims to fill these gaps and improve knowledge about health and access to health professionals and services for the Francophone population of Ontario.') + '</p>'+
									'</ol>'+
									'<p class="titre1">' +  translator.T('The activity of the Observatory is organized around two priorities: ') + '</p>'+
									
									'<ol>'+
										'<li>' +              translator.T(' 1) Activities of data collection, research and production of new knowledge') + '</li>'+
										'<li>' + translator.T(' 2) Valorisation and transfer of knowledge') + '</li>'+
									'</ol>'+
									'<p>'+
									'<span class="boldcolor">' + translator.T('Contact: ')  + 
									'</span><a class="boldcolor2" href="mailto:louise.bouchard@uottawa.ca">louise.bouchard@uottawa.ca</a>'+  
									'</p>'+
								'</td>'+
							'</tr>'+
						'</table>'+
						
						'<table width="100%" border="0" cellspacing="0" cellpadding="20">'+
							'<tr>'+
								'<td width="25%" align="right" valign="bottom"><a href="http://www.ontario.ca/' + (router.getLanguage() == 'french'? 'fr/bienvenue-en-ontario':'welcome-ontario') + '" target="_blank"><img src="images/ontario.jpg" width="127" height="47" /></a></td>'+
								'<td width="75%"><p class="titre1">' + translator.T('Team') + '</p>'+
									'<ol>'+
										'<p><strong>' + translator.T('Scientific director') + '</strong><br />'+
										
										translator.T('Louise Bouchard, PhD, Sociology,  Institut de recherche de l’Hôpital Montfort, University of Ottawa') + '</p>'+
										
										'<p><strong>' + translator.T('Co-Investigator ') + '<br />'+
										'</strong>' + translator.T('Guy-Vincent Jourdan, PhD, School of Electrical Engineering and Computer Science, Institut de recherche de l’Hôpital Montfort, University of Ottawa')+
										'</p>'+
										
										'<p><strong>' + translator.T('Geomatic, Data and Analysis') + '</strong><br />' +
										translator.T('Érik Bourdon, Manager') + '<u></u>'+
										'</p>'+
										
										'<p><strong>' + translator.T('Analystes')  + '</strong><br />' +
										
										translator.T('Ewa Sucha, PhD (candidate), Biostatistic') + '<u></u><br />' +
										translator.T('Golnaz Sedigh, PhD (candidate),  Economy') + '<br />'+
										translator.T('Ricardo Batista, PhD (candidat), Population Health') +
										'</p>'+
										
										'<p><strong>' + translator.T('Transfer and application of knowledge') + '<br />' +
										'</strong>' + translator.T('Solange van Kemenade, PhD, Research Associate, University of Ottawa') +
										'</p>' +
										
										'<p><strong>' + translator.T('Developers') + '<br />' +
										'</strong>Ava Ahadipour<br />' +
										'Seyed M Mirtaheri' +
										'</p>' +
									'</ol>' +
									
										'<p class="titre1">' + translator.T('Financial Support') +
										'</p>' +
										
										'<ol>'+
										'<p><strong><a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr/':'en/') + '" target="_blank">' + translator.T('Ministry of Health and Long Term care of Ontario') + '</a></strong></p>' +
										'</ol>'+
								'</td>' +
							'</tr>' +
						'</table>' +
				'</tr>' +
		'</table>' +
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
			'<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="partnersTable">' +
				'<tr>'+
					'<td colspan="4">'+
						'<p class="titre1" style="margin: 19px;">L&rsquo;équipe de l&rsquo;Observatoire de la santé des minorités remercie ses partenaires   pour la mise en place de ce projet.</p>'+
					'</blockquote>'+
					'</td>'+
				'</tr>'+	
			
				'<tr>'+
					'<td width="25%" align="right" valign="bottom" style="padding:45px;"><p><a href="http://www.ontario.ca/' + (router.getLanguage() == 'french'? 'fr/bienvenue-en-ontario':'welcome-ontario') + '" target="_blank"><img src="images/ontario.jpg" width="127" height="47" /></a></p>'+
					 '<p><a href="https://www.ophrdc.org/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + '<img border="0" src="images/ophrdc.jpg" width="204" height="38" >' + '</a></p>' +
					 '<p><a href="http://www.statcan.gc.ca/start-debut-' + (router.getLanguage() == 'french'? 'fra':'eng') + '.html" target="_blank">' + '<img border="0" width="205" height="30" src="images/stat_canada.jpg" width="204" height="38" >' + '</a></p>' +
					  
					'<td width="75%" colspan="3" valign="top" style="padding-top:45px;"><p><strong class="partnersStrong">' + translator.T('Financial support is provided by the ') + 
					'<span class="boldcolor"><a  class="boldcolor" href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr/':'en/') + '" target="_blank">'  + translator.T('Ministry of Health and Long Term care of Ontario') + '</a></span>.</strong></p>'+          
					  '<p><strong>' + translator.T('The data are provided by ') + '<span class="boldcolor">' +
					 
					  '<a class="boldcolor"  class="boldcolor" href=" http://www.healthforceontario.ca/' + (router.getLanguage() == 'french'? 'fr/Home':'en/Home') + '" target="_blank">'  +
					  
					  translator.T('Health Force Ontario') + '</a></span>, <span class="boldcolor"><a class="boldcolor" href="https://www.ophrdc.org/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + 'OPHRDC</a></span> (Ontario Physician Human Resources Data Center),' +
					  translator.T(' the ') +  '<span class="boldcolor">' +
					  '<a  class="boldcolor" href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr/':'en/') + '" target="_blank">'  +
					  translator.T('Ministry of Health and Long Term Care of Ontario') + '</a></span>' +
					  translator.T(' and ') + '<span class="boldcolor">' + translator.T(' Statistics Canada') + '</span>. </strong></p>          <p><strong>' +
					  translator.T('Design assistance: ') + '<br />'+
						'<span class="boldcolor">          RRASFO</span>' +
					  '<span>' + translator.T('- Applied Research Network on the health of the Francophone population of Ontario') + ',<br />'+'</span>' +
					  '<a class="boldcolor" href="http://www.jwcomm.ca/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' +
					  '<span class="boldcolor">J W COMM INC.</a></span>, <span class="boldcolor">' + 
					  
					  '<a class="boldcolor" href="http://www.hopitalmontfort.com/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' +
					   translator.T('IRHM') + '</a></span>' + translator.T('(Research Institute of Montfort)') +  '</span> ' +'</strong></p>'+  
					  '<p><strong>' +  translator.T('Support and technical implementation: ') + 
					  '<span class="boldcolor"><a class="boldcolor" href="http://www.epsidon.com/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + 'Epsidon Inc</span>.</strong></p></td>'+
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
 
Tabs.prototype.getResearch  = function ()
{
	var body = 
	
	'<div class="researchContainer">' +
			'<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">' +
			'<tr>' +
				'<td></td>' +
			'</tr>' +
			'<tr>' +
				'<td >' +
					'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="researchTable">' +
						'<tr>' +
							'<td>' +'<ol>' +
							'<p class="titre1">' + 'Recherche de  l&rsquo;Observatoire' + '</p>' +
							'</ol>' +
							'</td>' +
						'</tr>' +
					'</table>' +
					
					'<table width="100%" border="0" cellspacing="0" cellpadding="0">' +
						'<tr>' +
							'<td colspan="2" align="left" valign="top">' +
							'<ol>' +
							'<p class="titre2">' + 'Profil de la santé ' + '</p>' +
							'</ol>' +
							'</td>' +
						'</tr>' +
						
						'<tr>' +
							'<td width="50%" align="left" valign="top">' +      
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Bouchard  L, Makvandi E, Sedigh G, van Kemenade S (2014).' + '<br />' +
										'</p>' +
										
										'<p>' +'<strong>' +'The health of the Francophone  Population Aged 65 and over in Ontario.' + '</strong>' +'<br />' +
										'RASFO, Université d&rsquo;Ottawa '+ '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'<br />' +
										'Rapport  court en français ' +'<img src="images/ico_pdf.jpg" width="46" height="16" />' +'<br />' +
										'Rapport  court en anglais '+ '<img src="images/ico_pdf.jpg" width="46" height="16" />' +
										'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							
							'<td width="50%" align="left" valign="top">' +          
								'<ol>' +
									'<ol>' +
									'<p class="boldcolor">' + 'Bouchard  L, Leis A (coord.) (2013)' + '</p>' +
									'<p>' +'<strong>' + 'La santé des populations de langue officielle en  situation minoritaire.' + '<br />' +
									'</strong>' +'<em>' + 'Canadian Journal  of Public Health/ Revue canadienne de santé publique, ' +               '</em>' + 'Numéro spécial, 104  (5).' + '<br />' +
									 '<a class="boldcolor2" href="http://journal.cpha.ca/index.php/cjph/issue/view/303">' + 'http://journal.cpha.ca/index.php/cjph/issue/view/303' + '</a>' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td width="50%" align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Bouchard L’ ' + '<strong>' + ',' + '</strong>' + 'Sedigh G, Batal M, Imbeault P, Makvandi E, Sylva de la Vega E (2013)' + '</p>' +
										'<p>' +'<strong>' + 'Language  as an important determinant of poverty in the aging Francophone minority  population in Canada.' + '</strong>' +'<em>' + 'International Journal of Aging and  Society,' + '</em>' +'(2)  4&nbsp;: 61-76' + '<strong>' +'<br />' +
										'</strong>' +'<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							'<td width="50%" align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Bouchard L, Desmeules M (2013)' + '</p>' +
										'<p>' +'<strong>' + 'Les minorités  linguistiques du Canada et la santé.' + '</strong>' +'<em>' + 'Health  Care Policy/Politiques de santé' + '</em>' + ', Numéro spécial 9: 38-47' + '<br />' +
										'<img src="images/ico_pdf.jpg"  width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td width="50%" align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Bouchard L’' + '<strong>' + ',' + '</strong>' + 'Gagnon-Arpin I, Makvandi E (2012)' + '</p>' +
										'<p>' +'<strong>' + 'Rapport d’enquête d’évaluation  des besoins et de services de santé des francophones de la région du Sud-Est de  l&rsquo;Ontario.' + '</strong>' +'<br />' +
										'Rapport préparé pour l’Association canadienne-française de  l’Ontario- Conseil régional des Mille-Îles.' + '<br />' +
										'<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							'<td width="50%" align="left" valign="top">' + '&nbsp;' + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td colspan="2" align="left" valign="top">' +
							'<ol>' +
							'<p class="titre2">' + 'Services et professionnels de la  santé en langue officielle minoritaire' + '</p>' +
							'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td width="50%" align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Warnke J,' + '<strong>' + '</strong>' + 'Bouchard L (2013). &nbsp;' + '</p>' +
										'<p>' +'<strong>' + 'Validation de  l&rsquo;équité d’accès des CLOSM aux professionnels de la santé dans les régions  sociosanitaires du Canada.' + '</strong>' + '<em>' +'<br />' +
										'Canadian Journal of Public Health/  Revue canadienne de santé publique,' + '</em>' + 'Numéro spécial, 104 (6)&nbsp;: S49-54' + '<br />' +
										'<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							'<td width="50%" align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Centre de recherche en santé dans les milieux  ruraux et du nord (2013)' +'</p>' +
										'<p>' + '<strong>' + 'La distribution des médecins de famille qui parlent  français en Ontario.' + '</strong>' +'<em>' +'<br />' +
										'Recherche en FOCUS sur  la recherche' + '</em>' + '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +          
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Centre for Rural and Northern Health Research (2013)' +  '</p>' +
										'<p>' +'<strong>' + 'The distribution of French Speaking family Physicians in Ontario.' + '</strong>' +'<br />' +
										'<em>' + 'Research in FOCUS on Research' +'</em>' +'</p>' +
									'</ol>' +
								'</ol>' +          
							'</td>' +
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Timony PE, Gauthier AP, Hogenbirk JC, Wenghofer EF  (2013).&nbsp;&nbsp;' + '</p>' +
										'<p>' +'<strong>' + 'Promising quantities, disappointing distribution.' +'</strong>' +'<br />' +
										'Investigating the presence of French-speaking physicians in Ontario&rsquo;s rural  Francophone communities.' + '<br />' +
										'<em>' + 'Rural and Remote Health' + '</em>' + '13: 2543.' +'<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Gauthier AP, Timony PE, Wenghofer  EF (2012).'+ '</p>' +
										'<p>' +'<strong>' + 'Examining the geographic distribution of French-speaking physicians in  Ontario. Canadian Family Physician.' +  '</strong>' + '<br />' +
										'Le Médecin de famille canadien, 58&nbsp;: e717-724' + '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
									'<p class="boldcolor">' + 'Bouchard L, Chomienne MH, Benoit  M, Boudreau F, Lemonde M, Dufour S (2012)' + '</p>' +
									'<p>' +'<strong>' + 'Les personnes âgées francophones  souffrant de maladies chroniques se perçoivent-elles bien desservies par le  système de santé ontarien ?' +  '</strong>' +'<em>' + 'Canadian Family Physician/Le Médecin de  famille canadien,' + '</em>' + '58&nbsp;:1325' + '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' + 'Bouchard L,  Chomienne MH, Benoit M, Boudreau F, Lemonde M, Dufour S (2012).'+ '</p>' +
										'<p>' +'<strong>' + 'Do chronically  ill, elderly Francophone patients believe they are adequately serve by  Ontario&rsquo;s health care system?'+ '</strong>' +'<em>' +'<br />' +
										'Canadian Family Physician/Le Médecin  de famille canadien,'+ '</em>' + '58&nbsp;:  e686'+ '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							'<td align="left" valign="top">' +
								'<ol>' +
									'<ol>' +
										'<p class="boldcolor">' +'Bouchard L’' + '<strong>' + ',' + '</strong>' + 'Beaulieu M, Desmeules M (2012)' + '</p>' +
										'<p>' +'<strong>' + 'L’offre active des services de santé en français en Ontario: une mesure  d’équité.' + '</strong>' +'<br />' + 
										'<em>' + 'REFLETS' + '</em>' + '18 (2)&nbsp;; 38-65' + '<img src="images/ico_pdf.jpg" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
						'</tr>' +
						'<tr>' +
							'<td align="left" valign="top">' +
								'<ol>' +
								'<p class="boldcolor">' + 'Gagnon-Arpin  I, Bouchard L (2011)' +'</p>' +
									'<ol>' +
										'<p>' +'<strong>' + 'Les services de santé en français en Ontario: Offre,  demande, utilisation.'+ '</strong>' +'<br />' +
										'Rapport préparé pour le Bureau des services en français  du ministère de la Santé et des Soins de Longue Durée de l’Ontario' + '<img src="images/ico_pdf.jpg" alt="" width="46" height="16" />' +'</p>' +
									'</ol>' +
								'</ol>' +
							'</td>' +
							'<td align="left" valign="top">' + '&nbsp;' + '</td>' +
						'</tr>' +
					'</table>' +
				'</td>' +
			'</tr>' +
	'<tr>' +
	'<td>'  +'</td>' +
	'</tr>' +
'</table>' + 
		'</div>';
		
	
	return body;
};

