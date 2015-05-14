var ctrl = angular.module("antengoApp").controller('GridListingsController', 
	['$scope', 'listingsService', 'listingsSearchService', 'listingsDistanceService', 'listingsCategoryService', 'detailViewService',
	function($scope, listingsService, listingsSearchService, listingsDistanceService, listingsCategoryService, detailViewService) {

	$scope.listings = listingsService.getListings();

	//filtering:
	$scope.search = listingsSearchService.search;
	$scope.isWithinDistance = listingsDistanceService.isWithinDistance;
	$scope.isInCategory = listingsCategoryService.isInCategory;

	//show them the deets (when clicked) by passing the current listing to the detail view service
	$scope.showDetail = function(listing) {
		detailViewService.showDetailView(listing);
	}
}]);

ctrl.directive("listingDisplay", function() {
	return {
		restrict: 'A',
		templateUrl: 'GridListings/listingDisplay.html'
	};
});

ctrl.directive("profPicImg", function() {
	return {
		restrict: 'A',
		link: (function(scope, element, attrs) {
			if(scope.listing.u_hasPhoto == 1) { //awk cuz hasPhoto is a string but == saves the day! - weak practice, Noah step up
				attrs.ngSrc = scope.listing.photo;
			} else  {
				attrs.ngSrc = "images/Avatar.png";
			}
		})
	}
});

// commented this out because all listings have a photo
// this will make sure that the listing has a photo of the item in it. otherwise, it will just remove it
// ctrl.directive("itemPic", function() {
// 	return {
// 		restrict: 'A',
// 		link: (function(scope, element, attrs) { 
// 			if(scope.listing.hasPhoto == 1) { //awk cuz hasPhoto is a string but == saves the day!
// 				attrs.ngSrc = scope.listing.photo;
// 			} else {
// 				attrs.ngSrc = "images/Avatar.png";
// 			}
// 		})
// 	}
// });



ctrl.directive("name", function() {
	return {
		restrict: 'A',
		link: (function(scope, element, attrs) { 
			if(	scope.listing !== undefined && 
				scope.listing.u_username !== undefined && 
				scope.listing.u_username.match(/[a-z]/i)) { 
					attrs.ngBind = scope.listing.u_username;
			} else 	attrs.ngBind = "";
		})
	}
});

ctrl.directive("price", function() {
	return {
		restrict: 'A',
		link: (function(scope, element, attrs) {
			if(scope.listing.price) {
				attrs.ngBind = scope.listing.price;
			} else {
				element.remove();
			}
		})
	}
});

