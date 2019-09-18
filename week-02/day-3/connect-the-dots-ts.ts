'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box:number [][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let shape:number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectTheDots (arr) {
    for(let i:number = 0; i < arr.length-1; i++) {
        ctx.beginPath();
        ctx.moveTo(arr[i][0], arr[i][1]);
        ctx.lineTo(arr[i+1][0], arr[i+1][1]);
        ctx.stroke();
    }
}

connectTheDots(box);
connectTheDots(shape);

/*
function drawRect (spx, spy, size, color){
    let arrX:number [] = [spx, spx+size, spx+size, spx, spx];
    let arrY:number [] = [spy, spy, spy+size, spy+size, spy];
    for (let i:number = 0; i < 4; i++){
        ctx.beginPath();
        ctx.moveTo(arrX[i], arrY[i]);
        ctx.strokeStyle = color[i];
        ctx.lineTo(arrX[i+1], arrY[i+1]);
        ctx.stroke();
    }
}

let colors:string [] = ['red', 'blue', 'green', 'purple']
drawRect(300, 100, 200, colors);
*/