/**
 * Created by Pro on 7/31/2017.
 */
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'

        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about-us', {
            url: '/about-us',
            templateUrl: 'about-us.html'
        })




});
