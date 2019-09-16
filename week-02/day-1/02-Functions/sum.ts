// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
export{}

function sum (num: number) {
    let sum:number = 0;
    for (let i:number = 0; i < num+1; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(10));