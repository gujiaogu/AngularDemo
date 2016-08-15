var app = angular.module('rootApp', []);
app.controller('controller1', function($scope, $location){
    $scope.url = $location.absUrl();
});

app.controller('controller2', function($scope){
    $scope.name = "John";
});
