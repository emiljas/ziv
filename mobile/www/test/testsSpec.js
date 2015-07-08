define([], function() {

  describe('tests', function() {

    var $compile, $rootScope;

    beforeEach(module('ionicApp'));
    beforeEach(module('templates/filters-slider.html'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$templateCache_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));


    it('add active class on click', function() {
      var element = angular.element('<filters-slider></filters-slider>');
      var slider = $compile(element)($rootScope);
      $rootScope.$digest();

      angular.element(element.find('span')[4]).triggerHandler('click');

      expect(angular.element(element.find('span')[4]).hasClass('active')).to.equal(true);


      // console.log(slider.html());
      // console.log(document.querySelectorAll('span').length);
    });

    it('move by click at the leftmost and the rightmost', function() {
      var element = angular.element('<filters-slider></filters-slider>');
      var slider = $compile(element)($rootScope);
      $rootScope.$digest();

      // console.log(element.childNotes.length);
      var items = element[0].querySelectorAll('.scroll > span');

      var itemWidth = angular.element(items[0]).css('width');

      element.css({
        width: parseInt(itemWidth) * 4
      })

      expect(angular.element(items[3]).hasClass('active')).to.equal(false);
      angular.element(items[3]).triggerHandler('click');
      expect(angular.element(items[3]).hasClass('active')).to.equal(true);

      // angular.element(element.find('span')[4]).triggerHandler('click');
      // angular.element(element.find('span')[5]).triggerHandler('click');
      // angular.element(element.find('span')[6]).triggerHandler('click');
      // expect(angular.element(element.find('span')[4]).hasClass('active')).to.equal(true);
    });



    // it('Replaces the element with the appropriate content', function() {
    //   // Compile a piece of HTML containing the directive
    //   var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
    //   // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    //   $rootScope.$digest();
    //   // Check that the compiled element contains the templated content
    //
    //   expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
    // });


    it('first', function() {

      "a".should.equal("a");
      // expect(true).to.equal(false);


    });


  });

});
