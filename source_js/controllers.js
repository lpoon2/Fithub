var fithubControllers = angular.module('fithubControllers', []);

fithubControllers.controller('homeControl', ['$scope','Fit', function($scope,Fit) {

}]);

fithubControllers.controller('signupLoginControl', ['$scope','Fit', function($scope,Fit) {

   $scope.signup = function(){
      Fit.signup()
      .success(function(user){
        console.log('Thanks for registering!');
      });
   }
   $scope.login = function(){
         Fit.signup()
         .success(function(user){
           console.log('Welcome back!');
         });
      }

}]);

fithubControllers.controller('createWorkoutControl', ['$scope', function($scope) {
	$scope.elements = ['Bench Press', 'Biking', 'Dumbbell Flies', 
						'Leg Extensions', 'Tennis', 'Basketball', 'Bicep Curls', 'Maltese Flies'];

	$scope.tags = ['Lifting', 'Cardio', 'Sports', 'Chest', 'Legs', 'Back', 'Arms', 'Endurance', 
	'Strength', 'Outdoors', 'Indoors', 'Bodyweight'];

	$scope.workout = {
		name: '3-Day Chest Workout',
		description: 'A 3 day chest only focus along with two days of chest oriented cardio',
		original_user: 'OnlyChestDay',
		current_user: 'OnlyChestDay',
		rating: 32,
		copies: 12,
		tags: [],
		comments: [
			{
				user: 'John Smith',
				body: 'This is a great workout! I will be starting it ASAP.'
			},
			{
				user: 'Harry Potter',
				body: 'Really good workout. I suggest possibly swapping biking for a second day of swimming on Thursday as it is more involved for the chest.'
			},
			{
				user: 'Thomas Brethauer',
				body: 'Looks like a great workout, but everyone knows only leg day counts!'
			},
		],
		days : [
			{
				day: 'Sunday',
				currIndex: 0,
				elements: [
				]
			},
			{
				day: 'Monday',
				currIndex: 0,
				elements: [
				]
			},
			{
				day: 'Tuesday',
				currIndex: 0,
				elements: [
				]
			},
			{
				day: 'Wednesday',
				currIndex: 0,
				elements: [
				]
			},
			{
				day: 'Thursday',
				currIndex: 0,
				elements: [
				]
			},
			{
				day: 'Friday',
				currIndex: 0,
				elements: [

				]
			},
			{
				day: 'Saturday',
				currIndex: 0,
				elements: [
				]
			},
		]
	};

	$scope.addToWorkout = function(element, targetDay){
		elementToAdd = {};
		elementToAdd.element = element;
		elementToAdd.sets = '';
		elementToAdd.reps = '';
		elementToAdd.time = '';
		elementToAdd.distance = '';
		for(var i = 0; i<$scope.workout.days.length; i++){
			if($scope.workout.days[i].day == targetDay){
				elementToAdd.index = $scope.workout.days[i].currIndex;
				$scope.workout.days[i].elements.push(elementToAdd);
				$scope.workout.days[i].currIndex++;
			}
		}
	};

	$scope.removeFromWorkout = function(elementIndex, targetDay){
		for(var i = 0; i<$scope.workout.days.length; i++){
			if($scope.workout.days[i].day == targetDay){
				for(var j = 0; j < $scope.workout.days[i].elements.length; j++){
					if($scope.workout.days[i].elements[j].index == elementIndex){
						$scope.workout.days[i].elements.splice(j, 1);
					}
				}
			}
		}
	}

	$scope.scrollToTarget = function(target){
		console.log(target);
		$.scrollTo($(target));
	}

	$scope.setActiveElement = function(element){
		$scope.activeElement = element;
		$('#addedElementModal')
		  .modal('show')
		;
	}

	$scope.setPeekElement = function(element){
		$scope.peekElement = element;
		$('#elementModal')
		  .modal('show')
		;
	}

	$scope.toggleTag = function(tag){
		var tagIndex = $scope.workout.tags.indexOf(tag);
		if ( tagIndex != -1){
			$scope.workout.tags.push(tag);
		}else{
			$scope.workout.tags.splice(tagIndex,1);
		}
	}

	$scope.getTagClass = function(tag){
		if ($scope.workout.tags.indexOf(tag) != -1){
			return 'ui button tagButton'
		}else{
			return 'ui button tagButton active'
		}
	}

	$.extend($.scrollTo.defaults, {
	  axis: 'y',
	  duration: 800,
	  offset: -54
	});	
}]);

fithubControllers.controller('workoutControl', ['$scope', function($scope) {
	$scope.workout = {
		name: '3-Day Chest Workout',
		description: 'A 3 day chest only focus along with two days of chest oriented cardio',
		original_user: 'OnlyChestDay',
		current_user: 'OnlyChestDay',
		rating: 32,
		copies: 12,
		comments: [
			{
				user: 'John Smith',
				body: 'This is a great workout! I will be starting it ASAP.'
			},
			{
				user: 'Harry Potter',
				body: 'Really good workout. I suggest possibly swapping biking for a second day of swimming on Thursday as it is more involved for the chest.'
			},
			{
				user: 'Thomas Brethauer',
				body: 'Looks like a great workout, but everyone knows only leg day counts!'
			},
		],
		days : [
			{
				day: 'Sunday',
				elements: [
				]
			},
			{
				day: 'Monday',
				elements: [
					{
						element: 'Barbell Bench Press',
						sets: '3',
						reps: '12',
						time: '',
						distance: '',
					},
					{
						element: 'Dumbbell Press',
						sets: '3',
						reps: '12',
						time: '',
						distance: '',
					},
					{
						element: 'Incline Press',
						sets: '5',
						reps: '8',
						time: '',
						distance: '',
					},
					{
						element: 'Decline Press',
						sets: '5',
						reps: '8',
						time: '',
						distance: '',
					},
					{
						element: 'Push Ups',
						sets: '3',
						reps: '30',
						time: '',
						distance: '',
					},
				]
			},
			{
				day: 'Tuesday',
				elements: [
					{
						element: 'Swimming',
						sets: '',
						reps: '',
						time: '45 min',
						distance: '1 mi',
					},
				]
			},
			{
				day: 'Wednesday',
				elements: [
					{
						element: 'Push Ups',
						sets: '3',
						reps: '30',
						time: '',
						distance: '',
					},
					{
						element: 'Dumbbell Flies',
						sets: '3',
						reps: '12',
						time: '',
						distance: '',
					},
					{
						element: 'Dips',
						sets: '3',
						reps: '30',
						time: '',
						distance: '',
					},
					{
						element: 'Cable Crosses',
						sets: '5',
						reps: '8',
						time: '',
						distance: '',
					},
				]
			},
			{
				day: 'Thursday',
				elements: [
					{
						element: 'Biking',
						sets: '',
						reps: '',
						time: '45 min',
						distance: '5 mi',
					},
				]
			},
			{
				day: 'Friday',
				elements: [
					{
						element: 'Incline Press',
						sets: '5',
						reps: '8',
						time: '',
						distance: '',
					},
					{
						element: 'Decline Press',
						sets: '5',
						reps: '8',
						time: '',
						distance: '',
					},
					{
						element: 'Push Ups',
						sets: '3',
						reps: '30',
						time: '',
						distance: '',
					},
					{
						element: 'Maltese Flies',
						sets: '3',
						reps: '10',
						time: '',
						distance: '',
					},
					{
						element: 'Dips',
						sets: '3',
						reps: '30',
						time: '',
						distance: '',
					},
				]
			},
			{
				day: 'Saturday',
				elements: [
				]
			},
		]
	}
	$scope.tabs = [{
        title: 'Summary',
        url: 'summaryView'
	}, {
        title: 'Detailed',
        url: 'detailedView'
    }];
    $scope.currentTab = 'summaryView';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.determineClass = function(tabUrl) {
        if(tabUrl == $scope.currentTab){
        	return 'active item';
        }else{
        	return 'item';
        }
    }
}]);

fithubControllers.controller('userProfileControl', ['$scope', function($scope) {
	$('.menu .item')
	  .tab()
	;

	$scope.workouts = [
		{
			name: 'Workout 1',
			description: 'A random workout description',
			favCount: 32,
			copyCount: 12,
			tags: ['Lifting', 'Chest']
		},
		{
			name: 'Workout 2',
			description: 'A chest only workout. Optimized for 3 days a week',
			favCount: 32,
			copyCount: 12,
			tags: ['Lifting', 'Chest']
		},
		{
			name: 'Workout 3',
			description: 'Cardio intensive workout. Heavy focus on swimming and full body.',
			favCount: 32,
			copyCount: 12,
			tags: ['Lifting', 'Chest']
		},
		{
			name: 'Workout 4',
			description: 'A random workout description',
			favCount: 32,
			copyCount: 12,
			tags: ['Lifting', 'Chest']
		},
		{
			name: 'Workout 5',
			description: 'A random workout description',
			favCount: 32,
			copyCount: 12,
			tags: ['Lifting', 'Chest']
		},
	];

}]);
