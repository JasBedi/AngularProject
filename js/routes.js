// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'templates/dailyWeather.htm',
        controller: 'homeController'
    })
    
    .when('/dailyForecast', {
        templateUrl: 'templates/dailyForecast.htm',
        controller: 'forecastController'
    })
    
    .when('/dailyForecast:days', {
        templateUrl: 'templates/dailyforecast.htm',
        controller: 'forecastController'
    })
    
});