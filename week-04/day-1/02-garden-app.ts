export {}

class Garden {
    private _flowers:Flower[];
    private _trees:Tree[];

    constructor () {
        this._flowers = [];
        this._trees = [];
    }

    public addFlower (flower:Flower) {
        this._flowers.push(flower);
    }

    public addTree (tree:Tree) {
        this._trees.push(tree);
    }

    public reportWaterStatus () {
        this._flowers.forEach(e => e.reportWaterStatus());
        this._trees.forEach(e => e.reportWaterStatus());
    }

    public watering (waterAmount:number) {
        let waterPerPlant:number = waterAmount/(this._flowers.length + this._trees.length);
        this._flowers.forEach (e => e.watering(waterPerPlant));
        this._trees.forEach (e => e.watering(waterPerPlant));
    }
}

class Plant {
    protected _color:string;
    protected _waterLevel:number;
    protected _absorbAbility:number;
    protected _waterNeedLevel:number;

    constructor (color:string, waterLevel?:number) {
        if (waterLevel != undefined) {
            this._waterLevel = waterLevel;
        } else {
            this._waterLevel = 0;
        }
        this._color = color;
        this._absorbAbility = 0;
        this._waterNeedLevel = 0;
    }

    public absorbWater (waterAmount:number) {
        this._waterLevel += waterAmount * this._absorbAbility;
    }

    public doesItNeedWater ():boolean {
        if (this._waterLevel < this._waterNeedLevel) {
            return true;
        }
    }

    public reportWaterStatus () {
            if (this.doesItNeedWater()) {
                console.log('The ' + this._color + ' ' + this.constructor.name + ' needs water');
            } else {
                console.log('The ' + this._color + ' ' + this.constructor.name + ' doesnt need water');
            }
    }

    public watering (waterAmount:number) {
        if (this.doesItNeedWater()) {
            this.absorbWater(waterAmount);
        }
    }
}

class Flower extends Plant {
    constructor (color:string, waterLevel?:number) {
        super(color, waterLevel);
        this._absorbAbility = 0.75;
        this._waterNeedLevel = 5;
    }
}

class Tree extends Plant {
    constructor (color:string, waterLevel?:number) {
        super(color, waterLevel);
        this._absorbAbility = 0.4;
        this._waterNeedLevel = 10;
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

