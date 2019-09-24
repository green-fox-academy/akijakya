// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function removeDuplicated (fileName:string) {
    let content:string [] = fs.readFileSync(fileName, 'utf8').split('');
    let result:string [] = [];
    
    for (let i:number = 0; i < content.length; i++){
        if (content[i] !== content[i+1]) {
            result.push(content[i]);
        }
    }

    fs.writeFileSync('doubled-fixed.txt', result.join(''), 'utf8');
}

removeDuplicated('doubled-chars.txt');