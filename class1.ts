function Person(this:any,ssn:string, firstName:string, lastName:string){
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let person= new (Person as any)('171-28-0926','John','Doe');
console.log(person.getFullName());

class Person1 {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1= new Person1('171-28-0926','John','Doe');
console.log(person.getFullName());
