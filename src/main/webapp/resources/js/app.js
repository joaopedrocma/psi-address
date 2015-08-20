var psiaddress = angular.module('psiaddress', [ 'ngRoute', 'psiaddressService',
		'psiaddressController' ]);

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

	.when('/address', {
		templateUrl : 'pages/address.html',
		controller : 'addressController'
	})
});
