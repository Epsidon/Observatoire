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
						'<p class="titre1">L&rsquo;équipe de l&rsquo;Observatoire de la santé des minorités remercie ses partenaires   pour la mise en place de ce projet.</p>'+
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
 
Tabs.prototype.getResearch = function ()
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
	$.getJSON( "js/research.json", function( data ) 
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


		$('#mainContainer').html(body);	
	});

	return '';
};

