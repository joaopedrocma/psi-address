var psiaddress = angular.module('psiaddress', [ 'ngRoute', 'psiaddressService' ]);

psiaddress.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	
	//cliente
	.when('/customer', {
		templateUrl : 'pages/customer.html',
		controller : 'customerController'
	})
	.when('/customer-add', {
		templateUrl : 'pages/customer-add.html',
		controller : 'customerController'
	})
	.when('/customer-edit', {
		templateUrl : 'pages/customer-edit.html',
		controller : 'customerController'
	})
	
	
	//endereco
	.when('/address', {
		templateUrl : 'pages/address.html',
		controller : 'addressController'
	})
	
	
	//pais
	.when('/country', {
		templateUrl : 'pages/country.html',
		controller : 'countryController'
	})
	.when('/country-add', {
		templateUrl : 'pages/country-add.html',
		controller : 'countryController'
	})
	.when('/country-edit', {
		templateUrl : 'pages/country-edit.html',
		controller : 'countryController'
	})
	
	
	
});
