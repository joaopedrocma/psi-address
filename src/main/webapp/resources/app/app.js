var psiAddress = angular.module('psiAddress', [ 'ngRoute', 'apiService',
		'confirm', 'inputSelect']);

// configure our routes
psiAddress.config(function($routeProvider) {
	$routeProvider

	.when('/customer-add', {
		templateUrl : 'pages/customer-add.html',
		controller : 'customerAddController'
	})

	.when('/customer-edit/:id', {
		templateUrl : 'pages/customer-edit.html',
		controller : 'customerEditController'
	})

	.when('/customer', {
		templateUrl : 'pages/address.html',
		controller : 'customerController'
	})
});