define(['lib/lodash/lodash'], function(_) {
  var FiltersSliderView = ionic.views.View.inherit({
    self: this,

    initialize: function(options) {
      _.assign(self, options);

      $scope.filters = self.filterService.getFilters();

      $scope.activeFilter = null

      $scope.applyFilter = function(id, filter) {
        if ($scope.activeFilter) {
          $scope.activeFilter.isActive = false;
        }
        $scope.activeFilter = filter;
        filter.isActive = true;

        var filtersParent = element.querySelector('.filtersParent');
        var parentRect = filtersParent.getBoundingClientRect();
        var filterEl = element.querySelector('#' + id);
        var rect = filterEl.getBoundingClientRect();

        var delegateHandle = filtersParent.getAttribute('delegate-handle');
        var scrollDelegate = $ionicScrollDelegate.$getByHandle(delegateHandle);

        var forwardDistance = -parentRect.width - parentRect.left +
                              rect.left + 2 * rect.width;
        var backwardDistance = -parentRect.left + rect.left - rect.width;

        if (forwardDistance > 0) {
          scrollDelegate.scrollBy(forwardDistance, 0, isAnimationEnabled);
        } else if (backwardDistance < 0) {
          scrollDelegate.scrollBy(backwardDistance, 0, isAnimationEnabled);
        }
      };
    }
  });

  var directives = angular.module('directives', []);

  directives
  .directive('filtersSlider', ['$ionicScrollDelegate',
  'filterService', 'settings',
  function($ionicScrollDelegate, filterService, settings) {
    return {
      restrict: 'E',
      templateUrl: 'directives/filters-slider/filters-slider-template.html',
      scope: true,
      link: function($scope, $element, $attr) {
        var view = new FiltersSliderView({
          $scope: $scope,
          filterService: filterService,
          element: $element[0],
          $ionicScrollDelegate: $ionicScrollDelegate,
          isAnimationEnabled: settings.isAnimationEnabled
        });
      }
    };
  }])
  .constant('settings', {
    isAnimationEnabled: true
  });
});
