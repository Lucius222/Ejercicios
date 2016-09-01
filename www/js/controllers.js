angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller("controladorejercicio2",function(){


})

.controller('controladorBrowse', function($scope, $stateParams) {

$scope.preciouno=3;
$scope.preciodos=3;
$scope.preciotres=3;
$scope.mensajerespuesta="sin respuesta";

$scope.SumarPrecio=function(dato1,dato2,dato3){
 
  console.log("Estoy en el Sumar Precios" );
$scope.preciouno=6;
//alert(dato1);
$scope.mensajerespuesta=parseInt(dato1)+parseInt(dato2)+parseInt(dato3);
};

$scope.sacarpromedio=function(dato1,dato2,dato3){
  console.log("Estoy en el sacarpromedio");
$scope.preciodos=6;

$scope.mensajerespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3))/3 ;

};

$scope.sacarIVA=function(dato1,dato2,dato3){
  console.log("Estoy en sacarIVA");
$scope.preciotres=6;

$scope.mensajerespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3))*1.21;
};


})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
