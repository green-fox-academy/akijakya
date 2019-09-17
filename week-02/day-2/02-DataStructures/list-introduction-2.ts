// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let A:string [] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
// Create a new list ('List B') with the values of List A
let B:string [] = A;
// Print out whether List A contains Durian or not
if (A.indexOf('Durian') !== -1){
    console.log('It has Durian!');
} else {
    console.log('It doesn\'t have Durian... :(');
}
// Remove Durian from List B
B = B.filter(e => e != 'Durian');
// Add Kiwifruit to List A after the 4th element
A.splice(4, 0, 'Kiwifruit');
// Compare the size of List A and List B
if (A.length > B.length){
    console.log('A is longer than B');
} else if (A.length < B.length) {
    console.log('B is longer than A');
} else {
    console.log('The length of A and B is equal');
}
// Get the index of Avocado from List A
console.log(A.indexOf('Avocado'));
// Get the index of Durian from List B
console.log(B.indexOf('Durian'));
// Add Passion Fruit and Pomelo to List B in a single statement
B.push('Passion Fruit', 'Pomelo');
// Print out the 3rd element from List A
console.log(A[2]);