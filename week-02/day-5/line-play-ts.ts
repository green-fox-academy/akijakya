'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLines(color1: string, color2: string, divider: number) {
    // drawing the top right corner
    let leap: number = canvas.width / 15 / divider;
    ctx.strokeStyle = color1;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 15 * 2 / divider, 0);
    ctx.lineTo(canvas.width / divider, canvas.width / 15 / divider);
    ctx.stroke();
    for (let i: number = 0; i < 13; i++) {
        ctx.strokeStyle = color1;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 15 / divider + leap, 0);
        ctx.lineTo(canvas.width / divider, canvas.width / 15 / divider + leap);
        ctx.stroke();
        leap += canvas.width / 15 / divider;
    }

    // resetting the leap, drawing the bottom left corner:
    leap = canvas.width / 15 / divider;
    ctx.strokeStyle = color2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.width / 15 * 2 / divider);
    ctx.lineTo(canvas.width / 15 / divider, canvas.width / divider);
    ctx.stroke();
    for (let i: number = 0; i < 13; i++) {
        ctx.strokeStyle = color2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.width / 15 / divider + leap);
        ctx.lineTo(canvas.width / 15 / divider + leap, canvas.width / divider);
        ctx.stroke();
        leap += canvas.width / 15 / divider;
    }
}

// drawing only one of this:
// drawLines('purple', 'green', 2);

//drawing a pattern out of this:
function drawPattern(color1: string, color2: string, num: number) {
    let incrementX: number = 0;
    let incrementY: number = 0;
    for (let i: number = 0; i < Math.sqrt(num); i++) {
        for (let j: number = 0; j < Math.sqrt(num); j++) {
            ctx.setTransform(1, 0, 0, 1, incrementX, incrementY);
            drawLines(color1, color2, Math.sqrt(num));
            incrementX += canvas.width / Math.sqrt(num);
        }
        incrementX = 0;
        incrementY += canvas.height / Math.sqrt(num);
    }
}

drawPattern('purple', 'green', 9);