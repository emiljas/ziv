define(function() {

  function photoDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/edit-photo/photo/photo-template.html',
      controller: 'photoController',
      scope: {
      },
      link: function($scope, $element, $attr, photoController) {
        var div = $element[0].querySelector('.ziv-canvas-container');
        div.appendChild(photoController.getCanvas());
      }
    };
  }

  return photoDirective;

});
