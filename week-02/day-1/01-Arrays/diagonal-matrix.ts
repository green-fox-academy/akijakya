// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
export{}

let matrixSize:number = 4;
let matrix:number [][] = [];

for (let i:number = 0; i < matrixSize; i++) {
    let row:number [] = [];
    for (let j:number = 0; j < matrixSize; j++){
        if (i === matrixSize -j -1){
            row.push(1);
        } else {
            row.push(0);
        }
    }
    matrix.push(row);
}

matrix.forEach (function(x){
    console.log(x);
});
