define(['js/app', 'lodash'], function(app, _) {

  var IconsSliderView = ionic.views.View.inherit({
    initialize: function(options) {
      var self = this;
      _.assign(self, options);

      // self.$scope.filters = self.filterService.getFilters();

      self.$scope.activeFilter = null

      self.$scope.applyFilter = function(id, filter) {
        if (self.$scope.activeFilter) {
          self.$scope.activeFilter.isActive = false;
        }
        self.$scope.activeFilter = filter;
        filter.isActive = true;

        var filtersParent = self.element.querySelector('.filtersParent');
        var parentRect = filtersParent.getBoundingClientRect();
        var filterEl = self.element.querySelector('#' + id);
        var rect = filterEl.getBoundingClientRect();

        var delegateHandle = filtersParent.getAttribute('delegate-handle');
        var scrollDelegate =
          self.$ionicScrollDelegate.$getByHandle(delegateHandle);

        var forwardDistance = -parentRect.width - parentRect.left +
                              rect.left + 2 * rect.width;
        var backwardDistance = -parentRect.left + rect.left - rect.width;

        if (forwardDistance > 0) {
          scrollDelegate.scrollBy(forwardDistance, 0, self.isAnimationEnabled);
        } else if (backwardDistance < 0) {
          scrollDelegate.scrollBy(backwardDistance, 0, self.isAnimationEnabled);
        }
      };
    }
  });

  function iconsSliderDirective($ionicScrollDelegate,
    filterService, settings) {
    return {
      restrict: 'E',
      templateUrl: 'js/shared/icons-slider/icons-slider-template.html',
      scope: true,
      link: function($scope, $element, $attr) {
        var view = new IconsSliderView({
          $scope: $scope,
          filterService: filterService,
          element: $element[0],
          $ionicScrollDelegate: $ionicScrollDelegate,
          isAnimationEnabled: settings.isAnimationEnabled
        });
      }
    };
  };

  return app
  .directive('zivIconsSlider', [
    '$ionicScrollDelegate',
    'filterService',
    'settings', iconsSliderDirective])
  .constant('settings', {
    isAnimationEnabled: true
  });
});
