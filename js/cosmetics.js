if ((window.location.hostname.search("minorityhealth") == -1)
	&& (location.hash != '#english'))
{
        window.location.hash = '#french';
}

$( window ).resize(function() {
	reorganizeMapsPage();
});

function reorganizeMapsPage()
{
	if ($("#panel").position().top == 0)
	{
		var mapTop = 200;
		var mapLeft = 400;
		var mapWidth = 400;
		var panelTop = 200;
	}
	else
	{	
		var mapTop = $("#map").offset().top;
		var mapLeft = $("#map").offset().left;	
		var mapWidth = $("#map").width();
		var panelTop = $("#panel").offset().top;
		var mapLabelWidth = $("#mapLabel").width();	
		var mapLabelHeight = $("#mapLabel").height();
		var pageTitleHeight = $("#pageTitle").height();
	}
	
	if ($("#map_container").offset())
	{
		var mapContainerLeft = $("#map_container").offset().left;
		var mapContainerWidth = $("#map_container").width();
		var zoomButtonHeight = $(".esriSimpleSliderDecrementButton").height();
	}
	else
	{
		var mapContainerLeft = 400;
		var mapContainerWidth = 400;
		var zoomButtonHeight = 20;	
			
	}
		
		
	var legendHeight = $("#legendList").height();
	var legendWidth = $("#legendList").width();		

	var mapHeight = $(window).height() - mapTop;
	var panelHeight = $(window).height() - panelTop;

	$("#map").height(mapHeight);
	$("#panel").height(panelHeight);
        
	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});
		
	var legendTop = mapTop + (mapHeight/2) + (pageTitleHeight/2);
	var legendLeft = mapContainerLeft;
	 
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			

	var mapLableTop = mapTop + zoomButtonHeight;
	var mapLableLeft = mapContainerLeft + (mapContainerWidth / 2) - (mapLabelWidth / 2);
	
	$("#mapLabel").css(
		{'position' : 'absolute' , 'left' : mapLableLeft + 'px', 'top' : mapLableTop + 'px'});			
}

function hideMapsInstructions()
{
	setTimeout(function()
	{
		reorganizeMapsPage();
	}, 100);
}
/* 
var upDownButtonState = 'up';
function mapUpDownButtonClickd()
{
	if (upDownButtonState == 'up')
	{
		$('#tabs').slideUp(400, function(){
			$('.navbar').slideUp(400, function(){
				$('#roleUpDownImg').attr('src', 'images/down.png');
				upDownButtonState = 'down';
				reorganizeMapsPage();
				$('#moreLessSpaceMsg').html(T("Less Space"));
				window.map.resize();
			});
		});
	}
	else
	{
		$('.navbar').slideDown(400, function(){
			$('#tabs').slideDown(400, function(){
				$('#roleUpDownImg').attr('src', 'images/up.png');
				upDownButtonState = 'up';
				reorganizeMapsPage();
				$('#moreLessSpaceMsg').html(T("More Space"));
				window.map.resize();				
			});
		});
	}
} */

if (location.hash != '#french')
{
	$('#alternativeLanguageContainer').html(
		'<a href="javascript:window.location.hash=\'#french\'; window.location.reload(true);" '+ 
			'class="navbar-link">Français</a>');
}
else
{
	$('#alternativeLanguageContainer').html(
		'<a href="javascript:window.location.hash=\'#english\'; window.location.reload(true);" '+ 
			'class="navbar-link">English</a>');
}

function T(str)
{
	if (location.hash != '#french')
		return str;
	
	if (str in Fr)
		return Fr[str];

	return str;	
}

mapsAreLoaded = false;
$('#tabs a').click(function (e) {
	e.preventDefault();
	
	// If this is the first time we are going to the maps tab, load the stuff!
	if ($(this).attr('id') == 'mapsTab')
	{
		if (!mapsAreLoaded)
		{
			mapsAreLoaded = true;

			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", "js/maps.js");
  
			document.getElementsByTagName("head")[0].appendChild(fileref)
		
			reorganizeMapsPage();
		}
		
		
  	}
});

$('#panel').html(T('Loading ...'));
$('#pageTitle').html(T('Minority Health Observatory'));
$('#notesTitle').html(T('Methodological Notes'));
$('#homeTab').html(T('HOME'));
$('#mapsTab').html(T('INTERACTIVE MAPS'));
$('#analysisTab').html(T('ANALYSIS'));
$('#partnersTab').html(T('PARTNERS'));

$('#withSupportOfMsg').html(T('With the Support of:'));

$('#financialSupport').html(T('Financial Support:'));

$('.ministryOfMsg').html(T('MINISTRY OF '));
$('.healthAndLongTermCareMsg').html(T('HEALTH AND LONG-TERM CARE'));

$('#dataProvidersMsg').html(T('Data Providers:'));
$('#healthMsg').html(T('Health'));
$('#forceMsg').html(T('Force'));
$('#ontarioMsg').html(T('Ontario'));

$('#homeMainParagraph').html(T("Quality health information is essential for policy making and health policy planning. However, this information is missing or incomplete for some populations. The Observatory of Minority Health (OMH) aims to fill these gaps and improve knowledge about health and access to health services for the Francophone minority population of Ontario."));

$('#homeSecondLine').html(T("The activity of the Observatory is organized around two priorities:"));

$('#homeOptionOne').html(T("Activities of data collection, research and production of new knowledge"));
$('#homeOptionTwo').html(T("Valorisation and transfer of knowledge"));

$('#mapsInstructionOne').html(T("Select a data layer from the menu below and click on map for detailed information. Click on "));
$('#mapsInstructionTwo').html(T("for data sources and methodology."));
$('#analysisInstruction').html(T("Instruction"));


$('#moreLessSpaceMsg').html(T("More Space"));
