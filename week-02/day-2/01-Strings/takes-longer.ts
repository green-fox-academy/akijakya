'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

//with substring method
let firstPart:string = quote.substring(0, 21);
let lastPart:string = quote.substring(21);
let insertion:string = "always takes longer than "; 

quote = firstPart + insertion + lastPart;

console.log(quote);