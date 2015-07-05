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
      }];

      // options.$ionicScrollDelegate.scrollTo(10);

      // setInterval(function() {
      //   console.log(options.$ionicScrollDelegate.getScrollPosition());
      // }, 1000);

      options.$scope.applyFilter = function(id, filter) {
        var parentRect = document.getElementById('filtersParent').getBoundingClientRect();
        var rect = document.getElementById(id).getBoundingClientRect();

        // console.log(parentRect.left - rect.left);

        var offset = parentRect.left - rect.left;
        var x = parentRect.width - (parentRect.left + rect.left + rect.width);
        if(offset >= 0) {
          options.$ionicScrollDelegate.scrollBy(-offset - 2*rect.width + rect.width, 0, true);
        }
        else if(x < 0) {
          options.$ionicScrollDelegate.scrollBy(-x + rect.width, 0, true);
        }

        // var sliderWidth = parentRect.width;
        // var itemWidth = rect.width;

        // var x = parentRect.width - (parentRect.left + rect.left + rect.width);
        //
        // options.$ionicScrollDelegate.scrollBy(-x + rect.width, 0, true);


        // console.log(parentRect.left, rect.left);
        // options.$ionicScrollDelegate.scrollBy(10, 0, true);

        // console.log(id);
        // options.$location.hash(id);
        // options.$ionicScrollDelegate.anchorScroll(true);

        // console.log(id);
        // var id = $event.target.getAttribute('id');
        // console.log(id);
      };

      // function closest(el, sel) {
      //     if (el != null)
      //         return el.matches(sel) ? el
      //             : (el.querySelector(sel)
      //                 || closest(el.parentNode, sel));
      // }
      //
      // ionic.onGesture('tap', function(e) {
      //   var filterIconElement = e.target;
      //   closest(filterIconElement, '')
      //
      //   // options.$ionicScrollDelegate.scrollBy(20);
      //
      //   // console.log(options.element);
      // }, options.element);


      // setTimeout(function() {


        // console.log('HERE');
        //
        // var spans = options.element.querySelectorAll('span');
        // console.log(spans);
        // spans[6].setAttribute('id', 'span6');
        //
        // options.$location.hash("span6");
        // // window.location.hash = "span6";
        //
        // options.$ionicScrollDelegate.anchorScroll(true);







      // }, 2000);
    }
  });

  angular.module('ui.filtersSlider', ['ionic'])
    .directive('filtersSlider', ['$ionicScrollDelegate', '$location', function($ionicScrollDelegate, $location) {
      return {
        restrict: 'E',
        templateUrl: 'templates/filters-slider.html',
        link: function($scope, $element, $attr) {
          // console.log('link', $element);
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
