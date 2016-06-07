(function () {
    var seenController = function ($scope, lister) {

        var onSeenComplete = function (data) {
            $scope.user = data;
            lister.getSeen()
                .then(onData, onError);
        };

        var onData = function (data) {
            $scope.data = data;
        }

        var onError = function (response) {
            $scope.error = "An error occurred, please try again";
        };

        lister.getSeen().then(onSeenComplete, onError);

        $scope.listTitle = 'Team List';
    };

    var app = angular.module("listViewer");
    app.controller("seenController", seenController);
}());
