
'use strict';
var app = angular.module('RoadsIndex');

app.directive('switchboardbutton', function () {
    return{
      transclude: false,
      scope:{
          title: '=?title',
          icon: '=?icon',
          alink: '=?alink'
      },
      controller: function($scope){
          //console.log($scope);
          //$scope.title='test';
      },
      link: function(scope,element, attrs, controllers){
          scope.title=attrs.title;
          scope.icon=attrs.icon;
          scope.alink=attrs.alink;
      },
      templateUrl:'components/switchboardbutton/switchboardbutton.html'
    }
  });
