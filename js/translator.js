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
	$('#analysisTab').html(this.T('ANALYSIS'));
	$('#partnersTab').html(this.T('PARTNERS'));

	$('#withSupportOfMsg').html(this.T('With the Support of:'));

	$('#financialSupport').html(this.T('Financial Support:'));

	$('.ministryOfMsg').html(this.T('MINISTRY OF '));
	$('.healthAndLongTermCareMsg').html(this.T('HEALTH AND LONG-TERM CARE'));

	$('#dataProvidersMsg').html(this.T('Data Providers:'));
	$('#healthMsg').html(this.T('Health'));
	$('#forceMsg').html(this.T('Force'));
	$('#ontarioMsg').html(this.T('Ontario'));

	$('#homeMainParagraph').html(this.T("Quality health information is essential for policy making and health policy planning. " + 
		"However, this information is missing or incomplete for some populations. " +
		"The Observatory of Minority Health (OMH) aims to fill these gaps and improve knowledge about health and access to " +
		"health services for the Francophone minority population of Ontario."));

	$('#homeSecondLine').html(this.T("The activity of the Observatory is organized around two priorities:"));

	$('#homeOptionOne').html(this.T("Activities of data collection, research and production of new knowledge"));
	$('#homeOptionTwo').html(this.T("Valorisation and transfer of knowledge"));

	$('#mapsInstructionOne').html(this.T("Select a data layer from the menu below and click on map for detailed information. Click on "));
	$('#mapsInstructionTwo').html(this.T("for data sources and methodology."));
	$('#analysisInstruction').html(this.T("Instruction"));

	$('#moreLessSpaceMsg').html(this.T("More Space"));
};