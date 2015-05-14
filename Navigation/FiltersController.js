// this controller manages the entire filters bar. filtering by category and distance is
// done in this controller. It connects the html with the service so that the user input 
// is shared with the rest of the application.
angular.module("antengoApp").controller("FiltersController", 
	['$scope', 'listingsService', 'listingsDistanceService', 'listingsCategoryService',
	function($scope, listingsService, listingsDistanceService, listingsCategoryService) {
	$scope.showDistanceAdjustBar = false;
	$scope.showCategoryAdjustBar = false;

	$scope.distances = listingsService.getDistances();
	$scope.distance = $scope.distances[0];
	$scope.selectedDistance = listingsDistanceService.distance;
	
	$scope.categories = listingsService.getCategories();
	$scope.category = $scope.categories[0];
	$scope.selectedCategory = listingsCategoryService.category;

	$scope.clearDistanceAndCategory = function() {
		listingsCategoryService.category.cat = $scope.categories[0];
		listingsDistanceService.distance.dist = $scope.distances[0];

		$scope.showDistanceAdjustBar = false;
		$scope.showCategoryAdjustBar = false;
	}
}]); 