'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLmsApp'));

  var DiscussionCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/discussions')
      .respond([{'category': 'Test', 'forums': {name:'Test 1', latestPost: '11/01/2014 12:36PM', threadCount:3}}]);
    scope = $rootScope.$new();
    DiscussionCtrl = $controller('DiscussionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of discussions to the scope', function () {
    expect(scope.discussions).toBeUndefined();
    $httpBackend.flush();
    expect(scope.discussions.length).toBe(1);
  });
});
