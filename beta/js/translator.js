function Translator() {}

Translator.prototype.T = function(str)
{
	if (router.getLanguage() != 'french')
		return str;
	
	if (str in Fr)
		return Fr[str];

	return str;	
}


Translator.prototype.translatePage = function()
{
	$('#panel').html(this.T('Loading ...'));
	$('#pageTitle').html(this.T('Observatory of Minority Health (Beta)'));
	$('#notesTitle').html(this.T('Methodological Notes'));
	$('#homeTab').html(this.T('HOME'));
	$('#mapsTab').html(this.T('INTERACTIVE MAPS'));
	$('#researchTab').html(this.T('RESEARCH'));
	$('#partnersTab').html(this.T('PARTNERS'));
	
	$('#withSupportOfMsg').html(this.T('With the Support of:'));

	$('#financialSupport').html(this.T('Financial Support:'));
	$('#zoomInInstruction').html(this.T('Zoom to access data'));
	$('.ministryOfMsg').html(this.T('MINISTRY OF '));
	$('.healthAndLongTermCareMsg').html(this.T('HEALTH AND LONG-TERM CARE'));

	$('#dataProvidersMsg').html(this.T('Data Providers:'));
	$('#healthMsg').html(this.T('Health'));
	$('#forceMsg').html(this.T('Force'));
	$('#ontarioMsg').html(this.T('Ontario'));

	$('#p1').html(this.T("Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for some populations."));
	$('#p2').html(this.T("The Observatory of Minority Health (OMH) aims to fill these gaps and improve knowledge about health and access to health services for the Francophone minority population of Ontario."));
	$('#p7').html(this.T("Team"));
	$('#Bouchard').html(this.T("Dr. Louise Bouchard"));
	$('#BouchardTitle').html(this.T("Director and Primary Investigator"));

	$('#Seyed').html(this.T("Seyed M. Mirtaheri"));
	$('#Ava').html(this.T("Ava Ahadipour"));
	$('#Programmer').html(this.T("Programmers"));

	$('#Ewa').html(this.T("Ewa Makvandi"));
	$('#Golnaz').html(this.T("Golnaz Sedigh"));
	$('#Analyst').html(this.T("Analysts"));

	$('#Erik').html(this.T("Erik Bourdon"));
	$('#ErikTitle').html(this.T("Manager, Data & Analyses"));

	$('#GVJourdan').html(this.T("Dr. Guy-Vincent Jourdan"));
	$('#GVJourdanTitle').html(this.T("Associate professor, School of Information Technology and Engineering"));
	
	$('#p3').html(this.T("The activity of the Observatory is organized around two priorities: "));

	$('#p4').html(this.T("1) Activities of data collection, research and production of new knowledge"));
	$('#p5').html(this.T("2) Valorisation and transfer of knowledge"));

	$('#mapsInstructionOne').html(this.T(" Choose a map"));
	$('#mapsInstructionTwo').html(this.T("for data sources and methodology."));
	$('#analysisInstruction').html(this.T("Instruction"));
	$('#notesLinkPage').html(this.T(" Select a data layer from the menu below and click on map for detailed information."));
	
	$('#myModalLabel').html(this.T("Interactive Maps"));
	$('#close').html(this.T("Close"));
	$('#modalUpdateMapButton').html(this.T("Update Map"));
	$('.zoomTo').html(this.T('Zoom to'));
	
	$('#moreLessSpaceMsg').html(this.T("More Space"));
	$('#headerOneResearchTab').html(this.T("Validation de l’équité d’accès des CLOSM aux professionnels de la santé dans les régions sociosanitaires du Canada."));
	$('#headerTwoResearchTab').html(this.T("Language as an Important Determinant of Poverty in the Aging Francophone Minority Population in Canada"));
	$('#headerThreeResearchTab').html(this.T("Linguistic Minorities in Canada and Health"));
	$('#headerFourResearchTab').html(this.T("Examining the Distribution of French Speaking Family Physicians in Ontario’s Francophone Communities"));

	$('#ENhealthForceOntario').html(this.T("Health Force Ontario"));
	$('#ENministryOfHealth').html(this.T("Ministry of Health and Long-Term Care of Ontario"));
	$('#ENStatisticCanada').html(this.T("Statistics Canada"));
	$('#ENhealthForceOntarioLink').html(this.T("http://www.healthforceontario.ca/en/Home"));
	
	$('#BouchardWarnkeTitle').html(this.T("Validation de l’équité d’accès des CLOSM aux professionnels de la santé dans les régions sociosanitaires du Canada"));
	$('#BouchardWarnkeAbstract').html(this.T("Notre recherche utilise l’indicateur synthétique régional (IPSLOM) pour mesurer la capacité du système de santé à fournir un accès équitable aux professionnels de la santé pour les deux millions de personnes qui constituent des Communautés de langue officielle en situation minoritaire (CLOSM) dans 104 régions sociosanitaires du Canada."));
	
	$('#AgingTitle').html(this.T("Language as an Important Determinant of Poverty in the Aging Francophone Minority Population in Canada"));
	$('#agingAbstract').html(this.T("Six cycles of the Canadian Community Health surveys (CCHS) from 2001 to 2009 were used to compare the income and health of the minority French-speaking aging population (over 65 years of age) to the majority English-speaking group in Canada, excluding Quebec. A sequential multivariate logistic regression analysis showed that men and women of the minority French-speaking population of this age group, living in Canada outside the province of Quebec, are more likely to be in the poorest income quintile than their English-speaking counterparts. This disparity remains significant even after controlling for residence (province and urban/rural), household makeup (living alone or not), immigration status, education, employment, health status, chronic diseases, and restrictions in activities. Independently of other key socio-demographic factors modulating health, our results also show that being in the poorest income quintile is associated with a poor self-perceived health, a finding that was more prevalent in the French-speaking aging population living in situation of minority."));

	$('#PolicyTitle').html(this.T("Linguistic Minorities in Canada and Health"));
	$('#PolicyAbstract').html(this.T("Official language minorities (Francophones outside of Quebec and Anglophones in Quebec) make up about 6.4% of the Canadian population. Even though the Canadian constitution gives legal equality status to French and English, there is still room to ask if this equality is maintained in the health sector. In other words, do Francophone and Anglophone communities of Canada have the same health profiles regardless of their minority or majority status? Do they have access to the same health services and in the same conditions? The objective of this paper is to identify the health issues associated with belonging to a linguistic minority. Our research allows us to highlight the social and health disparities that can be attributed to belonging to a minority. In the Canadian context, which has two official languages, an equitable health policy will have to take into consideration language as a determinant of health."));
	
	$('#FOCUS13Title').html(this.T("Examining the Distribution of French Speaking Family Physicians in Ontario’s Francophone Communities"));
	
	$('#FOCUS13Abstract').html(this.T("Very little is known about the distribution of French-speaking family physicians in Ontario, a province with the largest number of Francophone residents outside the province of Québec. This study, conducted by researchers at the Centre for Rural and Northern Health Research, had two objectives:"));
	
};