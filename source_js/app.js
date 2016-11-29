var app = angular.module('fithub',['ngRoute', 'fithubControllers']);

app.config(function ($routeProvider) {
	$routeProvider
    .when("/home", {
        templateUrl : "partials/home.html",
        controller : "homeControl"
    })
    .otherwise({
    	redirectTo: '/home'
    })
})
