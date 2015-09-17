var psiaddressService = angular.module('psiaddressService', ['ngResource']);

	var baseUrl = 'http://localhost:8080'
		
		psiaddressService.factory('Addresses', function($resource){
		    return $resource(baseUrl + '/addresses/:id', { id: '@id' }, {
		  query:  {method: 'GET', isArray: true},
		  get:    {method: 'GET'},	  
		  remove: {method: 'DELETE', params: {id: '@id'}},
		  edit:   {method: 'PUT', params: {id: '@id'}},
		  add:    {method: 'POST'}
	  });	    
	});
	
	psiaddressService.factory('Addressespc', function($resource){
		 return $resource(baseUrl + '/addresses/:id', { id: '@id' }, {
	  get: {method: 'GET'},
  });	    
});
	
	psiaddressService.factory('Neighbourhoods', function($resource){
	    return $resource(baseUrl + '/neighbourhoods/:id', { id: '@id' }, {
	  query:  {method: 'GET', isArray: true},
	  get:    {method: 'GET'},
	  remove: {method: 'DELETE', params: {id: '@id'}},
	  edit:   {method: 'PUT', params: {id: '@id'}},
	  add:    {method: 'POST'}
  });	    
});
		
		psiaddressService.factory('Cities', function($resource){
		    return $resource(baseUrl + '/cities/:id', { id: '@id' }, {
		  query:  {method: 'GET', isArray: true},
		  get:    {method: 'GET'},
		  remove: {method: 'DELETE', params: {id: '@id'}},
		  edit:   {method: 'PUT', params: {id: '@id'}},
		  add:    {method: 'POST'}
	  });	    
	});
		
		psiaddressService.factory('States', function($resource){
		    return $resource(baseUrl + '/states/:id', { id: '@id' }, {
		  query:  {method: 'GET', isArray: true},
		  get:    {method: 'GET'},
		  remove: {method: 'DELETE', params: {id: '@id'}},
		  edit:   {method: 'PUT', params: {id: '@id'}},
		  add:    {method: 'POST'}
	  });	    
	});
		
		psiaddressService.factory('Countries', function($resource){
		    return $resource(baseUrl + '/countries/:id', { id: '@id' }, {
		  query:  {method: 'GET', isArray: true},
		  get:    {method: 'GET'},
		  remove: {method: 'DELETE', params: {id: '@id'}},
		  edit:   {method: 'PUT', params: {id: '@id'}},
		  add:    {method: 'POST'}
	  });	    
	});
	
		