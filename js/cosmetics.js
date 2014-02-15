mapsAreLoaded = false;
$('#tabs a').click(function (e) {
	e.preventDefault();
	
	// If this is the first time we are going to the maps tab, load the stuff!
	if ($(this).attr('id') == 'mapsTab' && !mapsAreLoaded)
	{
		mapsAreLoaded = true;
		// TODO		
	}
});

$('#initialClickMessage').html(T('Click on a region for details'));
$('#panel').html(T('Loading ...'));
$('#pageTitle').html(T('Minority Health Observatory'));
$('#notesTitle').html(T('Methodological Notes'));

$('#HOME').html(T('HOME'));
$('#INTERACTIVEMAPS').html(T('INTERACTIVE MAPS'));
$('#ANALYSIS').html(T('ANALYSIS'));
$('#PARTNERS').html(T('PARTNERS'));

$('#support').html(T('With the Support of:'));


$('#financialSupport').html(T('Financial Support:'));

$('#MINISTRYOF').html(T('MINISTRY OF '));
$('#LONGTERMCARE').html(T('HEALTH AND LONG-TERM CARE'));

$('#dataProviders').html(T('Data Providers:'));
$('#Health').html(T('Health'));
$('#Force').html(T('Force'));
$('#MINP1').html(T('MINISTRY OF '));
$('#MINP2').html(T('MINISTRY OF '));
$('#LONGTERMP1').html(T('HEALTH AND LONG-TERM CARE'));
$('#LONGTERMP2').html(T('HEALTH AND LONG-TERM CARE'));


if (location.hash != '#french')
{
	$('#alternativeLanguageContainer').html(
		'<a href="javascript:window.location.hash=\'#french\'; window.location.reload(true);" '+ 
			'class="navbar-link">Français</a>');
}
else
{
	$('#alternativeLanguageContainer').html(
		'<a href="javascript:window.location.hash=\'\'; window.location.reload(true);" '+ 
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
