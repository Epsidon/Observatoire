function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#legendList").height();
	var legendWidth = $("#legendList").width();
	
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;
	var mapWidth = $(window).width() - (navbarBrandHeight  * 2);

	var legendTop = ($( window ).height())/3;
	//var legendTop = mapTop + mapHeight - legendHeight - (mapHeight/2);
	var legendLeft = (mapLeft *2);

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;
	
	/* var legendLabelTop = (mapTop ) + mapHeight - legendHeight - (navbarBrandHeight * 4 );
	var legendLabelLeft = (mapLeft *2); */
	
	var instructionTop = legendTop - mapTop;
	var instructionLeft = (mapLeft *2);
	
	var hospitalLegendLabelTop = mapHeight - (mapLeft * 3);
	var hospitalLegendLabelLeft = (mapTop * 5) ;
	
	var mapLableTop = (mapTop *2);
	var mapLableLeft = ($( window ).width())/3;
	
	$("#mapLabel").css(
		{'position' : 'absolute' , 'left' : mapLableLeft + 'px', 'top' : mapLableTop + 'px'});
	
	$("#instruction").css(
		{'position' : 'absolute' , 'left' : instructionLeft + 'px', 'top' : instructionTop + 'px'});	
	
	/* $("#legendTitle").css(
		{'position' : 'absolute' , 'left' : legendLabelLeft + 'px', 'top' : legendLabelTop + 'px'});	
	 */
	$("#hospitalLegendList").css(
		{'position' : 'absolute' , 'left' : hospitalLegendLabelLeft + 'px', 'top' : hospitalLegendLabelTop + 'px'});	
		
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);	
};
