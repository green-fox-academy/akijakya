let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

// How much is the fish?
console.log('The price of the fish is: ' + products['Fish']);

// What is the most expensive product?
let mostExpensive:number = 0;

Object.values(products).forEach (function (e) {
    if (e > mostExpensive) {
        mostExpensive = e;
    }
});

console.log('The most expensive product is: ' + mostExpensive);

// What is the average price?
let totalExpense:number = 0;

Object.values(products).forEach(function (e) {
    totalExpense += e;
});

console.log('Average price: ' + totalExpense/Object.values(products).length);

// How many products' price is below 300?
let priceCount:number = 0;

Object.values(products).forEach(function (e) {
    if (e < 300) {
        priceCount++;
    }
});

console.log('The number of products under 300 is: ' + priceCount);

// Is there anything we can buy for exactly 125?
let priceCount2:number = 0;
let price:number = 125;

Object.values(products).forEach(function (e, i) {
    if (e === price) {
        let productKeys:string [] = Object.keys(products);
        console.log('You can buy ' + productKeys[i] + ' for ' + price + '!');
        priceCount2++;
    }
});

if (priceCount2 === 0) {
    console.log('There\'s nothing on the list for ' + price + '.');
}

// What is the cheapest product?
let cheapestProduct:number = mostExpensive;

Object.values(products).forEach (function (e) {
    if (e < cheapestProduct) {
        cheapestProduct = e;
    }
});

console.log('Price of the cheapest product is: ' + cheapestProduct);