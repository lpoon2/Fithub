var fitServices=angular.module("fitServices",[]);
// TODO Change this
var baseURL = "http://localhost:3000/api";

fitServices.factory("Fit",function($http){
  return{
    signup : function(){
      return $http.post('/signup');
    },
    login : function(){
      return $http.post('/login'); 
    }
  }
});


// GET all users 
fitServices.factory("getAllUsers", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/users");
		}
	}
});


// GET Specific User
fitServices.factory("getOneUser", function($http, $window){
	return{
		get: function(userID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/users/" + userID);
		}
	}
});


// TODO CREATE a User 
// Larry 
fitServices.factory("addUser", function($http, $window){
	return{
		add: function(userName, userEmail, userPassword){
			data = {
				name: name,
				email: userEmail,
				password: userPassword
			}
			return $http.post(baseUrl+'/users', data);
		}
	}
});


// TODO DELETE a user
fitServices.factory("deleteUser", function($http, $window){
	return{
		delete: function(userID) {
			//var sessionID = $window.sessionStorage.id 
			return $http.delete(baseURL + "/users/" + userID);
		}
	}
});


// GET all elements
fitServices.factory("getAllElements", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/elements");
		}
	}
});


// GET Specific element
fitServices.factory("getOneElement", function($http, $window){
	return{
		get: function(elementID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/elements/" + elementID);
		}
	}
});


// TODO CREATE a lift 
// FOR DEVELOPER USE ONLY 
// Delete before going into Production
fitServices.factory("addElement", function($http, $window){
	return{
		add: function(elementName, elementDesc, elementType, elementMedia, elementKeywords){
			data = {
				name: elementName,
				description: elementDesc,
				type: elementType,
				media: elementMedia,
				keywords: elementKeywords
			}
			return $http.post(baseUrl+'/elements', data);
		}
	}
});

// TODO DELETE an element
fitServices.factory("deleteElement", function($http, $window){
	return{
		delete: function(elementID) {
			//var sessionID = $window.sessionStorage 
			return $http.delete(baseURL + "/elements/" + elementID);
		}
	}
});


// GET all workouts
fitServices.factory("getAllWorkouts", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/workout");
		}
	}
});


// GET Specific workout
fitServices.factory("getOneWorkout", function($http, $window){
	return{
		get: function(workoutID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/workout/" + workoutID);
		}
	}
});


// TODO CREATE a workout
// Unsure of how to post with the embedded document
fitServices.factory("addWorkout", function($http, $window){
	return{
		add: function(workoutName, workoutDesc, workoutOriginUser, workoutCurrUser, workoutPrivate){
			data = {
				name: workoutName,
				description : workoutDesc,
				original_user : workoutOriginUser,
				current_user : workoutCurrUser,
				private: workoutPrivate
			}
			return $http.post(baseUrl+'/workout', data);
		}
	}
});

// TODO DELETE a workout
fitServices.factory("deleteWorkout", function($http, $window){
	return{
		delete: function(workoutID) {
			//var sessionID = $window.sessionStorage 
			return $http.delete(baseURL + "/workout/" + workoutID);
		}
	}
});