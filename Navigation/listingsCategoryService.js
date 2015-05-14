// this service manages the components of the filtering by category. client controllers
// will use this to check whether the item they are displaying is in the user's current
// category fiter. the category filter uses this service to share the user's choice with
// the rest of the application.
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