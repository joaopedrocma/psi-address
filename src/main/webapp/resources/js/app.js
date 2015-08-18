var psiaddress = angular.module('psiaddress', [ 'ngRoute',
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
		});
});
