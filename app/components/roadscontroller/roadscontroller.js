(function() {
  'use strict';

  angular
    .module('Roads.RoadsController',['ngMaterial'])
    .controller('RoadsCtrl', MyController, []);

    MyController.$inject = ['$scope','RoadsService'];

  function MyController($scope, RoadsService){

    /*jshint validthis: true */
    var self = this;
    var level = 0;
    var roadletters = Array;
    var currentRoads = Array;
    var currentRoad = Array;
    var currentletter = '';
    var currentID = '';
    var bshowinfo = 1;
    self.currentletter = currentletter;

    self.level = level;
    self.nextlevel = nextlevel;
    self.previouslevel = previouslevel;
    self.getRoadsbyLetter = getRoadsbyLetter;
    self.getRoadDirections = getRoadDirections;
    self.currentRoads = currentRoads;
    self.currentRoad = currentRoad;
    self.currentID = currentID;
    self.showinfo = showinfo;
    //self.roadletters = roadletters;
    RoadsService.getAllLetters().then(function(data){
      self.roadletters = data.data;
    })

    activate();
    function activate(){
      self.level = 1;
    }
    function getRoadsbyLetter(letter){
      self.currentletter = letter;
      RoadsService.getAllRoadsNames().then(function(data){
        self.currentRoads = data.data.filter(whereFirstLetterIs);
        self.level++;
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
    function getRoadDirections(id){
      self.currentid = id;
      console.log('Road ID ='+ id);
      RoadsService.getRoadDirections().then(function(data){
        self.currentRoad = data.data[id];
        self.level++;
      });
    };

    function nextlevel(){
      if(self.level < 3){
        self.level++;
      }

    }
    function previouslevel(){
      if(self.level>1){
          self.level--;
      }

    }
    function showinfo(){
       console.log('showinfo clicked');
    //   var position = this._mdPanel.newPanelPosition()
    // .absolute()
    // .center();
    //   var config = {
    //     attachTo: angular.element(document.body),
    //     controller: PanelDialogCtrl,
    //     controllerAs: 'ctrl',
    //     disableParentScroll: this.disableParentScroll,
    //     templateUrl: 'panel.tmpl.html',
    //     hasBackdrop: true,
    //     panelClass: 'demo-dialog-example',
    //     position: position,
    //     trapFocus: true,
    //     zIndex: 150,
    //     clickOutsideToClose: true,
    //     escapeToClose: true,
    //     focusOnOpen: true
    //   };
    }
  }

})();
