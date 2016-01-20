(function(){
    var app = angular.module('myreader', ['ionic', 'starter.config'])

    app.controller('readerCtrl', function($http, $scope, feed_url_production, feed_url_development){
        $scope.feedState = "onLoad";

        $scope.cargar_feeds = function(){
            //$http.get(feed_url_production)
            $http.get(feed_url_development)
                .success(function(response){
                    //console.log(response);
                    $scope.news = [];
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json( response );
                    angular.forEach(json.rss.channel.item,function(item){
                        d = new Date(item.pubDate);
                        diffDate = Math.abs( (d.getTime() - Date.now())/1000 );
                        if(diffDate<60){
                            diffDate =  Math.floor(diffDate);
                            tiempo = "Segundo";
                        }else{
                            if(diffDate<3600){
                                diffDate =  Math.floor(diffDate/60);
                                tiempo = "Minuto";
                            }else{
                                if(diffDate<86400){
                                    diffDate =  Math.floor(diffDate/3600);
                                    tiempo = "Hora";
                                }else{
                                    diffDate =  Math.floor(diffDate/86400);
                                    tiempo = "Día";
                                }
                            }
                        }
                        item.diffDate = diffDate;
                        item.diffDateUnits = tiempo;
                        $scope.news.push(item);
                    });
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
