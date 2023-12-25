let name: string = 'John';
let age: number = 25;
let active: boolean = true;

console.log(`${name}  ${age} ${active}`)

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

console.log(names);

let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'John',
    age: 25
 }; 

 console.log(person);

 let greeting : (name: string) => string;

 greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(greeting("Igor"));

const greeting1= function (name: string):string {
    return `Hi ${name}`;
};

console.log(greeting1("Igor1"));

