define([
  'js/edit-photo/photo/photo-directive',
  'lodash'
], function(photoDirective, _) {
  var editPhoto = angular.module('editPhoto', [
  ]);

  editPhoto.factory('camanService', function() {
    return new CamanService();
  });

  function CamanService() {
    var self = this;

    self.setCanvas = function(canvas) {
      self.isRefreshed = false;
      self.photoUrl = null;

      self.canvas = document.createElement('canvas');
      self.originalCanvas = canvas;
    };

    self.refresh = function(width) {
      console.log(width);

      self.isRefreshed = true;
      var context = self.canvas.getContext('2d');
      self.canvas.width = width;
      self.canvas.height = width;
      context.clearRect(0, 0, self.canvas.width, self.canvas.height);
      context.drawImage(self.originalCanvas, 0, 0, width, width);
      self.drawIf();
    };

    self.drawIf = function() {
      if (self.isRefreshed && self.photoUrl) {
        loadImage(self.photoUrl, initCaman);
      }
    };

    self.drawImage = function(photoUrl) {
      self.photoUrl = photoUrl;
      self.drawIf();
    };

    function loadImage(source, callback) {
      callback();
    }

    function initCaman() {
      Caman(self.canvas, function() {
        self.caman = this;
        this.reloadCanvasData();
        this.render();
      });
    };

    self.getCanvas = function() {
      return self.canvas;
    };

    self.applyFilter = function(methodName) {
      self.caman.revert(false);
      self.caman[methodName]();
      self.caman.render();
    };
  }

  editPhoto.controller('photoController', function(camanService, $scope) {
    var self = this;

    self.getCanvas = function() {
      return camanService.getCanvas();
    };

    self.refresh = function(width) {
      camanService.refresh(width);
    };
  });

  editPhoto.controller('editPhotoController', function($scope, $stateParams, camanService) {
    var self = this;

    self.camanService = camanService;
    camanService.drawImage($stateParams.photoUrl);

    $scope.filters = [{
      name: 'sunrise',
      click: function() {
        applyFilter('sunrise');
      }
    }, {
      name: 'nostalgia',
      click: function() {
        applyFilter('nostalgia');
      }
    }, {
      name: 'glowingSun',
      click: function() {
        applyFilter('glowingSun');
      }
    }, {
      name: 'hemingway',
      click: function() {
        applyFilter('hemingway');
      }
    }, {
      name: 'love',
      click: function() {
        applyFilter('love');
      }
    }, {
      name: 'grungy',
      click: function() {
        applyFilter('grungy');
      }
    }, {
      name: 'lomo',
      click: function() {
        applyFilter('lomo');
      }
    }, {
      name: 'oldBoot',
      click: function() {
        applyFilter('oldBoot');
      }
    }];

    function applyFilter(methodName) {
      self.camanService.applyFilter(methodName);
    };
  });

  editPhoto.directive('zivPhoto', photoDirective);
});
