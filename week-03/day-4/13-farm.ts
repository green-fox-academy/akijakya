// Farm
    // Reuse your Animal class
    // Create a Farm class
        // it has list of Animals
        // it has slots which defines the number of free places for animals
        // breed() -> creates a new animal if there's place for it
        // slaughter() -> removes the least hungry animal

import { Animal } from "../day-3/03-animal"

class Farm {
    _animals: Animal[];
    _spaceForAnimals:number;

    constructor (spaceForAnimals:number) {
        this._spaceForAnimals = spaceForAnimals;
        this._animals = [];
    }

    breed () {
        if (this._animals.length < this._spaceForAnimals) {
            let animal = new Animal();
            this._animals.push(animal);
        } else {
            throw "There is no more space for another animal"
        }
    }

    slaughter () {
        let leastHungryAnimal:Animal = this._animals[0];
        let indexOfLeastHungryAnimal:number = 0;
        for (let i:number = 0; i < this._animals.length; i++) {
            if (this._animals[i].hungerLevel < leastHungryAnimal.hungerLevel) {
                leastHungryAnimal = this._animals[i];
                indexOfLeastHungryAnimal = i;
            }
        }
        this._animals.splice(indexOfLeastHungryAnimal, 1);
    }
}

let farm = new Farm(4);

farm.breed();
farm.breed();
farm.breed();
farm.breed();

farm._animals[0].eat(10);
farm._animals[1].eat(35);
farm._animals[2].eat(20);
farm._animals[3].eat(30);

console.log(farm);

farm.slaughter();

console.log(farm);