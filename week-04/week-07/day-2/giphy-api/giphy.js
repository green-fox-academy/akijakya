'use strict';

getJoke();
// setTimeout(getJoke, 4000);

function getJoke() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=Hf2DWQvwX3bGj8bNgJkm34o5XCDgkIgw&tag=&rating=G', true);

    // let loadingElement = document.querySelector('.loader');
    // let isLoading = false;

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let gifElement = document.getElementById('GIF');
        let response = JSON.parse(this.response);
        let stillGIFThumbnail = response.data.images.fixed_height_still.url;
        gifElement.setAttribute ("src", stillGIFThumbnail);
        // data.images.fixed_height_still.url
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
