// This factory controls all the data in the detail view. It enables the application
// to show or hide a certain listing. the controller that uses this factory will 
// pass a listing to showDetailView in order to send the data to the detail view.
// on close, the detail view will call hideDetailView to set the current listing data
// back to null.
angular.module("antengoApp").factory("detailViewService", function($rootScope) {
	var detailViewService = {
		showDetailView: showDetailView,
		hideDetailView: hideDetailView,
		listing: null,
	}
	return detailViewService;

	function showDetailView(listing) {
		detailViewService.listing = listing;
	}
	function hideDetailView() {
		detailViewService.listing = null;
	}
});