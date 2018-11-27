let mainApp = angular.module("mainApp", []);

mainApp.factory('blowAmount', () => {
    let blowAmount = 0;

    return {
        getBlowAmount: getBlowAmount,
        setBlowAmount: setBlowAmount
    };

    function getBlowAmount() {
        return blowAmount;
    }

    function setBlowAmount(a) {
        blowAmount = a;
    }
});
