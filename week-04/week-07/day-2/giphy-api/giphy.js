'use strict';

let gifList = document.getElementById("GIFs");

getGIFs();
// setTimeout(getJoke, 4000);

function getGIFs() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=Hf2DWQvwX3bGj8bNgJkm34o5XCDgkIgw&tag=&rating=G', true);

    // let loadingElement = document.querySelector('.loader');
    // let isLoading = false;

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let newLi = document.createElement("li");
        let newGIF = document.createElement("img");
        let response = JSON.parse(this.response);
        let stillGIFThumbnail = response.data.images.fixed_width_small_still.url;
        newGIF.setAttribute ("src", stillGIFThumbnail); 
        newLi.setAttribute ("class", "GIFbox"); 
        gifList.appendChild(newLi);
        newLi.appendChild(newGIF);
        // setTimeout(function () {
        //     loadingElement.classList.add('hide');
        // }, 100);

    };

    // request.onreadystatechange = function(){
    //     if (!isLoading) {
    //         // remove the hide class so the loader will be enabled
    //         loadingElement.classList.remove('hide');
    //         isLoading = true;
    //     }
    //     console.log(this.readyState);
    // };

    request.send();


}
