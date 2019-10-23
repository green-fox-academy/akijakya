'use strict';

let gfa = document.createElement("li");
gfa.textContent = "The Green Fox";

let lampLighter = document.createElement("li");
lampLighter.textContent = "The Lamplighter";

let asteroidList = document.getElementsByTagName("ul")[0];
asteroidList.appendChild(gfa);
asteroidList.appendChild(lampLighter);

let container = document.getElementsByClassName("container")[0];
let heading = document.createElement("h1");
heading.textContent = "I can add elements to the DOM!";
container.appendChild(heading);