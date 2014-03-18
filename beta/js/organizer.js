function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#legendList").height();
	var legendWidth = $("#legendList").width();
	
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;
	var mapWidth = $(window).width() - (navbarBrandHeight * 2);

	var legendTop = mapTop + mapHeight - legendHeight - (navbarBrandHeight * 2);
	var legendLeft = mapLeft + navbarBrandHeight;

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;
	
	var legendLabelTop = mapTop + mapHeight - legendHeight - (navbarBrandHeight * 5 );
	var legendLabelLeft = mapLeft + navbarBrandHeight;
	
	var instructionTop = mapTop + mapHeight - (legendHeight * 2) ;
	var instructionLeft = mapLeft + navbarBrandHeight;
	
	var hospitalLegendLabelTop = mapHeight;
	var hospitalLegendLabelLeft = legendWidth + mapTop;
	
	$("#instruction").css(
		{'position' : 'absolute' , 'left' : instructionLeft + 'px', 'top' : instructionTop + 'px'});	
	
	$("#legendTitle").css(
		{'position' : 'absolute' , 'left' : legendLabelLeft + 'px', 'top' : legendLabelTop + 'px'});	
	
	$("#hospitalLegendList").css(
		{'position' : 'absolute' , 'left' : hospitalLegendLabelLeft + 'px', 'top' : hospitalLegendLabelTop + 'px'});	
		
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);	
};
