// This is the primary script used for creating the different routes for the application. 
// It also creates the module for the application and creates directives that fill in each
// component of the index with the right controllers and html files.


// This is the antengo app module. there is only one module in this application
var app = angular.module("antengoApp", ['ngRoute']);

// This configures routing. whenever a link is clicked, specifically buy, sell, or browse, 
// it goes through here to redirect the page
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			template: '<filters-bar></filters-bar><grid-listings></grid-listings>'
		})

		// route for the detail page
		.when('/detailView', {
			template: '<detail-view></detail-view>'
		})

		// route for the sell page
		.when('/sell', {
			template: '<sell-view></sell-view>'
		})
});

// this is a really handy directive that replaces any image with a specified error
// image. the idea is that if an image is bad, this will replace it with a different
// one.
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});

// this directive defines the sell view. when you click on the dollar sign ($) it will
// go through here and reload the page to fill it with the contents of sellView.html
// and set the controller to SellViewController.
app.directive("sellView", function() {
	return {
		restrict: 'E',
		templateUrl: 'Sell/sellView.html',
		controller: 'SellViewController'
	}
});

// this directive defines the detail view. when you click on a listing, it will go 
// through here and reload the page with the contents of detailView.html and set 
// the controller to DetailViewController
app.directive("detailView", function() {
	return {
		restrict: 'E', 
		templateUrl: 'Detail/detailView.html',
		controller: 'DetailViewController'
	}
});

// this directive defines the grid view. when you are browsing, this will present
// GridListings.html and set the controller to be GridListingsController.
app.directive("gridListings", function() {
	return {
		restrict: 'E', 
		templateUrl: 'GridListings/gridListings.html',
		controller: 'GridListingsController'
	}
});

// these remaining directives do the same for the top nav bar (which contains the
// logo, magnifying glass, dollar sign, and menu bars), filters bar (all categories 
// within...), and search bar, which is loaded when you click on the magnifying glass

app.directive("topNavBar", function() {
	return {
		restrict: 'E',
		templateUrl: 'Navigation/topNavBar.html',
		controller: 'TopNavBarController'
	}
});

app.directive("filtersBar", function() {
	return {
		restrict: 'E',
		templateUrl: 'Navigation/filtersBar.html',
		controller: 'FiltersController'
	}
});

app.directive("searchBar", function() {
	return {
		restrict: 'E',
		templateUrl: 'Navigation/searchBar.html',
		controller: 'SearchBarController'
	}
});


