// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'templates/dailyWeather.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'templates/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'templates/forecast.htm',
        controller: 'forecastController'
    })
    
});