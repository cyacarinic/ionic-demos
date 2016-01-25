/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.controllers', ['ionic'])
    .controller('listCtrl', function($scope, lista_notas){
        $scope.notas = lista_notas;
    });