define([], function() {

  describe('tests', function() {

    var $compile;
    var $rootScope;
    var $timeout;

    beforeEach(function() {
      module('zivApp');

      module(function($provide) {
        $provide.factory('filterService', function() {
          return {
            filters: [{
              name: '1'
            }, {
              name: '2'
            }, {
              name: '3'
            }, {
              name: '4'
            }, {
              name: '5'
            }, {
              name: '6'
            }, {
              name: '7'
            }, {
              name: '8'
            }]
          };
        });

        $provide.constant('settings', {
          isAnimationEnabled: false
        });
      });
    });
    beforeEach(module('directives/filters-slider/filters-slider-template.html'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_,
      _$templateCache_, _$timeout_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $timeout = _$timeout_;
    }));

    it('move by click at the leftmost and the rightmost', function() {
      var element = angular.element(
        '<ion-view style="width: 200px;">' +
        '<filters-slider></filters-slider>' +
        '</ion-view>'
      );

      var slider = $compile(element)($rootScope);
      $rootScope.$digest();

      angular.element(document.body).append(element);

      document.querySelector('.scroll').style.marginTop = '50px';
      var items = document.body.querySelectorAll('.scroll > span');
      var itemWidth = angular.element(items[0]).css('width');

      var rightmostItem = items[2];
      var rightmostItemRect = rightmostItem.getBoundingClientRect();
      var rightmostItemX = rightmostItemRect.left;
      var rightmostItemY = rightmostItemRect.top;

      function getFilterNameFromDomElement(element) {
        return angular.element(element).data().$scope.filter.name;
      }

      rightmostItem = document.elementFromPoint(rightmostItemX, rightmostItemY);

      angular.element(rightmostItem).triggerHandler('click');
      $timeout.flush();

      rightmostItem = document.elementFromPoint(rightmostItemX, rightmostItemY);
      expect(getFilterNameFromDomElement(rightmostItem)).to.equal('4');
    });
  });
});
