// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// JavaScript, TypeScript
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumDigit (n:number):number {
    if (n < 10) {
        return n;
    } else {
        return n%10 + Math.floor(sumDigit(Math.floor(n/10)));
    }
}

console.log(sumDigit(56789));