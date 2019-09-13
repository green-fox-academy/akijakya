'use strict';
export{}

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let stars: string = '*';
let spaceCount: number = 1;

for (let i:number = 0; i < lineCount; i++){
  let spaces: string = '';
  for (let j:number = 0; j < (lineCount-spaceCount); j++){
      spaces += ' ';
  }
  spaceCount++
  console.log(spaces + stars);
  stars += '**';
}