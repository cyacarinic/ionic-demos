/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.services',[])
    .factory('noteStorage', function (lista_notas) {
        var persist = function(){
            // localStorage solo almacena texto, entonces --> OBJECT TO JSON
            window.localStorage['notas'] = angular.toJson(lista_notas);
        };

        return {
            list: function(){
                return lista_notas;
            },
            get: function(id){
                return lista_notas.filter(function(nota){
                    return nota.id === id;
                })[0]; // Siempre retorna un array, elegir el primero
            },
            create: function(nota){
                lista_notas.push(nota);
                persist();
            },
            update: function(nota){
                for(var i=0; i<lista_notas.length; i++){
                    if(lista_notas[i].id == nota.id){
                        lista_notas[i]=nota;
                        persist();
                        return;
                    }
                }
            }
        };
    });