// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
export{}

//with the built-in method:
console.log("With the reverse method:");
let numList: number [] = [3, 4, 5, 6, 7];

console.log(numList.reverse());

//with a loop and splice/push:
console.log("With a loop and splice/push:");
let numList2: number [] = [3, 4, 5, 6, 7];

for (let i:number = 0; i < numList2.length-1; i++){
    let first:number [] = numList2.splice(numList.length-i-2,1);
    numList2.push(first[0]);
}

console.log(numList2);

//with a loop and temp array:
console.log("With a loop and temp array:");
let numList3: number [] = [3, 4, 5, 6, 7];
let temp:number [] = [];

for(let i:number = 0; i < numList3.length-1; i++){
    temp[i] = numList3[i];
    numList3 [i] = numList3[numList3.length-i-1];
    numList3[numList3.length-i-1] = temp[i];
}

console.log(numList3);