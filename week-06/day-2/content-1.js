'use strict';

let paragraphs = document.querySelectorAll("p");
let animalsContent = paragraphs[3].textContent;
let animalsContentHTML = paragraphs[3].innerHTML;

paragraphs.forEach(e => e.textContent = animalsContent);

paragraphs.forEach(e => e.innerHTML = animalsContentHTML);