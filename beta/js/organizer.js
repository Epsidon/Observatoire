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
	
	var instructionHeight = $("#instruction").height();
	var instructionWidth = $("#instruction").width();

	var legendTop = ($( window ).height())/3;
	var legendLeft = (mapLeft *2);

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;

	var instructionTop = mapTop + (mapLeft *2);
	var instructionLeft = mapWidth - instructionWidth;
	
	var hospitalLegendLabelTop = mapHeight - (mapLeft * 3);
	var hospitalLegendLabelLeft = (mapTop * 5) ;
	
	var mapLableTop = mapTop + (mapLeft *2);
	var mapLableLeft = (($( window ).width())/2) - legendWidth ;
	
	var zoomInstructionTop = mapTop + (mapHeight / 2);
	var zoomInstructionLeft = (($( window ).width())/2) - legendWidth ;
	var windowWidth = $(window).width();
	
	var windowWidth = $( window ).width();
		if (windowWidth <= 800) 
		{
			$('#zoomInInstruction').removeClass('mediumFont').addClass('smallerFont');
			$('#mapLabel').removeClass('mediumFont').addClass('smallerFont');
			$('#legendList').removeClass('smallFont').addClass('smallerFont');
			$('#mapsInstructionOne').removeClass('mediumFont').addClass('smallerFont');
			$('#hospitalLegendList').removeClass('mediumFont').addClass('smallerFont');
			$('#legendTitle').removeClass('smallFont').addClass('smallerFont');
		}
		else
		{
			$('#zoomInInstruction').removeClass('smallerFont').addClass('mediumFont');
			$('#legendList').removeClass('smallerFont').addClass('smallFont');
			$('#mapLabel').removeClass('smallerFont').addClass('mediumFont');
			$('#mapsInstructionOne').removeClass('smallerFont').addClass('mediumFont');
			$('#hospitalLegendList').removeClass('smallerFont').addClass('mediumFont');
			$('#legendTitle').removeClass('smallerFont').addClass('mediumFont');
		}
	
	$("#mapLabel").css(
		{'position' : 'absolute' , 'left' : mapLableLeft + 'px', 'top' : mapLableTop + 'px'});
	
	$("#instruction").css(
		{'position' : 'absolute' , 'left' : instructionLeft + 'px', 'top' : instructionTop + 'px'});	
	
	$("#hospitalLegendList").css(
		{'position' : 'absolute' , 'left' : hospitalLegendLabelLeft + 'px', 'top' : hospitalLegendLabelTop + 'px'});	
	
	$("#zoomInInstruction").css(
		{'position' : 'absolute' , 'left' : zoomInstructionLeft + 'px', 'top' : zoomInstructionTop + 'px'});	
	
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);	
};
