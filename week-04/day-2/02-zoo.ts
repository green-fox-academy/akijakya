export abstract class Animal {
    protected _name:string;
    protected _age:number;

	constructor(name:string, age?:number) {
        this._name = name;
        this._age = age;
	}

    public getName ():string {
        return this._name;
    }

    public abstract breed ():string;
}

export interface Breeder {
    breed ():string
}

export class Mammal extends Animal implements Breeder {
    protected _breedType:string;

    constructor (name:string, age?:number) {
        super (name, age);
        this._name = name;
        this._breedType = 'pushing miniature versions out.';
        if (age !== undefined) {
            this._age = age;
        } else {
            this._age = 0;
        }
    }

    public breed ():string {
        return this._breedType;
    }
}

export class Reptile extends Animal implements Breeder {
    protected _breedType:string;

    constructor (name:string, age?:number) {
        super (name, age);
        this._name = name;
        this._breedType = 'laying eggs.';
        if (age !== undefined) {
            this._age = age;
        } else {
            this._age = 0;
        }
    }

    public breed ():string {
        return this._breedType;
    }
}

export class Bird extends Animal implements Breeder {
    protected _breedType:string;

    constructor (name:string, age?:number) {
        super (name, age);
        this._name = name;
        this._breedType = 'laying eggs.';
        if (age !== undefined) {
            this._age = age;
        } else {
            this._age = 0;
        }
    }

    public breed ():string {
        return this._breedType;
    }
}