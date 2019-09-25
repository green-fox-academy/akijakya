import { Thing } from './07-thing';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  printStatus () {
    this.things.forEach (function (e, i) {
        if (e.getCompleted()) {
            console.log(i+1 + '. [x] ' + e.getName());
        } else {
            console.log(i+1 + '. [ ] ' + e.getName());
        }
    }); 
  }
}

export { Fleet };

let toDo1 = new Thing('Get milk');
let toDo2 = new Thing('Remove the obstacles');
let toDo3 = new Thing('Stand up');
let toDo4 = new Thing('Eat lunch');

let fleet = new Fleet();
fleet.add(toDo1);
fleet.add(toDo2);
fleet.add(toDo3);
fleet.add(toDo4);

toDo3.complete();
toDo4.complete();

fleet.printStatus();