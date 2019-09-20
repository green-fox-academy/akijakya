'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// function drawLines(color1: string, color2: string, divider: number) {
//     // drawing the top roght corner
//     let leap: number = canvas.width / 15 / divider;
//     ctx.strokeStyle = color1;
//     ctx.beginPath();
//     ctx.moveTo(canvas.width / 15 * 2 / divider, 0);
//     ctx.lineTo(canvas.width / divider, canvas.width / 15 / divider);
//     ctx.stroke();
//     for (let i: number = 0; i < 13; i++) {
//         ctx.strokeStyle = color1;
//         ctx.beginPath();
//         ctx.moveTo(canvas.width / 15 / divider + leap, 0);
//         ctx.lineTo(canvas.width / divider, canvas.width / 15 / divider + leap);
//         ctx.stroke();
//         leap += canvas.width / 15 / divider;
//     }

//     // resetting the leap, drawing the bottom left corner:
//     leap = canvas.width / 15 / divider;
//     ctx.strokeStyle = color2;
//     ctx.beginPath();
//     ctx.moveTo(0, canvas.width / 15 * 2 / divider);
//     ctx.lineTo(canvas.width / 15 / divider, canvas.width / divider);
//     ctx.stroke();
//     for (let i: number = 0; i < 13; i++) {
//         ctx.strokeStyle = color2;
//         ctx.beginPath();
//         ctx.moveTo(0, canvas.width / 15 / divider + leap);
//         ctx.lineTo(canvas.width / 15 / divider + leap, canvas.width / divider);
//         ctx.stroke();
//         leap += canvas.width / 15 / divider;
//     }
// }

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