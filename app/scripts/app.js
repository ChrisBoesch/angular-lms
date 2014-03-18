'use strict';

var app = angular.module('angularLmsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/others', {
      templateUrl: './views/announcements.html'
    })
    .when('/', {
      templateUrl: './views/discussions.html',
      controller: 'DiscussionCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });