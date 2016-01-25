/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers', [])
    .controller('listCtrl', function($scope, noteStorage){
        $scope.notas = noteStorage.list();
    });