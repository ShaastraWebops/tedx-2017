'use strict';

/**
 * @ngdoc overview
 * @name tedx2017App
 * @description
 * # tedx2017App
 *
 * Main module of the application.
 */
angular
  .module('tedx2017App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ripple', {
        templateUrl: 'views/ripple.html',
        controller: 'RippleCtrl',
        controllerAs: 'ripple'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/previous', {
        templateUrl: 'views/previous.html',
        controller: 'PreviousCtrl',
        controllerAs: 'previous'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
