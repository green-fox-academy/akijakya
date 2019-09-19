export{}

let expenses:number [] = [500, 1000, 1250, 175, 800, 120];

// How much did we spend?
let totalExpenses:number = 0;

expenses.forEach(function (e) {
    totalExpenses += e;
});

console.log('Total expenses: ' + totalExpenses);

// Which was our greatest expense?
let greatestExpense:number = 0;

expenses.forEach (function (e) {
    if (e > greatestExpense) {
        greatestExpense = e;
    }
});

console.log('Greatest expense: ' + greatestExpense);

// Which was our cheapest spending?
let cheapestSpending:number = greatestExpense;

expenses.forEach (function (e) {
    if (e < cheapestSpending) {
        cheapestSpending = e;
    }
});

console.log('Cheapest spending: ' + cheapestSpending);

// What was the average amount of our spendings?
console.log('Average spending: ' + totalExpenses/expenses.length);