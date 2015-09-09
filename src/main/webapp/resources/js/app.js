var psiaddress = angular.module('psiaddress',
		[ 'ngRoute', 'psiaddressService' ]);

psiaddress.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})
	
	.when('/login', {
		templateUrl : 'pages/login.html',
		controller : 'logincontroller'
	})

	.when('/address', {
		templateUrl : 'pages/address.html',
		controller : 'addressController'
	})

	.when('/address-add', {
		templateUrl : 'pages/address-add.html',
		controller : 'addressController'
	})

	.when('/address-edit/:id', {
		templateUrl : 'pages/address-edit.html',
		controller : 'addressController'
	})

	.when('/neighbourhood', {
		templateUrl : 'pages/neighbourhood.html',
		controller : 'neighbourhoodController'
	})

	.when('/neighbourhood-add', {
		templateUrl : 'pages/neighbourhood-add.html',
		controller : 'neighbourhoodController'
	})

	.when('/neighbourhood-edit/:id', {
		templateUrl : 'pages/neighbourhood-edit.html',
		controller : 'neighbourhoodController'
	})
	
	.when('/city', {
		templateUrl : 'pages/city.html',
		controller : 'cityController'
	})

	.when('/city-add', {
		templateUrl : 'pages/city-add.html',
		controller : 'cityController'
	})

	.when('/city-edit/:id', {
		templateUrl : 'pages/city-edit.html',
		controller : 'cityController'
	})
	
	.when('/state', {
		templateUrl : 'pages/state.html',
		controller : 'stateController'
	})

	.when('/state-add', {
		templateUrl : 'pages/state-add.html',
		controller : 'stateController'
	})

	.when('/state-edit/:id', {
		templateUrl : 'pages/state-edit.html',
		controller : 'stateController'
	})

	.when('/country', {
		templateUrl : 'pages/country.html',
		controller : 'countryController'
	})

	.when('/country-add', {
		templateUrl : 'pages/country-add.html',
		controller : 'countryController'
	})

	.when('/country-edit/:id', {
		templateUrl : 'pages/country-edit.html',
		controller : 'countryController'
	})
});

angular.module('psiaddress').filter('pagination', function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	};
});
