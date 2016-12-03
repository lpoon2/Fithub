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


// Users 
fitServices.factory("Users", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/users");
		}
		getOne: function(userID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/users/" + userID);
		}
		add: function(userName, userEmail, userPassword){
			data = {
				name: name,
				email: userEmail,
				password: userPassword
			}
			return $http.post(baseUrl+'/users', data);
		}
		delete: function(userID) {
			//var sessionID = $window.sessionStorage.id 
			return $http.delete(baseURL + "/users/" + userID);
		}
		customGet: function(parameters){
			return $http.get(baseURL + "/users?" + parameters);
		}

	}
});


// Elements
fitServices.factory("Elements", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/elements");
		}
		getOne: function(elementID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/elements/" + elementID);
		}
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
		delete: function(elementID) {
			//var sessionID = $window.sessionStorage 
			return $http.delete(baseURL + "/elements/" + elementID);
		}
		customGet: function(parameters){
			return $http.get(baseURL + "/elements?" + parameters);
		}
	}
});


// GET all workouts
fitServices.factory("Workouts", function($http, $window){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/workout");
		}
		getOne: function(workoutID) {
			//var sessionID = $window.sessionStorage 
			return $http.get(baseURL + "/workout/" + workoutID);
		}
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
		// TODO Update FIX THIS
		update: function(ID, workoutName, workoutDesc, workoutOriginUser, workoutCurrUser, workoutPrivate, numFav, numCopy, workoutRating, comments, days, keywords){
			data = {
				name: workoutName,
				description : workoutDesc,
				original_user : workoutOriginUser,
				current_user : workoutCurrUser,
				private: workoutPrivate,
				num_favorite : numFav,
  				num_copy : numCopy,
  				rating : workoutRating,
  				comments: comments,
  				keywords: keywords,
  				days: days
			}
			return $http.put(baseUrl+'/workout/' + id, data);		
		}
		delete: function(workoutID) {
			//var sessionID = $window.sessionStorage 
			return $http.delete(baseURL + "/workout/" + workoutID);
		}
		customGet: function(parameters){
			return $http.get(baseURL + "/workout?" + parameters);
		}
	}
});