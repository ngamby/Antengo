// This controller manages the search bar view. it is the interface between the view and 
// the search service, which shares the searched text with the rest of the app.
angular.module("antengoApp").controller("SearchBarController", ['$scope', 'listingsSearchService', function($scope, listingsSearchService) {
  	$scope.searchText = listingsSearchService.searchText;
}]);

