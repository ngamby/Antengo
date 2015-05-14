angular.module("antengoApp").factory("listingsService", function() {
	var listings = listingsData.rs;
	var listingsService = {
		getListings: getListings,
		getCategories: getCategories,
		getDistances: getDistances,
		removeListing: removeListing,
		addListing: addListing,
		listings: listings
	}
	return listingsService;

	function getListings() {
		return listings;
	}
	function getCategories() {
		return [
			"All Categories",
			"Instruments",
			"Clothes",
			"Phones",
			"Cars",
			"Furniture",
			"Motorcycles",
			"Autos",
			"Bikes",
			"Other",
			"Sporting Goods",
			"Toys & Games",
			"Rommate(s)",
			"Wanted",
			"Free",
			"Housing",
			"Sale Events",
			"Electronics",
			"Pets",
			"Sports Gear",
			"Barter",
			"Babies/Kids",
			"Tickets",
			"Fashion",
			"Jewlery",
			"Art",
			"Music",
			"Misc. Items",
			"Personals",
			"Community",
			"Services",
			"Jobs"
		];
	}
	function getDistances() {
		return [
			"Any",
			"10",
			"15",
			"25",
			"50",
			"100"
		];
	}
	function removeListing(listing) {
		for(var i = 0; i < listingsService.listings.length;  i++) {
			var curList = listingsService.listings[i];
			if(curList.id === listing.id) {
				listingsService.listings.splice(i, 1);
			}
		}	
	}
	function addListing(listing) {
		listingsService.listings.splice(0, 0, listing);
	}
});