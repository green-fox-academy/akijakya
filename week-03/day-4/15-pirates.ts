export class Pirate {
    _rumCount:number;
    _isPassedOut:boolean;
    _isDead:boolean;

    constructor () {
        this._rumCount = 0;
    }

    drinkSomeRum () {
        if (this._isPassedOut !== true && this._isDead !== true) {
            this._rumCount++;
        } else if (this._isPassedOut === true && this._isDead !== true) {
            console.log("He's passed out");
        } else {
            console.log("He's dead");
        }
    }

    howsItGoingMate () {
        if (this._rumCount < 5 && this._isDead !== true) {
            console.log("Pour me anudder!")
        } else if (this._rumCount === 5 && this._isDead !== true) {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this._isPassedOut = true;
        } else {
            console.log("He's dead");
        }
    }

    die () {
        this._isDead = true;
    }

    brawl (otherPirate:Pirate) {
        if (otherPirate._isDead !== true && this._isDead !== true) {
            let fight:number = Math.floor(Math.random()*3);
            switch (fight) {
                case 0:
                    this.die();
                    break;
                case 1:
                    otherPirate.die();
                    break;
                case 2:
                    this._isPassedOut = true;
                    otherPirate._isPassedOut = true;
                    break;
            }
        }
    }
}

export class Ship {
    _pirates: Pirate[];
    _captain: Pirate;

    constructor () {
        this._pirates = [];
    }

    fillShip () {
        this._captain = new Pirate;
        let pirateNumber = Math.floor(Math.random()*20);
        for (let i:number = 0; i < pirateNumber; i++) {
            let pirate = new Pirate;
            this._pirates.push(pirate);
        }
    }

    get captainStatus ():string {
        let status:string;
        if (this._captain._isDead !== true && this._captain._isPassedOut !== true) {
            status = 'alive.';
        } else if (this._captain._isDead !== true) {
            status = 'passed out.';
        } else {
            status = 'dead.';
        }
        return status;
    }

    get aliveNumber ():number {
        let number:number = 0;
        this._pirates.forEach (function (e) {
            if (e._isDead !== true) {
                number++;
            }
        });
        return number;
    }

    shipStatus () {
        console.log("The captain consumed " + this._captain._rumCount + " rum(s) so far, and is currently " + this.captainStatus);
        console.log("The number of pirates alive is: " + this.aliveNumber);
    }

    battle (otherShip:Ship):boolean {
        let thisScore:number = this.aliveNumber - this._captain._rumCount;
        let otherScore:number = otherShip.aliveNumber - otherShip._captain._rumCount;

        if (thisScore > otherScore) {
            let randomDeaths:number = Math.floor(Math.random()*otherShip.aliveNumber);
            for (let i:number = 0; i < randomDeaths; i++) {
                otherShip._pirates[i].die();
            }
            let randomDrinks:number = Math.floor(Math.random()*4);
            for (let i:number = 0; i < randomDrinks; i++) {
                this._captain.drinkSomeRum();
                for (let j:number = 0; j < this._pirates.length; j++) {
                    this._pirates[j].drinkSomeRum();
                }
            }
            return true;
        } else if (thisScore > otherScore) {
            let randomDeaths:number = Math.floor(Math.random()*this.aliveNumber);
            for (let i:number = 0; i < randomDeaths; i++) {
                this._pirates[i].die();
            }
            let randomDrinks:number = Math.floor(Math.random()*4);
            for (let i:number = 0; i < randomDrinks; i++) {
                otherShip._captain.drinkSomeRum();
                for (let j:number = 0; j < otherShip._pirates.length; j++) {
                    otherShip._pirates[j].drinkSomeRum();
                }
            }
            return false;
        } else {
            console.log("Its undecided, ready for another battle?");
        }
    }
}