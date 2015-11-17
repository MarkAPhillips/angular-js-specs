(function() {

    /* As an End User I would like to able to login into an application and view the dashboard */
    "use strict";

    describe("when logging into an application as a valid end user", function() {

        var login = require("../e2e/pageobjects/login");
        var login = new login();
        var dashboard = require("../e2e/pageobjects/dashboard");
        var dashboard = new dashboard();
        var nav = require("../e2e/pageobjects/nav");
        var nav = new nav();


        it("Then should redirect to the dashboard view", function() {

            login.go();
            login.forEndUser();
            login.submit();

            browser.driver.wait(function () {
                return browser.driver.getCurrentUrl().then(function (url) {
                    return url === dashboard.url();
                });
            }, 15000);

            expect(browser.getCurrentUrl()).toBe(dashboard.url());
        });

        it("and then should display the corect header text for the Dashboard view", function() {
            expect(dashboard.headerText()).toContain("Dashboard");
        });

        it("and then should display the correct user on the sidebar", function() {
            expect(dashboard.sideBarUserText()).toBe("");
        });

        it("and then should display the correct user on the navbar", function() {
            expect(dashboard.navUserText()).toBe("");
        });

        it("and then should display three main menu items", function() {
            nav.menuItemList().then(function(items) {
                expect(items.length).toBe(3);
            });
        });

        it("and then should redirect the user to the login page when logging out", function() {
            nav.clickUserMenu();
            nav.logout();

            var urlChanged = function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (/login/).test(url);
                });
            };

            var condition = EC.and(urlChanged);
            browser.wait(condition, 5000);
            expect(browser.getCurrentUrl()).toBe(login.url());
        });

    });
})();