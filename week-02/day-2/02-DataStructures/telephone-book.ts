let nameAndNumbers = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982',
}

// What is John K. Miller's phone number?
console.log('John K. Miller\'s phone number is: ' + nameAndNumbers['John K. Miller']);

// Whose phone number is 307-687-2982?
function nameFinder (object:any, e:string) {
    let index:number = Object.values(object).indexOf(e);
    let names:string [] = Object.keys(object);
    return names[index];
}

console.log('Telephone number 307-687-2982 belongs to: ' + nameFinder(nameAndNumbers, '307-687-2982'));

// Do we know Chris E. Myers' phone number?
if (nameAndNumbers['Chris E. Myers'] !== undefined) {
    console.log('Chris E. Myers\'s number is: ' + nameAndNumbers['Chris E. Myers']);
} else {
    console.log('There is no such number in the Telephone Book!');
}