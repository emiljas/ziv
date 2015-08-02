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

    // self.createCanvas = function() {
    //   self.canvas = document.createElement('canvas');
    //   self.canvas.width = 300;
    //   self.canvas.height = 300;
    // };

    self.setCanvas = function(canvas) {
      self.canvas = document.createElement('canvas');
      self.canvas.width = 300;
      self.canvas.height = 300;


      // console.log(canvas.toDataURL());
      self.canvas.getContext('2d').drawImage(canvas, 0, 0, 300, 300);

      // self.canvas = canvas;
      // self.canvas.width = 300;
      // self.canvas.height = 300;
    };

    self.drawImage = function(photoUrl) {
      loadImage(photoUrl, initCaman);
    };

    function loadImage(source, callback) {
      // var context = self.canvas.getContext('2d');
      // var image = new Image();
      // image.onload = function() {
      //   context.drawImage(image, 0, 0, self.canvas.width, self.canvas.height);
      //   callback();
      // };
      // image.src = source;
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
  });

  editPhoto.controller('editPhotoController', function($scope, $stateParams, camanService) {
    var self = this;

    // camanService.createCanvas();

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
