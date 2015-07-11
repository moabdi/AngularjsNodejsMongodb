/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
*/
var loginApp = angular.module('loginApp', ['ui.router', 'angular-storage']);
/*
loginApp.config(function($stateProvider){
    $stateProvider.state('login', {
        url: '/index',
        controller: 'LoginController',
        templateUrl: '/index.html'
    });
})
.controller("LoginCtrl", function LoginController($scope, $http, store, $state)
{
    $scope.user = {};

    $scope.login = function(){
    	console.log($scope.user);
    	$http({
            url : '/authenticate/'+$scope.user.username +'/'+$scope.user.password,
            methode: 'POST',
    		data: $scope.user
    	}).then(function(response){
            storage.set('jwt', response.data.id_token);
            $state.go('login');
        }, function(response){
            alert(response.data);
        }
        );
    };
/*
    $scope.loginUser = function(){
        console.log($scope.user);
        $http.get(
            url : '/authenticate/'+$scope.user.username +'/'+$scope.user.password, $scope.user).success(function(response){
            console.log("response");
            $location = '/index.html';
        });
    };

    $scope.subscribe = function(){
        console.log($scope.user);
        $http.post('/app/contacts', $scope.user).success(function(response){
            console.log("response");
        });
    };    

});
*/