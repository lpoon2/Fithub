var fitServices=angular.module("fitServices",[]);
// TODO Change this
var baseURL = "http://localhost:3000/api";

fitServices.factory("Fit",function($http,$window){
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
fitServices.factory("Users", function($http){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/users");
		},
		getOne: function(userID) {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/users/" + userID);
		},
		add: function(data){
			return $http.post(baseURl+'/users', data);
		},
		delete: function(userID) {
			//var sessionID = $window.sessionStorage.id
			return $http.delete(baseURL + "/users/" + userID);
		},
		customGet: function(parameters){
			return $http.get(baseURL + "/users?" + parameters);
		}

	}
});


// Elements
fitServices.factory("Elements", function($http){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/elements");
		},
		getOne: function(elementID) {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/elements/" + elementID);
		},
		add: function(elementName, elementDesc, elementType, elementMedia, elementKeywords){
			data = {
				name: elementName,
				description: elementDesc,
				type: elementType,
				media: elementMedia,
				keywords: elementKeywords
			}
			return $http.post(baseURl+'/elements', data);
		},
		delete: function(elementID) {
			//var sessionID = $window.sessionStorage
			return $http.delete(baseURL + "/elements/" + elementID);
		},
		customGet: function(parameters){
			return $http.get(baseURL + "/elements?" + parameters);
		}
	}
});


// GET all workouts
fitServices.factory("Workouts", function($http){
	return{
		get: function() {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/workout");
		},
		getOne: function(workoutID) {
			//var sessionID = $window.sessionStorage
			return $http.get(baseURL + "/workout/" + workoutID);
		},
		add: function(data){
			return $http.post(baseURl+'/workout', data);
		},
		// TODO Update FIX THIS
		update: function(data){
			return $http.put(baseURl+'/workout/' + id, data);
		},
		delete: function(workoutID) {
			//var sessionID = $window.sessionStorage
			return $http.delete(baseURL + "/workout/" + workoutID);
		},
		customGet: function(parameters){
			return $http.get(baseURL + "/workout?" + parameters);
		}
	}
});
