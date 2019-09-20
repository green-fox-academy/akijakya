'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle (coorX:number, coorY:number, size:number) {
    ctx.beginPath();
    ctx.moveTo(coorX, coorY);
    ctx.lineTo(coorX + size, coorY);
    ctx.lineTo(coorX + size/2, coorY - size*Math.sqrt(3)/2);
    ctx.closePath();
    ctx.stroke();
}

for (let i:number = 0; i < 21; i++) {
    let coorX:number = 0;
    let coorY:number = canvas.height;
    let leap:number = canvas.width/21;
    let jCounter:number = 21;
    let iCounter:number = leap/2;
    for (let j:number = 0; j < jCounter; j++) {
        triangle(coorX, coorY, leap);
        coorX += leap;
    }
    jCounter -= 2;
    coorX = 0;
    coorX = iCounter;
    iCounter += leap;
    coorY -= leap;
}