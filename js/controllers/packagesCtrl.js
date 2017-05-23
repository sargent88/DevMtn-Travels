angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {
    $scope.test = 'testacular'

    $scope.packageData = mainSrv.packageInfo

})