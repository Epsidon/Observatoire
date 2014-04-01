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
			$('#homeTab').removeClass('selectedTab');
			break;
	
		case 'maps':
			var body = tabs.getMaps();
			$('#homeTab').removeClass('selectedTab');
			break;
	
		case 'analysis':
			var body = tabs.getAnalysis();
			$('#homeTab').removeClass('selectedTab');
			break;
	
		case 'partners':
			var body = tabs.getPartners();
			$('#homeTab').removeClass('selectedTab');
			break;
			
		default: 
			var body = tabs.getHome();
			$('#homeTab').addClass('selectedTab');
	
	}
	
/*	
	var selectedTabLeft = $("#homeTabContainer").offset().left;	
	var selectedTabTop = $("#homeTabContainer").offset().top;	
	var selectedTabHeight = $("#homeTabContainer").height();
	var selectedTabWidth = $("#homeTabContainer").width();

	var downTriangleHolderWidth = 15; // $("#downTriangleHolder").width();

	var downTriangleHolderTop = selectedTabTop + selectedTabHeight;
	var downTriangleHolderLeft = selectedTabLeft + 
		((selectedTabWidth - downTriangleHolderWidth) / 2);

	console.log('selectedTabLeft: ' + selectedTabLeft);
	console.log('selectedTabTop: ' + selectedTabTop);
	console.log('selectedTabHeight: ' + selectedTabHeight);
	console.log('selectedTabWidth: ' + selectedTabWidth);
	console.log('downTriangleHolderWidth: ' + downTriangleHolderWidth);
	console.log('downTriangleHolderLeft: ' + downTriangleHolderLeft);
	console.log('downTriangleHolderTop: ' + downTriangleHolderTop);
		
	$("#downTriangleHolder").css(
		{'position' : 'absolute' , 'left' : downTriangleHolderLeft + 'px', 'top' : downTriangleHolderTop + 'px'});	
*/
	
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
			$('#mapContainer').html(body);	

			this.mapsAreLoaded = true;
			this.loadMapsJSFiles();
	
			$('#mapsModal').modal();
			
			$('#modalUpdateMapButton').click(function() 
			{
				mapModal.modalUpdateMapsClick();
				
			});
						
			$("#hospitalLegendList").draggable({containment: "parent"});
			$("#instruction").draggable({containment: "parent"});
			$("#legendList").draggable({containment: "parent"});
			$("#mapLabel").draggable({containment: "parent"});

			$("#instruction").on("click", function()
			{
				$("#mapsModal").modal('show');
			});
		}
		
		$('#mapsModal').modal('show');
		
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
		$('#alternativeLanguageContainer').html(
			'<a href="javascript:router.setLanguage(\'#french\')" '+ 
				'class="navbar-link">Fr</a>');
	}
	else
	{
		$('#alternativeLanguageContainer').html(
			'<a href="javascript:router.setLanguage(\'#english\')" '+ 
				'class="navbar-link">En</a>');
	}
};

Router.prototype.setLanguage = function(lang)
{
	var currentHashArray = location.hash.split('_');

	currentHashArray[0] = lang;

	location.hash = currentHashArray.join('_');
};






