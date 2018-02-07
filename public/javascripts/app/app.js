var app = angular.module('app', ['ngRoute', 'app.controllers', 'app.filters', 'app.directives', 'app.factories', 'ui.bootstrap']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: './public/views/home.html',
        })
        .when('/page1', {
            templateUrl: './public/views/page1.html',
        })
        .when('/page2', {
            templateUrl: './public/views/page2.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);