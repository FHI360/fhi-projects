'use strict';

angular.module('fhiProjectsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'leaflet-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
