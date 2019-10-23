'use strict';

const list = ['apple', 'banana', 'cat', 'dog'];

let placeholders = document.querySelectorAll("li");

// placeholders.forEach(e, i => e.textContent = list[i]);
placeholders.forEach(function (e, i) {
    e.textContent = list[i];
});

let ul = document.querySelector("ul");
ul.setAttribute("class", "limegreen");