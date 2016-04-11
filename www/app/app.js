angular.module('canoe', [
  'canoe.lyftServices',
  'canoe.uberServices',
  'canoe.main',
  'ngRoute',
  'ngCordova'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/mainView/mainView.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
