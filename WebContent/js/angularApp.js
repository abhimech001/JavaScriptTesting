function helloWorld() {
	return "Hello World!";
}


var app = angular.module('app', []);

app.controller("MailController", function($scope){
	$scope.email = "";
	
	$scope.validateEmail = function() {
		var re = /\S+@\S+\.\S+/;
		if(re.test($scope.email)){
			$scope.message = "Ok";
		} else {
			$scope.message = "Wrong";
		}
	};
});

app.filter('negativeNumber',  function() {
	return function(number) {
		if (number < 0) {
			return number + " is negative";
		} else {
			return number + " is positive";
		}
	};
});

app.directive('newDirective', function () {
    return {
        restrict: 'E',
        template: '<h1>New directive</h1>'
    };
});