﻿(function() {

    var module = angular.module("moviesApp", ["ng", "ngRoute"]);


    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/details/:id?", {
                templateUrl: "/apps/moviesApp/templates/detail.html" //,
                //can also do controller: "DetailsController as detail"
            })
            .otherwise({
                redirectTo: "/list"
            });

    });

    module.run(function($rootScope) {
        $rootScope.version = angular.version;

        $rootScope.$on("$routeChangeError", function(event, route) {
            $rootScope.routeError = "Could not get to " + route.templateUrl;
        });

    });

}());