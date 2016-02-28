//3.ROUTES
weatherApp.config(function($routeProvider){
    $routeProvider
    //3.1   HOME PAGE
    .when('/',{
        
        templateUrl: 'pages/home.html',
        controller:'homeController'
        
    })
    //3.2   FORECAST PAGE
    .when('/forecast',{
        templateUrl: 'pages/forecast.html',
        controller:'forecastController'
    })
    //8 add :days
    .when('/forecast/:days',{
        templateUrl: 'pages/forecast.html',
        controller:'forecastController'
    })
});