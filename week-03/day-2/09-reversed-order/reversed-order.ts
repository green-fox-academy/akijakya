// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function reverseOrder (fileName:string) {
    let contentLines:string [] = fs.readFileSync(fileName, 'utf8').split('\r\n');
    let reversedContent:string [] = [];

    for (let i:number = 0; i < contentLines.length; i++) {
        reversedContent.unshift(contentLines[i]);
    }

    fs.writeFileSync('reversed-order-fixed.txt', reversedContent.join('\r\n'), 'utf8');
}

reverseOrder('reversed-order.txt');