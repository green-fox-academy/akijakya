'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.setTransform(1, 0, 0, 1, canvas.width/2, canvas.height/2);
for (let i:number = 0; i < 2; i++) {
    let leap:number = 0;
    for (let j: number = 0; j < 15; j++) {
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(0 + leap, 0);
        ctx.lineTo(0, - canvas.width / 2 + leap);
        ctx.stroke();
        leap += canvas.width/30;
    }
    let leap2:number = 0;
    for (let j: number = 0; j < 15; j++) {
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(- canvas.width / 2 + leap2, 0);
        ctx.lineTo(0, - canvas.width / 30 - leap2);
        ctx.stroke();
        leap2 += canvas.width/30;
    }
    ctx.rotate(Math.PI);
}