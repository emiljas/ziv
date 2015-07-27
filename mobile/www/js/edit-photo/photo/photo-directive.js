define(function() {

  // function d(element, $scope) {
  //   var previewImg = element.querySelector('.ziv-preview');
  //
  //   // var caman;
  //   var canvas = element.querySelector('.ziv-canvas');
  //
  //   $scope.$watch('filter', function() {
  //     setTimeout(function() {
  //
  //     canvas = element.querySelector('.ziv-canvas');
  //     previewImg.src = canvas.toDataURL('image/png');
  //   }, 1000)
  //   });

    // Caman(canvas, 'img/mountain.jpg', function() {
    //   caman = this;
    //
    //   this.resize({
    //     width: 100,
    //     height: 100
    //   });
    //   this.render();
    //
    //   previewImg.src = canvas.toDataURL("image/png");
    // });
  // }

  function photoDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/edit-photo/photo/photo-template.html',
      controller: 'editPhotoController',
      scope: {
        filter: '=filter'
      },
      link: function($scope, $element, $attr, editPhotoController) {
        editPhotoController.init($element[0].querySelector('.ziv-canvas'));
        // var view = new d($element[0], $scope);

        // var view = new IconsSliderView({
        //   $scope: $scope,
        //   element: $element[0],
        //   $ionicScrollDelegate: $ionicScrollDelegate,
        //   isAnimationEnabled: settings.isAnimationEnabled
        // });
      }
    };
  }

  return photoDirective;

});
