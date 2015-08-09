define([
 'js/config',
 'js/shared/shared',
 'js/edit-photo/edit-photo',
 'js/polyfill/canvasToBlob'
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
        'editPhoto',
        'jrCrop'
      ]);

  zivApp.config(config);

  angular.module('zivApp').controller('HomeTabCtrl', function($scope) {
  });

  zivApp.controller('CameraController',
  function($scope,
    $cordovaCamera,
    $cordovaFileTransfer,
    $state,
    $jrCrop,
    camanService) {
    $scope.getPictureFromCamera = function() {
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function(imageUrl) {
        $jrCrop.crop({
          url: imageUrl,
          width: 300,
          height: 300
        }).then(function(canvas) {
          camanService.setCanvas(canvas);
          $state.go('tabs.editPhoto', {photoUrl: imageUrl});
        }, function() {
        });

        upload(imageUrl);

      }, function(err) {
        console.log(err);
      });
    };

    $scope.getPictureFromAlbum = function() {
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
        correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function(imageUrl) {
        $jrCrop.crop({
          url: imageUrl,
          width: 300,
          height: 300
        }).then(function(canvas) {
          camanService.setCanvas(canvas);
          $state.go('tabs.editPhoto', {photoUrl: imageUrl});
        }, function() {
        });

        upload(imageUrl);

      }, function(err) {
        console.log(err);
      });
    };

    function upload(imageUrl) {
      var url = 'http://192.168.1.198:3000/api/Photos/upload';
      $cordovaFileTransfer.upload(url, imageUrl)
      .then(function() {
        console.log('upload success');
      })
      .catch(function() {
        console.log(arguments);
      });
    }

    // function onSuccess(imageUrl) {
    //   $scope.image = imageUrl;
    //   //document.querySelector('img').src = imageUrl;
    //
    //   // $cordovaFileTransfer.upload('http://10.0.3.2:3000/api/Photos/upload', imageUrl)
    //   // .then(function(result) {
    //   //   console.log('fileupload', 'success', arguments);
    //   // }, function(err) {
    //   //   console.log('fileupload', 'error', arguments);
    //   // }, function (progress) {
    //   //   console.log('fileupload', arguments);
    //   // });
    // }
    //
    // function onFail(event) {
    //   console.log(event);
    // }
  });

  return zivApp;
});
