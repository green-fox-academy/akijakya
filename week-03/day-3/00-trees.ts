/*
//creating trees the old way:

let tree1 = {
    'type': 'oak',
    'leaf color': 'green',
    'age': 64,
    'sex': 'male'
}

let tree2 = {
    'type': 'pine',
    'leaf color': 'green',
    'age': 145,
    'sex': 'male'
}

let tree3 = {
    'type': 'apple',
    'leaf color': 'yellow',
    'age': 34,
    'sex': 'female'
}

let tree4 = {
    'type': 'oak',
    'leaf color': 'red',
    'age': 39,
    'sex': 'female'
}

let tree5 = {
    'type': 'pine',
    'leaf color': 'green',
    'age': 11,
    'sex': 'male'
}
*/

// creating trees with class:

class Tree {
    _type:string;
    _leafColor:string;
    _age:number;
    _sex:string;

    constructor (type:string, leafColor:string, age:number, sex:string) {
        this._type = type;
        this._leafColor = leafColor;
        this._age = age;
        this._sex = sex;
    }
}

let tree1 = new Tree('oak', 'green', 64, 'male');
let tree2 = new Tree('pine', 'green', 145, 'male');
let tree3 = new Tree('apple', 'yellow', 34, 'female');
let tree4 = new Tree('oak', 'red', 39, 'female');
let tree5 = new Tree('pine', 'green', 11, 'male');