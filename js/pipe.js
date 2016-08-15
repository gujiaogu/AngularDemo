var app = angular.module('myApp', []);
app.controller('controller', function($scope){
    $scope.names = [
        {name: 'John',country: 'Sweden'},
        {name: 'Tyrese',country: 'America'},
        {name: 'Sara',country: 'Astrilia'},
        {name: 'Mike',country: 'Japan'}
    ];
});

var locationApp = angular.module('locationApp', []);
locationApp.controller('locationController', function($scope, $location){
    $scope.url = $location.absUrl();
});
