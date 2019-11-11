// 1. Warm up
// setTimeout(() => {
//     console.log('TIMED OUT!');
// }, 300);

// 2. Fulfill a promise
// let promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('FULFILLED!');
//     }, 300);
// }).then ((response) => {
//     console.log(response);
// });

// 3. Reject a promise
// let promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('REJECTED!'));
//     }, 300);
// });

// function onReject (error) {
//     console.log(error.message);
// }

// promise.then (undefined, onReject);

// 4. To reject or not to reject
// let promise = new Promise ((resolve, reject) => {
//     resolve('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });

// function onRejected (error) {
//     console.log(error.message);
// };

// promise.then (console.log, onRejected);

// 5. Always asynchronous
let promise = new Promise ((resolve, reject) => {
    resolve('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');

// 6. Shortcuts
