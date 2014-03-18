'use strict';

describe('App Configuration', function(){
    beforeEach(module('angularLmsApp'));
    var $route;

    beforeEach(inject(function(_$route_) {
        $route = _$route_;
      }));

    it('should map / to home controller', function() {
        var route = '/';
        expect($route.routes[route].controller).toEqual('DiscussionCtrl');
        expect($route.routes[route].templateUrl).toEqual( 'views/discussions.html');
      });
  });