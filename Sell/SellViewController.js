// This controller manages the selling view. the items in scope represent data to be added through the listing service
angular.module("antengoApp").controller('SellViewController', ['$scope', 'listingsService', function($scope, listingsService) {
	var listing = {};
	$scope.title = "";
	$scope.text = "";
	$scope.price = "";
	$scope.categories = listingsService.getCategories();
	$scope.selectedCategory = $scope.categories[0];

	$scope.sell = function() {
		listingsService.addListing({
			"id": Math.floor((Math.random() * 100000000) + 1), //random number that's need for reference when buying and selling
			"dist":  Math.floor((Math.random() * 100) + 1), // random distance.
			"userId":"1",
			"twUsername":"",
			"twitterId":"-1",
			"categoryId":"-1",
			"categoryGroupId":"-1",
			"dataSourceId":"-1",
			"status":"-1",
			"title": $scope.title,
			"text": $scope.text,
			"price": $scope.price,
			"isBarter":"-1",
			"template":"-1",
			"hasPhoto":"0",
			"useCategoryPhoto":"0",
			"longitude":"-117.0",
			"latitude":"34.0",
			"createdDate":"now",
			"u_username": "-1",
			"u_userType":"0",
			"u_hasPhoto":"0",
			"categoryName": $scope.selectedCategory,
			"dataSourceName":"nerp",
			"timePassed":"0",
			"photo": 'http://www.misskatecuttables.com/uploads/shopping_cart/7727/large_cute-ant.png', // i love google.
			"photoThumb":'http://www.misskatecuttables.com/uploads/shopping_cart/7727/large_cute-ant.png'
		});
	}
}]);