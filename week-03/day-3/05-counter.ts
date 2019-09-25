// Create a Counter class
    // which has an integer property
    // when creating it should have a default value 0 or we can specify it when creating
    // we can add(number) to increase the counter's value by a whole number
    // or we can add() without parameters just increasing the counter's value by one
    // and we can get() the current value as string
    // also we can reset() the value to the initial value

class Counter {
    private _integer:number;

    constructor(integer?:number) {
        if (integer) {
            this._integer = integer;
        } else {
            this._integer = 0;
        }
    }

    public add () {
        this._integer++;
    }

    public get get ():string {
        return this._integer.toString();
    }

    public reset () {
        this._integer = 0;
    }
}

// proofing its working
let count = new Counter();
count.add();
console.log (count.get);