let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);


let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee1);

let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee2);

let vacant: {} = {};

console.log(vacant.toString());

class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
  const newVPoint = new VirtualPoint(13, 56);
  console.log(newVPoint); // logs "13, 56"