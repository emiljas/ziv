define([
  'js/edit-photo/photo/photo-directive'
], function(photoDirective) {
  var editPhoto = angular.module('editPhoto', [
  ]);

  //TODO: dwie instancje, rozdzielić?
  editPhoto.controller('editPhotoController', function($scope) {
    var self = this;

    this.init = function(canvas) {
      Caman(canvas, 'img/mountain.jpg', function() {
        caman = this;

        this.resize({
          width: 300,
          height: 300
        });
        this.render();
      });
    };

    $scope.filters = [{
      name: 'sunrise',
      click: function() {
        applyFilter(caman.sunrise.bind(caman));
      }
    }, {
      name: 'nostalgia',
      click: function() {
        applyFilter(caman.nostalgia.bind(caman));
      }
    }, {
      name: 'glowingSun',
      click: function() {
        applyFilter(caman.glowingSun.bind(caman));
      }
    }, {
      name: 'hemingway',
      click: function() {
        applyFilter(caman.hemingway.bind(caman));
      }
    }, {
      name: 'love',
      click: function() {
        applyFilter(caman.love.bind(caman));
      }
    }, {
      name: 'grungy',
      click: function() {
        applyFilter(caman.grungy.bind(caman));
      }
    }, {
      name: 'lomo',
      click: function() {
        applyFilter(caman.lomo.bind(caman));
      }
    }, {
      name: 'oldBoot',
      click: function() {
        applyFilter(caman.oldBoot.bind(caman));
      }
    }];

    function applyFilter(filterCallback) {
      caman.revert(false);
      filterCallback();
      caman.render();
    }
  });

  editPhoto.directive('zivPhoto', photoDirective);
});
