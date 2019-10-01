import { Animal } from "./02-zoo"
import { Mammal } from "./02-zoo"
import { Reptile } from "./02-zoo"
import { Bird } from "./02-zoo"
import { Breeder } from "./02-zoo"

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);