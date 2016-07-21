console.log('app.js')

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/friends', {
    // FIXME!
    templateUrl: '/partials/friends.html',
    // controller: 'newController'
  })
  .when('/friends/new', {
    templateUrl: '/partials/new.html',
    controller: 'newController'
  })
  .when('/friends/:id/edit', {
    templateUrl: '/partials/edit.html',
    controller: 'editController'
  })
  .otherwise({
    redirectTo: '/'
  });
})
