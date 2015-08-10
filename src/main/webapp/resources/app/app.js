// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', [ 'ngRoute', 'apiService',
		'confirm', 'inputSelect']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	// route for the home page
	.when('/import', {
		templateUrl : 'pages/import.html',
		controller : 'importController'
	})

	.when('/address', {
		templateUrl : 'pages/address.html',
		controller : 'addressController'
	})

	.when('/address-add', {
		templateUrl : 'pages/address-add.html',
		controller : 'addressController'
	})

	.when('/address-edit/:id', {
		templateUrl : 'pages/address-edit.html',
		controller : 'addressController'
	})

	.when('/task', {
		templateUrl : 'pages/task.html',
		controller : 'taskController'
	})

	.when('/task-add', {
		templateUrl : 'pages/task-add.html',
		controller : 'taskController'
	})

	.when('/task-edit/:id', {
		templateUrl : 'pages/task-edit.html',
		controller : 'taskEditController'
	})

	.when('/customer-account-bank', {
		templateUrl : 'pages/customer-account-bank.html',
		controller : 'customerBankAccountController'
	})

	.when('/customer-account-bank-add', {
		templateUrl : 'pages/customer-account-bank-add.html',
		controller : 'customerBankAccountController'
	})

	.when('/customer-account-bank-edit/:id', {
		templateUrl : 'pages/customer-account-bank-edit.html',
		controller : 'customerEditBankAccountController'
	})

	.when('/customer', {
		templateUrl : 'pages/customer.html',
		controller : 'customerController'
	})

	.when('/customer-add', {
		templateUrl : 'pages/customer-add.html',
		controller : 'customerController'
	})

	.when('/customer-edit/:id', {
		templateUrl : 'pages/customer-edit.html',
		controller : 'customerEditController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'aboutController'
	})

	// route for the contact page
	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});
});

angular.module('scotchApp').filter('pagination', function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	};
});

var confirmModule = angular.module('confirm', []);

confirmModule.directive('confirm', function($parse, $rootScope) {
	return {
		priority : -1,
		restrict : 'A',
		link : function(scope, element, attrs) {
			element.unbind("click").bind(
					"click",
					function() {
						$(".modal .footer").find("[name='yes']").unbind(
								'click.confirm').bind("click.confirm",
								function() {
									$parse(attrs.ngClick)(scope);
								});
						$rootScope.$broadcast('confirm', attrs.confirm);
					});
		}
	}
});

confirmModule
		.directive(
				'confirmBox',
				function($parse) {

					return {
						restrict : 'A',
// template : '<div class="header">'
// + '<h2>Please Confirm</h2>'
// + '</div>'
// + '<hr />'
// + '<div class="body"></div>'
// + '<hr />'
// + '<div class="footer">'
// + '<div class="row" style="margin-bottom:0;">'
// + '<div class="push-right" style="margin-bottom:1px;"><button type="button"
// class="btn" name="no">No</button><button type="button" class="btn
// btn-primary" name="yes" style="margin-left:5px;">Yes</button></div>'
// + '</div>' + '</div>',
//								
//								


						template : '<div class="deleteConfirmation">'
							+ '<div ng-hide="isDeleting" >'
							+ '<button type="button" class="btn btn-danger btn-xs" ng-click="startDelete()"><i class="fa fa-trash-o"></i> Delete</button>'
							+ '</div>'
							+ '<div ng-show="isDeleting">'
							+ '<button type="button" class="btn btn-default btn-xs" ng-click="cancel()">Abort deletion</button>'
							+ '<button type="button" class="btn btn-danger btn-xs"  ng-click="confirm()"><i class="fa fa-trash-o"></i>Confirm</button>'
							+ '</div>'
							+ '</div>',

		
						link : function(scope, element, attrs) {
							element.css("display", "none");
							element.addClass('modal fade');

							var noBtn = element.find("[name='no']");
							noBtn.bind("click", function() {
								element.css("display", "none");
							});
							var yesBtn = element.find("[name='yes']");
							yesBtn.bind("click", function() {
								//element.hide();
								$scope.isDeleting = true
							});

							scope.$on("confirm", function(event, text) {
								element.find(".modal-body").html(text);
								element.show();
							});
						}
					}
				});

var inputSelect = angular.module('inputSelect', []);

inputSelect.directive('selectAllOnFocus', function($timeout) {

	return {
		restrict : 'A',
		link : function(scope, element) {
			element.mouseup(function(event) {
				event.preventDefault();
			});

			element.focus(function() {
				element.select();
			});
		}
	}

});