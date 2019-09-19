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
// function totalPrice (list:any, product:any) {
//     let listArray:any [] = Object.entries(list);
//     let productsArray:any [] = Object.entries(product);
//     let priceSum: number = 0;
//     listArray.forEach(function (e, i) {
//         productsArray.forEach (function (f, j) {
//             if (e[i][0] === f[j][0]) {
//                 priceSum += e[i][1]*f[j][1];
//             }
//         });
//     });
//     console.log(priceSum);
// }

function totalPrice (list:any, product:any) {
    let listKeys:string [] = Object.keys(list);
    let listValues:number [] = Object.values(list);
    let productKeys:string [] = Object.keys(product);
    let productValues:number [] = Object.keys(product);
    let priceSum: number = 0;
    listKeys.forEach(function (e, i) {
        productKeys.forEach (function (f, j) {
            if (e[i] === f[j]) {
                priceSum += listValues[e]*productValues[f];
            }
        });
    });
    console.log(priceSum);
}

totalPrice(listBob, products);
// How much does Alice pay?

// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)