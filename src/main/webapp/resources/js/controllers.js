var psiaddressController = angular.module('psiaddressController', []);

psiaddressController.controller('mainController', function($scope) {
});

psiaddressController.controller('customerController', function($scope) {
	$scope.customerList = [ {
		Customer : {
			firstname : 'Sebastian',
			lastname : 'Vettel'
		},
		email : '322'
	}, {
		Customer : {
			firstname : 'Fernando',
			lastname : 'Alonso'
		},
		email : '207'
	} ];
});