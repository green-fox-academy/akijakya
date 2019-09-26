import {Domino} from "./09-domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

/*
// solving it without manipulating with arrays:
let dominoValues = [];

dominoes.forEach(function (e) {
    dominoValues.push(e.values);
});

for (let i:number = 0; i < dominoValues.length-1; i++) {
    let j:number = 1;
    while (dominoValues[i+j][0] !== dominoValues[i][1]) {
        j++;
    }
    dominoValues.splice(i+1, 0, dominoValues[j+i]);
    dominoValues.splice(j+i+1, 1);
}

console.log(dominoValues);
*/

// solving it without making a dominoValues array:

for (let i:number = 0; i < dominoes.length-1; i++) {
    let j:number = 1;
    while (dominoes[i+j].values[0] !== dominoes[i].values[1]) {
        j++;
    }
    dominoes.splice(i+1, 0, dominoes[j+i]);
    dominoes.splice(j+i+1, 1);
}

print(dominoes);