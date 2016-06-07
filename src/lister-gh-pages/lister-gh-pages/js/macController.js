(function () {
    var macController = function ($scope, lister) {

        var onMacComplete = function (data) {
            $scope.user = data;
            lister.getMac()
                .then(onData, onError);
        };

        var onData = function (data) {
            $scope.data = data;
        }

        var onError = function (response) {
            $scope.error = "An error occurred, please try again";
        };

        lister.getMac().then(onMacComplete, onError);

        $scope.listTitle = 'Mac App List';
    };

    var app = angular.module("listViewer");
    app.controller("macController", macController);
}());
