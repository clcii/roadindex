'use strict';

angular.module('myApp.roadsview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roads', {
    templateUrl: 'roadsview/roadsview.html'
  });
}])
