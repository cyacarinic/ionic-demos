// Claudio Yacarini's Ionic App

angular.module('starter', ['ionic', 'starter.controllers', 'prueba.controllers', 'ngCordova'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Remove this to show the accessory bar above the keyboard
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
             }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.navegadores', {
                url: "/navegadores",
                views: {
                    'menuContent': {
                        templateUrl: "templates/navegadores.html"
                    }
                }
            })

            .state('app.aniadirLista', {
                url: "/aniadirLista",
                views: {
                    'menuContent': {
                        templateUrl: "templates/elementos.html"
                    }
                }
            })
            .state('app.usuariosPoder', {
                url: "/usuariosPoder",
                views: {
                    'menuContent': {
                        templateUrl: "templates/listaApi.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.detalleUsuario', {
                url: "/usuariosPoder/:usuarioID",
                views: {
                    'menuContent': {
                        templateUrl: "templates/usuario.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/usuariosPoder');
    });