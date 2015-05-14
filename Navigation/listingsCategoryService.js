angular.module("antengoApp").factory("listingsCategoryService", function() {
	var listingsCategoryService = {
		isInCategory: isInCategory,
		category: {cat: "All Categories"}
	}
	return listingsCategoryService

	function isInCategory(listing) {
		if(listingsCategoryService.category.cat === "All Categories") return true;
		return (listing.categoryName.indexOf(listingsCategoryService.category.cat) != -1);
	}
});