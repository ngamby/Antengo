// this service manages the data input by the user in the search bar. it allows other
// controllers to determine whether a listing is a part of the user's search text.
angular.module("antengoApp").factory("listingsSearchService", function() {
	var listingsSearchService = {
		search: search,
		searchText: {text: ""}
	};
	return listingsSearchService;

	function search(listing) {
    	return (listing.title.indexOf(listingsSearchService.searchText.text)!=-1 
    		|| listing.text.indexOf(listingsSearchService.searchText.text)!=-1 
    		|| listing.categoryName.indexOf(listingsSearchService.searchText.text)!=-1);
  	}
});