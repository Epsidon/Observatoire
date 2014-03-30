$(document).ready(function()
{
	/**
	 * Defining global objects first
	 */
	tabs = new Tabs();
	translator = new Translator();
	router = new Router();
	organizer = new Organizer();
	mapModal = new MapModal();

	$(window).on('hashchange',function()
	{
		router.route();
	});
	
	$(window).on('resize',function()
	{
		organizer.reorganizeMapsPage();
	});
	
	$(document).ready(function()
	{
		$("#mapsInstructionOne").on("click", function()
	   {
			$("#mapsModal").modal('show');
		});
		
		$("#hospitalLegendList").on("click", function()
	   {
			$("#hospitalLegendList").draggable();
		});
		
		$("#instruction").on("click", function()
	   {
			$("#instruction").draggable();
		});
		
		$("#legendTitle").on("click", function()
	   {
			$("#legendTitle").draggable();
		});
		
		$("#legendList").on("click", function()
	   {
			$("#legendList").draggable();
		});
		
	});
	
	$(document).ready(function()
	{
		$("#instruction").on("click", function()
		   {
				$("#mapsModal").modal('show');
			});

	});
	
	router.route();
});