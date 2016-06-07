(function () {
    var lister = function ($http) {
        var getSeen = function() {
            return $http.get("https://api.thechels.uk/seen/0/0")
                        .then(function (response) {
                            return response.data;
                        });
        }

        var getFilms = function() {
            return $http.get("https://api.thechels.uk/films/0/0")
                .then(function (response) {
                    return response.data;
                });
        }

        var getIos = function() {
            return $http.get("https://api.thechels.uk/ios/0/0")
                .then(function (response) {
                    return response.data;
                });
        }

        var getMac = function() {
            return $http.get("https://api.thechels.uk/mac/0/0")
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getSeen     : getSeen,
            getFilms    : getFilms,
            getMac      : getMac,
            getIos      : getIos
        };
    };

    var module = angular.module("listViewer");
    module.factory("lister", lister);
}());
