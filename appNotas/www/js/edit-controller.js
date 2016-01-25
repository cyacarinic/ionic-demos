/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers')
    .controller('editCtrl', function($scope, $state, test, noteStorage ){
        $scope.id_recibido = $state.params.id;
        $scope.texto_test = test;

        // copiamos la nota para no editarla en el scope
        $scope.nota = angular.copy(noteStorage.get($scope.id_recibido));
        $scope.guardarNota = function(){
            noteStorage.update($scope.nota);
            $state.go('list');
        };
    });