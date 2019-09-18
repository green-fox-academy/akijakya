'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

//creating a black background
ctx.fillRect(0, 0, canvas.width, canvas.height);

//creating a random generator for colors
function getRandomColor() {
    let num:string = Math.floor(Math.random()*156 + 100).toString(10);
    let color:string = 'rgb(' + num + ',' + num + ',' + num + ')';
    return color;
}

//creating a random number of stars
let numberOfStars:number = Math.floor(Math.random()*30);

for (let i:number = 0; i < numberOfStars; i++) {
    let randomColor:string = getRandomColor();
    ctx.fillStyle = randomColor;
    ctx.fillRect(Math.floor(Math.random()*canvas.width-10), Math.floor(Math.random()*canvas.height-10), 10, 10);
}