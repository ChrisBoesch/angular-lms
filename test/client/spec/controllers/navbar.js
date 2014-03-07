'use strict';

describe('Controller: NavCtrl', function() {

    beforeEach(module('angularLmsApp'));

    var NavbarCtrl,
        location,
        scope;

    beforeEach(inject(function($rootScope, $controller, $location) {
        scope = $rootScope.$new();
        location = $location;
        NavbarCtrl = $controller('NavbarCtrl', {
            $scope: scope
          });
      }));
    it ('should provide a list of menu items with link to them', function() {
        var menu = scope.menu;
        expect(menu).toBeDefined();
        expect(menu.length).toBe(8);
        expect(scope.isActive('/')).toBe(true);
        location.path('/discussions');
        expect(scope.isActive('/')).toBe(false);
        expect(scope.isActive('/discussions')).toBe(true);
      });

  });