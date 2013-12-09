'use strict';

angular.module('dyo5App')
  .controller('MainCtrl', function ($scope, localStorageService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var masterInStore = localStorageService.get('master');

    $scope.master = masterInStore && masterInStore.split('\n') || [];
    $scope.$watch(function () {
      localStorageService.add('master', $scope.master.join('\n'));
    });


    // Static
   

    $scope.addTodo = function(){
    	$scope.master.push($scope.todo);
    	$scope.todo = '';
    }

    $scope.removeTodo = function(index){
    	$scope.master.splice(index, 1);
    }

  

	$scope.master= {};
  $scope.update = function(customer) {
    $scope.master= angular.copy(customer);
  }; 
  $scope.reset = function() {
    $scope.customer = angular.copy($scope.master);
  };

  $scope.reset();
	$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			active:false
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];
    
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price
    $scope.servicestotal = function(){

		var stotal = '';

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				stotal = s.name + ', ';
			}
		});

		return stotal;
	};
	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
	  $scope.sayHello = function() {
    $scope.greeting = angular.copy($scope.master.name);
	$scope.greeting2 = function(){

		var stotal = '';

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				stotal = s.name + ', ';
			}
		});

		return stotal;
	};
};})
function getPerson(e) {
	var name = document.querySelector("#nameSearch").value;
	if(name === "" ) return;

	var transaction = db.transaction(["people"],"readonly");
	var store = transaction.objectStore("people");
	var index = store.index("name");

	var request = index.get(name);

		request.onsuccess = function(e) {

		var result = e.target.result;
		if(result) {
			var s = "<h2>Name "+name+"</h2><p>";
			for(var field in result) {
				s+= field+"="+result[field]+"<br/>";
			}
			document.querySelector("#status10").innerHTML = s;
			document.querySelector("#status").innerHTML = result['name'];
		} else {
			document.querySelector("#status").innerHTML = "<h2>No match</h2>";
		}	
	}	


}