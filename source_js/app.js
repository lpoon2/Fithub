var app = angular.module('fithub',['ngRoute', 'fithubControllers','fitServices']);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "partials/home.html",
        controller : "homeControl"
    })
    .when("/workout", {
        templateUrl : "partials/workout.html",
        controller : "workoutControl"
    })
    .when("/create", {
        templateUrl : "partials/createWorkout.html",
        controller : "createWorkoutControl"
    })
    .otherwise({
        redirectTo: '/home'
    })
})

app.directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   

            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
            });                                                                              
        }                                                                                    
    }})  

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
