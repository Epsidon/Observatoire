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
	$('#pageTitle').html(this.T('Minority Health Observatory'));
	$('#notesTitle').html(this.T('Methodological Notes'));
	$('#homeTab').html(this.T('HOME'));
	$('#mapsTab').html(this.T('INTERACTIVE MAPS'));
	$('#analysisTab').html(this.T('RESEARCH'));
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

	$('#homeMainParagraph').html(this.T("Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for some populations."));
	$('#homeMainParagraph2').html(this.T("The Observatory of Minority Health (OMH) aims to fill these gaps and improve knowledge about health and access to health services for the Francophone minority population of Ontario."));
	$('#TeamHeader').html(this.T("Our Team"));
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
	
	$('#homeSecondLine').html(this.T("The activity of the Observatory is organized around two priorities:"));

	$('#homeOptionOne').html(this.T("Activities of data collection, research and production of new knowledge"));
	$('#homeOptionTwo').html(this.T("Valorisation and transfer of knowledge"));

	$('#mapsInstructionOne').html(this.T(" Choose a map"));
	$('#mapsInstructionTwo').html(this.T("for data sources and methodology."));
	$('#analysisInstruction').html(this.T("Instruction"));
	$('#notesLinkPage').html(this.T(" Select a data layer from the menu below and click on map for detailed information."));
	
	$('#myModalLabel').html(this.T("Interactive Maps"));
	$('#close').html(this.T("Close"));
	$('#modalUpdateMapButton').html(this.T("Update Map"));
	$('.zoomTo').html(this.T('Zoom to'));
	
	$('#moreLessSpaceMsg').html(this.T("More Space"));
	$('#headerOneResearchTab').html(this.T("Validation de l’équité d’accès des CLOSM aux professionnels de la santé dans les régions sociosanitaires du Canada"));
	$('#validationFirstContent').html(this.T("This research uses a regional summary indicator (IHPOLM) to measure the capacity of the health system to provide equitable access to health professionals for 2 million Official Language Minority Community (OLMC) members dispersed across 104 health regions in Canada."));
	$('#headerTwoResearchTab').html(this.T("Language as an Important Determinant of Poverty in the Aging Francophone Minority Population in Canada"));
	$('#headerThreeResearchTab').html(this.T("Linguistic Minorities in Canada and Health"));
	$('#headerFourResearchTab').html(this.T("Examining the Distribution of French Speaking Family Physicians in Ontario’s Francophone Communities"));
};