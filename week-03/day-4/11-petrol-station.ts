// Create a Station and a Car classes
// Station
    // gasAmount
    // refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
    // gasAmount
    // capacity
    // create constructor for Car where:
        // initialize gasAmount -> 0
        // initialize capacity -> 100

class Station {
    _gasAmount:number;

    constructor (gasAmount) {
        this._gasAmount = gasAmount;
    }

    refill (car: Car) {
        while(car._gasAmount !== car._capacity){
            car._gasAmount += 1;
            this._gasAmount -= 1;
        }
    }
}

class Car {
    _gasAmount:number;
    _capacity:number;

    constructor () {
        this._gasAmount = 0;
        this._capacity = 100;
    }
}

let station = new Station(1000);
let car = new Car();

station.refill(car);

console.log(car._gasAmount);
console.log(station._gasAmount);