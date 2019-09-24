// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

// with simple if statement

// function divideTen (number) {
//     if (number === 0) {
//         console.log('fail');
//     } else {
//         console.log(10/number);
//     }
// }

function divideTen (number) {
    if (number === 0) {
        throw 'fail';
    } else {
        console.log(10/number);
    }
}

try {
    divideTen(0);
}
catch {
    console.log('fail');
}