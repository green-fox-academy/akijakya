export abstract class Instrument {
    protected _name:string;

	constructor(name:string) {
        this._name = name;
	}

    protected abstract specialIntroduction ():string;

    public play ():void {
        console.log(this._name + this.specialIntroduction());
    }
}

export abstract class StringedInstrument extends Instrument {
    public _numberOfStrings:number;


	constructor(name:string, numberOfStrings:number) {
        super(name);
        this._numberOfStrings = numberOfStrings;
	}

    protected abstract sound ():string;

    protected  specialIntroduction ():string {
        return ', a ' + this._numberOfStrings + '-stringed instrument that goes ' + this.sound();
    }
}

export class ElectricGuitar extends StringedInstrument {
    protected _sound:string;

    constructor (numberOfStrings?:number) {
        super('Electric Guitar', numberOfStrings);
        this._sound = 'Twang';
        if (numberOfStrings !== undefined) {
            this._numberOfStrings = numberOfStrings;
        } else {
            this._numberOfStrings = 6;
        }
    }

    public sound ():string {
        return this._sound;
    }
}

export class BassGuitar extends StringedInstrument {
    protected _sound:string;

    constructor (numberOfStrings?:number) {
        super('Bass Guitar', numberOfStrings);
        this._sound = 'Duum-duum-duum';
        if (numberOfStrings !== undefined) {
            this._numberOfStrings = numberOfStrings;
        } else {
            this._numberOfStrings = 4;
        }
    }

    public sound ():string {
        return this._sound;
    }
}

export class Violin extends StringedInstrument {
    protected _sound:string;

    constructor (numberOfStrings?:number) {
        super('Violin', numberOfStrings);
        this._sound = 'Screech';
        if (numberOfStrings !== undefined) {
            this._numberOfStrings = numberOfStrings;
        } else {
            this._numberOfStrings = 4;
        }
    }

    public sound ():string {
        return this._sound;
    }
}