'use strict';
export{}

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

// current time is 14:34:42, the remaining time is 9:25:18 hours = = 33918 seconds 
// solving this by calculating hours past midnight, then make it smaller by the minutes and seconds
let hoursLeft = 24 - currentHours;
let minutesLeft = hoursLeft*60 - currentMinutes;
let secondsLeft = minutesLeft*60 - currentSeconds;

//writing the solution to the console
console.log(secondsLeft);