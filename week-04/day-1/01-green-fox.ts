export {}

class Person {
    protected _name:string;
    protected _age:number;
    protected _gender:string;


	constructor(name?: string, age?: number, gender?: string) {
		if (name != undefined) {
            this._name = name;
        } else {
            this._name = 'Jane Doe';
        }

        if (age != undefined) {
            this._age = age;
        } else {
            this._age = 30;
        }

        if (gender != undefined) {
            this._gender = gender;
        } else {
            this._gender = 'female';
        }
	}

    protected specialIntroduce ():string {
        return '.';
    }
    
    public introduce ():void {
        console.log('Hi, I\'m ' + this._name + ', a ' + this._age + ' year old ' + this._gender + this.specialIntroduce());
    }

    protected specificGoal ():string {
        return 'Live for the moment!'
    }

    public getGoal ():void {
        console.log('My goal is: ' + this.specificGoal());
    }
}

class Student extends Person {
    private _previousOrganization:string;
    private _skippedDays:number;

    constructor (name?: string, age?: number, gender?: string, previousOrganization?:string) {
        super (name, age, gender);
        if (previousOrganization != undefined) {
            this._previousOrganization = previousOrganization;
            this._skippedDays = 0;
        } else {
            this._previousOrganization = 'The School of Life';
            this._skippedDays = 0;
        }
    }

    protected specificGoal ():string {
        return 'Be a junior software developer.';
    }

    protected specialIntroduce ():string {
        return ' from ' + this._previousOrganization + ' who skipped ' + this._skippedDays + ' days from the course already.';
    }

    public skipDays (numberOfDays:number) {
        this._skippedDays += numberOfDays;
    }
}

class Mentor extends Person {
    private _level:string;

    constructor (name?: string, age?: number, gender?: string, level?:string) {
        super (name, age, gender);
        if (level != undefined) {
            this._level = level;
        } else {
            this._level = 'intermediate';
        }
    }

    protected specificGoal ():string {
        return 'Educate brilliant junior software developers.';
    }

    protected specialIntroduce ():string {
        return ' ' + this._level + ' mentor.';
    }
}

class Sponsor extends Person {
    private _company:string;
    private _hiredStudents:number;

    constructor (name?: string, age?: number, gender?: string, company?:string) {
        super (name, age, gender);
        if (company != undefined) {
            this._company = company;
            this._hiredStudents = 0;
        } else {
            this._company = 'Google';
            this._hiredStudents = 0;
        }
    }

    protected specificGoal ():string {
        return 'Hire brilliant junior software developers.';
    }

    protected specialIntroduce ():string {
        return ' who represents ' + this._company + ' and hired ' + this._hiredStudents + ' students so far.';
    }

    public hire () {
        this._hiredStudents++;
    }
}

class Cohort {
    private _name:string;
    private _students:Student[];
    private _mentors:Mentor[];

    constructor (name:string) {
        this._name = name;
        this._students = [];
        this._mentors = [];
    }

    public addStudent (student:Student) {
        this._students.push(student);
    }

    public addMentor (mentor:Mentor) {
        this._mentors.push(mentor);
    }

    public info () {
        console.log('The ' + this._name + ' cohort has ' + this._students.length + ' students and ' + this._mentors.length + ' mentors.');
    }
}

// here comes the test input

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();