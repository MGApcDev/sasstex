// Karma configuration
// Generated on Mon Jul 18 2016 14:06:44 GMT-0500 (Central Daylight Time (Mexico))

module.exports = function(config) {

    var configuration = {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // dependencies
            {pattern: 'src/scripts/build/*.js', watched: true, included: true, served: false},
            {pattern: 'src/styles/build/*.css', watched: true, included: true, served: false},
            {pattern: 'test/app.test.js', watched: true, included: true, served: false},
            {pattern: 'test/app.html', watched: true, included: true, served: true},

            // tests
            // 'test/app.html'
        ],
        proxies: {
          //"/": "http://localhost:9876/"
        },

        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


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
        browsers: ['Chrome'],

        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    // Change some config (Chrome to Chrome Canary) if Running on TravisCI.
    // See: http://stackoverflow.com/questions/19255976/how-to-make-travis-execute-angular-tests-on-chrome-please-set-env-variable-chr
    if(process.env.TRAVIS){
        configuration.browsers = ['Chrome_travis_ci'];
        configuration.singleRun = true;
    }


    config.set(configuration);
};
