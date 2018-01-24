angular.module("dessertsApp", ["ngRoute", "RouteControllers"]);
 
angular.module("dessertsApp").config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
 
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    })
    .when("/add", {
        templateUrl: "templates/add.html",
        controller: "AddController"
    })
    .when("/edit/:id", {
        templateUrl: "templates/add.html",
        controller: "EditController"
    })
    .when("/delete/:id", {
        templateUrl: "templates/add.html",
        controller: "DeleteController"
    });
});