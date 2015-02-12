'use strict';

angular.module('gearBox', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'dashboard.html'
      //controller: 'MainCtrl'
    })
    .when('/messages', {
      templateUrl: 'messages.html'
      //controller: 'LoginCtrl'
    })
    .when('/profile', {
      templateUrl: 'profile.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});