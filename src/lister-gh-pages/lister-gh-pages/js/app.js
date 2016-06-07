(function () {
    var app = angular.module("listViewer", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/films", {
                templateUrl: "film.html",
                controller: "filmController"
            })
            .when("/teams", {
                templateUrl: "teams.html",
                controller: "seenController"
            })
            .when("/ios", {
                templateUrl: "ios.html",
                controller: "iosController"
            })
            .when("/mac", {
                templateUrl: "mac.html",
                controller: "macController"
            })
            .otherwise({ redirectTo: "/ios" });
    });
}());
