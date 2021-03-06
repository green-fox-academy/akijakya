// Create Sharpie class
    // We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
    // When creating one, we need to specify the color and the width
    // Every sharpie is created with a default 100 as inkAmount
    // We can use() the sharpie objects
    // which decreases inkAmount

export class Sharpie {
    _color:string;
    _width:number;
    _inkAmount:number;

    constructor (color:string, width:number) {
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }

    public use (amount:number) {
        return this._inkAmount -= amount;
    }
}