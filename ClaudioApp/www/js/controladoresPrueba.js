angular.module('prueba.controllers', [])

    .controller("controladorLista", function($scope, $state){
        $scope.ingresarDato = function(){
            //alert("Ingresa un dato..");

            navigator.notification.prompt(
                'Ingrese un nombre',
                onPrompt,
                'Añadir',
                ['Cancelar','Aceptar'], ''
            );
        };

        $scope.listItems = [{"name":"Mili"},{"name":"Claudio"}];

        onPrompt = function(valor){
            var nombre =valor.input1;
            if (nombre && valor.buttonIndex==2){
                $scope.listItems.push({
                    'name':nombre
                });
                //navigator.notification.beep(1);
                $state.go($state.current, {}, {reload: true});
            }
        };
    });

