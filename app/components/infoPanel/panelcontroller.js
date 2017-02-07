(function() {
  'use strict';

  angular
    .module('RoadsIndex')
    .controller('infoPanelControl', infoPanelControl)
    .controller('PanelDialogCtrl', PanelDialogCtrl);;

    function infoPanelControl($mdPanel){
      this._mdPanel = $mdPanel;
    }

infoPanelControl.prototype.showDialog = function(){
    var position = this._mdPanel.newPanelPosition()
      .absolute()
      .center();
    var config = {
        attachTo: angular.element(document.body),
        controller: PanelDialogCtrl,
        controllerAs: 'ctrl',
        templateUrl: 'components/infoPanel/infopanel.html',
        panelClass: 'infopanel',
        position: position,
        trapFocus: true,
        zIndex: 150,
        clickOutsideToClose: true,
        clickEscapeToClose: true,
        hasBackdrop: true,
    };
      
      this._mdPanel.open(config);
}
function PanelDialogCtrl(mdPanelRef) {
  this._mdPanelRef = mdPanelRef;
}
PanelDialogCtrl.prototype.closeDialog = function() {
  var panelRef = this._mdPanelRef;
  console.log('trying to close');
  panelRef && panelRef.close().then(function() {
    //angular.element(document.querySelector('.open-button')).focus();
    panelRef.destroy();
  });
};

})();

// this._mdPanel = $mdPanel;
//  var position = this._mdPanel.newPanelPosition()
//      .absolute()
//      .center();
//        var config = {
//          attachTo: angular.element(document.body),
//     //     controller: PanelDialogCtrl,
//     //     controllerAs: 'ctrl',
//     //     disableParentScroll: this.disableParentScroll,
//          templateUrl: 'panel.tmpl.html',
//          hasBackdrop: true,
//     //     panelClass: 'demo-dialog-example',
//          position: position,
//          trapFocus: true,
//          zIndex: 150,
//          clickOutsideToClose: true,
//          escapeToClose: true,
//          focusOnOpen: true
//        };