
owApp = angular.module 'owApp', ['ui.bootstrap', 'ui.router']



owApp.config(['$stateProvider', ($stateProvider) ->
  $stateProvider
  .state('welcome', {
    url: '#',
    templateUrl: '/welcome',
    data: {
      requireLogin: false
    }
  })
  .state('loginModal', {
    url: '#',
    controller: 'LoginModalCtrl',
    templateUrl: '/loginModal'
    data: {
      requireLogin: false
    }
  })
  .state('verifyLogin', {
    #url: '#',
    controller: 'VerifyLoginCtrl',
    #templateUrl: '/verifyLogin',
    data: {
      requireLogin: false
    }
  })
  .state('app', {
    url: '#',
    abstract: true,
    #templateUrl: '/app',
    template: '<ui-view/>',
    data: {
      requireLogin: true
    }
  })
  .state('app.main', {
    #url: '',
    controller: 'MainCtrl'
    templateUrl: '/main'
  })
  .state('app.settings', {
    #url: '',
    controller: 'SettingsCtrl'
    templateUrl: '/settings'
  })
])



owApp.run(['$rootScope', ($rootScope) ->
	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
		requireLogin = toState.data.requireLogin
		if requireLogin && typeof $rootScope.currentUser is 'undefined'
			console.log 'login required!'
			event.preventDefault()
	)
])



owApp.service('LoginService', ['$http', ($http) ->
	this.login = (user, pass) ->
		promise = $http.post('/api/verifyLogin', { user: user, pass: pass })
			.then(
				(resp) ->
					console.log('http success:')
					console.log(resp)
					if resp.data.success is true
						console.log('login successful!')
						return { loggedIn: true }
					else
						console.log('login failed!')
						return { loggedIn: false }
				(err) ->
					console.log('http error:')
					console.log(err)
					return { loggedIn: false }
			)
		return promise

	return this
])



owApp.controller('MainCtrl', ['$scope', ($scope) ->
  $scope.content = 'aaaaaaaaaaaaaaaaaaaa'
])

owApp.controller('UserCtrl', ['$scope', ($scope) ->
	$scope.users = [
		{ name: 'Oliver' },
		{ name: 'Hans' },
		{ name: 'Foo' },
		{ name: 'John Doe' },
		{ name: 'Otto' }
	]

])

owApp.controller('SettingsCtrl', ['$scope', ($scope) ->
  $scope.settings = [
    { name: 'settingC', value: 1337 },
    { name: 'settingA', value: 315 },
    { name: 'settingB', value: 666 }
  ]
])

owApp.controller('LoginModalCtrl', ['$scope', '$rootScope', '$modal', 'LoginService', ($scope, $rootScope, $modal, loginService) ->
	$scope.open = () ->
		console.log("OPEN")
		modalInstance = $modal.open({
			templateUrl: '/loginModal',
			controller: 'ModalInstanceCtrl'
		})

		modalInstance.result.then(
			(result) ->
				console.log('OK')
				console.log(result)
				loginService.login(result).then((r) ->
					console.log('loginService returned:')
					console.log(r))
				$rootScope.currentUser = 'oliver'
			(result) ->
				console.log('CANCEL')
				console.log(result))
])

owApp.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', ($scope, $modalInstance) ->
	$scope.ok = () ->
		$modalInstance.close('=> ok')

	$scope.cancel = () ->
		$modalInstance.dismiss('=> cancel')
])

owApp.controller('VerifyLoginCtrl', ['$rootScope', 'LoginService', ($rootScope, loginService) ->
	if loginService.login('oliver')
		$rootScope.currentUser = 'oliver'
])

