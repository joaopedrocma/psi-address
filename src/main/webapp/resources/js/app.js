angular
    .module('myApp', ['ngResource'])
    .service('customerService', function ($log, $resource) {
        return {
            getAll: function () {
                var customerResource = $resource('customers', {}, {
                    query: {method: 'GET', params: {}, isArray: true}
                });
                return customerResource.query();
            }
        }
    })
    .controller('customerController', function ($scope, $log, customersService) {
        $scope.customer = customerService.getAll();
    });