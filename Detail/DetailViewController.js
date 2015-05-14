// this controller manages the view for the detail. If a listing is purchased or 
// the user wants to return to the listings, it gores through here. The user can 
// browse photos through the functionality of this controller.
angular.module("antengoApp").controller('DetailViewController', 
	['$scope', 'detailViewService', 'listingsService', 
	function($scope, detailViewService, listingsService) {

	$scope.listing = detailViewService.listing;
	$scope.selectedImage = detailViewService.listing.photo;

	var listing = $scope.listing;
	var images = [];
	for(var key in listing) {
		if(key.indexOf("photoThumb") > -1)
			images.push(listing[key]);
	}
	$scope.photoThumbs = images;
	
	$scope.setImage = function(index) {
		var pos = "photo" + index;
		if(pos === "photo0") pos = "photo";
		$scope.selectedImage = listing[pos];
	}
	$scope.buy = function() {
		listingsService.removeListing(detailViewService.listing);
	}
}]);