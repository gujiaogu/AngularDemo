var app = angular.module('myApp', []);
app.controller('controller', function($scope) {
    //这里scope的名字是固定的，不能改为其他
    $scope.name = "John";
    $scope.telephone = "189434";
});
app.directive("runoobDirective", function() {
    return {
        restrict: "A",
        template : "<h1>自定义指令!</h1>"
    };
});

var anotherApp = angular.module('anotherApp', []);
anotherApp.controller('anotherCtrl', function($scope){
    $scope.x = 5;
    $scope.y = 6;
});
