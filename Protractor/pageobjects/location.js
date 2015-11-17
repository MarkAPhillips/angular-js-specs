(function() {
    "use strict";

    var location = function() {
        this.header = element(by.id("header-location"));
        this.leafletMap = element(by.css("angular-leaflet-map"));

        this.url = function() {
            return require("../../e2e/config").url + "locations/";
        };
        this.headerText = function() {
            return this.header.getText();
        };
        this.leafletMapElementPresent = function() {
            return this.leafletMap.isPresent();
        };
    };
    module.exports = location;
})();