(function() {
  'use strict';

  angular
    .module('Roads.RoadsService',[])
    .service('RoadsService', myservice);

  myservice.$inject = ['$http'];

  function myservice($http){

    /*jshint validthis: true */
    var svc = this;

    svc.getIndex = getIndex;
    svc.getAllLetters = getAllLetters;
    svc.getAllRoadsNames = getAllRoadsNames;
    svc.getRoadDirections = getRoadDirections;
    ////////////////////////////

    function getIndex(){

    }
    function getAllLetters(){
      return $http.get('services/roadletters.json').then(function(result) {
           return result.data;
       });

    }
    function getAllRoadsNames(){
      return $http.get('services/roadsname.json').then(function(result) {
           return result.data;
       });

    }
    function getRoadDirections(){
      return $http.get('services/roads.json').then(function(result) {
           return result.data;
       });

    }

  }

})();
