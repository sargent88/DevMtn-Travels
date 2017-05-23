angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
    $scope.test = 'ta ta ta test'

    $scope.idNum = mainSrv.packageInfo

    console.log($scope.idNum)

    for (var i = 0; i < $scope.idNum.length; i++) {
        if ($stateParams.id == $scope.idNum[i].id) {
            $scope.book = $scope.idNum[i]
        }
    }

})