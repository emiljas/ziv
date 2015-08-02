define([], function() {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.editPhoto', {
      url: '/editPhoto?photoUrl=:',
      views: {
        'edit-photo-tab': {
          controller: 'editPhotoController',
          templateUrl: 'templates/editPhoto.html',
          params: ['photoUrl'],
        }
      }
    })
    .state('tabs.choosePhoto', {
      url: '/choosePhoto',
      views: {
        'choose-photo-tab': {
          templateUrl: 'templates/choosePhoto.html'
        }
      }
    })
    .state('tabs.facts2', {
      url: '/facts2',
      views: {
        'home-tab': {
          templateUrl: 'templates/facts2.html'
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'templates/nav-stack.html'
        }
      }
    })
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/tab/choosePhoto');
    // $urlRouterProvider.otherwise('/tab/editPhoto');
  }

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});
