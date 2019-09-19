export{}

let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

// Which products cost less than 201? (just the name)
Object.values(products).forEach(function (e, i) {
    let productArray:string [] = Object.keys(products);
    if (e < 201) {
        console.log(productArray[i]);
    }
});

// Which products cost more than 150? (name + price)
Object.values(products).forEach(function (e, i) {
    let entriesArray:any [] = Object.entries(products);
    if (e > 150) {
        console.log(entriesArray[i][0] + ' ' + entriesArray[i][1]);
    }
});