var fitServices=angular.module("fitServices",[]);

fitServices.factory("Fit",function($http){
  return{
    signup : function(){
      return $http.post('/signup');
    },
    login : function(){
      return $http.post('/login'); 
    }
  }
}
  );
