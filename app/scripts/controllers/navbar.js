'use strict';

angular.module('angularLmsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Announcements',
      'link': '/'
    },{
      'title': 'Overview',
      'link': '/overview'
    },{
      'title': 'Sessions',
      'link': '/sessions'
    },{
      'title': 'Discussions',
      'link': '/discussions'
    },{
      'title': 'E-Reserve',
      'link': '/reserve'
    },{
      'title': 'Teams',
      'link': '/teams'
    },{
      'title': 'Resources',
      'link': '/resources'
    },{
      'title': 'VoiceThread',
      'link': '/voicethread'
    }
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
