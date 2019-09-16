// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
export{}

//doing it woth for loop:
console.log("With for loop:")
let ai:number [] = [3, 4, 5, 6, 7];

let sum:number = 0;
for (let i:number = 0; i < ai.length; i++){
    sum += ai[i];
}

console.log(sum);

//doing it with forEach:
console.log("With forEach method:")
let ai2:number [] = [3, 4, 5, 6, 7];
let sum2:number = 0;

ai2.forEach (function (value, index){
    sum2 += ai2[index];
});

console.log(sum2);