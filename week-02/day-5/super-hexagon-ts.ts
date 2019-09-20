'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function hexagon (coorX:number, coorY:number, size:number) {
    ctx.beginPath();
    ctx.moveTo(coorX - size/2, coorY + size*Math.sqrt(3)/2);
    ctx.lineTo(coorX + size/2, coorY + size*Math.sqrt(3)/2);
    ctx.lineTo(coorX + size, coorY);
    ctx.lineTo(coorX + size/2, coorY - size*Math.sqrt(3)/2);
    ctx.lineTo(coorX - size/2, coorY - size*Math.sqrt(3)/2);
    ctx.lineTo(coorX - size, coorY);
    ctx.closePath();
    ctx.stroke();
}

hexagon(canvas.width/2, canvas.height/2, 20);

function hexaPattern (size:number) {
    let coorX: number = canvas.width/2;
    let coorY: number = canvas.height/2;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let i:number = 0; i < 6; i++) {
        hexagon(coorX, coorY - size*Math.sqrt(3), size);
        ctx.rotate(60 * Math.PI/180);
    }
}
// rotate: ctx.rotate(angle * Math.PI/180);

hexaPattern(20);