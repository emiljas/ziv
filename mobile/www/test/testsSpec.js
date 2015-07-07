define([], function() {

  describe('tests', function() {

    var $compile, $rootScope;

    beforeEach(module('ionicApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      _$httpBackend_.whenGET('templates/filters-slider.html').respond(200, '<a>dfg</a>');
    }));

    it('real', function() {
      var element = angular.element('<filters-slider></filters-slider>');
      var slider = $compile(element)($rootScope);

      $rootScope.$digest();

      angular.element(element.find('span')[4]).triggerHandler('click');

      expect(angular.element(element.find('span')[4]).hasClass('active')).to.equal(true);


      // console.log(slider.html());
      // console.log(document.querySelectorAll('span').length);
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
