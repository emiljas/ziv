define(function() {

  function photoDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/edit-photo/photo/photo-template.html',
      controller: 'photoController',
      scope: {
      },
      link: function($scope, $element, $attr, photoController) {
        setTimeout(function() {
          var container = $element[0].querySelector('.ziv-canvas-container');
          var canvas = photoController.getCanvas();

          container.appendChild(canvas);
          var width = container.offsetWidth;
          var height = container.offsetHeight;
          console.log(width, height, container.getBoundingClientRect(), container);

          photoController.refresh(Math.min(width, height));
        }, 0);
      }
    };
  }

  return photoDirective;

});
