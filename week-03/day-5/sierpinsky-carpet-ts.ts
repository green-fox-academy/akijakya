'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function sierpinskyCarpet (x:number, y:number, size:number) {
    ctx.fillRect(x, y, size, size);
    if (size >= 2) {
        sierpinskyCarpet(x-size/3*2, y-size/3*2, size/3);
        sierpinskyCarpet(x+size/3, y-size/3*2, size/3);
        sierpinskyCarpet(x+size/3*4, y-size/3*2, size/3);
        sierpinskyCarpet(x-size/3*2, y+size/3, size/3);
        sierpinskyCarpet(x+size/3*4, y+size/3, size/3);
        sierpinskyCarpet(x-size/3*2, y+size/3*4, size/3);
        sierpinskyCarpet(x+size/3, y+size/3*4, size/3);
        sierpinskyCarpet(x+size/3*4, y+size/3*4, size/3);
    }
}

sierpinskyCarpet(canvas.width/3, canvas.height/3, canvas.width/3);