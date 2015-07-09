var app = angular.module('dummyApp', ['ngRoute']);
app.controller('mainController', ['$scope', '$routeParams', function($scope, $routeParams, $http) {
  $scope.something = function(){
    $http.get("http://10.142.74.81/dummyScript/index.php?a=123")
    .success(function(response) {$scope.names = response;}); 
  }
  $scope.message = 'I ain\'t no dummy!';  
}]).controller('whatController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.message = 'You\'re dummmy what?';
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  }).when('/main', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  }).when('/what', {
    templateUrl: 'pages/what.html',
    controller: 'whatController'
  });
}]);