// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method
export{}

//with a for loop
console.log('With a for loop:');

let integers:number [] = [4, 5, 6, 7];

for (let i:number =0; i < integers.length; i++) {
    console.log(integers[i]);
}

//with forEach
console.log('With forEach:');

let integers2:number [] = [4, 5, 6, 7];

integers2.forEach(function (value) {
  console.log(value);
}); 