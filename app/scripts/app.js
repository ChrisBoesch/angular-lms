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
      templateUrl: 'partials/announcements'
    })
    .when('/', {
      templateUrl: 'partials/discussions',
      controller: 'DiscussionCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });