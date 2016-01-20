angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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

    .controller('PlaylistsCtrl', function($scope, $http) {
        $http.get('http://apisubscription.poderbeta.pe/users')
            .success(function(data, status, headers, config){
                $scope.usuarios = data;
            })
            .error(function(data, status, headers, config){
                alert("Error");
                console.log(data);
                $scope.usuarios = "Error";
            });
    })

    .controller('PlaylistCtrl', function($scope, $stateParams, $http) {
        $http.get('http://apisubscription.poderbeta.pe/users/'+$stateParams.usuarioID)
            .success(function(data, status, headers, config){
                $scope.usuario = data;
            })
            .error(function(data, status, headers, config){
                alert("Error");
                console.log(data);
                $scope.usuario = "Error";
            });
    })

    .controller('miControlador', function($scope, $cordovaDevice){
        $scope.verificarPlataforma = function(usuario){
            var plataforma = $cordovaDevice.getPlatform();
            alert(" Usuario '"+usuario.first_name+"'.\n Estas utilizando la plataforma :" +
                "\n"+plataforma);
        }
    })


    .controller("claudio", function($scope, $state){
        $scope.listItems = [{"name":"Mili"},{"name":"Claudio"}];
        $scope.ingreso = function(){
            cadena = prompt("ingresa algo");
            if(cadena){
                $scope.listItems.push({
                    'name':cadena
                });
            }

        };
    });

/*.controller('miControlador', function($scope){
 $scope.verificarPlataforma = function(params){
 console.log(params);
 alert(params);
 }
 });*/