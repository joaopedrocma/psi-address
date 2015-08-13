var service = angular.module('psiAddress', ['ngResource']);
var baseUrl = 'http://localhost:8080'
	
service.factory('Customers', function($resource){
	return $resource(baseUrl + '/customers/:id', { id: '@id' }, {
		 query:  {method: 'GET', isArray: true},
		 get:    {method: 'GET'},
	     remove: {method: 'DELETE', params: {id: '@id'}},
	     edit:   {method: 'PUT', params: {id: '@id'}},
	     add:    {method: 'POST'}
	  });
});



	