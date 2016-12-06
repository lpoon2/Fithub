var fithubControllers=angular.module("fithubControllers",[]);fithubControllers.controller("homeControl",["$scope","$window","Fit",function($scope,$window,Fit){$scope.loggedIn=Boolean($window.sessionStorage.isLogedin),$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,console.log("Scope"+$scope.loggedIn),console.log($scope.userName),$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1}}]),fithubControllers.controller("signUpControl",["$scope","$window","$location","Fit","Users",function($scope,$window,$location,Fit,Users){$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},$scope.signUpObject={},$scope.signUp=function(){Fit.signup($scope.signUpObject).success(function(data){console.log(data);var param='where={"email":"'+$scope.signUpObject.email+'"}';Users.customGet(param).success(function(data){$window.sessionStorage.isLogedin=!0,$window.sessionStorage.user_id=data.data[0]._id,$window.sessionStorage.user_name=data.data[0].name,$location.path("/explore")})})}}]),fithubControllers.controller("createWorkoutControl",["$scope","$http","$window","$location","Workouts","Fit",function($scope,$http,$window,$location,Workouts,Fit){$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},$scope.elements=["Bench Press","Biking","Dumbbell Flies","Leg Extensions","Tennis","Basketball","Bicep Curls","Maltese Flies"],$scope.tags=["lifting","Cardio","Sports","chest","Legs","Back","Arms","Endurance","Strength","Outdoors","Indoors","Bodyweight"],$scope.addToWorkout=function(element,targetDay){elementToAdd={},elementToAdd.element=element,elementToAdd.sets="",elementToAdd.reps="",elementToAdd.time="",elementToAdd.distance="";for(var i=0;i<$scope.workout.days.length;i++)$scope.workout.days[i].day==targetDay&&(elementToAdd.index=$scope.workout.days[i].currIndex,$scope.workout.days[i].elements.push(elementToAdd),$scope.workout.days[i].currIndex++)},$scope.removeFromWorkout=function(elementIndex,targetDay){for(var i=0;i<$scope.workout.days.length;i++)if($scope.workout.days[i].day==targetDay)for(var j=0;j<$scope.workout.days[i].elements.length;j++)$scope.workout.days[i].elements[j].index==elementIndex&&$scope.workout.days[i].elements.splice(j,1)},$scope.scrollToTarget=function(target){console.log(target),$.scrollTo($(target))},$scope.setActiveElement=function(element){$scope.activeElement=element,$("#addedElementModal").modal("show")},$scope.setPeekElement=function(element){$scope.peekElement=element,$("#elementModal").modal("show")},$scope.toggleTag=function(tag){var tagIndex=$scope.workout.tags.indexOf(tag);-1==tagIndex?$scope.workout.tags.push(tag):$scope.workout.tags.splice(tagIndex,1),console.log($scope.workout.tags)},$scope.getTagClass=function(tag){return-1!=$scope.workout.tags.indexOf(tag)?"ui button tagButton":"ui button tagButton active"},$.extend($.scrollTo.defaults,{axis:"y",duration:800,offset:-54}),$scope.submit=function(){Workouts.add($scope.workout).success(function(data){var userid=$window.sessionStorage.user_id;Users.getOne(userid).success(function(user){user.data.workouts.push(data.data._id),Users.put(userid,user.data).success(function(){console.log("workout created")})}),$location.path("/workout/"+data.data._id)})}}]),fithubControllers.controller("workoutControl",["$scope","$window","$location","Workouts","Fit",function($scope,$window,$location,Workouts,Fit){$scope.workoutid=$routeParams.id,$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},Workouts.getOne($scope.workoutid).success(function(data){console.log("get the workout"),$scope.workout=data.data}),$scope.tabs=[{title:"Summary",url:"summaryView"},{title:"Detailed",url:"detailedView"}],$scope.currentTab="summaryView",$scope.onClickTab=function(tab){$scope.currentTab=tab.url},$scope.determineClass=function(tabUrl){return tabUrl==$scope.currentTab?"active item":"item"},$scope.copy=function(){$scope.workout.num_copy++,Workouts.update($scope.workoutid,$scope.workout);var newWorkout=$scope.workout;newWorkout._id=void 0,newWorkout.comments=[],newWorkout.dateCreated=void 0,newWorkout.original_user=$scope.workout.current_user,newWorkout.original_user_id=$scope.workout.current_user_id,newWorkout.current_user=$scope.userName,newWorkout.current_user_id=$scope.userID,Workouts.add(newWorkout).success(function(data){var userid=$window.sessionStorage.user_id;Users.getOne(userid).success(function(user){user.data.workouts.push(data.data._id),Users.put(userid,user.data).success(function(){console.log("workout added")})}),$location.path("/workout/edit"+data.data._id)})},$scope.check_user=function(){return $scope.userID==$scope.workout.current_user_id},$scope.favorite=function(){$scope.workout.num_favorite++,Workouts.update($scope.workoutid,$scope.workout).success(function(){console.log("update the workout")}),Users.getOne($scope.userID).success(function(user){user.data.liked_workouts.push($scope.workout._id),Users.put($scope.userID,user.data).success(function(){console.log("fav successfully")})})}}]),fithubControllers.controller("userProfileControl","Fit",["$scope","$window","$location",function($scope,$window,$location,Fit){$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.currentUser=$routeParams.id,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},$(".menu .item").tab();var same_user=$scope.userID==$scope.workout.current_user_id;same_user?Workouts.customGet('where={"current_user_id":'+$scope.userID).success(function(data){console.log("get workouts"),$scope.workouts=data.data}):Workouts.customGet('where={"current_user_id":'+$scope.userID+', "public":true}').success(function(data){console.log("get workouts"),$scope.workouts=data.data})}]),fithubControllers.controller("exploreControl",["$scope","$location","$window","Fit",function($scope,$location,$window,Fit){$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},$scope.sortParameter="favCount",Workouts.get().success(function(data){console.log("get workouts"),$scope.workouts=data.data}),$scope.filterQuery=function(workout){return""==$scope.query||void 0==$scope.query?!0:workout.name.toLowerCase().includes($scope.query.toLowerCase())?!0:workout.current_user.toLowerCase().includes($scope.query.toLowerCase())?!0:-1!=workout.tags.indexOf($scope.query.toLowerCase())?!0:void 0},$scope.toggleSort=function(sort){$scope.sortParameter=sort}}]),fithubControllers.controller("loginControl",["$scope","$window","$location","Fit","Users",function($scope,$window,$location,Fit,Users){$scope.loggedIn=$window.sessionStorage.isLogedin,$scope.userID=$window.sessionStorage.user_id,$scope.userName=$window.sessionStorage.user_name,$scope.logout=function(){Fit.logout()},$scope.checkLoggedIn=function(){return console.log("the value of isLoged in is "+String($window.sessionStorage.isLogedin)),1==$window.sessionStorage.isLogedin?!0:!1},$scope.loginObject={},$scope.login=function(){Fit.login($scope.loginObject).success(function(data){console.log("Login successfully!"),console.log(data);var param='where={"email":"'+$scope.loginObject.email+'"}';Users.customGet(param).success(function(data){console.log(data),$window.sessionStorage.isLogedin="true",$window.sessionStorage.user_id=data.data[0]._id,$window.sessionStorage.user_name=data.data[0].name,$location.path("/explore")})})}}]);