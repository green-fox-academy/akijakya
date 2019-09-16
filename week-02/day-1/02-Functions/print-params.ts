// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
export{}

/*
function printParams () {
    console.log(arguments);
}
*/

function printParams (...anyArg: any[]) {
    console.log(anyArg);
}

printParams('Hello', 'there', 'General', 'Kenobi');