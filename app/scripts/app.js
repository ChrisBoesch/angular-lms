'use strict';

var app = angular.module('angularLmsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/announcements'
    })
    .when('/discussions', {
      templateUrl: 'partials/discussions',
      controller: 'DiscussionCtrl'
    })
    .otherwise({
      redirectTo: '/discussions'
    });

    $locationProvider.html5Mode(true);
  });