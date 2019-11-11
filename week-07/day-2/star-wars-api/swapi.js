'use strict';

// function getNames() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=Hf2DWQvwX3bGj8bNgJkm34o5XCDgkIgw&tag=&rating=G', true);

//     request.onload = function(){
//         // will called when all the content is loaded => readyState = 4
//         let newLi = document.createElement("li");
//         let newGIF = document.createElement("img");
//         let response = JSON.parse(this.response);
//         let stillGIFThumbnail = response.data.images.fixed_width_small_still.url;
//         newGIF.setAttribute ("src", stillGIFThumbnail); 
//         newLi.setAttribute ("class", "GIFbox"); 
//         gifList.appendChild(newLi);
//         newLi.appendChild(newGIF);
//         newGIF.onclick = function () {
//             newGIF.src = response.data.images.fixed_width_small.url;
//         };
//     };
//     request.send();
// }