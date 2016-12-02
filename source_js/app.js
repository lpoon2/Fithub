var app = angular.module('fithub',['ngRoute', 'fithubControllers']);

app.config(function ($routeProvider) {
	$routeProvider
    .when("/home", {
        templateUrl : "partials/home.html",
        controller : "homeControl"
    })
    .when("/workout", {
    	templateUrl	: "partials/workout.html",
    	controller : "workoutControl"
    })
    .otherwise({
    	redirectTo: '/home'
    })
})
