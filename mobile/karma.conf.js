// Karma configuration
// Generated on Mon Jul 06 2015 23:26:30 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'www/css/index.css',
      'www/lib/ionic/release/css/ionic.css',

      // 'www/lib/angular/angular.js',
      // 'www/lib/ngCordova/dist/ng-cordova.js',
      // 'www/lib/angular-animate/angular-animate.js',
      // 'www/lib/angular-sanitize/angular-sanitize.js',
      // 'www/lib/angular-ui-router/release/angular-ui-router.js',
      // 'www/lib/ionic/release/js/ionic.js',
      // 'www/lib/ionic/release/js/ionic-angular.js',
      'www/lib/ionic/release/js/ionic.bundle.js',
      'www/lib/ngCordova/dist/ng-cordova.js',

      'www/js/index.js',
      'www/js/services.js',
      'www/directives/filters-slider/filters-slider-directive.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/directives/**/*.html',

      'test-main.js',
      {pattern: 'www/js/*.js', included: false},
      {pattern: 'www/lib/**/*.js', included: false},
      {pattern: 'www/test/*.js', included: false}
    ],

    // list of files to exclude
    exclude: [
    ],

    browserNoActivityTimeout: 240000,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/directives/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'www/',
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

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
