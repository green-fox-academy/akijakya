'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
var squareSize:number = 10;

ctx.beginPath();
ctx.strokeRect(canvas.width/2-squareSize/2, canvas.height/2-squareSize/2, squareSize, squareSize); 