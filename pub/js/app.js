
var owApp = angular.module('owApp', []);

owApp.controller('UserCtrl', function($scope) {
	$scope.users = [
	{ name: 'Oliver' },
	{ name: 'Hans' },
	{ name: 'Foo' },
	{ name: 'John Doe' },
	{ name: 'Otto' }
	];
});

