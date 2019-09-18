'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLineToMiddle (x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

for (let i:number = 0; i < canvas.width/20; i++) {
    drawLineToMiddle(i*20, 0);
    drawLineToMiddle(20+i*20, canvas.height);
}

for (let i:number = 0; i < canvas.height/20; i++) {
    drawLineToMiddle(0, 20+i*20);
    drawLineToMiddle(canvas.width, i*20);
}