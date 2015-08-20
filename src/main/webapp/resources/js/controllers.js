

psiaddress.controller('mainController', [ '$scope', function($scope) {
} ]);

psiaddress.controller('customerController', [ '$scope', '$http',
		'$location', 'Customers',
		function($scope, $http, $location, Customers) {
			$scope.customerList = Customers.query();

			$scope.refresh = function() {
				$scope.customers = Customers.query();
			};

			$scope.reset = function() {
				$scope.newCustomer = {};
			};

			$scope.title = 'Customer Controller Working!'

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
		} ]);

psiaddressController.controller('addressController', function($scope, $http,
		$location, $routeParams, Addresses) {
	$scope.curPage = 0;
	$scope.pageSize = 10;

	$scope.message = "AddressController is Working!"

	$scope.refresh = function() {
		if ($routeParams.id == null) {
			$scope.addresses = Addresses.query();
		} else if ($routeParams.id != null) {
			$scope.updateAddresses = Addresses.get({
				id : $routeParams.id
			});
		}

	};

	$scope.reset = function() {
		$scope.newAddresses = {};
	};

	$scope.editAddress = function(addressId) {
		console.log(addressId);
		$location.path('/address-edit/' + addressId);
	};

	/* callback for ng-click 'deleteUser': */
	$scope.deleteAddress = function(addressId) {
		Addresses.remove({
			id : addressId
		});
		$location.path('/address/');
		$scope.successMessages = [ 'Addresses Updated' ];

	};

	$scope.register = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Addresses.save($scope.newAddresses, function(data) {

			$scope.refresh();

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

	$scope.update = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Addresses.edit($scope.updateAddresses, function(data) {

			$scope.refresh();

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

	$scope.numberOfPages = function() {
		return Math.ceil($scope.addresses.length / $scope.pageSize);
	}
});