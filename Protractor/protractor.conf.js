// A reference configuration file.
exports.config = {

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: ['app/e2e/*spec.js'],

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js

    //multiCapabilities: [
    //  { 'browserName': 'chrome' },
    //  { 'browserName': 'firefox' }
    //],

    /* File path for Selenium and chromeDriver applications */
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
    chromeDriver: './node_modules/protractor/selenium/chromedriver.exe',
    allScriptsTimeout: 500000,
    multiCapabilities: [{
        browserName: 'chrome', 'chromeOptions': {
            args: ['--test-type', '--lang=en-GB']
        }
    }],
    framework: "jasmine2",
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of

    rootElement: 'body',

    onPrepare: function () {

        global.EC = protractor.ExpectedConditions;

        browser.driver.manage().window().maximize();

        var reporters = require('jasmine-reporters');

        if (process.env.TEAMCITY_VERSION) {
            jasmine.getEnv().addReporter(new reporters.TeamCityReporter());
        } else {
            jasmine.getEnv().addReporter(new reporters.TerminalReporter({
                verbosity: 3,
                color: true,
                showStack: true
            }));
        }
    }
};
