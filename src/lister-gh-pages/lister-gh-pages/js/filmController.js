(function () {
    var filmController = function ($scope, lister, $routeParams) {

        var onFilmComplete = function (data) {
            $scope.user = data;
            lister.getFilms($scope.user)
                .then(onData, onError);
        };

        var onData = function (data) {
            $scope.data = data;
        }

        var onError = function (response) {
            $scope.error = "An error occurred, please try again";
        };

        lister.getFilms().then(onFilmComplete, onError);

        $scope.listTitle = 'Film List';
    };

    var app = angular.module("listViewer");
    app.controller("filmController", filmController);
}());
