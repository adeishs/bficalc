mainApp.controller("blowBucketController", ($scope, blowAmount) => {
    $scope.blowAmount = blowAmount;
    $scope.blowBucket = {
        accounts: {
            "Daily Expenses": {
                "Home mortgage/rent": 100,
                "Council rate": 10,
                "Water": 0,
                "Electricity": 0,
                "Gas": 0,
                "Internet": 0,
                "Mobile phone": 0,
                "Home and contents insurance": 0,
                "Food": 200,
            },
            "Splurge": {
                "Swimming": 10,
                "Gym": 5,
                "Other splurges": 50,
            },
            "Smile": {
                "Travel": 200,
            },
            "Fire Extinguisher": {
                "Mortgage": 50,
            },
        },
        getAccountAmount: (accountName) => {
            const a = $scope.blowBucket.accounts[accountName];
            let accountAmount = 0;

            for (let itemName in a) {
                accountAmount += a[itemName];
            }

            return accountAmount;
        },
        getTotalAmount: () => {
            const bb = $scope.blowBucket;
            const accounts = bb.accounts;
            let totalAmount = 0;

            for (let accountName in accounts) {
                totalAmount += bb.getAccountAmount(accountName);
            }

            $scope.blowAmount.setBlowAmount(totalAmount);
            return totalAmount;
        },
        getItemFraction: (accountName, itemName) => {
            const bb = $scope.blowBucket;

            return bb.accounts[accountName][itemName] / bb.getTotalAmount();
        },
        getAccountFraction: (accountName) => {
            const bb = $scope.blowBucket;

            return bb.getAccountAmount(accountName) / bb.getTotalAmount();
        },
        getItemPercentage: (accountName, itemName) => {
            const bb = $scope.blowBucket;

            return 100 * bb.getItemFraction(accountName, itemName);
        },
        getAccountPercentage: (accountName) => {
            const bb = $scope.blowBucket;

            return 100 * bb.getAccountFraction(accountName);
        },
        addItem: (accountName) => {
            const bb = $scope.blowBucket;
            const newItem = bb.newItem[accountName];

            bb.accounts[accountName][newItem.name] = newItem.amount;
            newItem.name = '';
            newItem.amount = 0;
        },
        removeItem: (accountName, itemName) => {
            const bb = $scope.blowBucket;

            delete bb.accounts[accountName][itemName];
        }
    };
});
