(function() {

    /* As an End User I would like to able be recieve an error message if I login into an application with invalid credentials */
    "use strict";

    describe("when logging into an application as an invalid end user", function() {

        var Login = require("../e2e/pageobjects/login");
        var login = new Login();
        var dashboard = require("../e2e/pageobjects/dashboard");
        var dashboard = new dashboard();

        it("then should redirect an user to the login page if they are not authenticated", function() {

            dashboard.go();

            var urlChanged = function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (/login/).test(url);
                });
            };

            var condition = EC.and(urlChanged);
            browser.wait(condition, 5000);
            expect(browser.getCurrentUrl()).toBe(login.url());
        });

        it("and then should return a valid error message is no details are entered", function() {
            login.go();
            login.submit();
            expect(login.responseMessageText()).toContain("Login failed. Invalid email address or password");
        });
    });
})();
