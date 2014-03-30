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
		
	router.route();
});