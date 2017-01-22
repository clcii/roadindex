(function() {
  'use strict';

  angular
    .module('myApp.firstletter',[])
    .filter('firstletterFilter', myFirstLetterFilter);

  //myFilter.$inject = ['$dataservice'];

  function myFirstLetterFilter(){

    return function(val){



      return val;

    };
  }

})();






//'use strict';
//var app = angular.module('myApp');

//app.filter('firstletter', function () {
    //return function (items, letter){
      //console.log(letter);
      //var out = [];
        //angular.forEach(items, function(item, letter){
          //if (items.substring(0,1) = letter){
            //out.push(item);
          //}
        //})

      //return items;
    //}
  //})
