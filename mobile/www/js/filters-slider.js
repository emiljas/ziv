(function(ionic) {
  var FiltersSliderView = ionic.views.View.inherit({
    initialize: function(options) {

      options.$scope.filters = [{
        name: "Xunrise"
      }, {
        name: "nostalgia"
      }, {
        name: "glowingSun"
      }, {
        name: "hemingway"
      }, {
        name: "love"
      }, {
        name: "grungy"
      }, {
        name: "lomo"
      }, {
        name: "oldBoot"
      }, {
        name: "jeszcze jeden"
      }, {
        name: "i jeszcze raz"
      }, {
        name: "niech żyje nam"
      }, {
        name: "x"
      }, {
        name: "y"
      }, {
        name: "z"
      }];

      options.$scope.activeFilter = null

      options.$scope.applyFilter = function(id, filter) {
        if(options.$scope.activeFilter)
          options.$scope.activeFilter.isActive = false;
        options.$scope.activeFilter = filter;
        filter.isActive = true;

        var parentRect = document.getElementById('filtersParent').getBoundingClientRect();
        var rect = document.getElementById(id).getBoundingClientRect();

        var offset = parentRect.left - rect.left;
        var offset2 = offset + rect.width;
        var x = parentRect.width - (parentRect.left + rect.left + rect.width);
        var x2 = x - rect.width;
        
        if(offset >= 0) {
          options.$ionicScrollDelegate.scrollBy(-offset - 2*rect.width + rect.width, 0, true);
        }
        else if(offset2 >= 0) {
          options.$ionicScrollDelegate.scrollBy(-offset - 2*rect.width + rect.width, 0, true);
        }
        else if(x < 0) {
          options.$ionicScrollDelegate.scrollBy(-x + rect.width - 2*parentRect.left, 0, true);
        }
        else if(x2 < 0) {
          options.$ionicScrollDelegate.scrollBy(-x + rect.width - 2*parentRect.left, 0, true);
        }
      };
    }
  });

  angular.module('ui.filtersSlider', ['ionic'])
    .directive('filtersSlider', ['$ionicScrollDelegate', '$location', function($ionicScrollDelegate, $location) {
      return {
        restrict: 'E',
        templateUrl: 'templates/filters-slider.html',
        link: function($scope, $element, $attr) {
          var view = new FiltersSliderView({
            $scope: $scope,
            element: $element[0],
            $ionicScrollDelegate: $ionicScrollDelegate,
            $location: $location
          });
        }
      };
    }]);

})(window.ionic);
