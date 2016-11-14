// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'templates/dailyWeather.htm',
        controller: 'homeController'
    })
    
    .when('/templates/dailyForecast', {
        templateUrl: 'templates/dailyForecast.htm',
        controller: 'forecastController'
    })
    
    .when('/templates/dailyForecast:days', {
        templateUrl: 'templates/dailyforecast.htm',
        controller: 'forecastController'
    })
    
});