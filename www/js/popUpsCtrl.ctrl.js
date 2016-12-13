angular.module('PopUpsDani',[])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target

   // An alert dialog
      $scope.showAlert3 = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Tan dificil era mequetrefe',
       template: 'Hasta que por fin'
     });
     alertPopup.then(function(res) {
       console.log('Dice tu mama que ya te vayas por las tortillas');
     });
   };
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'La regaste chavo :/',
       template: 'Te hace falta barrio'
     });
     alertPopup.then(function(res) {
       console.log('Dice tu mama que ya te vayas por las tortillas');
     });
   };
    $scope.showAlert2 = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Tampoco es esta :D',
       template: 'No lo haga compa'
     });
     alertPopup.then(function(res) {
       console.log('Dice tu mama que ya te vayas por las tortillas');
     });
   };
});