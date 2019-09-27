'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle (coorX:number, coorY:number, size:number) {
    ctx.beginPath();
    ctx.moveTo(coorX, coorY);
    ctx.lineTo(coorX + size/2, coorY + size*Math.sqrt(3)/2);
    ctx.lineTo(coorX - size/2, coorY + size*Math.sqrt(3)/2);
    ctx.closePath();
    ctx.stroke();
}

function triangleDown (coorX:number, coorY:number, size:number) {
    ctx.beginPath();
    ctx.moveTo(coorX, coorY);
    ctx.lineTo(coorX + size, coorY);
    ctx.lineTo(coorX + size/2, coorY + size*Math.sqrt(3)/2);
    ctx.closePath();
    ctx.stroke();
}

function triangleFractal (coorX:number, coorY:number, size:number) {
    triangleDown(coorX-size, coorY, size*2);
    triangle(coorX, coorY, size);
    if (size >= 10) {
        triangleFractal(coorX-size/2, coorY, size/2);
        triangleFractal(coorX+size/2, coorY, size/2);
        triangleFractal(coorX, coorY+size*Math.sqrt(3)/2, size/2);
    }
}

triangleFractal(canvas.width/2, 0, canvas.width/2);