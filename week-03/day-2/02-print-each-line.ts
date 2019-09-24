// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

let myFile = '';

try {
    myFile = fs.readFileSync('my-file.txt', 'utf8');
}
catch {
    console.log("Unable to read file: my-file.txt");
}

let lines = myFile.split('\n');

for (let line of lines) {
    console.log(line);
}