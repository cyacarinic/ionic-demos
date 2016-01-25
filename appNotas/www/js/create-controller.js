/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers')
    .controller('createCtrl', function($scope, $state, noteStorage){
        $scope.nota = {
            id: new Date().getTime().toString(),
            titulo : "",
            descripcion : ""
        };

        $scope.guardarNota = function(){
            noteStorage.create($scope.nota);
            $state.go('list');
        };

    });