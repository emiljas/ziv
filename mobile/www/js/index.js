var app = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  receivedEvent: function(id) {
    }
};

app.initialize();

var angularApp = angular.module('zivApp', [
      'ionic', 'ngCordova', 'services', 'directives',
    ]);

angularApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: '/facts',
      views: {
        'home-tab': {
          templateUrl: 'templates/facts.html'
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

  $urlRouterProvider.otherwise('/tab/home');
})

.controller('HomeTabCtrl', function($scope) {

  var caman;
  var canvas = document.getElementById('editCanvas');
  Caman(canvas, 'img/mountain.jpg', function() {
    caman = this;

    this.resize({
      width: 100,
      height: 100
    });
    this.render();
  });

  $scope.applyFilter = function(filter) {
    caman.revert();
    if (filter.name == 'sunrise') {
      caman.sunrise();
    } else if (filter.name == 'nostalgia') {
      caman.nostalgia();
    } else if (filter.name == 'glowingSun') {
      caman.glowingSun();
    } else if (filter.name == 'hemingway') {
      caman.hemingway();
    } else if (filter.name == 'love') {
      caman.love();
    } else if (filter.name == 'grungy') {
      caman.grungy();
    } else if (filter.name == 'lomo') {
      caman.lomo();
    } else if (filter.name == 'oldBoot') {
      caman.oldBoot();
    }
    caman.render();
  };

  $scope.filters = [{
    name: 'sunrise'
  }, {
    name: 'nostalgia'
  }, {
    name: 'glowingSun'
  }, {
    name: 'hemingway'
  }, {
    name: 'love'
  }, {
    name: 'grungy'
  }, {
    name: 'lomo'
  }, {
    name: 'oldBoot'
  }];
})

.controller('CameraController', function($cordovaFileTransfer) {
  // setTimeout(function() {
  //   navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
  // }, 2000);
  //
  // function onSuccess(imageUrl) {
  //   document.querySelector('img').src = imageUrl;
  //
  //   console.log('HERE');
  //
  //   $cordovaFileTransfer.upload('http://10.0.3.2:3000/api/Photos/upload', imageUrl)
  //   .then(function(result) {
  //     console.log('fileupload', 'success', arguments);
  //   }, function(err) {
  //     console.log('fileupload', 'error', arguments);
  //   }, function (progress) {
  //     console.log('fileupload', arguments);
  //   });
  // }
  //
  // function onFail(event) {
  //   console.log(event);
  // }
});
