'use strict';

getJoke();
// setTimeout(getJoke, 4000);

function getJoke() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.icndb.com/jokes/random', true);

    // let loadingElement = document.querySelector('.loader');
    // let isLoading = false;

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let jokeElement = document.getElementById('joke');
        let response = JSON.parse(this.response);
        let joke = response.value.joke;
        jokeElement.innerText = joke;
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
