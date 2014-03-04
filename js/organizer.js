function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#legendList").height();
	
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;
	var mapWidth = $(window).width() - (navbarBrandHeight * 2);

	var legendTop = mapTop + mapHeight - legendHeight - navbarBrandHeight;
	var legendLeft = mapLeft + navbarBrandHeight;

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);
	 
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			

/*
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
	}
	
	if ($("#map_container").offset())
	{
		var mapContainerLeft = $("#map_container").offset().left;
		var zoomButtonHeight = $(".esriSimpleSliderDecrementButton").height();
	}
	else
	{
		var mapContainerLeft = 400;
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
		
	var legendTop = mapTop + mapHeight - legendHeight - zoomButtonHeight;
	var legendLeft = mapContainerLeft;
	 
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
*/
};
