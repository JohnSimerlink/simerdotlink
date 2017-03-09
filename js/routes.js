angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.leaderboardPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/leaderboardPage.html',
        controller: 'leaderboardPageCtrl'
      }
    }
  })

  .state('tabsController.dojoPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/dojoPage.html',
        controller: 'dojoPageCtrl'
      }
    }
  })

  .state('tabsController.progressPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/progressPage.html',
        controller: 'progressPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});