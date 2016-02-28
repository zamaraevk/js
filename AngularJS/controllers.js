//2.CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.submit = function() {
        $location.path("/forecast");
    }
    //6. WATCHERS
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);


weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    //8.1
    $scope.days = $routeParams.days || '2';
    
    //7. connect to api
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e4ad7169b44b9dee9d4098b577d87acd", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    //7.1 get data, 8.2 $scope.days
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    console.log($scope.weatherResult);
    
    //7.2 convert data
     $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    $scope.convertToDate = function(dt) { 
      return new Date(dt * 1000);
    };
    
}]);