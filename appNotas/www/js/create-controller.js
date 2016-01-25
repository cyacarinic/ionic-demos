/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers')
    .controller('createCtrl', function($scope, $state, test, lista_notas){
        $scope.nota = {
            id: new Date().getTime().toString(),
            titulo : "",
            descripcion : ""
        };
        var crearNota = function(nota){
            lista_notas.push(nota)
        }
        $scope.guardarNota = function(){
            crearNota($scope.nota);
            $state.go('list');
        };

    });