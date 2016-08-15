var app = angular.module('myApp', []);
app.controller('controller', function($scope){
    $scope.names = [
        {name: 'John',country: 'Sweden'},
        {name: 'Tyrese',country: 'America'},
        {name: 'Sara',country: 'Astrilia'},
        {name: 'Mike',country: 'Japan'}
    ];
});
