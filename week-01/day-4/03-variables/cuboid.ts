'use strict';
export{}

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 3.3;
let sideB: number = 4.4;
let sideC: number = 5.5;

console.log('Surface Area: ' + (sideA*sideB*2 + sideA*sideC*2 + sideB*sideC*2));
console.log('Volume: ' + sideA*sideB*sideC);
