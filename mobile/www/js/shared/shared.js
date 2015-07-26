define([
  'js/shared/icons-slider/icons-slider-directive'
], function(
  iconsSliderDirective
) {
  var shared = angular.module('shared', [
    'ionic'
  ]);

  shared.directive('zivIconsSlider', iconsSliderDirective)
  .constant('zivIconsSlider.settings', {
    isAnimationEnabled: true
  });
});
