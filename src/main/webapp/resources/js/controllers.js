psiaddress.controller('mainController', ['$scope', function($scope) {
}]);

psiaddress.controller('customerController', ['$scope', '$http', '$location', 'Customers', function($scope, $http,
		$location, Customers) {
	$scope.customerList = Customers.query();

	$scope.refresh = function() {
		$scope.customers = Customers.query();
	};

	$scope.reset = function() {
		$scope.newCustomer = {};
	};

	$scope.editCustomer = function(customerId) {
		console.log(customerId);
		$location.path('/customer-edit/' + customerId);
	};

	/* callback for ng-click 'deleteUser': */
	$scope.deleteCustomer = function(customerId) {
		Customers.remove({
			id : customerId
		});
		$location.path('/customer/');
	};

	$scope.register = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Customers.save($scope.newCustomer, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Customers Registered' ];

			// Update the list of members
			$scope.refresh();

			// Clear the form
			$scope.reset();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.errors = result.data;
			} else {
				$scope.errorMessages = [ 'Unknown server error' ];
			}
			$scope.$apply();
		});

	};

	$scope.refresh();

	$scope.reset();
}]);