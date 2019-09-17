//Create an empty list which will contain names (strings)
let names:string [] = [];
//Print out the number of elements in the list
console.log(names.length);
//Add William to the list
names.push("William");
//Print out whether the list is empty or not
if (names.length === 0){
    console.log("Empty");
} else {
    console.log("Not empty!");
}
//Add John to the list
names.push("John");
//Add Amanda to the list
names.push("Amanda");
//Print out the number of elements in the list
console.log(names.length);
//Print out the 3rd element
console.log(names[2]);
//Iterate through the list and print out each name
names.forEach(e => console.log(e));
//Iterate through the list and print
//  1. William
//  2. John
//  3. Amanda
names.forEach(function (e, i){
    console.log(i+1 + ". " + e);
});
//Remove the 2nd element
names.splice(1, 1);
//Iterate through the list in a reversed order and print out each name
//  Amanda
//  William
names.reverse().forEach (e => console.log(e));
//Remove all elements
names.splice(0);