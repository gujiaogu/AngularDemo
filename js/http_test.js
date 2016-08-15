var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
    console.log('test');
    $http.jsonp("http://www.runoob.com/try/angularjs/data/Customers_MySQL.php").success(function(response){
        console.log(response);
        $scope.content = response;
    })
});
