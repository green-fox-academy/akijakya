import { Printable } from './../../week-04/day-2/04-printable'

class Domino implements Printable{
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    public printAllFields () {
        console.log(this.values.toString());
    }
}

export {Domino};

