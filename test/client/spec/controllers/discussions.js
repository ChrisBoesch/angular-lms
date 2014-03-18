'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLmsApp'));

  var DiscussionCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    DiscussionCtrl = $controller('DiscussionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of discussions to the scope', function () {
    expect(scope.discussions.length).toBe(5);
  });
});
