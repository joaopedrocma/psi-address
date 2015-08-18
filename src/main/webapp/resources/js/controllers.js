psiaddress.controller('customerController', function($scope) {
	$scope.customerList = [ {
		Customer : {
			firstname : 'Joao Pedro',
			lastname : 'Castilho'
		},
		email : 'joaopedrocma@hotmail.com'
	}, {
		Customer : {
			firstname : 'Fulano',
			lastname : 'abc'
		},
		email : 'abc@hotmail.com'
	} ];
});