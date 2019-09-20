'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function hexagon (size:number) {
    let coorX: number = 0;
    let coorY: number = 0;
    ctx.setTransform(1, 0, 0, 1, canvas.width/2, canvas.width/2);

    ctx.beginPath();
    ctx.moveTo(coorX - size/2, coorY + size*Math.sqrt(3)/2);
    ctx.lineTo(coorX + size/2, coorY + size*Math.sqrt(3)/2);
    ctx.lineTo(coorX + size + size/2, coorY);
    ctx.lineTo(coorX + size/2, coorY - size*Math.sqrt(3)/2);
    ctx.lineTo(coorX - size/2, coorY - size*Math.sqrt(3)/2);
    ctx.lineTo(coorX - size - size/2, coorY);
    ctx.closePath();
    ctx.stroke();
}

hexagon(20);

// rotate: ctx.rotate(angle * Math.PI/180);