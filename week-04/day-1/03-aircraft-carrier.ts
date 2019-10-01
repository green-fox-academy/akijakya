export {}

abstract class Aircraft {
    protected _ammo:number;
    protected _maxAmmo:number;
    protected _baseDamage:number;

	constructor(ammo:number, maxAmmo:number, baseDamage:number) {
        this._ammo = ammo;
        this._maxAmmo = maxAmmo;
        this._baseDamage = baseDamage;
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

    public get getStatus ():string {
        return 'Type ' + this.getType + ', Ammo: ' + this._ammo + ', Base Damage: ' + this._baseDamage + ', All Damage: ' + this.fight();
    }

    public abstract isPriority ():boolean;
}

class F16 extends Aircraft {
    constructor (ammo?:number, maxAmmo?:number, baseDamage?:number) {
        super(0, 8, 30);
    }

    public isPriority ():boolean {
        return false;
    }
}

class F35 extends Aircraft {
    constructor (ammo?:number, maxAmmo?:number, baseDamage?:number) {
        super(0, 12, 50);
    }

    public isPriority ():boolean {
        return true;
    }
}

class Carrier {
    private _aircrafts:Aircraft [];
    private _ammoStorage:number;
    private _HP:number;

    constructor (ammoStorage:number) {
        this._aircrafts = [];
        this._ammoStorage = ammoStorage;
        this._HP = 5000;
    }

    public add (aircraft:Aircraft) {
        this._aircrafts.push(aircraft);
    }

    public fill () {
        // MEGCSINÁLNI
    }

    private get totalDamage():number {
        let totalDamage:number = 0; 
        this._aircrafts.forEach(function (e) {
            totalDamage += e.fight();
        });
        return totalDamage;
    }

    public get getStatus ():string {
        if (this._HP > 0) {
            return 'HP: ' + this._HP + ', Aircraft count: ' + this._aircrafts.length + ', Ammo Storage: ' + this._ammoStorage + ', Total damage: ' + this.totalDamage + '\nAircrafts:\n' + this._aircrafts.forEach(e => e.getStatus);
        } else {
            return 'It\'s dead Jim :('
        }
    }

    public fight (otherCarrier:Carrier) {
        otherCarrier._HP -= this.totalDamage;
        this._HP -= otherCarrier.totalDamage;
    }
}

let f16 = new F16();
let f35 = new F35();
console.log(f16.getStatus);
console.log(f35.getStatus);
console.log(f16.fight());
console.log(f16.getStatus);
