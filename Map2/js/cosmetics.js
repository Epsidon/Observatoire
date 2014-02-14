$(window).resize( resizeWebSite);
console.log ('navbar height is ' + $("#pageTitle").height());
console.log ('tab bar height is ' + $("#tabs").height());

function resizeWebSite(){

	$("#panel").height($(window).height() - (100+  $("#navbar").height() + $("#pageTitle").height()));
   	$("#map").height($(window).height() - (100+ $("#navbar").height() + $("#pageTitle").height()));
        
     console.log($("#map").height() / 2);   
        
     var loaderTop = ($("#map").height() - $("#loadingIndicator").height()) / 2 + $("#map").position().top;
     var loaderLeft = (($("#map").width() - $("#loadingIndicator").width()) / 2) + $("#map").position().left;
    
        
	$("#loadingIndicator").css({'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});    
}

resizeWebSite();
 
$('#initialClickMessage').html(T('Click on a region for details'));
$('#panel').html(T('Loading ...'));
$('#pageTitle').html(T('Minority Health Observatory'));
$('#notesTitle').html(T('Methodological Notes'));


$('#support').html(T('With the Support of:'));
$('#INTERACTIVE MAPS').html(T('INTERACTIVE MAPS'));


$('#MINISTRYOF').html(T('MINISTRY OF '));


$('#dataProviders').html(T('Data Providers:'));
$('#Health').html(T('Health'));
$('#Force').html(T('Force'));






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
