<<<<<<< HEAD
var psiaddress = angular.module('psiaddress',
		[ 'ngRoute', 'psiaddressService' ]);
=======
var psiaddress = angular.module('psiaddress', [ 'ngRoute', 'psiaddressService' ]);
>>>>>>> 67b4d183a51e19f63fa234d5e548696e8d010e17

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
<<<<<<< HEAD

=======
>>>>>>> 67b4d183a51e19f63fa234d5e548696e8d010e17
	.when('/customer-add', {
		templateUrl : 'pages/customer-add.html',
		controller : 'customerController'
	})
<<<<<<< HEAD

=======
>>>>>>> 67b4d183a51e19f63fa234d5e548696e8d010e17
	.when('/customer-edit', {
		templateUrl : 'pages/customer-edit.html',
		controller : 'customerController'
	})
<<<<<<< HEAD

=======
	
	
	//endereco
>>>>>>> 67b4d183a51e19f63fa234d5e548696e8d010e17
	.when('/address', {
		templateUrl : 'pages/address.html',
		controller : 'addressController'
	})
<<<<<<< HEAD

	.when('/address-add', {
		templateUrl : 'pages/address-add.html',
		controller : 'addressController'
	})

	.when('/address-edit', {
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

	.when('/city-edit', {
		templateUrl : 'pages/city-edit.html',
		controller : 'cityController'
	})
=======
	
	
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
	
	
	
>>>>>>> 67b4d183a51e19f63fa234d5e548696e8d010e17
});
