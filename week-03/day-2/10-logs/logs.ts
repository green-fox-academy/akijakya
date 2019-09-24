// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

// creating a function that returns the unique IP adresses
function uniqueIPs (fileName) {
    // reading the file into an array of its lines
    let logContent:string [] = fs.readFileSync(fileName, 'utf8').split('/\r\n');
    // creating a variable only for the IPs
    let IPs:string [] = [];

    // extracting the IPs from the logContent with substring and pushing it to the array holding only the IPs
    for (let i:number = 0; i < logContent.length; i++) {
        IPs.push(logContent[i].substring(27, 38));
    }
    
    // creating an array to hold the unique IPs
    let uniqueIPs:string [] = [];

    // iterating through the IPs and the unique IPs and pushing the new IPs-s into the unique IPs array
    for (let i:number = 0; i < IPs.length; i++) {
        let isUnique:boolean = true;
        for (let j:number = 0; j < uniqueIPs.length; j++) {
            if (IPs[i] === uniqueIPs[j]) {
                isUnique = false;
            }
        }
        if (isUnique === true) {
            uniqueIPs.push(IPs[i]);
        }
    }

    // returning the unique IPs
    return uniqueIPs;
}

// calling the function
uniqueIPs('log.txt')



// creating a function that returns the GET / POST request ratio
function getPostRatio (fileName) {
    // reading the file into an array of its lines
    let logContent:string [] = fs.readFileSync(fileName, 'utf8').split('/\r\n');
    // creating variables to count GET and POST 
    let getCount:number = 0;
    let postCount:number = 0;

    // extracting the GET/POST information from the logContent with substring and counting them
    for (let i:number = 0; i < logContent.length; i++) {
        if (logContent[i].substring(41, 45) === 'GET ') {
            getCount++;
        } else {
            postCount++;
        }
    }

    // returning the GET / POST ratio
    return getCount/postCount; 
}

// calling the function
getPostRatio('log.txt');