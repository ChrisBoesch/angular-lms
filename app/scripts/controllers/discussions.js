'use strict';

angular.module('angularLmsApp')
  .controller('DiscussionCtrl', function ($scope, $http) {
    $http.get('/api/discussions').success(function(discussions) {
      $scope.discussions = discussions;
    });
  });
