'use strict';

angular.module('dyo5App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule',
  'ui'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'MainCtrl'
      })
	  .when('/my-customer', {
        templateUrl: 'views/my-customer.html',
        controller: 'MainCtrl'
      })
	  .when('/print', {
        templateUrl: 'views/PRINT.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
