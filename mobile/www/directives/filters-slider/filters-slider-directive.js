(function(ionic) {
  var FiltersSliderView = ionic.views.View.inherit({
    initialize: function(options) {
      options.$scope.filters = options.filterService.filters;

      options.$scope.activeFilter = null

      options.$scope.applyFilter = function(id, filter) {
        if (options.$scope.activeFilter) {
          options.$scope.activeFilter.isActive = false;
        }
        options.$scope.activeFilter = filter;
        filter.isActive = true;

        var filtersParent = options.element.querySelector('#filtersParent');
        var parentRect = filtersParent.getBoundingClientRect();
        var rect = options.element.querySelector('#' + id)
                                  .getBoundingClientRect();

        var offset = parentRect.left - rect.left;
        var offset2 = offset + rect.width;
        var x = parentRect.width - (parentRect.left + rect.left + rect.width);
        var x2 = x - rect.width;

        var scrollD = options.$ionicScrollDelegate.$getByHandle('slider');

        if (offset >= 0) {
          scrollD.scrollBy(-offset - 2 * rect.width + rect.width, 0,
              options.isAnimationEnabled);
        } else if (offset2 >= 0) {
          scrollD.scrollBy(-offset - 2 * rect.width + rect.width, 0,
              options.isAnimationEnabled);
        } else if (x < 0) {
          scrollD.scrollBy(-x + rect.width - 2 * parentRect.left, 0,
              options.isAnimationEnabled);
        } else if (x2 < 0) {
          scrollD.scrollBy(-x + rect.width - 2 * parentRect.left, 0,
              options.isAnimationEnabled);
        }
      };
    }
  });

  var directives = angular.module('directives', []);

  directives
  .directive('filtersSlider', ['$ionicScrollDelegate', '$location',
  'filterService', 'settings',
  function($ionicScrollDelegate, $location, filterService, settings) {
    return {
      restrict: 'E',
      templateUrl: 'directives/filters-slider/filters-slider-template.html',
      link: function($scope, $element, $attr) {
        var view = new FiltersSliderView({
          $scope: $scope,
          filterService: filterService,
          element: $element[0],
          $ionicScrollDelegate: $ionicScrollDelegate,
          $location: $location,
          isAnimationEnabled: settings.isAnimationEnabled
        });
      }
    };
  }])
  .constant('settings', {
    isAnimationEnabled: true
  });

})(window.ionic);
