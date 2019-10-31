'use strict';

let table = document.getElementsByTagName("table")[0];

function bookTitles() {
    let request = new XMLHttpRequest();
    request.open('GET', 'localhost:3000/books', true);

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let newUl = document.createElement("ul");
        let newLi = document.createElement("li");
        let response = JSON.parse(this.response);
        console.log(response);
        // for (let i = 0; i < response.length)
    //     let stillGIFThumbnail = response.data.images.fixed_width_small_still.url;
    //     newGIF.setAttribute ("src", stillGIFThumbnail); 
    //     newLi.setAttribute ("class", "GIFbox"); 
    //     gifList.appendChild(newLi);
    //     newLi.appendChild(newGIF);
    //     newGIF.onclick = function () {
    //         newGIF.src = response.data.images.fixed_width_small.url;
    //     };
    };
    request.send();
}