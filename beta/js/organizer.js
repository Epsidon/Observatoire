function Organizer(){};

Organizer.prototype.reorganizeMapsPage = function()
{
	var mapLeft = $("#map").offset().left;	
	var mapTop = $("#map").offset().top;
	var navbarBrandHeight = $(".navbar-brand").height();
	var legendHeight = $("#legendList").height();
	
	var mapHeight = $(window).height() - mapTop - navbarBrandHeight;
	var mapWidth = $(window).width() - (navbarBrandHeight * 2);

	var legendTop = mapTop + mapHeight - legendHeight - (navbarBrandHeight * 2);
	var legendLeft = mapLeft + navbarBrandHeight;

	var loaderTop = (mapHeight - $("#loadingIndicator").height()) / 2 + mapTop;
	var loaderLeft = (mapWidth - $("#loadingIndicator").width()) / 2 + mapLeft;
	
	var legendLabelTop =(mapHeight/2) + mapTop - (20*2);
	var legendLabelLeft = 70;
	
	$("#legendTitle").css(
		{'position' : 'absolute' , 'left' : legendLabelLeft + 'px', 'top' : legendLabelTop + 'px'});	
	

	$("#map").height(mapHeight);
	$("#map").width(mapWidth);
	 
	$("#legendList").css(
		{'position' : 'absolute' , 'left' : legendLeft + 'px', 'top' : legendTop + 'px'});			
	 
	$("#loadingIndicator").css(
		{'position' : 'absolute' , 'left' : loaderLeft + 'px', 'top' : loaderTop + 'px'});
};
