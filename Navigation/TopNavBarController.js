// This controller manges the top navigation bar. It will show the search bar if the 
// search icon is clicked.
angular.module("antengoApp").controller("TopNavBarController", ['$scope', function($scope) {
	$scope.showSearchBar = false;
}]);