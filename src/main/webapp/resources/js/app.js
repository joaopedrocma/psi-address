var psiaddress = angular.module('psiaddress', [ 'ngResource' ]);

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