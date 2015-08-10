var service = angular.module('apiService', ['ngResource']);

	//var baseUrl = 'http://177.73.233.187:9380';
	var baseUrl = 'http://localhost:9380'
		
	service.factory('Addresses', function($resource){
    	return $resource(baseUrl + '/addresses/:id', { id: '@id' }, {
    		 query:  {method: 'GET', isArray: true},
    		 get:    {method: 'GET'},
    	     remove: {method: 'DELETE', params: {id: '@id'}},
    	     edit:   {method: 'PUT', params: {id: '@id'}},
    	     add:    {method: 'POST'}
    	  });
    });
	
	service.factory('Customers', function($resource){
    	return $resource(baseUrl + '/customers/:id', { id: '@id' }, {
   		 query:  {method: 'GET', isArray: true},
   		 get:    {method: 'GET'},
   		 remove: {method: 'DELETE', params: {id: '@id'}},
	     edit:   {method: 'PUT', params: {id: '@id'}},
   	     add:    {method: 'POST'}
   	  });
    });
	
	service.factory('CustomerBankAccounts', function($resource){
    	return $resource(baseUrl + '/customerBankAccounts/:id', { id: '@id' }, {
   		 query:  {method: 'GET', isArray: true},
   		 get:    {method: 'GET'},
   		 remove: {method: 'DELETE', params: {id: '@id'}},
	     edit:   {method: 'PUT', params: {id: '@id'}},
   	     add:    {method: 'POST'}
   	  });
    });
	
	service.factory('Tasks', function($resource){
    	return $resource(baseUrl + '/tasks/:id', { id: '@id' }, {
   		 query:  {method: 'GET', isArray: true},
   		 get:    {method: 'GET'},
   		 remove: {method: 'DELETE', params: {id: '@id'}},
	     edit:   {method: 'PUT', params: {id: '@id'}},
   	     add:    {method: 'POST'}
   	  });
    });
	
	
	
	
	
	
	
	
		