
function hideMapsInstructions()
{
	setTimeout(function()
	{
		reorganizeMapsPage();
	}, 100);
}


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

	$( window ).resize(function() {
		reorganizeMapsPage();
	});

