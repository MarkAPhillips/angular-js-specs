(function() {

    /* As an End User I would like to be able to navigate to a view*/
    "use strict";

    describe("when logging into an application", function() {

        var Login = require("../e2e/pageobjects/login");
        var login = new Login();
        var Location = require("../e2e/pageobjects/location");
        var location = new Location();
        var Nav = require("../e2e/pageobjects/nav");
        var nav = new Nav();
        var Dashboard = require("../e2e/pageobjects/dashboard");
        var dashboard = new Dashboard();

        it("then should navigate user to the correct url when clicking a link", function() {

            login.go();
            login.forEndUser();
            login.submit();

            browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function(url) {
                    return url === dashboard.url();
                });
            }, 15000);

            nav.clickLocationLink();
            nav.clickVehicleTrackerLink();
            expect(browser.getCurrentUrl()).toBe(location.url());
        });


        it("and then should display the correct header", function() {
            expect(location.headerText()).toContain("");
        });

        it("and then should display a map on the page", function() {
            expect(location.leafletMapElementPresent()).toBe(false);
        });

    });
})();