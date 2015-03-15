
var owApp = angular.module('owApp', ['ngRoute']);

owApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/body', {
    controller: 'BodyCtrl',
    templateUrl: 'root.html'
  })
  .when('/settings', {
    controller: 'SettingsCtrl',
    templateUrl: 'settings.html'
  })
  .otherwise({ redirectTo: '/' });
}]);

owApp.controller('BodyCtrl', ['$scope', function ($scope) {
  $scope.content = { value: 'aaaaaaaaaaaaaaaaaaaa' };
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
    { name: 'settingA' },
    { name: 'settingB' }
  ];
}]);
