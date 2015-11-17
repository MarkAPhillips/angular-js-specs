(function() {
    "use strict";

    var dashboard = function () {

        this.header = element(by.id("header-dashboard"));
        this.sideBarUser = element(by.id("paragraph-sidebar-user"));
        this.navUser = element(by.id("navbar-user-name"));

        this.go = function() {
            browser.get(this.url());
        };
        this.url = function() {
            return require("../../e2e/config").url;
        };
        this.headerText = function() {
            return this.header.getText();
        };
        this.sideBarUserText = function() {
            return this.sideBarUser.getText();
        };
        this.navUserText = function() {
            return this.navUser.getText();
        };
    };


    module.exports = dashboard;
})();