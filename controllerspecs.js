(function() {
    /* Template for Controller tests in angularJS */
    "use strict";

    describe("Controller specs", function() {

        /* Define key angular dependencies 
        q and httpBackend are required to mock promises and the $resource or $http services.
        */
        var $controller, scope, q, httpBackend;

        /* Define any factories injected to be mocked */
        var mockFactory = {};

        /* Set up any third party dependencies to be mocked */
        var mockState = { go: function() {} };

        beforeEach(function() {

            /* Define modules that are used - include any third party module dependencies */
            module("App.Module");

            inject(function(_$controller_, _$rootScope_, _$q_, _$httpBackend_) {

                scope = _$rootScope_.$new();
                q = _$q_;
                httpBackend = _$httpBackend_;

                /* Default pattern for controller as syntax */
                $controller = _$controller_("Controller as vm", {
                    Factory: mockFactory,
                    $scope: scope,
                    $state: mockState
                });
            });
        });

        /* Set up any spies using Jasmines spyOn syntax */
        beforeEach(function() {
            spyOn(mockState, "go");
        });

        /* Default test to ensure the controller is injected correctly */
        describe("when injecting an oem controller", function() {
            it("then the controller should not be undefined", function() {
                expect($controller).toBeDefined();
            });

            /* Test any default value when the controller loads e.g. vm.loading */
            it("and then should expect loading to be false", function() {
                expect($controller.loading).toBe(false);
            });
        });
        describe("when a user passes authentication", function() {
            beforeEach(function () {

                /* Test up a mock on a method that returns a promise */
                var deferred = q.defer();
                mockFactory.authenticate = jasmine.createSpy("method").and.returnValue(deferred.promise);
              
                /* Method under test */
                $controller.method("param1", "param2");

                /* Define object resolved in a promise */
                deferred.resolve({ 'data': {} });

                /* Required to be called for the digest cycle to be called */
                scope.$digest();
            });

            it("then should verify mock factory method is called", function() {
                expect(mockFactory.method).toHaveBeenCalled();
            });

            it("and then should run another test", function() {
                expect(true).toBe(true);
            });

           
        });
    });
})();