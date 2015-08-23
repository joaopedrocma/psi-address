psiaddress.controller('mainController', [ '$scope', function($scope) {
} ]);

psiaddress.controller('customerController', [ '$scope', '$http', '$location',
		'$routeParams', 'Customers', 'Addresses',
		function($scope, $http, $location, $routeParams, Customers, Addresses) {

			$scope.title = 'Customer Controller Working!'

			$scope.addressList = Addresses.query();
			$scope.customerList = Customers.query();

			$scope.refresh = function() {
				$scope.customers = Customers.query();
			};

			$scope.init = function() {
				$scope.updateCustomer = Customers.get({
					id : $routeParams.id
				});
			};

			$scope.reset = function() {
				$scope.newCustomer = {};
			};

			$scope.editCustomer = function(customerId) {
				console.log(customerId);
				$location.path('/customer-edit/' + customerId);
			};

			$scope.deleteCustomer = function(customerId) {
				Customers.remove({
					id : customerId
				});
				$scope.refresh();
				$location.path('/customer/');
			};

			$scope.register = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Customers.save($scope.newCustomer, function(data) {

					$scope.successMessages = [ 'Customers Registered' ];

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Customers.edit($scope.updateCustomer, function(data) {

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();
		} ]);

psiaddress.controller('addressController', [ '$scope', '$http', '$location',
		'$routeParams', 'Addresses', 'Cities',
		function($scope, $http, $location, $routeParams, Addresses, Cities) {
			$scope.curPage = 0;
			$scope.pageSize = 10;

			$scope.title = 'Address Controller Working!'

			$scope.cityList = Cities.query();
			$scope.addressList = Addresses.query();

			$scope.refresh = function() {
				$scope.addresses = Addresses.query();
			};

			$scope.init = function() {
				$scope.updateCustomer = Customers.get({
					id : $routeParams.id
				});
			};

			$scope.reset = function() {
				$scope.newAddress = {};
			};

			$scope.editAddress = function(addressId) {
				console.log(addressId);
				$location.path('/address-edit/' + addressId);
			};

			$scope.deleteAddress = function(addressId) {
				Addresses.remove({
					id : addressId
				});
				$scope.refresh();
				$location.path('/address/');

			};

			$scope.register = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Addresses.save($scope.newAddress, function(data) {

					$scope.successMessages = [ 'Addresses Updated' ];

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				$scope.updateAddress = Customers.get({
					id : $routeParams.id
				});

				Addresses.edit($scope.updateAddress, function(data) {

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();

			$scope.numberOfPages = function() {
				return Math.ceil($scope.addresses.length / $scope.pageSize);
			}
		} ]);

psiaddress.controller('cityController', [ '$scope', '$http', '$location',
		'$routeParams', 'Cities', 'Countries',
		function($scope, $http, $location, $routeParams, Cities, Countries) {

			$scope.title = 'City Controller Working!'

			$scope.countryList = Countries.query();
			$scope.cityList = Cities.query();

			$scope.refresh = function() {
				$scope.cities = Cities.query();
			};

			$scope.init = function() {
				$scope.updateCity = Cities.get({
					id : $routeParams.id
				});
			};

			$scope.reset = function() {
				$scope.newCity = {};
			};

			$scope.editCity = function(cityId) {
				console.log(cityId);
				$location.path('/city-edit/' + cityId);
			};

			$scope.deleteCity = function(cityId) {
				Cities.remove({
					id : cityId
				});
				$scope.refresh();
				$location.path('/city/');
			};

			$scope.register = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Cities.save($scope.newCity, function(data) {

					$scope.successMessages = [ 'Cities Registered' ];

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				$scope.updateCity = Customers.get({
					id : $routeParams.id
				});

				Cities.edit($scope.updateCity, function(data) {

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();
		} ]);

psiaddress.controller('countryController', [ '$scope', '$http', '$location',
		'$routeParams', 'Countries',
		function($scope, $http, $location, $routeParams, Countries) {

			$scope.title = 'Country Controller Working!'

			$scope.countryList = Countries.query();

			$scope.refresh = function() {
				$scope.countries = Countries.query();
			};

			$scope.init = function() {
				$scope.updateCountry = Countries.get({
					id : $routeParams.id
				});
			};

			$scope.reset = function() {
				$scope.newCountry = {};
			};

			$scope.editCountry = function(countryId) {
				console.log(countryId);
				$location.path('/country-edit/' + countryId);
			};

			$scope.deleteCountry = function(countryId) {
				Countries.remove({
					id : countryId
				});
				$scope.refresh();
				$location.path('/country/');
			};

			$scope.register = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				Countries.save($scope.newCountry, function(data) {

					$scope.successMessages = [ 'Country Registered' ];

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.successMessages = '';
				$scope.errorMessages = '';
				$scope.errors = {};

				$scope.updateCountry = Countries.get({
					id : $routeParams.id
				});

				Countries.edit($scope.updateCountry, function(data) {

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();
		} ]);
