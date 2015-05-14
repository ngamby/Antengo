angular.module("antengoApp").factory("listingsDistanceService", function() {
	var listingsDistanceService = {
		isWithinDistance: isWithinDistance,
		distance: {dist: "Any"}
	}
	return listingsDistanceService;

	function isWithinDistance(listing) {
		if(listingsDistanceService.distance.dist !== "Any")
			return listing.dist <= parseInt(listingsDistanceService.distance.dist);
		else return true;
	}
});