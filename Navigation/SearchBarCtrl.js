angular.module("antengoApp").controller("SearchBarController", ['$scope', 'listingsSearchService', function($scope, listingsSearchService) {
  	$scope.searchText = listingsSearchService.searchText;
}]);

