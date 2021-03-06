// Karma configuration
// Generated on Wed Apr 02 2014 16:00:02 GMT+0100 (GMT Summer Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "/src",

        browserNoActivityTimeout: 60000,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],


        // list of files / patterns to load in the browser
        files: [
            "../vendor/angular/angular.js",
            "../vendor/angular-ui-router/release/angular-ui-router.js",
            "../vendor/angular-bootstrap/ui-bootstrap-tpls.js",
            "../vendor/angular-resource/angular-resource.js",
            "../vendor/angular-cookies/angular-cookies.js",
            "../vendor/angular-sanitize/angular-sanitize.js",
            "../vendor/angular-mocks/angular-mocks.js",
            "../vendor/moment/moment.js",
            "../vendor/lokijs/src/lokijs.js",
            "../vendor/lokijs/src/loki-angular.js",
            "../src/app.module.js",
            "../src/app.routes.js",
            "../src/app.constants.js",
            "../src/app/**/*specs.js"
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { '../src/app/**/!(*tests)/*.js': ["coverage"] },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // set in gulp file
        reporters: [],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        coverageReporter: {
            type: "html",
            dir: "../../coverage/",
            includeAllSources: true
        },
        plugins: [
            // these plugins will be require() by Karma
            "karma-teamcity-reporter",
            "karma-jasmine",
            "karma-phantomjs-launcher",
            "karma-spec-reporter",
            "karma-coverage"
        ]
    });
};
