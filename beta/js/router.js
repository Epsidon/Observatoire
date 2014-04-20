function Router()
{
	this.mapsAreLoaded = false;
	this.languageHasChanged = false;
};

Router.prototype.updateHashTab = function(tabName)
{
	var currentHashArray = location.hash.split('_');
	
	location.hash = currentHashArray[0] + '_' + tabName;
};


Router.prototype.route = function()
{
	this.normalizeHashLanguage();

	var currentHashArray = location.hash.split('_');
	
	/**
	 * it gets element 1 of hashArray (which is "maps","analysis", ...)
	 * and based on the result hash
	 * it calls methods 
	 * if hash ="maps" --> tabs.getMaps
	 * getHome, getMaps, ...  are defined in "tas.js"
	 **/
	switch(currentHashArray[1])
	{
		case 'home':
			var body = tabs.getHome();
			break;
	
		case 'maps':
			var body = tabs.getMaps();
			break;
	
		case 'analysis':
			var body = tabs.getAnalysis();
			break;
	
		case 'partners':
			var body = tabs.getPartners();
			break;
			
		default:
			var body = tabs.getHome();

		$('#homeTab').removeClass('selectedTab');
	
	}
	
	if (currentHashArray[1] != 'maps')
	{
		$('#mainContainer').show();
		$('#mapContainer').hide();

		$('#mainContainer').html(body);	
	}
	else
	{
		$('#mainContainer').hide();
		$('#mapContainer').show();

	 	if (this.mapsAreLoaded == false)
		{
			this.mapsAreLoaded = true;
			
			$('#mapContainer').html(body);	
			
			this.loadMapsJSFiles();
	
			$('#mapsModal').modal('show');
			
			$('#modalUpdateMapButton').click(function() 
			{
				mapModal.modalUpdateMapsClick();				
			});
						
			$("#hospitalLegendList").draggable({containment: "parent"});
			$("#instruction").draggable({containment: "parent"});
			$("#legendList").draggable({containment: "parent"});
			
			$("#instruction").on("click", function()
			{
				$("#mapsModal").modal('show');
			});
			
			$("#mapsTabContainer").on("click", function()
			{
				$("#mapsModal").modal('show');
			});
		}
		
		if (this.languageHasChanged)
		{
			this.languageHasChanged = false;
			translateMap();		
			mapModal.modalUpdateMapsClick();			
		}
		
		mapModal.fillModalBody();
	}

	
	$(".navbarItem").removeClass('active');

	$("#" + currentHashArray[1] + 'TabContainer').addClass('active');
	
	translator.translatePage();
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

Router.prototype.normalizeHashLanguage = function()
{
	var currentHashArray = location.hash.split('_');
	
	if (currentHashArray[0] != '#french' && currentHashArray[0] != '#english')
	{
		if (window.location.hostname.search("minorityhealth") == -1)
		{
        	currentHashArray[0] = '#french';
		}
		else
		{
        	currentHashArray[0] = '#english';	
		}
	}
	
	location.hash = currentHashArray.join('_');
	
	if (currentHashArray[0] != '#french')
	{
		$('#alternativeLanguageContainer').attr("href", "javascript:router.setLanguage('#french')");
		$('#alternativeLanguageContainer').html("Fr");
	}
	else
	{
		$('#alternativeLanguageContainer').attr("href", "javascript:router.setLanguage('#english')");
		$('#alternativeLanguageContainer').html("En");
	}
};

Router.prototype.setLanguage = function(lang)
{
	this.languageHasChanged = true;
	
	var currentHashArray = location.hash.split('_');

	currentHashArray[0] = lang;

	location.hash = currentHashArray.join('_');
};






