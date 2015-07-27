define(['lodash'], function(_) {
  var IconsSliderView = ionic.views.View.inherit({
    initialize: function(options) {
      var self = this;
      _.assign(self, options);

      self.$scope.activeFilter = null

      self.$scope.applyFilter = function(id, filter) {
        if (self.$scope.activeFilter) {
          self.$scope.activeFilter.isActive = false;
        }
        self.$scope.activeFilter = filter;
        filter.isActive = true;

        self.$scope.activeFilter.click();

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

  function iconsSliderDirective($ionicScrollDelegate, settings) {
    return {
      restrict: 'E',
      templateUrl: 'js/shared/icons-slider/icons-slider-template.html',
      scope: {
        items: '=items'
      },
      link: function($scope, $element, $attr) {
        var view = new IconsSliderView({
          $scope: $scope,
          element: $element[0],
          $ionicScrollDelegate: $ionicScrollDelegate,
          isAnimationEnabled: settings.isAnimationEnabled
        });
      }
    };
  };

  iconsSliderDirective.$inject = [
    '$ionicScrollDelegate',
    'zivIconsSlider.settings'
  ];

  return iconsSliderDirective;
});
