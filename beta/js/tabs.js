function Tabs() {}
//method "getHome" of class "Tabs"
Tabs.prototype.getHome = function () 
{
	var body = 
		'<div class="homeContainer">' +
			/* '<table>' +
				'<tr>' +
					'<td>' +
						'<img src="images/accueil_img.jpg" id="accueil"/>' +
					'</td>' +
				
					'<td>' +
						'<p class="titre1">' +  translator.T('Observatory of Minority Health') + '</p>' +
						 
						'<p id="titre1">' + translator.T('Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for minority populations.') + '</p>'+
						
						'<p >' + translator.T('The Observatory of Minority Health aims to fill these gaps and improve knowledge about health and access to health professionals and services for the Francophone population of Ontario.') + '</p>'+
						
						'<p class="titre1">' + translator.T('The activity of the Observatory is organized around two priorities: ') + '</p>' +
						'<p>' +
							'<ol>'+
							'<li>' + translator.T('1) Activities of data collection, research and production of new knowledge') + '</li>'+
							'<li>' + translator.T('2) Valorisation and transfer of knowledge') + '</li>'+
							'</ol>'+
						'</p>' +
						
						'<p><span class="boldcolor">Contact : </span>' + 
						'<a href="mailto:louise.bouchard@uottawa.ca" class="mail">' + ' louise.bouchard@uottawa.ca</a>' + '</p>'+
					'</td>' +
				'</tr>' +	
			'</table>' +
			
			'<table width="100%" border="0" cellspacing="0" cellpadding="20">'+
			'<tbody>' +
			'<tr>'+
				'<td width="25%" align="right" valign="bottom"><img src="images/ontario.jpg" width="127" height="47"></td>'+
			
			'<td width="75%">'+
			'<p>' +
				'<p class="titre1">' + translator.T('Team') + '</p>'+
				'<b>' + translator.T('Scientific director') + '</b>' +
				'<br><a class="Lousie" href="http://' + (router.getLanguage() == 'french'? 'sciencessociales.uottawa.ca/soc-ant/profil-professeur?id=274':'socialsciences.uottawa.ca/soc-ant/professor-profile?id=274') + '" target="_blank">' +  translator.T('Louise Bouchard, PhD, Sociology,  Institut de recherche de l’Hôpital Montfort, University of Ottawa') + '</a></br>' +
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
			
		
			'<p class="titre1">' + translator.T('Financial support') + '</p>' + 
			
			'<p> <strong><a href="http://www.health.gov.on.ca/' + (router.getLanguage() == 'french'? 'fr':'en') + '" target="_blank">' + translator.T('Ministry of Health and Long Term Care of Ontario') + '</a></strong></p>' +
		
		'</td>' +
		'</tr>'+
		'</tbody>' +
		'</table>' + */
		'<table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">'+
	'<tr>'+
	'<td></td>'+
	'</tr>'+
	
	'<tr>'+
					'<table width="100%" border="0" cellspacing="0" cellpadding="20">'+
						'<tr>'+
							'<td width="35%"><img src="images/accueil_img.jpg" width="401" height="226" /></td>'+
							'<td width="65%"><p class="titre1">Observatoire de la santé des minorités</p>'+
								'<ol>'+
								'<p>            L’information  sanitaire de qualité est essentielle à la décision politique et à la  planification de la santé. Toutefois, cette information est absente ou  incomplète pour les populations minoritaires.'+
								'L&rsquo;Observatoire de la santé des minorités vise à combler ces  lacunes et à améliorer la connaissance sur la santé, l&rsquo;accès aux services et  aux professionnels de la santé de la population francophone de l&rsquo;Ontario. </p>'+
								
								'<p class="titre1"> L&rsquo;activité  de l&rsquo;observatoire s&rsquo;organise autour de deux pôles :&nbsp;</p>'+
								'</ol>'+
								'<li>              1. activités de collecte de données, de recherche et de production de nouvelles  connaissances</li>'+
								'<li> 2. valorisation et transfert des connaissances</li>'+
								'</ol>'+
								'<p><span class="boldcolor">Contact&nbsp;: </span><a class="boldcolor2" href="mailto:louise.bouchard@uottawa.ca">louise.bouchard@uottawa.ca</a>'+          
								'</p>'+
							'</td>'+
						'</tr>'+
					'</table>'+
					
					'<table width="100%" border="0" cellspacing="0" cellpadding="20">'+
						'<tr>'+
							'<td width="25%" align="right" valign="bottom"><img src="images/ontario.jpg" width="127" height="47" /></td>'+
							'<td width="75%"><p class="titre1">Équipe</p>'+
								'<ol>'+
									'<p><strong>Directrice scientifique&nbsp;</strong><br />'+
									'Louise Bouchard, PhD, Sociologie,  Institut de recherche de l&rsquo;Hôpital Montfort,  Université d&rsquo;Ottawa'+
									'</p>'+
									
									'<p><strong>Co-chercheur<br />'+
									'</strong>Guy-Vincent Jourdan, PhD, École d&rsquo;ingénierie  et de technologie de l&rsquo;information, Institut de recherche de l&rsquo;Hôpital  Montfort, Université d&rsquo;Ottawa'+
									'</p>'+
									
									'<p><strong>Géomatique, données et analyses&nbsp;</strong><br />'+
									'Érik Bourdon, conseiller <u></u>'+
									'</p>'+
									
									'<p><strong>Analystes</strong><br />'+
									'Ewa Sucha, PhD (candidate), Biostatistique <u></u><br />'+
									'Golnaz Sedigh, PhD (candidate),  Économie  <br />'+
									'Ricardo Batista, PhD (candidat), Santé  des populations'+
									'</p>'+
									
									'<p><strong>Transfert  et application des connaissances<br />'+
									'</strong>Solange  van Kemenade, PhD,  Associée de  recherche, Université d&rsquo;Ottawa'+
									'</p>'+
									
									'<p><strong>Développeurs<br />'+
									'</strong>Ava Ahadipour<br />'+
									'Seyed M Mirtaheri'+
									'</p>'+
								'</ol>'+
								
									'<p class="titre1">Soutien financier'+
									'</p>'+
									
									'<ol>'+
									'<p> <strong>Ministère de la santé et des soins  de longue durée de l&rsquo;Ontario</strong></p>'+
									'</ol>'+
				'</td>'+
			'</tr>'+
					'</table>'+
		
	'</tr>'+
	
		
'</table>' ; 
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
					'<td width="25%" align="right" valign="bottom" style="padding:45px;"><p><img src="images/ontario.jpg" width="127" height="47" /></p>'+
					 '<p><a href="https://www.ophrdc.org/' + (router.getLanguage() == 'french'? '':'') + '" target="_blank">' + '<img border="0" src="images/ophrdc.jpg" width="204" height="38" >' + '</a></p>' +
					 '<p><a href="http://www.statcan.gc.ca/start-debut-' + (router.getLanguage() == 'french'? 'fra':'eng') + '.html" target="_blank">' + '<img border="0" width="205" height="30" src="images/stat_canada.jpg" width="204" height="38" >' + '</a></p>' +
					  
					'<td width="75%" colspan="3" valign="top" style="padding-top:45px;"><p><strong class="partnersStrong">Le soutien financier est assuré par le<span class="boldcolor"> Ministère de la santé et des soins de   longue durée de l&rsquo;Ontario</span>.</strong></p>'+          
					  '<p><strong>Les données utilisées sont fournies par<span class="boldcolor"> Professions Santé Ontario</span>, <span class="boldcolor">OPHRDC</span> (Ontario Physician Human Resources Data Center), le <span class="boldcolor">Ministère de la santé et des   soins de longue durée de l&rsquo;Ontario</span> et <span class="boldcolor">Statistique Canada</span>. </strong></p>          <p><strong>Aide à la conception : <br />'+
						'<span class="boldcolor">          RRASFO</span> – Réseau de recherche appliquée sur la santé de la   population francophone de l&rsquo;Ontario,<br />'+
					  '<span class="boldcolor">J W COMM INC.</span>, <span class="boldcolor">IRHM</span> (Institut de   recherche de l&rsquo;Hôpital Montfort)</strong></p>'+  
					  '<p><strong>Soutien et réalisation technique : <span class="boldcolor">Epsidon Inc</span>.</strong></p></td>'+
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
/*
sections
	publications
		authors
		title
		desc
		pdfs
			desc
			url
		url
*/
	/* $.getJSON( "js/research.json", function( data ) 
	{
		var body = 
			'<table width="70%" border="0" align="center" cellpadding="0" cellspacing="0">'+
				'<tr><td>'+

					'<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
						'<tr>'+
							'<td>'+
								'<p class="titre1">Recherche de l’Observatoire</p><BR/>'+
							'</td>'+
						'</tr>'+
					'</table>'+

				'</td></tr><tr><td>';

		for(sectionIndex in data.sections)
		{
			var section = data.sections[sectionIndex];
		
			body += 
				'<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
      				'<tr>'+
        				'<td>'+
          					'<p class="titre1">' + section.sectionTitle + '</p>'+
        				'</td>'+
        			'</tr>'+
  				'</table>';
  				
  			var publicationHtml = '<tr>';	
  			for(publicaitonIndex in section.publications)
  			{
  				var publication = section.publications[publicaitonIndex];
  			
  				if ((publicaitonIndex != 0) && (publicaitonIndex % 2 == 0))
  				{
  					publicationHtml += '</tr><tr><td height="30"></td></tr><tr>';
				}

				publicationHtml += '<td width="5%"></td><td width="50%" align="left" valign="top">';
				
				if (publication.authors)
				{
					publicationHtml +=
                		'<p class="boldcolor">' + 
                			publication.authors + '<br />' + 
                		'</p>';
                }
                
				publicationHtml += '<p>';
                    
				if (publication.title)
				{
					publicationHtml +=
                		'<strong>' + 
                			publication.title + '<br />' + 
                		'</strong><br />';
                }
                
                if (publication.desc)
                {
					publicationHtml +=
                		'<em>' + 
                			publication.desc + 
                		'</em>';                
                }
                
                if (publication.url)
                {
					publicationHtml +=
                		'<a class="Lousie" href="' + publication.url + '">' + 
                			publication.url + 
                		'</a>';                
                }
                
				if (publication.pdfs)
                {
                	for (var pdfIndex in publication.pdfs)
                	{
						var pdf = publication.pdfs[pdfIndex];

						if (pdf.desc)
							publicationHtml += pdf.desc;
                
						publicationHtml += '<img src="images/ico_pdf.jpg" width="46" height="16" /><br />';      
					}                
                }

				publicationHtml += '</p></td>';
  				
  			}	
				
			body += 
				'<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
					publicationHtml+
  				'</tr></table>';
		}
		

		body += '</td></tr></table>';
 */
	var body = 
	
	'<div class="researchContainer">' +
 					/* '<b>' + translator.T('Title: ') + '</b>' +
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
 				'</br>' + */
				
			'<table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">' +
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
		

		//$('#mainContainer').html(body);	
	
	return body;
};

