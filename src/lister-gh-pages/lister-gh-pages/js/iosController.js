(function () {
    var iosController = function ($scope, lister) {

        var onIosComplete = function (data) {
            $scope.user = data;
            lister.getIos()
                .then(onData, onError);
        };

        var onData = function (data) {
            $scope.data = data;
        }

        var onError = function (response) {
            $scope.error = "An error occurred, please try again";
        };

        lister.getIos().then(onIosComplete, onError);

        $scope.listTitle = 'iOS App List';
    };

    var app = angular.module("listViewer");
    app.controller("iosController", iosController);
}());

