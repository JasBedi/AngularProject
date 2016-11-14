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
    
    .when('/dailyForecast/:days', {
        templateUrl: 'templates/dailyForecast.htm',
        controller: 'forecastController'
    })
    
    .when('/hourlyForecast', {
        templateUrl: 'templates/hourlyForecast.htm',
        controller: 'hourlyController'
    })
    
    
});