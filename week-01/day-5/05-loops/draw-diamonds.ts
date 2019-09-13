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
let spaceCount: number = 1;
//we need to do this as many times as all the lines divided by one and rounding it up
let buildUp: number = Math.ceil(lineCount/2);

for (let i:number = 0; i < buildUp; i++){
  let spaces: string = '';
  for (let j:number = 0; j < (buildUp-spaceCount); j++){
      spaces = spaces + ' ';
  }
  spaceCount++
  console.log(spaces + stars + spaces);
  stars = stars + '**';
}

//now the teardown part
//we need to do this as many times as all the lines divided by one and rounding it down
let tearDown: number = Math.floor(lineCount/2);
let spaceCount2: number = 1;
//to use .slice, first we want that many stars as our lineCount number - 2
let starCount: number = lineCount - 2;

for (let i:number = 0; i < tearDown; i++){
    let spaces: string = '';
    for (let j:number = 0; j < (spaceCount2); j++){
        spaces = spaces + ' ';
    }
    spaceCount2++
    stars = stars.slice(0, starCount);
    console.log(spaces + stars + spaces);
    starCount = starCount - 2;
  }