/**
 * Created by cyacarini on 25/01/16.
 */
angular.module('starter.constants',[])
    .constant('test','Hello World!!')
    .constant('lista_notas', angular.fromJson(window.localStorage['notas'] || '[]'));
    /*.constant('lista_notas',[
        {id:"1", titulo:"Nota 1", descripcion:"Detalle 1"},
        {id:"2", titulo:"Nota 2", descripcion:"Detalle 2"}
    ]);*/