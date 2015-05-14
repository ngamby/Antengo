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