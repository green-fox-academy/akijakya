export {}

class Garden {
    private _plants:Plant[];

    constructor () {
        this._plants = [];
    }

    public addFlower (flower:Flower) {
        this._plants.push(flower);
    }

    public addTree (tree:Tree) {
        this._plants.push(tree);
    }

    public reportWaterStatus () {
        this._plants.forEach(e => e.reportWaterStatus());
    }

    private get howManyNeedsWater ():number {
        let plantsThatNeedWatering:number = 0;
        this._plants.forEach (function (e) {
            if (e.doesItNeedWater) {
                plantsThatNeedWatering++;
            }
        });
        return plantsThatNeedWatering;
    }

    public watering (waterAmount:number) {
        let waterPerPlant:number = waterAmount/this.howManyNeedsWater;
        this._plants.forEach (e => e.watering(waterPerPlant));
    }
}

class Plant {
    protected _color:string;
    protected _waterLevel:number;
    protected _absorbAbility:number;
    protected _waterNeedLevel:number;

    constructor (color:string, absorbAbility?:number, waterNeedLevel?:number, waterLevel?:number) {
        this._color = color;
        this._absorbAbility = absorbAbility;
        this._waterNeedLevel = waterNeedLevel;
        this._waterLevel = waterLevel;
    }

    public absorbWater (waterAmount:number) {
        this._waterLevel += waterAmount * this._absorbAbility;
    }

    public get doesItNeedWater ():boolean {
        if (this._waterLevel < this._waterNeedLevel) {
            return true;
        }
    }

    public reportWaterStatus () {
            if (this.doesItNeedWater) {
                console.log('The ' + this._color + ' ' + this.constructor.name + ' needs water');
            } else {
                console.log('The ' + this._color + ' ' + this.constructor.name + ' doesnt need water');
            }
    }

    public watering (waterAmount:number) {
        if (this.doesItNeedWater) {
            this.absorbWater(waterAmount);
        }
    }
}

class Flower extends Plant {
    constructor (color:string, absorbAbility?:number, waterNeedLevel?:number, waterLevel?:number) {
        super(color, 0.75, 5, 0);
    }
}

class Tree extends Plant {
    constructor (color:string, absorbAbility?:number, waterNeedLevel?:number, waterLevel?:number) {
        super(color, 0.4, 10, 0);
    }
}

let yf = new Flower ('yellow');
let bf = new Flower ('blue');
let pt = new Tree ('purple');
let ot = new Tree ('orange');

let garden = new Garden;

garden.addFlower(yf);
garden.addFlower(bf);
garden.addTree(pt);
garden.addTree(ot);

garden.reportWaterStatus();

console.log('\nWatering with 40');
garden.watering(40);
garden.reportWaterStatus();

console.log('\nWatering with 70');
garden.watering(70);

garden.reportWaterStatus();