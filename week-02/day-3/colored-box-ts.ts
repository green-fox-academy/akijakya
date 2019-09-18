'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.strokeStyle = 'red';
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.strokeStyle = 'blue';
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.strokeStyle = 'green';
ctx.lineTo(100, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.strokeStyle = 'yellow';
ctx.lineTo(100, 100);
ctx.stroke();

//making it with function

// function drawRect (spx, spy, size, color){
    
//     for (let i:number = 0; i < 4; i++){
//         ctx.beginPath();
//         ctx.moveTo(spx, spy);
//         ctx.strokeStyle = color[i];
//         ctx.lineTo(spx+size, spy);
//         ctx.stroke();
//         spx = spx+size;

//     }
// }

// let colors:string [] = ['red', 'blue', 'green', 'yellow']
// drawRect(300, 100, 100, colors);