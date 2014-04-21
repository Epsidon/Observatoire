function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#layerLegendList").height();
	var legendWidth = $("#layerLegendList").width();
	
	var windowHeight = $(window).height();
	var modalHeight = $('.modal-dialog').height();
	
	$('.modal-dialog').css({'margin-top' : ((windowHeight - modalHeight )/2)});
	
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;
	var mapWidth = $(window).width() - (navbarBrandHeight  * 2);
	
	var instructionHeight = $("#instruction").height();
	var instructionWidth = $("#instruction").width();

	var legendTop = ($(window).height())/4;
	var legendLeft = (mapLeft * 3);

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;

	var instructionTop = mapTop + (mapLeft *2);
	var instructionLeft = mapWidth - instructionWidth;
	
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	if (windowHeight <= 768)
	{
		var hospitalLegendLabelTop = ($(window).height()) - (mapTop*2);
		var hospitalLegendLabelLeft = (($(window).width())/2);
	}
	else
	{
		var hospitalLegendLabelTop = ($(window).height()) - (mapTop*2);
		var hospitalLegendLabelLeft = (mapLeft *2);
	}	

	var mapLableTop = mapTop + (mapLeft *2);
	var mapLableLeft = ($(window).width()/2) - 110 ;
	
	var zoomInstructionTop = mapTop + (mapHeight / 2);
	var zoomInstructionLeft = (($(window).width())/2) - legendWidth ;
	
		if (windowWidth <= 800) 
		{
			$('#zoomInInstruction').removeClass('mediumFont').addClass('smallerFont');
			$('#mapLabel').removeClass('mediumFont').addClass('smallerFont');
			$('#layerLegendList').removeClass('smallFont').addClass('smallerFont');
			$('#mapsInstructionOne').removeClass('mediumFont').addClass('smallerFont');
			$('#hospitalLegendList').removeClass('mediumFont').addClass('smallerFont');
			$('#legendTitle').removeClass('smallFont').addClass('smallerFont');
		}
		else
		{
			$('#zoomInInstruction').removeClass('smallerFont').addClass('mediumFont');
			$('#layerLegendList').removeClass('smallerFont').addClass('smallFont');
			$('#mapLabel').removeClass('smallerFont').addClass('mediumFont');
			$('#mapsInstructionOne').removeClass('smallerFont').addClass('mediumFont');
			$('#hospitalLegendList').removeClass('smallerFont').addClass('mediumFont');
			$('#legendTitle').removeClass('smallerFont').addClass('smallFont');
		}
	
	$("#mapLabel").css(
		{'position' : 'absolute' , 'left' : mapLableLeft + 'px', 'top' : mapLableTop + 'px'});
	
	$("#instruction").css(
		{'position' : 'absolute' , 'left' : instructionLeft + 'px', 'top' : instructionTop + 'px'});	
	
	$("#hospitalLegendList").css(
		{'position' : 'absolute' , 'left' : hospitalLegendLabelLeft + 'px', 'top' : hospitalLegendLabelTop + 'px'});	
	
	$("#zoomInInstruction").css(
		{'position' : 'absolute' , 'left' : zoomInstructionLeft + 'px', 'top' : zoomInstructionTop + 'px'});	
	
	$("#layerLegendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);	
};
