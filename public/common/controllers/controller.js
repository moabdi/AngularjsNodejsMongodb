/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
*/
var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", ['$scope', '$http',function ($scope, $http)
{
	var refresh = function(){
	    $http.get('/app/contacts').success(function(response){
	        $scope.contactlist = response;
	        $scope.contact = "";
	    });
	};

	refresh();
    
    $scope.addContact = function(){
    	console.log($scope.contact);
    	$http.post('/app/contacts', $scope.contact).success(function(response){
    		console.log("response");
    		refresh();
    	});
    };

    $scope.remove = function(id){
    	console.log(id);
    	$http.delete('/app/contacts/' + id).success(function(response){
    		refresh();
    	})
    };

    $scope.edit = function(id){
	   var contact = $scope.contactlist.filter(function(item) {
	      return item._id === id;
	    })[0];
	    $scope.contact = JSON.parse(JSON.stringify(contact));
	};
	

    $scope.update = function(id){
    	console.log($scope.contact._id);
    	$http.put('/app/contacts/'+ $scope.contact._id, $scope.contact).success(function(response){
    		console.log(response);

    		refresh();
    	});
    };

    $scope.deselect = function(){
    	$scope.contact = "";
    };

}]);