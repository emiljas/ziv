define([
 'js/config',
 'js/shared/shared',
 'js/edit-photo/edit-photo'
], function(
  config
  ) {
  var app = {
    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
      app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
      }
  };

  app.initialize();

  var zivApp = angular.module('zivApp', [
        'ionic',
        'ngCordova',
        'shared',
        'editPhoto'
      ]);

  zivApp.config(config);

  angular.module('zivApp').controller('HomeTabCtrl', function($scope) {

  });

  // .controller('CameraController', function($cordovaFileTransfer) {
    // setTimeout(function() {
    //   navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
    // }, 2000);
    //
    // function onSuccess(imageUrl) {
    //   document.querySelector('img').src = imageUrl;
    //
    //   console.log('HERE');
    //
    //   $cordovaFileTransfer.upload('http://10.0.3.2:3000/api/Photos/upload', imageUrl)
    //   .then(function(result) {
    //     console.log('fileupload', 'success', arguments);
    //   }, function(err) {
    //     console.log('fileupload', 'error', arguments);
    //   }, function (progress) {
    //     console.log('fileupload', arguments);
    //   });
    // }
    //
    // function onFail(event) {
    //   console.log(event);
    // }
  // });

  return zivApp;
});
