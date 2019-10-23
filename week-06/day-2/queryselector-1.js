'use strict';

let king = document.getElementById("b325");
console.log("1. ", king);

let businessLamp = document.getElementsByClassName("asteroid big");
console.log("2. ");

for (let i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i]);
}

let container = document.querySelector(".container");
let conceitedKing = container.querySelectorAll(".asteroid");
console.log("3. ");

for (let e of conceitedKing) {
    alert(e);
}

let noBusiness = document.querySelectorAll("div");
console.log("4. ");

for (let e of noBusiness) {
    console.log(e);
}