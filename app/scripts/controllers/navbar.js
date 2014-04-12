'use strict';

angular.module('angularLmsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Discussions',
      'link': '/'
    },{
      'title': 'Overview'
      // 'link': '/overview'
    },{
      'title': 'Sessions'
      // 'link': '/sessions'
    },{
      'title': 'Announcements'
      // 'link': '/announcements'
    },{
      'title': 'E-Reserve'
      // 'link': '/reserve'
    },{
      'title': 'Teams'
      // 'link': '/teams'
    },{
      'title': 'Resources'
      // 'link': '/resources'
    },{
      'title': 'VoiceThread'
      // 'link': '/voicethread'
    }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
