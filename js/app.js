'use strict';

angular.module('myApp', ['ngRoute'])
    .controller('BookController', function($scope, $routeParams) {
        $scope.name = 'BookController';
        $scope.params = $routeParams;
    })

    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'CompaniesViewCtrl',
            })
            .when('/project_a', {
                templateUrl: 'partials/project_a.html',
                controller: 'GenericViewCtrl',
            })
            .otherwise({redirectTo: '/home'});
    });
