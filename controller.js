var app = angular.module('mainApp', ['ngRoute', 'firebase']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'view.html'
        })
        .when('/admin', {
            templateUrl: 'admin.html',
        })
        .otherwise({
            redirectTo: '/'
        })
});
