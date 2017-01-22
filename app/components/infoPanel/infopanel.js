(function() {
  'use strict';

  angular
    .module('myApp.Panel',['ngMaterial'])
    .controller('PanelController', myPanelController)
    .directive('infopanel', myPanelDirective);
  function myPanelDirective(){
    // Usage: ...
    //this._mdPanel = $mdPanel;
    var directive = {
      restrict: 'ACE',
      templateUrl: 'infoPanel/infopanel.html',
      scope: {
      },
      link: link,
      controller: myPanelController
    };
    console.log('Directive started');
    return directive;

    ////////////////////////////

    function link(scope, element, attrs){

    }
  }
  function myPanelController($mdPanel){
    this._mdPanel = $mdPanel;
    var self = this;
    self.show = show;
    function show(){
      $mdPanel.show();

    }

  }

})();
