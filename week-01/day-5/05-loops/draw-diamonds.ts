'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

// lets separate the excercise to a building up (up to the maximum width) a triangle
//from making an upside-down triangle (tearing down)
//first, building up

let stars: string = '*';
//we need to do this as many times as the lineCount divided by two and rounding it up
let buildUp: number = Math.ceil(lineCount/2);

for (let i:number = 1; i <= buildUp; i++){
  let spaces: string = '';
  for (let j:number = 0; j < (buildUp-i); j++){
      spaces += ' ';
  }
  console.log(spaces + stars);
  stars += '**';
}

//now to the teardown part
//we need to do this as many times as the lineCount divided by two and rounding it down
let tearDown: number = Math.floor(lineCount/2);
//for the usage of .slice, first we want that many stars as the lineCount - 2
let starCount: number = lineCount - 2;

for (let i:number = 1; i <= tearDown; i++){
    let spaces: string = '';
    for (let j:number = 0; j < (i); j++){
        spaces += ' ';
    }
    stars = stars.slice(0, starCount);
    console.log(spaces + stars);
    starCount -= 2;
  }