/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers')
    .controller('editCtrl', function($scope, $state, test, lista_notas){
        $scope.id_recibido = $state.params.id;
        $scope.texto_test = test;

        // Funciones de búsqueda y edición
        var getNota = function(id){
            return lista_notas.filter(function(nota){
                return nota.id === id;
            })[0]; // Siempre retorna un array, elegir el primero
        };

        var editarNota = function(nota){
            for(var i=0; i<lista_notas.length; i++){
                if(lista_notas[i].id == nota.id){
                    lista_notas[i]=nota;
                    return;
                }
            }
        }

        // copiamos la nota para no editarla en el scope
        $scope.nota = angular.copy(getNota($scope.id_recibido));
        $scope.guardarNota = function(){
            editarNota($scope.nota);
            $state.go('list');
        };
    });