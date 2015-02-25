angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $rootScope, Test) {
	$scope.name = '';
	$scope.$watch('name', function() {
		if($scope.name.toLowerCase() === 'aaron') {
			$scope.greeting = 'Nutella!!!!';
		}
		if($scope.name.toLowerCase() === 'travis') {
			$scope.greeting = 'My eyes, the goggles do nothing';
		}
		if($scope.name.toLowerCase() === 'burk') {
			$scope.greeting = 'Your mother thinks I am a nice young man';
		}
		if($scope.name.toLowerCase() === 'daniel') {
			$scope.greeting = 'Dave Brubeck is insane';
		}
		if($scope.name.toLowerCase() === 'alex') {
			$scope.greeting = 'Well put on your dress and lets dance!!';
		}
		if($scope.name.toLowerCase() === 'paul') {
			$scope.greeting = 'What we have here is a failure to communicate!!';
		}
        if($scope.name.toLowerCase() === 'gabe') {
			$scope.greeting = 'Now usually I don\'t do this, but, uh Go \'head on bring \'em off with little previews of the remix';
		}
		if($scope.name.toLowerCase() === 'hughie') {
			$scope.greeting = 'Quick question. If you were a hotdog would you eat yourself!?';
		}
		if($scope.name.toLowerCase() === 'erika') {
			$scope.greeting = 'Girls rule, boys drool';
		}
		if($scope.name.toLowerCase() === 'ryan') {
			$scope.greeting = 'What is attained too cheaply is esteemed to lightly';
		}
		else {
			$scope.greeting = '';
		}
	});
});
