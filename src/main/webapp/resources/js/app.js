var psiaddress = angular.module('psiaddress',
		[ 'ngRoute', 'psiaddressService' ]);

psiaddress.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	.when('/customer', {
		templateUrl : 'pages/customer.html',
		controller : 'customerController'
	})

	.when('/customer-add', {
		templateUrl : 'pages/customer-add.html',
		controller : 'customerController'
	})

	.when('/customer-edit/:id', {
		templateUrl : 'pages/customer-edit.html',
		controller : 'customerController'
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
