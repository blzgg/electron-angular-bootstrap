angular.module('app.controllers').controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.title = "Electron Angular Bootstrap";

    $scope.setRoute = function(route){
        $location.path(route);
    };
}]);
