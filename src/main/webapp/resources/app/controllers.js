// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('importController', function($scope) {
	// create a message to display in our view
	$scope.message = 'importController!';
});

scotchApp.controller('addressController', function($scope, $http, $location,
		$routeParams, Addresses) {
	$scope.curPage = 0;
	$scope.pageSize = 10;

	$scope.message = 'Addresses!';
	// Define a refresh function, that updates the data from the REST service
	$scope.refresh = function() {
		if ($routeParams.id == null) {
			$scope.addresses = Addresses.query();
		} else if ($routeParams.id != null) {
			$scope.updateAddresses = Addresses.get({
				id : $routeParams.id
			});
		}

	};

	// Define a reset function, that clears the prototype newMember object, and
	// consequently, the form
	$scope.reset = function() {
		// clear input fields
		$scope.newAddresses = {};
	};

	$scope.editAddress = function(addressId) {
		console.log(addressId);
		$location.path('/address-edit/' + addressId);
		// $location.path('/address-edit');
	};

	/* callback for ng-click 'deleteUser': */
	$scope.deleteAddress = function(addressId) {
		Addresses.remove({
			id : addressId
		});
		$location.path('/address/');
		$scope.successMessages = [ 'Addresses Updated' ];

	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
	$scope.register = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Addresses.save($scope.newAddresses, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Addresses Registered' ];

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

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
	$scope.update = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Addresses.edit($scope.updateAddresses, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Addresses Updated' ];

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
	$scope.orderBy = 'street';

	$scope.numberOfPages = function() {
		return Math.ceil($scope.addresses.length / $scope.pageSize);
	}
});

// Tasks
scotchApp.controller('taskController',
		function($scope, $http, $location, Tasks) {
			$scope.message = 'Tasks!';
			// Define a refresh function, that updates the data from the REST
			// service
			$scope.refresh = function() {
				$scope.tasks = Tasks.query();
			};

			// Define a reset function, that clears the prototype newMember
			// object, and
			// consequently, the form
			$scope.reset = function() {
				// clear input fields
				$scope.newTasks = {};
			};

			$scope.editTask = function(taskId) {
				console.log(taskId);
				$location.path('/task-edit/' + taskId);
				// $location.path('/address-edit');
			};

			/* callback for ng-click 'deleteUser': */
			$scope.deleteTask = function(taskId) {
				Tasks.remove({
					id : taskId
				});
				$location.path('/task/');
			};

			// Define a register function, which adds the member using the REST
			// service,
			// and displays any error messages
			$scope.register = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Tasks.save($scope.newTasks, function(data) {

					// mark success on the registration form
					$scope.successMessages = [ 'Task Registered' ];

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

			// Initialize newMember here to prevent Angular from sending a
			// request
			// without a proper Content-Type.
			$scope.reset();

			// Set the default orderBy to the name property
			$scope.orderBy = 'task';
		});

scotchApp.controller('taskEditController', function($scope, $http,
		$routeParams, $location, Tasks) {
	$scope.message = 'Tasks!';
	// Define a refresh function, that updates the data from the REST service
	$scope.refresh = function() {
		$scope.updateTasks = Tasks.get({
			id : $routeParams.id
		});
	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
	$scope.update = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Tasks.edit($scope.updateTasks, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Tasks Updated' ];

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

	// Set the default orderBy to the name property
	$scope.orderBy = 'task';
});

// Customers
scotchApp.controller('customerController', function($scope, $http, $location,
		Customers, Addresses) {
	$scope.message = 'Customers!';
	// Define a refresh function, that updates the data from the REST service

	$scope.addressList = Addresses.query();
	$scope.customerTypes = [ {
		id : 'PHYSICAL',
		name : 'Entrada'
	}, {
		id : 'LEGAl',
		name : 'Saida'
	} ];
	$scope.genders = [ {
		id : 'MALE',
		name : 'Masculino'
	}, {
		id : 'FEMALE',
		name : 'Feminino'
	} ];

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
scotchApp.controller('customerEditController', function($scope, $http,
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

scotchApp
		.controller(
				'customerBankAccountController',
				function($scope, $location, $http, Customers,
						CustomerBankAccounts) {
					$scope.message = 'CustomerBankAccounts!';
					// Define a refresh function, that updates the data from the
					// REST service

					$scope.customerList = Customers.query();
					$scope.bankNames = [ {
						id : 'BB',
						name : 'Banco do Brasil'
					}, {
						id : 'ITAU',
						name : 'Itau'
					} ];

					$scope.refresh = function() {
						$scope.customerBankAccounts = CustomerBankAccounts
								.query();
					};

					// Define a reset function, that clears the prototype
					// newMember object, and
					// consequently, the form
					$scope.reset = function() {
						// clear input fields
						$scope.newCustomerBankAccount = {};
					};

					$scope.editCustomerBankAccount = function(
							customerBankAccountId) {
						console.log(customerBankAccountId);
						$location.path('/customer-account-bank-edit/'
								+ customerBankAccountId);
						// $location.path('/address-edit');
					};

					/* callback for ng-click 'deleteUser': */
					$scope.deleteCustomerBankAccount = function(
							customerBankAccountId) {
						CustomerBankAccounts.remove({
							id : customerBankAccountId
						});
						$location.path('/customer-account-bank/');
					};

					// Define a register function, which adds the member using
					// the REST service,
					// and displays any error messages
					$scope.register = function() {
						$scope.successMessages = '';
						$scope.errorMessages = '';
						$scope.errors = {};

						CustomerBankAccounts
								.save(
										$scope.newCustomerBankAccount,
										function(data) {

											// mark success on the registration
											// form
											$scope.successMessages = [ 'CustomerBankAccounts Registered' ];

											// Update the list of members
											$scope.refresh();

											// Clear the form
											$scope.reset();
										},
										function(result) {
											if ((result.status == 409)
													|| (result.status == 400)) {
												$scope.errors = result.data;
											} else {
												$scope.errorMessages = [ 'Unknown server error' ];
											}
											$scope.$apply();
										});

					};

					// Call the refresh() function, to populate the list of
					// members
					$scope.refresh();

					// Initialize newMember here to prevent Angular from sending
					// a request
					// without a proper Content-Type.
					$scope.reset();

					// Set the default orderBy to the name property
					$scope.orderBy = 'agency';
				});

scotchApp.controller('customerEditBankAccountController', function($scope,
		$http, $location, $routeParams, Customers, CustomerBankAccounts) {
	// $scope.message = 'CustomerBankAccounts!';
	// Define a refresh function, that updates the data from the REST service

	/*
	 * $scope.customerList = Customers.query(); $scope.bankNames = [ { id :
	 * 'BB', name : 'Banco do Brasil' }, { id : 'ITAU', name : 'Itau' } ];
	 */
	$scope.refresh = function() {
		$scope.updateCustomerBankAccounts = CustomerBankAccounts.get({
			id : $routeParams.id
		});
	};

	// Define a reset function, that clears the prototype newMember object, and
	// consequently, the form
	$scope.reset = function() {
		// clear input fields
		$scope.newCustomerBankAccount = {};
	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages
	$scope.update = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		CustomerBankAccounts.save($scope.updateCustomerBankAccount, function(
				data) {

			// mark success on the registration form
			$scope.successMessages = [ 'CustomerBankAccounts Registered' ];

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
	$scope.orderBy = 'agency';
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'BankAccount us! JK. This is just a demo.';
});

// File Upload
scotchApp.directive('fileModel', [ '$parse', function($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
} ]);

scotchApp.service('fileUpload', [ '$http', function($http) {
	this.uploadFileToUrl = function(file, uploadUrl, fileType) {
		var data = new FormData();

		data.append('file', file);
		data.append('fileType', fileType);

		$http.post(uploadUrl, data, {
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		}).success(function(data) {
			alert("Arquivo criado Success");
		}).error(function(data) {
			alert("False");
		});
	}
} ]);

scotchApp.controller('fileUploadController', [ '$scope', 'fileUpload',
		function($scope, fileUpload) {

			$scope.fileTypes = [ {
				id : 'FILE_TYPE_PUBLIC_SERVANTS',
				name : 'SERVIDORES'
			}, {
				id : 'FILE_TYPE_PENSIONERS',
				name : 'PENSIONISTAS'
			} ];

			$scope.uploadFile = function() {
				var file = $scope.myFile;
				var fileType = $scope.fileType;
				console.log('file is ' + JSON.stringify(file));
				var uploadUrl = "/upload";
				fileUpload.uploadFileToUrl(file, uploadUrl, fileType);
			};

		} ]);
