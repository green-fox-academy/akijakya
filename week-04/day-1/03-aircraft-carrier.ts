export {}

class Aircraft {
    protected _ammo:number;
    protected _maxAmmo:number;
    protected _baseDamage:number;

	constructor() {
        this._ammo = 0;
        this._maxAmmo = 0;
        this._baseDamage = 0;
    }
    
    public fight ():number {
        let ammo:number = this._ammo;
        this._ammo = 0;
        return ammo*this._baseDamage;
    }

    public refill (ammoStorage:number):number {
        let ammoNeeded:number = this._maxAmmo - this._ammo;
        if (ammoStorage > ammoNeeded) {
            this._ammo += ammoNeeded;
            return ammoStorage - ammoNeeded;
        } else {
            this._ammo += ammoStorage;
            return 0;
        } 
    }

    public get getType():string {
        return this.constructor.name;
    }

    public getStatus ():string {
        return 'Type ' + this.getType + ', Ammo: ' + this._ammo + ', Base Damage: ' + this._baseDamage + ', All Damage: ' + this.fight();
    }
}

class F16 extends Aircraft {
    constructor () {
        super()
        this._maxAmmo = 8;
        this._baseDamage = 30;
    }
}

class F35 extends Aircraft {
    constructor () {
        super()
        this._maxAmmo = 12;
        this._baseDamage = 50;
    }
}

let f16 = new F16();
let f35 = new F35();
console.log(f16);
console.log(f35);
console.log(f16.fight());
console.log(f16);
