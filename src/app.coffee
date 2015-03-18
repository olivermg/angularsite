
owApp = angular.module 'owApp', ['ui.router'];



owApp.config(['$stateProvider', ($stateProvider) ->
  $stateProvider
  .state('welcome', {
    url: '/welcome',
    #templateUrl: 'welcome.html',
    data: {
      requireLogin: false
    }
  })
  .state('app', {
    #url: '/app',
    abstract: true,
    #templateUrl: 'app.html',
    data: {
      requireLogin: true
    }
  })
  .state('app.main', {
    url: '/main',
    controller: 'MainCtrl'
    #templateUrl: 'main.html'
  })
  .state('app.settings', {
    url: '/settings',
    controller: 'SettingsCtrl'
    #templateUrl: 'settings.html'
  });
]);



owApp.run(['$rootScope', ($rootScope) ->
  console.log("AAAAAAAAAAAAAA");
  console.log($rootScope);
]);



owApp.controller('MainCtrl', ['$scope', ($scope) ->
  $scope.content = 'aaaaaaaaaaaaaaaaaaaa';
]);

owApp.controller('UserCtrl', ['$scope', ($scope) ->
  $scope.users = [
    { name: 'Oliver' },
    { name: 'Hans' },
    { name: 'Foo' },
    { name: 'John Doe' },
    { name: 'Otto' }
  ];
]);

owApp.controller('SettingsCtrl', ['$scope', ($scope) ->
  $scope.settings = [
    { name: 'settingC', value: 1337 },
    { name: 'settingA', value: 315 },
    { name: 'settingB', value: 666 }
  ];
]);
