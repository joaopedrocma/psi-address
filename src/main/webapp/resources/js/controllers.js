psiaddress.controller('mainController', [ '$scope', function($scope) {
} ]);

psiaddress.controller('addressController', [
		'$scope',
		'$http',
		'$location',
		'$routeParams',
		'Addresses',
		'Neighbourhoods',
		'Cities',
		'States',
		'Countries',
		function($scope, $http, $location, $routeParams, Addresses,
				Neighbourhoods, Cities, States, Countries) {
			$scope.curPage = 0;
			$scope.pageSize = 6;

			$scope.title = 'Endereços';
			$scope.titleAdd = 'Novo Endereço';
			$scope.titleEdit = 'Editar Endereço';
			$scope.message = 'Adicionar Endereço';

			$scope.neighbourhoodList = Neighbourhoods.query();
			$scope.addressList = Addresses.query();
			$scope.CityList = Cities.query();
			$scope.StateList = States.query();
			$scope.CountryList = Countries.query();

			$scope.getAddress = function(addressId) {
				$http.get('/address/' + addressId).success(function(local) {
					$scope.addressfound = local;
				})
			};

			$scope.refresh = function() {
				$scope.addressList = Addresses.query();
			};

			$scope.init = function() {
				$scope.updateAddress = Addresses.get({
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
				$scope.errorMessages = '';
				$scope.errors = {};

				Addresses.save($scope.newAddress, function(data) {

					$scope.successMessage = 'Endereço Registrado com Sucesso!';

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.errorMessages = '';
				$scope.errors = {};

				Addresses.edit($scope.updateAddress, function(data) {

					$location.path('/address/');

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();

			$scope.orderBy = 'address';

			$scope.numberOfPages = function() {
				return Math.ceil($scope.addressList.length / $scope.pageSize);
			}
		} ]);

psiaddress
		.controller(
				'neighbourhoodController',
				[
						'$scope',
						'$http',
						'$location',
						'$routeParams',
						'Neighbourhoods',
						'Cities',
						function($scope, $http, $location, $routeParams,
								Neighbourhoods, Cities) {
							$scope.curPage = 0;
							$scope.pageSize = 6;

							$scope.title = 'Bairros';
							$scope.titleAdd = 'Novo Bairro';
							$scope.titleEdit = 'Editar Bairro';
							$scope.message = 'Adicionar Bairro';

							$scope.cityList = Cities.query();
							$scope.neighbourhoodList = Neighbourhoods.query();

							$scope.refresh = function() {
								$scope.neighbourhoodList = Neighbourhoods
										.query();
							};

							$scope.init = function() {
								$scope.updateNeighbourhood = Neighbourhoods
										.get({
											id : $routeParams.id
										});
							};

							$scope.reset = function() {
								$scope.newNeighbourhood = {};
							};

							$scope.editNeighbourhood = function(neighbourhoodId) {
								console.log(neighbourhoodId);
								$location.path('/neighbourhood-edit/'
										+ neighbourhoodId);
							};

							$scope.deleteNeighbourhood = function(
									neighbourhoodId) {
								Neighbourhoods.remove({
									id : neighbourhoodId
								});

								$scope.refresh();

								$location.path('/neighbourhood/');

							};

							$scope.register = function() {
								$scope.errorMessages = '';
								$scope.errors = {};

								Neighbourhoods
										.save(
												$scope.newNeighbourhood,
												function(data) {

													$scope.successMessage = 'Bairro Registrado com Sucesso!';

													$scope.refresh();

													$scope.reset();
												});
							};

							$scope.update = function() {
								$scope.errorMessages = '';
								$scope.errors = {};

								Neighbourhoods.edit($scope.updateNeighbourhood,
										function(data) {

											$location.path('/neighbourhood/');

											$scope.refresh();

											$scope.reset();
										});
							};

							$scope.refresh();

							$scope.reset();

							$scope.orderBy = 'neighbourhood';

							$scope.numberOfPages = function() {
								return Math
										.ceil($scope.neighbourhoodList.length
												/ $scope.pageSize);
							}
						} ]);

psiaddress.controller('cityController', [ '$scope', '$http', '$location',
		'$routeParams', 'Cities', 'States',
		function($scope, $http, $location, $routeParams, Cities, States) {
			$scope.curPage = 0;
			$scope.pageSize = 6;

			$scope.title = 'Cidades';
			$scope.titleAdd = 'Nova Cidade';
			$scope.titleEdit = 'Editar Cidade';
			$scope.message = 'Adicionar Cidade';

			$scope.stateList = States.query();
			$scope.cityList = Cities.query();

			$scope.refresh = function() {
				$scope.cityList = Cities.query();
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
				$scope.errorMessages = '';
				$scope.errors = {};

				Cities.save($scope.newCity, function(data) {

					$scope.successMessage = 'Cidade Registrada com Sucesso!';

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.errorMessages = '';
				$scope.errors = {};

				Cities.edit($scope.updateCity, function(data) {

					$location.path('/city/');

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();

			$scope.orderBy = 'city';

			$scope.numberOfPages = function() {
				return Math.ceil($scope.cityList.length / $scope.pageSize);
			}
		} ]);

psiaddress.controller('stateController', [ '$scope', '$http', '$location',
		'$routeParams', 'States', 'Countries',
		function($scope, $http, $location, $routeParams, States, Countries) {
			$scope.curPage = 0;
			$scope.pageSize = 6;

			$scope.title = 'Estados';
			$scope.titleAdd = 'Novo Estado';
			$scope.titleEdit = 'Editar Estado';
			$scope.message = 'Adicionar Estado';

			$scope.countryList = Countries.query();
			$scope.stateList = States.query();

			$scope.refresh = function() {
				$scope.stateList = States.query();
			};

			$scope.init = function() {
				$scope.updateState = States.get({
					id : $routeParams.id
				});
			};

			$scope.reset = function() {
				$scope.newState = {};
			};

			$scope.editState = function(stateId) {
				console.log(stateId);
				$location.path('/state-edit/' + stateId);
			};

			$scope.deleteState = function(stateId) {
				States.remove({
					id : stateId
				});

				$scope.refresh();

				$location.path('/state/');
			};

			$scope.register = function() {
				$scope.errorMessages = '';
				$scope.errors = {};

				States.save($scope.newState, function(data) {

					$scope.successMessage = 'Estado Registrado com Sucesso!';

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.errorMessages = '';
				$scope.errors = {};

				States.edit($scope.updateState, function(data) {

					$location.path('/state/');

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();

			$scope.orderBy = 'state';

			$scope.numberOfPages = function() {
				return Math.ceil($scope.stateList.length / $scope.pageSize);
			}
		} ]);

psiaddress.controller('countryController', [ '$scope', '$http', '$location',
		'$routeParams', 'Countries',
		function($scope, $http, $location, $routeParams, Countries) {
			$scope.curPage = 0;
			$scope.pageSize = 6;

			$scope.title = 'Países';
			$scope.titleAdd = 'Novo País';
			$scope.titleEdit = 'Editar País';
			$scope.message = 'Adicionar País';

			$scope.countryList = Countries.query();

			$scope.refresh = function() {
				$scope.countryList = Countries.query();
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
				$scope.errorMessages = '';
				$scope.errors = {};

				Countries.save($scope.newCountry, function(data) {

					$scope.successMessage = 'País Registrado com Sucesso!';

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.update = function() {
				$scope.errorMessages = '';
				$scope.errors = {};

				Countries.edit($scope.updateCountry, function(data) {

					$location.path('/country/');

					$scope.refresh();

					$scope.reset();
				});
			};

			$scope.refresh();

			$scope.reset();

			$scope.orderBy = 'country';

			$scope.numberOfPages = function() {
				return Math.ceil($scope.countryList.length / $scope.pageSize);
			}
		} ]);
