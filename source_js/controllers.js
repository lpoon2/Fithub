var fithubControllers = angular.module('fithubControllers', []);

fithubControllers.controller('homeControl', ['$scope', function($scope) {
  $scope.data = "";
   $scope.displayText = ""

  $scope.setData = function(){
    CommonData.setData($scope.data);
    $scope.displayText = "Data set"

  };

}]);