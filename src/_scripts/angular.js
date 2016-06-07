(function (angular) {
angular.module('mainModule', [])
      .controller('mainController', function($scope) {
        var employee = {
          firstName: 'vijay',
          designation: 'PLD',
          profile: 'images/img.jpg'
        };
        $scope.employee = employee;
      });
})(angular);