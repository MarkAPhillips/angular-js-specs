(function() {
    "use strict";

    var nav = function() {
        this.linkUserDropdown = element(by.id("link-user-dropdown"));
        this.linkLogout = element(by.id("link-logout"));
        this.menuItems = element.all(by.css(".sidebar-menu li.treeview"));
        this.linkLocation = element(by.id("link-menu-location"));
        this.linkVehicleTracker = element(by.id("link-menu-location-track"));

        this.clickUserMenu = function() {
            this.linkUserDropdown.click();
        };
        this.clickLocationLink = function() {
            this.linkLocation.click();
        };
        this.clickVehicleTrackerLink = function() {
            this.linkVehicleTracker.click();
        };
        this.logout = function() {
            this.linkLogout.click();
        };
        this.menuItemList = function() {
            return this.menuItems;
        };
    };
    module.exports = nav;
})();