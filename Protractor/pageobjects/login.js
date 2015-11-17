(function() {
    "use strict";

    var login = function() {
        this.loginButton = element(by.id("btnLogin"));
        this.email = element(by.model("login.email"));
        this.password = element(by.model("login.password"));
        this.responseMessage = element(by.id("response-message"));

        this.go = function() {
            browser.get(this.url());
        };

        this.submit = function () {
            var isClickable = EC.elementToBeClickable(this.loginButton);
            browser.wait(isClickable, 10000);
            this.loginButton.click();
        };
        this.fillEmail = function(email) {
            this.email.sendKeys(email);
        };
        this.fillPassword = function(password) {
            this.password.sendKeys(password);
        };
        this.responseMessageText = function() {
            return this.responseMessage.getText();
        };
        this.url = function() {
            return require("../../e2e/config").url + "login/";
        };
        this.forEndUser = function() {
            this.fillEmail("ibowmann@tinypic.com");
            this.fillPassword("password1");
        };
        this.forAdmin = function() {
            this.fillEmail("dperez4@home.pl");
            this.fillPassword("password1");
        };
    };
    module.exports = login;
})();