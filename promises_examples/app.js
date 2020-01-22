function makePizza(toppings = []) {
        return new Promise(function (resolve, reject) {
                const ammountOfTimeToBake = 500 + (toppings.length *200)
                // Wait 1 seconds for pizza to cook
                setTimeout(function () {
                //WHEN YOU ARE READY, YOU CAN RESOLVE THIS PROMISE
                resolve(`Here is your 🍕 with the toppings ${toppings.join(' ')}`)}, ammountOfTimeToBake)
                //IF SOMETHING WENT WRONG, WE CAN REJECT THIS PROMISE
        });
};
makePizza(['pepperoni', 'cheese', 'sauce'])
        .then(function(pizza){
                console.log(pizza);
                return makePizza(['cheese', 'sauce']);
        }).then(function (pizza) {
                console.log(pizza);
                return makePizza(['sauce']);
        }).then(function (pizza) {
                console.log(pizza);
                return makePizza(['1', '2', '3', '4', '5 toppings']);
        }).then(function (pizza) {
                console.log(pizza);
                return makePizza(['1', '2 toppings']);
        }).then(function (pizza) {
                console.log('All done! Here is the last pizza: ', pizza);
        });