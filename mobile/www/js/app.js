requirejs.config({
  baseUrl: '',
  paths: {
    app: 'js'
  }/*,
  shim: {
    'ionic': {
      exports: 'lib/ionic/release/js/ionic.bundle.js'
    }
  }*/
});

requirejs(['app/main']);
