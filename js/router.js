function Router()
{
	this.mapsAreLoaded = false;
};

Router.prototype.updateHashTab = function(tabName)
{
	var currentHashArray = location.hash.split('_');
	
	location.hash = currentHashArray[0] + '_' + tabName;
};


Router.prototype.route = function()
{
	var currentHashArray = location.hash.split('_');

	switch(currentHashArray[1])
	{
		case 'home':
			var body = tabs.getHome();
			break;
	
		case 'maps':
			var body = tabs.getMaps();
			break;
	
		case 'analysis':
			break;
	
		case 'partners':
			var body = tabs.getPartners();
			break;
			
		default: 
			var body = tabs.getHome();				
	
	}
	
	$('#mainContainer').html(body);
	
	translator.translatePage();
	
	if (currentHashArray[1] == 'maps')
	{
	 	if (this.mapsAreLoaded == false)
		{
			this.mapsAreLoaded = true;
			this.loadMapsJSFiles();
	
			$('#mapsModal').modal();
		}
		
		$('#mapsModal').modal('show');
		
		mapModal.fillModalBody();
	}

	
	$(".navbarItem").removeClass('active');

	$("#" + currentHashArray[1] + 'TabContainer').addClass('active');
}

Router.prototype.getLanguage = function()
{
	var currentHashArray = location.hash.split('_');

	return currentHashArray[0].substr(1);
}

/**
 * Adding js/maps.js to the header. This loads the file on fly. 
 */
Router.prototype.loadMapsJSFiles = function()
{
	var layerDataFileRef = document.createElement('script');
	layerDataFileRef.setAttribute("type","text/javascript");
	layerDataFileRef.setAttribute("src", "js/layerdata.js");
	document.getElementsByTagName("head")[0].appendChild(layerDataFileRef);

	var mapsJsFileRef = document.createElement('script');	
	mapsJsFileRef.setAttribute("type","text/javascript");
	mapsJsFileRef.setAttribute("src", "js/maps.js");
	document.getElementsByTagName("head")[0].appendChild(mapsJsFileRef);	
}



/*
if ((window.location.hostname.search("minorityhealth") == -1)
	&& (location.hash != '#english'))
{
        window.location.hash = '#french';
}
*/