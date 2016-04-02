'use strict';

angular.module('myApp.nav', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nav', {
    templateUrl: 'views/nav/nav.html',
    controller: 'NavCtrl'
  });
}])

.controller('NavCtrl', [function() {

}]);