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
	
	$(document).ready(function()
	{
		$("#mapsInstructionOne").on("click", function()
	   {
			$("#mapsModal").modal('show');
		});

	router.route();
	});

	router.route();
});