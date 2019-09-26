// Reuse your Sharpie class
// Create SharpieSet class
    // it contains a list of Sharpie
    // countUsable() -> sharpie is usable if it has ink in it
    // removeTrash() -> removes all unusable sharpies

import { Sharpie } from "../day-3/04-sharpie"

class SharpieSet {
    _sharpies: Sharpie[];

    constructor() {
        this._sharpies = [];
    }

    add (sharpie: Sharpie): void {
        this._sharpies.push(sharpie);
    }

    get countUsable () {
        let usable:number = 0;
        this._sharpies.forEach (function (e) {
            if (e._inkAmount !== 0) {
                usable++;
            }
        });
        return usable;
    }

    removeTrash () {
        for (let i:number = 0; i < this._sharpies.length; i++) {
            if (this._sharpies[i]._inkAmount === 0) {
                this._sharpies.splice(i, 1);
            }
        }
    }
}


let greenSharpie = new Sharpie ('green', 2);
let blueSharpie = new Sharpie ('blue', 2);
let redSharpie = new Sharpie ('red', 3);

let sharpieSet = new SharpieSet();
sharpieSet.add(greenSharpie);
sharpieSet.add(blueSharpie);
sharpieSet.add(redSharpie);

blueSharpie.use(100);

console.log(sharpieSet._sharpies);
console.log(sharpieSet.countUsable);

sharpieSet.removeTrash();
console.log(sharpieSet._sharpies);
