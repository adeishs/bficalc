mainApp.controller("mojoBucketController", ($scope, blowAmount) => {
    $scope.blowAmount = blowAmount;
    $scope.mojoBucket = {
        currentAmount: 100,
        getTargetAmount: () => {
            return 3 * $scope.blowAmount.getBlowAmount();
        },
        getFraction: () => {
            const mb = $scope.mojoBucket;

            return mb.currentAmount / mb.getTargetAmount();
        },
        getPercentage: () => {
            return 100 * $scope.mojoBucket.getFraction();
        },
    };
});
