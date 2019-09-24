import { fileURLToPath } from "url";

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copy (fileNameFrom:string, fileNameTo:string) {
    let content:string = fs.readFileSync(fileNameFrom, 'utf8');

    let errCount:number = 0;
    
    try {
        fs.writeFileSync(fileNameTo, content, 'utf8');
    }
    catch {
        errCount++;
    }

    return errCount === 0;
}

if (copy('my-file.txt', 'write-multiple-lines.txt') === true) {
    console.log('Overwriting was successful')
} else {
    console.log('Houston, we have a problem')
}