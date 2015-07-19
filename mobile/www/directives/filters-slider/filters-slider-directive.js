(function(ionic) {
  var FiltersSliderView = ionic.views.View.inherit({
    initialize: function(options) {
      this.element = options.element;

      options.$scope.r = Math.random();

      options.$scope.filters = options.filterService.getFilters();

      options.$scope.activeFilter = null

      options.$scope.applyFilter = function(id, filter) {
        if (options.$scope.activeFilter) {
          options.$scope.activeFilter.isActive = false;
        }
        options.$scope.activeFilter = filter;
        filter.isActive = true;

        var filtersParent = options.element.querySelector('.filtersParent');
        var parentRect = filtersParent.getBoundingClientRect();
        var rect = options.element.querySelector('#' + id)
                                  .getBoundingClientRect();

        var delegateHandle = filtersParent.getAttribute('delegate-handle');
        var scrollDelegate =
          options.$ionicScrollDelegate.$getByHandle(delegateHandle);


        // var offset = parentRect.left - rect.left;
        var offset2 = parentRect.left - rect.left + rect.width;
        var x2 = parentRect.width - (parentRect.left + rect.left + rect.width) - rect.width;

        /*if (offset >= 0) {
          console.log('1', offset);
          scrollDelegate.scrollBy(-offset - 2 * rect.width + rect.width, 0,
              options.isAnimationEnabled);
        } else*/ if (offset2 >= 0) {
          console.log('2', offset2);
          scrollDelegate.scrollBy(-(parentRect.left - rect.left) - 2 * rect.width + rect.width, 0,
              options.isAnimationEnabled);
        }  else if (x2 < 0) {
          console.log('4', x2);
          scrollDelegate.scrollBy(-(parentRect.width - (parentRect.left + rect.left + rect.width)) + rect.width - 2 * parentRect.left, 0,
              options.isAnimationEnabled);
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

})(window.ionic);
