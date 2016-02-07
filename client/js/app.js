// script.js

    // create the module and name it scotchApp

    var honeyApp = angular.module('honeyApp', ['ngRoute','ngResource']);

    // create the controller and inject Angular's $scope
    honeyApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $
    });
	
	  honeyApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'client/Ang-templates/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/products', {
                templateUrl : 'client/Ang-templates/products.html',
                controller  : 'productsController'
            })
            // route for the contact page
            .when('/posts', {
                templateUrl : 'client/Ang-templates/post.html',
                controller  : 'postsController'
            }).when('/contacts', {
                templateUrl : 'client/Ang-templates/contacts.html',
                controller  : 'contactController'
            }).when('/login', {
                templateUrl : 'client/Ang-templates/login.html',
                controller  : 'loginController'
            }).when('/register', {
                templateUrl : 'client/Ang-templates/register.html',
                controller  : 'registerController'
            }).when('/news', {
                templateUrl : 'client/Ang-templates/index.html',
                controller  : 'newsController'
            });
    });
	












