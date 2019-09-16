// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

//doing it with a for loop
console.log("With for loop:");
let animals:string [] = ["koal", "pand", "zebr"];

for(let i:number = 0; i < animals.length; i++){
    animals[i] += "a";
}

console.log(animals);

//doing it with forEach
console.log("With forEach method:");
let animals2:string [] = ["koal", "pand", "zebr"];

animals2.forEach (function(value, index){
    animals2[index] += "a";
});

console.log(animals2);