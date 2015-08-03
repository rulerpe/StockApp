'use strict';

angular.module('stockappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'chart.js'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/main');

    $locationProvider.html5Mode(true);
  });
