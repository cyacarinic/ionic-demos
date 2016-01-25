angular.module('starter', ['ionic',
    'starter.controllers',
    'starter.constants'])

    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('list',{
                url:'/list',
                templateUrl:'/templates/list.html'
            })
            .state('edit',{
                url:'/edit/:id',
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
