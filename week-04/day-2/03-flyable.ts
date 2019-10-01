export interface Flyable {
    land():void;
    fly():void;
    takeOff():void;
}
 export abstract class Vehicle {
    protected _name:string;
    protected _numberOfSeats:number;
    protected _color:string;

    constructor (numberOfSeats?:number, color?:string, name?:string) {
        this._name = name;
        if (numberOfSeats !== undefined) {
            this._numberOfSeats = numberOfSeats;
        } else {
            this._numberOfSeats = 2;
        }
        if (color !== undefined) {
            this._color = color;
        } else {
            this._color = 'white';
        }
    }
} 

class Helicopter extends Vehicle implements Flyable {
    constructor (numberOfSeats?:number, color?:string, name?:string) {
        super(numberOfSeats, color, 'Helicopter')
    }

    public land():void {
        console.log('The ' + this._color + ' ' + this._name + ' landed successfully!');
    }

    public fly ():void {
        console.log('The ' + this._color + ' ' + this._name + ' is currently flying.');
    }

    public takeOff ():void {
        console.log('The ' + this._color + ' ' + this._name + ' took of successfully!');
    }
}
