'use strict';

let catButton = document.getElementById('catbutton');
let signUp = document.getElementById('signup');

function enableButtons () {
    if (document.getElementById("cat").checked === true || document.getElementById("dog").checked === true) {
        signUp.disabled = false;
    } else {
        signUp.disabled = true;
    }

    if (document.getElementById("yes").checked === true) {
        catButton.disabled = false;
    } else {
        catButton.disabled = true;
    }

    if (document.getElementById("no").checked === true && document.getElementById("fish").checked === true) {
        signUp.disabled = false;
    }
}

function alertMessage () {
    if (document.getElementById("no").checked === true && document.getElementById("fish").checked === true) {
        alert('Sigh, we still added you to the cat facts list');
    } else {
        alert('Thank you, you\'ve successfully signed up for cat facts');
    }
}

catButton.onclick = alertMessage;
signUp.onclick = alertMessage;