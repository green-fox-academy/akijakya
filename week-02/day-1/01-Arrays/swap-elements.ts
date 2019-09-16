// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string [] = ["Arthur", "Boe", "Chloe"];

//solution 1: creating a new array
let first:string = abc[0];
let third:string = abc[2];
let cba:string [] = [third, abc[1], first];

console.log(cba);

//solution 2: modify the existing array with declaration
let first2:string = abc[0];
abc[0] = abc[2];
abc[2] = first2;

console.log(abc);

/*
//solution 3: doing it with splice and push and whatnot
let abc2:string [] = ["Arthur", "Boe", "Chloe"];

let first3:string = abc2.splice(0, 1);
let last3:string [] = abc2.splice(2, 1);
let abc3:string = abc2.push(first3);
abc2.unshift(last3);

abc2.push(abc2.splice(0, 1));
abc2.unshift(abc2.splice(2, 1));

console.log(abc2);
*/