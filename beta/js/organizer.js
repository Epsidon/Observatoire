function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#layerLegendList").height();
	var legendWidth = $("#layerLegendList").width();
	
	var windowHeight = $(window).height();
	var mapWidth = $(window).width() - 50;
	
	var mapHeight = $(window).height() - 70;
	
	

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;
	
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();


	if (windowHeight <= 768)
	{
		var legendTop = ($(window).height())/3;
		var legendLeft = (mapLeft + 10);
	}
	else
	{
		var legendTop = ($(window).height())/2;
		var legendLeft = (mapLeft + 10);
	}	


	
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
	
	
	$("#zoomInInstruction").css(
		{'position' : 'absolute' , 'left' : zoomInstructionLeft + 'px', 'top' : zoomInstructionTop + 'px'});	
	
	$("#layerLegendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);	
	
	this.reorganizeMapTitle();
	this.reorganizeModal();
};

Organizer.prototype.reorganizeMapTitle = function()
{
	if (!$("#map_zoom_slider").offset())
	{
		setTimeout(organizer.reorganizeMapTitle,100);
		return;
	}
	
	var mapLeft = $("#map").offset().left;
	var zoomSliderTop = $("#map_zoom_slider").offset().top;
	var mapTop = $("#map").offset().top;
	var mapWidth = $("#map").width();

	var mapLabelWidth = $("#mapLabel").width();
	
	mapLabelWidth = (mapLabelWidth > 800)? 800 : mapLabelWidth;

	var mapLableTop = zoomSliderTop;
	var mapLableLeft = ( ((mapWidth - mapLabelWidth)/2) ) ;

	$("#mapLabel").css(
		{'position' : 'absolute' , 'left' : mapLableLeft + 'px', 'top' : mapLableTop + 'px'});
		
	var instructionLabelTop = mapLableTop + 35;
	var mapLabelRight = ((mapWidth + (mapLeft/2)) - ($("#mapLabel").offset().left + ($("#mapLabel").width()) ))
	var instructionLabelRight = mapLabelRight ;
	
	$("#instruction").css(
		{'position' : 'absolute' , 'right' : instructionLabelRight + 'px', 'top' : instructionLabelTop + 'px'});
	
}

Organizer.prototype.reorganizeModal = function()
{
	var modalHeight = $('.modal-dialog').height();	

	if (modalHeight == 0)
	{
		setTimeout(organizer.reorganizeModal,100);
		return;
	}

	var navbarBrandHeight = $(".navbar-brand").height();

	var mapTop = $("#map").offset().top;
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;

	var modalHeight = $('.modal-dialog').height();	

	$('.modal-dialog').css({'margin-top' : ((mapHeight - modalHeight )/2 + mapTop)});
};

