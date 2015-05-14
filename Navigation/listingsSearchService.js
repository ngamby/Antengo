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