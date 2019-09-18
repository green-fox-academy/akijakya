'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let num:number = 10;
for (let i:number = 0; i < 6; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(i*10+num, i*10+num, 10*(i+1), 10*(i+1));
    console.log(num);
    num = i*10+num;
}