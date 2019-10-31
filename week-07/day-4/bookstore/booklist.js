'use strict'

let table = document.getElementsByTagName("table")[0];

function lisItems(rows) {
    let request = new XMLHttpRequest();
    request.open('GET', 'localhost:3111/books', true);

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        console.log(response.data);
        // let newUl = document.createElement("ul");
        // let newLi = document.createElement("li");
        // let newGIF = document.createElement("img");
        // let response = JSON.parse(this.response);
        // let stillGIFThumbnail = response.data.images.fixed_width_small_still.url;
        // newGIF.setAttribute ("src", stillGIFThumbnail); 
        // newLi.setAttribute ("class", "GIFbox"); 
        // gifList.appendChild(newLi);
        // newLi.appendChild(newGIF);
        // newGIF.onclick = function () {
        //     newGIF.src = response.data.images.fixed_width_small.url;
        // };
    };
    request.send();
}