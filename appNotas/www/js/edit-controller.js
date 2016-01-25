/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers')
    .controller('editCtrl', function($scope, $state, test, lista_notas){
        $scope.id_recibido = $state.params.id;
        $scope.texto_test = test;
        var getNota = function(id){
            return lista_notas.filter(function(nota){
                return nota.id === id;
            })[0]; // Siempre retorna un array, elegir el primero
        };
        $scope.nota = getNota($scope.id_recibido);
    });