var app = angular.module('dummyApp', ['ngRoute']);
app.controller('mainController', ['$scope', '$routeParams', function($scope, $routeParams, $http) {
  $scope.something = function($http){
    $ip = 'http://192.168.1.12';
    $http.get($ip . "/dummyScript/index.php?a=123&b=1").success(function(response) {
      console.log('working!');
      $scope.names = response;
      console.log(response);
    }); 
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