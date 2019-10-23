'use strict';

let paragraphs = document.querySelectorAll("p");

if (paragraphs[3].getAttribute("class") === "dolphin") {
    paragraphs[0].textContent = "pear";
}

if (paragraphs[0].getAttribute("class") === "apple") {
    paragraphs[2].textContent = "dog";
}

paragraphs[0].classList.add("red");

// paragraphs[1].setAttribute("style", "height: 300px;");
paragraphs[1].style.height = "300px";