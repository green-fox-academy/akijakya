'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors:string [] = ['red', 'blue', 'green', 'yellow'];

for (let i:number = 0; i < 4; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(20+i*100, 20, 50+i*10, 50+i*10);
}