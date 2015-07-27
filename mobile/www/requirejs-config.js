if (window.__karma__) {
  var allTestFiles = [];
  var TEST_REGEXP = /(spec)\.js$/i;

  // Get a list of all the test files to include
  Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
      // Normalize paths to RequireJS module names.
      // If you require sub-dependencies of test files to be loaded as-is
      // (requiring file extension)
      // then do not normalize the paths
      var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
      allTestFiles.push(normalizedTestModule);
    }
  });

  requirejs.config({
    // Karma serves files under /base, which is the basePath from
    // your config file
    baseUrl: '/base',

    paths: {
      lodash: 'lib/lodash/lodash'
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
  });
}

requirejs.config({
  baseUrl: window.__karma__ ? '/base' : '',
  paths: {
    lodash: 'lib/lodash/lodash'
  }
});

if (!window.__karma__) {
  requirejs(['js/main']);
}
