var fithubControllers = angular.module('fithubControllers', []);

fithubControllers.controller('homeControl', ['$scope', function($scope) {
  $scope.data = "";
   $scope.displayText = "";
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