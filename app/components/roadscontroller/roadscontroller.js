(function() {
  'use strict';

  angular
    .module('RoadsIndex')
    .controller('RoadsCtrl', MyController, []);

    MyController.$inject = ['$scope','$routeParams','$location','RoadsService'];

  function MyController($scope, $routeParams, $location, RoadsService){


    /*jshint validthis: true */
    var self = this;
    var level = 0;
    var roadletters = Array;
    var currentRoads = Array;
    var currentRoad = Array;
    var currentletter = '';
    var currentID = '';
    var InfoShowing = false;
    var roadgpslink = '';

    self.roadgpslink = roadgpslink;
    
    self.currentletter = currentletter;
    self.level = level;
    //self.nextlevel = nextlevel;
    //self.previouslevel = previouslevel;
    self.getRoadsbyLetter = getRoadsbyLetter;
    self.getRoadDirections = getRoadDirections;
    self.goBack = goBack;
    self.currentlocation = $location.path();
    //self.currentRoads = currentRoads;
    
    self.currentRoad = currentRoad;
    self.currentID = currentID;
    self.toggleInfo = toggleInfo;
    self.InfoShowing = InfoShowing;
    console.log($routeParams);
    if ($routeParams['roadletter']){
      self.currentletter = $routeParams['roadletter'].substring(1);
    }
    
    if ($routeParams['roadId']){
      self.currentID = $routeParams['roadId'].slice(1);
    }
    self.currentRoads = getRoadsbyLetter();
    self.currentRoad = getRoadDirections();
    
    //self.roadletters = roadletters;
    RoadsService.getAllLetters().then(function(data){
      self.roadletters = data.data;
    })

    activate();
    function activate(){
      self.level = 1;
    }
    function goBack(){
      window.history.back();
    }

    function getRoadsbyLetter(){
      //this.currentletter = letter;
      RoadsService.getAllRoadsNames().then(function(data){
        self.currentRoads = data.data.filter(whereFirstLetterIs);
      });

    }
    function whereFirstLetterIs(value){
      if(self.currentletter == '#'){
        return   /\d/.test(value.NAME);
      }
      else {
        return value.NAME.substring(0,1) == self.currentletter;
      }
    }
    function getRoadDirections(){
      if(self.currentID){
        console.log('Road ID ='+ self.currentID);
        RoadsService.getRoadDirections().then(function(data){
          self.currentRoad = data.data[self.currentID];
          console.log(self.currentRoad);
          self.roadgpslink = getgpslink(self.currentRoad.lat, self.currentRoad.lng);
        });
      }

    };
    function getgpslink(lat, lng){
      // If it's an iPhone..
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }
      var ver = iOSversion() || [0];

      if (ver[0] >= 6) {
        protocol = 'maps://';
      } else {
        protocol = 'http://';

      }
      return protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
    }
    else {
      return 'http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=';
    }


    }
    function toggleInfo(){
       this.InfoShowing = !(this.InfoShowing);
    }
  }

})();
