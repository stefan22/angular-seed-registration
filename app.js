'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.nav',
  'myApp.register',
  'myApp.success',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
