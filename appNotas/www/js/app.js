angular.module('starter', ['ionic',
    'starter.controllers',
    'starter.constants',
    'starter.services'])

    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('list',{
                url:'/list',
                templateUrl:'/templates/list.html'
            })
            .state('edit',{
                url:'/edit/:id',
                controller:'editCtrl',
                templateUrl:'/templates/edit.html'
            })
            .state('create',{
                url:'/create',
                controller:'createCtrl',
                templateUrl:'/templates/edit.html'
            });
        $urlRouterProvider.otherwise('/list');
    })

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });
