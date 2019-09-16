//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//with for loop
console.log('With for loop:')

function unique(arr:number []) {
    var sorted:number [] = arr.sort();
    for (let i:number = 1; i <= sorted.length; i++){
        if (sorted[i] === sorted[i-1]) {
            sorted.splice(i, 1);
        }
    }
    return sorted;
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

//with map method
console.log('With map method:')

function unique2(arr:number []) {
    var sorted:number [] = arr.sort();
    sorted.map (function(value, index){
        if (sorted[index] === sorted[index-1]) {
            sorted.splice(index, 1);
        }
    });
    return sorted;
}

//  Example
console.log(unique2([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`