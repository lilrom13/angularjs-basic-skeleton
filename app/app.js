/**
 * Created by romain on 2016-11-27.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'myApp.home']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/templates/home/home.html'});
}]);

