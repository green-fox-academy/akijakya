'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function kochLine (x:number, y:number, size:number) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.lineTo(x+size*3/2, y-size*Math.sqrt(3)/2);
    ctx.lineTo(x+size*2, y);
    ctx.lineTo(x+size*3, y);
    ctx.stroke();
    ctx.closePath();
    if (size >= 20) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        kochLine(x, y, size/3);
        kochLine(x+size*2, y, size/3);
    }
    
}

function kochLine2 (x:number, y:number, size:number, rotation:number) {
    ctx.transform(1, 0, 0, 1, x, y);
    ctx.rotate(rotation*Math.PI/180);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(0+size, 0);
    ctx.lineTo(0+size*3/2, 0-size*Math.sqrt(3)/2);
    ctx.lineTo(0+size*2, 0);
    ctx.lineTo(0+size*3, 0);
    ctx.stroke();
    ctx.closePath();
    // if (size >= 120) {
    //     ctx.fillStyle = 'white';
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     kochLine(x, y, size/3, 0);
    //     kochLine(x+size*2, y, size/3, 0);
    //     kochLine(x+size, y, size/3, 300);
    // }
    
}

kochLine(0, canvas.height/2, canvas.width/3);