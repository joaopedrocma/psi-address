psiAddress.controller('customerController', function($scope, $http, $location,
		Customers) {
	
	$scope.refresh = function() {
		$scope.customers = Customers.query();
	};

	// Define a reset function, that clears the prototype newMember object, and
	// consequently, the form
	$scope.reset = function() {
		// clear input fields
		$scope.newCustomer = {};
	};

	$scope.editCustomer = function(customerId) {
		console.log(customerId);
		$location.path('/customer-edit/' + customerId);
		// $location.path('/address-edit');
	};

	/* callback for ng-click 'deleteUser': */
	$scope.deleteCustomer = function(customerId) {
		Customers.remove({
			id : customerId
		});
		$location.path('/customer/');
	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
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

	// Call the refresh() function, to populate the list of members
	$scope.refresh();

	// Initialize newMember here to prevent Angular from sending a request
	// without a proper Content-Type.
	$scope.reset();

	// Set the default orderBy to the name property
	$scope.orderBy = 'name';
});

// Customers
psiAddress.controller('customerEditController', function($scope, $http,
		$location, $routeParams, Customers, Addresses) {
	/*
	 * $scope.message = 'Customers!'; // Define a refresh function, that updates
	 * the data from the REST service
	 * 
	 * $scope.addressList = Addresses.query(); $scope.customerTypes = [ { id :
	 * 'PHYSICAL', name : 'Entrada' }, { id : 'LEGAl', name : 'Saida' } ];
	 * $scope.genders = [ { id : 'MALE', name : 'Masculino' }, { id : 'FEMALE',
	 * name : 'Feminino' } ];
	 */

	$scope.refresh = function() {
		console.log(Customers.get({
			id : $routeParams.id
		}));
		$scope.updateCustomer = Customers.get({
			id : $routeParams.id
		});
	};

	// Define a reset function, that clears the prototype newMember object, and
	// consequently, the form
	$scope.reset = function() {
		// clear input fields
		$scope.updateCustomer = {};
	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
	$scope.update = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Customers.edit($scope.updateCustomer, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Customers updated' ];

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

	// Call the refresh() function, to populate the list of members
	$scope.refresh();

	// Initialize newMember here to prevent Angular from sending a request
	// without a proper Content-Type.
	$scope.reset();

	// Set the default orderBy to the name property
	$scope.orderBy = 'name';
});
