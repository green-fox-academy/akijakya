export{}

let products = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}

let listBob = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let listAlice = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

// How much does Bob pay?

//creating a function for the problem:

/*
function totalPrice (list:any, product:any) {
    let listArray:any [] = Object.entries(list);
    let productsArray:any [] = Object.entries(product);
    let priceSum: number = 0;
    listArray.forEach(function (e, i) {
        productsArray.forEach (function (f, j) {
            if (e[i][0] === f[j][0]) {
                priceSum += e[i][1]*f[j][1];
            }
        });
    });
    console.log(priceSum);
}
*/

function totalPrice (list:any, product:any) {
    let listKeys:string [] = Object.keys(list);
    let listValues:number [] = Object.values(list);
    let productKeys:string [] = Object.keys(product);
    let productValues:number [] = Object.values(product);
    let priceSum: number = 0;
    listKeys.forEach(function (e, i) {
        productKeys.forEach (function (f, j) {
            if (e[i] === f[j]) {
                priceSum += listValues[i]*productValues[j];
            }
        });
    });
    console.log(priceSum);
}

totalPrice(listBob, products);

// How much does Alice pay?
totalPrice(listAlice, products);

// Who buys more Rice?
// creating a function for the task:
function whoBuysMore (listBob:any, listAlice:any, item:string) {
    if (listBob[item] > listAlice[item]) {
        console.log('Bob buys more ' + item.toLowerCase());
    } else if (listBob[item] < listAlice[item]) {
        console.log('Alice buys more ' + item.toLowerCase());
    } else {
        console.log('They both buy the same amount of ' + item.toLowerCase());
    }
}

whoBuysMore(listBob, listAlice, 'Rice');

// Who buys more Potato?
whoBuysMore(listBob, listAlice, 'Potato');

// Who buys more different products?
if (Object.keys(listBob).length > Object.keys(listAlice).length) {
    console.log('Bob buys more different products');
} else if (Object.keys(listBob).length < Object.keys(listAlice).length) {
    console.log('Alice buys more different products');
} else {
    console.log('They both buy the same number of products');
}

// Who buys more products? (piece)
// creating a function to add the amounts:
function addAmounts (list) {
    let amount:number = 0;
    Object.values(list).forEach(function (e:number){
        amount += e;
    });
    return amount;
}

if (addAmounts(listBob) > addAmounts(listAlice)) {
    console.log('Bob buys more products');
} else if (addAmounts(listBob) < addAmounts(listAlice)) {
    console.log('Alice buys more products');
} else {
    console.log('They both buy the same amount of products');
}