// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function reverseLines (fileName:string) {
    let contentLines:string [] = fs.readFileSync(fileName, 'utf8').split('\r\n');
    let reversedContent:string [] = [];
    
    for (let i:number = 0; i < contentLines.length; i++) {
        let line:string [] = contentLines[i].split('');
        reversedContent.push(line.reverse().join(''));
    }

    fs.writeFileSync('reversed-fixed.txt', reversedContent.join('\r\n'), 'utf8');
}

reverseLines('reversed-lines.txt');