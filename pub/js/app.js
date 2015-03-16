
var owApp = angular.module('owApp', ['ngRoute']);

owApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/main', {
    controller: 'MainCtrl',
    templateUrl: 'main.html'
  })
  .when('/settings', {
    controller: 'SettingsCtrl',
    templateUrl: 'settings.html'
  })
  .otherwise({ redirectTo: '/' });
}]);

owApp.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.content = 'aaaaaaaaaaaaaaaaaaaa';
}]);

owApp.controller('UserCtrl', ['$scope', function ($scope) {
  $scope.users = [
    { name: 'Oliver' },
    { name: 'Hans' },
    { name: 'Foo' },
    { name: 'John Doe' },
    { name: 'Otto' }
  ];
}]);

owApp.controller('SettingsCtrl', ['$scope', function ($scope) {
  $scope.settings = [
    { name: 'settingC', value: 1337 },
    { name: 'settingA', value: 315 },
    { name: 'settingB', value: 666 }
  ];
}]);
