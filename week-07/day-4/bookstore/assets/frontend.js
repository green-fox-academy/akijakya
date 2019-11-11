'use strict';

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/books', true);

console.log('valami');

request.onload = function(){
    // will called when all the content is loaded => readyState = 4
    let table = document.getElementsByTagName("table")[0];
    let newUl = document.createElement("ul");
    
    let response = JSON.parse(this.response);
    for (let i = 0; i < response.length; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = response[i].book_name.toSting();
        newUl.appendChild(newLi);
    }
    table.appendChild(newUl);
};

request.send();
