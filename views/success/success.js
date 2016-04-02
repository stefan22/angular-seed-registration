'use strict';

angular.module('myApp.success', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/success', {
    templateUrl: 'views/success/success.html',
    controller: 'SuccessCtrl'
  });
}])

.controller('SuccessCtrl', ['$scope', function($scope) {

	$scope.message = "You are In!!!";


}]);