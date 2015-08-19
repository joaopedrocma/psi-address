var psiaddress = angular.module('psiaddress', [ 'ngRoute', 'psiaddressService', 'psiaddressController' ]);

psiaddress.config(function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/customer', {
			templateUrl : 'pages/customer.html',
			controller : 'customerController'
		});
});
