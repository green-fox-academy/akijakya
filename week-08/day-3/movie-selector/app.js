'use strict'

let genreSelector = document.getElementById("genre-selector");
let movieSelector = document.getElementById("movie-selector");
let selectetTitle = document.getElementById("selected-title");

function filterMovies () {
    let genre = genreSelector.options[genreSelector.selectedIndex].text;
    let movieList = document.getElementsByClassName('movie');

    [].forEach.call(movieList, e => {
        e.hidden = false;
        let match = false;
        e.classList.forEach (ee => {
            if (genre === ee) {
                match = true;
            }
        });
        if (match === false) {
            e.hidden = true;
        }
    });
}

function displayTitle () {
    let movie = movieSelector.options[movieSelector.selectedIndex].text;
}