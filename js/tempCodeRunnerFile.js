const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    isBudgetEnough: function(data) {
        let storeArea = 0;
        let volume = 0;

        data.shops.forEach(shop => {
            storeArea += shop.width * shop.length;
        });

        volume = data.height * storeArea;

        if(data.budget - (volume * data.moneyPer1m3) >= 0){
            return 'Бюджета достаточно';
        } else {
            return 'Бюджета недостаточно';
        }
    }
}
shoppingMallData.isBudgetEnough(shoppingMallData);
console.log(shoppingMallData.isBudgetEnough(shoppingMallData));