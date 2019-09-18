'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

for (let i:number = 0; i < 20; i++) {
    for (let j:number = 0; j < 30; j++) {
        ctx.fillRect(j*20, i*20, 10, 10);
        ctx.fillRect(10+j*20, 10+i*20, 10, 10);
    }
}