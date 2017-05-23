angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
    $scope.test = 'testys'

    $scope.travelData = mainSrv.travelInfo

})