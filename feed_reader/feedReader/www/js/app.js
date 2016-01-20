(function(){
    var app = angular.module('myreader', ['ionic', 'starter.config'])

    app.controller('readerCtrl', function($http, $scope, feed_url_production, feed_url_development){
        $scope.feedState = "onLoad";

        $scope.cargar_feeds = function(){
            //$http.get(feed_url_production)
            $http.get(feed_url_development)
                .success(function(response){
                    //console.log(response);
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json( response );
                    $scope.news = json.rss.channel.item;
                    $scope.feedState = "onSuccess";

                })
                .error(function(data){
                    $scope.feedState = "onFail";
                })
                .finally(function() {
                   $scope.$broadcast('scroll.refreshComplete');
                 });
        }
    });


    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
}());
