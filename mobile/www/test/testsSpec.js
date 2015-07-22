define(['js/index', 'directives/filters-slider/filters-slider-directive'], function() {

  describe('tests', function() {

    var $compile;
    var scope;
    var $timeout;
    var $ionicScrollDelegate;

    beforeEach(function() {
      var app = angular.mock.module('zivApp');
      // console.log(app);
      // var app = module('zivApp');
      // var app = module('zivApp', []);
      // app.service('$state', function() { return {} });

      module(function($provide) {
        $provide.factory('filterService', function() {
          return {
            getFilters: function() {
              return [
                {name: '1'},
                {name: '2'},
                {name: '3'},
                {name: '4'},
                {name: '5'},
                {name: '6'}
              ];
            }
          };
        });

        // $provide.provider('$stateProvider', {
        //   $get: function() {
        //     return {};
        //   }
        // });

        $provide.constant('settings', {
          isAnimationEnabled: false
        });
      });
    });

    beforeEach(module(function($provide) {
  $provide.value('$ionicTemplateCache', function(){} );
}));

beforeEach(module(function($urlRouterProvider) {
  $urlRouterProvider.deferIntercept();
}));

    beforeEach(
      module('directives/filters-slider/filters-slider-template.html')
    );

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_,
      _$templateCache_, _$timeout_, _$ionicScrollDelegate_, _$state_) {
      $compile = _$compile_;
      scope = _$rootScope_.$new();
      $timeout = _$timeout_;
      $ionicScrollDelegate = _$ionicScrollDelegate_;

      // console.log(_$state_);
    }));

    afterEach(function() {
      angular.element(document.querySelector('ion-view')).remove();
    });

    var ITEM_WIDTH = 80;
    var SLIDER_WIDTH = 4 * ITEM_WIDTH;
    var HTML =
      '<ion-view>' +
        '<filters-slider></filters-slider>' +
      '</ion-view>';

    it('click on before last visible item move slider forward', function() {
      test({
        scrollPosition: ITEM_WIDTH - 1,
        clickedItemPosition: 4,
        expectedScrollPosition: ITEM_WIDTH
      });
    });

    it('click on before before last visible item DONT move slider forward', function() {
      test({
        scrollPosition: ITEM_WIDTH,
        clickedItemPosition: 4,
        expectedScrollPosition: ITEM_WIDTH
      });
    });

    it('click on second visible item move slider backward', function() {
      test({
        scrollPosition: ITEM_WIDTH + 1,
        clickedItemPosition: 3,
        expectedScrollPosition: ITEM_WIDTH
      });
    });

    it('click on third visible item DONT move slider backward', function() {
      test({
        scrollPosition: ITEM_WIDTH,
        clickedItemPosition: 3,
        expectedScrollPosition: ITEM_WIDTH
      });
    });

    //args: scrollPosition, clickedItemPosition, expectedScrollPosition
    function test(args) {
      createSliderView();
      var ionView = document.querySelector('ion-view');
      ionView.style.margin = "5px";
      ionView.style.width = SLIDER_WIDTH + 'px';
      scrollTo(args.scrollPosition);
      expectScrollPosition(args.scrollPosition);
      clickItem(args.clickedItemPosition);
      expectScrollPosition(args.expectedScrollPosition);
    };

    function createSliderView() {
      var element = angular.element(HTML);
      var slider = $compile(element)(scope);
      scope.$digest();
      angular.element(document.body).append(element);
    }

    function scrollTo(position) {
      $ionicScrollDelegate.scrollBy(position);
      flushTimeout();
    }

    function clickItem(position) {
      var items = document.body.querySelectorAll('.scroll > span');
      var clickedItem = items[position - 1];
      angular.element(clickedItem).triggerHandler('click');
      flushTimeout();
    }

    function expectScrollPosition(expectedPosition) {
      var position = $ionicScrollDelegate.getScrollPosition().left;
      expect(position).to.equal(expectedPosition);
    }

    function flushTimeout() {
      try {
        $timeout.flush();
      }
      catch (err) {
      }
    }

    function getFilterNameFromDomElement(element) {
      return angular.element(element).data().$scope.filter.name;
    }

  });

});
